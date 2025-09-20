import { _ as _sfc_main$1 } from './TaskModal-CfK12Ctd.mjs';
import { defineComponent, computed, ref, reactive, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { i as useRoute, a as useRouter, u as useHead } from './server.mjs';
import './DialogContent-D_qM7mie.mjs';
import 'radix-vue';
import './utils-DuwrO1cI.mjs';
import 'clsx';
import 'tailwind-merge';
import 'lucide-vue-next';
import './DialogDescription-CL0TXbWH.mjs';
import './DialogFooter-DIBiHjDs.mjs';
import './Input-RlyYgX4o.mjs';
import '@vueuse/core';
import './UserListItem-oJMTly4k.mjs';
import 'reka-ui';
import './index-DjUwrDZ-.mjs';
import 'class-variance-authority';
import './TabsList-BnKIeM8c.mjs';
import './TabsContent-CNnpw0A9.mjs';
import './Separator-DO9XrCC7.mjs';
import './Label-CKHHRe8Y.mjs';
import './ComboboxModels-CajELqKg.mjs';
import './PopoverContent-CfHqw7rH.mjs';
import './CommandList-CK70UNGB.mjs';
import './CommandInput-juM6Evaj.mjs';
import './Textarea-hE0V8itU.mjs';
import './Switch-CYOXClXd.mjs';
import './SelectScrollDownButton-D-BrOlTE.mjs';
import './SelectGroup-Bqr9JTPe.mjs';
import './_plugin-vue_export-helper-1tPrXgE0.mjs';
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
//# sourceMappingURL=_taskId_-BquJoGP0.mjs.map
