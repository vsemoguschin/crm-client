import { _ as _sfc_main$4$1, a as _sfc_main$3$1, b as _sfc_main$o, c as _sfc_main$2$1, d as _sfc_main$1$1 } from './DialogContent-D_qM7mie.mjs';
import { _ as _sfc_main$p } from './DialogDescription-CL0TXbWH.mjs';
import { _ as _sfc_main$x } from './DialogFooter-DIBiHjDs.mjs';
import { _ as _sfc_main$q } from './Input-RlyYgX4o.mjs';
import { b as _sfc_main$7$1, c as _sfc_main$6$1, d as _sfc_main$5$1, f as _sfc_main$4$2, _ as _sfc_main$8$1, e as _sfc_main$y, g as _sfc_main$3$2, h as _sfc_main$1$3, i as _sfc_main$2$3, u as useAttachments } from './UserListItem-oJMTly4k.mjs';
import { defineComponent, computed, ref, reactive, watch, nextTick, mergeProps, withCtx, unref, createVNode, createTextVNode, toDisplayString, createBlock, openBlock, Fragment, renderList, isRef, createCommentVNode, withDirectives, vShow, renderSlot, mergeModels, useModel, withModifiers, withKeys, toValue, onScopeDispose, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderStyle, ssrRenderClass, ssrInterpolate, ssrRenderList, ssrRenderAttr, ssrGetDirectiveProps, ssrRenderSlot, ssrRenderAttrs, ssrIncludeBooleanAttr } from 'vue/server-renderer';
import { useForwardPropsEmits, DropdownMenuSub, useForwardProps, DropdownMenuSubTrigger, DropdownMenuSubContent } from 'radix-vue';
import { EllipsisVertical, X, ChevronRight, SearchIcon } from 'lucide-vue-next';
import { c as cn } from './utils-DuwrO1cI.mjs';
import { _ as _sfc_main$r } from './index-DjUwrDZ-.mjs';
import { _ as _sfc_main$2$2, a as _sfc_main$s, b as _sfc_main$1$2 } from './TabsList-BnKIeM8c.mjs';
import { _ as _sfc_main$u } from './TabsContent-CNnpw0A9.mjs';
import { _ as _sfc_main$t } from './Separator-DO9XrCC7.mjs';
import { _ as _sfc_main$v } from './Label-CKHHRe8Y.mjs';
import { _ as _sfc_main$z } from './ComboboxModels-CajELqKg.mjs';
import { b as useNuxtApp, c as useToast, a as useRouter, i as useRoute } from './server.mjs';
import { useFilter, useForwardPropsEmits as useForwardPropsEmits$1, ComboboxRoot, useForwardProps as useForwardProps$1, ComboboxAnchor, TagsInputRoot, TagsInputItem, TagsInputItemDelete, ComboboxInput, TagsInputInput, ComboboxPortal, ComboboxContent, ComboboxEmpty, ComboboxGroup, ComboboxLabel, ComboboxItem } from 'reka-ui';
import { useDebounceFn, reactiveOmit } from '@vueuse/core';
import { _ as _sfc_main$w } from './Textarea-hE0V8itU.mjs';
import { _ as _sfc_main$A } from './Switch-CYOXClXd.mjs';
import { _ as _sfc_main$6$2, a as _sfc_main$4$3, b as _sfc_main$5$2, c as _sfc_main$3$3, d as _sfc_main$2$4 } from './SelectScrollDownButton-D-BrOlTE.mjs';
import { _ as _sfc_main$B } from './SelectGroup-Bqr9JTPe.mjs';
import { _ as _sfc_main$2$5, a as _sfc_main$1$4, b as _sfc_main$C } from './PopoverContent-CfHqw7rH.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import { u as useAuthStore } from './auth-CDeEREL9.mjs';
import { I as getRequestURL } from '../nitro/nitro.mjs';

function useRequestEvent(nuxtApp) {
  var _a;
  nuxtApp || (nuxtApp = useNuxtApp());
  return (_a = nuxtApp.ssrContext) == null ? void 0 : _a.event;
}

