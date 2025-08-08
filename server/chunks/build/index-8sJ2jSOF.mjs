import { _ as __nuxt_component_0$1 } from './server.mjs';
import { defineComponent, reactive, ref, watch, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderComponent, ssrRenderList, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
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
import 'pinia';
import 'vue-router';
import '@iconify/vue';
import 'axios';

const STORAGE_KEY = "nuxt-kanban-v1";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const project = reactive({
      title: "\u041C\u043E\u0439 \u043F\u0440\u043E\u0435\u043A\u0442",
      description: "\u042D\u0442\u043E \u043F\u0440\u0438\u043C\u0435\u0440 Kanban-\u0434\u043E\u0441\u043A\u0438 \u043D\u0430 Nuxt 3 + Tailwind + vuedraggable."
    });
    const columns = ref([
      {
        id: uid("col"),
        title: "To Do",
        tasks: [
          demoTask("\u0421\u043F\u043B\u0430\u043D\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0441\u043F\u0440\u0438\u043D\u0442", ["planning"]),
          demoTask("\u0421\u0432\u0435\u0440\u0441\u0442\u0430\u0442\u044C \u0434\u043E\u0441\u043A\u0443", ["frontend", "ui"])
        ]
      },
      {
        id: uid("col"),
        title: "In Progress",
        tasks: [
          demoTask("API \u0434\u043B\u044F \u0432\u043B\u043E\u0436\u0435\u043D\u0438\u0439", ["backend"])
        ]
      },
      {
        id: uid("col"),
        title: "Done",
        tasks: [demoTask("\u0418\u043D\u0438\u0446\u0438\u0430\u043B\u0438\u0437\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u043F\u0440\u043E\u0435\u043A\u0442", ["setup"])]
      }
    ]);
    const ui = reactive({
      editOpen: false,
      tagDraft: "",
      moveToColumnId: ""
    });
    const activeTask = ref(null);
    const activeColumnId = ref("");
    ref(null);
    function uid(prefix = "id") {
      return `${prefix}_${Math.random().toString(36).slice(2, 8)}_${Date.now().toString(36)}`;
    }
    function demoTask(title, tags = []) {
      return {
        id: uid("task"),
        title,
        description: "",
        tags,
        attachments: []
      };
    }
    function columnById(id) {
      return columns.value.find((c) => c.id === id);
    }
    function saveBoard() {
      const state = {
        project,
        columns: columns.value
      };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    }
    watch(
      () => ({ project, columns: columns.value }),
      () => saveBoard(),
      { deep: true }
    );
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d;
      const _component_ClientOnly = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-neutral-50" }, _attrs))} data-v-bf1adfe7><header class="sticky top-0 z-10 border-b bg-white" data-v-bf1adfe7><div class="mx-auto max-w-7xl px-4 py-4" data-v-bf1adfe7><div class="flex flex-col gap-3 md:flex-row md:items-center md:justify-between" data-v-bf1adfe7><div class="flex items-center gap-3" data-v-bf1adfe7><div class="size-10 shrink-0 rounded-2xl bg-gradient-to-br from-indigo-500 to-violet-500" data-v-bf1adfe7></div><div data-v-bf1adfe7><input${ssrRenderAttr("value", project.title)} class="w-full rounded-xl border border-neutral-200 px-3 py-2 text-lg font-semibold outline-none focus:ring-2 focus:ring-indigo-500" placeholder="\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u043F\u0440\u043E\u0435\u043A\u0442\u0430" data-v-bf1adfe7><div class="mt-1 text-xs text-neutral-500" data-v-bf1adfe7> Kanban-\u0434\u043E\u0441\u043A\u0430 \u2022 \u043F\u0435\u0440\u0435\u0442\u0430\u0441\u043A\u0438\u0432\u0430\u0439\u0442\u0435 \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0438 \u043C\u0435\u0436\u0434\u0443 \u043A\u043E\u043B\u043E\u043D\u043A\u0430\u043C\u0438 </div></div></div><div class="flex gap-2" data-v-bf1adfe7><button class="rounded-xl border border-neutral-200 bg-white px-3 py-2 text-sm font-medium hover:bg-neutral-50 active:scale-[0.99]" data-v-bf1adfe7> + \u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043A\u043E\u043B\u043E\u043D\u043A\u0443 </button><button class="rounded-xl bg-neutral-900 px-3 py-2 text-sm font-medium text-white hover:bg-neutral-800 active:scale-[0.99]" data-v-bf1adfe7> \u0421\u0431\u0440\u043E\u0441\u0438\u0442\u044C \u0434\u0435\u043C\u043E-\u0434\u0430\u043D\u043D\u044B\u0435 </button></div></div><div class="mt-3" data-v-bf1adfe7><textarea rows="2" class="w-full resize-y rounded-xl border border-neutral-200 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-indigo-500" placeholder="\u041A\u043E\u0440\u043E\u0442\u043A\u043E\u0435 \u043E\u043F\u0438\u0441\u0430\u043D\u0438\u0435 \u043F\u0440\u043E\u0435\u043A\u0442\u0430\u2026" data-v-bf1adfe7>${ssrInterpolate(project.description)}</textarea></div></div></header><main class="mx-auto max-w-[93rem] px-4 py-6" data-v-bf1adfe7>`);
      _push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
      _push(`</main>`);
      if (ui.editOpen && activeTask.value) {
        _push(`<div class="fixed inset-0 z-20 flex items-start justify-center bg-black/40 p-4" data-v-bf1adfe7><div class="mt-10 w-full max-w-3xl rounded-2xl bg-white shadow-xl ring-1 ring-black/5" role="dialog" aria-modal="true" data-v-bf1adfe7><div class="flex items-center justify-between border-b px-5 py-4" data-v-bf1adfe7><input${ssrRenderAttr("value", activeTask.value.title)} class="w-full rounded-lg border border-neutral-200 px-3 py-2 text-base font-semibold outline-none focus:ring-2 focus:ring-indigo-500" placeholder="\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0438" data-v-bf1adfe7><button class="ml-3 inline-flex size-9 items-center justify-center rounded-xl text-neutral-500 hover:bg-neutral-100" title="\u0417\u0430\u043A\u0440\u044B\u0442\u044C" data-v-bf1adfe7> \u2715 </button></div><div class="grid gap-6 px-5 py-5 md:grid-cols-3" data-v-bf1adfe7><div class="md:col-span-2" data-v-bf1adfe7><label class="block text-sm font-medium text-neutral-700" data-v-bf1adfe7>\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435</label><textarea rows="6" class="mt-1 w-full resize-y rounded-xl border border-neutral-200 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-indigo-500" placeholder="\u041E\u043F\u0438\u0448\u0438\u0442\u0435 \u0437\u0430\u0434\u0430\u0447\u0443, \u043A\u0440\u0438\u0442\u0435\u0440\u0438\u0438 \u043F\u0440\u0438\u0451\u043C\u043A\u0438, \u0447\u0435\u043A-\u043B\u0438\u0441\u0442 \u0438 \u0442.\u0434." data-v-bf1adfe7>${ssrInterpolate(activeTask.value.description)}</textarea><div class="mt-5" data-v-bf1adfe7><label class="block text-sm font-medium text-neutral-700" data-v-bf1adfe7>\u0422\u0435\u0433\u0438</label><div class="mt-1 flex flex-wrap items-center gap-2" data-v-bf1adfe7><!--[-->`);
        ssrRenderList(activeTask.value.tags, (tag) => {
          _push(`<span class="inline-flex items-center gap-1 rounded-full bg-indigo-50 px-2 py-1 text-[11px] font-medium text-indigo-700" data-v-bf1adfe7> #${ssrInterpolate(tag)} <button class="rounded-full px-1 text-indigo-600/70 hover:bg-indigo-100" title="\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0442\u0435\u0433" data-v-bf1adfe7> \u2A2F </button></span>`);
        });
        _push(`<!--]--><input${ssrRenderAttr("value", ui.tagDraft)} class="rounded-full border border-neutral-300 px-3 py-1.5 text-xs outline-none focus:ring-2 focus:ring-indigo-500" placeholder="\u043D\u043E\u0432\u044B\u0439-\u0442\u0435\u0433 \u21B5" data-v-bf1adfe7><button class="rounded-full border border-neutral-300 px-2 py-1 text-xs hover:bg-neutral-50" data-v-bf1adfe7> \u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C </button></div></div><div class="mt-6" data-v-bf1adfe7><label class="block text-sm font-medium text-neutral-700" data-v-bf1adfe7>\u0412\u043B\u043E\u0436\u0435\u043D\u0438\u044F</label><div class="mt-2 rounded-xl border border-dashed border-neutral-300 p-4" data-v-bf1adfe7><input type="file" multiple class="hidden" data-v-bf1adfe7><div class="flex flex-wrap gap-3" data-v-bf1adfe7><button class="inline-flex items-center gap-2 rounded-xl border border-neutral-200 bg-white px-3 py-2 text-sm hover:bg-neutral-50" data-v-bf1adfe7> \u{1F4CE} \u041F\u0440\u0438\u043A\u0440\u0435\u043F\u0438\u0442\u044C \u0444\u0430\u0439\u043B\u044B </button>`);
        if (((_a = activeTask.value.attachments) == null ? void 0 : _a.length) === 0) {
          _push(`<div class="text-sm text-neutral-500" data-v-bf1adfe7> \u0424\u0430\u0439\u043B\u043E\u0432 \u043F\u043E\u043A\u0430 \u043D\u0435\u0442 </div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
        if ((_b = activeTask.value.attachments) == null ? void 0 : _b.length) {
          _push(`<div class="mt-3 grid grid-cols-2 gap-3 md:grid-cols-3" data-v-bf1adfe7><!--[-->`);
          ssrRenderList(activeTask.value.attachments, (att) => {
            _push(`<div class="group relative overflow-hidden rounded-xl border" data-v-bf1adfe7>`);
            if (att.isImage) {
              _push(`<img${ssrRenderAttr("src", att.url)} alt="" class="h-28 w-full object-cover" data-v-bf1adfe7>`);
            } else {
              _push(`<div class="flex h-28 w-full items-center justify-center bg-neutral-50 text-xs text-neutral-600" data-v-bf1adfe7>${ssrInterpolate(att.name)}</div>`);
            }
            _push(`<div class="absolute inset-x-0 bottom-0 flex items-center justify-between bg-white/90 px-2 py-1 text-[11px]" data-v-bf1adfe7><a${ssrRenderAttr("href", att.url)} target="_blank" class="truncate hover:underline" data-v-bf1adfe7>${ssrInterpolate(att.name)}</a><button class="rounded px-1 text-neutral-500 hover:bg-neutral-100" title="\u0423\u0434\u0430\u043B\u0438\u0442\u044C" data-v-bf1adfe7> \u2715 </button></div></div>`);
          });
          _push(`<!--]--></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div></div><aside class="space-y-4" data-v-bf1adfe7><div class="rounded-xl border border-neutral-200 p-4" data-v-bf1adfe7><div class="text-sm font-semibold" data-v-bf1adfe7>\u0414\u0435\u0439\u0441\u0442\u0432\u0438\u044F</div><div class="mt-3 grid gap-2" data-v-bf1adfe7><button class="rounded-lg border border-neutral-200 bg-white px-3 py-2 text-sm hover:bg-neutral-50" data-v-bf1adfe7> \u0414\u0443\u0431\u043B\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0443 </button><button class="rounded-lg border border-red-200 bg-white px-3 py-2 text-sm text-red-600 hover:bg-red-50" data-v-bf1adfe7> \u0423\u0434\u0430\u043B\u0438\u0442\u044C \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0443 </button></div></div><div class="rounded-xl border border-neutral-200 p-4 text-sm text-neutral-600" data-v-bf1adfe7><div data-v-bf1adfe7><span class="font-medium" data-v-bf1adfe7>\u041A\u043E\u043B\u043E\u043D\u043A\u0430:</span> ${ssrInterpolate((_c = columnById(activeColumnId.value)) == null ? void 0 : _c.title)}</div><div class="mt-1" data-v-bf1adfe7><span class="font-medium" data-v-bf1adfe7>ID:</span> ${ssrInterpolate(activeTask.value.id)}</div><div class="mt-1" data-v-bf1adfe7><span class="font-medium" data-v-bf1adfe7>\u0412\u043B\u043E\u0436\u0435\u043D\u0438\u0439:</span> ${ssrInterpolate(((_d = activeTask.value.attachments) == null ? void 0 : _d.length) || 0)}</div></div><div class="rounded-xl border border-neutral-200 p-4" data-v-bf1adfe7><div class="text-sm font-semibold" data-v-bf1adfe7>\u041F\u0435\u0440\u0435\u043C\u0435\u0441\u0442\u0438\u0442\u044C \u0432 \u043A\u043E\u043B\u043E\u043D\u043A\u0443</div><div class="mt-2" data-v-bf1adfe7><select class="w-full rounded-lg border border-neutral-200 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-indigo-500" data-v-bf1adfe7><!--[-->`);
        ssrRenderList(columns.value, (col) => {
          _push(`<option${ssrRenderAttr("value", col.id)}${ssrIncludeBooleanAttr(col.id === activeColumnId.value) ? " disabled" : ""} data-v-bf1adfe7${ssrIncludeBooleanAttr(Array.isArray(ui.moveToColumnId) ? ssrLooseContain(ui.moveToColumnId, col.id) : ssrLooseEqual(ui.moveToColumnId, col.id)) ? " selected" : ""}>${ssrInterpolate(col.title)}</option>`);
        });
        _push(`<!--]--></select><button class="mt-2 w-full rounded-lg bg-neutral-900 px-3 py-2 text-sm font-medium text-white hover:bg-neutral-800" data-v-bf1adfe7> \u041F\u0435\u0440\u0435\u043C\u0435\u0441\u0442\u0438\u0442\u044C </button></div></div></aside></div><div class="flex items-center justify-between border-t px-5 py-4" data-v-bf1adfe7><div class="text-xs text-neutral-500" data-v-bf1adfe7>\u0418\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044F \u0441\u043E\u0445\u0440\u0430\u043D\u044F\u044E\u0442\u0441\u044F \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0438 (localStorage)</div><div class="flex gap-2" data-v-bf1adfe7><button class="rounded-xl border border-neutral-200 bg-white px-4 py-2 text-sm hover:bg-neutral-50" data-v-bf1adfe7> \u0417\u0430\u043A\u0440\u044B\u0442\u044C </button><button class="rounded-xl bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-500" data-v-bf1adfe7> \u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u0441\u0435\u0439\u0447\u0430\u0441 </button></div></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/kaiten/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-bf1adfe7"]]);

export { index as default };
//# sourceMappingURL=index-8sJ2jSOF.mjs.map
