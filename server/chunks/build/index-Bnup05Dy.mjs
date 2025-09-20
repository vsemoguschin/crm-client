import { _ as _sfc_main$2$1, a as _sfc_main$1$1, b as _sfc_main$5 } from './index-C246kKmB.mjs';
import { _ as _sfc_main$a } from './ComboboxModels-CajELqKg.mjs';
import { _ as _sfc_main$b } from './Separator-DO9XrCC7.mjs';
import { _ as _sfc_main$8$1, u as useAttachments, e as _sfc_main$g } from './UserListItem-oJMTly4k.mjs';
import { _ as _sfc_main$8 } from './index-DjUwrDZ-.mjs';
import { defineComponent, ref, computed, watch, unref, isRef, withCtx, createVNode, watchEffect, toValue, mergeProps, createTextVNode, createBlock, openBlock, Fragment, renderList, toDisplayString, mergeModels, useModel, nextTick, createCommentVNode, withModifiers, withKeys, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import { b as useNuxtApp, a as useRouter, i as useRoute, u as useHead, _ as __nuxt_component_9, c as useToast } from './server.mjs';
import { _ as _sfc_main$c } from './Switch-CYOXClXd.mjs';
import { _ as _sfc_main$4$1, b as _sfc_main$d, c as _sfc_main$2$2, d as _sfc_main$1$3 } from './DialogContent-D_qM7mie.mjs';
import { _ as _sfc_main$e } from './DialogDescription-CL0TXbWH.mjs';
import { _ as _sfc_main$f } from './Input-RlyYgX4o.mjs';
import { useDebounceFn, useDocumentVisibility, useOnline, useIntervalFn } from '@vueuse/core';
import { _ as _sfc_main$9, u as useTaskApi } from './TaskModal-CfK12Ctd.mjs';
import { Search } from 'lucide-vue-next';
import { _ as _sfc_main$1$2, a as _sfc_main$6 } from './SheetTitle-NLO44_gQ.mjs';
import { _ as _sfc_main$7 } from './SheetDescription-zmsVsKMw.mjs';
import 'radix-vue';
import 'class-variance-authority';
import './utils-DuwrO1cI.mjs';
import 'clsx';
import 'tailwind-merge';
import './PopoverContent-CfHqw7rH.mjs';
import './CommandList-CK70UNGB.mjs';
import './CommandInput-juM6Evaj.mjs';
import 'reka-ui';
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
import './DialogFooter-DIBiHjDs.mjs';
import './TabsList-BnKIeM8c.mjs';
import './TabsContent-CNnpw0A9.mjs';
import './Label-CKHHRe8Y.mjs';
import './Textarea-hE0V8itU.mjs';
import './SelectScrollDownButton-D-BrOlTE.mjs';
import './SelectGroup-Bqr9JTPe.mjs';
import './_plugin-vue_export-helper-1tPrXgE0.mjs';
import './auth-CDeEREL9.mjs';

const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "UsersSheet",
  __ssrInlineRender: true,
  props: {
    boardId: {}
  },
  setup(__props) {
    const { $api } = useNuxtApp();
    const props = __props;
    const members = ref([]);
    const allUsers = ref([]);
    const isLoadingMembers = ref(false);
    const isLoadingUsers = ref(false);
    const errorMsg = ref(null);
    const isMutating = ref(false);
    const availableUsers = computed(() => {
      const memberIds = new Set(members.value.map((m) => m.id));
      return allUsers.value.filter((u) => !memberIds.has(u.id));
    });
    async function fetchMembers() {
      var _a, _b, _c, _d;
      try {
        isLoadingMembers.value = true;
        errorMsg.value = null;
        let res = await ((_a = $api.$get) == null ? void 0 : _a.call($api, `boards/${props.boardId}/members`));
        if (!(res == null ? void 0 : res.data) && !Array.isArray(res)) {
          res = await ((_b = $api.$get) == null ? void 0 : _b.call($api, `boards/${props.boardId}/members`));
        }
        const data = Array.isArray(res) ? res : res == null ? void 0 : res.data;
        members.value = data != null ? data : [];
      } catch (e) {
        errorMsg.value = ((_d = (_c = e == null ? void 0 : e.response) == null ? void 0 : _c.data) == null ? void 0 : _d.message) || (e == null ? void 0 : e.message) || "\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u0443\u0447\u0430\u0441\u0442\u043D\u0438\u043A\u043E\u0432";
        members.value = [];
      } finally {
        isLoadingMembers.value = false;
      }
    }
    async function addUserToBoard(userId) {
      var _a, _b, _c;
      try {
        isMutating.value = true;
        errorMsg.value = null;
        await ((_a = $api.$post) == null ? void 0 : _a.call($api, `boards/users/${userId}`, {
          boardId: props.boardId
        }));
        await fetchMembers();
      } catch (e) {
        errorMsg.value = ((_c = (_b = e == null ? void 0 : e.response) == null ? void 0 : _b.data) == null ? void 0 : _c.message) || (e == null ? void 0 : e.message) || "\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0434\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F";
      } finally {
        isMutating.value = false;
      }
    }
    async function removeUserFromBoard(userId) {
      var _a, _b, _c;
      try {
        isMutating.value = true;
        errorMsg.value = null;
        console.log("delete");
        await ((_a = $api.$del) == null ? void 0 : _a.call($api, `boards/users/${userId}`, {
          data: { boardId: props.boardId }
        }));
        members.value = members.value.filter((m) => m.id !== userId);
      } catch (e) {
        errorMsg.value = ((_c = (_b = e == null ? void 0 : e.response) == null ? void 0 : _b.data) == null ? void 0 : _c.message) || (e == null ? void 0 : e.message) || "\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0443\u0434\u0430\u043B\u0438\u0442\u044C \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F";
        await fetchMembers();
      } finally {
        isMutating.value = false;
      }
    }
    function handleSelectUser(userId) {
      addUserToBoard(userId);
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_MyComboboxModels = _sfc_main$a;
      const _component_UiSeparator = _sfc_main$b;
      const _component_UiScrollArea = _sfc_main$8$1;
      const _component_UiButton = _sfc_main$8;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "pt-4 space-y-4" }, _attrs))}><div class="flex items-center justify-between px-4"><h3 class="text-base font-semibold text-neutral-400">\u0423\u0447\u0430\u0441\u0442\u043D\u0438\u043A\u0438 \u0434\u043E\u0441\u043A\u0438</h3>`);
      if (isLoadingMembers.value || isMutating.value) {
        _push(`<span class="text-xs text-neutral-500">\u041E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u0435\u2026</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      if (errorMsg.value) {
        _push(`<div class="text-sm text-red-500">${ssrInterpolate(errorMsg.value)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="space-y-2 px-4">`);
      _push(ssrRenderComponent(_component_MyComboboxModels, {
        items: availableUsers.value.map((u) => ({ value: u.id, label: u.fullName })),
        class: "w-full",
        label: "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0443\u0447\u0430\u0441\u0442\u043D\u0438\u043A\u0430",
        "button-class": "bg-neutral-700 border-neutral-400/50 text-neutral-300 hover:bg-neutral-600 hover:text-neutral-300",
        "list-class": "bg-neutral-400 text-neutral-600",
        disabled: isLoadingUsers.value || isMutating.value,
        onSelectedItem: (value) => handleSelectUser(value)
      }, null, _parent));
      if (isLoadingUsers.value) {
        _push(`<div class="text-xs text-neutral-500"> \u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430 \u0441\u043F\u0438\u0441\u043A\u0430 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0435\u0439\u2026 </div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      _push(ssrRenderComponent(_component_UiSeparator, { class: "bg-neutral-600" }, null, _parent));
      if (members.value.length) {
        _push(ssrRenderComponent(_component_UiScrollArea, { class: "h-[calc(100vh-170px)] px-2" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="space-y-2"${_scopeId}><!--[-->`);
              ssrRenderList(members.value, (m) => {
                _push2(`<div class="flex items-center justify-between rounded-sm border border-neutral-600 px-3 py-2"${_scopeId}><div class="min-w-0"${_scopeId}><div class="font-medium text-neutral-300 truncate"${_scopeId}>${ssrInterpolate(m.fullName)}</div><div class="text-xs text-neutral-500 truncate"${_scopeId}>${ssrInterpolate(m.role)}</div></div>`);
                _push2(ssrRenderComponent(_component_UiButton, {
                  variant: "destructive",
                  size: "sm",
                  disabled: isMutating.value,
                  title: "\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0441 \u0434\u043E\u0441\u043A\u0438",
                  onClick: ($event) => removeUserFromBoard(m.id)
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(` \u0423\u0434\u0430\u043B\u0438\u0442\u044C `);
                    } else {
                      return [
                        createTextVNode(" \u0423\u0434\u0430\u043B\u0438\u0442\u044C ")
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
                _push2(`</div>`);
              });
              _push2(`<!--]--></div>`);
            } else {
              return [
                createVNode("div", { class: "space-y-2" }, [
                  (openBlock(true), createBlock(Fragment, null, renderList(members.value, (m) => {
                    return openBlock(), createBlock("div", {
                      key: m.id,
                      class: "flex items-center justify-between rounded-sm border border-neutral-600 px-3 py-2"
                    }, [
                      createVNode("div", { class: "min-w-0" }, [
                        createVNode("div", { class: "font-medium text-neutral-300 truncate" }, toDisplayString(m.fullName), 1),
                        createVNode("div", { class: "text-xs text-neutral-500 truncate" }, toDisplayString(m.role), 1)
                      ]),
                      createVNode(_component_UiButton, {
                        variant: "destructive",
                        size: "sm",
                        disabled: isMutating.value,
                        title: "\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0441 \u0434\u043E\u0441\u043A\u0438",
                        onClick: ($event) => removeUserFromBoard(m.id)
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" \u0423\u0434\u0430\u043B\u0438\u0442\u044C ")
                        ]),
                        _: 2
                      }, 1032, ["disabled", "onClick"])
                    ]);
                  }), 128))
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<div class="text-sm text-neutral-500">\u0423\u0447\u0430\u0441\u0442\u043D\u0438\u043A\u043E\u0432 \u043F\u043E\u043A\u0430 \u043D\u0435\u0442</div>`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/my/kanban/UsersSheet.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _cache = /* @__PURE__ */ new Map();
const _inflight = /* @__PURE__ */ new Map();
function useBoardColumns(boardId, opts = {}) {
  const { $useApi } = useNuxtApp();
  const columns = ref([]);
  const isLoading = ref(false);
  const error = ref(null);
  const isCreating = ref(false);
  const createError = ref(null);
  const fetch = async (force = false) => {
    var _a, _b;
    const id = Number(toValue(boardId));
    if (!id || Number.isNaN(id)) {
      columns.value = [];
      return [];
    }
    if (!force && opts.cache !== false && _cache.has(id)) {
      columns.value = _cache.get(id).slice();
      return columns.value;
    }
    if (_inflight.has(id)) {
      const list = await _inflight.get(id);
      columns.value = list.slice();
      return list;
    }
    isLoading.value = true;
    error.value = null;
    const p = $useApi.get(`/boards/${id}/columns`).then((r) => r.data);
    _inflight.set(id, p);
    try {
      const list = await p;
      columns.value = Array.isArray(list) ? list : [];
      if (opts.cache !== false) _cache.set(id, columns.value);
      return columns.value;
    } catch (e) {
      error.value = ((_b = (_a = e == null ? void 0 : e.response) == null ? void 0 : _a.data) == null ? void 0 : _b.message) || (e == null ? void 0 : e.message) || "\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u043A\u043E\u043B\u043E\u043D\u043A\u0438";
      columns.value = [];
      throw e;
    } finally {
      isLoading.value = false;
      _inflight.delete(id);
    }
  };
  const refresh = () => fetch(true);
  const createColumn = async (payload) => {
    var _a, _b;
    const id = Number(toValue(boardId));
    if (!id || Number.isNaN(id)) {
      throw new Error("boardId \u043D\u0435 \u0437\u0430\u0434\u0430\u043D");
    }
    isCreating.value = true;
    createError.value = null;
    try {
      const { data } = await $useApi.post(
        `/boards/${id}/columns`,
        payload
      );
      columns.value = [...columns.value, data];
      if (opts.cache !== false) _cache.set(id, columns.value.slice());
      return data;
    } catch (e) {
      createError.value = ((_b = (_a = e == null ? void 0 : e.response) == null ? void 0 : _a.data) == null ? void 0 : _b.message) || (e == null ? void 0 : e.message) || "\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0441\u043E\u0437\u0434\u0430\u0442\u044C \u043A\u043E\u043B\u043E\u043D\u043A\u0443";
      throw e;
    } finally {
      isCreating.value = false;
    }
  };
  if (opts.immediate !== false) {
    watchEffect(() => {
      const id = toValue(boardId);
      if (id) fetch();
      else columns.value = [];
    });
  }
  return {
    columns,
    isLoading,
    error,
    fetch,
    refresh,
    // создание
    createColumn,
    isCreating,
    createError
  };
}
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "List",
  __ssrInlineRender: true,
  props: /* @__PURE__ */ mergeModels({
    boardId: {},
    persistKeyPrefix: { default: "easycrm:board" }
  }, {
    "modelValue": { default: [] },
    "modelModifiers": {}
  }),
  emits: ["update:modelValue"],
  setup(__props) {
    const props = __props;
    const hiddenIds = useModel(__props, "modelValue");
    const { columns, isLoading, error } = useBoardColumns(() => props.boardId);
    computed(
      () => `${props.persistKeyPrefix}:${props.boardId}:hiddenColumns`
    );
    watch(
      hiddenIds,
      (ids) => {
      },
      { deep: true }
    );
    const sortedColumns = computed(
      () => [...columns.value].sort((a, b) => {
        var _a, _b;
        return ((_a = a.position) != null ? _a : 0) - ((_b = b.position) != null ? _b : 0);
      })
    );
    const isHidden = (id) => hiddenIds.value.includes(id);
    function setVisibility(id, visible) {
      const set = new Set(hiddenIds.value);
      if (visible) {
        set.delete(id);
      } else {
        set.add(id);
      }
      hiddenIds.value = Array.from(set);
    }
    function showAll() {
      hiddenIds.value = [];
    }
    function hideAll() {
      hiddenIds.value = sortedColumns.value.map((c) => c.id);
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiButton = _sfc_main$8;
      const _component_UiScrollArea = _sfc_main$8$1;
      const _component_UiSwitch = _sfc_main$c;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col gap-2" }, _attrs))}><div class="flex items-center justify-between"><div class="flex gap-2">`);
      _push(ssrRenderComponent(_component_UiButton, {
        size: "sm",
        variant: "secondary",
        class: "bg-neutral-400",
        onClick: showAll
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u0432\u0441\u0435`);
          } else {
            return [
              createTextVNode("\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u0432\u0441\u0435")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UiButton, {
        size: "sm",
        variant: "secondary",
        class: "bg-neutral-400",
        onClick: hideAll
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`\u0421\u043A\u0440\u044B\u0442\u044C \u0432\u0441\u0435`);
          } else {
            return [
              createTextVNode("\u0421\u043A\u0440\u044B\u0442\u044C \u0432\u0441\u0435")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
      if (unref(isLoading)) {
        _push(`<div class="text-sm text-muted-foreground">\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430\u2026</div>`);
      } else if (unref(error)) {
        _push(`<div class="text-sm text-red-500">${ssrInterpolate(unref(error))}</div>`);
      } else {
        _push(ssrRenderComponent(_component_UiScrollArea, { class: "h-[calc(100vh-100px)]" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<ul class="divide-y divide-neutral-600 rounded-sm border border-neutral-600 text-neutral-400"${_scopeId}><!--[-->`);
              ssrRenderList(unref(sortedColumns), (c) => {
                _push2(`<li class="flex items-center justify-between px-3 py-1"${_scopeId}><div class="truncate"${_scopeId}>${ssrInterpolate(c.title)}</div>`);
                _push2(ssrRenderComponent(_component_UiSwitch, {
                  checked: !isHidden(c.id),
                  class: "data-[state=checked]:bg-lime-900 data-[state=unchecked]:bg-neutral-500",
                  "thumb-class": "bg-neutral-400 data-[state=checked]:bg-neutral-300",
                  "onUpdate:checked": (val) => setVisibility(c.id, val)
                }, null, _parent2, _scopeId));
                _push2(`</li>`);
              });
              _push2(`<!--]--></ul>`);
            } else {
              return [
                createVNode("ul", { class: "divide-y divide-neutral-600 rounded-sm border border-neutral-600 text-neutral-400" }, [
                  (openBlock(true), createBlock(Fragment, null, renderList(unref(sortedColumns), (c) => {
                    return openBlock(), createBlock("li", {
                      key: c.id,
                      class: "flex items-center justify-between px-3 py-1"
                    }, [
                      createVNode("div", { class: "truncate" }, toDisplayString(c.title), 1),
                      createVNode(_component_UiSwitch, {
                        checked: !isHidden(c.id),
                        class: "data-[state=checked]:bg-lime-900 data-[state=unchecked]:bg-neutral-500",
                        "thumb-class": "bg-neutral-400 data-[state=checked]:bg-neutral-300",
                        "onUpdate:checked": (val) => setVisibility(c.id, val)
                      }, null, 8, ["checked", "onUpdate:checked"])
                    ]);
                  }), 128))
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
      }
      _push(`<p class="text-xs text-muted-foreground to-neutral-400"> \u041E\u0442\u043A\u043B\u044E\u0447\u0451\u043D\u043D\u044B\u0435 \u043A\u043E\u043B\u043E\u043D\u043A\u0438 \u0441\u043A\u0440\u044B\u0432\u0430\u044E\u0442\u0441\u044F \u0442\u043E\u043B\u044C\u043A\u043E \u0443 \u0432\u0430\u0441 (\u0445\u0440\u0430\u043D\u044F\u0442\u0441\u044F \u0432 \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0435). </p></div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/my/kanban/column/List.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "SearchModal",
  __ssrInlineRender: true,
  props: {
    open: { type: Boolean }
  },
  emits: ["update:open", "open-task"],
  setup(__props, { emit: __emit }) {
    const { $useApi } = useNuxtApp();
    const { getPreviewSrc, onImgError } = useAttachments();
    const props = __props;
    const emit = __emit;
    const isOpen = computed({
      get: () => props.open,
      set: (v) => emit("update:open", v)
    });
    const q = ref("");
    const loading = ref(false);
    const error = ref(null);
    const results = ref([]);
    const search = async () => {
      var _a;
      const query = q.value.trim();
      if (query.length < 2) {
        results.value = [];
        return;
      }
      loading.value = true;
      error.value = null;
      try {
        const { data } = await $useApi.get("tasks/search", {
          params: { q: query, take: 30 }
        });
        results.value = data;
      } catch (e) {
        error.value = (_a = e == null ? void 0 : e.message) != null ? _a : "\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u043E\u0438\u0441\u043A\u0430";
      } finally {
        loading.value = false;
      }
    };
    const debouncedSearch = useDebounceFn(search, 300);
    watch(q, () => debouncedSearch());
    watch(isOpen, (v) => {
      if (v) {
        q.value = "";
        results.value = [];
        error.value = null;
        nextTick(() => {
          const el = (void 0).getElementById(
            "task-search-input"
          );
          el == null ? void 0 : el.focus();
        });
      }
    });
    function pick(task) {
      const preview = {
        id: task.id,
        title: task.title,
        attachmentsLength: 0,
        preview: null,
        tags: [],
        path: "",
        members: task.members,
        deadline: "",
        columnId: task.column.id,
        boardId: task.boardId
      };
      emit("open-task", { task: preview, columnId: task.column.id });
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiDialog = _sfc_main$4$1;
      const _component_UiDialogContent = _sfc_main$d;
      const _component_UiDialogHeader = _sfc_main$2$2;
      const _component_UiDialogTitle = _sfc_main$1$3;
      const _component_UiDialogDescription = _sfc_main$e;
      const _component_UiInput = _sfc_main$f;
      const _component_UiScrollArea = _sfc_main$8$1;
      const _component_ClientOnly = __nuxt_component_9;
      const _component_MyUserListItem = _sfc_main$g;
      _push(ssrRenderComponent(_component_UiDialog, mergeProps({
        open: unref(isOpen),
        "onUpdate:open": ($event) => isRef(isOpen) ? isOpen.value = $event : null
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UiDialogContent, { class: "sm:max-w-2xl bg-neutral-800 border-neutral-600" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UiDialogHeader, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UiDialogTitle, { class: "text-neutral-300" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`\u041F\u043E\u0438\u0441\u043A \u0437\u0430\u0434\u0430\u0447`);
                            } else {
                              return [
                                createTextVNode("\u041F\u043E\u0438\u0441\u043A \u0437\u0430\u0434\u0430\u0447")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_UiDialogDescription, { class: "text-neutral-500" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`\u041F\u043E\u0438\u0441\u043A \u043F\u043E &quot;\u0441\u0441\u044B\u043B\u043A\u0435 \u043D\u0430 \u0447\u0430\u0442&quot; \u0438 &quot;\u043D\u0430\u0437\u0432\u0430\u043D\u0438\u044E&quot; \u0437\u0430\u0434\u0430\u0447`);
                            } else {
                              return [
                                createTextVNode('\u041F\u043E\u0438\u0441\u043A \u043F\u043E "\u0441\u0441\u044B\u043B\u043A\u0435 \u043D\u0430 \u0447\u0430\u0442" \u0438 "\u043D\u0430\u0437\u0432\u0430\u043D\u0438\u044E" \u0437\u0430\u0434\u0430\u0447')
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_UiDialogTitle, { class: "text-neutral-300" }, {
                            default: withCtx(() => [
                              createTextVNode("\u041F\u043E\u0438\u0441\u043A \u0437\u0430\u0434\u0430\u0447")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UiDialogDescription, { class: "text-neutral-500" }, {
                            default: withCtx(() => [
                              createTextVNode('\u041F\u043E\u0438\u0441\u043A \u043F\u043E "\u0441\u0441\u044B\u043B\u043A\u0435 \u043D\u0430 \u0447\u0430\u0442" \u0438 "\u043D\u0430\u0437\u0432\u0430\u043D\u0438\u044E" \u0437\u0430\u0434\u0430\u0447')
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<div class="mt-2"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UiInput, {
                    id: "task-search-input",
                    modelValue: unref(q),
                    "onUpdate:modelValue": ($event) => isRef(q) ? q.value = $event : null,
                    class: [
                      "bg-neutral-700 text-neutral-300 placeholder:text-neutral-500 border-neutral-500/50"
                    ],
                    autocomplete: "off",
                    placeholder: "\u0412\u0441\u0442\u0430\u0432\u044C\u0442\u0435/\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0441\u044B\u043B\u043A\u0443 \u0447\u0430\u0442\u0430 \u0438\u043B\u0438 \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u0435\u2026",
                    onKeydown: search
                  }, null, _parent3, _scopeId2));
                  if (unref(q).length < 2) {
                    _push3(`<div class="mt-2 text-xs text-neutral-500"${_scopeId2}> \u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0445\u043E\u0442\u044F \u0431\u044B 2 \u0441\u0438\u043C\u0432\u043E\u043B\u0430 </div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`</div><div class="mt-4"${_scopeId2}>`);
                  if (unref(loading)) {
                    _push3(`<div class="text-sm text-neutral-600"${_scopeId2}>\u0418\u0449\u0435\u043C\u2026</div>`);
                  } else if (unref(error)) {
                    _push3(`<div class="text-sm text-red-500"${_scopeId2}>${ssrInterpolate(unref(error))}</div>`);
                  } else if (!unref(results).length && unref(q).length >= 2) {
                    _push3(`<div class="text-sm text-neutral-500"${_scopeId2}> \u041D\u0438\u0447\u0435\u0433\u043E \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u043E </div>`);
                  } else {
                    _push3(ssrRenderComponent(_component_UiScrollArea, { class: "max-h-[50vh] h-full pr-3" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<!--[-->`);
                          ssrRenderList(unref(results), (task) => {
                            _push4(`<div class="rounded-sm border flex gap-3 border-neutral-600 bg-neutral-700/50 mb-2 p-3 hover:bg-neutral-700 cursor-pointer"${_scopeId3}><div class="w-1/3"${_scopeId3}>`);
                            _push4(ssrRenderComponent(_component_ClientOnly, null, {}, _parent4, _scopeId3));
                            _push4(`</div><div${_scopeId3}><div class="font-medium text-neutral-300"${_scopeId3}>${ssrInterpolate(task.title)}</div><div class="text-xs text-neutral-500 mt-0.5"${_scopeId3}>${ssrInterpolate(task.board.title)} / ${ssrInterpolate(task.column.title)}</div><div class="flex flex-wrap items-center gap-1.5 mt-2"${_scopeId3}><!--[-->`);
                            ssrRenderList(task.members, (m) => {
                              var _a;
                              _push4(ssrRenderComponent(_component_MyUserListItem, {
                                key: m.id,
                                "full-name": m.fullName,
                                hover: true,
                                "role-name": (_a = m.role) == null ? void 0 : _a.fullName,
                                size: "sm"
                              }, null, _parent4, _scopeId3));
                            });
                            _push4(`<!--]--></div></div></div>`);
                          });
                          _push4(`<!--]-->`);
                        } else {
                          return [
                            (openBlock(true), createBlock(Fragment, null, renderList(unref(results), (task) => {
                              return openBlock(), createBlock("div", {
                                key: task.id,
                                class: "rounded-sm border flex gap-3 border-neutral-600 bg-neutral-700/50 mb-2 p-3 hover:bg-neutral-700 cursor-pointer",
                                onClick: ($event) => pick(task)
                              }, [
                                createVNode("div", { class: "w-1/3" }, [
                                  createVNode(_component_ClientOnly, null, {
                                    default: withCtx(() => [
                                      task.cover ? (openBlock(), createBlock("img", {
                                        key: 0,
                                        src: unref(getPreviewSrc)(task.cover),
                                        alt: "",
                                        loading: "lazy",
                                        decoding: "async",
                                        crossorigin: "anonymous",
                                        referrerpolicy: "no-referrer",
                                        class: "h-28 w-full object-cover",
                                        onError: withModifiers(() => unref(onImgError)(task.cover), ["stop"])
                                      }, null, 40, ["src", "onError"])) : createCommentVNode("", true)
                                    ]),
                                    _: 2
                                  }, 1024)
                                ]),
                                createVNode("div", null, [
                                  createVNode("div", { class: "font-medium text-neutral-300" }, toDisplayString(task.title), 1),
                                  createVNode("div", { class: "text-xs text-neutral-500 mt-0.5" }, toDisplayString(task.board.title) + " / " + toDisplayString(task.column.title), 1),
                                  createVNode("div", { class: "flex flex-wrap items-center gap-1.5 mt-2" }, [
                                    (openBlock(true), createBlock(Fragment, null, renderList(task.members, (m) => {
                                      var _a;
                                      return openBlock(), createBlock(_component_MyUserListItem, {
                                        key: m.id,
                                        "full-name": m.fullName,
                                        hover: true,
                                        "role-name": (_a = m.role) == null ? void 0 : _a.fullName,
                                        size: "sm"
                                      }, null, 8, ["full-name", "role-name"]);
                                    }), 128))
                                  ])
                                ])
                              ], 8, ["onClick"]);
                            }), 128))
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  }
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode(_component_UiDialogHeader, null, {
                      default: withCtx(() => [
                        createVNode(_component_UiDialogTitle, { class: "text-neutral-300" }, {
                          default: withCtx(() => [
                            createTextVNode("\u041F\u043E\u0438\u0441\u043A \u0437\u0430\u0434\u0430\u0447")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UiDialogDescription, { class: "text-neutral-500" }, {
                          default: withCtx(() => [
                            createTextVNode('\u041F\u043E\u0438\u0441\u043A \u043F\u043E "\u0441\u0441\u044B\u043B\u043A\u0435 \u043D\u0430 \u0447\u0430\u0442" \u0438 "\u043D\u0430\u0437\u0432\u0430\u043D\u0438\u044E" \u0437\u0430\u0434\u0430\u0447')
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode("div", { class: "mt-2" }, [
                      createVNode(_component_UiInput, {
                        id: "task-search-input",
                        modelValue: unref(q),
                        "onUpdate:modelValue": ($event) => isRef(q) ? q.value = $event : null,
                        class: [
                          "bg-neutral-700 text-neutral-300 placeholder:text-neutral-500 border-neutral-500/50"
                        ],
                        autocomplete: "off",
                        placeholder: "\u0412\u0441\u0442\u0430\u0432\u044C\u0442\u0435/\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0441\u044B\u043B\u043A\u0443 \u0447\u0430\u0442\u0430 \u0438\u043B\u0438 \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u0435\u2026",
                        onKeydown: withKeys(withModifiers(search, ["prevent"]), ["enter"])
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "onKeydown"]),
                      unref(q).length < 2 ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: "mt-2 text-xs text-neutral-500"
                      }, " \u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0445\u043E\u0442\u044F \u0431\u044B 2 \u0441\u0438\u043C\u0432\u043E\u043B\u0430 ")) : createCommentVNode("", true)
                    ]),
                    createVNode("div", { class: "mt-4" }, [
                      unref(loading) ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: "text-sm text-neutral-600"
                      }, "\u0418\u0449\u0435\u043C\u2026")) : unref(error) ? (openBlock(), createBlock("div", {
                        key: 1,
                        class: "text-sm text-red-500"
                      }, toDisplayString(unref(error)), 1)) : !unref(results).length && unref(q).length >= 2 ? (openBlock(), createBlock("div", {
                        key: 2,
                        class: "text-sm text-neutral-500"
                      }, " \u041D\u0438\u0447\u0435\u0433\u043E \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u043E ")) : (openBlock(), createBlock(_component_UiScrollArea, {
                        key: 3,
                        class: "max-h-[50vh] h-full pr-3"
                      }, {
                        default: withCtx(() => [
                          (openBlock(true), createBlock(Fragment, null, renderList(unref(results), (task) => {
                            return openBlock(), createBlock("div", {
                              key: task.id,
                              class: "rounded-sm border flex gap-3 border-neutral-600 bg-neutral-700/50 mb-2 p-3 hover:bg-neutral-700 cursor-pointer",
                              onClick: ($event) => pick(task)
                            }, [
                              createVNode("div", { class: "w-1/3" }, [
                                createVNode(_component_ClientOnly, null, {
                                  default: withCtx(() => [
                                    task.cover ? (openBlock(), createBlock("img", {
                                      key: 0,
                                      src: unref(getPreviewSrc)(task.cover),
                                      alt: "",
                                      loading: "lazy",
                                      decoding: "async",
                                      crossorigin: "anonymous",
                                      referrerpolicy: "no-referrer",
                                      class: "h-28 w-full object-cover",
                                      onError: withModifiers(() => unref(onImgError)(task.cover), ["stop"])
                                    }, null, 40, ["src", "onError"])) : createCommentVNode("", true)
                                  ]),
                                  _: 2
                                }, 1024)
                              ]),
                              createVNode("div", null, [
                                createVNode("div", { class: "font-medium text-neutral-300" }, toDisplayString(task.title), 1),
                                createVNode("div", { class: "text-xs text-neutral-500 mt-0.5" }, toDisplayString(task.board.title) + " / " + toDisplayString(task.column.title), 1),
                                createVNode("div", { class: "flex flex-wrap items-center gap-1.5 mt-2" }, [
                                  (openBlock(true), createBlock(Fragment, null, renderList(task.members, (m) => {
                                    var _a;
                                    return openBlock(), createBlock(_component_MyUserListItem, {
                                      key: m.id,
                                      "full-name": m.fullName,
                                      hover: true,
                                      "role-name": (_a = m.role) == null ? void 0 : _a.fullName,
                                      size: "sm"
                                    }, null, 8, ["full-name", "role-name"]);
                                  }), 128))
                                ])
                              ])
                            ], 8, ["onClick"]);
                          }), 128))
                        ]),
                        _: 1
                      }))
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UiDialogContent, { class: "sm:max-w-2xl bg-neutral-800 border-neutral-600" }, {
                default: withCtx(() => [
                  createVNode(_component_UiDialogHeader, null, {
                    default: withCtx(() => [
                      createVNode(_component_UiDialogTitle, { class: "text-neutral-300" }, {
                        default: withCtx(() => [
                          createTextVNode("\u041F\u043E\u0438\u0441\u043A \u0437\u0430\u0434\u0430\u0447")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_UiDialogDescription, { class: "text-neutral-500" }, {
                        default: withCtx(() => [
                          createTextVNode('\u041F\u043E\u0438\u0441\u043A \u043F\u043E "\u0441\u0441\u044B\u043B\u043A\u0435 \u043D\u0430 \u0447\u0430\u0442" \u0438 "\u043D\u0430\u0437\u0432\u0430\u043D\u0438\u044E" \u0437\u0430\u0434\u0430\u0447')
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode("div", { class: "mt-2" }, [
                    createVNode(_component_UiInput, {
                      id: "task-search-input",
                      modelValue: unref(q),
                      "onUpdate:modelValue": ($event) => isRef(q) ? q.value = $event : null,
                      class: [
                        "bg-neutral-700 text-neutral-300 placeholder:text-neutral-500 border-neutral-500/50"
                      ],
                      autocomplete: "off",
                      placeholder: "\u0412\u0441\u0442\u0430\u0432\u044C\u0442\u0435/\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0441\u044B\u043B\u043A\u0443 \u0447\u0430\u0442\u0430 \u0438\u043B\u0438 \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u0435\u2026",
                      onKeydown: withKeys(withModifiers(search, ["prevent"]), ["enter"])
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "onKeydown"]),
                    unref(q).length < 2 ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "mt-2 text-xs text-neutral-500"
                    }, " \u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0445\u043E\u0442\u044F \u0431\u044B 2 \u0441\u0438\u043C\u0432\u043E\u043B\u0430 ")) : createCommentVNode("", true)
                  ]),
                  createVNode("div", { class: "mt-4" }, [
                    unref(loading) ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "text-sm text-neutral-600"
                    }, "\u0418\u0449\u0435\u043C\u2026")) : unref(error) ? (openBlock(), createBlock("div", {
                      key: 1,
                      class: "text-sm text-red-500"
                    }, toDisplayString(unref(error)), 1)) : !unref(results).length && unref(q).length >= 2 ? (openBlock(), createBlock("div", {
                      key: 2,
                      class: "text-sm text-neutral-500"
                    }, " \u041D\u0438\u0447\u0435\u0433\u043E \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u043E ")) : (openBlock(), createBlock(_component_UiScrollArea, {
                      key: 3,
                      class: "max-h-[50vh] h-full pr-3"
                    }, {
                      default: withCtx(() => [
                        (openBlock(true), createBlock(Fragment, null, renderList(unref(results), (task) => {
                          return openBlock(), createBlock("div", {
                            key: task.id,
                            class: "rounded-sm border flex gap-3 border-neutral-600 bg-neutral-700/50 mb-2 p-3 hover:bg-neutral-700 cursor-pointer",
                            onClick: ($event) => pick(task)
                          }, [
                            createVNode("div", { class: "w-1/3" }, [
                              createVNode(_component_ClientOnly, null, {
                                default: withCtx(() => [
                                  task.cover ? (openBlock(), createBlock("img", {
                                    key: 0,
                                    src: unref(getPreviewSrc)(task.cover),
                                    alt: "",
                                    loading: "lazy",
                                    decoding: "async",
                                    crossorigin: "anonymous",
                                    referrerpolicy: "no-referrer",
                                    class: "h-28 w-full object-cover",
                                    onError: withModifiers(() => unref(onImgError)(task.cover), ["stop"])
                                  }, null, 40, ["src", "onError"])) : createCommentVNode("", true)
                                ]),
                                _: 2
                              }, 1024)
                            ]),
                            createVNode("div", null, [
                              createVNode("div", { class: "font-medium text-neutral-300" }, toDisplayString(task.title), 1),
                              createVNode("div", { class: "text-xs text-neutral-500 mt-0.5" }, toDisplayString(task.board.title) + " / " + toDisplayString(task.column.title), 1),
                              createVNode("div", { class: "flex flex-wrap items-center gap-1.5 mt-2" }, [
                                (openBlock(true), createBlock(Fragment, null, renderList(task.members, (m) => {
                                  var _a;
                                  return openBlock(), createBlock(_component_MyUserListItem, {
                                    key: m.id,
                                    "full-name": m.fullName,
                                    hover: true,
                                    "role-name": (_a = m.role) == null ? void 0 : _a.fullName,
                                    size: "sm"
                                  }, null, 8, ["full-name", "role-name"]);
                                }), 128))
                              ])
                            ])
                          ], 8, ["onClick"]);
                        }), 128))
                      ]),
                      _: 1
                    }))
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
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/my/kanban/task/SearchModal.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "ArchiveModal",
  __ssrInlineRender: true,
  props: {
    open: { type: Boolean },
    boardId: {}
  },
  emits: ["update:open", "open-task", "restored"],
  setup(__props, { emit: __emit }) {
    const { $useApi } = useNuxtApp();
    const { toast } = useToast();
    const taskApi = useTaskApi();
    const { getPreviewSrc, onImgError } = useAttachments();
    const props = __props;
    const emit = __emit;
    const isOpen = computed({
      get: () => props.open,
      set: (v) => emit("update:open", v)
    });
    const items = ref([]);
    const loading = ref(false);
    const error = ref(null);
    const nextCursor = ref(null);
    const isLoadingMore = ref(false);
    const hasMore = computed(() => nextCursor.value !== null);
    const restoringIds = ref(/* @__PURE__ */ new Set());
    async function fetchPage(cursor) {
      var _a, _b;
      const params = { take: 30, boardId: props.boardId };
      try {
        const { data } = await $useApi.get("tasks/archived", { params });
        if (Array.isArray(data)) {
          if (!cursor) items.value = data;
          nextCursor.value = null;
        } else {
          const list = Array.isArray(data == null ? void 0 : data.items) ? data.items : [];
          if (!cursor) items.value = list;
          nextCursor.value = (_a = data == null ? void 0 : data.nextCursor) != null ? _a : null;
        }
      } catch (e) {
        error.value = (_b = e == null ? void 0 : e.message) != null ? _b : "\u041E\u0448\u0438\u0431\u043A\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0438 \u0430\u0440\u0445\u0438\u0432\u0430";
      }
    }
    async function initLoad() {
      loading.value = true;
      error.value = null;
      items.value = [];
      nextCursor.value = null;
      try {
        await fetchPage(null);
      } finally {
        loading.value = false;
      }
    }
    watch(isOpen, (v) => {
      if (v) initLoad();
    });
    const loadMoreRef = ref(null);
    function pick(task) {
      const preview = {
        id: task.id,
        title: task.title,
        attachmentsLength: 0,
        preview: null,
        tags: [],
        path: "",
        members: task.members,
        deadline: "",
        columnId: task.column.id,
        boardId: task.boardId
      };
      emit("open-task", { task: preview, columnId: task.column.id });
    }
    function isRestoring(id) {
      return restoringIds.value.has(id);
    }
    async function restoreTask(task, e) {
      e == null ? void 0 : e.stopPropagation();
      const id = Number(task.id);
      if (!id || isRestoring(id)) return;
      restoringIds.value.add(id);
      try {
        await taskApi.setArchived(false, id);
        items.value = items.value.filter((t) => t.id !== id);
        toast({ title: "\u0412\u043E\u0437\u0432\u0440\u0430\u0449\u0435\u043D\u043E \u0438\u0437 \u0430\u0440\u0445\u0438\u0432\u0430" });
        emit("restored", { taskId: id });
      } catch (err) {
        console.error("restoreTask failed", err);
        toast({ variant: "destructive", title: "\u041E\u0448\u0438\u0431\u043A\u0430", description: "\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0432\u0435\u0440\u043D\u0443\u0442\u044C \u0438\u0437 \u0430\u0440\u0445\u0438\u0432\u0430" });
      } finally {
        restoringIds.value.delete(id);
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiDialog = _sfc_main$4$1;
      const _component_UiDialogContent = _sfc_main$d;
      const _component_UiDialogHeader = _sfc_main$2$2;
      const _component_UiDialogTitle = _sfc_main$1$3;
      const _component_UiDialogDescription = _sfc_main$e;
      const _component_UiScrollArea = _sfc_main$8$1;
      const _component_UiButton = _sfc_main$8;
      const _component_ClientOnly = __nuxt_component_9;
      const _component_MyUserListItem = _sfc_main$g;
      _push(ssrRenderComponent(_component_UiDialog, mergeProps({
        open: unref(isOpen),
        "onUpdate:open": ($event) => isRef(isOpen) ? isOpen.value = $event : null
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UiDialogContent, { class: "sm:max-w-2xl bg-neutral-800 border-neutral-600" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UiDialogHeader, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UiDialogTitle, { class: "text-neutral-300" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`\u0410\u0440\u0445\u0438\u0432 \u0437\u0430\u0434\u0430\u0447`);
                            } else {
                              return [
                                createTextVNode("\u0410\u0440\u0445\u0438\u0432 \u0437\u0430\u0434\u0430\u0447")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_UiDialogDescription, { class: "text-neutral-500" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`\u041A\u0430\u0440\u0442\u043E\u0447\u043A\u0438, \u043F\u0435\u0440\u0435\u043C\u0435\u0449\u0451\u043D\u043D\u044B\u0435 \u0432 \u0430\u0440\u0445\u0438\u0432`);
                            } else {
                              return [
                                createTextVNode("\u041A\u0430\u0440\u0442\u043E\u0447\u043A\u0438, \u043F\u0435\u0440\u0435\u043C\u0435\u0449\u0451\u043D\u043D\u044B\u0435 \u0432 \u0430\u0440\u0445\u0438\u0432")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_UiDialogTitle, { class: "text-neutral-300" }, {
                            default: withCtx(() => [
                              createTextVNode("\u0410\u0440\u0445\u0438\u0432 \u0437\u0430\u0434\u0430\u0447")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UiDialogDescription, { class: "text-neutral-500" }, {
                            default: withCtx(() => [
                              createTextVNode("\u041A\u0430\u0440\u0442\u043E\u0447\u043A\u0438, \u043F\u0435\u0440\u0435\u043C\u0435\u0449\u0451\u043D\u043D\u044B\u0435 \u0432 \u0430\u0440\u0445\u0438\u0432")
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<div class="mt-2"${_scopeId2}>`);
                  if (unref(loading)) {
                    _push3(`<div class="text-sm text-neutral-600"${_scopeId2}>\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430\u2026</div>`);
                  } else if (unref(error)) {
                    _push3(`<div class="text-sm text-red-500"${_scopeId2}>${ssrInterpolate(unref(error))}</div>`);
                  } else if (!unref(items).length) {
                    _push3(`<div class="text-sm text-neutral-500"${_scopeId2}> \u0410\u0440\u0445\u0438\u0432 \u043F\u0443\u0441\u0442 </div>`);
                  } else {
                    _push3(ssrRenderComponent(_component_UiScrollArea, { class: "max-h-[80vh] h-full pr-3" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<!--[-->`);
                          ssrRenderList(unref(items), (task) => {
                            _push4(`<div class="relative rounded-sm border flex gap-3 border-neutral-600 bg-neutral-700/50 mb-2 p-3 hover:bg-neutral-700 cursor-pointer"${_scopeId3}><div class="absolute top-2 right-2"${_scopeId3}>`);
                            _push4(ssrRenderComponent(_component_UiButton, {
                              size: "sm",
                              variant: "outline",
                              class: "h-7 text-xs px-2 py-1 bg-neutral-700 text-neutral-200 border-neutral-500/50 hover:bg-neutral-600",
                              disabled: isRestoring(task.id),
                              onClick: ($event) => restoreTask(task, $event)
                            }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`${ssrInterpolate(isRestoring(task.id) ? "..." : "\u0412\u0415\u0420\u041D\u0423\u0422\u042C")}`);
                                } else {
                                  return [
                                    createTextVNode(toDisplayString(isRestoring(task.id) ? "..." : "\u0412\u0415\u0420\u041D\u0423\u0422\u042C"), 1)
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                            _push4(`</div>`);
                            if (task.cover) {
                              _push4(`<div class="w-1/3"${_scopeId3}>`);
                              _push4(ssrRenderComponent(_component_ClientOnly, null, {}, _parent4, _scopeId3));
                              _push4(`</div>`);
                            } else {
                              _push4(`<!---->`);
                            }
                            _push4(`<div${_scopeId3}><div class="font-medium text-neutral-300"${_scopeId3}>${ssrInterpolate(task.title)}</div><div class="text-xs text-neutral-500 mt-0.5"${_scopeId3}>${ssrInterpolate(task.board.title)} / ${ssrInterpolate(task.column.title)}</div><div class="flex flex-wrap items-center gap-1.5 mt-2"${_scopeId3}><!--[-->`);
                            ssrRenderList(task.members, (m) => {
                              var _a;
                              _push4(ssrRenderComponent(_component_MyUserListItem, {
                                key: m.id,
                                "full-name": m.fullName,
                                hover: true,
                                "role-name": (_a = m.role) == null ? void 0 : _a.fullName,
                                size: "sm"
                              }, null, _parent4, _scopeId3));
                            });
                            _push4(`<!--]--></div></div></div>`);
                          });
                          _push4(`<!--]--><div class="h-8 flex items-center justify-center"${_scopeId3}>`);
                          if (unref(isLoadingMore)) {
                            _push4(`<span class="text-xs text-neutral-500"${_scopeId3}>\u0417\u0430\u0433\u0440\u0443\u0436\u0430\u0435\u043C\u2026</span>`);
                          } else if (!unref(hasMore)) {
                            _push4(`<span class="text-xs text-neutral-600"${_scopeId3}>\u0411\u043E\u043B\u044C\u0448\u0435 \u043D\u0435\u0442</span>`);
                          } else {
                            _push4(`<!---->`);
                          }
                          _push4(`</div>`);
                        } else {
                          return [
                            (openBlock(true), createBlock(Fragment, null, renderList(unref(items), (task) => {
                              return openBlock(), createBlock("div", {
                                key: task.id,
                                class: "relative rounded-sm border flex gap-3 border-neutral-600 bg-neutral-700/50 mb-2 p-3 hover:bg-neutral-700 cursor-pointer",
                                onClick: ($event) => pick(task)
                              }, [
                                createVNode("div", { class: "absolute top-2 right-2" }, [
                                  createVNode(_component_UiButton, {
                                    size: "sm",
                                    variant: "outline",
                                    class: "h-7 text-xs px-2 py-1 bg-neutral-700 text-neutral-200 border-neutral-500/50 hover:bg-neutral-600",
                                    disabled: isRestoring(task.id),
                                    onClick: ($event) => restoreTask(task, $event)
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(isRestoring(task.id) ? "..." : "\u0412\u0415\u0420\u041D\u0423\u0422\u042C"), 1)
                                    ]),
                                    _: 2
                                  }, 1032, ["disabled", "onClick"])
                                ]),
                                task.cover ? (openBlock(), createBlock("div", {
                                  key: 0,
                                  class: "w-1/3"
                                }, [
                                  createVNode(_component_ClientOnly, null, {
                                    default: withCtx(() => [
                                      createVNode("img", {
                                        src: unref(getPreviewSrc)(task.cover),
                                        alt: "",
                                        loading: "lazy",
                                        decoding: "async",
                                        crossorigin: "anonymous",
                                        referrerpolicy: "no-referrer",
                                        class: "h-28 w-full object-cover",
                                        onError: withModifiers(() => unref(onImgError)(task.cover), ["stop"])
                                      }, null, 40, ["src", "onError"])
                                    ]),
                                    _: 2
                                  }, 1024)
                                ])) : createCommentVNode("", true),
                                createVNode("div", null, [
                                  createVNode("div", { class: "font-medium text-neutral-300" }, toDisplayString(task.title), 1),
                                  createVNode("div", { class: "text-xs text-neutral-500 mt-0.5" }, toDisplayString(task.board.title) + " / " + toDisplayString(task.column.title), 1),
                                  createVNode("div", { class: "flex flex-wrap items-center gap-1.5 mt-2" }, [
                                    (openBlock(true), createBlock(Fragment, null, renderList(task.members, (m) => {
                                      var _a;
                                      return openBlock(), createBlock(_component_MyUserListItem, {
                                        key: m.id,
                                        "full-name": m.fullName,
                                        hover: true,
                                        "role-name": (_a = m.role) == null ? void 0 : _a.fullName,
                                        size: "sm"
                                      }, null, 8, ["full-name", "role-name"]);
                                    }), 128))
                                  ])
                                ])
                              ], 8, ["onClick"]);
                            }), 128)),
                            createVNode("div", {
                              ref_key: "loadMoreRef",
                              ref: loadMoreRef,
                              class: "h-8 flex items-center justify-center"
                            }, [
                              unref(isLoadingMore) ? (openBlock(), createBlock("span", {
                                key: 0,
                                class: "text-xs text-neutral-500"
                              }, "\u0417\u0430\u0433\u0440\u0443\u0436\u0430\u0435\u043C\u2026")) : !unref(hasMore) ? (openBlock(), createBlock("span", {
                                key: 1,
                                class: "text-xs text-neutral-600"
                              }, "\u0411\u043E\u043B\u044C\u0448\u0435 \u043D\u0435\u0442")) : createCommentVNode("", true)
                            ], 512)
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  }
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode(_component_UiDialogHeader, null, {
                      default: withCtx(() => [
                        createVNode(_component_UiDialogTitle, { class: "text-neutral-300" }, {
                          default: withCtx(() => [
                            createTextVNode("\u0410\u0440\u0445\u0438\u0432 \u0437\u0430\u0434\u0430\u0447")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UiDialogDescription, { class: "text-neutral-500" }, {
                          default: withCtx(() => [
                            createTextVNode("\u041A\u0430\u0440\u0442\u043E\u0447\u043A\u0438, \u043F\u0435\u0440\u0435\u043C\u0435\u0449\u0451\u043D\u043D\u044B\u0435 \u0432 \u0430\u0440\u0445\u0438\u0432")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode("div", { class: "mt-2" }, [
                      unref(loading) ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: "text-sm text-neutral-600"
                      }, "\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430\u2026")) : unref(error) ? (openBlock(), createBlock("div", {
                        key: 1,
                        class: "text-sm text-red-500"
                      }, toDisplayString(unref(error)), 1)) : !unref(items).length ? (openBlock(), createBlock("div", {
                        key: 2,
                        class: "text-sm text-neutral-500"
                      }, " \u0410\u0440\u0445\u0438\u0432 \u043F\u0443\u0441\u0442 ")) : (openBlock(), createBlock(_component_UiScrollArea, {
                        key: 3,
                        class: "max-h-[80vh] h-full pr-3"
                      }, {
                        default: withCtx(() => [
                          (openBlock(true), createBlock(Fragment, null, renderList(unref(items), (task) => {
                            return openBlock(), createBlock("div", {
                              key: task.id,
                              class: "relative rounded-sm border flex gap-3 border-neutral-600 bg-neutral-700/50 mb-2 p-3 hover:bg-neutral-700 cursor-pointer",
                              onClick: ($event) => pick(task)
                            }, [
                              createVNode("div", { class: "absolute top-2 right-2" }, [
                                createVNode(_component_UiButton, {
                                  size: "sm",
                                  variant: "outline",
                                  class: "h-7 text-xs px-2 py-1 bg-neutral-700 text-neutral-200 border-neutral-500/50 hover:bg-neutral-600",
                                  disabled: isRestoring(task.id),
                                  onClick: ($event) => restoreTask(task, $event)
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(isRestoring(task.id) ? "..." : "\u0412\u0415\u0420\u041D\u0423\u0422\u042C"), 1)
                                  ]),
                                  _: 2
                                }, 1032, ["disabled", "onClick"])
                              ]),
                              task.cover ? (openBlock(), createBlock("div", {
                                key: 0,
                                class: "w-1/3"
                              }, [
                                createVNode(_component_ClientOnly, null, {
                                  default: withCtx(() => [
                                    createVNode("img", {
                                      src: unref(getPreviewSrc)(task.cover),
                                      alt: "",
                                      loading: "lazy",
                                      decoding: "async",
                                      crossorigin: "anonymous",
                                      referrerpolicy: "no-referrer",
                                      class: "h-28 w-full object-cover",
                                      onError: withModifiers(() => unref(onImgError)(task.cover), ["stop"])
                                    }, null, 40, ["src", "onError"])
                                  ]),
                                  _: 2
                                }, 1024)
                              ])) : createCommentVNode("", true),
                              createVNode("div", null, [
                                createVNode("div", { class: "font-medium text-neutral-300" }, toDisplayString(task.title), 1),
                                createVNode("div", { class: "text-xs text-neutral-500 mt-0.5" }, toDisplayString(task.board.title) + " / " + toDisplayString(task.column.title), 1),
                                createVNode("div", { class: "flex flex-wrap items-center gap-1.5 mt-2" }, [
                                  (openBlock(true), createBlock(Fragment, null, renderList(task.members, (m) => {
                                    var _a;
                                    return openBlock(), createBlock(_component_MyUserListItem, {
                                      key: m.id,
                                      "full-name": m.fullName,
                                      hover: true,
                                      "role-name": (_a = m.role) == null ? void 0 : _a.fullName,
                                      size: "sm"
                                    }, null, 8, ["full-name", "role-name"]);
                                  }), 128))
                                ])
                              ])
                            ], 8, ["onClick"]);
                          }), 128)),
                          createVNode("div", {
                            ref_key: "loadMoreRef",
                            ref: loadMoreRef,
                            class: "h-8 flex items-center justify-center"
                          }, [
                            unref(isLoadingMore) ? (openBlock(), createBlock("span", {
                              key: 0,
                              class: "text-xs text-neutral-500"
                            }, "\u0417\u0430\u0433\u0440\u0443\u0436\u0430\u0435\u043C\u2026")) : !unref(hasMore) ? (openBlock(), createBlock("span", {
                              key: 1,
                              class: "text-xs text-neutral-600"
                            }, "\u0411\u043E\u043B\u044C\u0448\u0435 \u043D\u0435\u0442")) : createCommentVNode("", true)
                          ], 512)
                        ]),
                        _: 1
                      }))
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UiDialogContent, { class: "sm:max-w-2xl bg-neutral-800 border-neutral-600" }, {
                default: withCtx(() => [
                  createVNode(_component_UiDialogHeader, null, {
                    default: withCtx(() => [
                      createVNode(_component_UiDialogTitle, { class: "text-neutral-300" }, {
                        default: withCtx(() => [
                          createTextVNode("\u0410\u0440\u0445\u0438\u0432 \u0437\u0430\u0434\u0430\u0447")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_UiDialogDescription, { class: "text-neutral-500" }, {
                        default: withCtx(() => [
                          createTextVNode("\u041A\u0430\u0440\u0442\u043E\u0447\u043A\u0438, \u043F\u0435\u0440\u0435\u043C\u0435\u0449\u0451\u043D\u043D\u044B\u0435 \u0432 \u0430\u0440\u0445\u0438\u0432")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode("div", { class: "mt-2" }, [
                    unref(loading) ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "text-sm text-neutral-600"
                    }, "\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430\u2026")) : unref(error) ? (openBlock(), createBlock("div", {
                      key: 1,
                      class: "text-sm text-red-500"
                    }, toDisplayString(unref(error)), 1)) : !unref(items).length ? (openBlock(), createBlock("div", {
                      key: 2,
                      class: "text-sm text-neutral-500"
                    }, " \u0410\u0440\u0445\u0438\u0432 \u043F\u0443\u0441\u0442 ")) : (openBlock(), createBlock(_component_UiScrollArea, {
                      key: 3,
                      class: "max-h-[80vh] h-full pr-3"
                    }, {
                      default: withCtx(() => [
                        (openBlock(true), createBlock(Fragment, null, renderList(unref(items), (task) => {
                          return openBlock(), createBlock("div", {
                            key: task.id,
                            class: "relative rounded-sm border flex gap-3 border-neutral-600 bg-neutral-700/50 mb-2 p-3 hover:bg-neutral-700 cursor-pointer",
                            onClick: ($event) => pick(task)
                          }, [
                            createVNode("div", { class: "absolute top-2 right-2" }, [
                              createVNode(_component_UiButton, {
                                size: "sm",
                                variant: "outline",
                                class: "h-7 text-xs px-2 py-1 bg-neutral-700 text-neutral-200 border-neutral-500/50 hover:bg-neutral-600",
                                disabled: isRestoring(task.id),
                                onClick: ($event) => restoreTask(task, $event)
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(isRestoring(task.id) ? "..." : "\u0412\u0415\u0420\u041D\u0423\u0422\u042C"), 1)
                                ]),
                                _: 2
                              }, 1032, ["disabled", "onClick"])
                            ]),
                            task.cover ? (openBlock(), createBlock("div", {
                              key: 0,
                              class: "w-1/3"
                            }, [
                              createVNode(_component_ClientOnly, null, {
                                default: withCtx(() => [
                                  createVNode("img", {
                                    src: unref(getPreviewSrc)(task.cover),
                                    alt: "",
                                    loading: "lazy",
                                    decoding: "async",
                                    crossorigin: "anonymous",
                                    referrerpolicy: "no-referrer",
                                    class: "h-28 w-full object-cover",
                                    onError: withModifiers(() => unref(onImgError)(task.cover), ["stop"])
                                  }, null, 40, ["src", "onError"])
                                ]),
                                _: 2
                              }, 1024)
                            ])) : createCommentVNode("", true),
                            createVNode("div", null, [
                              createVNode("div", { class: "font-medium text-neutral-300" }, toDisplayString(task.title), 1),
                              createVNode("div", { class: "text-xs text-neutral-500 mt-0.5" }, toDisplayString(task.board.title) + " / " + toDisplayString(task.column.title), 1),
                              createVNode("div", { class: "flex flex-wrap items-center gap-1.5 mt-2" }, [
                                (openBlock(true), createBlock(Fragment, null, renderList(task.members, (m) => {
                                  var _a;
                                  return openBlock(), createBlock(_component_MyUserListItem, {
                                    key: m.id,
                                    "full-name": m.fullName,
                                    hover: true,
                                    "role-name": (_a = m.role) == null ? void 0 : _a.fullName,
                                    size: "sm"
                                  }, null, 8, ["full-name", "role-name"]);
                                }), 128))
                              ])
                            ])
                          ], 8, ["onClick"]);
                        }), 128)),
                        createVNode("div", {
                          ref_key: "loadMoreRef",
                          ref: loadMoreRef,
                          class: "h-8 flex items-center justify-center"
                        }, [
                          unref(isLoadingMore) ? (openBlock(), createBlock("span", {
                            key: 0,
                            class: "text-xs text-neutral-500"
                          }, "\u0417\u0430\u0433\u0440\u0443\u0436\u0430\u0435\u043C\u2026")) : !unref(hasMore) ? (openBlock(), createBlock("span", {
                            key: 1,
                            class: "text-xs text-neutral-600"
                          }, "\u0411\u043E\u043B\u044C\u0448\u0435 \u043D\u0435\u0442")) : createCommentVNode("", true)
                        ], 512)
                      ]),
                      _: 1
                    }))
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
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/my/kanban/task/ArchiveModal.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const POLL_MS = 2e4;
const STALE_REFETCH_WINDOW = 1500;
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const { $useApi } = useNuxtApp();
    useRouter();
    const route = useRoute();
    const initializing = ref(false);
    const curBoardId = computed(() => Number(route.params.id));
    const isSheetOpen = ref(false);
    const isSheetColumnsOpen = ref(false);
    const isSearchOpen = ref(false);
    const isArchiveOpen = ref(false);
    ref(false);
    const activeTaskId = ref(0);
    const activeColumnId = ref(0);
    const hiddenColumnIds = ref([]);
    const boardTitle = ref("");
    const columns = ref([]);
    useBoardColumns(curBoardId);
    computed(
      () => `easycrm:board:${curBoardId.value}:hiddenColumns`
    );
    useHead({ title: computed(() => `\u0414\u043E\u0441\u043A\u0430 | Easy CRM`) });
    async function fetchKanban(boardId) {
      var _a, _b;
      try {
        const { data } = await $useApi.get(`/boards/${boardId}/kanban`, {
          params: { hidden: hiddenColumnIds.value.join(",") }
        });
        useHead({ title: computed(() => `\u0414\u043E\u0441\u043A\u0430 ${data.title} | Easy CRM`) });
        boardTitle.value = (_a = data == null ? void 0 : data.title) != null ? _a : "";
        columns.value = (_b = data == null ? void 0 : data.columns) != null ? _b : [];
      } catch (e) {
        console.error("fetchKanban failed", e);
        throw e;
      }
    }
    const isBoardModalOpen = ref(false);
    function openTask(task, columnId) {
      activeTaskId.value = Number(task.id);
      activeColumnId.value = Number(columnId);
      (void 0).history.pushState(
        {},
        "",
        `/boards/${curBoardId.value}/task/${task.id}`
      );
      useHead({ title: computed(() => `${task.title} | Easy CRM`) });
      isBoardModalOpen.value = true;
    }
    async function closeTaskModal() {
      isBoardModalOpen.value = false;
      (void 0).history.pushState({}, "", `/boards/${curBoardId.value}`);
      await fetchKanban(curBoardId.value);
    }
    function onDeleteTask(taskId, activeColumnId2) {
      const col = columnById(activeColumnId2);
      if (!col) return;
      col.tasks = col.tasks.filter((t) => t.id !== taskId);
      closeTaskModal();
    }
    function columnById(id) {
      return columns.value.find((c) => c.id === id);
    }
    function handleSearchOpenTask(payload) {
      openTask(payload.task, payload.columnId);
    }
    function handleColumnsChange(payload) {
      hiddenColumnIds.value = payload.hidden.slice();
      fetchKanban(curBoardId.value);
    }
    const refetchKanban = useDebounceFn(() => {
      if (curBoardId.value) fetchKanban(curBoardId.value);
    }, 150);
    const isFetching = ref(false);
    let lastRefetchAt = 0;
    async function refetchNowDedup() {
      const now = Date.now();
      if (isFetching.value || now - lastRefetchAt < STALE_REFETCH_WINDOW) return;
      lastRefetchAt = now;
      await fetchKanbanSafe(curBoardId.value);
    }
    async function fetchKanbanSafe(id) {
      return;
    }
    const visibility = useDocumentVisibility();
    const online = useOnline();
    const { pause, resume } = useIntervalFn(
      () => fetchKanbanSafe(curBoardId.value),
      POLL_MS,
      { immediate: false }
    );
    watch(
      curBoardId,
      async (id) => {
        if (!id) return;
        initializing.value = true;
        await fetchKanban(id);
        initializing.value = false;
      },
      { immediate: true }
    );
    watch(
      hiddenColumnIds,
      () => {
        if (initializing.value) return;
        refetchKanban();
      },
      { deep: true }
    );
    watch(
      [() => visibility.value, online, isBoardModalOpen],
      ([v, on, modalOpen], [prevV, prevOn, prevModal]) => {
        if (initializing.value) {
          return;
        }
        if (modalOpen) {
          return;
        }
        if (v === "visible" && on) {
          if (prevV !== "visible" || prevOn !== true || prevModal === true) {
            refetchNowDedup();
          }
        }
      },
      { immediate: true }
    );
    watch(curBoardId, (id) => {
      if (!id) return;
      fetchKanbanSafe();
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiSheet = _sfc_main$2$1;
      const _component_UiSheetTrigger = _sfc_main$1$1;
      const _component_UiSheetContent = _sfc_main$5;
      const _component_UiSheetHeader = _sfc_main$1$2;
      const _component_UiSheetTitle = _sfc_main$6;
      const _component_UiSheetDescription = _sfc_main$7;
      const _component_MyKanbanUsersSheet = _sfc_main$4;
      const _component_MyKanbanColumnList = _sfc_main$3;
      const _component_UiButton = _sfc_main$8;
      const _component_ClientOnly = __nuxt_component_9;
      const _component_MyKanbanTaskSearchModal = _sfc_main$2;
      const _component_MyKanbanTaskArchiveModal = _sfc_main$1;
      const _component_MyKanbanTaskModal = _sfc_main$9;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_UiSheet, {
        open: unref(isSheetOpen),
        "onUpdate:open": ($event) => isRef(isSheetOpen) ? isSheetOpen.value = $event : null
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UiSheetTrigger, { class: "hidden" }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UiSheetContent, { class: "p-0 border-0 bg-neutral-800" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UiSheetHeader, { class: "hidden" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UiSheetTitle, null, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_UiSheetDescription, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_UiSheetTitle),
                          createVNode(_component_UiSheetDescription)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_MyKanbanUsersSheet, { "board-id": unref(curBoardId) }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UiSheetHeader, { class: "hidden" }, {
                      default: withCtx(() => [
                        createVNode(_component_UiSheetTitle),
                        createVNode(_component_UiSheetDescription)
                      ]),
                      _: 1
                    }),
                    createVNode(_component_MyKanbanUsersSheet, { "board-id": unref(curBoardId) }, null, 8, ["board-id"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UiSheetTrigger, { class: "hidden" }),
              createVNode(_component_UiSheetContent, { class: "p-0 border-0 bg-neutral-800" }, {
                default: withCtx(() => [
                  createVNode(_component_UiSheetHeader, { class: "hidden" }, {
                    default: withCtx(() => [
                      createVNode(_component_UiSheetTitle),
                      createVNode(_component_UiSheetDescription)
                    ]),
                    _: 1
                  }),
                  createVNode(_component_MyKanbanUsersSheet, { "board-id": unref(curBoardId) }, null, 8, ["board-id"])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UiSheet, {
        open: unref(isSheetColumnsOpen),
        "onUpdate:open": ($event) => isRef(isSheetColumnsOpen) ? isSheetColumnsOpen.value = $event : null
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UiSheetTrigger, { class: "hidden" }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UiSheetContent, { class: "p-0 border-0 bg-neutral-800" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UiSheetHeader, { class: "hidden" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UiSheetTitle, null, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_UiSheetDescription, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_UiSheetTitle),
                          createVNode(_component_UiSheetDescription)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<div class="p-2 pt-4 h-full"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_MyKanbanColumnList, {
                    modelValue: unref(hiddenColumnIds),
                    "onUpdate:modelValue": ($event) => isRef(hiddenColumnIds) ? hiddenColumnIds.value = $event : null,
                    "board-id": unref(curBoardId),
                    onChange: handleColumnsChange
                  }, null, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode(_component_UiSheetHeader, { class: "hidden" }, {
                      default: withCtx(() => [
                        createVNode(_component_UiSheetTitle),
                        createVNode(_component_UiSheetDescription)
                      ]),
                      _: 1
                    }),
                    createVNode("div", { class: "p-2 pt-4 h-full" }, [
                      createVNode(_component_MyKanbanColumnList, {
                        modelValue: unref(hiddenColumnIds),
                        "onUpdate:modelValue": ($event) => isRef(hiddenColumnIds) ? hiddenColumnIds.value = $event : null,
                        "board-id": unref(curBoardId),
                        onChange: handleColumnsChange
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "board-id"])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UiSheetTrigger, { class: "hidden" }),
              createVNode(_component_UiSheetContent, { class: "p-0 border-0 bg-neutral-800" }, {
                default: withCtx(() => [
                  createVNode(_component_UiSheetHeader, { class: "hidden" }, {
                    default: withCtx(() => [
                      createVNode(_component_UiSheetTitle),
                      createVNode(_component_UiSheetDescription)
                    ]),
                    _: 1
                  }),
                  createVNode("div", { class: "p-2 pt-4 h-full" }, [
                    createVNode(_component_MyKanbanColumnList, {
                      modelValue: unref(hiddenColumnIds),
                      "onUpdate:modelValue": ($event) => isRef(hiddenColumnIds) ? hiddenColumnIds.value = $event : null,
                      "board-id": unref(curBoardId),
                      onChange: handleColumnsChange
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "board-id"])
                  ])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<header><div class="bg-neutral-800 px-4 py-2 flex w-full items-center text-neutral-300">`);
      _push(ssrRenderComponent(_component_UiButton, {
        class: "size-9 p-0 ml-auto bg-neutral-800 hover:bg-neutral-800",
        title: "\u041F\u043E\u0438\u0441\u043A",
        onClick: ($event) => isSearchOpen.value = true
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Search), null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(Search))
            ];
          }
        }),
        _: 1
      }, _parent));
      if (unref(curBoardId)) {
        _push(`<div>`);
        _push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></header><main class="bg-neutral-950">`);
      _push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
      _push(`</main>`);
      _push(ssrRenderComponent(_component_MyKanbanTaskSearchModal, {
        open: unref(isSearchOpen),
        "onUpdate:open": ($event) => isRef(isSearchOpen) ? isSearchOpen.value = $event : null,
        onOpenTask: handleSearchOpenTask
      }, null, _parent));
      _push(ssrRenderComponent(_component_MyKanbanTaskArchiveModal, {
        open: unref(isArchiveOpen),
        "onUpdate:open": ($event) => isRef(isArchiveOpen) ? isArchiveOpen.value = $event : null,
        "board-id": unref(curBoardId),
        onOpenTask: handleSearchOpenTask,
        onRestored: ($event) => fetchKanban(unref(curBoardId))
      }, null, _parent));
      _push(ssrRenderComponent(_component_MyKanbanTaskModal, {
        key: `task-modal-${unref(activeTaskId)}`,
        open: unref(isBoardModalOpen),
        "onUpdate:open": [
          ($event) => isRef(isBoardModalOpen) ? isBoardModalOpen.value = $event : null,
          (v) => {
            if (!v) closeTaskModal();
          }
        ],
        "task-id": unref(activeTaskId),
        onDelete: (taskId) => onDeleteTask(taskId, unref(activeColumnId))
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/boards/[id]/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-Bnup05Dy.mjs.map