function useRequestURL(opts) {
  {
    return getRequestURL(useRequestEvent(), opts);
  }
}
const _sfc_main$n = /* @__PURE__ */ defineComponent({
  __name: "DropdownMenuSub",
  __ssrInlineRender: true,
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean }
  },
  emits: ["update:open"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const forwarded = useForwardPropsEmits(props, emits);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(DropdownMenuSub), mergeProps(unref(forwarded), _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$n = _sfc_main$n.setup;
_sfc_main$n.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/dropdown-menu/DropdownMenuSub.vue");
  return _sfc_setup$n ? _sfc_setup$n(props, ctx) : void 0;
};
const _sfc_main$m = /* @__PURE__ */ defineComponent({
  __name: "DropdownMenuSubTrigger",
  __ssrInlineRender: true,
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(__props) {
    const props = __props;
    const delegatedProps = computed(() => {
      const { class: _, ...delegated } = props;
      return delegated;
    });
    const forwardedProps = useForwardProps(delegatedProps);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(DropdownMenuSubTrigger), mergeProps(unref(forwardedProps), {
        class: unref(cn)(
          "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-slate-100 data-[state=open]:bg-slate-100 dark:focus:bg-slate-800 dark:data-[state=open]:bg-slate-800",
          props.class
        )
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
            _push2(ssrRenderComponent(unref(ChevronRight), { class: "ml-auto h-4 w-4" }, null, _parent2, _scopeId));
          } else {
            return [
              renderSlot(_ctx.$slots, "default"),
              createVNode(unref(ChevronRight), { class: "ml-auto h-4 w-4" })
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$m = _sfc_main$m.setup;
_sfc_main$m.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/dropdown-menu/DropdownMenuSubTrigger.vue");
  return _sfc_setup$m ? _sfc_setup$m(props, ctx) : void 0;
};
const _sfc_main$l = /* @__PURE__ */ defineComponent({
  __name: "DropdownMenuSubContent",
  __ssrInlineRender: true,
  props: {
    forceMount: { type: Boolean },
    loop: { type: Boolean },
    sideOffset: {},
    alignOffset: {},
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: {},
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean },
    updatePositionStrategy: {},
    prioritizePosition: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "entryFocus", "openAutoFocus", "closeAutoFocus"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const delegatedProps = computed(() => {
      const { class: _, ...delegated } = props;
      return delegated;
    });
    const forwarded = useForwardPropsEmits(delegatedProps, emits);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(DropdownMenuSubContent), mergeProps(unref(forwarded), {
        class: unref(cn)(
          "z-50 min-w-32 overflow-hidden rounded-md border border-slate-200 bg-white p-1 text-slate-950 shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-50",
          props.class
        )
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$l = _sfc_main$l.setup;
_sfc_main$l.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/dropdown-menu/DropdownMenuSubContent.vue");
  return _sfc_setup$l ? _sfc_setup$l(props, ctx) : void 0;
};
function useTaskApi(taskId) {
  const { $api, $useApi } = useNuxtApp();
  function ensureId(idOverride) {
    const id = idOverride != null ? idOverride : taskId ? toValue(taskId) : void 0;
    if (!id) throw new Error("Task ID is required");
    return Number(id);
  }
  async function getTask(idOverride) {
    const id = ensureId(idOverride);
    const { data } = await $useApi.get(`tasks/${id}`);
    return data;
  }
  async function updateTask(payload, idOverride) {
    const id = ensureId(idOverride);
    return await $api.$patch(`tasks/${id}`, payload);
  }
  async function deleteTask(idOverride) {
    const id = ensureId(idOverride);
    return await $api.$del(`tasks/${id}`);
  }
  async function moveTask(payload, idOverride) {
    const id = ensureId(idOverride);
    return await $useApi.patch(`tasks/${id}/move`, payload);
  }
  async function copyToBoard(boardId, idOverride) {
    const id = ensureId(idOverride);
    const { data } = await $useApi.post(`/tasks/${id}/copy-to-board`, {
      boardId
    });
    return data;
  }
  async function moveToBoard(boardId, idOverride) {
    const id = ensureId(idOverride);
    const { data } = await $useApi.post(`/tasks/${id}/move-to-board`, {
      boardId
    });
    return data;
  }
  async function setArchived(archived, idOverride) {
    const id = ensureId(idOverride);
    return await $useApi.patch(`tasks/${id}/archived`, { archived });
  }
  async function setCover(path, idOverride) {
    const id = ensureId(idOverride);
    return await $useApi.patch(`/tasks/${id}/cover`, { path });
  }
  return {
    getTask,
    updateTask,
    deleteTask,
    moveTask,
    copyToBoard,
    moveToBoard,
    setArchived,
    setCover
  };
}
function useTaskMembers(taskId) {
  const { $useApi } = useNuxtApp();
  const members = ref([]);
  const loading = ref(false);
  const error = ref(null);
  const adding = ref({});
  const removing = ref({});
  let abort = null;
  async function refresh(opts) {
    const id = toValue(taskId);
    if (!id) return;
    abort == null ? void 0 : abort.abort();
    abort = new AbortController();
    const silent = !!(opts == null ? void 0 : opts.silent);
    if (!silent) {
      loading.value = true;
      error.value = null;
    }
    try {
      const { data } = await $useApi.get(`tasks/${id}/members`, {
        signal: abort.signal
      });
      members.value = Array.isArray(data) ? data : [];
    } catch (e) {
      if ((e == null ? void 0 : e.name) !== "AbortError") {
        if (!silent) {
          error.value = (e == null ? void 0 : e.message) || "\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u0443\u0447\u0430\u0441\u0442\u043D\u0438\u043A\u043E\u0432";
          members.value = [];
        }
      }
    } finally {
      if (!silent) loading.value = false;
    }
  }
  async function addMember(userId) {
    const id = toValue(taskId);
    if (!id || !userId) return;
    if (adding.value[userId]) return;
    adding.value = { ...adding.value, [userId]: true };
    if (members.value.some((m) => m.id === userId)) {
      adding.value = { ...adding.value, [userId]: false };
      return;
    }
    const rollback = [...members.value];
    members.value = [
      ...members.value,
      { id: userId, fullName: `#${userId}`, role: void 0 }
    ];
    try {
      await $useApi.post(`tasks/${id}/members/${userId}`);
      await refresh({ silent: true });
    } catch (e) {
      members.value = rollback;
      throw e;
    } finally {
      adding.value = { ...adding.value, [userId]: false };
    }
  }
  async function removeMember(userId) {
    const id = toValue(taskId);
    if (!id || !userId) return;
    if (removing.value[userId]) return;
    removing.value = { ...removing.value, [userId]: true };
    const rollback = [...members.value];
    members.value = members.value.filter((m) => m.id !== userId);
    try {
      await $useApi.delete(`tasks/${id}/members/${userId}`);
    } catch (e) {
      members.value = rollback;
      throw e;
    } finally {
      removing.value = { ...removing.value, [userId]: false };
    }
  }
  watch(
    () => toValue(taskId),
    () => {
      refresh();
    },
    { immediate: true }
  );
  onScopeDispose(() => abort == null ? void 0 : abort.abort());
  return {
    members,
    loading,
    error,
    refresh,
    addMember,
    removeMember,
    adding,
    removing
  };
}
const _sfc_main$k = /* @__PURE__ */ defineComponent({
  __name: "MembersPanel",
  __ssrInlineRender: true,
  props: {
    taskId: {},
    actions: { type: Boolean }
  },
  setup(__props) {
    const { $useApi } = useNuxtApp();
    const props = __props;
    const boardMembers = ref([]);
    const reactiveTaskId = computed(() => Number(props.taskId) || null);
    const {
      members,
      loading,
      error,
      removeMember,
      removing,
      addMember
    } = useTaskMembers(
      reactiveTaskId
      /*, { lazy: false }*/
    );
    function isRemoving(userId) {
      return !!removing.value[userId];
    }
    async function getAvaliableMembers() {
      try {
        const { data } = await $useApi.get(
          `tasks/${props.taskId}/avaliable-members`
        );
        boardMembers.value = data;
      } catch (e) {
        console.log(e);
      }
    }
    const comboKey = ref(0);
    async function handleSelectUser(userId) {
      await addMember(userId);
      comboKey.value++;
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_MyUserListItem = _sfc_main$y;
      const _component_UiButton = _sfc_main$r;
      const _component_MyComboboxModels = _sfc_main$z;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex items-center bg-neutral-600/50 p-2 rounded-sm gap-2 flex-wrap" }, _attrs))}>`);
      if (unref(loading)) {
        _push(`<div class="text-xs text-neutral-500"> \u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430 \u0443\u0447\u0430\u0441\u0442\u043D\u0438\u043A\u043E\u0432\u2026 </div>`);
      } else if (unref(error)) {
        _push(`<div class="text-xs text-red-500">${ssrInterpolate(unref(error))}</div>`);
      } else {
        _push(`<div class="flex gap-2 flex-wrap mt-2"><!--[-->`);
        ssrRenderList(unref(members), (m) => {
          var _a;
          _push(`<div class="relative"><div class="">`);
          _push(ssrRenderComponent(_component_MyUserListItem, {
            "full-name": m.fullName,
            "role-name": (_a = m.role) == null ? void 0 : _a.fullName,
            "avatar-url": m.avatarUrl,
            dark: true,
            hover: true,
            size: "lg"
          }, null, _parent));
          _push(`</div>`);
          if (_ctx.actions) {
            _push(`<div class="absolute -top-1 -right-1">`);
            _push(ssrRenderComponent(_component_UiButton, {
              size: "sm",
              variant: "outline",
              class: "bg-neutral-300/50 p-0 rounded-full h-4 w-4 flex items-center justify-center",
              disabled: isRemoving(m.id),
              onClick: ($event) => unref(removeMember)(m.id)
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(` X `);
                } else {
                  return [
                    createTextVNode(" X ")
                  ];
                }
              }),
              _: 2
            }, _parent));
            _push(`</div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div>`);
        });
        _push(`<!--]-->`);
        _push(ssrRenderComponent(_component_MyComboboxModels, {
          key: unref(comboKey),
          items: unref(boardMembers).map((u) => ({ value: u.id, label: u.fullName })),
          "button-class": "bg-neutral-700 border-neutral-400/50 text-neutral-300 hover:bg-neutral-600 hover:text-neutral-300 rounded-full h-10 w-10 p-0 flex items-center justify-center",
          "list-class": "bg-neutral-400 text-neutral-600",
          label: "+",
          onSelectedItem: (value) => handleSelectUser(value),
          onClick: getAvaliableMembers
        }, null, _parent));
        _push(`</div>`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$k = _sfc_main$k.setup;
_sfc_main$k.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/my/kanban/task/MembersPanel.vue");
  return _sfc_setup$k ? _sfc_setup$k(props, ctx) : void 0;
};
const _sfc_main$j = /* @__PURE__ */ defineComponent({
  __name: "move",
  __ssrInlineRender: true,
  props: {
    taskId: {},
    columnId: {},
    label: {},
    columns: {}
  },
  emits: ["update-task-column", "task-moved"],
  setup(__props, { emit: __emit }) {
    var _a;
    const { $useApi } = useNuxtApp();
    const props = __props;
    const columns = ref(
      ((_a = props.columns) == null ? void 0 : _a.length) ? props.columns.filter((c) => c.id !== props.columnId) : []
    );
    const emit = __emit;
    async function moveTask(taskId, toColumnId) {
      emit("update-task-column", { taskId, toColumnId });
    }
    const moveLoading = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_MyComboboxModels = _sfc_main$z;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex items-center w-full gap-1" }, _attrs))}><div class="w-full">`);
      _push(ssrRenderComponent(_component_MyComboboxModels, {
        items: unref(columns).map((u) => ({
          value: u.id,
          label: u.title
        })),
        class: "w-full grow overflow-hidden border-0",
        "button-class": "bg-neutral-700 border-neutral-400/50 text-neutral-300 hover:bg-neutral-600 hover:text-neutral-300",
        "list-class": "bg-neutral-400 text-neutral-600",
        label: _ctx.label || "?",
        onSelectedItem: (value) => moveTask(_ctx.taskId, value)
      }, null, _parent));
      _push(`</div>`);
      if (_ctx.label === "\u041F\u0435\u0440\u0435\u043C\u0435\u0441\u0442\u0438\u0442\u044C") {
        _push(`<button class="bg-neutral-700 w-10 p-1 cursor-pointer rounded-sm border-1 border-neutral-400/50 text-neutral-300 hover:bg-neutral-600 hover:text-neutral-300"${ssrIncludeBooleanAttr(unref(moveLoading)) ? " disabled" : ""} title="\u041F\u0435\u0440\u0435\u043C\u0435\u0441\u0442\u0438\u0442\u044C \u0432 \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0443\u044E \u043A\u043E\u043B\u043E\u043D\u043A\u0443"> \u279C </button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$j = _sfc_main$j.setup;
_sfc_main$j.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/my/kanban/task/move.vue");
  return _sfc_setup$j ? _sfc_setup$j(props, ctx) : void 0;
};
function useStyleFromText(text) {
  const str = (text || "").toLowerCase();
  if (str.toLowerCase() === "\u0443\u043B\u0438\u0446\u0430") {
    return {
      backgroundColor: `#FF6C00	`,
      // красноватый
      color: "#E3E3E3"
    };
  }
  if (str.toLowerCase() === "\u043E\u0447\u0435\u043D\u044C \u0441\u0440\u043E\u0447\u043D\u043E") {
    return {
      backgroundColor: `hsl(0deg 70% 50%)`,
      // красноватый
      color: "#E3E3E3"
    };
  }
  let hash = 5382;
  for (let i = 0; i < str.length; i++) {
    hash = (hash << 5) + hash + str.charCodeAt(i);
    hash |= 0;
  }
  const h = Math.abs(hash) % 360;
  const s = 40 + Math.abs(hash) % 30;
  const l = 40 + Math.abs(hash) % 10;
  return {
    backgroundColor: `hsl(${h}deg ${s}% ${l}%)`,
    color: "#FFFFFF"
  };
}
const _sfc_main$i = /* @__PURE__ */ defineComponent({
  __name: "Combobox",
  __ssrInlineRender: true,
  props: {
    open: { type: Boolean },
    defaultOpen: { type: Boolean },
    resetSearchTermOnBlur: { type: Boolean },
    resetSearchTermOnSelect: { type: Boolean },
    openOnFocus: { type: Boolean },
    openOnClick: { type: Boolean },
    ignoreFilter: { type: Boolean },
    modelValue: {},
    defaultValue: {},
    multiple: { type: Boolean },
    dir: {},
    disabled: { type: Boolean },
    highlightOnHover: { type: Boolean },
    by: { type: [String, Function] },
    asChild: { type: Boolean },
    as: {},
    name: {},
    required: { type: Boolean }
  },
  emits: ["update:modelValue", "highlight", "update:open"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const forwarded = useForwardPropsEmits$1(props, emits);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(ComboboxRoot), mergeProps({ "data-slot": "combobox" }, unref(forwarded), _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$i = _sfc_main$i.setup;
_sfc_main$i.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/combobox/Combobox.vue");
  return _sfc_setup$i ? _sfc_setup$i(props, ctx) : void 0;
};
const _sfc_main$h = /* @__PURE__ */ defineComponent({
  __name: "ComboboxAnchor",
  __ssrInlineRender: true,
  props: {
    reference: {},
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(__props) {
    const props = __props;
    const delegatedProps = reactiveOmit(props, "class");
    const forwarded = useForwardProps$1(delegatedProps);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(ComboboxAnchor), mergeProps({ "data-slot": "combobox-anchor" }, unref(forwarded), {
        class: unref(cn)("w-[200px]", props.class)
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$h = _sfc_main$h.setup;
_sfc_main$h.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/combobox/ComboboxAnchor.vue");
  return _sfc_setup$h ? _sfc_setup$h(props, ctx) : void 0;
};
const _sfc_main$g = /* @__PURE__ */ defineComponent({
  __name: "ComboboxEmpty",
  __ssrInlineRender: true,
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(__props) {
    const props = __props;
    const delegatedProps = reactiveOmit(props, "class");
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(ComboboxEmpty), mergeProps({ "data-slot": "combobox-empty" }, unref(delegatedProps), {
        class: unref(cn)("py-6 text-center text-sm", props.class)
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$g = _sfc_main$g.setup;
_sfc_main$g.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/combobox/ComboboxEmpty.vue");
  return _sfc_setup$g ? _sfc_setup$g(props, ctx) : void 0;
};
const _sfc_main$f = /* @__PURE__ */ defineComponent({
  __name: "ComboboxGroup",
  __ssrInlineRender: true,
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {},
    heading: {}
  },
  setup(__props) {
    const props = __props;
    const delegatedProps = reactiveOmit(props, "class");
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(ComboboxGroup), mergeProps({ "data-slot": "combobox-group" }, unref(delegatedProps), {
        class: unref(cn)("overflow-hidden p-1 text-foreground", props.class)
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (_ctx.heading) {
              _push2(ssrRenderComponent(unref(ComboboxLabel), { class: "px-2 py-1.5 text-xs font-medium text-muted-foreground" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(_ctx.heading)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(_ctx.heading), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              _ctx.heading ? (openBlock(), createBlock(unref(ComboboxLabel), {
                key: 0,
                class: "px-2 py-1.5 text-xs font-medium text-muted-foreground"
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(_ctx.heading), 1)
                ]),
                _: 1
              })) : createCommentVNode("", true),
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$f = _sfc_main$f.setup;
_sfc_main$f.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/combobox/ComboboxGroup.vue");
  return _sfc_setup$f ? _sfc_setup$f(props, ctx) : void 0;
};
const _sfc_main$e = /* @__PURE__ */ defineComponent({
  ...{
    inheritAttrs: false
  },
  __name: "ComboboxInput",
  __ssrInlineRender: true,
  props: {
    displayValue: { type: Function },
    modelValue: {},
    autoFocus: { type: Boolean },
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const delegatedProps = reactiveOmit(props, "class");
    const forwarded = useForwardPropsEmits$1(delegatedProps, emits);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        "data-slot": "command-input-wrapper",
        class: "flex h-9 items-center gap-2 border-b px-3 w-full"
      }, _attrs))}>`);
      _push(ssrRenderComponent(unref(SearchIcon), { class: "size-4 shrink-0 opacity-50" }, null, _parent));
      _push(ssrRenderComponent(unref(ComboboxInput), mergeProps({
        "data-slot": "command-input",
        class: unref(cn)(
          "placeholder:text-muted-foreground flex h-10 w-full rounded-md bg-transparent py-2 text-sm outline-hidden disabled:cursor-not-allowed disabled:opacity-50",
          props.class
        )
      }, { ...unref(forwarded), ..._ctx.$attrs }), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$e = _sfc_main$e.setup;
_sfc_main$e.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/combobox/ComboboxInput.vue");
  return _sfc_setup$e ? _sfc_setup$e(props, ctx) : void 0;
};
const _sfc_main$d = /* @__PURE__ */ defineComponent({
  __name: "ComboboxItem",
  __ssrInlineRender: true,
  props: {
    textValue: {},
    value: {},
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  emits: ["select"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const delegatedProps = reactiveOmit(props, "class");
    const forwarded = useForwardPropsEmits$1(delegatedProps, emits);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(ComboboxItem), mergeProps({ "data-slot": "combobox-item" }, unref(forwarded), {
        class: unref(cn)(`data-[highlighted]:bg-accent data-[highlighted]:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4`, props.class)
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/combobox/ComboboxItem.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};
const _sfc_main$c = /* @__PURE__ */ defineComponent({
  __name: "ComboboxList",
  __ssrInlineRender: true,
  props: {
    forceMount: { type: Boolean },
    position: { default: "popper" },
    bodyLock: { type: Boolean },
    side: {},
    sideOffset: { default: 4 },
    sideFlip: { type: Boolean },
    align: { default: "center" },
    alignOffset: {},
    alignFlip: { type: Boolean },
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: {},
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean },
    positionStrategy: {},
    updatePositionStrategy: {},
    disableUpdateOnLayoutShift: { type: Boolean },
    prioritizePosition: { type: Boolean },
    reference: {},
    asChild: { type: Boolean },
    as: {},
    disableOutsidePointerEvents: { type: Boolean },
    class: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const delegatedProps = reactiveOmit(props, "class");
    const forwarded = useForwardPropsEmits$1(delegatedProps, emits);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(ComboboxPortal), _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(ComboboxContent), mergeProps({ "data-slot": "combobox-list" }, unref(forwarded), {
              class: unref(cn)("z-50 w-[200px] rounded-md border bg-popover text-popover-foreground origin-(--reka-combobox-content-transform-origin) overflow-hidden shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", props.class)
            }), {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push3, _parent3, _scopeId2);
                } else {
                  return [
                    renderSlot(_ctx.$slots, "default")
                  ];
                }
              }),
              _: 3
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(ComboboxContent), mergeProps({ "data-slot": "combobox-list" }, unref(forwarded), {
                class: unref(cn)("z-50 w-[200px] rounded-md border bg-popover text-popover-foreground origin-(--reka-combobox-content-transform-origin) overflow-hidden shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", props.class)
              }), {
                default: withCtx(() => [
                  renderSlot(_ctx.$slots, "default")
                ]),
                _: 3
              }, 16, ["class"])
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/combobox/ComboboxList.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const _sfc_main$b = /* @__PURE__ */ defineComponent({
  __name: "TagsInput",
  __ssrInlineRender: true,
  props: {
    modelValue: {},
    defaultValue: {},
    addOnPaste: { type: Boolean },
    addOnTab: { type: Boolean },
    addOnBlur: { type: Boolean },
    duplicate: { type: Boolean },
    disabled: { type: Boolean },
    delimiter: {},
    dir: {},
    max: {},
    id: {},
    convertValue: { type: Function },
    displayValue: { type: Function },
    asChild: { type: Boolean },
    as: {},
    name: {},
    required: { type: Boolean },
    class: {}
  },
  emits: ["update:modelValue", "invalid", "addTag", "removeTag"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const delegatedProps = reactiveOmit(props, "class");
    const forwarded = useForwardPropsEmits$1(delegatedProps, emits);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(TagsInputRoot), mergeProps(unref(forwarded), {
        class: unref(cn)("flex flex-col gap-2 items-start rounded-md border border-input bg-background px-3 py-1.5 text-sm", props.class)
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/tags-input/TagsInput.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const _sfc_main$a = /* @__PURE__ */ defineComponent({
  __name: "TagsInputInput",
  __ssrInlineRender: true,
  props: {
    placeholder: {},
    autoFocus: { type: Boolean },
    maxLength: {},
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(__props) {
    const props = __props;
    const delegatedProps = reactiveOmit(props, "class");
    const forwardedProps = useForwardProps$1(delegatedProps);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(TagsInputInput), mergeProps(unref(forwardedProps), {
        class: unref(cn)("text-sm min-h-5 focus:outline-none flex-1 bg-transparent px-1", props.class)
      }, _attrs), null, _parent));
    };
  }
});
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/tags-input/TagsInputInput.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  __name: "TagsInputItem",
  __ssrInlineRender: true,
  props: {
    value: {},
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(__props) {
    const props = __props;
    const delegatedProps = reactiveOmit(props, "class");
    const forwardedProps = useForwardProps$1(delegatedProps);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(TagsInputItem), mergeProps(unref(forwardedProps), {
        class: unref(cn)("flex h-5 items-center rounded-md bg-secondary data-[state=active]:ring-ring data-[state=active]:ring-2 data-[state=active]:ring-offset-2 ring-offset-background", props.class)
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/tags-input/TagsInputItem.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "TagsInputItemDelete",
  __ssrInlineRender: true,
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(__props) {
    const props = __props;
    const delegatedProps = reactiveOmit(props, "class");
    const forwardedProps = useForwardProps$1(delegatedProps);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(TagsInputItemDelete), mergeProps(unref(forwardedProps), {
        class: unref(cn)("flex rounded bg-transparent mr-1", props.class)
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, () => {
              _push2(ssrRenderComponent(unref(X), { class: "w-4 h-4" }, null, _parent2, _scopeId));
            }, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default", {}, () => [
                createVNode(unref(X), { class: "w-4 h-4" })
              ])
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/tags-input/TagsInputItemDelete.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "TagsInput",
  __ssrInlineRender: true,
  props: /* @__PURE__ */ mergeModels({
    boardId: {},
    taskId: {},
    initialSelected: {}
  }, {
    "modelValue": { default: [] },
    "modelModifiers": {}
  }),
  emits: /* @__PURE__ */ mergeModels(["update"], ["update:modelValue"]),
  setup(__props, { emit: __emit }) {
    const { $api } = useNuxtApp();
    const emit = __emit;
    const selected = useModel(__props, "modelValue");
    const props = __props;
    const allTags = ref([]);
    const open = ref(false);
    const searchTerm = ref("");
    const isLoading = ref(false);
    const loadError = ref(null);
    const newTagName = ref("");
    const isCreatingTag = ref(false);
    const createError = ref(null);
    const { contains } = useFilter({ sensitivity: "base" });
    const selectedIds = computed({
      get() {
        return selected.value.map((t) => String(t.id));
      },
      set(ids) {
        const dict = new Map(allTags.value.map((t) => [t.value, t.label]));
        selected.value = ids.map((idStr) => {
          var _a;
          const id = Number(idStr);
          return { id, name: (_a = dict.get(id)) != null ? _a : idStr };
        });
      }
    });
    const filteredTags = computed(() => {
      const chosen = new Set(selectedIds.value);
      const options = allTags.value.filter((t) => !chosen.has(String(t.value)));
      return searchTerm.value ? options.filter((opt) => contains(opt.label, searchTerm.value)) : options;
    });
    function openList() {
      open.value = true;
    }
    const labelById = (idStr) => {
      var _a, _b;
      const id = Number(idStr);
      return (_b = (_a = allTags.value.find((t) => t.value === id)) == null ? void 0 : _a.label) != null ? _b : idStr;
    };
    async function saveTaskTags() {
      try {
        await $api.$post(`tasks/${props.taskId}/tags`, {
          tags: selected.value.map((t) => t.name)
        });
        emit("update", selected.value);
      } catch (e) {
        console.error("Failed to save task tags", e);
      }
    }
    function handleSelect(ev) {
      var _a;
      const idStr = (_a = ev == null ? void 0 : ev.detail) == null ? void 0 : _a.value;
      if (!idStr) return;
      if (!selectedIds.value.includes(idStr)) {
        selectedIds.value = [...selectedIds.value, idStr];
      }
      searchTerm.value = "";
      if (filteredTags.value.length === 0) open.value = false;
    }
    async function handleChipDelete(idStr) {
      selectedIds.value = selectedIds.value.filter((v) => v !== idStr);
    }
    async function createTag() {
      var _a, _b, _c, _d, _e, _f;
      const name = newTagName.value.trim();
      if (!name) return;
      try {
        isCreatingTag.value = true;
        createError.value = null;
        const created = (_b = await ((_a = $api == null ? void 0 : $api.$post) == null ? void 0 : _a.call($api, `boards/${props.boardId}/tags`, {
          name
        }))) != null ? _b : await $api.$post(`boards/${props.boardId}/tags`, { name });
        const dto = (_c = created == null ? void 0 : created.data) != null ? _c : created;
        const id = Number(dto == null ? void 0 : dto.id);
        const label = String((_d = dto == null ? void 0 : dto.name) != null ? _d : name);
        if (Number.isFinite(id) && !allTags.value.some((t) => t.value === id)) {
          allTags.value.push({ value: id, label });
        }
        if (Number.isFinite(id) && !selectedIds.value.includes(String(id))) {
          selectedIds.value = [...selectedIds.value, String(id)];
        }
        newTagName.value = "";
        open.value = false;
      } catch (e) {
        createError.value = ((_f = (_e = e == null ? void 0 : e.response) == null ? void 0 : _e.data) == null ? void 0 : _f.message) || (e == null ? void 0 : e.message) || "\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0441\u043E\u0437\u0434\u0430\u0442\u044C \u043C\u0435\u0442\u043A\u0443";
      } finally {
        isCreatingTag.value = false;
      }
    }
    const isReady = ref(false);
    const saveTagsDebounced = useDebounceFn(() => saveTaskTags(), 200);
    watch(selectedIds, () => {
      if (!isReady.value) return;
      saveTagsDebounced();
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiInput = _sfc_main$q;
      const _component_UiButton = _sfc_main$r;
      const _component_UiScrollArea = _sfc_main$8$1;
      _push(ssrRenderComponent(unref(_sfc_main$i), mergeProps({
        modelValue: selectedIds.value,
        "onUpdate:modelValue": ($event) => selectedIds.value = $event,
        open: open.value,
        "onUpdate:open": ($event) => open.value = $event,
        "ignore-filter": true
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(_sfc_main$h), { "as-child": "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(_sfc_main$b), {
                    modelValue: selectedIds.value,
                    "onUpdate:modelValue": ($event) => selectedIds.value = $event,
                    class: "px-2 pt-3 gap-2 w-full bg-neutral-700 text-neutral-300 border-neutral-500/50",
                    onClick: openList
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="flex gap-2 flex-wrap items-center"${_scopeId3}><!--[-->`);
                        ssrRenderList(selectedIds.value, (id) => {
                          _push4(ssrRenderComponent(unref(_sfc_main$9), {
                            key: id,
                            value: id,
                            class: "text-neutral-600 bg-neutral-300 ",
                            style: ("useStyleFromText" in _ctx ? _ctx.useStyleFromText : unref(useStyleFromText))(labelById(id)),
                            onKeydown: () => {
                            }
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<span class="px-1 text-sm"${_scopeId4}>${ssrInterpolate(labelById(id))}</span>`);
                                _push5(ssrRenderComponent(unref(_sfc_main$8), {
                                  onClick: ($event) => handleChipDelete(id)
                                }, null, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode("span", { class: "px-1 text-sm" }, toDisplayString(labelById(id)), 1),
                                  createVNode(unref(_sfc_main$8), {
                                    onClick: withModifiers(($event) => handleChipDelete(id), ["prevent", "stop"])
                                  }, null, 8, ["onClick"])
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        });
                        _push4(`<!--]--></div>`);
                        _push4(ssrRenderComponent(unref(_sfc_main$e), {
                          modelValue: searchTerm.value,
                          "onUpdate:modelValue": ($event) => searchTerm.value = $event,
                          "as-child": ""
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(unref(_sfc_main$a), {
                                placeholder: "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C...",
                                class: "w-full flex p-0 border-none focus-visible:ring-0 h-auto placeholder:text-neutral-500 bg-neutral-700 text-neutral-300 border-neutral-500/50",
                                onKeydown: () => {
                                },
                                onClick: openList
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(unref(_sfc_main$a), {
                                  placeholder: "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C...",
                                  class: "w-full flex p-0 border-none focus-visible:ring-0 h-auto placeholder:text-neutral-500 bg-neutral-700 text-neutral-300 border-neutral-500/50",
                                  onKeydown: withKeys(withModifiers(() => {
                                  }, ["prevent"]), ["enter"]),
                                  onClick: openList
                                }, null, 8, ["onKeydown"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("div", { class: "flex gap-2 flex-wrap items-center" }, [
                            (openBlock(true), createBlock(Fragment, null, renderList(selectedIds.value, (id) => {
                              return openBlock(), createBlock(unref(_sfc_main$9), {
                                key: id,
                                value: id,
                                class: "text-neutral-600 bg-neutral-300 ",
                                style: ("useStyleFromText" in _ctx ? _ctx.useStyleFromText : unref(useStyleFromText))(labelById(id)),
                                onKeydown: withModifiers(() => {
                                }, ["stop"])
                              }, {
                                default: withCtx(() => [
                                  createVNode("span", { class: "px-1 text-sm" }, toDisplayString(labelById(id)), 1),
                                  createVNode(unref(_sfc_main$8), {
                                    onClick: withModifiers(($event) => handleChipDelete(id), ["prevent", "stop"])
                                  }, null, 8, ["onClick"])
                                ]),
                                _: 2
                              }, 1032, ["value", "style", "onKeydown"]);
                            }), 128))
                          ]),
                          createVNode(unref(_sfc_main$e), {
                            modelValue: searchTerm.value,
                            "onUpdate:modelValue": ($event) => searchTerm.value = $event,
                            "as-child": ""
                          }, {
                            default: withCtx(() => [
                              createVNode(unref(_sfc_main$a), {
                                placeholder: "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C...",
                                class: "w-full flex p-0 border-none focus-visible:ring-0 h-auto placeholder:text-neutral-500 bg-neutral-700 text-neutral-300 border-neutral-500/50",
                                onKeydown: withKeys(withModifiers(() => {
                                }, ["prevent"]), ["enter"]),
                                onClick: openList
                              }, null, 8, ["onKeydown"])
                            ]),
                            _: 1
                          }, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(_sfc_main$c), { class: "w-full border-neutral-500/50 bg-neutral-700 text-neutral-300" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(_sfc_main$g), null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              if (isLoading.value) {
                                _push5(`<span${_scopeId4}>\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430\u2026</span>`);
                              } else if (loadError.value) {
                                _push5(`<span${_scopeId4}>${ssrInterpolate(loadError.value)}</span>`);
                              } else {
                                _push5(`<span${_scopeId4}>\u041D\u0438\u0447\u0435\u0433\u043E \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u043E</span>`);
                              }
                            } else {
                              return [
                                isLoading.value ? (openBlock(), createBlock("span", { key: 0 }, "\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430\u2026")) : loadError.value ? (openBlock(), createBlock("span", { key: 1 }, toDisplayString(loadError.value), 1)) : (openBlock(), createBlock("span", { key: 2 }, "\u041D\u0438\u0447\u0435\u0433\u043E \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u043E"))
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`<div class="flex items-center gap-2 p-2"${_scopeId3}>`);
                        _push4(ssrRenderComponent(_component_UiInput, {
                          modelValue: newTagName.value,
                          "onUpdate:modelValue": ($event) => newTagName.value = $event,
                          placeholder: "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u043C\u0435\u0442\u043A\u0438",
                          class: "bg-neutral-700 text-neutral-300 border-neutral-500/50 placeholder:text-neutral-500",
                          onKeydown: createTag
                        }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_UiButton, {
                          class: "text-neutral-300 bg-neutral-600 hover:bg-neutral-600/50",
                          disabled: !newTagName.value.trim() || isCreatingTag.value,
                          onClick: createTag
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`${ssrInterpolate(isCreatingTag.value ? "\u0421\u043E\u0437\u0434\u0430\u0451\u043C\u2026" : "\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u043D\u043E\u0432\u044B\u0439")}`);
                            } else {
                              return [
                                createTextVNode(toDisplayString(isCreatingTag.value ? "\u0421\u043E\u0437\u0434\u0430\u0451\u043C\u2026" : "\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u043D\u043E\u0432\u044B\u0439"), 1)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`</div>`);
                        _push4(ssrRenderComponent(_component_UiScrollArea, { class: "h-[300px]" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              if (filteredTags.value.length) {
                                _push5(ssrRenderComponent(unref(_sfc_main$f), null, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`<!--[-->`);
                                      ssrRenderList(filteredTags.value, (t) => {
                                        _push6(ssrRenderComponent(unref(_sfc_main$d), {
                                          key: t.value,
                                          value: t.value,
                                          class: "text-neutral-300",
                                          onSelect: handleSelect
                                        }, {
                                          default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                            if (_push7) {
                                              _push7(`${ssrInterpolate(t.label)}`);
                                            } else {
                                              return [
                                                createTextVNode(toDisplayString(t.label), 1)
                                              ];
                                            }
                                          }),
                                          _: 2
                                        }, _parent6, _scopeId5));
                                      });
                                      _push6(`<!--]-->`);
                                    } else {
                                      return [
                                        (openBlock(true), createBlock(Fragment, null, renderList(filteredTags.value, (t) => {
                                          return openBlock(), createBlock(unref(_sfc_main$d), {
                                            key: t.value,
                                            value: t.value,
                                            class: "text-neutral-300",
                                            onSelect: withModifiers(handleSelect, ["prevent"])
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(t.label), 1)
                                            ]),
                                            _: 2
                                          }, 1032, ["value"]);
                                        }), 128))
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                              } else {
                                _push5(`<!---->`);
                              }
                            } else {
                              return [
                                filteredTags.value.length ? (openBlock(), createBlock(unref(_sfc_main$f), { key: 0 }, {
                                  default: withCtx(() => [
                                    (openBlock(true), createBlock(Fragment, null, renderList(filteredTags.value, (t) => {
                                      return openBlock(), createBlock(unref(_sfc_main$d), {
                                        key: t.value,
                                        value: t.value,
                                        class: "text-neutral-300",
                                        onSelect: withModifiers(handleSelect, ["prevent"])
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(t.label), 1)
                                        ]),
                                        _: 2
                                      }, 1032, ["value"]);
                                    }), 128))
                                  ]),
                                  _: 1
                                })) : createCommentVNode("", true)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(_sfc_main$g), null, {
                            default: withCtx(() => [
                              isLoading.value ? (openBlock(), createBlock("span", { key: 0 }, "\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430\u2026")) : loadError.value ? (openBlock(), createBlock("span", { key: 1 }, toDisplayString(loadError.value), 1)) : (openBlock(), createBlock("span", { key: 2 }, "\u041D\u0438\u0447\u0435\u0433\u043E \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u043E"))
                            ]),
                            _: 1
                          }),
                          createVNode("div", { class: "flex items-center gap-2 p-2" }, [
                            createVNode(_component_UiInput, {
                              modelValue: newTagName.value,
                              "onUpdate:modelValue": ($event) => newTagName.value = $event,
                              placeholder: "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u043C\u0435\u0442\u043A\u0438",
                              class: "bg-neutral-700 text-neutral-300 border-neutral-500/50 placeholder:text-neutral-500",
                              onKeydown: withKeys(withModifiers(createTag, ["prevent"]), ["enter"])
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "onKeydown"]),
                            createVNode(_component_UiButton, {
                              class: "text-neutral-300 bg-neutral-600 hover:bg-neutral-600/50",
                              disabled: !newTagName.value.trim() || isCreatingTag.value,
                              onClick: createTag
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(isCreatingTag.value ? "\u0421\u043E\u0437\u0434\u0430\u0451\u043C\u2026" : "\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u043D\u043E\u0432\u044B\u0439"), 1)
                              ]),
                              _: 1
                            }, 8, ["disabled"])
                          ]),
                          createVNode(_component_UiScrollArea, { class: "h-[300px]" }, {
                            default: withCtx(() => [
                              filteredTags.value.length ? (openBlock(), createBlock(unref(_sfc_main$f), { key: 0 }, {
                                default: withCtx(() => [
                                  (openBlock(true), createBlock(Fragment, null, renderList(filteredTags.value, (t) => {
                                    return openBlock(), createBlock(unref(_sfc_main$d), {
                                      key: t.value,
                                      value: t.value,
                                      class: "text-neutral-300",
                                      onSelect: withModifiers(handleSelect, ["prevent"])
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(t.label), 1)
                                      ]),
                                      _: 2
                                    }, 1032, ["value"]);
                                  }), 128))
                                ]),
                                _: 1
                              })) : createCommentVNode("", true)
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(_sfc_main$b), {
                      modelValue: selectedIds.value,
                      "onUpdate:modelValue": ($event) => selectedIds.value = $event,
                      class: "px-2 pt-3 gap-2 w-full bg-neutral-700 text-neutral-300 border-neutral-500/50",
                      onClick: openList
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "flex gap-2 flex-wrap items-center" }, [
                          (openBlock(true), createBlock(Fragment, null, renderList(selectedIds.value, (id) => {
                            return openBlock(), createBlock(unref(_sfc_main$9), {
                              key: id,
                              value: id,
                              class: "text-neutral-600 bg-neutral-300 ",
                              style: ("useStyleFromText" in _ctx ? _ctx.useStyleFromText : unref(useStyleFromText))(labelById(id)),
                              onKeydown: withModifiers(() => {
                              }, ["stop"])
                            }, {
                              default: withCtx(() => [
                                createVNode("span", { class: "px-1 text-sm" }, toDisplayString(labelById(id)), 1),
                                createVNode(unref(_sfc_main$8), {
                                  onClick: withModifiers(($event) => handleChipDelete(id), ["prevent", "stop"])
                                }, null, 8, ["onClick"])
                              ]),
                              _: 2
                            }, 1032, ["value", "style", "onKeydown"]);
                          }), 128))
                        ]),
                        createVNode(unref(_sfc_main$e), {
                          modelValue: searchTerm.value,
                          "onUpdate:modelValue": ($event) => searchTerm.value = $event,
                          "as-child": ""
                        }, {
                          default: withCtx(() => [
                            createVNode(unref(_sfc_main$a), {
                              placeholder: "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C...",
                              class: "w-full flex p-0 border-none focus-visible:ring-0 h-auto placeholder:text-neutral-500 bg-neutral-700 text-neutral-300 border-neutral-500/50",
                              onKeydown: withKeys(withModifiers(() => {
                              }, ["prevent"]), ["enter"]),
                              onClick: openList
                            }, null, 8, ["onKeydown"])
                          ]),
                          _: 1
                        }, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }, 8, ["modelValue", "onUpdate:modelValue"]),
                    createVNode(unref(_sfc_main$c), { class: "w-full border-neutral-500/50 bg-neutral-700 text-neutral-300" }, {
                      default: withCtx(() => [
                        createVNode(unref(_sfc_main$g), null, {
                          default: withCtx(() => [
                            isLoading.value ? (openBlock(), createBlock("span", { key: 0 }, "\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430\u2026")) : loadError.value ? (openBlock(), createBlock("span", { key: 1 }, toDisplayString(loadError.value), 1)) : (openBlock(), createBlock("span", { key: 2 }, "\u041D\u0438\u0447\u0435\u0433\u043E \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u043E"))
                          ]),
                          _: 1
                        }),
                        createVNode("div", { class: "flex items-center gap-2 p-2" }, [
                          createVNode(_component_UiInput, {
                            modelValue: newTagName.value,
                            "onUpdate:modelValue": ($event) => newTagName.value = $event,
                            placeholder: "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u043C\u0435\u0442\u043A\u0438",
                            class: "bg-neutral-700 text-neutral-300 border-neutral-500/50 placeholder:text-neutral-500",
                            onKeydown: withKeys(withModifiers(createTag, ["prevent"]), ["enter"])
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "onKeydown"]),
                          createVNode(_component_UiButton, {
                            class: "text-neutral-300 bg-neutral-600 hover:bg-neutral-600/50",
                            disabled: !newTagName.value.trim() || isCreatingTag.value,
                            onClick: createTag
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(isCreatingTag.value ? "\u0421\u043E\u0437\u0434\u0430\u0451\u043C\u2026" : "\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u043D\u043E\u0432\u044B\u0439"), 1)
                            ]),
                            _: 1
                          }, 8, ["disabled"])
                        ]),
                        createVNode(_component_UiScrollArea, { class: "h-[300px]" }, {
                          default: withCtx(() => [
                            filteredTags.value.length ? (openBlock(), createBlock(unref(_sfc_main$f), { key: 0 }, {
                              default: withCtx(() => [
                                (openBlock(true), createBlock(Fragment, null, renderList(filteredTags.value, (t) => {
                                  return openBlock(), createBlock(unref(_sfc_main$d), {
                                    key: t.value,
                                    value: t.value,
                                    class: "text-neutral-300",
                                    onSelect: withModifiers(handleSelect, ["prevent"])
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(t.label), 1)
                                    ]),
                                    _: 2
                                  }, 1032, ["value"]);
                                }), 128))
                              ]),
                              _: 1
                            })) : createCommentVNode("", true)
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(_sfc_main$h), { "as-child": "" }, {
                default: withCtx(() => [
                  createVNode(unref(_sfc_main$b), {
                    modelValue: selectedIds.value,
                    "onUpdate:modelValue": ($event) => selectedIds.value = $event,
                    class: "px-2 pt-3 gap-2 w-full bg-neutral-700 text-neutral-300 border-neutral-500/50",
                    onClick: openList
                  }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "flex gap-2 flex-wrap items-center" }, [
                        (openBlock(true), createBlock(Fragment, null, renderList(selectedIds.value, (id) => {
                          return openBlock(), createBlock(unref(_sfc_main$9), {
                            key: id,
                            value: id,
                            class: "text-neutral-600 bg-neutral-300 ",
                            style: ("useStyleFromText" in _ctx ? _ctx.useStyleFromText : unref(useStyleFromText))(labelById(id)),
                            onKeydown: withModifiers(() => {
                            }, ["stop"])
                          }, {
                            default: withCtx(() => [
                              createVNode("span", { class: "px-1 text-sm" }, toDisplayString(labelById(id)), 1),
                              createVNode(unref(_sfc_main$8), {
                                onClick: withModifiers(($event) => handleChipDelete(id), ["prevent", "stop"])
                              }, null, 8, ["onClick"])
                            ]),
                            _: 2
                          }, 1032, ["value", "style", "onKeydown"]);
                        }), 128))
                      ]),
                      createVNode(unref(_sfc_main$e), {
                        modelValue: searchTerm.value,
                        "onUpdate:modelValue": ($event) => searchTerm.value = $event,
                        "as-child": ""
                      }, {
                        default: withCtx(() => [
                          createVNode(unref(_sfc_main$a), {
                            placeholder: "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C...",
                            class: "w-full flex p-0 border-none focus-visible:ring-0 h-auto placeholder:text-neutral-500 bg-neutral-700 text-neutral-300 border-neutral-500/50",
                            onKeydown: withKeys(withModifiers(() => {
                            }, ["prevent"]), ["enter"]),
                            onClick: openList
                          }, null, 8, ["onKeydown"])
                        ]),
                        _: 1
                      }, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(unref(_sfc_main$c), { class: "w-full border-neutral-500/50 bg-neutral-700 text-neutral-300" }, {
                    default: withCtx(() => [
                      createVNode(unref(_sfc_main$g), null, {
                        default: withCtx(() => [
                          isLoading.value ? (openBlock(), createBlock("span", { key: 0 }, "\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430\u2026")) : loadError.value ? (openBlock(), createBlock("span", { key: 1 }, toDisplayString(loadError.value), 1)) : (openBlock(), createBlock("span", { key: 2 }, "\u041D\u0438\u0447\u0435\u0433\u043E \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u043E"))
                        ]),
                        _: 1
                      }),
                      createVNode("div", { class: "flex items-center gap-2 p-2" }, [
                        createVNode(_component_UiInput, {
                          modelValue: newTagName.value,
                          "onUpdate:modelValue": ($event) => newTagName.value = $event,
                          placeholder: "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u043C\u0435\u0442\u043A\u0438",
                          class: "bg-neutral-700 text-neutral-300 border-neutral-500/50 placeholder:text-neutral-500",
                          onKeydown: withKeys(withModifiers(createTag, ["prevent"]), ["enter"])
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "onKeydown"]),
                        createVNode(_component_UiButton, {
                          class: "text-neutral-300 bg-neutral-600 hover:bg-neutral-600/50",
                          disabled: !newTagName.value.trim() || isCreatingTag.value,
                          onClick: createTag
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(isCreatingTag.value ? "\u0421\u043E\u0437\u0434\u0430\u0451\u043C\u2026" : "\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u043D\u043E\u0432\u044B\u0439"), 1)
                          ]),
                          _: 1
                        }, 8, ["disabled"])
                      ]),
                      createVNode(_component_UiScrollArea, { class: "h-[300px]" }, {
                        default: withCtx(() => [
                          filteredTags.value.length ? (openBlock(), createBlock(unref(_sfc_main$f), { key: 0 }, {
                            default: withCtx(() => [
                              (openBlock(true), createBlock(Fragment, null, renderList(filteredTags.value, (t) => {
                                return openBlock(), createBlock(unref(_sfc_main$d), {
                                  key: t.value,
                                  value: t.value,
                                  class: "text-neutral-300",
                                  onSelect: withModifiers(handleSelect, ["prevent"])
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(t.label), 1)
                                  ]),
                                  _: 2
                                }, 1032, ["value"]);
                              }), 128))
                            ]),
                            _: 1
                          })) : createCommentVNode("", true)
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
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
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/my/kanban/TagsInput.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "TaskOrder",
  __ssrInlineRender: true,
  props: {
    taskId: {}
  },
  setup(__props, { expose: __expose }) {
    const { $api } = useNuxtApp();
    const props = __props;
    const holeTypes = ["6\u043C\u043C", "9\u043C\u043C", "\u041D\u0435\u0442"];
    const adapters = ["\u041F\u043E\u043C\u0435\u0449\u0435\u043D\u0438\u0435", "\u0423\u043B\u0438\u0447\u043D\u044B\u0439", "\u041D\u0435\u0442"];
    const types = ["\u041F\u043E\u043C\u0435\u0449\u0435\u043D\u0438\u0435", "\u0423\u043B\u0438\u0446\u0430"];
    const fittings = [
      "\u0414\u0435\u0440\u0436\u0430\u0442\u0435\u043B\u0438 \u0441\u0442\u0430\u043B\u044C\u043D\u044B\u0435",
      "\u0414\u0435\u0440\u0436\u0430\u0442\u0435\u043B\u0438 \u0437\u043E\u043B\u043E\u0442\u044B\u0435",
      "\u0414\u0435\u0440\u0436\u0430\u0442\u0435\u043B\u0438 \u0447\u0435\u0440\u043D\u044B\u0435",
      "\u041A\u0440\u0435\u043F\u043B\u0435\u043D\u0438\u044F \u0434\u043B\u044F \u043E\u043A\u043D\u0430",
      "\u0428\u0443\u0440\u0443\u043F + \u0434\u044E\u0431\u0435\u043B\u044C",
      "\u041F\u0440\u0438\u0441\u043E\u0441\u043A\u0438",
      "\u041D\u0435\u0442"
    ];
    const neonColors = [
      "\u043A\u0440\u0430\u0441\u043D\u044B\u0439",
      "\u0441\u0438\u043D\u0438\u0439",
      "\u0433\u043E\u043B\u0443\u0431\u043E\u0439",
      "\u043E\u0440\u0430\u043D\u0436\u0435\u0432\u044B\u0439",
      "\u0444\u0438\u043E\u043B\u0435\u0442\u043E\u0432\u044B\u0439",
      "\u0440\u043E\u0437\u043E\u0432\u044B\u0439",
      "\u0431\u0438\u0440\u044E\u0437\u043E\u0432\u044B\u0439",
      "\u0436\u0435\u043B\u0442\u044B\u0439",
      "\u0437\u0435\u043B\u0435\u043D\u044B\u0439",
      "\u0445\u043E\u043B\u043E\u0434\u043D\u044B\u0439 \u0431\u0435\u043B\u044B\u0439",
      "\u0442\u0435\u043F\u043B\u044B\u0439 \u0431\u0435\u043B\u044B\u0439",
      "\u0441\u043C\u0430\u0440\u0442",
      "rgb"
    ];
    const neonWidths = ["6\u043C\u043C", "8\u043C\u043C"];
    reactive({
      title: "",
      deadline: "",
      material: "",
      boardWidth: 0,
      boardHeight: 0,
      holeType: "",
      stand: false,
      laminate: "",
      print: false,
      printQuality: false,
      acrylic: "\u041D\u0435\u0442",
      type: "",
      wireLength: "",
      elements: 0,
      gift: false,
      adapter: "",
      plug: "",
      switch: true,
      fitting: "",
      dimmer: false,
      giftPack: false,
      description: "",
      neons: [],
      lightings: [],
      docs: false
    });
    const currentOrderId = ref(null);
    const allOrders = ref([]);
    const saving = ref(false);
    const errorMsg = ref(null);
    const successMsg = ref(null);
    const forms = reactive([]);
    const activeIndex = ref(0);
    const current = computed(
      () => {
        var _a;
        return (_a = forms[activeIndex.value]) != null ? _a : { id: null, form: createEmptyForm() };
      }
    );
    function orderTitle(vm, idx) {
      var _a;
      const t = ((_a = vm.form.title) != null ? _a : "").trim();
      if (t) return t;
      return `\u0412\u044B\u0432\u0435\u0441\u043A\u0430 ${idx + 1}`;
    }
    function createEmptyForm() {
      return {
        title: "",
        deadline: "",
        material: "",
        boardWidth: 0,
        boardHeight: 0,
        holeType: "",
        stand: false,
        laminate: "",
        print: false,
        printQuality: false,
        acrylic: "\u041D\u0435\u0442",
        type: "",
        wireLength: "",
        elements: 0,
        gift: false,
        adapter: "",
        plug: "",
        switch: true,
        fitting: "",
        dimmer: false,
        giftPack: false,
        description: "",
        neons: [],
        lightings: [],
        docs: false
      };
    }
    function toForm(order) {
      var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o;
      return {
        title: (_a = order == null ? void 0 : order.title) != null ? _a : "",
        deadline: (_b = order == null ? void 0 : order.deadline) != null ? _b : "",
        material: (_c = order == null ? void 0 : order.material) != null ? _c : "",
        boardWidth: Number((_d = order == null ? void 0 : order.boardWidth) != null ? _d : 0),
        boardHeight: Number((_e = order == null ? void 0 : order.boardHeight) != null ? _e : 0),
        holeType: (_f = order == null ? void 0 : order.holeType) != null ? _f : "",
        stand: !!(order == null ? void 0 : order.stand),
        laminate: (_g = order == null ? void 0 : order.laminate) != null ? _g : "",
        print: !!(order == null ? void 0 : order.print),
        printQuality: !!(order == null ? void 0 : order.printQuality),
        acrylic: (_h = order == null ? void 0 : order.acrylic) != null ? _h : "",
        type: (_i = order == null ? void 0 : order.type) != null ? _i : "",
        wireLength: (_j = order == null ? void 0 : order.wireLength) != null ? _j : "",
        elements: Number((_k = order == null ? void 0 : order.elements) != null ? _k : 0),
        gift: !!(order == null ? void 0 : order.gift),
        adapter: (_l = order == null ? void 0 : order.adapter) != null ? _l : "",
        plug: (_m = order == null ? void 0 : order.plug) != null ? _m : "",
        switch: !!(order == null ? void 0 : order.switch),
        fitting: (_n = order == null ? void 0 : order.fitting) != null ? _n : "",
        dimmer: !!(order == null ? void 0 : order.dimmer),
        giftPack: !!(order == null ? void 0 : order.giftPack),
        description: (_o = order == null ? void 0 : order.description) != null ? _o : "",
        docs: !!(order == null ? void 0 : order.docs),
        neons: Array.isArray(order == null ? void 0 : order.neons) ? order.neons.map((n) => {
          var _a2, _b2, _c2;
          return {
            id: n.id,
            width: (_a2 = n.width) != null ? _a2 : "6\u043C\u043C",
            length: Number((_b2 = n.length) != null ? _b2 : 0),
            color: (_c2 = n.color) != null ? _c2 : ""
          };
        }) : [],
        lightings: Array.isArray(order == null ? void 0 : order.lightings) ? order.lightings.map((l) => {
          var _a2, _b2, _c2;
          return {
            id: l.id,
            length: Number((_a2 = l.length) != null ? _a2 : 0),
            color: (_b2 = l.color) != null ? _b2 : "",
            elements: Number((_c2 = l.elements) != null ? _c2 : 0)
          };
        }) : []
      };
    }
    async function fetchOrders() {
      var _a, _b, _c, _d, _e, _f, _g, _h, _i;
      try {
        errorMsg.value = null;
        const prevId = (_b = (_a = forms[activeIndex.value]) == null ? void 0 : _a.id) != null ? _b : null;
        const res = await ((_c = $api.$get) == null ? void 0 : _c.call($api, `tasks/${props.taskId}/orders`));
        const list = Array.isArray(res) ? res : res == null ? void 0 : res.data;
        const orders = Array.isArray(list) ? list : [];
        allOrders.value = orders.map((o) => {
          var _a2;
          return {
            id: o.id,
            title: (_a2 = o.title) != null ? _a2 : `\u0417\u0430\u043A\u0430\u0437 #${o.id}`
          };
        });
        forms.splice(
          0,
          forms.length,
          ...orders.map((o) => {
            var _a2;
            return { id: (_a2 = o.id) != null ? _a2 : null, form: toForm(o) };
          })
        );
        if (forms.length === 0) {
          forms.push({ id: null, form: createEmptyForm() });
        }
        const keep = (_e = prevId != null ? prevId : (_d = forms[0]) == null ? void 0 : _d.id) != null ? _e : null;
        const idx = forms.findIndex((f) => f.id === keep);
        activeIndex.value = idx >= 0 ? idx : 0;
        currentOrderId.value = (_g = (_f = forms[activeIndex.value]) == null ? void 0 : _f.id) != null ? _g : null;
        successMsg.value = null;
      } catch (e) {
        errorMsg.value = ((_i = (_h = e == null ? void 0 : e.response) == null ? void 0 : _h.data) == null ? void 0 : _i.message) || (e == null ? void 0 : e.message) || "\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u0437\u0430\u043A\u0430\u0437\u044B";
        forms.splice(0, forms.length, { id: null, form: createEmptyForm() });
        activeIndex.value = 0;
      }
    }
    function addNeon() {
      current.value.form.neons.push({ width: "6\u043C\u043C", length: 0, color: "" });
    }
    function removeNeon(idx) {
      current.value.form.neons.splice(idx, 1);
    }
    function addLighting() {
      current.value.form.lightings.push({ length: 0, color: "", elements: 0 });
    }
    function removeLighting(idx) {
      current.value.form.lightings.splice(idx, 1);
    }
    function addNewOrder() {
      forms.push({ id: null, form: createEmptyForm() });
      activeIndex.value = forms.length - 1;
      successMsg.value = null;
      errorMsg.value = null;
    }
    async function saveOrder() {
      var _a, _b, _c, _d, _e, _f, _g, _h;
      if (!(forms == null ? void 0 : forms.length)) return;
      saving.value = true;
      errorMsg.value = null;
      successMsg.value = null;
      try {
        const snapshots = forms.map((vm) => ({ id: vm.id, form: vm.form }));
        const results = [];
        for (const snap of snapshots) {
          try {
            if (snap.id == null) {
              const res = await ((_a = $api.$post) == null ? void 0 : _a.call(
                $api,
                `tasks/${props.taskId}/orders`,
                snap.form
              ));
              results.push({ ok: true, id: (_d = (_c = (_b = res == null ? void 0 : res.data) == null ? void 0 : _b.id) != null ? _c : res == null ? void 0 : res.id) != null ? _d : null });
            } else {
              await ((_e = $api.$patch) == null ? void 0 : _e.call($api, `tasks/orders/${snap.id}`, snap.form));
              results.push({ ok: true, id: snap.id });
            }
          } catch (e) {
            results.push({
              ok: false,
              id: (_f = snap.id) != null ? _f : null,
              err: ((_h = (_g = e == null ? void 0 : e.response) == null ? void 0 : _g.data) == null ? void 0 : _h.message) || (e == null ? void 0 : e.message) || "\u041E\u0448\u0438\u0431\u043A\u0430 \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0438\u044F \u0437\u0430\u043A\u0430\u0437\u0430"
            });
          }
        }
        await fetchOrders();
        const failed = results.filter((r) => !r.ok);
        if (failed.length) {
          errorMsg.value = `\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0441\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C ${failed.length} \u0438\u0437 ${results.length}: ${failed.map((f) => f.err).join("; ")}`;
        } else {
          successMsg.value = `\u0421\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u044B \u0432\u0441\u0435 ${results.length} \u0437\u0430\u043A\u0430\u0437(\u043E\u0432)`;
        }
      } finally {
        saving.value = false;
      }
    }
    async function saveOrderAt(index) {
      var _a, _b, _c, _d, _e, _f, _g, _h, _i;
      const vm = forms[index];
      if (!vm) return;
      saving.value = true;
      errorMsg.value = null;
      successMsg.value = null;
      try {
        const prevId = vm.id;
        if (vm.id == null) {
          const res = await ((_a = $api.$post) == null ? void 0 : _a.call(
            $api,
            `tasks/${props.taskId}/orders`,
            vm.form
          ));
          vm.id = (_d = (_c = (_b = res == null ? void 0 : res.data) == null ? void 0 : _b.id) != null ? _c : res == null ? void 0 : res.id) != null ? _d : null;
          successMsg.value = "\u0417\u0430\u043A\u0430\u0437 \u0441\u043E\u0437\u0434\u0430\u043D";
        } else {
          await ((_e = $api.$patch) == null ? void 0 : _e.call($api, `tasks/orders/${vm.id}`, vm.form));
          successMsg.value = "\u0417\u0430\u043A\u0430\u0437 \u043E\u0431\u043D\u043E\u0432\u043B\u0451\u043D";
        }
        const keepId = (_g = (_f = vm.id) != null ? _f : prevId) != null ? _g : null;
        await fetchOrders();
        const i = forms.findIndex((f) => f.id === keepId);
        if (i >= 0) activeIndex.value = i;
      } catch (e) {
        errorMsg.value = ((_i = (_h = e == null ? void 0 : e.response) == null ? void 0 : _h.data) == null ? void 0 : _i.message) || (e == null ? void 0 : e.message) || "\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0441\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u0437\u0430\u043A\u0430\u0437";
      } finally {
        saving.value = false;
      }
    }
    async function deleteOrderAt(index) {
      var _a, _b, _c;
      const vm = forms[index];
      if (!vm) return;
      try {
        const wasActive = activeIndex.value === index;
        if (vm.id != null) {
          await ((_a = $api.$del) == null ? void 0 : _a.call($api, `tasks/orders/${vm.id}`));
        }
        forms.splice(index, 1);
        if (forms.length === 0) {
          forms.push({ id: null, form: createEmptyForm() });
          activeIndex.value = 0;
        } else if (wasActive) {
          activeIndex.value = Math.min(index, forms.length - 1);
        }
        successMsg.value = "\u0417\u0430\u043A\u0430\u0437 \u0443\u0434\u0430\u043B\u0451\u043D";
      } catch (e) {
        errorMsg.value = ((_c = (_b = e == null ? void 0 : e.response) == null ? void 0 : _b.data) == null ? void 0 : _c.message) || (e == null ? void 0 : e.message) || "\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0443\u0434\u0430\u043B\u0438\u0442\u044C \u0437\u0430\u043A\u0430\u0437";
      }
    }
    __expose({
      fetchOrders,
      addNewOrder,
      saveOrderAt,
      deleteOrderAt,
      get orders() {
        return allOrders.value;
      },
      get currentOrderId() {
        var _a, _b;
        return (_b = (_a = forms[0]) == null ? void 0 : _a.id) != null ? _b : null;
      },
      get forms() {
        return forms;
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiButton = _sfc_main$r;
      const _component_UiLabel = _sfc_main$v;
      const _component_UiInput = _sfc_main$q;
      const _component_UiHoverCard = _sfc_main$3$2;
      const _component_UiHoverCardTrigger = _sfc_main$1$3;
      const _component_UiHoverCardContent = _sfc_main$2$3;
      const _component_UiSwitch = _sfc_main$A;
      const _component_UiSelect = _sfc_main$6$2;
      const _component_UiSelectTrigger = _sfc_main$4$3;
      const _component_UiSelectValue = _sfc_main$5$2;
      const _component_UiSelectContent = _sfc_main$3$3;
      const _component_UiSelectGroup = _sfc_main$B;
      const _component_UiSelectItem = _sfc_main$2$4;
      const _component_UiPopover = _sfc_main$2$5;
      const _component_UiPopoverTrigger = _sfc_main$1$4;
      const _component_UiPopoverContent = _sfc_main$C;
      const _component_UiTextarea = _sfc_main$w;
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="flex items-start gap-2 mb-4 w-full"><div class="flex items-center gap-2 flex-wrap"><!--[-->`);
      ssrRenderList(forms, (o, idx) => {
        _push(ssrRenderComponent(_component_UiButton, {
          variant: idx === activeIndex.value ? "default" : "secondary",
          size: "sm",
          class: "bg-neutral-800 text-neutral-300 border border-neutral-600 data-[active=true]:bg-neutral-600 data-[active=true]:text-white",
          "data-active": idx === activeIndex.value,
          onClick: ($event) => activeIndex.value = idx
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(orderTitle(o, idx))}`);
            } else {
              return [
                createTextVNode(toDisplayString(orderTitle(o, idx)), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]-->`);
      _push(ssrRenderComponent(_component_UiButton, {
        variant: "secondary",
        size: "sm",
        class: "text-neutral-300 bg-neutral-700/50 hover:bg-neutral-600/50",
        onClick: addNewOrder
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` + \u0412\u044B\u0432\u0435\u0441\u043A\u0430 `);
          } else {
            return [
              createTextVNode(" + \u0412\u044B\u0432\u0435\u0441\u043A\u0430 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="ml-auto">`);
      _push(ssrRenderComponent(_component_UiButton, {
        disabled: saving.value,
        size: "sm",
        class: "text-neutral-300 bg-neutral-600 hover:bg-neutral-600/50",
        onClick: saveOrder
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(saving.value ? "\u0421\u043E\u0445\u0440\u0430\u043D\u044F\u0435\u043C\u2026" : "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C")}`);
          } else {
            return [
              createTextVNode(toDisplayString(saving.value ? "\u0421\u043E\u0445\u0440\u0430\u043D\u044F\u0435\u043C\u2026" : "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C"), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="flex flex-col gap-2"><div class="flex gap-2">`);
      _push(ssrRenderComponent(_component_UiLabel, { class: "font-medium flex text-neutral-400 self-center" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (!unref(current).form.title) {
              _push2(`<span class="text-red-500"${_scopeId}>*</span>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(` \u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435: `);
          } else {
            return [
              !unref(current).form.title ? (openBlock(), createBlock("span", {
                key: 0,
                class: "text-red-500"
              }, "*")) : createCommentVNode("", true),
              createTextVNode(" \u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435: ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UiInput, {
        modelValue: unref(current).form.title,
        "onUpdate:modelValue": ($event) => unref(current).form.title = $event,
        class: "h-8 bg-neutral-800 text-neutral-300 placeholder:text-neutral-600 border-neutral-500/20",
        placeholder: "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0437\u0430\u043A\u0430\u0437\u0430"
      }, null, _parent));
      _push(`</div><div class="flex gap-2">`);
      _push(ssrRenderComponent(_component_UiLabel, { class: "font-medium flex text-neutral-400 self-center" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (!unref(current).form.deadline) {
              _push2(`<span class="text-red-500"${_scopeId}>*</span>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(` \u0421\u0440\u043E\u043A: `);
          } else {
            return [
              !unref(current).form.deadline ? (openBlock(), createBlock("span", {
                key: 0,
                class: "text-red-500"
              }, "*")) : createCommentVNode("", true),
              createTextVNode(" \u0421\u0440\u043E\u043A: ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UiInput, {
        modelValue: unref(current).form.deadline,
        "onUpdate:modelValue": ($event) => unref(current).form.deadline = $event,
        class: "h-8 bg-neutral-800 text-neutral-300 placeholder:text-neutral-600 border-neutral-500/20",
        type: "date",
        placeholder: "\u0421\u0440\u043E\u043A"
      }, null, _parent));
      _push(`</div></div><div class="relative border-b-1 border-neutral-500 mb-5 mt-8"><span class="absolute top-[-9px] left-[50%] translate-x-[-50%] text-neutral-400 bg-neutral-800 text-xs font-medium px-1">\u041F\u043E\u0434\u043B\u043E\u0436\u043A\u0430</span></div><div class="flex flex-col gap-2"><div class="flex gap-2">`);
      _push(ssrRenderComponent(_component_UiLabel, { class: "font-medium flex text-neutral-400 self-center" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (!unref(current).form.boardWidth) {
              _push2(`<span class="text-red-500"${_scopeId}>*</span>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<span${_scopeId}>\u0428\u0438\u0440\u0438\u043D\u0430(\u0441\u043C):</span>`);
          } else {
            return [
              !unref(current).form.boardWidth ? (openBlock(), createBlock("span", {
                key: 0,
                class: "text-red-500"
              }, "*")) : createCommentVNode("", true),
              createVNode("span", null, "\u0428\u0438\u0440\u0438\u043D\u0430(\u0441\u043C):")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UiInput, {
        modelValue: unref(current).form.boardWidth,
        "onUpdate:modelValue": ($event) => unref(current).form.boardWidth = $event,
        modelModifiers: { number: true },
        type: "number",
        class: "h-8 bg-neutral-800 text-neutral-300 border-neutral-500/20"
      }, null, _parent));
      _push(`</div><div class="flex gap-2">`);
      _push(ssrRenderComponent(_component_UiLabel, { class: "font-medium flex text-neutral-400 self-center" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (!unref(current).form.boardHeight) {
              _push2(`<span class="text-red-500"${_scopeId}>*</span>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(` \u0412\u044B\u0441\u043E\u0442\u0430(\u0441\u043C): `);
          } else {
            return [
              !unref(current).form.boardHeight ? (openBlock(), createBlock("span", {
                key: 0,
                class: "text-red-500"
              }, "*")) : createCommentVNode("", true),
              createTextVNode(" \u0412\u044B\u0441\u043E\u0442\u0430(\u0441\u043C): ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UiInput, {
        modelValue: unref(current).form.boardHeight,
        "onUpdate:modelValue": ($event) => unref(current).form.boardHeight = $event,
        modelModifiers: { number: true },
        type: "number",
        class: "h-8 bg-neutral-800 text-neutral-300 border-neutral-500/20"
      }, null, _parent));
      _push(`</div><div class="flex gap-2">`);
      _push(ssrRenderComponent(_component_UiLabel, { class: "font-medium flex text-neutral-400 self-center" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (!unref(current).form.holeType) {
              _push2(`<span class="text-red-500"${_scopeId}>*</span>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(` \u041E\u0442\u0432\u0435\u0440\u0441\u0442\u0438\u044F: `);
          } else {
            return [
              !unref(current).form.holeType ? (openBlock(), createBlock("span", {
                key: 0,
                class: "text-red-500"
              }, "*")) : createCommentVNode("", true),
              createTextVNode(" \u041E\u0442\u0432\u0435\u0440\u0441\u0442\u0438\u044F: ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UiHoverCard, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UiHoverCardTrigger, { class: "w-full" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UiInput, {
                    modelValue: unref(current).form.holeType,
                    "onUpdate:modelValue": ($event) => unref(current).form.holeType = $event,
                    class: "h-8 bg-neutral-800 text-neutral-300 border-neutral-500/20 placeholder:text-neutral-600",
                    placeholder: "6\u043C\u043C/9\u043C\u043C/\u0434\u0440\u0443\u0433\u043E\u0435"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UiInput, {
                      modelValue: unref(current).form.holeType,
                      "onUpdate:modelValue": ($event) => unref(current).form.holeType = $event,
                      class: "h-8 bg-neutral-800 text-neutral-300 border-neutral-500/20 placeholder:text-neutral-600",
                      placeholder: "6\u043C\u043C/9\u043C\u043C/\u0434\u0440\u0443\u0433\u043E\u0435"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UiHoverCardContent, { class: "w-[100px] p-1" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(holeTypes, (ht) => {
                    _push3(`<div class="hover:bg-slate-100 text-gray-400 cursor-pointer"${_scopeId2}>${ssrInterpolate(ht)}</div>`);
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [
                    (openBlock(), createBlock(Fragment, null, renderList(holeTypes, (ht) => {
                      return createVNode("div", {
                        key: ht,
                        class: "hover:bg-slate-100 text-gray-400 cursor-pointer",
                        onClick: () => unref(current).form.holeType = ht
                      }, toDisplayString(ht), 9, ["onClick"]);
                    }), 64))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UiHoverCardTrigger, { class: "w-full" }, {
                default: withCtx(() => [
                  createVNode(_component_UiInput, {
                    modelValue: unref(current).form.holeType,
                    "onUpdate:modelValue": ($event) => unref(current).form.holeType = $event,
                    class: "h-8 bg-neutral-800 text-neutral-300 border-neutral-500/20 placeholder:text-neutral-600",
                    placeholder: "6\u043C\u043C/9\u043C\u043C/\u0434\u0440\u0443\u0433\u043E\u0435"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                _: 1
              }),
              createVNode(_component_UiHoverCardContent, { class: "w-[100px] p-1" }, {
                default: withCtx(() => [
                  (openBlock(), createBlock(Fragment, null, renderList(holeTypes, (ht) => {
                    return createVNode("div", {
                      key: ht,
                      class: "hover:bg-slate-100 text-gray-400 cursor-pointer",
                      onClick: () => unref(current).form.holeType = ht
                    }, toDisplayString(ht), 9, ["onClick"]);
                  }), 64))
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="relative border-b border-neutral-500 mb-5 mt-8"><span class="absolute -top-2 left-1/2 -translate-x-1/2 bg-neutral-800 text-neutral-400 text-xs px-1">\u041F\u0435\u0447\u0430\u0442\u044C/\u0410\u043A\u0440\u0438\u043B</span></div><div class="flex flex-col gap-2"><div class="flex gap-2">`);
      _push(ssrRenderComponent(_component_UiLabel, { class: "font-medium flex text-neutral-400 self-center" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u041F\u0435\u0447\u0430\u0442\u044C: ${ssrInterpolate(unref(current).form.print ? "\u0414\u0430" : "\u041D\u0435\u0442")}`);
          } else {
            return [
              createTextVNode(" \u041F\u0435\u0447\u0430\u0442\u044C: " + toDisplayString(unref(current).form.print ? "\u0414\u0430" : "\u041D\u0435\u0442"), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UiSwitch, {
        checked: unref(current).form.print,
        "onUpdate:checked": ($event) => unref(current).form.print = $event,
        class: "scale-75 data-[state=checked]:bg-lime-900 data-[state=unchecked]:bg-neutral-500",
        "thumb-class": "bg-neutral-400 data-[state=checked]:bg-neutral-300"
      }, null, _parent));
      _push(`</div><div class="flex gap-2">`);
      _push(ssrRenderComponent(_component_UiLabel, { class: "font-medium flex text-neutral-400 self-center" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u041A\u0430\u0447\u0435\u0441\u0442\u0432\u043E \u0441\u043E\u0433\u043B\u0430\u0441\u043E\u0432\u0430\u043D\u043E: ${ssrInterpolate(unref(current).form.printQuality ? "\u0414\u0430" : "\u041D\u0435\u0442")}`);
          } else {
            return [
              createTextVNode(" \u041A\u0430\u0447\u0435\u0441\u0442\u0432\u043E \u0441\u043E\u0433\u043B\u0430\u0441\u043E\u0432\u0430\u043D\u043E: " + toDisplayString(unref(current).form.printQuality ? "\u0414\u0430" : "\u041D\u0435\u0442"), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UiSwitch, {
        checked: unref(current).form.printQuality,
        "onUpdate:checked": ($event) => unref(current).form.printQuality = $event,
        class: "scale-75 data-[state=checked]:bg-lime-900 data-[state=unchecked]:bg-neutral-500",
        "thumb-class": "bg-neutral-400 data-[state=checked]:bg-neutral-300"
      }, null, _parent));
      _push(`</div><div class="flex gap-2">`);
      _push(ssrRenderComponent(_component_UiLabel, { class: "font-medium flex text-neutral-400 self-center" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (!unref(current).form.acrylic) {
              _push2(`<span class="text-red-500"${_scopeId}>*</span>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(` \u0410\u043A\u0440\u0438\u043B: `);
          } else {
            return [
              !unref(current).form.acrylic ? (openBlock(), createBlock("span", {
                key: 0,
                class: "text-red-500"
              }, "*")) : createCommentVNode("", true),
              createTextVNode(" \u0410\u043A\u0440\u0438\u043B: ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UiInput, {
        modelValue: unref(current).form.acrylic,
        "onUpdate:modelValue": ($event) => unref(current).form.acrylic = $event,
        class: "h-8 bg-neutral-800 text-neutral-300 border-neutral-500/20 placeholder:text-neutral-600",
        placeholder: "\u0426\u0432\u0435\u0442 \u0438 \u0442\u043F"
      }, null, _parent));
      _push(`</div></div><div class="relative border-b-1 border-neutral-500 mb-5 mt-8"><span class="absolute top-[-9px] left-[50%] translate-x-[-50%] text-neutral-400 bg-neutral-800 text-xs font-medium px-1">\u041D\u0435\u043E\u043D</span></div><div class="flex flex-col gap-2"><div class="flex gap-2">`);
      _push(ssrRenderComponent(_component_UiLabel, { class: "font-medium flex text-neutral-400 self-center" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (!unref(current).form.type) {
              _push2(`<span class="text-red-500"${_scopeId}>*</span>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(` \u0422\u0438\u043F: `);
          } else {
            return [
              !unref(current).form.type ? (openBlock(), createBlock("span", {
                key: 0,
                class: "text-red-500"
              }, "*")) : createCommentVNode("", true),
              createTextVNode(" \u0422\u0438\u043F: ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UiSelect, {
        modelValue: unref(current).form.type,
        "onUpdate:modelValue": ($event) => unref(current).form.type = $event
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UiSelectTrigger, { class: "h-8 bg-neutral-800 text-neutral-300 border-neutral-500/20" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UiSelectValue, {
                    class: "placeholder:text-neutral-600",
                    placeholder: "\u041F\u043E\u043C\u0435\u0449\u0435\u043D\u0438\u0435/\u0423\u043B\u0438\u0446\u0430"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UiSelectValue, {
                      class: "placeholder:text-neutral-600",
                      placeholder: "\u041F\u043E\u043C\u0435\u0449\u0435\u043D\u0438\u0435/\u0423\u043B\u0438\u0446\u0430"
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UiSelectContent, { class: "bg-neutral-800 text-neutral-300" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(types, (item, index) => {
                    _push3(ssrRenderComponent(_component_UiSelectGroup, { key: index }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_UiSelectItem, { value: item }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`${ssrInterpolate(item)}`);
                              } else {
                                return [
                                  createTextVNode(toDisplayString(item), 1)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_UiSelectItem, { value: item }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(item), 1)
                              ]),
                              _: 2
                            }, 1032, ["value"])
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [
                    (openBlock(), createBlock(Fragment, null, renderList(types, (item, index) => {
                      return createVNode(_component_UiSelectGroup, { key: index }, {
                        default: withCtx(() => [
                          createVNode(_component_UiSelectItem, { value: item }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(item), 1)
                            ]),
                            _: 2
                          }, 1032, ["value"])
                        ]),
                        _: 2
                      }, 1024);
                    }), 64))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UiSelectTrigger, { class: "h-8 bg-neutral-800 text-neutral-300 border-neutral-500/20" }, {
                default: withCtx(() => [
                  createVNode(_component_UiSelectValue, {
                    class: "placeholder:text-neutral-600",
                    placeholder: "\u041F\u043E\u043C\u0435\u0449\u0435\u043D\u0438\u0435/\u0423\u043B\u0438\u0446\u0430"
                  })
                ]),
                _: 1
              }),
              createVNode(_component_UiSelectContent, { class: "bg-neutral-800 text-neutral-300" }, {
                default: withCtx(() => [
                  (openBlock(), createBlock(Fragment, null, renderList(types, (item, index) => {
                    return createVNode(_component_UiSelectGroup, { key: index }, {
                      default: withCtx(() => [
                        createVNode(_component_UiSelectItem, { value: item }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(item), 1)
                          ]),
                          _: 2
                        }, 1032, ["value"])
                      ]),
                      _: 2
                    }, 1024);
                  }), 64))
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="flex gap-2">`);
      _push(ssrRenderComponent(_component_UiLabel, { class: "font-medium flex text-neutral-400 self-center" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (!unref(current).form.elements) {
              _push2(`<span class="text-red-500"${_scopeId}>*</span>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(` \u042D\u043B\u0435\u043C\u0435\u043D\u0442\u044B: `);
          } else {
            return [
              !unref(current).form.elements ? (openBlock(), createBlock("span", {
                key: 0,
                class: "text-red-500"
              }, "*")) : createCommentVNode("", true),
              createTextVNode(" \u042D\u043B\u0435\u043C\u0435\u043D\u0442\u044B: ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UiInput, {
        modelValue: unref(current).form.elements,
        "onUpdate:modelValue": ($event) => unref(current).form.elements = $event,
        modelModifiers: { number: true },
        class: "h-8 bg-neutral-800 text-neutral-300 placeholder:text-neutral-600 border-neutral-500/20",
        type: "number"
      }, null, _parent));
      _push(`</div><div class="flex gap-2 text-neutral-400 items-center">`);
      _push(ssrRenderComponent(_component_UiLabel, { class: "font-medium" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u041E\u0431\u0449\u0430\u044F \u0434\u043B\u0438\u043D\u0430 \u043D\u0435\u043E\u043D\u0430: `);
          } else {
            return [
              createTextVNode(" \u041E\u0431\u0449\u0430\u044F \u0434\u043B\u0438\u043D\u0430 \u043D\u0435\u043E\u043D\u0430: ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<span class="font-medium text-neutral-300">${ssrInterpolate(unref(current).form.neons.reduce((a, b) => a + b.length, 0).toFixed(2))}\u043C </span></div><div class="flex gap-2"><span class="font-medium flex text-neutral-400 mr-auto">\u041D\u0435\u043E\u043D\u044B: </span>`);
      _push(ssrRenderComponent(_component_UiButton, {
        variant: "secondary",
        size: "sm",
        class: "text-neutral-300 bg-neutral-600 hover:bg-neutral-600/50",
        onClick: ($event) => addNeon()
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` + \u041D\u0435\u043E\u043D `);
          } else {
            return [
              createTextVNode(" + \u041D\u0435\u043E\u043D ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UiButton, {
        variant: "secondary",
        size: "sm",
        class: "text-neutral-300 bg-neutral-600 hover:bg-neutral-600/50",
        onClick: ($event) => addLighting()
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` + \u041F\u043E\u0434\u0441\u0432\u0435\u0442\u043A\u0430 `);
          } else {
            return [
              createTextVNode(" + \u041F\u043E\u0434\u0441\u0432\u0435\u0442\u043A\u0430 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="col-span-2 text-sm text-neutral-300">`);
      if (unref(current).form.neons.length === 0) {
        _push(`<div class="text-red-500"> \u041D\u0435\u043E\u043D \u043D\u0435 \u0434\u043E\u0431\u0430\u0432\u043B\u0435\u043D </div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="col-span-2 flex flex-col gap-1"><!--[-->`);
      ssrRenderList(unref(current).form.neons, (n, idx) => {
        _push(`<div class="flex items-center">`);
        _push(ssrRenderComponent(_component_UiPopover, null, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              if (!n.color || !n.length) {
                _push2(`<span class="text-red-500"${_scopeId}>*</span>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`<div class="flex h-6 items-center text-neutral-300 bg-neutral-800 border-1 border-neutral-500/20 rounded-sm"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UiPopoverTrigger, { class: "text-sm p-2 bg-transparent hover:underline cursor-pointer" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<span${_scopeId2}>${ssrInterpolate(n.color)}(${ssrInterpolate(n.width)}) - ${ssrInterpolate(n.length)}\u043C</span>`);
                  } else {
                    return [
                      createVNode("span", null, toDisplayString(n.color) + "(" + toDisplayString(n.width) + ") - " + toDisplayString(n.length) + "\u043C", 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`<button class="flex bg-transparent mx-1 cursor-pointer"${_scopeId}>`);
              _push2(ssrRenderComponent(unref(X), { class: "w-4 x-4" }, null, _parent2, _scopeId));
              _push2(`</button></div>`);
              _push2(ssrRenderComponent(_component_UiPopoverContent, { class: "w-[400px] bg-neutral-700" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="flex gap-2 items-center"${_scopeId2}><div class="w-full"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_UiLabel, { class: "font-light text-neutral-400" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(` \u0426\u0432\u0435\u0442 `);
                          if (!n.color) {
                            _push4(`<span class="text-red-500"${_scopeId3}>*</span>`);
                          } else {
                            _push4(`<!---->`);
                          }
                        } else {
                          return [
                            createTextVNode(" \u0426\u0432\u0435\u0442 "),
                            !n.color ? (openBlock(), createBlock("span", {
                              key: 0,
                              class: "text-red-500"
                            }, "*")) : createCommentVNode("", true)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_UiSelect, {
                      modelValue: n.color,
                      "onUpdate:modelValue": ($event) => n.color = $event
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_UiSelectTrigger, { class: "h-8 bg-neutral-700 text-neutral-300 border-neutral-500/20" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_UiSelectValue, { placeholder: "" }, null, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(_component_UiSelectValue, { placeholder: "" })
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_component_UiSelectContent, { class: "bg-neutral-800 text-neutral-300" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<!--[-->`);
                                ssrRenderList(neonColors, (item, neonColorsIdx) => {
                                  _push5(ssrRenderComponent(_component_UiSelectGroup, {
                                    key: neonColorsIdx,
                                    class: "p-0.5"
                                  }, {
                                    default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        _push6(ssrRenderComponent(_component_UiSelectItem, {
                                          value: item,
                                          class: "py-0 pr-0"
                                        }, {
                                          default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                            if (_push7) {
                                              _push7(`${ssrInterpolate(item)}`);
                                            } else {
                                              return [
                                                createTextVNode(toDisplayString(item), 1)
                                              ];
                                            }
                                          }),
                                          _: 2
                                        }, _parent6, _scopeId5));
                                      } else {
                                        return [
                                          createVNode(_component_UiSelectItem, {
                                            value: item,
                                            class: "py-0 pr-0"
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(item), 1)
                                            ]),
                                            _: 2
                                          }, 1032, ["value"])
                                        ];
                                      }
                                    }),
                                    _: 2
                                  }, _parent5, _scopeId4));
                                });
                                _push5(`<!--]-->`);
                              } else {
                                return [
                                  (openBlock(), createBlock(Fragment, null, renderList(neonColors, (item, neonColorsIdx) => {
                                    return createVNode(_component_UiSelectGroup, {
                                      key: neonColorsIdx,
                                      class: "p-0.5"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_UiSelectItem, {
                                          value: item,
                                          class: "py-0 pr-0"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(item), 1)
                                          ]),
                                          _: 2
                                        }, 1032, ["value"])
                                      ]),
                                      _: 2
                                    }, 1024);
                                  }), 64))
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_UiSelectTrigger, { class: "h-8 bg-neutral-700 text-neutral-300 border-neutral-500/20" }, {
                              default: withCtx(() => [
                                createVNode(_component_UiSelectValue, { placeholder: "" })
                              ]),
                              _: 1
                            }),
                            createVNode(_component_UiSelectContent, { class: "bg-neutral-800 text-neutral-300" }, {
                              default: withCtx(() => [
                                (openBlock(), createBlock(Fragment, null, renderList(neonColors, (item, neonColorsIdx) => {
                                  return createVNode(_component_UiSelectGroup, {
                                    key: neonColorsIdx,
                                    class: "p-0.5"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_UiSelectItem, {
                                        value: item,
                                        class: "py-0 pr-0"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(item), 1)
                                        ]),
                                        _: 2
                                      }, 1032, ["value"])
                                    ]),
                                    _: 2
                                  }, 1024);
                                }), 64))
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(`</div><div${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_UiLabel, { class: "font-light text-neutral-400" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(` \u0422\u043E\u043B\u0449\u0438\u043D\u0430 `);
                          if (!n.width) {
                            _push4(`<span class="text-red-500"${_scopeId3}>*</span>`);
                          } else {
                            _push4(`<!---->`);
                          }
                        } else {
                          return [
                            createTextVNode(" \u0422\u043E\u043B\u0449\u0438\u043D\u0430 "),
                            !n.width ? (openBlock(), createBlock("span", {
                              key: 0,
                              class: "text-red-500"
                            }, "*")) : createCommentVNode("", true)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_UiSelect, {
                      modelValue: n.width,
                      "onUpdate:modelValue": ($event) => n.width = $event
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_UiSelectTrigger, { class: "h-8 bg-neutral-700 text-neutral-300 border-neutral-500/20" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_UiSelectValue, { placeholder: "" }, null, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(_component_UiSelectValue, { placeholder: "" })
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_component_UiSelectContent, { class: "bg-neutral-800 text-neutral-300" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<!--[-->`);
                                ssrRenderList(neonWidths, (item, neonWidthsIdx) => {
                                  _push5(ssrRenderComponent(_component_UiSelectGroup, { key: neonWidthsIdx }, {
                                    default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        _push6(ssrRenderComponent(_component_UiSelectItem, { value: item }, {
                                          default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                            if (_push7) {
                                              _push7(`${ssrInterpolate(item)}`);
                                            } else {
                                              return [
                                                createTextVNode(toDisplayString(item), 1)
                                              ];
                                            }
                                          }),
                                          _: 2
                                        }, _parent6, _scopeId5));
                                      } else {
                                        return [
                                          createVNode(_component_UiSelectItem, { value: item }, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(item), 1)
                                            ]),
                                            _: 2
                                          }, 1032, ["value"])
                                        ];
                                      }
                                    }),
                                    _: 2
                                  }, _parent5, _scopeId4));
                                });
                                _push5(`<!--]-->`);
                              } else {
                                return [
                                  (openBlock(), createBlock(Fragment, null, renderList(neonWidths, (item, neonWidthsIdx) => {
                                    return createVNode(_component_UiSelectGroup, { key: neonWidthsIdx }, {
                                      default: withCtx(() => [
                                        createVNode(_component_UiSelectItem, { value: item }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(item), 1)
                                          ]),
                                          _: 2
                                        }, 1032, ["value"])
                                      ]),
                                      _: 2
                                    }, 1024);
                                  }), 64))
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_UiSelectTrigger, { class: "h-8 bg-neutral-700 text-neutral-300 border-neutral-500/20" }, {
                              default: withCtx(() => [
                                createVNode(_component_UiSelectValue, { placeholder: "" })
                              ]),
                              _: 1
                            }),
                            createVNode(_component_UiSelectContent, { class: "bg-neutral-800 text-neutral-300" }, {
                              default: withCtx(() => [
                                (openBlock(), createBlock(Fragment, null, renderList(neonWidths, (item, neonWidthsIdx) => {
                                  return createVNode(_component_UiSelectGroup, { key: neonWidthsIdx }, {
                                    default: withCtx(() => [
                                      createVNode(_component_UiSelectItem, { value: item }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(item), 1)
                                        ]),
                                        _: 2
                                      }, 1032, ["value"])
                                    ]),
                                    _: 2
                                  }, 1024);
                                }), 64))
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(`</div><div class="min-w-[80px]"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_UiLabel, { class: "font-light text-neutral-400" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(` \u0414\u043B\u0438\u043D\u0430 (\u043C) `);
                          if (!n.length) {
                            _push4(`<span class="text-red-500"${_scopeId3}>*</span>`);
                          } else {
                            _push4(`<!---->`);
                          }
                        } else {
                          return [
                            createTextVNode(" \u0414\u043B\u0438\u043D\u0430 (\u043C) "),
                            !n.length ? (openBlock(), createBlock("span", {
                              key: 0,
                              class: "text-red-500"
                            }, "*")) : createCommentVNode("", true)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_UiInput, {
                      modelValue: n.length,
                      "onUpdate:modelValue": ($event) => n.length = $event,
                      modelModifiers: { number: true },
                      class: "h-8 bg-neutral-800 text-neutral-300 placeholder:text-neutral-600 border-neutral-500/20",
                      type: "number",
                      placeholder: "\u043C"
                    }, null, _parent3, _scopeId2));
                    _push3(`</div></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "flex gap-2 items-center" }, [
                        createVNode("div", { class: "w-full" }, [
                          createVNode(_component_UiLabel, { class: "font-light text-neutral-400" }, {
                            default: withCtx(() => [
                              createTextVNode(" \u0426\u0432\u0435\u0442 "),
                              !n.color ? (openBlock(), createBlock("span", {
                                key: 0,
                                class: "text-red-500"
                              }, "*")) : createCommentVNode("", true)
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(_component_UiSelect, {
                            modelValue: n.color,
                            "onUpdate:modelValue": ($event) => n.color = $event
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_UiSelectTrigger, { class: "h-8 bg-neutral-700 text-neutral-300 border-neutral-500/20" }, {
                                default: withCtx(() => [
                                  createVNode(_component_UiSelectValue, { placeholder: "" })
                                ]),
                                _: 1
                              }),
                              createVNode(_component_UiSelectContent, { class: "bg-neutral-800 text-neutral-300" }, {
                                default: withCtx(() => [
                                  (openBlock(), createBlock(Fragment, null, renderList(neonColors, (item, neonColorsIdx) => {
                                    return createVNode(_component_UiSelectGroup, {
                                      key: neonColorsIdx,
                                      class: "p-0.5"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_UiSelectItem, {
                                          value: item,
                                          class: "py-0 pr-0"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(item), 1)
                                          ]),
                                          _: 2
                                        }, 1032, ["value"])
                                      ]),
                                      _: 2
                                    }, 1024);
                                  }), 64))
                                ]),
                                _: 1
                              })
                            ]),
                            _: 2
                          }, 1032, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        createVNode("div", null, [
                          createVNode(_component_UiLabel, { class: "font-light text-neutral-400" }, {
                            default: withCtx(() => [
                              createTextVNode(" \u0422\u043E\u043B\u0449\u0438\u043D\u0430 "),
                              !n.width ? (openBlock(), createBlock("span", {
                                key: 0,
                                class: "text-red-500"
                              }, "*")) : createCommentVNode("", true)
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(_component_UiSelect, {
                            modelValue: n.width,
                            "onUpdate:modelValue": ($event) => n.width = $event
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_UiSelectTrigger, { class: "h-8 bg-neutral-700 text-neutral-300 border-neutral-500/20" }, {
                                default: withCtx(() => [
                                  createVNode(_component_UiSelectValue, { placeholder: "" })
                                ]),
                                _: 1
                              }),
                              createVNode(_component_UiSelectContent, { class: "bg-neutral-800 text-neutral-300" }, {
                                default: withCtx(() => [
                                  (openBlock(), createBlock(Fragment, null, renderList(neonWidths, (item, neonWidthsIdx) => {
                                    return createVNode(_component_UiSelectGroup, { key: neonWidthsIdx }, {
                                      default: withCtx(() => [
                                        createVNode(_component_UiSelectItem, { value: item }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(item), 1)
                                          ]),
                                          _: 2
                                        }, 1032, ["value"])
                                      ]),
                                      _: 2
                                    }, 1024);
                                  }), 64))
                                ]),
                                _: 1
                              })
                            ]),
                            _: 2
                          }, 1032, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        createVNode("div", { class: "min-w-[80px]" }, [
                          createVNode(_component_UiLabel, { class: "font-light text-neutral-400" }, {
                            default: withCtx(() => [
                              createTextVNode(" \u0414\u043B\u0438\u043D\u0430 (\u043C) "),
                              !n.length ? (openBlock(), createBlock("span", {
                                key: 0,
                                class: "text-red-500"
                              }, "*")) : createCommentVNode("", true)
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(_component_UiInput, {
                            modelValue: n.length,
                            "onUpdate:modelValue": ($event) => n.length = $event,
                            modelModifiers: { number: true },
                            class: "h-8 bg-neutral-800 text-neutral-300 placeholder:text-neutral-600 border-neutral-500/20",
                            type: "number",
                            placeholder: "\u043C"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ])
                      ])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            } else {
              return [
                !n.color || !n.length ? (openBlock(), createBlock("span", {
                  key: 0,
                  class: "text-red-500"
                }, "*")) : createCommentVNode("", true),
                createVNode("div", { class: "flex h-6 items-center text-neutral-300 bg-neutral-800 border-1 border-neutral-500/20 rounded-sm" }, [
                  createVNode(_component_UiPopoverTrigger, { class: "text-sm p-2 bg-transparent hover:underline cursor-pointer" }, {
                    default: withCtx(() => [
                      createVNode("span", null, toDisplayString(n.color) + "(" + toDisplayString(n.width) + ") - " + toDisplayString(n.length) + "\u043C", 1)
                    ]),
                    _: 2
                  }, 1024),
                  createVNode("button", {
                    class: "flex bg-transparent mx-1 cursor-pointer",
                    onClick: ($event) => removeNeon(idx)
                  }, [
                    createVNode(unref(X), { class: "w-4 x-4" })
                  ], 8, ["onClick"])
                ]),
                createVNode(_component_UiPopoverContent, { class: "w-[400px] bg-neutral-700" }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "flex gap-2 items-center" }, [
                      createVNode("div", { class: "w-full" }, [
                        createVNode(_component_UiLabel, { class: "font-light text-neutral-400" }, {
                          default: withCtx(() => [
                            createTextVNode(" \u0426\u0432\u0435\u0442 "),
                            !n.color ? (openBlock(), createBlock("span", {
                              key: 0,
                              class: "text-red-500"
                            }, "*")) : createCommentVNode("", true)
                          ]),
                          _: 2
                        }, 1024),
                        createVNode(_component_UiSelect, {
                          modelValue: n.color,
                          "onUpdate:modelValue": ($event) => n.color = $event
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_UiSelectTrigger, { class: "h-8 bg-neutral-700 text-neutral-300 border-neutral-500/20" }, {
                              default: withCtx(() => [
                                createVNode(_component_UiSelectValue, { placeholder: "" })
                              ]),
                              _: 1
                            }),
                            createVNode(_component_UiSelectContent, { class: "bg-neutral-800 text-neutral-300" }, {
                              default: withCtx(() => [
                                (openBlock(), createBlock(Fragment, null, renderList(neonColors, (item, neonColorsIdx) => {
                                  return createVNode(_component_UiSelectGroup, {
                                    key: neonColorsIdx,
                                    class: "p-0.5"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_UiSelectItem, {
                                        value: item,
                                        class: "py-0 pr-0"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(item), 1)
                                        ]),
                                        _: 2
                                      }, 1032, ["value"])
                                    ]),
                                    _: 2
                                  }, 1024);
                                }), 64))
                              ]),
                              _: 1
                            })
                          ]),
                          _: 2
                        }, 1032, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      createVNode("div", null, [
                        createVNode(_component_UiLabel, { class: "font-light text-neutral-400" }, {
                          default: withCtx(() => [
                            createTextVNode(" \u0422\u043E\u043B\u0449\u0438\u043D\u0430 "),
                            !n.width ? (openBlock(), createBlock("span", {
                              key: 0,
                              class: "text-red-500"
                            }, "*")) : createCommentVNode("", true)
                          ]),
                          _: 2
                        }, 1024),
                        createVNode(_component_UiSelect, {
                          modelValue: n.width,
                          "onUpdate:modelValue": ($event) => n.width = $event
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_UiSelectTrigger, { class: "h-8 bg-neutral-700 text-neutral-300 border-neutral-500/20" }, {
                              default: withCtx(() => [
                                createVNode(_component_UiSelectValue, { placeholder: "" })
                              ]),
                              _: 1
                            }),
                            createVNode(_component_UiSelectContent, { class: "bg-neutral-800 text-neutral-300" }, {
                              default: withCtx(() => [
                                (openBlock(), createBlock(Fragment, null, renderList(neonWidths, (item, neonWidthsIdx) => {
                                  return createVNode(_component_UiSelectGroup, { key: neonWidthsIdx }, {
                                    default: withCtx(() => [
                                      createVNode(_component_UiSelectItem, { value: item }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(item), 1)
                                        ]),
                                        _: 2
                                      }, 1032, ["value"])
                                    ]),
                                    _: 2
                                  }, 1024);
                                }), 64))
                              ]),
                              _: 1
                            })
                          ]),
                          _: 2
                        }, 1032, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      createVNode("div", { class: "min-w-[80px]" }, [
                        createVNode(_component_UiLabel, { class: "font-light text-neutral-400" }, {
                          default: withCtx(() => [
                            createTextVNode(" \u0414\u043B\u0438\u043D\u0430 (\u043C) "),
                            !n.length ? (openBlock(), createBlock("span", {
                              key: 0,
                              class: "text-red-500"
                            }, "*")) : createCommentVNode("", true)
                          ]),
                          _: 2
                        }, 1024),
                        createVNode(_component_UiInput, {
                          modelValue: n.length,
                          "onUpdate:modelValue": ($event) => n.length = $event,
                          modelModifiers: { number: true },
                          class: "h-8 bg-neutral-800 text-neutral-300 placeholder:text-neutral-600 border-neutral-500/20",
                          type: "number",
                          placeholder: "\u043C"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ])
                    ])
                  ]),
                  _: 2
                }, 1024)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div>`);
      });
      _push(`<!--]--><!--[-->`);
      ssrRenderList(unref(current).form.lightings, (l, idx) => {
        _push(`<div class="flex items-center">`);
        if (!l.color || !l.length || !l.elements) {
          _push(`<span class="text-red-500">*</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(ssrRenderComponent(_component_UiPopover, null, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="flex h-6 items-center text-neutral-300 bg-neutral-800 border-1 border-neutral-500/20 rounded-sm"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UiPopoverTrigger, { class: "text-sm p-1 bg-transparent hover:underline cursor-pointer" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<span${_scopeId2}> \u041F\u043E\u0434\u0441\u0432\u0435\u0442\u043A\u0430 - ${ssrInterpolate(l.color)} - ${ssrInterpolate(l.elements)}\u044D\u043B./${ssrInterpolate(l.length)}\u043C </span>`);
                  } else {
                    return [
                      createVNode("span", null, " \u041F\u043E\u0434\u0441\u0432\u0435\u0442\u043A\u0430 - " + toDisplayString(l.color) + " - " + toDisplayString(l.elements) + "\u044D\u043B./" + toDisplayString(l.length) + "\u043C ", 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`<button class="flex rounded bg-transparent mr-1 cursor-pointer"${_scopeId}>`);
              _push2(ssrRenderComponent(unref(X), { class: "w-4 x-4" }, null, _parent2, _scopeId));
              _push2(`</button></div>`);
              _push2(ssrRenderComponent(_component_UiPopoverContent, { class: "w-[400px] bg-neutral-700" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="flex gap-2 items-center"${_scopeId2}><div class="w-full"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_UiLabel, { class: "font-light text-neutral-400" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(` \u0426\u0432\u0435\u0442 `);
                          if (!l.color) {
                            _push4(`<span class="text-red-500"${_scopeId3}>*</span>`);
                          } else {
                            _push4(`<!---->`);
                          }
                        } else {
                          return [
                            createTextVNode(" \u0426\u0432\u0435\u0442 "),
                            !l.color ? (openBlock(), createBlock("span", {
                              key: 0,
                              class: "text-red-500"
                            }, "*")) : createCommentVNode("", true)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_UiSelect, {
                      modelValue: l.color,
                      "onUpdate:modelValue": ($event) => l.color = $event
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_UiSelectTrigger, { class: "h-8 bg-neutral-700 text-neutral-300 border-neutral-500/20" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_UiSelectValue, { placeholder: "" }, null, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(_component_UiSelectValue, { placeholder: "" })
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_component_UiSelectContent, { class: "bg-neutral-800 text-neutral-300" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<!--[-->`);
                                ssrRenderList(neonColors, (item, neonColorsIdx) => {
                                  _push5(ssrRenderComponent(_component_UiSelectGroup, {
                                    key: neonColorsIdx,
                                    class: "p-0.5"
                                  }, {
                                    default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        _push6(ssrRenderComponent(_component_UiSelectItem, {
                                          value: item,
                                          class: "py-0 pr-0"
                                        }, {
                                          default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                            if (_push7) {
                                              _push7(`${ssrInterpolate(item)}`);
                                            } else {
                                              return [
                                                createTextVNode(toDisplayString(item), 1)
                                              ];
                                            }
                                          }),
                                          _: 2
                                        }, _parent6, _scopeId5));
                                      } else {
                                        return [
                                          createVNode(_component_UiSelectItem, {
                                            value: item,
                                            class: "py-0 pr-0"
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(item), 1)
                                            ]),
                                            _: 2
                                          }, 1032, ["value"])
                                        ];
                                      }
                                    }),
                                    _: 2
                                  }, _parent5, _scopeId4));
                                });
                                _push5(`<!--]-->`);
                              } else {
                                return [
                                  (openBlock(), createBlock(Fragment, null, renderList(neonColors, (item, neonColorsIdx) => {
                                    return createVNode(_component_UiSelectGroup, {
                                      key: neonColorsIdx,
                                      class: "p-0.5"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_UiSelectItem, {
                                          value: item,
                                          class: "py-0 pr-0"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(item), 1)
                                          ]),
                                          _: 2
                                        }, 1032, ["value"])
                                      ]),
                                      _: 2
                                    }, 1024);
                                  }), 64))
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_UiSelectTrigger, { class: "h-8 bg-neutral-700 text-neutral-300 border-neutral-500/20" }, {
                              default: withCtx(() => [
                                createVNode(_component_UiSelectValue, { placeholder: "" })
                              ]),
                              _: 1
                            }),
                            createVNode(_component_UiSelectContent, { class: "bg-neutral-800 text-neutral-300" }, {
                              default: withCtx(() => [
                                (openBlock(), createBlock(Fragment, null, renderList(neonColors, (item, neonColorsIdx) => {
                                  return createVNode(_component_UiSelectGroup, {
                                    key: neonColorsIdx,
                                    class: "p-0.5"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_UiSelectItem, {
                                        value: item,
                                        class: "py-0 pr-0"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(item), 1)
                                        ]),
                                        _: 2
                                      }, 1032, ["value"])
                                    ]),
                                    _: 2
                                  }, 1024);
                                }), 64))
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(`</div><div${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_UiLabel, { class: "font-light text-neutral-400" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(` \u042D\u043B\u0435\u043C\u0435\u043D\u0442\u044B `);
                          if (!l.elements) {
                            _push4(`<span class="text-red-500"${_scopeId3}>*</span>`);
                          } else {
                            _push4(`<!---->`);
                          }
                        } else {
                          return [
                            createTextVNode(" \u042D\u043B\u0435\u043C\u0435\u043D\u0442\u044B "),
                            !l.elements ? (openBlock(), createBlock("span", {
                              key: 0,
                              class: "text-red-500"
                            }, "*")) : createCommentVNode("", true)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_UiInput, {
                      modelValue: l.elements,
                      "onUpdate:modelValue": ($event) => l.elements = $event,
                      modelModifiers: { number: true },
                      class: "h-8 bg-neutral-800 text-neutral-300 placeholder:text-neutral-600 border-neutral-500/20",
                      type: "number"
                    }, null, _parent3, _scopeId2));
                    _push3(`</div><div class="min-w-[80px]"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_UiLabel, { class: "font-light text-neutral-400" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(` \u0414\u043B\u0438\u043D\u0430 (\u043C) `);
                          if (!l.length) {
                            _push4(`<span class="text-red-500"${_scopeId3}>*</span>`);
                          } else {
                            _push4(`<!---->`);
                          }
                        } else {
                          return [
                            createTextVNode(" \u0414\u043B\u0438\u043D\u0430 (\u043C) "),
                            !l.length ? (openBlock(), createBlock("span", {
                              key: 0,
                              class: "text-red-500"
                            }, "*")) : createCommentVNode("", true)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_UiInput, {
                      modelValue: l.length,
                      "onUpdate:modelValue": ($event) => l.length = $event,
                      modelModifiers: { number: true },
                      class: "h-8 bg-neutral-800 text-neutral-300 placeholder:text-neutral-600 border-neutral-500/20",
                      type: "number",
                      placeholder: "\u043C"
                    }, null, _parent3, _scopeId2));
                    _push3(`</div></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "flex gap-2 items-center" }, [
                        createVNode("div", { class: "w-full" }, [
                          createVNode(_component_UiLabel, { class: "font-light text-neutral-400" }, {
                            default: withCtx(() => [
                              createTextVNode(" \u0426\u0432\u0435\u0442 "),
                              !l.color ? (openBlock(), createBlock("span", {
                                key: 0,
                                class: "text-red-500"
                              }, "*")) : createCommentVNode("", true)
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(_component_UiSelect, {
                            modelValue: l.color,
                            "onUpdate:modelValue": ($event) => l.color = $event
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_UiSelectTrigger, { class: "h-8 bg-neutral-700 text-neutral-300 border-neutral-500/20" }, {
                                default: withCtx(() => [
                                  createVNode(_component_UiSelectValue, { placeholder: "" })
                                ]),
                                _: 1
                              }),
                              createVNode(_component_UiSelectContent, { class: "bg-neutral-800 text-neutral-300" }, {
                                default: withCtx(() => [
                                  (openBlock(), createBlock(Fragment, null, renderList(neonColors, (item, neonColorsIdx) => {
                                    return createVNode(_component_UiSelectGroup, {
                                      key: neonColorsIdx,
                                      class: "p-0.5"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_UiSelectItem, {
                                          value: item,
                                          class: "py-0 pr-0"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(item), 1)
                                          ]),
                                          _: 2
                                        }, 1032, ["value"])
                                      ]),
                                      _: 2
                                    }, 1024);
                                  }), 64))
                                ]),
                                _: 1
                              })
                            ]),
                            _: 2
                          }, 1032, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        createVNode("div", null, [
                          createVNode(_component_UiLabel, { class: "font-light text-neutral-400" }, {
                            default: withCtx(() => [
                              createTextVNode(" \u042D\u043B\u0435\u043C\u0435\u043D\u0442\u044B "),
                              !l.elements ? (openBlock(), createBlock("span", {
                                key: 0,
                                class: "text-red-500"
                              }, "*")) : createCommentVNode("", true)
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(_component_UiInput, {
                            modelValue: l.elements,
                            "onUpdate:modelValue": ($event) => l.elements = $event,
                            modelModifiers: { number: true },
                            class: "h-8 bg-neutral-800 text-neutral-300 placeholder:text-neutral-600 border-neutral-500/20",
                            type: "number"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        createVNode("div", { class: "min-w-[80px]" }, [
                          createVNode(_component_UiLabel, { class: "font-light text-neutral-400" }, {
                            default: withCtx(() => [
                              createTextVNode(" \u0414\u043B\u0438\u043D\u0430 (\u043C) "),
                              !l.length ? (openBlock(), createBlock("span", {
                                key: 0,
                                class: "text-red-500"
                              }, "*")) : createCommentVNode("", true)
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(_component_UiInput, {
                            modelValue: l.length,
                            "onUpdate:modelValue": ($event) => l.length = $event,
                            modelModifiers: { number: true },
                            class: "h-8 bg-neutral-800 text-neutral-300 placeholder:text-neutral-600 border-neutral-500/20",
                            type: "number",
                            placeholder: "\u043C"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ])
                      ])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode("div", { class: "flex h-6 items-center text-neutral-300 bg-neutral-800 border-1 border-neutral-500/20 rounded-sm" }, [
                  createVNode(_component_UiPopoverTrigger, { class: "text-sm p-1 bg-transparent hover:underline cursor-pointer" }, {
                    default: withCtx(() => [
                      createVNode("span", null, " \u041F\u043E\u0434\u0441\u0432\u0435\u0442\u043A\u0430 - " + toDisplayString(l.color) + " - " + toDisplayString(l.elements) + "\u044D\u043B./" + toDisplayString(l.length) + "\u043C ", 1)
                    ]),
                    _: 2
                  }, 1024),
                  createVNode("button", {
                    class: "flex rounded bg-transparent mr-1 cursor-pointer",
                    onClick: ($event) => removeLighting(idx)
                  }, [
                    createVNode(unref(X), { class: "w-4 x-4" })
                  ], 8, ["onClick"])
                ]),
                createVNode(_component_UiPopoverContent, { class: "w-[400px] bg-neutral-700" }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "flex gap-2 items-center" }, [
                      createVNode("div", { class: "w-full" }, [
                        createVNode(_component_UiLabel, { class: "font-light text-neutral-400" }, {
                          default: withCtx(() => [
                            createTextVNode(" \u0426\u0432\u0435\u0442 "),
                            !l.color ? (openBlock(), createBlock("span", {
                              key: 0,
                              class: "text-red-500"
                            }, "*")) : createCommentVNode("", true)
                          ]),
                          _: 2
                        }, 1024),
                        createVNode(_component_UiSelect, {
                          modelValue: l.color,
                          "onUpdate:modelValue": ($event) => l.color = $event
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_UiSelectTrigger, { class: "h-8 bg-neutral-700 text-neutral-300 border-neutral-500/20" }, {
                              default: withCtx(() => [
                                createVNode(_component_UiSelectValue, { placeholder: "" })
                              ]),
                              _: 1
                            }),
                            createVNode(_component_UiSelectContent, { class: "bg-neutral-800 text-neutral-300" }, {
                              default: withCtx(() => [
                                (openBlock(), createBlock(Fragment, null, renderList(neonColors, (item, neonColorsIdx) => {
                                  return createVNode(_component_UiSelectGroup, {
                                    key: neonColorsIdx,
                                    class: "p-0.5"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_UiSelectItem, {
                                        value: item,
                                        class: "py-0 pr-0"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(item), 1)
                                        ]),
                                        _: 2
                                      }, 1032, ["value"])
                                    ]),
                                    _: 2
                                  }, 1024);
                                }), 64))
                              ]),
                              _: 1
                            })
                          ]),
                          _: 2
                        }, 1032, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      createVNode("div", null, [
                        createVNode(_component_UiLabel, { class: "font-light text-neutral-400" }, {
                          default: withCtx(() => [
                            createTextVNode(" \u042D\u043B\u0435\u043C\u0435\u043D\u0442\u044B "),
                            !l.elements ? (openBlock(), createBlock("span", {
                              key: 0,
                              class: "text-red-500"
                            }, "*")) : createCommentVNode("", true)
                          ]),
                          _: 2
                        }, 1024),
                        createVNode(_component_UiInput, {
                          modelValue: l.elements,
                          "onUpdate:modelValue": ($event) => l.elements = $event,
                          modelModifiers: { number: true },
                          class: "h-8 bg-neutral-800 text-neutral-300 placeholder:text-neutral-600 border-neutral-500/20",
                          type: "number"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      createVNode("div", { class: "min-w-[80px]" }, [
                        createVNode(_component_UiLabel, { class: "font-light text-neutral-400" }, {
                          default: withCtx(() => [
                            createTextVNode(" \u0414\u043B\u0438\u043D\u0430 (\u043C) "),
                            !l.length ? (openBlock(), createBlock("span", {
                              key: 0,
                              class: "text-red-500"
                            }, "*")) : createCommentVNode("", true)
                          ]),
                          _: 2
                        }, 1024),
                        createVNode(_component_UiInput, {
                          modelValue: l.length,
                          "onUpdate:modelValue": ($event) => l.length = $event,
                          modelModifiers: { number: true },
                          class: "h-8 bg-neutral-800 text-neutral-300 placeholder:text-neutral-600 border-neutral-500/20",
                          type: "number",
                          placeholder: "\u043C"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ])
                    ])
                  ]),
                  _: 2
                }, 1024)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div>`);
      });
      _push(`<!--]--></div></div><div class="relative border-b-1 border-neutral-500 mb-5 mt-8"><span class="absolute top-[-9px] left-[50%] translate-x-[-50%] text-neutral-400 bg-neutral-800 text-xs font-medium px-1">\u0423\u043F\u0430\u043A\u043E\u0432\u043A\u0430/\u041A\u043E\u043C\u043F\u043B\u0435\u043A\u0442\u0430\u0446\u0438\u044F</span></div><div class="flex flex-col gap-2"><div class="flex gap-2">`);
      _push(ssrRenderComponent(_component_UiLabel, { class: "font-medium flex text-neutral-400 self-center whitespace-nowrap" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (!unref(current).form.wireLength) {
              _push2(`<span class="text-red-500"${_scopeId}>*</span>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(` \u041F\u0440\u043E\u0432\u043E\u0434 \u043E\u0442 \u0432\u044B\u0432\u0435\u0441\u043A\u0438: `);
          } else {
            return [
              !unref(current).form.wireLength ? (openBlock(), createBlock("span", {
                key: 0,
                class: "text-red-500"
              }, "*")) : createCommentVNode("", true),
              createTextVNode(" \u041F\u0440\u043E\u0432\u043E\u0434 \u043E\u0442 \u0432\u044B\u0432\u0435\u0441\u043A\u0438: ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UiInput, {
        modelValue: unref(current).form.wireLength,
        "onUpdate:modelValue": ($event) => unref(current).form.wireLength = $event,
        class: "h-8 bg-neutral-800 text-neutral-300 placeholder:text-neutral-600 border-neutral-500/20",
        placeholder: "\u0414\u043B\u0438\u043D\u0430"
      }, null, _parent));
      _push(`</div><div class="flex gap-2">`);
      _push(ssrRenderComponent(_component_UiLabel, { class: "font-medium flex text-neutral-400 self-center" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (!unref(current).form.adapter) {
              _push2(`<span class="text-red-500"${_scopeId}>*</span>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(` \u0411\u043B\u043E\u043A: `);
          } else {
            return [
              !unref(current).form.adapter ? (openBlock(), createBlock("span", {
                key: 0,
                class: "text-red-500"
              }, "*")) : createCommentVNode("", true),
              createTextVNode(" \u0411\u043B\u043E\u043A: ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UiHoverCard, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UiHoverCardTrigger, { class: "w-full" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UiInput, {
                    modelValue: unref(current).form.adapter,
                    "onUpdate:modelValue": ($event) => unref(current).form.adapter = $event,
                    class: "h-8 w-full bg-neutral-800 text-neutral-300 placeholder:text-neutral-600 border-neutral-500/20",
                    placeholder: ""
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UiInput, {
                      modelValue: unref(current).form.adapter,
                      "onUpdate:modelValue": ($event) => unref(current).form.adapter = $event,
                      class: "h-8 w-full bg-neutral-800 text-neutral-300 placeholder:text-neutral-600 border-neutral-500/20",
                      placeholder: ""
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UiHoverCardContent, { class: "p-1 w-[150px]" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(adapters, (adapter) => {
                    _push3(`<div class="hover:bg-slate-100 text-gray-400"${_scopeId2}>${ssrInterpolate(adapter)}</div>`);
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [
                    (openBlock(), createBlock(Fragment, null, renderList(adapters, (adapter) => {
                      return createVNode("div", {
                        key: adapter,
                        class: "hover:bg-slate-100 text-gray-400",
                        onClick: () => unref(current).form.adapter = adapter
                      }, toDisplayString(adapter), 9, ["onClick"]);
                    }), 64))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UiHoverCardTrigger, { class: "w-full" }, {
                default: withCtx(() => [
                  createVNode(_component_UiInput, {
                    modelValue: unref(current).form.adapter,
                    "onUpdate:modelValue": ($event) => unref(current).form.adapter = $event,
                    class: "h-8 w-full bg-neutral-800 text-neutral-300 placeholder:text-neutral-600 border-neutral-500/20",
                    placeholder: ""
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                _: 1
              }),
              createVNode(_component_UiHoverCardContent, { class: "p-1 w-[150px]" }, {
                default: withCtx(() => [
                  (openBlock(), createBlock(Fragment, null, renderList(adapters, (adapter) => {
                    return createVNode("div", {
                      key: adapter,
                      class: "hover:bg-slate-100 text-gray-400",
                      onClick: () => unref(current).form.adapter = adapter
                    }, toDisplayString(adapter), 9, ["onClick"]);
                  }), 64))
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="flex gap-2">`);
      _push(ssrRenderComponent(_component_UiLabel, { class: "font-medium flex text-neutral-400 self-center whitespace-nowrap" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (!unref(current).form.plug) {
              _push2(`<span class="text-red-500"${_scopeId}>*</span>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(` \u041F\u0440\u043E\u0432\u043E\u0434 \u043E\u0442 \u0431\u043B\u043E\u043A\u0430: `);
          } else {
            return [
              !unref(current).form.plug ? (openBlock(), createBlock("span", {
                key: 0,
                class: "text-red-500"
              }, "*")) : createCommentVNode("", true),
              createTextVNode(" \u041F\u0440\u043E\u0432\u043E\u0434 \u043E\u0442 \u0431\u043B\u043E\u043A\u0430: ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UiInput, {
        modelValue: unref(current).form.plug,
        "onUpdate:modelValue": ($event) => unref(current).form.plug = $event,
        class: "h-8 bg-neutral-800 text-neutral-300 placeholder:text-neutral-600 border-neutral-500/20",
        placeholder: "\u0414\u043B\u0438\u043D\u0430/\u0426\u0432\u0435\u0442"
      }, null, _parent));
      _push(`</div><div class="flex gap-2">`);
      _push(ssrRenderComponent(_component_UiLabel, { class: "font-medium flex text-neutral-400 self-center" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (!unref(current).form.fitting) {
              _push2(`<span class="text-red-500"${_scopeId}>*</span>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(` \u0424\u0443\u0440\u043D\u0438\u0442\u0443\u0440\u0430: `);
          } else {
            return [
              !unref(current).form.fitting ? (openBlock(), createBlock("span", {
                key: 0,
                class: "text-red-500"
              }, "*")) : createCommentVNode("", true),
              createTextVNode(" \u0424\u0443\u0440\u043D\u0438\u0442\u0443\u0440\u0430: ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UiHoverCard, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UiHoverCardTrigger, { class: "w-full" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UiInput, {
                    modelValue: unref(current).form.fitting,
                    "onUpdate:modelValue": ($event) => unref(current).form.fitting = $event,
                    class: "h-8 w-full bg-neutral-800 text-neutral-300 placeholder:text-neutral-600 border-neutral-500/20",
                    placeholder: "\u0424\u0443\u0440\u043D\u0438\u0442\u0443\u0440\u0430"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UiInput, {
                      modelValue: unref(current).form.fitting,
                      "onUpdate:modelValue": ($event) => unref(current).form.fitting = $event,
                      class: "h-8 w-full bg-neutral-800 text-neutral-300 placeholder:text-neutral-600 border-neutral-500/20",
                      placeholder: "\u0424\u0443\u0440\u043D\u0438\u0442\u0443\u0440\u0430"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UiHoverCardContent, { class: "p-1" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(fittings, (fitting) => {
                    _push3(`<div class="hover:bg-slate-100 text-gray-400"${_scopeId2}>${ssrInterpolate(fitting)}</div>`);
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [
                    (openBlock(), createBlock(Fragment, null, renderList(fittings, (fitting) => {
                      return createVNode("div", {
                        key: fitting,
                        class: "hover:bg-slate-100 text-gray-400",
                        onClick: () => unref(current).form.fitting += fitting
                      }, toDisplayString(fitting), 9, ["onClick"]);
                    }), 64))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UiHoverCardTrigger, { class: "w-full" }, {
                default: withCtx(() => [
                  createVNode(_component_UiInput, {
                    modelValue: unref(current).form.fitting,
                    "onUpdate:modelValue": ($event) => unref(current).form.fitting = $event,
                    class: "h-8 w-full bg-neutral-800 text-neutral-300 placeholder:text-neutral-600 border-neutral-500/20",
                    placeholder: "\u0424\u0443\u0440\u043D\u0438\u0442\u0443\u0440\u0430"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                _: 1
              }),
              createVNode(_component_UiHoverCardContent, { class: "p-1" }, {
                default: withCtx(() => [
                  (openBlock(), createBlock(Fragment, null, renderList(fittings, (fitting) => {
                    return createVNode("div", {
                      key: fitting,
                      class: "hover:bg-slate-100 text-gray-400",
                      onClick: () => unref(current).form.fitting += fitting
                    }, toDisplayString(fitting), 9, ["onClick"]);
                  }), 64))
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="flex gap-2">`);
      _push(ssrRenderComponent(_component_UiLabel, { class: "font-medium text-neutral-400 self-center" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u0414\u0438\u043C\u043C\u0435\u0440: ${ssrInterpolate(unref(current).form.dimmer ? "\u0414\u0430" : "\u041D\u0435\u0442")}`);
          } else {
            return [
              createTextVNode(" \u0414\u0438\u043C\u043C\u0435\u0440: " + toDisplayString(unref(current).form.dimmer ? "\u0414\u0430" : "\u041D\u0435\u0442"), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UiSwitch, {
        checked: unref(current).form.dimmer,
        "onUpdate:checked": ($event) => unref(current).form.dimmer = $event,
        class: "scale-75 data-[state=checked]:bg-lime-900 data-[state=unchecked]:bg-neutral-500 justify-self-start",
        "thumb-class": "bg-neutral-400 data-[state=checked]:bg-neutral-300"
      }, null, _parent));
      _push(`</div><div class="flex gap-2">`);
      _push(ssrRenderComponent(_component_UiLabel, { class: "font-medium text-neutral-400 self-center" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u0412\u044B\u043A\u043B\u044E\u0447\u0430\u0442\u0435\u043B\u044C: ${ssrInterpolate(unref(current).form.switch ? "\u0414\u0430" : "\u041D\u0435\u0442")}`);
          } else {
            return [
              createTextVNode(" \u0412\u044B\u043A\u043B\u044E\u0447\u0430\u0442\u0435\u043B\u044C: " + toDisplayString(unref(current).form.switch ? "\u0414\u0430" : "\u041D\u0435\u0442"), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UiSwitch, {
        checked: unref(current).form.switch,
        "onUpdate:checked": ($event) => unref(current).form.switch = $event,
        class: "scale-75 data-[state=checked]:bg-lime-900 data-[state=unchecked]:bg-neutral-500 justify-self-start",
        "thumb-class": "bg-neutral-400 data-[state=checked]:bg-neutral-300"
      }, null, _parent));
      _push(`</div><div class="flex gap-2">`);
      _push(ssrRenderComponent(_component_UiLabel, { class: "font-medium text-neutral-400 self-center" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u041F\u043E\u0434\u0430\u0440\u043E\u043A: ${ssrInterpolate(unref(current).form.gift ? "\u0414\u0430" : "\u041D\u0435\u0442")}`);
          } else {
            return [
              createTextVNode(" \u041F\u043E\u0434\u0430\u0440\u043E\u043A: " + toDisplayString(unref(current).form.gift ? "\u0414\u0430" : "\u041D\u0435\u0442"), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UiSwitch, {
        checked: unref(current).form.gift,
        "onUpdate:checked": ($event) => unref(current).form.gift = $event,
        class: "scale-75 data-[state=checked]:bg-lime-900 data-[state=unchecked]:bg-neutral-500 justify-self-start",
        "thumb-class": "bg-neutral-400 data-[state=checked]:bg-neutral-300"
      }, null, _parent));
      _push(`</div><div class="flex gap-2">`);
      _push(ssrRenderComponent(_component_UiLabel, { class: "font-medium text-neutral-400 self-center" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u041F\u043E\u0434\u0441\u0442\u0430\u0432\u043A\u0430: ${ssrInterpolate(unref(current).form.stand ? "\u0414\u0430" : "\u041D\u0435\u0442")}`);
          } else {
            return [
              createTextVNode(" \u041F\u043E\u0434\u0441\u0442\u0430\u0432\u043A\u0430: " + toDisplayString(unref(current).form.stand ? "\u0414\u0430" : "\u041D\u0435\u0442"), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UiSwitch, {
        checked: unref(current).form.stand,
        "onUpdate:checked": ($event) => unref(current).form.stand = $event,
        class: "scale-75 data-[state=checked]:bg-lime-900 data-[state=unchecked]:bg-neutral-500 justify-self-start",
        "thumb-class": "bg-neutral-400 data-[state=checked]:bg-neutral-300"
      }, null, _parent));
      _push(`</div><div class="flex gap-2">`);
      _push(ssrRenderComponent(_component_UiLabel, { class: "font-medium text-neutral-400 self-center" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u041F\u043E\u0434\u0430\u0440\u043E\u0447\u043D\u0430\u044F \u0443\u043F\u0430\u043A\u043E\u0432\u043A\u0430: ${ssrInterpolate(unref(current).form.giftPack ? "\u0414\u0430" : "\u041D\u0435\u0442")}`);
          } else {
            return [
              createTextVNode(" \u041F\u043E\u0434\u0430\u0440\u043E\u0447\u043D\u0430\u044F \u0443\u043F\u0430\u043A\u043E\u0432\u043A\u0430: " + toDisplayString(unref(current).form.giftPack ? "\u0414\u0430" : "\u041D\u0435\u0442"), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UiSwitch, {
        checked: unref(current).form.giftPack,
        "onUpdate:checked": ($event) => unref(current).form.giftPack = $event,
        class: "scale-75 data-[state=checked]:bg-lime-900 data-[state=unchecked]:bg-neutral-500 justify-self-start",
        "thumb-class": "bg-neutral-400 data-[state=checked]:bg-neutral-300"
      }, null, _parent));
      _push(`</div><div class="flex gap-2">`);
      _push(ssrRenderComponent(_component_UiLabel, { class: "font-medium text-neutral-400 self-center" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u0414\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u044B: ${ssrInterpolate(unref(current).form.docs ? "\u0414\u0430" : "\u041D\u0435\u0442")}`);
          } else {
            return [
              createTextVNode(" \u0414\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u044B: " + toDisplayString(unref(current).form.docs ? "\u0414\u0430" : "\u041D\u0435\u0442"), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UiSwitch, {
        checked: unref(current).form.docs,
        "onUpdate:checked": ($event) => unref(current).form.docs = $event,
        class: "scale-75 data-[state=checked]:bg-lime-900 data-[state=unchecked]:bg-neutral-500 justify-self-start",
        "thumb-class": "bg-neutral-400 data-[state=checked]:bg-neutral-300"
      }, null, _parent));
      _push(`</div></div><div class="flex flex-col my-6 gap-2">`);
      _push(ssrRenderComponent(_component_UiLabel, { class: "font-medium text-neutral-400 self-start" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u0414\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u0430\u044F \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F: `);
          } else {
            return [
              createTextVNode(" \u0414\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u0430\u044F \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F: ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UiTextarea, {
        modelValue: unref(current).form.description,
        "onUpdate:modelValue": ($event) => unref(current).form.description = $event,
        class: "min-h-34 bg-neutral-800 text-neutral-300 placeholder:text-neutral-600 border-neutral-500/20",
        placeholder: "\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435"
      }, null, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_UiButton, {
        size: "sm",
        class: "text-red-200 bg-red-700 hover:bg-red-700/80 mb-6",
        disabled: saving.value,
        onClick: () => deleteOrderAt(activeIndex.value)
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0432\u044B\u0432\u0435\u0441\u043A\u0443 `);
          } else {
            return [
              createTextVNode(" \u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0432\u044B\u0432\u0435\u0441\u043A\u0443 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      if (errorMsg.value) {
        _push(`<div class="text-sm text-red-500 mt-3 mb-6">${ssrInterpolate(errorMsg.value)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/my/kanban/TaskOrder.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$5 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    id: "Layer_1",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    "xmlns:xlink": "http://www.w3.org/1999/xlink",
    viewBox: "0 0 512 512",
    "xml:space": "preserve",
    fill: "currentColor",
    stroke: "currentColor"
  }, _attrs))}><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path style="${ssrRenderStyle({ "fill": "#f15642" })}" d="M128,0c-17.6,0-32,14.4-32,32v448c0,17.6,14.4,32,32,32h320c17.6,0,32-14.4,32-32V128L352,0H128z"></path><path style="${ssrRenderStyle({ "fill": "#f15642" })}" d="M384,128h96L352,0v96C352,113.6,366.4,128,384,128z"></path><polygon style="${ssrRenderStyle({ "fill": "#f15642" })}" points="480,224 384,128 480,128 "></polygon><path style="${ssrRenderStyle({ "fill": "#f15642" })}" d="M416,416c0,8.8-7.2,16-16,16H48c-8.8,0-16-7.2-16-16V256c0-8.8,7.2-16,16-16h352c8.8,0,16,7.2,16,16 V416z"></path><g><path style="${ssrRenderStyle({ "fill": "#ffffff" })}" d="M101.744,303.152c0-4.224,3.328-8.832,8.688-8.832h29.552c16.64,0,31.616,11.136,31.616,32.48 c0,20.224-14.976,31.488-31.616,31.488h-21.36v16.896c0,5.632-3.584,8.816-8.192,8.816c-4.224,0-8.688-3.184-8.688-8.816V303.152z M118.624,310.432v31.872h21.36c8.576,0,15.36-7.568,15.36-15.504c0-8.944-6.784-16.368-15.36-16.368H118.624z"></path><path style="${ssrRenderStyle({ "fill": "#ffffff" })}" d="M196.656,384c-4.224,0-8.832-2.304-8.832-7.92v-72.672c0-4.592,4.608-7.936,8.832-7.936h29.296 c58.464,0,57.184,88.528,1.152,88.528H196.656z M204.72,311.088V368.4h21.232c34.544,0,36.08-57.312,0-57.312H204.72z"></path><path style="${ssrRenderStyle({ "fill": "#ffffff" })}" d="M303.872,312.112v20.336h32.624c4.608,0,9.216,4.608,9.216,9.072c0,4.224-4.608,7.68-9.216,7.68 h-32.624v26.864c0,4.48-3.184,7.92-7.664,7.92c-5.632,0-9.072-3.44-9.072-7.92v-72.672c0-4.592,3.456-7.936,9.072-7.936h44.912 c5.632,0,8.96,3.344,8.96,7.936c0,4.096-3.328,8.704-8.96,8.704h-37.248V312.112z"></path></g><path style="${ssrRenderStyle({ "fill": "#f15642" })}" d="M400,432H96v16h304c8.8,0,16-7.2,16-16v-16C416,424.8,408.8,432,400,432z"></path></g></svg>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/icons/Pdf.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$4 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    id: "Layer_1",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    "xmlns:xlink": "http://www.w3.org/1999/xlink",
    viewBox: "0 0 512 512",
    "xml:space": "preserve",
    fill: "currentColor",
    stroke: "currentColor"
  }, _attrs))}><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path style="${ssrRenderStyle({ "fill": "#84bd5a" })}" d="M128,0c-17.6,0-32,14.4-32,32v448c0,17.6,14.4,32,32,32h320c17.6,0,32-14.4,32-32V128L352,0H128z"></path><path style="${ssrRenderStyle({ "fill": "#84bd5a" })}" d="M384,128h96L352,0v96C352,113.6,366.4,128,384,128z"></path><polygon style="${ssrRenderStyle({ "fill": "#84bd5a" })}" points="480,224 384,128 480,128 "></polygon><path style="${ssrRenderStyle({ "fill": "#84bd5a" })}" d="M416,416c0,8.8-7.2,16-16,16H48c-8.8,0-16-7.2-16-16V256c0-8.8,7.2-16,16-16h352c8.8,0,16,7.2,16,16 V416z"></path><g><path style="${ssrRenderStyle({ "fill": "#ffffff" })}" d="M90.592,339.088c0-24.688,15.472-45.904,44.912-45.904c11.12,0,19.952,3.312,29.296,11.376 c3.456,3.184,3.824,8.832,0.368,12.4c-3.456,3.056-8.704,2.688-11.76-0.368c-5.248-5.504-10.624-7.024-17.904-7.024 c-19.696,0-29.168,13.936-29.168,29.536c0,15.872,9.328,30.464,29.168,30.464c7.28,0,14.064-2.96,19.952-8.192 c3.968-3.072,9.472-1.552,11.76,1.536c2.048,2.816,3.072,7.536-1.408,12.016c-8.96,8.336-19.696,9.984-30.32,9.984 C104.544,384.912,90.592,363.792,90.592,339.088z"></path><path style="${ssrRenderStyle({ "fill": "#ffffff" })}" d="M195.056,384c-4.224,0-8.832-2.304-8.832-7.92v-72.672c0-4.592,4.608-7.936,8.832-7.936h29.296 c58.464,0,57.184,88.528,1.152,88.528H195.056z M203.12,311.088V368.4h21.232c34.544,0,36.08-57.312,0-57.312H203.12z"></path><path style="${ssrRenderStyle({ "fill": "#ffffff" })}" d="M302.592,375.68c0,11.12-17.008,11.52-17.008,0.256V303.28c0-4.464,3.456-7.808,7.664-7.808h34.032 c32.496,0,39.152,43.504,12.032,54.368l17.008,20.736c6.656,9.856-6.656,19.312-14.336,9.6l-19.312-27.648h-20.096v23.152H302.592z M302.592,337.824h24.688c16.64,0,17.664-26.864,0-26.864h-24.688V337.824z"></path></g><path style="${ssrRenderStyle({ "fill": "#84bd5a" })}" d="M400,432H96v16h304c8.8,0,16-7.2,16-16v-16C416,424.8,408.8,432,400,432z"></path></g></svg>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/icons/Cdr.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "ImageViewer",
  __ssrInlineRender: true,
  props: /* @__PURE__ */ mergeModels({
    path: {},
    items: {},
    index: {},
    name: {},
    size: {}
  }, {
    "open": { type: Boolean, ...{ default: false } },
    "openModifiers": {}
  }),
  emits: ["update:open"],
  setup(__props) {
    var _a;
    const open = useModel(__props, "open");
    const props = __props;
    const { getPreviewSrc, refreshPreview } = useAttachments();
    const imgUrl = ref("");
    const curIndex = ref((_a = props.index) != null ? _a : 0);
    const loading = ref(false);
    const viewportRef = ref(null);
    const scale = ref(1);
    const originX = ref(0);
    const originY = ref(0);
    let dragging = false;
    function resetTransform() {
      scale.value = 1;
      originX.value = 0;
      originY.value = 0;
    }
    function isDirectUrl(p) {
      return /^blob:|^data:|^https?:\/\//.test(p || "");
    }
    function currentItem() {
      if (Array.isArray(props.items) && props.items.length > 0) {
        const i = Math.max(0, Math.min(curIndex.value, props.items.length - 1));
        return props.items[i];
      }
      return { path: props.path || "", name: props.name };
    }
    async function ensureUrl() {
      const item = currentItem();
      if (!(item == null ? void 0 : item.path)) {
        imgUrl.value = "";
        return;
      }
      loading.value = true;
      try {
        const p = item.path || "";
        if (isDirectUrl(p)) {
          imgUrl.value = p;
        } else {
          let url = getPreviewSrc(p);
          if (!url) {
            await refreshPreview(p);
            url = getPreviewSrc(p);
          }
          imgUrl.value = url || "";
        }
      } finally {
        loading.value = false;
      }
    }
    watch(
      () => open.value,
      async (v) => {
        var _a2;
        if (v) {
          curIndex.value = (_a2 = props.index) != null ? _a2 : 0;
          resetTransform();
          await ensureUrl();
          setTimeout(() => {
            var _a3, _b;
            return (_b = (_a3 = viewportRef.value) == null ? void 0 : _a3.focus) == null ? void 0 : _b.call(_a3);
          }, 0);
        }
      }
    );
    watch(
      () => props.index,
      (v) => {
        var _a2;
        if (v === void 0 || !open.value) return;
        curIndex.value = Math.max(0, Math.min(v, (((_a2 = props.items) == null ? void 0 : _a2.length) || 1) - 1));
      }
    );
    watch(
      () => props.items,
      async () => {
        var _a2;
        if (!open.value) return;
        curIndex.value = Math.max(
          0,
          Math.min(curIndex.value, (((_a2 = props.items) == null ? void 0 : _a2.length) || 1) - 1)
        );
        await ensureUrl();
      },
      { deep: true }
    );
    return (_ctx, _push, _parent, _attrs) => {
      var _a2, _b, _c, _d, _e;
      if (open.value) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "fixed inset-0 z-[100] bg-black/70" }, _attrs))}><div class="absolute inset-0 flex flex-col"><div class="flex items-center gap-2 p-2 text-white z-10"><div class="ml-auto flex items-center gap-2"><button class="rounded bg-slate-200 px-2 py-1 hover:bg-slate-100 text-slate-900"> \u0421\u043A\u0430\u0447\u0430\u0442\u044C </button></div><button class="rounded bg-slate-200 px-2 py-1 hover:bg-slate-100 text-slate-900"> \u0417\u0430\u043A\u0440\u044B\u0442\u044C </button></div><div class="relative flex-1 outline-none" tabindex="0">`);
        if ((((_a2 = props.items) == null ? void 0 : _a2.length) || 0) > 1) {
          _push(`<button class="text-5xl z-20 absolute cursor-pointer left-2 top-1/2 -translate-y-1/2 text-white h-9 w-9 grid place-items-center" title="\u041F\u0440\u0435\u0434\u044B\u0434\u0443\u0449\u0435\u0435"> \u2039 </button>`);
        } else {
          _push(`<!---->`);
        }
        if ((((_b = props.items) == null ? void 0 : _b.length) || 0) > 1) {
          _push(`<button class="text-5xl z-20 absolute cursor-pointer right-2 top-1/2 -translate-y-1/2 text-white h-9 w-9 grid place-items-center" title="\u0421\u043B\u0435\u0434\u0443\u044E\u0449\u0435\u0435"> \u203A </button>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="absolute inset-0 grid place-items-center"><div class="max-w-full max-h-full" style="${ssrRenderStyle({
          transform: `translate(${originX.value}px, ${originY.value}px) scale(${scale.value})`,
          transformOrigin: "center center",
          transition: unref(dragging) ? "none" : "transform 60ms linear"
        })}">`);
        if (imgUrl.value) {
          _push(`<img${ssrRenderAttr("src", imgUrl.value)}${ssrRenderAttr(
            "alt",
            props.items && ((_c = props.items[curIndex.value]) == null ? void 0 : _c.name) || props.name || ""
          )} class="block max-w-[85vw] max-h-[75vh] md:max-w-[92vw] md:max-h-[85vh] object-contain rounded shadow" loading="eager" referrerpolicy="no-referrer">`);
        } else {
          _push(`<div class="text-white/80 text-sm">\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430\u2026</div>`);
        }
        _push(`</div></div></div><div class="p-2 text-center text-white/80 text-xs truncate">`);
        if ((((_d = props.items) == null ? void 0 : _d.length) || 0) > 1) {
          _push(`<span class="mr-2">${ssrInterpolate(curIndex.value + 1 + "/" + props.items.length)}</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(` ${ssrInterpolate(props.items && ((_e = props.items[curIndex.value]) == null ? void 0 : _e.name) || props.name || "\u0418\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435")}</div></div></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/my/ImageViewer.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
function formatRuDateTime(input, timeZone = "Europe/Moscow") {
  const d = input instanceof Date ? input : new Date(input);
  if (Number.isNaN(d.getTime())) return "";
  return new Intl.DateTimeFormat("ru-RU", {
    timeZone,
    day: "2-digit",
    month: "short",
    // "авг."
    year: "numeric",
    // добавит "г."
    hour: "2-digit",
    minute: "2-digit",
    hour12: false
    // 24-часовой формат
  }).format(d);
}
function getTextarea(el) {
  var _a;
  if (el instanceof HTMLTextAreaElement) return el;
  return ((_a = el.querySelector) == null ? void 0 : _a.call(el, "textarea")) || null;
}
function resize(el) {
  const ta = getTextarea(el);
  if (!ta) return;
  ta.style.height = "auto";
  ta.style.overflow = "hidden";
  ta.style.height = `${ta.scrollHeight}px`;
}
const vAutoResize = {
  mounted(el) {
    const ta = getTextarea(el);
    if (!ta) return;
    const onInput = () => resize(el);
    ta.addEventListener("input", onInput);
    const onForce = () => resize(el);
    el.addEventListener("autoresize:resize", onForce);
    requestAnimationFrame(() => resize(el));
    el._autoResizeCleanup = () => {
      ta.removeEventListener("input", onInput);
      el.removeEventListener("autoresize:resize", onForce);
    };
  },
  updated(el) {
    resize(el);
  },
  unmounted(el) {
    var _a;
    (_a = el._autoResizeCleanup) == null ? void 0 : _a.call(el);
  }
};
const MAX_FILES = 10;
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "TaskComments",
  __ssrInlineRender: true,
  props: {
    taskId: {}
  },
  setup(__props) {
    const {
      getPreviewSrc,
      getDownloadSrc
    } = useAttachments();
    const imageViewer = reactive({
      open: false,
      path: "",
      name: "",
      items: [],
      index: 0
    });
    const deletingIds = ref(/* @__PURE__ */ new Set());
    const { $api } = useNuxtApp();
    const props = __props;
    useTaskApi(() => props.taskId);
    const comments = ref([]);
    const isLoading = ref(false);
    const loadError = ref(null);
    const newText = ref("");
    const isSubmitting = ref(false);
    const pendingFiles = ref([]);
    const pendingPreviews = ref([]);
    ref(null);
    ref(null);
    const isDragOver = ref(false);
    function isPdf(f) {
      const mt = (f.mimeType || "").toLowerCase();
      const name = (f.name || "").toLowerCase();
      return mt.includes("pdf") || name.endsWith(".pdf");
    }
    function isCdr(f) {
      const mt = (f.mimeType || "").toLowerCase();
      const name = (f.name || "").toLowerCase();
      return name.endsWith(".cdr") || mt.includes("corel") || mt.includes("cdr") || mt.includes("vnd.corel");
    }
    function formatFileSize(bytes) {
      if (!bytes && bytes !== 0) return "";
      if (bytes === 0) return "0 B";
      const k = 1024;
      const sizes = ["B", "KB", "MB", "GB", "TB"];
      const i = Math.floor(Math.log(bytes) / Math.log(k));
      return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
    }
    const coverInProgress = ref({});
    function isCovering(path) {
      return !!coverInProgress.value[path];
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_MyUserListItem = _sfc_main$y;
      const _component_IconsPdf = __nuxt_component_1;
      const _component_IconsCdr = __nuxt_component_2;
      const _component_MyImageViewer = _sfc_main$3;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "h-full bg-neutral-700" }, _attrs))}><form class="${ssrRenderClass([unref(isDragOver) ? "ring-2 ring-indigo-500 ring-offset-0" : "", "space-y-1 border-b-1 border-b-neutral-500 pb-2"])}"><textarea${ssrRenderAttrs(mergeProps({
        rows: "3",
        class: "w-full bg-neutral-600/50 text-neutral-300 border-neutral-300 h-[100px] px-3 py-2 focus:outline-none focus:ring-2 focus:ring-neutral-500",
        placeholder: "\u041D\u0430\u043F\u0438\u0448\u0438\u0442\u0435 \u043A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439\u2026 \u041F\u0435\u0440\u0435\u0442\u0430\u0449\u0438\u0442\u0435 \u0444\u0430\u0439\u043B\u044B \u0441\u044E\u0434\u0430, \u0438\u043B\u0438 Ctrl+V \u0434\u043B\u044F \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F"
      }, ssrGetDirectiveProps(_ctx, unref(vAutoResize))), "textarea")}>${ssrInterpolate(unref(newText))}</textarea>`);
      if (unref(pendingFiles).length) {
        _push(`<div class="flex flex-wrap gap-2 px-2"><!--[-->`);
        ssrRenderList(unref(pendingPreviews), (u, i) => {
          var _a;
          _push(`<div class="relative">`);
          if (unref(pendingFiles)[i] && unref(pendingFiles)[i].type.startsWith("image/")) {
            _push(`<img${ssrRenderAttr("src", u)} class="h-20 w-20 rounded-md object-cover cursor-zoom-in" alt="" title="\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u043F\u0440\u0435\u0434\u043F\u0440\u043E\u0441\u043C\u043E\u0442\u0440">`);
          } else if (unref(pendingFiles)[i] && unref(pendingFiles)[i].type.startsWith("video/")) {
            _push(`<video${ssrRenderAttr("src", u)} class="h-20 w-28 rounded-md object-cover" muted controls playsinline></video>`);
          } else {
            _push(`<div class="h-20 w-20 rounded-md bg-neutral-200 text-neutral-600 text-xs flex items-center justify-center px-1 text-center">${ssrInterpolate((_a = unref(pendingFiles)[i]) == null ? void 0 : _a.name.split(".").pop())}</div>`);
          }
          _push(`<button type="button" class="absolute -top-2 -right-2 h-6 w-6 rounded-full bg-white border shadow text-xs" aria-label="\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0444\u0430\u0439\u043B" title="\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0444\u0430\u0439\u043B"> \u2715 </button></div>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="flex items-center justify-between gap-3 px-2"><div class="flex items-center gap-2"><input id="comment-file-input" type="file" class="hidden" multiple accept="image/*,video/*,application/pdf,.cdr,application/x-coreldraw,application/vnd.corel-draw,image/x-cdr"><label for="comment-file-input" class="${ssrRenderClass([
        unref(pendingFiles).length >= MAX_FILES ? "pointer-events-none opacity-50" : "",
        "cursor-pointer rounded-lg px-3 py-1.5 text-sm text-neutral-300 bg-neutral-600 hover:bg-neutral-600/50"
      ])}" title="\u041F\u0440\u0438\u043A\u0440\u0435\u043F\u0438\u0442\u044C \u0444\u0430\u0439\u043B\u044B"> \u041F\u0440\u0438\u043A\u0440\u0435\u043F\u0438\u0442\u044C </label><span class="text-xs text-neutral-500">${ssrInterpolate(unref(pendingFiles).length)}/${ssrInterpolate(MAX_FILES)}</span></div><button type="submit" class="rounded-lg bg-neutral-600 px-4 py-2 text-neutral-300 cursor-pointer text-sm disabled:opacity-50"${ssrIncludeBooleanAttr(
        unref(isSubmitting) || !unref(newText).trim() && unref(pendingFiles).length === 0
      ) ? " disabled" : ""}>${ssrInterpolate(unref(isSubmitting) ? "\u041E\u0442\u043F\u0440\u0430\u0432\u043B\u044F\u0435\u043C\u2026" : "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C")}</button></div></form>`);
      if (unref(isLoading)) {
        _push(`<div class="text-sm text-neutral-500">\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430\u2026</div>`);
      } else if (unref(loadError)) {
        _push(`<div class="text-sm text-red-500">${ssrInterpolate(unref(loadError))}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="space-y-3 p-2 bg-neutral-800 h-full pb-5"><!--[-->`);
      ssrRenderList(unref(comments), (c) => {
        var _a;
        _push(`<div class="rounded-md border-1 border-neutral-500/20 p-2 bg-neutral-600 relative"><button type="button" class="absolute cursor-pointer text-xs top-[-8px] right-[-8px] h-5 w-5 rounded-full border border-neutral-400/40 bg-neutral-700/70 text-neutral-200 hover:bg-neutral-700 focus:outline-none disabled:opacity-50"${ssrRenderAttr("title", unref(deletingIds).has(c.id) ? "\u0423\u0434\u0430\u043B\u044F\u0435\u043C\u2026" : "\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u043A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439")}${ssrIncludeBooleanAttr(unref(deletingIds).has(c.id)) ? " disabled" : ""} aria-label="\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u043A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439"> \u2715 </button><div class="mb-1 flex items-center gap-2 text-xs text-neutral-500 justify-between">`);
        _push(ssrRenderComponent(_component_MyUserListItem, {
          key: c.author.id,
          "full-name": c.author.fullName,
          "avatar-url": c.author.avatarUrl,
          dark: true,
          size: "sm"
        }, null, _parent));
        _push(`<span class="text-neutral-400">${ssrInterpolate(("formatRuDateTime" in _ctx ? _ctx.formatRuDateTime : unref(formatRuDateTime))(c.createdAt))}</span></div><div class="whitespace-pre-wrap text-[15px] text-neutral-300">${ssrInterpolate(c.text)}</div>`);
        if ((_a = c.files) == null ? void 0 : _a.length) {
          _push(`<div class="mt-3 flex flex-col gap-2"><!--[-->`);
          ssrRenderList(c.files, (f) => {
            _push(`<!--[-->`);
            if ((f.mimeType || "").startsWith("image/")) {
              _push(`<div class="overflow-hidden rounded-md border border-neutral-500 bg-neutral-700/40"><img${ssrRenderAttr("src", unref(getPreviewSrc)(f.path))} alt="" class="w-full max-h-[520px] object-contain bg-neutral-800 cursor-zoom-in" loading="lazy" referrerpolicy="no-referrer"><div class="px-2 py-1 flex items-center gap-2"><span class="text-xs text-neutral-300 truncate"${ssrRenderAttr("title", f.name)}>${ssrInterpolate(f.name)}</span><span class="text-[11px] text-neutral-400 ml-auto">${ssrInterpolate(formatFileSize(f.size))}</span></div><div class="px-2 pb-2 flex items-center gap-2"><span class="${ssrRenderClass([
                isCovering(f.path) ? "opacity-60 pointer-events-none" : "",
                "text-xs text-neutral-400 underline cursor-pointer"
              ])}" title="\u041F\u043E\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u043D\u0430 \u043E\u0431\u043B\u043E\u0436\u043A\u0443">${ssrInterpolate(isCovering(f.path) ? "\u0423\u0441\u0442\u0430\u043D\u0430\u0432\u043B\u0438\u0432\u0430\u0435\u043C\u2026" : "\u041F\u043E\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u043D\u0430 \u043E\u0431\u043B\u043E\u0436\u043A\u0443")}</span><span class="text-neutral-500">\xB7</span><span class="text-xs text-neutral-400 underline cursor-pointer" title="\u0421\u043A\u0430\u0447\u0430\u0442\u044C \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435"> \u0421\u043A\u0430\u0447\u0430\u0442\u044C \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435 </span></div></div>`);
            } else if ((f.mimeType || "").startsWith("video/")) {
              _push(`<div class="flex gap-2 items-center relative overflow-hidden rounded-md border border-neutral-500 bg-neutral-700/40 p-1"${ssrRenderAttr("title", f.name)}><video${ssrRenderAttr("src", unref(getDownloadSrc)(f.path))} class="h-24 w-40 object-cover rounded" controls preload="metadata" playsinline></video><div class="flex-1 min-w-0"><div class="text-xs text-neutral-300 truncate"${ssrRenderAttr("title", f.name)}>${ssrInterpolate(f.name)}</div><div class="text-[11px] text-neutral-400">${ssrInterpolate(formatFileSize(f.size))}</div></div></div>`);
            } else if (isPdf(f)) {
              _push(`<button type="button" class="flex gap-2 items-center relative overflow-hidden rounded-md border border-neutral-500 hover:bg-neutral-500/30 cursor-pointer px-2 py-1"${ssrRenderAttr("title", f.name)}>`);
              _push(ssrRenderComponent(_component_IconsPdf, { class: "w-10 h-10" }, null, _parent));
              _push(`<div class="flex-1 min-w-0 flex items-center gap-2"><span class="text-xs text-neutral-300 truncate">${ssrInterpolate(f.name)}</span><span class="text-[11px] text-neutral-400 ml-auto">${ssrInterpolate(formatFileSize(f.size))}</span></div></button>`);
            } else if (isCdr(f)) {
              _push(`<button type="button" class="flex gap-2 items-center relative overflow-hidden rounded-md border border-neutral-500 hover:bg-neutral-500/30 cursor-pointer px-2 py-1"${ssrRenderAttr("title", f.name)}>`);
              _push(ssrRenderComponent(_component_IconsCdr, { class: "w-10 h-10" }, null, _parent));
              _push(`<div class="flex-1 min-w-0 flex items-center gap-2"><span class="text-xs text-neutral-300 truncate">${ssrInterpolate(f.name)}</span><span class="text-[11px] text-neutral-400 ml-auto">${ssrInterpolate(formatFileSize(f.size))}</span></div></button>`);
            } else {
              _push(`<button type="button" class="flex gap-2 items-center relative overflow-hidden rounded-md border border-neutral-500 hover:bg-neutral-500/30 cursor-pointer px-2 py-1"${ssrRenderAttr("title", f.name)}><div class="h-6 w-10 flex items-center justify-center bg-neutral-600 text-neutral-200 text-[11px] rounded">${ssrInterpolate(f.name.split(".").pop())}</div><div class="flex-1 min-w-0 flex items-center gap-2"><span class="text-xs text-neutral-300 truncate">${ssrInterpolate(f.name)}</span><span class="text-[11px] text-neutral-400 ml-auto">${ssrInterpolate(formatFileSize(f.size))}</span></div></button>`);
            }
            _push(`<!--]-->`);
          });
          _push(`<!--]--></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      });
      _push(`<!--]-->`);
      if (!unref(comments).length) {
        _push(`<div class="text-sm text-neutral-500"> \u041F\u043E\u043A\u0430 \u043D\u0435\u0442 \u043A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0435\u0432 </div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      _push(ssrRenderComponent(_component_MyImageViewer, {
        open: unref(imageViewer).open,
        "onUpdate:open": ($event) => unref(imageViewer).open = $event,
        path: unref(imageViewer).path,
        name: unref(imageViewer).name,
        items: unref(imageViewer).items,
        index: unref(imageViewer).index
      }, null, _parent));
      _push(`</section>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/my/kanban/TaskComments.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "AuditPanel",
  __ssrInlineRender: true,
  props: {
    taskId: {},
    refreshable: { type: Boolean }
  },
  setup(__props) {
    const props = __props;
    const { $useApi } = useNuxtApp();
    const audits = ref([]);
    const loading = ref(false);
    const error = ref(null);
    async function fetchAudits() {
      if (!props.taskId) return;
      loading.value = true;
      error.value = null;
      try {
        const { data } = await $useApi.get(
          `tasks/${props.taskId}/audit`
        );
        audits.value = Array.isArray(data) ? data : [];
      } catch (e) {
        error.value = (e == null ? void 0 : e.message) || "\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u0438\u0441\u0442\u043E\u0440\u0438\u044E";
        audits.value = [];
      } finally {
        loading.value = false;
      }
    }
    function mapField(f) {
      switch (f) {
        case "title":
          return "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435";
        case "description":
          return "\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435";
        case "chatLink":
          return "\u0421\u0441\u044B\u043B\u043A\u0430";
        case "columnId":
          return "\u041A\u043E\u043B\u043E\u043D\u043A\u0430";
        default:
          return f;
      }
    }
    function display(v) {
      if (v === null || v === void 0) return "";
      return String(v);
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiButton = _sfc_main$r;
      const _component_MyUserListItem = _sfc_main$y;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "space-y-2" }, _attrs))}>`);
      if (unref(loading)) {
        _push(`<div class="text-xs text-neutral-500">\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430\u2026</div>`);
      } else if (unref(error)) {
        _push(`<div class="text-xs text-red-500">${ssrInterpolate(unref(error))}</div>`);
      } else if (!unref(audits).length) {
        _push(`<div class="text-xs text-neutral-500"> \u0418\u0441\u0442\u043E\u0440\u0438\u044F \u043F\u0443\u0441\u0442\u0430 `);
        if (_ctx.refreshable) {
          _push(ssrRenderComponent(_component_UiButton, {
            size: "sm",
            variant: "ghost",
            class: "ml-2",
            onClick: fetchAudits
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(` \u041E\u0431\u043D\u043E\u0432\u0438\u0442\u044C `);
              } else {
                return [
                  createTextVNode(" \u041E\u0431\u043D\u043E\u0432\u0438\u0442\u044C ")
                ];
              }
            }),
            _: 1
          }, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<div class="divide-y"><!--[-->`);
        ssrRenderList(unref(audits), (a) => {
          _push(`<div class="py-2"><div class="flex items-center justify-between"><div class="mr-3">`);
          _push(ssrRenderComponent(_component_MyUserListItem, {
            "full-name": a.user.fullName,
            "avatar-url": a.user.avatarUrl,
            size: "md",
            dark: true
          }, null, _parent));
          _push(`</div><div class="shrink-0 text-[11px] text-neutral-400">${ssrInterpolate(("formatRuDateTime" in _ctx ? _ctx.formatRuDateTime : unref(formatRuDateTime))(a.createdAt))}</div></div>`);
          if (a.payload) {
            _push(`<div class="mt-1 ml-10 list-disc text-[12px] text-neutral-700"><span class="font-medium">${ssrInterpolate(mapField(a.payload.field))} - </span>`);
            if (display(a.payload.from) !== "") {
              _push(`<span class="text-neutral-500 line-through mr-1">${ssrInterpolate(display(a.payload.from))}</span>`);
            } else {
              _push(`<!---->`);
            }
            _push(`<span class="text-neutral-400">${ssrInterpolate(a.description)}</span></div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div>`);
        });
        _push(`<!--]--></div>`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/my/kanban/task/AuditPanel.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "TaskModal",
  __ssrInlineRender: true,
  props: {
    open: { type: Boolean },
    taskId: {}
  },
  emits: ["update:open", "delete", "move"],
  setup(__props, { emit: __emit }) {
    const authStore = useAuthStore();
    const { toast } = useToast();
    const router = useRouter();
    const route = useRoute();
    const curBoardId = computed(() => Number(route.params.id));
    const currentTaskId = ref(null);
    const taskApi = useTaskApi(() => {
      var _a;
      return (_a = currentTaskId.value) != null ? _a : props.taskId;
    });
    const curUser = computed(() => authStore.user);
    const avaliableBoards = computed(() => {
      var _a, _b;
      return (_b = (_a = curUser.value) == null ? void 0 : _a.boards) != null ? _b : [];
    });
    const isLoading = ref(false);
    const isSaving = ref(false);
    const isDeleting = ref(false);
    const isArchiving = ref(false);
    const props = __props;
    const emit = __emit;
    const editTask = ref(null);
    const activeTab = ref("main");
    const isAuditDialogOpen = ref(false);
    async function fetchFullTask() {
      var _a;
      const id = (_a = currentTaskId.value) != null ? _a : props.taskId;
      if (!id) return;
      isLoading.value = true;
      try {
        const data = await taskApi.getTask();
        editTask.value = data;
        fieldStartValues.title = void 0;
        fieldStartValues.description = void 0;
        fieldStartValues.chatLink = void 0;
        nextTick(
          () => {
            var _a2;
            return (_a2 = descWrap.value) == null ? void 0 : _a2.dispatchEvent(new Event("autoresize:resize"));
          }
        );
      } catch (e) {
        console.error("fetchFullTask failed", e);
        router.push({ path: `/boards/${curBoardId.value}` });
      } finally {
        isLoading.value = false;
      }
    }
    const fieldStartValues = reactive({});
    function onFieldFocus(field) {
      var _a;
      if (!editTask.value) return;
      const cur = (_a = editTask.value[field]) != null ? _a : "";
      fieldStartValues[field] = String(cur);
    }
    async function onFieldBlur(field) {
      var _a, _b;
      if (!editTask.value) return;
      const current = String((_a = editTask.value[field]) != null ? _a : "");
      const start = String((_b = fieldStartValues[field]) != null ? _b : "");
      if (current === start) return;
      const payload = {};
      if (field === "description" || field === "chatLink") {
        payload[field] = current || null;
      } else {
        payload[field] = current;
      }
      try {
        isSaving.value = true;
        await taskApi.updateTask(payload);
        fieldStartValues[field] = current;
      } catch (e) {
        console.error("save field failed", field, e);
      } finally {
        isSaving.value = false;
      }
    }
    function close() {
      emit("update:open", false);
      currentTaskId.value = null;
    }
    async function emitDelete() {
      if (!editTask.value) return;
      isDeleting.value = true;
      try {
        await taskApi.deleteTask();
        emit("update:open", false);
        emit("delete", editTask.value.id);
      } catch (e) {
        console.error("deleteTask failed", e);
      } finally {
        isDeleting.value = false;
      }
    }
    const selectedTaskTags = computed({
      get() {
        var _a, _b;
        const list = (_b = (_a = editTask.value) == null ? void 0 : _a.tags) != null ? _b : [];
        return list.map((t) => {
          var _a2;
          return { id: Number((_a2 = t.id) != null ? _a2 : 0), name: t.name };
        });
      },
      set(next) {
        var _a;
        if (!editTask.value) return;
        const prevByName = new Map(
          ((_a = editTask.value.tags) != null ? _a : []).map((t) => [t.name, t])
        );
        editTask.value.tags = next.map((nt) => {
          const prev = prevByName.get(nt.name);
          return {
            ...prev,
            id: typeof nt.id === "number" ? nt.id : void 0,
            name: nt.name
          };
        });
      }
    });
    async function handleMoveTask(val) {
      try {
        const payload = {
          toColumnId: Number(val.toColumnId)
        };
        await taskApi.moveTask(payload);
      } catch (e) {
        return console.log(e);
      }
    }
    const moveLoading = ref(false);
    const chatLinkUrl = computed(() => {
      var _a;
      const raw = (((_a = editTask.value) == null ? void 0 : _a.chatLink) || "").trim();
      if (!raw) return "";
      if (/^https?:\/\//i.test(raw)) return raw;
      return `https://${raw}`;
    });
    async function copyToBoard(boardId) {
      var _a;
      if (moveLoading.value) return;
      moveLoading.value = true;
      try {
        const copied = await taskApi.copyToBoard(boardId);
        const newTaskId = Number(copied == null ? void 0 : copied.id);
        if (Number.isFinite(newTaskId)) {
          currentTaskId.value = newTaskId;
          const newBoardId = Number((_a = copied == null ? void 0 : copied.boardId) != null ? _a : boardId);
          if (newBoardId && false) ;
          await fetchFullTask();
        } else {
          await fetchFullTask();
        }
      } catch (err) {
        console.error("copyToBoard error", err);
      } finally {
        moveLoading.value = false;
      }
    }
    async function moveToBoard(boardId) {
      var _a;
      if (moveLoading.value) return;
      moveLoading.value = true;
      try {
        const moved = await taskApi.moveToBoard(boardId);
        const newTaskId = Number(moved == null ? void 0 : moved.id);
        if (Number.isFinite(newTaskId)) {
          currentTaskId.value = newTaskId;
          const newBoardId = Number((_a = moved == null ? void 0 : moved.boardId) != null ? _a : boardId);
          if (newBoardId && false) ;
          await fetchFullTask();
        } else {
          await fetchFullTask();
        }
      } catch (err) {
        console.error("moveToBoard error", err);
      } finally {
        moveLoading.value = false;
      }
    }
    async function setArchived(nextArchived) {
      if (!editTask.value || isArchiving.value) return;
      isArchiving.value = true;
      try {
        await taskApi.setArchived(!!nextArchived);
        editTask.value.archived = !!nextArchived;
        toast({
          title: nextArchived ? "\u041F\u0435\u0440\u0435\u043C\u0435\u0449\u0435\u043D\u043E \u0432 \u0430\u0440\u0445\u0438\u0432" : "\u0412\u043E\u0437\u0432\u0440\u0430\u0449\u0435\u043D\u043E \u0438\u0437 \u0430\u0440\u0445\u0438\u0432\u0430"
        });
      } catch (e) {
        console.error("setArchived failed", e);
        toast({
          title: "\u041E\u0448\u0438\u0431\u043A\u0430",
          description: "\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0438\u0437\u043C\u0435\u043D\u0438\u0442\u044C \u0430\u0440\u0445\u0438\u0432\u043D\u044B\u0439 \u0441\u0442\u0430\u0442\u0443\u0441"
        });
      } finally {
        isArchiving.value = false;
      }
    }
    const reqUrl = useRequestURL();
    const baseOrigin = computed(() => `${reqUrl.protocol}//${reqUrl.host}`);
    const taskLink = computed(() => {
      var _a;
      if (!editTask.value) return "";
      const boardId = ((_a = editTask.value.board) == null ? void 0 : _a.id) || curBoardId.value;
      return `${baseOrigin.value}/boards/${boardId}/task/${editTask.value.id}`;
    });
    async function copyTaskLink() {
      try {
        if (!taskLink.value) return;
        await (void 0).clipboard.writeText(taskLink.value);
        toast({ title: "\u0421\u0441\u044B\u043B\u043A\u0430 \u0441\u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u043D\u0430", description: taskLink.value });
      } catch (e) {
        console.error("copyTaskLink failed", e);
        toast({
          title: "\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0441\u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u0442\u044C",
          description: "\u041F\u043E\u043F\u0440\u043E\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0451 \u0440\u0430\u0437"
        });
      }
    }
    const descWrap = ref(null);
    watch(activeTab, (v) => {
      if (v === "main")
        nextTick(
          () => {
            var _a;
            return (_a = descWrap.value) == null ? void 0 : _a.dispatchEvent(new Event("autoresize:resize"));
          }
        );
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiDialog = _sfc_main$4$1;
      const _component_UiDialogTrigger = _sfc_main$3$1;
      const _component_UiDialogContent = _sfc_main$o;
      const _component_UiDialogHeader = _sfc_main$2$1;
      const _component_UiDialogTitle = _sfc_main$1$1;
      const _component_UiDialogDescription = _sfc_main$p;
      const _component_UiInput = _sfc_main$q;
      const _component_UiDropdownMenu = _sfc_main$7$1;
      const _component_UiDropdownMenuTrigger = _sfc_main$6$1;
      const _component_UiButton = _sfc_main$r;
      const _component_UiDropdownMenuContent = _sfc_main$5$1;
      const _component_UiDropdownMenuItem = _sfc_main$4$2;
      const _component_UiDropdownMenuSub = _sfc_main$n;
      const _component_UiDropdownMenuSubTrigger = _sfc_main$m;
      const _component_UiDropdownMenuSubContent = _sfc_main$l;
      const _component_UiScrollArea = _sfc_main$8$1;
      const _component_UiTabs = _sfc_main$2$2;
      const _component_UiTabsList = _sfc_main$s;
      const _component_UiTabsTrigger = _sfc_main$1$2;
      const _component_UiSeparator = _sfc_main$t;
      const _component_UiTabsContent = _sfc_main$u;
      const _component_UiLabel = _sfc_main$v;
      const _component_MyKanbanTaskMembersPanel = _sfc_main$k;
      const _component_MyKanbanTaskMove = _sfc_main$j;
      const _component_MyKanbanTagsInput = _sfc_main$7;
      const _component_UiTextarea = _sfc_main$w;
      const _component_MyKanbanTaskOrder = _sfc_main$6;
      const _component_MyKanbanTaskComments = _sfc_main$2;
      const _component_MyKanbanTaskAuditPanel = _sfc_main$1;
      const _component_UiDialogFooter = _sfc_main$x;
      _push(ssrRenderComponent(_component_UiDialog, mergeProps({
        open: _ctx.open,
        "onUpdate:open": (v) => emit("update:open", v)
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UiDialogTrigger, { class: "hidden" }, null, _parent2, _scopeId));
            if (unref(editTask)) {
              _push2(ssrRenderComponent(_component_UiDialogContent, { class: "w-full max-w-6xl h-[100vh] sm:mt-1 bg-neutral-800 border-neutral-700 flex flex-col gap-0 overflow-hidden p-0" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UiDialogHeader, { class: "hidden" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_UiDialogTitle, null, null, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_component_UiDialogDescription, null, null, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_UiDialogTitle),
                            createVNode(_component_UiDialogDescription)
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(`<div style="${ssrRenderStyle(unref(isLoading) ? null : { display: "none" })}" class="${ssrRenderClass([unref(isLoading) ? "opacity-100" : "opacity-0", "absolute inset-0 z-20 grid place-items-center rounded-none sm:rounded-2xl bg-white/60 backdrop-blur-[1px] text-sm text-neutral-600 transition-opacity duration-200"])}"${_scopeId2}>${ssrInterpolate(unref(isLoading) ? "\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430\u2026" : "\u0421\u043E\u0445\u0440\u0430\u043D\u044F\u044E\u2026")}</div><div class="sticky top-0 z-10 flex gap-1 sm:flex-nowrap items-center justify-between border-b bg-neutral-700 px-4 sm:px-5 py-3 sm:py-4 border-b-neutral-500"${_scopeId2}><div class="flex items-center gap-2 w-full"${_scopeId2}>`);
                    if (unref(editTask).archived) {
                      _push3(`<div class="whitespace-nowrap text-neutral-300 text-xl border-1 border-neutral-600 p-1 rounded-md bg-red-700/50"${_scopeId2}> \u0412 \u0430\u0440\u0445\u0438\u0432\u0435 </div>`);
                    } else {
                      _push3(`<!---->`);
                    }
                    _push3(ssrRenderComponent(_component_UiInput, {
                      modelValue: unref(editTask).title,
                      "onUpdate:modelValue": ($event) => unref(editTask).title = $event,
                      class: "w-full rounded-lg border border-neutral-500/50 px-3 py-2 text-base font-semibold outline-none focus:ring-2 focus:ring-neutral-500 bg-neutral-700 text-neutral-300",
                      placeholder: "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0438",
                      onFocus: ($event) => onFieldFocus("title"),
                      onBlur: ($event) => onFieldBlur("title")
                    }, null, _parent3, _scopeId2));
                    _push3(`</div>`);
                    _push3(ssrRenderComponent(_component_UiDropdownMenu, null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_UiDropdownMenuTrigger, null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_UiButton, {
                                  class: "size-9 p-0 border-1 border-neutral-500/50 bg-neutral-700 text-neutral-300 hover:text-neutral-100 hover:bg-neutral-700 cursor-pointer",
                                  title: "\u0414\u0435\u0439\u0441\u0442\u0432\u0438\u044F"
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(unref(EllipsisVertical), null, null, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(unref(EllipsisVertical))
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(_component_UiButton, {
                                    class: "size-9 p-0 border-1 border-neutral-500/50 bg-neutral-700 text-neutral-300 hover:text-neutral-100 hover:bg-neutral-700 cursor-pointer",
                                    title: "\u0414\u0435\u0439\u0441\u0442\u0432\u0438\u044F"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(unref(EllipsisVertical))
                                    ]),
                                    _: 1
                                  })
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_component_UiDropdownMenuContent, { class: "bg-neutral-700 text-neutral-300" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_UiDropdownMenuItem, {
                                  class: ["cursor-pointer"],
                                  onClick: ($event) => copyTaskLink()
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`\u0421\u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0441\u0441\u044B\u043B\u043A\u0443 \u043D\u0430 \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0443`);
                                    } else {
                                      return [
                                        createTextVNode("\u0421\u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0441\u0441\u044B\u043B\u043A\u0443 \u043D\u0430 \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0443")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                                _push5(ssrRenderComponent(_component_UiDropdownMenuSub, null, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(_component_UiDropdownMenuSubTrigger, { class: "cursor-pointer" }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(` \u0421\u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0432 ... `);
                                          } else {
                                            return [
                                              createTextVNode(" \u0421\u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0432 ... ")
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                      _push6(ssrRenderComponent(_component_UiDropdownMenuSubContent, { class: "bg-neutral-700 text-neutral-300" }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`<!--[-->`);
                                            ssrRenderList(unref(avaliableBoards), (b) => {
                                              _push7(ssrRenderComponent(_component_UiDropdownMenuItem, {
                                                key: b.id,
                                                class: "cursor-pointer",
                                                onClick: ($event) => copyToBoard(b.id)
                                              }, {
                                                default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                  if (_push8) {
                                                    _push8(`${ssrInterpolate(b.title)}`);
                                                  } else {
                                                    return [
                                                      createTextVNode(toDisplayString(b.title), 1)
                                                    ];
                                                  }
                                                }),
                                                _: 2
                                              }, _parent7, _scopeId6));
                                            });
                                            _push7(`<!--]-->`);
                                          } else {
                                            return [
                                              (openBlock(true), createBlock(Fragment, null, renderList(unref(avaliableBoards), (b) => {
                                                return openBlock(), createBlock(_component_UiDropdownMenuItem, {
                                                  key: b.id,
                                                  class: "cursor-pointer",
                                                  onClick: ($event) => copyToBoard(b.id)
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
                                      }, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(_component_UiDropdownMenuSubTrigger, { class: "cursor-pointer" }, {
                                          default: withCtx(() => [
                                            createTextVNode(" \u0421\u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0432 ... ")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_UiDropdownMenuSubContent, { class: "bg-neutral-700 text-neutral-300" }, {
                                          default: withCtx(() => [
                                            (openBlock(true), createBlock(Fragment, null, renderList(unref(avaliableBoards), (b) => {
                                              return openBlock(), createBlock(_component_UiDropdownMenuItem, {
                                                key: b.id,
                                                class: "cursor-pointer",
                                                onClick: ($event) => copyToBoard(b.id)
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
                                }, _parent5, _scopeId4));
                                _push5(ssrRenderComponent(_component_UiDropdownMenuSub, null, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(_component_UiDropdownMenuSubTrigger, { class: "cursor-pointer" }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(` \u041F\u0435\u0440\u0435\u043C\u0435\u0441\u0442\u0438\u0442\u044C \u0432 ... `);
                                          } else {
                                            return [
                                              createTextVNode(" \u041F\u0435\u0440\u0435\u043C\u0435\u0441\u0442\u0438\u0442\u044C \u0432 ... ")
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                      _push6(ssrRenderComponent(_component_UiDropdownMenuSubContent, { class: "bg-neutral-700 text-neutral-300" }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`<!--[-->`);
                                            ssrRenderList(unref(avaliableBoards), (b) => {
                                              _push7(ssrRenderComponent(_component_UiDropdownMenuItem, {
                                                key: b.id,
                                                class: "cursor-pointer",
                                                onClick: ($event) => moveToBoard(b.id)
                                              }, {
                                                default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                  if (_push8) {
                                                    _push8(`${ssrInterpolate(b.title)}`);
                                                  } else {
                                                    return [
                                                      createTextVNode(toDisplayString(b.title), 1)
                                                    ];
                                                  }
                                                }),
                                                _: 2
                                              }, _parent7, _scopeId6));
                                            });
                                            _push7(`<!--]-->`);
                                          } else {
                                            return [
                                              (openBlock(true), createBlock(Fragment, null, renderList(unref(avaliableBoards), (b) => {
                                                return openBlock(), createBlock(_component_UiDropdownMenuItem, {
                                                  key: b.id,
                                                  class: "cursor-pointer",
                                                  onClick: ($event) => moveToBoard(b.id)
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
                                      }, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(_component_UiDropdownMenuSubTrigger, { class: "cursor-pointer" }, {
                                          default: withCtx(() => [
                                            createTextVNode(" \u041F\u0435\u0440\u0435\u043C\u0435\u0441\u0442\u0438\u0442\u044C \u0432 ... ")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_UiDropdownMenuSubContent, { class: "bg-neutral-700 text-neutral-300" }, {
                                          default: withCtx(() => [
                                            (openBlock(true), createBlock(Fragment, null, renderList(unref(avaliableBoards), (b) => {
                                              return openBlock(), createBlock(_component_UiDropdownMenuItem, {
                                                key: b.id,
                                                class: "cursor-pointer",
                                                onClick: ($event) => moveToBoard(b.id)
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
                                }, _parent5, _scopeId4));
                                _push5(ssrRenderComponent(_component_UiDropdownMenuItem, {
                                  class: "cursor-pointer",
                                  onClick: ($event) => isAuditDialogOpen.value = true
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`\u0418\u0441\u0442\u043E\u0440\u0438\u044F \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u0439`);
                                    } else {
                                      return [
                                        createTextVNode("\u0418\u0441\u0442\u043E\u0440\u0438\u044F \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u0439")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                                _push5(ssrRenderComponent(_component_UiDropdownMenuItem, {
                                  class: ["cursor-pointer"],
                                  disabled: unref(isArchiving),
                                  onClick: ($event) => setArchived(!unref(editTask).archived)
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`${ssrInterpolate(unref(editTask).archived ? "\u0412\u0435\u0440\u043D\u0443\u0442\u044C \u0438\u0437 \u0430\u0440\u0445\u0438\u0432\u0430" : "\u041F\u0435\u0440\u0435\u043C\u0435\u0441\u0442\u0438\u0442\u044C \u0432 \u0430\u0440\u0445\u0438\u0432")}`);
                                    } else {
                                      return [
                                        createTextVNode(toDisplayString(unref(editTask).archived ? "\u0412\u0435\u0440\u043D\u0443\u0442\u044C \u0438\u0437 \u0430\u0440\u0445\u0438\u0432\u0430" : "\u041F\u0435\u0440\u0435\u043C\u0435\u0441\u0442\u0438\u0442\u044C \u0432 \u0430\u0440\u0445\u0438\u0432"), 1)
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                                _push5(ssrRenderComponent(_component_UiDropdownMenuItem, { class: "cursor-pointer" }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`\u0414\u0443\u0431\u043B\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0443`);
                                    } else {
                                      return [
                                        createTextVNode("\u0414\u0443\u0431\u043B\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0443")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                                _push5(ssrRenderComponent(_component_UiDropdownMenuItem, {
                                  class: "cursor-pointer",
                                  onClick: ($event) => emitDelete()
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0443`);
                                    } else {
                                      return [
                                        createTextVNode("\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0443")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(_component_UiDropdownMenuItem, {
                                    class: ["cursor-pointer"],
                                    onClick: ($event) => copyTaskLink()
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("\u0421\u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0441\u0441\u044B\u043B\u043A\u0443 \u043D\u0430 \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0443")
                                    ]),
                                    _: 1
                                  }, 8, ["onClick"]),
                                  createVNode(_component_UiDropdownMenuSub, null, {
                                    default: withCtx(() => [
                                      createVNode(_component_UiDropdownMenuSubTrigger, { class: "cursor-pointer" }, {
                                        default: withCtx(() => [
                                          createTextVNode(" \u0421\u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0432 ... ")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_UiDropdownMenuSubContent, { class: "bg-neutral-700 text-neutral-300" }, {
                                        default: withCtx(() => [
                                          (openBlock(true), createBlock(Fragment, null, renderList(unref(avaliableBoards), (b) => {
                                            return openBlock(), createBlock(_component_UiDropdownMenuItem, {
                                              key: b.id,
                                              class: "cursor-pointer",
                                              onClick: ($event) => copyToBoard(b.id)
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
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_UiDropdownMenuSub, null, {
                                    default: withCtx(() => [
                                      createVNode(_component_UiDropdownMenuSubTrigger, { class: "cursor-pointer" }, {
                                        default: withCtx(() => [
                                          createTextVNode(" \u041F\u0435\u0440\u0435\u043C\u0435\u0441\u0442\u0438\u0442\u044C \u0432 ... ")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_UiDropdownMenuSubContent, { class: "bg-neutral-700 text-neutral-300" }, {
                                        default: withCtx(() => [
                                          (openBlock(true), createBlock(Fragment, null, renderList(unref(avaliableBoards), (b) => {
                                            return openBlock(), createBlock(_component_UiDropdownMenuItem, {
                                              key: b.id,
                                              class: "cursor-pointer",
                                              onClick: ($event) => moveToBoard(b.id)
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
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_UiDropdownMenuItem, {
                                    class: "cursor-pointer",
                                    onClick: ($event) => isAuditDialogOpen.value = true
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("\u0418\u0441\u0442\u043E\u0440\u0438\u044F \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u0439")
                                    ]),
                                    _: 1
                                  }, 8, ["onClick"]),
                                  createVNode(_component_UiDropdownMenuItem, {
                                    class: ["cursor-pointer"],
                                    disabled: unref(isArchiving),
                                    onClick: ($event) => setArchived(!unref(editTask).archived)
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(unref(editTask).archived ? "\u0412\u0435\u0440\u043D\u0443\u0442\u044C \u0438\u0437 \u0430\u0440\u0445\u0438\u0432\u0430" : "\u041F\u0435\u0440\u0435\u043C\u0435\u0441\u0442\u0438\u0442\u044C \u0432 \u0430\u0440\u0445\u0438\u0432"), 1)
                                    ]),
                                    _: 1
                                  }, 8, ["disabled", "onClick"]),
                                  createVNode(_component_UiDropdownMenuItem, { class: "cursor-pointer" }, {
                                    default: withCtx(() => [
                                      createTextVNode("\u0414\u0443\u0431\u043B\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0443")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_UiDropdownMenuItem, {
                                    class: "cursor-pointer",
                                    onClick: ($event) => emitDelete()
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0443")
                                    ]),
                                    _: 1
                                  }, 8, ["onClick"])
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_UiDropdownMenuTrigger, null, {
                              default: withCtx(() => [
                                createVNode(_component_UiButton, {
                                  class: "size-9 p-0 border-1 border-neutral-500/50 bg-neutral-700 text-neutral-300 hover:text-neutral-100 hover:bg-neutral-700 cursor-pointer",
                                  title: "\u0414\u0435\u0439\u0441\u0442\u0432\u0438\u044F"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(unref(EllipsisVertical))
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(_component_UiDropdownMenuContent, { class: "bg-neutral-700 text-neutral-300" }, {
                              default: withCtx(() => [
                                createVNode(_component_UiDropdownMenuItem, {
                                  class: ["cursor-pointer"],
                                  onClick: ($event) => copyTaskLink()
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("\u0421\u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0441\u0441\u044B\u043B\u043A\u0443 \u043D\u0430 \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0443")
                                  ]),
                                  _: 1
                                }, 8, ["onClick"]),
                                createVNode(_component_UiDropdownMenuSub, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_UiDropdownMenuSubTrigger, { class: "cursor-pointer" }, {
                                      default: withCtx(() => [
                                        createTextVNode(" \u0421\u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0432 ... ")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_UiDropdownMenuSubContent, { class: "bg-neutral-700 text-neutral-300" }, {
                                      default: withCtx(() => [
                                        (openBlock(true), createBlock(Fragment, null, renderList(unref(avaliableBoards), (b) => {
                                          return openBlock(), createBlock(_component_UiDropdownMenuItem, {
                                            key: b.id,
                                            class: "cursor-pointer",
                                            onClick: ($event) => copyToBoard(b.id)
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
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_UiDropdownMenuSub, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_UiDropdownMenuSubTrigger, { class: "cursor-pointer" }, {
                                      default: withCtx(() => [
                                        createTextVNode(" \u041F\u0435\u0440\u0435\u043C\u0435\u0441\u0442\u0438\u0442\u044C \u0432 ... ")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_UiDropdownMenuSubContent, { class: "bg-neutral-700 text-neutral-300" }, {
                                      default: withCtx(() => [
                                        (openBlock(true), createBlock(Fragment, null, renderList(unref(avaliableBoards), (b) => {
                                          return openBlock(), createBlock(_component_UiDropdownMenuItem, {
                                            key: b.id,
                                            class: "cursor-pointer",
                                            onClick: ($event) => moveToBoard(b.id)
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
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_UiDropdownMenuItem, {
                                  class: "cursor-pointer",
                                  onClick: ($event) => isAuditDialogOpen.value = true
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("\u0418\u0441\u0442\u043E\u0440\u0438\u044F \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u0439")
                                  ]),
                                  _: 1
                                }, 8, ["onClick"]),
                                createVNode(_component_UiDropdownMenuItem, {
                                  class: ["cursor-pointer"],
                                  disabled: unref(isArchiving),
                                  onClick: ($event) => setArchived(!unref(editTask).archived)
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(unref(editTask).archived ? "\u0412\u0435\u0440\u043D\u0443\u0442\u044C \u0438\u0437 \u0430\u0440\u0445\u0438\u0432\u0430" : "\u041F\u0435\u0440\u0435\u043C\u0435\u0441\u0442\u0438\u0442\u044C \u0432 \u0430\u0440\u0445\u0438\u0432"), 1)
                                  ]),
                                  _: 1
                                }, 8, ["disabled", "onClick"]),
                                createVNode(_component_UiDropdownMenuItem, { class: "cursor-pointer" }, {
                                  default: withCtx(() => [
                                    createTextVNode("\u0414\u0443\u0431\u043B\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0443")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_UiDropdownMenuItem, {
                                  class: "cursor-pointer",
                                  onClick: ($event) => emitDelete()
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0443")
                                  ]),
                                  _: 1
                                }, 8, ["onClick"])
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_UiButton, {
                      class: "p-0 size-9 border-1 border-neutral-500/50 bg-neutral-700 text-neutral-300 hover:text-neutral-100 hover:bg-neutral-700 cursor-pointer",
                      title: "\u0417\u0430\u043A\u0440\u044B\u0442\u044C",
                      onClick: ($event) => close()
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(unref(X), null, null, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(unref(X))
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(`</div><div class="relative flex-1 min-h-0 overflow-hidden"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_UiScrollArea, { class: "h-full" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<div class="min-h-full grid grid-cols-1 md:grid-cols-7 pr-2 bg-neutral-800"${_scopeId3}><div class="sm:col-span-4 bg-neutral-800 mb-3"${_scopeId3}>`);
                          _push4(ssrRenderComponent(_component_UiTabs, {
                            modelValue: unref(activeTab),
                            "onUpdate:modelValue": ($event) => isRef(activeTab) ? activeTab.value = $event : null,
                            "default-value": "main",
                            class: ""
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_UiTabsList, { class: "ml-2 mt-2 bg-neutral-600 text-neutral-300" }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(_component_UiTabsTrigger, {
                                        value: "main",
                                        class: ""
                                      }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(` \u041E\u0441\u043D\u043E\u0432\u043D\u043E\u0435 `);
                                          } else {
                                            return [
                                              createTextVNode(" \u041E\u0441\u043D\u043E\u0432\u043D\u043E\u0435 ")
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                      _push6(ssrRenderComponent(_component_UiTabsTrigger, { value: "prod" }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(` \u0422\u0417 `);
                                          } else {
                                            return [
                                              createTextVNode(" \u0422\u0417 ")
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(_component_UiTabsTrigger, {
                                          value: "main",
                                          class: ""
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(" \u041E\u0441\u043D\u043E\u0432\u043D\u043E\u0435 ")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_UiTabsTrigger, { value: "prod" }, {
                                          default: withCtx(() => [
                                            createTextVNode(" \u0422\u0417 ")
                                          ]),
                                          _: 1
                                        })
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                                _push5(ssrRenderComponent(_component_UiSeparator, { class: "my-2 bg-neutral-500" }, null, _parent5, _scopeId4));
                                _push5(ssrRenderComponent(_component_UiTabsContent, {
                                  value: "main",
                                  class: "p-3"
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    var _a, _b, _c, _d;
                                    if (_push6) {
                                      _push6(`<div class="mb-4 space-y-1"${_scopeId5}><div class="text-sm text-neutral-300"${_scopeId5}><span class="font-medium"${_scopeId5}>\u0421\u043E\u0437\u0434\u0430\u0442\u0435\u043B\u044C:</span> ${ssrInterpolate(((_a = unref(editTask).creator) == null ? void 0 : _a.fullName) || ((_b = unref(editTask).creator) == null ? void 0 : _b.email) || "\u2014")}</div><div class="text-xs text-neutral-400"${_scopeId5}><span class="font-medium"${_scopeId5}>\u0421\u043E\u0437\u0434\u0430\u043D\u0430:</span> ${ssrInterpolate(("formatRuDateTime" in _ctx ? _ctx.formatRuDateTime : unref(formatRuDateTime))(unref(editTask).createdAt) || "\u2014")}</div><div class="my-4 relative"${_scopeId5}>`);
                                      _push6(ssrRenderComponent(_component_UiLabel, { class: "font-light text-neutral-400 absolute left-2 top-[-8px] bg-neutral-700 rounded-sm px-1" }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`\u0423\u0447\u0430\u0441\u0442\u043D\u0438\u043A\u0438`);
                                          } else {
                                            return [
                                              createTextVNode("\u0423\u0447\u0430\u0441\u0442\u043D\u0438\u043A\u0438")
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                      _push6(ssrRenderComponent(_component_MyKanbanTaskMembersPanel, {
                                        "task-id": unref(editTask).id,
                                        actions: true
                                      }, null, _parent6, _scopeId5));
                                      _push6(`</div><div class="relative flex gap-2 items-center mt-4"${_scopeId5}>`);
                                      _push6(ssrRenderComponent(_component_UiLabel, { class: "font-light text-neutral-400 absolute left-2 top-[-8px] bg-neutral-700 rounded-sm px-1" }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`\u0420\u0430\u0441\u043F\u043E\u043B\u043E\u0436\u0435\u043D\u0438\u0435`);
                                          } else {
                                            return [
                                              createTextVNode("\u0420\u0430\u0441\u043F\u043E\u043B\u043E\u0436\u0435\u043D\u0438\u0435")
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                      _push6(ssrRenderComponent(_component_MyKanbanTaskMove, {
                                        "task-id": _ctx.taskId,
                                        "column-id": unref(editTask).columnId,
                                        label: unref(editTask).column.title,
                                        onUpdateTaskColumn: handleMoveTask
                                      }, null, _parent6, _scopeId5));
                                      _push6(`</div></div><div class="relative flex items-center gap-2"${_scopeId5}>`);
                                      if (unref(editTask).chatLink) {
                                        _push6(ssrRenderComponent(_component_UiLabel, { class: "font-light text-neutral-400 absolute left-2 top-[-8px] bg-neutral-700 rounded-sm px-1" }, {
                                          default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                            if (_push7) {
                                              _push7(`\u0421\u0441\u044B\u043B\u043A\u0430 \u043D\u0430 \u0441\u0434\u0435\u043B\u043A\u0443`);
                                            } else {
                                              return [
                                                createTextVNode("\u0421\u0441\u044B\u043B\u043A\u0430 \u043D\u0430 \u0441\u0434\u0435\u043B\u043A\u0443")
                                              ];
                                            }
                                          }),
                                          _: 1
                                        }, _parent6, _scopeId5));
                                      } else {
                                        _push6(`<!---->`);
                                      }
                                      _push6(ssrRenderComponent(_component_UiInput, {
                                        modelValue: unref(editTask).chatLink,
                                        "onUpdate:modelValue": ($event) => unref(editTask).chatLink = $event,
                                        placeholder: "\u0421\u0441\u044B\u043B\u043A\u0430 \u043D\u0430 \u0441\u0434\u0435\u043B\u043A\u0443",
                                        class: [
                                          "bg-neutral-700 text-neutral-300 placeholder:text-neutral-500 border-neutral-500/50"
                                        ],
                                        onFocus: ($event) => onFieldFocus("chatLink"),
                                        onBlur: ($event) => onFieldBlur("chatLink")
                                      }, null, _parent6, _scopeId5));
                                      if (unref(editTask).chatLink) {
                                        _push6(`<a${ssrRenderAttr("href", unref(chatLinkUrl))} target="_blank" rel="noopener" class="text-xs text-indigo-400 hover:underline whitespace-nowrap" title="\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u0441\u0441\u044B\u043B\u043A\u0443 \u0432 \u043D\u043E\u0432\u043E\u0439 \u0432\u043A\u043B\u0430\u0434\u043A\u0435"${_scopeId5}> \u041F\u0435\u0440\u0435\u0439\u0442\u0438 </a>`);
                                      } else {
                                        _push6(`<!---->`);
                                      }
                                      _push6(`</div><div class="relative mt-5"${_scopeId5}>`);
                                      _push6(ssrRenderComponent(_component_UiLabel, { class: "font-light text-neutral-400 absolute left-2 top-[-8px] bg-neutral-700 rounded-sm px-1" }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`\u041C\u0435\u0442\u043A\u0438`);
                                          } else {
                                            return [
                                              createTextVNode("\u041C\u0435\u0442\u043A\u0438")
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                      _push6(ssrRenderComponent(_component_MyKanbanTagsInput, {
                                        modelValue: unref(selectedTaskTags),
                                        "onUpdate:modelValue": ($event) => isRef(selectedTaskTags) ? selectedTaskTags.value = $event : null,
                                        "board-id": unref(editTask).board.id,
                                        "task-id": _ctx.taskId,
                                        "initial-selected": unref(editTask).tags.map((t) => t.name)
                                      }, null, _parent6, _scopeId5));
                                      _push6(`</div><div class="relative mt-5"${_scopeId5}>`);
                                      if (unref(editTask).description) {
                                        _push6(ssrRenderComponent(_component_UiLabel, { class: "font-light text-neutral-400 absolute left-2 top-[-8px] bg-neutral-700 rounded-sm px-1" }, {
                                          default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                            if (_push7) {
                                              _push7(`\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435`);
                                            } else {
                                              return [
                                                createTextVNode("\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435")
                                              ];
                                            }
                                          }),
                                          _: 1
                                        }, _parent6, _scopeId5));
                                      } else {
                                        _push6(`<!---->`);
                                      }
                                      _push6(ssrRenderComponent(_component_UiTextarea, mergeProps({
                                        modelValue: unref(editTask).description,
                                        "onUpdate:modelValue": ($event) => unref(editTask).description = $event,
                                        rows: "1",
                                        class: "resize-none overflow-hidden mt-1 min-h-[200px] w-full rounded-sm border bg-neutral-700 text-neutral-300 placeholder:text-neutral-500 border-neutral-500/50 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-indigo-500",
                                        placeholder: "\u041E\u043F\u0438\u0448\u0438\u0442\u0435 \u0437\u0430\u0434\u0430\u0447\u0443",
                                        onFocus: ($event) => onFieldFocus("description"),
                                        onBlur: ($event) => onFieldBlur("description")
                                      }, ssrGetDirectiveProps(_ctx, unref(vAutoResize))), null, _parent6, _scopeId5));
                                      _push6(`</div>`);
                                    } else {
                                      return [
                                        createVNode("div", { class: "mb-4 space-y-1" }, [
                                          createVNode("div", { class: "text-sm text-neutral-300" }, [
                                            createVNode("span", { class: "font-medium" }, "\u0421\u043E\u0437\u0434\u0430\u0442\u0435\u043B\u044C:"),
                                            createTextVNode(" " + toDisplayString(((_c = unref(editTask).creator) == null ? void 0 : _c.fullName) || ((_d = unref(editTask).creator) == null ? void 0 : _d.email) || "\u2014"), 1)
                                          ]),
                                          createVNode("div", { class: "text-xs text-neutral-400" }, [
                                            createVNode("span", { class: "font-medium" }, "\u0421\u043E\u0437\u0434\u0430\u043D\u0430:"),
                                            createTextVNode(" " + toDisplayString(("formatRuDateTime" in _ctx ? _ctx.formatRuDateTime : unref(formatRuDateTime))(unref(editTask).createdAt) || "\u2014"), 1)
                                          ]),
                                          createVNode("div", { class: "my-4 relative" }, [
                                            createVNode(_component_UiLabel, { class: "font-light text-neutral-400 absolute left-2 top-[-8px] bg-neutral-700 rounded-sm px-1" }, {
                                              default: withCtx(() => [
                                                createTextVNode("\u0423\u0447\u0430\u0441\u0442\u043D\u0438\u043A\u0438")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_MyKanbanTaskMembersPanel, {
                                              "task-id": unref(editTask).id,
                                              actions: true
                                            }, null, 8, ["task-id"])
                                          ]),
                                          createVNode("div", { class: "relative flex gap-2 items-center mt-4" }, [
                                            createVNode(_component_UiLabel, { class: "font-light text-neutral-400 absolute left-2 top-[-8px] bg-neutral-700 rounded-sm px-1" }, {
                                              default: withCtx(() => [
                                                createTextVNode("\u0420\u0430\u0441\u043F\u043E\u043B\u043E\u0436\u0435\u043D\u0438\u0435")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_MyKanbanTaskMove, {
                                              "task-id": _ctx.taskId,
                                              "column-id": unref(editTask).columnId,
                                              label: unref(editTask).column.title,
                                              onUpdateTaskColumn: handleMoveTask
                                            }, null, 8, ["task-id", "column-id", "label"])
                                          ])
                                        ]),
                                        createVNode("div", { class: "relative flex items-center gap-2" }, [
                                          unref(editTask).chatLink ? (openBlock(), createBlock(_component_UiLabel, {
                                            key: 0,
                                            class: "font-light text-neutral-400 absolute left-2 top-[-8px] bg-neutral-700 rounded-sm px-1"
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode("\u0421\u0441\u044B\u043B\u043A\u0430 \u043D\u0430 \u0441\u0434\u0435\u043B\u043A\u0443")
                                            ]),
                                            _: 1
                                          })) : createCommentVNode("", true),
                                          createVNode(_component_UiInput, {
                                            modelValue: unref(editTask).chatLink,
                                            "onUpdate:modelValue": ($event) => unref(editTask).chatLink = $event,
                                            placeholder: "\u0421\u0441\u044B\u043B\u043A\u0430 \u043D\u0430 \u0441\u0434\u0435\u043B\u043A\u0443",
                                            class: [
                                              "bg-neutral-700 text-neutral-300 placeholder:text-neutral-500 border-neutral-500/50"
                                            ],
                                            onFocus: ($event) => onFieldFocus("chatLink"),
                                            onBlur: ($event) => onFieldBlur("chatLink")
                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "onFocus", "onBlur"]),
                                          unref(editTask).chatLink ? (openBlock(), createBlock("a", {
                                            key: 1,
                                            href: unref(chatLinkUrl),
                                            target: "_blank",
                                            rel: "noopener",
                                            class: "text-xs text-indigo-400 hover:underline whitespace-nowrap",
                                            title: "\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u0441\u0441\u044B\u043B\u043A\u0443 \u0432 \u043D\u043E\u0432\u043E\u0439 \u0432\u043A\u043B\u0430\u0434\u043A\u0435"
                                          }, " \u041F\u0435\u0440\u0435\u0439\u0442\u0438 ", 8, ["href"])) : createCommentVNode("", true)
                                        ]),
                                        createVNode("div", { class: "relative mt-5" }, [
                                          createVNode(_component_UiLabel, { class: "font-light text-neutral-400 absolute left-2 top-[-8px] bg-neutral-700 rounded-sm px-1" }, {
                                            default: withCtx(() => [
                                              createTextVNode("\u041C\u0435\u0442\u043A\u0438")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_MyKanbanTagsInput, {
                                            modelValue: unref(selectedTaskTags),
                                            "onUpdate:modelValue": ($event) => isRef(selectedTaskTags) ? selectedTaskTags.value = $event : null,
                                            "board-id": unref(editTask).board.id,
                                            "task-id": _ctx.taskId,
                                            "initial-selected": unref(editTask).tags.map((t) => t.name)
                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "board-id", "task-id", "initial-selected"])
                                        ]),
                                        createVNode("div", {
                                          ref_key: "descWrap",
                                          ref: descWrap,
                                          class: "relative mt-5"
                                        }, [
                                          unref(editTask).description ? (openBlock(), createBlock(_component_UiLabel, {
                                            key: 0,
                                            class: "font-light text-neutral-400 absolute left-2 top-[-8px] bg-neutral-700 rounded-sm px-1"
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode("\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435")
                                            ]),
                                            _: 1
                                          })) : createCommentVNode("", true),
                                          withDirectives(createVNode(_component_UiTextarea, {
                                            modelValue: unref(editTask).description,
                                            "onUpdate:modelValue": ($event) => unref(editTask).description = $event,
                                            rows: "1",
                                            class: "resize-none overflow-hidden mt-1 min-h-[200px] w-full rounded-sm border bg-neutral-700 text-neutral-300 placeholder:text-neutral-500 border-neutral-500/50 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-indigo-500",
                                            placeholder: "\u041E\u043F\u0438\u0448\u0438\u0442\u0435 \u0437\u0430\u0434\u0430\u0447\u0443",
                                            onFocus: ($event) => onFieldFocus("description"),
                                            onBlur: ($event) => onFieldBlur("description")
                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "onFocus", "onBlur"]), [
                                            [unref(vAutoResize)]
                                          ])
                                        ], 512)
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                                _push5(ssrRenderComponent(_component_UiTabsContent, {
                                  value: "prod",
                                  class: "h-full px-3 pt-3"
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(_component_MyKanbanTaskOrder, { "task-id": _ctx.taskId }, null, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(_component_MyKanbanTaskOrder, { "task-id": _ctx.taskId }, null, 8, ["task-id"])
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(_component_UiTabsList, { class: "ml-2 mt-2 bg-neutral-600 text-neutral-300" }, {
                                    default: withCtx(() => [
                                      createVNode(_component_UiTabsTrigger, {
                                        value: "main",
                                        class: ""
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(" \u041E\u0441\u043D\u043E\u0432\u043D\u043E\u0435 ")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_UiTabsTrigger, { value: "prod" }, {
                                        default: withCtx(() => [
                                          createTextVNode(" \u0422\u0417 ")
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_UiSeparator, { class: "my-2 bg-neutral-500" }),
                                  createVNode(_component_UiTabsContent, {
                                    value: "main",
                                    class: "p-3"
                                  }, {
                                    default: withCtx(() => {
                                      var _a, _b;
                                      return [
                                        createVNode("div", { class: "mb-4 space-y-1" }, [
                                          createVNode("div", { class: "text-sm text-neutral-300" }, [
                                            createVNode("span", { class: "font-medium" }, "\u0421\u043E\u0437\u0434\u0430\u0442\u0435\u043B\u044C:"),
                                            createTextVNode(" " + toDisplayString(((_a = unref(editTask).creator) == null ? void 0 : _a.fullName) || ((_b = unref(editTask).creator) == null ? void 0 : _b.email) || "\u2014"), 1)
                                          ]),
                                          createVNode("div", { class: "text-xs text-neutral-400" }, [
                                            createVNode("span", { class: "font-medium" }, "\u0421\u043E\u0437\u0434\u0430\u043D\u0430:"),
                                            createTextVNode(" " + toDisplayString(("formatRuDateTime" in _ctx ? _ctx.formatRuDateTime : unref(formatRuDateTime))(unref(editTask).createdAt) || "\u2014"), 1)
                                          ]),
                                          createVNode("div", { class: "my-4 relative" }, [
                                            createVNode(_component_UiLabel, { class: "font-light text-neutral-400 absolute left-2 top-[-8px] bg-neutral-700 rounded-sm px-1" }, {
                                              default: withCtx(() => [
                                                createTextVNode("\u0423\u0447\u0430\u0441\u0442\u043D\u0438\u043A\u0438")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_MyKanbanTaskMembersPanel, {
                                              "task-id": unref(editTask).id,
                                              actions: true
                                            }, null, 8, ["task-id"])
                                          ]),
                                          createVNode("div", { class: "relative flex gap-2 items-center mt-4" }, [
                                            createVNode(_component_UiLabel, { class: "font-light text-neutral-400 absolute left-2 top-[-8px] bg-neutral-700 rounded-sm px-1" }, {
                                              default: withCtx(() => [
                                                createTextVNode("\u0420\u0430\u0441\u043F\u043E\u043B\u043E\u0436\u0435\u043D\u0438\u0435")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_MyKanbanTaskMove, {
                                              "task-id": _ctx.taskId,
                                              "column-id": unref(editTask).columnId,
                                              label: unref(editTask).column.title,
                                              onUpdateTaskColumn: handleMoveTask
                                            }, null, 8, ["task-id", "column-id", "label"])
                                          ])
                                        ]),
                                        createVNode("div", { class: "relative flex items-center gap-2" }, [
                                          unref(editTask).chatLink ? (openBlock(), createBlock(_component_UiLabel, {
                                            key: 0,
                                            class: "font-light text-neutral-400 absolute left-2 top-[-8px] bg-neutral-700 rounded-sm px-1"
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode("\u0421\u0441\u044B\u043B\u043A\u0430 \u043D\u0430 \u0441\u0434\u0435\u043B\u043A\u0443")
                                            ]),
                                            _: 1
                                          })) : createCommentVNode("", true),
                                          createVNode(_component_UiInput, {
                                            modelValue: unref(editTask).chatLink,
                                            "onUpdate:modelValue": ($event) => unref(editTask).chatLink = $event,
                                            placeholder: "\u0421\u0441\u044B\u043B\u043A\u0430 \u043D\u0430 \u0441\u0434\u0435\u043B\u043A\u0443",
                                            class: [
                                              "bg-neutral-700 text-neutral-300 placeholder:text-neutral-500 border-neutral-500/50"
                                            ],
                                            onFocus: ($event) => onFieldFocus("chatLink"),
                                            onBlur: ($event) => onFieldBlur("chatLink")
                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "onFocus", "onBlur"]),
                                          unref(editTask).chatLink ? (openBlock(), createBlock("a", {
                                            key: 1,
                                            href: unref(chatLinkUrl),
                                            target: "_blank",
                                            rel: "noopener",
                                            class: "text-xs text-indigo-400 hover:underline whitespace-nowrap",
                                            title: "\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u0441\u0441\u044B\u043B\u043A\u0443 \u0432 \u043D\u043E\u0432\u043E\u0439 \u0432\u043A\u043B\u0430\u0434\u043A\u0435"
                                          }, " \u041F\u0435\u0440\u0435\u0439\u0442\u0438 ", 8, ["href"])) : createCommentVNode("", true)
                                        ]),
                                        createVNode("div", { class: "relative mt-5" }, [
                                          createVNode(_component_UiLabel, { class: "font-light text-neutral-400 absolute left-2 top-[-8px] bg-neutral-700 rounded-sm px-1" }, {
                                            default: withCtx(() => [
                                              createTextVNode("\u041C\u0435\u0442\u043A\u0438")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_MyKanbanTagsInput, {
                                            modelValue: unref(selectedTaskTags),
                                            "onUpdate:modelValue": ($event) => isRef(selectedTaskTags) ? selectedTaskTags.value = $event : null,
                                            "board-id": unref(editTask).board.id,
                                            "task-id": _ctx.taskId,
                                            "initial-selected": unref(editTask).tags.map((t) => t.name)
                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "board-id", "task-id", "initial-selected"])
                                        ]),
                                        createVNode("div", {
                                          ref_key: "descWrap",
                                          ref: descWrap,
                                          class: "relative mt-5"
                                        }, [
                                          unref(editTask).description ? (openBlock(), createBlock(_component_UiLabel, {
                                            key: 0,
                                            class: "font-light text-neutral-400 absolute left-2 top-[-8px] bg-neutral-700 rounded-sm px-1"
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode("\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435")
                                            ]),
                                            _: 1
                                          })) : createCommentVNode("", true),
                                          withDirectives(createVNode(_component_UiTextarea, {
                                            modelValue: unref(editTask).description,
                                            "onUpdate:modelValue": ($event) => unref(editTask).description = $event,
                                            rows: "1",
                                            class: "resize-none overflow-hidden mt-1 min-h-[200px] w-full rounded-sm border bg-neutral-700 text-neutral-300 placeholder:text-neutral-500 border-neutral-500/50 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-indigo-500",
                                            placeholder: "\u041E\u043F\u0438\u0448\u0438\u0442\u0435 \u0437\u0430\u0434\u0430\u0447\u0443",
                                            onFocus: ($event) => onFieldFocus("description"),
                                            onBlur: ($event) => onFieldBlur("description")
                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "onFocus", "onBlur"]), [
                                            [unref(vAutoResize)]
                                          ])
                                        ], 512)
                                      ];
                                    }),
                                    _: 1
                                  }),
                                  createVNode(_component_UiTabsContent, {
                                    value: "prod",
                                    class: "h-full px-3 pt-3"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_MyKanbanTaskOrder, { "task-id": _ctx.taskId }, null, 8, ["task-id"])
                                    ]),
                                    _: 1
                                  })
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(`</div><aside class="sm:col-span-3 min-h-full h-fit border-l-1 border-neutral-500"${_scopeId3}>`);
                          _push4(ssrRenderComponent(_component_MyKanbanTaskComments, {
                            key: unref(editTask).id,
                            "task-id": unref(editTask).id
                          }, null, _parent4, _scopeId3));
                          _push4(`</aside></div>`);
                        } else {
                          return [
                            createVNode("div", { class: "min-h-full grid grid-cols-1 md:grid-cols-7 pr-2 bg-neutral-800" }, [
                              createVNode("div", { class: "sm:col-span-4 bg-neutral-800 mb-3" }, [
                                createVNode(_component_UiTabs, {
                                  modelValue: unref(activeTab),
                                  "onUpdate:modelValue": ($event) => isRef(activeTab) ? activeTab.value = $event : null,
                                  "default-value": "main",
                                  class: ""
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_UiTabsList, { class: "ml-2 mt-2 bg-neutral-600 text-neutral-300" }, {
                                      default: withCtx(() => [
                                        createVNode(_component_UiTabsTrigger, {
                                          value: "main",
                                          class: ""
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(" \u041E\u0441\u043D\u043E\u0432\u043D\u043E\u0435 ")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_UiTabsTrigger, { value: "prod" }, {
                                          default: withCtx(() => [
                                            createTextVNode(" \u0422\u0417 ")
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_UiSeparator, { class: "my-2 bg-neutral-500" }),
                                    createVNode(_component_UiTabsContent, {
                                      value: "main",
                                      class: "p-3"
                                    }, {
                                      default: withCtx(() => {
                                        var _a, _b;
                                        return [
                                          createVNode("div", { class: "mb-4 space-y-1" }, [
                                            createVNode("div", { class: "text-sm text-neutral-300" }, [
                                              createVNode("span", { class: "font-medium" }, "\u0421\u043E\u0437\u0434\u0430\u0442\u0435\u043B\u044C:"),
                                              createTextVNode(" " + toDisplayString(((_a = unref(editTask).creator) == null ? void 0 : _a.fullName) || ((_b = unref(editTask).creator) == null ? void 0 : _b.email) || "\u2014"), 1)
                                            ]),
                                            createVNode("div", { class: "text-xs text-neutral-400" }, [
                                              createVNode("span", { class: "font-medium" }, "\u0421\u043E\u0437\u0434\u0430\u043D\u0430:"),
                                              createTextVNode(" " + toDisplayString(("formatRuDateTime" in _ctx ? _ctx.formatRuDateTime : unref(formatRuDateTime))(unref(editTask).createdAt) || "\u2014"), 1)
                                            ]),
                                            createVNode("div", { class: "my-4 relative" }, [
                                              createVNode(_component_UiLabel, { class: "font-light text-neutral-400 absolute left-2 top-[-8px] bg-neutral-700 rounded-sm px-1" }, {
                                                default: withCtx(() => [
                                                  createTextVNode("\u0423\u0447\u0430\u0441\u0442\u043D\u0438\u043A\u0438")
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(_component_MyKanbanTaskMembersPanel, {
                                                "task-id": unref(editTask).id,
                                                actions: true
                                              }, null, 8, ["task-id"])
                                            ]),
                                            createVNode("div", { class: "relative flex gap-2 items-center mt-4" }, [
                                              createVNode(_component_UiLabel, { class: "font-light text-neutral-400 absolute left-2 top-[-8px] bg-neutral-700 rounded-sm px-1" }, {
                                                default: withCtx(() => [
                                                  createTextVNode("\u0420\u0430\u0441\u043F\u043E\u043B\u043E\u0436\u0435\u043D\u0438\u0435")
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(_component_MyKanbanTaskMove, {
                                                "task-id": _ctx.taskId,
                                                "column-id": unref(editTask).columnId,
                                                label: unref(editTask).column.title,
                                                onUpdateTaskColumn: handleMoveTask
                                              }, null, 8, ["task-id", "column-id", "label"])
                                            ])
                                          ]),
                                          createVNode("div", { class: "relative flex items-center gap-2" }, [
                                            unref(editTask).chatLink ? (openBlock(), createBlock(_component_UiLabel, {
                                              key: 0,
                                              class: "font-light text-neutral-400 absolute left-2 top-[-8px] bg-neutral-700 rounded-sm px-1"
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode("\u0421\u0441\u044B\u043B\u043A\u0430 \u043D\u0430 \u0441\u0434\u0435\u043B\u043A\u0443")
                                              ]),
                                              _: 1
                                            })) : createCommentVNode("", true),
                                            createVNode(_component_UiInput, {
                                              modelValue: unref(editTask).chatLink,
                                              "onUpdate:modelValue": ($event) => unref(editTask).chatLink = $event,
                                              placeholder: "\u0421\u0441\u044B\u043B\u043A\u0430 \u043D\u0430 \u0441\u0434\u0435\u043B\u043A\u0443",
                                              class: [
                                                "bg-neutral-700 text-neutral-300 placeholder:text-neutral-500 border-neutral-500/50"
                                              ],
                                              onFocus: ($event) => onFieldFocus("chatLink"),
                                              onBlur: ($event) => onFieldBlur("chatLink")
                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "onFocus", "onBlur"]),
                                            unref(editTask).chatLink ? (openBlock(), createBlock("a", {
                                              key: 1,
                                              href: unref(chatLinkUrl),
                                              target: "_blank",
                                              rel: "noopener",
                                              class: "text-xs text-indigo-400 hover:underline whitespace-nowrap",
                                              title: "\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u0441\u0441\u044B\u043B\u043A\u0443 \u0432 \u043D\u043E\u0432\u043E\u0439 \u0432\u043A\u043B\u0430\u0434\u043A\u0435"
                                            }, " \u041F\u0435\u0440\u0435\u0439\u0442\u0438 ", 8, ["href"])) : createCommentVNode("", true)
                                          ]),
                                          createVNode("div", { class: "relative mt-5" }, [
                                            createVNode(_component_UiLabel, { class: "font-light text-neutral-400 absolute left-2 top-[-8px] bg-neutral-700 rounded-sm px-1" }, {
                                              default: withCtx(() => [
                                                createTextVNode("\u041C\u0435\u0442\u043A\u0438")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_MyKanbanTagsInput, {
                                              modelValue: unref(selectedTaskTags),
                                              "onUpdate:modelValue": ($event) => isRef(selectedTaskTags) ? selectedTaskTags.value = $event : null,
                                              "board-id": unref(editTask).board.id,
                                              "task-id": _ctx.taskId,
                                              "initial-selected": unref(editTask).tags.map((t) => t.name)
                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "board-id", "task-id", "initial-selected"])
                                          ]),
                                          createVNode("div", {
                                            ref_key: "descWrap",
                                            ref: descWrap,
                                            class: "relative mt-5"
                                          }, [
                                            unref(editTask).description ? (openBlock(), createBlock(_component_UiLabel, {
                                              key: 0,
                                              class: "font-light text-neutral-400 absolute left-2 top-[-8px] bg-neutral-700 rounded-sm px-1"
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode("\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435")
                                              ]),
                                              _: 1
                                            })) : createCommentVNode("", true),
                                            withDirectives(createVNode(_component_UiTextarea, {
                                              modelValue: unref(editTask).description,
                                              "onUpdate:modelValue": ($event) => unref(editTask).description = $event,
                                              rows: "1",
                                              class: "resize-none overflow-hidden mt-1 min-h-[200px] w-full rounded-sm border bg-neutral-700 text-neutral-300 placeholder:text-neutral-500 border-neutral-500/50 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-indigo-500",
                                              placeholder: "\u041E\u043F\u0438\u0448\u0438\u0442\u0435 \u0437\u0430\u0434\u0430\u0447\u0443",
                                              onFocus: ($event) => onFieldFocus("description"),
                                              onBlur: ($event) => onFieldBlur("description")
                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "onFocus", "onBlur"]), [
                                              [unref(vAutoResize)]
                                            ])
                                          ], 512)
                                        ];
                                      }),
                                      _: 1
                                    }),
                                    createVNode(_component_UiTabsContent, {
                                      value: "prod",
                                      class: "h-full px-3 pt-3"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_MyKanbanTaskOrder, { "task-id": _ctx.taskId }, null, 8, ["task-id"])
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              createVNode("aside", { class: "sm:col-span-3 min-h-full h-fit border-l-1 border-neutral-500" }, [
                                (openBlock(), createBlock(_component_MyKanbanTaskComments, {
                                  key: unref(editTask).id,
                                  "task-id": unref(editTask).id
                                }, null, 8, ["task-id"]))
                              ])
                            ])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(`</div>`);
                  } else {
                    return [
                      createVNode(_component_UiDialogHeader, { class: "hidden" }, {
                        default: withCtx(() => [
                          createVNode(_component_UiDialogTitle),
                          createVNode(_component_UiDialogDescription)
                        ]),
                        _: 1
                      }),
                      withDirectives(createVNode("div", {
                        class: ["absolute inset-0 z-20 grid place-items-center rounded-none sm:rounded-2xl bg-white/60 backdrop-blur-[1px] text-sm text-neutral-600 transition-opacity duration-200", unref(isLoading) ? "opacity-100" : "opacity-0"]
                      }, toDisplayString(unref(isLoading) ? "\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430\u2026" : "\u0421\u043E\u0445\u0440\u0430\u043D\u044F\u044E\u2026"), 3), [
                        [vShow, unref(isLoading)]
                      ]),
                      createVNode("div", { class: "sticky top-0 z-10 flex gap-1 sm:flex-nowrap items-center justify-between border-b bg-neutral-700 px-4 sm:px-5 py-3 sm:py-4 border-b-neutral-500" }, [
                        createVNode("div", { class: "flex items-center gap-2 w-full" }, [
                          unref(editTask).archived ? (openBlock(), createBlock("div", {
                            key: 0,
                            class: "whitespace-nowrap text-neutral-300 text-xl border-1 border-neutral-600 p-1 rounded-md bg-red-700/50"
                          }, " \u0412 \u0430\u0440\u0445\u0438\u0432\u0435 ")) : createCommentVNode("", true),
                          createVNode(_component_UiInput, {
                            modelValue: unref(editTask).title,
                            "onUpdate:modelValue": ($event) => unref(editTask).title = $event,
                            class: "w-full rounded-lg border border-neutral-500/50 px-3 py-2 text-base font-semibold outline-none focus:ring-2 focus:ring-neutral-500 bg-neutral-700 text-neutral-300",
                            placeholder: "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0438",
                            onFocus: ($event) => onFieldFocus("title"),
                            onBlur: ($event) => onFieldBlur("title")
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "onFocus", "onBlur"])
                        ]),
                        createVNode(_component_UiDropdownMenu, null, {
                          default: withCtx(() => [
                            createVNode(_component_UiDropdownMenuTrigger, null, {
                              default: withCtx(() => [
                                createVNode(_component_UiButton, {
                                  class: "size-9 p-0 border-1 border-neutral-500/50 bg-neutral-700 text-neutral-300 hover:text-neutral-100 hover:bg-neutral-700 cursor-pointer",
                                  title: "\u0414\u0435\u0439\u0441\u0442\u0432\u0438\u044F"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(unref(EllipsisVertical))
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(_component_UiDropdownMenuContent, { class: "bg-neutral-700 text-neutral-300" }, {
                              default: withCtx(() => [
                                createVNode(_component_UiDropdownMenuItem, {
                                  class: ["cursor-pointer"],
                                  onClick: ($event) => copyTaskLink()
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("\u0421\u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0441\u0441\u044B\u043B\u043A\u0443 \u043D\u0430 \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0443")
                                  ]),
                                  _: 1
                                }, 8, ["onClick"]),
                                createVNode(_component_UiDropdownMenuSub, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_UiDropdownMenuSubTrigger, { class: "cursor-pointer" }, {
                                      default: withCtx(() => [
                                        createTextVNode(" \u0421\u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0432 ... ")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_UiDropdownMenuSubContent, { class: "bg-neutral-700 text-neutral-300" }, {
                                      default: withCtx(() => [
                                        (openBlock(true), createBlock(Fragment, null, renderList(unref(avaliableBoards), (b) => {
                                          return openBlock(), createBlock(_component_UiDropdownMenuItem, {
                                            key: b.id,
                                            class: "cursor-pointer",
                                            onClick: ($event) => copyToBoard(b.id)
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
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_UiDropdownMenuSub, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_UiDropdownMenuSubTrigger, { class: "cursor-pointer" }, {
                                      default: withCtx(() => [
                                        createTextVNode(" \u041F\u0435\u0440\u0435\u043C\u0435\u0441\u0442\u0438\u0442\u044C \u0432 ... ")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_UiDropdownMenuSubContent, { class: "bg-neutral-700 text-neutral-300" }, {
                                      default: withCtx(() => [
                                        (openBlock(true), createBlock(Fragment, null, renderList(unref(avaliableBoards), (b) => {
                                          return openBlock(), createBlock(_component_UiDropdownMenuItem, {
                                            key: b.id,
                                            class: "cursor-pointer",
                                            onClick: ($event) => moveToBoard(b.id)
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
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_UiDropdownMenuItem, {
                                  class: "cursor-pointer",
                                  onClick: ($event) => isAuditDialogOpen.value = true
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("\u0418\u0441\u0442\u043E\u0440\u0438\u044F \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u0439")
                                  ]),
                                  _: 1
                                }, 8, ["onClick"]),
                                createVNode(_component_UiDropdownMenuItem, {
                                  class: ["cursor-pointer"],
                                  disabled: unref(isArchiving),
                                  onClick: ($event) => setArchived(!unref(editTask).archived)
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(unref(editTask).archived ? "\u0412\u0435\u0440\u043D\u0443\u0442\u044C \u0438\u0437 \u0430\u0440\u0445\u0438\u0432\u0430" : "\u041F\u0435\u0440\u0435\u043C\u0435\u0441\u0442\u0438\u0442\u044C \u0432 \u0430\u0440\u0445\u0438\u0432"), 1)
                                  ]),
                                  _: 1
                                }, 8, ["disabled", "onClick"]),
                                createVNode(_component_UiDropdownMenuItem, { class: "cursor-pointer" }, {
                                  default: withCtx(() => [
                                    createTextVNode("\u0414\u0443\u0431\u043B\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0443")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_UiDropdownMenuItem, {
                                  class: "cursor-pointer",
                                  onClick: ($event) => emitDelete()
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0443")
                                  ]),
                                  _: 1
                                }, 8, ["onClick"])
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UiButton, {
                          class: "p-0 size-9 border-1 border-neutral-500/50 bg-neutral-700 text-neutral-300 hover:text-neutral-100 hover:bg-neutral-700 cursor-pointer",
                          title: "\u0417\u0430\u043A\u0440\u044B\u0442\u044C",
                          onClick: ($event) => close()
                        }, {
                          default: withCtx(() => [
                            createVNode(unref(X))
                          ]),
                          _: 1
                        }, 8, ["onClick"])
                      ]),
                      createVNode("div", { class: "relative flex-1 min-h-0 overflow-hidden" }, [
                        createVNode(_component_UiScrollArea, { class: "h-full" }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "min-h-full grid grid-cols-1 md:grid-cols-7 pr-2 bg-neutral-800" }, [
                              createVNode("div", { class: "sm:col-span-4 bg-neutral-800 mb-3" }, [
                                createVNode(_component_UiTabs, {
                                  modelValue: unref(activeTab),
                                  "onUpdate:modelValue": ($event) => isRef(activeTab) ? activeTab.value = $event : null,
                                  "default-value": "main",
                                  class: ""
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_UiTabsList, { class: "ml-2 mt-2 bg-neutral-600 text-neutral-300" }, {
                                      default: withCtx(() => [
                                        createVNode(_component_UiTabsTrigger, {
                                          value: "main",
                                          class: ""
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(" \u041E\u0441\u043D\u043E\u0432\u043D\u043E\u0435 ")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_UiTabsTrigger, { value: "prod" }, {
                                          default: withCtx(() => [
                                            createTextVNode(" \u0422\u0417 ")
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_UiSeparator, { class: "my-2 bg-neutral-500" }),
                                    createVNode(_component_UiTabsContent, {
                                      value: "main",
                                      class: "p-3"
                                    }, {
                                      default: withCtx(() => {
                                        var _a, _b;
                                        return [
                                          createVNode("div", { class: "mb-4 space-y-1" }, [
                                            createVNode("div", { class: "text-sm text-neutral-300" }, [
                                              createVNode("span", { class: "font-medium" }, "\u0421\u043E\u0437\u0434\u0430\u0442\u0435\u043B\u044C:"),
                                              createTextVNode(" " + toDisplayString(((_a = unref(editTask).creator) == null ? void 0 : _a.fullName) || ((_b = unref(editTask).creator) == null ? void 0 : _b.email) || "\u2014"), 1)
                                            ]),
                                            createVNode("div", { class: "text-xs text-neutral-400" }, [
                                              createVNode("span", { class: "font-medium" }, "\u0421\u043E\u0437\u0434\u0430\u043D\u0430:"),
                                              createTextVNode(" " + toDisplayString(("formatRuDateTime" in _ctx ? _ctx.formatRuDateTime : unref(formatRuDateTime))(unref(editTask).createdAt) || "\u2014"), 1)
                                            ]),
                                            createVNode("div", { class: "my-4 relative" }, [
                                              createVNode(_component_UiLabel, { class: "font-light text-neutral-400 absolute left-2 top-[-8px] bg-neutral-700 rounded-sm px-1" }, {
                                                default: withCtx(() => [
                                                  createTextVNode("\u0423\u0447\u0430\u0441\u0442\u043D\u0438\u043A\u0438")
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(_component_MyKanbanTaskMembersPanel, {
                                                "task-id": unref(editTask).id,
                                                actions: true
                                              }, null, 8, ["task-id"])
                                            ]),
                                            createVNode("div", { class: "relative flex gap-2 items-center mt-4" }, [
                                              createVNode(_component_UiLabel, { class: "font-light text-neutral-400 absolute left-2 top-[-8px] bg-neutral-700 rounded-sm px-1" }, {
                                                default: withCtx(() => [
                                                  createTextVNode("\u0420\u0430\u0441\u043F\u043E\u043B\u043E\u0436\u0435\u043D\u0438\u0435")
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(_component_MyKanbanTaskMove, {
                                                "task-id": _ctx.taskId,
                                                "column-id": unref(editTask).columnId,
                                                label: unref(editTask).column.title,
                                                onUpdateTaskColumn: handleMoveTask
                                              }, null, 8, ["task-id", "column-id", "label"])
                                            ])
                                          ]),
                                          createVNode("div", { class: "relative flex items-center gap-2" }, [
                                            unref(editTask).chatLink ? (openBlock(), createBlock(_component_UiLabel, {
                                              key: 0,
                                              class: "font-light text-neutral-400 absolute left-2 top-[-8px] bg-neutral-700 rounded-sm px-1"
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode("\u0421\u0441\u044B\u043B\u043A\u0430 \u043D\u0430 \u0441\u0434\u0435\u043B\u043A\u0443")
                                              ]),
                                              _: 1
                                            })) : createCommentVNode("", true),
                                            createVNode(_component_UiInput, {
                                              modelValue: unref(editTask).chatLink,
                                              "onUpdate:modelValue": ($event) => unref(editTask).chatLink = $event,
                                              placeholder: "\u0421\u0441\u044B\u043B\u043A\u0430 \u043D\u0430 \u0441\u0434\u0435\u043B\u043A\u0443",
                                              class: [
                                                "bg-neutral-700 text-neutral-300 placeholder:text-neutral-500 border-neutral-500/50"
                                              ],
                                              onFocus: ($event) => onFieldFocus("chatLink"),
                                              onBlur: ($event) => onFieldBlur("chatLink")
                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "onFocus", "onBlur"]),
                                            unref(editTask).chatLink ? (openBlock(), createBlock("a", {
                                              key: 1,
                                              href: unref(chatLinkUrl),
                                              target: "_blank",
                                              rel: "noopener",
                                              class: "text-xs text-indigo-400 hover:underline whitespace-nowrap",
                                              title: "\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u0441\u0441\u044B\u043B\u043A\u0443 \u0432 \u043D\u043E\u0432\u043E\u0439 \u0432\u043A\u043B\u0430\u0434\u043A\u0435"
                                            }, " \u041F\u0435\u0440\u0435\u0439\u0442\u0438 ", 8, ["href"])) : createCommentVNode("", true)
                                          ]),
                                          createVNode("div", { class: "relative mt-5" }, [
                                            createVNode(_component_UiLabel, { class: "font-light text-neutral-400 absolute left-2 top-[-8px] bg-neutral-700 rounded-sm px-1" }, {
                                              default: withCtx(() => [
                                                createTextVNode("\u041C\u0435\u0442\u043A\u0438")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_MyKanbanTagsInput, {
                                              modelValue: unref(selectedTaskTags),
                                              "onUpdate:modelValue": ($event) => isRef(selectedTaskTags) ? selectedTaskTags.value = $event : null,
                                              "board-id": unref(editTask).board.id,
                                              "task-id": _ctx.taskId,
                                              "initial-selected": unref(editTask).tags.map((t) => t.name)
                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "board-id", "task-id", "initial-selected"])
                                          ]),
                                          createVNode("div", {
                                            ref_key: "descWrap",
                                            ref: descWrap,
                                            class: "relative mt-5"
                                          }, [
                                            unref(editTask).description ? (openBlock(), createBlock(_component_UiLabel, {
                                              key: 0,
                                              class: "font-light text-neutral-400 absolute left-2 top-[-8px] bg-neutral-700 rounded-sm px-1"
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode("\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435")
                                              ]),
                                              _: 1
                                            })) : createCommentVNode("", true),
                                            withDirectives(createVNode(_component_UiTextarea, {
                                              modelValue: unref(editTask).description,
                                              "onUpdate:modelValue": ($event) => unref(editTask).description = $event,
                                              rows: "1",
                                              class: "resize-none overflow-hidden mt-1 min-h-[200px] w-full rounded-sm border bg-neutral-700 text-neutral-300 placeholder:text-neutral-500 border-neutral-500/50 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-indigo-500",
                                              placeholder: "\u041E\u043F\u0438\u0448\u0438\u0442\u0435 \u0437\u0430\u0434\u0430\u0447\u0443",
                                              onFocus: ($event) => onFieldFocus("description"),
                                              onBlur: ($event) => onFieldBlur("description")
                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "onFocus", "onBlur"]), [
                                              [unref(vAutoResize)]
                                            ])
                                          ], 512)
                                        ];
                                      }),
                                      _: 1
                                    }),
                                    createVNode(_component_UiTabsContent, {
                                      value: "prod",
                                      class: "h-full px-3 pt-3"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_MyKanbanTaskOrder, { "task-id": _ctx.taskId }, null, 8, ["task-id"])
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              createVNode("aside", { class: "sm:col-span-3 min-h-full h-fit border-l-1 border-neutral-500" }, [
                                (openBlock(), createBlock(_component_MyKanbanTaskComments, {
                                  key: unref(editTask).id,
                                  "task-id": unref(editTask).id
                                }, null, 8, ["task-id"]))
                              ])
                            ])
                          ]),
                          _: 1
                        })
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(ssrRenderComponent(_component_UiDialog, {
              open: unref(isAuditDialogOpen),
              "onUpdate:open": ($event) => isRef(isAuditDialogOpen) ? isAuditDialogOpen.value = $event : null
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UiDialogTrigger, { class: "hidden" }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UiDialogContent, { class: "max-w-3xl bg-neutral-800 border-neutral-700" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      var _a, _b;
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UiDialogHeader, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_UiDialogTitle, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`\u0418\u0441\u0442\u043E\u0440\u0438\u044F \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u0439`);
                                  } else {
                                    return [
                                      createTextVNode("\u0418\u0441\u0442\u043E\u0440\u0438\u044F \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u0439")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_UiDialogDescription, null, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_UiDialogTitle, null, {
                                  default: withCtx(() => [
                                    createTextVNode("\u0418\u0441\u0442\u043E\u0440\u0438\u044F \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u0439")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_UiDialogDescription)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`<div class="px-1"${_scopeId3}>`);
                        _push4(ssrRenderComponent(_component_MyKanbanTaskAuditPanel, {
                          "task-id": ((_a = unref(editTask)) == null ? void 0 : _a.id) || 0,
                          refreshable: ""
                        }, null, _parent4, _scopeId3));
                        _push4(`</div>`);
                        _push4(ssrRenderComponent(_component_UiDialogFooter, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_UiDialogHeader, null, {
                            default: withCtx(() => [
                              createVNode(_component_UiDialogTitle, null, {
                                default: withCtx(() => [
                                  createTextVNode("\u0418\u0441\u0442\u043E\u0440\u0438\u044F \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u0439")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_UiDialogDescription)
                            ]),
                            _: 1
                          }),
                          createVNode("div", { class: "px-1" }, [
                            createVNode(_component_MyKanbanTaskAuditPanel, {
                              "task-id": ((_b = unref(editTask)) == null ? void 0 : _b.id) || 0,
                              refreshable: ""
                            }, null, 8, ["task-id"])
                          ]),
                          createVNode(_component_UiDialogFooter)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UiDialogTrigger, { class: "hidden" }),
                    createVNode(_component_UiDialogContent, { class: "max-w-3xl bg-neutral-800 border-neutral-700" }, {
                      default: withCtx(() => {
                        var _a;
                        return [
                          createVNode(_component_UiDialogHeader, null, {
                            default: withCtx(() => [
                              createVNode(_component_UiDialogTitle, null, {
                                default: withCtx(() => [
                                  createTextVNode("\u0418\u0441\u0442\u043E\u0440\u0438\u044F \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u0439")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_UiDialogDescription)
                            ]),
                            _: 1
                          }),
                          createVNode("div", { class: "px-1" }, [
                            createVNode(_component_MyKanbanTaskAuditPanel, {
                              "task-id": ((_a = unref(editTask)) == null ? void 0 : _a.id) || 0,
                              refreshable: ""
                            }, null, 8, ["task-id"])
                          ]),
                          createVNode(_component_UiDialogFooter)
                        ];
                      }),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UiDialogTrigger, { class: "hidden" }),
              unref(editTask) ? (openBlock(), createBlock(_component_UiDialogContent, {
                key: 0,
                class: "w-full max-w-6xl h-[100vh] sm:mt-1 bg-neutral-800 border-neutral-700 flex flex-col gap-0 overflow-hidden p-0"
              }, {
                default: withCtx(() => [
                  createVNode(_component_UiDialogHeader, { class: "hidden" }, {
                    default: withCtx(() => [
                      createVNode(_component_UiDialogTitle),
                      createVNode(_component_UiDialogDescription)
                    ]),
                    _: 1
                  }),
                  withDirectives(createVNode("div", {
                    class: ["absolute inset-0 z-20 grid place-items-center rounded-none sm:rounded-2xl bg-white/60 backdrop-blur-[1px] text-sm text-neutral-600 transition-opacity duration-200", unref(isLoading) ? "opacity-100" : "opacity-0"]
                  }, toDisplayString(unref(isLoading) ? "\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430\u2026" : "\u0421\u043E\u0445\u0440\u0430\u043D\u044F\u044E\u2026"), 3), [
                    [vShow, unref(isLoading)]
                  ]),
                  createVNode("div", { class: "sticky top-0 z-10 flex gap-1 sm:flex-nowrap items-center justify-between border-b bg-neutral-700 px-4 sm:px-5 py-3 sm:py-4 border-b-neutral-500" }, [
                    createVNode("div", { class: "flex items-center gap-2 w-full" }, [
                      unref(editTask).archived ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: "whitespace-nowrap text-neutral-300 text-xl border-1 border-neutral-600 p-1 rounded-md bg-red-700/50"
                      }, " \u0412 \u0430\u0440\u0445\u0438\u0432\u0435 ")) : createCommentVNode("", true),
                      createVNode(_component_UiInput, {
                        modelValue: unref(editTask).title,
                        "onUpdate:modelValue": ($event) => unref(editTask).title = $event,
                        class: "w-full rounded-lg border border-neutral-500/50 px-3 py-2 text-base font-semibold outline-none focus:ring-2 focus:ring-neutral-500 bg-neutral-700 text-neutral-300",
                        placeholder: "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0438",
                        onFocus: ($event) => onFieldFocus("title"),
                        onBlur: ($event) => onFieldBlur("title")
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "onFocus", "onBlur"])
                    ]),
                    createVNode(_component_UiDropdownMenu, null, {
                      default: withCtx(() => [
                        createVNode(_component_UiDropdownMenuTrigger, null, {
                          default: withCtx(() => [
                            createVNode(_component_UiButton, {
                              class: "size-9 p-0 border-1 border-neutral-500/50 bg-neutral-700 text-neutral-300 hover:text-neutral-100 hover:bg-neutral-700 cursor-pointer",
                              title: "\u0414\u0435\u0439\u0441\u0442\u0432\u0438\u044F"
                            }, {
                              default: withCtx(() => [
                                createVNode(unref(EllipsisVertical))
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UiDropdownMenuContent, { class: "bg-neutral-700 text-neutral-300" }, {
                          default: withCtx(() => [
                            createVNode(_component_UiDropdownMenuItem, {
                              class: ["cursor-pointer"],
                              onClick: ($event) => copyTaskLink()
                            }, {
                              default: withCtx(() => [
                                createTextVNode("\u0421\u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0441\u0441\u044B\u043B\u043A\u0443 \u043D\u0430 \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0443")
                              ]),
                              _: 1
                            }, 8, ["onClick"]),
                            createVNode(_component_UiDropdownMenuSub, null, {
                              default: withCtx(() => [
                                createVNode(_component_UiDropdownMenuSubTrigger, { class: "cursor-pointer" }, {
                                  default: withCtx(() => [
                                    createTextVNode(" \u0421\u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0432 ... ")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_UiDropdownMenuSubContent, { class: "bg-neutral-700 text-neutral-300" }, {
                                  default: withCtx(() => [
                                    (openBlock(true), createBlock(Fragment, null, renderList(unref(avaliableBoards), (b) => {
                                      return openBlock(), createBlock(_component_UiDropdownMenuItem, {
                                        key: b.id,
                                        class: "cursor-pointer",
                                        onClick: ($event) => copyToBoard(b.id)
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
                              ]),
                              _: 1
                            }),
                            createVNode(_component_UiDropdownMenuSub, null, {
                              default: withCtx(() => [
                                createVNode(_component_UiDropdownMenuSubTrigger, { class: "cursor-pointer" }, {
                                  default: withCtx(() => [
                                    createTextVNode(" \u041F\u0435\u0440\u0435\u043C\u0435\u0441\u0442\u0438\u0442\u044C \u0432 ... ")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_UiDropdownMenuSubContent, { class: "bg-neutral-700 text-neutral-300" }, {
                                  default: withCtx(() => [
                                    (openBlock(true), createBlock(Fragment, null, renderList(unref(avaliableBoards), (b) => {
                                      return openBlock(), createBlock(_component_UiDropdownMenuItem, {
                                        key: b.id,
                                        class: "cursor-pointer",
                                        onClick: ($event) => moveToBoard(b.id)
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
                              ]),
                              _: 1
                            }),
                            createVNode(_component_UiDropdownMenuItem, {
                              class: "cursor-pointer",
                              onClick: ($event) => isAuditDialogOpen.value = true
                            }, {
                              default: withCtx(() => [
                                createTextVNode("\u0418\u0441\u0442\u043E\u0440\u0438\u044F \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u0439")
                              ]),
                              _: 1
                            }, 8, ["onClick"]),
                            createVNode(_component_UiDropdownMenuItem, {
                              class: ["cursor-pointer"],
                              disabled: unref(isArchiving),
                              onClick: ($event) => setArchived(!unref(editTask).archived)
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(unref(editTask).archived ? "\u0412\u0435\u0440\u043D\u0443\u0442\u044C \u0438\u0437 \u0430\u0440\u0445\u0438\u0432\u0430" : "\u041F\u0435\u0440\u0435\u043C\u0435\u0441\u0442\u0438\u0442\u044C \u0432 \u0430\u0440\u0445\u0438\u0432"), 1)
                              ]),
                              _: 1
                            }, 8, ["disabled", "onClick"]),
                            createVNode(_component_UiDropdownMenuItem, { class: "cursor-pointer" }, {
                              default: withCtx(() => [
                                createTextVNode("\u0414\u0443\u0431\u043B\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0443")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_UiDropdownMenuItem, {
                              class: "cursor-pointer",
                              onClick: ($event) => emitDelete()
                            }, {
                              default: withCtx(() => [
                                createTextVNode("\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0443")
                              ]),
                              _: 1
                            }, 8, ["onClick"])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_UiButton, {
                      class: "p-0 size-9 border-1 border-neutral-500/50 bg-neutral-700 text-neutral-300 hover:text-neutral-100 hover:bg-neutral-700 cursor-pointer",
                      title: "\u0417\u0430\u043A\u0440\u044B\u0442\u044C",
                      onClick: ($event) => close()
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(X))
                      ]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  createVNode("div", { class: "relative flex-1 min-h-0 overflow-hidden" }, [
                    createVNode(_component_UiScrollArea, { class: "h-full" }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "min-h-full grid grid-cols-1 md:grid-cols-7 pr-2 bg-neutral-800" }, [
                          createVNode("div", { class: "sm:col-span-4 bg-neutral-800 mb-3" }, [
                            createVNode(_component_UiTabs, {
                              modelValue: unref(activeTab),
                              "onUpdate:modelValue": ($event) => isRef(activeTab) ? activeTab.value = $event : null,
                              "default-value": "main",
                              class: ""
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_UiTabsList, { class: "ml-2 mt-2 bg-neutral-600 text-neutral-300" }, {
                                  default: withCtx(() => [
                                    createVNode(_component_UiTabsTrigger, {
                                      value: "main",
                                      class: ""
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" \u041E\u0441\u043D\u043E\u0432\u043D\u043E\u0435 ")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_UiTabsTrigger, { value: "prod" }, {
                                      default: withCtx(() => [
                                        createTextVNode(" \u0422\u0417 ")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_UiSeparator, { class: "my-2 bg-neutral-500" }),
                                createVNode(_component_UiTabsContent, {
                                  value: "main",
                                  class: "p-3"
                                }, {
                                  default: withCtx(() => {
                                    var _a, _b;
                                    return [
                                      createVNode("div", { class: "mb-4 space-y-1" }, [
                                        createVNode("div", { class: "text-sm text-neutral-300" }, [
                                          createVNode("span", { class: "font-medium" }, "\u0421\u043E\u0437\u0434\u0430\u0442\u0435\u043B\u044C:"),
                                          createTextVNode(" " + toDisplayString(((_a = unref(editTask).creator) == null ? void 0 : _a.fullName) || ((_b = unref(editTask).creator) == null ? void 0 : _b.email) || "\u2014"), 1)
                                        ]),
                                        createVNode("div", { class: "text-xs text-neutral-400" }, [
                                          createVNode("span", { class: "font-medium" }, "\u0421\u043E\u0437\u0434\u0430\u043D\u0430:"),
                                          createTextVNode(" " + toDisplayString(("formatRuDateTime" in _ctx ? _ctx.formatRuDateTime : unref(formatRuDateTime))(unref(editTask).createdAt) || "\u2014"), 1)
                                        ]),
                                        createVNode("div", { class: "my-4 relative" }, [
                                          createVNode(_component_UiLabel, { class: "font-light text-neutral-400 absolute left-2 top-[-8px] bg-neutral-700 rounded-sm px-1" }, {
                                            default: withCtx(() => [
                                              createTextVNode("\u0423\u0447\u0430\u0441\u0442\u043D\u0438\u043A\u0438")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_MyKanbanTaskMembersPanel, {
                                            "task-id": unref(editTask).id,
                                            actions: true
                                          }, null, 8, ["task-id"])
                                        ]),
                                        createVNode("div", { class: "relative flex gap-2 items-center mt-4" }, [
                                          createVNode(_component_UiLabel, { class: "font-light text-neutral-400 absolute left-2 top-[-8px] bg-neutral-700 rounded-sm px-1" }, {
                                            default: withCtx(() => [
                                              createTextVNode("\u0420\u0430\u0441\u043F\u043E\u043B\u043E\u0436\u0435\u043D\u0438\u0435")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_MyKanbanTaskMove, {
                                            "task-id": _ctx.taskId,
                                            "column-id": unref(editTask).columnId,
                                            label: unref(editTask).column.title,
                                            onUpdateTaskColumn: handleMoveTask
                                          }, null, 8, ["task-id", "column-id", "label"])
                                        ])
                                      ]),
                                      createVNode("div", { class: "relative flex items-center gap-2" }, [
                                        unref(editTask).chatLink ? (openBlock(), createBlock(_component_UiLabel, {
                                          key: 0,
                                          class: "font-light text-neutral-400 absolute left-2 top-[-8px] bg-neutral-700 rounded-sm px-1"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode("\u0421\u0441\u044B\u043B\u043A\u0430 \u043D\u0430 \u0441\u0434\u0435\u043B\u043A\u0443")
                                          ]),
                                          _: 1
                                        })) : createCommentVNode("", true),
                                        createVNode(_component_UiInput, {
                                          modelValue: unref(editTask).chatLink,
                                          "onUpdate:modelValue": ($event) => unref(editTask).chatLink = $event,
                                          placeholder: "\u0421\u0441\u044B\u043B\u043A\u0430 \u043D\u0430 \u0441\u0434\u0435\u043B\u043A\u0443",
                                          class: [
                                            "bg-neutral-700 text-neutral-300 placeholder:text-neutral-500 border-neutral-500/50"
                                          ],
                                          onFocus: ($event) => onFieldFocus("chatLink"),
                                          onBlur: ($event) => onFieldBlur("chatLink")
                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "onFocus", "onBlur"]),
                                        unref(editTask).chatLink ? (openBlock(), createBlock("a", {
                                          key: 1,
                                          href: unref(chatLinkUrl),
                                          target: "_blank",
                                          rel: "noopener",
                                          class: "text-xs text-indigo-400 hover:underline whitespace-nowrap",
                                          title: "\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u0441\u0441\u044B\u043B\u043A\u0443 \u0432 \u043D\u043E\u0432\u043E\u0439 \u0432\u043A\u043B\u0430\u0434\u043A\u0435"
                                        }, " \u041F\u0435\u0440\u0435\u0439\u0442\u0438 ", 8, ["href"])) : createCommentVNode("", true)
                                      ]),
                                      createVNode("div", { class: "relative mt-5" }, [
                                        createVNode(_component_UiLabel, { class: "font-light text-neutral-400 absolute left-2 top-[-8px] bg-neutral-700 rounded-sm px-1" }, {
                                          default: withCtx(() => [
                                            createTextVNode("\u041C\u0435\u0442\u043A\u0438")
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_MyKanbanTagsInput, {
                                          modelValue: unref(selectedTaskTags),
                                          "onUpdate:modelValue": ($event) => isRef(selectedTaskTags) ? selectedTaskTags.value = $event : null,
                                          "board-id": unref(editTask).board.id,
                                          "task-id": _ctx.taskId,
                                          "initial-selected": unref(editTask).tags.map((t) => t.name)
                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "board-id", "task-id", "initial-selected"])
                                      ]),
                                      createVNode("div", {
                                        ref_key: "descWrap",
                                        ref: descWrap,
                                        class: "relative mt-5"
                                      }, [
                                        unref(editTask).description ? (openBlock(), createBlock(_component_UiLabel, {
                                          key: 0,
                                          class: "font-light text-neutral-400 absolute left-2 top-[-8px] bg-neutral-700 rounded-sm px-1"
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode("\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435")
                                          ]),
                                          _: 1
                                        })) : createCommentVNode("", true),
                                        withDirectives(createVNode(_component_UiTextarea, {
                                          modelValue: unref(editTask).description,
                                          "onUpdate:modelValue": ($event) => unref(editTask).description = $event,
                                          rows: "1",
                                          class: "resize-none overflow-hidden mt-1 min-h-[200px] w-full rounded-sm border bg-neutral-700 text-neutral-300 placeholder:text-neutral-500 border-neutral-500/50 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-indigo-500",
                                          placeholder: "\u041E\u043F\u0438\u0448\u0438\u0442\u0435 \u0437\u0430\u0434\u0430\u0447\u0443",
                                          onFocus: ($event) => onFieldFocus("description"),
                                          onBlur: ($event) => onFieldBlur("description")
                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "onFocus", "onBlur"]), [
                                          [unref(vAutoResize)]
                                        ])
                                      ], 512)
                                    ];
                                  }),
                                  _: 1
                                }),
                                createVNode(_component_UiTabsContent, {
                                  value: "prod",
                                  class: "h-full px-3 pt-3"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_MyKanbanTaskOrder, { "task-id": _ctx.taskId }, null, 8, ["task-id"])
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          createVNode("aside", { class: "sm:col-span-3 min-h-full h-fit border-l-1 border-neutral-500" }, [
                            (openBlock(), createBlock(_component_MyKanbanTaskComments, {
                              key: unref(editTask).id,
                              "task-id": unref(editTask).id
                            }, null, 8, ["task-id"]))
                          ])
                        ])
                      ]),
                      _: 1
                    })
                  ])
                ]),
                _: 1
              })) : createCommentVNode("", true),
              createVNode(_component_UiDialog, {
                open: unref(isAuditDialogOpen),
                "onUpdate:open": ($event) => isRef(isAuditDialogOpen) ? isAuditDialogOpen.value = $event : null
              }, {
                default: withCtx(() => [
                  createVNode(_component_UiDialogTrigger, { class: "hidden" }),
                  createVNode(_component_UiDialogContent, { class: "max-w-3xl bg-neutral-800 border-neutral-700" }, {
                    default: withCtx(() => {
                      var _a;
                      return [
                        createVNode(_component_UiDialogHeader, null, {
                          default: withCtx(() => [
                            createVNode(_component_UiDialogTitle, null, {
                              default: withCtx(() => [
                                createTextVNode("\u0418\u0441\u0442\u043E\u0440\u0438\u044F \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u0439")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_UiDialogDescription)
                          ]),
                          _: 1
                        }),
                        createVNode("div", { class: "px-1" }, [
                          createVNode(_component_MyKanbanTaskAuditPanel, {
                            "task-id": ((_a = unref(editTask)) == null ? void 0 : _a.id) || 0,
                            refreshable: ""
                          }, null, 8, ["task-id"])
                        ]),
                        createVNode(_component_UiDialogFooter)
                      ];
                    }),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["open", "onUpdate:open"])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/my/kanban/TaskModal.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _, useTaskApi as u };
//# sourceMappingURL=TaskModal-CfK12Ctd.mjs.map
