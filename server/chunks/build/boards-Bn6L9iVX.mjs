import { _ as _sfc_main$2 } from './Sidebar-ClYzRSuC.mjs';
import { _ as _sfc_main$3 } from './index-B6vrBiru.mjs';
import { _ as _sfc_main$3$1, a as _sfc_main$2$1, b as _sfc_main$1$1, c as _sfc_main$4 } from './DropdownMenuItem-Bzav__sm.mjs';
import { _ as _sfc_main$5 } from './Input-DoHPrX2-.mjs';
import { _ as _sfc_main$6 } from './Textarea-oqH4YeW4.mjs';
import { defineComponent, computed, ref, mergeProps, withCtx, createTextVNode, unref, toDisplayString, createVNode, createBlock, openBlock, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import { i as useRoute, a as useRouter, b as useNuxtApp, j as __nuxt_component_7, t as toast } from './server.mjs';
import { u as useAuthStore } from './auth-CDeEREL9.mjs';
import { u as useIsLoadingStore } from './isLoading-BaPa0n0V.mjs';
import { _ as _sfc_main$3$2 } from './ToastViewport-BDwwoyJ8.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import './index-9T5woGxV.mjs';
import 'radix-vue';
import 'lucide-vue-next';
import 'class-variance-authority';
import './utils-TCWotVPY.mjs';
import 'clsx';
import 'tailwind-merge';
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
import './DropdownMenuSeparator-B4V4iajS.mjs';
import './UserListItem-w8spDyow.mjs';
import 'vue-router';
import 'pinia';
import '@iconify/vue';
import 'axios';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'unhead/plugins';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "BoardCreateForm",
  __ssrInlineRender: true,
  emits: ["created", "close"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const title = ref("");
    const description = ref("");
    const isSubmitting = ref(false);
    const { $useApi } = useNuxtApp();
    async function handleSubmit() {
      if (!title.value.trim()) return;
      isSubmitting.value = true;
      try {
        const payload = {
          title: title.value.trim(),
          description: description.value.trim() || null
        };
        const { data } = await $useApi.post("/boards", payload);
        emit("created");
        handleClose();
      } catch (e) {
        console.error("createBoard failed", e);
        toast({
          variant: "destructive",
          title: "\u041E\u0448\u0438\u0431\u043A\u0430",
          description: "\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0441\u043E\u0437\u0434\u0430\u0442\u044C \u0434\u043E\u0441\u043A\u0443."
        });
      } finally {
        isSubmitting.value = false;
      }
    }
    function handleClose() {
      emit("close");
      title.value = "";
      description.value = "";
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiInput = _sfc_main$5;
      const _component_UiTextarea = _sfc_main$6;
      const _component_UiButton = _sfc_main$3;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "fixed inset-0 flex items-center justify-center bg-black/40 z-50" }, _attrs))}><div class="w-full max-w-md rounded-xl bg-white p-6 shadow-lg"><h2 class="mb-4 text-lg font-semibold">\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u043D\u043E\u0432\u0443\u044E \u0434\u043E\u0441\u043A\u0443</h2>`);
      _push(ssrRenderComponent(_component_UiInput, {
        modelValue: title.value,
        "onUpdate:modelValue": ($event) => title.value = $event,
        placeholder: "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0434\u043E\u0441\u043A\u0438",
        class: "mb-3 w-full rounded-lg border border-neutral-200 px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-500"
      }, null, _parent));
      _push(ssrRenderComponent(_component_UiTextarea, {
        modelValue: description.value,
        "onUpdate:modelValue": ($event) => description.value = $event,
        placeholder: "\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435 (\u043D\u0435\u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E)",
        class: "mb-4 w-full rounded-lg border border-neutral-200 px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-500"
      }, null, _parent));
      _push(`<div class="flex justify-end gap-2">`);
      _push(ssrRenderComponent(_component_UiButton, {
        variant: "ghost",
        class: "px-4 py-2 rounded-lg border border-neutral-200",
        onClick: handleClose
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u041E\u0442\u043C\u0435\u043D\u0430 `);
          } else {
            return [
              createTextVNode(" \u041E\u0442\u043C\u0435\u043D\u0430 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UiButton, {
        class: "px-4 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700",
        disabled: isSubmitting.value,
        onClick: handleSubmit
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(isSubmitting.value ? "\u0421\u043E\u0437\u0434\u0430\u043D\u0438\u0435..." : "\u0421\u043E\u0437\u0434\u0430\u0442\u044C")}`);
          } else {
            return [
              createTextVNode(toDisplayString(isSubmitting.value ? "\u0421\u043E\u0437\u0434\u0430\u043D\u0438\u0435..." : "\u0421\u043E\u0437\u0434\u0430\u0442\u044C"), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/my/kanban/BoardCreateForm.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "boards",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const router = useRouter();
    computed(() => Number(route.params.id));
    computed(() => Number(route.params.taskId));
    useIsLoadingStore();
    const authStore = useAuthStore();
    const { $useApi } = useNuxtApp();
    ref(true);
    ref(false);
    const boards2 = ref([]);
    ref(0);
    const isBoardsLoading = ref(false);
    const showCreateBoard = ref(false);
    const curUser = computed(() => authStore.user);
    const avaliableBoards = computed(() => {
      var _a, _b;
      return (_b = (_a = curUser.value) == null ? void 0 : _a.boards) != null ? _b : [];
    });
    const currentBoardTitle = computed(() => {
      var _a;
      const id = Number(route.params.id);
      return ((_a = avaliableBoards.value.find((b) => Number(b.id) === id)) == null ? void 0 : _a.title) || "\u0412\u044B\u0431\u0440\u0430\u0442\u044C \u0434\u043E\u0441\u043A\u0443";
    });
    const fetchBoards = async () => {
      isBoardsLoading.value = true;
      try {
        const { data } = await $useApi.get("/boards");
        boards2.value = data != null ? data : [];
      } finally {
        isBoardsLoading.value = false;
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_LayoutSidebar = _sfc_main$2;
      const _component_UiButton = _sfc_main$3;
      const _component_UiDropdownMenu = _sfc_main$3$1;
      const _component_UiDropdownMenuTrigger = _sfc_main$2$1;
      const _component_UiDropdownMenuContent = _sfc_main$1$1;
      const _component_UiDropdownMenuItem = _sfc_main$4;
      const _component_MyKanbanBoardCreateForm = _sfc_main$1;
      const _component_NuxtPage = __nuxt_component_7;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative h-screen hidden-scrollbar" }, _attrs))} data-v-41a34d10><div class="w-full fixed z-10" data-v-41a34d10>`);
      _push(ssrRenderComponent(_component_LayoutSidebar, null, null, _parent));
      _push(`</div><div class="min-h-screen bg-neutral-800 pt-14" data-v-41a34d10><div class="absolute top-[62px] left-4 flex items-center gap-3" data-v-41a34d10><div class="mt-[2px] flex items-center gap-1" data-v-41a34d10>`);
      _push(ssrRenderComponent(_component_UiButton, {
        class: "rounded-sm text-2xl bg-neutral-800 hover:bg-neutral-800 hover:text-neutral-300 text-neutral-300 font-medium",
        variant: "ghost",
        title: "\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u0434\u043E\u0441\u043A\u0443",
        onClick: ($event) => showCreateBoard.value = true
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` + `);
          } else {
            return [
              createTextVNode(" + ")
            ];
          }
        }),
        _: 1
      }, _parent));
      if (unref(avaliableBoards).length) {
        _push(ssrRenderComponent(_component_UiDropdownMenu, null, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_UiDropdownMenuTrigger, { "as-child": "" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UiButton, { class: "bg-neutral-800 h-9 text-xl py-3 border-1 border-neutral-500/20 text-neutral-300 hover:bg-neutral-700" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate(unref(currentBoardTitle))} \u25BE `);
                        } else {
                          return [
                            createTextVNode(toDisplayString(unref(currentBoardTitle)) + " \u25BE ", 1)
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_UiButton, { class: "bg-neutral-800 h-9 text-xl py-3 border-1 border-neutral-500/20 text-neutral-300 hover:bg-neutral-700" }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(unref(currentBoardTitle)) + " \u25BE ", 1)
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UiDropdownMenuContent, { class: "bg-neutral-800 text-neutral-300" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<!--[-->`);
                    ssrRenderList(unref(avaliableBoards), (b) => {
                      _push3(ssrRenderComponent(_component_UiDropdownMenuItem, {
                        key: b.id,
                        class: "cursor-pointer",
                        onClick: ($event) => unref(router).push(`/boards/${b.id}`)
                      }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(`${ssrInterpolate(b.title)}`);
                          } else {
                            return [
                              createTextVNode(toDisplayString(b.title), 1)
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                    });
                    _push3(`<!--]-->`);
                  } else {
                    return [
                      (openBlock(true), createBlock(Fragment, null, renderList(unref(avaliableBoards), (b) => {
                        return openBlock(), createBlock(_component_UiDropdownMenuItem, {
                          key: b.id,
                          class: "cursor-pointer",
                          onClick: ($event) => unref(router).push(`/boards/${b.id}`)
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(b.title), 1)
                          ]),
                          _: 2
                        }, 1032, ["onClick"]);
                      }), 128))
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_UiDropdownMenuTrigger, { "as-child": "" }, {
                  default: withCtx(() => [
                    createVNode(_component_UiButton, { class: "bg-neutral-800 h-9 text-xl py-3 border-1 border-neutral-500/20 text-neutral-300 hover:bg-neutral-700" }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(unref(currentBoardTitle)) + " \u25BE ", 1)
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode(_component_UiDropdownMenuContent, { class: "bg-neutral-800 text-neutral-300" }, {
                  default: withCtx(() => [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(avaliableBoards), (b) => {
                      return openBlock(), createBlock(_component_UiDropdownMenuItem, {
                        key: b.id,
                        class: "cursor-pointer",
                        onClick: ($event) => unref(router).push(`/boards/${b.id}`)
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(b.title), 1)
                        ]),
                        _: 2
                      }, 1032, ["onClick"]);
                    }), 128))
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<div class="text-neutral-400 text-sm" data-v-41a34d10>\u041D\u0435\u0442 \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u044B\u0445 \u0434\u043E\u0441\u043E\u043A</div>`);
      }
      _push(`</div></div>`);
      if (showCreateBoard.value) {
        _push(ssrRenderComponent(_component_MyKanbanBoardCreateForm, {
          onCreated: fetchBoards,
          onClose: ($event) => showCreateBoard.value = false
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_component_NuxtPage, null, null, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(unref(_sfc_main$3$2), null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/boards.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const boards = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-41a34d10"]]);

export { boards as default };
//# sourceMappingURL=boards-Bn6L9iVX.mjs.map
