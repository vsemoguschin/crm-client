import { _ as _sfc_main$2, a as _sfc_main$3, b as _sfc_main$1$1 } from './TabsList-BnKIeM8c.mjs';
import { _ as _sfc_main$4 } from './CalendarPicker-DwLA6ecO.mjs';
import { _ as _sfc_main$2$1, a as _sfc_main$1$2, b as _sfc_main$5 } from './CardTitle-Sdh9JAFV.mjs';
import { _ as _sfc_main$6 } from './CardContent-_xzw-coY.mjs';
import { _ as _sfc_main$5$1, a as _sfc_main$7, b as _sfc_main$2$2, c as _sfc_main$1$3, d as _sfc_main$4$1, e as _sfc_main$3$1 } from './TableHeader-DBebQ5qs.mjs';
import { defineComponent, ref, computed, watch, mergeProps, withCtx, createTextVNode, createVNode, createBlock, openBlock, toDisplayString, createCommentVNode, unref, Fragment, renderList, renderSlot, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderClass, ssrRenderSlot } from 'vue/server-renderer';
import { reactiveOmit } from '@vueuse/core';
import { c as cn } from './utils-DuwrO1cI.mjs';
import { CheckCircle2, TrendingUpDown, XCircle } from 'lucide-vue-next';
import { b as useNuxtApp } from './server.mjs';
import 'radix-vue';
import './main-B3nlRyD_.mjs';
import 'date-fns';
import 'clsx';
import 'tailwind-merge';
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
import 'pinia';
import 'vue-router';
import '@iconify/vue';
import 'axios';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'unhead/plugins';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "TableEmpty",
  __ssrInlineRender: true,
  props: {
    class: {},
    colspan: { default: 1 }
  },
  setup(__props) {
    const props = __props;
    const delegatedProps = reactiveOmit(props, "class");
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$2$2, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$3$1, mergeProps({
              class: unref(cn)(
                "p-4 whitespace-nowrap align-middle text-sm text-foreground",
                props.class
              )
            }, unref(delegatedProps)), {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex items-center justify-center py-10"${_scopeId2}>`);
                  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push3, _parent3, _scopeId2);
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex items-center justify-center py-10" }, [
                      renderSlot(_ctx.$slots, "default")
                    ])
                  ];
                }
              }),
              _: 3
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$3$1, mergeProps({
                class: unref(cn)(
                  "p-4 whitespace-nowrap align-middle text-sm text-foreground",
                  props.class
                )
              }, unref(delegatedProps)), {
                default: withCtx(() => [
                  createVNode("div", { class: "flex items-center justify-center py-10" }, [
                    renderSlot(_ctx.$slots, "default")
                  ])
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
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/table/TableEmpty.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
function useVkAdsApi() {
  const { $useApi } = useNuxtApp();
  async function day(params) {
    const { data } = await $useApi.get("vk-ads/statistics/day", { params });
    return data;
  }
  async function goals(params) {
    const { data } = await $useApi.get("vk-ads/statistics/goals", { params });
    return data;
  }
  async function inapp(params) {
    const { data } = await $useApi.get("vk-ads/statistics/inapp", { params });
    return data;
  }
  async function faststat(params) {
    const { data } = await $useApi.get("vk-ads/statistics/faststat", {
      params
    });
    return data;
  }
  async function offline(params) {
    const { data } = await $useApi.get("vk-ads/statistics/offline", {
      params
    });
    return data;
  }
  async function banners(params) {
    const { data } = await $useApi.get("vk-ads/banners", { params });
    return data;
  }
  return { day, goals, inapp, faststat, offline, banners };
}
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "stat",
  __ssrInlineRender: true,
  setup(__props) {
    const { day } = useVkAdsApi();
    const entity = ref(
      "ad_plans"
    );
    const dateFrom = ref("");
    const dateTo = ref("");
    const fields = ref("base");
    const attribution = ref("conversion");
    ref("postclick");
    ref("events");
    ref(250);
    ref(0);
    const loading = ref(false);
    const errorMsg = ref("");
    const response = ref(null);
    const listItems = computed(
      () => {
        var _a;
        return Array.isArray((_a = response.value) == null ? void 0 : _a.items) ? response.value.items : [];
      }
    );
    const sortKey = ref("shows");
    const sortDir = ref("desc");
    function toNumber(val) {
      if (val === null || val === void 0) return 0;
      const n = typeof val === "string" ? parseFloat(val) : Number(val);
      return isNaN(n) ? 0 : n;
    }
    function pickMetric(it, key) {
      var _a, _b, _c, _d;
      const b = (_a = it == null ? void 0 : it.total) == null ? void 0 : _a.base;
      switch (key) {
        case "shows":
          return b == null ? void 0 : b.shows;
        case "clicks":
          return b == null ? void 0 : b.clicks;
        case "ctr":
          return b == null ? void 0 : b.ctr;
        case "cpc":
          return b == null ? void 0 : b.cpc;
        case "cpm":
          return b == null ? void 0 : b.cpm;
        case "spent":
          return b == null ? void 0 : b.spent;
        case "spent_nds":
          return toNumber(b == null ? void 0 : b.spent) * 1.2;
        case "vk_goals":
          return (_b = b == null ? void 0 : b.vk) == null ? void 0 : _b.goals;
        case "vk_cpa":
          return (_c = b == null ? void 0 : b.vk) == null ? void 0 : _c.cpa;
        case "vk_cr":
          return (_d = b == null ? void 0 : b.vk) == null ? void 0 : _d.cr;
      }
    }
    const sortedItems = computed(() => {
      const arr = [...listItems.value];
      const key = sortKey.value;
      const dir = sortDir.value;
      arr.sort((a, b) => {
        const av = toNumber(pickMetric(a, key));
        const bv = toNumber(pickMetric(b, key));
        return dir === "asc" ? av - bv : bv - av;
      });
      return arr;
    });
    function setSort(key) {
      if (sortKey.value === key) {
        sortDir.value = sortDir.value === "asc" ? "desc" : "asc";
      } else {
        sortKey.value = key;
        sortDir.value = "desc";
      }
    }
    const baseTotal = computed(() => {
      var _a, _b;
      return ((_b = (_a = response.value) == null ? void 0 : _a.total) == null ? void 0 : _b.base) || null;
    });
    const rows = computed(() => {
      var _a, _b, _c;
      return ((_c = (_b = (_a = response.value) == null ? void 0 : _a.items) == null ? void 0 : _b[0]) == null ? void 0 : _c.rows) || [];
    });
    async function onRangeUpdated(r) {
      dateFrom.value = r.from;
      dateTo.value = r.to;
      await submit();
    }
    watch(entity, async () => {
      if (!dateFrom.value) return;
      await submit();
    });
    function f(n) {
      if (n === null || n === void 0) return "";
      const x = Number(n);
      return isNaN(x) ? n : x.toLocaleString("ru-RU");
    }
    async function submit() {
      var _a, _b;
      errorMsg.value = "";
      response.value = null;
      loading.value = true;
      try {
        const payload = {
          entity: entity.value,
          date_from: dateFrom.value,
          date_to: dateTo.value || void 0,
          fields: fields.value,
          attribution: attribution.value,
          limit: 20,
          offset: 0,
          sort_by: "base.clicks",
          d: "desc"
        };
        response.value = await day(payload);
      } catch (e) {
        errorMsg.value = ((_b = (_a = e == null ? void 0 : e.response) == null ? void 0 : _a.data) == null ? void 0 : _b.message) || (e == null ? void 0 : e.message) || "\u041E\u0448\u0438\u0431\u043A\u0430";
      } finally {
        loading.value = false;
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiTabs = _sfc_main$2;
      const _component_UiTabsList = _sfc_main$3;
      const _component_UiTabsTrigger = _sfc_main$1$1;
      const _component_CalendarPicker = _sfc_main$4;
      const _component_UiCard = _sfc_main$2$1;
      const _component_UiCardHeader = _sfc_main$1$2;
      const _component_UiCardTitle = _sfc_main$5;
      const _component_UiCardContent = _sfc_main$6;
      const _component_UiTable = _sfc_main$5$1;
      const _component_UiTableHeader = _sfc_main$7;
      const _component_UiTableRow = _sfc_main$2$2;
      const _component_UiTableHead = _sfc_main$1$3;
      const _component_UiTableBody = _sfc_main$4$1;
      const _component_UiTableCell = _sfc_main$3$1;
      const _component_UiTableEmpty = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "px-6 py-6 max-w-full mx-auto" }, _attrs))}><h1 class="text-2xl font-bold mb-4">VK Ads \u2014 \u043F\u0440\u043E\u0441\u0442\u0430\u044F \u0441\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043A\u0430</h1><div class="flex flex-col mb-4"><div class="flex gap-2 items-center">`);
      _push(ssrRenderComponent(_component_UiTabs, {
        modelValue: entity.value,
        "onUpdate:modelValue": ($event) => entity.value = $event,
        "default-value": "ad_plans"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UiTabsList, { class: "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UiTabsTrigger, { value: "ad_plans" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`\u041A\u043E\u043C\u043F\u0430\u043D\u0438\u0438`);
                      } else {
                        return [
                          createTextVNode("\u041A\u043E\u043C\u043F\u0430\u043D\u0438\u0438")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UiTabsTrigger, { value: "ad_groups" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`\u0413\u0440\u0443\u043F\u043F\u044B`);
                      } else {
                        return [
                          createTextVNode("\u0413\u0440\u0443\u043F\u043F\u044B")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UiTabsTrigger, { value: "banners" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`\u0411\u0430\u043D\u043D\u0435\u0440\u044B`);
                      } else {
                        return [
                          createTextVNode("\u0411\u0430\u043D\u043D\u0435\u0440\u044B")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UiTabsTrigger, { value: "ad_plans" }, {
                      default: withCtx(() => [
                        createTextVNode("\u041A\u043E\u043C\u043F\u0430\u043D\u0438\u0438")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_UiTabsTrigger, { value: "ad_groups" }, {
                      default: withCtx(() => [
                        createTextVNode("\u0413\u0440\u0443\u043F\u043F\u044B")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_UiTabsTrigger, { value: "banners" }, {
                      default: withCtx(() => [
                        createTextVNode("\u0411\u0430\u043D\u043D\u0435\u0440\u044B")
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
              createVNode(_component_UiTabsList, { class: "" }, {
                default: withCtx(() => [
                  createVNode(_component_UiTabsTrigger, { value: "ad_plans" }, {
                    default: withCtx(() => [
                      createTextVNode("\u041A\u043E\u043C\u043F\u0430\u043D\u0438\u0438")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_UiTabsTrigger, { value: "ad_groups" }, {
                    default: withCtx(() => [
                      createTextVNode("\u0413\u0440\u0443\u043F\u043F\u044B")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_UiTabsTrigger, { value: "banners" }, {
                    default: withCtx(() => [
                      createTextVNode("\u0411\u0430\u043D\u043D\u0435\u0440\u044B")
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
      _push(`<div>`);
      _push(ssrRenderComponent(_component_CalendarPicker, {
        class: "w-[300px]",
        onRangeUpdated
      }, null, _parent));
      _push(`</div></div></div>`);
      if (errorMsg.value) {
        _push(`<p class="text-red-600 whitespace-pre-wrap mb-3">${ssrInterpolate(errorMsg.value)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="">`);
      _push(ssrRenderComponent(_component_UiCard, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UiCardHeader, { class: "pb-2" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UiCardTitle, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`\u0418\u0442\u043E\u0433\u0438`);
                      } else {
                        return [
                          createTextVNode("\u0418\u0442\u043E\u0433\u0438")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UiCardTitle, null, {
                      default: withCtx(() => [
                        createTextVNode("\u0418\u0442\u043E\u0433\u0438")
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
                  if (baseTotal.value) {
                    _push3(`<div class="flex gap-2 flex-wrap text-sm"${_scopeId2}><span class="border rounded px-2 py-1"${_scopeId2}>\u041F\u043E\u043A\u0430\u0437\u044B: <b${_scopeId2}>${ssrInterpolate(f(baseTotal.value.shows))}</b></span><span class="border rounded px-2 py-1"${_scopeId2}>\u041A\u043B\u0438\u043A\u0438: <b${_scopeId2}>${ssrInterpolate(f(baseTotal.value.clicks))}</b></span><span class="border rounded px-2 py-1"${_scopeId2}>CTR: <b${_scopeId2}>${ssrInterpolate(f(baseTotal.value.ctr))}</b>%</span><span class="border rounded px-2 py-1"${_scopeId2}>CPC: <b${_scopeId2}>${ssrInterpolate(f(baseTotal.value.cpc))}</b></span><span class="border rounded px-2 py-1"${_scopeId2}>CPM: <b${_scopeId2}>${ssrInterpolate(f(baseTotal.value.cpm))}</b></span><span class="border rounded px-2 py-1"${_scopeId2}>Spend: <b${_scopeId2}>${ssrInterpolate(f(baseTotal.value.spent))}</b></span></div>`);
                  } else {
                    _push3(`<p class="text-gray-500"${_scopeId2}>\u043D\u0435\u0442 \u0434\u0430\u043D\u043D\u044B\u0445</p>`);
                  }
                } else {
                  return [
                    baseTotal.value ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "flex gap-2 flex-wrap text-sm"
                    }, [
                      createVNode("span", { class: "border rounded px-2 py-1" }, [
                        createTextVNode("\u041F\u043E\u043A\u0430\u0437\u044B: "),
                        createVNode("b", null, toDisplayString(f(baseTotal.value.shows)), 1)
                      ]),
                      createVNode("span", { class: "border rounded px-2 py-1" }, [
                        createTextVNode("\u041A\u043B\u0438\u043A\u0438: "),
                        createVNode("b", null, toDisplayString(f(baseTotal.value.clicks)), 1)
                      ]),
                      createVNode("span", { class: "border rounded px-2 py-1" }, [
                        createTextVNode("CTR: "),
                        createVNode("b", null, toDisplayString(f(baseTotal.value.ctr)), 1),
                        createTextVNode("%")
                      ]),
                      createVNode("span", { class: "border rounded px-2 py-1" }, [
                        createTextVNode("CPC: "),
                        createVNode("b", null, toDisplayString(f(baseTotal.value.cpc)), 1)
                      ]),
                      createVNode("span", { class: "border rounded px-2 py-1" }, [
                        createTextVNode("CPM: "),
                        createVNode("b", null, toDisplayString(f(baseTotal.value.cpm)), 1)
                      ]),
                      createVNode("span", { class: "border rounded px-2 py-1" }, [
                        createTextVNode("Spend: "),
                        createVNode("b", null, toDisplayString(f(baseTotal.value.spent)), 1)
                      ])
                    ])) : (openBlock(), createBlock("p", {
                      key: 1,
                      class: "text-gray-500"
                    }, "\u043D\u0435\u0442 \u0434\u0430\u043D\u043D\u044B\u0445"))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UiCardHeader, { class: "pb-2" }, {
                default: withCtx(() => [
                  createVNode(_component_UiCardTitle, null, {
                    default: withCtx(() => [
                      createTextVNode("\u0418\u0442\u043E\u0433\u0438")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_UiCardContent, null, {
                default: withCtx(() => [
                  baseTotal.value ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "flex gap-2 flex-wrap text-sm"
                  }, [
                    createVNode("span", { class: "border rounded px-2 py-1" }, [
                      createTextVNode("\u041F\u043E\u043A\u0430\u0437\u044B: "),
                      createVNode("b", null, toDisplayString(f(baseTotal.value.shows)), 1)
                    ]),
                    createVNode("span", { class: "border rounded px-2 py-1" }, [
                      createTextVNode("\u041A\u043B\u0438\u043A\u0438: "),
                      createVNode("b", null, toDisplayString(f(baseTotal.value.clicks)), 1)
                    ]),
                    createVNode("span", { class: "border rounded px-2 py-1" }, [
                      createTextVNode("CTR: "),
                      createVNode("b", null, toDisplayString(f(baseTotal.value.ctr)), 1),
                      createTextVNode("%")
                    ]),
                    createVNode("span", { class: "border rounded px-2 py-1" }, [
                      createTextVNode("CPC: "),
                      createVNode("b", null, toDisplayString(f(baseTotal.value.cpc)), 1)
                    ]),
                    createVNode("span", { class: "border rounded px-2 py-1" }, [
                      createTextVNode("CPM: "),
                      createVNode("b", null, toDisplayString(f(baseTotal.value.cpm)), 1)
                    ]),
                    createVNode("span", { class: "border rounded px-2 py-1" }, [
                      createTextVNode("Spend: "),
                      createVNode("b", null, toDisplayString(f(baseTotal.value.spent)), 1)
                    ])
                  ])) : (openBlock(), createBlock("p", {
                    key: 1,
                    class: "text-gray-500"
                  }, "\u043D\u0435\u0442 \u0434\u0430\u043D\u043D\u044B\u0445"))
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_UiCard, { class: "mt-4" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UiCardHeader, { class: "pb-2" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UiCardTitle, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`\u041A\u0430\u043C\u043F\u0430\u043D\u0438\u0438`);
                      } else {
                        return [
                          createTextVNode("\u041A\u0430\u043C\u043F\u0430\u043D\u0438\u0438")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UiCardTitle, null, {
                      default: withCtx(() => [
                        createTextVNode("\u041A\u0430\u043C\u043F\u0430\u043D\u0438\u0438")
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
                  if (listItems.value.length) {
                    _push3(ssrRenderComponent(_component_UiTable, null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_UiTableHeader, null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_UiTableRow, { class: "bg-gray-50" }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(_component_UiTableHead, { class: "text-left" }, {
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
                                      _push6(ssrRenderComponent(_component_UiTableHead, {
                                        class: "text-center cursor-pointer select-none",
                                        onClick: ($event) => setSort("spent")
                                      }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(` \u041F\u043E\u0442\u0440\u0430\u0447\u0435\u043D\u043E `);
                                            if (sortKey.value === "spent") {
                                              _push7(`<span${_scopeId6}>${ssrInterpolate(sortDir.value === "asc" ? "\u25B2" : "\u25BC")}</span>`);
                                            } else {
                                              _push7(`<!---->`);
                                            }
                                          } else {
                                            return [
                                              createTextVNode(" \u041F\u043E\u0442\u0440\u0430\u0447\u0435\u043D\u043E "),
                                              sortKey.value === "spent" ? (openBlock(), createBlock("span", { key: 0 }, toDisplayString(sortDir.value === "asc" ? "\u25B2" : "\u25BC"), 1)) : createCommentVNode("", true)
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                      _push6(ssrRenderComponent(_component_UiTableHead, {
                                        class: "text-center cursor-pointer select-none",
                                        onClick: ($event) => setSort("spent_nds")
                                      }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(` \u041F\u043E\u0442\u0440\u0430\u0447\u0435\u043D\u043E \u0441 \u041D\u0414\u0421 `);
                                            if (sortKey.value === "spent_nds") {
                                              _push7(`<span${_scopeId6}>${ssrInterpolate(sortDir.value === "asc" ? "\u25B2" : "\u25BC")}</span>`);
                                            } else {
                                              _push7(`<!---->`);
                                            }
                                          } else {
                                            return [
                                              createTextVNode(" \u041F\u043E\u0442\u0440\u0430\u0447\u0435\u043D\u043E \u0441 \u041D\u0414\u0421 "),
                                              sortKey.value === "spent_nds" ? (openBlock(), createBlock("span", { key: 0 }, toDisplayString(sortDir.value === "asc" ? "\u25B2" : "\u25BC"), 1)) : createCommentVNode("", true)
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                      _push6(ssrRenderComponent(_component_UiTableHead, {
                                        class: "text-center cursor-pointer select-none",
                                        onClick: ($event) => setSort("vk_goals")
                                      }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(` \u041B\u0438\u0434\u044B `);
                                            if (sortKey.value === "vk_goals") {
                                              _push7(`<span${_scopeId6}>${ssrInterpolate(sortDir.value === "asc" ? "\u25B2" : "\u25BC")}</span>`);
                                            } else {
                                              _push7(`<!---->`);
                                            }
                                          } else {
                                            return [
                                              createTextVNode(" \u041B\u0438\u0434\u044B "),
                                              sortKey.value === "vk_goals" ? (openBlock(), createBlock("span", { key: 0 }, toDisplayString(sortDir.value === "asc" ? "\u25B2" : "\u25BC"), 1)) : createCommentVNode("", true)
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                      _push6(ssrRenderComponent(_component_UiTableHead, {
                                        class: "text-center cursor-pointer select-none",
                                        onClick: ($event) => setSort("shows")
                                      }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(` \u041F\u043E\u043A\u0430\u0437\u044B `);
                                            if (sortKey.value === "shows") {
                                              _push7(`<span${_scopeId6}>${ssrInterpolate(sortDir.value === "asc" ? "\u25B2" : "\u25BC")}</span>`);
                                            } else {
                                              _push7(`<!---->`);
                                            }
                                          } else {
                                            return [
                                              createTextVNode(" \u041F\u043E\u043A\u0430\u0437\u044B "),
                                              sortKey.value === "shows" ? (openBlock(), createBlock("span", { key: 0 }, toDisplayString(sortDir.value === "asc" ? "\u25B2" : "\u25BC"), 1)) : createCommentVNode("", true)
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                      _push6(ssrRenderComponent(_component_UiTableHead, {
                                        class: "text-center cursor-pointer select-none",
                                        onClick: ($event) => setSort("clicks")
                                      }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(` \u041A\u043B\u0438\u043A\u0438 `);
                                            if (sortKey.value === "clicks") {
                                              _push7(`<span${_scopeId6}>${ssrInterpolate(sortDir.value === "asc" ? "\u25B2" : "\u25BC")}</span>`);
                                            } else {
                                              _push7(`<!---->`);
                                            }
                                          } else {
                                            return [
                                              createTextVNode(" \u041A\u043B\u0438\u043A\u0438 "),
                                              sortKey.value === "clicks" ? (openBlock(), createBlock("span", { key: 0 }, toDisplayString(sortDir.value === "asc" ? "\u25B2" : "\u25BC"), 1)) : createCommentVNode("", true)
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                      _push6(ssrRenderComponent(_component_UiTableHead, {
                                        class: "text-center cursor-pointer select-none",
                                        onClick: ($event) => setSort("vk_cr")
                                      }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(` cr `);
                                            if (sortKey.value === "vk_cr") {
                                              _push7(`<span${_scopeId6}>${ssrInterpolate(sortDir.value === "asc" ? "\u25B2" : "\u25BC")}</span>`);
                                            } else {
                                              _push7(`<!---->`);
                                            }
                                          } else {
                                            return [
                                              createTextVNode(" cr "),
                                              sortKey.value === "vk_cr" ? (openBlock(), createBlock("span", { key: 0 }, toDisplayString(sortDir.value === "asc" ? "\u25B2" : "\u25BC"), 1)) : createCommentVNode("", true)
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                      _push6(ssrRenderComponent(_component_UiTableHead, {
                                        class: "text-center cursor-pointer select-none",
                                        onClick: ($event) => setSort("ctr")
                                      }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(` CTR `);
                                            if (sortKey.value === "ctr") {
                                              _push7(`<span${_scopeId6}>${ssrInterpolate(sortDir.value === "asc" ? "\u25B2" : "\u25BC")}</span>`);
                                            } else {
                                              _push7(`<!---->`);
                                            }
                                          } else {
                                            return [
                                              createTextVNode(" CTR "),
                                              sortKey.value === "ctr" ? (openBlock(), createBlock("span", { key: 0 }, toDisplayString(sortDir.value === "asc" ? "\u25B2" : "\u25BC"), 1)) : createCommentVNode("", true)
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(_component_UiTableHead, { class: "text-left" }, {
                                          default: withCtx(() => [
                                            createTextVNode("\u0421\u0442\u0430\u0442\u0443\u0441")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_UiTableHead, { class: "text-left" }, {
                                          default: withCtx(() => [
                                            createTextVNode("\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_UiTableHead, {
                                          class: "text-center cursor-pointer select-none",
                                          onClick: ($event) => setSort("spent")
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(" \u041F\u043E\u0442\u0440\u0430\u0447\u0435\u043D\u043E "),
                                            sortKey.value === "spent" ? (openBlock(), createBlock("span", { key: 0 }, toDisplayString(sortDir.value === "asc" ? "\u25B2" : "\u25BC"), 1)) : createCommentVNode("", true)
                                          ]),
                                          _: 1
                                        }, 8, ["onClick"]),
                                        createVNode(_component_UiTableHead, {
                                          class: "text-center cursor-pointer select-none",
                                          onClick: ($event) => setSort("spent_nds")
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(" \u041F\u043E\u0442\u0440\u0430\u0447\u0435\u043D\u043E \u0441 \u041D\u0414\u0421 "),
                                            sortKey.value === "spent_nds" ? (openBlock(), createBlock("span", { key: 0 }, toDisplayString(sortDir.value === "asc" ? "\u25B2" : "\u25BC"), 1)) : createCommentVNode("", true)
                                          ]),
                                          _: 1
                                        }, 8, ["onClick"]),
                                        createVNode(_component_UiTableHead, {
                                          class: "text-center cursor-pointer select-none",
                                          onClick: ($event) => setSort("vk_goals")
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(" \u041B\u0438\u0434\u044B "),
                                            sortKey.value === "vk_goals" ? (openBlock(), createBlock("span", { key: 0 }, toDisplayString(sortDir.value === "asc" ? "\u25B2" : "\u25BC"), 1)) : createCommentVNode("", true)
                                          ]),
                                          _: 1
                                        }, 8, ["onClick"]),
                                        createVNode(_component_UiTableHead, {
                                          class: "text-center cursor-pointer select-none",
                                          onClick: ($event) => setSort("shows")
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(" \u041F\u043E\u043A\u0430\u0437\u044B "),
                                            sortKey.value === "shows" ? (openBlock(), createBlock("span", { key: 0 }, toDisplayString(sortDir.value === "asc" ? "\u25B2" : "\u25BC"), 1)) : createCommentVNode("", true)
                                          ]),
                                          _: 1
                                        }, 8, ["onClick"]),
                                        createVNode(_component_UiTableHead, {
                                          class: "text-center cursor-pointer select-none",
                                          onClick: ($event) => setSort("clicks")
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(" \u041A\u043B\u0438\u043A\u0438 "),
                                            sortKey.value === "clicks" ? (openBlock(), createBlock("span", { key: 0 }, toDisplayString(sortDir.value === "asc" ? "\u25B2" : "\u25BC"), 1)) : createCommentVNode("", true)
                                          ]),
                                          _: 1
                                        }, 8, ["onClick"]),
                                        createVNode(_component_UiTableHead, {
                                          class: "text-center cursor-pointer select-none",
                                          onClick: ($event) => setSort("vk_cr")
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(" cr "),
                                            sortKey.value === "vk_cr" ? (openBlock(), createBlock("span", { key: 0 }, toDisplayString(sortDir.value === "asc" ? "\u25B2" : "\u25BC"), 1)) : createCommentVNode("", true)
                                          ]),
                                          _: 1
                                        }, 8, ["onClick"]),
                                        createVNode(_component_UiTableHead, {
                                          class: "text-center cursor-pointer select-none",
                                          onClick: ($event) => setSort("ctr")
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(" CTR "),
                                            sortKey.value === "ctr" ? (openBlock(), createBlock("span", { key: 0 }, toDisplayString(sortDir.value === "asc" ? "\u25B2" : "\u25BC"), 1)) : createCommentVNode("", true)
                                          ]),
                                          _: 1
                                        }, 8, ["onClick"])
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(_component_UiTableRow, { class: "bg-gray-50" }, {
                                    default: withCtx(() => [
                                      createVNode(_component_UiTableHead, { class: "text-left" }, {
                                        default: withCtx(() => [
                                          createTextVNode("\u0421\u0442\u0430\u0442\u0443\u0441")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_UiTableHead, { class: "text-left" }, {
                                        default: withCtx(() => [
                                          createTextVNode("\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_UiTableHead, {
                                        class: "text-center cursor-pointer select-none",
                                        onClick: ($event) => setSort("spent")
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(" \u041F\u043E\u0442\u0440\u0430\u0447\u0435\u043D\u043E "),
                                          sortKey.value === "spent" ? (openBlock(), createBlock("span", { key: 0 }, toDisplayString(sortDir.value === "asc" ? "\u25B2" : "\u25BC"), 1)) : createCommentVNode("", true)
                                        ]),
                                        _: 1
                                      }, 8, ["onClick"]),
                                      createVNode(_component_UiTableHead, {
                                        class: "text-center cursor-pointer select-none",
                                        onClick: ($event) => setSort("spent_nds")
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(" \u041F\u043E\u0442\u0440\u0430\u0447\u0435\u043D\u043E \u0441 \u041D\u0414\u0421 "),
                                          sortKey.value === "spent_nds" ? (openBlock(), createBlock("span", { key: 0 }, toDisplayString(sortDir.value === "asc" ? "\u25B2" : "\u25BC"), 1)) : createCommentVNode("", true)
                                        ]),
                                        _: 1
                                      }, 8, ["onClick"]),
                                      createVNode(_component_UiTableHead, {
                                        class: "text-center cursor-pointer select-none",
                                        onClick: ($event) => setSort("vk_goals")
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(" \u041B\u0438\u0434\u044B "),
                                          sortKey.value === "vk_goals" ? (openBlock(), createBlock("span", { key: 0 }, toDisplayString(sortDir.value === "asc" ? "\u25B2" : "\u25BC"), 1)) : createCommentVNode("", true)
                                        ]),
                                        _: 1
                                      }, 8, ["onClick"]),
                                      createVNode(_component_UiTableHead, {
                                        class: "text-center cursor-pointer select-none",
                                        onClick: ($event) => setSort("shows")
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(" \u041F\u043E\u043A\u0430\u0437\u044B "),
                                          sortKey.value === "shows" ? (openBlock(), createBlock("span", { key: 0 }, toDisplayString(sortDir.value === "asc" ? "\u25B2" : "\u25BC"), 1)) : createCommentVNode("", true)
                                        ]),
                                        _: 1
                                      }, 8, ["onClick"]),
                                      createVNode(_component_UiTableHead, {
                                        class: "text-center cursor-pointer select-none",
                                        onClick: ($event) => setSort("clicks")
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(" \u041A\u043B\u0438\u043A\u0438 "),
                                          sortKey.value === "clicks" ? (openBlock(), createBlock("span", { key: 0 }, toDisplayString(sortDir.value === "asc" ? "\u25B2" : "\u25BC"), 1)) : createCommentVNode("", true)
                                        ]),
                                        _: 1
                                      }, 8, ["onClick"]),
                                      createVNode(_component_UiTableHead, {
                                        class: "text-center cursor-pointer select-none",
                                        onClick: ($event) => setSort("vk_cr")
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(" cr "),
                                          sortKey.value === "vk_cr" ? (openBlock(), createBlock("span", { key: 0 }, toDisplayString(sortDir.value === "asc" ? "\u25B2" : "\u25BC"), 1)) : createCommentVNode("", true)
                                        ]),
                                        _: 1
                                      }, 8, ["onClick"]),
                                      createVNode(_component_UiTableHead, {
                                        class: "text-center cursor-pointer select-none",
                                        onClick: ($event) => setSort("ctr")
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(" CTR "),
                                          sortKey.value === "ctr" ? (openBlock(), createBlock("span", { key: 0 }, toDisplayString(sortDir.value === "asc" ? "\u25B2" : "\u25BC"), 1)) : createCommentVNode("", true)
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
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_component_UiTableBody, null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<!--[-->`);
                                ssrRenderList(sortedItems.value, (it) => {
                                  _push5(ssrRenderComponent(_component_UiTableRow, {
                                    key: it.id || it._id
                                  }, {
                                    default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        _push6(ssrRenderComponent(_component_UiTableCell, { class: "text-left" }, {
                                          default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                            if (_push7) {
                                              _push7(`<span class="${ssrRenderClass([{
                                                "bg-emerald-500": it.status === "active",
                                                "bg-amber-500": it.status === "blocked",
                                                "bg-rose-500": it.status === "deleted"
                                              }, "inline-flex items-center gap-2 rounded-full pl-1 pr-2 py-1 text-xs text-white"])}"${_scopeId6}>`);
                                              if (it.status === "active") {
                                                _push7(ssrRenderComponent(unref(CheckCircle2), { class: "w-3 h-3" }, null, _parent7, _scopeId6));
                                              } else if (it.status === "blocked") {
                                                _push7(ssrRenderComponent(unref(TrendingUpDown), { class: "w-3 h-3" }, null, _parent7, _scopeId6));
                                              } else {
                                                _push7(ssrRenderComponent(unref(XCircle), { class: "w-3 h-3" }, null, _parent7, _scopeId6));
                                              }
                                              _push7(` ${ssrInterpolate(it.status)}</span>`);
                                            } else {
                                              return [
                                                createVNode("span", {
                                                  class: ["inline-flex items-center gap-2 rounded-full pl-1 pr-2 py-1 text-xs text-white", {
                                                    "bg-emerald-500": it.status === "active",
                                                    "bg-amber-500": it.status === "blocked",
                                                    "bg-rose-500": it.status === "deleted"
                                                  }]
                                                }, [
                                                  it.status === "active" ? (openBlock(), createBlock(unref(CheckCircle2), {
                                                    key: 0,
                                                    class: "w-3 h-3"
                                                  })) : it.status === "blocked" ? (openBlock(), createBlock(unref(TrendingUpDown), {
                                                    key: 1,
                                                    class: "w-3 h-3"
                                                  })) : (openBlock(), createBlock(unref(XCircle), {
                                                    key: 2,
                                                    class: "w-3 h-3"
                                                  })),
                                                  createTextVNode(" " + toDisplayString(it.status), 1)
                                                ], 2)
                                              ];
                                            }
                                          }),
                                          _: 2
                                        }, _parent6, _scopeId5));
                                        _push6(ssrRenderComponent(_component_UiTableCell, { class: "text-left" }, {
                                          default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                            var _a, _b, _c, _d;
                                            if (_push7) {
                                              _push7(`<div class="flex flex-col gap-1"${_scopeId6}><span${_scopeId6}>${ssrInterpolate((_a = it.name) != null ? _a : "-")}</span><span class="text-xs text-neutral-400"${_scopeId6}>${ssrInterpolate((_b = it.id) != null ? _b : it._id)}</span></div>`);
                                            } else {
                                              return [
                                                createVNode("div", { class: "flex flex-col gap-1" }, [
                                                  createVNode("span", null, toDisplayString((_c = it.name) != null ? _c : "-"), 1),
                                                  createVNode("span", { class: "text-xs text-neutral-400" }, toDisplayString((_d = it.id) != null ? _d : it._id), 1)
                                                ])
                                              ];
                                            }
                                          }),
                                          _: 2
                                        }, _parent6, _scopeId5));
                                        _push6(ssrRenderComponent(_component_UiTableCell, { class: "text-center" }, {
                                          default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                            var _a, _b, _c, _d, _e, _f;
                                            if (_push7) {
                                              _push7(`${ssrInterpolate(f((_c = (_b = (_a = it == null ? void 0 : it.total) == null ? void 0 : _a.base) == null ? void 0 : _b.spent) != null ? _c : "0"))} \u20BD`);
                                            } else {
                                              return [
                                                createTextVNode(toDisplayString(f((_f = (_e = (_d = it == null ? void 0 : it.total) == null ? void 0 : _d.base) == null ? void 0 : _e.spent) != null ? _f : "0")) + " \u20BD", 1)
                                              ];
                                            }
                                          }),
                                          _: 2
                                        }, _parent6, _scopeId5));
                                        _push6(ssrRenderComponent(_component_UiTableCell, { class: "text-center" }, {
                                          default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                            var _a, _b, _c, _d;
                                            if (_push7) {
                                              _push7(`${ssrInterpolate(f(toNumber((_b = (_a = it == null ? void 0 : it.total) == null ? void 0 : _a.base) == null ? void 0 : _b.spent) * 1.2))} \u20BD`);
                                            } else {
                                              return [
                                                createTextVNode(toDisplayString(f(toNumber((_d = (_c = it == null ? void 0 : it.total) == null ? void 0 : _c.base) == null ? void 0 : _d.spent) * 1.2)) + " \u20BD", 1)
                                              ];
                                            }
                                          }),
                                          _: 2
                                        }, _parent6, _scopeId5));
                                        _push6(ssrRenderComponent(_component_UiTableCell, { class: "text-center" }, {
                                          default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                            var _a, _b, _c, _d, _e, _f, _g, _h;
                                            if (_push7) {
                                              _push7(`${ssrInterpolate(f((_d = (_c = (_b = (_a = it == null ? void 0 : it.total) == null ? void 0 : _a.base) == null ? void 0 : _b.vk) == null ? void 0 : _c.goals) != null ? _d : 0))}`);
                                            } else {
                                              return [
                                                createTextVNode(toDisplayString(f((_h = (_g = (_f = (_e = it == null ? void 0 : it.total) == null ? void 0 : _e.base) == null ? void 0 : _f.vk) == null ? void 0 : _g.goals) != null ? _h : 0)), 1)
                                              ];
                                            }
                                          }),
                                          _: 2
                                        }, _parent6, _scopeId5));
                                        _push6(ssrRenderComponent(_component_UiTableCell, { class: "text-center" }, {
                                          default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                            var _a, _b, _c, _d, _e, _f;
                                            if (_push7) {
                                              _push7(`${ssrInterpolate(f((_c = (_b = (_a = it == null ? void 0 : it.total) == null ? void 0 : _a.base) == null ? void 0 : _b.shows) != null ? _c : 0))}`);
                                            } else {
                                              return [
                                                createTextVNode(toDisplayString(f((_f = (_e = (_d = it == null ? void 0 : it.total) == null ? void 0 : _d.base) == null ? void 0 : _e.shows) != null ? _f : 0)), 1)
                                              ];
                                            }
                                          }),
                                          _: 2
                                        }, _parent6, _scopeId5));
                                        _push6(ssrRenderComponent(_component_UiTableCell, { class: "text-center" }, {
                                          default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                            var _a, _b, _c, _d, _e, _f;
                                            if (_push7) {
                                              _push7(`${ssrInterpolate(f((_c = (_b = (_a = it == null ? void 0 : it.total) == null ? void 0 : _a.base) == null ? void 0 : _b.clicks) != null ? _c : 0))}`);
                                            } else {
                                              return [
                                                createTextVNode(toDisplayString(f((_f = (_e = (_d = it == null ? void 0 : it.total) == null ? void 0 : _d.base) == null ? void 0 : _e.clicks) != null ? _f : 0)), 1)
                                              ];
                                            }
                                          }),
                                          _: 2
                                        }, _parent6, _scopeId5));
                                        _push6(ssrRenderComponent(_component_UiTableCell, { class: "text-center" }, {
                                          default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                            var _a, _b, _c, _d, _e, _f, _g, _h;
                                            if (_push7) {
                                              _push7(`${ssrInterpolate(f((_d = (_c = (_b = (_a = it == null ? void 0 : it.total) == null ? void 0 : _a.base) == null ? void 0 : _b.vk) == null ? void 0 : _c.cr) != null ? _d : 0))} %`);
                                            } else {
                                              return [
                                                createTextVNode(toDisplayString(f((_h = (_g = (_f = (_e = it == null ? void 0 : it.total) == null ? void 0 : _e.base) == null ? void 0 : _f.vk) == null ? void 0 : _g.cr) != null ? _h : 0)) + " %", 1)
                                              ];
                                            }
                                          }),
                                          _: 2
                                        }, _parent6, _scopeId5));
                                        _push6(ssrRenderComponent(_component_UiTableCell, { class: "text-center" }, {
                                          default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                            var _a, _b, _c, _d, _e, _f;
                                            if (_push7) {
                                              _push7(`${ssrInterpolate(f((_c = (_b = (_a = it == null ? void 0 : it.total) == null ? void 0 : _a.base) == null ? void 0 : _b.ctr) != null ? _c : 0))} %`);
                                            } else {
                                              return [
                                                createTextVNode(toDisplayString(f((_f = (_e = (_d = it == null ? void 0 : it.total) == null ? void 0 : _d.base) == null ? void 0 : _e.ctr) != null ? _f : 0)) + " %", 1)
                                              ];
                                            }
                                          }),
                                          _: 2
                                        }, _parent6, _scopeId5));
                                      } else {
                                        return [
                                          createVNode(_component_UiTableCell, { class: "text-left" }, {
                                            default: withCtx(() => [
                                              createVNode("span", {
                                                class: ["inline-flex items-center gap-2 rounded-full pl-1 pr-2 py-1 text-xs text-white", {
                                                  "bg-emerald-500": it.status === "active",
                                                  "bg-amber-500": it.status === "blocked",
                                                  "bg-rose-500": it.status === "deleted"
                                                }]
                                              }, [
                                                it.status === "active" ? (openBlock(), createBlock(unref(CheckCircle2), {
                                                  key: 0,
                                                  class: "w-3 h-3"
                                                })) : it.status === "blocked" ? (openBlock(), createBlock(unref(TrendingUpDown), {
                                                  key: 1,
                                                  class: "w-3 h-3"
                                                })) : (openBlock(), createBlock(unref(XCircle), {
                                                  key: 2,
                                                  class: "w-3 h-3"
                                                })),
                                                createTextVNode(" " + toDisplayString(it.status), 1)
                                              ], 2)
                                            ]),
                                            _: 2
                                          }, 1024),
                                          createVNode(_component_UiTableCell, { class: "text-left" }, {
                                            default: withCtx(() => {
                                              var _a, _b;
                                              return [
                                                createVNode("div", { class: "flex flex-col gap-1" }, [
                                                  createVNode("span", null, toDisplayString((_a = it.name) != null ? _a : "-"), 1),
                                                  createVNode("span", { class: "text-xs text-neutral-400" }, toDisplayString((_b = it.id) != null ? _b : it._id), 1)
                                                ])
                                              ];
                                            }),
                                            _: 2
                                          }, 1024),
                                          createVNode(_component_UiTableCell, { class: "text-center" }, {
                                            default: withCtx(() => {
                                              var _a, _b, _c;
                                              return [
                                                createTextVNode(toDisplayString(f((_c = (_b = (_a = it == null ? void 0 : it.total) == null ? void 0 : _a.base) == null ? void 0 : _b.spent) != null ? _c : "0")) + " \u20BD", 1)
                                              ];
                                            }),
                                            _: 2
                                          }, 1024),
                                          createVNode(_component_UiTableCell, { class: "text-center" }, {
                                            default: withCtx(() => {
                                              var _a, _b;
                                              return [
                                                createTextVNode(toDisplayString(f(toNumber((_b = (_a = it == null ? void 0 : it.total) == null ? void 0 : _a.base) == null ? void 0 : _b.spent) * 1.2)) + " \u20BD", 1)
                                              ];
                                            }),
                                            _: 2
                                          }, 1024),
                                          createVNode(_component_UiTableCell, { class: "text-center" }, {
                                            default: withCtx(() => {
                                              var _a, _b, _c, _d;
                                              return [
                                                createTextVNode(toDisplayString(f((_d = (_c = (_b = (_a = it == null ? void 0 : it.total) == null ? void 0 : _a.base) == null ? void 0 : _b.vk) == null ? void 0 : _c.goals) != null ? _d : 0)), 1)
                                              ];
                                            }),
                                            _: 2
                                          }, 1024),
                                          createVNode(_component_UiTableCell, { class: "text-center" }, {
                                            default: withCtx(() => {
                                              var _a, _b, _c;
                                              return [
                                                createTextVNode(toDisplayString(f((_c = (_b = (_a = it == null ? void 0 : it.total) == null ? void 0 : _a.base) == null ? void 0 : _b.shows) != null ? _c : 0)), 1)
                                              ];
                                            }),
                                            _: 2
                                          }, 1024),
                                          createVNode(_component_UiTableCell, { class: "text-center" }, {
                                            default: withCtx(() => {
                                              var _a, _b, _c;
                                              return [
                                                createTextVNode(toDisplayString(f((_c = (_b = (_a = it == null ? void 0 : it.total) == null ? void 0 : _a.base) == null ? void 0 : _b.clicks) != null ? _c : 0)), 1)
                                              ];
                                            }),
                                            _: 2
                                          }, 1024),
                                          createVNode(_component_UiTableCell, { class: "text-center" }, {
                                            default: withCtx(() => {
                                              var _a, _b, _c, _d;
                                              return [
                                                createTextVNode(toDisplayString(f((_d = (_c = (_b = (_a = it == null ? void 0 : it.total) == null ? void 0 : _a.base) == null ? void 0 : _b.vk) == null ? void 0 : _c.cr) != null ? _d : 0)) + " %", 1)
                                              ];
                                            }),
                                            _: 2
                                          }, 1024),
                                          createVNode(_component_UiTableCell, { class: "text-center" }, {
                                            default: withCtx(() => {
                                              var _a, _b, _c;
                                              return [
                                                createTextVNode(toDisplayString(f((_c = (_b = (_a = it == null ? void 0 : it.total) == null ? void 0 : _a.base) == null ? void 0 : _b.ctr) != null ? _c : 0)) + " %", 1)
                                              ];
                                            }),
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
                                  (openBlock(true), createBlock(Fragment, null, renderList(sortedItems.value, (it) => {
                                    return openBlock(), createBlock(_component_UiTableRow, {
                                      key: it.id || it._id
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_UiTableCell, { class: "text-left" }, {
                                          default: withCtx(() => [
                                            createVNode("span", {
                                              class: ["inline-flex items-center gap-2 rounded-full pl-1 pr-2 py-1 text-xs text-white", {
                                                "bg-emerald-500": it.status === "active",
                                                "bg-amber-500": it.status === "blocked",
                                                "bg-rose-500": it.status === "deleted"
                                              }]
                                            }, [
                                              it.status === "active" ? (openBlock(), createBlock(unref(CheckCircle2), {
                                                key: 0,
                                                class: "w-3 h-3"
                                              })) : it.status === "blocked" ? (openBlock(), createBlock(unref(TrendingUpDown), {
                                                key: 1,
                                                class: "w-3 h-3"
                                              })) : (openBlock(), createBlock(unref(XCircle), {
                                                key: 2,
                                                class: "w-3 h-3"
                                              })),
                                              createTextVNode(" " + toDisplayString(it.status), 1)
                                            ], 2)
                                          ]),
                                          _: 2
                                        }, 1024),
                                        createVNode(_component_UiTableCell, { class: "text-left" }, {
                                          default: withCtx(() => {
                                            var _a, _b;
                                            return [
                                              createVNode("div", { class: "flex flex-col gap-1" }, [
                                                createVNode("span", null, toDisplayString((_a = it.name) != null ? _a : "-"), 1),
                                                createVNode("span", { class: "text-xs text-neutral-400" }, toDisplayString((_b = it.id) != null ? _b : it._id), 1)
                                              ])
                                            ];
                                          }),
                                          _: 2
                                        }, 1024),
                                        createVNode(_component_UiTableCell, { class: "text-center" }, {
                                          default: withCtx(() => {
                                            var _a, _b, _c;
                                            return [
                                              createTextVNode(toDisplayString(f((_c = (_b = (_a = it == null ? void 0 : it.total) == null ? void 0 : _a.base) == null ? void 0 : _b.spent) != null ? _c : "0")) + " \u20BD", 1)
                                            ];
                                          }),
                                          _: 2
                                        }, 1024),
                                        createVNode(_component_UiTableCell, { class: "text-center" }, {
                                          default: withCtx(() => {
                                            var _a, _b;
                                            return [
                                              createTextVNode(toDisplayString(f(toNumber((_b = (_a = it == null ? void 0 : it.total) == null ? void 0 : _a.base) == null ? void 0 : _b.spent) * 1.2)) + " \u20BD", 1)
                                            ];
                                          }),
                                          _: 2
                                        }, 1024),
                                        createVNode(_component_UiTableCell, { class: "text-center" }, {
                                          default: withCtx(() => {
                                            var _a, _b, _c, _d;
                                            return [
                                              createTextVNode(toDisplayString(f((_d = (_c = (_b = (_a = it == null ? void 0 : it.total) == null ? void 0 : _a.base) == null ? void 0 : _b.vk) == null ? void 0 : _c.goals) != null ? _d : 0)), 1)
                                            ];
                                          }),
                                          _: 2
                                        }, 1024),
                                        createVNode(_component_UiTableCell, { class: "text-center" }, {
                                          default: withCtx(() => {
                                            var _a, _b, _c;
                                            return [
                                              createTextVNode(toDisplayString(f((_c = (_b = (_a = it == null ? void 0 : it.total) == null ? void 0 : _a.base) == null ? void 0 : _b.shows) != null ? _c : 0)), 1)
                                            ];
                                          }),
                                          _: 2
                                        }, 1024),
                                        createVNode(_component_UiTableCell, { class: "text-center" }, {
                                          default: withCtx(() => {
                                            var _a, _b, _c;
                                            return [
                                              createTextVNode(toDisplayString(f((_c = (_b = (_a = it == null ? void 0 : it.total) == null ? void 0 : _a.base) == null ? void 0 : _b.clicks) != null ? _c : 0)), 1)
                                            ];
                                          }),
                                          _: 2
                                        }, 1024),
                                        createVNode(_component_UiTableCell, { class: "text-center" }, {
                                          default: withCtx(() => {
                                            var _a, _b, _c, _d;
                                            return [
                                              createTextVNode(toDisplayString(f((_d = (_c = (_b = (_a = it == null ? void 0 : it.total) == null ? void 0 : _a.base) == null ? void 0 : _b.vk) == null ? void 0 : _c.cr) != null ? _d : 0)) + " %", 1)
                                            ];
                                          }),
                                          _: 2
                                        }, 1024),
                                        createVNode(_component_UiTableCell, { class: "text-center" }, {
                                          default: withCtx(() => {
                                            var _a, _b, _c;
                                            return [
                                              createTextVNode(toDisplayString(f((_c = (_b = (_a = it == null ? void 0 : it.total) == null ? void 0 : _a.base) == null ? void 0 : _b.ctr) != null ? _c : 0)) + " %", 1)
                                            ];
                                          }),
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
                                createVNode(_component_UiTableRow, { class: "bg-gray-50" }, {
                                  default: withCtx(() => [
                                    createVNode(_component_UiTableHead, { class: "text-left" }, {
                                      default: withCtx(() => [
                                        createTextVNode("\u0421\u0442\u0430\u0442\u0443\u0441")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_UiTableHead, { class: "text-left" }, {
                                      default: withCtx(() => [
                                        createTextVNode("\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_UiTableHead, {
                                      class: "text-center cursor-pointer select-none",
                                      onClick: ($event) => setSort("spent")
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" \u041F\u043E\u0442\u0440\u0430\u0447\u0435\u043D\u043E "),
                                        sortKey.value === "spent" ? (openBlock(), createBlock("span", { key: 0 }, toDisplayString(sortDir.value === "asc" ? "\u25B2" : "\u25BC"), 1)) : createCommentVNode("", true)
                                      ]),
                                      _: 1
                                    }, 8, ["onClick"]),
                                    createVNode(_component_UiTableHead, {
                                      class: "text-center cursor-pointer select-none",
                                      onClick: ($event) => setSort("spent_nds")
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" \u041F\u043E\u0442\u0440\u0430\u0447\u0435\u043D\u043E \u0441 \u041D\u0414\u0421 "),
                                        sortKey.value === "spent_nds" ? (openBlock(), createBlock("span", { key: 0 }, toDisplayString(sortDir.value === "asc" ? "\u25B2" : "\u25BC"), 1)) : createCommentVNode("", true)
                                      ]),
                                      _: 1
                                    }, 8, ["onClick"]),
                                    createVNode(_component_UiTableHead, {
                                      class: "text-center cursor-pointer select-none",
                                      onClick: ($event) => setSort("vk_goals")
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" \u041B\u0438\u0434\u044B "),
                                        sortKey.value === "vk_goals" ? (openBlock(), createBlock("span", { key: 0 }, toDisplayString(sortDir.value === "asc" ? "\u25B2" : "\u25BC"), 1)) : createCommentVNode("", true)
                                      ]),
                                      _: 1
                                    }, 8, ["onClick"]),
                                    createVNode(_component_UiTableHead, {
                                      class: "text-center cursor-pointer select-none",
                                      onClick: ($event) => setSort("shows")
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" \u041F\u043E\u043A\u0430\u0437\u044B "),
                                        sortKey.value === "shows" ? (openBlock(), createBlock("span", { key: 0 }, toDisplayString(sortDir.value === "asc" ? "\u25B2" : "\u25BC"), 1)) : createCommentVNode("", true)
                                      ]),
                                      _: 1
                                    }, 8, ["onClick"]),
                                    createVNode(_component_UiTableHead, {
                                      class: "text-center cursor-pointer select-none",
                                      onClick: ($event) => setSort("clicks")
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" \u041A\u043B\u0438\u043A\u0438 "),
                                        sortKey.value === "clicks" ? (openBlock(), createBlock("span", { key: 0 }, toDisplayString(sortDir.value === "asc" ? "\u25B2" : "\u25BC"), 1)) : createCommentVNode("", true)
                                      ]),
                                      _: 1
                                    }, 8, ["onClick"]),
                                    createVNode(_component_UiTableHead, {
                                      class: "text-center cursor-pointer select-none",
                                      onClick: ($event) => setSort("vk_cr")
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" cr "),
                                        sortKey.value === "vk_cr" ? (openBlock(), createBlock("span", { key: 0 }, toDisplayString(sortDir.value === "asc" ? "\u25B2" : "\u25BC"), 1)) : createCommentVNode("", true)
                                      ]),
                                      _: 1
                                    }, 8, ["onClick"]),
                                    createVNode(_component_UiTableHead, {
                                      class: "text-center cursor-pointer select-none",
                                      onClick: ($event) => setSort("ctr")
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" CTR "),
                                        sortKey.value === "ctr" ? (openBlock(), createBlock("span", { key: 0 }, toDisplayString(sortDir.value === "asc" ? "\u25B2" : "\u25BC"), 1)) : createCommentVNode("", true)
                                      ]),
                                      _: 1
                                    }, 8, ["onClick"])
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(_component_UiTableBody, null, {
                              default: withCtx(() => [
                                (openBlock(true), createBlock(Fragment, null, renderList(sortedItems.value, (it) => {
                                  return openBlock(), createBlock(_component_UiTableRow, {
                                    key: it.id || it._id
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_UiTableCell, { class: "text-left" }, {
                                        default: withCtx(() => [
                                          createVNode("span", {
                                            class: ["inline-flex items-center gap-2 rounded-full pl-1 pr-2 py-1 text-xs text-white", {
                                              "bg-emerald-500": it.status === "active",
                                              "bg-amber-500": it.status === "blocked",
                                              "bg-rose-500": it.status === "deleted"
                                            }]
                                          }, [
                                            it.status === "active" ? (openBlock(), createBlock(unref(CheckCircle2), {
                                              key: 0,
                                              class: "w-3 h-3"
                                            })) : it.status === "blocked" ? (openBlock(), createBlock(unref(TrendingUpDown), {
                                              key: 1,
                                              class: "w-3 h-3"
                                            })) : (openBlock(), createBlock(unref(XCircle), {
                                              key: 2,
                                              class: "w-3 h-3"
                                            })),
                                            createTextVNode(" " + toDisplayString(it.status), 1)
                                          ], 2)
                                        ]),
                                        _: 2
                                      }, 1024),
                                      createVNode(_component_UiTableCell, { class: "text-left" }, {
                                        default: withCtx(() => {
                                          var _a, _b;
                                          return [
                                            createVNode("div", { class: "flex flex-col gap-1" }, [
                                              createVNode("span", null, toDisplayString((_a = it.name) != null ? _a : "-"), 1),
                                              createVNode("span", { class: "text-xs text-neutral-400" }, toDisplayString((_b = it.id) != null ? _b : it._id), 1)
                                            ])
                                          ];
                                        }),
                                        _: 2
                                      }, 1024),
                                      createVNode(_component_UiTableCell, { class: "text-center" }, {
                                        default: withCtx(() => {
                                          var _a, _b, _c;
                                          return [
                                            createTextVNode(toDisplayString(f((_c = (_b = (_a = it == null ? void 0 : it.total) == null ? void 0 : _a.base) == null ? void 0 : _b.spent) != null ? _c : "0")) + " \u20BD", 1)
                                          ];
                                        }),
                                        _: 2
                                      }, 1024),
                                      createVNode(_component_UiTableCell, { class: "text-center" }, {
                                        default: withCtx(() => {
                                          var _a, _b;
                                          return [
                                            createTextVNode(toDisplayString(f(toNumber((_b = (_a = it == null ? void 0 : it.total) == null ? void 0 : _a.base) == null ? void 0 : _b.spent) * 1.2)) + " \u20BD", 1)
                                          ];
                                        }),
                                        _: 2
                                      }, 1024),
                                      createVNode(_component_UiTableCell, { class: "text-center" }, {
                                        default: withCtx(() => {
                                          var _a, _b, _c, _d;
                                          return [
                                            createTextVNode(toDisplayString(f((_d = (_c = (_b = (_a = it == null ? void 0 : it.total) == null ? void 0 : _a.base) == null ? void 0 : _b.vk) == null ? void 0 : _c.goals) != null ? _d : 0)), 1)
                                          ];
                                        }),
                                        _: 2
                                      }, 1024),
                                      createVNode(_component_UiTableCell, { class: "text-center" }, {
                                        default: withCtx(() => {
                                          var _a, _b, _c;
                                          return [
                                            createTextVNode(toDisplayString(f((_c = (_b = (_a = it == null ? void 0 : it.total) == null ? void 0 : _a.base) == null ? void 0 : _b.shows) != null ? _c : 0)), 1)
                                          ];
                                        }),
                                        _: 2
                                      }, 1024),
                                      createVNode(_component_UiTableCell, { class: "text-center" }, {
                                        default: withCtx(() => {
                                          var _a, _b, _c;
                                          return [
                                            createTextVNode(toDisplayString(f((_c = (_b = (_a = it == null ? void 0 : it.total) == null ? void 0 : _a.base) == null ? void 0 : _b.clicks) != null ? _c : 0)), 1)
                                          ];
                                        }),
                                        _: 2
                                      }, 1024),
                                      createVNode(_component_UiTableCell, { class: "text-center" }, {
                                        default: withCtx(() => {
                                          var _a, _b, _c, _d;
                                          return [
                                            createTextVNode(toDisplayString(f((_d = (_c = (_b = (_a = it == null ? void 0 : it.total) == null ? void 0 : _a.base) == null ? void 0 : _b.vk) == null ? void 0 : _c.cr) != null ? _d : 0)) + " %", 1)
                                          ];
                                        }),
                                        _: 2
                                      }, 1024),
                                      createVNode(_component_UiTableCell, { class: "text-center" }, {
                                        default: withCtx(() => {
                                          var _a, _b, _c;
                                          return [
                                            createTextVNode(toDisplayString(f((_c = (_b = (_a = it == null ? void 0 : it.total) == null ? void 0 : _a.base) == null ? void 0 : _b.ctr) != null ? _c : 0)) + " %", 1)
                                          ];
                                        }),
                                        _: 2
                                      }, 1024)
                                    ]),
                                    _: 2
                                  }, 1024);
                                }), 128))
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    _push3(ssrRenderComponent(_component_UiTableEmpty, null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`\u043D\u0435\u0442 \u0437\u0430\u043F\u0438\u0441\u0435\u0439`);
                        } else {
                          return [
                            createTextVNode("\u043D\u0435\u0442 \u0437\u0430\u043F\u0438\u0441\u0435\u0439")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  }
                } else {
                  return [
                    listItems.value.length ? (openBlock(), createBlock(_component_UiTable, { key: 0 }, {
                      default: withCtx(() => [
                        createVNode(_component_UiTableHeader, null, {
                          default: withCtx(() => [
                            createVNode(_component_UiTableRow, { class: "bg-gray-50" }, {
                              default: withCtx(() => [
                                createVNode(_component_UiTableHead, { class: "text-left" }, {
                                  default: withCtx(() => [
                                    createTextVNode("\u0421\u0442\u0430\u0442\u0443\u0441")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_UiTableHead, { class: "text-left" }, {
                                  default: withCtx(() => [
                                    createTextVNode("\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_UiTableHead, {
                                  class: "text-center cursor-pointer select-none",
                                  onClick: ($event) => setSort("spent")
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" \u041F\u043E\u0442\u0440\u0430\u0447\u0435\u043D\u043E "),
                                    sortKey.value === "spent" ? (openBlock(), createBlock("span", { key: 0 }, toDisplayString(sortDir.value === "asc" ? "\u25B2" : "\u25BC"), 1)) : createCommentVNode("", true)
                                  ]),
                                  _: 1
                                }, 8, ["onClick"]),
                                createVNode(_component_UiTableHead, {
                                  class: "text-center cursor-pointer select-none",
                                  onClick: ($event) => setSort("spent_nds")
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" \u041F\u043E\u0442\u0440\u0430\u0447\u0435\u043D\u043E \u0441 \u041D\u0414\u0421 "),
                                    sortKey.value === "spent_nds" ? (openBlock(), createBlock("span", { key: 0 }, toDisplayString(sortDir.value === "asc" ? "\u25B2" : "\u25BC"), 1)) : createCommentVNode("", true)
                                  ]),
                                  _: 1
                                }, 8, ["onClick"]),
                                createVNode(_component_UiTableHead, {
                                  class: "text-center cursor-pointer select-none",
                                  onClick: ($event) => setSort("vk_goals")
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" \u041B\u0438\u0434\u044B "),
                                    sortKey.value === "vk_goals" ? (openBlock(), createBlock("span", { key: 0 }, toDisplayString(sortDir.value === "asc" ? "\u25B2" : "\u25BC"), 1)) : createCommentVNode("", true)
                                  ]),
                                  _: 1
                                }, 8, ["onClick"]),
                                createVNode(_component_UiTableHead, {
                                  class: "text-center cursor-pointer select-none",
                                  onClick: ($event) => setSort("shows")
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" \u041F\u043E\u043A\u0430\u0437\u044B "),
                                    sortKey.value === "shows" ? (openBlock(), createBlock("span", { key: 0 }, toDisplayString(sortDir.value === "asc" ? "\u25B2" : "\u25BC"), 1)) : createCommentVNode("", true)
                                  ]),
                                  _: 1
                                }, 8, ["onClick"]),
                                createVNode(_component_UiTableHead, {
                                  class: "text-center cursor-pointer select-none",
                                  onClick: ($event) => setSort("clicks")
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" \u041A\u043B\u0438\u043A\u0438 "),
                                    sortKey.value === "clicks" ? (openBlock(), createBlock("span", { key: 0 }, toDisplayString(sortDir.value === "asc" ? "\u25B2" : "\u25BC"), 1)) : createCommentVNode("", true)
                                  ]),
                                  _: 1
                                }, 8, ["onClick"]),
                                createVNode(_component_UiTableHead, {
                                  class: "text-center cursor-pointer select-none",
                                  onClick: ($event) => setSort("vk_cr")
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" cr "),
                                    sortKey.value === "vk_cr" ? (openBlock(), createBlock("span", { key: 0 }, toDisplayString(sortDir.value === "asc" ? "\u25B2" : "\u25BC"), 1)) : createCommentVNode("", true)
                                  ]),
                                  _: 1
                                }, 8, ["onClick"]),
                                createVNode(_component_UiTableHead, {
                                  class: "text-center cursor-pointer select-none",
                                  onClick: ($event) => setSort("ctr")
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" CTR "),
                                    sortKey.value === "ctr" ? (openBlock(), createBlock("span", { key: 0 }, toDisplayString(sortDir.value === "asc" ? "\u25B2" : "\u25BC"), 1)) : createCommentVNode("", true)
                                  ]),
                                  _: 1
                                }, 8, ["onClick"])
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UiTableBody, null, {
                          default: withCtx(() => [
                            (openBlock(true), createBlock(Fragment, null, renderList(sortedItems.value, (it) => {
                              return openBlock(), createBlock(_component_UiTableRow, {
                                key: it.id || it._id
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_UiTableCell, { class: "text-left" }, {
                                    default: withCtx(() => [
                                      createVNode("span", {
                                        class: ["inline-flex items-center gap-2 rounded-full pl-1 pr-2 py-1 text-xs text-white", {
                                          "bg-emerald-500": it.status === "active",
                                          "bg-amber-500": it.status === "blocked",
                                          "bg-rose-500": it.status === "deleted"
                                        }]
                                      }, [
                                        it.status === "active" ? (openBlock(), createBlock(unref(CheckCircle2), {
                                          key: 0,
                                          class: "w-3 h-3"
                                        })) : it.status === "blocked" ? (openBlock(), createBlock(unref(TrendingUpDown), {
                                          key: 1,
                                          class: "w-3 h-3"
                                        })) : (openBlock(), createBlock(unref(XCircle), {
                                          key: 2,
                                          class: "w-3 h-3"
                                        })),
                                        createTextVNode(" " + toDisplayString(it.status), 1)
                                      ], 2)
                                    ]),
                                    _: 2
                                  }, 1024),
                                  createVNode(_component_UiTableCell, { class: "text-left" }, {
                                    default: withCtx(() => {
                                      var _a, _b;
                                      return [
                                        createVNode("div", { class: "flex flex-col gap-1" }, [
                                          createVNode("span", null, toDisplayString((_a = it.name) != null ? _a : "-"), 1),
                                          createVNode("span", { class: "text-xs text-neutral-400" }, toDisplayString((_b = it.id) != null ? _b : it._id), 1)
                                        ])
                                      ];
                                    }),
                                    _: 2
                                  }, 1024),
                                  createVNode(_component_UiTableCell, { class: "text-center" }, {
                                    default: withCtx(() => {
                                      var _a, _b, _c;
                                      return [
                                        createTextVNode(toDisplayString(f((_c = (_b = (_a = it == null ? void 0 : it.total) == null ? void 0 : _a.base) == null ? void 0 : _b.spent) != null ? _c : "0")) + " \u20BD", 1)
                                      ];
                                    }),
                                    _: 2
                                  }, 1024),
                                  createVNode(_component_UiTableCell, { class: "text-center" }, {
                                    default: withCtx(() => {
                                      var _a, _b;
                                      return [
                                        createTextVNode(toDisplayString(f(toNumber((_b = (_a = it == null ? void 0 : it.total) == null ? void 0 : _a.base) == null ? void 0 : _b.spent) * 1.2)) + " \u20BD", 1)
                                      ];
                                    }),
                                    _: 2
                                  }, 1024),
                                  createVNode(_component_UiTableCell, { class: "text-center" }, {
                                    default: withCtx(() => {
                                      var _a, _b, _c, _d;
                                      return [
                                        createTextVNode(toDisplayString(f((_d = (_c = (_b = (_a = it == null ? void 0 : it.total) == null ? void 0 : _a.base) == null ? void 0 : _b.vk) == null ? void 0 : _c.goals) != null ? _d : 0)), 1)
                                      ];
                                    }),
                                    _: 2
                                  }, 1024),
                                  createVNode(_component_UiTableCell, { class: "text-center" }, {
                                    default: withCtx(() => {
                                      var _a, _b, _c;
                                      return [
                                        createTextVNode(toDisplayString(f((_c = (_b = (_a = it == null ? void 0 : it.total) == null ? void 0 : _a.base) == null ? void 0 : _b.shows) != null ? _c : 0)), 1)
                                      ];
                                    }),
                                    _: 2
                                  }, 1024),
                                  createVNode(_component_UiTableCell, { class: "text-center" }, {
                                    default: withCtx(() => {
                                      var _a, _b, _c;
                                      return [
                                        createTextVNode(toDisplayString(f((_c = (_b = (_a = it == null ? void 0 : it.total) == null ? void 0 : _a.base) == null ? void 0 : _b.clicks) != null ? _c : 0)), 1)
                                      ];
                                    }),
                                    _: 2
                                  }, 1024),
                                  createVNode(_component_UiTableCell, { class: "text-center" }, {
                                    default: withCtx(() => {
                                      var _a, _b, _c, _d;
                                      return [
                                        createTextVNode(toDisplayString(f((_d = (_c = (_b = (_a = it == null ? void 0 : it.total) == null ? void 0 : _a.base) == null ? void 0 : _b.vk) == null ? void 0 : _c.cr) != null ? _d : 0)) + " %", 1)
                                      ];
                                    }),
                                    _: 2
                                  }, 1024),
                                  createVNode(_component_UiTableCell, { class: "text-center" }, {
                                    default: withCtx(() => {
                                      var _a, _b, _c;
                                      return [
                                        createTextVNode(toDisplayString(f((_c = (_b = (_a = it == null ? void 0 : it.total) == null ? void 0 : _a.base) == null ? void 0 : _b.ctr) != null ? _c : 0)) + " %", 1)
                                      ];
                                    }),
                                    _: 2
                                  }, 1024)
                                ]),
                                _: 2
                              }, 1024);
                            }), 128))
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })) : (openBlock(), createBlock(_component_UiTableEmpty, { key: 1 }, {
                      default: withCtx(() => [
                        createTextVNode("\u043D\u0435\u0442 \u0437\u0430\u043F\u0438\u0441\u0435\u0439")
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
              createVNode(_component_UiCardHeader, { class: "pb-2" }, {
                default: withCtx(() => [
                  createVNode(_component_UiCardTitle, null, {
                    default: withCtx(() => [
                      createTextVNode("\u041A\u0430\u043C\u043F\u0430\u043D\u0438\u0438")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_UiCardContent, null, {
                default: withCtx(() => [
                  listItems.value.length ? (openBlock(), createBlock(_component_UiTable, { key: 0 }, {
                    default: withCtx(() => [
                      createVNode(_component_UiTableHeader, null, {
                        default: withCtx(() => [
                          createVNode(_component_UiTableRow, { class: "bg-gray-50" }, {
                            default: withCtx(() => [
                              createVNode(_component_UiTableHead, { class: "text-left" }, {
                                default: withCtx(() => [
                                  createTextVNode("\u0421\u0442\u0430\u0442\u0443\u0441")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_UiTableHead, { class: "text-left" }, {
                                default: withCtx(() => [
                                  createTextVNode("\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_UiTableHead, {
                                class: "text-center cursor-pointer select-none",
                                onClick: ($event) => setSort("spent")
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" \u041F\u043E\u0442\u0440\u0430\u0447\u0435\u043D\u043E "),
                                  sortKey.value === "spent" ? (openBlock(), createBlock("span", { key: 0 }, toDisplayString(sortDir.value === "asc" ? "\u25B2" : "\u25BC"), 1)) : createCommentVNode("", true)
                                ]),
                                _: 1
                              }, 8, ["onClick"]),
                              createVNode(_component_UiTableHead, {
                                class: "text-center cursor-pointer select-none",
                                onClick: ($event) => setSort("spent_nds")
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" \u041F\u043E\u0442\u0440\u0430\u0447\u0435\u043D\u043E \u0441 \u041D\u0414\u0421 "),
                                  sortKey.value === "spent_nds" ? (openBlock(), createBlock("span", { key: 0 }, toDisplayString(sortDir.value === "asc" ? "\u25B2" : "\u25BC"), 1)) : createCommentVNode("", true)
                                ]),
                                _: 1
                              }, 8, ["onClick"]),
                              createVNode(_component_UiTableHead, {
                                class: "text-center cursor-pointer select-none",
                                onClick: ($event) => setSort("vk_goals")
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" \u041B\u0438\u0434\u044B "),
                                  sortKey.value === "vk_goals" ? (openBlock(), createBlock("span", { key: 0 }, toDisplayString(sortDir.value === "asc" ? "\u25B2" : "\u25BC"), 1)) : createCommentVNode("", true)
                                ]),
                                _: 1
                              }, 8, ["onClick"]),
                              createVNode(_component_UiTableHead, {
                                class: "text-center cursor-pointer select-none",
                                onClick: ($event) => setSort("shows")
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" \u041F\u043E\u043A\u0430\u0437\u044B "),
                                  sortKey.value === "shows" ? (openBlock(), createBlock("span", { key: 0 }, toDisplayString(sortDir.value === "asc" ? "\u25B2" : "\u25BC"), 1)) : createCommentVNode("", true)
                                ]),
                                _: 1
                              }, 8, ["onClick"]),
                              createVNode(_component_UiTableHead, {
                                class: "text-center cursor-pointer select-none",
                                onClick: ($event) => setSort("clicks")
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" \u041A\u043B\u0438\u043A\u0438 "),
                                  sortKey.value === "clicks" ? (openBlock(), createBlock("span", { key: 0 }, toDisplayString(sortDir.value === "asc" ? "\u25B2" : "\u25BC"), 1)) : createCommentVNode("", true)
                                ]),
                                _: 1
                              }, 8, ["onClick"]),
                              createVNode(_component_UiTableHead, {
                                class: "text-center cursor-pointer select-none",
                                onClick: ($event) => setSort("vk_cr")
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" cr "),
                                  sortKey.value === "vk_cr" ? (openBlock(), createBlock("span", { key: 0 }, toDisplayString(sortDir.value === "asc" ? "\u25B2" : "\u25BC"), 1)) : createCommentVNode("", true)
                                ]),
                                _: 1
                              }, 8, ["onClick"]),
                              createVNode(_component_UiTableHead, {
                                class: "text-center cursor-pointer select-none",
                                onClick: ($event) => setSort("ctr")
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" CTR "),
                                  sortKey.value === "ctr" ? (openBlock(), createBlock("span", { key: 0 }, toDisplayString(sortDir.value === "asc" ? "\u25B2" : "\u25BC"), 1)) : createCommentVNode("", true)
                                ]),
                                _: 1
                              }, 8, ["onClick"])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_UiTableBody, null, {
                        default: withCtx(() => [
                          (openBlock(true), createBlock(Fragment, null, renderList(sortedItems.value, (it) => {
                            return openBlock(), createBlock(_component_UiTableRow, {
                              key: it.id || it._id
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_UiTableCell, { class: "text-left" }, {
                                  default: withCtx(() => [
                                    createVNode("span", {
                                      class: ["inline-flex items-center gap-2 rounded-full pl-1 pr-2 py-1 text-xs text-white", {
                                        "bg-emerald-500": it.status === "active",
                                        "bg-amber-500": it.status === "blocked",
                                        "bg-rose-500": it.status === "deleted"
                                      }]
                                    }, [
                                      it.status === "active" ? (openBlock(), createBlock(unref(CheckCircle2), {
                                        key: 0,
                                        class: "w-3 h-3"
                                      })) : it.status === "blocked" ? (openBlock(), createBlock(unref(TrendingUpDown), {
                                        key: 1,
                                        class: "w-3 h-3"
                                      })) : (openBlock(), createBlock(unref(XCircle), {
                                        key: 2,
                                        class: "w-3 h-3"
                                      })),
                                      createTextVNode(" " + toDisplayString(it.status), 1)
                                    ], 2)
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode(_component_UiTableCell, { class: "text-left" }, {
                                  default: withCtx(() => {
                                    var _a, _b;
                                    return [
                                      createVNode("div", { class: "flex flex-col gap-1" }, [
                                        createVNode("span", null, toDisplayString((_a = it.name) != null ? _a : "-"), 1),
                                        createVNode("span", { class: "text-xs text-neutral-400" }, toDisplayString((_b = it.id) != null ? _b : it._id), 1)
                                      ])
                                    ];
                                  }),
                                  _: 2
                                }, 1024),
                                createVNode(_component_UiTableCell, { class: "text-center" }, {
                                  default: withCtx(() => {
                                    var _a, _b, _c;
                                    return [
                                      createTextVNode(toDisplayString(f((_c = (_b = (_a = it == null ? void 0 : it.total) == null ? void 0 : _a.base) == null ? void 0 : _b.spent) != null ? _c : "0")) + " \u20BD", 1)
                                    ];
                                  }),
                                  _: 2
                                }, 1024),
                                createVNode(_component_UiTableCell, { class: "text-center" }, {
                                  default: withCtx(() => {
                                    var _a, _b;
                                    return [
                                      createTextVNode(toDisplayString(f(toNumber((_b = (_a = it == null ? void 0 : it.total) == null ? void 0 : _a.base) == null ? void 0 : _b.spent) * 1.2)) + " \u20BD", 1)
                                    ];
                                  }),
                                  _: 2
                                }, 1024),
                                createVNode(_component_UiTableCell, { class: "text-center" }, {
                                  default: withCtx(() => {
                                    var _a, _b, _c, _d;
                                    return [
                                      createTextVNode(toDisplayString(f((_d = (_c = (_b = (_a = it == null ? void 0 : it.total) == null ? void 0 : _a.base) == null ? void 0 : _b.vk) == null ? void 0 : _c.goals) != null ? _d : 0)), 1)
                                    ];
                                  }),
                                  _: 2
                                }, 1024),
                                createVNode(_component_UiTableCell, { class: "text-center" }, {
                                  default: withCtx(() => {
                                    var _a, _b, _c;
                                    return [
                                      createTextVNode(toDisplayString(f((_c = (_b = (_a = it == null ? void 0 : it.total) == null ? void 0 : _a.base) == null ? void 0 : _b.shows) != null ? _c : 0)), 1)
                                    ];
                                  }),
                                  _: 2
                                }, 1024),
                                createVNode(_component_UiTableCell, { class: "text-center" }, {
                                  default: withCtx(() => {
                                    var _a, _b, _c;
                                    return [
                                      createTextVNode(toDisplayString(f((_c = (_b = (_a = it == null ? void 0 : it.total) == null ? void 0 : _a.base) == null ? void 0 : _b.clicks) != null ? _c : 0)), 1)
                                    ];
                                  }),
                                  _: 2
                                }, 1024),
                                createVNode(_component_UiTableCell, { class: "text-center" }, {
                                  default: withCtx(() => {
                                    var _a, _b, _c, _d;
                                    return [
                                      createTextVNode(toDisplayString(f((_d = (_c = (_b = (_a = it == null ? void 0 : it.total) == null ? void 0 : _a.base) == null ? void 0 : _b.vk) == null ? void 0 : _c.cr) != null ? _d : 0)) + " %", 1)
                                    ];
                                  }),
                                  _: 2
                                }, 1024),
                                createVNode(_component_UiTableCell, { class: "text-center" }, {
                                  default: withCtx(() => {
                                    var _a, _b, _c;
                                    return [
                                      createTextVNode(toDisplayString(f((_c = (_b = (_a = it == null ? void 0 : it.total) == null ? void 0 : _a.base) == null ? void 0 : _b.ctr) != null ? _c : 0)) + " %", 1)
                                    ];
                                  }),
                                  _: 2
                                }, 1024)
                              ]),
                              _: 2
                            }, 1024);
                          }), 128))
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })) : (openBlock(), createBlock(_component_UiTableEmpty, { key: 1 }, {
                    default: withCtx(() => [
                      createTextVNode("\u043D\u0435\u0442 \u0437\u0430\u043F\u0438\u0441\u0435\u0439")
                    ]),
                    _: 1
                  }))
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UiCard, { class: "mt-4" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UiCardHeader, { class: "pb-2" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UiCardTitle, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`\u041F\u043E\u0434\u043D\u0435\u0432\u043D\u0430\u044F \u0441\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043A\u0430`);
                      } else {
                        return [
                          createTextVNode("\u041F\u043E\u0434\u043D\u0435\u0432\u043D\u0430\u044F \u0441\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043A\u0430")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UiCardTitle, null, {
                      default: withCtx(() => [
                        createTextVNode("\u041F\u043E\u0434\u043D\u0435\u0432\u043D\u0430\u044F \u0441\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043A\u0430")
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
                var _a, _b;
                if (_push3) {
                  if ((_a = rows.value) == null ? void 0 : _a.length) {
                    _push3(ssrRenderComponent(_component_UiTable, null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_UiTableHeader, null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_UiTableRow, { class: "bg-gray-50" }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(_component_UiTableHead, { class: "text-left" }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`\u0414\u0430\u0442\u0430`);
                                          } else {
                                            return [
                                              createTextVNode("\u0414\u0430\u0442\u0430")
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                      _push6(ssrRenderComponent(_component_UiTableHead, { class: "text-center" }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`\u041F\u043E\u043A\u0430\u0437\u044B`);
                                          } else {
                                            return [
                                              createTextVNode("\u041F\u043E\u043A\u0430\u0437\u044B")
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                      _push6(ssrRenderComponent(_component_UiTableHead, { class: "text-center" }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`\u041A\u043B\u0438\u043A\u0438`);
                                          } else {
                                            return [
                                              createTextVNode("\u041A\u043B\u0438\u043A\u0438")
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                      _push6(ssrRenderComponent(_component_UiTableHead, { class: "text-center" }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`CTR %`);
                                          } else {
                                            return [
                                              createTextVNode("CTR %")
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                      _push6(ssrRenderComponent(_component_UiTableHead, { class: "text-center" }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`CPC`);
                                          } else {
                                            return [
                                              createTextVNode("CPC")
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                      _push6(ssrRenderComponent(_component_UiTableHead, { class: "text-center" }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`CPM`);
                                          } else {
                                            return [
                                              createTextVNode("CPM")
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                      _push6(ssrRenderComponent(_component_UiTableHead, { class: "text-center" }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`Spend`);
                                          } else {
                                            return [
                                              createTextVNode("Spend")
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(_component_UiTableHead, { class: "text-left" }, {
                                          default: withCtx(() => [
                                            createTextVNode("\u0414\u0430\u0442\u0430")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_UiTableHead, { class: "text-center" }, {
                                          default: withCtx(() => [
                                            createTextVNode("\u041F\u043E\u043A\u0430\u0437\u044B")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_UiTableHead, { class: "text-center" }, {
                                          default: withCtx(() => [
                                            createTextVNode("\u041A\u043B\u0438\u043A\u0438")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_UiTableHead, { class: "text-center" }, {
                                          default: withCtx(() => [
                                            createTextVNode("CTR %")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_UiTableHead, { class: "text-center" }, {
                                          default: withCtx(() => [
                                            createTextVNode("CPC")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_UiTableHead, { class: "text-center" }, {
                                          default: withCtx(() => [
                                            createTextVNode("CPM")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_UiTableHead, { class: "text-center" }, {
                                          default: withCtx(() => [
                                            createTextVNode("Spend")
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
                                  createVNode(_component_UiTableRow, { class: "bg-gray-50" }, {
                                    default: withCtx(() => [
                                      createVNode(_component_UiTableHead, { class: "text-left" }, {
                                        default: withCtx(() => [
                                          createTextVNode("\u0414\u0430\u0442\u0430")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_UiTableHead, { class: "text-center" }, {
                                        default: withCtx(() => [
                                          createTextVNode("\u041F\u043E\u043A\u0430\u0437\u044B")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_UiTableHead, { class: "text-center" }, {
                                        default: withCtx(() => [
                                          createTextVNode("\u041A\u043B\u0438\u043A\u0438")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_UiTableHead, { class: "text-center" }, {
                                        default: withCtx(() => [
                                          createTextVNode("CTR %")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_UiTableHead, { class: "text-center" }, {
                                        default: withCtx(() => [
                                          createTextVNode("CPC")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_UiTableHead, { class: "text-center" }, {
                                        default: withCtx(() => [
                                          createTextVNode("CPM")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_UiTableHead, { class: "text-center" }, {
                                        default: withCtx(() => [
                                          createTextVNode("Spend")
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
                                ssrRenderList(rows.value, (r) => {
                                  _push5(ssrRenderComponent(_component_UiTableRow, {
                                    key: r.date
                                  }, {
                                    default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        _push6(ssrRenderComponent(_component_UiTableCell, { class: "text-left" }, {
                                          default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                            if (_push7) {
                                              _push7(`${ssrInterpolate(r.date)}`);
                                            } else {
                                              return [
                                                createTextVNode(toDisplayString(r.date), 1)
                                              ];
                                            }
                                          }),
                                          _: 2
                                        }, _parent6, _scopeId5));
                                        _push6(ssrRenderComponent(_component_UiTableCell, { class: "text-center" }, {
                                          default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                            var _a2, _b2, _c, _d;
                                            if (_push7) {
                                              _push7(`${ssrInterpolate(f((_b2 = (_a2 = r == null ? void 0 : r.base) == null ? void 0 : _a2.shows) != null ? _b2 : 0))}`);
                                            } else {
                                              return [
                                                createTextVNode(toDisplayString(f((_d = (_c = r == null ? void 0 : r.base) == null ? void 0 : _c.shows) != null ? _d : 0)), 1)
                                              ];
                                            }
                                          }),
                                          _: 2
                                        }, _parent6, _scopeId5));
                                        _push6(ssrRenderComponent(_component_UiTableCell, { class: "text-center" }, {
                                          default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                            var _a2, _b2, _c, _d;
                                            if (_push7) {
                                              _push7(`${ssrInterpolate(f((_b2 = (_a2 = r == null ? void 0 : r.base) == null ? void 0 : _a2.clicks) != null ? _b2 : 0))}`);
                                            } else {
                                              return [
                                                createTextVNode(toDisplayString(f((_d = (_c = r == null ? void 0 : r.base) == null ? void 0 : _c.clicks) != null ? _d : 0)), 1)
                                              ];
                                            }
                                          }),
                                          _: 2
                                        }, _parent6, _scopeId5));
                                        _push6(ssrRenderComponent(_component_UiTableCell, { class: "text-center" }, {
                                          default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                            var _a2, _b2, _c, _d;
                                            if (_push7) {
                                              _push7(`${ssrInterpolate(f((_b2 = (_a2 = r == null ? void 0 : r.base) == null ? void 0 : _a2.ctr) != null ? _b2 : 0))} %`);
                                            } else {
                                              return [
                                                createTextVNode(toDisplayString(f((_d = (_c = r == null ? void 0 : r.base) == null ? void 0 : _c.ctr) != null ? _d : 0)) + " %", 1)
                                              ];
                                            }
                                          }),
                                          _: 2
                                        }, _parent6, _scopeId5));
                                        _push6(ssrRenderComponent(_component_UiTableCell, { class: "text-center" }, {
                                          default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                            var _a2, _b2, _c, _d;
                                            if (_push7) {
                                              _push7(`${ssrInterpolate(f((_b2 = (_a2 = r == null ? void 0 : r.base) == null ? void 0 : _a2.cpc) != null ? _b2 : 0))} \u20BD`);
                                            } else {
                                              return [
                                                createTextVNode(toDisplayString(f((_d = (_c = r == null ? void 0 : r.base) == null ? void 0 : _c.cpc) != null ? _d : 0)) + " \u20BD", 1)
                                              ];
                                            }
                                          }),
                                          _: 2
                                        }, _parent6, _scopeId5));
                                        _push6(ssrRenderComponent(_component_UiTableCell, { class: "text-center" }, {
                                          default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                            var _a2, _b2, _c, _d;
                                            if (_push7) {
                                              _push7(`${ssrInterpolate(f((_b2 = (_a2 = r == null ? void 0 : r.base) == null ? void 0 : _a2.cpm) != null ? _b2 : 0))} \u20BD`);
                                            } else {
                                              return [
                                                createTextVNode(toDisplayString(f((_d = (_c = r == null ? void 0 : r.base) == null ? void 0 : _c.cpm) != null ? _d : 0)) + " \u20BD", 1)
                                              ];
                                            }
                                          }),
                                          _: 2
                                        }, _parent6, _scopeId5));
                                        _push6(ssrRenderComponent(_component_UiTableCell, { class: "text-center" }, {
                                          default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                            var _a2, _b2, _c, _d;
                                            if (_push7) {
                                              _push7(`${ssrInterpolate(f((_b2 = (_a2 = r == null ? void 0 : r.base) == null ? void 0 : _a2.spent) != null ? _b2 : "0"))} \u20BD`);
                                            } else {
                                              return [
                                                createTextVNode(toDisplayString(f((_d = (_c = r == null ? void 0 : r.base) == null ? void 0 : _c.spent) != null ? _d : "0")) + " \u20BD", 1)
                                              ];
                                            }
                                          }),
                                          _: 2
                                        }, _parent6, _scopeId5));
                                      } else {
                                        return [
                                          createVNode(_component_UiTableCell, { class: "text-left" }, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(r.date), 1)
                                            ]),
                                            _: 2
                                          }, 1024),
                                          createVNode(_component_UiTableCell, { class: "text-center" }, {
                                            default: withCtx(() => {
                                              var _a2, _b2;
                                              return [
                                                createTextVNode(toDisplayString(f((_b2 = (_a2 = r == null ? void 0 : r.base) == null ? void 0 : _a2.shows) != null ? _b2 : 0)), 1)
                                              ];
                                            }),
                                            _: 2
                                          }, 1024),
                                          createVNode(_component_UiTableCell, { class: "text-center" }, {
                                            default: withCtx(() => {
                                              var _a2, _b2;
                                              return [
                                                createTextVNode(toDisplayString(f((_b2 = (_a2 = r == null ? void 0 : r.base) == null ? void 0 : _a2.clicks) != null ? _b2 : 0)), 1)
                                              ];
                                            }),
                                            _: 2
                                          }, 1024),
                                          createVNode(_component_UiTableCell, { class: "text-center" }, {
                                            default: withCtx(() => {
                                              var _a2, _b2;
                                              return [
                                                createTextVNode(toDisplayString(f((_b2 = (_a2 = r == null ? void 0 : r.base) == null ? void 0 : _a2.ctr) != null ? _b2 : 0)) + " %", 1)
                                              ];
                                            }),
                                            _: 2
                                          }, 1024),
                                          createVNode(_component_UiTableCell, { class: "text-center" }, {
                                            default: withCtx(() => {
                                              var _a2, _b2;
                                              return [
                                                createTextVNode(toDisplayString(f((_b2 = (_a2 = r == null ? void 0 : r.base) == null ? void 0 : _a2.cpc) != null ? _b2 : 0)) + " \u20BD", 1)
                                              ];
                                            }),
                                            _: 2
                                          }, 1024),
                                          createVNode(_component_UiTableCell, { class: "text-center" }, {
                                            default: withCtx(() => {
                                              var _a2, _b2;
                                              return [
                                                createTextVNode(toDisplayString(f((_b2 = (_a2 = r == null ? void 0 : r.base) == null ? void 0 : _a2.cpm) != null ? _b2 : 0)) + " \u20BD", 1)
                                              ];
                                            }),
                                            _: 2
                                          }, 1024),
                                          createVNode(_component_UiTableCell, { class: "text-center" }, {
                                            default: withCtx(() => {
                                              var _a2, _b2;
                                              return [
                                                createTextVNode(toDisplayString(f((_b2 = (_a2 = r == null ? void 0 : r.base) == null ? void 0 : _a2.spent) != null ? _b2 : "0")) + " \u20BD", 1)
                                              ];
                                            }),
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
                                  (openBlock(true), createBlock(Fragment, null, renderList(rows.value, (r) => {
                                    return openBlock(), createBlock(_component_UiTableRow, {
                                      key: r.date
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_UiTableCell, { class: "text-left" }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(r.date), 1)
                                          ]),
                                          _: 2
                                        }, 1024),
                                        createVNode(_component_UiTableCell, { class: "text-center" }, {
                                          default: withCtx(() => {
                                            var _a2, _b2;
                                            return [
                                              createTextVNode(toDisplayString(f((_b2 = (_a2 = r == null ? void 0 : r.base) == null ? void 0 : _a2.shows) != null ? _b2 : 0)), 1)
                                            ];
                                          }),
                                          _: 2
                                        }, 1024),
                                        createVNode(_component_UiTableCell, { class: "text-center" }, {
                                          default: withCtx(() => {
                                            var _a2, _b2;
                                            return [
                                              createTextVNode(toDisplayString(f((_b2 = (_a2 = r == null ? void 0 : r.base) == null ? void 0 : _a2.clicks) != null ? _b2 : 0)), 1)
                                            ];
                                          }),
                                          _: 2
                                        }, 1024),
                                        createVNode(_component_UiTableCell, { class: "text-center" }, {
                                          default: withCtx(() => {
                                            var _a2, _b2;
                                            return [
                                              createTextVNode(toDisplayString(f((_b2 = (_a2 = r == null ? void 0 : r.base) == null ? void 0 : _a2.ctr) != null ? _b2 : 0)) + " %", 1)
                                            ];
                                          }),
                                          _: 2
                                        }, 1024),
                                        createVNode(_component_UiTableCell, { class: "text-center" }, {
                                          default: withCtx(() => {
                                            var _a2, _b2;
                                            return [
                                              createTextVNode(toDisplayString(f((_b2 = (_a2 = r == null ? void 0 : r.base) == null ? void 0 : _a2.cpc) != null ? _b2 : 0)) + " \u20BD", 1)
                                            ];
                                          }),
                                          _: 2
                                        }, 1024),
                                        createVNode(_component_UiTableCell, { class: "text-center" }, {
                                          default: withCtx(() => {
                                            var _a2, _b2;
                                            return [
                                              createTextVNode(toDisplayString(f((_b2 = (_a2 = r == null ? void 0 : r.base) == null ? void 0 : _a2.cpm) != null ? _b2 : 0)) + " \u20BD", 1)
                                            ];
                                          }),
                                          _: 2
                                        }, 1024),
                                        createVNode(_component_UiTableCell, { class: "text-center" }, {
                                          default: withCtx(() => {
                                            var _a2, _b2;
                                            return [
                                              createTextVNode(toDisplayString(f((_b2 = (_a2 = r == null ? void 0 : r.base) == null ? void 0 : _a2.spent) != null ? _b2 : "0")) + " \u20BD", 1)
                                            ];
                                          }),
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
                                createVNode(_component_UiTableRow, { class: "bg-gray-50" }, {
                                  default: withCtx(() => [
                                    createVNode(_component_UiTableHead, { class: "text-left" }, {
                                      default: withCtx(() => [
                                        createTextVNode("\u0414\u0430\u0442\u0430")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_UiTableHead, { class: "text-center" }, {
                                      default: withCtx(() => [
                                        createTextVNode("\u041F\u043E\u043A\u0430\u0437\u044B")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_UiTableHead, { class: "text-center" }, {
                                      default: withCtx(() => [
                                        createTextVNode("\u041A\u043B\u0438\u043A\u0438")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_UiTableHead, { class: "text-center" }, {
                                      default: withCtx(() => [
                                        createTextVNode("CTR %")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_UiTableHead, { class: "text-center" }, {
                                      default: withCtx(() => [
                                        createTextVNode("CPC")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_UiTableHead, { class: "text-center" }, {
                                      default: withCtx(() => [
                                        createTextVNode("CPM")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_UiTableHead, { class: "text-center" }, {
                                      default: withCtx(() => [
                                        createTextVNode("Spend")
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
                                (openBlock(true), createBlock(Fragment, null, renderList(rows.value, (r) => {
                                  return openBlock(), createBlock(_component_UiTableRow, {
                                    key: r.date
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_UiTableCell, { class: "text-left" }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(r.date), 1)
                                        ]),
                                        _: 2
                                      }, 1024),
                                      createVNode(_component_UiTableCell, { class: "text-center" }, {
                                        default: withCtx(() => {
                                          var _a2, _b2;
                                          return [
                                            createTextVNode(toDisplayString(f((_b2 = (_a2 = r == null ? void 0 : r.base) == null ? void 0 : _a2.shows) != null ? _b2 : 0)), 1)
                                          ];
                                        }),
                                        _: 2
                                      }, 1024),
                                      createVNode(_component_UiTableCell, { class: "text-center" }, {
                                        default: withCtx(() => {
                                          var _a2, _b2;
                                          return [
                                            createTextVNode(toDisplayString(f((_b2 = (_a2 = r == null ? void 0 : r.base) == null ? void 0 : _a2.clicks) != null ? _b2 : 0)), 1)
                                          ];
                                        }),
                                        _: 2
                                      }, 1024),
                                      createVNode(_component_UiTableCell, { class: "text-center" }, {
                                        default: withCtx(() => {
                                          var _a2, _b2;
                                          return [
                                            createTextVNode(toDisplayString(f((_b2 = (_a2 = r == null ? void 0 : r.base) == null ? void 0 : _a2.ctr) != null ? _b2 : 0)) + " %", 1)
                                          ];
                                        }),
                                        _: 2
                                      }, 1024),
                                      createVNode(_component_UiTableCell, { class: "text-center" }, {
                                        default: withCtx(() => {
                                          var _a2, _b2;
                                          return [
                                            createTextVNode(toDisplayString(f((_b2 = (_a2 = r == null ? void 0 : r.base) == null ? void 0 : _a2.cpc) != null ? _b2 : 0)) + " \u20BD", 1)
                                          ];
                                        }),
                                        _: 2
                                      }, 1024),
                                      createVNode(_component_UiTableCell, { class: "text-center" }, {
                                        default: withCtx(() => {
                                          var _a2, _b2;
                                          return [
                                            createTextVNode(toDisplayString(f((_b2 = (_a2 = r == null ? void 0 : r.base) == null ? void 0 : _a2.cpm) != null ? _b2 : 0)) + " \u20BD", 1)
                                          ];
                                        }),
                                        _: 2
                                      }, 1024),
                                      createVNode(_component_UiTableCell, { class: "text-center" }, {
                                        default: withCtx(() => {
                                          var _a2, _b2;
                                          return [
                                            createTextVNode(toDisplayString(f((_b2 = (_a2 = r == null ? void 0 : r.base) == null ? void 0 : _a2.spent) != null ? _b2 : "0")) + " \u20BD", 1)
                                          ];
                                        }),
                                        _: 2
                                      }, 1024)
                                    ]),
                                    _: 2
                                  }, 1024);
                                }), 128))
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    _push3(ssrRenderComponent(_component_UiTableEmpty, null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`\u043D\u0435\u0442 \u0441\u0442\u0440\u043E\u043A`);
                        } else {
                          return [
                            createTextVNode("\u043D\u0435\u0442 \u0441\u0442\u0440\u043E\u043A")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  }
                } else {
                  return [
                    ((_b = rows.value) == null ? void 0 : _b.length) ? (openBlock(), createBlock(_component_UiTable, { key: 0 }, {
                      default: withCtx(() => [
                        createVNode(_component_UiTableHeader, null, {
                          default: withCtx(() => [
                            createVNode(_component_UiTableRow, { class: "bg-gray-50" }, {
                              default: withCtx(() => [
                                createVNode(_component_UiTableHead, { class: "text-left" }, {
                                  default: withCtx(() => [
                                    createTextVNode("\u0414\u0430\u0442\u0430")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_UiTableHead, { class: "text-center" }, {
                                  default: withCtx(() => [
                                    createTextVNode("\u041F\u043E\u043A\u0430\u0437\u044B")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_UiTableHead, { class: "text-center" }, {
                                  default: withCtx(() => [
                                    createTextVNode("\u041A\u043B\u0438\u043A\u0438")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_UiTableHead, { class: "text-center" }, {
                                  default: withCtx(() => [
                                    createTextVNode("CTR %")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_UiTableHead, { class: "text-center" }, {
                                  default: withCtx(() => [
                                    createTextVNode("CPC")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_UiTableHead, { class: "text-center" }, {
                                  default: withCtx(() => [
                                    createTextVNode("CPM")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_UiTableHead, { class: "text-center" }, {
                                  default: withCtx(() => [
                                    createTextVNode("Spend")
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
                            (openBlock(true), createBlock(Fragment, null, renderList(rows.value, (r) => {
                              return openBlock(), createBlock(_component_UiTableRow, {
                                key: r.date
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_UiTableCell, { class: "text-left" }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(r.date), 1)
                                    ]),
                                    _: 2
                                  }, 1024),
                                  createVNode(_component_UiTableCell, { class: "text-center" }, {
                                    default: withCtx(() => {
                                      var _a2, _b2;
                                      return [
                                        createTextVNode(toDisplayString(f((_b2 = (_a2 = r == null ? void 0 : r.base) == null ? void 0 : _a2.shows) != null ? _b2 : 0)), 1)
                                      ];
                                    }),
                                    _: 2
                                  }, 1024),
                                  createVNode(_component_UiTableCell, { class: "text-center" }, {
                                    default: withCtx(() => {
                                      var _a2, _b2;
                                      return [
                                        createTextVNode(toDisplayString(f((_b2 = (_a2 = r == null ? void 0 : r.base) == null ? void 0 : _a2.clicks) != null ? _b2 : 0)), 1)
                                      ];
                                    }),
                                    _: 2
                                  }, 1024),
                                  createVNode(_component_UiTableCell, { class: "text-center" }, {
                                    default: withCtx(() => {
                                      var _a2, _b2;
                                      return [
                                        createTextVNode(toDisplayString(f((_b2 = (_a2 = r == null ? void 0 : r.base) == null ? void 0 : _a2.ctr) != null ? _b2 : 0)) + " %", 1)
                                      ];
                                    }),
                                    _: 2
                                  }, 1024),
                                  createVNode(_component_UiTableCell, { class: "text-center" }, {
                                    default: withCtx(() => {
                                      var _a2, _b2;
                                      return [
                                        createTextVNode(toDisplayString(f((_b2 = (_a2 = r == null ? void 0 : r.base) == null ? void 0 : _a2.cpc) != null ? _b2 : 0)) + " \u20BD", 1)
                                      ];
                                    }),
                                    _: 2
                                  }, 1024),
                                  createVNode(_component_UiTableCell, { class: "text-center" }, {
                                    default: withCtx(() => {
                                      var _a2, _b2;
                                      return [
                                        createTextVNode(toDisplayString(f((_b2 = (_a2 = r == null ? void 0 : r.base) == null ? void 0 : _a2.cpm) != null ? _b2 : 0)) + " \u20BD", 1)
                                      ];
                                    }),
                                    _: 2
                                  }, 1024),
                                  createVNode(_component_UiTableCell, { class: "text-center" }, {
                                    default: withCtx(() => {
                                      var _a2, _b2;
                                      return [
                                        createTextVNode(toDisplayString(f((_b2 = (_a2 = r == null ? void 0 : r.base) == null ? void 0 : _a2.spent) != null ? _b2 : "0")) + " \u20BD", 1)
                                      ];
                                    }),
                                    _: 2
                                  }, 1024)
                                ]),
                                _: 2
                              }, 1024);
                            }), 128))
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })) : (openBlock(), createBlock(_component_UiTableEmpty, { key: 1 }, {
                      default: withCtx(() => [
                        createTextVNode("\u043D\u0435\u0442 \u0441\u0442\u0440\u043E\u043A")
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
              createVNode(_component_UiCardHeader, { class: "pb-2" }, {
                default: withCtx(() => [
                  createVNode(_component_UiCardTitle, null, {
                    default: withCtx(() => [
                      createTextVNode("\u041F\u043E\u0434\u043D\u0435\u0432\u043D\u0430\u044F \u0441\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043A\u0430")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_UiCardContent, null, {
                default: withCtx(() => {
                  var _a;
                  return [
                    ((_a = rows.value) == null ? void 0 : _a.length) ? (openBlock(), createBlock(_component_UiTable, { key: 0 }, {
                      default: withCtx(() => [
                        createVNode(_component_UiTableHeader, null, {
                          default: withCtx(() => [
                            createVNode(_component_UiTableRow, { class: "bg-gray-50" }, {
                              default: withCtx(() => [
                                createVNode(_component_UiTableHead, { class: "text-left" }, {
                                  default: withCtx(() => [
                                    createTextVNode("\u0414\u0430\u0442\u0430")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_UiTableHead, { class: "text-center" }, {
                                  default: withCtx(() => [
                                    createTextVNode("\u041F\u043E\u043A\u0430\u0437\u044B")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_UiTableHead, { class: "text-center" }, {
                                  default: withCtx(() => [
                                    createTextVNode("\u041A\u043B\u0438\u043A\u0438")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_UiTableHead, { class: "text-center" }, {
                                  default: withCtx(() => [
                                    createTextVNode("CTR %")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_UiTableHead, { class: "text-center" }, {
                                  default: withCtx(() => [
                                    createTextVNode("CPC")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_UiTableHead, { class: "text-center" }, {
                                  default: withCtx(() => [
                                    createTextVNode("CPM")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_UiTableHead, { class: "text-center" }, {
                                  default: withCtx(() => [
                                    createTextVNode("Spend")
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
                            (openBlock(true), createBlock(Fragment, null, renderList(rows.value, (r) => {
                              return openBlock(), createBlock(_component_UiTableRow, {
                                key: r.date
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_UiTableCell, { class: "text-left" }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(r.date), 1)
                                    ]),
                                    _: 2
                                  }, 1024),
                                  createVNode(_component_UiTableCell, { class: "text-center" }, {
                                    default: withCtx(() => {
                                      var _a2, _b;
                                      return [
                                        createTextVNode(toDisplayString(f((_b = (_a2 = r == null ? void 0 : r.base) == null ? void 0 : _a2.shows) != null ? _b : 0)), 1)
                                      ];
                                    }),
                                    _: 2
                                  }, 1024),
                                  createVNode(_component_UiTableCell, { class: "text-center" }, {
                                    default: withCtx(() => {
                                      var _a2, _b;
                                      return [
                                        createTextVNode(toDisplayString(f((_b = (_a2 = r == null ? void 0 : r.base) == null ? void 0 : _a2.clicks) != null ? _b : 0)), 1)
                                      ];
                                    }),
                                    _: 2
                                  }, 1024),
                                  createVNode(_component_UiTableCell, { class: "text-center" }, {
                                    default: withCtx(() => {
                                      var _a2, _b;
                                      return [
                                        createTextVNode(toDisplayString(f((_b = (_a2 = r == null ? void 0 : r.base) == null ? void 0 : _a2.ctr) != null ? _b : 0)) + " %", 1)
                                      ];
                                    }),
                                    _: 2
                                  }, 1024),
                                  createVNode(_component_UiTableCell, { class: "text-center" }, {
                                    default: withCtx(() => {
                                      var _a2, _b;
                                      return [
                                        createTextVNode(toDisplayString(f((_b = (_a2 = r == null ? void 0 : r.base) == null ? void 0 : _a2.cpc) != null ? _b : 0)) + " \u20BD", 1)
                                      ];
                                    }),
                                    _: 2
                                  }, 1024),
                                  createVNode(_component_UiTableCell, { class: "text-center" }, {
                                    default: withCtx(() => {
                                      var _a2, _b;
                                      return [
                                        createTextVNode(toDisplayString(f((_b = (_a2 = r == null ? void 0 : r.base) == null ? void 0 : _a2.cpm) != null ? _b : 0)) + " \u20BD", 1)
                                      ];
                                    }),
                                    _: 2
                                  }, 1024),
                                  createVNode(_component_UiTableCell, { class: "text-center" }, {
                                    default: withCtx(() => {
                                      var _a2, _b;
                                      return [
                                        createTextVNode(toDisplayString(f((_b = (_a2 = r == null ? void 0 : r.base) == null ? void 0 : _a2.spent) != null ? _b : "0")) + " \u20BD", 1)
                                      ];
                                    }),
                                    _: 2
                                  }, 1024)
                                ]),
                                _: 2
                              }, 1024);
                            }), 128))
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })) : (openBlock(), createBlock(_component_UiTableEmpty, { key: 1 }, {
                      default: withCtx(() => [
                        createTextVNode("\u043D\u0435\u0442 \u0441\u0442\u0440\u043E\u043A")
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
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/vk/stat.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=stat-CydkdMOr.mjs.map
