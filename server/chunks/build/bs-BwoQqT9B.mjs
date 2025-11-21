import { _ as _sfc_main$5 } from './index-DiSSjj1M.mjs';
import { _ as _sfc_main$6 } from './index-B6vrBiru.mjs';
import { _ as _sfc_main$2$1, a as _sfc_main$1$1, b as _sfc_main$7 } from './index-9T5woGxV.mjs';
import { _ as _sfc_main$9 } from './Label-Bxzolydd.mjs';
import { _ as _sfc_main$a } from './Input-DoHPrX2-.mjs';
import { _ as _sfc_main$6$1, a as _sfc_main$4$1, b as _sfc_main$5$1, c as _sfc_main$3$1, d as _sfc_main$2$2 } from './SelectScrollDownButton-JzJI8BsA.mjs';
import { _ as _sfc_main$b } from './Card-D2-UPrX8.mjs';
import { _ as _sfc_main$c } from './CardContent-5uJgHkPl.mjs';
import { _ as _sfc_main$2$3, a as _sfc_main$d, b as _sfc_main$1$3 } from './TabsList-C3eBcFGa.mjs';
import { _ as _sfc_main$4$2, a as _sfc_main$3$2, b as _sfc_main$e, c as _sfc_main$2$4, d as _sfc_main$1$4 } from './DialogContent-BsO2ljLB.mjs';
import { defineComponent, reactive, ref, computed, mergeProps, unref, withCtx, createTextVNode, createBlock, createVNode, openBlock, Fragment, renderList, toDisplayString, renderSlot, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrRenderSlot } from 'vue/server-renderer';
import { TooltipProvider, useForwardPropsEmits, TooltipRoot, TooltipTrigger, TooltipPortal, TooltipContent } from 'radix-vue';
import { c as cn } from './utils-TCWotVPY.mjs';
import { _ as _sfc_main$f } from './LineChart-C42qCZot.mjs';
import { Rocket, Loader2, RefreshCw, Settings, CheckCircle2, TrendingUpDown, XCircle, Wallet, MessagesSquare, PencilRuler, BarChart3, MousePointerClick, Info } from 'lucide-vue-next';
import { _ as _sfc_main$1$2, a as _sfc_main$8 } from './SheetTitle-BvqrBQuX.mjs';
import 'class-variance-authority';
import '@vueuse/core';
import 'clsx';
import 'tailwind-merge';
import '@unovis/ts';
import '@unovis/vue';
import './CardTitle-Dyaq6zaM.mjs';

