import { _ as _sfc_main$k } from './Input-CzbisvbY.mjs';
import { b as _sfc_main$7$1, c as _sfc_main$6$1, d as _sfc_main$5$1, e as _sfc_main$4$1, _ as _sfc_main$8$1, g as _sfc_main$3$1, h as _sfc_main$1$2, i as _sfc_main$2$2, f as _sfc_main$u, u as useAttachments } from './UserListItem-0VUPWG6P.mjs';
import { _ as _sfc_main$l, c as cn } from './index-DXIlBIYA.mjs';
import { _ as _sfc_main$2$1, a as _sfc_main$m, b as _sfc_main$1$1 } from './TabsList-BccwyRY_.mjs';
import { _ as _sfc_main$o } from './TabsContent-B79lmJ9I.mjs';
import { _ as _sfc_main$n } from './Separator-CLaMwOnh.mjs';
import { _ as _sfc_main$p } from './Label-C4ujgS20.mjs';
import { _ as _sfc_main$r } from './ComboboxModels-DeRm96v0.mjs';
import { defineComponent, computed, ref, reactive, watch, unref, mergeProps, withCtx, createVNode, createTextVNode, isRef, toDisplayString, createBlock, createCommentVNode, openBlock, mergeModels, useModel, withModifiers, withKeys, Fragment, renderList, renderSlot, toValue, onScopeDispose, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderClass, ssrInterpolate, ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrIncludeBooleanAttr, ssrRenderSlot } from 'vue/server-renderer';
import { a as useRouter, i as useRoute, b as useNuxtApp, _ as __nuxt_component_9 } from './server.mjs';
import { useFilter, useForwardPropsEmits, ComboboxRoot, useForwardProps, ComboboxAnchor, TagsInputRoot, TagsInputItem, TagsInputItemDelete, ComboboxInput, TagsInputInput, ComboboxPortal, ComboboxContent, ComboboxEmpty, ComboboxGroup, ComboboxLabel, ComboboxItem } from 'reka-ui';
import { useDebounceFn, reactiveOmit } from '@vueuse/core';
import { EllipsisVertical, X, SearchIcon } from 'lucide-vue-next';
import { _ as _sfc_main$q } from './Textarea-8eRA4fdT.mjs';
import { _ as _sfc_main$s } from './Switch-DpZI1Ncq.mjs';
import { _ as _sfc_main$7$2, a as _sfc_main$5$2, b as _sfc_main$6$2, c as _sfc_main$4$2, d as _sfc_main$3$2, e as _sfc_main$2$3 } from './SelectScrollDownButton-B_NwGHHK.mjs';
import { _ as _sfc_main$2$4, a as _sfc_main$1$3, b as _sfc_main$t } from './PopoverContent-tRGx4jX7.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';

