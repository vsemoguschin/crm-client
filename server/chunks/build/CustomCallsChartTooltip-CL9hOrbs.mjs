import { defineComponent, computed, ref, mergeProps, unref, withCtx, createVNode, renderSlot, createBlock, createCommentVNode, openBlock, Fragment, renderList, createApp, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot, ssrInterpolate, ssrRenderList, ssrRenderStyle, ssrRenderAttr } from 'vue/server-renderer';
import { c as cn } from './index-DXIlBIYA.mjs';
import { Donut, GroupedBar, StackedBar, Axis, CurveType, Line, omit } from '@unovis/ts';
import { VisSingleContainer, VisDonut, VisGroupedBar, VisStackedBar, VisXYContainer, VisAxis, VisLine, VisTooltip, VisBulletLegend, VisCrosshair } from '@unovis/vue';
import { useMounted } from '@vueuse/core';
import { _ as _sfc_main$3$1, a as _sfc_main$2$1, c as _sfc_main$1$1 } from './CardDescription-B9jynpEL.mjs';
import { _ as _sfc_main$1$2 } from './CardFooter-CIZt0R6-.mjs';
import { u as useMyFormatPrice } from './useMyFormatPrice-CCAsFuev.mjs';

const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "ChartCrosshair",
  __ssrInlineRender: true,
  props: {
    colors: { default: () => [] },
    index: {},
    items: {},
    customTooltip: {}
  },
  setup(__props) {
    const props = __props;
    const wm = /* @__PURE__ */ new WeakMap();
    function template(d) {
      var _a;
      if (wm.has(d)) {
        return wm.get(d);
      } else {
        const componentDiv = (void 0).createElement("div");
        const omittedData = Object.entries(omit(d, [props.index])).map(
          ([key, value]) => {
            const legendReference = props.items.find((i) => i.name === key);
            return { ...legendReference, value };
          }
        );
        const TooltipComponent = (_a = props.customTooltip) != null ? _a : _sfc_main$5;
        createApp(TooltipComponent, {
          title: d[props.index].toString(),
          data: omittedData
        }).mount(componentDiv);
        wm.set(d, componentDiv.innerHTML);
        return componentDiv.innerHTML;
      }
    }
    function color(d, i) {
      var _a;
      return (_a = props.colors[i]) != null ? _a : "transparent";
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(VisTooltip), {
        "horizontal-shift": 20,
        "vertical-shift": 20
      }, null, _parent));
      _push(ssrRenderComponent(unref(VisCrosshair), {
        template,
        color
      }, null, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/chart/ChartCrosshair.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "ChartLegend",
  __ssrInlineRender: true,
  props: {
    items: { default: () => [] }
  },
  emits: ["legendItemClick", "update:items"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const elRef = ref();
    function onLegendItemClick(d, i) {
      emits("legendItemClick", d, i);
      const isBulletActive = !props.items[i].inactive;
      const isFilterApplied = props.items.some((i2) => i2.inactive);
      if (isFilterApplied && isBulletActive) {
        emits(
          "update:items",
          props.items.map((item) => ({ ...item, inactive: false }))
        );
      } else {
        emits(
          "update:items",
          props.items.map(
            (item) => item.name === d.name ? { ...d, inactive: false } : { ...item, inactive: true }
          )
        );
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        ref_key: "elRef",
        ref: elRef,
        class: "w-max"
      }, _attrs))}>`);
      _push(ssrRenderComponent(unref(VisBulletLegend), {
        items: _ctx.items,
        "on-legend-item-click": onLegendItemClick
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/chart/ChartLegend.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "ChartSingleTooltip",
  __ssrInlineRender: true,
  props: {
    selector: {},
    index: {},
    items: {},
    valueFormatter: { type: Function, default: (tick) => `${tick}` },
    customTooltip: {}
  },
  setup(__props) {
    const props = __props;
    const wm = /* @__PURE__ */ new WeakMap();
    function template(d, i, elements) {
      var _a, _b;
      if (props.index in d) {
        if (wm.has(d)) {
          return wm.get(d);
        } else {
          const componentDiv = (void 0).createElement("div");
          const omittedData = Object.entries(omit(d, [props.index])).map(
            ([key, value]) => {
              var _a2;
              const legendReference = (_a2 = props.items) == null ? void 0 : _a2.find((i2) => i2.name === key);
              return { ...legendReference, value: props.valueFormatter(value) };
            }
          );
          const TooltipComponent = (_a = props.customTooltip) != null ? _a : _sfc_main$5;
          createApp(TooltipComponent, {
            title: d[props.index],
            data: omittedData
          }).mount(componentDiv);
          wm.set(d, componentDiv.innerHTML);
          return componentDiv.innerHTML;
        }
      } else {
        const data = d.data;
        if (wm.has(data)) {
          return wm.get(data);
        } else {
          const style = getComputedStyle(elements[i]);
          const omittedData = [
            {
              name: data.name,
              value: props.valueFormatter(data[props.index]),
              color: style.fill
            }
          ];
          const componentDiv = (void 0).createElement("div");
          const TooltipComponent = (_b = props.customTooltip) != null ? _b : _sfc_main$5;
          createApp(TooltipComponent, {
            title: d[props.index],
            data: omittedData
          }).mount(componentDiv);
          wm.set(d, componentDiv.innerHTML);
          return componentDiv.innerHTML;
        }
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(VisTooltip), mergeProps({
        "horizontal-shift": 20,
        "vertical-shift": 20,
        triggers: {
          [_ctx.selector]: template
        }
      }, _attrs), null, _parent));
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/chart/ChartSingleTooltip.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "ChartTooltip",
  __ssrInlineRender: true,
  props: {
    title: {},
    data: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(_sfc_main$3$1), mergeProps({ class: "text-sm" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (_ctx.title) {
              _push2(ssrRenderComponent(unref(_sfc_main$2$1), { class: "p-3 border-b" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(unref(_sfc_main$1$1), null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate(_ctx.title)}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(_ctx.title), 1)
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(unref(_sfc_main$1$1), null, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(_ctx.title), 1)
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(ssrRenderComponent(unref(_sfc_main$1$2), { class: "p-3 min-w-[180px] flex flex-col gap-1" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(_ctx.data, (item, key) => {
                    _push3(`<div class="flex justify-between"${_scopeId2}><div class="flex items-center"${_scopeId2}><span class="w-2.5 h-2.5 mr-2"${_scopeId2}><svg width="100%" height="100%" viewBox="0 0 30 30"${_scopeId2}><path d=" M 15 15 m -14, 0 a 14,14 0 1,1 28,0 a 14,14 0 1,1 -28,0"${ssrRenderAttr("stroke", item.color)}${ssrRenderAttr("fill", item.color)} stroke-width="1"${_scopeId2}></path></svg></span><span${_scopeId2}>${ssrInterpolate(item.name)}</span></div><span class="font-semibold ml-4"${_scopeId2}>${ssrInterpolate(item.value)}</span></div>`);
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [
                    (openBlock(true), createBlock(Fragment, null, renderList(_ctx.data, (item, key) => {
                      return openBlock(), createBlock("div", {
                        key,
                        class: "flex justify-between"
                      }, [
                        createVNode("div", { class: "flex items-center" }, [
                          createVNode("span", { class: "w-2.5 h-2.5 mr-2" }, [
                            (openBlock(), createBlock("svg", {
                              width: "100%",
                              height: "100%",
                              viewBox: "0 0 30 30"
                            }, [
                              createVNode("path", {
                                d: " M 15 15 m -14, 0 a 14,14 0 1,1 28,0 a 14,14 0 1,1 -28,0",
                                stroke: item.color,
                                fill: item.color,
                                "stroke-width": "1"
                              }, null, 8, ["stroke", "fill"])
                            ]))
                          ]),
                          createVNode("span", null, toDisplayString(item.name), 1)
                        ]),
                        createVNode("span", { class: "font-semibold ml-4" }, toDisplayString(item.value), 1)
                      ]);
                    }), 128))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              _ctx.title ? (openBlock(), createBlock(unref(_sfc_main$2$1), {
                key: 0,
                class: "p-3 border-b"
              }, {
                default: withCtx(() => [
                  createVNode(unref(_sfc_main$1$1), null, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(_ctx.title), 1)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })) : createCommentVNode("", true),
              createVNode(unref(_sfc_main$1$2), { class: "p-3 min-w-[180px] flex flex-col gap-1" }, {
                default: withCtx(() => [
                  (openBlock(true), createBlock(Fragment, null, renderList(_ctx.data, (item, key) => {
                    return openBlock(), createBlock("div", {
                      key,
                      class: "flex justify-between"
                    }, [
                      createVNode("div", { class: "flex items-center" }, [
                        createVNode("span", { class: "w-2.5 h-2.5 mr-2" }, [
                          (openBlock(), createBlock("svg", {
                            width: "100%",
                            height: "100%",
                            viewBox: "0 0 30 30"
                          }, [
                            createVNode("path", {
                              d: " M 15 15 m -14, 0 a 14,14 0 1,1 28,0 a 14,14 0 1,1 -28,0",
                              stroke: item.color,
                              fill: item.color,
                              "stroke-width": "1"
                            }, null, 8, ["stroke", "fill"])
                          ]))
                        ]),
                        createVNode("span", null, toDisplayString(item.name), 1)
                      ]),
                      createVNode("span", { class: "font-semibold ml-4" }, toDisplayString(item.value), 1)
                    ]);
                  }), 128))
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
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/chart/ChartTooltip.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
function defaultColors(count = 3) {
  const quotient = Math.floor(count / 2);
  const remainder = count % 2;
  const primaryCount = quotient + remainder;
  const secondaryCount = quotient;
  return [
    ...Array.from(new Array(primaryCount).keys()).map(
      (i) => `hsl(var(--vis-primary-color) / ${1 - 1 / primaryCount * i})`
    ),
    ...Array.from(new Array(secondaryCount).keys()).map(
      (i) => `hsl(var(--vis-secondary-color) / ${1 - 1 / secondaryCount * i})`
    )
  ];
}
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "DonutChart",
  __ssrInlineRender: true,
  props: {
    data: {},
    colors: {},
    index: {},
    margin: { default: () => ({ top: 0, bottom: 0, left: 0, right: 0 }) },
    showLegend: { type: Boolean, default: true },
    showTooltip: { type: Boolean, default: true },
    filterOpacity: { default: 0.2 },
    category: {},
    type: { default: "donut" },
    sortFunction: { type: Function, default: () => void 0 },
    valueFormatter: { type: Function, default: (tick) => `${tick}` },
    customTooltip: {}
  },
  setup(__props) {
    const props = __props;
    console.log(props);
    const category = computed(() => props.category);
    const index = computed(() => props.index);
    const isMounted = useMounted();
    const activeSegmentKey = ref();
    const colors = computed(
      () => {
        var _a;
        return ((_a = props.colors) == null ? void 0 : _a.length) ? props.colors : defaultColors(
          props.data.filter((d) => d[props.category]).filter(Boolean).length
        );
      }
    );
    const legendItems = computed(
      () => props.data.map((item, i) => ({
        name: item[props.index],
        color: colors.value[i],
        inactive: false
      }))
    );
    const totalValue = computed(
      () => props.data.reduce((prev, curr) => {
        return prev + curr[props.category];
      }, 0)
    );
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: unref(cn)("w-full h-48 flex flex-col items-end", (_a = _ctx.$attrs.class) != null ? _a : "")
      }, _attrs))}>`);
      _push(ssrRenderComponent(unref(VisSingleContainer), {
        style: { height: unref(isMounted) ? "100%" : "auto" },
        margin: { left: 20, right: 20 },
        data: _ctx.data
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(_sfc_main$6), {
              selector: unref(Donut).selectors.segment,
              index: category.value,
              items: legendItems.value,
              "value-formatter": _ctx.valueFormatter,
              "custom-tooltip": _ctx.customTooltip
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(VisDonut), {
              value: (d) => d[category.value],
              "sort-function": _ctx.sortFunction,
              color: colors.value,
              "arc-width": _ctx.type === "donut" ? 20 : 0,
              "show-background": false,
              "central-label": _ctx.type === "donut" ? _ctx.valueFormatter(totalValue.value) : "",
              events: {
                [unref(Donut).selectors.segment]: {
                  click: (d, ev, i, elements) => {
                    var _a2, _b;
                    if (((_a2 = d == null ? void 0 : d.data) == null ? void 0 : _a2[index.value]) === activeSegmentKey.value) {
                      activeSegmentKey.value = void 0;
                      elements.forEach((el) => el.style.opacity = "1");
                    } else {
                      activeSegmentKey.value = (_b = d == null ? void 0 : d.data) == null ? void 0 : _b[index.value];
                      elements.forEach(
                        (el) => el.style.opacity = `${_ctx.filterOpacity}`
                      );
                      elements[i].style.opacity = "1";
                    }
                  }
                }
              }
            }, null, _parent2, _scopeId));
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              createVNode(unref(_sfc_main$6), {
                selector: unref(Donut).selectors.segment,
                index: category.value,
                items: legendItems.value,
                "value-formatter": _ctx.valueFormatter,
                "custom-tooltip": _ctx.customTooltip
              }, null, 8, ["selector", "index", "items", "value-formatter", "custom-tooltip"]),
              createVNode(unref(VisDonut), {
                value: (d) => d[category.value],
                "sort-function": _ctx.sortFunction,
                color: colors.value,
                "arc-width": _ctx.type === "donut" ? 20 : 0,
                "show-background": false,
                "central-label": _ctx.type === "donut" ? _ctx.valueFormatter(totalValue.value) : "",
                events: {
                  [unref(Donut).selectors.segment]: {
                    click: (d, ev, i, elements) => {
                      var _a2, _b;
                      if (((_a2 = d == null ? void 0 : d.data) == null ? void 0 : _a2[index.value]) === activeSegmentKey.value) {
                        activeSegmentKey.value = void 0;
                        elements.forEach((el) => el.style.opacity = "1");
                      } else {
                        activeSegmentKey.value = (_b = d == null ? void 0 : d.data) == null ? void 0 : _b[index.value];
                        elements.forEach(
                          (el) => el.style.opacity = `${_ctx.filterOpacity}`
                        );
                        elements[i].style.opacity = "1";
                      }
                    }
                  }
                }
              }, null, 8, ["value", "sort-function", "color", "arc-width", "central-label", "events"]),
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
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/chart-donut/DonutChart.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "BarChart",
  __ssrInlineRender: true,
  props: {
    data: {},
    categories: {},
    index: {},
    colors: {},
    margin: { default: () => ({ top: 0, bottom: 0, left: 0, right: 0 }) },
    filterOpacity: { default: 0.2 },
    xFormatter: {},
    yFormatter: {},
    showXAxis: { type: Boolean, default: true },
    showYAxis: { type: Boolean, default: true },
    showTooltip: { type: Boolean, default: true },
    showLegend: { type: Boolean, default: true },
    showGridLine: { type: Boolean, default: true },
    customTooltip: {},
    type: { default: "grouped" },
    roundedCorners: { default: 0 }
  },
  emits: ["legendItemClick"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const index = computed(() => props.index);
    const colors = computed(
      () => {
        var _a;
        return ((_a = props.colors) == null ? void 0 : _a.length) ? props.colors : defaultColors(props.categories.length);
      }
    );
    const legendItems = ref(
      props.categories.map((category, i) => ({
        name: category,
        color: colors.value[i],
        inactive: false
      }))
    );
    const isMounted = useMounted();
    function handleLegendItemClick(d, i) {
      emits("legendItemClick", d, i);
    }
    const VisBarComponent = computed(
      () => props.type === "grouped" ? VisGroupedBar : VisStackedBar
    );
    const selectorsBar = computed(
      () => props.type === "grouped" ? GroupedBar.selectors.bar : StackedBar.selectors.bar
    );
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: unref(cn)("w-full h-[400px] flex flex-col items-end", (_a = _ctx.$attrs.class) != null ? _a : "")
      }, _attrs))}>`);
      if (_ctx.showLegend) {
        _push(ssrRenderComponent(unref(_sfc_main$7), {
          items: legendItems.value,
          "onUpdate:items": ($event) => legendItems.value = $event,
          onLegendItemClick: handleLegendItemClick
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(unref(VisXYContainer), {
        data: _ctx.data,
        style: { height: unref(isMounted) ? "100%" : "auto" },
        margin: _ctx.margin
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a2, _b;
          if (_push2) {
            if (_ctx.showTooltip) {
              _push2(ssrRenderComponent(unref(_sfc_main$8), {
                colors: colors.value,
                items: legendItems.value,
                "custom-tooltip": _ctx.customTooltip,
                index: index.value
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(ssrRenderComponent(unref(VisBarComponent), {
              x: (d, i) => i,
              y: _ctx.categories.map((category) => (d) => d[category]),
              color: colors.value,
              "rounded-corners": _ctx.roundedCorners,
              "bar-padding": 0.05,
              attributes: {
                [selectorsBar.value]: {
                  opacity: (d, i) => {
                    var _a3;
                    const pos = i % _ctx.categories.length;
                    return ((_a3 = legendItems.value[pos]) == null ? void 0 : _a3.inactive) ? _ctx.filterOpacity : 1;
                  }
                }
              }
            }, null, _parent2, _scopeId));
            if (_ctx.showXAxis) {
              _push2(ssrRenderComponent(unref(VisAxis), {
                type: "x",
                "tick-format": (_a2 = _ctx.xFormatter) != null ? _a2 : (v) => {
                  var _a3;
                  return (_a3 = _ctx.data[v]) == null ? void 0 : _a3[index.value];
                },
                "grid-line": false,
                "tick-line": false,
                "tick-text-color": "hsl(var(--vis-text-color))"
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            if (_ctx.showYAxis) {
              _push2(ssrRenderComponent(unref(VisAxis), {
                type: "y",
                "tick-line": false,
                "tick-format": _ctx.yFormatter,
                "domain-line": false,
                "grid-line": _ctx.showGridLine,
                attributes: {
                  [unref(Axis).selectors.grid]: {
                    class: "text-muted"
                  }
                },
                "tick-text-color": "hsl(var(--vis-text-color))"
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              _ctx.showTooltip ? (openBlock(), createBlock(unref(_sfc_main$8), {
                key: 0,
                colors: colors.value,
                items: legendItems.value,
                "custom-tooltip": _ctx.customTooltip,
                index: index.value
              }, null, 8, ["colors", "items", "custom-tooltip", "index"])) : createCommentVNode("", true),
              createVNode(unref(VisBarComponent), {
                x: (d, i) => i,
                y: _ctx.categories.map((category) => (d) => d[category]),
                color: colors.value,
                "rounded-corners": _ctx.roundedCorners,
                "bar-padding": 0.05,
                attributes: {
                  [selectorsBar.value]: {
                    opacity: (d, i) => {
                      var _a3;
                      const pos = i % _ctx.categories.length;
                      return ((_a3 = legendItems.value[pos]) == null ? void 0 : _a3.inactive) ? _ctx.filterOpacity : 1;
                    }
                  }
                }
              }, null, 8, ["x", "y", "color", "rounded-corners", "attributes"]),
              _ctx.showXAxis ? (openBlock(), createBlock(unref(VisAxis), {
                key: 1,
                type: "x",
                "tick-format": (_b = _ctx.xFormatter) != null ? _b : (v) => {
                  var _a3;
                  return (_a3 = _ctx.data[v]) == null ? void 0 : _a3[index.value];
                },
                "grid-line": false,
                "tick-line": false,
                "tick-text-color": "hsl(var(--vis-text-color))"
              }, null, 8, ["tick-format"])) : createCommentVNode("", true),
              _ctx.showYAxis ? (openBlock(), createBlock(unref(VisAxis), {
                key: 2,
                type: "y",
                "tick-line": false,
                "tick-format": _ctx.yFormatter,
                "domain-line": false,
                "grid-line": _ctx.showGridLine,
                attributes: {
                  [unref(Axis).selectors.grid]: {
                    class: "text-muted"
                  }
                },
                "tick-text-color": "hsl(var(--vis-text-color))"
              }, null, 8, ["tick-format", "grid-line", "attributes"])) : createCommentVNode("", true),
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
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/chart-bar/BarChart.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "LineChart",
  __ssrInlineRender: true,
  props: {
    data: {},
    categories: {},
    index: {},
    colors: {},
    margin: { default: () => ({ top: 0, bottom: 0, left: 0, right: 0 }) },
    filterOpacity: { default: 0.2 },
    xFormatter: {},
    yFormatter: {},
    showXAxis: { type: Boolean, default: true },
    showYAxis: { type: Boolean, default: true },
    showTooltip: { type: Boolean, default: true },
    showLegend: { type: Boolean, default: true },
    showGridLine: { type: Boolean, default: true },
    customTooltip: {},
    curveType: { default: CurveType.MonotoneX }
  },
  emits: ["legendItemClick"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const index = computed(() => props.index);
    const colors = computed(
      () => {
        var _a;
        return ((_a = props.colors) == null ? void 0 : _a.length) ? props.colors : defaultColors(props.categories.length);
      }
    );
    const legendItems = ref(
      props.categories.map((category, i) => ({
        name: category,
        color: colors.value[i],
        inactive: false
      }))
    );
    const isMounted = useMounted();
    function handleLegendItemClick(d, i) {
      emits("legendItemClick", d, i);
    }
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: unref(cn)("w-full h-[400px] flex flex-col items-end", (_a = _ctx.$attrs.class) != null ? _a : "")
      }, _attrs))}>`);
      if (_ctx.showLegend) {
        _push(ssrRenderComponent(unref(_sfc_main$7), {
          items: legendItems.value,
          "onUpdate:items": ($event) => legendItems.value = $event,
          onLegendItemClick: handleLegendItemClick
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(unref(VisXYContainer), {
        margin: { left: 20, right: 20 },
        data: _ctx.data,
        style: { height: unref(isMounted) ? "100%" : "auto" }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a2, _b;
          if (_push2) {
            if (_ctx.showTooltip) {
              _push2(ssrRenderComponent(unref(_sfc_main$8), {
                colors: colors.value,
                items: legendItems.value,
                index: index.value,
                "custom-tooltip": _ctx.customTooltip
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(`<!--[-->`);
            ssrRenderList(_ctx.categories, (category, i) => {
              var _a3;
              _push2(ssrRenderComponent(unref(VisLine), {
                x: (d, i2) => i2,
                y: (d) => d[category],
                "curve-type": _ctx.curveType,
                color: colors.value[i],
                attributes: {
                  [unref(Line).selectors.line]: {
                    opacity: ((_a3 = legendItems.value.find((item) => item.name === category)) == null ? void 0 : _a3.inactive) ? _ctx.filterOpacity : 1
                  }
                }
              }, null, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
            if (_ctx.showXAxis) {
              _push2(ssrRenderComponent(unref(VisAxis), {
                type: "x",
                "tick-format": (_a2 = _ctx.xFormatter) != null ? _a2 : (v) => {
                  var _a3;
                  return (_a3 = _ctx.data[v]) == null ? void 0 : _a3[index.value];
                },
                "grid-line": false,
                "tick-line": false,
                "tick-text-color": "hsl(var(--vis-text-color))"
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            if (_ctx.showYAxis) {
              _push2(ssrRenderComponent(unref(VisAxis), {
                type: "y",
                "tick-line": false,
                "tick-format": _ctx.yFormatter,
                "domain-line": false,
                "grid-line": _ctx.showGridLine,
                attributes: {
                  [unref(Axis).selectors.grid]: {
                    class: "text-muted"
                  }
                },
                "tick-text-color": "hsl(var(--vis-text-color))"
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              _ctx.showTooltip ? (openBlock(), createBlock(unref(_sfc_main$8), {
                key: 0,
                colors: colors.value,
                items: legendItems.value,
                index: index.value,
                "custom-tooltip": _ctx.customTooltip
              }, null, 8, ["colors", "items", "index", "custom-tooltip"])) : createCommentVNode("", true),
              (openBlock(true), createBlock(Fragment, null, renderList(_ctx.categories, (category, i) => {
                var _a3;
                return openBlock(), createBlock(unref(VisLine), {
                  key: category,
                  x: (d, i2) => i2,
                  y: (d) => d[category],
                  "curve-type": _ctx.curveType,
                  color: colors.value[i],
                  attributes: {
                    [unref(Line).selectors.line]: {
                      opacity: ((_a3 = legendItems.value.find((item) => item.name === category)) == null ? void 0 : _a3.inactive) ? _ctx.filterOpacity : 1
                    }
                  }
                }, null, 8, ["x", "y", "curve-type", "color", "attributes"]);
              }), 128)),
              _ctx.showXAxis ? (openBlock(), createBlock(unref(VisAxis), {
                key: 1,
                type: "x",
                "tick-format": (_b = _ctx.xFormatter) != null ? _b : (v) => {
                  var _a3;
                  return (_a3 = _ctx.data[v]) == null ? void 0 : _a3[index.value];
                },
                "grid-line": false,
                "tick-line": false,
                "tick-text-color": "hsl(var(--vis-text-color))"
              }, null, 8, ["tick-format"])) : createCommentVNode("", true),
              _ctx.showYAxis ? (openBlock(), createBlock(unref(VisAxis), {
                key: 2,
                type: "y",
                "tick-line": false,
                "tick-format": _ctx.yFormatter,
                "domain-line": false,
                "grid-line": _ctx.showGridLine,
                attributes: {
                  [unref(Axis).selectors.grid]: {
                    class: "text-muted"
                  }
                },
                "tick-text-color": "hsl(var(--vis-text-color))"
              }, null, 8, ["tick-format", "grid-line", "attributes"])) : createCommentVNode("", true),
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
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/chart-line/LineChart.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "CustomChartTooltip",
  __ssrInlineRender: true,
  props: {
    title: {},
    data: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "tooltip bg-slate-100 text-slate-900 dark:bg-slate-800 dark:text-slate-200 rounded-md p-2" }, _attrs))}><div class="tooltip-title">${ssrInterpolate(_ctx.title)}</div><div class="tooltip-content"><div class="tooltip-total font-bold"> \u041E\u0431\u0449\u0435\u0435: ${ssrInterpolate(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(_ctx.data.reduce((a, b) => a + b.value, 0)))} \u20BD </div><!--[-->`);
      ssrRenderList(_ctx.data, (item) => {
        _push(`<div class="tooltip-item flex items-center gap-1"><div style="${ssrRenderStyle({ backgroundColor: item.color })}" class="tooltip-color w-2 h-2 rounded-md"></div><span class="tooltip-value">${ssrInterpolate(item.name + ": ")}</span><span class="tooltip-value font-semibold">${ssrInterpolate(("useMyFormatPrice" in _ctx ? _ctx.useMyFormatPrice : unref(useMyFormatPrice))(item.value) + "\u20BD")}</span></div>`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/my/satistics/CustomChartTooltip.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "CustomCallsChartTooltip",
  __ssrInlineRender: true,
  props: {
    title: {},
    data: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "tooltip bg-slate-100 text-slate-900 dark:bg-slate-800 dark:text-slate-200 rounded-md p-2" }, _attrs))}><div class="tooltip-title">${ssrInterpolate(_ctx.title)}</div><div class="tooltip-content"><div class="tooltip-total font-bold"> \u041E\u0431\u0449\u0435\u0435: ${ssrInterpolate(_ctx.data.reduce((a, b) => a + b.value, 0))}</div><!--[-->`);
      ssrRenderList(_ctx.data, (item) => {
        _push(`<div class="tooltip-item flex items-center gap-1"><div style="${ssrRenderStyle({ backgroundColor: item.color })}" class="tooltip-color w-2 h-2 rounded-md"></div><span class="tooltip-value">${ssrInterpolate(item.name + ": ")}</span><span class="tooltip-value font-semibold">${ssrInterpolate(item.value)}</span></div>`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/my/satistics/CustomCallsChartTooltip.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main$4 as _, _sfc_main$3 as a, _sfc_main$1 as b, _sfc_main$2 as c, _sfc_main as d };
//# sourceMappingURL=CustomCallsChartTooltip-CL9hOrbs.mjs.map
