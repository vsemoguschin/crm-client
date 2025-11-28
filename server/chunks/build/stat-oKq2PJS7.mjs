import { _ as _sfc_main$2 } from './Sidebar-ClYzRSuC.mjs';
import { _ as _sfc_main$6, a as _sfc_main$4, b as _sfc_main$5, c as _sfc_main$3, d as _sfc_main$2$1 } from './SelectScrollDownButton-JzJI8BsA.mjs';
import { _ as _sfc_main$7 } from './SelectGroup-BKLQULEA.mjs';
import { _ as _sfc_main$8 } from './Card-D2-UPrX8.mjs';
import { _ as _sfc_main$1$1, a as _sfc_main$9 } from './CardTitle-Dyaq6zaM.mjs';
import { _ as _sfc_main$b } from './CardContent-5uJgHkPl.mjs';
import { _ as _sfc_main$2$2, a as _sfc_main$a, b as _sfc_main$1$2 } from './TabsList-C3eBcFGa.mjs';
import { _ as _sfc_main$5$1, a as _sfc_main$c, b as _sfc_main$2$3, c as _sfc_main$1$3, d as _sfc_main$4$1, e as _sfc_main$3$1 } from './TableHeader-CsCuT7pu.mjs';
import { defineComponent, ref, computed, watch, mergeProps, withCtx, createVNode, createTextVNode, toDisplayString, createBlock, openBlock, Fragment, renderList, unref, createCommentVNode, renderSlot, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderClass, ssrRenderSlot } from 'vue/server-renderer';
import { reactiveOmit } from '@vueuse/core';
import { c as cn } from './utils-TCWotVPY.mjs';
import { _ as _sfc_main$f } from './TableFooter-DNMPUNqP.mjs';
import { _ as _sfc_main$d } from './Checkbox-DKAsiMFR.mjs';
import { _ as _sfc_main$e } from './Switch-BsBEqAPz.mjs';
import { Q as Qn } from './vue-datepicker-OP97sJr3.mjs';
import { CheckCircle2, TrendingUpDown, XCircle } from 'lucide-vue-next';
import { u as useHead, b as useNuxtApp } from './server.mjs';
import './index-9T5woGxV.mjs';
import 'radix-vue';
import 'class-variance-authority';
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
import 'date-fns';
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
      _push(ssrRenderComponent(_sfc_main$2$3, _attrs, {
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
  async function adPlans(params) {
    const { data } = await $useApi.get("vk-ads/ad_plans/statistics/day", {
      params
    });
    return data;
  }
  async function adPlanGroupsDay(adPlanId, params) {
    const { data } = await $useApi.get(
      `vk-ads/ad_plans/${adPlanId}/groups/statistics/day`,
      { params }
    );
    return data;
  }
  async function adGroupsDay(params) {
    const norm = params ? { ...params } : void 0;
    if (norm) {
      const toCsv = (v) => Array.isArray(v) || v instanceof Set ? Array.from(v).map((x) => x == null ? "" : String(x)).filter(Boolean).join(",") : v;
      if (norm.ids !== void 0) norm.ids = toCsv(norm.ids);
      if (Array.isArray(norm.status) || norm.status instanceof Set)
        norm.status = toCsv(norm.status);
    }
    const { data } = await $useApi.get("vk-ads/ad_groups/statistics/day", {
      params: norm
    });
    return data;
  }
  async function getBanners(params) {
    const norm = params ? { ...params } : void 0;
    if (norm) {
      const toCsv = (v) => Array.isArray(v) || v instanceof Set ? Array.from(v).map((x) => x == null ? "" : String(x)).filter(Boolean).join(",") : v;
      if (norm.ids !== void 0) norm.ids = toCsv(norm.ids);
      if (Array.isArray(norm.status) || norm.status instanceof Set)
        norm.status = toCsv(norm.status);
    }
    const { data } = await $useApi.get(`vk-ads/banners/statistics/day`, {
      params: norm
    });
    return data;
  }
  return {
    adPlans,
    adPlanGroupsDay,
    adGroupsDay,
    getBanners
  };
}
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "stat",
  __ssrInlineRender: true,
  setup(__props) {
    var _a;
    useHead({
      title: "VK \u0420\u0435\u043A\u043B\u0430\u043C\u0430 | Easy CRM"
    });
    const period = ref((/* @__PURE__ */ new Date()).toISOString().slice(0, 7));
    const range = ref([
      /* @__PURE__ */ new Date(period.value + "-01"),
      new Date(+period.value.split("-")[0], +period.value.split("-")[1], 0)
    ]);
    const formatPlaceholder = (date) => {
      return "\u041F\u0435\u0440\u0438\u043E\u0434 \u0441 " + date.map((d) => d.toLocaleDateString()).join(" \u043F\u043E ");
    };
    const { adPlans, adGroupsDay, getBanners } = useVkAdsApi();
    const dateFrom = ref("");
    const dateTo = ref("");
    const loading = ref(false);
    const errorMsg = ref("");
    const response = ref(null);
    const items = ref([]);
    const selectedCampaign = ref(null);
    const selectedGroup = ref(null);
    const limit = ref(30);
    const offset = ref(0);
    const adPlansCount = ref(void 0);
    const groupsCount = ref(void 0);
    const bannersCount = ref(void 0);
    const projects = [
      { value: "neon", name: "\u0418\u0437\u0438\u041D\u0435\u043E\u043D" },
      { value: "book", name: "\u0418\u0437\u0438\u0411\u0443\u043A" }
    ];
    const project = ref(((_a = projects[0]) == null ? void 0 : _a.value) || "");
    function recalcBannersCountFromGroups() {
      if (entityTab.value !== "groups") return;
      const sum = items.value.reduce((acc, it) => {
        var _a2;
        const n = Number((_a2 = it == null ? void 0 : it.banners_count) != null ? _a2 : 0);
        return acc + (isNaN(n) ? 0 : n);
      }, 0);
      bannersCount.value = sum;
      serverBannerCount.value = sum;
    }
    const hasMore = ref(true);
    const loadingMore = ref(false);
    const loadMoreEl = ref(null);
    const sortKey = ref("shows");
    const sortDir = ref("desc");
    const rowChecked = ref({});
    const suppressNextIo = ref(false);
    const selectAllActive = ref(false);
    const currentIds = computed(
      () => items.value.map((it) => {
        var _a2, _b;
        return String((_b = (_a2 = it == null ? void 0 : it.id) != null ? _a2 : it == null ? void 0 : it._id) != null ? _b : "");
      }).filter(Boolean)
    );
    const someRowsChecked = computed(
      () => currentIds.value.some((id) => !!rowChecked.value[id])
    );
    const allRowsChecked = computed(
      () => currentIds.value.length > 0 && currentIds.value.every((id) => !!rowChecked.value[id])
    );
    function onToggleCheckAll(v) {
      const val = !!v;
      selectAllActive.value = val;
      if (val) {
        for (const id of currentIds.value) rowChecked.value[id] = true;
      } else {
        rowChecked.value = {};
      }
    }
    function handleRowChecked(id, v) {
      rowChecked.value[id] = !!v;
      if (selectAllActive.value) selectAllActive.value = false;
    }
    const serverGroupCount = ref(0);
    const serverBannerCount = ref(0);
    const groupIdsFilter = ref([]);
    const effectiveGroupIds = computed(
      () => {
        var _a2;
        return ((_a2 = groupIdsFilter.value) == null ? void 0 : _a2.length) ? groupIdsFilter.value : selectedGroupIds.value;
      }
    );
    const bannerIdsFilter = ref([]);
    const effectiveBannerIds = computed(
      () => {
        var _a2;
        return ((_a2 = bannerIdsFilter.value) == null ? void 0 : _a2.length) ? bannerIdsFilter.value : selectedBannerIds.value;
      }
    );
    const campaignLookupMap = ref({});
    const selectedGroupIds = computed(() => {
      const ids = /* @__PURE__ */ new Set();
      const map = campaignLookupMap.value;
      for (const [key, checked] of Object.entries(rowChecked.value)) {
        if (!checked) continue;
        const entry = map[key];
        const arr = Array.isArray(entry == null ? void 0 : entry.ad_groups) ? entry.ad_groups : [];
        for (const gid of arr) ids.add(gid);
      }
      return Array.from(ids);
    });
    const groupLookupMap = ref({});
    const selectedBannerIds = computed(() => {
      var _a2, _b;
      const ids = /* @__PURE__ */ new Set();
      if (entityTab.value === "groups") {
        const map = groupLookupMap.value;
        for (const [key, checked] of Object.entries(rowChecked.value)) {
          if (!checked) continue;
          const arr = Array.isArray((_a2 = map[key]) == null ? void 0 : _a2.banners) ? map[key].banners : [];
          for (const bid of arr) ids.add(bid);
        }
        return Array.from(ids);
      }
      const cmap = campaignLookupMap.value;
      for (const [key, checked] of Object.entries(rowChecked.value)) {
        if (!checked) continue;
        const arr = Array.isArray((_b = cmap[key]) == null ? void 0 : _b.banners) ? cmap[key].banners : [];
        for (const bid of arr) ids.add(bid);
      }
      return Array.from(ids);
    });
    const groupTabCount = computed(() => {
      const len = selectedGroupIds.value.length;
      return len > 0 ? len : serverGroupCount.value;
    });
    const bannersTabCount = computed(() => {
      const len = selectedBannerIds.value.length;
      return len > 0 ? len : serverBannerCount.value;
    });
    const entityTab = ref("ad_plans");
    function toNumber(val) {
      if (val === null || val === void 0) return 0;
      const n = typeof val === "string" ? parseFloat(val) : Number(val);
      return isNaN(n) ? 0 : n;
    }
    function pickMetric(it, key) {
      var _a2, _b, _c, _d, _e, _f;
      const b = (_a2 = it == null ? void 0 : it.total) == null ? void 0 : _a2.base;
      switch (key) {
        case "name":
          return (_b = it == null ? void 0 : it.name) != null ? _b : "";
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
          return entityTab.value !== "ad_plans" ? (_c = it == null ? void 0 : it.spent_nds) != null ? _c : toNumber(b == null ? void 0 : b.spent) * 1.2 : toNumber(b == null ? void 0 : b.spent) * 1.2;
        case "vk_goals":
          return (_d = b == null ? void 0 : b.vk) == null ? void 0 : _d.goals;
        case "vk_cpa":
          return (_e = b == null ? void 0 : b.vk) == null ? void 0 : _e.cpa;
        case "vk_cr":
          return (_f = b == null ? void 0 : b.vk) == null ? void 0 : _f.cr;
        case "dealsPrice":
          return it == null ? void 0 : it.dealsPrice;
        case "drr":
          return it == null ? void 0 : it.drr;
        case "maketPrice":
          return it == null ? void 0 : it.maketPrice;
        case "makets":
          return it == null ? void 0 : it.makets;
        case "budget_limit_day":
          return it == null ? void 0 : it.budget_limit_day;
      }
    }
    const sortedItems = computed(() => {
      const arr = [...items.value];
      const key = sortKey.value;
      const dir = sortDir.value;
      arr.sort((a, b) => {
        const avRaw = pickMetric(a, key);
        const bvRaw = pickMetric(b, key);
        const avNum = typeof avRaw === "number" ? avRaw : Number(avRaw);
        const bvNum = typeof bvRaw === "number" ? bvRaw : Number(bvRaw);
        const bothNumeric = !isNaN(avNum) && !isNaN(bvNum);
        let cmp = 0;
        if (bothNumeric) {
          cmp = avNum - bvNum;
        } else {
          const as = (avRaw != null ? avRaw : "").toString().toLowerCase();
          const bs = (bvRaw != null ? bvRaw : "").toString().toLowerCase();
          cmp = as.localeCompare(bs);
        }
        return dir === "asc" ? cmp : -cmp;
      });
      return arr;
    });
    async function setSort(key) {
      if (sortKey.value === key) {
        sortDir.value = sortDir.value === "asc" ? "desc" : "asc";
      } else {
        sortKey.value = key;
        sortDir.value = "desc";
      }
      if (dateFrom.value) await submit();
    }
    const baseTotal = computed(() => {
      var _a2, _b;
      return ((_b = (_a2 = response.value) == null ? void 0 : _a2.total) == null ? void 0 : _b.base) || null;
    });
    const footerTotals = computed(() => {
      var _a2, _b;
      const bt = baseTotal.value;
      const resp = response.value || {};
      const sums = items.value.reduce(
        (acc, it) => {
          acc.dealsPrice += toNumber(it == null ? void 0 : it.dealsPrice);
          acc.maketPrice += toNumber(it == null ? void 0 : it.maketPrice);
          acc.makets += toNumber(it == null ? void 0 : it.makets);
          acc.budget_limit_day += toNumber(it == null ? void 0 : it.budget_limit_day);
          const deal = toNumber(it == null ? void 0 : it.dealsPrice);
          const drr = toNumber(it == null ? void 0 : it.drr);
          if (deal > 0) {
            acc._drrWeightedSum += drr * deal;
            acc._drrWeight += deal;
          }
          return acc;
        },
        {
          dealsPrice: 0,
          maketPrice: 0,
          makets: 0,
          budget_limit_day: 0,
          _drrWeightedSum: 0,
          _drrWeight: 0
        }
      );
      const spent = toNumber(bt == null ? void 0 : bt.spent);
      const spent_nds = spent > 0 ? spent * 1.2 : 0;
      const has = (v) => v !== void 0 && v !== null;
      const dealsPriceTotal = has(resp == null ? void 0 : resp.dealsPrice_total) ? toNumber(resp.dealsPrice_total) : sums.dealsPrice;
      const maketPriceTotal = has(resp == null ? void 0 : resp.maketPrice_total) ? toNumber(resp.maketPrice_total) : sums.maketPrice;
      const maketsTotal = has(resp == null ? void 0 : resp.makets_total) ? toNumber(resp.makets_total) : sums.makets;
      const drrTotal = has(resp == null ? void 0 : resp.drr_total) ? toNumber(resp.drr_total) : sums._drrWeight > 0 ? sums._drrWeightedSum / sums._drrWeight : 0;
      return {
        spent,
        spent_nds,
        vk_goals: toNumber((_a2 = bt == null ? void 0 : bt.vk) == null ? void 0 : _a2.goals),
        shows: toNumber(bt == null ? void 0 : bt.shows),
        clicks: toNumber(bt == null ? void 0 : bt.clicks),
        cr: toNumber((_b = bt == null ? void 0 : bt.vk) == null ? void 0 : _b.cr),
        ctr: toNumber(bt == null ? void 0 : bt.ctr),
        dealsPrice: dealsPriceTotal,
        drr: drrTotal,
        maketPrice: maketPriceTotal,
        makets: maketsTotal,
        budget_limit_day: sums.budget_limit_day
      };
    });
    watch(
      range,
      async (val) => {
        const [from, to] = val;
        dateFrom.value = from.toLocaleDateString().split(".").reverse().join("-");
        dateTo.value = to.toISOString().slice(0, 10);
        await submit({ suppressIo: true });
      },
      { immediate: true }
    );
    watch(project, async () => {
      if (!dateFrom.value) return;
      await submit({ suppressIo: true });
    });
    watch(entityTab, async () => {
      if (!dateFrom.value) return;
      if (entityTab.value !== "groups") {
        groupIdsFilter.value = [];
        selectedCampaign.value = null;
      }
      if (entityTab.value !== "banners") {
        bannerIdsFilter.value = [];
        selectedGroup.value = null;
      }
      await submit({ suppressIo: true });
    });
    function f(n) {
      if (n === null || n === void 0) return "";
      const x = Number(n);
      return isNaN(x) ? n : x.toLocaleString("ru-RU");
    }
    function resolveSortBy() {
      const map = {
        name: "name",
        shows: "base.shows",
        clicks: "base.clicks",
        ctr: "base.ctr",
        cpc: "base.cpc",
        cpm: "base.cpm",
        spent: "base.spent",
        // spent_nds — монотонная функция от base.spent; порядок совпадает
        spent_nds: "base.spent",
        vk_goals: "base.vk.goals",
        vk_cpa: "base.vk.cpa",
        vk_cr: "base.vk.cr",
        dealsPrice: "dealsPrice",
        drr: "drr",
        maketPrice: "maketPrice",
        makets: "makets",
        budget_limit_day: "budget_limit_day"
      };
      const sb = map[sortKey.value];
      return sb ? { sort_by: sb, d: sortDir.value } : {};
    }
    async function fetchPage(nextOffset = 0) {
      const sortParams = resolveSortBy();
      const common = {
        date_from: dateFrom.value,
        date_to: dateTo.value || void 0,
        limit: limit.value,
        offset: nextOffset,
        project: project.value || void 0,
        ...sortParams
      };
      if (entityTab.value === "groups") {
        const params = { ...common, ids: effectiveGroupIds.value };
        return await adGroupsDay(params);
      }
      if (entityTab.value === "banners") {
        const params = { ...common, ids: effectiveBannerIds.value };
        return await getBanners(params);
      }
      return await adPlans(common);
    }
    async function submit(opts) {
      var _a2, _b, _c, _d, _e, _f, _g, _h;
      errorMsg.value = "";
      loading.value = true;
      hasMore.value = true;
      offset.value = 0;
      if (entityTab.value === "ad_plans") adPlansCount.value = void 0;
      else if (entityTab.value === "groups") groupsCount.value = void 0;
      else if (entityTab.value === "banners") bannersCount.value = void 0;
      items.value = [];
      try {
        if (opts == null ? void 0 : opts.suppressIo) suppressNextIo.value = true;
        const firstPage = await fetchPage(0);
        response.value = firstPage;
        const pageItems = Array.isArray(firstPage == null ? void 0 : firstPage.items) ? firstPage.items : [];
        items.value = pageItems;
        if (selectAllActive.value && pageItems.length) {
          for (const it of pageItems) {
            const key = String((_b = (_a2 = it == null ? void 0 : it.id) != null ? _a2 : it == null ? void 0 : it._id) != null ? _b : "");
            if (!key) continue;
            rowChecked.value[key] = true;
          }
        }
        if (entityTab.value === "ad_plans") {
          serverGroupCount.value = Number((firstPage == null ? void 0 : firstPage.ad_group_count) || 0);
          serverBannerCount.value = Number((firstPage == null ? void 0 : firstPage.banners_count) || 0);
        }
        if (entityTab.value === "ad_plans" && pageItems.length) {
          for (const it of pageItems) {
            const key = String((_d = (_c = it == null ? void 0 : it.id) != null ? _c : it == null ? void 0 : it._id) != null ? _d : "");
            if (!key) continue;
            campaignLookupMap.value[key] = {
              ad_groups: Array.isArray(it == null ? void 0 : it.ad_groups) ? it.ad_groups : [],
              banners: Array.isArray(it == null ? void 0 : it.banners) ? it.banners : []
            };
          }
        }
        if (entityTab.value === "groups") {
          recalcBannersCountFromGroups();
        }
        if (entityTab.value === "groups" && pageItems.length) {
          for (const it of pageItems) {
            const key = String((_f = (_e = it == null ? void 0 : it.id) != null ? _e : it == null ? void 0 : it._id) != null ? _f : "");
            if (!key) continue;
            groupLookupMap.value[key] = {
              banners: Array.isArray(it == null ? void 0 : it.banners) ? it.banners : []
            };
          }
        }
        const countVal = typeof (firstPage == null ? void 0 : firstPage.count) === "number" ? firstPage.count : void 0;
        if (entityTab.value === "ad_plans") adPlansCount.value = countVal;
        else if (entityTab.value === "groups") {
          groupsCount.value = countVal;
          if (typeof countVal === "number") serverGroupCount.value = countVal;
        } else if (entityTab.value === "banners") {
          bannersCount.value = countVal;
          if (typeof countVal === "number") serverBannerCount.value = countVal;
        }
        hasMore.value = countVal !== void 0 ? pageItems.length < limit.value || pageItems.length < countVal : pageItems.length >= limit.value;
        offset.value = pageItems.length;
      } catch (e) {
        errorMsg.value = ((_h = (_g = e == null ? void 0 : e.response) == null ? void 0 : _g.data) == null ? void 0 : _h.message) || (e == null ? void 0 : e.message) || "\u041E\u0448\u0438\u0431\u043A\u0430";
      } finally {
        loading.value = false;
      }
    }
    async function openAdGroupsForCampaign(item) {
      var _a2, _b, _c;
      groupIdsFilter.value = Array.isArray(item == null ? void 0 : item.ad_groups) ? item.ad_groups : [];
      selectedCampaign.value = {
        id: String((_b = (_a2 = item == null ? void 0 : item.id) != null ? _a2 : item == null ? void 0 : item._id) != null ? _b : ""),
        name: (_c = item == null ? void 0 : item.name) != null ? _c : ""
      };
      entityTab.value = "groups";
    }
    async function openBannersForGroup(item) {
      var _a2, _b, _c;
      bannerIdsFilter.value = Array.isArray(item == null ? void 0 : item.banners) ? item.banners : [];
      selectedGroup.value = {
        id: String((_b = (_a2 = item == null ? void 0 : item.id) != null ? _a2 : item == null ? void 0 : item._id) != null ? _b : ""),
        name: (_c = item == null ? void 0 : item.name) != null ? _c : ""
      };
      entityTab.value = "banners";
    }
    const tableScrollEl = ref(null);
    watch(
      () => loadMoreEl.value,
      (el, prev) => {
        return;
      }
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_LayoutSidebar = _sfc_main$2;
      const _component_UiSelect = _sfc_main$6;
      const _component_UiSelectTrigger = _sfc_main$4;
      const _component_UiSelectValue = _sfc_main$5;
      const _component_UiSelectContent = _sfc_main$3;
      const _component_UiSelectGroup = _sfc_main$7;
      const _component_UiSelectItem = _sfc_main$2$1;
      const _component_UiCard = _sfc_main$8;
      const _component_UiCardHeader = _sfc_main$1$1;
      const _component_UiCardTitle = _sfc_main$9;
      const _component_UiTabs = _sfc_main$2$2;
      const _component_UiTabsList = _sfc_main$a;
      const _component_UiTabsTrigger = _sfc_main$1$2;
      const _component_UiCardContent = _sfc_main$b;
      const _component_UiTable = _sfc_main$5$1;
      const _component_UiTableHeader = _sfc_main$c;
      const _component_UiTableRow = _sfc_main$2$3;
      const _component_UiTableHead = _sfc_main$1$3;
      const _component_UiCheckbox = _sfc_main$d;
      const _component_UiTableBody = _sfc_main$4$1;
      const _component_UiTableCell = _sfc_main$3$1;
      const _component_UiSwitch = _sfc_main$e;
      const _component_UiTableFooter = _sfc_main$f;
      const _component_UiTableEmpty = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative h-screen overflow-hidden hidden-scrollbar" }, _attrs))}><div class="w-full fixed z-10">`);
      _push(ssrRenderComponent(_component_LayoutSidebar, null, null, _parent));
      _push(`</div><div class="h-full flex flex-col p-4 gap-2 mx-[auto] max-w-[2048px] pt-16 min-w-[1024px]"><div class="max-w-full mx-auto h-full flex flex-col min-h-0"><div class="flex gap-2 items-center">`);
      _push(ssrRenderComponent(_component_UiSelect, {
        modelValue: project.value,
        "onUpdate:modelValue": ($event) => project.value = $event
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UiSelectTrigger, { class: "w-[160px]" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UiSelectValue, { placeholder: "\u0412\u044B\u0431\u0440\u0430\u0442\u044C \u043F\u0440\u043E\u0435\u043A\u0442" }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UiSelectValue, { placeholder: "\u0412\u044B\u0431\u0440\u0430\u0442\u044C \u043F\u0440\u043E\u0435\u043A\u0442" })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UiSelectContent, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UiSelectGroup, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<!--[-->`);
                        ssrRenderList(projects, (p) => {
                          _push4(ssrRenderComponent(_component_UiSelectItem, {
                            key: p.value,
                            value: p.value
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`${ssrInterpolate(p.name)}`);
                              } else {
                                return [
                                  createTextVNode(toDisplayString(p.name), 1)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        });
                        _push4(`<!--]-->`);
                      } else {
                        return [
                          (openBlock(), createBlock(Fragment, null, renderList(projects, (p) => {
                            return createVNode(_component_UiSelectItem, {
                              key: p.value,
                              value: p.value
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(p.name), 1)
                              ]),
                              _: 2
                            }, 1032, ["value"]);
                          }), 64))
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UiSelectGroup, null, {
                      default: withCtx(() => [
                        (openBlock(), createBlock(Fragment, null, renderList(projects, (p) => {
                          return createVNode(_component_UiSelectItem, {
                            key: p.value,
                            value: p.value
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(p.name), 1)
                            ]),
                            _: 2
                          }, 1032, ["value"]);
                        }), 64))
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
              createVNode(_component_UiSelectTrigger, { class: "w-[160px]" }, {
                default: withCtx(() => [
                  createVNode(_component_UiSelectValue, { placeholder: "\u0412\u044B\u0431\u0440\u0430\u0442\u044C \u043F\u0440\u043E\u0435\u043A\u0442" })
                ]),
                _: 1
              }),
              createVNode(_component_UiSelectContent, null, {
                default: withCtx(() => [
                  createVNode(_component_UiSelectGroup, null, {
                    default: withCtx(() => [
                      (openBlock(), createBlock(Fragment, null, renderList(projects, (p) => {
                        return createVNode(_component_UiSelectItem, {
                          key: p.value,
                          value: p.value
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(p.name), 1)
                          ]),
                          _: 2
                        }, 1032, ["value"]);
                      }), 64))
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
      _push(ssrRenderComponent(unref(Qn), {
        modelValue: range.value,
        "onUpdate:modelValue": ($event) => range.value = $event,
        range: "",
        "enable-time-picker": false,
        locale: "ru",
        placeholder: "\u0412\u044B\u0431\u0440\u0430\u0442\u044C \u0434\u043D\u0438",
        "select-text": "\u0413\u043E\u0442\u043E\u0432\u043E",
        "cancel-text": "\u0417\u0430\u043A\u0440\u044B\u0442\u044C",
        class: "grow",
        format: formatPlaceholder,
        clearable: false,
        "multi-calendars": ""
      }, null, _parent));
      _push(`</div>`);
      if (errorMsg.value) {
        _push(`<p class="text-red-600 whitespace-pre-wrap mb-3">${ssrInterpolate(errorMsg.value)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_component_UiCard, { class: "mt-2 flex-1 min-h-0 flex flex-col" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UiCardHeader, { class: "p-2" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UiCardTitle, null, null, _parent3, _scopeId2));
                  _push3(`<div class=""${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UiTabs, {
                    modelValue: entityTab.value,
                    "onUpdate:modelValue": ($event) => entityTab.value = $event,
                    "default-value": "ad_plans"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UiTabsList, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_UiTabsTrigger, { value: "ad_plans" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`\u041A\u043E\u043C\u043F\u0430\u043D\u0438\u0438 (${ssrInterpolate(adPlansCount.value)})`);
                                  } else {
                                    return [
                                      createTextVNode("\u041A\u043E\u043C\u043F\u0430\u043D\u0438\u0438 (" + toDisplayString(adPlansCount.value) + ")", 1)
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_UiTabsTrigger, { value: "groups" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`\u0413\u0440\u0443\u043F\u043F\u044B (${ssrInterpolate(groupTabCount.value)})`);
                                  } else {
                                    return [
                                      createTextVNode("\u0413\u0440\u0443\u043F\u043F\u044B (" + toDisplayString(groupTabCount.value) + ")", 1)
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_UiTabsTrigger, { value: "banners" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`\u0411\u0430\u043D\u043D\u0435\u0440\u044B (${ssrInterpolate(bannersTabCount.value)})`);
                                  } else {
                                    return [
                                      createTextVNode("\u0411\u0430\u043D\u043D\u0435\u0440\u044B (" + toDisplayString(bannersTabCount.value) + ")", 1)
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_UiTabsTrigger, { value: "ad_plans" }, {
                                  default: withCtx(() => [
                                    createTextVNode("\u041A\u043E\u043C\u043F\u0430\u043D\u0438\u0438 (" + toDisplayString(adPlansCount.value) + ")", 1)
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_UiTabsTrigger, { value: "groups" }, {
                                  default: withCtx(() => [
                                    createTextVNode("\u0413\u0440\u0443\u043F\u043F\u044B (" + toDisplayString(groupTabCount.value) + ")", 1)
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_UiTabsTrigger, { value: "banners" }, {
                                  default: withCtx(() => [
                                    createTextVNode("\u0411\u0430\u043D\u043D\u0435\u0440\u044B (" + toDisplayString(bannersTabCount.value) + ")", 1)
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
                              createVNode(_component_UiTabsTrigger, { value: "ad_plans" }, {
                                default: withCtx(() => [
                                  createTextVNode("\u041A\u043E\u043C\u043F\u0430\u043D\u0438\u0438 (" + toDisplayString(adPlansCount.value) + ")", 1)
                                ]),
                                _: 1
                              }),
                              createVNode(_component_UiTabsTrigger, { value: "groups" }, {
                                default: withCtx(() => [
                                  createTextVNode("\u0413\u0440\u0443\u043F\u043F\u044B (" + toDisplayString(groupTabCount.value) + ")", 1)
                                ]),
                                _: 1
                              }),
                              createVNode(_component_UiTabsTrigger, { value: "banners" }, {
                                default: withCtx(() => [
                                  createTextVNode("\u0411\u0430\u043D\u043D\u0435\u0440\u044B (" + toDisplayString(bannersTabCount.value) + ")", 1)
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
                  return [
                    createVNode(_component_UiCardTitle),
                    createVNode("div", { class: "" }, [
                      createVNode(_component_UiTabs, {
                        modelValue: entityTab.value,
                        "onUpdate:modelValue": ($event) => entityTab.value = $event,
                        "default-value": "ad_plans"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_UiTabsList, null, {
                            default: withCtx(() => [
                              createVNode(_component_UiTabsTrigger, { value: "ad_plans" }, {
                                default: withCtx(() => [
                                  createTextVNode("\u041A\u043E\u043C\u043F\u0430\u043D\u0438\u0438 (" + toDisplayString(adPlansCount.value) + ")", 1)
                                ]),
                                _: 1
                              }),
                              createVNode(_component_UiTabsTrigger, { value: "groups" }, {
                                default: withCtx(() => [
                                  createTextVNode("\u0413\u0440\u0443\u043F\u043F\u044B (" + toDisplayString(groupTabCount.value) + ")", 1)
                                ]),
                                _: 1
                              }),
                              createVNode(_component_UiTabsTrigger, { value: "banners" }, {
                                default: withCtx(() => [
                                  createTextVNode("\u0411\u0430\u043D\u043D\u0435\u0440\u044B (" + toDisplayString(bannersTabCount.value) + ")", 1)
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
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UiCardContent, { class: "flex-1 min-h-0 p-0" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="h-full min-h-0 overflow-y-auto hidden-scrollbar"${_scopeId2}>`);
                  if (sortedItems.value.length) {
                    _push3(`<!--[-->`);
                    _push3(ssrRenderComponent(_component_UiTable, { class: "min-w-full" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_UiTableHeader, { class: "" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_UiTableRow, { class: "sticky top-0 z-10 bg-neutral-200 hover:bg-neutral-200" }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(_component_UiTableHead, { class: "w-10 text-center" }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(ssrRenderComponent(_component_UiCheckbox, {
                                              checked: allRowsChecked.value,
                                              indeterminate: someRowsChecked.value && !allRowsChecked.value,
                                              "onUpdate:checked": onToggleCheckAll
                                            }, null, _parent7, _scopeId6));
                                          } else {
                                            return [
                                              createVNode(_component_UiCheckbox, {
                                                checked: allRowsChecked.value,
                                                indeterminate: someRowsChecked.value && !allRowsChecked.value,
                                                "onUpdate:checked": onToggleCheckAll
                                              }, null, 8, ["checked", "indeterminate"])
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                      _push6(ssrRenderComponent(_component_UiTableHead, { class: "w-16 text-center" }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`\u0412\u043A\u043B.`);
                                          } else {
                                            return [
                                              createTextVNode("\u0412\u043A\u043B.")
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                      _push6(ssrRenderComponent(_component_UiTableHead, {
                                        class: "text-left cursor-pointer select-none",
                                        onClick: ($event) => setSort("name")
                                      }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(` \u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 `);
                                            if (sortKey.value === "name") {
                                              _push7(`<span${_scopeId6}>${ssrInterpolate(sortDir.value === "asc" ? "\u25B2" : "\u25BC")}</span>`);
                                            } else {
                                              _push7(`<!---->`);
                                            }
                                          } else {
                                            return [
                                              createTextVNode(" \u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 "),
                                              sortKey.value === "name" ? (openBlock(), createBlock("span", { key: 0 }, toDisplayString(sortDir.value === "asc" ? "\u25B2" : "\u25BC"), 1)) : createCommentVNode("", true)
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
                                        onClick: ($event) => setSort("dealsPrice")
                                      }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(` \u041E\u0444\u043E\u0440\u043C\u043B\u0435\u043D\u043E `);
                                            if (sortKey.value === "dealsPrice") {
                                              _push7(`<span${_scopeId6}>${ssrInterpolate(sortDir.value === "asc" ? "\u25B2" : "\u25BC")}</span>`);
                                            } else {
                                              _push7(`<!---->`);
                                            }
                                          } else {
                                            return [
                                              createTextVNode(" \u041E\u0444\u043E\u0440\u043C\u043B\u0435\u043D\u043E "),
                                              sortKey.value === "dealsPrice" ? (openBlock(), createBlock("span", { key: 0 }, toDisplayString(sortDir.value === "asc" ? "\u25B2" : "\u25BC"), 1)) : createCommentVNode("", true)
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                      _push6(ssrRenderComponent(_component_UiTableHead, {
                                        class: "text-center cursor-pointer select-none",
                                        onClick: ($event) => setSort("drr")
                                      }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(` \u0414\u0420\u0420 `);
                                            if (sortKey.value === "drr") {
                                              _push7(`<span${_scopeId6}>${ssrInterpolate(sortDir.value === "asc" ? "\u25B2" : "\u25BC")}</span>`);
                                            } else {
                                              _push7(`<!---->`);
                                            }
                                          } else {
                                            return [
                                              createTextVNode(" \u0414\u0420\u0420 "),
                                              sortKey.value === "drr" ? (openBlock(), createBlock("span", { key: 0 }, toDisplayString(sortDir.value === "asc" ? "\u25B2" : "\u25BC"), 1)) : createCommentVNode("", true)
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                      _push6(ssrRenderComponent(_component_UiTableHead, {
                                        class: "text-center cursor-pointer select-none",
                                        onClick: ($event) => setSort("maketPrice")
                                      }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(` \u0426\u0435\u043D\u0430 \u043C\u0430\u043A\u0435\u0442\u0430 `);
                                            if (sortKey.value === "maketPrice") {
                                              _push7(`<span${_scopeId6}>${ssrInterpolate(sortDir.value === "asc" ? "\u25B2" : "\u25BC")}</span>`);
                                            } else {
                                              _push7(`<!---->`);
                                            }
                                          } else {
                                            return [
                                              createTextVNode(" \u0426\u0435\u043D\u0430 \u043C\u0430\u043A\u0435\u0442\u0430 "),
                                              sortKey.value === "maketPrice" ? (openBlock(), createBlock("span", { key: 0 }, toDisplayString(sortDir.value === "asc" ? "\u25B2" : "\u25BC"), 1)) : createCommentVNode("", true)
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                      _push6(ssrRenderComponent(_component_UiTableHead, {
                                        class: "text-center cursor-pointer select-none",
                                        onClick: ($event) => setSort("makets")
                                      }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(` \u041C\u0430\u043A\u0435\u0442\u044B `);
                                            if (sortKey.value === "makets") {
                                              _push7(`<span${_scopeId6}>${ssrInterpolate(sortDir.value === "asc" ? "\u25B2" : "\u25BC")}</span>`);
                                            } else {
                                              _push7(`<!---->`);
                                            }
                                          } else {
                                            return [
                                              createTextVNode(" \u041C\u0430\u043A\u0435\u0442\u044B "),
                                              sortKey.value === "makets" ? (openBlock(), createBlock("span", { key: 0 }, toDisplayString(sortDir.value === "asc" ? "\u25B2" : "\u25BC"), 1)) : createCommentVNode("", true)
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                      _push6(ssrRenderComponent(_component_UiTableHead, {
                                        class: "text-center cursor-pointer select-none",
                                        onClick: ($event) => setSort("budget_limit_day")
                                      }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(` \u041B\u0438\u043C\u0438\u0442/\u0434\u0435\u043D\u044C `);
                                            if (sortKey.value === "budget_limit_day") {
                                              _push7(`<span${_scopeId6}>${ssrInterpolate(sortDir.value === "asc" ? "\u25B2" : "\u25BC")}</span>`);
                                            } else {
                                              _push7(`<!---->`);
                                            }
                                          } else {
                                            return [
                                              createTextVNode(" \u041B\u0438\u043C\u0438\u0442/\u0434\u0435\u043D\u044C "),
                                              sortKey.value === "budget_limit_day" ? (openBlock(), createBlock("span", { key: 0 }, toDisplayString(sortDir.value === "asc" ? "\u25B2" : "\u25BC"), 1)) : createCommentVNode("", true)
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
                                            _push7(` CR `);
                                            if (sortKey.value === "vk_cr") {
                                              _push7(`<span${_scopeId6}>${ssrInterpolate(sortDir.value === "asc" ? "\u25B2" : "\u25BC")}</span>`);
                                            } else {
                                              _push7(`<!---->`);
                                            }
                                          } else {
                                            return [
                                              createTextVNode(" CR "),
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
                                        createVNode(_component_UiTableHead, { class: "w-10 text-center" }, {
                                          default: withCtx(() => [
                                            createVNode(_component_UiCheckbox, {
                                              checked: allRowsChecked.value,
                                              indeterminate: someRowsChecked.value && !allRowsChecked.value,
                                              "onUpdate:checked": onToggleCheckAll
                                            }, null, 8, ["checked", "indeterminate"])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_UiTableHead, { class: "w-16 text-center" }, {
                                          default: withCtx(() => [
                                            createTextVNode("\u0412\u043A\u043B.")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_UiTableHead, {
                                          class: "text-left cursor-pointer select-none",
                                          onClick: ($event) => setSort("name")
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(" \u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 "),
                                            sortKey.value === "name" ? (openBlock(), createBlock("span", { key: 0 }, toDisplayString(sortDir.value === "asc" ? "\u25B2" : "\u25BC"), 1)) : createCommentVNode("", true)
                                          ]),
                                          _: 1
                                        }, 8, ["onClick"]),
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
                                          onClick: ($event) => setSort("dealsPrice")
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(" \u041E\u0444\u043E\u0440\u043C\u043B\u0435\u043D\u043E "),
                                            sortKey.value === "dealsPrice" ? (openBlock(), createBlock("span", { key: 0 }, toDisplayString(sortDir.value === "asc" ? "\u25B2" : "\u25BC"), 1)) : createCommentVNode("", true)
                                          ]),
                                          _: 1
                                        }, 8, ["onClick"]),
                                        createVNode(_component_UiTableHead, {
                                          class: "text-center cursor-pointer select-none",
                                          onClick: ($event) => setSort("drr")
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(" \u0414\u0420\u0420 "),
                                            sortKey.value === "drr" ? (openBlock(), createBlock("span", { key: 0 }, toDisplayString(sortDir.value === "asc" ? "\u25B2" : "\u25BC"), 1)) : createCommentVNode("", true)
                                          ]),
                                          _: 1
                                        }, 8, ["onClick"]),
                                        createVNode(_component_UiTableHead, {
                                          class: "text-center cursor-pointer select-none",
                                          onClick: ($event) => setSort("maketPrice")
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(" \u0426\u0435\u043D\u0430 \u043C\u0430\u043A\u0435\u0442\u0430 "),
                                            sortKey.value === "maketPrice" ? (openBlock(), createBlock("span", { key: 0 }, toDisplayString(sortDir.value === "asc" ? "\u25B2" : "\u25BC"), 1)) : createCommentVNode("", true)
                                          ]),
                                          _: 1
                                        }, 8, ["onClick"]),
                                        createVNode(_component_UiTableHead, {
                                          class: "text-center cursor-pointer select-none",
                                          onClick: ($event) => setSort("makets")
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(" \u041C\u0430\u043A\u0435\u0442\u044B "),
                                            sortKey.value === "makets" ? (openBlock(), createBlock("span", { key: 0 }, toDisplayString(sortDir.value === "asc" ? "\u25B2" : "\u25BC"), 1)) : createCommentVNode("", true)
                                          ]),
                                          _: 1
                                        }, 8, ["onClick"]),
                                        createVNode(_component_UiTableHead, {
                                          class: "text-center cursor-pointer select-none",
                                          onClick: ($event) => setSort("budget_limit_day")
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(" \u041B\u0438\u043C\u0438\u0442/\u0434\u0435\u043D\u044C "),
                                            sortKey.value === "budget_limit_day" ? (openBlock(), createBlock("span", { key: 0 }, toDisplayString(sortDir.value === "asc" ? "\u25B2" : "\u25BC"), 1)) : createCommentVNode("", true)
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
                                            createTextVNode(" CR "),
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
                                  createVNode(_component_UiTableRow, { class: "sticky top-0 z-10 bg-neutral-200 hover:bg-neutral-200" }, {
                                    default: withCtx(() => [
                                      createVNode(_component_UiTableHead, { class: "w-10 text-center" }, {
                                        default: withCtx(() => [
                                          createVNode(_component_UiCheckbox, {
                                            checked: allRowsChecked.value,
                                            indeterminate: someRowsChecked.value && !allRowsChecked.value,
                                            "onUpdate:checked": onToggleCheckAll
                                          }, null, 8, ["checked", "indeterminate"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_UiTableHead, { class: "w-16 text-center" }, {
                                        default: withCtx(() => [
                                          createTextVNode("\u0412\u043A\u043B.")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_UiTableHead, {
                                        class: "text-left cursor-pointer select-none",
                                        onClick: ($event) => setSort("name")
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(" \u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 "),
                                          sortKey.value === "name" ? (openBlock(), createBlock("span", { key: 0 }, toDisplayString(sortDir.value === "asc" ? "\u25B2" : "\u25BC"), 1)) : createCommentVNode("", true)
                                        ]),
                                        _: 1
                                      }, 8, ["onClick"]),
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
                                        onClick: ($event) => setSort("dealsPrice")
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(" \u041E\u0444\u043E\u0440\u043C\u043B\u0435\u043D\u043E "),
                                          sortKey.value === "dealsPrice" ? (openBlock(), createBlock("span", { key: 0 }, toDisplayString(sortDir.value === "asc" ? "\u25B2" : "\u25BC"), 1)) : createCommentVNode("", true)
                                        ]),
                                        _: 1
                                      }, 8, ["onClick"]),
                                      createVNode(_component_UiTableHead, {
                                        class: "text-center cursor-pointer select-none",
                                        onClick: ($event) => setSort("drr")
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(" \u0414\u0420\u0420 "),
                                          sortKey.value === "drr" ? (openBlock(), createBlock("span", { key: 0 }, toDisplayString(sortDir.value === "asc" ? "\u25B2" : "\u25BC"), 1)) : createCommentVNode("", true)
                                        ]),
                                        _: 1
                                      }, 8, ["onClick"]),
                                      createVNode(_component_UiTableHead, {
                                        class: "text-center cursor-pointer select-none",
                                        onClick: ($event) => setSort("maketPrice")
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(" \u0426\u0435\u043D\u0430 \u043C\u0430\u043A\u0435\u0442\u0430 "),
                                          sortKey.value === "maketPrice" ? (openBlock(), createBlock("span", { key: 0 }, toDisplayString(sortDir.value === "asc" ? "\u25B2" : "\u25BC"), 1)) : createCommentVNode("", true)
                                        ]),
                                        _: 1
                                      }, 8, ["onClick"]),
                                      createVNode(_component_UiTableHead, {
                                        class: "text-center cursor-pointer select-none",
                                        onClick: ($event) => setSort("makets")
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(" \u041C\u0430\u043A\u0435\u0442\u044B "),
                                          sortKey.value === "makets" ? (openBlock(), createBlock("span", { key: 0 }, toDisplayString(sortDir.value === "asc" ? "\u25B2" : "\u25BC"), 1)) : createCommentVNode("", true)
                                        ]),
                                        _: 1
                                      }, 8, ["onClick"]),
                                      createVNode(_component_UiTableHead, {
                                        class: "text-center cursor-pointer select-none",
                                        onClick: ($event) => setSort("budget_limit_day")
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(" \u041B\u0438\u043C\u0438\u0442/\u0434\u0435\u043D\u044C "),
                                          sortKey.value === "budget_limit_day" ? (openBlock(), createBlock("span", { key: 0 }, toDisplayString(sortDir.value === "asc" ? "\u25B2" : "\u25BC"), 1)) : createCommentVNode("", true)
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
                                          createTextVNode(" CR "),
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
                                        _push6(ssrRenderComponent(_component_UiTableCell, { class: "text-center" }, {
                                          default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                            if (_push7) {
                                              _push7(ssrRenderComponent(_component_UiCheckbox, {
                                                checked: !!rowChecked.value[(it.id || it._id) + ""],
                                                "onUpdate:checked": (v) => handleRowChecked((it.id || it._id) + "", v)
                                              }, null, _parent7, _scopeId6));
                                            } else {
                                              return [
                                                createVNode(_component_UiCheckbox, {
                                                  checked: !!rowChecked.value[(it.id || it._id) + ""],
                                                  "onUpdate:checked": (v) => handleRowChecked((it.id || it._id) + "", v)
                                                }, null, 8, ["checked", "onUpdate:checked"])
                                              ];
                                            }
                                          }),
                                          _: 2
                                        }, _parent6, _scopeId5));
                                        _push6(ssrRenderComponent(_component_UiTableCell, { class: "text-center" }, {
                                          default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                            if (_push7) {
                                              _push7(ssrRenderComponent(_component_UiSwitch, {
                                                checked: it.status === "active",
                                                disabled: it.status === "deleted",
                                                "onUpdate:checked": (v) => it.status = v ? "active" : "blocked"
                                              }, null, _parent7, _scopeId6));
                                            } else {
                                              return [
                                                createVNode(_component_UiSwitch, {
                                                  checked: it.status === "active",
                                                  disabled: it.status === "deleted",
                                                  "onUpdate:checked": (v) => it.status = v ? "active" : "blocked"
                                                }, null, 8, ["checked", "disabled", "onUpdate:checked"])
                                              ];
                                            }
                                          }),
                                          _: 2
                                        }, _parent6, _scopeId5));
                                        _push6(ssrRenderComponent(_component_UiTableCell, { class: "text-left" }, {
                                          default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                            var _a2, _b, _c, _d, _e, _f, _g, _h;
                                            if (_push7) {
                                              _push7(`<div class="flex flex-col gap-1 items-start"${_scopeId6}>`);
                                              if (entityTab.value === "ad_plans") {
                                                _push7(`<button type="button" class="text-left text-blue-600 hover:underline cursor-pointer font-bold"${_scopeId6}>${ssrInterpolate((_a2 = it.name) != null ? _a2 : "-")}</button>`);
                                              } else if (entityTab.value === "groups" && !selectedGroup.value) {
                                                _push7(`<button type="button" class="text-left text-blue-600 hover:underline cursor-pointer font-bold"${_scopeId6}>${ssrInterpolate((_b = it.name) != null ? _b : "-")}</button>`);
                                              } else {
                                                _push7(`<span class="text-left"${_scopeId6}>${ssrInterpolate((_c = it.name) != null ? _c : "-")}</span>`);
                                              }
                                              _push7(`<span class="text-xs text-neutral-400"${_scopeId6}>${ssrInterpolate((_d = it.id) != null ? _d : it._id)}</span>`);
                                              if (it.ref) {
                                                _push7(`<span class="text-xs text-neutral-400"${_scopeId6}>${ssrInterpolate(it.ref)}</span>`);
                                              } else {
                                                _push7(`<!---->`);
                                              }
                                              _push7(`<span class="${ssrRenderClass([{
                                                "bg-emerald-500": it.status === "active",
                                                "bg-amber-500": it.status === "blocked",
                                                "bg-rose-500": it.status === "deleted"
                                              }, "inline-flex items-center gap-2 rounded-full px-1 py-0 text-xs text-white"])}"${_scopeId6}>`);
                                              if (it.status === "active") {
                                                _push7(ssrRenderComponent(unref(CheckCircle2), { class: "w-3 h-3" }, null, _parent7, _scopeId6));
                                              } else if (it.status === "paused") {
                                                _push7(ssrRenderComponent(unref(TrendingUpDown), { class: "w-3 h-3" }, null, _parent7, _scopeId6));
                                              } else {
                                                _push7(ssrRenderComponent(unref(XCircle), { class: "w-3 h-3" }, null, _parent7, _scopeId6));
                                              }
                                              _push7(` ${ssrInterpolate(it.status === "active" ? "\u0410\u043A\u0442\u0438\u0432\u043D\u0430" : it.status === "blocked" ? "\u0417\u0430\u0431\u043B\u043E\u043A\u0438\u0440\u043E\u0432\u0430\u043D\u0430" : "\u0423\u0434\u0430\u043B\u0435\u043D\u0430")}</span></div>`);
                                            } else {
                                              return [
                                                createVNode("div", { class: "flex flex-col gap-1 items-start" }, [
                                                  entityTab.value === "ad_plans" ? (openBlock(), createBlock("button", {
                                                    key: 0,
                                                    type: "button",
                                                    class: "text-left text-blue-600 hover:underline cursor-pointer font-bold",
                                                    onClick: ($event) => openAdGroupsForCampaign(it)
                                                  }, toDisplayString((_e = it.name) != null ? _e : "-"), 9, ["onClick"])) : entityTab.value === "groups" && !selectedGroup.value ? (openBlock(), createBlock("button", {
                                                    key: 1,
                                                    type: "button",
                                                    class: "text-left text-blue-600 hover:underline cursor-pointer font-bold",
                                                    onClick: ($event) => openBannersForGroup(it)
                                                  }, toDisplayString((_f = it.name) != null ? _f : "-"), 9, ["onClick"])) : (openBlock(), createBlock("span", {
                                                    key: 2,
                                                    class: "text-left"
                                                  }, toDisplayString((_g = it.name) != null ? _g : "-"), 1)),
                                                  createVNode("span", { class: "text-xs text-neutral-400" }, toDisplayString((_h = it.id) != null ? _h : it._id), 1),
                                                  it.ref ? (openBlock(), createBlock("span", {
                                                    key: 3,
                                                    class: "text-xs text-neutral-400"
                                                  }, toDisplayString(it.ref), 1)) : createCommentVNode("", true),
                                                  createVNode("span", {
                                                    class: ["inline-flex items-center gap-2 rounded-full px-1 py-0 text-xs text-white", {
                                                      "bg-emerald-500": it.status === "active",
                                                      "bg-amber-500": it.status === "blocked",
                                                      "bg-rose-500": it.status === "deleted"
                                                    }]
                                                  }, [
                                                    it.status === "active" ? (openBlock(), createBlock(unref(CheckCircle2), {
                                                      key: 0,
                                                      class: "w-3 h-3"
                                                    })) : it.status === "paused" ? (openBlock(), createBlock(unref(TrendingUpDown), {
                                                      key: 1,
                                                      class: "w-3 h-3"
                                                    })) : (openBlock(), createBlock(unref(XCircle), {
                                                      key: 2,
                                                      class: "w-3 h-3"
                                                    })),
                                                    createTextVNode(" " + toDisplayString(it.status === "active" ? "\u0410\u043A\u0442\u0438\u0432\u043D\u0430" : it.status === "blocked" ? "\u0417\u0430\u0431\u043B\u043E\u043A\u0438\u0440\u043E\u0432\u0430\u043D\u0430" : "\u0423\u0434\u0430\u043B\u0435\u043D\u0430"), 1)
                                                  ], 2)
                                                ])
                                              ];
                                            }
                                          }),
                                          _: 2
                                        }, _parent6, _scopeId5));
                                        _push6(ssrRenderComponent(_component_UiTableCell, { class: "text-center" }, {
                                          default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                            var _a2, _b, _c, _d, _e, _f;
                                            if (_push7) {
                                              _push7(`${ssrInterpolate(f((_c = (_b = (_a2 = it == null ? void 0 : it.total) == null ? void 0 : _a2.base) == null ? void 0 : _b.spent) != null ? _c : "0"))} \u20BD`);
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
                                            var _a2, _b, _c, _d, _e, _f, _g, _h, _i, _j;
                                            if (_push7) {
                                              _push7(`${ssrInterpolate(f(
                                                entityTab.value !== "ad_plans" ? toNumber(
                                                  (_c = it == null ? void 0 : it.spent_nds) != null ? _c : toNumber((_b = (_a2 = it == null ? void 0 : it.total) == null ? void 0 : _a2.base) == null ? void 0 : _b.spent) * 1.2
                                                ) : toNumber((_e = (_d = it == null ? void 0 : it.total) == null ? void 0 : _d.base) == null ? void 0 : _e.spent) * 1.2
                                              ))} \u20BD `);
                                            } else {
                                              return [
                                                createTextVNode(toDisplayString(f(
                                                  entityTab.value !== "ad_plans" ? toNumber(
                                                    (_h = it == null ? void 0 : it.spent_nds) != null ? _h : toNumber((_g = (_f = it == null ? void 0 : it.total) == null ? void 0 : _f.base) == null ? void 0 : _g.spent) * 1.2
                                                  ) : toNumber((_j = (_i = it == null ? void 0 : it.total) == null ? void 0 : _i.base) == null ? void 0 : _j.spent) * 1.2
                                                )) + " \u20BD ", 1)
                                              ];
                                            }
                                          }),
                                          _: 2
                                        }, _parent6, _scopeId5));
                                        _push6(ssrRenderComponent(_component_UiTableCell, { class: "text-center" }, {
                                          default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                            var _a2, _b;
                                            if (_push7) {
                                              _push7(`${ssrInterpolate(f((_a2 = it == null ? void 0 : it.dealsPrice) != null ? _a2 : 0))} \u20BD`);
                                            } else {
                                              return [
                                                createTextVNode(toDisplayString(f((_b = it == null ? void 0 : it.dealsPrice) != null ? _b : 0)) + " \u20BD", 1)
                                              ];
                                            }
                                          }),
                                          _: 2
                                        }, _parent6, _scopeId5));
                                        _push6(ssrRenderComponent(_component_UiTableCell, { class: "text-center" }, {
                                          default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                            var _a2, _b;
                                            if (_push7) {
                                              _push7(`${ssrInterpolate(f((_a2 = it == null ? void 0 : it.drr) != null ? _a2 : 0))}%`);
                                            } else {
                                              return [
                                                createTextVNode(toDisplayString(f((_b = it == null ? void 0 : it.drr) != null ? _b : 0)) + "%", 1)
                                              ];
                                            }
                                          }),
                                          _: 2
                                        }, _parent6, _scopeId5));
                                        _push6(ssrRenderComponent(_component_UiTableCell, { class: "text-center" }, {
                                          default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                            var _a2, _b;
                                            if (_push7) {
                                              _push7(`${ssrInterpolate(f((_a2 = it == null ? void 0 : it.maketPrice) != null ? _a2 : 0))} \u20BD`);
                                            } else {
                                              return [
                                                createTextVNode(toDisplayString(f((_b = it == null ? void 0 : it.maketPrice) != null ? _b : 0)) + " \u20BD", 1)
                                              ];
                                            }
                                          }),
                                          _: 2
                                        }, _parent6, _scopeId5));
                                        _push6(ssrRenderComponent(_component_UiTableCell, { class: "text-center" }, {
                                          default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                            var _a2, _b;
                                            if (_push7) {
                                              _push7(`${ssrInterpolate(f((_a2 = it == null ? void 0 : it.makets) != null ? _a2 : 0))}`);
                                            } else {
                                              return [
                                                createTextVNode(toDisplayString(f((_b = it == null ? void 0 : it.makets) != null ? _b : 0)), 1)
                                              ];
                                            }
                                          }),
                                          _: 2
                                        }, _parent6, _scopeId5));
                                        _push6(ssrRenderComponent(_component_UiTableCell, { class: "text-center" }, {
                                          default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                            var _a2, _b;
                                            if (_push7) {
                                              _push7(`${ssrInterpolate(f((_a2 = it == null ? void 0 : it.budget_limit_day) != null ? _a2 : 0))} \u20BD`);
                                            } else {
                                              return [
                                                createTextVNode(toDisplayString(f((_b = it == null ? void 0 : it.budget_limit_day) != null ? _b : 0)) + " \u20BD", 1)
                                              ];
                                            }
                                          }),
                                          _: 2
                                        }, _parent6, _scopeId5));
                                        _push6(ssrRenderComponent(_component_UiTableCell, { class: "text-center" }, {
                                          default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                            var _a2, _b, _c, _d, _e, _f, _g, _h;
                                            if (_push7) {
                                              _push7(`${ssrInterpolate(f((_d = (_c = (_b = (_a2 = it == null ? void 0 : it.total) == null ? void 0 : _a2.base) == null ? void 0 : _b.vk) == null ? void 0 : _c.goals) != null ? _d : 0))}`);
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
                                            var _a2, _b, _c, _d, _e, _f;
                                            if (_push7) {
                                              _push7(`${ssrInterpolate(f((_c = (_b = (_a2 = it == null ? void 0 : it.total) == null ? void 0 : _a2.base) == null ? void 0 : _b.shows) != null ? _c : 0))}`);
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
                                            var _a2, _b, _c, _d, _e, _f;
                                            if (_push7) {
                                              _push7(`${ssrInterpolate(f((_c = (_b = (_a2 = it == null ? void 0 : it.total) == null ? void 0 : _a2.base) == null ? void 0 : _b.clicks) != null ? _c : 0))}`);
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
                                            var _a2, _b, _c, _d, _e, _f, _g, _h;
                                            if (_push7) {
                                              _push7(`${ssrInterpolate(f((_d = (_c = (_b = (_a2 = it == null ? void 0 : it.total) == null ? void 0 : _a2.base) == null ? void 0 : _b.vk) == null ? void 0 : _c.cr) != null ? _d : 0))} %`);
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
                                            var _a2, _b, _c, _d, _e, _f;
                                            if (_push7) {
                                              _push7(`${ssrInterpolate(f((_c = (_b = (_a2 = it == null ? void 0 : it.total) == null ? void 0 : _a2.base) == null ? void 0 : _b.ctr) != null ? _c : 0))} %`);
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
                                          createVNode(_component_UiTableCell, { class: "text-center" }, {
                                            default: withCtx(() => [
                                              createVNode(_component_UiCheckbox, {
                                                checked: !!rowChecked.value[(it.id || it._id) + ""],
                                                "onUpdate:checked": (v) => handleRowChecked((it.id || it._id) + "", v)
                                              }, null, 8, ["checked", "onUpdate:checked"])
                                            ]),
                                            _: 2
                                          }, 1024),
                                          createVNode(_component_UiTableCell, { class: "text-center" }, {
                                            default: withCtx(() => [
                                              createVNode(_component_UiSwitch, {
                                                checked: it.status === "active",
                                                disabled: it.status === "deleted",
                                                "onUpdate:checked": (v) => it.status = v ? "active" : "blocked"
                                              }, null, 8, ["checked", "disabled", "onUpdate:checked"])
                                            ]),
                                            _: 2
                                          }, 1024),
                                          createVNode(_component_UiTableCell, { class: "text-left" }, {
                                            default: withCtx(() => {
                                              var _a2, _b, _c, _d;
                                              return [
                                                createVNode("div", { class: "flex flex-col gap-1 items-start" }, [
                                                  entityTab.value === "ad_plans" ? (openBlock(), createBlock("button", {
                                                    key: 0,
                                                    type: "button",
                                                    class: "text-left text-blue-600 hover:underline cursor-pointer font-bold",
                                                    onClick: ($event) => openAdGroupsForCampaign(it)
                                                  }, toDisplayString((_a2 = it.name) != null ? _a2 : "-"), 9, ["onClick"])) : entityTab.value === "groups" && !selectedGroup.value ? (openBlock(), createBlock("button", {
                                                    key: 1,
                                                    type: "button",
                                                    class: "text-left text-blue-600 hover:underline cursor-pointer font-bold",
                                                    onClick: ($event) => openBannersForGroup(it)
                                                  }, toDisplayString((_b = it.name) != null ? _b : "-"), 9, ["onClick"])) : (openBlock(), createBlock("span", {
                                                    key: 2,
                                                    class: "text-left"
                                                  }, toDisplayString((_c = it.name) != null ? _c : "-"), 1)),
                                                  createVNode("span", { class: "text-xs text-neutral-400" }, toDisplayString((_d = it.id) != null ? _d : it._id), 1),
                                                  it.ref ? (openBlock(), createBlock("span", {
                                                    key: 3,
                                                    class: "text-xs text-neutral-400"
                                                  }, toDisplayString(it.ref), 1)) : createCommentVNode("", true),
                                                  createVNode("span", {
                                                    class: ["inline-flex items-center gap-2 rounded-full px-1 py-0 text-xs text-white", {
                                                      "bg-emerald-500": it.status === "active",
                                                      "bg-amber-500": it.status === "blocked",
                                                      "bg-rose-500": it.status === "deleted"
                                                    }]
                                                  }, [
                                                    it.status === "active" ? (openBlock(), createBlock(unref(CheckCircle2), {
                                                      key: 0,
                                                      class: "w-3 h-3"
                                                    })) : it.status === "paused" ? (openBlock(), createBlock(unref(TrendingUpDown), {
                                                      key: 1,
                                                      class: "w-3 h-3"
                                                    })) : (openBlock(), createBlock(unref(XCircle), {
                                                      key: 2,
                                                      class: "w-3 h-3"
                                                    })),
                                                    createTextVNode(" " + toDisplayString(it.status === "active" ? "\u0410\u043A\u0442\u0438\u0432\u043D\u0430" : it.status === "blocked" ? "\u0417\u0430\u0431\u043B\u043E\u043A\u0438\u0440\u043E\u0432\u0430\u043D\u0430" : "\u0423\u0434\u0430\u043B\u0435\u043D\u0430"), 1)
                                                  ], 2)
                                                ])
                                              ];
                                            }),
                                            _: 2
                                          }, 1024),
                                          createVNode(_component_UiTableCell, { class: "text-center" }, {
                                            default: withCtx(() => {
                                              var _a2, _b, _c;
                                              return [
                                                createTextVNode(toDisplayString(f((_c = (_b = (_a2 = it == null ? void 0 : it.total) == null ? void 0 : _a2.base) == null ? void 0 : _b.spent) != null ? _c : "0")) + " \u20BD", 1)
                                              ];
                                            }),
                                            _: 2
                                          }, 1024),
                                          createVNode(_component_UiTableCell, { class: "text-center" }, {
                                            default: withCtx(() => {
                                              var _a2, _b, _c, _d, _e;
                                              return [
                                                createTextVNode(toDisplayString(f(
                                                  entityTab.value !== "ad_plans" ? toNumber(
                                                    (_c = it == null ? void 0 : it.spent_nds) != null ? _c : toNumber((_b = (_a2 = it == null ? void 0 : it.total) == null ? void 0 : _a2.base) == null ? void 0 : _b.spent) * 1.2
                                                  ) : toNumber((_e = (_d = it == null ? void 0 : it.total) == null ? void 0 : _d.base) == null ? void 0 : _e.spent) * 1.2
                                                )) + " \u20BD ", 1)
                                              ];
                                            }),
                                            _: 2
                                          }, 1024),
                                          createVNode(_component_UiTableCell, { class: "text-center" }, {
                                            default: withCtx(() => {
                                              var _a2;
                                              return [
                                                createTextVNode(toDisplayString(f((_a2 = it == null ? void 0 : it.dealsPrice) != null ? _a2 : 0)) + " \u20BD", 1)
                                              ];
                                            }),
                                            _: 2
                                          }, 1024),
                                          createVNode(_component_UiTableCell, { class: "text-center" }, {
                                            default: withCtx(() => {
                                              var _a2;
                                              return [
                                                createTextVNode(toDisplayString(f((_a2 = it == null ? void 0 : it.drr) != null ? _a2 : 0)) + "%", 1)
                                              ];
                                            }),
                                            _: 2
                                          }, 1024),
                                          createVNode(_component_UiTableCell, { class: "text-center" }, {
                                            default: withCtx(() => {
                                              var _a2;
                                              return [
                                                createTextVNode(toDisplayString(f((_a2 = it == null ? void 0 : it.maketPrice) != null ? _a2 : 0)) + " \u20BD", 1)
                                              ];
                                            }),
                                            _: 2
                                          }, 1024),
                                          createVNode(_component_UiTableCell, { class: "text-center" }, {
                                            default: withCtx(() => {
                                              var _a2;
                                              return [
                                                createTextVNode(toDisplayString(f((_a2 = it == null ? void 0 : it.makets) != null ? _a2 : 0)), 1)
                                              ];
                                            }),
                                            _: 2
                                          }, 1024),
                                          createVNode(_component_UiTableCell, { class: "text-center" }, {
                                            default: withCtx(() => {
                                              var _a2;
                                              return [
                                                createTextVNode(toDisplayString(f((_a2 = it == null ? void 0 : it.budget_limit_day) != null ? _a2 : 0)) + " \u20BD", 1)
                                              ];
                                            }),
                                            _: 2
                                          }, 1024),
                                          createVNode(_component_UiTableCell, { class: "text-center" }, {
                                            default: withCtx(() => {
                                              var _a2, _b, _c, _d;
                                              return [
                                                createTextVNode(toDisplayString(f((_d = (_c = (_b = (_a2 = it == null ? void 0 : it.total) == null ? void 0 : _a2.base) == null ? void 0 : _b.vk) == null ? void 0 : _c.goals) != null ? _d : 0)), 1)
                                              ];
                                            }),
                                            _: 2
                                          }, 1024),
                                          createVNode(_component_UiTableCell, { class: "text-center" }, {
                                            default: withCtx(() => {
                                              var _a2, _b, _c;
                                              return [
                                                createTextVNode(toDisplayString(f((_c = (_b = (_a2 = it == null ? void 0 : it.total) == null ? void 0 : _a2.base) == null ? void 0 : _b.shows) != null ? _c : 0)), 1)
                                              ];
                                            }),
                                            _: 2
                                          }, 1024),
                                          createVNode(_component_UiTableCell, { class: "text-center" }, {
                                            default: withCtx(() => {
                                              var _a2, _b, _c;
                                              return [
                                                createTextVNode(toDisplayString(f((_c = (_b = (_a2 = it == null ? void 0 : it.total) == null ? void 0 : _a2.base) == null ? void 0 : _b.clicks) != null ? _c : 0)), 1)
                                              ];
                                            }),
                                            _: 2
                                          }, 1024),
                                          createVNode(_component_UiTableCell, { class: "text-center" }, {
                                            default: withCtx(() => {
                                              var _a2, _b, _c, _d;
                                              return [
                                                createTextVNode(toDisplayString(f((_d = (_c = (_b = (_a2 = it == null ? void 0 : it.total) == null ? void 0 : _a2.base) == null ? void 0 : _b.vk) == null ? void 0 : _c.cr) != null ? _d : 0)) + " %", 1)
                                              ];
                                            }),
                                            _: 2
                                          }, 1024),
                                          createVNode(_component_UiTableCell, { class: "text-center" }, {
                                            default: withCtx(() => {
                                              var _a2, _b, _c;
                                              return [
                                                createTextVNode(toDisplayString(f((_c = (_b = (_a2 = it == null ? void 0 : it.total) == null ? void 0 : _a2.base) == null ? void 0 : _b.ctr) != null ? _c : 0)) + " %", 1)
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
                                        createVNode(_component_UiTableCell, { class: "text-center" }, {
                                          default: withCtx(() => [
                                            createVNode(_component_UiCheckbox, {
                                              checked: !!rowChecked.value[(it.id || it._id) + ""],
                                              "onUpdate:checked": (v) => handleRowChecked((it.id || it._id) + "", v)
                                            }, null, 8, ["checked", "onUpdate:checked"])
                                          ]),
                                          _: 2
                                        }, 1024),
                                        createVNode(_component_UiTableCell, { class: "text-center" }, {
                                          default: withCtx(() => [
                                            createVNode(_component_UiSwitch, {
                                              checked: it.status === "active",
                                              disabled: it.status === "deleted",
                                              "onUpdate:checked": (v) => it.status = v ? "active" : "blocked"
                                            }, null, 8, ["checked", "disabled", "onUpdate:checked"])
                                          ]),
                                          _: 2
                                        }, 1024),
                                        createVNode(_component_UiTableCell, { class: "text-left" }, {
                                          default: withCtx(() => {
                                            var _a2, _b, _c, _d;
                                            return [
                                              createVNode("div", { class: "flex flex-col gap-1 items-start" }, [
                                                entityTab.value === "ad_plans" ? (openBlock(), createBlock("button", {
                                                  key: 0,
                                                  type: "button",
                                                  class: "text-left text-blue-600 hover:underline cursor-pointer font-bold",
                                                  onClick: ($event) => openAdGroupsForCampaign(it)
                                                }, toDisplayString((_a2 = it.name) != null ? _a2 : "-"), 9, ["onClick"])) : entityTab.value === "groups" && !selectedGroup.value ? (openBlock(), createBlock("button", {
                                                  key: 1,
                                                  type: "button",
                                                  class: "text-left text-blue-600 hover:underline cursor-pointer font-bold",
                                                  onClick: ($event) => openBannersForGroup(it)
                                                }, toDisplayString((_b = it.name) != null ? _b : "-"), 9, ["onClick"])) : (openBlock(), createBlock("span", {
                                                  key: 2,
                                                  class: "text-left"
                                                }, toDisplayString((_c = it.name) != null ? _c : "-"), 1)),
                                                createVNode("span", { class: "text-xs text-neutral-400" }, toDisplayString((_d = it.id) != null ? _d : it._id), 1),
                                                it.ref ? (openBlock(), createBlock("span", {
                                                  key: 3,
                                                  class: "text-xs text-neutral-400"
                                                }, toDisplayString(it.ref), 1)) : createCommentVNode("", true),
                                                createVNode("span", {
                                                  class: ["inline-flex items-center gap-2 rounded-full px-1 py-0 text-xs text-white", {
                                                    "bg-emerald-500": it.status === "active",
                                                    "bg-amber-500": it.status === "blocked",
                                                    "bg-rose-500": it.status === "deleted"
                                                  }]
                                                }, [
                                                  it.status === "active" ? (openBlock(), createBlock(unref(CheckCircle2), {
                                                    key: 0,
                                                    class: "w-3 h-3"
                                                  })) : it.status === "paused" ? (openBlock(), createBlock(unref(TrendingUpDown), {
                                                    key: 1,
                                                    class: "w-3 h-3"
                                                  })) : (openBlock(), createBlock(unref(XCircle), {
                                                    key: 2,
                                                    class: "w-3 h-3"
                                                  })),
                                                  createTextVNode(" " + toDisplayString(it.status === "active" ? "\u0410\u043A\u0442\u0438\u0432\u043D\u0430" : it.status === "blocked" ? "\u0417\u0430\u0431\u043B\u043E\u043A\u0438\u0440\u043E\u0432\u0430\u043D\u0430" : "\u0423\u0434\u0430\u043B\u0435\u043D\u0430"), 1)
                                                ], 2)
                                              ])
                                            ];
                                          }),
                                          _: 2
                                        }, 1024),
                                        createVNode(_component_UiTableCell, { class: "text-center" }, {
                                          default: withCtx(() => {
                                            var _a2, _b, _c;
                                            return [
                                              createTextVNode(toDisplayString(f((_c = (_b = (_a2 = it == null ? void 0 : it.total) == null ? void 0 : _a2.base) == null ? void 0 : _b.spent) != null ? _c : "0")) + " \u20BD", 1)
                                            ];
                                          }),
                                          _: 2
                                        }, 1024),
                                        createVNode(_component_UiTableCell, { class: "text-center" }, {
                                          default: withCtx(() => {
                                            var _a2, _b, _c, _d, _e;
                                            return [
                                              createTextVNode(toDisplayString(f(
                                                entityTab.value !== "ad_plans" ? toNumber(
                                                  (_c = it == null ? void 0 : it.spent_nds) != null ? _c : toNumber((_b = (_a2 = it == null ? void 0 : it.total) == null ? void 0 : _a2.base) == null ? void 0 : _b.spent) * 1.2
                                                ) : toNumber((_e = (_d = it == null ? void 0 : it.total) == null ? void 0 : _d.base) == null ? void 0 : _e.spent) * 1.2
                                              )) + " \u20BD ", 1)
                                            ];
                                          }),
                                          _: 2
                                        }, 1024),
                                        createVNode(_component_UiTableCell, { class: "text-center" }, {
                                          default: withCtx(() => {
                                            var _a2;
                                            return [
                                              createTextVNode(toDisplayString(f((_a2 = it == null ? void 0 : it.dealsPrice) != null ? _a2 : 0)) + " \u20BD", 1)
                                            ];
                                          }),
                                          _: 2
                                        }, 1024),
                                        createVNode(_component_UiTableCell, { class: "text-center" }, {
                                          default: withCtx(() => {
                                            var _a2;
                                            return [
                                              createTextVNode(toDisplayString(f((_a2 = it == null ? void 0 : it.drr) != null ? _a2 : 0)) + "%", 1)
                                            ];
                                          }),
                                          _: 2
                                        }, 1024),
                                        createVNode(_component_UiTableCell, { class: "text-center" }, {
                                          default: withCtx(() => {
                                            var _a2;
                                            return [
                                              createTextVNode(toDisplayString(f((_a2 = it == null ? void 0 : it.maketPrice) != null ? _a2 : 0)) + " \u20BD", 1)
                                            ];
                                          }),
                                          _: 2
                                        }, 1024),
                                        createVNode(_component_UiTableCell, { class: "text-center" }, {
                                          default: withCtx(() => {
                                            var _a2;
                                            return [
                                              createTextVNode(toDisplayString(f((_a2 = it == null ? void 0 : it.makets) != null ? _a2 : 0)), 1)
                                            ];
                                          }),
                                          _: 2
                                        }, 1024),
                                        createVNode(_component_UiTableCell, { class: "text-center" }, {
                                          default: withCtx(() => {
                                            var _a2;
                                            return [
                                              createTextVNode(toDisplayString(f((_a2 = it == null ? void 0 : it.budget_limit_day) != null ? _a2 : 0)) + " \u20BD", 1)
                                            ];
                                          }),
                                          _: 2
                                        }, 1024),
                                        createVNode(_component_UiTableCell, { class: "text-center" }, {
                                          default: withCtx(() => {
                                            var _a2, _b, _c, _d;
                                            return [
                                              createTextVNode(toDisplayString(f((_d = (_c = (_b = (_a2 = it == null ? void 0 : it.total) == null ? void 0 : _a2.base) == null ? void 0 : _b.vk) == null ? void 0 : _c.goals) != null ? _d : 0)), 1)
                                            ];
                                          }),
                                          _: 2
                                        }, 1024),
                                        createVNode(_component_UiTableCell, { class: "text-center" }, {
                                          default: withCtx(() => {
                                            var _a2, _b, _c;
                                            return [
                                              createTextVNode(toDisplayString(f((_c = (_b = (_a2 = it == null ? void 0 : it.total) == null ? void 0 : _a2.base) == null ? void 0 : _b.shows) != null ? _c : 0)), 1)
                                            ];
                                          }),
                                          _: 2
                                        }, 1024),
                                        createVNode(_component_UiTableCell, { class: "text-center" }, {
                                          default: withCtx(() => {
                                            var _a2, _b, _c;
                                            return [
                                              createTextVNode(toDisplayString(f((_c = (_b = (_a2 = it == null ? void 0 : it.total) == null ? void 0 : _a2.base) == null ? void 0 : _b.clicks) != null ? _c : 0)), 1)
                                            ];
                                          }),
                                          _: 2
                                        }, 1024),
                                        createVNode(_component_UiTableCell, { class: "text-center" }, {
                                          default: withCtx(() => {
                                            var _a2, _b, _c, _d;
                                            return [
                                              createTextVNode(toDisplayString(f((_d = (_c = (_b = (_a2 = it == null ? void 0 : it.total) == null ? void 0 : _a2.base) == null ? void 0 : _b.vk) == null ? void 0 : _c.cr) != null ? _d : 0)) + " %", 1)
                                            ];
                                          }),
                                          _: 2
                                        }, 1024),
                                        createVNode(_component_UiTableCell, { class: "text-center" }, {
                                          default: withCtx(() => {
                                            var _a2, _b, _c;
                                            return [
                                              createTextVNode(toDisplayString(f((_c = (_b = (_a2 = it == null ? void 0 : it.total) == null ? void 0 : _a2.base) == null ? void 0 : _b.ctr) != null ? _c : 0)) + " %", 1)
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
                          _push4(ssrRenderComponent(_component_UiTableFooter, null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_UiTableRow, { class: "sticky bottom-0 z-10 bg-neutral-200 hover:bg-neutral-200" }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(_component_UiTableCell, { class: "text-center" }, null, _parent6, _scopeId5));
                                      _push6(ssrRenderComponent(_component_UiTableCell, { class: "text-center" }, null, _parent6, _scopeId5));
                                      _push6(ssrRenderComponent(_component_UiTableCell, { class: "text-left font-medium" }, {
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
                                      _push6(ssrRenderComponent(_component_UiTableCell, { class: "text-center" }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`${ssrInterpolate(f(footerTotals.value.spent))} \u20BD `);
                                          } else {
                                            return [
                                              createTextVNode(toDisplayString(f(footerTotals.value.spent)) + " \u20BD ", 1)
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                      _push6(ssrRenderComponent(_component_UiTableCell, { class: "text-center" }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`${ssrInterpolate(f(footerTotals.value.spent_nds))} \u20BD `);
                                          } else {
                                            return [
                                              createTextVNode(toDisplayString(f(footerTotals.value.spent_nds)) + " \u20BD ", 1)
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                      _push6(ssrRenderComponent(_component_UiTableCell, { class: "text-center" }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`${ssrInterpolate(f(footerTotals.value.dealsPrice))} \u20BD `);
                                          } else {
                                            return [
                                              createTextVNode(toDisplayString(f(footerTotals.value.dealsPrice)) + " \u20BD ", 1)
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                      _push6(ssrRenderComponent(_component_UiTableCell, { class: "text-center" }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`${ssrInterpolate(f(footerTotals.value.drr))}% `);
                                          } else {
                                            return [
                                              createTextVNode(toDisplayString(f(footerTotals.value.drr)) + "% ", 1)
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                      _push6(ssrRenderComponent(_component_UiTableCell, { class: "text-center" }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`${ssrInterpolate(f(footerTotals.value.maketPrice))} \u20BD `);
                                          } else {
                                            return [
                                              createTextVNode(toDisplayString(f(footerTotals.value.maketPrice)) + " \u20BD ", 1)
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                      _push6(ssrRenderComponent(_component_UiTableCell, { class: "text-center" }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`${ssrInterpolate(f(footerTotals.value.makets))}`);
                                          } else {
                                            return [
                                              createTextVNode(toDisplayString(f(footerTotals.value.makets)), 1)
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                      _push6(ssrRenderComponent(_component_UiTableCell, { class: "text-center" }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`${ssrInterpolate(f(footerTotals.value.budget_limit_day))} \u20BD `);
                                          } else {
                                            return [
                                              createTextVNode(toDisplayString(f(footerTotals.value.budget_limit_day)) + " \u20BD ", 1)
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                      _push6(ssrRenderComponent(_component_UiTableCell, { class: "text-center" }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`${ssrInterpolate(f(footerTotals.value.vk_goals))}`);
                                          } else {
                                            return [
                                              createTextVNode(toDisplayString(f(footerTotals.value.vk_goals)), 1)
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                      _push6(ssrRenderComponent(_component_UiTableCell, { class: "text-center" }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`${ssrInterpolate(f(footerTotals.value.shows))}`);
                                          } else {
                                            return [
                                              createTextVNode(toDisplayString(f(footerTotals.value.shows)), 1)
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                      _push6(ssrRenderComponent(_component_UiTableCell, { class: "text-center" }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`${ssrInterpolate(f(footerTotals.value.clicks))}`);
                                          } else {
                                            return [
                                              createTextVNode(toDisplayString(f(footerTotals.value.clicks)), 1)
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                      _push6(ssrRenderComponent(_component_UiTableCell, { class: "text-center" }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`${ssrInterpolate(f(footerTotals.value.cr))} % `);
                                          } else {
                                            return [
                                              createTextVNode(toDisplayString(f(footerTotals.value.cr)) + " % ", 1)
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                      _push6(ssrRenderComponent(_component_UiTableCell, { class: "text-center" }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`${ssrInterpolate(f(footerTotals.value.ctr))} % `);
                                          } else {
                                            return [
                                              createTextVNode(toDisplayString(f(footerTotals.value.ctr)) + " % ", 1)
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(_component_UiTableCell, { class: "text-center" }),
                                        createVNode(_component_UiTableCell, { class: "text-center" }),
                                        createVNode(_component_UiTableCell, { class: "text-left font-medium" }, {
                                          default: withCtx(() => [
                                            createTextVNode("\u0418\u0442\u043E\u0433\u043E")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_UiTableCell, { class: "text-center" }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(f(footerTotals.value.spent)) + " \u20BD ", 1)
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_UiTableCell, { class: "text-center" }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(f(footerTotals.value.spent_nds)) + " \u20BD ", 1)
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_UiTableCell, { class: "text-center" }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(f(footerTotals.value.dealsPrice)) + " \u20BD ", 1)
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_UiTableCell, { class: "text-center" }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(f(footerTotals.value.drr)) + "% ", 1)
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_UiTableCell, { class: "text-center" }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(f(footerTotals.value.maketPrice)) + " \u20BD ", 1)
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_UiTableCell, { class: "text-center" }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(f(footerTotals.value.makets)), 1)
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_UiTableCell, { class: "text-center" }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(f(footerTotals.value.budget_limit_day)) + " \u20BD ", 1)
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_UiTableCell, { class: "text-center" }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(f(footerTotals.value.vk_goals)), 1)
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_UiTableCell, { class: "text-center" }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(f(footerTotals.value.shows)), 1)
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_UiTableCell, { class: "text-center" }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(f(footerTotals.value.clicks)), 1)
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_UiTableCell, { class: "text-center" }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(f(footerTotals.value.cr)) + " % ", 1)
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_UiTableCell, { class: "text-center" }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(f(footerTotals.value.ctr)) + " % ", 1)
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
                                  createVNode(_component_UiTableRow, { class: "sticky bottom-0 z-10 bg-neutral-200 hover:bg-neutral-200" }, {
                                    default: withCtx(() => [
                                      createVNode(_component_UiTableCell, { class: "text-center" }),
                                      createVNode(_component_UiTableCell, { class: "text-center" }),
                                      createVNode(_component_UiTableCell, { class: "text-left font-medium" }, {
                                        default: withCtx(() => [
                                          createTextVNode("\u0418\u0442\u043E\u0433\u043E")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_UiTableCell, { class: "text-center" }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(f(footerTotals.value.spent)) + " \u20BD ", 1)
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_UiTableCell, { class: "text-center" }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(f(footerTotals.value.spent_nds)) + " \u20BD ", 1)
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_UiTableCell, { class: "text-center" }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(f(footerTotals.value.dealsPrice)) + " \u20BD ", 1)
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_UiTableCell, { class: "text-center" }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(f(footerTotals.value.drr)) + "% ", 1)
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_UiTableCell, { class: "text-center" }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(f(footerTotals.value.maketPrice)) + " \u20BD ", 1)
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_UiTableCell, { class: "text-center" }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(f(footerTotals.value.makets)), 1)
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_UiTableCell, { class: "text-center" }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(f(footerTotals.value.budget_limit_day)) + " \u20BD ", 1)
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_UiTableCell, { class: "text-center" }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(f(footerTotals.value.vk_goals)), 1)
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_UiTableCell, { class: "text-center" }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(f(footerTotals.value.shows)), 1)
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_UiTableCell, { class: "text-center" }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(f(footerTotals.value.clicks)), 1)
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_UiTableCell, { class: "text-center" }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(f(footerTotals.value.cr)) + " % ", 1)
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_UiTableCell, { class: "text-center" }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(f(footerTotals.value.ctr)) + " % ", 1)
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
                            createVNode(_component_UiTableHeader, { class: "" }, {
                              default: withCtx(() => [
                                createVNode(_component_UiTableRow, { class: "sticky top-0 z-10 bg-neutral-200 hover:bg-neutral-200" }, {
                                  default: withCtx(() => [
                                    createVNode(_component_UiTableHead, { class: "w-10 text-center" }, {
                                      default: withCtx(() => [
                                        createVNode(_component_UiCheckbox, {
                                          checked: allRowsChecked.value,
                                          indeterminate: someRowsChecked.value && !allRowsChecked.value,
                                          "onUpdate:checked": onToggleCheckAll
                                        }, null, 8, ["checked", "indeterminate"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_UiTableHead, { class: "w-16 text-center" }, {
                                      default: withCtx(() => [
                                        createTextVNode("\u0412\u043A\u043B.")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_UiTableHead, {
                                      class: "text-left cursor-pointer select-none",
                                      onClick: ($event) => setSort("name")
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" \u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 "),
                                        sortKey.value === "name" ? (openBlock(), createBlock("span", { key: 0 }, toDisplayString(sortDir.value === "asc" ? "\u25B2" : "\u25BC"), 1)) : createCommentVNode("", true)
                                      ]),
                                      _: 1
                                    }, 8, ["onClick"]),
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
                                      onClick: ($event) => setSort("dealsPrice")
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" \u041E\u0444\u043E\u0440\u043C\u043B\u0435\u043D\u043E "),
                                        sortKey.value === "dealsPrice" ? (openBlock(), createBlock("span", { key: 0 }, toDisplayString(sortDir.value === "asc" ? "\u25B2" : "\u25BC"), 1)) : createCommentVNode("", true)
                                      ]),
                                      _: 1
                                    }, 8, ["onClick"]),
                                    createVNode(_component_UiTableHead, {
                                      class: "text-center cursor-pointer select-none",
                                      onClick: ($event) => setSort("drr")
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" \u0414\u0420\u0420 "),
                                        sortKey.value === "drr" ? (openBlock(), createBlock("span", { key: 0 }, toDisplayString(sortDir.value === "asc" ? "\u25B2" : "\u25BC"), 1)) : createCommentVNode("", true)
                                      ]),
                                      _: 1
                                    }, 8, ["onClick"]),
                                    createVNode(_component_UiTableHead, {
                                      class: "text-center cursor-pointer select-none",
                                      onClick: ($event) => setSort("maketPrice")
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" \u0426\u0435\u043D\u0430 \u043C\u0430\u043A\u0435\u0442\u0430 "),
                                        sortKey.value === "maketPrice" ? (openBlock(), createBlock("span", { key: 0 }, toDisplayString(sortDir.value === "asc" ? "\u25B2" : "\u25BC"), 1)) : createCommentVNode("", true)
                                      ]),
                                      _: 1
                                    }, 8, ["onClick"]),
                                    createVNode(_component_UiTableHead, {
                                      class: "text-center cursor-pointer select-none",
                                      onClick: ($event) => setSort("makets")
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" \u041C\u0430\u043A\u0435\u0442\u044B "),
                                        sortKey.value === "makets" ? (openBlock(), createBlock("span", { key: 0 }, toDisplayString(sortDir.value === "asc" ? "\u25B2" : "\u25BC"), 1)) : createCommentVNode("", true)
                                      ]),
                                      _: 1
                                    }, 8, ["onClick"]),
                                    createVNode(_component_UiTableHead, {
                                      class: "text-center cursor-pointer select-none",
                                      onClick: ($event) => setSort("budget_limit_day")
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" \u041B\u0438\u043C\u0438\u0442/\u0434\u0435\u043D\u044C "),
                                        sortKey.value === "budget_limit_day" ? (openBlock(), createBlock("span", { key: 0 }, toDisplayString(sortDir.value === "asc" ? "\u25B2" : "\u25BC"), 1)) : createCommentVNode("", true)
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
                                        createTextVNode(" CR "),
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
                                      createVNode(_component_UiTableCell, { class: "text-center" }, {
                                        default: withCtx(() => [
                                          createVNode(_component_UiCheckbox, {
                                            checked: !!rowChecked.value[(it.id || it._id) + ""],
                                            "onUpdate:checked": (v) => handleRowChecked((it.id || it._id) + "", v)
                                          }, null, 8, ["checked", "onUpdate:checked"])
                                        ]),
                                        _: 2
                                      }, 1024),
                                      createVNode(_component_UiTableCell, { class: "text-center" }, {
                                        default: withCtx(() => [
                                          createVNode(_component_UiSwitch, {
                                            checked: it.status === "active",
                                            disabled: it.status === "deleted",
                                            "onUpdate:checked": (v) => it.status = v ? "active" : "blocked"
                                          }, null, 8, ["checked", "disabled", "onUpdate:checked"])
                                        ]),
                                        _: 2
                                      }, 1024),
                                      createVNode(_component_UiTableCell, { class: "text-left" }, {
                                        default: withCtx(() => {
                                          var _a2, _b, _c, _d;
                                          return [
                                            createVNode("div", { class: "flex flex-col gap-1 items-start" }, [
                                              entityTab.value === "ad_plans" ? (openBlock(), createBlock("button", {
                                                key: 0,
                                                type: "button",
                                                class: "text-left text-blue-600 hover:underline cursor-pointer font-bold",
                                                onClick: ($event) => openAdGroupsForCampaign(it)
                                              }, toDisplayString((_a2 = it.name) != null ? _a2 : "-"), 9, ["onClick"])) : entityTab.value === "groups" && !selectedGroup.value ? (openBlock(), createBlock("button", {
                                                key: 1,
                                                type: "button",
                                                class: "text-left text-blue-600 hover:underline cursor-pointer font-bold",
                                                onClick: ($event) => openBannersForGroup(it)
                                              }, toDisplayString((_b = it.name) != null ? _b : "-"), 9, ["onClick"])) : (openBlock(), createBlock("span", {
                                                key: 2,
                                                class: "text-left"
                                              }, toDisplayString((_c = it.name) != null ? _c : "-"), 1)),
                                              createVNode("span", { class: "text-xs text-neutral-400" }, toDisplayString((_d = it.id) != null ? _d : it._id), 1),
                                              it.ref ? (openBlock(), createBlock("span", {
                                                key: 3,
                                                class: "text-xs text-neutral-400"
                                              }, toDisplayString(it.ref), 1)) : createCommentVNode("", true),
                                              createVNode("span", {
                                                class: ["inline-flex items-center gap-2 rounded-full px-1 py-0 text-xs text-white", {
                                                  "bg-emerald-500": it.status === "active",
                                                  "bg-amber-500": it.status === "blocked",
                                                  "bg-rose-500": it.status === "deleted"
                                                }]
                                              }, [
                                                it.status === "active" ? (openBlock(), createBlock(unref(CheckCircle2), {
                                                  key: 0,
                                                  class: "w-3 h-3"
                                                })) : it.status === "paused" ? (openBlock(), createBlock(unref(TrendingUpDown), {
                                                  key: 1,
                                                  class: "w-3 h-3"
                                                })) : (openBlock(), createBlock(unref(XCircle), {
                                                  key: 2,
                                                  class: "w-3 h-3"
                                                })),
                                                createTextVNode(" " + toDisplayString(it.status === "active" ? "\u0410\u043A\u0442\u0438\u0432\u043D\u0430" : it.status === "blocked" ? "\u0417\u0430\u0431\u043B\u043E\u043A\u0438\u0440\u043E\u0432\u0430\u043D\u0430" : "\u0423\u0434\u0430\u043B\u0435\u043D\u0430"), 1)
                                              ], 2)
                                            ])
                                          ];
                                        }),
                                        _: 2
                                      }, 1024),
                                      createVNode(_component_UiTableCell, { class: "text-center" }, {
                                        default: withCtx(() => {
                                          var _a2, _b, _c;
                                          return [
                                            createTextVNode(toDisplayString(f((_c = (_b = (_a2 = it == null ? void 0 : it.total) == null ? void 0 : _a2.base) == null ? void 0 : _b.spent) != null ? _c : "0")) + " \u20BD", 1)
                                          ];
                                        }),
                                        _: 2
                                      }, 1024),
                                      createVNode(_component_UiTableCell, { class: "text-center" }, {
                                        default: withCtx(() => {
                                          var _a2, _b, _c, _d, _e;
                                          return [
                                            createTextVNode(toDisplayString(f(
                                              entityTab.value !== "ad_plans" ? toNumber(
                                                (_c = it == null ? void 0 : it.spent_nds) != null ? _c : toNumber((_b = (_a2 = it == null ? void 0 : it.total) == null ? void 0 : _a2.base) == null ? void 0 : _b.spent) * 1.2
                                              ) : toNumber((_e = (_d = it == null ? void 0 : it.total) == null ? void 0 : _d.base) == null ? void 0 : _e.spent) * 1.2
                                            )) + " \u20BD ", 1)
                                          ];
                                        }),
                                        _: 2
                                      }, 1024),
                                      createVNode(_component_UiTableCell, { class: "text-center" }, {
                                        default: withCtx(() => {
                                          var _a2;
                                          return [
                                            createTextVNode(toDisplayString(f((_a2 = it == null ? void 0 : it.dealsPrice) != null ? _a2 : 0)) + " \u20BD", 1)
                                          ];
                                        }),
                                        _: 2
                                      }, 1024),
                                      createVNode(_component_UiTableCell, { class: "text-center" }, {
                                        default: withCtx(() => {
                                          var _a2;
                                          return [
                                            createTextVNode(toDisplayString(f((_a2 = it == null ? void 0 : it.drr) != null ? _a2 : 0)) + "%", 1)
                                          ];
                                        }),
                                        _: 2
                                      }, 1024),
                                      createVNode(_component_UiTableCell, { class: "text-center" }, {
                                        default: withCtx(() => {
                                          var _a2;
                                          return [
                                            createTextVNode(toDisplayString(f((_a2 = it == null ? void 0 : it.maketPrice) != null ? _a2 : 0)) + " \u20BD", 1)
                                          ];
                                        }),
                                        _: 2
                                      }, 1024),
                                      createVNode(_component_UiTableCell, { class: "text-center" }, {
                                        default: withCtx(() => {
                                          var _a2;
                                          return [
                                            createTextVNode(toDisplayString(f((_a2 = it == null ? void 0 : it.makets) != null ? _a2 : 0)), 1)
                                          ];
                                        }),
                                        _: 2
                                      }, 1024),
                                      createVNode(_component_UiTableCell, { class: "text-center" }, {
                                        default: withCtx(() => {
                                          var _a2;
                                          return [
                                            createTextVNode(toDisplayString(f((_a2 = it == null ? void 0 : it.budget_limit_day) != null ? _a2 : 0)) + " \u20BD", 1)
                                          ];
                                        }),
                                        _: 2
                                      }, 1024),
                                      createVNode(_component_UiTableCell, { class: "text-center" }, {
                                        default: withCtx(() => {
                                          var _a2, _b, _c, _d;
                                          return [
                                            createTextVNode(toDisplayString(f((_d = (_c = (_b = (_a2 = it == null ? void 0 : it.total) == null ? void 0 : _a2.base) == null ? void 0 : _b.vk) == null ? void 0 : _c.goals) != null ? _d : 0)), 1)
                                          ];
                                        }),
                                        _: 2
                                      }, 1024),
                                      createVNode(_component_UiTableCell, { class: "text-center" }, {
                                        default: withCtx(() => {
                                          var _a2, _b, _c;
                                          return [
                                            createTextVNode(toDisplayString(f((_c = (_b = (_a2 = it == null ? void 0 : it.total) == null ? void 0 : _a2.base) == null ? void 0 : _b.shows) != null ? _c : 0)), 1)
                                          ];
                                        }),
                                        _: 2
                                      }, 1024),
                                      createVNode(_component_UiTableCell, { class: "text-center" }, {
                                        default: withCtx(() => {
                                          var _a2, _b, _c;
                                          return [
                                            createTextVNode(toDisplayString(f((_c = (_b = (_a2 = it == null ? void 0 : it.total) == null ? void 0 : _a2.base) == null ? void 0 : _b.clicks) != null ? _c : 0)), 1)
                                          ];
                                        }),
                                        _: 2
                                      }, 1024),
                                      createVNode(_component_UiTableCell, { class: "text-center" }, {
                                        default: withCtx(() => {
                                          var _a2, _b, _c, _d;
                                          return [
                                            createTextVNode(toDisplayString(f((_d = (_c = (_b = (_a2 = it == null ? void 0 : it.total) == null ? void 0 : _a2.base) == null ? void 0 : _b.vk) == null ? void 0 : _c.cr) != null ? _d : 0)) + " %", 1)
                                          ];
                                        }),
                                        _: 2
                                      }, 1024),
                                      createVNode(_component_UiTableCell, { class: "text-center" }, {
                                        default: withCtx(() => {
                                          var _a2, _b, _c;
                                          return [
                                            createTextVNode(toDisplayString(f((_c = (_b = (_a2 = it == null ? void 0 : it.total) == null ? void 0 : _a2.base) == null ? void 0 : _b.ctr) != null ? _c : 0)) + " %", 1)
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
                            }),
                            createVNode(_component_UiTableFooter, null, {
                              default: withCtx(() => [
                                createVNode(_component_UiTableRow, { class: "sticky bottom-0 z-10 bg-neutral-200 hover:bg-neutral-200" }, {
                                  default: withCtx(() => [
                                    createVNode(_component_UiTableCell, { class: "text-center" }),
                                    createVNode(_component_UiTableCell, { class: "text-center" }),
                                    createVNode(_component_UiTableCell, { class: "text-left font-medium" }, {
                                      default: withCtx(() => [
                                        createTextVNode("\u0418\u0442\u043E\u0433\u043E")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_UiTableCell, { class: "text-center" }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(f(footerTotals.value.spent)) + " \u20BD ", 1)
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_UiTableCell, { class: "text-center" }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(f(footerTotals.value.spent_nds)) + " \u20BD ", 1)
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_UiTableCell, { class: "text-center" }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(f(footerTotals.value.dealsPrice)) + " \u20BD ", 1)
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_UiTableCell, { class: "text-center" }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(f(footerTotals.value.drr)) + "% ", 1)
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_UiTableCell, { class: "text-center" }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(f(footerTotals.value.maketPrice)) + " \u20BD ", 1)
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_UiTableCell, { class: "text-center" }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(f(footerTotals.value.makets)), 1)
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_UiTableCell, { class: "text-center" }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(f(footerTotals.value.budget_limit_day)) + " \u20BD ", 1)
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_UiTableCell, { class: "text-center" }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(f(footerTotals.value.vk_goals)), 1)
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_UiTableCell, { class: "text-center" }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(f(footerTotals.value.shows)), 1)
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_UiTableCell, { class: "text-center" }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(f(footerTotals.value.clicks)), 1)
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_UiTableCell, { class: "text-center" }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(f(footerTotals.value.cr)) + " % ", 1)
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_UiTableCell, { class: "text-center" }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(f(footerTotals.value.ctr)) + " % ", 1)
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
                    if (loadingMore.value) {
                      _push3(`<div class="flex justify-center py-3"${_scopeId2}><span class="text-sm text-neutral-500"${_scopeId2}>\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430...</span></div>`);
                    } else {
                      _push3(`<!---->`);
                    }
                    _push3(`<div class="h-8 mb-24" aria-hidden="true"${_scopeId2}></div><!--]-->`);
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
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", {
                      ref_key: "tableScrollEl",
                      ref: tableScrollEl,
                      class: "h-full min-h-0 overflow-y-auto hidden-scrollbar"
                    }, [
                      sortedItems.value.length ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                        createVNode(_component_UiTable, { class: "min-w-full" }, {
                          default: withCtx(() => [
                            createVNode(_component_UiTableHeader, { class: "" }, {
                              default: withCtx(() => [
                                createVNode(_component_UiTableRow, { class: "sticky top-0 z-10 bg-neutral-200 hover:bg-neutral-200" }, {
                                  default: withCtx(() => [
                                    createVNode(_component_UiTableHead, { class: "w-10 text-center" }, {
                                      default: withCtx(() => [
                                        createVNode(_component_UiCheckbox, {
                                          checked: allRowsChecked.value,
                                          indeterminate: someRowsChecked.value && !allRowsChecked.value,
                                          "onUpdate:checked": onToggleCheckAll
                                        }, null, 8, ["checked", "indeterminate"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_UiTableHead, { class: "w-16 text-center" }, {
                                      default: withCtx(() => [
                                        createTextVNode("\u0412\u043A\u043B.")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_UiTableHead, {
                                      class: "text-left cursor-pointer select-none",
                                      onClick: ($event) => setSort("name")
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" \u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 "),
                                        sortKey.value === "name" ? (openBlock(), createBlock("span", { key: 0 }, toDisplayString(sortDir.value === "asc" ? "\u25B2" : "\u25BC"), 1)) : createCommentVNode("", true)
                                      ]),
                                      _: 1
                                    }, 8, ["onClick"]),
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
                                      onClick: ($event) => setSort("dealsPrice")
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" \u041E\u0444\u043E\u0440\u043C\u043B\u0435\u043D\u043E "),
                                        sortKey.value === "dealsPrice" ? (openBlock(), createBlock("span", { key: 0 }, toDisplayString(sortDir.value === "asc" ? "\u25B2" : "\u25BC"), 1)) : createCommentVNode("", true)
                                      ]),
                                      _: 1
                                    }, 8, ["onClick"]),
                                    createVNode(_component_UiTableHead, {
                                      class: "text-center cursor-pointer select-none",
                                      onClick: ($event) => setSort("drr")
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" \u0414\u0420\u0420 "),
                                        sortKey.value === "drr" ? (openBlock(), createBlock("span", { key: 0 }, toDisplayString(sortDir.value === "asc" ? "\u25B2" : "\u25BC"), 1)) : createCommentVNode("", true)
                                      ]),
                                      _: 1
                                    }, 8, ["onClick"]),
                                    createVNode(_component_UiTableHead, {
                                      class: "text-center cursor-pointer select-none",
                                      onClick: ($event) => setSort("maketPrice")
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" \u0426\u0435\u043D\u0430 \u043C\u0430\u043A\u0435\u0442\u0430 "),
                                        sortKey.value === "maketPrice" ? (openBlock(), createBlock("span", { key: 0 }, toDisplayString(sortDir.value === "asc" ? "\u25B2" : "\u25BC"), 1)) : createCommentVNode("", true)
                                      ]),
                                      _: 1
                                    }, 8, ["onClick"]),
                                    createVNode(_component_UiTableHead, {
                                      class: "text-center cursor-pointer select-none",
                                      onClick: ($event) => setSort("makets")
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" \u041C\u0430\u043A\u0435\u0442\u044B "),
                                        sortKey.value === "makets" ? (openBlock(), createBlock("span", { key: 0 }, toDisplayString(sortDir.value === "asc" ? "\u25B2" : "\u25BC"), 1)) : createCommentVNode("", true)
                                      ]),
                                      _: 1
                                    }, 8, ["onClick"]),
                                    createVNode(_component_UiTableHead, {
                                      class: "text-center cursor-pointer select-none",
                                      onClick: ($event) => setSort("budget_limit_day")
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" \u041B\u0438\u043C\u0438\u0442/\u0434\u0435\u043D\u044C "),
                                        sortKey.value === "budget_limit_day" ? (openBlock(), createBlock("span", { key: 0 }, toDisplayString(sortDir.value === "asc" ? "\u25B2" : "\u25BC"), 1)) : createCommentVNode("", true)
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
                                        createTextVNode(" CR "),
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
                                      createVNode(_component_UiTableCell, { class: "text-center" }, {
                                        default: withCtx(() => [
                                          createVNode(_component_UiCheckbox, {
                                            checked: !!rowChecked.value[(it.id || it._id) + ""],
                                            "onUpdate:checked": (v) => handleRowChecked((it.id || it._id) + "", v)
                                          }, null, 8, ["checked", "onUpdate:checked"])
                                        ]),
                                        _: 2
                                      }, 1024),
                                      createVNode(_component_UiTableCell, { class: "text-center" }, {
                                        default: withCtx(() => [
                                          createVNode(_component_UiSwitch, {
                                            checked: it.status === "active",
                                            disabled: it.status === "deleted",
                                            "onUpdate:checked": (v) => it.status = v ? "active" : "blocked"
                                          }, null, 8, ["checked", "disabled", "onUpdate:checked"])
                                        ]),
                                        _: 2
                                      }, 1024),
                                      createVNode(_component_UiTableCell, { class: "text-left" }, {
                                        default: withCtx(() => {
                                          var _a2, _b, _c, _d;
                                          return [
                                            createVNode("div", { class: "flex flex-col gap-1 items-start" }, [
                                              entityTab.value === "ad_plans" ? (openBlock(), createBlock("button", {
                                                key: 0,
                                                type: "button",
                                                class: "text-left text-blue-600 hover:underline cursor-pointer font-bold",
                                                onClick: ($event) => openAdGroupsForCampaign(it)
                                              }, toDisplayString((_a2 = it.name) != null ? _a2 : "-"), 9, ["onClick"])) : entityTab.value === "groups" && !selectedGroup.value ? (openBlock(), createBlock("button", {
                                                key: 1,
                                                type: "button",
                                                class: "text-left text-blue-600 hover:underline cursor-pointer font-bold",
                                                onClick: ($event) => openBannersForGroup(it)
                                              }, toDisplayString((_b = it.name) != null ? _b : "-"), 9, ["onClick"])) : (openBlock(), createBlock("span", {
                                                key: 2,
                                                class: "text-left"
                                              }, toDisplayString((_c = it.name) != null ? _c : "-"), 1)),
                                              createVNode("span", { class: "text-xs text-neutral-400" }, toDisplayString((_d = it.id) != null ? _d : it._id), 1),
                                              it.ref ? (openBlock(), createBlock("span", {
                                                key: 3,
                                                class: "text-xs text-neutral-400"
                                              }, toDisplayString(it.ref), 1)) : createCommentVNode("", true),
                                              createVNode("span", {
                                                class: ["inline-flex items-center gap-2 rounded-full px-1 py-0 text-xs text-white", {
                                                  "bg-emerald-500": it.status === "active",
                                                  "bg-amber-500": it.status === "blocked",
                                                  "bg-rose-500": it.status === "deleted"
                                                }]
                                              }, [
                                                it.status === "active" ? (openBlock(), createBlock(unref(CheckCircle2), {
                                                  key: 0,
                                                  class: "w-3 h-3"
                                                })) : it.status === "paused" ? (openBlock(), createBlock(unref(TrendingUpDown), {
                                                  key: 1,
                                                  class: "w-3 h-3"
                                                })) : (openBlock(), createBlock(unref(XCircle), {
                                                  key: 2,
                                                  class: "w-3 h-3"
                                                })),
                                                createTextVNode(" " + toDisplayString(it.status === "active" ? "\u0410\u043A\u0442\u0438\u0432\u043D\u0430" : it.status === "blocked" ? "\u0417\u0430\u0431\u043B\u043E\u043A\u0438\u0440\u043E\u0432\u0430\u043D\u0430" : "\u0423\u0434\u0430\u043B\u0435\u043D\u0430"), 1)
                                              ], 2)
                                            ])
                                          ];
                                        }),
                                        _: 2
                                      }, 1024),
                                      createVNode(_component_UiTableCell, { class: "text-center" }, {
                                        default: withCtx(() => {
                                          var _a2, _b, _c;
                                          return [
                                            createTextVNode(toDisplayString(f((_c = (_b = (_a2 = it == null ? void 0 : it.total) == null ? void 0 : _a2.base) == null ? void 0 : _b.spent) != null ? _c : "0")) + " \u20BD", 1)
                                          ];
                                        }),
                                        _: 2
                                      }, 1024),
                                      createVNode(_component_UiTableCell, { class: "text-center" }, {
                                        default: withCtx(() => {
                                          var _a2, _b, _c, _d, _e;
                                          return [
                                            createTextVNode(toDisplayString(f(
                                              entityTab.value !== "ad_plans" ? toNumber(
                                                (_c = it == null ? void 0 : it.spent_nds) != null ? _c : toNumber((_b = (_a2 = it == null ? void 0 : it.total) == null ? void 0 : _a2.base) == null ? void 0 : _b.spent) * 1.2
                                              ) : toNumber((_e = (_d = it == null ? void 0 : it.total) == null ? void 0 : _d.base) == null ? void 0 : _e.spent) * 1.2
                                            )) + " \u20BD ", 1)
                                          ];
                                        }),
                                        _: 2
                                      }, 1024),
                                      createVNode(_component_UiTableCell, { class: "text-center" }, {
                                        default: withCtx(() => {
                                          var _a2;
                                          return [
                                            createTextVNode(toDisplayString(f((_a2 = it == null ? void 0 : it.dealsPrice) != null ? _a2 : 0)) + " \u20BD", 1)
                                          ];
                                        }),
                                        _: 2
                                      }, 1024),
                                      createVNode(_component_UiTableCell, { class: "text-center" }, {
                                        default: withCtx(() => {
                                          var _a2;
                                          return [
                                            createTextVNode(toDisplayString(f((_a2 = it == null ? void 0 : it.drr) != null ? _a2 : 0)) + "%", 1)
                                          ];
                                        }),
                                        _: 2
                                      }, 1024),
                                      createVNode(_component_UiTableCell, { class: "text-center" }, {
                                        default: withCtx(() => {
                                          var _a2;
                                          return [
                                            createTextVNode(toDisplayString(f((_a2 = it == null ? void 0 : it.maketPrice) != null ? _a2 : 0)) + " \u20BD", 1)
                                          ];
                                        }),
                                        _: 2
                                      }, 1024),
                                      createVNode(_component_UiTableCell, { class: "text-center" }, {
                                        default: withCtx(() => {
                                          var _a2;
                                          return [
                                            createTextVNode(toDisplayString(f((_a2 = it == null ? void 0 : it.makets) != null ? _a2 : 0)), 1)
                                          ];
                                        }),
                                        _: 2
                                      }, 1024),
                                      createVNode(_component_UiTableCell, { class: "text-center" }, {
                                        default: withCtx(() => {
                                          var _a2;
                                          return [
                                            createTextVNode(toDisplayString(f((_a2 = it == null ? void 0 : it.budget_limit_day) != null ? _a2 : 0)) + " \u20BD", 1)
                                          ];
                                        }),
                                        _: 2
                                      }, 1024),
                                      createVNode(_component_UiTableCell, { class: "text-center" }, {
                                        default: withCtx(() => {
                                          var _a2, _b, _c, _d;
                                          return [
                                            createTextVNode(toDisplayString(f((_d = (_c = (_b = (_a2 = it == null ? void 0 : it.total) == null ? void 0 : _a2.base) == null ? void 0 : _b.vk) == null ? void 0 : _c.goals) != null ? _d : 0)), 1)
                                          ];
                                        }),
                                        _: 2
                                      }, 1024),
                                      createVNode(_component_UiTableCell, { class: "text-center" }, {
                                        default: withCtx(() => {
                                          var _a2, _b, _c;
                                          return [
                                            createTextVNode(toDisplayString(f((_c = (_b = (_a2 = it == null ? void 0 : it.total) == null ? void 0 : _a2.base) == null ? void 0 : _b.shows) != null ? _c : 0)), 1)
                                          ];
                                        }),
                                        _: 2
                                      }, 1024),
                                      createVNode(_component_UiTableCell, { class: "text-center" }, {
                                        default: withCtx(() => {
                                          var _a2, _b, _c;
                                          return [
                                            createTextVNode(toDisplayString(f((_c = (_b = (_a2 = it == null ? void 0 : it.total) == null ? void 0 : _a2.base) == null ? void 0 : _b.clicks) != null ? _c : 0)), 1)
                                          ];
                                        }),
                                        _: 2
                                      }, 1024),
                                      createVNode(_component_UiTableCell, { class: "text-center" }, {
                                        default: withCtx(() => {
                                          var _a2, _b, _c, _d;
                                          return [
                                            createTextVNode(toDisplayString(f((_d = (_c = (_b = (_a2 = it == null ? void 0 : it.total) == null ? void 0 : _a2.base) == null ? void 0 : _b.vk) == null ? void 0 : _c.cr) != null ? _d : 0)) + " %", 1)
                                          ];
                                        }),
                                        _: 2
                                      }, 1024),
                                      createVNode(_component_UiTableCell, { class: "text-center" }, {
                                        default: withCtx(() => {
                                          var _a2, _b, _c;
                                          return [
                                            createTextVNode(toDisplayString(f((_c = (_b = (_a2 = it == null ? void 0 : it.total) == null ? void 0 : _a2.base) == null ? void 0 : _b.ctr) != null ? _c : 0)) + " %", 1)
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
                            }),
                            createVNode(_component_UiTableFooter, null, {
                              default: withCtx(() => [
                                createVNode(_component_UiTableRow, { class: "sticky bottom-0 z-10 bg-neutral-200 hover:bg-neutral-200" }, {
                                  default: withCtx(() => [
                                    createVNode(_component_UiTableCell, { class: "text-center" }),
                                    createVNode(_component_UiTableCell, { class: "text-center" }),
                                    createVNode(_component_UiTableCell, { class: "text-left font-medium" }, {
                                      default: withCtx(() => [
                                        createTextVNode("\u0418\u0442\u043E\u0433\u043E")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_UiTableCell, { class: "text-center" }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(f(footerTotals.value.spent)) + " \u20BD ", 1)
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_UiTableCell, { class: "text-center" }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(f(footerTotals.value.spent_nds)) + " \u20BD ", 1)
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_UiTableCell, { class: "text-center" }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(f(footerTotals.value.dealsPrice)) + " \u20BD ", 1)
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_UiTableCell, { class: "text-center" }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(f(footerTotals.value.drr)) + "% ", 1)
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_UiTableCell, { class: "text-center" }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(f(footerTotals.value.maketPrice)) + " \u20BD ", 1)
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_UiTableCell, { class: "text-center" }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(f(footerTotals.value.makets)), 1)
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_UiTableCell, { class: "text-center" }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(f(footerTotals.value.budget_limit_day)) + " \u20BD ", 1)
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_UiTableCell, { class: "text-center" }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(f(footerTotals.value.vk_goals)), 1)
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_UiTableCell, { class: "text-center" }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(f(footerTotals.value.shows)), 1)
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_UiTableCell, { class: "text-center" }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(f(footerTotals.value.clicks)), 1)
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_UiTableCell, { class: "text-center" }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(f(footerTotals.value.cr)) + " % ", 1)
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_UiTableCell, { class: "text-center" }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(f(footerTotals.value.ctr)) + " % ", 1)
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
                        loadingMore.value ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: "flex justify-center py-3"
                        }, [
                          createVNode("span", { class: "text-sm text-neutral-500" }, "\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430...")
                        ])) : createCommentVNode("", true),
                        createVNode("div", {
                          ref_key: "loadMoreEl",
                          ref: loadMoreEl,
                          class: "h-8 mb-24",
                          "aria-hidden": "true"
                        }, null, 512)
                      ], 64)) : (openBlock(), createBlock(_component_UiTableEmpty, { key: 1 }, {
                        default: withCtx(() => [
                          createTextVNode("\u043D\u0435\u0442 \u0437\u0430\u043F\u0438\u0441\u0435\u0439")
                        ]),
                        _: 1
                      }))
                    ], 512)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UiCardHeader, { class: "p-2" }, {
                default: withCtx(() => [
                  createVNode(_component_UiCardTitle),
                  createVNode("div", { class: "" }, [
                    createVNode(_component_UiTabs, {
                      modelValue: entityTab.value,
                      "onUpdate:modelValue": ($event) => entityTab.value = $event,
                      "default-value": "ad_plans"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_UiTabsList, null, {
                          default: withCtx(() => [
                            createVNode(_component_UiTabsTrigger, { value: "ad_plans" }, {
                              default: withCtx(() => [
                                createTextVNode("\u041A\u043E\u043C\u043F\u0430\u043D\u0438\u0438 (" + toDisplayString(adPlansCount.value) + ")", 1)
                              ]),
                              _: 1
                            }),
                            createVNode(_component_UiTabsTrigger, { value: "groups" }, {
                              default: withCtx(() => [
                                createTextVNode("\u0413\u0440\u0443\u043F\u043F\u044B (" + toDisplayString(groupTabCount.value) + ")", 1)
                              ]),
                              _: 1
                            }),
                            createVNode(_component_UiTabsTrigger, { value: "banners" }, {
                              default: withCtx(() => [
                                createTextVNode("\u0411\u0430\u043D\u043D\u0435\u0440\u044B (" + toDisplayString(bannersTabCount.value) + ")", 1)
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
                _: 1
              }),
              createVNode(_component_UiCardContent, { class: "flex-1 min-h-0 p-0" }, {
                default: withCtx(() => [
                  createVNode("div", {
                    ref_key: "tableScrollEl",
                    ref: tableScrollEl,
                    class: "h-full min-h-0 overflow-y-auto hidden-scrollbar"
                  }, [
                    sortedItems.value.length ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                      createVNode(_component_UiTable, { class: "min-w-full" }, {
                        default: withCtx(() => [
                          createVNode(_component_UiTableHeader, { class: "" }, {
                            default: withCtx(() => [
                              createVNode(_component_UiTableRow, { class: "sticky top-0 z-10 bg-neutral-200 hover:bg-neutral-200" }, {
                                default: withCtx(() => [
                                  createVNode(_component_UiTableHead, { class: "w-10 text-center" }, {
                                    default: withCtx(() => [
                                      createVNode(_component_UiCheckbox, {
                                        checked: allRowsChecked.value,
                                        indeterminate: someRowsChecked.value && !allRowsChecked.value,
                                        "onUpdate:checked": onToggleCheckAll
                                      }, null, 8, ["checked", "indeterminate"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_UiTableHead, { class: "w-16 text-center" }, {
                                    default: withCtx(() => [
                                      createTextVNode("\u0412\u043A\u043B.")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_UiTableHead, {
                                    class: "text-left cursor-pointer select-none",
                                    onClick: ($event) => setSort("name")
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" \u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 "),
                                      sortKey.value === "name" ? (openBlock(), createBlock("span", { key: 0 }, toDisplayString(sortDir.value === "asc" ? "\u25B2" : "\u25BC"), 1)) : createCommentVNode("", true)
                                    ]),
                                    _: 1
                                  }, 8, ["onClick"]),
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
                                    onClick: ($event) => setSort("dealsPrice")
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" \u041E\u0444\u043E\u0440\u043C\u043B\u0435\u043D\u043E "),
                                      sortKey.value === "dealsPrice" ? (openBlock(), createBlock("span", { key: 0 }, toDisplayString(sortDir.value === "asc" ? "\u25B2" : "\u25BC"), 1)) : createCommentVNode("", true)
                                    ]),
                                    _: 1
                                  }, 8, ["onClick"]),
                                  createVNode(_component_UiTableHead, {
                                    class: "text-center cursor-pointer select-none",
                                    onClick: ($event) => setSort("drr")
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" \u0414\u0420\u0420 "),
                                      sortKey.value === "drr" ? (openBlock(), createBlock("span", { key: 0 }, toDisplayString(sortDir.value === "asc" ? "\u25B2" : "\u25BC"), 1)) : createCommentVNode("", true)
                                    ]),
                                    _: 1
                                  }, 8, ["onClick"]),
                                  createVNode(_component_UiTableHead, {
                                    class: "text-center cursor-pointer select-none",
                                    onClick: ($event) => setSort("maketPrice")
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" \u0426\u0435\u043D\u0430 \u043C\u0430\u043A\u0435\u0442\u0430 "),
                                      sortKey.value === "maketPrice" ? (openBlock(), createBlock("span", { key: 0 }, toDisplayString(sortDir.value === "asc" ? "\u25B2" : "\u25BC"), 1)) : createCommentVNode("", true)
                                    ]),
                                    _: 1
                                  }, 8, ["onClick"]),
                                  createVNode(_component_UiTableHead, {
                                    class: "text-center cursor-pointer select-none",
                                    onClick: ($event) => setSort("makets")
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" \u041C\u0430\u043A\u0435\u0442\u044B "),
                                      sortKey.value === "makets" ? (openBlock(), createBlock("span", { key: 0 }, toDisplayString(sortDir.value === "asc" ? "\u25B2" : "\u25BC"), 1)) : createCommentVNode("", true)
                                    ]),
                                    _: 1
                                  }, 8, ["onClick"]),
                                  createVNode(_component_UiTableHead, {
                                    class: "text-center cursor-pointer select-none",
                                    onClick: ($event) => setSort("budget_limit_day")
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" \u041B\u0438\u043C\u0438\u0442/\u0434\u0435\u043D\u044C "),
                                      sortKey.value === "budget_limit_day" ? (openBlock(), createBlock("span", { key: 0 }, toDisplayString(sortDir.value === "asc" ? "\u25B2" : "\u25BC"), 1)) : createCommentVNode("", true)
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
                                      createTextVNode(" CR "),
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
                                    createVNode(_component_UiTableCell, { class: "text-center" }, {
                                      default: withCtx(() => [
                                        createVNode(_component_UiCheckbox, {
                                          checked: !!rowChecked.value[(it.id || it._id) + ""],
                                          "onUpdate:checked": (v) => handleRowChecked((it.id || it._id) + "", v)
                                        }, null, 8, ["checked", "onUpdate:checked"])
                                      ]),
                                      _: 2
                                    }, 1024),
                                    createVNode(_component_UiTableCell, { class: "text-center" }, {
                                      default: withCtx(() => [
                                        createVNode(_component_UiSwitch, {
                                          checked: it.status === "active",
                                          disabled: it.status === "deleted",
                                          "onUpdate:checked": (v) => it.status = v ? "active" : "blocked"
                                        }, null, 8, ["checked", "disabled", "onUpdate:checked"])
                                      ]),
                                      _: 2
                                    }, 1024),
                                    createVNode(_component_UiTableCell, { class: "text-left" }, {
                                      default: withCtx(() => {
                                        var _a2, _b, _c, _d;
                                        return [
                                          createVNode("div", { class: "flex flex-col gap-1 items-start" }, [
                                            entityTab.value === "ad_plans" ? (openBlock(), createBlock("button", {
                                              key: 0,
                                              type: "button",
                                              class: "text-left text-blue-600 hover:underline cursor-pointer font-bold",
                                              onClick: ($event) => openAdGroupsForCampaign(it)
                                            }, toDisplayString((_a2 = it.name) != null ? _a2 : "-"), 9, ["onClick"])) : entityTab.value === "groups" && !selectedGroup.value ? (openBlock(), createBlock("button", {
                                              key: 1,
                                              type: "button",
                                              class: "text-left text-blue-600 hover:underline cursor-pointer font-bold",
                                              onClick: ($event) => openBannersForGroup(it)
                                            }, toDisplayString((_b = it.name) != null ? _b : "-"), 9, ["onClick"])) : (openBlock(), createBlock("span", {
                                              key: 2,
                                              class: "text-left"
                                            }, toDisplayString((_c = it.name) != null ? _c : "-"), 1)),
                                            createVNode("span", { class: "text-xs text-neutral-400" }, toDisplayString((_d = it.id) != null ? _d : it._id), 1),
                                            it.ref ? (openBlock(), createBlock("span", {
                                              key: 3,
                                              class: "text-xs text-neutral-400"
                                            }, toDisplayString(it.ref), 1)) : createCommentVNode("", true),
                                            createVNode("span", {
                                              class: ["inline-flex items-center gap-2 rounded-full px-1 py-0 text-xs text-white", {
                                                "bg-emerald-500": it.status === "active",
                                                "bg-amber-500": it.status === "blocked",
                                                "bg-rose-500": it.status === "deleted"
                                              }]
                                            }, [
                                              it.status === "active" ? (openBlock(), createBlock(unref(CheckCircle2), {
                                                key: 0,
                                                class: "w-3 h-3"
                                              })) : it.status === "paused" ? (openBlock(), createBlock(unref(TrendingUpDown), {
                                                key: 1,
                                                class: "w-3 h-3"
                                              })) : (openBlock(), createBlock(unref(XCircle), {
                                                key: 2,
                                                class: "w-3 h-3"
                                              })),
                                              createTextVNode(" " + toDisplayString(it.status === "active" ? "\u0410\u043A\u0442\u0438\u0432\u043D\u0430" : it.status === "blocked" ? "\u0417\u0430\u0431\u043B\u043E\u043A\u0438\u0440\u043E\u0432\u0430\u043D\u0430" : "\u0423\u0434\u0430\u043B\u0435\u043D\u0430"), 1)
                                            ], 2)
                                          ])
                                        ];
                                      }),
                                      _: 2
                                    }, 1024),
                                    createVNode(_component_UiTableCell, { class: "text-center" }, {
                                      default: withCtx(() => {
                                        var _a2, _b, _c;
                                        return [
                                          createTextVNode(toDisplayString(f((_c = (_b = (_a2 = it == null ? void 0 : it.total) == null ? void 0 : _a2.base) == null ? void 0 : _b.spent) != null ? _c : "0")) + " \u20BD", 1)
                                        ];
                                      }),
                                      _: 2
                                    }, 1024),
                                    createVNode(_component_UiTableCell, { class: "text-center" }, {
                                      default: withCtx(() => {
                                        var _a2, _b, _c, _d, _e;
                                        return [
                                          createTextVNode(toDisplayString(f(
                                            entityTab.value !== "ad_plans" ? toNumber(
                                              (_c = it == null ? void 0 : it.spent_nds) != null ? _c : toNumber((_b = (_a2 = it == null ? void 0 : it.total) == null ? void 0 : _a2.base) == null ? void 0 : _b.spent) * 1.2
                                            ) : toNumber((_e = (_d = it == null ? void 0 : it.total) == null ? void 0 : _d.base) == null ? void 0 : _e.spent) * 1.2
                                          )) + " \u20BD ", 1)
                                        ];
                                      }),
                                      _: 2
                                    }, 1024),
                                    createVNode(_component_UiTableCell, { class: "text-center" }, {
                                      default: withCtx(() => {
                                        var _a2;
                                        return [
                                          createTextVNode(toDisplayString(f((_a2 = it == null ? void 0 : it.dealsPrice) != null ? _a2 : 0)) + " \u20BD", 1)
                                        ];
                                      }),
                                      _: 2
                                    }, 1024),
                                    createVNode(_component_UiTableCell, { class: "text-center" }, {
                                      default: withCtx(() => {
                                        var _a2;
                                        return [
                                          createTextVNode(toDisplayString(f((_a2 = it == null ? void 0 : it.drr) != null ? _a2 : 0)) + "%", 1)
                                        ];
                                      }),
                                      _: 2
                                    }, 1024),
                                    createVNode(_component_UiTableCell, { class: "text-center" }, {
                                      default: withCtx(() => {
                                        var _a2;
                                        return [
                                          createTextVNode(toDisplayString(f((_a2 = it == null ? void 0 : it.maketPrice) != null ? _a2 : 0)) + " \u20BD", 1)
                                        ];
                                      }),
                                      _: 2
                                    }, 1024),
                                    createVNode(_component_UiTableCell, { class: "text-center" }, {
                                      default: withCtx(() => {
                                        var _a2;
                                        return [
                                          createTextVNode(toDisplayString(f((_a2 = it == null ? void 0 : it.makets) != null ? _a2 : 0)), 1)
                                        ];
                                      }),
                                      _: 2
                                    }, 1024),
                                    createVNode(_component_UiTableCell, { class: "text-center" }, {
                                      default: withCtx(() => {
                                        var _a2;
                                        return [
                                          createTextVNode(toDisplayString(f((_a2 = it == null ? void 0 : it.budget_limit_day) != null ? _a2 : 0)) + " \u20BD", 1)
                                        ];
                                      }),
                                      _: 2
                                    }, 1024),
                                    createVNode(_component_UiTableCell, { class: "text-center" }, {
                                      default: withCtx(() => {
                                        var _a2, _b, _c, _d;
                                        return [
                                          createTextVNode(toDisplayString(f((_d = (_c = (_b = (_a2 = it == null ? void 0 : it.total) == null ? void 0 : _a2.base) == null ? void 0 : _b.vk) == null ? void 0 : _c.goals) != null ? _d : 0)), 1)
                                        ];
                                      }),
                                      _: 2
                                    }, 1024),
                                    createVNode(_component_UiTableCell, { class: "text-center" }, {
                                      default: withCtx(() => {
                                        var _a2, _b, _c;
                                        return [
                                          createTextVNode(toDisplayString(f((_c = (_b = (_a2 = it == null ? void 0 : it.total) == null ? void 0 : _a2.base) == null ? void 0 : _b.shows) != null ? _c : 0)), 1)
                                        ];
                                      }),
                                      _: 2
                                    }, 1024),
                                    createVNode(_component_UiTableCell, { class: "text-center" }, {
                                      default: withCtx(() => {
                                        var _a2, _b, _c;
                                        return [
                                          createTextVNode(toDisplayString(f((_c = (_b = (_a2 = it == null ? void 0 : it.total) == null ? void 0 : _a2.base) == null ? void 0 : _b.clicks) != null ? _c : 0)), 1)
                                        ];
                                      }),
                                      _: 2
                                    }, 1024),
                                    createVNode(_component_UiTableCell, { class: "text-center" }, {
                                      default: withCtx(() => {
                                        var _a2, _b, _c, _d;
                                        return [
                                          createTextVNode(toDisplayString(f((_d = (_c = (_b = (_a2 = it == null ? void 0 : it.total) == null ? void 0 : _a2.base) == null ? void 0 : _b.vk) == null ? void 0 : _c.cr) != null ? _d : 0)) + " %", 1)
                                        ];
                                      }),
                                      _: 2
                                    }, 1024),
                                    createVNode(_component_UiTableCell, { class: "text-center" }, {
                                      default: withCtx(() => {
                                        var _a2, _b, _c;
                                        return [
                                          createTextVNode(toDisplayString(f((_c = (_b = (_a2 = it == null ? void 0 : it.total) == null ? void 0 : _a2.base) == null ? void 0 : _b.ctr) != null ? _c : 0)) + " %", 1)
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
                          }),
                          createVNode(_component_UiTableFooter, null, {
                            default: withCtx(() => [
                              createVNode(_component_UiTableRow, { class: "sticky bottom-0 z-10 bg-neutral-200 hover:bg-neutral-200" }, {
                                default: withCtx(() => [
                                  createVNode(_component_UiTableCell, { class: "text-center" }),
                                  createVNode(_component_UiTableCell, { class: "text-center" }),
                                  createVNode(_component_UiTableCell, { class: "text-left font-medium" }, {
                                    default: withCtx(() => [
                                      createTextVNode("\u0418\u0442\u043E\u0433\u043E")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_UiTableCell, { class: "text-center" }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(f(footerTotals.value.spent)) + " \u20BD ", 1)
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_UiTableCell, { class: "text-center" }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(f(footerTotals.value.spent_nds)) + " \u20BD ", 1)
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_UiTableCell, { class: "text-center" }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(f(footerTotals.value.dealsPrice)) + " \u20BD ", 1)
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_UiTableCell, { class: "text-center" }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(f(footerTotals.value.drr)) + "% ", 1)
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_UiTableCell, { class: "text-center" }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(f(footerTotals.value.maketPrice)) + " \u20BD ", 1)
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_UiTableCell, { class: "text-center" }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(f(footerTotals.value.makets)), 1)
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_UiTableCell, { class: "text-center" }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(f(footerTotals.value.budget_limit_day)) + " \u20BD ", 1)
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_UiTableCell, { class: "text-center" }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(f(footerTotals.value.vk_goals)), 1)
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_UiTableCell, { class: "text-center" }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(f(footerTotals.value.shows)), 1)
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_UiTableCell, { class: "text-center" }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(f(footerTotals.value.clicks)), 1)
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_UiTableCell, { class: "text-center" }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(f(footerTotals.value.cr)) + " % ", 1)
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_UiTableCell, { class: "text-center" }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(f(footerTotals.value.ctr)) + " % ", 1)
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
                      loadingMore.value ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: "flex justify-center py-3"
                      }, [
                        createVNode("span", { class: "text-sm text-neutral-500" }, "\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430...")
                      ])) : createCommentVNode("", true),
                      createVNode("div", {
                        ref_key: "loadMoreEl",
                        ref: loadMoreEl,
                        class: "h-8 mb-24",
                        "aria-hidden": "true"
                      }, null, 512)
                    ], 64)) : (openBlock(), createBlock(_component_UiTableEmpty, { key: 1 }, {
                      default: withCtx(() => [
                        createTextVNode("\u043D\u0435\u0442 \u0437\u0430\u043F\u0438\u0441\u0435\u0439")
                      ]),
                      _: 1
                    }))
                  ], 512)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/vk/stat.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=stat-oKq2PJS7.mjs.map
