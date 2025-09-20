import { defineComponent, computed, mergeProps, unref, withCtx, renderSlot, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot } from 'vue/server-renderer';
import { useForwardProps, ComboboxInput, ComboboxEmpty } from 'radix-vue';
import { c as cn } from './utils-DuwrO1cI.mjs';
import { Search } from 'lucide-vue-next';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "CommandEmpty",
  __ssrInlineRender: true,
  props: {
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
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(ComboboxEmpty), mergeProps(delegatedProps.value, {
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
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/command/CommandEmpty.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    inheritAttrs: false
  },
  __name: "CommandInput",
  __ssrInlineRender: true,
  props: {
    type: {},
    disabled: { type: Boolean },
    autoFocus: { type: Boolean },
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
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "flex items-center border-b px-3",
        "cmdk-input-wrapper": ""
      }, _attrs))}>`);
      _push(ssrRenderComponent(unref(Search), { class: "mr-2 h-4 w-4 shrink-0 opacity-50" }, null, _parent));
      _push(ssrRenderComponent(unref(ComboboxInput), mergeProps({ ...unref(forwardedProps), ..._ctx.$attrs }, {
        "auto-focus": "",
        class: unref(cn)(
          "flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-slate-500 disabled:cursor-not-allowed disabled:opacity-50 dark:placeholder:text-slate-400",
          props.class
        )
      }), null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/command/CommandInput.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _, _sfc_main$1 as a };
//# sourceMappingURL=CommandInput-juM6Evaj.mjs.map