const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "Tooltip",
  __ssrInlineRender: true,
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean },
    delayDuration: {},
    disableHoverableContent: { type: Boolean },
    disableClosingTrigger: { type: Boolean },
    disabled: { type: Boolean },
    ignoreNonKeyboardFocus: { type: Boolean }
  },
  emits: ["update:open"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const forwarded = useForwardPropsEmits(props, emits);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(TooltipRoot), mergeProps(unref(forwarded), _attrs), {
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
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/tooltip/Tooltip.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  ...{
    inheritAttrs: false
  },
  __name: "TooltipContent",
  __ssrInlineRender: true,
  props: {
    forceMount: { type: Boolean },
    ariaLabel: {},
    asChild: { type: Boolean },
    as: {},
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
    class: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const delegatedProps = computed(() => {
      const { class: _, ...delegated } = props;
      return delegated;
    });
    const forwarded = useForwardPropsEmits(delegatedProps, emits);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(TooltipPortal), _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(TooltipContent), mergeProps({ ...unref(forwarded), ..._ctx.$attrs }, {
              class: unref(cn)(
                "z-50 overflow-hidden rounded-md border border-slate-200 bg-white px-3 py-1.5 text-sm text-slate-950 shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-50",
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
              createVNode(unref(TooltipContent), mergeProps({ ...unref(forwarded), ..._ctx.$attrs }, {
                class: unref(cn)(
                  "z-50 overflow-hidden rounded-md border border-slate-200 bg-white px-3 py-1.5 text-sm text-slate-950 shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-50",
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
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/tooltip/TooltipContent.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "TooltipProvider",
  __ssrInlineRender: true,
  props: {
    delayDuration: {},
    skipDelayDuration: {},
    disableHoverableContent: { type: Boolean },
    disableClosingTrigger: { type: Boolean },
    disabled: { type: Boolean },
    ignoreNonKeyboardFocus: { type: Boolean }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(TooltipProvider), mergeProps(props, _attrs), {
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
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/tooltip/TooltipProvider.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "TooltipTrigger",
  __ssrInlineRender: true,
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(TooltipTrigger), mergeProps(props, _attrs), {
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/tooltip/TooltipTrigger.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "bs",
  __ssrInlineRender: true,
  setup(__props) {
    function makeMockSeries(days = 14) {
      const arr = [];
      let spend = 15e3;
      let leads = 20;
      let mockups = 8;
      for (let i = days - 1; i >= 0; i--) {
        spend += Math.round((Math.random() - 0.4) * 3e3);
        leads += Math.round((Math.random() - 0.5) * 6);
        mockups += Math.round((Math.random() - 0.5) * 3);
        arr.push({
          day: new Date(Date.now() - i * 24 * 3600 * 1e3).toLocaleDateString(
            "ru-RU",
            {
              day: "2-digit",
              month: "2-digit"
            }
          ),
          spend: Math.max(1e3, spend),
          leads: Math.max(0, leads),
          mockups: Math.max(0, mockups)
        });
      }
      return arr;
    }
    const MOCK_CAMPAIGNS = [
      {
        id: "cmp_1",
        name: "\u043F\u0435\u0440\u0435\u0437\u0430\u043F\u0443\u0441\u043A \u0433\u043E\u0440\u043E\u0434\u043E\u0432 \u0436\u0435\u043D\u0449\u0438\u043D\u044B",
        status: "active",
        dailyBudget: 1e4,
        spent: 67336.86,
        impressions: 112345,
        clicks: 9550,
        leads: 955,
        mockups: 236,
        cpm: 121.33,
        cpc: 7.05,
        cpl: 70.51,
        cpmk: 285.23,
        resultLabel: "\u041E\u0442\u043F\u0440\u0430\u0432\u043A\u0430 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0439"
      },
      {
        id: "cmp_2",
        name: "\u043F\u0435\u0440\u0435\u0437\u0430\u043F\u0443\u0441\u043A \u0433\u043E\u0440\u043E\u0434\u043E\u0432 \u041C\u0443\u0436\u0438\u043A\u0438 only",
        status: "active",
        dailyBudget: 8e3,
        spent: 60648.98,
        impressions: 98212,
        clicks: 9260,
        leads: 926,
        mockups: 201,
        cpm: 115.46,
        cpc: 6.18,
        cpl: 65.5,
        cpmk: 301.74,
        resultLabel: "\u041E\u0442\u043F\u0440\u0430\u0432\u043A\u0430 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0439"
      },
      {
        id: "cmp_3",
        name: "\u0420\u0435\u0433\u0438\u043E\u043D\u044B \u0416\u0435\u043D \u04271",
        status: "active",
        dailyBudget: 1e4,
        spent: 60787.63,
        impressions: 80123,
        clicks: 5010,
        leads: 501,
        mockups: 129,
        cpm: 153.42,
        cpc: 9.12,
        cpl: 121.33,
        cpmk: 471.46,
        resultLabel: "\u041E\u0442\u043F\u0440\u0430\u0432\u043A\u0430 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0439"
      },
      {
        id: "cmp_4",
        name: "\u041D\u041E\u0412\u041E\u0415 \u0414\u042B\u0425\u0410\u041D\u0418\u0415 \u0410\u0432\u0442\u043E",
        status: "paused",
        dailyBudget: 5e3,
        spent: 33876.79,
        impressions: 50231,
        clicks: 2350,
        leads: 235,
        mockups: 83,
        cpm: 141.87,
        cpc: 14.41,
        cpl: 144.87,
        cpmk: 408.16,
        resultLabel: "\u041E\u0442\u043F\u0440\u0430\u0432\u043A\u0430 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0439"
      }
    ];
    const MOCK_SERIES = makeMockSeries(14);
    async function fetchCampaigns(_s) {
      await new Promise((r) => setTimeout(r, 600));
      return MOCK_CAMPAIGNS;
    }
    async function fetchCrmMockupsByCampaign(_s) {
      await new Promise((r) => setTimeout(r, 300));
      const map = {};
      for (const c of MOCK_CAMPAIGNS) map[c.id] = c.mockups;
      return map;
    }
    const formatRUB = (n) => new Intl.NumberFormat("ru-RU", {
      style: "currency",
      currency: "RUB",
      maximumFractionDigits: 0
    }).format(n);
    const settings = reactive({
      vkAccessToken: "",
      vkAdAccountId: "",
      crmBaseUrl: "",
      crmToken: "",
      currency: "RUB",
      dateRange: "last_14d"
    });
    const loading = ref(false);
    const campaigns = ref([]);
    const selected = ref(null);
    const tab = ref("all");
    const totals = computed(() => {
      const spend = campaigns.value.reduce((a, c) => a + c.spent, 0);
      const leads = campaigns.value.reduce((a, c) => a + c.leads, 0);
      const mockups = campaigns.value.reduce((a, c) => a + c.mockups, 0);
      const cpl = leads ? Math.round(spend / leads) : 0;
      const cpmk = mockups ? Math.round(spend / mockups) : 0;
      return { spend, leads, mockups, cpl, cpmk };
    });
    const filteredCampaigns = computed(() => {
      if (tab.value === "all") return campaigns.value;
      return campaigns.value.filter((c) => c.status === tab.value);
    });
    async function syncAll() {
      loading.value = true;
      try {
        const [vk, crmMap] = await Promise.all([
          fetchCampaigns(settings),
          fetchCrmMockupsByCampaign(settings)
        ]);
        const merged = vk.map((c) => {
          var _a, _b;
          return {
            ...c,
            mockups: (_a = crmMap[c.id]) != null ? _a : c.mockups,
            cpmk: c.spent / Math.max(1, (_b = crmMap[c.id]) != null ? _b : c.mockups)
          };
        });
        campaigns.value = merged;
        if (!selected.value && merged.length) selected.value = merged[0];
      } finally {
        loading.value = false;
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiBadge = _sfc_main$5;
      const _component_UiButton = _sfc_main$6;
      const _component_UiSheet = _sfc_main$2$1;
      const _component_UiSheetTrigger = _sfc_main$1$1;
      const _component_UiSheetContent = _sfc_main$7;
      const _component_UiSheetHeader = _sfc_main$1$2;
      const _component_UiSheetTitle = _sfc_main$8;
      const _component_UiLabel = _sfc_main$9;
      const _component_UiInput = _sfc_main$a;
      const _component_UiSelect = _sfc_main$6$1;
      const _component_UiSelectTrigger = _sfc_main$4$1;
      const _component_UiSelectValue = _sfc_main$5$1;
      const _component_UiSelectContent = _sfc_main$3$1;
      const _component_UiSelectItem = _sfc_main$2$2;
      const _component_UiCard = _sfc_main$b;
      const _component_UiCardContent = _sfc_main$c;
      const _component_UiTabs = _sfc_main$2$3;
      const _component_UiTabsList = _sfc_main$d;
      const _component_UiTabsTrigger = _sfc_main$1$3;
      const _component_UiDialog = _sfc_main$4$2;
      const _component_UiDialogTrigger = _sfc_main$3$2;
      const _component_UiDialogContent = _sfc_main$e;
      const _component_UiDialogHeader = _sfc_main$2$4;
      const _component_UiDialogTitle = _sfc_main$1$4;
      const _component_UiTooltipProvider = _sfc_main$2;
      const _component_UiTooltip = _sfc_main$4;
      const _component_UiTooltipTrigger = _sfc_main$1;
      const _component_UiTooltipContent = _sfc_main$3;
      const _component_UiLineChart = _sfc_main$f;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen w-full bg-gradient-to-b from-slate-50 to-white p-4 md:p-8" }, _attrs))}><header class="flex items-center justify-between mb-6"><div class="flex items-center gap-3">`);
      _push(ssrRenderComponent(unref(Rocket), { class: "w-6 h-6" }, null, _parent));
      _push(`<h1 class="text-2xl md:text-3xl font-bold tracking-tight"> VK Ads \xD7 CRM \u2014 Easyneon </h1>`);
      _push(ssrRenderComponent(_component_UiBadge, {
        variant: "secondary",
        class: "rounded-full"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Prototype`);
          } else {
            return [
              createTextVNode("Prototype")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="flex items-center gap-2">`);
      _push(ssrRenderComponent(_component_UiButton, {
        variant: "outline",
        onClick: syncAll,
        disabled: loading.value
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (loading.value) {
              _push2(ssrRenderComponent(unref(Loader2), { class: "w-4 h-4 animate-spin" }, null, _parent2, _scopeId));
            } else {
              _push2(ssrRenderComponent(unref(RefreshCw), { class: "w-4 h-4" }, null, _parent2, _scopeId));
            }
            _push2(`<span class="ml-2 hidden md:inline"${_scopeId}>\u0421\u0438\u043D\u0445\u0440\u043E\u043D\u0438\u0437\u0438\u0440\u043E\u0432\u0430\u0442\u044C</span>`);
          } else {
            return [
              loading.value ? (openBlock(), createBlock(unref(Loader2), {
                key: 0,
                class: "w-4 h-4 animate-spin"
              })) : (openBlock(), createBlock(unref(RefreshCw), {
                key: 1,
                class: "w-4 h-4"
              })),
              createVNode("span", { class: "ml-2 hidden md:inline" }, "\u0421\u0438\u043D\u0445\u0440\u043E\u043D\u0438\u0437\u0438\u0440\u043E\u0432\u0430\u0442\u044C")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UiSheet, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UiSheetTrigger, { "as-child": "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UiButton, { variant: "default" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(Settings), { class: "w-4 h-4" }, null, _parent4, _scopeId3));
                        _push4(`<span class="ml-2 hidden md:inline"${_scopeId3}>\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438</span>`);
                      } else {
                        return [
                          createVNode(unref(Settings), { class: "w-4 h-4" }),
                          createVNode("span", { class: "ml-2 hidden md:inline" }, "\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UiButton, { variant: "default" }, {
                      default: withCtx(() => [
                        createVNode(unref(Settings), { class: "w-4 h-4" }),
                        createVNode("span", { class: "ml-2 hidden md:inline" }, "\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UiSheetContent, {
              side: "right",
              class: "w-full sm:w-[480px]"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UiSheetHeader, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UiSheetTitle, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`\u0418\u043D\u0442\u0435\u0433\u0440\u0430\u0446\u0438\u0438 \u0438 \u0434\u043E\u0441\u0442\u0443\u043F\u044B`);
                            } else {
                              return [
                                createTextVNode("\u0418\u043D\u0442\u0435\u0433\u0440\u0430\u0446\u0438\u0438 \u0438 \u0434\u043E\u0441\u0442\u0443\u043F\u044B")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_UiSheetTitle, null, {
                            default: withCtx(() => [
                              createTextVNode("\u0418\u043D\u0442\u0435\u0433\u0440\u0430\u0446\u0438\u0438 \u0438 \u0434\u043E\u0441\u0442\u0443\u043F\u044B")
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<div class="mt-4 space-y-6"${_scopeId2}><div${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UiLabel, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`VK Ads Access Token`);
                      } else {
                        return [
                          createTextVNode("VK Ads Access Token")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UiInput, {
                    modelValue: settings.vkAccessToken,
                    "onUpdate:modelValue": ($event) => settings.vkAccessToken = $event,
                    placeholder: "vk1.a.xxxxx"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UiLabel, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`VK Ads Account ID`);
                      } else {
                        return [
                          createTextVNode("VK Ads Account ID")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UiInput, {
                    modelValue: settings.vkAdAccountId,
                    "onUpdate:modelValue": ($event) => settings.vkAdAccountId = $event,
                    placeholder: "\u0438\u0437\u0438\u043D\u0435\u043E\u043D-6181 / 160000001"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div class="grid grid-cols-1 md:grid-cols-2 gap-4"${_scopeId2}><div${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UiLabel, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`CRM Base URL`);
                      } else {
                        return [
                          createTextVNode("CRM Base URL")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UiInput, {
                    modelValue: settings.crmBaseUrl,
                    "onUpdate:modelValue": ($event) => settings.crmBaseUrl = $event,
                    placeholder: "https://crm.easyneon.ru"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UiLabel, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`CRM Token`);
                      } else {
                        return [
                          createTextVNode("CRM Token")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UiInput, {
                    modelValue: settings.crmToken,
                    "onUpdate:modelValue": ($event) => settings.crmToken = $event,
                    placeholder: "secret_***"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div></div><div class="grid grid-cols-2 gap-4"${_scopeId2}><div${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UiLabel, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`\u0412\u0430\u043B\u044E\u0442\u0430`);
                      } else {
                        return [
                          createTextVNode("\u0412\u0430\u043B\u044E\u0442\u0430")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UiSelect, {
                    modelValue: settings.currency,
                    "onUpdate:modelValue": ($event) => settings.currency = $event
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UiSelectTrigger, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_UiSelectValue, null, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_UiSelectValue)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_UiSelectContent, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_UiSelectItem, { value: "RUB" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`RUB`);
                                  } else {
                                    return [
                                      createTextVNode("RUB")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_UiSelectItem, { value: "USD" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`USD`);
                                  } else {
                                    return [
                                      createTextVNode("USD")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_UiSelectItem, { value: "RUB" }, {
                                  default: withCtx(() => [
                                    createTextVNode("RUB")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_UiSelectItem, { value: "USD" }, {
                                  default: withCtx(() => [
                                    createTextVNode("USD")
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
                          createVNode(_component_UiSelectTrigger, null, {
                            default: withCtx(() => [
                              createVNode(_component_UiSelectValue)
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UiSelectContent, null, {
                            default: withCtx(() => [
                              createVNode(_component_UiSelectItem, { value: "RUB" }, {
                                default: withCtx(() => [
                                  createTextVNode("RUB")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_UiSelectItem, { value: "USD" }, {
                                default: withCtx(() => [
                                  createTextVNode("USD")
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
                  _push3(`</div><div${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UiLabel, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`\u041F\u0435\u0440\u0438\u043E\u0434`);
                      } else {
                        return [
                          createTextVNode("\u041F\u0435\u0440\u0438\u043E\u0434")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UiSelect, {
                    modelValue: settings.dateRange,
                    "onUpdate:modelValue": ($event) => settings.dateRange = $event
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UiSelectTrigger, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_UiSelectValue, null, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_UiSelectValue)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_UiSelectContent, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_UiSelectItem, { value: "last_7d" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`\u041F\u043E\u0441\u043B\u0435\u0434\u043D\u0438\u0435 7 \u0434\u043D\u0435\u0439`);
                                  } else {
                                    return [
                                      createTextVNode("\u041F\u043E\u0441\u043B\u0435\u0434\u043D\u0438\u0435 7 \u0434\u043D\u0435\u0439")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_UiSelectItem, { value: "last_14d" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`\u041F\u043E\u0441\u043B\u0435\u0434\u043D\u0438\u0435 14 \u0434\u043D\u0435\u0439`);
                                  } else {
                                    return [
                                      createTextVNode("\u041F\u043E\u0441\u043B\u0435\u0434\u043D\u0438\u0435 14 \u0434\u043D\u0435\u0439")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_UiSelectItem, { value: "last_30d" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`\u041F\u043E\u0441\u043B\u0435\u0434\u043D\u0438\u0435 30 \u0434\u043D\u0435\u0439`);
                                  } else {
                                    return [
                                      createTextVNode("\u041F\u043E\u0441\u043B\u0435\u0434\u043D\u0438\u0435 30 \u0434\u043D\u0435\u0439")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_UiSelectItem, { value: "last_7d" }, {
                                  default: withCtx(() => [
                                    createTextVNode("\u041F\u043E\u0441\u043B\u0435\u0434\u043D\u0438\u0435 7 \u0434\u043D\u0435\u0439")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_UiSelectItem, { value: "last_14d" }, {
                                  default: withCtx(() => [
                                    createTextVNode("\u041F\u043E\u0441\u043B\u0435\u0434\u043D\u0438\u0435 14 \u0434\u043D\u0435\u0439")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_UiSelectItem, { value: "last_30d" }, {
                                  default: withCtx(() => [
                                    createTextVNode("\u041F\u043E\u0441\u043B\u0435\u0434\u043D\u0438\u0435 30 \u0434\u043D\u0435\u0439")
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
                          createVNode(_component_UiSelectTrigger, null, {
                            default: withCtx(() => [
                              createVNode(_component_UiSelectValue)
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UiSelectContent, null, {
                            default: withCtx(() => [
                              createVNode(_component_UiSelectItem, { value: "last_7d" }, {
                                default: withCtx(() => [
                                  createTextVNode("\u041F\u043E\u0441\u043B\u0435\u0434\u043D\u0438\u0435 7 \u0434\u043D\u0435\u0439")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_UiSelectItem, { value: "last_14d" }, {
                                default: withCtx(() => [
                                  createTextVNode("\u041F\u043E\u0441\u043B\u0435\u0434\u043D\u0438\u0435 14 \u0434\u043D\u0435\u0439")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_UiSelectItem, { value: "last_30d" }, {
                                default: withCtx(() => [
                                  createTextVNode("\u041F\u043E\u0441\u043B\u0435\u0434\u043D\u0438\u0435 30 \u0434\u043D\u0435\u0439")
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
                  _push3(`</div></div><div class="flex justify-end gap-2"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UiButton, { onClick: syncAll }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u0438 \u0441\u0438\u043D\u043A`);
                      } else {
                        return [
                          createTextVNode("\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u0438 \u0441\u0438\u043D\u043A")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div><div class="text-xs text-muted-foreground"${_scopeId2}><p class="mb-2"${_scopeId2}>\u041A\u0430\u043A \u044D\u0442\u043E \u043F\u043E\u0434\u043A\u043B\u044E\u0447\u0438\u0442\u044C \u043A \u0440\u0435\u0430\u043B\u044C\u043D\u044B\u043C \u0434\u0430\u043D\u043D\u044B\u043C:</p><ol class="list-decimal ml-4 space-y-1"${_scopeId2}><li${_scopeId2}> \u0417\u0430\u043C\u0435\u043D\u0438\u0442\u0435 <code${_scopeId2}>fetchCampaigns</code> \u043D\u0430 \u0432\u044B\u0437\u043E\u0432\u044B VK Ads API (<code${_scopeId2}>ads.getCampaigns</code>, <code${_scopeId2}>ads.getStatistics</code>), \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u044F \u0432\u0432\u0435\u0434\u0451\u043D\u043D\u044B\u0439 \u0442\u043E\u043A\u0435\u043D \u0438 ID \u0430\u043A\u043A\u0430\u0443\u043D\u0442\u0430. </li><li${_scopeId2}> \u0417\u0430\u043C\u0435\u043D\u0438\u0442\u0435 <code${_scopeId2}>fetchCrmMockupsByCampaign</code> \u043D\u0430 \u0432\u0430\u0448 CRM \u044D\u043D\u0434\u043F\u043E\u0438\u043D\u0442, \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u0432\u043E\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 \u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u043C\u0430\u043A\u0435\u0442\u043E\u0432 \u043F\u043E <code${_scopeId2}>campaign_id</code> \u0437\u0430 \u0432\u044B\u0431\u0440\u0430\u043D\u043D\u044B\u0439 \u043F\u0435\u0440\u0438\u043E\u0434. </li><li${_scopeId2}> \u041F\u0440\u0438 \u043C\u0435\u0440\u0434\u0436\u0435 \u0440\u0430\u0441\u0441\u0447\u0451\u0442 \xAB\u0441\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u0438 \u043C\u0430\u043A\u0435\u0442\u0430\xBB = <code${_scopeId2}>spent / mockups</code>. </li></ol></div></div>`);
                } else {
                  return [
                    createVNode(_component_UiSheetHeader, null, {
                      default: withCtx(() => [
                        createVNode(_component_UiSheetTitle, null, {
                          default: withCtx(() => [
                            createTextVNode("\u0418\u043D\u0442\u0435\u0433\u0440\u0430\u0446\u0438\u0438 \u0438 \u0434\u043E\u0441\u0442\u0443\u043F\u044B")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode("div", { class: "mt-4 space-y-6" }, [
                      createVNode("div", null, [
                        createVNode(_component_UiLabel, null, {
                          default: withCtx(() => [
                            createTextVNode("VK Ads Access Token")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UiInput, {
                          modelValue: settings.vkAccessToken,
                          "onUpdate:modelValue": ($event) => settings.vkAccessToken = $event,
                          placeholder: "vk1.a.xxxxx"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      createVNode("div", null, [
                        createVNode(_component_UiLabel, null, {
                          default: withCtx(() => [
                            createTextVNode("VK Ads Account ID")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UiInput, {
                          modelValue: settings.vkAdAccountId,
                          "onUpdate:modelValue": ($event) => settings.vkAdAccountId = $event,
                          placeholder: "\u0438\u0437\u0438\u043D\u0435\u043E\u043D-6181 / 160000001"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      createVNode("div", { class: "grid grid-cols-1 md:grid-cols-2 gap-4" }, [
                        createVNode("div", null, [
                          createVNode(_component_UiLabel, null, {
                            default: withCtx(() => [
                              createTextVNode("CRM Base URL")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UiInput, {
                            modelValue: settings.crmBaseUrl,
                            "onUpdate:modelValue": ($event) => settings.crmBaseUrl = $event,
                            placeholder: "https://crm.easyneon.ru"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        createVNode("div", null, [
                          createVNode(_component_UiLabel, null, {
                            default: withCtx(() => [
                              createTextVNode("CRM Token")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UiInput, {
                            modelValue: settings.crmToken,
                            "onUpdate:modelValue": ($event) => settings.crmToken = $event,
                            placeholder: "secret_***"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ])
                      ]),
                      createVNode("div", { class: "grid grid-cols-2 gap-4" }, [
                        createVNode("div", null, [
                          createVNode(_component_UiLabel, null, {
                            default: withCtx(() => [
                              createTextVNode("\u0412\u0430\u043B\u044E\u0442\u0430")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UiSelect, {
                            modelValue: settings.currency,
                            "onUpdate:modelValue": ($event) => settings.currency = $event
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_UiSelectTrigger, null, {
                                default: withCtx(() => [
                                  createVNode(_component_UiSelectValue)
                                ]),
                                _: 1
                              }),
                              createVNode(_component_UiSelectContent, null, {
                                default: withCtx(() => [
                                  createVNode(_component_UiSelectItem, { value: "RUB" }, {
                                    default: withCtx(() => [
                                      createTextVNode("RUB")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_UiSelectItem, { value: "USD" }, {
                                    default: withCtx(() => [
                                      createTextVNode("USD")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        createVNode("div", null, [
                          createVNode(_component_UiLabel, null, {
                            default: withCtx(() => [
                              createTextVNode("\u041F\u0435\u0440\u0438\u043E\u0434")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UiSelect, {
                            modelValue: settings.dateRange,
                            "onUpdate:modelValue": ($event) => settings.dateRange = $event
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_UiSelectTrigger, null, {
                                default: withCtx(() => [
                                  createVNode(_component_UiSelectValue)
                                ]),
                                _: 1
                              }),
                              createVNode(_component_UiSelectContent, null, {
                                default: withCtx(() => [
                                  createVNode(_component_UiSelectItem, { value: "last_7d" }, {
                                    default: withCtx(() => [
                                      createTextVNode("\u041F\u043E\u0441\u043B\u0435\u0434\u043D\u0438\u0435 7 \u0434\u043D\u0435\u0439")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_UiSelectItem, { value: "last_14d" }, {
                                    default: withCtx(() => [
                                      createTextVNode("\u041F\u043E\u0441\u043B\u0435\u0434\u043D\u0438\u0435 14 \u0434\u043D\u0435\u0439")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_UiSelectItem, { value: "last_30d" }, {
                                    default: withCtx(() => [
                                      createTextVNode("\u041F\u043E\u0441\u043B\u0435\u0434\u043D\u0438\u0435 30 \u0434\u043D\u0435\u0439")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }, 8, ["modelValue", "onUpdate:modelValue"])
                        ])
                      ]),
                      createVNode("div", { class: "flex justify-end gap-2" }, [
                        createVNode(_component_UiButton, { onClick: syncAll }, {
                          default: withCtx(() => [
                            createTextVNode("\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u0438 \u0441\u0438\u043D\u043A")
                          ]),
                          _: 1
                        })
                      ]),
                      createVNode("div", { class: "text-xs text-muted-foreground" }, [
                        createVNode("p", { class: "mb-2" }, "\u041A\u0430\u043A \u044D\u0442\u043E \u043F\u043E\u0434\u043A\u043B\u044E\u0447\u0438\u0442\u044C \u043A \u0440\u0435\u0430\u043B\u044C\u043D\u044B\u043C \u0434\u0430\u043D\u043D\u044B\u043C:"),
                        createVNode("ol", { class: "list-decimal ml-4 space-y-1" }, [
                          createVNode("li", null, [
                            createTextVNode(" \u0417\u0430\u043C\u0435\u043D\u0438\u0442\u0435 "),
                            createVNode("code", null, "fetchCampaigns"),
                            createTextVNode(" \u043D\u0430 \u0432\u044B\u0437\u043E\u0432\u044B VK Ads API ("),
                            createVNode("code", null, "ads.getCampaigns"),
                            createTextVNode(", "),
                            createVNode("code", null, "ads.getStatistics"),
                            createTextVNode("), \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u044F \u0432\u0432\u0435\u0434\u0451\u043D\u043D\u044B\u0439 \u0442\u043E\u043A\u0435\u043D \u0438 ID \u0430\u043A\u043A\u0430\u0443\u043D\u0442\u0430. ")
                          ]),
                          createVNode("li", null, [
                            createTextVNode(" \u0417\u0430\u043C\u0435\u043D\u0438\u0442\u0435 "),
                            createVNode("code", null, "fetchCrmMockupsByCampaign"),
                            createTextVNode(" \u043D\u0430 \u0432\u0430\u0448 CRM \u044D\u043D\u0434\u043F\u043E\u0438\u043D\u0442, \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u0432\u043E\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 \u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u043C\u0430\u043A\u0435\u0442\u043E\u0432 \u043F\u043E "),
                            createVNode("code", null, "campaign_id"),
                            createTextVNode(" \u0437\u0430 \u0432\u044B\u0431\u0440\u0430\u043D\u043D\u044B\u0439 \u043F\u0435\u0440\u0438\u043E\u0434. ")
                          ]),
                          createVNode("li", null, [
                            createTextVNode(" \u041F\u0440\u0438 \u043C\u0435\u0440\u0434\u0436\u0435 \u0440\u0430\u0441\u0441\u0447\u0451\u0442 \xAB\u0441\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u0438 \u043C\u0430\u043A\u0435\u0442\u0430\xBB = "),
                            createVNode("code", null, "spent / mockups"),
                            createTextVNode(". ")
                          ])
                        ])
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UiSheetTrigger, { "as-child": "" }, {
                default: withCtx(() => [
                  createVNode(_component_UiButton, { variant: "default" }, {
                    default: withCtx(() => [
                      createVNode(unref(Settings), { class: "w-4 h-4" }),
                      createVNode("span", { class: "ml-2 hidden md:inline" }, "\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_UiSheetContent, {
                side: "right",
                class: "w-full sm:w-[480px]"
              }, {
                default: withCtx(() => [
                  createVNode(_component_UiSheetHeader, null, {
                    default: withCtx(() => [
                      createVNode(_component_UiSheetTitle, null, {
                        default: withCtx(() => [
                          createTextVNode("\u0418\u043D\u0442\u0435\u0433\u0440\u0430\u0446\u0438\u0438 \u0438 \u0434\u043E\u0441\u0442\u0443\u043F\u044B")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode("div", { class: "mt-4 space-y-6" }, [
                    createVNode("div", null, [
                      createVNode(_component_UiLabel, null, {
                        default: withCtx(() => [
                          createTextVNode("VK Ads Access Token")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_UiInput, {
                        modelValue: settings.vkAccessToken,
                        "onUpdate:modelValue": ($event) => settings.vkAccessToken = $event,
                        placeholder: "vk1.a.xxxxx"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    createVNode("div", null, [
                      createVNode(_component_UiLabel, null, {
                        default: withCtx(() => [
                          createTextVNode("VK Ads Account ID")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_UiInput, {
                        modelValue: settings.vkAdAccountId,
                        "onUpdate:modelValue": ($event) => settings.vkAdAccountId = $event,
                        placeholder: "\u0438\u0437\u0438\u043D\u0435\u043E\u043D-6181 / 160000001"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    createVNode("div", { class: "grid grid-cols-1 md:grid-cols-2 gap-4" }, [
                      createVNode("div", null, [
                        createVNode(_component_UiLabel, null, {
                          default: withCtx(() => [
                            createTextVNode("CRM Base URL")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UiInput, {
                          modelValue: settings.crmBaseUrl,
                          "onUpdate:modelValue": ($event) => settings.crmBaseUrl = $event,
                          placeholder: "https://crm.easyneon.ru"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      createVNode("div", null, [
                        createVNode(_component_UiLabel, null, {
                          default: withCtx(() => [
                            createTextVNode("CRM Token")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UiInput, {
                          modelValue: settings.crmToken,
                          "onUpdate:modelValue": ($event) => settings.crmToken = $event,
                          placeholder: "secret_***"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ])
                    ]),
                    createVNode("div", { class: "grid grid-cols-2 gap-4" }, [
                      createVNode("div", null, [
                        createVNode(_component_UiLabel, null, {
                          default: withCtx(() => [
                            createTextVNode("\u0412\u0430\u043B\u044E\u0442\u0430")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UiSelect, {
                          modelValue: settings.currency,
                          "onUpdate:modelValue": ($event) => settings.currency = $event
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_UiSelectTrigger, null, {
                              default: withCtx(() => [
                                createVNode(_component_UiSelectValue)
                              ]),
                              _: 1
                            }),
                            createVNode(_component_UiSelectContent, null, {
                              default: withCtx(() => [
                                createVNode(_component_UiSelectItem, { value: "RUB" }, {
                                  default: withCtx(() => [
                                    createTextVNode("RUB")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_UiSelectItem, { value: "USD" }, {
                                  default: withCtx(() => [
                                    createTextVNode("USD")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      createVNode("div", null, [
                        createVNode(_component_UiLabel, null, {
                          default: withCtx(() => [
                            createTextVNode("\u041F\u0435\u0440\u0438\u043E\u0434")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UiSelect, {
                          modelValue: settings.dateRange,
                          "onUpdate:modelValue": ($event) => settings.dateRange = $event
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_UiSelectTrigger, null, {
                              default: withCtx(() => [
                                createVNode(_component_UiSelectValue)
                              ]),
                              _: 1
                            }),
                            createVNode(_component_UiSelectContent, null, {
                              default: withCtx(() => [
                                createVNode(_component_UiSelectItem, { value: "last_7d" }, {
                                  default: withCtx(() => [
                                    createTextVNode("\u041F\u043E\u0441\u043B\u0435\u0434\u043D\u0438\u0435 7 \u0434\u043D\u0435\u0439")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_UiSelectItem, { value: "last_14d" }, {
                                  default: withCtx(() => [
                                    createTextVNode("\u041F\u043E\u0441\u043B\u0435\u0434\u043D\u0438\u0435 14 \u0434\u043D\u0435\u0439")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_UiSelectItem, { value: "last_30d" }, {
                                  default: withCtx(() => [
                                    createTextVNode("\u041F\u043E\u0441\u043B\u0435\u0434\u043D\u0438\u0435 30 \u0434\u043D\u0435\u0439")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }, 8, ["modelValue", "onUpdate:modelValue"])
                      ])
                    ]),
                    createVNode("div", { class: "flex justify-end gap-2" }, [
                      createVNode(_component_UiButton, { onClick: syncAll }, {
                        default: withCtx(() => [
                          createTextVNode("\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u0438 \u0441\u0438\u043D\u043A")
                        ]),
                        _: 1
                      })
                    ]),
                    createVNode("div", { class: "text-xs text-muted-foreground" }, [
                      createVNode("p", { class: "mb-2" }, "\u041A\u0430\u043A \u044D\u0442\u043E \u043F\u043E\u0434\u043A\u043B\u044E\u0447\u0438\u0442\u044C \u043A \u0440\u0435\u0430\u043B\u044C\u043D\u044B\u043C \u0434\u0430\u043D\u043D\u044B\u043C:"),
                      createVNode("ol", { class: "list-decimal ml-4 space-y-1" }, [
                        createVNode("li", null, [
                          createTextVNode(" \u0417\u0430\u043C\u0435\u043D\u0438\u0442\u0435 "),
                          createVNode("code", null, "fetchCampaigns"),
                          createTextVNode(" \u043D\u0430 \u0432\u044B\u0437\u043E\u0432\u044B VK Ads API ("),
                          createVNode("code", null, "ads.getCampaigns"),
                          createTextVNode(", "),
                          createVNode("code", null, "ads.getStatistics"),
                          createTextVNode("), \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u044F \u0432\u0432\u0435\u0434\u0451\u043D\u043D\u044B\u0439 \u0442\u043E\u043A\u0435\u043D \u0438 ID \u0430\u043A\u043A\u0430\u0443\u043D\u0442\u0430. ")
                        ]),
                        createVNode("li", null, [
                          createTextVNode(" \u0417\u0430\u043C\u0435\u043D\u0438\u0442\u0435 "),
                          createVNode("code", null, "fetchCrmMockupsByCampaign"),
                          createTextVNode(" \u043D\u0430 \u0432\u0430\u0448 CRM \u044D\u043D\u0434\u043F\u043E\u0438\u043D\u0442, \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u0432\u043E\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 \u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u043C\u0430\u043A\u0435\u0442\u043E\u0432 \u043F\u043E "),
                          createVNode("code", null, "campaign_id"),
                          createTextVNode(" \u0437\u0430 \u0432\u044B\u0431\u0440\u0430\u043D\u043D\u044B\u0439 \u043F\u0435\u0440\u0438\u043E\u0434. ")
                        ]),
                        createVNode("li", null, [
                          createTextVNode(" \u041F\u0440\u0438 \u043C\u0435\u0440\u0434\u0436\u0435 \u0440\u0430\u0441\u0441\u0447\u0451\u0442 \xAB\u0441\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u0438 \u043C\u0430\u043A\u0435\u0442\u0430\xBB = "),
                          createVNode("code", null, "spent / mockups"),
                          createTextVNode(". ")
                        ])
                      ])
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
      _push(`</div></header><div class="grid grid-cols-1 lg:grid-cols-3 gap-6">`);
      _push(ssrRenderComponent(_component_UiCard, { class: "lg:col-span-2 rounded-2xl shadow-sm" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UiCardContent, { class: "p-0" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="p-4 flex items-center justify-between"${_scopeId2}><div class="text-base font-semibold"${_scopeId2}>\u041A\u0430\u043C\u043F\u0430\u043D\u0438\u0438</div>`);
                  _push3(ssrRenderComponent(_component_UiTabs, {
                    value: tab.value,
                    "onUpdate:value": ($event) => tab.value = $event,
                    class: "min-w-[260px]"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UiTabsList, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_UiTabsTrigger, { value: "all" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`\u0412\u0441\u0435`);
                                  } else {
                                    return [
                                      createTextVNode("\u0412\u0441\u0435")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_UiTabsTrigger, { value: "active" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`\u0410\u043A\u0442\u0438\u0432\u043D\u044B\u0435`);
                                  } else {
                                    return [
                                      createTextVNode("\u0410\u043A\u0442\u0438\u0432\u043D\u044B\u0435")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_UiTabsTrigger, { value: "paused" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`\u041F\u0430\u0443\u0437\u0430`);
                                  } else {
                                    return [
                                      createTextVNode("\u041F\u0430\u0443\u0437\u0430")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_UiTabsTrigger, { value: "all" }, {
                                  default: withCtx(() => [
                                    createTextVNode("\u0412\u0441\u0435")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_UiTabsTrigger, { value: "active" }, {
                                  default: withCtx(() => [
                                    createTextVNode("\u0410\u043A\u0442\u0438\u0432\u043D\u044B\u0435")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_UiTabsTrigger, { value: "paused" }, {
                                  default: withCtx(() => [
                                    createTextVNode("\u041F\u0430\u0443\u0437\u0430")
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
                          createVNode(_component_UiTabsList, null, {
                            default: withCtx(() => [
                              createVNode(_component_UiTabsTrigger, { value: "all" }, {
                                default: withCtx(() => [
                                  createTextVNode("\u0412\u0441\u0435")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_UiTabsTrigger, { value: "active" }, {
                                default: withCtx(() => [
                                  createTextVNode("\u0410\u043A\u0442\u0438\u0432\u043D\u044B\u0435")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_UiTabsTrigger, { value: "paused" }, {
                                default: withCtx(() => [
                                  createTextVNode("\u041F\u0430\u0443\u0437\u0430")
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
                  _push3(`</div><div class="overflow-auto"${_scopeId2}><table class="w-full text-sm"${_scopeId2}><thead class="sticky top-0 bg-white border-y"${_scopeId2}><tr class="text-left"${_scopeId2}><th class="px-4 py-2"${_scopeId2}>\u0421\u0442\u0430\u0442\u0443\u0441</th><th class="px-4 py-2"${_scopeId2}>\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435</th><th class="px-4 py-2"${_scopeId2}>\u0411\u044E\u0434\u0436\u0435\u0442/\u0434\u0435\u043D\u044C</th><th class="px-4 py-2"${_scopeId2}>\u041F\u043E\u0442\u0440\u0430\u0447\u0435\u043D\u043E</th><th class="px-4 py-2"${_scopeId2}>\u041B\u0438\u0434\u044B</th><th class="px-4 py-2"${_scopeId2}>\u041C\u0430\u043A\u0435\u0442\u044B</th><th class="px-4 py-2"${_scopeId2}>CPL</th><th class="px-4 py-2"${_scopeId2}>\u0426\u0435\u043D\u0430 \u043C\u0430\u043A\u0435\u0442\u0430</th></tr></thead><tbody${_scopeId2}><!--[-->`);
                  ssrRenderList(filteredCampaigns.value, (c) => {
                    _push3(`<tr class="border-b hover:bg-slate-50 cursor-pointer"${_scopeId2}><td class="px-4 py-3"${_scopeId2}><span class="${ssrRenderClass([{
                      "bg-emerald-500": c.status === "active",
                      "bg-amber-500": c.status === "paused",
                      "bg-rose-500": c.status === "stopped"
                    }, "inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs text-white"])}"${_scopeId2}>`);
                    if (c.status === "active") {
                      _push3(ssrRenderComponent(unref(CheckCircle2), { class: "w-3 h-3" }, null, _parent3, _scopeId2));
                    } else if (c.status === "paused") {
                      _push3(ssrRenderComponent(unref(TrendingUpDown), { class: "w-3 h-3" }, null, _parent3, _scopeId2));
                    } else {
                      _push3(ssrRenderComponent(unref(XCircle), { class: "w-3 h-3" }, null, _parent3, _scopeId2));
                    }
                    _push3(` ${ssrInterpolate(c.status === "active" ? "\u0410\u043A\u0442\u0438\u0432\u043D\u0430" : c.status === "paused" ? "\u041F\u0430\u0443\u0437\u0430" : "\u041E\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u0430")}</span></td><td class="px-4 py-3"${_scopeId2}><div class="font-medium"${_scopeId2}>${ssrInterpolate(c.name)}</div><div class="text-xs text-muted-foreground"${_scopeId2}>${ssrInterpolate(c.resultLabel)}</div></td><td class="px-4 py-3"${_scopeId2}>${ssrInterpolate(formatRUB(c.dailyBudget))}</td><td class="px-4 py-3"${_scopeId2}>${ssrInterpolate(formatRUB(c.spent))}</td><td class="px-4 py-3"${_scopeId2}>${ssrInterpolate(c.leads)}</td><td class="px-4 py-3"${_scopeId2}>${ssrInterpolate(c.mockups)}</td><td class="px-4 py-3"${_scopeId2}>${ssrInterpolate(formatRUB(c.cpl))}</td><td class="px-4 py-3"${_scopeId2}>${ssrInterpolate(formatRUB(Math.round(c.cpmk)))}</td></tr>`);
                  });
                  _push3(`<!--]--></tbody></table></div>`);
                } else {
                  return [
                    createVNode("div", { class: "p-4 flex items-center justify-between" }, [
                      createVNode("div", { class: "text-base font-semibold" }, "\u041A\u0430\u043C\u043F\u0430\u043D\u0438\u0438"),
                      createVNode(_component_UiTabs, {
                        value: tab.value,
                        "onUpdate:value": ($event) => tab.value = $event,
                        class: "min-w-[260px]"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_UiTabsList, null, {
                            default: withCtx(() => [
                              createVNode(_component_UiTabsTrigger, { value: "all" }, {
                                default: withCtx(() => [
                                  createTextVNode("\u0412\u0441\u0435")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_UiTabsTrigger, { value: "active" }, {
                                default: withCtx(() => [
                                  createTextVNode("\u0410\u043A\u0442\u0438\u0432\u043D\u044B\u0435")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_UiTabsTrigger, { value: "paused" }, {
                                default: withCtx(() => [
                                  createTextVNode("\u041F\u0430\u0443\u0437\u0430")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }, 8, ["value", "onUpdate:value"])
                    ]),
                    createVNode("div", { class: "overflow-auto" }, [
                      createVNode("table", { class: "w-full text-sm" }, [
                        createVNode("thead", { class: "sticky top-0 bg-white border-y" }, [
                          createVNode("tr", { class: "text-left" }, [
                            createVNode("th", { class: "px-4 py-2" }, "\u0421\u0442\u0430\u0442\u0443\u0441"),
                            createVNode("th", { class: "px-4 py-2" }, "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435"),
                            createVNode("th", { class: "px-4 py-2" }, "\u0411\u044E\u0434\u0436\u0435\u0442/\u0434\u0435\u043D\u044C"),
                            createVNode("th", { class: "px-4 py-2" }, "\u041F\u043E\u0442\u0440\u0430\u0447\u0435\u043D\u043E"),
                            createVNode("th", { class: "px-4 py-2" }, "\u041B\u0438\u0434\u044B"),
                            createVNode("th", { class: "px-4 py-2" }, "\u041C\u0430\u043A\u0435\u0442\u044B"),
                            createVNode("th", { class: "px-4 py-2" }, "CPL"),
                            createVNode("th", { class: "px-4 py-2" }, "\u0426\u0435\u043D\u0430 \u043C\u0430\u043A\u0435\u0442\u0430")
                          ])
                        ]),
                        createVNode("tbody", null, [
                          (openBlock(true), createBlock(Fragment, null, renderList(filteredCampaigns.value, (c) => {
                            return openBlock(), createBlock("tr", {
                              key: c.id,
                              class: "border-b hover:bg-slate-50 cursor-pointer",
                              onClick: ($event) => selected.value = c
                            }, [
                              createVNode("td", { class: "px-4 py-3" }, [
                                createVNode("span", {
                                  class: ["inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs text-white", {
                                    "bg-emerald-500": c.status === "active",
                                    "bg-amber-500": c.status === "paused",
                                    "bg-rose-500": c.status === "stopped"
                                  }]
                                }, [
                                  c.status === "active" ? (openBlock(), createBlock(unref(CheckCircle2), {
                                    key: 0,
                                    class: "w-3 h-3"
                                  })) : c.status === "paused" ? (openBlock(), createBlock(unref(TrendingUpDown), {
                                    key: 1,
                                    class: "w-3 h-3"
                                  })) : (openBlock(), createBlock(unref(XCircle), {
                                    key: 2,
                                    class: "w-3 h-3"
                                  })),
                                  createTextVNode(" " + toDisplayString(c.status === "active" ? "\u0410\u043A\u0442\u0438\u0432\u043D\u0430" : c.status === "paused" ? "\u041F\u0430\u0443\u0437\u0430" : "\u041E\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u0430"), 1)
                                ], 2)
                              ]),
                              createVNode("td", { class: "px-4 py-3" }, [
                                createVNode("div", { class: "font-medium" }, toDisplayString(c.name), 1),
                                createVNode("div", { class: "text-xs text-muted-foreground" }, toDisplayString(c.resultLabel), 1)
                              ]),
                              createVNode("td", { class: "px-4 py-3" }, toDisplayString(formatRUB(c.dailyBudget)), 1),
                              createVNode("td", { class: "px-4 py-3" }, toDisplayString(formatRUB(c.spent)), 1),
                              createVNode("td", { class: "px-4 py-3" }, toDisplayString(c.leads), 1),
                              createVNode("td", { class: "px-4 py-3" }, toDisplayString(c.mockups), 1),
                              createVNode("td", { class: "px-4 py-3" }, toDisplayString(formatRUB(c.cpl)), 1),
                              createVNode("td", { class: "px-4 py-3" }, toDisplayString(formatRUB(Math.round(c.cpmk))), 1)
                            ], 8, ["onClick"]);
                          }), 128))
                        ])
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UiCardContent, { class: "p-0" }, {
                default: withCtx(() => [
                  createVNode("div", { class: "p-4 flex items-center justify-between" }, [
                    createVNode("div", { class: "text-base font-semibold" }, "\u041A\u0430\u043C\u043F\u0430\u043D\u0438\u0438"),
                    createVNode(_component_UiTabs, {
                      value: tab.value,
                      "onUpdate:value": ($event) => tab.value = $event,
                      class: "min-w-[260px]"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_UiTabsList, null, {
                          default: withCtx(() => [
                            createVNode(_component_UiTabsTrigger, { value: "all" }, {
                              default: withCtx(() => [
                                createTextVNode("\u0412\u0441\u0435")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_UiTabsTrigger, { value: "active" }, {
                              default: withCtx(() => [
                                createTextVNode("\u0410\u043A\u0442\u0438\u0432\u043D\u044B\u0435")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_UiTabsTrigger, { value: "paused" }, {
                              default: withCtx(() => [
                                createTextVNode("\u041F\u0430\u0443\u0437\u0430")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["value", "onUpdate:value"])
                  ]),
                  createVNode("div", { class: "overflow-auto" }, [
                    createVNode("table", { class: "w-full text-sm" }, [
                      createVNode("thead", { class: "sticky top-0 bg-white border-y" }, [
                        createVNode("tr", { class: "text-left" }, [
                          createVNode("th", { class: "px-4 py-2" }, "\u0421\u0442\u0430\u0442\u0443\u0441"),
                          createVNode("th", { class: "px-4 py-2" }, "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435"),
                          createVNode("th", { class: "px-4 py-2" }, "\u0411\u044E\u0434\u0436\u0435\u0442/\u0434\u0435\u043D\u044C"),
                          createVNode("th", { class: "px-4 py-2" }, "\u041F\u043E\u0442\u0440\u0430\u0447\u0435\u043D\u043E"),
                          createVNode("th", { class: "px-4 py-2" }, "\u041B\u0438\u0434\u044B"),
                          createVNode("th", { class: "px-4 py-2" }, "\u041C\u0430\u043A\u0435\u0442\u044B"),
                          createVNode("th", { class: "px-4 py-2" }, "CPL"),
                          createVNode("th", { class: "px-4 py-2" }, "\u0426\u0435\u043D\u0430 \u043C\u0430\u043A\u0435\u0442\u0430")
                        ])
                      ]),
                      createVNode("tbody", null, [
                        (openBlock(true), createBlock(Fragment, null, renderList(filteredCampaigns.value, (c) => {
                          return openBlock(), createBlock("tr", {
                            key: c.id,
                            class: "border-b hover:bg-slate-50 cursor-pointer",
                            onClick: ($event) => selected.value = c
                          }, [
                            createVNode("td", { class: "px-4 py-3" }, [
                              createVNode("span", {
                                class: ["inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs text-white", {
                                  "bg-emerald-500": c.status === "active",
                                  "bg-amber-500": c.status === "paused",
                                  "bg-rose-500": c.status === "stopped"
                                }]
                              }, [
                                c.status === "active" ? (openBlock(), createBlock(unref(CheckCircle2), {
                                  key: 0,
                                  class: "w-3 h-3"
                                })) : c.status === "paused" ? (openBlock(), createBlock(unref(TrendingUpDown), {
                                  key: 1,
                                  class: "w-3 h-3"
                                })) : (openBlock(), createBlock(unref(XCircle), {
                                  key: 2,
                                  class: "w-3 h-3"
                                })),
                                createTextVNode(" " + toDisplayString(c.status === "active" ? "\u0410\u043A\u0442\u0438\u0432\u043D\u0430" : c.status === "paused" ? "\u041F\u0430\u0443\u0437\u0430" : "\u041E\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u0430"), 1)
                              ], 2)
                            ]),
                            createVNode("td", { class: "px-4 py-3" }, [
                              createVNode("div", { class: "font-medium" }, toDisplayString(c.name), 1),
                              createVNode("div", { class: "text-xs text-muted-foreground" }, toDisplayString(c.resultLabel), 1)
                            ]),
                            createVNode("td", { class: "px-4 py-3" }, toDisplayString(formatRUB(c.dailyBudget)), 1),
                            createVNode("td", { class: "px-4 py-3" }, toDisplayString(formatRUB(c.spent)), 1),
                            createVNode("td", { class: "px-4 py-3" }, toDisplayString(c.leads), 1),
                            createVNode("td", { class: "px-4 py-3" }, toDisplayString(c.mockups), 1),
                            createVNode("td", { class: "px-4 py-3" }, toDisplayString(formatRUB(c.cpl)), 1),
                            createVNode("td", { class: "px-4 py-3" }, toDisplayString(formatRUB(Math.round(c.cpmk))), 1)
                          ], 8, ["onClick"]);
                        }), 128))
                      ])
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
      _push(ssrRenderComponent(_component_UiCard, { class: "rounded-2xl shadow-sm" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UiCardContent, { class: "p-0" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p;
                if (_push3) {
                  if (selected.value) {
                    _push3(`<div class="p-4 space-y-4"${_scopeId2}><div class="flex items-start justify-between"${_scopeId2}><div${_scopeId2}><div class="text-sm text-muted-foreground"${_scopeId2}>\u041A\u0430\u043C\u043F\u0430\u043D\u0438\u044F</div><div class="text-lg font-semibold"${_scopeId2}>${ssrInterpolate((_a = selected.value) == null ? void 0 : _a.name)}</div></div><span class="${ssrRenderClass([{
                      "bg-emerald-500": ((_b = selected.value) == null ? void 0 : _b.status) === "active",
                      "bg-amber-500": ((_c = selected.value) == null ? void 0 : _c.status) === "paused",
                      "bg-rose-500": ((_d = selected.value) == null ? void 0 : _d.status) === "stopped"
                    }, "inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs text-white"])}"${_scopeId2}>`);
                    if (((_e = selected.value) == null ? void 0 : _e.status) === "active") {
                      _push3(ssrRenderComponent(unref(CheckCircle2), { class: "w-3 h-3" }, null, _parent3, _scopeId2));
                    } else if (((_f = selected.value) == null ? void 0 : _f.status) === "paused") {
                      _push3(ssrRenderComponent(unref(TrendingUpDown), { class: "w-3 h-3" }, null, _parent3, _scopeId2));
                    } else {
                      _push3(ssrRenderComponent(unref(XCircle), { class: "w-3 h-3" }, null, _parent3, _scopeId2));
                    }
                    _push3(` ${ssrInterpolate(((_g = selected.value) == null ? void 0 : _g.status) === "active" ? "\u0410\u043A\u0442\u0438\u0432\u043D\u0430" : ((_h = selected.value) == null ? void 0 : _h.status) === "paused" ? "\u041F\u0430\u0443\u0437\u0430" : "\u041E\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u0430")}</span></div><div class="grid grid-cols-2 gap-3"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_UiCard, { class: "rounded-2xl shadow-sm" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_UiCardContent, { class: "p-4" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<div class="flex items-center justify-between"${_scopeId4}><div class="text-sm text-muted-foreground flex items-center gap-2"${_scopeId4}>`);
                                _push5(ssrRenderComponent(unref(Wallet), { class: "w-4 h-4" }, null, _parent5, _scopeId4));
                                _push5(` \u0420\u0430\u0441\u0445\u043E\u0434 </div><div class="text-xl font-semibold"${_scopeId4}>${ssrInterpolate(formatRUB(selected.value.spent))}</div></div>`);
                              } else {
                                return [
                                  createVNode("div", { class: "flex items-center justify-between" }, [
                                    createVNode("div", { class: "text-sm text-muted-foreground flex items-center gap-2" }, [
                                      createVNode(unref(Wallet), { class: "w-4 h-4" }),
                                      createTextVNode(" \u0420\u0430\u0441\u0445\u043E\u0434 ")
                                    ]),
                                    createVNode("div", { class: "text-xl font-semibold" }, toDisplayString(formatRUB(selected.value.spent)), 1)
                                  ])
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_UiCardContent, { class: "p-4" }, {
                              default: withCtx(() => [
                                createVNode("div", { class: "flex items-center justify-between" }, [
                                  createVNode("div", { class: "text-sm text-muted-foreground flex items-center gap-2" }, [
                                    createVNode(unref(Wallet), { class: "w-4 h-4" }),
                                    createTextVNode(" \u0420\u0430\u0441\u0445\u043E\u0434 ")
                                  ]),
                                  createVNode("div", { class: "text-xl font-semibold" }, toDisplayString(formatRUB(selected.value.spent)), 1)
                                ])
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_UiCard, { class: "rounded-2xl shadow-sm" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_UiCardContent, { class: "p-4" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<div class="flex items-center justify-between"${_scopeId4}><div class="text-sm text-muted-foreground flex items-center gap-2"${_scopeId4}>`);
                                _push5(ssrRenderComponent(unref(MessagesSquare), { class: "w-4 h-4" }, null, _parent5, _scopeId4));
                                _push5(` \u041B\u0438\u0434\u044B </div><div class="text-xl font-semibold"${_scopeId4}>${ssrInterpolate(selected.value.leads)}</div></div>`);
                              } else {
                                return [
                                  createVNode("div", { class: "flex items-center justify-between" }, [
                                    createVNode("div", { class: "text-sm text-muted-foreground flex items-center gap-2" }, [
                                      createVNode(unref(MessagesSquare), { class: "w-4 h-4" }),
                                      createTextVNode(" \u041B\u0438\u0434\u044B ")
                                    ]),
                                    createVNode("div", { class: "text-xl font-semibold" }, toDisplayString(selected.value.leads), 1)
                                  ])
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_UiCardContent, { class: "p-4" }, {
                              default: withCtx(() => [
                                createVNode("div", { class: "flex items-center justify-between" }, [
                                  createVNode("div", { class: "text-sm text-muted-foreground flex items-center gap-2" }, [
                                    createVNode(unref(MessagesSquare), { class: "w-4 h-4" }),
                                    createTextVNode(" \u041B\u0438\u0434\u044B ")
                                  ]),
                                  createVNode("div", { class: "text-xl font-semibold" }, toDisplayString(selected.value.leads), 1)
                                ])
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_UiCard, { class: "rounded-2xl shadow-sm" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_UiCardContent, { class: "p-4" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<div class="flex items-center justify-between"${_scopeId4}><div class="text-sm text-muted-foreground flex items-center gap-2"${_scopeId4}>`);
                                _push5(ssrRenderComponent(unref(PencilRuler), { class: "w-4 h-4" }, null, _parent5, _scopeId4));
                                _push5(` \u041C\u0430\u043A\u0435\u0442\u044B </div><div class="text-xl font-semibold"${_scopeId4}>${ssrInterpolate(selected.value.mockups)}</div></div>`);
                              } else {
                                return [
                                  createVNode("div", { class: "flex items-center justify-between" }, [
                                    createVNode("div", { class: "text-sm text-muted-foreground flex items-center gap-2" }, [
                                      createVNode(unref(PencilRuler), { class: "w-4 h-4" }),
                                      createTextVNode(" \u041C\u0430\u043A\u0435\u0442\u044B ")
                                    ]),
                                    createVNode("div", { class: "text-xl font-semibold" }, toDisplayString(selected.value.mockups), 1)
                                  ])
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_UiCardContent, { class: "p-4" }, {
                              default: withCtx(() => [
                                createVNode("div", { class: "flex items-center justify-between" }, [
                                  createVNode("div", { class: "text-sm text-muted-foreground flex items-center gap-2" }, [
                                    createVNode(unref(PencilRuler), { class: "w-4 h-4" }),
                                    createTextVNode(" \u041C\u0430\u043A\u0435\u0442\u044B ")
                                  ]),
                                  createVNode("div", { class: "text-xl font-semibold" }, toDisplayString(selected.value.mockups), 1)
                                ])
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_UiCard, { class: "rounded-2xl shadow-sm" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_UiCardContent, { class: "p-4" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<div class="flex items-center justify-between"${_scopeId4}><div class="text-sm text-muted-foreground flex items-center gap-2"${_scopeId4}>`);
                                _push5(ssrRenderComponent(unref(BarChart3), { class: "w-4 h-4" }, null, _parent5, _scopeId4));
                                _push5(` \u0426\u0435\u043D\u0430 \u043C\u0430\u043A\u0435\u0442\u0430 </div><div class="text-xl font-semibold"${_scopeId4}>${ssrInterpolate(formatRUB(Math.round(selected.value.cpmk)))}</div></div>`);
                              } else {
                                return [
                                  createVNode("div", { class: "flex items-center justify-between" }, [
                                    createVNode("div", { class: "text-sm text-muted-foreground flex items-center gap-2" }, [
                                      createVNode(unref(BarChart3), { class: "w-4 h-4" }),
                                      createTextVNode(" \u0426\u0435\u043D\u0430 \u043C\u0430\u043A\u0435\u0442\u0430 ")
                                    ]),
                                    createVNode("div", { class: "text-xl font-semibold" }, toDisplayString(formatRUB(Math.round(selected.value.cpmk))), 1)
                                  ])
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_UiCardContent, { class: "p-4" }, {
                              default: withCtx(() => [
                                createVNode("div", { class: "flex items-center justify-between" }, [
                                  createVNode("div", { class: "text-sm text-muted-foreground flex items-center gap-2" }, [
                                    createVNode(unref(BarChart3), { class: "w-4 h-4" }),
                                    createTextVNode(" \u0426\u0435\u043D\u0430 \u043C\u0430\u043A\u0435\u0442\u0430 ")
                                  ]),
                                  createVNode("div", { class: "text-xl font-semibold" }, toDisplayString(formatRUB(Math.round(selected.value.cpmk))), 1)
                                ])
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(`</div>`);
                    _push3(ssrRenderComponent(_component_UiDialog, null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_UiDialogTrigger, { "as-child": "" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_UiButton, {
                                  variant: "outline",
                                  class: "w-full"
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u043B\u0438\u0434\u044B \u0438\u0437 CRM`);
                                    } else {
                                      return [
                                        createTextVNode("\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u043B\u0438\u0434\u044B \u0438\u0437 CRM")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(_component_UiButton, {
                                    variant: "outline",
                                    class: "w-full"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u043B\u0438\u0434\u044B \u0438\u0437 CRM")
                                    ]),
                                    _: 1
                                  })
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_component_UiDialogContent, { class: "max-w-2xl" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_UiDialogHeader, null, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(_component_UiDialogTitle, null, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`\u041B\u0438\u0434\u044B (mock)`);
                                          } else {
                                            return [
                                              createTextVNode("\u041B\u0438\u0434\u044B (mock)")
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(_component_UiDialogTitle, null, {
                                          default: withCtx(() => [
                                            createTextVNode("\u041B\u0438\u0434\u044B (mock)")
                                          ]),
                                          _: 1
                                        })
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                                _push5(`<div class="grid grid-cols-1 md:grid-cols-2 gap-3"${_scopeId4}><!--[-->`);
                                ssrRenderList(8, (i) => {
                                  _push5(ssrRenderComponent(_component_UiCard, {
                                    key: i,
                                    class: "rounded-xl"
                                  }, {
                                    default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        _push6(ssrRenderComponent(_component_UiCardContent, { class: "p-3" }, {
                                          default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                            if (_push7) {
                                              _push7(`<div class="flex items-center justify-between"${_scopeId6}><div class="font-medium"${_scopeId6}>\u041B\u0438\u0434 #${ssrInterpolate(i)}</div>`);
                                              _push7(ssrRenderComponent(_component_UiBadge, {
                                                variant: i % 3 === 1 ? "default" : "secondary"
                                              }, {
                                                default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                  if (_push8) {
                                                    _push8(`${ssrInterpolate(i % 3 === 1 ? "\u041C\u0430\u043A\u0435\u0442 \u0433\u043E\u0442\u043E\u0432" : "\u0412 \u0440\u0430\u0431\u043E\u0442\u0435")}`);
                                                  } else {
                                                    return [
                                                      createTextVNode(toDisplayString(i % 3 === 1 ? "\u041C\u0430\u043A\u0435\u0442 \u0433\u043E\u0442\u043E\u0432" : "\u0412 \u0440\u0430\u0431\u043E\u0442\u0435"), 1)
                                                    ];
                                                  }
                                                }),
                                                _: 2
                                              }, _parent7, _scopeId6));
                                              _push7(`</div><div class="text-xs text-muted-foreground mt-1"${_scopeId6}> @vk_user_${ssrInterpolate(i + 11)}</div><div class="text-xs mt-2"${_scopeId6}> \u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439 \u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440\u0430: \u043E\u0436\u0438\u0434\u0430\u043D\u0438\u0435 \u0443\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043D\u0438\u044F \u043C\u0430\u043A\u0435\u0442\u0430. </div>`);
                                            } else {
                                              return [
                                                createVNode("div", { class: "flex items-center justify-between" }, [
                                                  createVNode("div", { class: "font-medium" }, "\u041B\u0438\u0434 #" + toDisplayString(i), 1),
                                                  createVNode(_component_UiBadge, {
                                                    variant: i % 3 === 1 ? "default" : "secondary"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createTextVNode(toDisplayString(i % 3 === 1 ? "\u041C\u0430\u043A\u0435\u0442 \u0433\u043E\u0442\u043E\u0432" : "\u0412 \u0440\u0430\u0431\u043E\u0442\u0435"), 1)
                                                    ]),
                                                    _: 2
                                                  }, 1032, ["variant"])
                                                ]),
                                                createVNode("div", { class: "text-xs text-muted-foreground mt-1" }, " @vk_user_" + toDisplayString(i + 11), 1),
                                                createVNode("div", { class: "text-xs mt-2" }, " \u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439 \u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440\u0430: \u043E\u0436\u0438\u0434\u0430\u043D\u0438\u0435 \u0443\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043D\u0438\u044F \u043C\u0430\u043A\u0435\u0442\u0430. ")
                                              ];
                                            }
                                          }),
                                          _: 2
                                        }, _parent6, _scopeId5));
                                      } else {
                                        return [
                                          createVNode(_component_UiCardContent, { class: "p-3" }, {
                                            default: withCtx(() => [
                                              createVNode("div", { class: "flex items-center justify-between" }, [
                                                createVNode("div", { class: "font-medium" }, "\u041B\u0438\u0434 #" + toDisplayString(i), 1),
                                                createVNode(_component_UiBadge, {
                                                  variant: i % 3 === 1 ? "default" : "secondary"
                                                }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(toDisplayString(i % 3 === 1 ? "\u041C\u0430\u043A\u0435\u0442 \u0433\u043E\u0442\u043E\u0432" : "\u0412 \u0440\u0430\u0431\u043E\u0442\u0435"), 1)
                                                  ]),
                                                  _: 2
                                                }, 1032, ["variant"])
                                              ]),
                                              createVNode("div", { class: "text-xs text-muted-foreground mt-1" }, " @vk_user_" + toDisplayString(i + 11), 1),
                                              createVNode("div", { class: "text-xs mt-2" }, " \u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439 \u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440\u0430: \u043E\u0436\u0438\u0434\u0430\u043D\u0438\u0435 \u0443\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043D\u0438\u044F \u043C\u0430\u043A\u0435\u0442\u0430. ")
                                            ]),
                                            _: 2
                                          }, 1024)
                                        ];
                                      }
                                    }),
                                    _: 2
                                  }, _parent5, _scopeId4));
                                });
                                _push5(`<!--]--></div>`);
                              } else {
                                return [
                                  createVNode(_component_UiDialogHeader, null, {
                                    default: withCtx(() => [
                                      createVNode(_component_UiDialogTitle, null, {
                                        default: withCtx(() => [
                                          createTextVNode("\u041B\u0438\u0434\u044B (mock)")
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode("div", { class: "grid grid-cols-1 md:grid-cols-2 gap-3" }, [
                                    (openBlock(), createBlock(Fragment, null, renderList(8, (i) => {
                                      return createVNode(_component_UiCard, {
                                        key: i,
                                        class: "rounded-xl"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_UiCardContent, { class: "p-3" }, {
                                            default: withCtx(() => [
                                              createVNode("div", { class: "flex items-center justify-between" }, [
                                                createVNode("div", { class: "font-medium" }, "\u041B\u0438\u0434 #" + toDisplayString(i), 1),
                                                createVNode(_component_UiBadge, {
                                                  variant: i % 3 === 1 ? "default" : "secondary"
                                                }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(toDisplayString(i % 3 === 1 ? "\u041C\u0430\u043A\u0435\u0442 \u0433\u043E\u0442\u043E\u0432" : "\u0412 \u0440\u0430\u0431\u043E\u0442\u0435"), 1)
                                                  ]),
                                                  _: 2
                                                }, 1032, ["variant"])
                                              ]),
                                              createVNode("div", { class: "text-xs text-muted-foreground mt-1" }, " @vk_user_" + toDisplayString(i + 11), 1),
                                              createVNode("div", { class: "text-xs mt-2" }, " \u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439 \u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440\u0430: \u043E\u0436\u0438\u0434\u0430\u043D\u0438\u0435 \u0443\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043D\u0438\u044F \u043C\u0430\u043A\u0435\u0442\u0430. ")
                                            ]),
                                            _: 2
                                          }, 1024)
                                        ]),
                                        _: 2
                                      }, 1024);
                                    }), 64))
                                  ])
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_UiDialogTrigger, { "as-child": "" }, {
                              default: withCtx(() => [
                                createVNode(_component_UiButton, {
                                  variant: "outline",
                                  class: "w-full"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u043B\u0438\u0434\u044B \u0438\u0437 CRM")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(_component_UiDialogContent, { class: "max-w-2xl" }, {
                              default: withCtx(() => [
                                createVNode(_component_UiDialogHeader, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_UiDialogTitle, null, {
                                      default: withCtx(() => [
                                        createTextVNode("\u041B\u0438\u0434\u044B (mock)")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode("div", { class: "grid grid-cols-1 md:grid-cols-2 gap-3" }, [
                                  (openBlock(), createBlock(Fragment, null, renderList(8, (i) => {
                                    return createVNode(_component_UiCard, {
                                      key: i,
                                      class: "rounded-xl"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_UiCardContent, { class: "p-3" }, {
                                          default: withCtx(() => [
                                            createVNode("div", { class: "flex items-center justify-between" }, [
                                              createVNode("div", { class: "font-medium" }, "\u041B\u0438\u0434 #" + toDisplayString(i), 1),
                                              createVNode(_component_UiBadge, {
                                                variant: i % 3 === 1 ? "default" : "secondary"
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode(toDisplayString(i % 3 === 1 ? "\u041C\u0430\u043A\u0435\u0442 \u0433\u043E\u0442\u043E\u0432" : "\u0412 \u0440\u0430\u0431\u043E\u0442\u0435"), 1)
                                                ]),
                                                _: 2
                                              }, 1032, ["variant"])
                                            ]),
                                            createVNode("div", { class: "text-xs text-muted-foreground mt-1" }, " @vk_user_" + toDisplayString(i + 11), 1),
                                            createVNode("div", { class: "text-xs mt-2" }, " \u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439 \u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440\u0430: \u043E\u0436\u0438\u0434\u0430\u043D\u0438\u0435 \u0443\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043D\u0438\u044F \u043C\u0430\u043A\u0435\u0442\u0430. ")
                                          ]),
                                          _: 2
                                        }, 1024)
                                      ]),
                                      _: 2
                                    }, 1024);
                                  }), 64))
                                ])
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
                    _push3(`<div class="p-6 text-muted-foreground"${_scopeId2}> \u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u043A\u0430\u043C\u043F\u0430\u043D\u0438\u044E \u0441\u043B\u0435\u0432\u0430 </div>`);
                  }
                } else {
                  return [
                    selected.value ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "p-4 space-y-4"
                    }, [
                      createVNode("div", { class: "flex items-start justify-between" }, [
                        createVNode("div", null, [
                          createVNode("div", { class: "text-sm text-muted-foreground" }, "\u041A\u0430\u043C\u043F\u0430\u043D\u0438\u044F"),
                          createVNode("div", { class: "text-lg font-semibold" }, toDisplayString((_i = selected.value) == null ? void 0 : _i.name), 1)
                        ]),
                        createVNode("span", {
                          class: ["inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs text-white", {
                            "bg-emerald-500": ((_j = selected.value) == null ? void 0 : _j.status) === "active",
                            "bg-amber-500": ((_k = selected.value) == null ? void 0 : _k.status) === "paused",
                            "bg-rose-500": ((_l = selected.value) == null ? void 0 : _l.status) === "stopped"
                          }]
                        }, [
                          ((_m = selected.value) == null ? void 0 : _m.status) === "active" ? (openBlock(), createBlock(unref(CheckCircle2), {
                            key: 0,
                            class: "w-3 h-3"
                          })) : ((_n = selected.value) == null ? void 0 : _n.status) === "paused" ? (openBlock(), createBlock(unref(TrendingUpDown), {
                            key: 1,
                            class: "w-3 h-3"
                          })) : (openBlock(), createBlock(unref(XCircle), {
                            key: 2,
                            class: "w-3 h-3"
                          })),
                          createTextVNode(" " + toDisplayString(((_o = selected.value) == null ? void 0 : _o.status) === "active" ? "\u0410\u043A\u0442\u0438\u0432\u043D\u0430" : ((_p = selected.value) == null ? void 0 : _p.status) === "paused" ? "\u041F\u0430\u0443\u0437\u0430" : "\u041E\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u0430"), 1)
                        ], 2)
                      ]),
                      createVNode("div", { class: "grid grid-cols-2 gap-3" }, [
                        createVNode(_component_UiCard, { class: "rounded-2xl shadow-sm" }, {
                          default: withCtx(() => [
                            createVNode(_component_UiCardContent, { class: "p-4" }, {
                              default: withCtx(() => [
                                createVNode("div", { class: "flex items-center justify-between" }, [
                                  createVNode("div", { class: "text-sm text-muted-foreground flex items-center gap-2" }, [
                                    createVNode(unref(Wallet), { class: "w-4 h-4" }),
                                    createTextVNode(" \u0420\u0430\u0441\u0445\u043E\u0434 ")
                                  ]),
                                  createVNode("div", { class: "text-xl font-semibold" }, toDisplayString(formatRUB(selected.value.spent)), 1)
                                ])
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UiCard, { class: "rounded-2xl shadow-sm" }, {
                          default: withCtx(() => [
                            createVNode(_component_UiCardContent, { class: "p-4" }, {
                              default: withCtx(() => [
                                createVNode("div", { class: "flex items-center justify-between" }, [
                                  createVNode("div", { class: "text-sm text-muted-foreground flex items-center gap-2" }, [
                                    createVNode(unref(MessagesSquare), { class: "w-4 h-4" }),
                                    createTextVNode(" \u041B\u0438\u0434\u044B ")
                                  ]),
                                  createVNode("div", { class: "text-xl font-semibold" }, toDisplayString(selected.value.leads), 1)
                                ])
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UiCard, { class: "rounded-2xl shadow-sm" }, {
                          default: withCtx(() => [
                            createVNode(_component_UiCardContent, { class: "p-4" }, {
                              default: withCtx(() => [
                                createVNode("div", { class: "flex items-center justify-between" }, [
                                  createVNode("div", { class: "text-sm text-muted-foreground flex items-center gap-2" }, [
                                    createVNode(unref(PencilRuler), { class: "w-4 h-4" }),
                                    createTextVNode(" \u041C\u0430\u043A\u0435\u0442\u044B ")
                                  ]),
                                  createVNode("div", { class: "text-xl font-semibold" }, toDisplayString(selected.value.mockups), 1)
                                ])
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UiCard, { class: "rounded-2xl shadow-sm" }, {
                          default: withCtx(() => [
                            createVNode(_component_UiCardContent, { class: "p-4" }, {
                              default: withCtx(() => [
                                createVNode("div", { class: "flex items-center justify-between" }, [
                                  createVNode("div", { class: "text-sm text-muted-foreground flex items-center gap-2" }, [
                                    createVNode(unref(BarChart3), { class: "w-4 h-4" }),
                                    createTextVNode(" \u0426\u0435\u043D\u0430 \u043C\u0430\u043A\u0435\u0442\u0430 ")
                                  ]),
                                  createVNode("div", { class: "text-xl font-semibold" }, toDisplayString(formatRUB(Math.round(selected.value.cpmk))), 1)
                                ])
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      createVNode(_component_UiDialog, null, {
                        default: withCtx(() => [
                          createVNode(_component_UiDialogTrigger, { "as-child": "" }, {
                            default: withCtx(() => [
                              createVNode(_component_UiButton, {
                                variant: "outline",
                                class: "w-full"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u043B\u0438\u0434\u044B \u0438\u0437 CRM")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UiDialogContent, { class: "max-w-2xl" }, {
                            default: withCtx(() => [
                              createVNode(_component_UiDialogHeader, null, {
                                default: withCtx(() => [
                                  createVNode(_component_UiDialogTitle, null, {
                                    default: withCtx(() => [
                                      createTextVNode("\u041B\u0438\u0434\u044B (mock)")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode("div", { class: "grid grid-cols-1 md:grid-cols-2 gap-3" }, [
                                (openBlock(), createBlock(Fragment, null, renderList(8, (i) => {
                                  return createVNode(_component_UiCard, {
                                    key: i,
                                    class: "rounded-xl"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_UiCardContent, { class: "p-3" }, {
                                        default: withCtx(() => [
                                          createVNode("div", { class: "flex items-center justify-between" }, [
                                            createVNode("div", { class: "font-medium" }, "\u041B\u0438\u0434 #" + toDisplayString(i), 1),
                                            createVNode(_component_UiBadge, {
                                              variant: i % 3 === 1 ? "default" : "secondary"
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(i % 3 === 1 ? "\u041C\u0430\u043A\u0435\u0442 \u0433\u043E\u0442\u043E\u0432" : "\u0412 \u0440\u0430\u0431\u043E\u0442\u0435"), 1)
                                              ]),
                                              _: 2
                                            }, 1032, ["variant"])
                                          ]),
                                          createVNode("div", { class: "text-xs text-muted-foreground mt-1" }, " @vk_user_" + toDisplayString(i + 11), 1),
                                          createVNode("div", { class: "text-xs mt-2" }, " \u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439 \u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440\u0430: \u043E\u0436\u0438\u0434\u0430\u043D\u0438\u0435 \u0443\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043D\u0438\u044F \u043C\u0430\u043A\u0435\u0442\u0430. ")
                                        ]),
                                        _: 2
                                      }, 1024)
                                    ]),
                                    _: 2
                                  }, 1024);
                                }), 64))
                              ])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ])) : (openBlock(), createBlock("div", {
                      key: 1,
                      class: "p-6 text-muted-foreground"
                    }, " \u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u043A\u0430\u043C\u043F\u0430\u043D\u0438\u044E \u0441\u043B\u0435\u0432\u0430 "))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UiCardContent, { class: "p-0" }, {
                default: withCtx(() => {
                  var _a, _b, _c, _d, _e, _f, _g, _h;
                  return [
                    selected.value ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "p-4 space-y-4"
                    }, [
                      createVNode("div", { class: "flex items-start justify-between" }, [
                        createVNode("div", null, [
                          createVNode("div", { class: "text-sm text-muted-foreground" }, "\u041A\u0430\u043C\u043F\u0430\u043D\u0438\u044F"),
                          createVNode("div", { class: "text-lg font-semibold" }, toDisplayString((_a = selected.value) == null ? void 0 : _a.name), 1)
                        ]),
                        createVNode("span", {
                          class: ["inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs text-white", {
                            "bg-emerald-500": ((_b = selected.value) == null ? void 0 : _b.status) === "active",
                            "bg-amber-500": ((_c = selected.value) == null ? void 0 : _c.status) === "paused",
                            "bg-rose-500": ((_d = selected.value) == null ? void 0 : _d.status) === "stopped"
                          }]
                        }, [
                          ((_e = selected.value) == null ? void 0 : _e.status) === "active" ? (openBlock(), createBlock(unref(CheckCircle2), {
                            key: 0,
                            class: "w-3 h-3"
                          })) : ((_f = selected.value) == null ? void 0 : _f.status) === "paused" ? (openBlock(), createBlock(unref(TrendingUpDown), {
                            key: 1,
                            class: "w-3 h-3"
                          })) : (openBlock(), createBlock(unref(XCircle), {
                            key: 2,
                            class: "w-3 h-3"
                          })),
                          createTextVNode(" " + toDisplayString(((_g = selected.value) == null ? void 0 : _g.status) === "active" ? "\u0410\u043A\u0442\u0438\u0432\u043D\u0430" : ((_h = selected.value) == null ? void 0 : _h.status) === "paused" ? "\u041F\u0430\u0443\u0437\u0430" : "\u041E\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u0430"), 1)
                        ], 2)
                      ]),
                      createVNode("div", { class: "grid grid-cols-2 gap-3" }, [
                        createVNode(_component_UiCard, { class: "rounded-2xl shadow-sm" }, {
                          default: withCtx(() => [
                            createVNode(_component_UiCardContent, { class: "p-4" }, {
                              default: withCtx(() => [
                                createVNode("div", { class: "flex items-center justify-between" }, [
                                  createVNode("div", { class: "text-sm text-muted-foreground flex items-center gap-2" }, [
                                    createVNode(unref(Wallet), { class: "w-4 h-4" }),
                                    createTextVNode(" \u0420\u0430\u0441\u0445\u043E\u0434 ")
                                  ]),
                                  createVNode("div", { class: "text-xl font-semibold" }, toDisplayString(formatRUB(selected.value.spent)), 1)
                                ])
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UiCard, { class: "rounded-2xl shadow-sm" }, {
                          default: withCtx(() => [
                            createVNode(_component_UiCardContent, { class: "p-4" }, {
                              default: withCtx(() => [
                                createVNode("div", { class: "flex items-center justify-between" }, [
                                  createVNode("div", { class: "text-sm text-muted-foreground flex items-center gap-2" }, [
                                    createVNode(unref(MessagesSquare), { class: "w-4 h-4" }),
                                    createTextVNode(" \u041B\u0438\u0434\u044B ")
                                  ]),
                                  createVNode("div", { class: "text-xl font-semibold" }, toDisplayString(selected.value.leads), 1)
                                ])
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UiCard, { class: "rounded-2xl shadow-sm" }, {
                          default: withCtx(() => [
                            createVNode(_component_UiCardContent, { class: "p-4" }, {
                              default: withCtx(() => [
                                createVNode("div", { class: "flex items-center justify-between" }, [
                                  createVNode("div", { class: "text-sm text-muted-foreground flex items-center gap-2" }, [
                                    createVNode(unref(PencilRuler), { class: "w-4 h-4" }),
                                    createTextVNode(" \u041C\u0430\u043A\u0435\u0442\u044B ")
                                  ]),
                                  createVNode("div", { class: "text-xl font-semibold" }, toDisplayString(selected.value.mockups), 1)
                                ])
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UiCard, { class: "rounded-2xl shadow-sm" }, {
                          default: withCtx(() => [
                            createVNode(_component_UiCardContent, { class: "p-4" }, {
                              default: withCtx(() => [
                                createVNode("div", { class: "flex items-center justify-between" }, [
                                  createVNode("div", { class: "text-sm text-muted-foreground flex items-center gap-2" }, [
                                    createVNode(unref(BarChart3), { class: "w-4 h-4" }),
                                    createTextVNode(" \u0426\u0435\u043D\u0430 \u043C\u0430\u043A\u0435\u0442\u0430 ")
                                  ]),
                                  createVNode("div", { class: "text-xl font-semibold" }, toDisplayString(formatRUB(Math.round(selected.value.cpmk))), 1)
                                ])
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      createVNode(_component_UiDialog, null, {
                        default: withCtx(() => [
                          createVNode(_component_UiDialogTrigger, { "as-child": "" }, {
                            default: withCtx(() => [
                              createVNode(_component_UiButton, {
                                variant: "outline",
                                class: "w-full"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u043B\u0438\u0434\u044B \u0438\u0437 CRM")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UiDialogContent, { class: "max-w-2xl" }, {
                            default: withCtx(() => [
                              createVNode(_component_UiDialogHeader, null, {
                                default: withCtx(() => [
                                  createVNode(_component_UiDialogTitle, null, {
                                    default: withCtx(() => [
                                      createTextVNode("\u041B\u0438\u0434\u044B (mock)")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode("div", { class: "grid grid-cols-1 md:grid-cols-2 gap-3" }, [
                                (openBlock(), createBlock(Fragment, null, renderList(8, (i) => {
                                  return createVNode(_component_UiCard, {
                                    key: i,
                                    class: "rounded-xl"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_UiCardContent, { class: "p-3" }, {
                                        default: withCtx(() => [
                                          createVNode("div", { class: "flex items-center justify-between" }, [
                                            createVNode("div", { class: "font-medium" }, "\u041B\u0438\u0434 #" + toDisplayString(i), 1),
                                            createVNode(_component_UiBadge, {
                                              variant: i % 3 === 1 ? "default" : "secondary"
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(i % 3 === 1 ? "\u041C\u0430\u043A\u0435\u0442 \u0433\u043E\u0442\u043E\u0432" : "\u0412 \u0440\u0430\u0431\u043E\u0442\u0435"), 1)
                                              ]),
                                              _: 2
                                            }, 1032, ["variant"])
                                          ]),
                                          createVNode("div", { class: "text-xs text-muted-foreground mt-1" }, " @vk_user_" + toDisplayString(i + 11), 1),
                                          createVNode("div", { class: "text-xs mt-2" }, " \u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439 \u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440\u0430: \u043E\u0436\u0438\u0434\u0430\u043D\u0438\u0435 \u0443\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043D\u0438\u044F \u043C\u0430\u043A\u0435\u0442\u0430. ")
                                        ]),
                                        _: 2
                                      }, 1024)
                                    ]),
                                    _: 2
                                  }, 1024);
                                }), 64))
                              ])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ])) : (openBlock(), createBlock("div", {
                      key: 1,
                      class: "p-6 text-muted-foreground"
                    }, " \u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u043A\u0430\u043C\u043F\u0430\u043D\u0438\u044E \u0441\u043B\u0435\u0432\u0430 "))
                  ];
                }),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">`);
      _push(ssrRenderComponent(_component_UiCard, { class: "rounded-2xl shadow-sm" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UiCardContent, { class: "p-4" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex items-center justify-between"${_scopeId2}><div class="text-sm text-muted-foreground flex items-center gap-2"${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(Wallet), { class: "w-4 h-4" }, null, _parent3, _scopeId2));
                  _push3(` \u0420\u0430\u0441\u0445\u043E\u0434 (\u041F\u0435\u0440\u0438\u043E\u0434) </div><div class="text-xl font-semibold"${_scopeId2}>${ssrInterpolate(formatRUB(totals.value.spend))}</div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex items-center justify-between" }, [
                      createVNode("div", { class: "text-sm text-muted-foreground flex items-center gap-2" }, [
                        createVNode(unref(Wallet), { class: "w-4 h-4" }),
                        createTextVNode(" \u0420\u0430\u0441\u0445\u043E\u0434 (\u041F\u0435\u0440\u0438\u043E\u0434) ")
                      ]),
                      createVNode("div", { class: "text-xl font-semibold" }, toDisplayString(formatRUB(totals.value.spend)), 1)
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UiCardContent, { class: "p-4" }, {
                default: withCtx(() => [
                  createVNode("div", { class: "flex items-center justify-between" }, [
                    createVNode("div", { class: "text-sm text-muted-foreground flex items-center gap-2" }, [
                      createVNode(unref(Wallet), { class: "w-4 h-4" }),
                      createTextVNode(" \u0420\u0430\u0441\u0445\u043E\u0434 (\u041F\u0435\u0440\u0438\u043E\u0434) ")
                    ]),
                    createVNode("div", { class: "text-xl font-semibold" }, toDisplayString(formatRUB(totals.value.spend)), 1)
                  ])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UiCard, { class: "rounded-2xl shadow-sm" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UiCardContent, { class: "p-4" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex items-center justify-between"${_scopeId2}><div class="text-sm text-muted-foreground flex items-center gap-2"${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(MousePointerClick), { class: "w-4 h-4" }, null, _parent3, _scopeId2));
                  _push3(` \u041B\u0438\u0434\u044B </div><div class="text-xl font-semibold"${_scopeId2}>${ssrInterpolate(totals.value.leads)}</div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex items-center justify-between" }, [
                      createVNode("div", { class: "text-sm text-muted-foreground flex items-center gap-2" }, [
                        createVNode(unref(MousePointerClick), { class: "w-4 h-4" }),
                        createTextVNode(" \u041B\u0438\u0434\u044B ")
                      ]),
                      createVNode("div", { class: "text-xl font-semibold" }, toDisplayString(totals.value.leads), 1)
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UiCardContent, { class: "p-4" }, {
                default: withCtx(() => [
                  createVNode("div", { class: "flex items-center justify-between" }, [
                    createVNode("div", { class: "text-sm text-muted-foreground flex items-center gap-2" }, [
                      createVNode(unref(MousePointerClick), { class: "w-4 h-4" }),
                      createTextVNode(" \u041B\u0438\u0434\u044B ")
                    ]),
                    createVNode("div", { class: "text-xl font-semibold" }, toDisplayString(totals.value.leads), 1)
                  ])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UiCard, { class: "rounded-2xl shadow-sm" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UiCardContent, { class: "p-4" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex items-center justify-between"${_scopeId2}><div class="text-sm text-muted-foreground flex items-center gap-2"${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(PencilRuler), { class: "w-4 h-4" }, null, _parent3, _scopeId2));
                  _push3(` \u041C\u0430\u043A\u0435\u0442\u044B `);
                  _push3(ssrRenderComponent(_component_UiTooltipProvider, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UiTooltip, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_UiTooltipTrigger, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(unref(Info), { class: "w-4 h-4" }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(unref(Info), { class: "w-4 h-4" })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_UiTooltipContent, { class: "max-w-xs text-xs" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(` \u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u043F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0451\u043D\u043D\u044B\u0445 \u0434\u0438\u0437\u0430\u0439\u043D\u043E\u0432 \u0432 CRM `);
                                  } else {
                                    return [
                                      createTextVNode(" \u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u043F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0451\u043D\u043D\u044B\u0445 \u0434\u0438\u0437\u0430\u0439\u043D\u043E\u0432 \u0432 CRM ")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_UiTooltipTrigger, null, {
                                  default: withCtx(() => [
                                    createVNode(unref(Info), { class: "w-4 h-4" })
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_UiTooltipContent, { class: "max-w-xs text-xs" }, {
                                  default: withCtx(() => [
                                    createTextVNode(" \u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u043F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0451\u043D\u043D\u044B\u0445 \u0434\u0438\u0437\u0430\u0439\u043D\u043E\u0432 \u0432 CRM ")
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
                          createVNode(_component_UiTooltip, null, {
                            default: withCtx(() => [
                              createVNode(_component_UiTooltipTrigger, null, {
                                default: withCtx(() => [
                                  createVNode(unref(Info), { class: "w-4 h-4" })
                                ]),
                                _: 1
                              }),
                              createVNode(_component_UiTooltipContent, { class: "max-w-xs text-xs" }, {
                                default: withCtx(() => [
                                  createTextVNode(" \u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u043F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0451\u043D\u043D\u044B\u0445 \u0434\u0438\u0437\u0430\u0439\u043D\u043E\u0432 \u0432 CRM ")
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
                  _push3(`</div><div class="text-xl font-semibold"${_scopeId2}>${ssrInterpolate(totals.value.mockups)}</div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex items-center justify-between" }, [
                      createVNode("div", { class: "text-sm text-muted-foreground flex items-center gap-2" }, [
                        createVNode(unref(PencilRuler), { class: "w-4 h-4" }),
                        createTextVNode(" \u041C\u0430\u043A\u0435\u0442\u044B "),
                        createVNode(_component_UiTooltipProvider, null, {
                          default: withCtx(() => [
                            createVNode(_component_UiTooltip, null, {
                              default: withCtx(() => [
                                createVNode(_component_UiTooltipTrigger, null, {
                                  default: withCtx(() => [
                                    createVNode(unref(Info), { class: "w-4 h-4" })
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_UiTooltipContent, { class: "max-w-xs text-xs" }, {
                                  default: withCtx(() => [
                                    createTextVNode(" \u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u043F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0451\u043D\u043D\u044B\u0445 \u0434\u0438\u0437\u0430\u0439\u043D\u043E\u0432 \u0432 CRM ")
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
                      createVNode("div", { class: "text-xl font-semibold" }, toDisplayString(totals.value.mockups), 1)
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UiCardContent, { class: "p-4" }, {
                default: withCtx(() => [
                  createVNode("div", { class: "flex items-center justify-between" }, [
                    createVNode("div", { class: "text-sm text-muted-foreground flex items-center gap-2" }, [
                      createVNode(unref(PencilRuler), { class: "w-4 h-4" }),
                      createTextVNode(" \u041C\u0430\u043A\u0435\u0442\u044B "),
                      createVNode(_component_UiTooltipProvider, null, {
                        default: withCtx(() => [
                          createVNode(_component_UiTooltip, null, {
                            default: withCtx(() => [
                              createVNode(_component_UiTooltipTrigger, null, {
                                default: withCtx(() => [
                                  createVNode(unref(Info), { class: "w-4 h-4" })
                                ]),
                                _: 1
                              }),
                              createVNode(_component_UiTooltipContent, { class: "max-w-xs text-xs" }, {
                                default: withCtx(() => [
                                  createTextVNode(" \u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u043F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0451\u043D\u043D\u044B\u0445 \u0434\u0438\u0437\u0430\u0439\u043D\u043E\u0432 \u0432 CRM ")
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
                    createVNode("div", { class: "text-xl font-semibold" }, toDisplayString(totals.value.mockups), 1)
                  ])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UiCard, { class: "rounded-2xl shadow-sm" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UiCardContent, { class: "p-4" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex items-center justify-between"${_scopeId2}><div class="text-sm text-muted-foreground flex items-center gap-2"${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(BarChart3), { class: "w-4 h-4" }, null, _parent3, _scopeId2));
                  _push3(` \u0426\u0435\u043D\u0430 \u043C\u0430\u043A\u0435\u0442\u0430 `);
                  _push3(ssrRenderComponent(_component_UiTooltipProvider, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UiTooltip, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_UiTooltipTrigger, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(unref(Info), { class: "w-4 h-4" }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(unref(Info), { class: "w-4 h-4" })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_UiTooltipContent, { class: "max-w-xs text-xs" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`\u0420\u0430\u0441\u0445\u043E\u0434 / \u041C\u0430\u043A\u0435\u0442\u044B`);
                                  } else {
                                    return [
                                      createTextVNode("\u0420\u0430\u0441\u0445\u043E\u0434 / \u041C\u0430\u043A\u0435\u0442\u044B")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_UiTooltipTrigger, null, {
                                  default: withCtx(() => [
                                    createVNode(unref(Info), { class: "w-4 h-4" })
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_UiTooltipContent, { class: "max-w-xs text-xs" }, {
                                  default: withCtx(() => [
                                    createTextVNode("\u0420\u0430\u0441\u0445\u043E\u0434 / \u041C\u0430\u043A\u0435\u0442\u044B")
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
                          createVNode(_component_UiTooltip, null, {
                            default: withCtx(() => [
                              createVNode(_component_UiTooltipTrigger, null, {
                                default: withCtx(() => [
                                  createVNode(unref(Info), { class: "w-4 h-4" })
                                ]),
                                _: 1
                              }),
                              createVNode(_component_UiTooltipContent, { class: "max-w-xs text-xs" }, {
                                default: withCtx(() => [
                                  createTextVNode("\u0420\u0430\u0441\u0445\u043E\u0434 / \u041C\u0430\u043A\u0435\u0442\u044B")
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
                  _push3(`</div><div class="text-xl font-semibold"${_scopeId2}>${ssrInterpolate(formatRUB(totals.value.cpmk))}</div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex items-center justify-between" }, [
                      createVNode("div", { class: "text-sm text-muted-foreground flex items-center gap-2" }, [
                        createVNode(unref(BarChart3), { class: "w-4 h-4" }),
                        createTextVNode(" \u0426\u0435\u043D\u0430 \u043C\u0430\u043A\u0435\u0442\u0430 "),
                        createVNode(_component_UiTooltipProvider, null, {
                          default: withCtx(() => [
                            createVNode(_component_UiTooltip, null, {
                              default: withCtx(() => [
                                createVNode(_component_UiTooltipTrigger, null, {
                                  default: withCtx(() => [
                                    createVNode(unref(Info), { class: "w-4 h-4" })
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_UiTooltipContent, { class: "max-w-xs text-xs" }, {
                                  default: withCtx(() => [
                                    createTextVNode("\u0420\u0430\u0441\u0445\u043E\u0434 / \u041C\u0430\u043A\u0435\u0442\u044B")
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
                      createVNode("div", { class: "text-xl font-semibold" }, toDisplayString(formatRUB(totals.value.cpmk)), 1)
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UiCardContent, { class: "p-4" }, {
                default: withCtx(() => [
                  createVNode("div", { class: "flex items-center justify-between" }, [
                    createVNode("div", { class: "text-sm text-muted-foreground flex items-center gap-2" }, [
                      createVNode(unref(BarChart3), { class: "w-4 h-4" }),
                      createTextVNode(" \u0426\u0435\u043D\u0430 \u043C\u0430\u043A\u0435\u0442\u0430 "),
                      createVNode(_component_UiTooltipProvider, null, {
                        default: withCtx(() => [
                          createVNode(_component_UiTooltip, null, {
                            default: withCtx(() => [
                              createVNode(_component_UiTooltipTrigger, null, {
                                default: withCtx(() => [
                                  createVNode(unref(Info), { class: "w-4 h-4" })
                                ]),
                                _: 1
                              }),
                              createVNode(_component_UiTooltipContent, { class: "max-w-xs text-xs" }, {
                                default: withCtx(() => [
                                  createTextVNode("\u0420\u0430\u0441\u0445\u043E\u0434 / \u041C\u0430\u043A\u0435\u0442\u044B")
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
                    createVNode("div", { class: "text-xl font-semibold" }, toDisplayString(formatRUB(totals.value.cpmk)), 1)
                  ])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">`);
      _push(ssrRenderComponent(_component_UiCard, { class: "rounded-2xl shadow-sm" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UiCardContent, { class: "p-4" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="text-sm text-muted-foreground mb-2"${_scopeId2}>\u0420\u0430\u0441\u0445\u043E\u0434 \u043F\u043E \u0434\u043D\u044F\u043C</div>`);
                  _push3(ssrRenderComponent(_component_UiLineChart, {
                    data: unref(MOCK_SERIES),
                    categories: ["spend"],
                    index: "day"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode("div", { class: "text-sm text-muted-foreground mb-2" }, "\u0420\u0430\u0441\u0445\u043E\u0434 \u043F\u043E \u0434\u043D\u044F\u043C"),
                    createVNode(_component_UiLineChart, {
                      data: unref(MOCK_SERIES),
                      categories: ["spend"],
                      index: "day"
                    }, null, 8, ["data"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UiCardContent, { class: "p-4" }, {
                default: withCtx(() => [
                  createVNode("div", { class: "text-sm text-muted-foreground mb-2" }, "\u0420\u0430\u0441\u0445\u043E\u0434 \u043F\u043E \u0434\u043D\u044F\u043C"),
                  createVNode(_component_UiLineChart, {
                    data: unref(MOCK_SERIES),
                    categories: ["spend"],
                    index: "day"
                  }, null, 8, ["data"])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UiCard, { class: "rounded-2xl shadow-sm" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UiCardContent, { class: "p-4" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="text-sm text-muted-foreground mb-2"${_scopeId2}>\u041B\u0438\u0434\u044B \u0438 \u041C\u0430\u043A\u0435\u0442\u044B</div>`);
                  _push3(ssrRenderComponent(_component_UiLineChart, {
                    data: unref(MOCK_SERIES),
                    categories: ["leads", "mockups"],
                    index: "day"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode("div", { class: "text-sm text-muted-foreground mb-2" }, "\u041B\u0438\u0434\u044B \u0438 \u041C\u0430\u043A\u0435\u0442\u044B"),
                    createVNode(_component_UiLineChart, {
                      data: unref(MOCK_SERIES),
                      categories: ["leads", "mockups"],
                      index: "day"
                    }, null, 8, ["data"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UiCardContent, { class: "p-4" }, {
                default: withCtx(() => [
                  createVNode("div", { class: "text-sm text-muted-foreground mb-2" }, "\u041B\u0438\u0434\u044B \u0438 \u041C\u0430\u043A\u0435\u0442\u044B"),
                  createVNode(_component_UiLineChart, {
                    data: unref(MOCK_SERIES),
                    categories: ["leads", "mockups"],
                    index: "day"
                  }, null, 8, ["data"])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="mt-10 text-xs text-muted-foreground"><p> \u042D\u0442\u043E\u0442 \u043F\u0440\u043E\u0442\u043E\u0442\u0438\u043F \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u0442 \u043D\u0430 \u043C\u043E\u043A-\u0434\u0430\u043D\u043D\u044B\u0445. \u0414\u043B\u044F \u043F\u0440\u043E\u0434\u0430\u043A\u0448\u0435\u043D\u0430 \u0434\u043E\u0431\u0430\u0432\u044C\u0442\u0435 backend \u043F\u0440\u043E\u043A\u0441\u0438 (Node/Express \u0438\u043B\u0438 FastAPI), \u0447\u0442\u043E\u0431\u044B \u0431\u0435\u0437\u043E\u043F\u0430\u0441\u043D\u043E \u0432\u044B\u0437\u044B\u0432\u0430\u0442\u044C VK Ads API \u0438 \u0432\u0430\u0448\u0443 CRM \u0441 \u0441\u0435\u0440\u0432\u0435\u0440\u043D\u043E\u0439 \u0441\u0442\u043E\u0440\u043E\u043D\u044B. \u042F \u043F\u043E\u0434\u0433\u043E\u0442\u043E\u0432\u043B\u044E \u0441\u0435\u0440\u0432\u0435\u0440\u043D\u044B\u0435 \u044D\u043D\u0434\u043F\u043E\u0438\u043D\u0442\u044B \u043F\u043E \u0437\u0430\u043F\u0440\u043E\u0441\u0443. </p></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/vk/bs.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=bs-BwoQqT9B.mjs.map
