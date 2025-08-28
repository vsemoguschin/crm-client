import { _ as _sfc_main$2 } from './Sidebar-BHCtY7ck.mjs';
import { _ as _sfc_main$3 } from './index-DXIlBIYA.mjs';
import { _ as _sfc_main$4 } from './Input-CzbisvbY.mjs';
import { _ as _sfc_main$5 } from './Textarea-8eRA4fdT.mjs';
import { defineComponent, computed, ref, mergeProps, withCtx, createTextVNode, unref, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc, h as useRoute, u as useRouter, a as useNuxtApp, k as __nuxt_component_3, n as navigateTo, i as toast } from './server.mjs';
import { u as useIsLoadingStore, a as useAuthStore } from './isLoading-BADbcWeo.mjs';
import { _ as _sfc_main$3$1 } from './ToastViewport-BPo9j06H.mjs';
import './index-YCLJisiv.mjs';
import 'radix-vue';
import 'lucide-vue-next';
import 'class-variance-authority';
import './DropdownMenuItem-lhpWPi-N.mjs';
import './nuxt-link-DzB9Vkrn.mjs';
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
import 'vue-router';
import 'clsx';
import 'tailwind-merge';
import '@vueuse/core';
import 'pinia';
import '@iconify/vue';
import 'axios';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "BoardCreateForm",
  __ssrInlineRender: true,
  emits: ["created", "close"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const title = ref("");
    const description = ref("");
    const isSubmitting = ref(false);
    const { $api } = useNuxtApp();
    async function handleSubmit() {
      if (!title.value.trim()) return;
      isSubmitting.value = true;
      try {
        const payload = {
          title: title.value.trim(),
          description: description.value.trim() || null
        };
        const data = await $api.$post("/boards", payload);
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
      const _component_UiInput = _sfc_main$4;
      const _component_UiTextarea = _sfc_main$5;
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
    useRouter();
    const curBoardIdd = computed(() => Number(route.params.id));
    const taskId = computed(() => Number(route.params.taskId));
    console.log("curB", curBoardIdd.value, "task", taskId.value);
    useIsLoadingStore();
    useAuthStore();
    const { $useApi, $api } = useNuxtApp();
    ref(true);
    ref(false);
    const boards2 = ref([]);
    const curBoardId = ref(0);
    const isBoardsLoading = ref(false);
    const showCreateBoard = ref(false);
    const fetchBoards = async () => {
      isBoardsLoading.value = true;
      try {
        const data = await $api.$get("/boards");
        boards2.value = data != null ? data : [];
        if (data == null ? void 0 : data.length) {
          if (!taskId.value) {
            curBoardId.value = data[0].id;
            navigateTo(`/boards/${data[0].id}`);
            return;
          }
          curBoardId.value = curBoardIdd.value;
        }
      } finally {
        isBoardsLoading.value = false;
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_LayoutSidebar = _sfc_main$2;
      const _component_UiButton = _sfc_main$3;
      const _component_MyKanbanBoardCreateForm = _sfc_main$1;
      const _component_NuxtPage = __nuxt_component_3;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative h-screen hidden-scrollbar" }, _attrs))} data-v-69466c6f><div class="w-full fixed z-10" data-v-69466c6f>`);
      _push(ssrRenderComponent(_component_LayoutSidebar, null, null, _parent));
      _push(`</div><div class="min-h-screen bg-neutral-50 pt-14" data-v-69466c6f><div class="absolute top-18 left-4 flex items-center gap-3" data-v-69466c6f>`);
      _push(ssrRenderComponent(_component_UiButton, {
        class: "rounded-sm border border-neutral-200 bg-white px-3 py-2 text-sm font-medium hover:bg-neutral-50 active:scale-[0.99]",
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
      _push(`</div>`);
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
      _push(ssrRenderComponent(unref(_sfc_main$3$1), null, null, _parent));
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
const boards = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-69466c6f"]]);

export { boards as default };
//# sourceMappingURL=boards-BxyQtMrX.mjs.map
