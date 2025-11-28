import { _ as _sfc_main$1 } from './TaskModal-JiFzd_Jq.mjs';
import { defineComponent, computed, ref, reactive, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { i as useRoute, a as useRouter, u as useHead } from './server.mjs';
import './Input-DoHPrX2-.mjs';
import '@vueuse/core';
import './utils-TCWotVPY.mjs';
import 'clsx';
import 'tailwind-merge';
import './DropdownMenuItem-Bzav__sm.mjs';
import 'radix-vue';
import 'lucide-vue-next';
import './index-B6vrBiru.mjs';
import 'class-variance-authority';
import './ScrollArea-Kzo2fjeX.mjs';
import './TabsList-C3eBcFGa.mjs';
import './TabsContent-9LTM_IKf.mjs';
import './Separator-DmvFl46f.mjs';
import './Label-Bxzolydd.mjs';
import './UserListItem-w8spDyow.mjs';
import 'reka-ui';
import './ComboboxModels-D84YuqHH.mjs';
import './PopoverContent-Dy99cMmu.mjs';
import './CommandList-DiM7UR93.mjs';
import './SelectScrollDownButton-JzJI8BsA.mjs';
import './SelectGroup-BKLQULEA.mjs';
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
import './Textarea-oqH4YeW4.mjs';
import './Switch-BsBEqAPz.mjs';
import './CreateMasterReport-BFuRSfoh.mjs';
import './DialogContent-BsO2ljLB.mjs';
import './DialogDescription-D5yt23q9.mjs';
import './DialogFooter-CQpXS8R1.mjs';
import './auth-CDeEREL9.mjs';
import 'pinia';
import './index-BPQNkNDf.mjs';
import '@iconify/vue';
import '@iconify/utils/lib/css/icon';
import 'perfect-debounce';
import 'vue-router';
import 'axios';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'unhead/plugins';
import './_plugin-vue_export-helper-1tPrXgE0.mjs';

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
//# sourceMappingURL=_taskId_-CYs04S02.mjs.map
