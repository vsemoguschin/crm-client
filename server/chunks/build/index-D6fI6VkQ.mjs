import { _ as _sfc_main$2, a as _sfc_main$1$1, b as _sfc_main$3 } from './index-YCLJisiv.mjs';
import { _ as _sfc_main$6 } from './ComboboxModels-BcsYUbW8.mjs';
import { _ as _sfc_main$7 } from './Separator-CLaMwOnh.mjs';
import { _ as _sfc_main$4$1 } from './DropdownMenuItem-lhpWPi-N.mjs';
import { _ as _sfc_main$8 } from './index-DXIlBIYA.mjs';
import { defineComponent, computed, ref, reactive, watch, unref, isRef, withCtx, createVNode, mergeProps, createTextVNode, createBlock, openBlock, Fragment, renderList, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import { a as useNuxtApp, u as useRouter, h as useRoute, j as __nuxt_component_7 } from './server.mjs';
import { _ as _sfc_main$5 } from './TaskModal-Boqedrng.mjs';
import { u as useHead } from './v3-CJAL4xID.mjs';
import { _ as _sfc_main$2$1, a as _sfc_main$1$2, b as _sfc_main$4 } from './SheetDescription-BIU1oKx-.mjs';
import 'radix-vue';
import 'lucide-vue-next';
import 'class-variance-authority';
import './PopoverContent-tRGx4jX7.mjs';
import './CommandList-DJfPvy-6.mjs';
import './CommandInput-Ca0d3E3_.mjs';
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
import './Input-CzbisvbY.mjs';
import '@vueuse/core';
import './TabsList-BccwyRY_.mjs';
import './TabsContent-B79lmJ9I.mjs';
import './Label-C4ujgS20.mjs';
import 'reka-ui';
import './Textarea-8eRA4fdT.mjs';
import './Switch-MGCRXA8Z.mjs';
import './SelectScrollDownButton-B_NwGHHK.mjs';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'unhead/plugins';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
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
      const _component_MyComboboxModels = _sfc_main$6;
      const _component_UiSeparator = _sfc_main$7;
      const _component_UiScrollArea = _sfc_main$4$1;
      const _component_UiButton = _sfc_main$8;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "pt-4 space-y-4" }, _attrs))}><div class="flex items-center justify-between px-4"><h3 class="text-base font-semibold">\u0423\u0447\u0430\u0441\u0442\u043D\u0438\u043A\u0438 \u0434\u043E\u0441\u043A\u0438</h3>`);
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
        disabled: isLoadingUsers.value || isMutating.value,
        onSelectedItem: (value) => handleSelectUser(value)
      }, null, _parent));
      if (isLoadingUsers.value) {
        _push(`<div class="text-xs text-neutral-500"> \u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430 \u0441\u043F\u0438\u0441\u043A\u0430 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0435\u0439\u2026 </div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      _push(ssrRenderComponent(_component_UiSeparator, null, null, _parent));
      if (members.value.length) {
        _push(ssrRenderComponent(_component_UiScrollArea, { class: "h-[calc(100vh-180px)] px-4" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="space-y-2"${_scopeId}><!--[-->`);
              ssrRenderList(members.value, (m) => {
                _push2(`<div class="flex items-center justify-between rounded-lg border px-3 py-2"${_scopeId}><div class="min-w-0"${_scopeId}><div class="font-medium truncate"${_scopeId}>${ssrInterpolate(m.fullName)}</div><div class="text-xs text-neutral-500 truncate"${_scopeId}>${ssrInterpolate(m.role)}</div></div>`);
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
                      class: "flex items-center justify-between rounded-lg border px-3 py-2"
                    }, [
                      createVNode("div", { class: "min-w-0" }, [
                        createVNode("div", { class: "font-medium truncate" }, toDisplayString(m.fullName), 1),
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
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/my/kanban/UsersSheet.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const { $api } = useNuxtApp();
    const router = useRouter();
    console.log("fsafe");
    const route = useRoute();
    const curBoardId = computed(() => Number(route.params.id));
    const isSheetOpen = ref(false);
    useHead({
      title: computed(() => `\u0414\u043E\u0441\u043A\u0430 | Easy CRM`)
    });
    const columns = ref([]);
    async function fetchKanban(boardId) {
      var _a;
      try {
        const data = await $api.$get(`/boards/${boardId}/kanban`);
        useHead({
          title: computed(() => `\u0414\u043E\u0441\u043A\u0430 ${data.title} | Easy CRM`)
        });
        columns.value = (_a = data == null ? void 0 : data.columns) != null ? _a : [];
      } catch (e) {
        console.log(e);
        router.push({
          path: `/boards`
        });
      }
    }
    const activeTaskId = ref(0);
    const activeColumnId = ref(0);
    const ui = reactive({
      editOpen: false,
      tagDraft: "",
      moveToColumnId: 0
    });
    async function closeTaskModal(v) {
      ui.editOpen = v;
      if (!v) {
        (void 0).history.pushState({}, "", `/boards/${curBoardId.value}`);
        await fetchKanban(curBoardId.value);
      }
    }
    function onDeleteTask(taskId) {
      const col = columnById(activeColumnId.value);
      if (!col) return;
      col.tasks = col.tasks.filter((t) => t.id !== taskId);
      closeTaskModal(false);
    }
    function columnById(id) {
      return columns.value.find((c) => c.id === id);
    }
    watch(
      curBoardId,
      async (val) => {
        await fetchKanban(val);
      },
      { deep: true }
    );
    ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiSheet = _sfc_main$2;
      const _component_UiSheetTrigger = _sfc_main$1$1;
      const _component_UiSheetContent = _sfc_main$3;
      const _component_UiSheetHeader = _sfc_main$2$1;
      const _component_UiSheetTitle = _sfc_main$1$2;
      const _component_UiSheetDescription = _sfc_main$4;
      const _component_MyKanbanUsersSheet = _sfc_main$1;
      const _component_ClientOnly = __nuxt_component_7;
      const _component_MyKanbanTaskModal = _sfc_main$5;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_UiSheet, {
        open: unref(isSheetOpen),
        "onUpdate:open": ($event) => isRef(isSheetOpen) ? isSheetOpen.value = $event : null
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UiSheetTrigger, { class: "hidden" }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UiSheetContent, { class: "p-0" }, {
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
              createVNode(_component_UiSheetContent, { class: "p-0" }, {
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
      _push(`<header><div class="bg-slate-200/70 px-4 py-4 flex justify-end">`);
      if (unref(curBoardId)) {
        _push(`<div>`);
        _push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></header><main class="px-4 pt-4">`);
      _push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
      _push(`</main>`);
      _push(ssrRenderComponent(_component_MyKanbanTaskModal, {
        open: unref(ui).editOpen,
        "onUpdate:open": [($event) => unref(ui).editOpen = $event, (v) => closeTaskModal(v)],
        "task-id": unref(activeTaskId),
        "column-id": +unref(activeColumnId),
        columns: unref(columns),
        "board-id": unref(curBoardId),
        onDelete: onDeleteTask
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
//# sourceMappingURL=index-D6fI6VkQ.mjs.map
