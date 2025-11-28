import { defineComponent, computed, ref, watch, mergeProps, withCtx, createTextVNode, toDisplayString, createVNode, unref, createBlock, createCommentVNode, openBlock, Fragment, renderList, isRef, useSSRContext } from 'vue';
import { s as serializeQueryParams } from './utils-TCWotVPY.mjs';
import { b as useNuxtApp } from './server.mjs';
import { u as useState } from './state-_I5XcLqc.mjs';
import { _ as _sfc_main$b } from './Card-D2-UPrX8.mjs';
import { _ as _sfc_main$1$1, a as _sfc_main$c } from './CardTitle-Dyaq6zaM.mjs';
import { _ as _sfc_main$d } from './CardDescription-CwDlX6V_.mjs';
import { _ as _sfc_main$f } from './CardContent-5uJgHkPl.mjs';
import { _ as _sfc_main$k } from './CardFooter-BUlih3MF.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-BxYosf5u.mjs';
import { _ as _sfc_main$4$1, a as _sfc_main$3$1, b as _sfc_main$l, c as _sfc_main$2$1, d as _sfc_main$1$2 } from './DialogContent-BsO2ljLB.mjs';
import { _ as _sfc_main$m } from './DialogDescription-D5yt23q9.mjs';
import { _ as _sfc_main$o } from './DialogFooter-CQpXS8R1.mjs';
import { _ as _sfc_main$j } from './index-B6vrBiru.mjs';
import { _ as __nuxt_component_0$1 } from './index-BPQNkNDf.mjs';
import { _ as _sfc_main$5$1, a as _sfc_main$n, b as _sfc_main$2$2, c as _sfc_main$1$3, d as _sfc_main$4$2, e as _sfc_main$3$2 } from './TableHeader-CsCuT7pu.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderClass, ssrRenderList } from 'vue/server-renderer';
import { _ as _sfc_main$v } from './Switch-BsBEqAPz.mjs';
import { _ as _sfc_main$p } from './Label-Bxzolydd.mjs';
import { _ as _sfc_main$q } from './Input-DoHPrX2-.mjs';
import { _ as _sfc_main$6$1, a as _sfc_main$4$3, b as _sfc_main$5$2, c as _sfc_main$3$3, d as _sfc_main$2$3 } from './SelectScrollDownButton-JzJI8BsA.mjs';
import { _ as _sfc_main$s } from './SelectGroup-BKLQULEA.mjs';
import { _ as _sfc_main$x } from './Combobox-kxEuhT4H.mjs';
import { useDebounceFn } from '@vueuse/core';
import { _ as _sfc_main$e } from './ScrollArea-Kzo2fjeX.mjs';
import { _ as _sfc_main$g } from './Separator-DmvFl46f.mjs';
import { _ as _sfc_main$h } from './CreateModal-D5eq6dl9.mjs';
import { _ as _sfc_main$i } from './EditModal-BkYjnShT.mjs';
import { _ as _sfc_main$r } from './ComboboxModels-D84YuqHH.mjs';
import { X } from 'lucide-vue-next';
import { _ as _sfc_main$t } from './Textarea-oqH4YeW4.mjs';
import { _ as _sfc_main$2$4, a as _sfc_main$u, b as _sfc_main$1$4 } from './TabsList-C3eBcFGa.mjs';
import { u as useAuthStore } from './auth-CDeEREL9.mjs';
import { _ as _sfc_main$w } from './NuxtImg-BJKLxDnu.mjs';
import { d as dateFormat } from './useMyDateFormat-Cn1Jsliy.mjs';

const defaultFilters = () => ({
  groups: [],
  managers: [],
  methods: [],
  sources: [],
  adTags: [],
  spheres: []
});
const defaultSelectedFilters = () => ({
  statuses: [],
  maketTypes: [],
  source: [],
  adTag: [],
  daysGone: [],
  dealers: [],
  haveReviews: [],
  isRegular: [],
  boxsize: [],
  methods: [],
  spheres: []
});
const columnToSelectedKey = {
  status: "statuses",
  maketType: "maketTypes",
  source: "source",
  adTag: "adTag",
  daysGone: "daysGone",
  dealers: "dealers",
  haveReviews: "haveReviews",
  isRegular: "isRegular",
  boxsize: "boxsize",
  method: "methods",
  sphere: "spheres"
};
const selectedKeyToQueryParam = {
  statuses: "status",
  maketTypes: "maketType",
  source: "source",
  adTag: "adTag",
  daysGone: "daysGone",
  dealers: "dealers",
  haveReviews: "haveReviews",
  isRegular: "isRegular",
  boxsize: "boxsize",
  methods: "methods",
  spheres: "spheres"
};
const useDealsDatas = () => {
  const filters = useState("deals-datas", defaultFilters);
  const isLoaded = useState("deals-datas-loaded", () => false);
  const isLoading = useState("deals-datas-loading", () => false);
  const error = useState("deals-datas-error", () => null);
  const selectedFilters = useState(
    "deals-datas-selected",
    defaultSelectedFilters
  );
  const mapManagers = (managers) => {
    if (!Array.isArray(managers)) {
      return [];
    }
    return managers.filter((manager) => {
      return typeof manager === "object" && manager !== null && "id" in manager && "fullName" in manager;
    });
  };
  const normalizeFilters = (incoming) => {
    var _a, _b, _c, _d, _e;
    if (!incoming) {
      filters.value = defaultFilters();
      return;
    }
    filters.value = {
      groups: (_a = incoming.groups) != null ? _a : [],
      managers: mapManagers(incoming.managers),
      methods: (_b = incoming.methods) != null ? _b : [],
      sources: (_c = incoming.sources) != null ? _c : [],
      adTags: (_d = incoming.adTags) != null ? _d : [],
      spheres: (_e = incoming.spheres) != null ? _e : []
    };
  };
  const loadDealsDatas = async (force = false) => {
    if (isLoaded.value && !force) {
      return filters.value;
    }
    try {
      isLoading.value = true;
      error.value = null;
      const { $useApi } = useNuxtApp();
      const { data } = await $useApi.get("/deals/datas");
      normalizeFilters(data);
      isLoaded.value = true;
      return filters.value;
    } catch (err) {
      error.value = err;
      isLoaded.value = false;
      throw err;
    } finally {
      isLoading.value = false;
    }
  };
  const refreshDealsDatas = async () => {
    isLoaded.value = false;
    return loadDealsDatas(true);
  };
  const resolveSelectedKey = (columnId) => {
    var _a;
    if (!columnId) {
      return null;
    }
    return (_a = columnToSelectedKey[columnId]) != null ? _a : null;
  };
  const setSelectedFilterValues = (key, values) => {
    selectedFilters.value = {
      ...selectedFilters.value,
      [key]: Array.from(new Set(values.filter(Boolean)))
    };
  };
  const setColumnFilterValues = (columnId, values) => {
    const key = resolveSelectedKey(columnId);
    if (!key) {
      return;
    }
    setSelectedFilterValues(key, values);
  };
  const getColumnFilterValues = (columnId) => {
    var _a;
    const key = resolveSelectedKey(columnId);
    if (!key) {
      return [];
    }
    return (_a = selectedFilters.value[key]) != null ? _a : [];
  };
  const clearColumnFilter = (columnId) => {
    const key = resolveSelectedKey(columnId);
    if (!key) {
      return;
    }
    setSelectedFilterValues(key, []);
  };
  const clearAllFilters = () => {
    selectedFilters.value = defaultSelectedFilters();
  };
  const filtersQuery = computed(() => {
    const params = {};
    Object.keys(selectedFilters.value).forEach(
      (key) => {
        var _a;
        const values = (_a = selectedFilters.value[key]) != null ? _a : [];
        if (!Array.isArray(values) || values.length === 0) {
          return;
        }
        const paramName = selectedKeyToQueryParam[key];
        if (!paramName) {
          return;
        }
        if (key === "dealers") {
          const ids = values.map((value) => Number(value)).filter((value) => Number.isFinite(value));
          if (ids.length) {
            params[paramName] = ids;
          }
          return;
        }
        params[paramName] = values;
      }
    );
    return params;
  });
  return {
    filters,
    isLoaded,
    isLoading,
    error,
    loadDealsDatas,
    refreshDealsDatas,
    selectedFilters,
    filtersQuery,
    resolveSelectedKey,
    getColumnFilterValues,
    setColumnFilterValues,
    clearColumnFilter,
    clearAllFilters
  };
};
const DEFAULT_DEALS_LIMIT = 50;
const MAX_DEALS_LIMIT = 100;
function resolveLimit(limit) {
  if (typeof limit !== "number" || !Number.isFinite(limit)) {
    return DEFAULT_DEALS_LIMIT;
  }
  const normalized = Math.max(1, Math.floor(limit));
  return Math.min(normalized, MAX_DEALS_LIMIT);
}
function normalizeMeta(meta, fallback) {
  var _a;
  if (!meta) {
    return fallback;
  }
  const page = typeof meta.page === "number" && meta.page > 0 ? meta.page : fallback.page;
  const limit = resolveLimit((_a = meta.limit) != null ? _a : fallback.limit);
  const totalCount = typeof meta.totalCount === "number" && meta.totalCount >= 0 ? meta.totalCount : fallback.totalCount;
  return { page, limit, totalCount };
}
function useMyDeals() {
  const { $useApi } = useNuxtApp();
  const {
    filters,
    loadDealsDatas,
    isLoaded,
    isLoading: isDealsDatasLoading,
    error: dealsDatasError
  } = useDealsDatas();
  const groups = computed(() => {
    var _a;
    return (_a = filters.value.groups) != null ? _a : [];
  });
  const isGroupsLoading = computed(() => isDealsDatasLoading.value);
  const groupsError = computed(() => {
    var _a, _b;
    return (_b = (_a = dealsDatasError.value) == null ? void 0 : _a.message) != null ? _b : null;
  });
  const selectedGroupId = useState("my-deals:selected-group", () => "all");
  const deals = useState("my-deals:list", () => []);
  const isDealsLoading = useState("my-deals:loading", () => false);
  const dealsError = useState("my-deals:error", () => null);
  const isDealsLoadingMore = useState(
    "my-deals:loading-more",
    () => false
  );
  const dealsMeta = useState("my-deals:meta", () => ({
    page: 1,
    limit: DEFAULT_DEALS_LIMIT,
    totalCount: 0
  }));
  const ensureSelectedGroup = () => {
    var _a;
    const availableGroups = (_a = groups.value) != null ? _a : [];
    if (!availableGroups.length) {
      selectedGroupId.value = "";
      deals.value = [];
      return;
    }
    if (availableGroups.length > 1) {
      const hasSelectedGroup = selectedGroupId.value && selectedGroupId.value !== "all" && availableGroups.some((group) => String(group.id) === selectedGroupId.value);
      if (!hasSelectedGroup) {
        selectedGroupId.value = "all";
      }
      return;
    }
    const [onlyGroup] = availableGroups;
    if (!onlyGroup) {
      selectedGroupId.value = "";
      return;
    }
    selectedGroupId.value = String(onlyGroup.id);
  };
  const fetchGroups = async (force = false) => {
    if (isLoaded.value && !force && groups.value.length) {
      ensureSelectedGroup();
      return groups.value;
    }
    try {
      await loadDealsDatas(force);
      ensureSelectedGroup();
      return groups.value;
    } catch (error) {
      console.error("Failed to ensure deal groups", error);
      throw error;
    }
  };
  watch(
    () => groups.value,
    () => {
      ensureSelectedGroup();
    },
    { deep: true }
  );
  const resolveGroupId = (value) => {
    if (value === null || value === void 0) {
      return void 0;
    }
    if (typeof value === "number") {
      return Number.isFinite(value) ? value : void 0;
    }
    if (value === "all" || value === "") {
      return void 0;
    }
    const parsed = Number(value);
    return Number.isFinite(parsed) ? parsed : void 0;
  };
  const getDeals = async (options = {}) => {
    var _a, _b, _c, _d, _e;
    const groupIdFromOptions = resolveGroupId(options.groupId);
    const currentGroupId = resolveGroupId(selectedGroupId.value);
    const groupId = groupIdFromOptions != null ? groupIdFromOptions : currentGroupId;
    const page = Math.max(1, Math.floor((_a = options.page) != null ? _a : 1));
    const limit = resolveLimit((_b = options.limit) != null ? _b : dealsMeta.value.limit);
    const append = Boolean((_c = options.append) != null ? _c : page > 1);
    if (append) {
      if (isDealsLoadingMore.value) {
        return null;
      }
      isDealsLoadingMore.value = true;
    } else {
      isDealsLoading.value = true;
    }
    dealsError.value = null;
    try {
      const params = {
        page,
        limit,
        ...(_d = options.params) != null ? _d : {}
      };
      if (options.sortBy) {
        params.sortBy = options.sortBy;
      }
      if (options.sortOrder) {
        params.sortOrder = options.sortOrder;
      }
      if (groupId !== void 0) {
        params.groupId = groupId;
      }
      const { data } = await $useApi.get(
        "/deals",
        {
          params,
          paramsSerializer: {
            serialize: serializeQueryParams
          }
        }
      );
      const dealsList = Array.isArray(data == null ? void 0 : data.deals) ? (_e = data.deals) != null ? _e : [] : [];
      if (append) {
        const existingIds = new Set(deals.value.map((deal) => deal.id));
        const filtered = dealsList.filter((deal) => {
          if (!deal || typeof deal.id !== "number") {
            return false;
          }
          if (existingIds.has(deal.id)) {
            return false;
          }
          existingIds.add(deal.id);
          return true;
        });
        deals.value = [...deals.value, ...filtered];
      } else {
        deals.value = dealsList;
      }
      const fallbackMeta = {
        page,
        limit,
        totalCount: typeof (data == null ? void 0 : data.total) === "number" ? data.total : append ? Math.max(dealsMeta.value.totalCount, deals.value.length) : dealsList.length
      };
      dealsMeta.value = normalizeMeta(data == null ? void 0 : data.meta, fallbackMeta);
      return data != null ? data : null;
    } catch (error) {
      console.error("Failed to load deals", error);
      if (!append) {
        deals.value = [];
        dealsMeta.value = {
          page: 1,
          limit,
          totalCount: 0
        };
      }
      dealsError.value = "\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u0441\u0434\u0435\u043B\u043A\u0438";
      throw error;
    } finally {
      isDealsLoading.value = false;
      isDealsLoadingMore.value = false;
    }
  };
  const getDeal = async (id) => {
    if (!id) {
      return null;
    }
    try {
      const { data } = await $useApi.get(`/deals/${id}`);
      return data != null ? data : null;
    } catch (error) {
      console.error("Failed to load deal", error);
      throw error;
    }
  };
  return {
    groups,
    fetchGroups,
    isGroupsLoading,
    groupsError,
    selectedGroupId,
    deals,
    getDeals,
    getDeal,
    isDealsLoading,
    isDealsLoadingMore,
    dealsError,
    dealsMeta
  };
}
const _sfc_main$a = /* @__PURE__ */ defineComponent({
  __name: "DealHistory",
  __ssrInlineRender: true,
  props: {
    dealId: {}
  },
  setup(__props) {
    const { $useApi } = useNuxtApp();
    const props = __props;
    const dealHistory = ref([]);
    const getDealHistory = async () => {
      try {
        const { data } = await $useApi.get(`deals/${props.dealId}/deal-history`);
        dealHistory.value = data;
        console.log("\u0418\u0441\u0442\u043E\u0440\u0438\u044F \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u0439:", data);
      } catch (error) {
        console.error("\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u0440\u0438 \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0435 \u0438\u0441\u0442\u043E\u0440\u0438\u0438:", error);
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiDialog = _sfc_main$4$1;
      const _component_UiDialogTrigger = _sfc_main$3$1;
      const _component_UiButton = _sfc_main$j;
      const _component_Icon = __nuxt_component_0$1;
      const _component_UiDialogContent = _sfc_main$l;
      const _component_UiDialogHeader = _sfc_main$2$1;
      const _component_UiDialogTitle = _sfc_main$1$2;
      const _component_UiDialogDescription = _sfc_main$m;
      const _component_UiTable = _sfc_main$5$1;
      const _component_UiTableHeader = _sfc_main$n;
      const _component_UiTableRow = _sfc_main$2$2;
      const _component_UiTableHead = _sfc_main$1$3;
      const _component_UiTableBody = _sfc_main$4$2;
      const _component_UiTableCell = _sfc_main$3$2;
      const _component_UiDialogFooter = _sfc_main$o;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_UiDialog, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UiDialogTrigger, { "as-child": "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UiButton, {
                    class: "h-7 w-7 gap-1",
                    size: "icon",
                    onClick: getDealHistory
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_Icon, {
                          name: "material-symbols:history-rounded",
                          color: "white",
                          size: "25px"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_Icon, {
                            name: "material-symbols:history-rounded",
                            color: "white",
                            size: "25px"
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UiButton, {
                      class: "h-7 w-7 gap-1",
                      size: "icon",
                      onClick: getDealHistory
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_Icon, {
                          name: "material-symbols:history-rounded",
                          color: "white",
                          size: "25px"
                        })
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UiDialogContent, { class: "max-w-[1200px] flex flex-col" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UiDialogHeader, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UiDialogTitle, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`\u0418\u0441\u0442\u043E\u0440\u0438\u044F \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u0439`);
                            } else {
                              return [
                                createTextVNode("\u0418\u0441\u0442\u043E\u0440\u0438\u044F \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u0439")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_UiDialogDescription, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_UiDialogTitle, null, {
                            default: withCtx(() => [
                              createTextVNode("\u0418\u0441\u0442\u043E\u0440\u0438\u044F \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u0439")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UiDialogDescription)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<div class="flex gap-4 max-h-[500px] overflow-y-scroll"${_scopeId2}>`);
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
                                          _push7(`\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C`);
                                        } else {
                                          return [
                                            createTextVNode("\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_UiTableHead, { class: "text-left" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`\u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439`);
                                        } else {
                                          return [
                                            createTextVNode("\u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439")
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
                                          createTextVNode("\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_UiTableHead, { class: "text-left" }, {
                                        default: withCtx(() => [
                                          createTextVNode("\u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439")
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
                                        createTextVNode("\u0414\u0430\u0442\u0430")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_UiTableHead, { class: "text-center" }, {
                                      default: withCtx(() => [
                                        createTextVNode("\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_UiTableHead, { class: "text-left" }, {
                                      default: withCtx(() => [
                                        createTextVNode("\u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439")
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
                              ssrRenderList(unref(dealHistory), (item) => {
                                _push5(ssrRenderComponent(_component_UiTableRow, {
                                  key: item.id
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(_component_UiTableCell, { class: "whitespace-nowrap" }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`${ssrInterpolate(new Date(item.createdAt).toLocaleString("ru-RU"))}`);
                                          } else {
                                            return [
                                              createTextVNode(toDisplayString(new Date(item.createdAt).toLocaleString("ru-RU")), 1)
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                      _push6(ssrRenderComponent(_component_UiTableCell, { class: "whitespace-nowrap text-center" }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`${ssrInterpolate(item.user.fullName)}`);
                                          } else {
                                            return [
                                              createTextVNode(toDisplayString(item.user.fullName), 1)
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                      _push6(ssrRenderComponent(_component_UiTableCell, { class: "whitespace-nowrap" }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`${ssrInterpolate(item.comment)}`);
                                          } else {
                                            return [
                                              createTextVNode(toDisplayString(item.comment), 1)
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(_component_UiTableCell, { class: "whitespace-nowrap" }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(new Date(item.createdAt).toLocaleString("ru-RU")), 1)
                                          ]),
                                          _: 2
                                        }, 1024),
                                        createVNode(_component_UiTableCell, { class: "whitespace-nowrap text-center" }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(item.user.fullName), 1)
                                          ]),
                                          _: 2
                                        }, 1024),
                                        createVNode(_component_UiTableCell, { class: "whitespace-nowrap" }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(item.comment), 1)
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
                              if (unref(dealHistory).length === 0) {
                                _push5(ssrRenderComponent(_component_UiTableRow, null, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(_component_UiTableCell, {
                                        colspan: "4",
                                        class: "text-center"
                                      }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`\u041D\u0435\u0442 \u0434\u0430\u043D\u043D\u044B\u0445 \u0434\u043B\u044F \u043E\u0442\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F`);
                                          } else {
                                            return [
                                              createTextVNode("\u041D\u0435\u0442 \u0434\u0430\u043D\u043D\u044B\u0445 \u0434\u043B\u044F \u043E\u0442\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F")
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(_component_UiTableCell, {
                                          colspan: "4",
                                          class: "text-center"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode("\u041D\u0435\u0442 \u0434\u0430\u043D\u043D\u044B\u0445 \u0434\u043B\u044F \u043E\u0442\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F")
                                          ]),
                                          _: 1
                                        })
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                              } else {
                                _push5(`<!---->`);
                              }
                            } else {
                              return [
                                (openBlock(true), createBlock(Fragment, null, renderList(unref(dealHistory), (item) => {
                                  return openBlock(), createBlock(_component_UiTableRow, {
                                    key: item.id
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_UiTableCell, { class: "whitespace-nowrap" }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(new Date(item.createdAt).toLocaleString("ru-RU")), 1)
                                        ]),
                                        _: 2
                                      }, 1024),
                                      createVNode(_component_UiTableCell, { class: "whitespace-nowrap text-center" }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(item.user.fullName), 1)
                                        ]),
                                        _: 2
                                      }, 1024),
                                      createVNode(_component_UiTableCell, { class: "whitespace-nowrap" }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(item.comment), 1)
                                        ]),
                                        _: 2
                                      }, 1024)
                                    ]),
                                    _: 2
                                  }, 1024);
                                }), 128)),
                                unref(dealHistory).length === 0 ? (openBlock(), createBlock(_component_UiTableRow, { key: 0 }, {
                                  default: withCtx(() => [
                                    createVNode(_component_UiTableCell, {
                                      colspan: "4",
                                      class: "text-center"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode("\u041D\u0435\u0442 \u0434\u0430\u043D\u043D\u044B\u0445 \u0434\u043B\u044F \u043E\u0442\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                })) : createCommentVNode("", true)
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
                                      createTextVNode("\u0414\u0430\u0442\u0430")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_UiTableHead, { class: "text-center" }, {
                                    default: withCtx(() => [
                                      createTextVNode("\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_UiTableHead, { class: "text-left" }, {
                                    default: withCtx(() => [
                                      createTextVNode("\u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439")
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
                              (openBlock(true), createBlock(Fragment, null, renderList(unref(dealHistory), (item) => {
                                return openBlock(), createBlock(_component_UiTableRow, {
                                  key: item.id
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_UiTableCell, { class: "whitespace-nowrap" }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(new Date(item.createdAt).toLocaleString("ru-RU")), 1)
                                      ]),
                                      _: 2
                                    }, 1024),
                                    createVNode(_component_UiTableCell, { class: "whitespace-nowrap text-center" }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(item.user.fullName), 1)
                                      ]),
                                      _: 2
                                    }, 1024),
                                    createVNode(_component_UiTableCell, { class: "whitespace-nowrap" }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(item.comment), 1)
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ]),
                                  _: 2
                                }, 1024);
                              }), 128)),
                              unref(dealHistory).length === 0 ? (openBlock(), createBlock(_component_UiTableRow, { key: 0 }, {
                                default: withCtx(() => [
                                  createVNode(_component_UiTableCell, {
                                    colspan: "4",
                                    class: "text-center"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("\u041D\u0435\u0442 \u0434\u0430\u043D\u043D\u044B\u0445 \u0434\u043B\u044F \u043E\u0442\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              })) : createCommentVNode("", true)
                            ]),
                            _: 2
                          }, 1024)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                  _push3(ssrRenderComponent(_component_UiDialogFooter, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UiDialogHeader, null, {
                      default: withCtx(() => [
                        createVNode(_component_UiDialogTitle, null, {
                          default: withCtx(() => [
                            createTextVNode("\u0418\u0441\u0442\u043E\u0440\u0438\u044F \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u0439")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UiDialogDescription)
                      ]),
                      _: 1
                    }),
                    createVNode("div", { class: "flex gap-4 max-h-[500px] overflow-y-scroll" }, [
                      createVNode(_component_UiTable, null, {
                        default: withCtx(() => [
                          createVNode(_component_UiTableHeader, null, {
                            default: withCtx(() => [
                              createVNode(_component_UiTableRow, null, {
                                default: withCtx(() => [
                                  createVNode(_component_UiTableHead, { class: "text-left" }, {
                                    default: withCtx(() => [
                                      createTextVNode("\u0414\u0430\u0442\u0430")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_UiTableHead, { class: "text-center" }, {
                                    default: withCtx(() => [
                                      createTextVNode("\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_UiTableHead, { class: "text-left" }, {
                                    default: withCtx(() => [
                                      createTextVNode("\u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439")
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
                              (openBlock(true), createBlock(Fragment, null, renderList(unref(dealHistory), (item) => {
                                return openBlock(), createBlock(_component_UiTableRow, {
                                  key: item.id
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_UiTableCell, { class: "whitespace-nowrap" }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(new Date(item.createdAt).toLocaleString("ru-RU")), 1)
                                      ]),
                                      _: 2
                                    }, 1024),
                                    createVNode(_component_UiTableCell, { class: "whitespace-nowrap text-center" }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(item.user.fullName), 1)
                                      ]),
                                      _: 2
                                    }, 1024),
                                    createVNode(_component_UiTableCell, { class: "whitespace-nowrap" }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(item.comment), 1)
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ]),
                                  _: 2
                                }, 1024);
                              }), 128)),
                              unref(dealHistory).length === 0 ? (openBlock(), createBlock(_component_UiTableRow, { key: 0 }, {
                                default: withCtx(() => [
                                  createVNode(_component_UiTableCell, {
                                    colspan: "4",
                                    class: "text-center"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("\u041D\u0435\u0442 \u0434\u0430\u043D\u043D\u044B\u0445 \u0434\u043B\u044F \u043E\u0442\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              })) : createCommentVNode("", true)
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        _: 2
                      }, 1024)
                    ]),
                    createVNode(_component_UiDialogFooter)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UiDialogTrigger, { "as-child": "" }, {
                default: withCtx(() => [
                  createVNode(_component_UiButton, {
                    class: "h-7 w-7 gap-1",
                    size: "icon",
                    onClick: getDealHistory
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_Icon, {
                        name: "material-symbols:history-rounded",
                        color: "white",
                        size: "25px"
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_UiDialogContent, { class: "max-w-[1200px] flex flex-col" }, {
                default: withCtx(() => [
                  createVNode(_component_UiDialogHeader, null, {
                    default: withCtx(() => [
                      createVNode(_component_UiDialogTitle, null, {
                        default: withCtx(() => [
                          createTextVNode("\u0418\u0441\u0442\u043E\u0440\u0438\u044F \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u0439")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_UiDialogDescription)
                    ]),
                    _: 1
                  }),
                  createVNode("div", { class: "flex gap-4 max-h-[500px] overflow-y-scroll" }, [
                    createVNode(_component_UiTable, null, {
                      default: withCtx(() => [
                        createVNode(_component_UiTableHeader, null, {
                          default: withCtx(() => [
                            createVNode(_component_UiTableRow, null, {
                              default: withCtx(() => [
                                createVNode(_component_UiTableHead, { class: "text-left" }, {
                                  default: withCtx(() => [
                                    createTextVNode("\u0414\u0430\u0442\u0430")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_UiTableHead, { class: "text-center" }, {
                                  default: withCtx(() => [
                                    createTextVNode("\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_UiTableHead, { class: "text-left" }, {
                                  default: withCtx(() => [
                                    createTextVNode("\u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439")
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
                            (openBlock(true), createBlock(Fragment, null, renderList(unref(dealHistory), (item) => {
                              return openBlock(), createBlock(_component_UiTableRow, {
                                key: item.id
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_UiTableCell, { class: "whitespace-nowrap" }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(new Date(item.createdAt).toLocaleString("ru-RU")), 1)
                                    ]),
                                    _: 2
                                  }, 1024),
                                  createVNode(_component_UiTableCell, { class: "whitespace-nowrap text-center" }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(item.user.fullName), 1)
                                    ]),
                                    _: 2
                                  }, 1024),
                                  createVNode(_component_UiTableCell, { class: "whitespace-nowrap" }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(item.comment), 1)
                                    ]),
                                    _: 2
                                  }, 1024)
                                ]),
                                _: 2
                              }, 1024);
                            }), 128)),
                            unref(dealHistory).length === 0 ? (openBlock(), createBlock(_component_UiTableRow, { key: 0 }, {
                              default: withCtx(() => [
                                createVNode(_component_UiTableCell, {
                                  colspan: "4",
                                  class: "text-center"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("\u041D\u0435\u0442 \u0434\u0430\u043D\u043D\u044B\u0445 \u0434\u043B\u044F \u043E\u0442\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            })) : createCommentVNode("", true)
                          ]),
                          _: 2
                        }, 1024)
                      ]),
                      _: 2
                    }, 1024)
                  ]),
                  createVNode(_component_UiDialogFooter)
                ]),
                _: 2
              }, 1024)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/my/deals/DealHistory.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  __name: "EditDealForm",
  __ssrInlineRender: true,
  props: {
    dealSubDatas: {},
    deal: {}
  },
  emits: ["dealDataChanged"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const categories = [
      "\u041F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u044F \u0443\u0441\u043B\u0443\u0433",
      "\u041E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u0435 \u0434\u043B\u044F \u0431\u0438\u0437\u043D\u0435\u0441\u0430",
      "\u041C\u0435\u0431\u0435\u043B\u044C \u0438 \u0438\u043D\u0442\u0435\u0440\u044C\u0435\u0440"
    ];
    const courseTypes = [
      "\u0421\u0442\u0430\u0440\u0442",
      "\u0421\u0442\u0430\u0440\u0442 + \u041F\u0440\u043E\u0444\u0438\u043B\u044C\u043D\u044B\u0439",
      "\u0414\u043E\u043F. \u041F\u0440\u043E\u0444\u0438\u043B\u044C\u043D\u044B\u0439",
      "\u0427\u0430\u0441\u0442\u043D\u044B\u0439"
    ];
    const maketTypes = [
      "\u0414\u0438\u0437\u0430\u0439\u043D\u0435\u0440\u0441\u043A\u0438\u0439",
      "\u0417\u0430\u0433\u043E\u0442\u043E\u0432\u043A\u0430 \u0438\u0437 \u0431\u0430\u0437\u044B",
      "\u0420\u0435\u043A\u043B\u0430\u043C\u043D\u044B\u0439",
      "\u0412\u0438\u0437\u0443\u0430\u043B\u0438\u0437\u0430\u0442\u043E\u0440",
      "\u0418\u0437 \u0440\u0430\u0441\u0441\u044B\u043B\u043A\u0438"
    ];
    const disconts = ["\u0411\u0435\u0437 \u0441\u043A\u0438\u0434\u043A\u0438", "\u0416\u0435\u043B\u0442\u0430\u044F", "\u041E\u041F\u0422", "\u0420\u0430\u0441\u0441\u044B\u043B\u043A\u0430", "\u041A\u0440\u0430\u0441\u043D\u0430\u044F"];
    const bookSizes = ["20\u044520", "20\u044530", "25\u044525", "30\u044530"];
    const pageTypes = ["\u0416\u0443\u0440\u043D\u0430\u043B", "\u041F\u043B\u0430\u0441\u0442\u0438\u043A"];
    const dealData = ref({ ...props.deal });
    const emit = __emit;
    watch(
      dealData,
      () => {
        emit("dealDataChanged", dealData.value);
      },
      { deep: true }
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiCard = _sfc_main$b;
      const _component_UiCardHeader = _sfc_main$1$1;
      const _component_UiCardTitle = _sfc_main$c;
      const _component_UiSwitch = _sfc_main$v;
      const _component_UiLabel = _sfc_main$p;
      const _component_UiCardContent = _sfc_main$f;
      const _component_UiInput = _sfc_main$q;
      const _component_UiSelect = _sfc_main$6$1;
      const _component_UiSelectTrigger = _sfc_main$4$3;
      const _component_UiSelectValue = _sfc_main$5$2;
      const _component_UiSelectContent = _sfc_main$3$3;
      const _component_UiSelectGroup = _sfc_main$s;
      const _component_UiSelectItem = _sfc_main$2$3;
      const _component_MyCombobox = _sfc_main$x;
      _push(ssrRenderComponent(_component_UiCard, mergeProps({ class: "w-full" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UiCardHeader, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UiCardTitle, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="flex items-center justify-between"${_scopeId3}> \u0421\u0434\u0435\u043B\u043A\u0430 <div class="relative flex items-center space-x-2"${_scopeId3}>`);
                        _push4(ssrRenderComponent(_component_UiSwitch, {
                          id: "reservation",
                          checked: unref(dealData).reservation,
                          "onUpdate:checked": ($event) => unref(dealData).reservation = $event
                        }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_UiLabel, { for: "reservation" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`\u0411\u0440\u043E\u043D\u044C`);
                            } else {
                              return [
                                createTextVNode("\u0411\u0440\u043E\u043D\u044C")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`</div></div>`);
                      } else {
                        return [
                          createVNode("div", { class: "flex items-center justify-between" }, [
                            createTextVNode(" \u0421\u0434\u0435\u043B\u043A\u0430 "),
                            createVNode("div", { class: "relative flex items-center space-x-2" }, [
                              createVNode(_component_UiSwitch, {
                                id: "reservation",
                                checked: unref(dealData).reservation,
                                "onUpdate:checked": ($event) => unref(dealData).reservation = $event
                              }, null, 8, ["checked", "onUpdate:checked"]),
                              createVNode(_component_UiLabel, { for: "reservation" }, {
                                default: withCtx(() => [
                                  createTextVNode("\u0411\u0440\u043E\u043D\u044C")
                                ]),
                                _: 1
                              })
                            ])
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UiCardTitle, null, {
                      default: withCtx(() => [
                        createVNode("div", { class: "flex items-center justify-between" }, [
                          createTextVNode(" \u0421\u0434\u0435\u043B\u043A\u0430 "),
                          createVNode("div", { class: "relative flex items-center space-x-2" }, [
                            createVNode(_component_UiSwitch, {
                              id: "reservation",
                              checked: unref(dealData).reservation,
                              "onUpdate:checked": ($event) => unref(dealData).reservation = $event
                            }, null, 8, ["checked", "onUpdate:checked"]),
                            createVNode(_component_UiLabel, { for: "reservation" }, {
                              default: withCtx(() => [
                                createTextVNode("\u0411\u0440\u043E\u043D\u044C")
                              ]),
                              _: 1
                            })
                          ])
                        ])
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
                  _push3(`<div class="flex gap-4 w-full"${_scopeId2}><div class="flex flex-col gap-5 w-full"${_scopeId2}><div class="relative"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435`);
                      } else {
                        return [
                          createTextVNode("\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UiInput, {
                    modelValue: unref(dealData).title,
                    "onUpdate:modelValue": ($event) => unref(dealData).title = $event,
                    placeholder: "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435",
                    class: "col-span-3"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div class="relative"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`\u0414\u0430\u0442\u0430 \u043F\u0440\u043E\u0434\u0430\u0436\u0438`);
                      } else {
                        return [
                          createTextVNode("\u0414\u0430\u0442\u0430 \u043F\u0440\u043E\u0434\u0430\u0436\u0438")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UiInput, {
                    modelValue: unref(dealData).saleDate,
                    "onUpdate:modelValue": ($event) => unref(dealData).saleDate = $event,
                    type: "date",
                    min: (/* @__PURE__ */ new Date()).toISOString().slice(0, 7) + "-01",
                    class: unref(dealData).saleDate ? "" : "outline-1 outline-rose-300"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div class="relative"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C`);
                      } else {
                        return [
                          createTextVNode("\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UiInput, {
                    modelValue: unref(dealData).price,
                    "onUpdate:modelValue": ($event) => unref(dealData).price = $event,
                    type: "number",
                    placeholder: "\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C",
                    class: "col-span-3"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div>`);
                  if (unref(dealData).groupId !== 16 && unref(dealData).groupId !== 19) {
                    _push3(`<div class="relative"${_scopeId2}>`);
                    if (unref(dealData).discont) {
                      _push3(ssrRenderComponent(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1" }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(`\u0421\u043A\u0438\u0434\u043A\u0430`);
                          } else {
                            return [
                              createTextVNode("\u0421\u043A\u0438\u0434\u043A\u0430")
                            ];
                          }
                        }),
                        _: 1
                      }, _parent3, _scopeId2));
                    } else {
                      _push3(`<!---->`);
                    }
                    _push3(`<div class="${ssrRenderClass(
                      unref(dealData).discont ? "" : "outline-1 outline-rose-300 rounded-md"
                    )}"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_UiSelect, {
                      modelValue: unref(dealData).discont,
                      "onUpdate:modelValue": ($event) => unref(dealData).discont = $event
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_UiSelectTrigger, null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_UiSelectValue, { placeholder: "\u0421\u043A\u0438\u0434\u043A\u0430" }, null, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(_component_UiSelectValue, { placeholder: "\u0421\u043A\u0438\u0434\u043A\u0430" })
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_component_UiSelectContent, null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<!--[-->`);
                                ssrRenderList(disconts, (item, i) => {
                                  _push5(ssrRenderComponent(_component_UiSelectGroup, { key: i }, {
                                    default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        _push6(ssrRenderComponent(_component_UiSelectItem, { value: item }, {
                                          default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                            if (_push7) {
                                              _push7(`${ssrInterpolate(item)}`);
                                            } else {
                                              return [
                                                createTextVNode(toDisplayString(item), 1)
                                              ];
                                            }
                                          }),
                                          _: 2
                                        }, _parent6, _scopeId5));
                                      } else {
                                        return [
                                          createVNode(_component_UiSelectItem, { value: item }, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(item), 1)
                                            ]),
                                            _: 2
                                          }, 1032, ["value"])
                                        ];
                                      }
                                    }),
                                    _: 2
                                  }, _parent5, _scopeId4));
                                });
                                _push5(`<!--]-->`);
                              } else {
                                return [
                                  (openBlock(), createBlock(Fragment, null, renderList(disconts, (item, i) => {
                                    return createVNode(_component_UiSelectGroup, { key: i }, {
                                      default: withCtx(() => [
                                        createVNode(_component_UiSelectItem, { value: item }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(item), 1)
                                          ]),
                                          _: 2
                                        }, 1032, ["value"])
                                      ]),
                                      _: 2
                                    }, 1024);
                                  }), 64))
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_UiSelectTrigger, null, {
                              default: withCtx(() => [
                                createVNode(_component_UiSelectValue, { placeholder: "\u0421\u043A\u0438\u0434\u043A\u0430" })
                              ]),
                              _: 1
                            }),
                            createVNode(_component_UiSelectContent, null, {
                              default: withCtx(() => [
                                (openBlock(), createBlock(Fragment, null, renderList(disconts, (item, i) => {
                                  return createVNode(_component_UiSelectGroup, { key: i }, {
                                    default: withCtx(() => [
                                      createVNode(_component_UiSelectItem, { value: item }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(item), 1)
                                        ]),
                                        _: 2
                                      }, 1032, ["value"])
                                    ]),
                                    _: 2
                                  }, 1024);
                                }), 64))
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(`</div></div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  if (unref(dealData).groupId === 16) {
                    _push3(`<div class="relative"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`\u0421\u043A\u0438\u0434\u043A\u0430`);
                        } else {
                          return [
                            createTextVNode("\u0421\u043A\u0438\u0434\u043A\u0430")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_UiInput, {
                      modelValue: unref(dealData).discontAmount,
                      "onUpdate:modelValue": ($event) => unref(dealData).discontAmount = $event,
                      type: "number",
                      placeholder: "\u0421\u043A\u0438\u0434\u043A\u0430",
                      class: unref(dealData).discontAmount ? "" : "outline-1 outline-rose-300"
                    }, null, _parent3, _scopeId2));
                    _push3(`</div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  if (unref(dealData).groupId !== 19) {
                    _push3(`<div class="relative"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`\u0414\u0430\u0442\u0430 \u043F\u0440\u0435\u0437\u0435\u043D\u0442\u0430\u0446\u0438\u0438 \u043C\u0430\u043A\u0435\u0442\u0430`);
                        } else {
                          return [
                            createTextVNode("\u0414\u0430\u0442\u0430 \u043F\u0440\u0435\u0437\u0435\u043D\u0442\u0430\u0446\u0438\u0438 \u043C\u0430\u043A\u0435\u0442\u0430")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_UiInput, {
                      modelValue: unref(dealData).maketPresentation,
                      "onUpdate:modelValue": ($event) => unref(dealData).maketPresentation = $event,
                      type: "date",
                      placeholder: "dsad",
                      class: unref(dealData).maketPresentation ? "" : "outline-1 outline-rose-300"
                    }, null, _parent3, _scopeId2));
                    _push3(`</div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  if (unref(dealData).groupId !== 16 && unref(dealData).groupId !== 19) {
                    _push3(`<div class="relative"${_scopeId2}>`);
                    if (unref(dealData).maketType) {
                      _push3(ssrRenderComponent(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1" }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(`\u0422\u0438\u043F \u043C\u0430\u043A\u0435\u0442\u0430`);
                          } else {
                            return [
                              createTextVNode("\u0422\u0438\u043F \u043C\u0430\u043A\u0435\u0442\u0430")
                            ];
                          }
                        }),
                        _: 1
                      }, _parent3, _scopeId2));
                    } else {
                      _push3(`<!---->`);
                    }
                    _push3(`<div class="${ssrRenderClass(
                      unref(dealData).maketType ? "" : "outline-1 outline-rose-300 rounded-md"
                    )}"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_UiSelect, {
                      modelValue: unref(dealData).maketType,
                      "onUpdate:modelValue": ($event) => unref(dealData).maketType = $event
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_UiSelectTrigger, null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_UiSelectValue, { placeholder: "\u0422\u0438\u043F \u043C\u0430\u043A\u0435\u0442\u0430" }, null, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(_component_UiSelectValue, { placeholder: "\u0422\u0438\u043F \u043C\u0430\u043A\u0435\u0442\u0430" })
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_component_UiSelectContent, null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<!--[-->`);
                                ssrRenderList(maketTypes, (item, i) => {
                                  _push5(ssrRenderComponent(_component_UiSelectGroup, { key: i }, {
                                    default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        _push6(ssrRenderComponent(_component_UiSelectItem, { value: item }, {
                                          default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                            if (_push7) {
                                              _push7(`${ssrInterpolate(item)}`);
                                            } else {
                                              return [
                                                createTextVNode(toDisplayString(item), 1)
                                              ];
                                            }
                                          }),
                                          _: 2
                                        }, _parent6, _scopeId5));
                                      } else {
                                        return [
                                          createVNode(_component_UiSelectItem, { value: item }, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(item), 1)
                                            ]),
                                            _: 2
                                          }, 1032, ["value"])
                                        ];
                                      }
                                    }),
                                    _: 2
                                  }, _parent5, _scopeId4));
                                });
                                _push5(`<!--]-->`);
                              } else {
                                return [
                                  (openBlock(), createBlock(Fragment, null, renderList(maketTypes, (item, i) => {
                                    return createVNode(_component_UiSelectGroup, { key: i }, {
                                      default: withCtx(() => [
                                        createVNode(_component_UiSelectItem, { value: item }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(item), 1)
                                          ]),
                                          _: 2
                                        }, 1032, ["value"])
                                      ]),
                                      _: 2
                                    }, 1024);
                                  }), 64))
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_UiSelectTrigger, null, {
                              default: withCtx(() => [
                                createVNode(_component_UiSelectValue, { placeholder: "\u0422\u0438\u043F \u043C\u0430\u043A\u0435\u0442\u0430" })
                              ]),
                              _: 1
                            }),
                            createVNode(_component_UiSelectContent, null, {
                              default: withCtx(() => [
                                (openBlock(), createBlock(Fragment, null, renderList(maketTypes, (item, i) => {
                                  return createVNode(_component_UiSelectGroup, { key: i }, {
                                    default: withCtx(() => [
                                      createVNode(_component_UiSelectItem, { value: item }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(item), 1)
                                        ]),
                                        _: 2
                                      }, 1032, ["value"])
                                    ]),
                                    _: 2
                                  }, 1024);
                                }), 64))
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(`</div></div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  if (unref(dealData).groupId === 16) {
                    _push3(`<div class="relative"${_scopeId2}>`);
                    if (unref(dealData).courseType) {
                      _push3(ssrRenderComponent(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1" }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(`\u0422\u0438\u043F \u043A\u0443\u0440\u0441\u0430`);
                          } else {
                            return [
                              createTextVNode("\u0422\u0438\u043F \u043A\u0443\u0440\u0441\u0430")
                            ];
                          }
                        }),
                        _: 1
                      }, _parent3, _scopeId2));
                    } else {
                      _push3(`<!---->`);
                    }
                    _push3(`<div class="${ssrRenderClass(
                      unref(dealData).courseType ? "" : "outline-1 outline-rose-300 rounded-md"
                    )}"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_UiSelect, {
                      modelValue: unref(dealData).courseType,
                      "onUpdate:modelValue": ($event) => unref(dealData).courseType = $event
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_UiSelectTrigger, null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_UiSelectValue, { placeholder: "\u0422\u0438\u043F \u043A\u0443\u0440\u0441\u0430" }, null, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(_component_UiSelectValue, { placeholder: "\u0422\u0438\u043F \u043A\u0443\u0440\u0441\u0430" })
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_component_UiSelectContent, null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<!--[-->`);
                                ssrRenderList(courseTypes, (item, i) => {
                                  _push5(ssrRenderComponent(_component_UiSelectGroup, { key: i }, {
                                    default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        _push6(ssrRenderComponent(_component_UiSelectItem, { value: item }, {
                                          default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                            if (_push7) {
                                              _push7(`${ssrInterpolate(item)}`);
                                            } else {
                                              return [
                                                createTextVNode(toDisplayString(item), 1)
                                              ];
                                            }
                                          }),
                                          _: 2
                                        }, _parent6, _scopeId5));
                                      } else {
                                        return [
                                          createVNode(_component_UiSelectItem, { value: item }, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(item), 1)
                                            ]),
                                            _: 2
                                          }, 1032, ["value"])
                                        ];
                                      }
                                    }),
                                    _: 2
                                  }, _parent5, _scopeId4));
                                });
                                _push5(`<!--]-->`);
                              } else {
                                return [
                                  (openBlock(), createBlock(Fragment, null, renderList(courseTypes, (item, i) => {
                                    return createVNode(_component_UiSelectGroup, { key: i }, {
                                      default: withCtx(() => [
                                        createVNode(_component_UiSelectItem, { value: item }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(item), 1)
                                          ]),
                                          _: 2
                                        }, 1032, ["value"])
                                      ]),
                                      _: 2
                                    }, 1024);
                                  }), 64))
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_UiSelectTrigger, null, {
                              default: withCtx(() => [
                                createVNode(_component_UiSelectValue, { placeholder: "\u0422\u0438\u043F \u043A\u0443\u0440\u0441\u0430" })
                              ]),
                              _: 1
                            }),
                            createVNode(_component_UiSelectContent, null, {
                              default: withCtx(() => [
                                (openBlock(), createBlock(Fragment, null, renderList(courseTypes, (item, i) => {
                                  return createVNode(_component_UiSelectGroup, { key: i }, {
                                    default: withCtx(() => [
                                      createVNode(_component_UiSelectItem, { value: item }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(item), 1)
                                        ]),
                                        _: 2
                                      }, 1032, ["value"])
                                    ]),
                                    _: 2
                                  }, 1024);
                                }), 64))
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(`</div></div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`<div class="relative"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`id \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0438 \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0441\u0442\u0432\u0430`);
                      } else {
                        return [
                          createTextVNode("id \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0438 \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0441\u0442\u0432\u0430")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UiInput, {
                    modelValue: unref(dealData).card_id,
                    "onUpdate:modelValue": ($event) => unref(dealData).card_id = $event,
                    placeholder: "id \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0438 \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0441\u0442\u0432\u0430",
                    class: "col-span-3"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div>`);
                  if (unref(dealData).groupId === 19) {
                    _push3(`<div class="relative"${_scopeId2}>`);
                    if (unref(dealData).bookSize) {
                      _push3(ssrRenderComponent(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1" }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(`\u0420\u0430\u0437\u043C\u0435\u0440 \u0444\u043E\u0442\u043E\u043A\u043D\u0438\u0433\u0438`);
                          } else {
                            return [
                              createTextVNode("\u0420\u0430\u0437\u043C\u0435\u0440 \u0444\u043E\u0442\u043E\u043A\u043D\u0438\u0433\u0438")
                            ];
                          }
                        }),
                        _: 1
                      }, _parent3, _scopeId2));
                    } else {
                      _push3(`<!---->`);
                    }
                    _push3(`<div class="${ssrRenderClass(
                      unref(dealData).bookSize ? "" : "outline-1 outline-rose-300 rounded-md "
                    )}"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_UiSelect, {
                      modelValue: unref(dealData).bookSize,
                      "onUpdate:modelValue": ($event) => unref(dealData).bookSize = $event
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_UiSelectTrigger, null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_UiSelectValue, { placeholder: "\u0420\u0430\u0437\u043C\u0435\u0440 \u0444\u043E\u0442\u043E\u043A\u043D\u0438\u0433\u0438" }, null, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(_component_UiSelectValue, { placeholder: "\u0420\u0430\u0437\u043C\u0435\u0440 \u0444\u043E\u0442\u043E\u043A\u043D\u0438\u0433\u0438" })
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_component_UiSelectContent, null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<!--[-->`);
                                ssrRenderList(bookSizes, (item, i) => {
                                  _push5(ssrRenderComponent(_component_UiSelectGroup, { key: i }, {
                                    default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        _push6(ssrRenderComponent(_component_UiSelectItem, { value: item }, {
                                          default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                            if (_push7) {
                                              _push7(`${ssrInterpolate(item)}`);
                                            } else {
                                              return [
                                                createTextVNode(toDisplayString(item), 1)
                                              ];
                                            }
                                          }),
                                          _: 2
                                        }, _parent6, _scopeId5));
                                      } else {
                                        return [
                                          createVNode(_component_UiSelectItem, { value: item }, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(item), 1)
                                            ]),
                                            _: 2
                                          }, 1032, ["value"])
                                        ];
                                      }
                                    }),
                                    _: 2
                                  }, _parent5, _scopeId4));
                                });
                                _push5(`<!--]-->`);
                              } else {
                                return [
                                  (openBlock(), createBlock(Fragment, null, renderList(bookSizes, (item, i) => {
                                    return createVNode(_component_UiSelectGroup, { key: i }, {
                                      default: withCtx(() => [
                                        createVNode(_component_UiSelectItem, { value: item }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(item), 1)
                                          ]),
                                          _: 2
                                        }, 1032, ["value"])
                                      ]),
                                      _: 2
                                    }, 1024);
                                  }), 64))
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_UiSelectTrigger, null, {
                              default: withCtx(() => [
                                createVNode(_component_UiSelectValue, { placeholder: "\u0420\u0430\u0437\u043C\u0435\u0440 \u0444\u043E\u0442\u043E\u043A\u043D\u0438\u0433\u0438" })
                              ]),
                              _: 1
                            }),
                            createVNode(_component_UiSelectContent, null, {
                              default: withCtx(() => [
                                (openBlock(), createBlock(Fragment, null, renderList(bookSizes, (item, i) => {
                                  return createVNode(_component_UiSelectGroup, { key: i }, {
                                    default: withCtx(() => [
                                      createVNode(_component_UiSelectItem, { value: item }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(item), 1)
                                        ]),
                                        _: 2
                                      }, 1032, ["value"])
                                    ]),
                                    _: 2
                                  }, 1024);
                                }), 64))
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(`</div></div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  if (unref(dealData).groupId === 19) {
                    _push3(`<div class="relative"${_scopeId2}>`);
                    if (unref(dealData).pageType) {
                      _push3(ssrRenderComponent(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1" }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(`\u0421\u0442\u0440\u0430\u043D\u0438\u0446\u044B`);
                          } else {
                            return [
                              createTextVNode("\u0421\u0442\u0440\u0430\u043D\u0438\u0446\u044B")
                            ];
                          }
                        }),
                        _: 1
                      }, _parent3, _scopeId2));
                    } else {
                      _push3(`<!---->`);
                    }
                    _push3(`<div class="${ssrRenderClass(
                      unref(dealData).pageType ? "" : "outline-1 outline-rose-300 rounded-md "
                    )}"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_UiSelect, {
                      modelValue: unref(dealData).pageType,
                      "onUpdate:modelValue": ($event) => unref(dealData).pageType = $event
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_UiSelectTrigger, null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_UiSelectValue, { placeholder: "\u0421\u0442\u0440\u0430\u043D\u0438\u0446\u044B" }, null, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(_component_UiSelectValue, { placeholder: "\u0421\u0442\u0440\u0430\u043D\u0438\u0446\u044B" })
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_component_UiSelectContent, null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<!--[-->`);
                                ssrRenderList(pageTypes, (item, i) => {
                                  _push5(ssrRenderComponent(_component_UiSelectGroup, { key: i }, {
                                    default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        _push6(ssrRenderComponent(_component_UiSelectItem, { value: item }, {
                                          default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                            if (_push7) {
                                              _push7(`${ssrInterpolate(item)}`);
                                            } else {
                                              return [
                                                createTextVNode(toDisplayString(item), 1)
                                              ];
                                            }
                                          }),
                                          _: 2
                                        }, _parent6, _scopeId5));
                                      } else {
                                        return [
                                          createVNode(_component_UiSelectItem, { value: item }, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(item), 1)
                                            ]),
                                            _: 2
                                          }, 1032, ["value"])
                                        ];
                                      }
                                    }),
                                    _: 2
                                  }, _parent5, _scopeId4));
                                });
                                _push5(`<!--]-->`);
                              } else {
                                return [
                                  (openBlock(), createBlock(Fragment, null, renderList(pageTypes, (item, i) => {
                                    return createVNode(_component_UiSelectGroup, { key: i }, {
                                      default: withCtx(() => [
                                        createVNode(_component_UiSelectItem, { value: item }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(item), 1)
                                          ]),
                                          _: 2
                                        }, 1032, ["value"])
                                      ]),
                                      _: 2
                                    }, 1024);
                                  }), 64))
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_UiSelectTrigger, null, {
                              default: withCtx(() => [
                                createVNode(_component_UiSelectValue, { placeholder: "\u0421\u0442\u0440\u0430\u043D\u0438\u0446\u044B" })
                              ]),
                              _: 1
                            }),
                            createVNode(_component_UiSelectContent, null, {
                              default: withCtx(() => [
                                (openBlock(), createBlock(Fragment, null, renderList(pageTypes, (item, i) => {
                                  return createVNode(_component_UiSelectGroup, { key: i }, {
                                    default: withCtx(() => [
                                      createVNode(_component_UiSelectItem, { value: item }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(item), 1)
                                        ]),
                                        _: 2
                                      }, 1032, ["value"])
                                    ]),
                                    _: 2
                                  }, 1024);
                                }), 64))
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(`</div></div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  if (unref(dealData).groupId === 19) {
                    _push3(`<div class="relative"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`\u0420\u0430\u0437\u0432\u043E\u0440\u043E\u0442\u044B`);
                        } else {
                          return [
                            createTextVNode("\u0420\u0430\u0437\u0432\u043E\u0440\u043E\u0442\u044B")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_UiInput, {
                      modelValue: unref(dealData).pages,
                      "onUpdate:modelValue": ($event) => unref(dealData).pages = $event,
                      type: "number",
                      placeholder: "\u0420\u0430\u0437\u0432\u043E\u0440\u043E\u0442\u044B",
                      class: unref(dealData).pages ? "" : "outline-1 outline-rose-300"
                    }, null, _parent3, _scopeId2));
                    _push3(`</div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`</div><div class="flex flex-col gap-5 w-full"${_scopeId2}><div class="relative"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`\u0421\u043F\u043E\u0441\u043E\u0431 \u0437\u0430\u043A\u0440\u044B\u0442\u0438\u044F`);
                      } else {
                        return [
                          createTextVNode("\u0421\u043F\u043E\u0441\u043E\u0431 \u0437\u0430\u043A\u0440\u044B\u0442\u0438\u044F")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_MyCombobox, {
                    items: _ctx.dealSubDatas.methods,
                    label: unref(dealData).clothingMethod,
                    onSelectedItem: (value) => unref(dealData).clothingMethod = value
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div class="relative"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`\u0418\u0441\u0442\u043E\u0447\u043D\u0438\u043A \u0441\u0434\u0435\u043B\u043A\u0438`);
                      } else {
                        return [
                          createTextVNode("\u0418\u0441\u0442\u043E\u0447\u043D\u0438\u043A \u0441\u0434\u0435\u043B\u043A\u0438")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_MyCombobox, {
                    items: _ctx.dealSubDatas.sources,
                    label: unref(dealData).source,
                    onSelectedItem: (value) => unref(dealData).source = value
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div class="relative"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`\u0422\u0415\u0413`);
                      } else {
                        return [
                          createTextVNode("\u0422\u0415\u0413")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_MyCombobox, {
                    items: _ctx.dealSubDatas.adTags,
                    label: unref(dealData).adTag,
                    onSelectedItem: (value) => unref(dealData).adTag = value
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div class="relative"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`\u0421\u0444\u0435\u0440\u0430`);
                      } else {
                        return [
                          createTextVNode("\u0421\u0444\u0435\u0440\u0430")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_MyCombobox, {
                    items: _ctx.dealSubDatas.spheres,
                    label: unref(dealData).sphere,
                    onSelectedItem: (value) => unref(dealData).sphere = value
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div class="relative"${_scopeId2}>`);
                  if (unref(dealData).city !== "") {
                    _push3(ssrRenderComponent(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`\u0413\u043E\u0440\u043E\u0434`);
                        } else {
                          return [
                            createTextVNode("\u0413\u043E\u0440\u043E\u0434")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(ssrRenderComponent(_component_UiInput, {
                    modelValue: unref(dealData).city,
                    "onUpdate:modelValue": ($event) => unref(dealData).city = $event,
                    placeholder: "\u0413\u043E\u0440\u043E\u0434",
                    class: "col-span-3"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div class="relative"${_scopeId2}>`);
                  if (unref(dealData).region !== "") {
                    _push3(ssrRenderComponent(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`\u0420\u0435\u0433\u0438\u043E\u043D/\u041E\u0431\u043B\u0430\u0441\u0442\u044C`);
                        } else {
                          return [
                            createTextVNode("\u0420\u0435\u0433\u0438\u043E\u043D/\u041E\u0431\u043B\u0430\u0441\u0442\u044C")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(ssrRenderComponent(_component_UiInput, {
                    modelValue: unref(dealData).region,
                    "onUpdate:modelValue": ($event) => unref(dealData).region = $event,
                    placeholder: "\u0420\u0435\u0433\u0438\u043E\u043D/\u041E\u0431\u043B\u0430\u0441\u0442\u044C",
                    class: "col-span-3"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div>`);
                  if (_ctx.deal.client.chatLink.includes("easyneon.amocrm.ru")) {
                    _push3(`<div class="relative"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F`);
                        } else {
                          return [
                            createTextVNode("\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(`<div${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_UiSelect, {
                      modelValue: unref(dealData).category,
                      "onUpdate:modelValue": ($event) => unref(dealData).category = $event
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_UiSelectTrigger, null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_UiSelectValue, { placeholder: "\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F" }, null, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(_component_UiSelectValue, { placeholder: "\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F" })
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_component_UiSelectContent, null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<!--[-->`);
                                ssrRenderList(categories, (item, i) => {
                                  _push5(ssrRenderComponent(_component_UiSelectGroup, { key: i }, {
                                    default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        _push6(ssrRenderComponent(_component_UiSelectItem, { value: item }, {
                                          default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                            if (_push7) {
                                              _push7(`${ssrInterpolate(item)}`);
                                            } else {
                                              return [
                                                createTextVNode(toDisplayString(item), 1)
                                              ];
                                            }
                                          }),
                                          _: 2
                                        }, _parent6, _scopeId5));
                                      } else {
                                        return [
                                          createVNode(_component_UiSelectItem, { value: item }, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(item), 1)
                                            ]),
                                            _: 2
                                          }, 1032, ["value"])
                                        ];
                                      }
                                    }),
                                    _: 2
                                  }, _parent5, _scopeId4));
                                });
                                _push5(`<!--]-->`);
                              } else {
                                return [
                                  (openBlock(), createBlock(Fragment, null, renderList(categories, (item, i) => {
                                    return createVNode(_component_UiSelectGroup, { key: i }, {
                                      default: withCtx(() => [
                                        createVNode(_component_UiSelectItem, { value: item }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(item), 1)
                                          ]),
                                          _: 2
                                        }, 1032, ["value"])
                                      ]),
                                      _: 2
                                    }, 1024);
                                  }), 64))
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_UiSelectTrigger, null, {
                              default: withCtx(() => [
                                createVNode(_component_UiSelectValue, { placeholder: "\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F" })
                              ]),
                              _: 1
                            }),
                            createVNode(_component_UiSelectContent, null, {
                              default: withCtx(() => [
                                (openBlock(), createBlock(Fragment, null, renderList(categories, (item, i) => {
                                  return createVNode(_component_UiSelectGroup, { key: i }, {
                                    default: withCtx(() => [
                                      createVNode(_component_UiSelectItem, { value: item }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(item), 1)
                                        ]),
                                        _: 2
                                      }, 1032, ["value"])
                                    ]),
                                    _: 2
                                  }, 1024);
                                }), 64))
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(`</div></div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`</div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex gap-4 w-full" }, [
                      createVNode("div", { class: "flex flex-col gap-5 w-full" }, [
                        createVNode("div", { class: "relative" }, [
                          createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1" }, {
                            default: withCtx(() => [
                              createTextVNode("\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UiInput, {
                            modelValue: unref(dealData).title,
                            "onUpdate:modelValue": ($event) => unref(dealData).title = $event,
                            placeholder: "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435",
                            class: "col-span-3"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        createVNode("div", { class: "relative" }, [
                          createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1" }, {
                            default: withCtx(() => [
                              createTextVNode("\u0414\u0430\u0442\u0430 \u043F\u0440\u043E\u0434\u0430\u0436\u0438")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UiInput, {
                            modelValue: unref(dealData).saleDate,
                            "onUpdate:modelValue": ($event) => unref(dealData).saleDate = $event,
                            type: "date",
                            min: (/* @__PURE__ */ new Date()).toISOString().slice(0, 7) + "-01",
                            class: unref(dealData).saleDate ? "" : "outline-1 outline-rose-300"
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "min", "class"])
                        ]),
                        createVNode("div", { class: "relative" }, [
                          createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1" }, {
                            default: withCtx(() => [
                              createTextVNode("\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UiInput, {
                            modelValue: unref(dealData).price,
                            "onUpdate:modelValue": ($event) => unref(dealData).price = $event,
                            type: "number",
                            placeholder: "\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C",
                            class: "col-span-3"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        unref(dealData).groupId !== 16 && unref(dealData).groupId !== 19 ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: "relative"
                        }, [
                          unref(dealData).discont ? (openBlock(), createBlock(_component_UiLabel, {
                            key: 0,
                            class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("\u0421\u043A\u0438\u0434\u043A\u0430")
                            ]),
                            _: 1
                          })) : createCommentVNode("", true),
                          createVNode("div", {
                            class: unref(dealData).discont ? "" : "outline-1 outline-rose-300 rounded-md"
                          }, [
                            createVNode(_component_UiSelect, {
                              modelValue: unref(dealData).discont,
                              "onUpdate:modelValue": ($event) => unref(dealData).discont = $event
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_UiSelectTrigger, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_UiSelectValue, { placeholder: "\u0421\u043A\u0438\u0434\u043A\u0430" })
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_UiSelectContent, null, {
                                  default: withCtx(() => [
                                    (openBlock(), createBlock(Fragment, null, renderList(disconts, (item, i) => {
                                      return createVNode(_component_UiSelectGroup, { key: i }, {
                                        default: withCtx(() => [
                                          createVNode(_component_UiSelectItem, { value: item }, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(item), 1)
                                            ]),
                                            _: 2
                                          }, 1032, ["value"])
                                        ]),
                                        _: 2
                                      }, 1024);
                                    }), 64))
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }, 8, ["modelValue", "onUpdate:modelValue"])
                          ], 2)
                        ])) : createCommentVNode("", true),
                        unref(dealData).groupId === 16 ? (openBlock(), createBlock("div", {
                          key: 1,
                          class: "relative"
                        }, [
                          createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1" }, {
                            default: withCtx(() => [
                              createTextVNode("\u0421\u043A\u0438\u0434\u043A\u0430")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UiInput, {
                            modelValue: unref(dealData).discontAmount,
                            "onUpdate:modelValue": ($event) => unref(dealData).discontAmount = $event,
                            type: "number",
                            placeholder: "\u0421\u043A\u0438\u0434\u043A\u0430",
                            class: unref(dealData).discontAmount ? "" : "outline-1 outline-rose-300"
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "class"])
                        ])) : createCommentVNode("", true),
                        unref(dealData).groupId !== 19 ? (openBlock(), createBlock("div", {
                          key: 2,
                          class: "relative"
                        }, [
                          createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                            default: withCtx(() => [
                              createTextVNode("\u0414\u0430\u0442\u0430 \u043F\u0440\u0435\u0437\u0435\u043D\u0442\u0430\u0446\u0438\u0438 \u043C\u0430\u043A\u0435\u0442\u0430")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UiInput, {
                            modelValue: unref(dealData).maketPresentation,
                            "onUpdate:modelValue": ($event) => unref(dealData).maketPresentation = $event,
                            type: "date",
                            placeholder: "dsad",
                            class: unref(dealData).maketPresentation ? "" : "outline-1 outline-rose-300"
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "class"])
                        ])) : createCommentVNode("", true),
                        unref(dealData).groupId !== 16 && unref(dealData).groupId !== 19 ? (openBlock(), createBlock("div", {
                          key: 3,
                          class: "relative"
                        }, [
                          unref(dealData).maketType ? (openBlock(), createBlock(_component_UiLabel, {
                            key: 0,
                            class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("\u0422\u0438\u043F \u043C\u0430\u043A\u0435\u0442\u0430")
                            ]),
                            _: 1
                          })) : createCommentVNode("", true),
                          createVNode("div", {
                            class: unref(dealData).maketType ? "" : "outline-1 outline-rose-300 rounded-md"
                          }, [
                            createVNode(_component_UiSelect, {
                              modelValue: unref(dealData).maketType,
                              "onUpdate:modelValue": ($event) => unref(dealData).maketType = $event
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_UiSelectTrigger, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_UiSelectValue, { placeholder: "\u0422\u0438\u043F \u043C\u0430\u043A\u0435\u0442\u0430" })
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_UiSelectContent, null, {
                                  default: withCtx(() => [
                                    (openBlock(), createBlock(Fragment, null, renderList(maketTypes, (item, i) => {
                                      return createVNode(_component_UiSelectGroup, { key: i }, {
                                        default: withCtx(() => [
                                          createVNode(_component_UiSelectItem, { value: item }, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(item), 1)
                                            ]),
                                            _: 2
                                          }, 1032, ["value"])
                                        ]),
                                        _: 2
                                      }, 1024);
                                    }), 64))
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }, 8, ["modelValue", "onUpdate:modelValue"])
                          ], 2)
                        ])) : createCommentVNode("", true),
                        unref(dealData).groupId === 16 ? (openBlock(), createBlock("div", {
                          key: 4,
                          class: "relative"
                        }, [
                          unref(dealData).courseType ? (openBlock(), createBlock(_component_UiLabel, {
                            key: 0,
                            class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("\u0422\u0438\u043F \u043A\u0443\u0440\u0441\u0430")
                            ]),
                            _: 1
                          })) : createCommentVNode("", true),
                          createVNode("div", {
                            class: unref(dealData).courseType ? "" : "outline-1 outline-rose-300 rounded-md"
                          }, [
                            createVNode(_component_UiSelect, {
                              modelValue: unref(dealData).courseType,
                              "onUpdate:modelValue": ($event) => unref(dealData).courseType = $event
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_UiSelectTrigger, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_UiSelectValue, { placeholder: "\u0422\u0438\u043F \u043A\u0443\u0440\u0441\u0430" })
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_UiSelectContent, null, {
                                  default: withCtx(() => [
                                    (openBlock(), createBlock(Fragment, null, renderList(courseTypes, (item, i) => {
                                      return createVNode(_component_UiSelectGroup, { key: i }, {
                                        default: withCtx(() => [
                                          createVNode(_component_UiSelectItem, { value: item }, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(item), 1)
                                            ]),
                                            _: 2
                                          }, 1032, ["value"])
                                        ]),
                                        _: 2
                                      }, 1024);
                                    }), 64))
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }, 8, ["modelValue", "onUpdate:modelValue"])
                          ], 2)
                        ])) : createCommentVNode("", true),
                        createVNode("div", { class: "relative" }, [
                          createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1" }, {
                            default: withCtx(() => [
                              createTextVNode("id \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0438 \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0441\u0442\u0432\u0430")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UiInput, {
                            modelValue: unref(dealData).card_id,
                            "onUpdate:modelValue": ($event) => unref(dealData).card_id = $event,
                            placeholder: "id \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0438 \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0441\u0442\u0432\u0430",
                            class: "col-span-3"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        unref(dealData).groupId === 19 ? (openBlock(), createBlock("div", {
                          key: 5,
                          class: "relative"
                        }, [
                          unref(dealData).bookSize ? (openBlock(), createBlock(_component_UiLabel, {
                            key: 0,
                            class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("\u0420\u0430\u0437\u043C\u0435\u0440 \u0444\u043E\u0442\u043E\u043A\u043D\u0438\u0433\u0438")
                            ]),
                            _: 1
                          })) : createCommentVNode("", true),
                          createVNode("div", {
                            class: unref(dealData).bookSize ? "" : "outline-1 outline-rose-300 rounded-md "
                          }, [
                            createVNode(_component_UiSelect, {
                              modelValue: unref(dealData).bookSize,
                              "onUpdate:modelValue": ($event) => unref(dealData).bookSize = $event
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_UiSelectTrigger, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_UiSelectValue, { placeholder: "\u0420\u0430\u0437\u043C\u0435\u0440 \u0444\u043E\u0442\u043E\u043A\u043D\u0438\u0433\u0438" })
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_UiSelectContent, null, {
                                  default: withCtx(() => [
                                    (openBlock(), createBlock(Fragment, null, renderList(bookSizes, (item, i) => {
                                      return createVNode(_component_UiSelectGroup, { key: i }, {
                                        default: withCtx(() => [
                                          createVNode(_component_UiSelectItem, { value: item }, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(item), 1)
                                            ]),
                                            _: 2
                                          }, 1032, ["value"])
                                        ]),
                                        _: 2
                                      }, 1024);
                                    }), 64))
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }, 8, ["modelValue", "onUpdate:modelValue"])
                          ], 2)
                        ])) : createCommentVNode("", true),
                        unref(dealData).groupId === 19 ? (openBlock(), createBlock("div", {
                          key: 6,
                          class: "relative"
                        }, [
                          unref(dealData).pageType ? (openBlock(), createBlock(_component_UiLabel, {
                            key: 0,
                            class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("\u0421\u0442\u0440\u0430\u043D\u0438\u0446\u044B")
                            ]),
                            _: 1
                          })) : createCommentVNode("", true),
                          createVNode("div", {
                            class: unref(dealData).pageType ? "" : "outline-1 outline-rose-300 rounded-md "
                          }, [
                            createVNode(_component_UiSelect, {
                              modelValue: unref(dealData).pageType,
                              "onUpdate:modelValue": ($event) => unref(dealData).pageType = $event
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_UiSelectTrigger, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_UiSelectValue, { placeholder: "\u0421\u0442\u0440\u0430\u043D\u0438\u0446\u044B" })
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_UiSelectContent, null, {
                                  default: withCtx(() => [
                                    (openBlock(), createBlock(Fragment, null, renderList(pageTypes, (item, i) => {
                                      return createVNode(_component_UiSelectGroup, { key: i }, {
                                        default: withCtx(() => [
                                          createVNode(_component_UiSelectItem, { value: item }, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(item), 1)
                                            ]),
                                            _: 2
                                          }, 1032, ["value"])
                                        ]),
                                        _: 2
                                      }, 1024);
                                    }), 64))
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }, 8, ["modelValue", "onUpdate:modelValue"])
                          ], 2)
                        ])) : createCommentVNode("", true),
                        unref(dealData).groupId === 19 ? (openBlock(), createBlock("div", {
                          key: 7,
                          class: "relative"
                        }, [
                          createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                            default: withCtx(() => [
                              createTextVNode("\u0420\u0430\u0437\u0432\u043E\u0440\u043E\u0442\u044B")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UiInput, {
                            modelValue: unref(dealData).pages,
                            "onUpdate:modelValue": ($event) => unref(dealData).pages = $event,
                            type: "number",
                            placeholder: "\u0420\u0430\u0437\u0432\u043E\u0440\u043E\u0442\u044B",
                            class: unref(dealData).pages ? "" : "outline-1 outline-rose-300"
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "class"])
                        ])) : createCommentVNode("", true)
                      ]),
                      createVNode("div", { class: "flex flex-col gap-5 w-full" }, [
                        createVNode("div", { class: "relative" }, [
                          createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1" }, {
                            default: withCtx(() => [
                              createTextVNode("\u0421\u043F\u043E\u0441\u043E\u0431 \u0437\u0430\u043A\u0440\u044B\u0442\u0438\u044F")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_MyCombobox, {
                            items: _ctx.dealSubDatas.methods,
                            label: unref(dealData).clothingMethod,
                            onSelectedItem: (value) => unref(dealData).clothingMethod = value
                          }, null, 8, ["items", "label", "onSelectedItem"])
                        ]),
                        createVNode("div", { class: "relative" }, [
                          createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1" }, {
                            default: withCtx(() => [
                              createTextVNode("\u0418\u0441\u0442\u043E\u0447\u043D\u0438\u043A \u0441\u0434\u0435\u043B\u043A\u0438")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_MyCombobox, {
                            items: _ctx.dealSubDatas.sources,
                            label: unref(dealData).source,
                            onSelectedItem: (value) => unref(dealData).source = value
                          }, null, 8, ["items", "label", "onSelectedItem"])
                        ]),
                        createVNode("div", { class: "relative" }, [
                          createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1" }, {
                            default: withCtx(() => [
                              createTextVNode("\u0422\u0415\u0413")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_MyCombobox, {
                            items: _ctx.dealSubDatas.adTags,
                            label: unref(dealData).adTag,
                            onSelectedItem: (value) => unref(dealData).adTag = value
                          }, null, 8, ["items", "label", "onSelectedItem"])
                        ]),
                        createVNode("div", { class: "relative" }, [
                          createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1" }, {
                            default: withCtx(() => [
                              createTextVNode("\u0421\u0444\u0435\u0440\u0430")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_MyCombobox, {
                            items: _ctx.dealSubDatas.spheres,
                            label: unref(dealData).sphere,
                            onSelectedItem: (value) => unref(dealData).sphere = value
                          }, null, 8, ["items", "label", "onSelectedItem"])
                        ]),
                        createVNode("div", { class: "relative" }, [
                          unref(dealData).city !== "" ? (openBlock(), createBlock(_component_UiLabel, {
                            key: 0,
                            class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("\u0413\u043E\u0440\u043E\u0434")
                            ]),
                            _: 1
                          })) : createCommentVNode("", true),
                          createVNode(_component_UiInput, {
                            modelValue: unref(dealData).city,
                            "onUpdate:modelValue": ($event) => unref(dealData).city = $event,
                            placeholder: "\u0413\u043E\u0440\u043E\u0434",
                            class: "col-span-3"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        createVNode("div", { class: "relative" }, [
                          unref(dealData).region !== "" ? (openBlock(), createBlock(_component_UiLabel, {
                            key: 0,
                            class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("\u0420\u0435\u0433\u0438\u043E\u043D/\u041E\u0431\u043B\u0430\u0441\u0442\u044C")
                            ]),
                            _: 1
                          })) : createCommentVNode("", true),
                          createVNode(_component_UiInput, {
                            modelValue: unref(dealData).region,
                            "onUpdate:modelValue": ($event) => unref(dealData).region = $event,
                            placeholder: "\u0420\u0435\u0433\u0438\u043E\u043D/\u041E\u0431\u043B\u0430\u0441\u0442\u044C",
                            class: "col-span-3"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _ctx.deal.client.chatLink.includes("easyneon.amocrm.ru") ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: "relative"
                        }, [
                          createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1" }, {
                            default: withCtx(() => [
                              createTextVNode("\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F")
                            ]),
                            _: 1
                          }),
                          createVNode("div", null, [
                            createVNode(_component_UiSelect, {
                              modelValue: unref(dealData).category,
                              "onUpdate:modelValue": ($event) => unref(dealData).category = $event
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_UiSelectTrigger, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_UiSelectValue, { placeholder: "\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F" })
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_UiSelectContent, null, {
                                  default: withCtx(() => [
                                    (openBlock(), createBlock(Fragment, null, renderList(categories, (item, i) => {
                                      return createVNode(_component_UiSelectGroup, { key: i }, {
                                        default: withCtx(() => [
                                          createVNode(_component_UiSelectItem, { value: item }, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(item), 1)
                                            ]),
                                            _: 2
                                          }, 1032, ["value"])
                                        ]),
                                        _: 2
                                      }, 1024);
                                    }), 64))
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }, 8, ["modelValue", "onUpdate:modelValue"])
                          ])
                        ])) : createCommentVNode("", true)
                      ])
                    ])
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
                      createVNode("div", { class: "flex items-center justify-between" }, [
                        createTextVNode(" \u0421\u0434\u0435\u043B\u043A\u0430 "),
                        createVNode("div", { class: "relative flex items-center space-x-2" }, [
                          createVNode(_component_UiSwitch, {
                            id: "reservation",
                            checked: unref(dealData).reservation,
                            "onUpdate:checked": ($event) => unref(dealData).reservation = $event
                          }, null, 8, ["checked", "onUpdate:checked"]),
                          createVNode(_component_UiLabel, { for: "reservation" }, {
                            default: withCtx(() => [
                              createTextVNode("\u0411\u0440\u043E\u043D\u044C")
                            ]),
                            _: 1
                          })
                        ])
                      ])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_UiCardContent, null, {
                default: withCtx(() => [
                  createVNode("div", { class: "flex gap-4 w-full" }, [
                    createVNode("div", { class: "flex flex-col gap-5 w-full" }, [
                      createVNode("div", { class: "relative" }, [
                        createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1" }, {
                          default: withCtx(() => [
                            createTextVNode("\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UiInput, {
                          modelValue: unref(dealData).title,
                          "onUpdate:modelValue": ($event) => unref(dealData).title = $event,
                          placeholder: "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435",
                          class: "col-span-3"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      createVNode("div", { class: "relative" }, [
                        createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1" }, {
                          default: withCtx(() => [
                            createTextVNode("\u0414\u0430\u0442\u0430 \u043F\u0440\u043E\u0434\u0430\u0436\u0438")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UiInput, {
                          modelValue: unref(dealData).saleDate,
                          "onUpdate:modelValue": ($event) => unref(dealData).saleDate = $event,
                          type: "date",
                          min: (/* @__PURE__ */ new Date()).toISOString().slice(0, 7) + "-01",
                          class: unref(dealData).saleDate ? "" : "outline-1 outline-rose-300"
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "min", "class"])
                      ]),
                      createVNode("div", { class: "relative" }, [
                        createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1" }, {
                          default: withCtx(() => [
                            createTextVNode("\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UiInput, {
                          modelValue: unref(dealData).price,
                          "onUpdate:modelValue": ($event) => unref(dealData).price = $event,
                          type: "number",
                          placeholder: "\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C",
                          class: "col-span-3"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      unref(dealData).groupId !== 16 && unref(dealData).groupId !== 19 ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: "relative"
                      }, [
                        unref(dealData).discont ? (openBlock(), createBlock(_component_UiLabel, {
                          key: 0,
                          class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1"
                        }, {
                          default: withCtx(() => [
                            createTextVNode("\u0421\u043A\u0438\u0434\u043A\u0430")
                          ]),
                          _: 1
                        })) : createCommentVNode("", true),
                        createVNode("div", {
                          class: unref(dealData).discont ? "" : "outline-1 outline-rose-300 rounded-md"
                        }, [
                          createVNode(_component_UiSelect, {
                            modelValue: unref(dealData).discont,
                            "onUpdate:modelValue": ($event) => unref(dealData).discont = $event
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_UiSelectTrigger, null, {
                                default: withCtx(() => [
                                  createVNode(_component_UiSelectValue, { placeholder: "\u0421\u043A\u0438\u0434\u043A\u0430" })
                                ]),
                                _: 1
                              }),
                              createVNode(_component_UiSelectContent, null, {
                                default: withCtx(() => [
                                  (openBlock(), createBlock(Fragment, null, renderList(disconts, (item, i) => {
                                    return createVNode(_component_UiSelectGroup, { key: i }, {
                                      default: withCtx(() => [
                                        createVNode(_component_UiSelectItem, { value: item }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(item), 1)
                                          ]),
                                          _: 2
                                        }, 1032, ["value"])
                                      ]),
                                      _: 2
                                    }, 1024);
                                  }), 64))
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }, 8, ["modelValue", "onUpdate:modelValue"])
                        ], 2)
                      ])) : createCommentVNode("", true),
                      unref(dealData).groupId === 16 ? (openBlock(), createBlock("div", {
                        key: 1,
                        class: "relative"
                      }, [
                        createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1" }, {
                          default: withCtx(() => [
                            createTextVNode("\u0421\u043A\u0438\u0434\u043A\u0430")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UiInput, {
                          modelValue: unref(dealData).discontAmount,
                          "onUpdate:modelValue": ($event) => unref(dealData).discontAmount = $event,
                          type: "number",
                          placeholder: "\u0421\u043A\u0438\u0434\u043A\u0430",
                          class: unref(dealData).discontAmount ? "" : "outline-1 outline-rose-300"
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "class"])
                      ])) : createCommentVNode("", true),
                      unref(dealData).groupId !== 19 ? (openBlock(), createBlock("div", {
                        key: 2,
                        class: "relative"
                      }, [
                        createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                          default: withCtx(() => [
                            createTextVNode("\u0414\u0430\u0442\u0430 \u043F\u0440\u0435\u0437\u0435\u043D\u0442\u0430\u0446\u0438\u0438 \u043C\u0430\u043A\u0435\u0442\u0430")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UiInput, {
                          modelValue: unref(dealData).maketPresentation,
                          "onUpdate:modelValue": ($event) => unref(dealData).maketPresentation = $event,
                          type: "date",
                          placeholder: "dsad",
                          class: unref(dealData).maketPresentation ? "" : "outline-1 outline-rose-300"
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "class"])
                      ])) : createCommentVNode("", true),
                      unref(dealData).groupId !== 16 && unref(dealData).groupId !== 19 ? (openBlock(), createBlock("div", {
                        key: 3,
                        class: "relative"
                      }, [
                        unref(dealData).maketType ? (openBlock(), createBlock(_component_UiLabel, {
                          key: 0,
                          class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1"
                        }, {
                          default: withCtx(() => [
                            createTextVNode("\u0422\u0438\u043F \u043C\u0430\u043A\u0435\u0442\u0430")
                          ]),
                          _: 1
                        })) : createCommentVNode("", true),
                        createVNode("div", {
                          class: unref(dealData).maketType ? "" : "outline-1 outline-rose-300 rounded-md"
                        }, [
                          createVNode(_component_UiSelect, {
                            modelValue: unref(dealData).maketType,
                            "onUpdate:modelValue": ($event) => unref(dealData).maketType = $event
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_UiSelectTrigger, null, {
                                default: withCtx(() => [
                                  createVNode(_component_UiSelectValue, { placeholder: "\u0422\u0438\u043F \u043C\u0430\u043A\u0435\u0442\u0430" })
                                ]),
                                _: 1
                              }),
                              createVNode(_component_UiSelectContent, null, {
                                default: withCtx(() => [
                                  (openBlock(), createBlock(Fragment, null, renderList(maketTypes, (item, i) => {
                                    return createVNode(_component_UiSelectGroup, { key: i }, {
                                      default: withCtx(() => [
                                        createVNode(_component_UiSelectItem, { value: item }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(item), 1)
                                          ]),
                                          _: 2
                                        }, 1032, ["value"])
                                      ]),
                                      _: 2
                                    }, 1024);
                                  }), 64))
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }, 8, ["modelValue", "onUpdate:modelValue"])
                        ], 2)
                      ])) : createCommentVNode("", true),
                      unref(dealData).groupId === 16 ? (openBlock(), createBlock("div", {
                        key: 4,
                        class: "relative"
                      }, [
                        unref(dealData).courseType ? (openBlock(), createBlock(_component_UiLabel, {
                          key: 0,
                          class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1"
                        }, {
                          default: withCtx(() => [
                            createTextVNode("\u0422\u0438\u043F \u043A\u0443\u0440\u0441\u0430")
                          ]),
                          _: 1
                        })) : createCommentVNode("", true),
                        createVNode("div", {
                          class: unref(dealData).courseType ? "" : "outline-1 outline-rose-300 rounded-md"
                        }, [
                          createVNode(_component_UiSelect, {
                            modelValue: unref(dealData).courseType,
                            "onUpdate:modelValue": ($event) => unref(dealData).courseType = $event
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_UiSelectTrigger, null, {
                                default: withCtx(() => [
                                  createVNode(_component_UiSelectValue, { placeholder: "\u0422\u0438\u043F \u043A\u0443\u0440\u0441\u0430" })
                                ]),
                                _: 1
                              }),
                              createVNode(_component_UiSelectContent, null, {
                                default: withCtx(() => [
                                  (openBlock(), createBlock(Fragment, null, renderList(courseTypes, (item, i) => {
                                    return createVNode(_component_UiSelectGroup, { key: i }, {
                                      default: withCtx(() => [
                                        createVNode(_component_UiSelectItem, { value: item }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(item), 1)
                                          ]),
                                          _: 2
                                        }, 1032, ["value"])
                                      ]),
                                      _: 2
                                    }, 1024);
                                  }), 64))
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }, 8, ["modelValue", "onUpdate:modelValue"])
                        ], 2)
                      ])) : createCommentVNode("", true),
                      createVNode("div", { class: "relative" }, [
                        createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1" }, {
                          default: withCtx(() => [
                            createTextVNode("id \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0438 \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0441\u0442\u0432\u0430")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UiInput, {
                          modelValue: unref(dealData).card_id,
                          "onUpdate:modelValue": ($event) => unref(dealData).card_id = $event,
                          placeholder: "id \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0438 \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0441\u0442\u0432\u0430",
                          class: "col-span-3"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      unref(dealData).groupId === 19 ? (openBlock(), createBlock("div", {
                        key: 5,
                        class: "relative"
                      }, [
                        unref(dealData).bookSize ? (openBlock(), createBlock(_component_UiLabel, {
                          key: 0,
                          class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1"
                        }, {
                          default: withCtx(() => [
                            createTextVNode("\u0420\u0430\u0437\u043C\u0435\u0440 \u0444\u043E\u0442\u043E\u043A\u043D\u0438\u0433\u0438")
                          ]),
                          _: 1
                        })) : createCommentVNode("", true),
                        createVNode("div", {
                          class: unref(dealData).bookSize ? "" : "outline-1 outline-rose-300 rounded-md "
                        }, [
                          createVNode(_component_UiSelect, {
                            modelValue: unref(dealData).bookSize,
                            "onUpdate:modelValue": ($event) => unref(dealData).bookSize = $event
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_UiSelectTrigger, null, {
                                default: withCtx(() => [
                                  createVNode(_component_UiSelectValue, { placeholder: "\u0420\u0430\u0437\u043C\u0435\u0440 \u0444\u043E\u0442\u043E\u043A\u043D\u0438\u0433\u0438" })
                                ]),
                                _: 1
                              }),
                              createVNode(_component_UiSelectContent, null, {
                                default: withCtx(() => [
                                  (openBlock(), createBlock(Fragment, null, renderList(bookSizes, (item, i) => {
                                    return createVNode(_component_UiSelectGroup, { key: i }, {
                                      default: withCtx(() => [
                                        createVNode(_component_UiSelectItem, { value: item }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(item), 1)
                                          ]),
                                          _: 2
                                        }, 1032, ["value"])
                                      ]),
                                      _: 2
                                    }, 1024);
                                  }), 64))
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }, 8, ["modelValue", "onUpdate:modelValue"])
                        ], 2)
                      ])) : createCommentVNode("", true),
                      unref(dealData).groupId === 19 ? (openBlock(), createBlock("div", {
                        key: 6,
                        class: "relative"
                      }, [
                        unref(dealData).pageType ? (openBlock(), createBlock(_component_UiLabel, {
                          key: 0,
                          class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1"
                        }, {
                          default: withCtx(() => [
                            createTextVNode("\u0421\u0442\u0440\u0430\u043D\u0438\u0446\u044B")
                          ]),
                          _: 1
                        })) : createCommentVNode("", true),
                        createVNode("div", {
                          class: unref(dealData).pageType ? "" : "outline-1 outline-rose-300 rounded-md "
                        }, [
                          createVNode(_component_UiSelect, {
                            modelValue: unref(dealData).pageType,
                            "onUpdate:modelValue": ($event) => unref(dealData).pageType = $event
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_UiSelectTrigger, null, {
                                default: withCtx(() => [
                                  createVNode(_component_UiSelectValue, { placeholder: "\u0421\u0442\u0440\u0430\u043D\u0438\u0446\u044B" })
                                ]),
                                _: 1
                              }),
                              createVNode(_component_UiSelectContent, null, {
                                default: withCtx(() => [
                                  (openBlock(), createBlock(Fragment, null, renderList(pageTypes, (item, i) => {
                                    return createVNode(_component_UiSelectGroup, { key: i }, {
                                      default: withCtx(() => [
                                        createVNode(_component_UiSelectItem, { value: item }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(item), 1)
                                          ]),
                                          _: 2
                                        }, 1032, ["value"])
                                      ]),
                                      _: 2
                                    }, 1024);
                                  }), 64))
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }, 8, ["modelValue", "onUpdate:modelValue"])
                        ], 2)
                      ])) : createCommentVNode("", true),
                      unref(dealData).groupId === 19 ? (openBlock(), createBlock("div", {
                        key: 7,
                        class: "relative"
                      }, [
                        createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                          default: withCtx(() => [
                            createTextVNode("\u0420\u0430\u0437\u0432\u043E\u0440\u043E\u0442\u044B")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UiInput, {
                          modelValue: unref(dealData).pages,
                          "onUpdate:modelValue": ($event) => unref(dealData).pages = $event,
                          type: "number",
                          placeholder: "\u0420\u0430\u0437\u0432\u043E\u0440\u043E\u0442\u044B",
                          class: unref(dealData).pages ? "" : "outline-1 outline-rose-300"
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "class"])
                      ])) : createCommentVNode("", true)
                    ]),
                    createVNode("div", { class: "flex flex-col gap-5 w-full" }, [
                      createVNode("div", { class: "relative" }, [
                        createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1" }, {
                          default: withCtx(() => [
                            createTextVNode("\u0421\u043F\u043E\u0441\u043E\u0431 \u0437\u0430\u043A\u0440\u044B\u0442\u0438\u044F")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_MyCombobox, {
                          items: _ctx.dealSubDatas.methods,
                          label: unref(dealData).clothingMethod,
                          onSelectedItem: (value) => unref(dealData).clothingMethod = value
                        }, null, 8, ["items", "label", "onSelectedItem"])
                      ]),
                      createVNode("div", { class: "relative" }, [
                        createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1" }, {
                          default: withCtx(() => [
                            createTextVNode("\u0418\u0441\u0442\u043E\u0447\u043D\u0438\u043A \u0441\u0434\u0435\u043B\u043A\u0438")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_MyCombobox, {
                          items: _ctx.dealSubDatas.sources,
                          label: unref(dealData).source,
                          onSelectedItem: (value) => unref(dealData).source = value
                        }, null, 8, ["items", "label", "onSelectedItem"])
                      ]),
                      createVNode("div", { class: "relative" }, [
                        createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1" }, {
                          default: withCtx(() => [
                            createTextVNode("\u0422\u0415\u0413")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_MyCombobox, {
                          items: _ctx.dealSubDatas.adTags,
                          label: unref(dealData).adTag,
                          onSelectedItem: (value) => unref(dealData).adTag = value
                        }, null, 8, ["items", "label", "onSelectedItem"])
                      ]),
                      createVNode("div", { class: "relative" }, [
                        createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1" }, {
                          default: withCtx(() => [
                            createTextVNode("\u0421\u0444\u0435\u0440\u0430")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_MyCombobox, {
                          items: _ctx.dealSubDatas.spheres,
                          label: unref(dealData).sphere,
                          onSelectedItem: (value) => unref(dealData).sphere = value
                        }, null, 8, ["items", "label", "onSelectedItem"])
                      ]),
                      createVNode("div", { class: "relative" }, [
                        unref(dealData).city !== "" ? (openBlock(), createBlock(_component_UiLabel, {
                          key: 0,
                          class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1"
                        }, {
                          default: withCtx(() => [
                            createTextVNode("\u0413\u043E\u0440\u043E\u0434")
                          ]),
                          _: 1
                        })) : createCommentVNode("", true),
                        createVNode(_component_UiInput, {
                          modelValue: unref(dealData).city,
                          "onUpdate:modelValue": ($event) => unref(dealData).city = $event,
                          placeholder: "\u0413\u043E\u0440\u043E\u0434",
                          class: "col-span-3"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      createVNode("div", { class: "relative" }, [
                        unref(dealData).region !== "" ? (openBlock(), createBlock(_component_UiLabel, {
                          key: 0,
                          class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1"
                        }, {
                          default: withCtx(() => [
                            createTextVNode("\u0420\u0435\u0433\u0438\u043E\u043D/\u041E\u0431\u043B\u0430\u0441\u0442\u044C")
                          ]),
                          _: 1
                        })) : createCommentVNode("", true),
                        createVNode(_component_UiInput, {
                          modelValue: unref(dealData).region,
                          "onUpdate:modelValue": ($event) => unref(dealData).region = $event,
                          placeholder: "\u0420\u0435\u0433\u0438\u043E\u043D/\u041E\u0431\u043B\u0430\u0441\u0442\u044C",
                          class: "col-span-3"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _ctx.deal.client.chatLink.includes("easyneon.amocrm.ru") ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: "relative"
                      }, [
                        createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1" }, {
                          default: withCtx(() => [
                            createTextVNode("\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F")
                          ]),
                          _: 1
                        }),
                        createVNode("div", null, [
                          createVNode(_component_UiSelect, {
                            modelValue: unref(dealData).category,
                            "onUpdate:modelValue": ($event) => unref(dealData).category = $event
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_UiSelectTrigger, null, {
                                default: withCtx(() => [
                                  createVNode(_component_UiSelectValue, { placeholder: "\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F" })
                                ]),
                                _: 1
                              }),
                              createVNode(_component_UiSelectContent, null, {
                                default: withCtx(() => [
                                  (openBlock(), createBlock(Fragment, null, renderList(categories, (item, i) => {
                                    return createVNode(_component_UiSelectGroup, { key: i }, {
                                      default: withCtx(() => [
                                        createVNode(_component_UiSelectItem, { value: item }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(item), 1)
                                          ]),
                                          _: 2
                                        }, 1032, ["value"])
                                      ]),
                                      _: 2
                                    }, 1024);
                                  }), 64))
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }, 8, ["modelValue", "onUpdate:modelValue"])
                        ])
                      ])) : createCommentVNode("", true)
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
    };
  }
});
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/my/deals/EditDealForm.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "EditDealModal",
  __ssrInlineRender: true,
  props: {
    deal: {}
  },
  emits: ["isDealEdited", "isDealDeleted"],
  setup(__props, { emit: __emit }) {
    const { $useApi } = useNuxtApp();
    const props = __props;
    const { filters, loadDealsDatas, isLoaded } = useDealsDatas();
    const dealData = ref({ ...props.deal });
    const dealSubDatas = computed(() => {
      var _a, _b, _c, _d;
      return {
        adTags: (_a = filters.value.adTags) != null ? _a : [],
        methods: (_b = filters.value.methods) != null ? _b : [],
        sources: (_c = filters.value.sources) != null ? _c : [],
        spheres: (_d = filters.value.spheres) != null ? _d : []
      };
    });
    const isOpen = ref(false);
    const clientChatLink = ref("");
    const foundClient = ref(null);
    const isSearchingClient = ref(false);
    const searchClient = useDebounceFn(async (link) => {
      var _a, _b;
      if (!link || link === ((_a = props.deal.client) == null ? void 0 : _a.chatLink)) {
        foundClient.value = null;
        dealData.value.clientId = (_b = props.deal.client) == null ? void 0 : _b.id;
        return;
      }
      isSearchingClient.value = true;
      try {
        const { data: fetchedData } = await $useApi.get(
          "/clients",
          {
            params: { chatLink: link }
          }
        );
        if (fetchedData && fetchedData.length > 0) {
          foundClient.value = fetchedData[0];
          dealData.value.clientId = fetchedData[0].id;
        } else {
          foundClient.value = null;
        }
      } catch (error) {
        console.error("\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u0440\u0438 \u043F\u043E\u0438\u0441\u043A\u0435 \u043A\u043B\u0438\u0435\u043D\u0442\u0430:", error);
        foundClient.value = null;
      } finally {
        isSearchingClient.value = false;
      }
    }, 500);
    watch(clientChatLink, (newLink) => {
      searchClient(newLink.trim());
    });
    const ensureDealSubDatas = async () => {
      if (!isLoaded.value) {
        await loadDealsDatas();
      }
    };
    watch(
      () => props.deal,
      (newDeal) => {
        if (!isOpen.value) {
          dealData.value = { ...newDeal };
        }
      },
      { deep: true }
    );
    watch(isOpen, async (open) => {
      var _a, _b, _c;
      if (open) {
        await ensureDealSubDatas();
        dealData.value = { ...props.deal };
        dealData.value.clientId = (_a = props.deal.client) == null ? void 0 : _a.id;
        clientChatLink.value = (_c = (_b = props.deal.client) == null ? void 0 : _b.chatLink) != null ? _c : "";
        foundClient.value = null;
      }
    });
    const emit = __emit;
    const editDeal = async () => {
      try {
        await $useApi.patch(`/deals/${props.deal.id}`, dealData.value);
        console.log(dealData.value);
        console.log("success!!");
        emit("isDealEdited");
        return isOpen.value = false;
      } catch (e) {
        console.log(e);
      }
    };
    const deleteDeal = async () => {
      try {
        await $useApi.delete(`/deals/${props.deal.id}`, {
          // method: 'delete',
        });
        console.log("success!!");
        emit("isDealDeleted");
        return isOpen.value = false;
      } catch (e) {
        console.log(e);
      }
    };
    const updateDealData = (data) => {
      dealData.value = { ...data };
      return;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiDialog = _sfc_main$4$1;
      const _component_UiDialogTrigger = _sfc_main$3$1;
      const _component_UiButton = _sfc_main$j;
      const _component_Icon = __nuxt_component_0$1;
      const _component_UiDialogContent = _sfc_main$l;
      const _component_UiDialogHeader = _sfc_main$2$1;
      const _component_UiDialogTitle = _sfc_main$1$2;
      const _component_UiDialogDescription = _sfc_main$m;
      const _component_MyDealsEditDealForm = _sfc_main$9;
      const _component_UiLabel = _sfc_main$p;
      const _component_UiInput = _sfc_main$q;
      const _component_UiDialogFooter = _sfc_main$o;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_UiDialog, {
        open: isOpen.value,
        "onUpdate:open": ($event) => isOpen.value = $event
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UiDialogTrigger, { "as-child": "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UiButton, {
                    class: "h-7 w-7 gap-1",
                    size: "icon"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_Icon, {
                          name: "mingcute:edit-line",
                          color: "white",
                          size: "25px"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_Icon, {
                            name: "mingcute:edit-line",
                            color: "white",
                            size: "25px"
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UiButton, {
                      class: "h-7 w-7 gap-1",
                      size: "icon"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_Icon, {
                          name: "mingcute:edit-line",
                          color: "white",
                          size: "25px"
                        })
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UiDialogContent, { class: "max-w-[700px] flex flex-col" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                var _a, _b;
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UiDialogHeader, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UiDialogTitle, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u0441\u0434\u0435\u043B\u043A\u0438`);
                            } else {
                              return [
                                createTextVNode("\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u0441\u0434\u0435\u043B\u043A\u0438")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_UiDialogDescription, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` \u0417\u0430\u043F\u043E\u043B\u043D\u0438 \u0432\u0441\u0435 \u043F\u043E\u043B\u044F \u0438 \u043D\u0430\u0436\u043C\u0438 &quot;\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C&quot; `);
                            } else {
                              return [
                                createTextVNode(' \u0417\u0430\u043F\u043E\u043B\u043D\u0438 \u0432\u0441\u0435 \u043F\u043E\u043B\u044F \u0438 \u043D\u0430\u0436\u043C\u0438 "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C" ')
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_UiDialogTitle, null, {
                            default: withCtx(() => [
                              createTextVNode("\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u0441\u0434\u0435\u043B\u043A\u0438")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UiDialogDescription, null, {
                            default: withCtx(() => [
                              createTextVNode(' \u0417\u0430\u043F\u043E\u043B\u043D\u0438 \u0432\u0441\u0435 \u043F\u043E\u043B\u044F \u0438 \u043D\u0430\u0436\u043C\u0438 "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C" ')
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<div class="flex gap-4"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_MyDealsEditDealForm, {
                    deal: _ctx.deal,
                    "deal-sub-datas": dealSubDatas.value,
                    onDealDataChanged: updateDealData
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div class="flex flex-col gap-2"${_scopeId2}><div class="relative"${_scopeId2}>`);
                  if (dealData.value.client) {
                    _push3(ssrRenderComponent(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`\u041A\u043B\u0438\u0435\u043D\u0442 - ${ssrInterpolate(dealData.value.client.fullName)}`);
                        } else {
                          return [
                            createTextVNode("\u041A\u043B\u0438\u0435\u043D\u0442 - " + toDisplayString(dealData.value.client.fullName), 1)
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(ssrRenderComponent(_component_UiInput, {
                    modelValue: clientChatLink.value,
                    "onUpdate:modelValue": ($event) => clientChatLink.value = $event,
                    placeholder: "\u0421\u0441\u044B\u043B\u043A\u0430 \u043D\u0430 \u0447\u0430\u0442 \u043A\u043B\u0438\u0435\u043D\u0442\u0430"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div>`);
                  if (isSearchingClient.value) {
                    _push3(`<div class="flex items-center gap-2 text-sm text-slate-500"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_Icon, {
                      name: "svg-spinners:ring-resize",
                      size: "16"
                    }, null, _parent3, _scopeId2));
                    _push3(`<span${_scopeId2}>\u041F\u043E\u0438\u0441\u043A \u043A\u043B\u0438\u0435\u043D\u0442\u0430...</span></div>`);
                  } else if (foundClient.value) {
                    _push3(`<div class="flex items-center gap-2 p-2 bg-blue-50 border border-blue-200 rounded-md text-sm text-blue-700"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_Icon, {
                      name: "mdi:information-outline",
                      size: "18"
                    }, null, _parent3, _scopeId2));
                    _push3(`<span${_scopeId2}> \u041A\u043B\u0438\u0435\u043D\u0442 \u0431\u0443\u0434\u0435\u0442 \u0438\u0437\u043C\u0435\u043D\u0451\u043D \u043D\u0430: <strong${_scopeId2}>${ssrInterpolate(foundClient.value.fullName)}</strong>`);
                    if (foundClient.value.phone) {
                      _push3(`<span class="text-blue-500"${_scopeId2}>(${ssrInterpolate(foundClient.value.phone)})</span>`);
                    } else {
                      _push3(`<!---->`);
                    }
                    _push3(`</span></div>`);
                  } else if (clientChatLink.value && clientChatLink.value !== ((_a = props.deal.client) == null ? void 0 : _a.chatLink)) {
                    _push3(`<div class="flex items-center gap-2 p-2 bg-amber-50 border border-amber-200 rounded-md text-sm text-amber-700"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_Icon, {
                      name: "mdi:alert-outline",
                      size: "18"
                    }, null, _parent3, _scopeId2));
                    _push3(`<span${_scopeId2}>\u041A\u043B\u0438\u0435\u043D\u0442 \u0441 \u0442\u0430\u043A\u043E\u0439 \u0441\u0441\u044B\u043B\u043A\u043E\u0439 \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D \u0432 \u0441\u0438\u0441\u0442\u0435\u043C\u0435, \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044F \u043D\u0435 \u0431\u0443\u0434\u0443\u0442 \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u044B </span></div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`</div>`);
                  _push3(ssrRenderComponent(_component_UiDialogFooter, { class: "w-full" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="flex justify-between w-full"${_scopeId3}>`);
                        _push4(ssrRenderComponent(_component_UiButton, { onClick: deleteDeal }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` \u0423\u0434\u0430\u043B\u0438\u0442\u044C `);
                            } else {
                              return [
                                createTextVNode(" \u0423\u0434\u0430\u043B\u0438\u0442\u044C ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_UiButton, { onClick: editDeal }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` \u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C `);
                            } else {
                              return [
                                createTextVNode(" \u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`</div>`);
                      } else {
                        return [
                          createVNode("div", { class: "flex justify-between w-full" }, [
                            createVNode(_component_UiButton, { onClick: deleteDeal }, {
                              default: withCtx(() => [
                                createTextVNode(" \u0423\u0434\u0430\u043B\u0438\u0442\u044C ")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_UiButton, { onClick: editDeal }, {
                              default: withCtx(() => [
                                createTextVNode(" \u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C ")
                              ]),
                              _: 1
                            })
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UiDialogHeader, null, {
                      default: withCtx(() => [
                        createVNode(_component_UiDialogTitle, null, {
                          default: withCtx(() => [
                            createTextVNode("\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u0441\u0434\u0435\u043B\u043A\u0438")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UiDialogDescription, null, {
                          default: withCtx(() => [
                            createTextVNode(' \u0417\u0430\u043F\u043E\u043B\u043D\u0438 \u0432\u0441\u0435 \u043F\u043E\u043B\u044F \u0438 \u043D\u0430\u0436\u043C\u0438 "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C" ')
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode("div", { class: "flex gap-4" }, [
                      createVNode(_component_MyDealsEditDealForm, {
                        deal: _ctx.deal,
                        "deal-sub-datas": dealSubDatas.value,
                        onDealDataChanged: updateDealData
                      }, null, 8, ["deal", "deal-sub-datas"])
                    ]),
                    createVNode("div", { class: "flex flex-col gap-2" }, [
                      createVNode("div", { class: "relative" }, [
                        dealData.value.client ? (openBlock(), createBlock(_component_UiLabel, {
                          key: 0,
                          class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1"
                        }, {
                          default: withCtx(() => [
                            createTextVNode("\u041A\u043B\u0438\u0435\u043D\u0442 - " + toDisplayString(dealData.value.client.fullName), 1)
                          ]),
                          _: 1
                        })) : createCommentVNode("", true),
                        createVNode(_component_UiInput, {
                          modelValue: clientChatLink.value,
                          "onUpdate:modelValue": ($event) => clientChatLink.value = $event,
                          placeholder: "\u0421\u0441\u044B\u043B\u043A\u0430 \u043D\u0430 \u0447\u0430\u0442 \u043A\u043B\u0438\u0435\u043D\u0442\u0430"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      isSearchingClient.value ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: "flex items-center gap-2 text-sm text-slate-500"
                      }, [
                        createVNode(_component_Icon, {
                          name: "svg-spinners:ring-resize",
                          size: "16"
                        }),
                        createVNode("span", null, "\u041F\u043E\u0438\u0441\u043A \u043A\u043B\u0438\u0435\u043D\u0442\u0430...")
                      ])) : foundClient.value ? (openBlock(), createBlock("div", {
                        key: 1,
                        class: "flex items-center gap-2 p-2 bg-blue-50 border border-blue-200 rounded-md text-sm text-blue-700"
                      }, [
                        createVNode(_component_Icon, {
                          name: "mdi:information-outline",
                          size: "18"
                        }),
                        createVNode("span", null, [
                          createTextVNode(" \u041A\u043B\u0438\u0435\u043D\u0442 \u0431\u0443\u0434\u0435\u0442 \u0438\u0437\u043C\u0435\u043D\u0451\u043D \u043D\u0430: "),
                          createVNode("strong", null, toDisplayString(foundClient.value.fullName), 1),
                          foundClient.value.phone ? (openBlock(), createBlock("span", {
                            key: 0,
                            class: "text-blue-500"
                          }, "(" + toDisplayString(foundClient.value.phone) + ")", 1)) : createCommentVNode("", true)
                        ])
                      ])) : clientChatLink.value && clientChatLink.value !== ((_b = props.deal.client) == null ? void 0 : _b.chatLink) ? (openBlock(), createBlock("div", {
                        key: 2,
                        class: "flex items-center gap-2 p-2 bg-amber-50 border border-amber-200 rounded-md text-sm text-amber-700"
                      }, [
                        createVNode(_component_Icon, {
                          name: "mdi:alert-outline",
                          size: "18"
                        }),
                        createVNode("span", null, "\u041A\u043B\u0438\u0435\u043D\u0442 \u0441 \u0442\u0430\u043A\u043E\u0439 \u0441\u0441\u044B\u043B\u043A\u043E\u0439 \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D \u0432 \u0441\u0438\u0441\u0442\u0435\u043C\u0435, \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044F \u043D\u0435 \u0431\u0443\u0434\u0443\u0442 \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u044B ")
                      ])) : createCommentVNode("", true)
                    ]),
                    createVNode(_component_UiDialogFooter, { class: "w-full" }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "flex justify-between w-full" }, [
                          createVNode(_component_UiButton, { onClick: deleteDeal }, {
                            default: withCtx(() => [
                              createTextVNode(" \u0423\u0434\u0430\u043B\u0438\u0442\u044C ")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UiButton, { onClick: editDeal }, {
                            default: withCtx(() => [
                              createTextVNode(" \u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C ")
                            ]),
                            _: 1
                          })
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
              createVNode(_component_UiDialogTrigger, { "as-child": "" }, {
                default: withCtx(() => [
                  createVNode(_component_UiButton, {
                    class: "h-7 w-7 gap-1",
                    size: "icon"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_Icon, {
                        name: "mingcute:edit-line",
                        color: "white",
                        size: "25px"
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_UiDialogContent, { class: "max-w-[700px] flex flex-col" }, {
                default: withCtx(() => {
                  var _a;
                  return [
                    createVNode(_component_UiDialogHeader, null, {
                      default: withCtx(() => [
                        createVNode(_component_UiDialogTitle, null, {
                          default: withCtx(() => [
                            createTextVNode("\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u0441\u0434\u0435\u043B\u043A\u0438")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UiDialogDescription, null, {
                          default: withCtx(() => [
                            createTextVNode(' \u0417\u0430\u043F\u043E\u043B\u043D\u0438 \u0432\u0441\u0435 \u043F\u043E\u043B\u044F \u0438 \u043D\u0430\u0436\u043C\u0438 "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C" ')
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode("div", { class: "flex gap-4" }, [
                      createVNode(_component_MyDealsEditDealForm, {
                        deal: _ctx.deal,
                        "deal-sub-datas": dealSubDatas.value,
                        onDealDataChanged: updateDealData
                      }, null, 8, ["deal", "deal-sub-datas"])
                    ]),
                    createVNode("div", { class: "flex flex-col gap-2" }, [
                      createVNode("div", { class: "relative" }, [
                        dealData.value.client ? (openBlock(), createBlock(_component_UiLabel, {
                          key: 0,
                          class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1"
                        }, {
                          default: withCtx(() => [
                            createTextVNode("\u041A\u043B\u0438\u0435\u043D\u0442 - " + toDisplayString(dealData.value.client.fullName), 1)
                          ]),
                          _: 1
                        })) : createCommentVNode("", true),
                        createVNode(_component_UiInput, {
                          modelValue: clientChatLink.value,
                          "onUpdate:modelValue": ($event) => clientChatLink.value = $event,
                          placeholder: "\u0421\u0441\u044B\u043B\u043A\u0430 \u043D\u0430 \u0447\u0430\u0442 \u043A\u043B\u0438\u0435\u043D\u0442\u0430"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      isSearchingClient.value ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: "flex items-center gap-2 text-sm text-slate-500"
                      }, [
                        createVNode(_component_Icon, {
                          name: "svg-spinners:ring-resize",
                          size: "16"
                        }),
                        createVNode("span", null, "\u041F\u043E\u0438\u0441\u043A \u043A\u043B\u0438\u0435\u043D\u0442\u0430...")
                      ])) : foundClient.value ? (openBlock(), createBlock("div", {
                        key: 1,
                        class: "flex items-center gap-2 p-2 bg-blue-50 border border-blue-200 rounded-md text-sm text-blue-700"
                      }, [
                        createVNode(_component_Icon, {
                          name: "mdi:information-outline",
                          size: "18"
                        }),
                        createVNode("span", null, [
                          createTextVNode(" \u041A\u043B\u0438\u0435\u043D\u0442 \u0431\u0443\u0434\u0435\u0442 \u0438\u0437\u043C\u0435\u043D\u0451\u043D \u043D\u0430: "),
                          createVNode("strong", null, toDisplayString(foundClient.value.fullName), 1),
                          foundClient.value.phone ? (openBlock(), createBlock("span", {
                            key: 0,
                            class: "text-blue-500"
                          }, "(" + toDisplayString(foundClient.value.phone) + ")", 1)) : createCommentVNode("", true)
                        ])
                      ])) : clientChatLink.value && clientChatLink.value !== ((_a = props.deal.client) == null ? void 0 : _a.chatLink) ? (openBlock(), createBlock("div", {
                        key: 2,
                        class: "flex items-center gap-2 p-2 bg-amber-50 border border-amber-200 rounded-md text-sm text-amber-700"
                      }, [
                        createVNode(_component_Icon, {
                          name: "mdi:alert-outline",
                          size: "18"
                        }),
                        createVNode("span", null, "\u041A\u043B\u0438\u0435\u043D\u0442 \u0441 \u0442\u0430\u043A\u043E\u0439 \u0441\u0441\u044B\u043B\u043A\u043E\u0439 \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D \u0432 \u0441\u0438\u0441\u0442\u0435\u043C\u0435, \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044F \u043D\u0435 \u0431\u0443\u0434\u0443\u0442 \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u044B ")
                      ])) : createCommentVNode("", true)
                    ]),
                    createVNode(_component_UiDialogFooter, { class: "w-full" }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "flex justify-between w-full" }, [
                          createVNode(_component_UiButton, { onClick: deleteDeal }, {
                            default: withCtx(() => [
                              createTextVNode(" \u0423\u0434\u0430\u043B\u0438\u0442\u044C ")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UiButton, { onClick: editDeal }, {
                            default: withCtx(() => [
                              createTextVNode(" \u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C ")
                            ]),
                            _: 1
                          })
                        ])
                      ]),
                      _: 1
                    })
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
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/my/deals/EditDealModal.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "Client",
  __ssrInlineRender: true,
  props: {
    client: {}
  },
  emits: ["clientDataChanged"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    ref(true);
    const defaultClient = { ...props.client };
    const clientData = ref(defaultClient);
    const emit = __emit;
    watch(
      clientData,
      () => {
        emit("clientDataChanged", clientData.value);
      },
      { deep: true }
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiCard = _sfc_main$b;
      const _component_UiCardHeader = _sfc_main$1$1;
      const _component_UiCardTitle = _sfc_main$c;
      const _component_UiCardContent = _sfc_main$f;
      const _component_UiLabel = _sfc_main$p;
      const _component_UiInput = _sfc_main$q;
      const _component_UiSelect = _sfc_main$6$1;
      const _component_UiSelectTrigger = _sfc_main$4$3;
      const _component_UiSelectValue = _sfc_main$5$2;
      const _component_UiSelectContent = _sfc_main$3$3;
      const _component_UiSelectGroup = _sfc_main$s;
      const _component_UiSelectItem = _sfc_main$2$3;
      const _component_UiSwitch = _sfc_main$v;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full h-full" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_UiCard, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UiCardHeader, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UiCardTitle, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`\u041A\u043B\u0438\u0435\u043D\u0442`);
                      } else {
                        return [
                          createTextVNode("\u041A\u043B\u0438\u0435\u043D\u0442")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UiCardTitle, null, {
                      default: withCtx(() => [
                        createTextVNode("\u041A\u043B\u0438\u0435\u043D\u0442")
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
                  _push3(`<div class="flex flex-col gap-4"${_scopeId2}><div class="relative"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`\u0421\u0441\u044B\u043B\u043A\u0430 \u043D\u0430 \u0447\u0430\u0442`);
                      } else {
                        return [
                          createTextVNode("\u0421\u0441\u044B\u043B\u043A\u0430 \u043D\u0430 \u0447\u0430\u0442")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UiInput, {
                    modelValue: unref(clientData).chatLink,
                    "onUpdate:modelValue": ($event) => unref(clientData).chatLink = $event,
                    placeholder: "\u0421\u0441\u044B\u043B\u043A\u0430 \u043D\u0430 \u0447\u0430\u0442",
                    class: "col-span-3"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div class="relative"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`\u0424\u0418\u041E`);
                      } else {
                        return [
                          createTextVNode("\u0424\u0418\u041E")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UiInput, {
                    modelValue: unref(clientData).fullName,
                    "onUpdate:modelValue": ($event) => unref(clientData).fullName = $event,
                    class: "col-span-3"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div class="relative"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`\u0422\u0435\u043B\u0435\u0444\u043E\u043D`);
                      } else {
                        return [
                          createTextVNode("\u0422\u0435\u043B\u0435\u0444\u043E\u043D")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UiInput, {
                    modelValue: unref(clientData).phone,
                    "onUpdate:modelValue": ($event) => unref(clientData).phone = $event,
                    placeholder: "\u0422\u0435\u043B\u0435\u0444\u043E\u043D",
                    class: "col-span-3"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div class="relative"${_scopeId2}>`);
                  if (unref(clientData).adLink !== "") {
                    _push3(ssrRenderComponent(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`\u0421\u0441\u044B\u043B\u043A\u0430 \u043D\u0430 \u043E\u0431\u044A\u044F\u0432\u043B\u0435\u043D\u0438\u0435`);
                        } else {
                          return [
                            createTextVNode("\u0421\u0441\u044B\u043B\u043A\u0430 \u043D\u0430 \u043E\u0431\u044A\u044F\u0432\u043B\u0435\u043D\u0438\u0435")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(ssrRenderComponent(_component_UiInput, {
                    modelValue: unref(clientData).adLink,
                    "onUpdate:modelValue": ($event) => unref(clientData).adLink = $event,
                    placeholder: "\u0421\u0441\u044B\u043B\u043A\u0430 \u043D\u0430 \u043E\u0431\u044A\u044F\u0432\u043B\u0435\u043D\u0438\u0435",
                    class: "col-span-3"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div class="relative"${_scopeId2}>`);
                  if (unref(clientData).inn !== "") {
                    _push3(ssrRenderComponent(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`\u0418\u041D\u041D`);
                        } else {
                          return [
                            createTextVNode("\u0418\u041D\u041D")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(ssrRenderComponent(_component_UiInput, {
                    modelValue: unref(clientData).inn,
                    "onUpdate:modelValue": ($event) => unref(clientData).inn = $event,
                    placeholder: "\u0418\u041D\u041D",
                    class: "col-span-3"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div class="flex items-center justify-center gap-1 justify-left relative"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`\u0414\u0430\u0442\u0430 \u043F\u0435\u0440\u0432\u043E\u0433\u043E \u043A\u043E\u043D\u0442\u0430\u043A\u0442\u0430`);
                      } else {
                        return [
                          createTextVNode("\u0414\u0430\u0442\u0430 \u043F\u0435\u0440\u0432\u043E\u0433\u043E \u043A\u043E\u043D\u0442\u0430\u043A\u0442\u0430")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UiInput, {
                    modelValue: unref(clientData).firstContact,
                    "onUpdate:modelValue": ($event) => unref(clientData).firstContact = $event,
                    type: "date",
                    class: unref(clientData).firstContact ? "" : "outline outline-1 outline-rose-300"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div class="relative"${_scopeId2}>`);
                  if (unref(clientData).type) {
                    _push3(ssrRenderComponent(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`\u0422\u0438\u043F \u043A\u043B\u0438\u0435\u043D\u0442\u0430`);
                        } else {
                          return [
                            createTextVNode("\u0422\u0438\u043F \u043A\u043B\u0438\u0435\u043D\u0442\u0430")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`<div${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UiSelect, {
                    modelValue: unref(clientData).type,
                    "onUpdate:modelValue": ($event) => unref(clientData).type = $event
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UiSelectTrigger, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_UiSelectValue, { placeholder: "\u0422\u0438\u043F \u043A\u043B\u0438\u0435\u043D\u0442\u0430" }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_UiSelectValue, { placeholder: "\u0422\u0438\u043F \u043A\u043B\u0438\u0435\u043D\u0442\u0430" })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_UiSelectContent, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_UiSelectGroup, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_UiSelectItem, { value: "\u0424\u0418\u0417" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(` \u0424\u0418\u0417 `);
                                        } else {
                                          return [
                                            createTextVNode(" \u0424\u0418\u0417 ")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_UiSelectItem, { value: "\u0418\u041F" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(` \u0418\u041F `);
                                        } else {
                                          return [
                                            createTextVNode(" \u0418\u041F ")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_UiSelectItem, { value: "\u041E\u041E\u041E" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(` \u041E\u041E\u041E `);
                                        } else {
                                          return [
                                            createTextVNode(" \u041E\u041E\u041E ")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_UiSelectItem, { value: "\u041D\u041A\u041E" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(` \u041D\u041A\u041E `);
                                        } else {
                                          return [
                                            createTextVNode(" \u041D\u041A\u041E ")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_UiSelectItem, { value: "\u0424\u0418\u0417" }, {
                                        default: withCtx(() => [
                                          createTextVNode(" \u0424\u0418\u0417 ")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_UiSelectItem, { value: "\u0418\u041F" }, {
                                        default: withCtx(() => [
                                          createTextVNode(" \u0418\u041F ")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_UiSelectItem, { value: "\u041E\u041E\u041E" }, {
                                        default: withCtx(() => [
                                          createTextVNode(" \u041E\u041E\u041E ")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_UiSelectItem, { value: "\u041D\u041A\u041E" }, {
                                        default: withCtx(() => [
                                          createTextVNode(" \u041D\u041A\u041E ")
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
                                createVNode(_component_UiSelectGroup, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_UiSelectItem, { value: "\u0424\u0418\u0417" }, {
                                      default: withCtx(() => [
                                        createTextVNode(" \u0424\u0418\u0417 ")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_UiSelectItem, { value: "\u0418\u041F" }, {
                                      default: withCtx(() => [
                                        createTextVNode(" \u0418\u041F ")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_UiSelectItem, { value: "\u041E\u041E\u041E" }, {
                                      default: withCtx(() => [
                                        createTextVNode(" \u041E\u041E\u041E ")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_UiSelectItem, { value: "\u041D\u041A\u041E" }, {
                                      default: withCtx(() => [
                                        createTextVNode(" \u041D\u041A\u041E ")
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
                          createVNode(_component_UiSelectTrigger, null, {
                            default: withCtx(() => [
                              createVNode(_component_UiSelectValue, { placeholder: "\u0422\u0438\u043F \u043A\u043B\u0438\u0435\u043D\u0442\u0430" })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UiSelectContent, null, {
                            default: withCtx(() => [
                              createVNode(_component_UiSelectGroup, null, {
                                default: withCtx(() => [
                                  createVNode(_component_UiSelectItem, { value: "\u0424\u0418\u0417" }, {
                                    default: withCtx(() => [
                                      createTextVNode(" \u0424\u0418\u0417 ")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_UiSelectItem, { value: "\u0418\u041F" }, {
                                    default: withCtx(() => [
                                      createTextVNode(" \u0418\u041F ")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_UiSelectItem, { value: "\u041E\u041E\u041E" }, {
                                    default: withCtx(() => [
                                      createTextVNode(" \u041E\u041E\u041E ")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_UiSelectItem, { value: "\u041D\u041A\u041E" }, {
                                    default: withCtx(() => [
                                      createTextVNode(" \u041D\u041A\u041E ")
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
                  _push3(`</div></div><div class="relative"${_scopeId2}>`);
                  if (unref(clientData).gender) {
                    _push3(ssrRenderComponent(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`\u041F\u043E\u043B \u043A\u043B\u0438\u0435\u043D\u0442\u0430`);
                        } else {
                          return [
                            createTextVNode("\u041F\u043E\u043B \u043A\u043B\u0438\u0435\u043D\u0442\u0430")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`<div${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UiSelect, {
                    modelValue: unref(clientData).gender,
                    "onUpdate:modelValue": ($event) => unref(clientData).gender = $event
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UiSelectTrigger, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_UiSelectValue, { placeholder: "\u041F\u043E\u043B \u043A\u043B\u0438\u0435\u043D\u0442\u0430" }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_UiSelectValue, { placeholder: "\u041F\u043E\u043B \u043A\u043B\u0438\u0435\u043D\u0442\u0430" })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_UiSelectContent, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_UiSelectGroup, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_UiSelectItem, { value: "M" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(` \u041C\u0443\u0436\u0441\u043A\u043E\u0439 `);
                                        } else {
                                          return [
                                            createTextVNode(" \u041C\u0443\u0436\u0441\u043A\u043E\u0439 ")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_UiSelectItem, { value: "F" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(` \u0416\u0435\u043D\u0441\u043A\u0438\u0439 `);
                                        } else {
                                          return [
                                            createTextVNode(" \u0416\u0435\u043D\u0441\u043A\u0438\u0439 ")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_UiSelectItem, { value: "IT" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(` \u0425\u0417 `);
                                        } else {
                                          return [
                                            createTextVNode(" \u0425\u0417 ")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_UiSelectItem, { value: "M" }, {
                                        default: withCtx(() => [
                                          createTextVNode(" \u041C\u0443\u0436\u0441\u043A\u043E\u0439 ")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_UiSelectItem, { value: "F" }, {
                                        default: withCtx(() => [
                                          createTextVNode(" \u0416\u0435\u043D\u0441\u043A\u0438\u0439 ")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_UiSelectItem, { value: "IT" }, {
                                        default: withCtx(() => [
                                          createTextVNode(" \u0425\u0417 ")
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
                                createVNode(_component_UiSelectGroup, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_UiSelectItem, { value: "M" }, {
                                      default: withCtx(() => [
                                        createTextVNode(" \u041C\u0443\u0436\u0441\u043A\u043E\u0439 ")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_UiSelectItem, { value: "F" }, {
                                      default: withCtx(() => [
                                        createTextVNode(" \u0416\u0435\u043D\u0441\u043A\u0438\u0439 ")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_UiSelectItem, { value: "IT" }, {
                                      default: withCtx(() => [
                                        createTextVNode(" \u0425\u0417 ")
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
                          createVNode(_component_UiSelectTrigger, null, {
                            default: withCtx(() => [
                              createVNode(_component_UiSelectValue, { placeholder: "\u041F\u043E\u043B \u043A\u043B\u0438\u0435\u043D\u0442\u0430" })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UiSelectContent, null, {
                            default: withCtx(() => [
                              createVNode(_component_UiSelectGroup, null, {
                                default: withCtx(() => [
                                  createVNode(_component_UiSelectItem, { value: "M" }, {
                                    default: withCtx(() => [
                                      createTextVNode(" \u041C\u0443\u0436\u0441\u043A\u043E\u0439 ")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_UiSelectItem, { value: "F" }, {
                                    default: withCtx(() => [
                                      createTextVNode(" \u0416\u0435\u043D\u0441\u043A\u0438\u0439 ")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_UiSelectItem, { value: "IT" }, {
                                    default: withCtx(() => [
                                      createTextVNode(" \u0425\u0417 ")
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
                  _push3(`</div></div><div class="flex items-center space-x-2"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UiSwitch, {
                    id: "reservation",
                    checked: unref(clientData).isRegular,
                    "onUpdate:checked": ($event) => unref(clientData).isRegular = $event
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UiLabel, { for: "reservation" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`\u041F\u043E\u0441\u0442\u043E\u044F\u043D\u043D\u044B\u0439`);
                      } else {
                        return [
                          createTextVNode("\u041F\u043E\u0441\u0442\u043E\u044F\u043D\u043D\u044B\u0439")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex flex-col gap-4" }, [
                      createVNode("div", { class: "relative" }, [
                        createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1" }, {
                          default: withCtx(() => [
                            createTextVNode("\u0421\u0441\u044B\u043B\u043A\u0430 \u043D\u0430 \u0447\u0430\u0442")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UiInput, {
                          modelValue: unref(clientData).chatLink,
                          "onUpdate:modelValue": ($event) => unref(clientData).chatLink = $event,
                          placeholder: "\u0421\u0441\u044B\u043B\u043A\u0430 \u043D\u0430 \u0447\u0430\u0442",
                          class: "col-span-3"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      createVNode("div", { class: "relative" }, [
                        createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1" }, {
                          default: withCtx(() => [
                            createTextVNode("\u0424\u0418\u041E")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UiInput, {
                          modelValue: unref(clientData).fullName,
                          "onUpdate:modelValue": ($event) => unref(clientData).fullName = $event,
                          class: "col-span-3"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      createVNode("div", { class: "relative" }, [
                        createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1" }, {
                          default: withCtx(() => [
                            createTextVNode("\u0422\u0435\u043B\u0435\u0444\u043E\u043D")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UiInput, {
                          modelValue: unref(clientData).phone,
                          "onUpdate:modelValue": ($event) => unref(clientData).phone = $event,
                          placeholder: "\u0422\u0435\u043B\u0435\u0444\u043E\u043D",
                          class: "col-span-3"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      createVNode("div", { class: "relative" }, [
                        unref(clientData).adLink !== "" ? (openBlock(), createBlock(_component_UiLabel, {
                          key: 0,
                          class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1"
                        }, {
                          default: withCtx(() => [
                            createTextVNode("\u0421\u0441\u044B\u043B\u043A\u0430 \u043D\u0430 \u043E\u0431\u044A\u044F\u0432\u043B\u0435\u043D\u0438\u0435")
                          ]),
                          _: 1
                        })) : createCommentVNode("", true),
                        createVNode(_component_UiInput, {
                          modelValue: unref(clientData).adLink,
                          "onUpdate:modelValue": ($event) => unref(clientData).adLink = $event,
                          placeholder: "\u0421\u0441\u044B\u043B\u043A\u0430 \u043D\u0430 \u043E\u0431\u044A\u044F\u0432\u043B\u0435\u043D\u0438\u0435",
                          class: "col-span-3"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      createVNode("div", { class: "relative" }, [
                        unref(clientData).inn !== "" ? (openBlock(), createBlock(_component_UiLabel, {
                          key: 0,
                          class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1"
                        }, {
                          default: withCtx(() => [
                            createTextVNode("\u0418\u041D\u041D")
                          ]),
                          _: 1
                        })) : createCommentVNode("", true),
                        createVNode(_component_UiInput, {
                          modelValue: unref(clientData).inn,
                          "onUpdate:modelValue": ($event) => unref(clientData).inn = $event,
                          placeholder: "\u0418\u041D\u041D",
                          class: "col-span-3"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      createVNode("div", { class: "flex items-center justify-center gap-1 justify-left relative" }, [
                        createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1" }, {
                          default: withCtx(() => [
                            createTextVNode("\u0414\u0430\u0442\u0430 \u043F\u0435\u0440\u0432\u043E\u0433\u043E \u043A\u043E\u043D\u0442\u0430\u043A\u0442\u0430")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UiInput, {
                          modelValue: unref(clientData).firstContact,
                          "onUpdate:modelValue": ($event) => unref(clientData).firstContact = $event,
                          type: "date",
                          class: unref(clientData).firstContact ? "" : "outline outline-1 outline-rose-300"
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "class"])
                      ]),
                      createVNode("div", { class: "relative" }, [
                        unref(clientData).type ? (openBlock(), createBlock(_component_UiLabel, {
                          key: 0,
                          class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1"
                        }, {
                          default: withCtx(() => [
                            createTextVNode("\u0422\u0438\u043F \u043A\u043B\u0438\u0435\u043D\u0442\u0430")
                          ]),
                          _: 1
                        })) : createCommentVNode("", true),
                        createVNode("div", null, [
                          createVNode(_component_UiSelect, {
                            modelValue: unref(clientData).type,
                            "onUpdate:modelValue": ($event) => unref(clientData).type = $event
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_UiSelectTrigger, null, {
                                default: withCtx(() => [
                                  createVNode(_component_UiSelectValue, { placeholder: "\u0422\u0438\u043F \u043A\u043B\u0438\u0435\u043D\u0442\u0430" })
                                ]),
                                _: 1
                              }),
                              createVNode(_component_UiSelectContent, null, {
                                default: withCtx(() => [
                                  createVNode(_component_UiSelectGroup, null, {
                                    default: withCtx(() => [
                                      createVNode(_component_UiSelectItem, { value: "\u0424\u0418\u0417" }, {
                                        default: withCtx(() => [
                                          createTextVNode(" \u0424\u0418\u0417 ")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_UiSelectItem, { value: "\u0418\u041F" }, {
                                        default: withCtx(() => [
                                          createTextVNode(" \u0418\u041F ")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_UiSelectItem, { value: "\u041E\u041E\u041E" }, {
                                        default: withCtx(() => [
                                          createTextVNode(" \u041E\u041E\u041E ")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_UiSelectItem, { value: "\u041D\u041A\u041E" }, {
                                        default: withCtx(() => [
                                          createTextVNode(" \u041D\u041A\u041E ")
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
                          }, 8, ["modelValue", "onUpdate:modelValue"])
                        ])
                      ]),
                      createVNode("div", { class: "relative" }, [
                        unref(clientData).gender ? (openBlock(), createBlock(_component_UiLabel, {
                          key: 0,
                          class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1"
                        }, {
                          default: withCtx(() => [
                            createTextVNode("\u041F\u043E\u043B \u043A\u043B\u0438\u0435\u043D\u0442\u0430")
                          ]),
                          _: 1
                        })) : createCommentVNode("", true),
                        createVNode("div", null, [
                          createVNode(_component_UiSelect, {
                            modelValue: unref(clientData).gender,
                            "onUpdate:modelValue": ($event) => unref(clientData).gender = $event
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_UiSelectTrigger, null, {
                                default: withCtx(() => [
                                  createVNode(_component_UiSelectValue, { placeholder: "\u041F\u043E\u043B \u043A\u043B\u0438\u0435\u043D\u0442\u0430" })
                                ]),
                                _: 1
                              }),
                              createVNode(_component_UiSelectContent, null, {
                                default: withCtx(() => [
                                  createVNode(_component_UiSelectGroup, null, {
                                    default: withCtx(() => [
                                      createVNode(_component_UiSelectItem, { value: "M" }, {
                                        default: withCtx(() => [
                                          createTextVNode(" \u041C\u0443\u0436\u0441\u043A\u043E\u0439 ")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_UiSelectItem, { value: "F" }, {
                                        default: withCtx(() => [
                                          createTextVNode(" \u0416\u0435\u043D\u0441\u043A\u0438\u0439 ")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_UiSelectItem, { value: "IT" }, {
                                        default: withCtx(() => [
                                          createTextVNode(" \u0425\u0417 ")
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
                          }, 8, ["modelValue", "onUpdate:modelValue"])
                        ])
                      ]),
                      createVNode("div", { class: "flex items-center space-x-2" }, [
                        createVNode(_component_UiSwitch, {
                          id: "reservation",
                          checked: unref(clientData).isRegular,
                          "onUpdate:checked": ($event) => unref(clientData).isRegular = $event
                        }, null, 8, ["checked", "onUpdate:checked"]),
                        createVNode(_component_UiLabel, { for: "reservation" }, {
                          default: withCtx(() => [
                            createTextVNode("\u041F\u043E\u0441\u0442\u043E\u044F\u043D\u043D\u044B\u0439")
                          ]),
                          _: 1
                        })
                      ])
                    ])
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
                      createTextVNode("\u041A\u043B\u0438\u0435\u043D\u0442")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_UiCardContent, null, {
                default: withCtx(() => [
                  createVNode("div", { class: "flex flex-col gap-4" }, [
                    createVNode("div", { class: "relative" }, [
                      createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1" }, {
                        default: withCtx(() => [
                          createTextVNode("\u0421\u0441\u044B\u043B\u043A\u0430 \u043D\u0430 \u0447\u0430\u0442")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_UiInput, {
                        modelValue: unref(clientData).chatLink,
                        "onUpdate:modelValue": ($event) => unref(clientData).chatLink = $event,
                        placeholder: "\u0421\u0441\u044B\u043B\u043A\u0430 \u043D\u0430 \u0447\u0430\u0442",
                        class: "col-span-3"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    createVNode("div", { class: "relative" }, [
                      createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1" }, {
                        default: withCtx(() => [
                          createTextVNode("\u0424\u0418\u041E")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_UiInput, {
                        modelValue: unref(clientData).fullName,
                        "onUpdate:modelValue": ($event) => unref(clientData).fullName = $event,
                        class: "col-span-3"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    createVNode("div", { class: "relative" }, [
                      createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1" }, {
                        default: withCtx(() => [
                          createTextVNode("\u0422\u0435\u043B\u0435\u0444\u043E\u043D")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_UiInput, {
                        modelValue: unref(clientData).phone,
                        "onUpdate:modelValue": ($event) => unref(clientData).phone = $event,
                        placeholder: "\u0422\u0435\u043B\u0435\u0444\u043E\u043D",
                        class: "col-span-3"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    createVNode("div", { class: "relative" }, [
                      unref(clientData).adLink !== "" ? (openBlock(), createBlock(_component_UiLabel, {
                        key: 0,
                        class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("\u0421\u0441\u044B\u043B\u043A\u0430 \u043D\u0430 \u043E\u0431\u044A\u044F\u0432\u043B\u0435\u043D\u0438\u0435")
                        ]),
                        _: 1
                      })) : createCommentVNode("", true),
                      createVNode(_component_UiInput, {
                        modelValue: unref(clientData).adLink,
                        "onUpdate:modelValue": ($event) => unref(clientData).adLink = $event,
                        placeholder: "\u0421\u0441\u044B\u043B\u043A\u0430 \u043D\u0430 \u043E\u0431\u044A\u044F\u0432\u043B\u0435\u043D\u0438\u0435",
                        class: "col-span-3"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    createVNode("div", { class: "relative" }, [
                      unref(clientData).inn !== "" ? (openBlock(), createBlock(_component_UiLabel, {
                        key: 0,
                        class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("\u0418\u041D\u041D")
                        ]),
                        _: 1
                      })) : createCommentVNode("", true),
                      createVNode(_component_UiInput, {
                        modelValue: unref(clientData).inn,
                        "onUpdate:modelValue": ($event) => unref(clientData).inn = $event,
                        placeholder: "\u0418\u041D\u041D",
                        class: "col-span-3"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    createVNode("div", { class: "flex items-center justify-center gap-1 justify-left relative" }, [
                      createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1" }, {
                        default: withCtx(() => [
                          createTextVNode("\u0414\u0430\u0442\u0430 \u043F\u0435\u0440\u0432\u043E\u0433\u043E \u043A\u043E\u043D\u0442\u0430\u043A\u0442\u0430")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_UiInput, {
                        modelValue: unref(clientData).firstContact,
                        "onUpdate:modelValue": ($event) => unref(clientData).firstContact = $event,
                        type: "date",
                        class: unref(clientData).firstContact ? "" : "outline outline-1 outline-rose-300"
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "class"])
                    ]),
                    createVNode("div", { class: "relative" }, [
                      unref(clientData).type ? (openBlock(), createBlock(_component_UiLabel, {
                        key: 0,
                        class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("\u0422\u0438\u043F \u043A\u043B\u0438\u0435\u043D\u0442\u0430")
                        ]),
                        _: 1
                      })) : createCommentVNode("", true),
                      createVNode("div", null, [
                        createVNode(_component_UiSelect, {
                          modelValue: unref(clientData).type,
                          "onUpdate:modelValue": ($event) => unref(clientData).type = $event
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_UiSelectTrigger, null, {
                              default: withCtx(() => [
                                createVNode(_component_UiSelectValue, { placeholder: "\u0422\u0438\u043F \u043A\u043B\u0438\u0435\u043D\u0442\u0430" })
                              ]),
                              _: 1
                            }),
                            createVNode(_component_UiSelectContent, null, {
                              default: withCtx(() => [
                                createVNode(_component_UiSelectGroup, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_UiSelectItem, { value: "\u0424\u0418\u0417" }, {
                                      default: withCtx(() => [
                                        createTextVNode(" \u0424\u0418\u0417 ")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_UiSelectItem, { value: "\u0418\u041F" }, {
                                      default: withCtx(() => [
                                        createTextVNode(" \u0418\u041F ")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_UiSelectItem, { value: "\u041E\u041E\u041E" }, {
                                      default: withCtx(() => [
                                        createTextVNode(" \u041E\u041E\u041E ")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_UiSelectItem, { value: "\u041D\u041A\u041E" }, {
                                      default: withCtx(() => [
                                        createTextVNode(" \u041D\u041A\u041E ")
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
                        }, 8, ["modelValue", "onUpdate:modelValue"])
                      ])
                    ]),
                    createVNode("div", { class: "relative" }, [
                      unref(clientData).gender ? (openBlock(), createBlock(_component_UiLabel, {
                        key: 0,
                        class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("\u041F\u043E\u043B \u043A\u043B\u0438\u0435\u043D\u0442\u0430")
                        ]),
                        _: 1
                      })) : createCommentVNode("", true),
                      createVNode("div", null, [
                        createVNode(_component_UiSelect, {
                          modelValue: unref(clientData).gender,
                          "onUpdate:modelValue": ($event) => unref(clientData).gender = $event
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_UiSelectTrigger, null, {
                              default: withCtx(() => [
                                createVNode(_component_UiSelectValue, { placeholder: "\u041F\u043E\u043B \u043A\u043B\u0438\u0435\u043D\u0442\u0430" })
                              ]),
                              _: 1
                            }),
                            createVNode(_component_UiSelectContent, null, {
                              default: withCtx(() => [
                                createVNode(_component_UiSelectGroup, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_UiSelectItem, { value: "M" }, {
                                      default: withCtx(() => [
                                        createTextVNode(" \u041C\u0443\u0436\u0441\u043A\u043E\u0439 ")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_UiSelectItem, { value: "F" }, {
                                      default: withCtx(() => [
                                        createTextVNode(" \u0416\u0435\u043D\u0441\u043A\u0438\u0439 ")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_UiSelectItem, { value: "IT" }, {
                                      default: withCtx(() => [
                                        createTextVNode(" \u0425\u0417 ")
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
                        }, 8, ["modelValue", "onUpdate:modelValue"])
                      ])
                    ]),
                    createVNode("div", { class: "flex items-center space-x-2" }, [
                      createVNode(_component_UiSwitch, {
                        id: "reservation",
                        checked: unref(clientData).isRegular,
                        "onUpdate:checked": ($event) => unref(clientData).isRegular = $event
                      }, null, 8, ["checked", "onUpdate:checked"]),
                      createVNode(_component_UiLabel, { for: "reservation" }, {
                        default: withCtx(() => [
                          createTextVNode("\u041F\u043E\u0441\u0442\u043E\u044F\u043D\u043D\u044B\u0439")
                        ]),
                        _: 1
                      })
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
      _push(`</div>`);
    };
  }
});
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/my/clients/Client.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "EditClient",
  __ssrInlineRender: true,
  props: {
    client: {}
  },
  emits: ["isClientEdited"],
  setup(__props, { emit: __emit }) {
    const { $useApi } = useNuxtApp();
    const props = __props;
    const clientData = ref({ ...props.client });
    const isOpen = ref(false);
    const updateClientData = (data) => {
      clientData.value = { ...data };
      return;
    };
    const emit = __emit;
    const editClient = async () => {
      try {
        await $useApi.patch(`/clients/${props.client.id}`, clientData.value);
        emit("isClientEdited");
        return isOpen.value = false;
      } catch (e) {
        console.log(e);
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiDialog = _sfc_main$4$1;
      const _component_UiDialogTrigger = _sfc_main$3$1;
      const _component_UiButton = _sfc_main$j;
      const _component_Icon = __nuxt_component_0$1;
      const _component_UiDialogContent = _sfc_main$l;
      const _component_UiDialogHeader = _sfc_main$2$1;
      const _component_UiDialogTitle = _sfc_main$1$2;
      const _component_UiDialogDescription = _sfc_main$m;
      const _component_MyClientsClient = _sfc_main$7;
      const _component_UiDialogFooter = _sfc_main$o;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_UiDialog, {
        open: unref(isOpen),
        "onUpdate:open": ($event) => isRef(isOpen) ? isOpen.value = $event : null
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UiDialogTrigger, { "as-child": "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UiButton, {
                    size: "icon",
                    class: "h-5 w-5 gap-1"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_Icon, {
                          name: "mingcute:edit-line",
                          color: "white",
                          size: "15px"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_Icon, {
                            name: "mingcute:edit-line",
                            color: "white",
                            size: "15px"
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UiButton, {
                      size: "icon",
                      class: "h-5 w-5 gap-1"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_Icon, {
                          name: "mingcute:edit-line",
                          color: "white",
                          size: "15px"
                        })
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UiDialogContent, { class: "max-w-[400px] flex flex-col" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UiDialogHeader, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UiDialogTitle, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u043A\u043B\u0438\u0435\u043D\u0442\u0430`);
                            } else {
                              return [
                                createTextVNode("\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u043A\u043B\u0438\u0435\u043D\u0442\u0430")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_UiDialogDescription, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` \u0417\u0430\u043F\u043E\u043B\u043D\u0438 \u0432\u0441\u0435 \u043F\u043E\u043B\u044F \u0438 \u043D\u0430\u0436\u043C\u0438 &quot;\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C&quot; `);
                            } else {
                              return [
                                createTextVNode(' \u0417\u0430\u043F\u043E\u043B\u043D\u0438 \u0432\u0441\u0435 \u043F\u043E\u043B\u044F \u0438 \u043D\u0430\u0436\u043C\u0438 "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C" ')
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_UiDialogTitle, null, {
                            default: withCtx(() => [
                              createTextVNode("\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u043A\u043B\u0438\u0435\u043D\u0442\u0430")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UiDialogDescription, null, {
                            default: withCtx(() => [
                              createTextVNode(' \u0417\u0430\u043F\u043E\u043B\u043D\u0438 \u0432\u0441\u0435 \u043F\u043E\u043B\u044F \u0438 \u043D\u0430\u0436\u043C\u0438 "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C" ')
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<div class="flex gap-4"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_MyClientsClient, {
                    client: _ctx.client,
                    onClientDataChanged: updateClientData
                  }, null, _parent3, _scopeId2));
                  _push3(`</div>`);
                  _push3(ssrRenderComponent(_component_UiDialogFooter, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UiButton, { onClick: editClient }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` \u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C `);
                            } else {
                              return [
                                createTextVNode(" \u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_UiButton, { onClick: editClient }, {
                            default: withCtx(() => [
                              createTextVNode(" \u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C ")
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
                    createVNode(_component_UiDialogHeader, null, {
                      default: withCtx(() => [
                        createVNode(_component_UiDialogTitle, null, {
                          default: withCtx(() => [
                            createTextVNode("\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u043A\u043B\u0438\u0435\u043D\u0442\u0430")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UiDialogDescription, null, {
                          default: withCtx(() => [
                            createTextVNode(' \u0417\u0430\u043F\u043E\u043B\u043D\u0438 \u0432\u0441\u0435 \u043F\u043E\u043B\u044F \u0438 \u043D\u0430\u0436\u043C\u0438 "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C" ')
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode("div", { class: "flex gap-4" }, [
                      createVNode(_component_MyClientsClient, {
                        client: _ctx.client,
                        onClientDataChanged: updateClientData
                      }, null, 8, ["client"])
                    ]),
                    createVNode(_component_UiDialogFooter, null, {
                      default: withCtx(() => [
                        createVNode(_component_UiButton, { onClick: editClient }, {
                          default: withCtx(() => [
                            createTextVNode(" \u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C ")
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
          } else {
            return [
              createVNode(_component_UiDialogTrigger, { "as-child": "" }, {
                default: withCtx(() => [
                  createVNode(_component_UiButton, {
                    size: "icon",
                    class: "h-5 w-5 gap-1"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_Icon, {
                        name: "mingcute:edit-line",
                        color: "white",
                        size: "15px"
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_UiDialogContent, { class: "max-w-[400px] flex flex-col" }, {
                default: withCtx(() => [
                  createVNode(_component_UiDialogHeader, null, {
                    default: withCtx(() => [
                      createVNode(_component_UiDialogTitle, null, {
                        default: withCtx(() => [
                          createTextVNode("\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u043A\u043B\u0438\u0435\u043D\u0442\u0430")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_UiDialogDescription, null, {
                        default: withCtx(() => [
                          createTextVNode(' \u0417\u0430\u043F\u043E\u043B\u043D\u0438 \u0432\u0441\u0435 \u043F\u043E\u043B\u044F \u0438 \u043D\u0430\u0436\u043C\u0438 "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C" ')
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode("div", { class: "flex gap-4" }, [
                    createVNode(_component_MyClientsClient, {
                      client: _ctx.client,
                      onClientDataChanged: updateClientData
                    }, null, 8, ["client"])
                  ]),
                  createVNode(_component_UiDialogFooter, null, {
                    default: withCtx(() => [
                      createVNode(_component_UiButton, { onClick: editClient }, {
                        default: withCtx(() => [
                          createTextVNode(" \u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C ")
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
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/my/clients/EditClient.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "AddDealerModal",
  __ssrInlineRender: true,
  props: {
    deal: {}
  },
  emits: ["isDealerAdded"],
  setup(__props, { emit: __emit }) {
    const { $useApi } = useNuxtApp();
    const { filters } = useDealsDatas();
    const managers = computed(() => {
      var _a;
      return (_a = filters.value.managers) != null ? _a : [];
    });
    const props = __props;
    const isOpen = ref(false);
    const cloneDealers = (dealers) => Array.isArray(dealers) ? dealers.map((dealer) => ({ ...dealer })) : [];
    const dealersList = ref(cloneDealers(props.deal.dealers));
    const errorMessage = ref(null);
    const emit = __emit;
    const addNewDealer = () => {
      dealersList.value.push({
        id: 0,
        // Временный ID, будет заменен сервером
        dealId: props.deal.id,
        userId: 0,
        // По умолчанию первый менеджер
        price: 0
        // Начальная стоимость
      });
    };
    const removeDealer = (index) => {
      dealersList.value.splice(index, 1);
      errorMessage.value = null;
    };
    const updateDealers = async () => {
      try {
        const hasInvalidPrice = dealersList.value.some(
          (dealer) => dealer.price <= 0
        );
        if (hasInvalidPrice) {
          errorMessage.value = "\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C \u043D\u0435 \u043C\u043E\u0436\u0435\u0442 \u0431\u044B\u0442\u044C \u043C\u0435\u043D\u044C\u0448\u0435 \u0438\u043B\u0438 \u0440\u0430\u0432\u043D\u0430 \u043D\u0443\u043B\u044E.";
          return;
        }
        const hasInvalidUserId = dealersList.value.some(
          (dealer) => dealer.userId === 0
        );
        if (hasInvalidUserId) {
          errorMessage.value = "\u041D\u0435 \u0432\u044B\u0431\u0440\u0430\u043D \u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440.";
          return;
        }
        const userIds = dealersList.value.map((d) => d.userId);
        const hasDuplicates = new Set(userIds).size !== userIds.length;
        if (hasDuplicates) {
          errorMessage.value = "\u041D\u0435 \u0434\u043E\u043B\u0436\u043D\u043E \u0431\u044B\u0442\u044C \u043E\u0434\u0438\u043D\u0430\u043A\u043E\u0432\u044B\u0445 \u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440\u043E\u0432.";
          return;
        }
        const totalDealersPrice = dealersList.value.reduce(
          (a, b) => a + (b.price || 0),
          0
        );
        const dealPrice = props.deal.price || 0;
        if (totalDealersPrice !== dealPrice) {
          errorMessage.value = `\u0421\u0443\u043C\u043C\u0430 (${totalDealersPrice}) \u043D\u0435 \u0440\u0430\u0432\u043D\u0430 \u0441\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u0438 \u0441\u0434\u0435\u043B\u043A\u0438 (${dealPrice}).`;
          return;
        }
        const updatedDealers = dealersList.value.map((dealer, i) => ({
          id: dealer.id,
          userId: dealer.userId,
          price: dealer.price,
          dealId: props.deal.id,
          idx: i
        }));
        const { data } = await $useApi.patch(`/deals/${props.deal.id}/dealers`, {
          dealers: updatedDealers
        });
        console.log("Dealers updated:", data);
        dealersList.value = cloneDealers(data == null ? void 0 : data.dealers);
        emit("isDealerAdded");
        isOpen.value = false;
        errorMessage.value = null;
      } catch (error) {
        console.error("Error updating dealers:", error);
        errorMessage.value = "\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u0440\u0438 \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0438\u0438 \u0434\u0438\u043B\u0435\u0440\u043E\u0432.";
      }
    };
    watch(
      dealersList,
      () => {
        if (dealersList.value.length === 1) {
          dealersList.value[0].price = props.deal.price;
        }
      },
      { deep: true }
    );
    watch(
      () => props.deal.dealers,
      (newDealers) => {
        if (!isOpen.value) {
          dealersList.value = cloneDealers(newDealers);
        }
      },
      { deep: true }
    );
    watch(isOpen, (value) => {
      if (value) {
        dealersList.value = cloneDealers(props.deal.dealers);
        errorMessage.value = null;
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiDialog = _sfc_main$4$1;
      const _component_UiDialogTrigger = _sfc_main$3$1;
      const _component_UiButton = _sfc_main$j;
      const _component_Icon = __nuxt_component_0$1;
      const _component_UiDialogContent = _sfc_main$l;
      const _component_UiDialogHeader = _sfc_main$2$1;
      const _component_UiDialogTitle = _sfc_main$1$2;
      const _component_UiCard = _sfc_main$b;
      const _component_UiCardHeader = _sfc_main$1$1;
      const _component_UiCardTitle = _sfc_main$c;
      const _component_UiCardDescription = _sfc_main$d;
      const _component_UiCardContent = _sfc_main$f;
      const _component_UiLabel = _sfc_main$p;
      const _component_MyComboboxModels = _sfc_main$r;
      const _component_UiInput = _sfc_main$q;
      const _component_UiSeparator = _sfc_main$g;
      const _component_UiDialogFooter = _sfc_main$o;
      _push(ssrRenderComponent(_component_UiDialog, mergeProps({
        open: isOpen.value,
        "onUpdate:open": ($event) => isOpen.value = $event
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UiDialogTrigger, { "as-child": "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UiButton, { class: "h-5 w-5 px-0 py-2" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_Icon, {
                          name: "mingcute:edit-line",
                          color: "white",
                          size: "15px"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_Icon, {
                            name: "mingcute:edit-line",
                            color: "white",
                            size: "15px"
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UiButton, { class: "h-5 w-5 px-0 py-2" }, {
                      default: withCtx(() => [
                        createVNode(_component_Icon, {
                          name: "mingcute:edit-line",
                          color: "white",
                          size: "15px"
                        })
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UiDialogContent, { class: "max-w-[400px] flex flex-col" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UiDialogHeader, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UiDialogTitle, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0443\u0447\u0430\u0441\u0442\u043D\u0438\u043A\u043E\u0432`);
                            } else {
                              return [
                                createTextVNode("\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0443\u0447\u0430\u0441\u0442\u043D\u0438\u043A\u043E\u0432")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_UiDialogTitle, null, {
                            default: withCtx(() => [
                              createTextVNode("\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0443\u0447\u0430\u0441\u0442\u043D\u0438\u043A\u043E\u0432")
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<div class="flex gap-4"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UiCard, { class: "w-full" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UiCardHeader, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_UiCardTitle, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`\u0423\u0447\u0430\u0441\u0442\u043D\u0438\u043A\u0438`);
                                  } else {
                                    return [
                                      createTextVNode("\u0423\u0447\u0430\u0441\u0442\u043D\u0438\u043A\u0438")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_UiCardDescription, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`\u0423\u043F\u0440\u0430\u0432\u043B\u044F\u0439\u0442\u0435 \u0441\u043F\u0438\u0441\u043A\u043E\u043C \u0434\u0438\u043B\u0435\u0440\u043E\u0432`);
                                  } else {
                                    return [
                                      createTextVNode("\u0423\u043F\u0440\u0430\u0432\u043B\u044F\u0439\u0442\u0435 \u0441\u043F\u0438\u0441\u043A\u043E\u043C \u0434\u0438\u043B\u0435\u0440\u043E\u0432")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_UiCardTitle, null, {
                                  default: withCtx(() => [
                                    createTextVNode("\u0423\u0447\u0430\u0441\u0442\u043D\u0438\u043A\u0438")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_UiCardDescription, null, {
                                  default: withCtx(() => [
                                    createTextVNode("\u0423\u043F\u0440\u0430\u0432\u043B\u044F\u0439\u0442\u0435 \u0441\u043F\u0438\u0441\u043A\u043E\u043C \u0434\u0438\u043B\u0435\u0440\u043E\u0432")
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_UiCardContent, { class: "flex flex-col gap-4" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<!--[-->`);
                              ssrRenderList(dealersList.value, (dealer, index) => {
                                var _a;
                                _push5(`<div class="flex flex-col gap-4"${_scopeId4}><div class="relative"${_scopeId4}>`);
                                _push5(ssrRenderComponent(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`\u041C\u0435\u043D\u0435\u0434\u0436\u0435\u0440`);
                                    } else {
                                      return [
                                        createTextVNode("\u041C\u0435\u043D\u0435\u0434\u0436\u0435\u0440")
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                                _push5(`<div class="flex gap-2"${_scopeId4}>`);
                                _push5(ssrRenderComponent(_component_MyComboboxModels, {
                                  items: managers.value.map((m) => ({ value: m.id, label: m.fullName })),
                                  class: "w-full",
                                  label: ((_a = dealer.user) == null ? void 0 : _a.fullName) || "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440\u0430",
                                  onSelectedItem: (value) => {
                                    dealer.userId = value;
                                    errorMessage.value = null;
                                  }
                                }, null, _parent5, _scopeId4));
                                if (dealersList.value.length > 1) {
                                  _push5(ssrRenderComponent(_component_UiButton, {
                                    variant: "destructive",
                                    onClick: ($event) => removeDealer(index)
                                  }, {
                                    default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        _push6(ssrRenderComponent(unref(X), null, null, _parent6, _scopeId5));
                                      } else {
                                        return [
                                          createVNode(unref(X))
                                        ];
                                      }
                                    }),
                                    _: 2
                                  }, _parent5, _scopeId4));
                                } else {
                                  _push5(`<!---->`);
                                }
                                _push5(`</div></div><div class="relative"${_scopeId4}>`);
                                _push5(ssrRenderComponent(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C`);
                                    } else {
                                      return [
                                        createTextVNode("\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C")
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                                _push5(ssrRenderComponent(_component_UiInput, {
                                  modelValue: dealer.price,
                                  "onUpdate:modelValue": ($event) => dealer.price = $event,
                                  modelModifiers: { number: true },
                                  type: "number",
                                  placeholder: "\u0427\u0430\u0441\u0442\u044C \u043E\u0442 10 \u0434\u043E 90",
                                  class: dealer.price ? "" : "outline outline-1 outline-rose-300 rounded-md",
                                  onInput: ($event) => errorMessage.value = null
                                }, null, _parent5, _scopeId4));
                                _push5(`</div>`);
                                if (dealersList.value.length) {
                                  _push5(ssrRenderComponent(_component_UiSeparator, null, null, _parent5, _scopeId4));
                                } else {
                                  _push5(`<!---->`);
                                }
                                _push5(`</div>`);
                              });
                              _push5(`<!--]-->`);
                              if (dealersList.value.length < 3) {
                                _push5(ssrRenderComponent(_component_UiButton, { onClick: addNewDealer }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(` \u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440\u0430 `);
                                    } else {
                                      return [
                                        createTextVNode(" \u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440\u0430 ")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                              } else {
                                _push5(`<!---->`);
                              }
                            } else {
                              return [
                                (openBlock(true), createBlock(Fragment, null, renderList(dealersList.value, (dealer, index) => {
                                  var _a;
                                  return openBlock(), createBlock("div", {
                                    key: dealer.id || `new-${index}`,
                                    class: "flex flex-col gap-4"
                                  }, [
                                    createVNode("div", { class: "relative" }, [
                                      createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                                        default: withCtx(() => [
                                          createTextVNode("\u041C\u0435\u043D\u0435\u0434\u0436\u0435\u0440")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode("div", { class: "flex gap-2" }, [
                                        createVNode(_component_MyComboboxModels, {
                                          items: managers.value.map((m) => ({ value: m.id, label: m.fullName })),
                                          class: "w-full",
                                          label: ((_a = dealer.user) == null ? void 0 : _a.fullName) || "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440\u0430",
                                          onSelectedItem: (value) => {
                                            dealer.userId = value;
                                            errorMessage.value = null;
                                          }
                                        }, null, 8, ["items", "label", "onSelectedItem"]),
                                        dealersList.value.length > 1 ? (openBlock(), createBlock(_component_UiButton, {
                                          key: 0,
                                          variant: "destructive",
                                          onClick: ($event) => removeDealer(index)
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(unref(X))
                                          ]),
                                          _: 2
                                        }, 1032, ["onClick"])) : createCommentVNode("", true)
                                      ])
                                    ]),
                                    createVNode("div", { class: "relative" }, [
                                      createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                                        default: withCtx(() => [
                                          createTextVNode("\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_UiInput, {
                                        modelValue: dealer.price,
                                        "onUpdate:modelValue": ($event) => dealer.price = $event,
                                        modelModifiers: { number: true },
                                        type: "number",
                                        placeholder: "\u0427\u0430\u0441\u0442\u044C \u043E\u0442 10 \u0434\u043E 90",
                                        class: dealer.price ? "" : "outline outline-1 outline-rose-300 rounded-md",
                                        onInput: ($event) => errorMessage.value = null
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "class", "onInput"])
                                    ]),
                                    dealersList.value.length ? (openBlock(), createBlock(_component_UiSeparator, { key: 0 })) : createCommentVNode("", true)
                                  ]);
                                }), 128)),
                                dealersList.value.length < 3 ? (openBlock(), createBlock(_component_UiButton, {
                                  key: 0,
                                  onClick: addNewDealer
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" \u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440\u0430 ")
                                  ]),
                                  _: 1
                                })) : createCommentVNode("", true)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_UiCardHeader, null, {
                            default: withCtx(() => [
                              createVNode(_component_UiCardTitle, null, {
                                default: withCtx(() => [
                                  createTextVNode("\u0423\u0447\u0430\u0441\u0442\u043D\u0438\u043A\u0438")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_UiCardDescription, null, {
                                default: withCtx(() => [
                                  createTextVNode("\u0423\u043F\u0440\u0430\u0432\u043B\u044F\u0439\u0442\u0435 \u0441\u043F\u0438\u0441\u043A\u043E\u043C \u0434\u0438\u043B\u0435\u0440\u043E\u0432")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UiCardContent, { class: "flex flex-col gap-4" }, {
                            default: withCtx(() => [
                              (openBlock(true), createBlock(Fragment, null, renderList(dealersList.value, (dealer, index) => {
                                var _a;
                                return openBlock(), createBlock("div", {
                                  key: dealer.id || `new-${index}`,
                                  class: "flex flex-col gap-4"
                                }, [
                                  createVNode("div", { class: "relative" }, [
                                    createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                                      default: withCtx(() => [
                                        createTextVNode("\u041C\u0435\u043D\u0435\u0434\u0436\u0435\u0440")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode("div", { class: "flex gap-2" }, [
                                      createVNode(_component_MyComboboxModels, {
                                        items: managers.value.map((m) => ({ value: m.id, label: m.fullName })),
                                        class: "w-full",
                                        label: ((_a = dealer.user) == null ? void 0 : _a.fullName) || "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440\u0430",
                                        onSelectedItem: (value) => {
                                          dealer.userId = value;
                                          errorMessage.value = null;
                                        }
                                      }, null, 8, ["items", "label", "onSelectedItem"]),
                                      dealersList.value.length > 1 ? (openBlock(), createBlock(_component_UiButton, {
                                        key: 0,
                                        variant: "destructive",
                                        onClick: ($event) => removeDealer(index)
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(unref(X))
                                        ]),
                                        _: 2
                                      }, 1032, ["onClick"])) : createCommentVNode("", true)
                                    ])
                                  ]),
                                  createVNode("div", { class: "relative" }, [
                                    createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                                      default: withCtx(() => [
                                        createTextVNode("\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_UiInput, {
                                      modelValue: dealer.price,
                                      "onUpdate:modelValue": ($event) => dealer.price = $event,
                                      modelModifiers: { number: true },
                                      type: "number",
                                      placeholder: "\u0427\u0430\u0441\u0442\u044C \u043E\u0442 10 \u0434\u043E 90",
                                      class: dealer.price ? "" : "outline outline-1 outline-rose-300 rounded-md",
                                      onInput: ($event) => errorMessage.value = null
                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "class", "onInput"])
                                  ]),
                                  dealersList.value.length ? (openBlock(), createBlock(_component_UiSeparator, { key: 0 })) : createCommentVNode("", true)
                                ]);
                              }), 128)),
                              dealersList.value.length < 3 ? (openBlock(), createBlock(_component_UiButton, {
                                key: 0,
                                onClick: addNewDealer
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" \u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440\u0430 ")
                                ]),
                                _: 1
                              })) : createCommentVNode("", true)
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                  _push3(ssrRenderComponent(_component_UiDialogFooter, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        if (errorMessage.value) {
                          _push4(`<p class="text-red-500 text-sm mb-2"${_scopeId3}>${ssrInterpolate(errorMessage.value)}</p>`);
                        } else {
                          _push4(`<!---->`);
                        }
                        _push4(ssrRenderComponent(_component_UiButton, { onClick: updateDealers }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C`);
                            } else {
                              return [
                                createTextVNode("\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          errorMessage.value ? (openBlock(), createBlock("p", {
                            key: 0,
                            class: "text-red-500 text-sm mb-2"
                          }, toDisplayString(errorMessage.value), 1)) : createCommentVNode("", true),
                          createVNode(_component_UiButton, { onClick: updateDealers }, {
                            default: withCtx(() => [
                              createTextVNode("\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C")
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
                    createVNode(_component_UiDialogHeader, null, {
                      default: withCtx(() => [
                        createVNode(_component_UiDialogTitle, null, {
                          default: withCtx(() => [
                            createTextVNode("\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0443\u0447\u0430\u0441\u0442\u043D\u0438\u043A\u043E\u0432")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode("div", { class: "flex gap-4" }, [
                      createVNode(_component_UiCard, { class: "w-full" }, {
                        default: withCtx(() => [
                          createVNode(_component_UiCardHeader, null, {
                            default: withCtx(() => [
                              createVNode(_component_UiCardTitle, null, {
                                default: withCtx(() => [
                                  createTextVNode("\u0423\u0447\u0430\u0441\u0442\u043D\u0438\u043A\u0438")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_UiCardDescription, null, {
                                default: withCtx(() => [
                                  createTextVNode("\u0423\u043F\u0440\u0430\u0432\u043B\u044F\u0439\u0442\u0435 \u0441\u043F\u0438\u0441\u043A\u043E\u043C \u0434\u0438\u043B\u0435\u0440\u043E\u0432")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UiCardContent, { class: "flex flex-col gap-4" }, {
                            default: withCtx(() => [
                              (openBlock(true), createBlock(Fragment, null, renderList(dealersList.value, (dealer, index) => {
                                var _a;
                                return openBlock(), createBlock("div", {
                                  key: dealer.id || `new-${index}`,
                                  class: "flex flex-col gap-4"
                                }, [
                                  createVNode("div", { class: "relative" }, [
                                    createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                                      default: withCtx(() => [
                                        createTextVNode("\u041C\u0435\u043D\u0435\u0434\u0436\u0435\u0440")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode("div", { class: "flex gap-2" }, [
                                      createVNode(_component_MyComboboxModels, {
                                        items: managers.value.map((m) => ({ value: m.id, label: m.fullName })),
                                        class: "w-full",
                                        label: ((_a = dealer.user) == null ? void 0 : _a.fullName) || "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440\u0430",
                                        onSelectedItem: (value) => {
                                          dealer.userId = value;
                                          errorMessage.value = null;
                                        }
                                      }, null, 8, ["items", "label", "onSelectedItem"]),
                                      dealersList.value.length > 1 ? (openBlock(), createBlock(_component_UiButton, {
                                        key: 0,
                                        variant: "destructive",
                                        onClick: ($event) => removeDealer(index)
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(unref(X))
                                        ]),
                                        _: 2
                                      }, 1032, ["onClick"])) : createCommentVNode("", true)
                                    ])
                                  ]),
                                  createVNode("div", { class: "relative" }, [
                                    createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                                      default: withCtx(() => [
                                        createTextVNode("\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_UiInput, {
                                      modelValue: dealer.price,
                                      "onUpdate:modelValue": ($event) => dealer.price = $event,
                                      modelModifiers: { number: true },
                                      type: "number",
                                      placeholder: "\u0427\u0430\u0441\u0442\u044C \u043E\u0442 10 \u0434\u043E 90",
                                      class: dealer.price ? "" : "outline outline-1 outline-rose-300 rounded-md",
                                      onInput: ($event) => errorMessage.value = null
                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "class", "onInput"])
                                  ]),
                                  dealersList.value.length ? (openBlock(), createBlock(_component_UiSeparator, { key: 0 })) : createCommentVNode("", true)
                                ]);
                              }), 128)),
                              dealersList.value.length < 3 ? (openBlock(), createBlock(_component_UiButton, {
                                key: 0,
                                onClick: addNewDealer
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" \u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440\u0430 ")
                                ]),
                                _: 1
                              })) : createCommentVNode("", true)
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    createVNode(_component_UiDialogFooter, null, {
                      default: withCtx(() => [
                        errorMessage.value ? (openBlock(), createBlock("p", {
                          key: 0,
                          class: "text-red-500 text-sm mb-2"
                        }, toDisplayString(errorMessage.value), 1)) : createCommentVNode("", true),
                        createVNode(_component_UiButton, { onClick: updateDealers }, {
                          default: withCtx(() => [
                            createTextVNode("\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C")
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
          } else {
            return [
              createVNode(_component_UiDialogTrigger, { "as-child": "" }, {
                default: withCtx(() => [
                  createVNode(_component_UiButton, { class: "h-5 w-5 px-0 py-2" }, {
                    default: withCtx(() => [
                      createVNode(_component_Icon, {
                        name: "mingcute:edit-line",
                        color: "white",
                        size: "15px"
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_UiDialogContent, { class: "max-w-[400px] flex flex-col" }, {
                default: withCtx(() => [
                  createVNode(_component_UiDialogHeader, null, {
                    default: withCtx(() => [
                      createVNode(_component_UiDialogTitle, null, {
                        default: withCtx(() => [
                          createTextVNode("\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0443\u0447\u0430\u0441\u0442\u043D\u0438\u043A\u043E\u0432")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode("div", { class: "flex gap-4" }, [
                    createVNode(_component_UiCard, { class: "w-full" }, {
                      default: withCtx(() => [
                        createVNode(_component_UiCardHeader, null, {
                          default: withCtx(() => [
                            createVNode(_component_UiCardTitle, null, {
                              default: withCtx(() => [
                                createTextVNode("\u0423\u0447\u0430\u0441\u0442\u043D\u0438\u043A\u0438")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_UiCardDescription, null, {
                              default: withCtx(() => [
                                createTextVNode("\u0423\u043F\u0440\u0430\u0432\u043B\u044F\u0439\u0442\u0435 \u0441\u043F\u0438\u0441\u043A\u043E\u043C \u0434\u0438\u043B\u0435\u0440\u043E\u0432")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UiCardContent, { class: "flex flex-col gap-4" }, {
                          default: withCtx(() => [
                            (openBlock(true), createBlock(Fragment, null, renderList(dealersList.value, (dealer, index) => {
                              var _a;
                              return openBlock(), createBlock("div", {
                                key: dealer.id || `new-${index}`,
                                class: "flex flex-col gap-4"
                              }, [
                                createVNode("div", { class: "relative" }, [
                                  createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                                    default: withCtx(() => [
                                      createTextVNode("\u041C\u0435\u043D\u0435\u0434\u0436\u0435\u0440")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode("div", { class: "flex gap-2" }, [
                                    createVNode(_component_MyComboboxModels, {
                                      items: managers.value.map((m) => ({ value: m.id, label: m.fullName })),
                                      class: "w-full",
                                      label: ((_a = dealer.user) == null ? void 0 : _a.fullName) || "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440\u0430",
                                      onSelectedItem: (value) => {
                                        dealer.userId = value;
                                        errorMessage.value = null;
                                      }
                                    }, null, 8, ["items", "label", "onSelectedItem"]),
                                    dealersList.value.length > 1 ? (openBlock(), createBlock(_component_UiButton, {
                                      key: 0,
                                      variant: "destructive",
                                      onClick: ($event) => removeDealer(index)
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(unref(X))
                                      ]),
                                      _: 2
                                    }, 1032, ["onClick"])) : createCommentVNode("", true)
                                  ])
                                ]),
                                createVNode("div", { class: "relative" }, [
                                  createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                                    default: withCtx(() => [
                                      createTextVNode("\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_UiInput, {
                                    modelValue: dealer.price,
                                    "onUpdate:modelValue": ($event) => dealer.price = $event,
                                    modelModifiers: { number: true },
                                    type: "number",
                                    placeholder: "\u0427\u0430\u0441\u0442\u044C \u043E\u0442 10 \u0434\u043E 90",
                                    class: dealer.price ? "" : "outline outline-1 outline-rose-300 rounded-md",
                                    onInput: ($event) => errorMessage.value = null
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "class", "onInput"])
                                ]),
                                dealersList.value.length ? (openBlock(), createBlock(_component_UiSeparator, { key: 0 })) : createCommentVNode("", true)
                              ]);
                            }), 128)),
                            dealersList.value.length < 3 ? (openBlock(), createBlock(_component_UiButton, {
                              key: 0,
                              onClick: addNewDealer
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" \u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440\u0430 ")
                              ]),
                              _: 1
                            })) : createCommentVNode("", true)
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  createVNode(_component_UiDialogFooter, null, {
                    default: withCtx(() => [
                      errorMessage.value ? (openBlock(), createBlock("p", {
                        key: 0,
                        class: "text-red-500 text-sm mb-2"
                      }, toDisplayString(errorMessage.value), 1)) : createCommentVNode("", true),
                      createVNode(_component_UiButton, { onClick: updateDealers }, {
                        default: withCtx(() => [
                          createTextVNode("\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C")
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
      }, _parent));
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/my/deals/AddDealerModal.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "CreatePaymentModal",
  __ssrInlineRender: true,
  props: {
    dealId: {}
  },
  emits: ["isPayCreated"],
  setup(__props, { emit: __emit }) {
    const { $useApi } = useNuxtApp();
    const authStore = useAuthStore();
    const { filters } = useDealsDatas();
    const managers = computed(() => {
      var _a;
      return (_a = filters.value.managers) != null ? _a : [];
    });
    const props = __props;
    const isOpen = ref(false);
    const methods = [
      "\u041D\u0430\u043B\u0438\u0447\u043D\u044B\u0435",
      "\u041F\u0435\u0440\u0435\u0432\u043E\u0434",
      "\u0414\u043E\u0433\u043E\u0432\u043E\u0440",
      "\u041D\u0430\u043B\u043E\u0436\u043A\u0430",
      "\u0421\u0441\u044B\u043B\u043A\u0430",
      "\u0414\u043E\u043B\u044F\u043C\u0438",
      "\u0420\u0430\u0441\u0441\u0440\u043E\u0447\u043A\u0430",
      "\u0421\u0447\u0435\u0442",
      "\u0412\u043E\u0437\u0432\u0440\u0430\u0442"
      // 'Бронь',
    ];
    const terminals = [
      "\u0422\u0435\u0440\u043C\u0438\u043D\u0430\u043B \u0418\u0437\u0438\u043D\u0435\u043E\u043D \u0421\u0411\u041F",
      "\u0422\u0435\u0440\u043C\u0438\u043D\u0430\u043B \u0418\u0437\u0438\u043D\u0435\u043E\u043D",
      "\u0422\u0435\u0440\u043C\u0438\u043D\u0430\u043B \u0418\u0437\u0438\u0411\u0443\u043A"
    ];
    const newPaymentBlank = {
      title: "1",
      price: 0,
      date: (/* @__PURE__ */ new Date()).toISOString().slice(0, 10),
      method: "\u0421\u0441\u044B\u043B\u043A\u0430",
      reservation: false,
      paymentId: "",
      paymentLink: "",
      terminal: "",
      isConfirmed: false,
      userId: 0
    };
    const newPayment = ref({ ...newPaymentBlank });
    const checkPaymentMessage = ref("\u0421\u0442\u0430\u0442\u0443\u0441");
    const isLoading = ref(false);
    const emit = __emit;
    const setDefaultManager = () => {
      var _a;
      const currentUserId = (_a = authStore.user) == null ? void 0 : _a.id;
      if (!currentUserId || newPayment.value.userId) {
        return;
      }
      if (managers.value.some((manager) => manager.id === currentUserId)) {
        newPayment.value.userId = currentUserId;
      }
    };
    watch(
      () => managers.value,
      () => {
        setDefaultManager();
      },
      { deep: true }
    );
    const savePayment = async () => {
      if (isLoading.value) return;
      try {
        isLoading.value = true;
        if (!newPayment.value.paymentId) {
          newPayment.value.terminal = "";
        }
        await $useApi.post(`/payments/`, {
          ...newPayment.value,
          dealId: props.dealId,
          userId: newPayment.value.userId || void 0
        });
        console.log("payment created");
        emit("isPayCreated");
        isOpen.value = false;
        return;
      } catch (error) {
        console.log(error);
      } finally {
        isLoading.value = false;
      }
    };
    watch(isOpen, () => {
      if (!isOpen.value) {
        newPayment.value = { ...newPaymentBlank };
      } else {
        setDefaultManager();
      }
    });
    watch(
      () => [newPayment.value.paymentId, newPayment.value.terminal],
      async ([paymentId, terminal]) => {
        if (paymentId && paymentId.length > 5 && terminal) {
          const { data } = await $useApi.get("payments/checkPayment", {
            params: { paymentId, terminal }
          });
          checkPaymentMessage.value = data.message;
          newPayment.value.price = data.price;
          newPayment.value.isConfirmed = data.isConfirmed;
        }
      }
    );
    watch(
      () => [newPayment.value.paymentLink],
      async ([paymentLink]) => {
        if (paymentLink && paymentLink.length > 5) {
          const { data } = await $useApi.get("payments/checkPaymentLink", {
            params: { link: paymentLink }
          });
          checkPaymentMessage.value = data.message;
          newPayment.value.price = data.price;
          newPayment.value.isConfirmed = data.isConfirmed;
          newPayment.value.paymentId = data.paymentId;
        }
      }
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiDialog = _sfc_main$4$1;
      const _component_UiDialogTrigger = _sfc_main$3$1;
      const _component_UiButton = _sfc_main$j;
      const _component_Icon = __nuxt_component_0$1;
      const _component_UiDialogContent = _sfc_main$l;
      const _component_UiDialogHeader = _sfc_main$2$1;
      const _component_UiDialogTitle = _sfc_main$1$2;
      const _component_UiCard = _sfc_main$b;
      const _component_UiCardHeader = _sfc_main$1$1;
      const _component_UiCardTitle = _sfc_main$c;
      const _component_UiCardDescription = _sfc_main$d;
      const _component_UiCardContent = _sfc_main$f;
      const _component_UiSelect = _sfc_main$6$1;
      const _component_UiSelectTrigger = _sfc_main$4$3;
      const _component_UiSelectValue = _sfc_main$5$2;
      const _component_UiSelectContent = _sfc_main$3$3;
      const _component_UiSelectGroup = _sfc_main$s;
      const _component_UiSelectItem = _sfc_main$2$3;
      const _component_UiLabel = _sfc_main$p;
      const _component_UiInput = _sfc_main$q;
      const _component_MyComboboxModels = _sfc_main$r;
      const _component_UiTextarea = _sfc_main$t;
      const _component_UiTabs = _sfc_main$2$4;
      const _component_UiTabsList = _sfc_main$u;
      const _component_UiTabsTrigger = _sfc_main$1$4;
      const _component_UiSwitch = _sfc_main$v;
      const _component_UiDialogFooter = _sfc_main$o;
      _push(ssrRenderComponent(_component_UiDialog, mergeProps({
        open: unref(isOpen),
        "onUpdate:open": ($event) => isRef(isOpen) ? isOpen.value = $event : null
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UiDialogTrigger, { "as-child": "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UiButton, { class: "h-5 w-5 px-0 py-2" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_Icon, {
                          name: "akar-icons:plus",
                          color: "white",
                          size: "15px"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_Icon, {
                            name: "akar-icons:plus",
                            color: "white",
                            size: "15px"
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UiButton, { class: "h-5 w-5 px-0 py-2" }, {
                      default: withCtx(() => [
                        createVNode(_component_Icon, {
                          name: "akar-icons:plus",
                          color: "white",
                          size: "15px"
                        })
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UiDialogContent, { class: "flex flex-col max-w-[450px]" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UiDialogHeader, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UiDialogTitle, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u043F\u043B\u0430\u0442\u0435\u0436`);
                            } else {
                              return [
                                createTextVNode("\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u043F\u043B\u0430\u0442\u0435\u0436")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_UiDialogTitle, null, {
                            default: withCtx(() => [
                              createTextVNode("\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u043F\u043B\u0430\u0442\u0435\u0436")
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<div class="flex gap-4"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UiCard, { class: "w-full" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UiCardHeader, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_UiCardTitle, null, null, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_UiCardDescription, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`${ssrInterpolate(unref(checkPaymentMessage))}`);
                                  } else {
                                    return [
                                      createTextVNode(toDisplayString(unref(checkPaymentMessage)), 1)
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_UiCardTitle),
                                createVNode(_component_UiCardDescription, null, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(unref(checkPaymentMessage)), 1)
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_UiCardContent, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            var _a, _b;
                            if (_push5) {
                              _push5(`<div class="flex flex-col gap-6"${_scopeId4}><div class="relative"${_scopeId4}>`);
                              _push5(ssrRenderComponent(_component_UiSelect, {
                                modelValue: unref(newPayment).method,
                                "onUpdate:modelValue": ($event) => unref(newPayment).method = $event
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_UiSelectTrigger, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(_component_UiSelectValue, {
                                            placeholder: unref(newPayment).method
                                          }, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(_component_UiSelectValue, {
                                              placeholder: unref(newPayment).method
                                            }, null, 8, ["placeholder"])
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_UiSelectContent, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`<!--[-->`);
                                          ssrRenderList(methods, (item, i) => {
                                            _push7(ssrRenderComponent(_component_UiSelectGroup, { key: i }, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(ssrRenderComponent(_component_UiSelectItem, { value: item }, {
                                                    default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                      if (_push9) {
                                                        _push9(`${ssrInterpolate(item)}`);
                                                      } else {
                                                        return [
                                                          createTextVNode(toDisplayString(item), 1)
                                                        ];
                                                      }
                                                    }),
                                                    _: 2
                                                  }, _parent8, _scopeId7));
                                                } else {
                                                  return [
                                                    createVNode(_component_UiSelectItem, { value: item }, {
                                                      default: withCtx(() => [
                                                        createTextVNode(toDisplayString(item), 1)
                                                      ]),
                                                      _: 2
                                                    }, 1032, ["value"])
                                                  ];
                                                }
                                              }),
                                              _: 2
                                            }, _parent7, _scopeId6));
                                          });
                                          _push7(`<!--]-->`);
                                        } else {
                                          return [
                                            (openBlock(), createBlock(Fragment, null, renderList(methods, (item, i) => {
                                              return createVNode(_component_UiSelectGroup, { key: i }, {
                                                default: withCtx(() => [
                                                  createVNode(_component_UiSelectItem, { value: item }, {
                                                    default: withCtx(() => [
                                                      createTextVNode(toDisplayString(item), 1)
                                                    ]),
                                                    _: 2
                                                  }, 1032, ["value"])
                                                ]),
                                                _: 2
                                              }, 1024);
                                            }), 64))
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_UiSelectTrigger, null, {
                                        default: withCtx(() => [
                                          createVNode(_component_UiSelectValue, {
                                            placeholder: unref(newPayment).method
                                          }, null, 8, ["placeholder"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_UiSelectContent, null, {
                                        default: withCtx(() => [
                                          (openBlock(), createBlock(Fragment, null, renderList(methods, (item, i) => {
                                            return createVNode(_component_UiSelectGroup, { key: i }, {
                                              default: withCtx(() => [
                                                createVNode(_component_UiSelectItem, { value: item }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(toDisplayString(item), 1)
                                                  ]),
                                                  _: 2
                                                }, 1032, ["value"])
                                              ]),
                                              _: 2
                                            }, 1024);
                                          }), 64))
                                        ]),
                                        _: 1
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(`</div><div class="relative"${_scopeId4}>`);
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
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_UiInput, {
                                modelValue: unref(newPayment).price,
                                "onUpdate:modelValue": ($event) => unref(newPayment).price = $event,
                                type: "number",
                                placeholder: "\u0421\u0443\u043C\u043C\u0430",
                                class: unref(newPayment).price ? "" : "outline-1 outline-rose-300"
                              }, null, _parent5, _scopeId4));
                              _push5(`</div><div class="relative"${_scopeId4}>`);
                              _push5(ssrRenderComponent(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`\u0414\u0430\u0442\u0430 \u043E\u043F\u043B\u0430\u0442\u044B`);
                                  } else {
                                    return [
                                      createTextVNode("\u0414\u0430\u0442\u0430 \u043E\u043F\u043B\u0430\u0442\u044B")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_UiInput, {
                                modelValue: unref(newPayment).date,
                                "onUpdate:modelValue": ($event) => unref(newPayment).date = $event,
                                type: "date",
                                placeholder: "\u0414\u0430\u0442\u0430 \u043E\u043F\u043B\u0430\u0442\u044B",
                                class: unref(newPayment).date ? "" : "outline-1 outline-rose-300"
                              }, null, _parent5, _scopeId4));
                              _push5(`</div><div class="relative"${_scopeId4}>`);
                              _push5(ssrRenderComponent(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`\u041C\u0435\u043D\u0435\u0434\u0436\u0435\u0440`);
                                  } else {
                                    return [
                                      createTextVNode("\u041C\u0435\u043D\u0435\u0434\u0436\u0435\u0440")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_MyComboboxModels, {
                                class: unref(newPayment).userId ? "" : "outline-1 outline-rose-300 rounded-md",
                                items: unref(managers).map((m) => ({ value: m.id, label: m.fullName })),
                                label: ((_a = unref(managers).find((m) => m.id === unref(newPayment).userId)) == null ? void 0 : _a.fullName) || "\u0412\u044B\u0431\u0440\u0430\u0442\u044C \u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440\u0430",
                                onSelectedItem: (value) => unref(newPayment).userId = value
                              }, null, _parent5, _scopeId4));
                              _push5(`</div>`);
                              if (unref(newPayment).method === "\u0412\u043E\u0437\u0432\u0440\u0430\u0442") {
                                _push5(`<div class="relative"${_scopeId4}>`);
                                _push5(ssrRenderComponent(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1" }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`\u041F\u0440\u0438\u0447\u0438\u043D\u0430`);
                                    } else {
                                      return [
                                        createTextVNode("\u041F\u0440\u0438\u0447\u0438\u043D\u0430")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                                _push5(ssrRenderComponent(_component_UiTextarea, {
                                  modelValue: unref(newPayment).description,
                                  "onUpdate:modelValue": ($event) => unref(newPayment).description = $event,
                                  placeholder: "\u0418\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F \u043E \u0432\u043E\u0437\u0432\u0440\u0430\u0442\u0435"
                                }, null, _parent5, _scopeId4));
                                _push5(`</div>`);
                              } else {
                                _push5(`<!---->`);
                              }
                              _push5(`<div class="relative"${_scopeId4}>`);
                              if (unref(newPayment).paymentLink) {
                                _push5(ssrRenderComponent(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`\u0421\u0441\u044B\u043B\u043A\u0430 \u043D\u0430 \u043E\u043F\u043B\u0430\u0442\u0443`);
                                    } else {
                                      return [
                                        createTextVNode("\u0421\u0441\u044B\u043B\u043A\u0430 \u043D\u0430 \u043E\u043F\u043B\u0430\u0442\u0443")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                              } else {
                                _push5(`<!---->`);
                              }
                              _push5(ssrRenderComponent(_component_UiInput, {
                                modelValue: unref(newPayment).paymentLink,
                                "onUpdate:modelValue": ($event) => unref(newPayment).paymentLink = $event,
                                placeholder: "\u0421\u0441\u044B\u043B\u043A\u0430 \u043D\u0430 \u043E\u043F\u043B\u0430\u0442\u0443"
                              }, null, _parent5, _scopeId4));
                              _push5(`</div><div class="relative"${_scopeId4}>`);
                              if (unref(newPayment).paymentId) {
                                _push5(ssrRenderComponent(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`paymentId`);
                                    } else {
                                      return [
                                        createTextVNode("paymentId")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                              } else {
                                _push5(`<!---->`);
                              }
                              _push5(ssrRenderComponent(_component_UiInput, {
                                modelValue: unref(newPayment).paymentId,
                                "onUpdate:modelValue": ($event) => unref(newPayment).paymentId = $event,
                                placeholder: "paymentId"
                              }, null, _parent5, _scopeId4));
                              _push5(`</div>`);
                              if (unref(newPayment).paymentId && !unref(newPayment).paymentLink) {
                                _push5(`<div class="${ssrRenderClass(unref(newPayment).terminal ? "" : "outline-1 outline-rose-300")}"${_scopeId4}>`);
                                _push5(ssrRenderComponent(_component_UiTabs, null, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(_component_UiTabsList, { class: "flex" }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`<!--[-->`);
                                            ssrRenderList(terminals, (t) => {
                                              _push7(ssrRenderComponent(_component_UiTabsTrigger, {
                                                key: t,
                                                value: t,
                                                class: "w-full",
                                                onClick: ($event) => unref(newPayment).terminal = t
                                              }, {
                                                default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                  if (_push8) {
                                                    _push8(`${ssrInterpolate(t.slice(9))}`);
                                                  } else {
                                                    return [
                                                      createTextVNode(toDisplayString(t.slice(9)), 1)
                                                    ];
                                                  }
                                                }),
                                                _: 2
                                              }, _parent7, _scopeId6));
                                            });
                                            _push7(`<!--]-->`);
                                          } else {
                                            return [
                                              (openBlock(), createBlock(Fragment, null, renderList(terminals, (t) => {
                                                return createVNode(_component_UiTabsTrigger, {
                                                  key: t,
                                                  value: t,
                                                  class: "w-full",
                                                  onClick: ($event) => unref(newPayment).terminal = t
                                                }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(toDisplayString(t.slice(9)), 1)
                                                  ]),
                                                  _: 2
                                                }, 1032, ["value", "onClick"]);
                                              }), 64))
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(_component_UiTabsList, { class: "flex" }, {
                                          default: withCtx(() => [
                                            (openBlock(), createBlock(Fragment, null, renderList(terminals, (t) => {
                                              return createVNode(_component_UiTabsTrigger, {
                                                key: t,
                                                value: t,
                                                class: "w-full",
                                                onClick: ($event) => unref(newPayment).terminal = t
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode(toDisplayString(t.slice(9)), 1)
                                                ]),
                                                _: 2
                                              }, 1032, ["value", "onClick"]);
                                            }), 64))
                                          ]),
                                          _: 1
                                        })
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                                _push5(`</div>`);
                              } else {
                                _push5(`<!---->`);
                              }
                              _push5(`<div class="relative flex items-center space-x-2"${_scopeId4}>`);
                              _push5(ssrRenderComponent(_component_UiSwitch, {
                                id: "isConfirmed",
                                checked: unref(newPayment).isConfirmed,
                                "onUpdate:checked": ($event) => unref(newPayment).isConfirmed = $event
                              }, null, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_UiLabel, { for: "isConfirmed" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`\u041F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043D`);
                                  } else {
                                    return [
                                      createTextVNode("\u041F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043D")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(`</div></div>`);
                            } else {
                              return [
                                createVNode("div", { class: "flex flex-col gap-6" }, [
                                  createVNode("div", { class: "relative" }, [
                                    createVNode(_component_UiSelect, {
                                      modelValue: unref(newPayment).method,
                                      "onUpdate:modelValue": ($event) => unref(newPayment).method = $event
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_UiSelectTrigger, null, {
                                          default: withCtx(() => [
                                            createVNode(_component_UiSelectValue, {
                                              placeholder: unref(newPayment).method
                                            }, null, 8, ["placeholder"])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_UiSelectContent, null, {
                                          default: withCtx(() => [
                                            (openBlock(), createBlock(Fragment, null, renderList(methods, (item, i) => {
                                              return createVNode(_component_UiSelectGroup, { key: i }, {
                                                default: withCtx(() => [
                                                  createVNode(_component_UiSelectItem, { value: item }, {
                                                    default: withCtx(() => [
                                                      createTextVNode(toDisplayString(item), 1)
                                                    ]),
                                                    _: 2
                                                  }, 1032, ["value"])
                                                ]),
                                                _: 2
                                              }, 1024);
                                            }), 64))
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    }, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  createVNode("div", { class: "relative" }, [
                                    createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                                      default: withCtx(() => [
                                        createTextVNode("\u0421\u0443\u043C\u043C\u0430")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_UiInput, {
                                      modelValue: unref(newPayment).price,
                                      "onUpdate:modelValue": ($event) => unref(newPayment).price = $event,
                                      type: "number",
                                      placeholder: "\u0421\u0443\u043C\u043C\u0430",
                                      class: unref(newPayment).price ? "" : "outline-1 outline-rose-300"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "class"])
                                  ]),
                                  createVNode("div", { class: "relative" }, [
                                    createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                                      default: withCtx(() => [
                                        createTextVNode("\u0414\u0430\u0442\u0430 \u043E\u043F\u043B\u0430\u0442\u044B")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_UiInput, {
                                      modelValue: unref(newPayment).date,
                                      "onUpdate:modelValue": ($event) => unref(newPayment).date = $event,
                                      type: "date",
                                      placeholder: "\u0414\u0430\u0442\u0430 \u043E\u043F\u043B\u0430\u0442\u044B",
                                      class: unref(newPayment).date ? "" : "outline-1 outline-rose-300"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "class"])
                                  ]),
                                  createVNode("div", { class: "relative" }, [
                                    createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                                      default: withCtx(() => [
                                        createTextVNode("\u041C\u0435\u043D\u0435\u0434\u0436\u0435\u0440")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_MyComboboxModels, {
                                      class: unref(newPayment).userId ? "" : "outline-1 outline-rose-300 rounded-md",
                                      items: unref(managers).map((m) => ({ value: m.id, label: m.fullName })),
                                      label: ((_b = unref(managers).find((m) => m.id === unref(newPayment).userId)) == null ? void 0 : _b.fullName) || "\u0412\u044B\u0431\u0440\u0430\u0442\u044C \u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440\u0430",
                                      onSelectedItem: (value) => unref(newPayment).userId = value
                                    }, null, 8, ["class", "items", "label", "onSelectedItem"])
                                  ]),
                                  unref(newPayment).method === "\u0412\u043E\u0437\u0432\u0440\u0430\u0442" ? (openBlock(), createBlock("div", {
                                    key: 0,
                                    class: "relative"
                                  }, [
                                    createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1" }, {
                                      default: withCtx(() => [
                                        createTextVNode("\u041F\u0440\u0438\u0447\u0438\u043D\u0430")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_UiTextarea, {
                                      modelValue: unref(newPayment).description,
                                      "onUpdate:modelValue": ($event) => unref(newPayment).description = $event,
                                      placeholder: "\u0418\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F \u043E \u0432\u043E\u0437\u0432\u0440\u0430\u0442\u0435"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ])) : createCommentVNode("", true),
                                  createVNode("div", { class: "relative" }, [
                                    unref(newPayment).paymentLink ? (openBlock(), createBlock(_component_UiLabel, {
                                      key: 0,
                                      class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode("\u0421\u0441\u044B\u043B\u043A\u0430 \u043D\u0430 \u043E\u043F\u043B\u0430\u0442\u0443")
                                      ]),
                                      _: 1
                                    })) : createCommentVNode("", true),
                                    createVNode(_component_UiInput, {
                                      modelValue: unref(newPayment).paymentLink,
                                      "onUpdate:modelValue": ($event) => unref(newPayment).paymentLink = $event,
                                      placeholder: "\u0421\u0441\u044B\u043B\u043A\u0430 \u043D\u0430 \u043E\u043F\u043B\u0430\u0442\u0443"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  createVNode("div", { class: "relative" }, [
                                    unref(newPayment).paymentId ? (openBlock(), createBlock(_component_UiLabel, {
                                      key: 0,
                                      class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode("paymentId")
                                      ]),
                                      _: 1
                                    })) : createCommentVNode("", true),
                                    createVNode(_component_UiInput, {
                                      modelValue: unref(newPayment).paymentId,
                                      "onUpdate:modelValue": ($event) => unref(newPayment).paymentId = $event,
                                      placeholder: "paymentId"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  unref(newPayment).paymentId && !unref(newPayment).paymentLink ? (openBlock(), createBlock("div", {
                                    key: 1,
                                    class: unref(newPayment).terminal ? "" : "outline-1 outline-rose-300"
                                  }, [
                                    createVNode(_component_UiTabs, null, {
                                      default: withCtx(() => [
                                        createVNode(_component_UiTabsList, { class: "flex" }, {
                                          default: withCtx(() => [
                                            (openBlock(), createBlock(Fragment, null, renderList(terminals, (t) => {
                                              return createVNode(_component_UiTabsTrigger, {
                                                key: t,
                                                value: t,
                                                class: "w-full",
                                                onClick: ($event) => unref(newPayment).terminal = t
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode(toDisplayString(t.slice(9)), 1)
                                                ]),
                                                _: 2
                                              }, 1032, ["value", "onClick"]);
                                            }), 64))
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    })
                                  ], 2)) : createCommentVNode("", true),
                                  createVNode("div", { class: "relative flex items-center space-x-2" }, [
                                    createVNode(_component_UiSwitch, {
                                      id: "isConfirmed",
                                      checked: unref(newPayment).isConfirmed,
                                      "onUpdate:checked": ($event) => unref(newPayment).isConfirmed = $event
                                    }, null, 8, ["checked", "onUpdate:checked"]),
                                    createVNode(_component_UiLabel, { for: "isConfirmed" }, {
                                      default: withCtx(() => [
                                        createTextVNode("\u041F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043D")
                                      ]),
                                      _: 1
                                    })
                                  ])
                                ])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_UiCardHeader, null, {
                            default: withCtx(() => [
                              createVNode(_component_UiCardTitle),
                              createVNode(_component_UiCardDescription, null, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(unref(checkPaymentMessage)), 1)
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
                                createVNode("div", { class: "flex flex-col gap-6" }, [
                                  createVNode("div", { class: "relative" }, [
                                    createVNode(_component_UiSelect, {
                                      modelValue: unref(newPayment).method,
                                      "onUpdate:modelValue": ($event) => unref(newPayment).method = $event
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_UiSelectTrigger, null, {
                                          default: withCtx(() => [
                                            createVNode(_component_UiSelectValue, {
                                              placeholder: unref(newPayment).method
                                            }, null, 8, ["placeholder"])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_UiSelectContent, null, {
                                          default: withCtx(() => [
                                            (openBlock(), createBlock(Fragment, null, renderList(methods, (item, i) => {
                                              return createVNode(_component_UiSelectGroup, { key: i }, {
                                                default: withCtx(() => [
                                                  createVNode(_component_UiSelectItem, { value: item }, {
                                                    default: withCtx(() => [
                                                      createTextVNode(toDisplayString(item), 1)
                                                    ]),
                                                    _: 2
                                                  }, 1032, ["value"])
                                                ]),
                                                _: 2
                                              }, 1024);
                                            }), 64))
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    }, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  createVNode("div", { class: "relative" }, [
                                    createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                                      default: withCtx(() => [
                                        createTextVNode("\u0421\u0443\u043C\u043C\u0430")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_UiInput, {
                                      modelValue: unref(newPayment).price,
                                      "onUpdate:modelValue": ($event) => unref(newPayment).price = $event,
                                      type: "number",
                                      placeholder: "\u0421\u0443\u043C\u043C\u0430",
                                      class: unref(newPayment).price ? "" : "outline-1 outline-rose-300"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "class"])
                                  ]),
                                  createVNode("div", { class: "relative" }, [
                                    createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                                      default: withCtx(() => [
                                        createTextVNode("\u0414\u0430\u0442\u0430 \u043E\u043F\u043B\u0430\u0442\u044B")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_UiInput, {
                                      modelValue: unref(newPayment).date,
                                      "onUpdate:modelValue": ($event) => unref(newPayment).date = $event,
                                      type: "date",
                                      placeholder: "\u0414\u0430\u0442\u0430 \u043E\u043F\u043B\u0430\u0442\u044B",
                                      class: unref(newPayment).date ? "" : "outline-1 outline-rose-300"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "class"])
                                  ]),
                                  createVNode("div", { class: "relative" }, [
                                    createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                                      default: withCtx(() => [
                                        createTextVNode("\u041C\u0435\u043D\u0435\u0434\u0436\u0435\u0440")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_MyComboboxModels, {
                                      class: unref(newPayment).userId ? "" : "outline-1 outline-rose-300 rounded-md",
                                      items: unref(managers).map((m) => ({ value: m.id, label: m.fullName })),
                                      label: ((_a = unref(managers).find((m) => m.id === unref(newPayment).userId)) == null ? void 0 : _a.fullName) || "\u0412\u044B\u0431\u0440\u0430\u0442\u044C \u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440\u0430",
                                      onSelectedItem: (value) => unref(newPayment).userId = value
                                    }, null, 8, ["class", "items", "label", "onSelectedItem"])
                                  ]),
                                  unref(newPayment).method === "\u0412\u043E\u0437\u0432\u0440\u0430\u0442" ? (openBlock(), createBlock("div", {
                                    key: 0,
                                    class: "relative"
                                  }, [
                                    createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1" }, {
                                      default: withCtx(() => [
                                        createTextVNode("\u041F\u0440\u0438\u0447\u0438\u043D\u0430")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_UiTextarea, {
                                      modelValue: unref(newPayment).description,
                                      "onUpdate:modelValue": ($event) => unref(newPayment).description = $event,
                                      placeholder: "\u0418\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F \u043E \u0432\u043E\u0437\u0432\u0440\u0430\u0442\u0435"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ])) : createCommentVNode("", true),
                                  createVNode("div", { class: "relative" }, [
                                    unref(newPayment).paymentLink ? (openBlock(), createBlock(_component_UiLabel, {
                                      key: 0,
                                      class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode("\u0421\u0441\u044B\u043B\u043A\u0430 \u043D\u0430 \u043E\u043F\u043B\u0430\u0442\u0443")
                                      ]),
                                      _: 1
                                    })) : createCommentVNode("", true),
                                    createVNode(_component_UiInput, {
                                      modelValue: unref(newPayment).paymentLink,
                                      "onUpdate:modelValue": ($event) => unref(newPayment).paymentLink = $event,
                                      placeholder: "\u0421\u0441\u044B\u043B\u043A\u0430 \u043D\u0430 \u043E\u043F\u043B\u0430\u0442\u0443"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  createVNode("div", { class: "relative" }, [
                                    unref(newPayment).paymentId ? (openBlock(), createBlock(_component_UiLabel, {
                                      key: 0,
                                      class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode("paymentId")
                                      ]),
                                      _: 1
                                    })) : createCommentVNode("", true),
                                    createVNode(_component_UiInput, {
                                      modelValue: unref(newPayment).paymentId,
                                      "onUpdate:modelValue": ($event) => unref(newPayment).paymentId = $event,
                                      placeholder: "paymentId"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  unref(newPayment).paymentId && !unref(newPayment).paymentLink ? (openBlock(), createBlock("div", {
                                    key: 1,
                                    class: unref(newPayment).terminal ? "" : "outline-1 outline-rose-300"
                                  }, [
                                    createVNode(_component_UiTabs, null, {
                                      default: withCtx(() => [
                                        createVNode(_component_UiTabsList, { class: "flex" }, {
                                          default: withCtx(() => [
                                            (openBlock(), createBlock(Fragment, null, renderList(terminals, (t) => {
                                              return createVNode(_component_UiTabsTrigger, {
                                                key: t,
                                                value: t,
                                                class: "w-full",
                                                onClick: ($event) => unref(newPayment).terminal = t
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode(toDisplayString(t.slice(9)), 1)
                                                ]),
                                                _: 2
                                              }, 1032, ["value", "onClick"]);
                                            }), 64))
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    })
                                  ], 2)) : createCommentVNode("", true),
                                  createVNode("div", { class: "relative flex items-center space-x-2" }, [
                                    createVNode(_component_UiSwitch, {
                                      id: "isConfirmed",
                                      checked: unref(newPayment).isConfirmed,
                                      "onUpdate:checked": ($event) => unref(newPayment).isConfirmed = $event
                                    }, null, 8, ["checked", "onUpdate:checked"]),
                                    createVNode(_component_UiLabel, { for: "isConfirmed" }, {
                                      default: withCtx(() => [
                                        createTextVNode("\u041F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043D")
                                      ]),
                                      _: 1
                                    })
                                  ])
                                ])
                              ];
                            }),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                  _push3(ssrRenderComponent(_component_UiDialogFooter, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UiButton, {
                          disabled: unref(isLoading),
                          onClick: savePayment
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`${ssrInterpolate(unref(isLoading) ? "\u0421\u043E\u0437\u0434\u0430\u043D\u0438\u0435..." : "\u0421\u043E\u0437\u0434\u0430\u0442\u044C")}`);
                            } else {
                              return [
                                createTextVNode(toDisplayString(unref(isLoading) ? "\u0421\u043E\u0437\u0434\u0430\u043D\u0438\u0435..." : "\u0421\u043E\u0437\u0434\u0430\u0442\u044C"), 1)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_UiButton, {
                            disabled: unref(isLoading),
                            onClick: savePayment
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(unref(isLoading) ? "\u0421\u043E\u0437\u0434\u0430\u043D\u0438\u0435..." : "\u0421\u043E\u0437\u0434\u0430\u0442\u044C"), 1)
                            ]),
                            _: 1
                          }, 8, ["disabled"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UiDialogHeader, null, {
                      default: withCtx(() => [
                        createVNode(_component_UiDialogTitle, null, {
                          default: withCtx(() => [
                            createTextVNode("\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u043F\u043B\u0430\u0442\u0435\u0436")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode("div", { class: "flex gap-4" }, [
                      createVNode(_component_UiCard, { class: "w-full" }, {
                        default: withCtx(() => [
                          createVNode(_component_UiCardHeader, null, {
                            default: withCtx(() => [
                              createVNode(_component_UiCardTitle),
                              createVNode(_component_UiCardDescription, null, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(unref(checkPaymentMessage)), 1)
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
                                createVNode("div", { class: "flex flex-col gap-6" }, [
                                  createVNode("div", { class: "relative" }, [
                                    createVNode(_component_UiSelect, {
                                      modelValue: unref(newPayment).method,
                                      "onUpdate:modelValue": ($event) => unref(newPayment).method = $event
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_UiSelectTrigger, null, {
                                          default: withCtx(() => [
                                            createVNode(_component_UiSelectValue, {
                                              placeholder: unref(newPayment).method
                                            }, null, 8, ["placeholder"])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_UiSelectContent, null, {
                                          default: withCtx(() => [
                                            (openBlock(), createBlock(Fragment, null, renderList(methods, (item, i) => {
                                              return createVNode(_component_UiSelectGroup, { key: i }, {
                                                default: withCtx(() => [
                                                  createVNode(_component_UiSelectItem, { value: item }, {
                                                    default: withCtx(() => [
                                                      createTextVNode(toDisplayString(item), 1)
                                                    ]),
                                                    _: 2
                                                  }, 1032, ["value"])
                                                ]),
                                                _: 2
                                              }, 1024);
                                            }), 64))
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    }, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  createVNode("div", { class: "relative" }, [
                                    createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                                      default: withCtx(() => [
                                        createTextVNode("\u0421\u0443\u043C\u043C\u0430")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_UiInput, {
                                      modelValue: unref(newPayment).price,
                                      "onUpdate:modelValue": ($event) => unref(newPayment).price = $event,
                                      type: "number",
                                      placeholder: "\u0421\u0443\u043C\u043C\u0430",
                                      class: unref(newPayment).price ? "" : "outline-1 outline-rose-300"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "class"])
                                  ]),
                                  createVNode("div", { class: "relative" }, [
                                    createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                                      default: withCtx(() => [
                                        createTextVNode("\u0414\u0430\u0442\u0430 \u043E\u043F\u043B\u0430\u0442\u044B")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_UiInput, {
                                      modelValue: unref(newPayment).date,
                                      "onUpdate:modelValue": ($event) => unref(newPayment).date = $event,
                                      type: "date",
                                      placeholder: "\u0414\u0430\u0442\u0430 \u043E\u043F\u043B\u0430\u0442\u044B",
                                      class: unref(newPayment).date ? "" : "outline-1 outline-rose-300"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "class"])
                                  ]),
                                  createVNode("div", { class: "relative" }, [
                                    createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                                      default: withCtx(() => [
                                        createTextVNode("\u041C\u0435\u043D\u0435\u0434\u0436\u0435\u0440")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_MyComboboxModels, {
                                      class: unref(newPayment).userId ? "" : "outline-1 outline-rose-300 rounded-md",
                                      items: unref(managers).map((m) => ({ value: m.id, label: m.fullName })),
                                      label: ((_a = unref(managers).find((m) => m.id === unref(newPayment).userId)) == null ? void 0 : _a.fullName) || "\u0412\u044B\u0431\u0440\u0430\u0442\u044C \u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440\u0430",
                                      onSelectedItem: (value) => unref(newPayment).userId = value
                                    }, null, 8, ["class", "items", "label", "onSelectedItem"])
                                  ]),
                                  unref(newPayment).method === "\u0412\u043E\u0437\u0432\u0440\u0430\u0442" ? (openBlock(), createBlock("div", {
                                    key: 0,
                                    class: "relative"
                                  }, [
                                    createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1" }, {
                                      default: withCtx(() => [
                                        createTextVNode("\u041F\u0440\u0438\u0447\u0438\u043D\u0430")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_UiTextarea, {
                                      modelValue: unref(newPayment).description,
                                      "onUpdate:modelValue": ($event) => unref(newPayment).description = $event,
                                      placeholder: "\u0418\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F \u043E \u0432\u043E\u0437\u0432\u0440\u0430\u0442\u0435"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ])) : createCommentVNode("", true),
                                  createVNode("div", { class: "relative" }, [
                                    unref(newPayment).paymentLink ? (openBlock(), createBlock(_component_UiLabel, {
                                      key: 0,
                                      class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode("\u0421\u0441\u044B\u043B\u043A\u0430 \u043D\u0430 \u043E\u043F\u043B\u0430\u0442\u0443")
                                      ]),
                                      _: 1
                                    })) : createCommentVNode("", true),
                                    createVNode(_component_UiInput, {
                                      modelValue: unref(newPayment).paymentLink,
                                      "onUpdate:modelValue": ($event) => unref(newPayment).paymentLink = $event,
                                      placeholder: "\u0421\u0441\u044B\u043B\u043A\u0430 \u043D\u0430 \u043E\u043F\u043B\u0430\u0442\u0443"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  createVNode("div", { class: "relative" }, [
                                    unref(newPayment).paymentId ? (openBlock(), createBlock(_component_UiLabel, {
                                      key: 0,
                                      class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode("paymentId")
                                      ]),
                                      _: 1
                                    })) : createCommentVNode("", true),
                                    createVNode(_component_UiInput, {
                                      modelValue: unref(newPayment).paymentId,
                                      "onUpdate:modelValue": ($event) => unref(newPayment).paymentId = $event,
                                      placeholder: "paymentId"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  unref(newPayment).paymentId && !unref(newPayment).paymentLink ? (openBlock(), createBlock("div", {
                                    key: 1,
                                    class: unref(newPayment).terminal ? "" : "outline-1 outline-rose-300"
                                  }, [
                                    createVNode(_component_UiTabs, null, {
                                      default: withCtx(() => [
                                        createVNode(_component_UiTabsList, { class: "flex" }, {
                                          default: withCtx(() => [
                                            (openBlock(), createBlock(Fragment, null, renderList(terminals, (t) => {
                                              return createVNode(_component_UiTabsTrigger, {
                                                key: t,
                                                value: t,
                                                class: "w-full",
                                                onClick: ($event) => unref(newPayment).terminal = t
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode(toDisplayString(t.slice(9)), 1)
                                                ]),
                                                _: 2
                                              }, 1032, ["value", "onClick"]);
                                            }), 64))
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    })
                                  ], 2)) : createCommentVNode("", true),
                                  createVNode("div", { class: "relative flex items-center space-x-2" }, [
                                    createVNode(_component_UiSwitch, {
                                      id: "isConfirmed",
                                      checked: unref(newPayment).isConfirmed,
                                      "onUpdate:checked": ($event) => unref(newPayment).isConfirmed = $event
                                    }, null, 8, ["checked", "onUpdate:checked"]),
                                    createVNode(_component_UiLabel, { for: "isConfirmed" }, {
                                      default: withCtx(() => [
                                        createTextVNode("\u041F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043D")
                                      ]),
                                      _: 1
                                    })
                                  ])
                                ])
                              ];
                            }),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    createVNode(_component_UiDialogFooter, null, {
                      default: withCtx(() => [
                        createVNode(_component_UiButton, {
                          disabled: unref(isLoading),
                          onClick: savePayment
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(unref(isLoading) ? "\u0421\u043E\u0437\u0434\u0430\u043D\u0438\u0435..." : "\u0421\u043E\u0437\u0434\u0430\u0442\u044C"), 1)
                          ]),
                          _: 1
                        }, 8, ["disabled"])
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
              createVNode(_component_UiDialogTrigger, { "as-child": "" }, {
                default: withCtx(() => [
                  createVNode(_component_UiButton, { class: "h-5 w-5 px-0 py-2" }, {
                    default: withCtx(() => [
                      createVNode(_component_Icon, {
                        name: "akar-icons:plus",
                        color: "white",
                        size: "15px"
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_UiDialogContent, { class: "flex flex-col max-w-[450px]" }, {
                default: withCtx(() => [
                  createVNode(_component_UiDialogHeader, null, {
                    default: withCtx(() => [
                      createVNode(_component_UiDialogTitle, null, {
                        default: withCtx(() => [
                          createTextVNode("\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u043F\u043B\u0430\u0442\u0435\u0436")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode("div", { class: "flex gap-4" }, [
                    createVNode(_component_UiCard, { class: "w-full" }, {
                      default: withCtx(() => [
                        createVNode(_component_UiCardHeader, null, {
                          default: withCtx(() => [
                            createVNode(_component_UiCardTitle),
                            createVNode(_component_UiCardDescription, null, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(unref(checkPaymentMessage)), 1)
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
                              createVNode("div", { class: "flex flex-col gap-6" }, [
                                createVNode("div", { class: "relative" }, [
                                  createVNode(_component_UiSelect, {
                                    modelValue: unref(newPayment).method,
                                    "onUpdate:modelValue": ($event) => unref(newPayment).method = $event
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_UiSelectTrigger, null, {
                                        default: withCtx(() => [
                                          createVNode(_component_UiSelectValue, {
                                            placeholder: unref(newPayment).method
                                          }, null, 8, ["placeholder"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_UiSelectContent, null, {
                                        default: withCtx(() => [
                                          (openBlock(), createBlock(Fragment, null, renderList(methods, (item, i) => {
                                            return createVNode(_component_UiSelectGroup, { key: i }, {
                                              default: withCtx(() => [
                                                createVNode(_component_UiSelectItem, { value: item }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(toDisplayString(item), 1)
                                                  ]),
                                                  _: 2
                                                }, 1032, ["value"])
                                              ]),
                                              _: 2
                                            }, 1024);
                                          }), 64))
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                createVNode("div", { class: "relative" }, [
                                  createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                                    default: withCtx(() => [
                                      createTextVNode("\u0421\u0443\u043C\u043C\u0430")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_UiInput, {
                                    modelValue: unref(newPayment).price,
                                    "onUpdate:modelValue": ($event) => unref(newPayment).price = $event,
                                    type: "number",
                                    placeholder: "\u0421\u0443\u043C\u043C\u0430",
                                    class: unref(newPayment).price ? "" : "outline-1 outline-rose-300"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "class"])
                                ]),
                                createVNode("div", { class: "relative" }, [
                                  createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                                    default: withCtx(() => [
                                      createTextVNode("\u0414\u0430\u0442\u0430 \u043E\u043F\u043B\u0430\u0442\u044B")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_UiInput, {
                                    modelValue: unref(newPayment).date,
                                    "onUpdate:modelValue": ($event) => unref(newPayment).date = $event,
                                    type: "date",
                                    placeholder: "\u0414\u0430\u0442\u0430 \u043E\u043F\u043B\u0430\u0442\u044B",
                                    class: unref(newPayment).date ? "" : "outline-1 outline-rose-300"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "class"])
                                ]),
                                createVNode("div", { class: "relative" }, [
                                  createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                                    default: withCtx(() => [
                                      createTextVNode("\u041C\u0435\u043D\u0435\u0434\u0436\u0435\u0440")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_MyComboboxModels, {
                                    class: unref(newPayment).userId ? "" : "outline-1 outline-rose-300 rounded-md",
                                    items: unref(managers).map((m) => ({ value: m.id, label: m.fullName })),
                                    label: ((_a = unref(managers).find((m) => m.id === unref(newPayment).userId)) == null ? void 0 : _a.fullName) || "\u0412\u044B\u0431\u0440\u0430\u0442\u044C \u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440\u0430",
                                    onSelectedItem: (value) => unref(newPayment).userId = value
                                  }, null, 8, ["class", "items", "label", "onSelectedItem"])
                                ]),
                                unref(newPayment).method === "\u0412\u043E\u0437\u0432\u0440\u0430\u0442" ? (openBlock(), createBlock("div", {
                                  key: 0,
                                  class: "relative"
                                }, [
                                  createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1" }, {
                                    default: withCtx(() => [
                                      createTextVNode("\u041F\u0440\u0438\u0447\u0438\u043D\u0430")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_UiTextarea, {
                                    modelValue: unref(newPayment).description,
                                    "onUpdate:modelValue": ($event) => unref(newPayment).description = $event,
                                    placeholder: "\u0418\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F \u043E \u0432\u043E\u0437\u0432\u0440\u0430\u0442\u0435"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ])) : createCommentVNode("", true),
                                createVNode("div", { class: "relative" }, [
                                  unref(newPayment).paymentLink ? (openBlock(), createBlock(_component_UiLabel, {
                                    key: 0,
                                    class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("\u0421\u0441\u044B\u043B\u043A\u0430 \u043D\u0430 \u043E\u043F\u043B\u0430\u0442\u0443")
                                    ]),
                                    _: 1
                                  })) : createCommentVNode("", true),
                                  createVNode(_component_UiInput, {
                                    modelValue: unref(newPayment).paymentLink,
                                    "onUpdate:modelValue": ($event) => unref(newPayment).paymentLink = $event,
                                    placeholder: "\u0421\u0441\u044B\u043B\u043A\u0430 \u043D\u0430 \u043E\u043F\u043B\u0430\u0442\u0443"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                createVNode("div", { class: "relative" }, [
                                  unref(newPayment).paymentId ? (openBlock(), createBlock(_component_UiLabel, {
                                    key: 0,
                                    class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("paymentId")
                                    ]),
                                    _: 1
                                  })) : createCommentVNode("", true),
                                  createVNode(_component_UiInput, {
                                    modelValue: unref(newPayment).paymentId,
                                    "onUpdate:modelValue": ($event) => unref(newPayment).paymentId = $event,
                                    placeholder: "paymentId"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                unref(newPayment).paymentId && !unref(newPayment).paymentLink ? (openBlock(), createBlock("div", {
                                  key: 1,
                                  class: unref(newPayment).terminal ? "" : "outline-1 outline-rose-300"
                                }, [
                                  createVNode(_component_UiTabs, null, {
                                    default: withCtx(() => [
                                      createVNode(_component_UiTabsList, { class: "flex" }, {
                                        default: withCtx(() => [
                                          (openBlock(), createBlock(Fragment, null, renderList(terminals, (t) => {
                                            return createVNode(_component_UiTabsTrigger, {
                                              key: t,
                                              value: t,
                                              class: "w-full",
                                              onClick: ($event) => unref(newPayment).terminal = t
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(t.slice(9)), 1)
                                              ]),
                                              _: 2
                                            }, 1032, ["value", "onClick"]);
                                          }), 64))
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  })
                                ], 2)) : createCommentVNode("", true),
                                createVNode("div", { class: "relative flex items-center space-x-2" }, [
                                  createVNode(_component_UiSwitch, {
                                    id: "isConfirmed",
                                    checked: unref(newPayment).isConfirmed,
                                    "onUpdate:checked": ($event) => unref(newPayment).isConfirmed = $event
                                  }, null, 8, ["checked", "onUpdate:checked"]),
                                  createVNode(_component_UiLabel, { for: "isConfirmed" }, {
                                    default: withCtx(() => [
                                      createTextVNode("\u041F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043D")
                                    ]),
                                    _: 1
                                  })
                                ])
                              ])
                            ];
                          }),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  createVNode(_component_UiDialogFooter, null, {
                    default: withCtx(() => [
                      createVNode(_component_UiButton, {
                        disabled: unref(isLoading),
                        onClick: savePayment
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(unref(isLoading) ? "\u0421\u043E\u0437\u0434\u0430\u043D\u0438\u0435..." : "\u0421\u043E\u0437\u0434\u0430\u0442\u044C"), 1)
                        ]),
                        _: 1
                      }, 8, ["disabled"])
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
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/my/payments/CreatePaymentModal.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "CreateDopCard",
  __ssrInlineRender: true,
  props: {
    managers: {},
    doptypes: {}
  },
  emits: ["update:dopBlank"],
  setup(__props, { emit: __emit }) {
    const newDopBlank = {
      id: 0,
      dealId: 0,
      saleDate: (/* @__PURE__ */ new Date()).toISOString().slice(0, 10),
      type: "",
      price: 0,
      userId: 0
    };
    const dopData = ref({ ...newDopBlank });
    const emit = __emit;
    watch(
      dopData,
      () => {
        emit("update:dopBlank", dopData.value);
      },
      { deep: true }
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiCard = _sfc_main$b;
      const _component_UiCardHeader = _sfc_main$1$1;
      const _component_UiCardTitle = _sfc_main$c;
      const _component_UiCardDescription = _sfc_main$d;
      const _component_UiCardContent = _sfc_main$f;
      const _component_UiLabel = _sfc_main$p;
      const _component_UiInput = _sfc_main$q;
      const _component_MyComboboxModels = _sfc_main$r;
      const _component_MyCombobox = _sfc_main$x;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_UiCard, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UiCardHeader, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UiCardTitle, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`\u0414\u043E\u043F. \u043F\u0440\u043E\u0434\u0430\u0436\u0430`);
                      } else {
                        return [
                          createTextVNode("\u0414\u043E\u043F. \u043F\u0440\u043E\u0434\u0430\u0436\u0430")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UiCardDescription, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`\u0417\u0430\u043F\u043E\u043B\u043D\u0438 \u0434\u0430\u043D\u043D\u044B\u0435`);
                      } else {
                        return [
                          createTextVNode("\u0417\u0430\u043F\u043E\u043B\u043D\u0438 \u0434\u0430\u043D\u043D\u044B\u0435")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UiCardTitle, null, {
                      default: withCtx(() => [
                        createTextVNode("\u0414\u043E\u043F. \u043F\u0440\u043E\u0434\u0430\u0436\u0430")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_UiCardDescription, null, {
                      default: withCtx(() => [
                        createTextVNode("\u0417\u0430\u043F\u043E\u043B\u043D\u0438 \u0434\u0430\u043D\u043D\u044B\u0435")
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
                  _push3(`<div class="flex flex-col gap-6"${_scopeId2}><div class="relative"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`\u0414\u0430\u0442\u0430 \u043F\u0440\u043E\u0434\u0430\u0436\u0438`);
                      } else {
                        return [
                          createTextVNode("\u0414\u0430\u0442\u0430 \u043F\u0440\u043E\u0434\u0430\u0436\u0438")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UiInput, {
                    modelValue: unref(dopData).saleDate,
                    "onUpdate:modelValue": ($event) => unref(dopData).saleDate = $event,
                    type: "date",
                    placeholder: "\u0414\u0430\u0442\u0430 \u043F\u0440\u043E\u0434\u0430\u0436\u0438",
                    class: unref(dopData).saleDate ? "" : "outline outline-1 outline-rose-300"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div class="relative"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`\u041C\u0435\u043D\u0435\u0434\u0436\u0435\u0440`);
                      } else {
                        return [
                          createTextVNode("\u041C\u0435\u043D\u0435\u0434\u0436\u0435\u0440")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_MyComboboxModels, {
                    class: unref(dopData).userId ? "" : "outline-1 outline-rose-300 rounded-md",
                    items: _ctx.managers.map((m) => ({ value: m.id, label: m.fullName })),
                    label: "\u0412\u044B\u0431\u0440\u0430\u0442\u044C \u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440\u0430",
                    onSelectedItem: (value) => unref(dopData).userId = value
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div class="relative"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C`);
                      } else {
                        return [
                          createTextVNode("\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UiInput, {
                    modelValue: unref(dopData).price,
                    "onUpdate:modelValue": ($event) => unref(dopData).price = $event,
                    type: "number",
                    placeholder: "\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C",
                    class: unref(dopData).price ? "" : "outline outline-1 outline-rose-300 rounded-md"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div class="relative"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`\u0422\u0438\u043F`);
                      } else {
                        return [
                          createTextVNode("\u0422\u0438\u043F")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_MyCombobox, {
                    class: unref(dopData).type ? "" : "outline outline-1 outline-rose-300 rounded-md",
                    items: _ctx.doptypes,
                    label: unref(dopData).type,
                    onSelectedItem: (value) => unref(dopData).type = value
                  }, null, _parent3, _scopeId2));
                  _push3(`</div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex flex-col gap-6" }, [
                      createVNode("div", { class: "relative" }, [
                        createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                          default: withCtx(() => [
                            createTextVNode("\u0414\u0430\u0442\u0430 \u043F\u0440\u043E\u0434\u0430\u0436\u0438")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UiInput, {
                          modelValue: unref(dopData).saleDate,
                          "onUpdate:modelValue": ($event) => unref(dopData).saleDate = $event,
                          type: "date",
                          placeholder: "\u0414\u0430\u0442\u0430 \u043F\u0440\u043E\u0434\u0430\u0436\u0438",
                          class: unref(dopData).saleDate ? "" : "outline outline-1 outline-rose-300"
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "class"])
                      ]),
                      createVNode("div", { class: "relative" }, [
                        createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                          default: withCtx(() => [
                            createTextVNode("\u041C\u0435\u043D\u0435\u0434\u0436\u0435\u0440")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_MyComboboxModels, {
                          class: unref(dopData).userId ? "" : "outline-1 outline-rose-300 rounded-md",
                          items: _ctx.managers.map((m) => ({ value: m.id, label: m.fullName })),
                          label: "\u0412\u044B\u0431\u0440\u0430\u0442\u044C \u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440\u0430",
                          onSelectedItem: (value) => unref(dopData).userId = value
                        }, null, 8, ["class", "items", "onSelectedItem"])
                      ]),
                      createVNode("div", { class: "relative" }, [
                        createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                          default: withCtx(() => [
                            createTextVNode("\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UiInput, {
                          modelValue: unref(dopData).price,
                          "onUpdate:modelValue": ($event) => unref(dopData).price = $event,
                          type: "number",
                          placeholder: "\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C",
                          class: unref(dopData).price ? "" : "outline outline-1 outline-rose-300 rounded-md"
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "class"])
                      ]),
                      createVNode("div", { class: "relative" }, [
                        createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1" }, {
                          default: withCtx(() => [
                            createTextVNode("\u0422\u0438\u043F")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_MyCombobox, {
                          class: unref(dopData).type ? "" : "outline outline-1 outline-rose-300 rounded-md",
                          items: _ctx.doptypes,
                          label: unref(dopData).type,
                          onSelectedItem: (value) => unref(dopData).type = value
                        }, null, 8, ["class", "items", "label", "onSelectedItem"])
                      ])
                    ])
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
                      createTextVNode("\u0414\u043E\u043F. \u043F\u0440\u043E\u0434\u0430\u0436\u0430")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_UiCardDescription, null, {
                    default: withCtx(() => [
                      createTextVNode("\u0417\u0430\u043F\u043E\u043B\u043D\u0438 \u0434\u0430\u043D\u043D\u044B\u0435")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_UiCardContent, null, {
                default: withCtx(() => [
                  createVNode("div", { class: "flex flex-col gap-6" }, [
                    createVNode("div", { class: "relative" }, [
                      createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                        default: withCtx(() => [
                          createTextVNode("\u0414\u0430\u0442\u0430 \u043F\u0440\u043E\u0434\u0430\u0436\u0438")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_UiInput, {
                        modelValue: unref(dopData).saleDate,
                        "onUpdate:modelValue": ($event) => unref(dopData).saleDate = $event,
                        type: "date",
                        placeholder: "\u0414\u0430\u0442\u0430 \u043F\u0440\u043E\u0434\u0430\u0436\u0438",
                        class: unref(dopData).saleDate ? "" : "outline outline-1 outline-rose-300"
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "class"])
                    ]),
                    createVNode("div", { class: "relative" }, [
                      createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                        default: withCtx(() => [
                          createTextVNode("\u041C\u0435\u043D\u0435\u0434\u0436\u0435\u0440")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_MyComboboxModels, {
                        class: unref(dopData).userId ? "" : "outline-1 outline-rose-300 rounded-md",
                        items: _ctx.managers.map((m) => ({ value: m.id, label: m.fullName })),
                        label: "\u0412\u044B\u0431\u0440\u0430\u0442\u044C \u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440\u0430",
                        onSelectedItem: (value) => unref(dopData).userId = value
                      }, null, 8, ["class", "items", "onSelectedItem"])
                    ]),
                    createVNode("div", { class: "relative" }, [
                      createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                        default: withCtx(() => [
                          createTextVNode("\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_UiInput, {
                        modelValue: unref(dopData).price,
                        "onUpdate:modelValue": ($event) => unref(dopData).price = $event,
                        type: "number",
                        placeholder: "\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C",
                        class: unref(dopData).price ? "" : "outline outline-1 outline-rose-300 rounded-md"
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "class"])
                    ]),
                    createVNode("div", { class: "relative" }, [
                      createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1" }, {
                        default: withCtx(() => [
                          createTextVNode("\u0422\u0438\u043F")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_MyCombobox, {
                        class: unref(dopData).type ? "" : "outline outline-1 outline-rose-300 rounded-md",
                        items: _ctx.doptypes,
                        label: unref(dopData).type,
                        onSelectedItem: (value) => unref(dopData).type = value
                      }, null, 8, ["class", "items", "label", "onSelectedItem"])
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
      _push(`</div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/my/dops/CreateDopCard.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "CreateDopModal",
  __ssrInlineRender: true,
  props: {
    dealId: {}
  },
  emits: ["isDopCreated"],
  setup(__props, { emit: __emit }) {
    const { $useApi } = useNuxtApp();
    const props = __props;
    const isOpen = ref(false);
    const managers = ref([]);
    const types = ref([]);
    const getDatas = async () => {
      try {
        const { data } = await $useApi.get(`/managers`) || [];
        managers.value = data;
        const { data: doptypes } = await $useApi.get("/dops/types") || [];
        types.value = doptypes;
      } catch (e) {
        console.log(e);
      }
    };
    const newDopBlank = {
      id: 0,
      dealId: 0,
      saleDate: "",
      type: "",
      price: 0,
      userId: 0
    };
    const newDop = ref(newDopBlank);
    const emit = __emit;
    const saveDop = async () => {
      try {
        await $useApi.post(`/dops`, {
          // method: 'post',
          ...newDop.value,
          dealId: props.dealId
        });
        emit("isDopCreated");
        isOpen.value = false;
        return;
      } catch (error) {
        console.log(error);
      }
    };
    watch(isOpen, () => {
      if (!isOpen.value) {
        newDop.value = newDopBlank;
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiDialog = _sfc_main$4$1;
      const _component_UiDialogTrigger = _sfc_main$3$1;
      const _component_UiButton = _sfc_main$j;
      const _component_Icon = __nuxt_component_0$1;
      const _component_UiDialogContent = _sfc_main$l;
      const _component_UiDialogHeader = _sfc_main$2$1;
      const _component_UiDialogTitle = _sfc_main$1$2;
      const _component_MyDopsCreateDopCard = _sfc_main$3;
      const _component_UiDialogFooter = _sfc_main$o;
      _push(ssrRenderComponent(_component_UiDialog, mergeProps({
        open: unref(isOpen),
        "onUpdate:open": ($event) => isRef(isOpen) ? isOpen.value = $event : null
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UiDialogTrigger, { "as-child": "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UiButton, {
                    class: "h-5 w-5 px-0 py-2",
                    onClick: getDatas
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_Icon, {
                          name: "akar-icons:plus",
                          color: "white",
                          size: "15px"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_Icon, {
                            name: "akar-icons:plus",
                            color: "white",
                            size: "15px"
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UiButton, {
                      class: "h-5 w-5 px-0 py-2",
                      onClick: getDatas
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_Icon, {
                          name: "akar-icons:plus",
                          color: "white",
                          size: "15px"
                        })
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UiDialogContent, { class: "max-w-[400px] flex flex-col" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UiDialogHeader, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UiDialogTitle, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`\u0421\u043E\u0437\u0434\u0430\u0442\u044C`);
                            } else {
                              return [
                                createTextVNode("\u0421\u043E\u0437\u0434\u0430\u0442\u044C")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_UiDialogTitle, null, {
                            default: withCtx(() => [
                              createTextVNode("\u0421\u043E\u0437\u0434\u0430\u0442\u044C")
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<div class="flex gap-4"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_MyDopsCreateDopCard, {
                    managers: unref(managers),
                    doptypes: unref(types),
                    "onUpdate:dopBlank": (value) => newDop.value = value
                  }, null, _parent3, _scopeId2));
                  _push3(`</div>`);
                  _push3(ssrRenderComponent(_component_UiDialogFooter, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UiButton, { onClick: saveDop }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` \u0421\u043E\u0437\u0434\u0430\u0442\u044C `);
                            } else {
                              return [
                                createTextVNode(" \u0421\u043E\u0437\u0434\u0430\u0442\u044C ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_UiButton, { onClick: saveDop }, {
                            default: withCtx(() => [
                              createTextVNode(" \u0421\u043E\u0437\u0434\u0430\u0442\u044C ")
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
                    createVNode(_component_UiDialogHeader, null, {
                      default: withCtx(() => [
                        createVNode(_component_UiDialogTitle, null, {
                          default: withCtx(() => [
                            createTextVNode("\u0421\u043E\u0437\u0434\u0430\u0442\u044C")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode("div", { class: "flex gap-4" }, [
                      createVNode(_component_MyDopsCreateDopCard, {
                        managers: unref(managers),
                        doptypes: unref(types),
                        "onUpdate:dopBlank": (value) => newDop.value = value
                      }, null, 8, ["managers", "doptypes", "onUpdate:dopBlank"])
                    ]),
                    createVNode(_component_UiDialogFooter, null, {
                      default: withCtx(() => [
                        createVNode(_component_UiButton, { onClick: saveDop }, {
                          default: withCtx(() => [
                            createTextVNode(" \u0421\u043E\u0437\u0434\u0430\u0442\u044C ")
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
          } else {
            return [
              createVNode(_component_UiDialogTrigger, { "as-child": "" }, {
                default: withCtx(() => [
                  createVNode(_component_UiButton, {
                    class: "h-5 w-5 px-0 py-2",
                    onClick: getDatas
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_Icon, {
                        name: "akar-icons:plus",
                        color: "white",
                        size: "15px"
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_UiDialogContent, { class: "max-w-[400px] flex flex-col" }, {
                default: withCtx(() => [
                  createVNode(_component_UiDialogHeader, null, {
                    default: withCtx(() => [
                      createVNode(_component_UiDialogTitle, null, {
                        default: withCtx(() => [
                          createTextVNode("\u0421\u043E\u0437\u0434\u0430\u0442\u044C")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode("div", { class: "flex gap-4" }, [
                    createVNode(_component_MyDopsCreateDopCard, {
                      managers: unref(managers),
                      doptypes: unref(types),
                      "onUpdate:dopBlank": (value) => newDop.value = value
                    }, null, 8, ["managers", "doptypes", "onUpdate:dopBlank"])
                  ]),
                  createVNode(_component_UiDialogFooter, null, {
                    default: withCtx(() => [
                      createVNode(_component_UiButton, { onClick: saveDop }, {
                        default: withCtx(() => [
                          createTextVNode(" \u0421\u043E\u0437\u0434\u0430\u0442\u044C ")
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
      }, _parent));
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/my/dops/CreateDopModal.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "CreateModal",
  __ssrInlineRender: true,
  props: {
    dealId: {}
  },
  emits: ["isReviewCreated", "error"],
  setup(__props, { emit: __emit }) {
    const { $useApi } = useNuxtApp();
    const authStore = useAuthStore();
    const { filters } = useDealsDatas();
    const managers = computed(() => {
      var _a;
      return (_a = filters.value.managers) != null ? _a : [];
    });
    const props = __props;
    const emit = __emit;
    const isOpen = ref(false);
    const file = ref(null);
    const errorMessage = ref(null);
    const previewUrl = ref(null);
    const isLoading = ref(false);
    const disabled = ref(true);
    const newReviewBlank = {
      id: 0,
      dealId: 0,
      date: "",
      userId: 0
    };
    const newReview = ref({ ...newReviewBlank });
    const setDefaultManager = () => {
      var _a;
      const currentUserId = (_a = authStore.user) == null ? void 0 : _a.id;
      if (!currentUserId || newReview.value.userId) {
        return;
      }
      if (managers.value.some((manager) => manager.id === currentUserId)) {
        newReview.value.userId = currentUserId;
      }
    };
    watch(
      () => managers.value,
      () => {
        setDefaultManager();
      },
      { deep: true }
    );
    const getFile = (event) => {
      var _a;
      const input = event.target;
      const selectedFile = (_a = input.files) == null ? void 0 : _a[0];
      if (!selectedFile) {
        errorMessage.value = "\u041F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, \u0432\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0444\u0430\u0439\u043B";
        file.value = null;
        previewUrl.value = null;
        return;
      }
      validateAndSetFile(selectedFile);
    };
    const saveReview = async () => {
      var _a, _b;
      if (!file.value) {
        errorMessage.value = "\u0424\u0430\u0439\u043B \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u0435\u043D \u0434\u043B\u044F \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0438";
        return;
      }
      isLoading.value = true;
      errorMessage.value = null;
      try {
        const formData = new FormData();
        formData.append("file", file.value);
        formData.append("date", newReview.value.date);
        formData.append("userId", String(newReview.value.userId));
        formData.append("dealId", String(props.dealId));
        await $useApi.post("/reviews", formData, {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        });
        emit("isReviewCreated");
        isOpen.value = false;
      } catch (error) {
        const message = ((_b = (_a = error.response) == null ? void 0 : _a.data) == null ? void 0 : _b.message) || "\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u0440\u0438 \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u0438 \u043E\u0442\u0437\u044B\u0432\u0430";
        errorMessage.value = message;
        emit("error", message);
      } finally {
        isLoading.value = false;
      }
    };
    const handlePaste = (event) => {
      var _a;
      const clipboardItems = (_a = event.clipboardData) == null ? void 0 : _a.items;
      if (!clipboardItems) {
        errorMessage.value = "\u041D\u0435\u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E \u043F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u0434\u0430\u043D\u043D\u044B\u0435 \u0438\u0437 \u0431\u0443\u0444\u0435\u0440\u0430 \u043E\u0431\u043C\u0435\u043D\u0430";
        return;
      }
      for (const item of clipboardItems) {
        if (item.type.startsWith("image/")) {
          const pastedFile = item.getAsFile();
          if (pastedFile) {
            validateAndSetFile(pastedFile);
            return;
          }
        }
      }
      errorMessage.value = "\u0412 \u0431\u0443\u0444\u0435\u0440\u0435 \u043E\u0431\u043C\u0435\u043D\u0430 \u043D\u0435\u0442 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F";
    };
    const validateAndSetFile = (selectedFile) => {
      const allowedTypes = ["image/jpeg", "image/png"];
      const maxSize = 5 * 1024 * 1024;
      if (!allowedTypes.includes(selectedFile.type)) {
        errorMessage.value = "\u0414\u043E\u043F\u0443\u0441\u0442\u0438\u043C\u044B \u0442\u043E\u043B\u044C\u043A\u043E \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F (JPEG, PNG)";
        file.value = null;
        previewUrl.value = null;
        return;
      }
      if (selectedFile.size > maxSize) {
        errorMessage.value = "\u0420\u0430\u0437\u043C\u0435\u0440 \u0444\u0430\u0439\u043B\u0430 \u043D\u0435 \u0434\u043E\u043B\u0436\u0435\u043D \u043F\u0440\u0435\u0432\u044B\u0448\u0430\u0442\u044C 5MB";
        file.value = null;
        previewUrl.value = null;
        return;
      }
      errorMessage.value = null;
      file.value = selectedFile;
      const reader = new FileReader();
      reader.onload = (e) => {
        var _a;
        previewUrl.value = (_a = e.target) == null ? void 0 : _a.result;
      };
      reader.readAsDataURL(selectedFile);
    };
    watch(
      [newReview, file],
      () => {
        const { date, userId } = newReview.value;
        disabled.value = !(date && userId && file.value);
      },
      { deep: true }
    );
    watch(isOpen, (newValue) => {
      if (newValue) {
        setDefaultManager();
      } else {
        newReview.value = { ...newReviewBlank };
        file.value = null;
        previewUrl.value = null;
        errorMessage.value = null;
        const fileInput = (void 0).getElementById(
          "file-input"
        );
        console.log(fileInput);
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiDialog = _sfc_main$4$1;
      const _component_UiDialogTrigger = _sfc_main$3$1;
      const _component_UiButton = _sfc_main$j;
      const _component_Icon = __nuxt_component_0$1;
      const _component_UiDialogContent = _sfc_main$l;
      const _component_UiDialogHeader = _sfc_main$2$1;
      const _component_UiDialogTitle = _sfc_main$1$2;
      const _component_UiLabel = _sfc_main$p;
      const _component_UiInput = _sfc_main$q;
      const _component_MyComboboxModels = _sfc_main$r;
      const _component_NuxtImg = _sfc_main$w;
      const _component_UiDialogFooter = _sfc_main$o;
      _push(ssrRenderComponent(_component_UiDialog, mergeProps({
        open: unref(isOpen),
        "onUpdate:open": ($event) => isRef(isOpen) ? isOpen.value = $event : null
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UiDialogTrigger, { "as-child": "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UiButton, { class: "h-5 w-5 px-0 py-2" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_Icon, {
                          name: "akar-icons:plus",
                          color: "white",
                          size: "15px"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_Icon, {
                            name: "akar-icons:plus",
                            color: "white",
                            size: "15px"
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UiButton, { class: "h-5 w-5 px-0 py-2" }, {
                      default: withCtx(() => [
                        createVNode(_component_Icon, {
                          name: "akar-icons:plus",
                          color: "white",
                          size: "15px"
                        })
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UiDialogContent, { class: "max-w-[400px] flex flex-col" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                var _a, _b;
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UiDialogHeader, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UiDialogTitle, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u043E\u0442\u0437\u044B\u0432`);
                            } else {
                              return [
                                createTextVNode("\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u043E\u0442\u0437\u044B\u0432")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_UiDialogTitle, null, {
                            default: withCtx(() => [
                              createTextVNode("\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u043E\u0442\u0437\u044B\u0432")
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<div class="flex flex-col gap-6"${_scopeId2}>`);
                  if (unref(errorMessage)) {
                    _push3(`<div class="text-red-500 text-sm"${_scopeId2}>${ssrInterpolate(unref(errorMessage))}</div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`<div class="relative"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`\u0421\u043A\u0440\u0438\u043D\u0448\u043E\u0442(Ctrl+v)`);
                      } else {
                        return [
                          createTextVNode("\u0421\u043A\u0440\u0438\u043D\u0448\u043E\u0442(Ctrl+v)")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UiInput, {
                    id: "file-input",
                    type: "file",
                    accept: "image/jpeg,image/png",
                    class: [
                      unref(file) ? "" : "outline-1 outline-rose-300 rounded-md",
                      "cursor-pointer"
                    ],
                    onChange: ($event) => getFile($event),
                    onPaste: handlePaste
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div class="relative"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`\u0414\u0430\u0442\u0430`);
                      } else {
                        return [
                          createTextVNode("\u0414\u0430\u0442\u0430")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UiInput, {
                    modelValue: unref(newReview).date,
                    "onUpdate:modelValue": ($event) => unref(newReview).date = $event,
                    type: "date",
                    placeholder: "\u0414\u0430\u0442\u0430 \u043F\u0440\u043E\u0434\u0430\u0436\u0438",
                    class: unref(newReview).date ? "" : "outline-1 outline-rose-300"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div class="relative"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`\u041C\u0435\u043D\u0435\u0434\u0436\u0435\u0440`);
                      } else {
                        return [
                          createTextVNode("\u041C\u0435\u043D\u0435\u0434\u0436\u0435\u0440")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_MyComboboxModels, {
                    class: unref(newReview).userId ? "" : "outline-1 outline-rose-300 rounded-md",
                    items: unref(managers).map((m) => ({ value: m.id, label: m.fullName })),
                    label: ((_a = unref(managers).find((m) => m.id === unref(newReview).userId)) == null ? void 0 : _a.fullName) || "\u0412\u044B\u0431\u0440\u0430\u0442\u044C \u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440\u0430",
                    onSelectedItem: (value) => unref(newReview).userId = value
                  }, null, _parent3, _scopeId2));
                  _push3(`</div>`);
                  if (unref(previewUrl)) {
                    _push3(`<div class="mt-2"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_NuxtImg, {
                      src: unref(previewUrl),
                      alt: "\u041F\u0440\u0435\u0432\u044C\u044E \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F",
                      class: "w-full h-auto rounded-md"
                    }, null, _parent3, _scopeId2));
                    _push3(`</div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`</div>`);
                  _push3(ssrRenderComponent(_component_UiDialogFooter, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UiButton, {
                          disabled: unref(disabled) || unref(isLoading),
                          onClick: saveReview
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              if (unref(isLoading)) {
                                _push5(`<span${_scopeId4}>\u0421\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0438\u0435...</span>`);
                              } else {
                                _push5(`<span${_scopeId4}>\u0421\u043E\u0437\u0434\u0430\u0442\u044C</span>`);
                              }
                            } else {
                              return [
                                unref(isLoading) ? (openBlock(), createBlock("span", { key: 0 }, "\u0421\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0438\u0435...")) : (openBlock(), createBlock("span", { key: 1 }, "\u0421\u043E\u0437\u0434\u0430\u0442\u044C"))
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_UiButton, {
                            disabled: unref(disabled) || unref(isLoading),
                            onClick: saveReview
                          }, {
                            default: withCtx(() => [
                              unref(isLoading) ? (openBlock(), createBlock("span", { key: 0 }, "\u0421\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0438\u0435...")) : (openBlock(), createBlock("span", { key: 1 }, "\u0421\u043E\u0437\u0434\u0430\u0442\u044C"))
                            ]),
                            _: 1
                          }, 8, ["disabled"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UiDialogHeader, null, {
                      default: withCtx(() => [
                        createVNode(_component_UiDialogTitle, null, {
                          default: withCtx(() => [
                            createTextVNode("\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u043E\u0442\u0437\u044B\u0432")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode("div", { class: "flex flex-col gap-6" }, [
                      unref(errorMessage) ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: "text-red-500 text-sm"
                      }, toDisplayString(unref(errorMessage)), 1)) : createCommentVNode("", true),
                      createVNode("div", { class: "relative" }, [
                        createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                          default: withCtx(() => [
                            createTextVNode("\u0421\u043A\u0440\u0438\u043D\u0448\u043E\u0442(Ctrl+v)")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UiInput, {
                          id: "file-input",
                          type: "file",
                          accept: "image/jpeg,image/png",
                          class: [
                            unref(file) ? "" : "outline-1 outline-rose-300 rounded-md",
                            "cursor-pointer"
                          ],
                          onChange: ($event) => getFile($event),
                          onPaste: handlePaste
                        }, null, 8, ["class", "onChange"])
                      ]),
                      createVNode("div", { class: "relative" }, [
                        createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                          default: withCtx(() => [
                            createTextVNode("\u0414\u0430\u0442\u0430")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UiInput, {
                          modelValue: unref(newReview).date,
                          "onUpdate:modelValue": ($event) => unref(newReview).date = $event,
                          type: "date",
                          placeholder: "\u0414\u0430\u0442\u0430 \u043F\u0440\u043E\u0434\u0430\u0436\u0438",
                          class: unref(newReview).date ? "" : "outline-1 outline-rose-300"
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "class"])
                      ]),
                      createVNode("div", { class: "relative" }, [
                        createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                          default: withCtx(() => [
                            createTextVNode("\u041C\u0435\u043D\u0435\u0434\u0436\u0435\u0440")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_MyComboboxModels, {
                          class: unref(newReview).userId ? "" : "outline-1 outline-rose-300 rounded-md",
                          items: unref(managers).map((m) => ({ value: m.id, label: m.fullName })),
                          label: ((_b = unref(managers).find((m) => m.id === unref(newReview).userId)) == null ? void 0 : _b.fullName) || "\u0412\u044B\u0431\u0440\u0430\u0442\u044C \u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440\u0430",
                          onSelectedItem: (value) => unref(newReview).userId = value
                        }, null, 8, ["class", "items", "label", "onSelectedItem"])
                      ]),
                      unref(previewUrl) ? (openBlock(), createBlock("div", {
                        key: 1,
                        class: "mt-2"
                      }, [
                        createVNode(_component_NuxtImg, {
                          src: unref(previewUrl),
                          alt: "\u041F\u0440\u0435\u0432\u044C\u044E \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F",
                          class: "w-full h-auto rounded-md"
                        }, null, 8, ["src"])
                      ])) : createCommentVNode("", true)
                    ]),
                    createVNode(_component_UiDialogFooter, null, {
                      default: withCtx(() => [
                        createVNode(_component_UiButton, {
                          disabled: unref(disabled) || unref(isLoading),
                          onClick: saveReview
                        }, {
                          default: withCtx(() => [
                            unref(isLoading) ? (openBlock(), createBlock("span", { key: 0 }, "\u0421\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0438\u0435...")) : (openBlock(), createBlock("span", { key: 1 }, "\u0421\u043E\u0437\u0434\u0430\u0442\u044C"))
                          ]),
                          _: 1
                        }, 8, ["disabled"])
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
              createVNode(_component_UiDialogTrigger, { "as-child": "" }, {
                default: withCtx(() => [
                  createVNode(_component_UiButton, { class: "h-5 w-5 px-0 py-2" }, {
                    default: withCtx(() => [
                      createVNode(_component_Icon, {
                        name: "akar-icons:plus",
                        color: "white",
                        size: "15px"
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_UiDialogContent, { class: "max-w-[400px] flex flex-col" }, {
                default: withCtx(() => {
                  var _a;
                  return [
                    createVNode(_component_UiDialogHeader, null, {
                      default: withCtx(() => [
                        createVNode(_component_UiDialogTitle, null, {
                          default: withCtx(() => [
                            createTextVNode("\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u043E\u0442\u0437\u044B\u0432")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode("div", { class: "flex flex-col gap-6" }, [
                      unref(errorMessage) ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: "text-red-500 text-sm"
                      }, toDisplayString(unref(errorMessage)), 1)) : createCommentVNode("", true),
                      createVNode("div", { class: "relative" }, [
                        createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                          default: withCtx(() => [
                            createTextVNode("\u0421\u043A\u0440\u0438\u043D\u0448\u043E\u0442(Ctrl+v)")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UiInput, {
                          id: "file-input",
                          type: "file",
                          accept: "image/jpeg,image/png",
                          class: [
                            unref(file) ? "" : "outline-1 outline-rose-300 rounded-md",
                            "cursor-pointer"
                          ],
                          onChange: ($event) => getFile($event),
                          onPaste: handlePaste
                        }, null, 8, ["class", "onChange"])
                      ]),
                      createVNode("div", { class: "relative" }, [
                        createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                          default: withCtx(() => [
                            createTextVNode("\u0414\u0430\u0442\u0430")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UiInput, {
                          modelValue: unref(newReview).date,
                          "onUpdate:modelValue": ($event) => unref(newReview).date = $event,
                          type: "date",
                          placeholder: "\u0414\u0430\u0442\u0430 \u043F\u0440\u043E\u0434\u0430\u0436\u0438",
                          class: unref(newReview).date ? "" : "outline-1 outline-rose-300"
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "class"])
                      ]),
                      createVNode("div", { class: "relative" }, [
                        createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                          default: withCtx(() => [
                            createTextVNode("\u041C\u0435\u043D\u0435\u0434\u0436\u0435\u0440")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_MyComboboxModels, {
                          class: unref(newReview).userId ? "" : "outline-1 outline-rose-300 rounded-md",
                          items: unref(managers).map((m) => ({ value: m.id, label: m.fullName })),
                          label: ((_a = unref(managers).find((m) => m.id === unref(newReview).userId)) == null ? void 0 : _a.fullName) || "\u0412\u044B\u0431\u0440\u0430\u0442\u044C \u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440\u0430",
                          onSelectedItem: (value) => unref(newReview).userId = value
                        }, null, 8, ["class", "items", "label", "onSelectedItem"])
                      ]),
                      unref(previewUrl) ? (openBlock(), createBlock("div", {
                        key: 1,
                        class: "mt-2"
                      }, [
                        createVNode(_component_NuxtImg, {
                          src: unref(previewUrl),
                          alt: "\u041F\u0440\u0435\u0432\u044C\u044E \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F",
                          class: "w-full h-auto rounded-md"
                        }, null, 8, ["src"])
                      ])) : createCommentVNode("", true)
                    ]),
                    createVNode(_component_UiDialogFooter, null, {
                      default: withCtx(() => [
                        createVNode(_component_UiButton, {
                          disabled: unref(disabled) || unref(isLoading),
                          onClick: saveReview
                        }, {
                          default: withCtx(() => [
                            unref(isLoading) ? (openBlock(), createBlock("span", { key: 0 }, "\u0421\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0438\u0435...")) : (openBlock(), createBlock("span", { key: 1 }, "\u0421\u043E\u0437\u0434\u0430\u0442\u044C"))
                          ]),
                          _: 1
                        }, 8, ["disabled"])
                      ]),
                      _: 1
                    })
                  ];
                }),
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
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/my/reviews/CreateModal.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const useMyGetDaysDifference = (dateString1, dateString2) => {
  const date1 = new Date(dateString1);
  const date2 = new Date(dateString2);
  const timeDifference = Math.abs(date2.getTime() - date1.getTime());
  const differenceInDays = Math.ceil(timeDifference / (1e3 * 3600 * 24));
  return differenceInDays;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "DealCard",
  __ssrInlineRender: true,
  props: {
    deal: {}
  },
  emits: ["deal-updated", "deal-deleted", "update-deal"],
  setup(__props, { emit: __emit }) {
    const { $useApi } = useNuxtApp();
    const props = __props;
    const dealStatus = ref(props.deal.status || "\u041D\u0435 \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D");
    const dopsPrice = ref(0);
    const recievedPayments = ref(0);
    const totalPrice = ref(0);
    const remainder = ref(0);
    const daysGone = ref(0);
    const emit = __emit;
    const dealUpdated = () => {
      console.log("dealUpdated");
      emit("deal-updated", props.deal.id);
    };
    const dealDeleted = () => {
      console.log("dealDeleted");
      emit("deal-deleted");
    };
    const removePayment = async (payment) => {
      try {
        await $useApi.delete(`/payments/${payment.id}`);
        console.log("payment deleted");
        emit("deal-updated", props.deal.id);
        return;
      } catch (error) {
        console.log(error);
      }
    };
    const removeDop = async (dop) => {
      try {
        await $useApi.delete(`/dops/${dop.id}`);
        console.log("dop deleted");
        emit("deal-updated", props.deal.id);
        return;
      } catch (error) {
        console.log(error);
      }
    };
    const removeReview = async (review) => {
      try {
        await $useApi.delete(`/reviews/${review.id}`);
        console.log("review deleted");
        emit("deal-updated", props.deal.id);
        return;
      } catch (error) {
        console.log(error);
      }
    };
    const editDealStatus = async () => {
      try {
        await $useApi.patch(`/deals/${props.deal.id}`, {
          // method: 'patch',
          status: dealStatus.value
        });
        emit("deal-updated", props.deal.id);
      } catch (e) {
        console.log(e);
      }
    };
    const deleteDelivery = async (id) => {
      try {
        await $useApi.delete("deliveries/" + id);
        emit("deal-updated", props.deal.id);
      } catch (error) {
        console.log(error);
      }
    };
    const calcTotals = () => {
      var _a, _b;
      dopsPrice.value = ((_a = props.deal.dops) == null ? void 0 : _a.reduce((a, b) => a + b.price, 0)) || 0;
      recievedPayments.value = ((_b = props.deal.payments) == null ? void 0 : _b.reduce((a, b) => a + b.price, 0)) || 0;
      totalPrice.value = props.deal.price + dopsPrice.value;
      remainder.value = totalPrice.value - recievedPayments.value;
      daysGone.value = useMyGetDaysDifference(
        props.deal.client.firstContact,
        props.deal.saleDate
      );
    };
    watch(dealStatus, () => {
      console.log(dealStatus.value);
      editDealStatus();
    });
    watch(
      () => props.deal,
      () => {
        calcTotals();
      },
      { deep: true }
      // Глубокое наблюдение, так как deal — объект
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiCard = _sfc_main$b;
      const _component_UiCardHeader = _sfc_main$1$1;
      const _component_UiCardTitle = _sfc_main$c;
      const _component_NuxtLink = __nuxt_component_0;
      const _component_UiCardDescription = _sfc_main$d;
      const _component_MyDealsDealHistory = _sfc_main$a;
      const _component_MyDealsEditDealModal = _sfc_main$8;
      const _component_UiScrollArea = _sfc_main$e;
      const _component_UiCardContent = _sfc_main$f;
      const _component_UiSeparator = _sfc_main$g;
      const _component_MyClientsEditClient = _sfc_main$6;
      const _component_MyDeliveriesCreateModal = _sfc_main$h;
      const _component_MyDeliveriesEditModal = _sfc_main$i;
      const _component_UiButton = _sfc_main$j;
      const _component_Icon = __nuxt_component_0$1;
      const _component_MyDealsAddDealerModal = _sfc_main$5;
      const _component_MyPaymentsCreatePaymentModal = _sfc_main$4;
      const _component_MyDopsCreateDopModal = _sfc_main$2;
      const _component_MyReviewsCreateModal = _sfc_main$1;
      const _component_UiCardFooter = _sfc_main$k;
      if (_ctx.deal.id !== 0) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "h-full" }, _attrs))}>`);
        _push(ssrRenderComponent(_component_UiCard, { class: "flex flex-col overflow-hidden h-full" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_UiCardHeader, { class: "flex flex-row items-start bg-slate-50 pb-1" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="flex-1 min-w-0"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_UiCardTitle, { class: "flex items-center gap-2 text-lg pb-2 pr-2 break-all leading-tight" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_NuxtLink, {
                            to: `/deals/${_ctx.deal.id}`,
                            class: "cursor-pointer hover:underline"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`${ssrInterpolate(_ctx.deal.title)}`);
                              } else {
                                return [
                                  createTextVNode(toDisplayString(_ctx.deal.title), 1)
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_NuxtLink, {
                              to: `/deals/${_ctx.deal.id}`,
                              class: "cursor-pointer hover:underline"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(_ctx.deal.title), 1)
                              ]),
                              _: 1
                            }, 8, ["to"])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_UiCardDescription, null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<div class="flex flex-col"${_scopeId3}><span${_scopeId3}> \u041F\u0435\u0440\u0432\u044B\u0439 \u043A\u043E\u043D\u0442\u0430\u043A\u0442: ${ssrInterpolate(("dateFormat" in _ctx ? _ctx.dateFormat : unref(dateFormat))(_ctx.deal.client.firstContact))}</span><span${_scopeId3}> \u0414\u0430\u0442\u0430 \u043F\u0440\u043E\u0434\u0430\u0436\u0438: ${ssrInterpolate(("dateFormat" in _ctx ? _ctx.dateFormat : unref(dateFormat))(_ctx.deal.saleDate))}</span><span${_scopeId3}> \u041F\u0440\u043E\u0448\u043B\u043E \u0434\u043D\u0435\u0439: ${ssrInterpolate(unref(daysGone))}</span>`);
                          if (_ctx.deal.maketPresentation) {
                            _push4(`<span${_scopeId3}>\u041F\u0440\u0435\u0437\u0435\u043D\u0442\u0430\u0446\u0438\u044F \u043C\u0430\u043A\u0435\u0442\u0430: ${ssrInterpolate(("dateFormat" in _ctx ? _ctx.dateFormat : unref(dateFormat))(_ctx.deal.maketPresentation))}</span>`);
                          } else {
                            _push4(`<!---->`);
                          }
                          _push4(`</div><div class="flex gap-2 mb-2 items-center"${_scopeId3}><span${_scopeId3}>\u0421\u0442\u0430\u0442\u0443\u0441: ${ssrInterpolate(_ctx.deal.status)}</span></div>`);
                        } else {
                          return [
                            createVNode("div", { class: "flex flex-col" }, [
                              createVNode("span", null, " \u041F\u0435\u0440\u0432\u044B\u0439 \u043A\u043E\u043D\u0442\u0430\u043A\u0442: " + toDisplayString(("dateFormat" in _ctx ? _ctx.dateFormat : unref(dateFormat))(_ctx.deal.client.firstContact)), 1),
                              createVNode("span", null, " \u0414\u0430\u0442\u0430 \u043F\u0440\u043E\u0434\u0430\u0436\u0438: " + toDisplayString(("dateFormat" in _ctx ? _ctx.dateFormat : unref(dateFormat))(_ctx.deal.saleDate)), 1),
                              createVNode("span", null, " \u041F\u0440\u043E\u0448\u043B\u043E \u0434\u043D\u0435\u0439: " + toDisplayString(unref(daysGone)), 1),
                              _ctx.deal.maketPresentation ? (openBlock(), createBlock("span", { key: 0 }, "\u041F\u0440\u0435\u0437\u0435\u043D\u0442\u0430\u0446\u0438\u044F \u043C\u0430\u043A\u0435\u0442\u0430: " + toDisplayString(("dateFormat" in _ctx ? _ctx.dateFormat : unref(dateFormat))(_ctx.deal.maketPresentation)), 1)) : createCommentVNode("", true)
                            ]),
                            createVNode("div", { class: "flex gap-2 mb-2 items-center" }, [
                              createVNode("span", null, "\u0421\u0442\u0430\u0442\u0443\u0441: " + toDisplayString(_ctx.deal.status), 1)
                            ])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(`</div><div class="ml-auto flex items-center gap-2"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_MyDealsDealHistory, {
                      "deal-id": _ctx.deal.id,
                      onIsDealEdited: dealUpdated,
                      onIsDealDeleted: dealDeleted
                    }, null, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_MyDealsEditDealModal, {
                      deal: _ctx.deal,
                      onIsDealEdited: dealUpdated,
                      onIsDealDeleted: dealDeleted
                    }, null, _parent3, _scopeId2));
                    _push3(`</div>`);
                  } else {
                    return [
                      createVNode("div", { class: "flex-1 min-w-0" }, [
                        createVNode(_component_UiCardTitle, { class: "flex items-center gap-2 text-lg pb-2 pr-2 break-all leading-tight" }, {
                          default: withCtx(() => [
                            createVNode(_component_NuxtLink, {
                              to: `/deals/${_ctx.deal.id}`,
                              class: "cursor-pointer hover:underline"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(_ctx.deal.title), 1)
                              ]),
                              _: 1
                            }, 8, ["to"])
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UiCardDescription, null, {
                          default: withCtx(() => [
                            createVNode("div", { class: "flex flex-col" }, [
                              createVNode("span", null, " \u041F\u0435\u0440\u0432\u044B\u0439 \u043A\u043E\u043D\u0442\u0430\u043A\u0442: " + toDisplayString(("dateFormat" in _ctx ? _ctx.dateFormat : unref(dateFormat))(_ctx.deal.client.firstContact)), 1),
                              createVNode("span", null, " \u0414\u0430\u0442\u0430 \u043F\u0440\u043E\u0434\u0430\u0436\u0438: " + toDisplayString(("dateFormat" in _ctx ? _ctx.dateFormat : unref(dateFormat))(_ctx.deal.saleDate)), 1),
                              createVNode("span", null, " \u041F\u0440\u043E\u0448\u043B\u043E \u0434\u043D\u0435\u0439: " + toDisplayString(unref(daysGone)), 1),
                              _ctx.deal.maketPresentation ? (openBlock(), createBlock("span", { key: 0 }, "\u041F\u0440\u0435\u0437\u0435\u043D\u0442\u0430\u0446\u0438\u044F \u043C\u0430\u043A\u0435\u0442\u0430: " + toDisplayString(("dateFormat" in _ctx ? _ctx.dateFormat : unref(dateFormat))(_ctx.deal.maketPresentation)), 1)) : createCommentVNode("", true)
                            ]),
                            createVNode("div", { class: "flex gap-2 mb-2 items-center" }, [
                              createVNode("span", null, "\u0421\u0442\u0430\u0442\u0443\u0441: " + toDisplayString(_ctx.deal.status), 1)
                            ])
                          ]),
                          _: 1
                        })
                      ]),
                      createVNode("div", { class: "ml-auto flex items-center gap-2" }, [
                        createVNode(_component_MyDealsDealHistory, {
                          "deal-id": _ctx.deal.id,
                          onIsDealEdited: dealUpdated,
                          onIsDealDeleted: dealDeleted
                        }, null, 8, ["deal-id"]),
                        createVNode(_component_MyDealsEditDealModal, {
                          deal: _ctx.deal,
                          onIsDealEdited: dealUpdated,
                          onIsDealDeleted: dealDeleted
                        }, null, 8, ["deal"])
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UiScrollArea, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UiCardContent, { class: "p-6 text-sm h-full" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        var _a, _b;
                        if (_push4) {
                          _push4(`<div class="gap-3"${_scopeId3}><div class="font-semibold pb-2"${_scopeId3}>\u0414\u0435\u0442\u0430\u043B\u0438 \u043E\u043F\u043B\u0430\u0442\u044B</div><ul class="gap-1 text-gray-600"${_scopeId3}><li class="flex items-center justify-between font-semibold"${_scopeId3}><span class="text-muted-foreground"${_scopeId3}> \u0421\u0443\u043C\u043C\u0430 \u0437\u0430\u043A\u0430\u0437\u0430 </span><span${_scopeId3}>${ssrInterpolate(unref(totalPrice))}\u20BD </span></li><li class="flex items-center justify-between"${_scopeId3}><span class="text-muted-foreground"${_scopeId3}> \u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C \u0432\u044B\u0432\u0435\u0441\u043A\u0438 </span><span${_scopeId3}>${ssrInterpolate(_ctx.deal.price)}\u20BD </span></li><li class="flex items-center justify-between"${_scopeId3}><span class="text-muted-foreground"${_scopeId3}> \u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C \u0434\u043E\u043F. \u0443\u0441\u043B\u0443\u0433 </span><span${_scopeId3}>${ssrInterpolate(unref(dopsPrice))}\u20BD </span></li><li class="flex items-center justify-between"${_scopeId3}><span class="text-muted-foreground"${_scopeId3}> \u041E\u043F\u043B\u0430\u0447\u0435\u043D\u043E </span><span${_scopeId3}>${ssrInterpolate(unref(recievedPayments))}\u20BD </span></li><li class="flex items-center justify-between font-semibold"${_scopeId3}><span class="text-muted-foreground"${_scopeId3}> \u041E\u0441\u0442\u0430\u0442\u043E\u043A </span><span class="${ssrRenderClass(unref(remainder) > 0 ? "text-red-600" : "text-green-600")}"${_scopeId3}>${ssrInterpolate(unref(remainder))}\u20BD </span></li></ul></div>`);
                          _push4(ssrRenderComponent(_component_UiSeparator, { class: "my-2" }, null, _parent4, _scopeId3));
                          _push4(`<div class="gap-1"${_scopeId3}><div class="font-semibold pb-2 flex justify-between"${_scopeId3}><span${_scopeId3}>\u041A\u043B\u0438\u0435\u043D\u0442</span>`);
                          _push4(ssrRenderComponent(_component_MyClientsEditClient, {
                            client: _ctx.deal.client,
                            onIsClientEdited: dealUpdated
                          }, null, _parent4, _scopeId3));
                          _push4(`</div><div class="text-gray-600 flex justify-between"${_scopeId3}><div${_scopeId3}>${ssrInterpolate((_a = _ctx.deal.client) == null ? void 0 : _a.fullName)}</div>`);
                          _push4(ssrRenderComponent(_component_NuxtLink, {
                            class: "underlin whitespace-nowrap",
                            to: _ctx.deal.client.chatLink,
                            target: "_blank"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(` \u0421\u0441\u044B\u043B\u043A\u0430 \u043D\u0430 \u0447\u0430\u0442 `);
                              } else {
                                return [
                                  createTextVNode(" \u0421\u0441\u044B\u043B\u043A\u0430 \u043D\u0430 \u0447\u0430\u0442 ")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(`</div></div>`);
                          _push4(ssrRenderComponent(_component_UiSeparator, { class: "my-2" }, null, _parent4, _scopeId3));
                          _push4(`<div${_scopeId3}><div class="font-semibold pb-2 flex justify-between"${_scopeId3}><span${_scopeId3}>\u0414\u043E\u0441\u0442\u0430\u0432\u043A\u0430</span>`);
                          _push4(ssrRenderComponent(_component_MyDeliveriesCreateModal, {
                            deal: _ctx.deal,
                            onDeliveryCreated: dealUpdated
                          }, null, _parent4, _scopeId3));
                          _push4(`</div><ul class=""${_scopeId3}><!--[-->`);
                          ssrRenderList(_ctx.deal.deliveries, (delivery) => {
                            _push4(`<li${_scopeId3}><div class="flex gap-2"${_scopeId3}>`);
                            _push4(ssrRenderComponent(_component_MyDeliveriesEditModal, {
                              delivery,
                              onDeliveryEdited: dealUpdated
                            }, null, _parent4, _scopeId3));
                            _push4(`<div class="flex flex-col"${_scopeId3}><span class="text-gray-600"${_scopeId3}>${ssrInterpolate(delivery.method)}</span><div class="flex gap-1"${_scopeId3}><span${_scopeId3}>\u0422\u0440\u0435\u043A-\u043D\u043E\u043C\u0435\u0440:</span><span class="text-gray-900 font-bold"${_scopeId3}>${ssrInterpolate(delivery.track)}</span></div></div><div class="ml-[auto]"${_scopeId3}>`);
                            _push4(ssrRenderComponent(_component_UiButton, {
                              class: "ml-[auto] w-5 h-5 p-0",
                              onClick: () => deleteDelivery(delivery.id)
                            }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(ssrRenderComponent(_component_Icon, {
                                    name: "lucide:minus",
                                    color: "white",
                                    size: "15px"
                                  }, null, _parent5, _scopeId4));
                                } else {
                                  return [
                                    createVNode(_component_Icon, {
                                      name: "lucide:minus",
                                      color: "white",
                                      size: "15px"
                                    })
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                            _push4(`</div></div></li>`);
                          });
                          _push4(`<!--]--></ul></div>`);
                          _push4(ssrRenderComponent(_component_UiSeparator, { class: "my-2" }, null, _parent4, _scopeId3));
                          _push4(`<div class="flex flex-col"${_scopeId3}><div class="flex justify-between font-semibold pb-2"${_scopeId3}>${ssrInterpolate(_ctx.deal.dealers.length > 1 ? "\u041C\u0435\u043D\u0435\u0434\u0436\u0435\u0440\u044B" : "\u041C\u0435\u043D\u0435\u0434\u0436\u0435\u0440")} `);
                          _push4(ssrRenderComponent(_component_MyDealsAddDealerModal, {
                            key: _ctx.deal.id,
                            deal: _ctx.deal,
                            onIsDealerAdded: dealUpdated
                          }, null, _parent4, _scopeId3));
                          _push4(`</div><div class="flex flex-col text-gray-600"${_scopeId3}><!--[-->`);
                          ssrRenderList(_ctx.deal.dealers, (dealer) => {
                            var _a2;
                            _push4(`<ul class="w-full flex-cols items-center mb-2"${_scopeId3}><li class="flex"${_scopeId3}><div class="flex justify-between grow mr-1"${_scopeId3}><span${_scopeId3}>${ssrInterpolate(((_a2 = dealer.user) == null ? void 0 : _a2.fullName) || "Nope")}</span><span${_scopeId3}>${ssrInterpolate(dealer.price + "p")}</span></div></li></ul>`);
                          });
                          _push4(`<!--]--></div></div>`);
                          _push4(ssrRenderComponent(_component_UiSeparator, { class: "my-2" }, null, _parent4, _scopeId3));
                          _push4(`<div class=""${_scopeId3}><div class="flex items-center justify-between"${_scopeId3}><div class="font-semibold pb-2"${_scopeId3}>\u041F\u043B\u0430\u0442\u0435\u0436\u0438</div>`);
                          _push4(ssrRenderComponent(_component_MyPaymentsCreatePaymentModal, {
                            "deal-id": _ctx.deal.id,
                            onIsPayCreated: dealUpdated
                          }, null, _parent4, _scopeId3));
                          _push4(`</div><!--[-->`);
                          ssrRenderList(_ctx.deal.payments, (pay) => {
                            _push4(`<ul class="text-gray-600 flex"${_scopeId3}><li class="${ssrRenderClass([
                              "flex items-center justify-between grow mr-1 mb-1",
                              pay.isConfirmed ? "text-green-600" : "text-red-500"
                            ])}"${_scopeId3}><span class=""${_scopeId3}>${ssrInterpolate(pay.method)}</span><span class=""${_scopeId3}>${ssrInterpolate(("dateFormat" in _ctx ? _ctx.dateFormat : unref(dateFormat))(pay.date))}</span><span class=""${_scopeId3}>${ssrInterpolate(pay.price)}\u20BD </span></li>`);
                            _push4(ssrRenderComponent(_component_UiButton, {
                              class: "h-5 w-5 px-0 py-2",
                              onClick: () => removePayment(pay)
                            }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(ssrRenderComponent(_component_Icon, {
                                    name: "lucide:minus",
                                    color: "white",
                                    size: "15px"
                                  }, null, _parent5, _scopeId4));
                                } else {
                                  return [
                                    createVNode(_component_Icon, {
                                      name: "lucide:minus",
                                      color: "white",
                                      size: "15px"
                                    })
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                            _push4(`</ul>`);
                          });
                          _push4(`<!--]--></div>`);
                          _push4(ssrRenderComponent(_component_UiSeparator, { class: "my-2" }, null, _parent4, _scopeId3));
                          _push4(`<div class="gap-1"${_scopeId3}><div class="flex items-center justify-between"${_scopeId3}><div class="font-semibold pb-2"${_scopeId3}>\u0414\u043E\u043F. \u0443\u0441\u043B\u0443\u0433\u0438</div>`);
                          _push4(ssrRenderComponent(_component_UiButton, { class: "h-5 w-5 px-0 py-2" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_MyDopsCreateDopModal, {
                                  "deal-id": _ctx.deal.id,
                                  onIsDopCreated: dealUpdated
                                }, null, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(_component_MyDopsCreateDopModal, {
                                    "deal-id": _ctx.deal.id,
                                    onIsDopCreated: dealUpdated
                                  }, null, 8, ["deal-id"])
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(`</div><!--[-->`);
                          ssrRenderList(_ctx.deal.dops, (dop) => {
                            _push4(`<ul class="text-gray-600 flex flex-col"${_scopeId3}><div class="flex"${_scopeId3}><li class="flex flex-col justify-between grow mr-1 mb-1"${_scopeId3}><span class="text-muted-foreground"${_scopeId3}>${ssrInterpolate(("dateFormat" in _ctx ? _ctx.dateFormat : unref(dateFormat))(dop.saleDate) + " - " + dop.type)}</span><span class="text-muted-foreground"${_scopeId3}>${ssrInterpolate(dop.user.fullName + " - " + dop.price + "\u20BD" || "")}</span></li>`);
                            _push4(ssrRenderComponent(_component_UiButton, {
                              class: "h-5 w-5 px-0 py-2",
                              onClick: () => removeDop(dop)
                            }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(ssrRenderComponent(_component_Icon, {
                                    name: "lucide:minus",
                                    color: "white",
                                    size: "15px"
                                  }, null, _parent5, _scopeId4));
                                } else {
                                  return [
                                    createVNode(_component_Icon, {
                                      name: "lucide:minus",
                                      color: "white",
                                      size: "15px"
                                    })
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                            _push4(`</div><div class="w-full flex flex-col items-center"${_scopeId3}>`);
                            _push4(ssrRenderComponent(_component_UiSeparator, { class: "my-1" }, null, _parent4, _scopeId3));
                            _push4(`</div></ul>`);
                          });
                          _push4(`<!--]--></div>`);
                          if (_ctx.deal && _ctx.deal.tasks && _ctx.deal.tasks.length > 0) {
                            _push4(`<div class="gap-1 mt-3"${_scopeId3}><div class="flex items-center justify-between"${_scopeId3}><div class="font-semibold pb-2"${_scopeId3}>\u041A\u0430\u0440\u0442\u043E\u0447\u043A\u0438</div></div><div class="flex flex-col"${_scopeId3}><!--[-->`);
                            ssrRenderList(_ctx.deal.tasks, (task) => {
                              _push4(ssrRenderComponent(_component_NuxtLink, {
                                key: task.id,
                                to: `boards/${task.boardId}/task/${task.id}`,
                                target: "_blank",
                                rel: "noopener",
                                class: "hover:underline",
                                title: "\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0443"
                              }, {
                                default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                  if (_push5) {
                                    _push5(`<span class="font-bold"${_scopeId4}> - ${ssrInterpolate(task.board.title)}</span> - <span${_scopeId4}>${ssrInterpolate(task.title.slice(0, 20))}</span>`);
                                  } else {
                                    return [
                                      createVNode("span", { class: "font-bold" }, " - " + toDisplayString(task.board.title), 1),
                                      createTextVNode(" - "),
                                      createVNode("span", null, toDisplayString(task.title.slice(0, 20)), 1)
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent4, _scopeId3));
                            });
                            _push4(`<!--]--></div>`);
                            _push4(ssrRenderComponent(_component_UiSeparator, { class: "my-1" }, null, _parent4, _scopeId3));
                            _push4(`</div>`);
                          } else {
                            _push4(`<!---->`);
                          }
                          _push4(`<div class="gap-1 mt-3"${_scopeId3}><div class="flex items-center justify-between"${_scopeId3}><div class="font-semibold pb-2"${_scopeId3}>\u0418\u0437\u0433\u043E\u0442\u043E\u0432\u043B\u0435\u043D\u0438\u0435</div></div>`);
                          _push4(ssrRenderComponent(_component_NuxtLink, {
                            class: "underline text-gray-600",
                            to: "https://easyneonwork.kaiten.ru/" + _ctx.deal.card_id,
                            target: "_blank"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(` \u0414\u0438\u0437\u0430\u0439\u043D `);
                              } else {
                                return [
                                  createTextVNode(" \u0414\u0438\u0437\u0430\u0439\u043D ")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(`<!--[-->`);
                          ssrRenderList(_ctx.deal.masterReports, (masterReport) => {
                            _push4(`<ul class="text-gray-600 flex flex-col"${_scopeId3}><li${_scopeId3}>`);
                            _push4(ssrRenderComponent(_component_NuxtLink, {
                              class: "underline",
                              to: masterReport.name,
                              target: "_blank"
                            }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(` \u041F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0441\u0442\u0432\u043E `);
                                } else {
                                  return [
                                    createTextVNode(" \u041F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0441\u0442\u0432\u043E ")
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                            _push4(`</li><li class="flex flex-col justify-between grow mr-1 mb-1"${_scopeId3}><span class="text-muted-foreground"${_scopeId3}> (${ssrInterpolate(masterReport.type)}) \u0421\u043E\u0431\u0440\u0430\u043D\u0430 ${ssrInterpolate(("dateFormat" in _ctx ? _ctx.dateFormat : unref(dateFormat))(masterReport.date))}</span></li></ul>`);
                          });
                          _push4(`<!--]--><!--[-->`);
                          ssrRenderList(_ctx.deal.packerReports, (masterReport) => {
                            _push4(`<ul class="text-gray-600 flex flex-col"${_scopeId3}><li${_scopeId3}>`);
                            _push4(ssrRenderComponent(_component_NuxtLink, {
                              class: "underline",
                              to: masterReport.name,
                              target: "_blank"
                            }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(` \u0423\u043F\u0430\u043A\u043E\u0432\u043A\u0430 `);
                                } else {
                                  return [
                                    createTextVNode(" \u0423\u043F\u0430\u043A\u043E\u0432\u043A\u0430 ")
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                            _push4(`</li><li class="flex flex-col justify-between grow mr-1 mb-1"${_scopeId3}><span class="text-muted-foreground"${_scopeId3}> (${ssrInterpolate(masterReport.items)}-\u0448\u0442.) \u0423\u043F\u0430\u043A\u043E\u0432\u0430\u043D\u0430 ${ssrInterpolate(("dateFormat" in _ctx ? _ctx.dateFormat : unref(dateFormat))(masterReport.date))}</span></li></ul>`);
                          });
                          _push4(`<!--]--></div>`);
                          _push4(ssrRenderComponent(_component_UiSeparator, { class: "my-1" }, null, _parent4, _scopeId3));
                          _push4(`<div class="gap-1"${_scopeId3}><div class="flex items-center justify-between"${_scopeId3}><div class="font-semibold pb-2"${_scopeId3}>\u041E\u0442\u0437\u044B\u0432</div>`);
                          _push4(ssrRenderComponent(_component_UiButton, { class: "h-5 w-5 px-0 py-2" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_MyReviewsCreateModal, {
                                  "deal-id": _ctx.deal.id,
                                  onIsReviewCreated: dealUpdated
                                }, null, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(_component_MyReviewsCreateModal, {
                                    "deal-id": _ctx.deal.id,
                                    onIsReviewCreated: dealUpdated
                                  }, null, 8, ["deal-id"])
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(`</div><!--[-->`);
                          ssrRenderList(_ctx.deal.reviews, (review) => {
                            var _a2, _b2;
                            _push4(`<ul class="text-gray-600 flex flex-col"${_scopeId3}><div class="flex"${_scopeId3}><li class="flex flex-col justify-between grow mr-1 mb-1"${_scopeId3}><span class="text-muted-foreground"${_scopeId3}>${ssrInterpolate(("dateFormat" in _ctx ? _ctx.dateFormat : unref(dateFormat))(review.date))}</span></li>`);
                            _push4(ssrRenderComponent(_component_NuxtLink, {
                              class: "underline",
                              to: (_b2 = (_a2 = review.file[0]) == null ? void 0 : _a2.preview) != null ? _b2 : "",
                              target: "_blank"
                            }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(` \u0421\u043A\u0440\u0438\u043D\u0448\u043E\u0442 `);
                                } else {
                                  return [
                                    createTextVNode(" \u0421\u043A\u0440\u0438\u043D\u0448\u043E\u0442 ")
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                            _push4(ssrRenderComponent(_component_UiButton, {
                              class: "h-5 w-5 px-0 py-2 ml-2",
                              onClick: () => removeReview(review)
                            }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(ssrRenderComponent(_component_Icon, {
                                    name: "lucide:minus",
                                    color: "white",
                                    size: "15px"
                                  }, null, _parent5, _scopeId4));
                                } else {
                                  return [
                                    createVNode(_component_Icon, {
                                      name: "lucide:minus",
                                      color: "white",
                                      size: "15px"
                                    })
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                            _push4(`</div><div class="w-full flex flex-col items-center"${_scopeId3}>`);
                            _push4(ssrRenderComponent(_component_UiSeparator, { class: "my-1" }, null, _parent4, _scopeId3));
                            _push4(`</div></ul>`);
                          });
                          _push4(`<!--]--></div>`);
                        } else {
                          return [
                            createVNode("div", { class: "gap-3" }, [
                              createVNode("div", { class: "font-semibold pb-2" }, "\u0414\u0435\u0442\u0430\u043B\u0438 \u043E\u043F\u043B\u0430\u0442\u044B"),
                              createVNode("ul", { class: "gap-1 text-gray-600" }, [
                                createVNode("li", { class: "flex items-center justify-between font-semibold" }, [
                                  createVNode("span", { class: "text-muted-foreground" }, " \u0421\u0443\u043C\u043C\u0430 \u0437\u0430\u043A\u0430\u0437\u0430 "),
                                  createVNode("span", null, toDisplayString(unref(totalPrice)) + "\u20BD ", 1)
                                ]),
                                createVNode("li", { class: "flex items-center justify-between" }, [
                                  createVNode("span", { class: "text-muted-foreground" }, " \u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C \u0432\u044B\u0432\u0435\u0441\u043A\u0438 "),
                                  createVNode("span", null, toDisplayString(_ctx.deal.price) + "\u20BD ", 1)
                                ]),
                                createVNode("li", { class: "flex items-center justify-between" }, [
                                  createVNode("span", { class: "text-muted-foreground" }, " \u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C \u0434\u043E\u043F. \u0443\u0441\u043B\u0443\u0433 "),
                                  createVNode("span", null, toDisplayString(unref(dopsPrice)) + "\u20BD ", 1)
                                ]),
                                createVNode("li", { class: "flex items-center justify-between" }, [
                                  createVNode("span", { class: "text-muted-foreground" }, " \u041E\u043F\u043B\u0430\u0447\u0435\u043D\u043E "),
                                  createVNode("span", null, toDisplayString(unref(recievedPayments)) + "\u20BD ", 1)
                                ]),
                                createVNode("li", { class: "flex items-center justify-between font-semibold" }, [
                                  createVNode("span", { class: "text-muted-foreground" }, " \u041E\u0441\u0442\u0430\u0442\u043E\u043A "),
                                  createVNode("span", {
                                    class: unref(remainder) > 0 ? "text-red-600" : "text-green-600"
                                  }, toDisplayString(unref(remainder)) + "\u20BD ", 3)
                                ])
                              ])
                            ]),
                            createVNode(_component_UiSeparator, { class: "my-2" }),
                            createVNode("div", { class: "gap-1" }, [
                              createVNode("div", { class: "font-semibold pb-2 flex justify-between" }, [
                                createVNode("span", null, "\u041A\u043B\u0438\u0435\u043D\u0442"),
                                createVNode(_component_MyClientsEditClient, {
                                  client: _ctx.deal.client,
                                  onIsClientEdited: dealUpdated
                                }, null, 8, ["client"])
                              ]),
                              createVNode("div", { class: "text-gray-600 flex justify-between" }, [
                                createVNode("div", null, toDisplayString((_b = _ctx.deal.client) == null ? void 0 : _b.fullName), 1),
                                createVNode(_component_NuxtLink, {
                                  class: "underlin whitespace-nowrap",
                                  to: _ctx.deal.client.chatLink,
                                  target: "_blank"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" \u0421\u0441\u044B\u043B\u043A\u0430 \u043D\u0430 \u0447\u0430\u0442 ")
                                  ]),
                                  _: 1
                                }, 8, ["to"])
                              ])
                            ]),
                            createVNode(_component_UiSeparator, { class: "my-2" }),
                            createVNode("div", null, [
                              createVNode("div", { class: "font-semibold pb-2 flex justify-between" }, [
                                createVNode("span", null, "\u0414\u043E\u0441\u0442\u0430\u0432\u043A\u0430"),
                                createVNode(_component_MyDeliveriesCreateModal, {
                                  deal: _ctx.deal,
                                  onDeliveryCreated: dealUpdated
                                }, null, 8, ["deal"])
                              ]),
                              createVNode("ul", { class: "" }, [
                                (openBlock(true), createBlock(Fragment, null, renderList(_ctx.deal.deliveries, (delivery) => {
                                  return openBlock(), createBlock("li", {
                                    key: delivery.id
                                  }, [
                                    createVNode("div", { class: "flex gap-2" }, [
                                      createVNode(_component_MyDeliveriesEditModal, {
                                        delivery,
                                        onDeliveryEdited: dealUpdated
                                      }, null, 8, ["delivery"]),
                                      createVNode("div", { class: "flex flex-col" }, [
                                        createVNode("span", { class: "text-gray-600" }, toDisplayString(delivery.method), 1),
                                        createVNode("div", { class: "flex gap-1" }, [
                                          createVNode("span", null, "\u0422\u0440\u0435\u043A-\u043D\u043E\u043C\u0435\u0440:"),
                                          createVNode("span", { class: "text-gray-900 font-bold" }, toDisplayString(delivery.track), 1)
                                        ])
                                      ]),
                                      createVNode("div", { class: "ml-[auto]" }, [
                                        createVNode(_component_UiButton, {
                                          class: "ml-[auto] w-5 h-5 p-0",
                                          onClick: () => deleteDelivery(delivery.id)
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_Icon, {
                                              name: "lucide:minus",
                                              color: "white",
                                              size: "15px"
                                            })
                                          ]),
                                          _: 2
                                        }, 1032, ["onClick"])
                                      ])
                                    ])
                                  ]);
                                }), 128))
                              ])
                            ]),
                            createVNode(_component_UiSeparator, { class: "my-2" }),
                            createVNode("div", { class: "flex flex-col" }, [
                              createVNode("div", { class: "flex justify-between font-semibold pb-2" }, [
                                createTextVNode(toDisplayString(_ctx.deal.dealers.length > 1 ? "\u041C\u0435\u043D\u0435\u0434\u0436\u0435\u0440\u044B" : "\u041C\u0435\u043D\u0435\u0434\u0436\u0435\u0440") + " ", 1),
                                (openBlock(), createBlock(_component_MyDealsAddDealerModal, {
                                  key: _ctx.deal.id,
                                  deal: _ctx.deal,
                                  onIsDealerAdded: dealUpdated
                                }, null, 8, ["deal"]))
                              ]),
                              createVNode("div", { class: "flex flex-col text-gray-600" }, [
                                (openBlock(true), createBlock(Fragment, null, renderList(_ctx.deal.dealers, (dealer) => {
                                  var _a2;
                                  return openBlock(), createBlock("ul", {
                                    key: dealer.id,
                                    class: "w-full flex-cols items-center mb-2"
                                  }, [
                                    createVNode("li", { class: "flex" }, [
                                      createVNode("div", { class: "flex justify-between grow mr-1" }, [
                                        createVNode("span", null, toDisplayString(((_a2 = dealer.user) == null ? void 0 : _a2.fullName) || "Nope"), 1),
                                        createVNode("span", null, toDisplayString(dealer.price + "p"), 1)
                                      ])
                                    ])
                                  ]);
                                }), 128))
                              ])
                            ]),
                            createVNode(_component_UiSeparator, { class: "my-2" }),
                            createVNode("div", { class: "" }, [
                              createVNode("div", { class: "flex items-center justify-between" }, [
                                createVNode("div", { class: "font-semibold pb-2" }, "\u041F\u043B\u0430\u0442\u0435\u0436\u0438"),
                                createVNode(_component_MyPaymentsCreatePaymentModal, {
                                  "deal-id": _ctx.deal.id,
                                  onIsPayCreated: dealUpdated
                                }, null, 8, ["deal-id"])
                              ]),
                              (openBlock(true), createBlock(Fragment, null, renderList(_ctx.deal.payments, (pay) => {
                                return openBlock(), createBlock("ul", {
                                  key: pay.id,
                                  class: "text-gray-600 flex"
                                }, [
                                  createVNode("li", {
                                    class: [
                                      "flex items-center justify-between grow mr-1 mb-1",
                                      pay.isConfirmed ? "text-green-600" : "text-red-500"
                                    ]
                                  }, [
                                    createVNode("span", { class: "" }, toDisplayString(pay.method), 1),
                                    createVNode("span", { class: "" }, toDisplayString(("dateFormat" in _ctx ? _ctx.dateFormat : unref(dateFormat))(pay.date)), 1),
                                    createVNode("span", { class: "" }, toDisplayString(pay.price) + "\u20BD ", 1)
                                  ], 2),
                                  createVNode(_component_UiButton, {
                                    class: "h-5 w-5 px-0 py-2",
                                    onClick: () => removePayment(pay)
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_Icon, {
                                        name: "lucide:minus",
                                        color: "white",
                                        size: "15px"
                                      })
                                    ]),
                                    _: 2
                                  }, 1032, ["onClick"])
                                ]);
                              }), 128))
                            ]),
                            createVNode(_component_UiSeparator, { class: "my-2" }),
                            createVNode("div", { class: "gap-1" }, [
                              createVNode("div", { class: "flex items-center justify-between" }, [
                                createVNode("div", { class: "font-semibold pb-2" }, "\u0414\u043E\u043F. \u0443\u0441\u043B\u0443\u0433\u0438"),
                                createVNode(_component_UiButton, { class: "h-5 w-5 px-0 py-2" }, {
                                  default: withCtx(() => [
                                    createVNode(_component_MyDopsCreateDopModal, {
                                      "deal-id": _ctx.deal.id,
                                      onIsDopCreated: dealUpdated
                                    }, null, 8, ["deal-id"])
                                  ]),
                                  _: 1
                                })
                              ]),
                              (openBlock(true), createBlock(Fragment, null, renderList(_ctx.deal.dops, (dop) => {
                                return openBlock(), createBlock("ul", {
                                  key: dop.id,
                                  class: "text-gray-600 flex flex-col"
                                }, [
                                  createVNode("div", { class: "flex" }, [
                                    createVNode("li", { class: "flex flex-col justify-between grow mr-1 mb-1" }, [
                                      createVNode("span", { class: "text-muted-foreground" }, toDisplayString(("dateFormat" in _ctx ? _ctx.dateFormat : unref(dateFormat))(dop.saleDate) + " - " + dop.type), 1),
                                      createVNode("span", { class: "text-muted-foreground" }, toDisplayString(dop.user.fullName + " - " + dop.price + "\u20BD" || ""), 1)
                                    ]),
                                    createVNode(_component_UiButton, {
                                      class: "h-5 w-5 px-0 py-2",
                                      onClick: () => removeDop(dop)
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_Icon, {
                                          name: "lucide:minus",
                                          color: "white",
                                          size: "15px"
                                        })
                                      ]),
                                      _: 2
                                    }, 1032, ["onClick"])
                                  ]),
                                  createVNode("div", { class: "w-full flex flex-col items-center" }, [
                                    createVNode(_component_UiSeparator, { class: "my-1" })
                                  ])
                                ]);
                              }), 128))
                            ]),
                            _ctx.deal && _ctx.deal.tasks && _ctx.deal.tasks.length > 0 ? (openBlock(), createBlock("div", {
                              key: 0,
                              class: "gap-1 mt-3"
                            }, [
                              createVNode("div", { class: "flex items-center justify-between" }, [
                                createVNode("div", { class: "font-semibold pb-2" }, "\u041A\u0430\u0440\u0442\u043E\u0447\u043A\u0438")
                              ]),
                              createVNode("div", { class: "flex flex-col" }, [
                                (openBlock(true), createBlock(Fragment, null, renderList(_ctx.deal.tasks, (task) => {
                                  return openBlock(), createBlock(_component_NuxtLink, {
                                    key: task.id,
                                    to: `boards/${task.boardId}/task/${task.id}`,
                                    target: "_blank",
                                    rel: "noopener",
                                    class: "hover:underline",
                                    title: "\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0443"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("span", { class: "font-bold" }, " - " + toDisplayString(task.board.title), 1),
                                      createTextVNode(" - "),
                                      createVNode("span", null, toDisplayString(task.title.slice(0, 20)), 1)
                                    ]),
                                    _: 2
                                  }, 1032, ["to"]);
                                }), 128))
                              ]),
                              createVNode(_component_UiSeparator, { class: "my-1" })
                            ])) : createCommentVNode("", true),
                            createVNode("div", { class: "gap-1 mt-3" }, [
                              createVNode("div", { class: "flex items-center justify-between" }, [
                                createVNode("div", { class: "font-semibold pb-2" }, "\u0418\u0437\u0433\u043E\u0442\u043E\u0432\u043B\u0435\u043D\u0438\u0435")
                              ]),
                              createVNode(_component_NuxtLink, {
                                class: "underline text-gray-600",
                                to: "https://easyneonwork.kaiten.ru/" + _ctx.deal.card_id,
                                target: "_blank"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" \u0414\u0438\u0437\u0430\u0439\u043D ")
                                ]),
                                _: 1
                              }, 8, ["to"]),
                              (openBlock(true), createBlock(Fragment, null, renderList(_ctx.deal.masterReports, (masterReport) => {
                                return openBlock(), createBlock("ul", {
                                  key: masterReport.id,
                                  class: "text-gray-600 flex flex-col"
                                }, [
                                  createVNode("li", null, [
                                    createVNode(_component_NuxtLink, {
                                      class: "underline",
                                      to: masterReport.name,
                                      target: "_blank"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" \u041F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0441\u0442\u0432\u043E ")
                                      ]),
                                      _: 2
                                    }, 1032, ["to"])
                                  ]),
                                  createVNode("li", { class: "flex flex-col justify-between grow mr-1 mb-1" }, [
                                    createVNode("span", { class: "text-muted-foreground" }, " (" + toDisplayString(masterReport.type) + ") \u0421\u043E\u0431\u0440\u0430\u043D\u0430 " + toDisplayString(("dateFormat" in _ctx ? _ctx.dateFormat : unref(dateFormat))(masterReport.date)), 1)
                                  ])
                                ]);
                              }), 128)),
                              (openBlock(true), createBlock(Fragment, null, renderList(_ctx.deal.packerReports, (masterReport) => {
                                return openBlock(), createBlock("ul", {
                                  key: masterReport.id,
                                  class: "text-gray-600 flex flex-col"
                                }, [
                                  createVNode("li", null, [
                                    createVNode(_component_NuxtLink, {
                                      class: "underline",
                                      to: masterReport.name,
                                      target: "_blank"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" \u0423\u043F\u0430\u043A\u043E\u0432\u043A\u0430 ")
                                      ]),
                                      _: 2
                                    }, 1032, ["to"])
                                  ]),
                                  createVNode("li", { class: "flex flex-col justify-between grow mr-1 mb-1" }, [
                                    createVNode("span", { class: "text-muted-foreground" }, " (" + toDisplayString(masterReport.items) + "-\u0448\u0442.) \u0423\u043F\u0430\u043A\u043E\u0432\u0430\u043D\u0430 " + toDisplayString(("dateFormat" in _ctx ? _ctx.dateFormat : unref(dateFormat))(masterReport.date)), 1)
                                  ])
                                ]);
                              }), 128))
                            ]),
                            createVNode(_component_UiSeparator, { class: "my-1" }),
                            createVNode("div", { class: "gap-1" }, [
                              createVNode("div", { class: "flex items-center justify-between" }, [
                                createVNode("div", { class: "font-semibold pb-2" }, "\u041E\u0442\u0437\u044B\u0432"),
                                createVNode(_component_UiButton, { class: "h-5 w-5 px-0 py-2" }, {
                                  default: withCtx(() => [
                                    createVNode(_component_MyReviewsCreateModal, {
                                      "deal-id": _ctx.deal.id,
                                      onIsReviewCreated: dealUpdated
                                    }, null, 8, ["deal-id"])
                                  ]),
                                  _: 1
                                })
                              ]),
                              (openBlock(true), createBlock(Fragment, null, renderList(_ctx.deal.reviews, (review) => {
                                var _a2, _b2;
                                return openBlock(), createBlock("ul", {
                                  key: review.id,
                                  class: "text-gray-600 flex flex-col"
                                }, [
                                  createVNode("div", { class: "flex" }, [
                                    createVNode("li", { class: "flex flex-col justify-between grow mr-1 mb-1" }, [
                                      createVNode("span", { class: "text-muted-foreground" }, toDisplayString(("dateFormat" in _ctx ? _ctx.dateFormat : unref(dateFormat))(review.date)), 1)
                                    ]),
                                    createVNode(_component_NuxtLink, {
                                      class: "underline",
                                      to: (_b2 = (_a2 = review.file[0]) == null ? void 0 : _a2.preview) != null ? _b2 : "",
                                      target: "_blank"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" \u0421\u043A\u0440\u0438\u043D\u0448\u043E\u0442 ")
                                      ]),
                                      _: 2
                                    }, 1032, ["to"]),
                                    createVNode(_component_UiButton, {
                                      class: "h-5 w-5 px-0 py-2 ml-2",
                                      onClick: () => removeReview(review)
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_Icon, {
                                          name: "lucide:minus",
                                          color: "white",
                                          size: "15px"
                                        })
                                      ]),
                                      _: 2
                                    }, 1032, ["onClick"])
                                  ]),
                                  createVNode("div", { class: "w-full flex flex-col items-center" }, [
                                    createVNode(_component_UiSeparator, { class: "my-1" })
                                  ])
                                ]);
                              }), 128))
                            ])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_UiCardContent, { class: "p-6 text-sm h-full" }, {
                        default: withCtx(() => {
                          var _a;
                          return [
                            createVNode("div", { class: "gap-3" }, [
                              createVNode("div", { class: "font-semibold pb-2" }, "\u0414\u0435\u0442\u0430\u043B\u0438 \u043E\u043F\u043B\u0430\u0442\u044B"),
                              createVNode("ul", { class: "gap-1 text-gray-600" }, [
                                createVNode("li", { class: "flex items-center justify-between font-semibold" }, [
                                  createVNode("span", { class: "text-muted-foreground" }, " \u0421\u0443\u043C\u043C\u0430 \u0437\u0430\u043A\u0430\u0437\u0430 "),
                                  createVNode("span", null, toDisplayString(unref(totalPrice)) + "\u20BD ", 1)
                                ]),
                                createVNode("li", { class: "flex items-center justify-between" }, [
                                  createVNode("span", { class: "text-muted-foreground" }, " \u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C \u0432\u044B\u0432\u0435\u0441\u043A\u0438 "),
                                  createVNode("span", null, toDisplayString(_ctx.deal.price) + "\u20BD ", 1)
                                ]),
                                createVNode("li", { class: "flex items-center justify-between" }, [
                                  createVNode("span", { class: "text-muted-foreground" }, " \u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C \u0434\u043E\u043F. \u0443\u0441\u043B\u0443\u0433 "),
                                  createVNode("span", null, toDisplayString(unref(dopsPrice)) + "\u20BD ", 1)
                                ]),
                                createVNode("li", { class: "flex items-center justify-between" }, [
                                  createVNode("span", { class: "text-muted-foreground" }, " \u041E\u043F\u043B\u0430\u0447\u0435\u043D\u043E "),
                                  createVNode("span", null, toDisplayString(unref(recievedPayments)) + "\u20BD ", 1)
                                ]),
                                createVNode("li", { class: "flex items-center justify-between font-semibold" }, [
                                  createVNode("span", { class: "text-muted-foreground" }, " \u041E\u0441\u0442\u0430\u0442\u043E\u043A "),
                                  createVNode("span", {
                                    class: unref(remainder) > 0 ? "text-red-600" : "text-green-600"
                                  }, toDisplayString(unref(remainder)) + "\u20BD ", 3)
                                ])
                              ])
                            ]),
                            createVNode(_component_UiSeparator, { class: "my-2" }),
                            createVNode("div", { class: "gap-1" }, [
                              createVNode("div", { class: "font-semibold pb-2 flex justify-between" }, [
                                createVNode("span", null, "\u041A\u043B\u0438\u0435\u043D\u0442"),
                                createVNode(_component_MyClientsEditClient, {
                                  client: _ctx.deal.client,
                                  onIsClientEdited: dealUpdated
                                }, null, 8, ["client"])
                              ]),
                              createVNode("div", { class: "text-gray-600 flex justify-between" }, [
                                createVNode("div", null, toDisplayString((_a = _ctx.deal.client) == null ? void 0 : _a.fullName), 1),
                                createVNode(_component_NuxtLink, {
                                  class: "underlin whitespace-nowrap",
                                  to: _ctx.deal.client.chatLink,
                                  target: "_blank"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" \u0421\u0441\u044B\u043B\u043A\u0430 \u043D\u0430 \u0447\u0430\u0442 ")
                                  ]),
                                  _: 1
                                }, 8, ["to"])
                              ])
                            ]),
                            createVNode(_component_UiSeparator, { class: "my-2" }),
                            createVNode("div", null, [
                              createVNode("div", { class: "font-semibold pb-2 flex justify-between" }, [
                                createVNode("span", null, "\u0414\u043E\u0441\u0442\u0430\u0432\u043A\u0430"),
                                createVNode(_component_MyDeliveriesCreateModal, {
                                  deal: _ctx.deal,
                                  onDeliveryCreated: dealUpdated
                                }, null, 8, ["deal"])
                              ]),
                              createVNode("ul", { class: "" }, [
                                (openBlock(true), createBlock(Fragment, null, renderList(_ctx.deal.deliveries, (delivery) => {
                                  return openBlock(), createBlock("li", {
                                    key: delivery.id
                                  }, [
                                    createVNode("div", { class: "flex gap-2" }, [
                                      createVNode(_component_MyDeliveriesEditModal, {
                                        delivery,
                                        onDeliveryEdited: dealUpdated
                                      }, null, 8, ["delivery"]),
                                      createVNode("div", { class: "flex flex-col" }, [
                                        createVNode("span", { class: "text-gray-600" }, toDisplayString(delivery.method), 1),
                                        createVNode("div", { class: "flex gap-1" }, [
                                          createVNode("span", null, "\u0422\u0440\u0435\u043A-\u043D\u043E\u043C\u0435\u0440:"),
                                          createVNode("span", { class: "text-gray-900 font-bold" }, toDisplayString(delivery.track), 1)
                                        ])
                                      ]),
                                      createVNode("div", { class: "ml-[auto]" }, [
                                        createVNode(_component_UiButton, {
                                          class: "ml-[auto] w-5 h-5 p-0",
                                          onClick: () => deleteDelivery(delivery.id)
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_Icon, {
                                              name: "lucide:minus",
                                              color: "white",
                                              size: "15px"
                                            })
                                          ]),
                                          _: 2
                                        }, 1032, ["onClick"])
                                      ])
                                    ])
                                  ]);
                                }), 128))
                              ])
                            ]),
                            createVNode(_component_UiSeparator, { class: "my-2" }),
                            createVNode("div", { class: "flex flex-col" }, [
                              createVNode("div", { class: "flex justify-between font-semibold pb-2" }, [
                                createTextVNode(toDisplayString(_ctx.deal.dealers.length > 1 ? "\u041C\u0435\u043D\u0435\u0434\u0436\u0435\u0440\u044B" : "\u041C\u0435\u043D\u0435\u0434\u0436\u0435\u0440") + " ", 1),
                                (openBlock(), createBlock(_component_MyDealsAddDealerModal, {
                                  key: _ctx.deal.id,
                                  deal: _ctx.deal,
                                  onIsDealerAdded: dealUpdated
                                }, null, 8, ["deal"]))
                              ]),
                              createVNode("div", { class: "flex flex-col text-gray-600" }, [
                                (openBlock(true), createBlock(Fragment, null, renderList(_ctx.deal.dealers, (dealer) => {
                                  var _a2;
                                  return openBlock(), createBlock("ul", {
                                    key: dealer.id,
                                    class: "w-full flex-cols items-center mb-2"
                                  }, [
                                    createVNode("li", { class: "flex" }, [
                                      createVNode("div", { class: "flex justify-between grow mr-1" }, [
                                        createVNode("span", null, toDisplayString(((_a2 = dealer.user) == null ? void 0 : _a2.fullName) || "Nope"), 1),
                                        createVNode("span", null, toDisplayString(dealer.price + "p"), 1)
                                      ])
                                    ])
                                  ]);
                                }), 128))
                              ])
                            ]),
                            createVNode(_component_UiSeparator, { class: "my-2" }),
                            createVNode("div", { class: "" }, [
                              createVNode("div", { class: "flex items-center justify-between" }, [
                                createVNode("div", { class: "font-semibold pb-2" }, "\u041F\u043B\u0430\u0442\u0435\u0436\u0438"),
                                createVNode(_component_MyPaymentsCreatePaymentModal, {
                                  "deal-id": _ctx.deal.id,
                                  onIsPayCreated: dealUpdated
                                }, null, 8, ["deal-id"])
                              ]),
                              (openBlock(true), createBlock(Fragment, null, renderList(_ctx.deal.payments, (pay) => {
                                return openBlock(), createBlock("ul", {
                                  key: pay.id,
                                  class: "text-gray-600 flex"
                                }, [
                                  createVNode("li", {
                                    class: [
                                      "flex items-center justify-between grow mr-1 mb-1",
                                      pay.isConfirmed ? "text-green-600" : "text-red-500"
                                    ]
                                  }, [
                                    createVNode("span", { class: "" }, toDisplayString(pay.method), 1),
                                    createVNode("span", { class: "" }, toDisplayString(("dateFormat" in _ctx ? _ctx.dateFormat : unref(dateFormat))(pay.date)), 1),
                                    createVNode("span", { class: "" }, toDisplayString(pay.price) + "\u20BD ", 1)
                                  ], 2),
                                  createVNode(_component_UiButton, {
                                    class: "h-5 w-5 px-0 py-2",
                                    onClick: () => removePayment(pay)
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_Icon, {
                                        name: "lucide:minus",
                                        color: "white",
                                        size: "15px"
                                      })
                                    ]),
                                    _: 2
                                  }, 1032, ["onClick"])
                                ]);
                              }), 128))
                            ]),
                            createVNode(_component_UiSeparator, { class: "my-2" }),
                            createVNode("div", { class: "gap-1" }, [
                              createVNode("div", { class: "flex items-center justify-between" }, [
                                createVNode("div", { class: "font-semibold pb-2" }, "\u0414\u043E\u043F. \u0443\u0441\u043B\u0443\u0433\u0438"),
                                createVNode(_component_UiButton, { class: "h-5 w-5 px-0 py-2" }, {
                                  default: withCtx(() => [
                                    createVNode(_component_MyDopsCreateDopModal, {
                                      "deal-id": _ctx.deal.id,
                                      onIsDopCreated: dealUpdated
                                    }, null, 8, ["deal-id"])
                                  ]),
                                  _: 1
                                })
                              ]),
                              (openBlock(true), createBlock(Fragment, null, renderList(_ctx.deal.dops, (dop) => {
                                return openBlock(), createBlock("ul", {
                                  key: dop.id,
                                  class: "text-gray-600 flex flex-col"
                                }, [
                                  createVNode("div", { class: "flex" }, [
                                    createVNode("li", { class: "flex flex-col justify-between grow mr-1 mb-1" }, [
                                      createVNode("span", { class: "text-muted-foreground" }, toDisplayString(("dateFormat" in _ctx ? _ctx.dateFormat : unref(dateFormat))(dop.saleDate) + " - " + dop.type), 1),
                                      createVNode("span", { class: "text-muted-foreground" }, toDisplayString(dop.user.fullName + " - " + dop.price + "\u20BD" || ""), 1)
                                    ]),
                                    createVNode(_component_UiButton, {
                                      class: "h-5 w-5 px-0 py-2",
                                      onClick: () => removeDop(dop)
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_Icon, {
                                          name: "lucide:minus",
                                          color: "white",
                                          size: "15px"
                                        })
                                      ]),
                                      _: 2
                                    }, 1032, ["onClick"])
                                  ]),
                                  createVNode("div", { class: "w-full flex flex-col items-center" }, [
                                    createVNode(_component_UiSeparator, { class: "my-1" })
                                  ])
                                ]);
                              }), 128))
                            ]),
                            _ctx.deal && _ctx.deal.tasks && _ctx.deal.tasks.length > 0 ? (openBlock(), createBlock("div", {
                              key: 0,
                              class: "gap-1 mt-3"
                            }, [
                              createVNode("div", { class: "flex items-center justify-between" }, [
                                createVNode("div", { class: "font-semibold pb-2" }, "\u041A\u0430\u0440\u0442\u043E\u0447\u043A\u0438")
                              ]),
                              createVNode("div", { class: "flex flex-col" }, [
                                (openBlock(true), createBlock(Fragment, null, renderList(_ctx.deal.tasks, (task) => {
                                  return openBlock(), createBlock(_component_NuxtLink, {
                                    key: task.id,
                                    to: `boards/${task.boardId}/task/${task.id}`,
                                    target: "_blank",
                                    rel: "noopener",
                                    class: "hover:underline",
                                    title: "\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0443"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("span", { class: "font-bold" }, " - " + toDisplayString(task.board.title), 1),
                                      createTextVNode(" - "),
                                      createVNode("span", null, toDisplayString(task.title.slice(0, 20)), 1)
                                    ]),
                                    _: 2
                                  }, 1032, ["to"]);
                                }), 128))
                              ]),
                              createVNode(_component_UiSeparator, { class: "my-1" })
                            ])) : createCommentVNode("", true),
                            createVNode("div", { class: "gap-1 mt-3" }, [
                              createVNode("div", { class: "flex items-center justify-between" }, [
                                createVNode("div", { class: "font-semibold pb-2" }, "\u0418\u0437\u0433\u043E\u0442\u043E\u0432\u043B\u0435\u043D\u0438\u0435")
                              ]),
                              createVNode(_component_NuxtLink, {
                                class: "underline text-gray-600",
                                to: "https://easyneonwork.kaiten.ru/" + _ctx.deal.card_id,
                                target: "_blank"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" \u0414\u0438\u0437\u0430\u0439\u043D ")
                                ]),
                                _: 1
                              }, 8, ["to"]),
                              (openBlock(true), createBlock(Fragment, null, renderList(_ctx.deal.masterReports, (masterReport) => {
                                return openBlock(), createBlock("ul", {
                                  key: masterReport.id,
                                  class: "text-gray-600 flex flex-col"
                                }, [
                                  createVNode("li", null, [
                                    createVNode(_component_NuxtLink, {
                                      class: "underline",
                                      to: masterReport.name,
                                      target: "_blank"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" \u041F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0441\u0442\u0432\u043E ")
                                      ]),
                                      _: 2
                                    }, 1032, ["to"])
                                  ]),
                                  createVNode("li", { class: "flex flex-col justify-between grow mr-1 mb-1" }, [
                                    createVNode("span", { class: "text-muted-foreground" }, " (" + toDisplayString(masterReport.type) + ") \u0421\u043E\u0431\u0440\u0430\u043D\u0430 " + toDisplayString(("dateFormat" in _ctx ? _ctx.dateFormat : unref(dateFormat))(masterReport.date)), 1)
                                  ])
                                ]);
                              }), 128)),
                              (openBlock(true), createBlock(Fragment, null, renderList(_ctx.deal.packerReports, (masterReport) => {
                                return openBlock(), createBlock("ul", {
                                  key: masterReport.id,
                                  class: "text-gray-600 flex flex-col"
                                }, [
                                  createVNode("li", null, [
                                    createVNode(_component_NuxtLink, {
                                      class: "underline",
                                      to: masterReport.name,
                                      target: "_blank"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" \u0423\u043F\u0430\u043A\u043E\u0432\u043A\u0430 ")
                                      ]),
                                      _: 2
                                    }, 1032, ["to"])
                                  ]),
                                  createVNode("li", { class: "flex flex-col justify-between grow mr-1 mb-1" }, [
                                    createVNode("span", { class: "text-muted-foreground" }, " (" + toDisplayString(masterReport.items) + "-\u0448\u0442.) \u0423\u043F\u0430\u043A\u043E\u0432\u0430\u043D\u0430 " + toDisplayString(("dateFormat" in _ctx ? _ctx.dateFormat : unref(dateFormat))(masterReport.date)), 1)
                                  ])
                                ]);
                              }), 128))
                            ]),
                            createVNode(_component_UiSeparator, { class: "my-1" }),
                            createVNode("div", { class: "gap-1" }, [
                              createVNode("div", { class: "flex items-center justify-between" }, [
                                createVNode("div", { class: "font-semibold pb-2" }, "\u041E\u0442\u0437\u044B\u0432"),
                                createVNode(_component_UiButton, { class: "h-5 w-5 px-0 py-2" }, {
                                  default: withCtx(() => [
                                    createVNode(_component_MyReviewsCreateModal, {
                                      "deal-id": _ctx.deal.id,
                                      onIsReviewCreated: dealUpdated
                                    }, null, 8, ["deal-id"])
                                  ]),
                                  _: 1
                                })
                              ]),
                              (openBlock(true), createBlock(Fragment, null, renderList(_ctx.deal.reviews, (review) => {
                                var _a2, _b;
                                return openBlock(), createBlock("ul", {
                                  key: review.id,
                                  class: "text-gray-600 flex flex-col"
                                }, [
                                  createVNode("div", { class: "flex" }, [
                                    createVNode("li", { class: "flex flex-col justify-between grow mr-1 mb-1" }, [
                                      createVNode("span", { class: "text-muted-foreground" }, toDisplayString(("dateFormat" in _ctx ? _ctx.dateFormat : unref(dateFormat))(review.date)), 1)
                                    ]),
                                    createVNode(_component_NuxtLink, {
                                      class: "underline",
                                      to: (_b = (_a2 = review.file[0]) == null ? void 0 : _a2.preview) != null ? _b : "",
                                      target: "_blank"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" \u0421\u043A\u0440\u0438\u043D\u0448\u043E\u0442 ")
                                      ]),
                                      _: 2
                                    }, 1032, ["to"]),
                                    createVNode(_component_UiButton, {
                                      class: "h-5 w-5 px-0 py-2 ml-2",
                                      onClick: () => removeReview(review)
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_Icon, {
                                          name: "lucide:minus",
                                          color: "white",
                                          size: "15px"
                                        })
                                      ]),
                                      _: 2
                                    }, 1032, ["onClick"])
                                  ]),
                                  createVNode("div", { class: "w-full flex flex-col items-center" }, [
                                    createVNode(_component_UiSeparator, { class: "my-1" })
                                  ])
                                ]);
                              }), 128))
                            ])
                          ];
                        }),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UiCardFooter, null, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_UiCardHeader, { class: "flex flex-row items-start bg-slate-50 pb-1" }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "flex-1 min-w-0" }, [
                      createVNode(_component_UiCardTitle, { class: "flex items-center gap-2 text-lg pb-2 pr-2 break-all leading-tight" }, {
                        default: withCtx(() => [
                          createVNode(_component_NuxtLink, {
                            to: `/deals/${_ctx.deal.id}`,
                            class: "cursor-pointer hover:underline"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(_ctx.deal.title), 1)
                            ]),
                            _: 1
                          }, 8, ["to"])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_UiCardDescription, null, {
                        default: withCtx(() => [
                          createVNode("div", { class: "flex flex-col" }, [
                            createVNode("span", null, " \u041F\u0435\u0440\u0432\u044B\u0439 \u043A\u043E\u043D\u0442\u0430\u043A\u0442: " + toDisplayString(("dateFormat" in _ctx ? _ctx.dateFormat : unref(dateFormat))(_ctx.deal.client.firstContact)), 1),
                            createVNode("span", null, " \u0414\u0430\u0442\u0430 \u043F\u0440\u043E\u0434\u0430\u0436\u0438: " + toDisplayString(("dateFormat" in _ctx ? _ctx.dateFormat : unref(dateFormat))(_ctx.deal.saleDate)), 1),
                            createVNode("span", null, " \u041F\u0440\u043E\u0448\u043B\u043E \u0434\u043D\u0435\u0439: " + toDisplayString(unref(daysGone)), 1),
                            _ctx.deal.maketPresentation ? (openBlock(), createBlock("span", { key: 0 }, "\u041F\u0440\u0435\u0437\u0435\u043D\u0442\u0430\u0446\u0438\u044F \u043C\u0430\u043A\u0435\u0442\u0430: " + toDisplayString(("dateFormat" in _ctx ? _ctx.dateFormat : unref(dateFormat))(_ctx.deal.maketPresentation)), 1)) : createCommentVNode("", true)
                          ]),
                          createVNode("div", { class: "flex gap-2 mb-2 items-center" }, [
                            createVNode("span", null, "\u0421\u0442\u0430\u0442\u0443\u0441: " + toDisplayString(_ctx.deal.status), 1)
                          ])
                        ]),
                        _: 1
                      })
                    ]),
                    createVNode("div", { class: "ml-auto flex items-center gap-2" }, [
                      createVNode(_component_MyDealsDealHistory, {
                        "deal-id": _ctx.deal.id,
                        onIsDealEdited: dealUpdated,
                        onIsDealDeleted: dealDeleted
                      }, null, 8, ["deal-id"]),
                      createVNode(_component_MyDealsEditDealModal, {
                        deal: _ctx.deal,
                        onIsDealEdited: dealUpdated,
                        onIsDealDeleted: dealDeleted
                      }, null, 8, ["deal"])
                    ])
                  ]),
                  _: 1
                }),
                createVNode(_component_UiScrollArea, null, {
                  default: withCtx(() => [
                    createVNode(_component_UiCardContent, { class: "p-6 text-sm h-full" }, {
                      default: withCtx(() => {
                        var _a;
                        return [
                          createVNode("div", { class: "gap-3" }, [
                            createVNode("div", { class: "font-semibold pb-2" }, "\u0414\u0435\u0442\u0430\u043B\u0438 \u043E\u043F\u043B\u0430\u0442\u044B"),
                            createVNode("ul", { class: "gap-1 text-gray-600" }, [
                              createVNode("li", { class: "flex items-center justify-between font-semibold" }, [
                                createVNode("span", { class: "text-muted-foreground" }, " \u0421\u0443\u043C\u043C\u0430 \u0437\u0430\u043A\u0430\u0437\u0430 "),
                                createVNode("span", null, toDisplayString(unref(totalPrice)) + "\u20BD ", 1)
                              ]),
                              createVNode("li", { class: "flex items-center justify-between" }, [
                                createVNode("span", { class: "text-muted-foreground" }, " \u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C \u0432\u044B\u0432\u0435\u0441\u043A\u0438 "),
                                createVNode("span", null, toDisplayString(_ctx.deal.price) + "\u20BD ", 1)
                              ]),
                              createVNode("li", { class: "flex items-center justify-between" }, [
                                createVNode("span", { class: "text-muted-foreground" }, " \u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C \u0434\u043E\u043F. \u0443\u0441\u043B\u0443\u0433 "),
                                createVNode("span", null, toDisplayString(unref(dopsPrice)) + "\u20BD ", 1)
                              ]),
                              createVNode("li", { class: "flex items-center justify-between" }, [
                                createVNode("span", { class: "text-muted-foreground" }, " \u041E\u043F\u043B\u0430\u0447\u0435\u043D\u043E "),
                                createVNode("span", null, toDisplayString(unref(recievedPayments)) + "\u20BD ", 1)
                              ]),
                              createVNode("li", { class: "flex items-center justify-between font-semibold" }, [
                                createVNode("span", { class: "text-muted-foreground" }, " \u041E\u0441\u0442\u0430\u0442\u043E\u043A "),
                                createVNode("span", {
                                  class: unref(remainder) > 0 ? "text-red-600" : "text-green-600"
                                }, toDisplayString(unref(remainder)) + "\u20BD ", 3)
                              ])
                            ])
                          ]),
                          createVNode(_component_UiSeparator, { class: "my-2" }),
                          createVNode("div", { class: "gap-1" }, [
                            createVNode("div", { class: "font-semibold pb-2 flex justify-between" }, [
                              createVNode("span", null, "\u041A\u043B\u0438\u0435\u043D\u0442"),
                              createVNode(_component_MyClientsEditClient, {
                                client: _ctx.deal.client,
                                onIsClientEdited: dealUpdated
                              }, null, 8, ["client"])
                            ]),
                            createVNode("div", { class: "text-gray-600 flex justify-between" }, [
                              createVNode("div", null, toDisplayString((_a = _ctx.deal.client) == null ? void 0 : _a.fullName), 1),
                              createVNode(_component_NuxtLink, {
                                class: "underlin whitespace-nowrap",
                                to: _ctx.deal.client.chatLink,
                                target: "_blank"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" \u0421\u0441\u044B\u043B\u043A\u0430 \u043D\u0430 \u0447\u0430\u0442 ")
                                ]),
                                _: 1
                              }, 8, ["to"])
                            ])
                          ]),
                          createVNode(_component_UiSeparator, { class: "my-2" }),
                          createVNode("div", null, [
                            createVNode("div", { class: "font-semibold pb-2 flex justify-between" }, [
                              createVNode("span", null, "\u0414\u043E\u0441\u0442\u0430\u0432\u043A\u0430"),
                              createVNode(_component_MyDeliveriesCreateModal, {
                                deal: _ctx.deal,
                                onDeliveryCreated: dealUpdated
                              }, null, 8, ["deal"])
                            ]),
                            createVNode("ul", { class: "" }, [
                              (openBlock(true), createBlock(Fragment, null, renderList(_ctx.deal.deliveries, (delivery) => {
                                return openBlock(), createBlock("li", {
                                  key: delivery.id
                                }, [
                                  createVNode("div", { class: "flex gap-2" }, [
                                    createVNode(_component_MyDeliveriesEditModal, {
                                      delivery,
                                      onDeliveryEdited: dealUpdated
                                    }, null, 8, ["delivery"]),
                                    createVNode("div", { class: "flex flex-col" }, [
                                      createVNode("span", { class: "text-gray-600" }, toDisplayString(delivery.method), 1),
                                      createVNode("div", { class: "flex gap-1" }, [
                                        createVNode("span", null, "\u0422\u0440\u0435\u043A-\u043D\u043E\u043C\u0435\u0440:"),
                                        createVNode("span", { class: "text-gray-900 font-bold" }, toDisplayString(delivery.track), 1)
                                      ])
                                    ]),
                                    createVNode("div", { class: "ml-[auto]" }, [
                                      createVNode(_component_UiButton, {
                                        class: "ml-[auto] w-5 h-5 p-0",
                                        onClick: () => deleteDelivery(delivery.id)
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_Icon, {
                                            name: "lucide:minus",
                                            color: "white",
                                            size: "15px"
                                          })
                                        ]),
                                        _: 2
                                      }, 1032, ["onClick"])
                                    ])
                                  ])
                                ]);
                              }), 128))
                            ])
                          ]),
                          createVNode(_component_UiSeparator, { class: "my-2" }),
                          createVNode("div", { class: "flex flex-col" }, [
                            createVNode("div", { class: "flex justify-between font-semibold pb-2" }, [
                              createTextVNode(toDisplayString(_ctx.deal.dealers.length > 1 ? "\u041C\u0435\u043D\u0435\u0434\u0436\u0435\u0440\u044B" : "\u041C\u0435\u043D\u0435\u0434\u0436\u0435\u0440") + " ", 1),
                              (openBlock(), createBlock(_component_MyDealsAddDealerModal, {
                                key: _ctx.deal.id,
                                deal: _ctx.deal,
                                onIsDealerAdded: dealUpdated
                              }, null, 8, ["deal"]))
                            ]),
                            createVNode("div", { class: "flex flex-col text-gray-600" }, [
                              (openBlock(true), createBlock(Fragment, null, renderList(_ctx.deal.dealers, (dealer) => {
                                var _a2;
                                return openBlock(), createBlock("ul", {
                                  key: dealer.id,
                                  class: "w-full flex-cols items-center mb-2"
                                }, [
                                  createVNode("li", { class: "flex" }, [
                                    createVNode("div", { class: "flex justify-between grow mr-1" }, [
                                      createVNode("span", null, toDisplayString(((_a2 = dealer.user) == null ? void 0 : _a2.fullName) || "Nope"), 1),
                                      createVNode("span", null, toDisplayString(dealer.price + "p"), 1)
                                    ])
                                  ])
                                ]);
                              }), 128))
                            ])
                          ]),
                          createVNode(_component_UiSeparator, { class: "my-2" }),
                          createVNode("div", { class: "" }, [
                            createVNode("div", { class: "flex items-center justify-between" }, [
                              createVNode("div", { class: "font-semibold pb-2" }, "\u041F\u043B\u0430\u0442\u0435\u0436\u0438"),
                              createVNode(_component_MyPaymentsCreatePaymentModal, {
                                "deal-id": _ctx.deal.id,
                                onIsPayCreated: dealUpdated
                              }, null, 8, ["deal-id"])
                            ]),
                            (openBlock(true), createBlock(Fragment, null, renderList(_ctx.deal.payments, (pay) => {
                              return openBlock(), createBlock("ul", {
                                key: pay.id,
                                class: "text-gray-600 flex"
                              }, [
                                createVNode("li", {
                                  class: [
                                    "flex items-center justify-between grow mr-1 mb-1",
                                    pay.isConfirmed ? "text-green-600" : "text-red-500"
                                  ]
                                }, [
                                  createVNode("span", { class: "" }, toDisplayString(pay.method), 1),
                                  createVNode("span", { class: "" }, toDisplayString(("dateFormat" in _ctx ? _ctx.dateFormat : unref(dateFormat))(pay.date)), 1),
                                  createVNode("span", { class: "" }, toDisplayString(pay.price) + "\u20BD ", 1)
                                ], 2),
                                createVNode(_component_UiButton, {
                                  class: "h-5 w-5 px-0 py-2",
                                  onClick: () => removePayment(pay)
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_Icon, {
                                      name: "lucide:minus",
                                      color: "white",
                                      size: "15px"
                                    })
                                  ]),
                                  _: 2
                                }, 1032, ["onClick"])
                              ]);
                            }), 128))
                          ]),
                          createVNode(_component_UiSeparator, { class: "my-2" }),
                          createVNode("div", { class: "gap-1" }, [
                            createVNode("div", { class: "flex items-center justify-between" }, [
                              createVNode("div", { class: "font-semibold pb-2" }, "\u0414\u043E\u043F. \u0443\u0441\u043B\u0443\u0433\u0438"),
                              createVNode(_component_UiButton, { class: "h-5 w-5 px-0 py-2" }, {
                                default: withCtx(() => [
                                  createVNode(_component_MyDopsCreateDopModal, {
                                    "deal-id": _ctx.deal.id,
                                    onIsDopCreated: dealUpdated
                                  }, null, 8, ["deal-id"])
                                ]),
                                _: 1
                              })
                            ]),
                            (openBlock(true), createBlock(Fragment, null, renderList(_ctx.deal.dops, (dop) => {
                              return openBlock(), createBlock("ul", {
                                key: dop.id,
                                class: "text-gray-600 flex flex-col"
                              }, [
                                createVNode("div", { class: "flex" }, [
                                  createVNode("li", { class: "flex flex-col justify-between grow mr-1 mb-1" }, [
                                    createVNode("span", { class: "text-muted-foreground" }, toDisplayString(("dateFormat" in _ctx ? _ctx.dateFormat : unref(dateFormat))(dop.saleDate) + " - " + dop.type), 1),
                                    createVNode("span", { class: "text-muted-foreground" }, toDisplayString(dop.user.fullName + " - " + dop.price + "\u20BD" || ""), 1)
                                  ]),
                                  createVNode(_component_UiButton, {
                                    class: "h-5 w-5 px-0 py-2",
                                    onClick: () => removeDop(dop)
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_Icon, {
                                        name: "lucide:minus",
                                        color: "white",
                                        size: "15px"
                                      })
                                    ]),
                                    _: 2
                                  }, 1032, ["onClick"])
                                ]),
                                createVNode("div", { class: "w-full flex flex-col items-center" }, [
                                  createVNode(_component_UiSeparator, { class: "my-1" })
                                ])
                              ]);
                            }), 128))
                          ]),
                          _ctx.deal && _ctx.deal.tasks && _ctx.deal.tasks.length > 0 ? (openBlock(), createBlock("div", {
                            key: 0,
                            class: "gap-1 mt-3"
                          }, [
                            createVNode("div", { class: "flex items-center justify-between" }, [
                              createVNode("div", { class: "font-semibold pb-2" }, "\u041A\u0430\u0440\u0442\u043E\u0447\u043A\u0438")
                            ]),
                            createVNode("div", { class: "flex flex-col" }, [
                              (openBlock(true), createBlock(Fragment, null, renderList(_ctx.deal.tasks, (task) => {
                                return openBlock(), createBlock(_component_NuxtLink, {
                                  key: task.id,
                                  to: `boards/${task.boardId}/task/${task.id}`,
                                  target: "_blank",
                                  rel: "noopener",
                                  class: "hover:underline",
                                  title: "\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0443"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("span", { class: "font-bold" }, " - " + toDisplayString(task.board.title), 1),
                                    createTextVNode(" - "),
                                    createVNode("span", null, toDisplayString(task.title.slice(0, 20)), 1)
                                  ]),
                                  _: 2
                                }, 1032, ["to"]);
                              }), 128))
                            ]),
                            createVNode(_component_UiSeparator, { class: "my-1" })
                          ])) : createCommentVNode("", true),
                          createVNode("div", { class: "gap-1 mt-3" }, [
                            createVNode("div", { class: "flex items-center justify-between" }, [
                              createVNode("div", { class: "font-semibold pb-2" }, "\u0418\u0437\u0433\u043E\u0442\u043E\u0432\u043B\u0435\u043D\u0438\u0435")
                            ]),
                            createVNode(_component_NuxtLink, {
                              class: "underline text-gray-600",
                              to: "https://easyneonwork.kaiten.ru/" + _ctx.deal.card_id,
                              target: "_blank"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" \u0414\u0438\u0437\u0430\u0439\u043D ")
                              ]),
                              _: 1
                            }, 8, ["to"]),
                            (openBlock(true), createBlock(Fragment, null, renderList(_ctx.deal.masterReports, (masterReport) => {
                              return openBlock(), createBlock("ul", {
                                key: masterReport.id,
                                class: "text-gray-600 flex flex-col"
                              }, [
                                createVNode("li", null, [
                                  createVNode(_component_NuxtLink, {
                                    class: "underline",
                                    to: masterReport.name,
                                    target: "_blank"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" \u041F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0441\u0442\u0432\u043E ")
                                    ]),
                                    _: 2
                                  }, 1032, ["to"])
                                ]),
                                createVNode("li", { class: "flex flex-col justify-between grow mr-1 mb-1" }, [
                                  createVNode("span", { class: "text-muted-foreground" }, " (" + toDisplayString(masterReport.type) + ") \u0421\u043E\u0431\u0440\u0430\u043D\u0430 " + toDisplayString(("dateFormat" in _ctx ? _ctx.dateFormat : unref(dateFormat))(masterReport.date)), 1)
                                ])
                              ]);
                            }), 128)),
                            (openBlock(true), createBlock(Fragment, null, renderList(_ctx.deal.packerReports, (masterReport) => {
                              return openBlock(), createBlock("ul", {
                                key: masterReport.id,
                                class: "text-gray-600 flex flex-col"
                              }, [
                                createVNode("li", null, [
                                  createVNode(_component_NuxtLink, {
                                    class: "underline",
                                    to: masterReport.name,
                                    target: "_blank"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" \u0423\u043F\u0430\u043A\u043E\u0432\u043A\u0430 ")
                                    ]),
                                    _: 2
                                  }, 1032, ["to"])
                                ]),
                                createVNode("li", { class: "flex flex-col justify-between grow mr-1 mb-1" }, [
                                  createVNode("span", { class: "text-muted-foreground" }, " (" + toDisplayString(masterReport.items) + "-\u0448\u0442.) \u0423\u043F\u0430\u043A\u043E\u0432\u0430\u043D\u0430 " + toDisplayString(("dateFormat" in _ctx ? _ctx.dateFormat : unref(dateFormat))(masterReport.date)), 1)
                                ])
                              ]);
                            }), 128))
                          ]),
                          createVNode(_component_UiSeparator, { class: "my-1" }),
                          createVNode("div", { class: "gap-1" }, [
                            createVNode("div", { class: "flex items-center justify-between" }, [
                              createVNode("div", { class: "font-semibold pb-2" }, "\u041E\u0442\u0437\u044B\u0432"),
                              createVNode(_component_UiButton, { class: "h-5 w-5 px-0 py-2" }, {
                                default: withCtx(() => [
                                  createVNode(_component_MyReviewsCreateModal, {
                                    "deal-id": _ctx.deal.id,
                                    onIsReviewCreated: dealUpdated
                                  }, null, 8, ["deal-id"])
                                ]),
                                _: 1
                              })
                            ]),
                            (openBlock(true), createBlock(Fragment, null, renderList(_ctx.deal.reviews, (review) => {
                              var _a2, _b;
                              return openBlock(), createBlock("ul", {
                                key: review.id,
                                class: "text-gray-600 flex flex-col"
                              }, [
                                createVNode("div", { class: "flex" }, [
                                  createVNode("li", { class: "flex flex-col justify-between grow mr-1 mb-1" }, [
                                    createVNode("span", { class: "text-muted-foreground" }, toDisplayString(("dateFormat" in _ctx ? _ctx.dateFormat : unref(dateFormat))(review.date)), 1)
                                  ]),
                                  createVNode(_component_NuxtLink, {
                                    class: "underline",
                                    to: (_b = (_a2 = review.file[0]) == null ? void 0 : _a2.preview) != null ? _b : "",
                                    target: "_blank"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" \u0421\u043A\u0440\u0438\u043D\u0448\u043E\u0442 ")
                                    ]),
                                    _: 2
                                  }, 1032, ["to"]),
                                  createVNode(_component_UiButton, {
                                    class: "h-5 w-5 px-0 py-2 ml-2",
                                    onClick: () => removeReview(review)
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_Icon, {
                                        name: "lucide:minus",
                                        color: "white",
                                        size: "15px"
                                      })
                                    ]),
                                    _: 2
                                  }, 1032, ["onClick"])
                                ]),
                                createVNode("div", { class: "w-full flex flex-col items-center" }, [
                                  createVNode(_component_UiSeparator, { class: "my-1" })
                                ])
                              ]);
                            }), 128))
                          ])
                        ];
                      }),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode(_component_UiCardFooter)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/my/deals/DealCard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _, useMyDeals as a, useDealsDatas as u };
//# sourceMappingURL=DealCard-BcrLEhxL.mjs.map
