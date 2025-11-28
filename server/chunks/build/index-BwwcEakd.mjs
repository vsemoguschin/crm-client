import { _ as _sfc_main$2 } from './Sidebar-ClYzRSuC.mjs';
import { _ as _sfc_main$3 } from './Input-DoHPrX2-.mjs';
import { _ as _sfc_main$2$1, a as _sfc_main$4, b as _sfc_main$1$1 } from './TabsList-C3eBcFGa.mjs';
import { _ as _sfc_main$5 } from './TabsContent-9LTM_IKf.mjs';
import { _ as _sfc_main$6 } from './Card-D2-UPrX8.mjs';
import { _ as _sfc_main$1$2, a as _sfc_main$8 } from './CardTitle-Dyaq6zaM.mjs';
import { _ as _sfc_main$7 } from './CardDescription-CwDlX6V_.mjs';
import { _ as _sfc_main$9 } from './CardContent-5uJgHkPl.mjs';
import { _ as _sfc_main$d } from './CardFooter-BUlih3MF.mjs';
import { _ as _sfc_main$a } from './Label-Bxzolydd.mjs';
import { _ as _sfc_main$b } from './ComboboxModels-D84YuqHH.mjs';
import { _ as _sfc_main$c } from './index-B6vrBiru.mjs';
import { _ as _sfc_main$5$1, a as _sfc_main$e, b as _sfc_main$2$2, c as _sfc_main$1$3, d as _sfc_main$4$1, e as _sfc_main$3$1 } from './TableHeader-CsCuT7pu.mjs';
import { defineComponent, ref, watch, mergeProps, unref, isRef, withCtx, createTextVNode, toDisplayString, createBlock, openBlock, Fragment, renderList, createVNode, createCommentVNode, h, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { v as valueUpdater } from './utils-TCWotVPY.mjs';
import { useVueTable, getFilteredRowModel, getSortedRowModel, getCoreRowModel, FlexRender } from '@tanstack/vue-table';
import { u as useMyFormatPrice } from './useMyFormatPrice-CCAsFuev.mjs';
import { ArrowUpDown } from 'lucide-vue-next';
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
import './PopoverContent-Dy99cMmu.mjs';
import './CommandList-DiM7UR93.mjs';
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

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "DataTable",
  __ssrInlineRender: true,
  props: {
    columns: {},
    data: {}
  },
  emits: ["pay", "delete-item"],
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
        }
      },
      meta: {
        pay: (item) => pay(item),
        delete: (item) => deleteItem(item)
      }
    });
    const emit = __emit;
    const pay = async (item) => {
      console.log(item);
      emit("pay", item);
    };
    const deleteItem = (item) => {
      console.log(item);
      emit("delete-item", item);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiTable = _sfc_main$5$1;
      const _component_UiTableHeader = _sfc_main$e;
      const _component_UiTableRow = _sfc_main$2$2;
      const _component_UiTableHead = _sfc_main$1$3;
      const _component_UiTableBody = _sfc_main$4$1;
      const _component_UiTableCell = _sfc_main$3$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-slate-100" }, _attrs))}>`);
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
      _push(`</div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/my/pays/DataTable.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const paysColumns = [
  // Пользователь
  {
    accessorKey: "fullName",
    ruName: "\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C",
    header: ({ column }) => {
      return h(
        _sfc_main$c,
        {
          variant: "ghost",
          onClick: () => column.toggleSorting(column.getIsSorted() === "asc"),
          class: "text-center h-full w-full"
        },
        () => ["\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C", h(ArrowUpDown, { class: "ml-2 h-4 w-4" })]
      );
    },
    cell: ({ row }) => h("div", { class: "text-left" }, row.getValue("fullName")),
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    }
  },
  // Должность
  {
    accessorKey: "role",
    ruName: "\u0414\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u044C",
    header: ({ column }) => {
      return h(
        _sfc_main$c,
        {
          variant: "ghost",
          onClick: () => column.toggleSorting(column.getIsSorted() === "asc"),
          class: "text-center h-full w-full"
        },
        () => ["\u0414\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u044C", h(ArrowUpDown, { class: "ml-2 h-4 w-4" })]
      );
    },
    cell: ({ row }) => h("div", { class: "text-center whitespace-nowrap" }, row.getValue("role")),
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    }
  },
  // Дата выплаты
  {
    accessorKey: "date",
    ruName: "\u0414\u0430\u0442\u0430 \u0432\u044B\u043F\u043B\u0430\u0442\u044B",
    header: ({ column }) => {
      return h(
        _sfc_main$c,
        {
          variant: "ghost",
          onClick: () => column.toggleSorting(column.getIsSorted() === "asc"),
          class: "text-center h-full w-full"
        },
        () => ["\u0414\u0430\u0442\u0430 \u0432\u044B\u043F\u043B\u0430\u0442\u044B", h(ArrowUpDown, { class: "ml-2 h-4 w-4" })]
      );
    },
    cell: ({ row, table }) => {
      const date = row.original.date;
      const item = row.original;
      if (date) {
        return h("div", { class: "text-center" }, date);
      } else {
        return h(
          "div",
          { class: "text-center" },
          h(
            _sfc_main$c,
            {
              class: "h-5 px-1 mx-auto",
              item,
              onClick: () => {
                var _a;
                return (_a = table.options.meta) == null ? void 0 : _a.pay(item);
              }
            },
            () => "\u0412\u044B\u043F\u043B\u0430\u0442\u0438\u0442\u044C"
            // Используем функцию вместо статической строки
          )
        );
      }
    }
  },
  // Сумма
  {
    accessorKey: "price",
    ruName: "\u0421\u0443\u043C\u043C\u0430",
    header: ({ column }) => {
      return h(
        _sfc_main$c,
        {
          variant: "ghost",
          onClick: () => column.toggleSorting(column.getIsSorted() === "asc"),
          class: "text-center h-full w-full"
        },
        () => ["\u0421\u0443\u043C\u043C\u0430", h(ArrowUpDown, { class: "ml-2 h-4 w-4" })]
      );
    },
    cell: ({ row }) => h("div", { class: "text-center" }, `${useMyFormatPrice(row.getValue("price"))} \u20BD`)
  },
  // // Статус
  // {
  //   accessorKey: 'status',
  //   ruName: 'Статус',
  //   header: ({ column }) => {
  //     return h(
  //       Button,
  //       {
  //         variant: 'ghost',
  //         onClick: () => column.toggleSorting(column.getIsSorted() === 'asc'),
  //         class: 'text-center h-full w-full',
  //       },
  //       () => ['Статус', h(ArrowUpDown, { class: 'ml-2 h-4 w-4' })]
  //     );
  //   },
  //   cell: ({ row }) => {
  //     return h('div', { class: 'text-center' }, row.getValue('status'));
  //   },
  //   filterFn: (row, id, value) => {
  //     return value.includes(row.getValue(id));
  //   },
  // },
  // Период
  // {
  //   accessorKey: 'period',
  //   ruName: 'Период',
  //   header: ({ column }) => {
  //     return h(
  //       Button,
  //       {
  //         variant: 'ghost',
  //         onClick: () => column.toggleSorting(column.getIsSorted() === 'asc'),
  //         class: 'text-center h-full w-full',
  //       },
  //       () => ['Период', h(ArrowUpDown, { class: 'ml-2 h-4 w-4' })]
  //     );
  //   },
  //   cell: ({ row }) =>
  //     h('div', { class: 'text-center' }, row.getValue('period') || '-'),
  // },
  // кнопка удалить
  {
    accessorKey: "action",
    ruName: "\u0414\u0435\u0439\u0441\u0442\u0432\u0438\u044F",
    header: ({ column }) => {
      return h(
        _sfc_main$c,
        {
          variant: "ghost",
          onClick: () => column.toggleSorting(column.getIsSorted() === "asc"),
          class: "text-center h-full w-full"
        },
        () => ["\u0414\u0435\u0439\u0441\u0442\u0432\u0438\u044F", h(ArrowUpDown, { class: "ml-2 h-4 w-4" })]
      );
    },
    cell: ({ row, table }) => {
      const item = row.original;
      return h(
        "div",
        { class: "text-center" },
        h(
          _sfc_main$c,
          {
            class: "h-5 px-1 mx-auto",
            item,
            onClick: () => {
              var _a;
              return (_a = table.options.meta) == null ? void 0 : _a.delete(item);
            }
          },
          () => "\u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C"
          // Используем функцию вместо статической строки
        )
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
      title: "\u0412\u044B\u043F\u043B\u0430\u0442\u044B | Easy CRM"
    });
    const period = ref(
      (/* @__PURE__ */ new Date()).toISOString().slice(0, 7)
      //'этот месяц'
      //   '2025-02'
    );
    const newPayBlank = ref({
      userId: 0,
      price: 0
    });
    const disabled = ref(true);
    const workSpaces = ref([
      {
        id: 1,
        title: "\u0412\u041A",
        pays: [
          {
            id: 1,
            fullName: "\u0418\u0432\u0430\u043D \u0418\u0432\u0430\u043D\u043E\u0432",
            userId: 101,
            price: 12e3,
            date: "",
            status: "\u0412\u044B\u043F\u043B\u0430\u0447\u0435\u043D\u043E",
            period: "2023-10"
          },
          {
            id: 2,
            fullName: "\u041F\u0435\u0442\u0440 \u041F\u0435\u0442\u0440\u043E\u0432",
            userId: 102,
            price: 15e3,
            date: "2023-10-02",
            status: "\u0421\u043E\u0437\u0434\u0430\u043D\u043E",
            period: "2023-10"
          },
          {
            id: 3,
            fullName: "\u0410\u043D\u043D\u0430 \u0421\u043C\u0438\u0440\u043D\u043E\u0432\u0430",
            userId: 103,
            price: 14e3,
            date: "",
            status: "\u0412\u044B\u043F\u043B\u0430\u0447\u0435\u043D\u043E",
            period: "2023-10"
          },
          {
            id: 4,
            fullName: "\u041E\u043B\u044C\u0433\u0430 \u041A\u0443\u0437\u043D\u0435\u0446\u043E\u0432\u0430",
            userId: 104,
            price: 13e3,
            date: "2023-10-04",
            status: "\u0421\u043E\u0437\u0434\u0430\u043D\u043E",
            period: "2023-10"
          },
          {
            id: 5,
            fullName: "\u0412\u0430\u0441\u0438\u043B\u0438\u0439 \u0412\u0430\u0441\u0438\u043B\u044C\u0435\u0432",
            userId: 105,
            price: 11e3,
            date: "",
            status: "\u0421\u043E\u0437\u0434\u0430\u043D\u043E",
            period: "2023-10"
          },
          {
            id: 6,
            fullName: "\u0415\u043A\u0430\u0442\u0435\u0440\u0438\u043D\u0430 \u0424\u0435\u0434\u043E\u0440\u043E\u0432\u0430",
            userId: 106,
            price: 12500,
            date: "2023-10-06",
            status: "\u0412\u044B\u043F\u043B\u0430\u0447\u0435\u043D\u043E",
            period: "2023-10"
          },
          {
            id: 7,
            fullName: "\u041D\u0438\u043A\u043E\u043B\u0430\u0439 \u041D\u0438\u043A\u043E\u043B\u0430\u0435\u0432",
            userId: 107,
            price: 13500,
            date: "",
            status: "\u0421\u043E\u0437\u0434\u0430\u043D\u043E",
            period: "2023-10"
          },
          {
            id: 8,
            fullName: "\u041C\u0430\u0440\u0438\u043D\u0430 \u041C\u043E\u0440\u043E\u0437\u043E\u0432\u0430",
            userId: 108,
            price: 14500,
            date: "2023-10-08",
            status: "\u0412\u044B\u043F\u043B\u0430\u0447\u0435\u043D\u043E",
            period: "2023-10"
          },
          {
            id: 9,
            fullName: "\u0410\u043B\u0435\u043A\u0441\u0430\u043D\u0434\u0440 \u0410\u043B\u0435\u043A\u0441\u0430\u043D\u0434\u0440\u043E\u0432",
            userId: 109,
            price: 15500,
            date: "",
            status: "\u0421\u043E\u0437\u0434\u0430\u043D\u043E",
            period: "2023-10"
          },
          {
            id: 10,
            fullName: "\u042E\u043B\u0438\u044F \u042E\u0440\u044C\u0435\u0432\u0430",
            userId: 110,
            price: 16500,
            date: "2023-10-10",
            status: "\u0412\u044B\u043F\u043B\u0430\u0447\u0435\u043D\u043E",
            period: "2023-10"
          }
        ],
        users: [
          { id: 101, fullName: "\u0418\u0432\u0430\u043D \u0418\u0432\u0430\u043D\u043E\u0432" },
          { id: 102, fullName: "\u041F\u0435\u0442\u0440 \u041F\u0435\u0442\u0440\u043E\u0432" },
          { id: 103, fullName: "\u0410\u043D\u043D\u0430 \u0421\u043C\u0438\u0440\u043D\u043E\u0432\u0430" },
          { id: 104, fullName: "\u041E\u043B\u044C\u0433\u0430 \u041A\u0443\u0437\u043D\u0435\u0446\u043E\u0432\u0430" },
          { id: 105, fullName: "\u0412\u0430\u0441\u0438\u043B\u0438\u0439 \u0412\u0430\u0441\u0438\u043B\u044C\u0435\u0432" },
          { id: 106, fullName: "\u0415\u043A\u0430\u0442\u0435\u0440\u0438\u043D\u0430 \u0424\u0435\u0434\u043E\u0440\u043E\u0432\u0430" },
          { id: 107, fullName: "\u041D\u0438\u043A\u043E\u043B\u0430\u0439 \u041D\u0438\u043A\u043E\u043B\u0430\u0435\u0432" },
          { id: 108, fullName: "\u041C\u0430\u0440\u0438\u043D\u0430 \u041C\u043E\u0440\u043E\u0437\u043E\u0432\u0430" },
          { id: 109, fullName: "\u0410\u043B\u0435\u043A\u0441\u0430\u043D\u0434\u0440 \u0410\u043B\u0435\u043A\u0441\u0430\u043D\u0434\u0440\u043E\u0432" },
          { id: 110, fullName: "\u042E\u043B\u0438\u044F \u042E\u0440\u044C\u0435\u0432\u0430" }
        ],
        totals: [
          {
            title: "\u0412\u044B\u043F\u043B\u0430\u0447\u0435\u043D\u043E",
            value: 1e5
          },
          {
            title: "\u041E\u0441\u0442\u0430\u0442\u043E\u043A",
            value: 5e4
          }
        ]
      },
      {
        id: 2,
        title: "B2B",
        pays: [
          {
            id: 11,
            fullName: "\u0421\u0435\u0440\u0433\u0435\u0439 \u0421\u0435\u0440\u0433\u0435\u0435\u0432",
            userId: 201,
            price: 18e3,
            date: "2023-10-05",
            status: "\u0412\u044B\u043F\u043B\u0430\u0447\u0435\u043D\u043E",
            period: "2023-10"
          },
          {
            id: 12,
            fullName: "\u0410\u043B\u0435\u043A\u0441\u0435\u0439 \u0410\u043B\u0435\u043A\u0441\u0435\u0435\u0432",
            userId: 202,
            price: 2e4,
            date: "2023-10-06",
            status: "\u0421\u043E\u0437\u0434\u0430\u043D\u043E",
            period: "2023-10"
          },
          {
            id: 13,
            fullName: "\u041C\u0430\u0440\u0438\u044F \u0418\u0432\u0430\u043D\u043E\u0432\u0430",
            userId: 203,
            price: 17e3,
            date: "",
            status: "\u0412\u044B\u043F\u043B\u0430\u0447\u0435\u043D\u043E",
            period: "2023-10"
          },
          {
            id: 14,
            fullName: "\u0414\u043C\u0438\u0442\u0440\u0438\u0439 \u0421\u043E\u043A\u043E\u043B\u043E\u0432",
            userId: 204,
            price: 16e3,
            date: "2023-10-08",
            status: "\u0421\u043E\u0437\u0434\u0430\u043D\u043E",
            period: "2023-10"
          },
          {
            id: 15,
            fullName: "\u041E\u043A\u0441\u0430\u043D\u0430 \u041E\u043A\u0441\u0430\u043D\u043E\u0432\u0430",
            userId: 205,
            price: 19e3,
            date: "",
            status: "\u0421\u043E\u0437\u0434\u0430\u043D\u043E",
            period: "2023-10"
          },
          {
            id: 16,
            fullName: "\u0413\u0440\u0438\u0433\u043E\u0440\u0438\u0439 \u0413\u0440\u0438\u0433\u043E\u0440\u044C\u0435\u0432",
            userId: 206,
            price: 21e3,
            date: "2023-10-10",
            status: "\u0412\u044B\u043F\u043B\u0430\u0447\u0435\u043D\u043E",
            period: "2023-10"
          },
          {
            id: 17,
            fullName: "\u0415\u043B\u0435\u043D\u0430 \u0415\u043B\u0435\u043D\u043E\u0432\u0430",
            userId: 207,
            price: 22e3,
            date: "",
            status: "\u0421\u043E\u0437\u0434\u0430\u043D\u043E",
            period: "2023-10"
          },
          {
            id: 18,
            fullName: "\u041C\u0430\u043A\u0441\u0438\u043C \u041C\u0430\u043A\u0441\u0438\u043C\u043E\u0432",
            userId: 208,
            price: 23e3,
            date: "2023-10-12",
            status: "\u0412\u044B\u043F\u043B\u0430\u0447\u0435\u043D\u043E",
            period: "2023-10"
          },
          {
            id: 19,
            fullName: "\u0422\u0430\u0442\u044C\u044F\u043D\u0430 \u0422\u0430\u0442\u044C\u044F\u043D\u043E\u0432\u0430",
            userId: 209,
            price: 24e3,
            date: "",
            status: "\u0421\u043E\u0437\u0434\u0430\u043D\u043E",
            period: "2023-10"
          },
          {
            id: 20,
            fullName: "\u0418\u0433\u043E\u0440\u044C \u0418\u0433\u043E\u0440\u0435\u0432",
            userId: 210,
            price: 25e3,
            date: "2023-10-14",
            status: "\u0412\u044B\u043F\u043B\u0430\u0447\u0435\u043D\u043E",
            period: "2023-10"
          }
        ],
        users: [
          { id: 201, fullName: "\u0421\u0435\u0440\u0433\u0435\u0439 \u0421\u0435\u0440\u0433\u0435\u0435\u0432" },
          { id: 202, fullName: "\u0410\u043B\u0435\u043A\u0441\u0435\u0439 \u0410\u043B\u0435\u043A\u0441\u0435\u0435\u0432" },
          { id: 203, fullName: "\u041C\u0430\u0440\u0438\u044F \u0418\u0432\u0430\u043D\u043E\u0432\u0430" },
          { id: 204, fullName: "\u0414\u043C\u0438\u0442\u0440\u0438\u0439 \u0421\u043E\u043A\u043E\u043B\u043E\u0432" },
          { id: 205, fullName: "\u041E\u043A\u0441\u0430\u043D\u0430 \u041E\u043A\u0441\u0430\u043D\u043E\u0432\u0430" },
          { id: 206, fullName: "\u0413\u0440\u0438\u0433\u043E\u0440\u0438\u0439 \u0413\u0440\u0438\u0433\u043E\u0440\u044C\u0435\u0432" },
          { id: 207, fullName: "\u0415\u043B\u0435\u043D\u0430 \u0415\u043B\u0435\u043D\u043E\u0432\u0430" },
          { id: 208, fullName: "\u041C\u0430\u043A\u0441\u0438\u043C \u041C\u0430\u043A\u0441\u0438\u043C\u043E\u0432" },
          { id: 209, fullName: "\u0422\u0430\u0442\u044C\u044F\u043D\u0430 \u0422\u0430\u0442\u044C\u044F\u043D\u043E\u0432\u0430" },
          { id: 210, fullName: "\u0418\u0433\u043E\u0440\u044C \u0418\u0433\u043E\u0440\u0435\u0432" }
        ],
        totals: [
          {
            title: "\u0412\u044B\u043F\u043B\u0430\u0447\u0435\u043D\u043E",
            value: 15e4
          },
          {
            title: "\u041E\u0441\u0442\u0430\u0442\u043E\u043A",
            value: 75e3
          }
        ]
      }
    ]);
    const curWorkspaceId = ref(workSpaces.value[0].id);
    const getDatas = async () => {
      const { data } = await $useApi.get("dashboards/pays", {
        params: {
          period: period.value
        }
      });
      workSpaces.value = data;
    };
    const createPay = async () => {
      try {
        await $useApi.post("/salary-pay/", {
          period: period.value,
          ...newPayBlank.value
        });
        console.log("pay set");
        getDatas();
      } catch (error) {
        console.log(error);
      }
    };
    const deleteItem = async (item) => {
      try {
        await $useApi.delete("/salary-pay/" + item.id);
        console.log("pay deleted");
        getDatas();
      } catch (error) {
        console.log(error);
      }
    };
    const pay = async (item) => {
      try {
        await $useApi.patch(`/salary-pay/${item.id}/status`, {
          status: "\u0412\u044B\u043F\u043B\u0430\u0447\u0435\u043D\u0430"
        });
        console.log("pay set");
        getDatas();
      } catch (error) {
        console.log(error);
      }
    };
    watch(
      newPayBlank,
      async () => {
        const { price, userId } = newPayBlank.value;
        if (price && userId) {
          disabled.value = false;
        } else {
          disabled.value = true;
        }
      },
      { deep: true }
    );
    watch(curWorkspaceId, () => {
      newPayBlank.value.userId = 0;
      newPayBlank.value.price = 0;
      disabled.value = true;
    });
    watch(period, () => {
      getDatas();
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_LayoutSidebar = _sfc_main$2;
      const _component_UiInput = _sfc_main$3;
      const _component_UiTabs = _sfc_main$2$1;
      const _component_UiTabsList = _sfc_main$4;
      const _component_UiTabsTrigger = _sfc_main$1$1;
      const _component_UiTabsContent = _sfc_main$5;
      const _component_UiCard = _sfc_main$6;
      const _component_UiCardHeader = _sfc_main$1$2;
      const _component_UiCardDescription = _sfc_main$7;
      const _component_UiCardTitle = _sfc_main$8;
      const _component_UiCardContent = _sfc_main$9;
      const _component_UiLabel = _sfc_main$a;
      const _component_MyComboboxModels = _sfc_main$b;
      const _component_UiButton = _sfc_main$c;
      const _component_UiCardFooter = _sfc_main$d;
      const _component_MyPaysDataTable = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative h-screen hidden-scrollbar" }, _attrs))}><div class="w-full fixed z-10">`);
      _push(ssrRenderComponent(_component_LayoutSidebar, null, null, _parent));
      _push(`</div><div class="h-full flex flex-col p-4 gap-2 mx-[auto] max-w-[2048px] pt-16 min-w-[1024px]"><div class="flex flex-col gap-2"><div class="flex gap-2">`);
      _push(ssrRenderComponent(_component_UiInput, {
        modelValue: unref(period),
        "onUpdate:modelValue": ($event) => isRef(period) ? period.value = $event : null,
        type: "month",
        class: "w-[180px]"
      }, null, _parent));
      _push(`<h1 class="text-3xl font-semibold">\u0412\u044B\u043F\u043B\u0430\u0442\u044B</h1></div></div><div class="flex gap-2 w-full h-full">`);
      _push(ssrRenderComponent(_component_UiTabs, {
        modelValue: unref(curWorkspaceId),
        "onUpdate:modelValue": ($event) => isRef(curWorkspaceId) ? curWorkspaceId.value = $event : null,
        class: "w-full"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UiTabsList, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(unref(workSpaces), (workSpace) => {
                    _push3(`<div${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_UiTabsTrigger, {
                      value: workSpace.id
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate(workSpace.title)}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(workSpace.title), 1)
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
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(workSpaces), (workSpace) => {
                      return openBlock(), createBlock("div", {
                        key: workSpace.id
                      }, [
                        createVNode(_component_UiTabsTrigger, {
                          value: workSpace.id
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(workSpace.title), 1)
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
            _push2(`<!--[-->`);
            ssrRenderList(unref(workSpaces), (workSpace) => {
              _push2(`<div class="w-full"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UiTabsContent, {
                value: workSpace.id
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="flex gap-2 w-full"${_scopeId2}><div class="min-w-[250px]"${_scopeId2}><div class="flex flex-col gap-1 mb-2"${_scopeId2}><!--[-->`);
                    ssrRenderList(workSpace.totals, (item) => {
                      _push3(ssrRenderComponent(_component_UiCard, {
                        key: item.title,
                        class: "min-w-[150px] grow"
                      }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(ssrRenderComponent(_component_UiCardHeader, { class: "p-3 pb-2" }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(ssrRenderComponent(_component_UiCardDescription, null, {
                                    default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        _push6(`${ssrInterpolate(item.title)}`);
                                      } else {
                                        return [
                                          createTextVNode(toDisplayString(item.title), 1)
                                        ];
                                      }
                                    }),
                                    _: 2
                                  }, _parent5, _scopeId4));
                                  _push5(ssrRenderComponent(_component_UiCardTitle, { class: "text-3xl font-semibold whitespace-nowrap" }, {
                                    default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        _push6(`${ssrInterpolate(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(item.value) + "\u20BD")}`);
                                      } else {
                                        return [
                                          createTextVNode(toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(item.value) + "\u20BD"), 1)
                                        ];
                                      }
                                    }),
                                    _: 2
                                  }, _parent5, _scopeId4));
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
                                        createTextVNode(toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(item.value) + "\u20BD"), 1)
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
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
                                      createTextVNode(toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(item.value) + "\u20BD"), 1)
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
                      }, _parent3, _scopeId2));
                    });
                    _push3(`<!--]--></div>`);
                    _push3(ssrRenderComponent(_component_UiCard, null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_UiCardHeader, null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_UiCardTitle, null, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(` \u0421\u043E\u0437\u0434\u0430\u0442\u044C \u0432\u044B\u043F\u043B\u0430\u0442\u0443 `);
                                    } else {
                                      return [
                                        createTextVNode(" \u0421\u043E\u0437\u0434\u0430\u0442\u044C \u0432\u044B\u043F\u043B\u0430\u0442\u0443 ")
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                                _push5(ssrRenderComponent(_component_UiCardDescription, null, null, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(_component_UiCardTitle, null, {
                                    default: withCtx(() => [
                                      createTextVNode(" \u0421\u043E\u0437\u0434\u0430\u0442\u044C \u0432\u044B\u043F\u043B\u0430\u0442\u0443 ")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_UiCardDescription)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_component_UiCardContent, null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<div class="flex flex-col gap-5"${_scopeId4}><div class="relative w-full"${_scopeId4}>`);
                                if (unref(newPayBlank).userId !== 0) {
                                  _push5(ssrRenderComponent(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                                    default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        _push6(`\u0421\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A`);
                                      } else {
                                        return [
                                          createTextVNode("\u0421\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A")
                                        ];
                                      }
                                    }),
                                    _: 2
                                  }, _parent5, _scopeId4));
                                } else {
                                  _push5(`<!---->`);
                                }
                                _push5(`<div class="flex gap-2"${_scopeId4}>`);
                                _push5(ssrRenderComponent(_component_MyComboboxModels, {
                                  items: workSpace.users.map((u) => ({
                                    value: u.id,
                                    label: u.fullName
                                  })),
                                  class: "w-full",
                                  label: "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0430",
                                  onSelectedItem: (value) => {
                                    unref(newPayBlank).userId = value;
                                  }
                                }, null, _parent5, _scopeId4));
                                _push5(`</div></div><div class="relative"${_scopeId4}>`);
                                _push5(ssrRenderComponent(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`\u0421\u0443\u043C\u043C\u0430`);
                                    } else {
                                      return [
                                        createTextVNode("\u0421\u0443\u043C\u043C\u0430")
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                                _push5(`<div class="flex gap-2"${_scopeId4}>`);
                                _push5(ssrRenderComponent(_component_UiInput, {
                                  modelValue: unref(newPayBlank).price,
                                  "onUpdate:modelValue": ($event) => unref(newPayBlank).price = $event,
                                  placeholder: "\u0421\u0443\u043C\u043C\u0430",
                                  type: "number",
                                  class: unref(newPayBlank).price ? "" : "outline-1 outline-rose-300"
                                }, null, _parent5, _scopeId4));
                                _push5(`</div></div>`);
                                _push5(ssrRenderComponent(_component_UiButton, {
                                  disabled: unref(disabled),
                                  onClick: createPay
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(` \u0421\u043E\u0437\u0434\u0430\u0442\u044C `);
                                    } else {
                                      return [
                                        createTextVNode(" \u0421\u043E\u0437\u0434\u0430\u0442\u044C ")
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                                _push5(`</div>`);
                              } else {
                                return [
                                  createVNode("div", { class: "flex flex-col gap-5" }, [
                                    createVNode("div", { class: "relative w-full" }, [
                                      unref(newPayBlank).userId !== 0 ? (openBlock(), createBlock(_component_UiLabel, {
                                        key: 0,
                                        class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode("\u0421\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A")
                                        ]),
                                        _: 1
                                      })) : createCommentVNode("", true),
                                      createVNode("div", { class: "flex gap-2" }, [
                                        createVNode(_component_MyComboboxModels, {
                                          items: workSpace.users.map((u) => ({
                                            value: u.id,
                                            label: u.fullName
                                          })),
                                          class: "w-full",
                                          label: "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0430",
                                          onSelectedItem: (value) => {
                                            unref(newPayBlank).userId = value;
                                          }
                                        }, null, 8, ["items", "onSelectedItem"])
                                      ])
                                    ]),
                                    createVNode("div", { class: "relative" }, [
                                      createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                                        default: withCtx(() => [
                                          createTextVNode("\u0421\u0443\u043C\u043C\u0430")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode("div", { class: "flex gap-2" }, [
                                        createVNode(_component_UiInput, {
                                          modelValue: unref(newPayBlank).price,
                                          "onUpdate:modelValue": ($event) => unref(newPayBlank).price = $event,
                                          placeholder: "\u0421\u0443\u043C\u043C\u0430",
                                          type: "number",
                                          class: unref(newPayBlank).price ? "" : "outline-1 outline-rose-300"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "class"])
                                      ])
                                    ]),
                                    createVNode(_component_UiButton, {
                                      disabled: unref(disabled),
                                      onClick: createPay
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" \u0421\u043E\u0437\u0434\u0430\u0442\u044C ")
                                      ]),
                                      _: 1
                                    }, 8, ["disabled"])
                                  ])
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_component_UiCardFooter, null, null, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_UiCardHeader, null, {
                              default: withCtx(() => [
                                createVNode(_component_UiCardTitle, null, {
                                  default: withCtx(() => [
                                    createTextVNode(" \u0421\u043E\u0437\u0434\u0430\u0442\u044C \u0432\u044B\u043F\u043B\u0430\u0442\u0443 ")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_UiCardDescription)
                              ]),
                              _: 1
                            }),
                            createVNode(_component_UiCardContent, null, {
                              default: withCtx(() => [
                                createVNode("div", { class: "flex flex-col gap-5" }, [
                                  createVNode("div", { class: "relative w-full" }, [
                                    unref(newPayBlank).userId !== 0 ? (openBlock(), createBlock(_component_UiLabel, {
                                      key: 0,
                                      class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode("\u0421\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A")
                                      ]),
                                      _: 1
                                    })) : createCommentVNode("", true),
                                    createVNode("div", { class: "flex gap-2" }, [
                                      createVNode(_component_MyComboboxModels, {
                                        items: workSpace.users.map((u) => ({
                                          value: u.id,
                                          label: u.fullName
                                        })),
                                        class: "w-full",
                                        label: "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0430",
                                        onSelectedItem: (value) => {
                                          unref(newPayBlank).userId = value;
                                        }
                                      }, null, 8, ["items", "onSelectedItem"])
                                    ])
                                  ]),
                                  createVNode("div", { class: "relative" }, [
                                    createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                                      default: withCtx(() => [
                                        createTextVNode("\u0421\u0443\u043C\u043C\u0430")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode("div", { class: "flex gap-2" }, [
                                      createVNode(_component_UiInput, {
                                        modelValue: unref(newPayBlank).price,
                                        "onUpdate:modelValue": ($event) => unref(newPayBlank).price = $event,
                                        placeholder: "\u0421\u0443\u043C\u043C\u0430",
                                        type: "number",
                                        class: unref(newPayBlank).price ? "" : "outline-1 outline-rose-300"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "class"])
                                    ])
                                  ]),
                                  createVNode(_component_UiButton, {
                                    disabled: unref(disabled),
                                    onClick: createPay
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" \u0421\u043E\u0437\u0434\u0430\u0442\u044C ")
                                    ]),
                                    _: 1
                                  }, 8, ["disabled"])
                                ])
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(_component_UiCardFooter)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(`</div><div class="w-full"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_MyPaysDataTable, {
                      columns: unref(paysColumns),
                      data: workSpace.pays,
                      onDeleteItem: deleteItem,
                      onPay: pay
                    }, null, _parent3, _scopeId2));
                    _push3(`</div></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "flex gap-2 w-full" }, [
                        createVNode("div", { class: "min-w-[250px]" }, [
                          createVNode("div", { class: "flex flex-col gap-1 mb-2" }, [
                            (openBlock(true), createBlock(Fragment, null, renderList(workSpace.totals, (item) => {
                              return openBlock(), createBlock(_component_UiCard, {
                                key: item.title,
                                class: "min-w-[150px] grow"
                              }, {
                                default: withCtx(() => [
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
                                          createTextVNode(toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(item.value) + "\u20BD"), 1)
                                        ]),
                                        _: 2
                                      }, 1024)
                                    ]),
                                    _: 2
                                  }, 1024)
                                ]),
                                _: 2
                              }, 1024);
                            }), 128))
                          ]),
                          createVNode(_component_UiCard, null, {
                            default: withCtx(() => [
                              createVNode(_component_UiCardHeader, null, {
                                default: withCtx(() => [
                                  createVNode(_component_UiCardTitle, null, {
                                    default: withCtx(() => [
                                      createTextVNode(" \u0421\u043E\u0437\u0434\u0430\u0442\u044C \u0432\u044B\u043F\u043B\u0430\u0442\u0443 ")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_UiCardDescription)
                                ]),
                                _: 1
                              }),
                              createVNode(_component_UiCardContent, null, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "flex flex-col gap-5" }, [
                                    createVNode("div", { class: "relative w-full" }, [
                                      unref(newPayBlank).userId !== 0 ? (openBlock(), createBlock(_component_UiLabel, {
                                        key: 0,
                                        class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode("\u0421\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A")
                                        ]),
                                        _: 1
                                      })) : createCommentVNode("", true),
                                      createVNode("div", { class: "flex gap-2" }, [
                                        createVNode(_component_MyComboboxModels, {
                                          items: workSpace.users.map((u) => ({
                                            value: u.id,
                                            label: u.fullName
                                          })),
                                          class: "w-full",
                                          label: "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0430",
                                          onSelectedItem: (value) => {
                                            unref(newPayBlank).userId = value;
                                          }
                                        }, null, 8, ["items", "onSelectedItem"])
                                      ])
                                    ]),
                                    createVNode("div", { class: "relative" }, [
                                      createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                                        default: withCtx(() => [
                                          createTextVNode("\u0421\u0443\u043C\u043C\u0430")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode("div", { class: "flex gap-2" }, [
                                        createVNode(_component_UiInput, {
                                          modelValue: unref(newPayBlank).price,
                                          "onUpdate:modelValue": ($event) => unref(newPayBlank).price = $event,
                                          placeholder: "\u0421\u0443\u043C\u043C\u0430",
                                          type: "number",
                                          class: unref(newPayBlank).price ? "" : "outline-1 outline-rose-300"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "class"])
                                      ])
                                    ]),
                                    createVNode(_component_UiButton, {
                                      disabled: unref(disabled),
                                      onClick: createPay
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" \u0421\u043E\u0437\u0434\u0430\u0442\u044C ")
                                      ]),
                                      _: 1
                                    }, 8, ["disabled"])
                                  ])
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(_component_UiCardFooter)
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        createVNode("div", { class: "w-full" }, [
                          createVNode(_component_MyPaysDataTable, {
                            columns: unref(paysColumns),
                            data: workSpace.pays,
                            onDeleteItem: deleteItem,
                            onPay: pay
                          }, null, 8, ["columns", "data"])
                        ])
                      ])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</div>`);
            });
            _push2(`<!--]-->`);
          } else {
            return [
              createVNode(_component_UiTabsList, null, {
                default: withCtx(() => [
                  (openBlock(true), createBlock(Fragment, null, renderList(unref(workSpaces), (workSpace) => {
                    return openBlock(), createBlock("div", {
                      key: workSpace.id
                    }, [
                      createVNode(_component_UiTabsTrigger, {
                        value: workSpace.id
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(workSpace.title), 1)
                        ]),
                        _: 2
                      }, 1032, ["value"])
                    ]);
                  }), 128))
                ]),
                _: 1
              }),
              (openBlock(true), createBlock(Fragment, null, renderList(unref(workSpaces), (workSpace) => {
                return openBlock(), createBlock("div", {
                  key: workSpace.id,
                  class: "w-full"
                }, [
                  createVNode(_component_UiTabsContent, {
                    value: workSpace.id
                  }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "flex gap-2 w-full" }, [
                        createVNode("div", { class: "min-w-[250px]" }, [
                          createVNode("div", { class: "flex flex-col gap-1 mb-2" }, [
                            (openBlock(true), createBlock(Fragment, null, renderList(workSpace.totals, (item) => {
                              return openBlock(), createBlock(_component_UiCard, {
                                key: item.title,
                                class: "min-w-[150px] grow"
                              }, {
                                default: withCtx(() => [
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
                                          createTextVNode(toDisplayString(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(item.value) + "\u20BD"), 1)
                                        ]),
                                        _: 2
                                      }, 1024)
                                    ]),
                                    _: 2
                                  }, 1024)
                                ]),
                                _: 2
                              }, 1024);
                            }), 128))
                          ]),
                          createVNode(_component_UiCard, null, {
                            default: withCtx(() => [
                              createVNode(_component_UiCardHeader, null, {
                                default: withCtx(() => [
                                  createVNode(_component_UiCardTitle, null, {
                                    default: withCtx(() => [
                                      createTextVNode(" \u0421\u043E\u0437\u0434\u0430\u0442\u044C \u0432\u044B\u043F\u043B\u0430\u0442\u0443 ")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_UiCardDescription)
                                ]),
                                _: 1
                              }),
                              createVNode(_component_UiCardContent, null, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "flex flex-col gap-5" }, [
                                    createVNode("div", { class: "relative w-full" }, [
                                      unref(newPayBlank).userId !== 0 ? (openBlock(), createBlock(_component_UiLabel, {
                                        key: 0,
                                        class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode("\u0421\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A")
                                        ]),
                                        _: 1
                                      })) : createCommentVNode("", true),
                                      createVNode("div", { class: "flex gap-2" }, [
                                        createVNode(_component_MyComboboxModels, {
                                          items: workSpace.users.map((u) => ({
                                            value: u.id,
                                            label: u.fullName
                                          })),
                                          class: "w-full",
                                          label: "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0430",
                                          onSelectedItem: (value) => {
                                            unref(newPayBlank).userId = value;
                                          }
                                        }, null, 8, ["items", "onSelectedItem"])
                                      ])
                                    ]),
                                    createVNode("div", { class: "relative" }, [
                                      createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                                        default: withCtx(() => [
                                          createTextVNode("\u0421\u0443\u043C\u043C\u0430")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode("div", { class: "flex gap-2" }, [
                                        createVNode(_component_UiInput, {
                                          modelValue: unref(newPayBlank).price,
                                          "onUpdate:modelValue": ($event) => unref(newPayBlank).price = $event,
                                          placeholder: "\u0421\u0443\u043C\u043C\u0430",
                                          type: "number",
                                          class: unref(newPayBlank).price ? "" : "outline-1 outline-rose-300"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "class"])
                                      ])
                                    ]),
                                    createVNode(_component_UiButton, {
                                      disabled: unref(disabled),
                                      onClick: createPay
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" \u0421\u043E\u0437\u0434\u0430\u0442\u044C ")
                                      ]),
                                      _: 1
                                    }, 8, ["disabled"])
                                  ])
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(_component_UiCardFooter)
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        createVNode("div", { class: "w-full" }, [
                          createVNode(_component_MyPaysDataTable, {
                            columns: unref(paysColumns),
                            data: workSpace.pays,
                            onDeleteItem: deleteItem,
                            onPay: pay
                          }, null, 8, ["columns", "data"])
                        ])
                      ])
                    ]),
                    _: 2
                  }, 1032, ["value"])
                ]);
              }), 128))
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/pays/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-BwwcEakd.mjs.map
