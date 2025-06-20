import { defineComponent, computed, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { Search } from 'lucide-vue-next';
import { useForwardProps, ComboboxInput } from 'radix-vue';
import { c as cn } from './isLoading-D2o5w2su.mjs';

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
    as: { type: [String, Object, Function] },
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

export { _sfc_main as _ };
//# sourceMappingURL=CommandInput-DwuuHdro.mjs.map
