import { defineComponent, ref, watch, mergeProps, unref, isRef, withCtx, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { Q as Qn } from './main-B3nlRyD_.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "CalendarPicker",
  __ssrInlineRender: true,
  emits: ["range-updated"],
  setup(__props, { emit: __emit }) {
    const period = ref((/* @__PURE__ */ new Date()).toISOString().slice(0, 7));
    const range = ref([
      /* @__PURE__ */ new Date(period.value + "-01"),
      new Date(+period.value.split("-")[0], +period.value.split("-")[1], 0)
    ]);
    const formatPlaceholder = (date) => {
      return "\u041F\u0435\u0440\u0438\u043E\u0434 \u0441 " + date.map((d) => d.toLocaleDateString()).join(" \u043F\u043E ");
    };
    const handleMonthYear = ({
      month,
      year
    }) => {
      range.value = [new Date(year, month, 1), new Date(year, month + 1, 0)];
    };
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
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-w-[330px]" }, _attrs))}>`);
      _push(ssrRenderComponent(unref(Qn), {
        modelValue: unref(range),
        "onUpdate:modelValue": ($event) => isRef(range) ? range.value = $event : null,
        range: "",
        "enable-time-picker": false,
        locale: "ru",
        "auto-apply": "",
        placeholder: "\u0412\u044B\u0431\u0440\u0430\u0442\u044C \u0434\u043D\u0438",
        "select-text": "\u0413\u043E\u0442\u043E\u0432\u043E",
        "cancel-text": "\u0417\u0430\u043A\u0440\u044B\u0442\u044C",
        class: "grow",
        format: formatPlaceholder,
        clearable: false,
        "hide-offset-dates": "",
        onUpdateMonthYear: handleMonthYear
      }, {
        "top-extra": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) ;
          else {
            return [];
          }
        }),
        _: 1
      }, _parent));
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
//# sourceMappingURL=CalendarPicker-DwLA6ecO.mjs.map
