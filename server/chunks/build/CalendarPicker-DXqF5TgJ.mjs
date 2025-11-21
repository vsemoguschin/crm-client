import { _ as __nuxt_component_14 } from './server.mjs';
import { defineComponent, ref, watch, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "CalendarPicker",
  __ssrInlineRender: true,
  props: {
    multiCalendars: { type: [Boolean, Number] },
    todayBtn: { type: Boolean }
  },
  emits: ["range-updated"],
  setup(__props, { emit: __emit }) {
    const period = ref((/* @__PURE__ */ new Date()).toISOString().slice(0, 7));
    const range = ref([
      /* @__PURE__ */ new Date(period.value + "-01"),
      new Date(+period.value.split("-")[0], +period.value.split("-")[1], 0)
    ]);
    const emit = __emit;
    const formatRange = (val) => {
      const from = new Date(
        val[0].toLocaleDateString().split(".").reverse().join("-")
      ).toISOString().slice(0, 10);
      const to = new Date(
        val[1].toLocaleDateString().split(".").reverse().join("-")
      ).toISOString().slice(0, 10);
      return { from, to };
    };
    watch(range, (val) => {
      emit("range-updated", formatRange(val));
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientOnly = __nuxt_component_14;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex items-center" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/CalendarPicker.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=CalendarPicker-DXqF5TgJ.mjs.map
