import { _ as _sfc_main$1 } from './index-DXIlBIYA.mjs';
import { _ as _sfc_main$2 } from './TaskModal-Boqedrng.mjs';
import { defineComponent, computed, ref, reactive, unref, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { h as useRoute, u as useRouter } from './server.mjs';
import { u as useHead } from './v3-CJAL4xID.mjs';
import 'radix-vue';
import 'class-variance-authority';
import 'clsx';
import 'tailwind-merge';
import './Input-CzbisvbY.mjs';
import '@vueuse/core';
import './DropdownMenuItem-lhpWPi-N.mjs';
import './TabsList-BccwyRY_.mjs';
import './TabsContent-B79lmJ9I.mjs';
import './Separator-CLaMwOnh.mjs';
import './Label-C4ujgS20.mjs';
import 'reka-ui';
import 'lucide-vue-next';
import './Textarea-8eRA4fdT.mjs';
import './Switch-MGCRXA8Z.mjs';
import './SelectScrollDownButton-B_NwGHHK.mjs';
import './PopoverContent-tRGx4jX7.mjs';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[taskId]",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const router = useRouter();
    const curBoardId = computed(() => Number(route.params.id));
    const taskId = computed(() => Number(route.params.taskId));
    useHead({
      title: computed(() => `\u0414\u043E\u0441\u043A\u0430 | Easy CRM`)
    });
    async function fetchKanban() {
      console.log("fetchKanban");
      try {
        router.push({
          path: `/boards/${curBoardId.value}`
        });
      } catch (e) {
        console.log(e);
      }
    }
    const activeTaskId = ref(0);
    const ui = reactive({
      editOpen: true,
      tagDraft: "",
      moveToColumnId: 0
    });
    async function closeTaskModal() {
      ui.editOpen = false;
      activeTaskId.value = 0;
      await fetchKanban();
    }
    function onDeleteTask() {
      closeTaskModal();
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiButton = _sfc_main$1;
      const _component_MyKanbanTaskModal = _sfc_main$2;
      _push(`<div${ssrRenderAttrs(_attrs)}><header><div class="bg-slate-200/70 px-4 py-4 flex justify-end">`);
      if (unref(curBoardId)) {
        _push(`<div>`);
        _push(ssrRenderComponent(_component_UiButton, {
          class: "rounded-xl border border-neutral-200 bg-white px-3 py-2 text-sm font-medium hover:bg-neutral-50 active:scale-[0.99]",
          variant: "ghost"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` + \u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043A\u043E\u043B\u043E\u043D\u043A\u0443 `);
            } else {
              return [
                createTextVNode(" + \u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043A\u043E\u043B\u043E\u043D\u043A\u0443 ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></header><main class="px-4 pt-6"></main>`);
      _push(ssrRenderComponent(_component_MyKanbanTaskModal, {
        open: unref(ui).editOpen,
        "onUpdate:open": [
          ($event) => unref(ui).editOpen = $event,
          (v) => {
            unref(ui).editOpen = v;
            if (!v) fetchKanban();
          }
        ],
        "task-id": unref(taskId),
        onDelete: onDeleteTask
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/boards/[id]/task/[taskId].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_taskId_-D3CH8z4V.mjs.map
