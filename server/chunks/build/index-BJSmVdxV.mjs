import { _ as _sfc_main$2, a as _sfc_main$1, b as _sfc_main$3 } from './index-YCLJisiv.mjs';
import { u as useBoardColumns, _ as _sfc_main$2$2, a as _sfc_main$1$2, b as _sfc_main$6 } from './SearchModal-BTce-JJr.mjs';
import { _ as _sfc_main$5 } from './index-DXIlBIYA.mjs';
import { b as useNuxtApp, a as useRouter, i as useRoute, u as useHead, _ as __nuxt_component_0$1 } from './server.mjs';
import { defineComponent, ref, computed, watch, unref, isRef, withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { Search } from 'lucide-vue-next';
import { useDebounceFn, useDocumentVisibility, useOnline, useIntervalFn } from '@vueuse/core';
import { _ as _sfc_main$2$1, a as _sfc_main$1$1, b as _sfc_main$4 } from './SheetDescription-BIU1oKx-.mjs';
import 'radix-vue';
import 'class-variance-authority';
import './ComboboxModels-DeRm96v0.mjs';
import './PopoverContent-tRGx4jX7.mjs';
import './CommandList-DJfPvy-6.mjs';
import './CommandInput-Ca0d3E3_.mjs';
import './Separator-CLaMwOnh.mjs';
import './UserListItem-CgSSeERn.mjs';
import 'reka-ui';
import './Switch-DpZI1Ncq.mjs';
import './DialogContent-C-t2_PBT.mjs';
import './DialogDescription-Bv3iXHRh.mjs';
import './Input-CzbisvbY.mjs';
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
    const openSignal = ref(null);
    const isSheetOpen = ref(false);
    const isSheetColumnsOpen = ref(false);
    const isSearchOpen = ref(false);
    ref(false);
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
      (void 0).history.pushState(
        {},
        "",
        `/boards/${curBoardId.value}/task/${task.id}`
      );
      useHead({ title: computed(() => `${task.title} | Easy CRM`) });
      const prev = openSignal.value;
      if (!prev || prev.taskId !== task.id || prev.columnId !== columnId) {
        openSignal.value = { taskId: task.id, columnId, nonce: Date.now() };
      }
      isBoardModalOpen.value = true;
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
      const _component_UiSheet = _sfc_main$2;
      const _component_UiSheetTrigger = _sfc_main$1;
      const _component_UiSheetContent = _sfc_main$3;
      const _component_UiSheetHeader = _sfc_main$2$1;
      const _component_UiSheetTitle = _sfc_main$1$1;
      const _component_UiSheetDescription = _sfc_main$4;
      const _component_MyKanbanUsersSheet = _sfc_main$2$2;
      const _component_MyKanbanColumnList = _sfc_main$1$2;
      const _component_UiButton = _sfc_main$5;
      const _component_ClientOnly = __nuxt_component_0$1;
      const _component_MyKanbanTaskSearchModal = _sfc_main$6;
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
//# sourceMappingURL=index-BJSmVdxV.mjs.map
