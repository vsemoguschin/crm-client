import { _ as _sfc_main$1 } from './TaskModal-Cbhv-NhI.mjs';
import { defineComponent, computed, ref, reactive, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { i as useRoute, a as useRouter, u as useHead } from './server.mjs';
import './Input-CzbisvbY.mjs';
import '@vueuse/core';
import './index-DXIlBIYA.mjs';
import 'radix-vue';
import 'class-variance-authority';
import 'clsx';
import 'tailwind-merge';
import './UserListItem-CLWLpvD9.mjs';
import 'reka-ui';
import 'lucide-vue-next';
import './TabsList-BccwyRY_.mjs';
import './TabsContent-B79lmJ9I.mjs';
import './Separator-CLaMwOnh.mjs';
import './Label-C4ujgS20.mjs';
import './ComboboxModels-DeRm96v0.mjs';
import './PopoverContent-tRGx4jX7.mjs';
import './CommandList-DJfPvy-6.mjs';
import './CommandInput-Ca0d3E3_.mjs';
import './Textarea-8eRA4fdT.mjs';
import './Switch-DpZI1Ncq.mjs';
import './SelectScrollDownButton-CHmlo_bA.mjs';
import './SelectGroup-C9qEX6zf.mjs';
import './_plugin-vue_export-helper-1tPrXgE0.mjs';
import './DialogContent-TqbB2uxT.mjs';
import './DialogDescription-Bv3iXHRh.mjs';
import './DialogFooter-CS0sFmAA.mjs';
import './auth-CDeEREL9.mjs';
import 'pinia';
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
    }
    function onDeleteTask() {
      closeTaskModal();
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_MyKanbanTaskModal = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(_attrs)}><header></header><main class="px-4 pt-6"></main>`);
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
//# sourceMappingURL=_taskId_-BSdbupsQ.mjs.map