const _sfc_main$j = /* @__PURE__ */ defineComponent({
  __name: "move",
  __ssrInlineRender: true,
  props: {
    taskId: {},
    columnId: {},
    label: {},
    columns: {}
  },
  emits: ["update-task-column"],
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
    return (_ctx, _push, _parent, _attrs) => {
      const _component_MyComboboxModels = _sfc_main$r;
      _push(ssrRenderComponent(_component_MyComboboxModels, mergeProps({
        items: unref(columns).map((u) => ({
          value: u.id,
          label: u.title
        })),
        class: "w-full overflow-hidden border-0",
        "button-class": "bg-neutral-700 border-neutral-400/50 text-neutral-300 hover:bg-neutral-600 hover:text-neutral-300",
        "list-class": "bg-neutral-400 text-neutral-600",
        label: _ctx.label || "?",
        onSelectedItem: (value) => moveTask(_ctx.taskId, value)
      }, _attrs), null, _parent));
    };
  }
});
const _sfc_setup$j = _sfc_main$j.setup;
_sfc_main$j.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/my/kanban/task/move.vue");
  return _sfc_setup$j ? _sfc_setup$j(props, ctx) : void 0;
};
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
    const forwarded = useForwardPropsEmits(props, emits);
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
    const forwarded = useForwardProps(delegatedProps);
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
    const forwarded = useForwardPropsEmits(delegatedProps, emits);
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
    const forwarded = useForwardPropsEmits(delegatedProps, emits);
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
    const forwarded = useForwardPropsEmits(delegatedProps, emits);
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
    const forwarded = useForwardPropsEmits(delegatedProps, emits);
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
    const forwardedProps = useForwardProps(delegatedProps);
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
    const forwardedProps = useForwardProps(delegatedProps);
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
    const forwardedProps = useForwardProps(delegatedProps);
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
      const _component_UiInput = _sfc_main$k;
      const _component_UiButton = _sfc_main$l;
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
                              }, 1032, ["value", "onKeydown"]);
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
                        if (filteredTags.value.length) {
                          _push4(ssrRenderComponent(unref(_sfc_main$f), null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<!--[-->`);
                                ssrRenderList(filteredTags.value, (t) => {
                                  _push5(ssrRenderComponent(unref(_sfc_main$d), {
                                    key: t.value,
                                    value: t.value,
                                    class: "text-neutral-300",
                                    onSelect: handleSelect
                                  }, {
                                    default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        _push6(`${ssrInterpolate(t.label)}`);
                                      } else {
                                        return [
                                          createTextVNode(toDisplayString(t.label), 1)
                                        ];
                                      }
                                    }),
                                    _: 2
                                  }, _parent5, _scopeId4));
                                });
                                _push5(`<!--]-->`);
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
                          }, _parent4, _scopeId3));
                        } else {
                          _push4(`<!---->`);
                        }
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
                            }, 1032, ["value", "onKeydown"]);
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
                          }, 1032, ["value", "onKeydown"]);
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
      "\u0414\u044E\u0431\u0435\u043B\u044F",
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
    const form = reactive({
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
      acrylic: "",
      type: "",
      wireLength: "",
      elements: 0,
      gift: false,
      adapter: "",
      plug: "",
      fitting: "",
      dimmer: false,
      giftPack: false,
      description: "",
      neons: [],
      lightings: []
    });
    const currentOrderId = ref(null);
    const allOrders = ref([]);
    const saving = ref(false);
    const errorMsg = ref(null);
    const successMsg = ref(null);
    function resetForm() {
      Object.assign(form, {
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
        acrylic: "",
        type: "",
        wireLength: "",
        elements: 0,
        gift: false,
        adapter: "",
        plug: "",
        fitting: "",
        dimmer: false,
        giftPack: false,
        description: "",
        neons: [],
        lightings: []
      });
      currentOrderId.value = null;
    }
    function fillFormFrom(order) {
      var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o;
      form.title = (_a = order == null ? void 0 : order.title) != null ? _a : "";
      form.deadline = (_b = order == null ? void 0 : order.deadline) != null ? _b : "";
      form.material = (_c = order == null ? void 0 : order.material) != null ? _c : "";
      form.boardWidth = Number((_d = order == null ? void 0 : order.boardWidth) != null ? _d : 0);
      form.boardHeight = Number((_e = order == null ? void 0 : order.boardHeight) != null ? _e : 0);
      form.holeType = (_f = order == null ? void 0 : order.holeType) != null ? _f : "";
      form.stand = !!(order == null ? void 0 : order.stand);
      form.laminate = (_g = order == null ? void 0 : order.laminate) != null ? _g : "";
      form.print = !!(order == null ? void 0 : order.print);
      form.printQuality = !!(order == null ? void 0 : order.printQuality);
      form.acrylic = (_h = order == null ? void 0 : order.acrylic) != null ? _h : "";
      form.type = (_i = order == null ? void 0 : order.type) != null ? _i : "";
      form.wireLength = (_j = order == null ? void 0 : order.wireLength) != null ? _j : "";
      form.elements = Number((_k = order == null ? void 0 : order.elements) != null ? _k : 0);
      form.gift = !!(order == null ? void 0 : order.gift);
      form.adapter = (_l = order == null ? void 0 : order.adapter) != null ? _l : "";
      form.plug = (_m = order == null ? void 0 : order.plug) != null ? _m : "";
      form.fitting = (_n = order == null ? void 0 : order.fitting) != null ? _n : "";
      form.dimmer = !!(order == null ? void 0 : order.dimmer);
      form.giftPack = !!(order == null ? void 0 : order.giftPack);
      form.description = (_o = order == null ? void 0 : order.description) != null ? _o : "";
      form.neons = Array.isArray(order == null ? void 0 : order.neons) ? order.neons.map((n) => {
        var _a2, _b2, _c2;
        return {
          id: n.id,
          width: (_a2 = n.width) != null ? _a2 : "6\u043C\u043C",
          length: Number((_b2 = n.length) != null ? _b2 : 0),
          color: (_c2 = n.color) != null ? _c2 : ""
        };
      }) : [];
      form.lightings = Array.isArray(order == null ? void 0 : order.lightings) ? order.lightings.map((l) => {
        var _a2, _b2, _c2;
        return {
          id: l.id,
          length: Number((_a2 = l.length) != null ? _a2 : 0),
          color: (_b2 = l.color) != null ? _b2 : "",
          elements: Number((_c2 = l.elements) != null ? _c2 : 0)
        };
      }) : [];
    }
    async function fetchOrders() {
      var _a, _b, _c;
      try {
        errorMsg.value = null;
        const res = await ((_a = $api.$get) == null ? void 0 : _a.call($api, `tasks/${props.taskId}/orders`));
        const list = Array.isArray(res) ? res : res == null ? void 0 : res.data;
        const orders = Array.isArray(list) ? list : [];
        allOrders.value = orders.map((o) => {
          var _a2;
          return {
            id: o.id,
            title: (_a2 = o.title) != null ? _a2 : `\u0417\u0430\u043A\u0430\u0437 #${o.id}`
          };
        });
        if (orders.length > 0) {
          currentOrderId.value = orders[0].id;
          fillFormFrom(orders[0]);
          successMsg.value = null;
        } else {
          resetForm();
        }
      } catch (e) {
        errorMsg.value = ((_c = (_b = e == null ? void 0 : e.response) == null ? void 0 : _b.data) == null ? void 0 : _c.message) || (e == null ? void 0 : e.message) || "\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u0437\u0430\u043A\u0430\u0437\u044B";
        resetForm();
      }
    }
    async function saveOrder() {
      var _a, _b, _c, _d, _e, _f;
      saving.value = true;
      errorMsg.value = null;
      successMsg.value = null;
      try {
        console.log(form);
        if (currentOrderId.value == null) {
          const res = await ((_a = $api.$post) == null ? void 0 : _a.call(
            $api,
            `tasks/${props.taskId}/orders`,
            form
          ));
          const createdId = (_c = (_b = res == null ? void 0 : res.data) == null ? void 0 : _b.id) != null ? _c : res == null ? void 0 : res.id;
          if (createdId) currentOrderId.value = Number(createdId);
          successMsg.value = "\u0417\u0430\u043A\u0430\u0437 \u0441\u043E\u0437\u0434\u0430\u043D";
        } else {
          await ((_d = $api.$patch) == null ? void 0 : _d.call(
            $api,
            `tasks/orders/${currentOrderId.value}`,
            form
          ));
          successMsg.value = "\u0417\u0430\u043A\u0430\u0437 \u043E\u0431\u043D\u043E\u0432\u043B\u0451\u043D";
        }
        await fetchOrders();
      } catch (e) {
        errorMsg.value = ((_f = (_e = e == null ? void 0 : e.response) == null ? void 0 : _e.data) == null ? void 0 : _f.message) || (e == null ? void 0 : e.message) || "\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0441\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u0437\u0430\u043A\u0430\u0437";
      } finally {
        saving.value = false;
      }
    }
    function addNeon() {
      form.neons.push({ width: "6\u043C\u043C", length: 0, color: "" });
    }
    function removeNeon(idx) {
      form.neons.splice(idx, 1);
    }
    function addLighting() {
      form.lightings.push({ length: 0, color: "", elements: 0 });
    }
    function removeLighting(idx) {
      form.lightings.splice(idx, 1);
    }
    async function loadOrder(orderId) {
      var _a, _b, _c, _d;
      try {
        const res = await ((_a = $api.$get) == null ? void 0 : _a.call($api, `tasks/orders/${orderId}`));
        const data = (_b = res == null ? void 0 : res.data) != null ? _b : res;
        currentOrderId.value = orderId;
        fillFormFrom(data);
        successMsg.value = null;
        errorMsg.value = null;
      } catch (e) {
        errorMsg.value = ((_d = (_c = e == null ? void 0 : e.response) == null ? void 0 : _c.data) == null ? void 0 : _d.message) || (e == null ? void 0 : e.message) || "\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u0437\u0430\u043A\u0430\u0437";
      }
    }
    function addNewOrder() {
      resetForm();
      successMsg.value = null;
      errorMsg.value = null;
    }
    async function deleteCurrentOrder() {
      var _a, _b, _c;
      if (currentOrderId.value == null) return;
      try {
        await ((_a = $api.$del) == null ? void 0 : _a.call($api, `tasks/orders/${currentOrderId.value}`));
        successMsg.value = "\u0417\u0430\u043A\u0430\u0437 \u0443\u0434\u0430\u043B\u0451\u043D";
        await fetchOrders();
      } catch (e) {
        errorMsg.value = ((_c = (_b = e == null ? void 0 : e.response) == null ? void 0 : _b.data) == null ? void 0 : _c.message) || (e == null ? void 0 : e.message) || "\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0443\u0434\u0430\u043B\u0438\u0442\u044C \u0437\u0430\u043A\u0430\u0437";
      }
    }
    __expose({
      fetchOrders,
      loadOrder,
      addNewOrder,
      deleteCurrentOrder,
      get orders() {
        return allOrders.value;
      },
      get currentOrderId() {
        return currentOrderId.value;
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiLabel = _sfc_main$p;
      const _component_UiInput = _sfc_main$k;
      const _component_UiHoverCard = _sfc_main$3$1;
      const _component_UiHoverCardTrigger = _sfc_main$1$2;
      const _component_UiHoverCardContent = _sfc_main$2$2;
      const _component_UiSwitch = _sfc_main$s;
      const _component_UiSelect = _sfc_main$7$2;
      const _component_UiSelectTrigger = _sfc_main$5$2;
      const _component_UiSelectValue = _sfc_main$6$2;
      const _component_UiSelectContent = _sfc_main$4$2;
      const _component_UiSelectGroup = _sfc_main$3$2;
      const _component_UiSelectItem = _sfc_main$2$3;
      const _component_UiButton = _sfc_main$l;
      const _component_UiPopover = _sfc_main$2$4;
      const _component_UiPopoverTrigger = _sfc_main$1$3;
      const _component_UiPopoverContent = _sfc_main$t;
      const _component_UiTextarea = _sfc_main$q;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "" }, _attrs))}><div class="flex gap-3"><div class="relative w-full">`);
      _push(ssrRenderComponent(_component_UiLabel, { class: "font-light text-neutral-400 absolute left-2 top-[-8px] bg-neutral-700 rounded-sm px-1 text-xs whitespace-nowrap" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 `);
            if (!form.title) {
              _push2(`<span class="text-red-500"${_scopeId}>*</span>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              createTextVNode(" \u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 "),
              !form.title ? (openBlock(), createBlock("span", {
                key: 0,
                class: "text-red-500"
              }, "*")) : createCommentVNode("", true)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UiInput, {
        modelValue: form.title,
        "onUpdate:modelValue": ($event) => form.title = $event,
        class: "h-8 bg-neutral-700 text-neutral-300 placeholder:text-neutral-500 border-neutral-500/50",
        placeholder: "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0437\u0430\u043A\u0430\u0437\u0430"
      }, null, _parent));
      _push(`</div><div class="relative">`);
      _push(ssrRenderComponent(_component_UiLabel, { class: "font-light text-neutral-400 absolute left-2 top-[-8px] bg-neutral-700 rounded-sm px-1 text-xs whitespace-nowrap" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u0421\u0440\u043E\u043A `);
            if (!form.deadline) {
              _push2(`<span class="text-red-500"${_scopeId}>*</span>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              createTextVNode(" \u0421\u0440\u043E\u043A "),
              !form.deadline ? (openBlock(), createBlock("span", {
                key: 0,
                class: "text-red-500"
              }, "*")) : createCommentVNode("", true)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UiInput, {
        modelValue: form.deadline,
        "onUpdate:modelValue": ($event) => form.deadline = $event,
        class: "h-8 bg-neutral-700 text-neutral-300 placeholder:text-neutral-500 border-neutral-500/50",
        type: "date",
        placeholder: "\u0421\u0440\u043E\u043A"
      }, null, _parent));
      _push(`</div></div><div class="relative border-b-1 border-neutral-500 my-5"><span class="absolute top-[-9px] left-[50%] translate-x-[-50%] text-neutral-400 bg-neutral-800 text-xs font-medium px-1">\u041F\u043E\u0434\u043B\u043E\u0436\u043A\u0430</span></div><div class="flex gap-3 mb-6 items-center"><div class="relative min-w-[90px]">`);
      _push(ssrRenderComponent(_component_UiLabel, { class: "font-light text-neutral-400 absolute left-2 top-[-8px] bg-neutral-700 rounded-sm px-1 text-xs whitespace-nowrap" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u0428\u0438\u0440\u0438\u043D\u0430(\u0441\u043C) `);
            if (!form.boardWidth) {
              _push2(`<span class="text-red-500"${_scopeId}>*</span>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              createTextVNode(" \u0428\u0438\u0440\u0438\u043D\u0430(\u0441\u043C) "),
              !form.boardWidth ? (openBlock(), createBlock("span", {
                key: 0,
                class: "text-red-500"
              }, "*")) : createCommentVNode("", true)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UiInput, {
        modelValue: form.boardWidth,
        "onUpdate:modelValue": ($event) => form.boardWidth = $event,
        modelModifiers: { number: true },
        class: "h-8 bg-neutral-700 text-neutral-300 placeholder:text-neutral-500 border-neutral-500/50",
        type: "number",
        placeholder: "\u0428\u0438\u0440\u0438\u043D\u0430, \u043C\u043C"
      }, null, _parent));
      _push(`</div><div class="relative min-w-[90px]">`);
      _push(ssrRenderComponent(_component_UiLabel, { class: "font-light text-neutral-400 absolute left-2 top-[-8px] bg-neutral-700 rounded-sm px-1 text-xs whitespace-nowrap" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u0412\u044B\u0441\u043E\u0442\u0430(\u0441\u043C) `);
            if (!form.boardHeight) {
              _push2(`<span class="text-red-500"${_scopeId}>*</span>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              createTextVNode(" \u0412\u044B\u0441\u043E\u0442\u0430(\u0441\u043C) "),
              !form.boardHeight ? (openBlock(), createBlock("span", {
                key: 0,
                class: "text-red-500"
              }, "*")) : createCommentVNode("", true)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UiInput, {
        modelValue: form.boardHeight,
        "onUpdate:modelValue": ($event) => form.boardHeight = $event,
        modelModifiers: { number: true },
        class: "h-8 bg-neutral-700 text-neutral-300 placeholder:text-neutral-500 border-neutral-500/50",
        type: "number",
        placeholder: "\u0412\u044B\u0441\u043E\u0442\u0430, \u043C\u043C"
      }, null, _parent));
      _push(`</div><div class="relative w-full">`);
      _push(ssrRenderComponent(_component_UiHoverCard, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UiHoverCardTrigger, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UiLabel, { class: "font-light text-neutral-400 absolute left-2 top-[-8px] bg-neutral-700 rounded-sm px-1 text-xs whitespace-nowrap" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` \u041E\u0442\u0432\u0435\u0440\u0441\u0442\u0438\u044F `);
                        if (!form.holeType) {
                          _push4(`<span class="text-red-500"${_scopeId3}>*</span>`);
                        } else {
                          _push4(`<!---->`);
                        }
                      } else {
                        return [
                          createTextVNode(" \u041E\u0442\u0432\u0435\u0440\u0441\u0442\u0438\u044F "),
                          !form.holeType ? (openBlock(), createBlock("span", {
                            key: 0,
                            class: "text-red-500"
                          }, "*")) : createCommentVNode("", true)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UiInput, {
                    modelValue: form.holeType,
                    "onUpdate:modelValue": ($event) => form.holeType = $event,
                    class: "h-8 bg-neutral-700 text-neutral-300 placeholder:text-neutral-500 border-neutral-500/50",
                    placeholder: "6\u043C\u043C/9\u043C\u043C/\u0434\u0440\u0443\u0433\u043E\u0435"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UiLabel, { class: "font-light text-neutral-400 absolute left-2 top-[-8px] bg-neutral-700 rounded-sm px-1 text-xs whitespace-nowrap" }, {
                      default: withCtx(() => [
                        createTextVNode(" \u041E\u0442\u0432\u0435\u0440\u0441\u0442\u0438\u044F "),
                        !form.holeType ? (openBlock(), createBlock("span", {
                          key: 0,
                          class: "text-red-500"
                        }, "*")) : createCommentVNode("", true)
                      ]),
                      _: 1
                    }),
                    createVNode(_component_UiInput, {
                      modelValue: form.holeType,
                      "onUpdate:modelValue": ($event) => form.holeType = $event,
                      class: "h-8 bg-neutral-700 text-neutral-300 placeholder:text-neutral-500 border-neutral-500/50",
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
                    _push3(`<div class="hover:bg-slate-100 text-gray-400"${_scopeId2}>${ssrInterpolate(ht)}</div>`);
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [
                    (openBlock(), createBlock(Fragment, null, renderList(holeTypes, (ht) => {
                      return createVNode("div", {
                        key: ht,
                        class: "hover:bg-slate-100 text-gray-400",
                        onClick: () => form.holeType = ht
                      }, toDisplayString(ht), 9, ["onClick"]);
                    }), 64))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UiHoverCardTrigger, null, {
                default: withCtx(() => [
                  createVNode(_component_UiLabel, { class: "font-light text-neutral-400 absolute left-2 top-[-8px] bg-neutral-700 rounded-sm px-1 text-xs whitespace-nowrap" }, {
                    default: withCtx(() => [
                      createTextVNode(" \u041E\u0442\u0432\u0435\u0440\u0441\u0442\u0438\u044F "),
                      !form.holeType ? (openBlock(), createBlock("span", {
                        key: 0,
                        class: "text-red-500"
                      }, "*")) : createCommentVNode("", true)
                    ]),
                    _: 1
                  }),
                  createVNode(_component_UiInput, {
                    modelValue: form.holeType,
                    "onUpdate:modelValue": ($event) => form.holeType = $event,
                    class: "h-8 bg-neutral-700 text-neutral-300 placeholder:text-neutral-500 border-neutral-500/50",
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
                      class: "hover:bg-slate-100 text-gray-400",
                      onClick: () => form.holeType = ht
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
      _push(`</div><div class="relative flex flex-col items-center gap-1">`);
      _push(ssrRenderComponent(_component_UiLabel, { class: "font-medium text-neutral-400 whitespace-nowrap" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`\u041F\u043E\u0434\u0441\u0442\u0430\u0432\u043A\u0430`);
          } else {
            return [
              createTextVNode("\u041F\u043E\u0434\u0441\u0442\u0430\u0432\u043A\u0430")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UiSwitch, {
        checked: form.stand,
        "onUpdate:checked": ($event) => form.stand = $event,
        class: "scale-75 data-[state=checked]:bg-lime-900 data-[state=unchecked]:bg-neutral-500",
        "thumb-class": "bg-neutral-400 data-[state=checked]:bg-neutral-300"
      }, null, _parent));
      _push(`</div></div><div class="relative border-b-1 border-neutral-500 my-5"><span class="absolute top-[-9px] left-[50%] translate-x-[-50%] text-neutral-400 bg-neutral-800 text-xs font-medium px-1"> \u041F\u0435\u0447\u0430\u0442\u044C/\u0410\u043A\u0440\u0438\u043B </span></div><div class="flex flex-col mb-6"><div class="flex gap-4 justify-between"><div class="relative flex items-center gap-2 border-r-1 border-neutral-500">`);
      _push(ssrRenderComponent(_component_UiLabel, { class: "font-medium text-neutral-400 whitespace-nowrap" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`\u041F\u0435\u0447\u0430\u0442\u044C`);
          } else {
            return [
              createTextVNode("\u041F\u0435\u0447\u0430\u0442\u044C")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UiSwitch, {
        checked: form.print,
        "onUpdate:checked": ($event) => form.print = $event,
        class: "scale-75 data-[state=checked]:bg-lime-900 data-[state=unchecked]:bg-neutral-500",
        "thumb-class": "bg-neutral-400 data-[state=checked]:bg-neutral-300"
      }, null, _parent));
      _push(`</div><div class="relative flex items-center gap-2 border-r-1 border-neutral-500">`);
      _push(ssrRenderComponent(_component_UiLabel, { class: "font-medium text-neutral-400 whitespace-nowrap" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u041A\u0430\u0447\u0435\u0441\u0442\u0432\u043E \u0441\u043E\u0433\u043B\u0430\u0441\u043E\u0432\u0430\u043D\u043E `);
          } else {
            return [
              createTextVNode(" \u041A\u0430\u0447\u0435\u0441\u0442\u0432\u043E \u0441\u043E\u0433\u043B\u0430\u0441\u043E\u0432\u0430\u043D\u043E ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UiSwitch, {
        checked: form.printQuality,
        "onUpdate:checked": ($event) => form.printQuality = $event,
        class: "scale-75 data-[state=checked]:bg-lime-900 data-[state=unchecked]:bg-neutral-500",
        "thumb-class": "bg-neutral-400 data-[state=checked]:bg-neutral-300"
      }, null, _parent));
      _push(`</div><div class="relative w-full">`);
      _push(ssrRenderComponent(_component_UiLabel, { class: "font-light text-neutral-400 absolute left-2 top-[-8px] bg-neutral-700 rounded-sm px-1 text-xs whitespace-nowrap" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u0410\u043A\u0440\u0438\u043B `);
            if (!form.acrylic) {
              _push2(`<span class="text-red-500"${_scopeId}>*</span>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              createTextVNode(" \u0410\u043A\u0440\u0438\u043B "),
              !form.acrylic ? (openBlock(), createBlock("span", {
                key: 0,
                class: "text-red-500"
              }, "*")) : createCommentVNode("", true)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UiInput, {
        modelValue: form.acrylic,
        "onUpdate:modelValue": ($event) => form.acrylic = $event,
        class: "h-8 bg-neutral-700 text-neutral-300 placeholder:text-neutral-500 border-neutral-500/50",
        placeholder: "\u0426\u0432\u0435\u0442 \u0438 \u0442\u043F"
      }, null, _parent));
      _push(`</div></div></div><div class="relative border-b-1 border-neutral-500 my-5"><span class="absolute top-[-9px] left-[50%] translate-x-[-50%] text-neutral-400 bg-neutral-800 text-xs font-medium px-1">\u041D\u0435\u043E\u043D</span></div><div class="flex flex-col gap-3 mb-6"><div class="flex gap-3"><div class="relative w-full flex items-center">`);
      _push(ssrRenderComponent(_component_UiLabel, { class: "font-light text-neutral-400 absolute left-2 top-[-8px] bg-neutral-700 rounded-sm px-1 text-xs whitespace-nowrap" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u0422\u0438\u043F `);
            if (!form.type) {
              _push2(`<span class="text-red-500"${_scopeId}>*</span>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              createTextVNode(" \u0422\u0438\u043F "),
              !form.type ? (openBlock(), createBlock("span", {
                key: 0,
                class: "text-red-500"
              }, "*")) : createCommentVNode("", true)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UiSelect, {
        modelValue: form.type,
        "onUpdate:modelValue": ($event) => form.type = $event
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UiSelectTrigger, { class: "h-8 bg-neutral-700 text-neutral-300 border-neutral-500/50" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UiSelectValue, { placeholder: "\u041F\u043E\u043C\u0435\u0449\u0435\u043D\u0438\u0435/\u0423\u043B\u0438\u0446\u0430" }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UiSelectValue, { placeholder: "\u041F\u043E\u043C\u0435\u0449\u0435\u043D\u0438\u0435/\u0423\u043B\u0438\u0446\u0430" })
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
                    _push3(ssrRenderComponent(_component_UiSelectGroup, {
                      key: types[index]
                    }, {
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
                      return createVNode(_component_UiSelectGroup, {
                        key: types[index]
                      }, {
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
              createVNode(_component_UiSelectTrigger, { class: "h-8 bg-neutral-700 text-neutral-300 border-neutral-500/50" }, {
                default: withCtx(() => [
                  createVNode(_component_UiSelectValue, { placeholder: "\u041F\u043E\u043C\u0435\u0449\u0435\u043D\u0438\u0435/\u0423\u043B\u0438\u0446\u0430" })
                ]),
                _: 1
              }),
              createVNode(_component_UiSelectContent, { class: "bg-neutral-800 text-neutral-300" }, {
                default: withCtx(() => [
                  (openBlock(), createBlock(Fragment, null, renderList(types, (item, index) => {
                    return createVNode(_component_UiSelectGroup, {
                      key: types[index]
                    }, {
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
      _push(`</div><div class="relative">`);
      _push(ssrRenderComponent(_component_UiLabel, { class: "font-light text-neutral-400 absolute left-2 top-[-8px] bg-neutral-700 rounded-sm px-1 text-xs whitespace-nowrap" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u042D\u043B\u0435\u043C\u0435\u043D\u0442\u044B `);
            if (!form.elements) {
              _push2(`<span class="text-red-500"${_scopeId}>*</span>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              createTextVNode(" \u042D\u043B\u0435\u043C\u0435\u043D\u0442\u044B "),
              !form.elements ? (openBlock(), createBlock("span", {
                key: 0,
                class: "text-red-500"
              }, "*")) : createCommentVNode("", true)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UiInput, {
        modelValue: form.elements,
        "onUpdate:modelValue": ($event) => form.elements = $event,
        modelModifiers: { number: true },
        class: "h-8 bg-neutral-700 text-neutral-300 placeholder:text-neutral-500 border-neutral-500/50",
        type: "number",
        placeholder: ""
      }, null, _parent));
      _push(`</div><div class="flex items-center justify-between">`);
      _push(ssrRenderComponent(_component_UiButton, {
        variant: "secondary",
        size: "sm",
        class: "bg-neutral-300",
        onClick: addNeon
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`+ \u041D\u0435\u043E\u043D`);
          } else {
            return [
              createTextVNode("+ \u041D\u0435\u043E\u043D")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="flex items-center justify-between">`);
      _push(ssrRenderComponent(_component_UiButton, {
        variant: "secondary",
        size: "sm",
        class: "bg-neutral-300",
        onClick: addLighting
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`+ \u041F\u043E\u0434\u0441\u0432\u0435\u0442\u043A\u0430`);
          } else {
            return [
              createTextVNode("+ \u041F\u043E\u0434\u0441\u0432\u0435\u0442\u043A\u0430")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="flex flex-col gap-1">`);
      if (form.neons.length === 0) {
        _push(`<div class="text-sm text-red-500"> \u041D\u0435\u043E\u043D \u043D\u0435 \u0434\u043E\u0431\u0430\u0432\u043B\u0435\u043D </div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<!--[-->`);
      ssrRenderList(form.neons, (n, idx) => {
        _push(`<div class="flex items-center">`);
        _push(ssrRenderComponent(_component_UiPopover, { class: "" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="flex h-5 items-center text-neutral-600 bg-neutral-300 rounded-md data-[state=active]:ring-ring data-[state=active]:ring-2 data-[state=active]:ring-offset-2 ring-offset-background"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UiPopoverTrigger, { class: "text-sm p-1 bg-transparent hover:underline cursor-pointer" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<span${_scopeId2}>${ssrInterpolate(n.color)}(${ssrInterpolate(n.width)}) - ${ssrInterpolate(n.length)}\u0441\u043C </span>`);
                  } else {
                    return [
                      createVNode("span", null, toDisplayString(n.color) + "(" + toDisplayString(n.width) + ") - " + toDisplayString(n.length) + "\u0441\u043C ", 1)
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
                    _push3(`<div class="flex gap-2 items-center"${_scopeId2}><div class="relative w-full"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_UiLabel, { class: "font-light text-neutral-400 absolute left-2 top-[-8px] bg-neutral-700 rounded-sm px-1 text-xs whitespace-nowrap" }, {
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
                          _push4(ssrRenderComponent(_component_UiSelectTrigger, { class: "h-8 bg-neutral-700 text-neutral-300 border-neutral-500/50" }, {
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
                            createVNode(_component_UiSelectTrigger, { class: "h-8 bg-neutral-700 text-neutral-300 border-neutral-500/50" }, {
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
                    _push3(`</div><div class="relative"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_UiLabel, { class: "font-light text-neutral-400 absolute left-2 top-[-8px] bg-neutral-700 rounded-sm px-1 text-xs whitespace-nowrap" }, {
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
                          _push4(ssrRenderComponent(_component_UiSelectTrigger, { class: "h-8 bg-neutral-700 text-neutral-300 border-neutral-500/50" }, {
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
                            createVNode(_component_UiSelectTrigger, { class: "h-8 bg-neutral-700 text-neutral-300 border-neutral-500/50" }, {
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
                    _push3(`</div><div class="relative min-w-[80px]"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_UiLabel, { class: "font-light text-neutral-400 absolute left-2 top-[-8px] bg-neutral-700 rounded-sm px-1 text-xs whitespace-nowrap" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(` \u0414\u043B\u0438\u043D\u0430(\u0441\u043C) `);
                          if (!n.length) {
                            _push4(`<span class="text-red-500"${_scopeId3}>*</span>`);
                          } else {
                            _push4(`<!---->`);
                          }
                        } else {
                          return [
                            createTextVNode(" \u0414\u043B\u0438\u043D\u0430(\u0441\u043C) "),
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
                      class: "h-8 bg-neutral-700 text-neutral-300 placeholder:text-neutral-500 border-neutral-500/50",
                      type: "number",
                      placeholder: "\u0441\u043C"
                    }, null, _parent3, _scopeId2));
                    _push3(`</div></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "flex gap-2 items-center" }, [
                        createVNode("div", { class: "relative w-full" }, [
                          createVNode(_component_UiLabel, { class: "font-light text-neutral-400 absolute left-2 top-[-8px] bg-neutral-700 rounded-sm px-1 text-xs whitespace-nowrap" }, {
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
                              createVNode(_component_UiSelectTrigger, { class: "h-8 bg-neutral-700 text-neutral-300 border-neutral-500/50" }, {
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
                        createVNode("div", { class: "relative" }, [
                          createVNode(_component_UiLabel, { class: "font-light text-neutral-400 absolute left-2 top-[-8px] bg-neutral-700 rounded-sm px-1 text-xs whitespace-nowrap" }, {
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
                              createVNode(_component_UiSelectTrigger, { class: "h-8 bg-neutral-700 text-neutral-300 border-neutral-500/50" }, {
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
                        createVNode("div", { class: "relative min-w-[80px]" }, [
                          createVNode(_component_UiLabel, { class: "font-light text-neutral-400 absolute left-2 top-[-8px] bg-neutral-700 rounded-sm px-1 text-xs whitespace-nowrap" }, {
                            default: withCtx(() => [
                              createTextVNode(" \u0414\u043B\u0438\u043D\u0430(\u0441\u043C) "),
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
                            class: "h-8 bg-neutral-700 text-neutral-300 placeholder:text-neutral-500 border-neutral-500/50",
                            type: "number",
                            placeholder: "\u0441\u043C"
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
                createVNode("div", { class: "flex h-5 items-center text-neutral-600 bg-neutral-300 rounded-md data-[state=active]:ring-ring data-[state=active]:ring-2 data-[state=active]:ring-offset-2 ring-offset-background" }, [
                  createVNode(_component_UiPopoverTrigger, { class: "text-sm p-1 bg-transparent hover:underline cursor-pointer" }, {
                    default: withCtx(() => [
                      createVNode("span", null, toDisplayString(n.color) + "(" + toDisplayString(n.width) + ") - " + toDisplayString(n.length) + "\u0441\u043C ", 1)
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
                      createVNode("div", { class: "relative w-full" }, [
                        createVNode(_component_UiLabel, { class: "font-light text-neutral-400 absolute left-2 top-[-8px] bg-neutral-700 rounded-sm px-1 text-xs whitespace-nowrap" }, {
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
                            createVNode(_component_UiSelectTrigger, { class: "h-8 bg-neutral-700 text-neutral-300 border-neutral-500/50" }, {
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
                      createVNode("div", { class: "relative" }, [
                        createVNode(_component_UiLabel, { class: "font-light text-neutral-400 absolute left-2 top-[-8px] bg-neutral-700 rounded-sm px-1 text-xs whitespace-nowrap" }, {
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
                            createVNode(_component_UiSelectTrigger, { class: "h-8 bg-neutral-700 text-neutral-300 border-neutral-500/50" }, {
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
                      createVNode("div", { class: "relative min-w-[80px]" }, [
                        createVNode(_component_UiLabel, { class: "font-light text-neutral-400 absolute left-2 top-[-8px] bg-neutral-700 rounded-sm px-1 text-xs whitespace-nowrap" }, {
                          default: withCtx(() => [
                            createTextVNode(" \u0414\u043B\u0438\u043D\u0430(\u0441\u043C) "),
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
                          class: "h-8 bg-neutral-700 text-neutral-300 placeholder:text-neutral-500 border-neutral-500/50",
                          type: "number",
                          placeholder: "\u0441\u043C"
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
      ssrRenderList(form.lightings, (l, idx) => {
        _push(`<div class="flex items-center">`);
        _push(ssrRenderComponent(_component_UiPopover, { class: "" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="flex h-5 items-center text-neutral-600 bg-neutral-300 rounded-md data-[state=active]:ring-ring data-[state=active]:ring-2 data-[state=active]:ring-offset-2 ring-offset-background"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UiPopoverTrigger, { class: "text-sm p-1 bg-transparent hover:underline cursor-pointer" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<span${_scopeId2}> \u041F\u043E\u0434\u0441\u0432\u0435\u0442\u043A\u0430 - ${ssrInterpolate(l.color)} - ${ssrInterpolate(l.elements)}\u044D\u043B./${ssrInterpolate(l.length)}\u0441\u043C </span>`);
                  } else {
                    return [
                      createVNode("span", null, " \u041F\u043E\u0434\u0441\u0432\u0435\u0442\u043A\u0430 - " + toDisplayString(l.color) + " - " + toDisplayString(l.elements) + "\u044D\u043B./" + toDisplayString(l.length) + "\u0441\u043C ", 1)
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
                    _push3(`<div class="flex gap-2 items-center"${_scopeId2}><div class="relative w-full"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_UiLabel, { class: "font-light text-neutral-400 absolute left-2 top-[-8px] bg-neutral-700 rounded-sm px-1 text-xs whitespace-nowrap" }, {
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
                          _push4(ssrRenderComponent(_component_UiSelectTrigger, { class: "h-8 bg-neutral-700 text-neutral-300 border-neutral-500/50" }, {
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
                            createVNode(_component_UiSelectTrigger, { class: "h-8 bg-neutral-700 text-neutral-300 border-neutral-500/50" }, {
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
                    _push3(`</div><div class="relative"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_UiLabel, { class: "font-light text-neutral-400 absolute left-2 top-[-8px] bg-neutral-700 rounded-sm px-1 text-xs whitespace-nowrap" }, {
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
                      class: "h-8 bg-neutral-700 text-neutral-300 placeholder:text-neutral-500 border-neutral-500/50",
                      type: "number",
                      placeholder: ""
                    }, null, _parent3, _scopeId2));
                    _push3(`</div><div class="relative min-w-[80px]"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_UiLabel, { class: "font-light text-neutral-400 absolute left-2 top-[-8px] bg-neutral-700 rounded-sm px-1 text-xs whitespace-nowrap" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(` \u0414\u043B\u0438\u043D\u0430(\u0441\u043C) `);
                          if (!l.length) {
                            _push4(`<span class="text-red-500"${_scopeId3}>*</span>`);
                          } else {
                            _push4(`<!---->`);
                          }
                        } else {
                          return [
                            createTextVNode(" \u0414\u043B\u0438\u043D\u0430(\u0441\u043C) "),
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
                      class: "h-8 bg-neutral-700 text-neutral-300 placeholder:text-neutral-500 border-neutral-500/50",
                      type: "number",
                      placeholder: "\u0441\u043C"
                    }, null, _parent3, _scopeId2));
                    _push3(`</div></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "flex gap-2 items-center" }, [
                        createVNode("div", { class: "relative w-full" }, [
                          createVNode(_component_UiLabel, { class: "font-light text-neutral-400 absolute left-2 top-[-8px] bg-neutral-700 rounded-sm px-1 text-xs whitespace-nowrap" }, {
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
                              createVNode(_component_UiSelectTrigger, { class: "h-8 bg-neutral-700 text-neutral-300 border-neutral-500/50" }, {
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
                        createVNode("div", { class: "relative" }, [
                          createVNode(_component_UiLabel, { class: "font-light text-neutral-400 absolute left-2 top-[-8px] bg-neutral-700 rounded-sm px-1 text-xs whitespace-nowrap" }, {
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
                            class: "h-8 bg-neutral-700 text-neutral-300 placeholder:text-neutral-500 border-neutral-500/50",
                            type: "number",
                            placeholder: ""
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        createVNode("div", { class: "relative min-w-[80px]" }, [
                          createVNode(_component_UiLabel, { class: "font-light text-neutral-400 absolute left-2 top-[-8px] bg-neutral-700 rounded-sm px-1 text-xs whitespace-nowrap" }, {
                            default: withCtx(() => [
                              createTextVNode(" \u0414\u043B\u0438\u043D\u0430(\u0441\u043C) "),
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
                            class: "h-8 bg-neutral-700 text-neutral-300 placeholder:text-neutral-500 border-neutral-500/50",
                            type: "number",
                            placeholder: "\u0441\u043C"
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
                createVNode("div", { class: "flex h-5 items-center text-neutral-600 bg-neutral-300 rounded-md data-[state=active]:ring-ring data-[state=active]:ring-2 data-[state=active]:ring-offset-2 ring-offset-background" }, [
                  createVNode(_component_UiPopoverTrigger, { class: "text-sm p-1 bg-transparent hover:underline cursor-pointer" }, {
                    default: withCtx(() => [
                      createVNode("span", null, " \u041F\u043E\u0434\u0441\u0432\u0435\u0442\u043A\u0430 - " + toDisplayString(l.color) + " - " + toDisplayString(l.elements) + "\u044D\u043B./" + toDisplayString(l.length) + "\u0441\u043C ", 1)
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
                      createVNode("div", { class: "relative w-full" }, [
                        createVNode(_component_UiLabel, { class: "font-light text-neutral-400 absolute left-2 top-[-8px] bg-neutral-700 rounded-sm px-1 text-xs whitespace-nowrap" }, {
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
                            createVNode(_component_UiSelectTrigger, { class: "h-8 bg-neutral-700 text-neutral-300 border-neutral-500/50" }, {
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
                      createVNode("div", { class: "relative" }, [
                        createVNode(_component_UiLabel, { class: "font-light text-neutral-400 absolute left-2 top-[-8px] bg-neutral-700 rounded-sm px-1 text-xs whitespace-nowrap" }, {
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
                          class: "h-8 bg-neutral-700 text-neutral-300 placeholder:text-neutral-500 border-neutral-500/50",
                          type: "number",
                          placeholder: ""
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      createVNode("div", { class: "relative min-w-[80px]" }, [
                        createVNode(_component_UiLabel, { class: "font-light text-neutral-400 absolute left-2 top-[-8px] bg-neutral-700 rounded-sm px-1 text-xs whitespace-nowrap" }, {
                          default: withCtx(() => [
                            createTextVNode(" \u0414\u043B\u0438\u043D\u0430(\u0441\u043C) "),
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
                          class: "h-8 bg-neutral-700 text-neutral-300 placeholder:text-neutral-500 border-neutral-500/50",
                          type: "number",
                          placeholder: "\u0441\u043C"
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
      _push(`<!--]--></div></div><div class="relative border-b-1 border-neutral-500 my-5"><span class="absolute top-[-9px] left-[50%] translate-x-[-50%] text-neutral-400 bg-neutral-800 text-xs font-medium px-1">\u0423\u043F\u0430\u043A\u043E\u0432\u043A\u0430/\u041A\u043E\u043C\u043F\u043B\u0435\u043A\u0442\u0430\u0446\u0438\u044F</span></div><div class="flex flex-col gap-4 mb-6"><div class="relative w-full">`);
      _push(ssrRenderComponent(_component_UiLabel, { class: "font-light text-neutral-400 absolute left-2 top-[-8px] bg-neutral-700 rounded-sm px-1 text-xs whitespace-nowrap" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u0414\u043B\u0438\u043D\u0430 \u043F\u0440\u043E\u0432\u043E\u0434\u0430 `);
            if (!form.wireLength) {
              _push2(`<span class="text-red-500"${_scopeId}>*</span>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              createTextVNode(" \u0414\u043B\u0438\u043D\u0430 \u043F\u0440\u043E\u0432\u043E\u0434\u0430 "),
              !form.wireLength ? (openBlock(), createBlock("span", {
                key: 0,
                class: "text-red-500"
              }, "*")) : createCommentVNode("", true)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UiInput, {
        modelValue: form.wireLength,
        "onUpdate:modelValue": ($event) => form.wireLength = $event,
        class: "h-8 bg-neutral-700 text-neutral-300 placeholder:text-neutral-500 border-neutral-500/50",
        placeholder: "\u0414\u043E \u0431\u043B\u043E\u043A\u0430/\u041F\u043E\u0441\u043B\u0435 \u0431\u043B\u043E\u043A\u0430/\u0426\u0432\u0435\u0442\u0430"
      }, null, _parent));
      _push(`</div><div class="flex"><div class="flex flex-col gap-4 w-full border-r-1 border-neutral-500 pr-2"><div class="relative">`);
      _push(ssrRenderComponent(_component_UiHoverCard, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UiHoverCardTrigger, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UiLabel, { class: "font-light text-neutral-400 absolute left-2 top-[-8px] bg-neutral-700 rounded-sm px-1 text-xs whitespace-nowrap" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` \u0411\u043B\u043E\u043A `);
                        if (!form.adapter) {
                          _push4(`<span class="text-red-500"${_scopeId3}>*</span>`);
                        } else {
                          _push4(`<!---->`);
                        }
                      } else {
                        return [
                          createTextVNode(" \u0411\u043B\u043E\u043A "),
                          !form.adapter ? (openBlock(), createBlock("span", {
                            key: 0,
                            class: "text-red-500"
                          }, "*")) : createCommentVNode("", true)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UiInput, {
                    modelValue: form.adapter,
                    "onUpdate:modelValue": ($event) => form.adapter = $event,
                    class: "h-8 bg-neutral-700 text-neutral-300 placeholder:text-neutral-500 border-neutral-500/50",
                    placeholder: ""
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UiLabel, { class: "font-light text-neutral-400 absolute left-2 top-[-8px] bg-neutral-700 rounded-sm px-1 text-xs whitespace-nowrap" }, {
                      default: withCtx(() => [
                        createTextVNode(" \u0411\u043B\u043E\u043A "),
                        !form.adapter ? (openBlock(), createBlock("span", {
                          key: 0,
                          class: "text-red-500"
                        }, "*")) : createCommentVNode("", true)
                      ]),
                      _: 1
                    }),
                    createVNode(_component_UiInput, {
                      modelValue: form.adapter,
                      "onUpdate:modelValue": ($event) => form.adapter = $event,
                      class: "h-8 bg-neutral-700 text-neutral-300 placeholder:text-neutral-500 border-neutral-500/50",
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
                        onClick: () => form.adapter = adapter
                      }, toDisplayString(adapter), 9, ["onClick"]);
                    }), 64))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UiHoverCardTrigger, null, {
                default: withCtx(() => [
                  createVNode(_component_UiLabel, { class: "font-light text-neutral-400 absolute left-2 top-[-8px] bg-neutral-700 rounded-sm px-1 text-xs whitespace-nowrap" }, {
                    default: withCtx(() => [
                      createTextVNode(" \u0411\u043B\u043E\u043A "),
                      !form.adapter ? (openBlock(), createBlock("span", {
                        key: 0,
                        class: "text-red-500"
                      }, "*")) : createCommentVNode("", true)
                    ]),
                    _: 1
                  }),
                  createVNode(_component_UiInput, {
                    modelValue: form.adapter,
                    "onUpdate:modelValue": ($event) => form.adapter = $event,
                    class: "h-8 bg-neutral-700 text-neutral-300 placeholder:text-neutral-500 border-neutral-500/50",
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
                      onClick: () => form.adapter = adapter
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
      _push(`</div><div class="relative w-full">`);
      _push(ssrRenderComponent(_component_UiHoverCard, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UiHoverCardTrigger, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UiLabel, { class: "font-light text-neutral-400 absolute left-2 top-[-8px] bg-neutral-700 rounded-sm px-1 text-xs whitespace-nowrap" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` \u0424\u0443\u0440\u043D\u0438\u0442\u0443\u0440\u0430 `);
                        if (!form.fitting) {
                          _push4(`<span class="text-red-500"${_scopeId3}>*</span>`);
                        } else {
                          _push4(`<!---->`);
                        }
                      } else {
                        return [
                          createTextVNode(" \u0424\u0443\u0440\u043D\u0438\u0442\u0443\u0440\u0430 "),
                          !form.fitting ? (openBlock(), createBlock("span", {
                            key: 0,
                            class: "text-red-500"
                          }, "*")) : createCommentVNode("", true)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UiInput, {
                    modelValue: form.fitting,
                    "onUpdate:modelValue": ($event) => form.fitting = $event,
                    class: "h-8 bg-neutral-700 text-neutral-300 placeholder:text-neutral-500 border-neutral-500/50",
                    placeholder: "\u0424\u0443\u0440\u043D\u0438\u0442\u0443\u0440\u0430"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UiLabel, { class: "font-light text-neutral-400 absolute left-2 top-[-8px] bg-neutral-700 rounded-sm px-1 text-xs whitespace-nowrap" }, {
                      default: withCtx(() => [
                        createTextVNode(" \u0424\u0443\u0440\u043D\u0438\u0442\u0443\u0440\u0430 "),
                        !form.fitting ? (openBlock(), createBlock("span", {
                          key: 0,
                          class: "text-red-500"
                        }, "*")) : createCommentVNode("", true)
                      ]),
                      _: 1
                    }),
                    createVNode(_component_UiInput, {
                      modelValue: form.fitting,
                      "onUpdate:modelValue": ($event) => form.fitting = $event,
                      class: "h-8 bg-neutral-700 text-neutral-300 placeholder:text-neutral-500 border-neutral-500/50",
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
                        onClick: () => form.fitting += fitting
                      }, toDisplayString(fitting), 9, ["onClick"]);
                    }), 64))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UiHoverCardTrigger, null, {
                default: withCtx(() => [
                  createVNode(_component_UiLabel, { class: "font-light text-neutral-400 absolute left-2 top-[-8px] bg-neutral-700 rounded-sm px-1 text-xs whitespace-nowrap" }, {
                    default: withCtx(() => [
                      createTextVNode(" \u0424\u0443\u0440\u043D\u0438\u0442\u0443\u0440\u0430 "),
                      !form.fitting ? (openBlock(), createBlock("span", {
                        key: 0,
                        class: "text-red-500"
                      }, "*")) : createCommentVNode("", true)
                    ]),
                    _: 1
                  }),
                  createVNode(_component_UiInput, {
                    modelValue: form.fitting,
                    "onUpdate:modelValue": ($event) => form.fitting = $event,
                    class: "h-8 bg-neutral-700 text-neutral-300 placeholder:text-neutral-500 border-neutral-500/50",
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
                      onClick: () => form.fitting += fitting
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
      _push(`</div></div><div class="flex flex-col justify-around pl-2"><div class="relative flex items-center gap-2">`);
      _push(ssrRenderComponent(_component_UiSwitch, {
        checked: form.dimmer,
        "onUpdate:checked": ($event) => form.dimmer = $event,
        class: "scale-75 data-[state=checked]:bg-lime-900 data-[state=unchecked]:bg-neutral-500",
        "thumb-class": "bg-neutral-400 data-[state=checked]:bg-neutral-300"
      }, null, _parent));
      _push(ssrRenderComponent(_component_UiLabel, { class: "font-medium text-neutral-300 whitespace-nowrap" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`\u0414\u0438\u043C\u043C\u0435\u0440`);
          } else {
            return [
              createTextVNode("\u0414\u0438\u043C\u043C\u0435\u0440")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="relative flex items-center gap-2">`);
      _push(ssrRenderComponent(_component_UiSwitch, {
        checked: form.gift,
        "onUpdate:checked": ($event) => form.gift = $event,
        class: "scale-75 data-[state=checked]:bg-lime-900 data-[state=unchecked]:bg-neutral-500",
        "thumb-class": "bg-neutral-400 data-[state=checked]:bg-neutral-300"
      }, null, _parent));
      _push(ssrRenderComponent(_component_UiLabel, { class: "font-medium text-neutral-300 whitespace-nowrap" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`\u041F\u043E\u0434\u0430\u0440\u043E\u043A`);
          } else {
            return [
              createTextVNode("\u041F\u043E\u0434\u0430\u0440\u043E\u043A")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></div><div class="relative">`);
      _push(ssrRenderComponent(_component_UiLabel, { class: "font-light text-neutral-400 absolute left-2 top-[-8px] bg-neutral-700 rounded-sm px-1 text-xs whitespace-nowrap" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u0414\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u0430\u044F \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F `);
          } else {
            return [
              createTextVNode(" \u0414\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u0430\u044F \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UiTextarea, {
        modelValue: form.description,
        "onUpdate:modelValue": ($event) => form.description = $event,
        class: "h-8 bg-neutral-700 text-neutral-300 placeholder:text-neutral-500 border-neutral-500/50",
        placeholder: "\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435"
      }, null, _parent));
      _push(`</div>`);
      if (errorMsg.value) {
        _push(`<div class="text-sm text-red-500">${ssrInterpolate(errorMsg.value)}</div>`);
      } else {
        _push(`<!---->`);
      }
      if (successMsg.value) {
        _push(`<div class="text-sm text-green-600">${ssrInterpolate(successMsg.value)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="flex justify-end mt-6">`);
      _push(ssrRenderComponent(_component_UiButton, {
        disabled: saving.value,
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
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/my/kanban/TaskOrder.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
function useTaskMembers(taskId) {
  const { $useApi } = useNuxtApp();
  const members = ref([]);
  const loading = ref(false);
  const error = ref(null);
  const adding = ref({});
  const removing = ref({});
  let abort = null;
  async function refresh() {
    const id = toValue(taskId);
    if (!id) return;
    abort == null ? void 0 : abort.abort();
    abort = new AbortController();
    loading.value = true;
    error.value = null;
    try {
      const { data } = await $useApi.get(`tasks/${id}/members`, {
        signal: abort.signal
      });
      members.value = Array.isArray(data) ? data : [];
    } catch (e) {
      if ((e == null ? void 0 : e.name) !== "AbortError") {
        error.value = (e == null ? void 0 : e.message) || "\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u0443\u0447\u0430\u0441\u0442\u043D\u0438\u043A\u043E\u0432";
        members.value = [];
      }
    } finally {
      loading.value = false;
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
      await refresh();
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
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
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
    async function handleSelectUser(userId) {
      await addMember(userId);
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_MyComboboxModels = _sfc_main$r;
      const _component_MyUserListItem = _sfc_main$u;
      const _component_UiButton = _sfc_main$l;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "space-y-2" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_MyComboboxModels, {
        items: unref(boardMembers).map((u) => ({ value: u.id, label: u.fullName })),
        "button-class": "bg-neutral-700 border-neutral-400/50 text-neutral-300 hover:bg-neutral-600 hover:text-neutral-300",
        "list-class": "bg-neutral-400 text-neutral-600",
        class: "w-full",
        label: "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0443\u0447\u0430\u0441\u0442\u043D\u0438\u043A\u0430",
        onSelectedItem: (value) => handleSelectUser(value),
        onClick: getAvaliableMembers
      }, null, _parent));
      if (unref(loading)) {
        _push(`<div class="text-xs text-neutral-500"> \u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430 \u0443\u0447\u0430\u0441\u0442\u043D\u0438\u043A\u043E\u0432\u2026 </div>`);
      } else if (unref(error)) {
        _push(`<div class="text-xs text-red-500">${ssrInterpolate(unref(error))}</div>`);
      } else {
        _push(`<div class="flex flex-col gap-2"><!--[-->`);
        ssrRenderList(unref(members), (m) => {
          var _a;
          _push(`<div class="p-2 rounded-sm flex items-center justify-between bg-neutral-600"><div class="mr-2">`);
          _push(ssrRenderComponent(_component_MyUserListItem, {
            "full-name": m.fullName,
            "role-name": (_a = m.role) == null ? void 0 : _a.fullName,
            "avatar-url": m.avatarUrl,
            dark: true,
            size: "md"
          }, null, _parent));
          _push(`</div>`);
          if (_ctx.actions) {
            _push(`<div class="shrink-0">`);
            _push(ssrRenderComponent(_component_UiButton, {
              size: "sm",
              variant: "outline",
              class: "bg-neutral-300",
              disabled: isRemoving(m.id),
              onClick: ($event) => unref(removeMember)(m.id)
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(`${ssrInterpolate(isRemoving(m.id) ? "\u0423\u0434\u0430\u043B\u044F\u0435\u043C\u2026" : "\u0423\u0434\u0430\u043B\u0438\u0442\u044C")}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(isRemoving(m.id) ? "\u0423\u0434\u0430\u043B\u044F\u0435\u043C\u2026" : "\u0423\u0434\u0430\u043B\u0438\u0442\u044C"), 1)
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
        _push(`<!--]--></div>`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/my/kanban/task/MembersPanel.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
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
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
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
      const _component_UiButton = _sfc_main$l;
      const _component_MyUserListItem = _sfc_main$u;
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
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/my/kanban/task/AuditPanel.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "ImageViewer",
  __ssrInlineRender: true,
  props: /* @__PURE__ */ mergeModels({
    path: {},
    name: {},
    size: {}
  }, {
    "open": { type: Boolean, ...{ default: false } },
    "openModifiers": {}
  }),
  emits: ["update:open"],
  setup(__props) {
    const open = useModel(__props, "open");
    const props = __props;
    const { getPreviewSrc, refreshPreview } = useAttachments();
    const imgUrl = ref("");
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
    async function ensureUrl() {
      if (!props.path) {
        imgUrl.value = "";
        return;
      }
      loading.value = true;
      try {
        let url = getPreviewSrc(props.path);
        if (!url) {
          await refreshPreview(props.path);
          url = getPreviewSrc(props.path);
        }
        imgUrl.value = url || "";
      } finally {
        loading.value = false;
      }
    }
    watch(
      () => open.value,
      async (v) => {
        if (v) {
          resetTransform();
          await ensureUrl();
          setTimeout(() => {
            var _a, _b;
            return (_b = (_a = viewportRef.value) == null ? void 0 : _a.focus) == null ? void 0 : _b.call(_a);
          }, 0);
        }
      }
    );
    return (_ctx, _push, _parent, _attrs) => {
      if (open.value) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "fixed inset-0 z-[100] bg-black/70" }, _attrs))}><div class="absolute inset-0 flex flex-col"><div class="flex items-center gap-2 p-2 text-white z-10"><div class="ml-auto flex items-center gap-2"><button class="rounded bg-slate-200 px-2 py-1 hover:bg-slate-100 text-slate-900"> \u0421\u043A\u0430\u0447\u0430\u0442\u044C </button></div><button class="rounded bg-slate-200 px-2 py-1 hover:bg-slate-100 text-slate-900"> \u0417\u0430\u043A\u0440\u044B\u0442\u044C </button></div><div class="relative flex-1 outline-none" tabindex="0"><div class="absolute inset-0 grid place-items-center"><div class="max-w-full max-h-full" style="${ssrRenderStyle({
          transform: `translate(${originX.value}px, ${originY.value}px) scale(${scale.value})`,
          transformOrigin: "center center",
          transition: unref(dragging) ? "none" : "transform 60ms linear"
        })}">`);
        if (imgUrl.value) {
          _push(`<img${ssrRenderAttr("src", imgUrl.value)}${ssrRenderAttr("alt", props.name || "")} class="block max-w-[85vw] max-h-[75vh] md:max-w-[92vw] md:max-h-[85vh] object-contain rounded shadow" loading="eager" referrerpolicy="no-referrer">`);
        } else {
          _push(`<div class="text-white/80 text-sm">\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430\u2026</div>`);
        }
        _push(`</div></div></div><div class="p-2 text-center text-white/80 text-xs truncate">${ssrInterpolate(props.name || "\u0418\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435")}</div></div></div>`);
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
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "TaskAttachmentsList",
  __ssrInlineRender: true,
  props: {
    taskId: {}
  },
  setup(__props) {
    useAttachments();
    const imageViewer = reactive({
      open: false,
      path: "",
      name: ""
    });
    const props = __props;
    ref(null);
    ref(null);
    ref(null);
    ref(null);
    const attachments = ref([]);
    const isUploading = ref(false);
    const { $api, $useApi } = useNuxtApp();
    const formatFileSize = (bytes) => {
      if (bytes === 0) return "0 B";
      const k = 1024;
      const sizes = ["B", "KB", "MB", "GB", "TB"];
      const i = Math.floor(Math.log(bytes) / Math.log(k));
      return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
    };
    const removeAttachment = async (attId) => {
      try {
        isUploading.value = true;
        attachments.value = attachments.value.filter((a) => a.id !== attId);
        const error = await $api.$del(`attachments/${attId}`);
        if (error == null ? void 0 : error.value) throw error.value;
        await fetchAttachments();
      } catch (e) {
        console.error("Remove attachment failed:", e);
        await fetchAttachments();
      }
    };
    const fetchAttachments = async () => {
      try {
        isUploading.value = true;
        const response = await $api.$get(`tasks/${props.taskId}/attachments`);
        attachments.value = response || [];
        isUploading.value = false;
      } catch (error) {
        console.error("Failed to fetch attachments:", error);
        attachments.value = [];
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientOnly = __nuxt_component_9;
      const _component_UiButton = _sfc_main$l;
      const _component_MyImageViewer = _sfc_main$3;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "space-y-4 relative" }, _attrs))} data-v-2ea48d7c><div style="${ssrRenderStyle(unref(isUploading) ? null : { display: "none" })}" class="${ssrRenderClass([unref(isUploading) ? "opacity-100" : "opacity-0", "absolute h-full inset-0 z-10 grid place-items-center bg-neutral-800 backdrop-blur-[1px] text-sm text-neutral-600 transition-opacity duration-200"])}" data-v-2ea48d7c> \u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430\u2026 </div><div class="flex flex-wrap gap-3 mt-5" data-v-2ea48d7c>`);
      if (unref(attachments).length === 0) {
        _push(`<div class="text-sm text-neutral-300" data-v-2ea48d7c> \u0424\u0430\u0439\u043B\u043E\u0432 \u043F\u043E\u043A\u0430 \u043D\u0435\u0442 </div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      if (unref(attachments).length) {
        _push(`<div class="flex flex-col gap-2" data-v-2ea48d7c><!--[-->`);
        ssrRenderList(unref(attachments), (attachment) => {
          _push(`<div class="relative flex items-center overflow-hidden rounded-xl border border-neutral-600 cursor-pointer bg-neutral-700" data-v-2ea48d7c>`);
          _push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
          _push(`<div class="flex-1 p-2 ml-2" data-v-2ea48d7c><div class="text-sm font-medium hover:underline text-neutral-300" data-v-2ea48d7c>${ssrInterpolate(attachment.name)} (${ssrInterpolate(formatFileSize(attachment.size))}) </div><div class="text-xs text-neutral-400" data-v-2ea48d7c> \u0414\u043E\u0431\u0430\u0432\u043B\u0435\u043D: ${ssrInterpolate(("formatRuDateTime" in _ctx ? _ctx.formatRuDateTime : unref(formatRuDateTime))(attachment.createdAt))} | ${ssrInterpolate(attachment.uploadedBy.fullName)}</div>`);
          if (attachment.mimeType.startsWith("image")) {
            _push(`<div class="text-xs text-neutral-400 mt-2 underline" data-v-2ea48d7c> \u041F\u043E\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u043D\u0430 \u043E\u0431\u043B\u043E\u0436\u043A\u0443 </div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`<div class="absolute top-1 right-2" data-v-2ea48d7c>`);
          _push(ssrRenderComponent(_component_UiButton, {
            class: "px-1 h-5 ml-auto",
            title: "\u0423\u0434\u0430\u043B\u0438\u0442\u044C",
            variant: "destructive",
            onClick: [($event) => removeAttachment(attachment.id), () => {
            }]
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(` \u2715 `);
              } else {
                return [
                  createTextVNode(" \u2715 ")
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</div></div></div>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_component_MyImageViewer, {
        open: unref(imageViewer).open,
        "onUpdate:open": ($event) => unref(imageViewer).open = $event,
        path: unref(imageViewer).path,
        name: unref(imageViewer).name
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/my/kanban/TaskAttachmentsList.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_19 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-2ea48d7c"]]);
const MAX_FILES = 10;
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "TaskComments",
  __ssrInlineRender: true,
  props: {
    taskId: {}
  },
  setup(__props) {
    const { getPreviewSrc } = useAttachments();
    const imageViewer = reactive({
      open: false,
      path: "",
      name: ""
    });
    const { $api } = useNuxtApp();
    const comments = ref([]);
    const isLoading = ref(false);
    const loadError = ref(null);
    const newText = ref("");
    const isSubmitting = ref(false);
    const pendingFiles = ref([]);
    const pendingPreviews = ref([]);
    ref(null);
    ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_MyUserListItem = _sfc_main$u;
      const _component_MyImageViewer = _sfc_main$3;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "h-full bg-neutral-700" }, _attrs))}><form class="space-y-1 border-b-1 border-b-neutral-500 pb-2"><textarea rows="3" class="w-full bg-neutral-600/50 text-neutral-300 border-neutral-300 resize-none h-[76px] px-3 py-2 focus:outline-none focus:ring-2 focus:ring-neutral-500" placeholder="\u041D\u0430\u043F\u0438\u0448\u0438\u0442\u0435 \u043A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439\u2026(ctrl+V - \u0432\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435)">${ssrInterpolate(unref(newText))}</textarea>`);
      if (unref(pendingFiles).length) {
        _push(`<div class="flex flex-wrap gap-2 px-2"><!--[-->`);
        ssrRenderList(unref(pendingPreviews), (u, i) => {
          var _a;
          _push(`<div class="relative">`);
          if (unref(pendingFiles)[i] && unref(pendingFiles)[i].type.startsWith("image/")) {
            _push(`<img${ssrRenderAttr("src", u)} class="h-20 w-20 rounded-md object-cover" alt="">`);
          } else {
            _push(`<div class="h-20 w-20 rounded-md bg-neutral-200 text-neutral-600 text-xs flex items-center justify-center px-1 text-center">${ssrInterpolate((_a = unref(pendingFiles)[i]) == null ? void 0 : _a.name.split(".").pop())}</div>`);
          }
          _push(`<button type="button" class="absolute -top-2 -right-2 h-6 w-6 rounded-full bg-white border shadow text-xs" aria-label="\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0444\u0430\u0439\u043B" title="\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0444\u0430\u0439\u043B"> \u2715 </button></div>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="flex items-center justify-between gap-3 px-2"><div class="flex items-center gap-2"><input id="comment-file-input" type="file" class="hidden" multiple accept="image/*,application/pdf,.cdr,application/x-coreldraw,application/vnd.corel-draw,image/x-cdr"><label for="comment-file-input" class="${ssrRenderClass([
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
        _push(`<div class="rounded-md border-1 border-neutral-500/20 p-2 bg-neutral-600"><div class="mb-1 flex items-center gap-2 text-xs text-neutral-500 justify-between">`);
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
            _push(`<button type="button" class="flex gap-2 relative overflow-hidden rounded-md border border-neutral-500 hover:bg-neutral-500/30 cursor-pointer"${ssrRenderAttr("title", f.name)}>`);
            if ((f.mimeType || "").startsWith("image/")) {
              _push(`<img${ssrRenderAttr("src", unref(getPreviewSrc)(f.path))} alt="" class="h-15 w-15 object-cover" loading="lazy" referrerpolicy="no-referrer">`);
            } else {
              _push(`<div class="h-15 w-15 flex items-center justify-center bg-neutral-500 text-neutral-800 text-xs px-2 text-center">${ssrInterpolate(f.name.split(".").pop())}</div>`);
            }
            _push(`<span class="text-xs text-neutral-400">${ssrInterpolate(f.name)}</span></button>`);
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
        name: unref(imageViewer).name
      }, null, _parent));
      _push(`</section>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/my/kanban/TaskComments.vue");
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
    const router = useRouter();
    const route = useRoute();
    const curBoardId = computed(() => Number(route.params.id));
    const { $api, $useApi } = useNuxtApp();
    const isLoading = ref(false);
    const isSaving = ref(false);
    const isDeleting = ref(false);
    const props = __props;
    const emit = __emit;
    const editTask = ref(null);
    async function fetchFullTask() {
      if (!props.taskId) return;
      isLoading.value = true;
      try {
        const { data } = await $useApi.get(`tasks/${Number(props.taskId)}`);
        editTask.value = data;
        fieldStartValues.title = void 0;
        fieldStartValues.description = void 0;
        fieldStartValues.chatLink = void 0;
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
        await $api.$patch(`tasks/${Number(props.taskId)}`, payload);
        fieldStartValues[field] = current;
      } catch (e) {
        console.error("save field failed", field, e);
      } finally {
        isSaving.value = false;
      }
    }
    watch(
      () => props.open,
      async (isOpen) => {
        if (isOpen) {
          await fetchFullTask();
        } else {
          editTask.value = null;
        }
      },
      { immediate: true }
    );
    function close() {
      emit("update:open", false);
    }
    async function emitDelete() {
      if (!editTask.value) return;
      isDeleting.value = true;
      try {
        await $api.$del(`tasks/${props.taskId}`);
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
        await $useApi.patch(`tasks/${props.taskId}/move`, payload);
      } catch (e) {
        return console.log(e);
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiInput = _sfc_main$k;
      const _component_UiDropdownMenu = _sfc_main$7$1;
      const _component_UiDropdownMenuTrigger = _sfc_main$6$1;
      const _component_UiButton = _sfc_main$l;
      const _component_UiDropdownMenuContent = _sfc_main$5$1;
      const _component_UiDropdownMenuItem = _sfc_main$4$1;
      const _component_UiScrollArea = _sfc_main$8$1;
      const _component_UiTabs = _sfc_main$2$1;
      const _component_UiTabsList = _sfc_main$m;
      const _component_UiTabsTrigger = _sfc_main$1$1;
      const _component_UiSeparator = _sfc_main$n;
      const _component_UiTabsContent = _sfc_main$o;
      const _component_UiLabel = _sfc_main$p;
      const _component_MyKanbanTaskMove = _sfc_main$j;
      const _component_MyKanbanTagsInput = _sfc_main$7;
      const _component_UiTextarea = _sfc_main$q;
      const _component_MyKanbanTaskOrder = _sfc_main$6;
      const _component_MyKanbanTaskMembersPanel = _sfc_main$5;
      const _component_MyKanbanTaskAuditPanel = _sfc_main$4;
      const _component_MyKanbanTaskAttachmentsList = __nuxt_component_19;
      const _component_MyKanbanTaskComments = _sfc_main$1;
      if (_ctx.open && unref(editTask)) {
        _push(`<div${ssrRenderAttrs(mergeProps({
          class: "fixed inset-0 z-50 flex items-stretch justify-center bg-black/70 p-0 sm:items-start",
          role: "dialog",
          "aria-modal": "true"
        }, _attrs))}><div class="w-full max-w-6xl h-screen sm:mt-1 bg-neutral-800 shadow-xl ring-1 ring-black/5 flex flex-col overflow-hidden"><div style="${ssrRenderStyle(unref(isLoading) ? null : { display: "none" })}" class="${ssrRenderClass([unref(isLoading) ? "opacity-100" : "opacity-0", "absolute inset-0 z-20 grid place-items-center rounded-none sm:rounded-2xl bg-white/60 backdrop-blur-[1px] text-sm text-neutral-600 transition-opacity duration-200"])}">${ssrInterpolate(unref(isLoading) ? "\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430\u2026" : "\u0421\u043E\u0445\u0440\u0430\u043D\u044F\u044E\u2026")}</div><div class="sticky top-0 z-10 flex gap-2 sm:flex-nowrap items-center justify-between border-b bg-neutral-700 px-4 sm:px-5 py-3 sm:py-4 border-b-neutral-500">`);
        _push(ssrRenderComponent(_component_UiInput, {
          modelValue: unref(editTask).title,
          "onUpdate:modelValue": ($event) => unref(editTask).title = $event,
          class: "w-full rounded-lg border border-neutral-500/50 px-3 py-2 text-base font-semibold outline-none focus:ring-2 focus:ring-neutral-500 bg-neutral-700 text-neutral-300",
          placeholder: "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0438",
          onFocus: ($event) => onFieldFocus("title"),
          onBlur: ($event) => onFieldBlur("title")
        }, null, _parent));
        _push(ssrRenderComponent(_component_UiDropdownMenu, null, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_UiDropdownMenuTrigger, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UiButton, {
                      class: "ml-3 size-9 p-0 border-1 border-neutral-500/50 bg-neutral-700 text-neutral-300 hover:text-neutral-100 hover:bg-neutral-700 cursor-pointer",
                      title: "\u0414\u0435\u0439\u0441\u0442\u0432\u0438\u044F"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(unref(EllipsisVertical), null, null, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(unref(EllipsisVertical))
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_UiButton, {
                        class: "ml-3 size-9 p-0 border-1 border-neutral-500/50 bg-neutral-700 text-neutral-300 hover:text-neutral-100 hover:bg-neutral-700 cursor-pointer",
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
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UiDropdownMenuContent, { class: "bg-neutral-700 text-neutral-300" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UiDropdownMenuItem, { class: ["cursor-pointer"] }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`\u041F\u0435\u0440\u0435\u043C\u0435\u0441\u0442\u0438\u0442\u044C \u0432 \u0430\u0440\u0445\u0438\u0432`);
                        } else {
                          return [
                            createTextVNode("\u041F\u0435\u0440\u0435\u043C\u0435\u0441\u0442\u0438\u0442\u044C \u0432 \u0430\u0440\u0445\u0438\u0432")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_UiDropdownMenuItem, { class: "cursor-pointer" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`\u0414\u0443\u0431\u043B\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0443`);
                        } else {
                          return [
                            createTextVNode("\u0414\u0443\u0431\u043B\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0443")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_UiDropdownMenuItem, {
                      class: "cursor-pointer",
                      onClick: ($event) => emitDelete()
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0443`);
                        } else {
                          return [
                            createTextVNode("\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0443")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_UiDropdownMenuItem, { class: ["cursor-pointer"] }, {
                        default: withCtx(() => [
                          createTextVNode("\u041F\u0435\u0440\u0435\u043C\u0435\u0441\u0442\u0438\u0442\u044C \u0432 \u0430\u0440\u0445\u0438\u0432")
                        ]),
                        _: 1
                      }),
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
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_UiDropdownMenuTrigger, null, {
                  default: withCtx(() => [
                    createVNode(_component_UiButton, {
                      class: "ml-3 size-9 p-0 border-1 border-neutral-500/50 bg-neutral-700 text-neutral-300 hover:text-neutral-100 hover:bg-neutral-700 cursor-pointer",
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
                    createVNode(_component_UiDropdownMenuItem, { class: ["cursor-pointer"] }, {
                      default: withCtx(() => [
                        createTextVNode("\u041F\u0435\u0440\u0435\u043C\u0435\u0441\u0442\u0438\u0442\u044C \u0432 \u0430\u0440\u0445\u0438\u0432")
                      ]),
                      _: 1
                    }),
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
        }, _parent));
        _push(ssrRenderComponent(_component_UiButton, {
          class: "p-0 ml-3 size-9 border-1 border-neutral-500/50 bg-neutral-700 text-neutral-300 hover:text-neutral-100 hover:bg-neutral-700 cursor-pointer",
          title: "\u0417\u0430\u043A\u0440\u044B\u0442\u044C",
          onClick: ($event) => close()
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(unref(X), null, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(unref(X))
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div><div class="relative flex-1 min-h-0 overflow-hidden">`);
        _push(ssrRenderComponent(_component_UiScrollArea, { class: "h-full" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="min-h-full grid grid-cols-1 md:grid-cols-7 pr-2 bg-neutral-800"${_scopeId}><div class="sm:col-span-4 bg-neutral-800"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UiTabs, {
                "default-value": "main",
                class: ""
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UiTabsList, { class: "ml-2 mt-2 bg-neutral-600 text-neutral-300" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_UiTabsTrigger, {
                            value: "main",
                            class: ""
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(` \u041E\u0441\u043D\u043E\u0432\u043D\u043E\u0435 `);
                              } else {
                                return [
                                  createTextVNode(" \u041E\u0441\u043D\u043E\u0432\u043D\u043E\u0435 ")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_component_UiTabsTrigger, { value: "prod" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(` \u0422\u0417 `);
                              } else {
                                return [
                                  createTextVNode(" \u0422\u0417 ")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_component_UiTabsTrigger, { value: "members" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(` \u0423\u0447\u0430\u0441\u0442\u043D\u0438\u043A\u0438 `);
                              } else {
                                return [
                                  createTextVNode(" \u0423\u0447\u0430\u0441\u0442\u043D\u0438\u043A\u0438 ")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_component_UiTabsTrigger, { value: "attachments" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(` \u0424\u0430\u0439\u043B\u044B `);
                              } else {
                                return [
                                  createTextVNode(" \u0424\u0430\u0439\u043B\u044B ")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_component_UiTabsTrigger, { value: "audit" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(` \u0418\u0441\u0442\u043E\u0440\u0438\u044F `);
                              } else {
                                return [
                                  createTextVNode(" \u0418\u0441\u0442\u043E\u0440\u0438\u044F ")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
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
                            }),
                            createVNode(_component_UiTabsTrigger, { value: "members" }, {
                              default: withCtx(() => [
                                createTextVNode(" \u0423\u0447\u0430\u0441\u0442\u043D\u0438\u043A\u0438 ")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_UiTabsTrigger, { value: "attachments" }, {
                              default: withCtx(() => [
                                createTextVNode(" \u0424\u0430\u0439\u043B\u044B ")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_UiTabsTrigger, { value: "audit" }, {
                              default: withCtx(() => [
                                createTextVNode(" \u0418\u0441\u0442\u043E\u0440\u0438\u044F ")
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_UiSeparator, { class: "my-2 bg-neutral-500" }, null, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_UiTabsContent, {
                      value: "main",
                      class: "p-3"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        var _a, _b, _c, _d;
                        if (_push4) {
                          _push4(`<div class="mb-4 space-y-1"${_scopeId3}><div class="text-sm text-neutral-300"${_scopeId3}><span class="font-medium"${_scopeId3}>\u0421\u043E\u0437\u0434\u0430\u0442\u0435\u043B\u044C:</span> ${ssrInterpolate(((_a = unref(editTask).creator) == null ? void 0 : _a.fullName) || ((_b = unref(editTask).creator) == null ? void 0 : _b.email) || "\u2014")}</div><div class="text-xs text-neutral-400"${_scopeId3}><span class="font-medium"${_scopeId3}>\u0421\u043E\u0437\u0434\u0430\u043D\u0430:</span> ${ssrInterpolate(("formatRuDateTime" in _ctx ? _ctx.formatRuDateTime : unref(formatRuDateTime))(unref(editTask).createdAt) || "\u2014")}</div><div class="relative flex gap-2 items-center mt-4"${_scopeId3}>`);
                          _push4(ssrRenderComponent(_component_UiLabel, { class: "font-light text-neutral-400 absolute left-2 top-[-8px] bg-neutral-700 rounded-sm px-1" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`\u0420\u0430\u0441\u043F\u043E\u043B\u043E\u0436\u0435\u043D\u0438\u0435`);
                              } else {
                                return [
                                  createTextVNode("\u0420\u0430\u0441\u043F\u043E\u043B\u043E\u0436\u0435\u043D\u0438\u0435")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_component_MyKanbanTaskMove, {
                            "task-id": _ctx.taskId,
                            "column-id": unref(editTask).columnId,
                            label: unref(editTask).column.title,
                            onUpdateTaskColumn: handleMoveTask
                          }, null, _parent4, _scopeId3));
                          _push4(`</div></div><div class="relative flex items-center gap-2"${_scopeId3}>`);
                          if (unref(editTask).chatLink) {
                            _push4(ssrRenderComponent(_component_UiLabel, { class: "font-light text-neutral-400 absolute left-2 top-[-8px] bg-neutral-700 rounded-sm px-1" }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`\u0421\u0441\u044B\u043B\u043A\u0430 \u043D\u0430 \u0441\u0434\u0435\u043B\u043A\u0443`);
                                } else {
                                  return [
                                    createTextVNode("\u0421\u0441\u044B\u043B\u043A\u0430 \u043D\u0430 \u0441\u0434\u0435\u043B\u043A\u0443")
                                  ];
                                }
                              }),
                              _: 1
                            }, _parent4, _scopeId3));
                          } else {
                            _push4(`<!---->`);
                          }
                          _push4(ssrRenderComponent(_component_UiInput, {
                            modelValue: unref(editTask).chatLink,
                            "onUpdate:modelValue": ($event) => unref(editTask).chatLink = $event,
                            placeholder: "\u0421\u0441\u044B\u043B\u043A\u0430 \u043D\u0430 \u0441\u0434\u0435\u043B\u043A\u0443",
                            class: [
                              "bg-neutral-700 text-neutral-300 placeholder:text-neutral-500 border-neutral-500/50"
                            ],
                            onFocus: ($event) => onFieldFocus("chatLink"),
                            onBlur: ($event) => onFieldBlur("chatLink")
                          }, null, _parent4, _scopeId3));
                          _push4(`</div><div class="relative mt-5"${_scopeId3}>`);
                          _push4(ssrRenderComponent(_component_UiLabel, { class: "font-light text-neutral-400 absolute left-2 top-[-8px] bg-neutral-700 rounded-sm px-1" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`\u041C\u0435\u0442\u043A\u0438`);
                              } else {
                                return [
                                  createTextVNode("\u041C\u0435\u0442\u043A\u0438")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_component_MyKanbanTagsInput, {
                            modelValue: unref(selectedTaskTags),
                            "onUpdate:modelValue": ($event) => isRef(selectedTaskTags) ? selectedTaskTags.value = $event : null,
                            "board-id": unref(editTask).board.id,
                            "task-id": _ctx.taskId,
                            "initial-selected": unref(editTask).tags.map((t) => t.name)
                          }, null, _parent4, _scopeId3));
                          _push4(`</div><div class="relative mt-5"${_scopeId3}>`);
                          if (unref(editTask).description) {
                            _push4(ssrRenderComponent(_component_UiLabel, { class: "font-light text-neutral-400 absolute left-2 top-[-8px] bg-neutral-700 rounded-sm px-1" }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435`);
                                } else {
                                  return [
                                    createTextVNode("\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435")
                                  ];
                                }
                              }),
                              _: 1
                            }, _parent4, _scopeId3));
                          } else {
                            _push4(`<!---->`);
                          }
                          _push4(ssrRenderComponent(_component_UiTextarea, {
                            modelValue: unref(editTask).description,
                            "onUpdate:modelValue": ($event) => unref(editTask).description = $event,
                            rows: "6",
                            class: "resize-none mt-1 h-[200px] w-full rounded-sm border bg-neutral-700 text-neutral-300 placeholder:text-neutral-500 border-neutral-500/50 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-indigo-500",
                            placeholder: "\u041E\u043F\u0438\u0448\u0438\u0442\u0435 \u0437\u0430\u0434\u0430\u0447\u0443",
                            onFocus: ($event) => onFieldFocus("description"),
                            onBlur: ($event) => onFieldBlur("description")
                          }, null, _parent4, _scopeId3));
                          _push4(`</div>`);
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
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "onFocus", "onBlur"])
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
                            createVNode("div", { class: "relative mt-5" }, [
                              unref(editTask).description ? (openBlock(), createBlock(_component_UiLabel, {
                                key: 0,
                                class: "font-light text-neutral-400 absolute left-2 top-[-8px] bg-neutral-700 rounded-sm px-1"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435")
                                ]),
                                _: 1
                              })) : createCommentVNode("", true),
                              createVNode(_component_UiTextarea, {
                                modelValue: unref(editTask).description,
                                "onUpdate:modelValue": ($event) => unref(editTask).description = $event,
                                rows: "6",
                                class: "resize-none mt-1 h-[200px] w-full rounded-sm border bg-neutral-700 text-neutral-300 placeholder:text-neutral-500 border-neutral-500/50 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-indigo-500",
                                placeholder: "\u041E\u043F\u0438\u0448\u0438\u0442\u0435 \u0437\u0430\u0434\u0430\u0447\u0443",
                                onFocus: ($event) => onFieldFocus("description"),
                                onBlur: ($event) => onFieldBlur("description")
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "onFocus", "onBlur"])
                            ])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_UiTabsContent, {
                      value: "prod",
                      class: "h-full px-3 pt-3"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_MyKanbanTaskOrder, { "task-id": _ctx.taskId }, null, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_MyKanbanTaskOrder, { "task-id": _ctx.taskId }, null, 8, ["task-id"])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_UiTabsContent, {
                      value: "members",
                      class: "px-3 flex flex-col gap-2 h-fit"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_MyKanbanTaskMembersPanel, {
                            "task-id": unref(editTask).id,
                            actions: true
                          }, null, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_MyKanbanTaskMembersPanel, {
                              "task-id": unref(editTask).id,
                              actions: true
                            }, null, 8, ["task-id"])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_UiTabsContent, {
                      value: "audit",
                      class: "px-3"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_MyKanbanTaskAuditPanel, {
                            "task-id": unref(editTask).id,
                            refreshable: ""
                          }, null, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_MyKanbanTaskAuditPanel, {
                              "task-id": unref(editTask).id,
                              refreshable: ""
                            }, null, 8, ["task-id"])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_UiTabsContent, {
                      value: "attachments",
                      class: "px-3"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_MyKanbanTaskAttachmentsList, {
                            "task-id": unref(editTask).id
                          }, null, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_MyKanbanTaskAttachmentsList, {
                              "task-id": unref(editTask).id
                            }, null, 8, ["task-id"])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
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
                          }),
                          createVNode(_component_UiTabsTrigger, { value: "members" }, {
                            default: withCtx(() => [
                              createTextVNode(" \u0423\u0447\u0430\u0441\u0442\u043D\u0438\u043A\u0438 ")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UiTabsTrigger, { value: "attachments" }, {
                            default: withCtx(() => [
                              createTextVNode(" \u0424\u0430\u0439\u043B\u044B ")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UiTabsTrigger, { value: "audit" }, {
                            default: withCtx(() => [
                              createTextVNode(" \u0418\u0441\u0442\u043E\u0440\u0438\u044F ")
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
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "onFocus", "onBlur"])
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
                            createVNode("div", { class: "relative mt-5" }, [
                              unref(editTask).description ? (openBlock(), createBlock(_component_UiLabel, {
                                key: 0,
                                class: "font-light text-neutral-400 absolute left-2 top-[-8px] bg-neutral-700 rounded-sm px-1"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435")
                                ]),
                                _: 1
                              })) : createCommentVNode("", true),
                              createVNode(_component_UiTextarea, {
                                modelValue: unref(editTask).description,
                                "onUpdate:modelValue": ($event) => unref(editTask).description = $event,
                                rows: "6",
                                class: "resize-none mt-1 h-[200px] w-full rounded-sm border bg-neutral-700 text-neutral-300 placeholder:text-neutral-500 border-neutral-500/50 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-indigo-500",
                                placeholder: "\u041E\u043F\u0438\u0448\u0438\u0442\u0435 \u0437\u0430\u0434\u0430\u0447\u0443",
                                onFocus: ($event) => onFieldFocus("description"),
                                onBlur: ($event) => onFieldBlur("description")
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "onFocus", "onBlur"])
                            ])
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
                      }),
                      createVNode(_component_UiTabsContent, {
                        value: "members",
                        class: "px-3 flex flex-col gap-2 h-fit"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_MyKanbanTaskMembersPanel, {
                            "task-id": unref(editTask).id,
                            actions: true
                          }, null, 8, ["task-id"])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_UiTabsContent, {
                        value: "audit",
                        class: "px-3"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_MyKanbanTaskAuditPanel, {
                            "task-id": unref(editTask).id,
                            refreshable: ""
                          }, null, 8, ["task-id"])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_UiTabsContent, {
                        value: "attachments",
                        class: "px-3"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_MyKanbanTaskAttachmentsList, {
                            "task-id": unref(editTask).id
                          }, null, 8, ["task-id"])
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div><aside class="sm:col-span-3 min-h-full h-fit border-l-1 border-neutral-500"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_MyKanbanTaskComments, {
                "task-id": unref(editTask).id
              }, null, _parent2, _scopeId));
              _push2(`</aside></div>`);
            } else {
              return [
                createVNode("div", { class: "min-h-full grid grid-cols-1 md:grid-cols-7 pr-2 bg-neutral-800" }, [
                  createVNode("div", { class: "sm:col-span-4 bg-neutral-800" }, [
                    createVNode(_component_UiTabs, {
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
                            }),
                            createVNode(_component_UiTabsTrigger, { value: "members" }, {
                              default: withCtx(() => [
                                createTextVNode(" \u0423\u0447\u0430\u0441\u0442\u043D\u0438\u043A\u0438 ")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_UiTabsTrigger, { value: "attachments" }, {
                              default: withCtx(() => [
                                createTextVNode(" \u0424\u0430\u0439\u043B\u044B ")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_UiTabsTrigger, { value: "audit" }, {
                              default: withCtx(() => [
                                createTextVNode(" \u0418\u0441\u0442\u043E\u0440\u0438\u044F ")
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
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "onFocus", "onBlur"])
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
                              createVNode("div", { class: "relative mt-5" }, [
                                unref(editTask).description ? (openBlock(), createBlock(_component_UiLabel, {
                                  key: 0,
                                  class: "font-light text-neutral-400 absolute left-2 top-[-8px] bg-neutral-700 rounded-sm px-1"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435")
                                  ]),
                                  _: 1
                                })) : createCommentVNode("", true),
                                createVNode(_component_UiTextarea, {
                                  modelValue: unref(editTask).description,
                                  "onUpdate:modelValue": ($event) => unref(editTask).description = $event,
                                  rows: "6",
                                  class: "resize-none mt-1 h-[200px] w-full rounded-sm border bg-neutral-700 text-neutral-300 placeholder:text-neutral-500 border-neutral-500/50 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-indigo-500",
                                  placeholder: "\u041E\u043F\u0438\u0448\u0438\u0442\u0435 \u0437\u0430\u0434\u0430\u0447\u0443",
                                  onFocus: ($event) => onFieldFocus("description"),
                                  onBlur: ($event) => onFieldBlur("description")
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "onFocus", "onBlur"])
                              ])
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
                        }),
                        createVNode(_component_UiTabsContent, {
                          value: "members",
                          class: "px-3 flex flex-col gap-2 h-fit"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_MyKanbanTaskMembersPanel, {
                              "task-id": unref(editTask).id,
                              actions: true
                            }, null, 8, ["task-id"])
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UiTabsContent, {
                          value: "audit",
                          class: "px-3"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_MyKanbanTaskAuditPanel, {
                              "task-id": unref(editTask).id,
                              refreshable: ""
                            }, null, 8, ["task-id"])
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UiTabsContent, {
                          value: "attachments",
                          class: "px-3"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_MyKanbanTaskAttachmentsList, {
                              "task-id": unref(editTask).id
                            }, null, 8, ["task-id"])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  createVNode("aside", { class: "sm:col-span-3 min-h-full h-fit border-l-1 border-neutral-500" }, [
                    createVNode(_component_MyKanbanTaskComments, {
                      "task-id": unref(editTask).id
                    }, null, 8, ["task-id"])
                  ])
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/my/kanban/TaskModal.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=TaskModal-KUpcJxwK.mjs.map
