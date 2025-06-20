import { defineComponent, ref, watch, unref, withCtx, createVNode, createBlock, openBlock, Fragment, createTextVNode, toDisplayString, computed, mergeProps, renderList, renderSlot, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderSlot } from 'vue/server-renderer';
import { c as cn } from './isLoading-D2o5w2su.mjs';
import { _ as _sfc_main$d, b as buttonVariants } from './index-BASHn9g0.mjs';
import { _ as _sfc_main$2$1, a as _sfc_main$1$1, b as _sfc_main$e } from './PopoverContent-DK_Eb2xq.mjs';
import { useForwardPropsEmits, RangeCalendarRoot, useForwardProps, RangeCalendarHeader, RangeCalendarPrev, RangeCalendarHeading, RangeCalendarNext, RangeCalendarGrid, RangeCalendarGridHead, RangeCalendarGridRow, RangeCalendarHeadCell, RangeCalendarGridBody, RangeCalendarCell, RangeCalendarCellTrigger } from 'reka-ui';
import { CalendarIcon, ChevronLeft, ChevronRight } from 'lucide-vue-next';
import { CalendarDate, DateFormatter, getLocalTimeZone } from '@internationalized/date';

const _sfc_main$c = /* @__PURE__ */ defineComponent({
  __name: "RangeCalendar",
  __ssrInlineRender: true,
  props: {
    defaultPlaceholder: {},
    defaultValue: {},
    modelValue: {},
    placeholder: {},
    allowNonContiguousRanges: { type: Boolean },
    pagedNavigation: { type: Boolean },
    preventDeselect: { type: Boolean },
    maximumDays: {},
    weekStartsOn: {},
    weekdayFormat: {},
    calendarLabel: {},
    fixedWeeks: { type: Boolean },
    maxValue: {},
    minValue: {},
    locale: {},
    numberOfMonths: {},
    disabled: { type: Boolean },
    readonly: { type: Boolean },
    initialFocus: { type: Boolean },
    isDateDisabled: { type: Function },
    isDateUnavailable: { type: Function },
    isDateHighlightable: { type: Function },
    dir: {},
    nextPage: { type: Function },
    prevPage: { type: Function },
    disableDaysOutsideCurrentView: { type: Boolean },
    fixedDate: {},
    asChild: { type: Boolean },
    as: { type: [String, Object, Function] },
    class: {}
  },
  emits: ["update:modelValue", "update:placeholder", "update:startValue"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const delegatedProps = computed(() => {
      const { class: _, ...delegated } = props;
      return delegated;
    });
    const forwarded = useForwardPropsEmits(delegatedProps, emits);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(RangeCalendarRoot), mergeProps({
        class: unref(cn)("p-3", props.class)
      }, unref(forwarded), { locale: "ru-RU" }, _attrs), {
        default: withCtx(({ grid, weekDays }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(_sfc_main$4), null, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(_sfc_main$1), null, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(_sfc_main$3), null, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(_sfc_main$2), null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(_sfc_main$1)),
                    createVNode(unref(_sfc_main$3)),
                    createVNode(unref(_sfc_main$2))
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
            _push2(`<div class="flex flex-col gap-y-4 mt-4 sm:flex-row sm:gap-x-4 sm:gap-y-0"${_scopeId}><!--[-->`);
            ssrRenderList(grid, (month) => {
              _push2(ssrRenderComponent(unref(_sfc_main$9), {
                key: month.value.toString()
              }, {
                default: withCtx((_, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(unref(_sfc_main$7), null, {
                      default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(unref(_sfc_main$6), null, {
                            default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<!--[-->`);
                                ssrRenderList(weekDays, (day) => {
                                  _push5(ssrRenderComponent(unref(_sfc_main$5), { key: day }, {
                                    default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        _push6(`${ssrInterpolate(day)}`);
                                      } else {
                                        return [
                                          createTextVNode(toDisplayString(day), 1)
                                        ];
                                      }
                                    }),
                                    _: 2
                                  }, _parent5, _scopeId4));
                                });
                                _push5(`<!--]-->`);
                              } else {
                                return [
                                  (openBlock(true), createBlock(Fragment, null, renderList(weekDays, (day) => {
                                    return openBlock(), createBlock(unref(_sfc_main$5), { key: day }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(day), 1)
                                      ]),
                                      _: 2
                                    }, 1024);
                                  }), 128))
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(unref(_sfc_main$6), null, {
                              default: withCtx(() => [
                                (openBlock(true), createBlock(Fragment, null, renderList(weekDays, (day) => {
                                  return openBlock(), createBlock(unref(_sfc_main$5), { key: day }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(day), 1)
                                    ]),
                                    _: 2
                                  }, 1024);
                                }), 128))
                              ]),
                              _: 2
                            }, 1024)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(unref(_sfc_main$8), null, {
                      default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<!--[-->`);
                          ssrRenderList(month.rows, (weekDates, index) => {
                            _push4(ssrRenderComponent(unref(_sfc_main$6), {
                              key: `weekDate-${index}`,
                              class: "mt-2 w-full"
                            }, {
                              default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`<!--[-->`);
                                  ssrRenderList(weekDates, (weekDate) => {
                                    _push5(ssrRenderComponent(unref(_sfc_main$b), {
                                      key: weekDate.toString(),
                                      date: weekDate
                                    }, {
                                      default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                        if (_push6) {
                                          _push6(ssrRenderComponent(unref(_sfc_main$a), {
                                            day: weekDate,
                                            month: month.value
                                          }, null, _parent6, _scopeId5));
                                        } else {
                                          return [
                                            createVNode(unref(_sfc_main$a), {
                                              day: weekDate,
                                              month: month.value
                                            }, null, 8, ["day", "month"])
                                          ];
                                        }
                                      }),
                                      _: 2
                                    }, _parent5, _scopeId4));
                                  });
                                  _push5(`<!--]-->`);
                                } else {
                                  return [
                                    (openBlock(true), createBlock(Fragment, null, renderList(weekDates, (weekDate) => {
                                      return openBlock(), createBlock(unref(_sfc_main$b), {
                                        key: weekDate.toString(),
                                        date: weekDate
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(unref(_sfc_main$a), {
                                            day: weekDate,
                                            month: month.value
                                          }, null, 8, ["day", "month"])
                                        ]),
                                        _: 2
                                      }, 1032, ["date"]);
                                    }), 128))
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                          });
                          _push4(`<!--]-->`);
                        } else {
                          return [
                            (openBlock(true), createBlock(Fragment, null, renderList(month.rows, (weekDates, index) => {
                              return openBlock(), createBlock(unref(_sfc_main$6), {
                                key: `weekDate-${index}`,
                                class: "mt-2 w-full"
                              }, {
                                default: withCtx(() => [
                                  (openBlock(true), createBlock(Fragment, null, renderList(weekDates, (weekDate) => {
                                    return openBlock(), createBlock(unref(_sfc_main$b), {
                                      key: weekDate.toString(),
                                      date: weekDate
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(unref(_sfc_main$a), {
                                          day: weekDate,
                                          month: month.value
                                        }, null, 8, ["day", "month"])
                                      ]),
                                      _: 2
                                    }, 1032, ["date"]);
                                  }), 128))
                                ]),
                                _: 2
                              }, 1024);
                            }), 128))
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(unref(_sfc_main$7), null, {
                        default: withCtx(() => [
                          createVNode(unref(_sfc_main$6), null, {
                            default: withCtx(() => [
                              (openBlock(true), createBlock(Fragment, null, renderList(weekDays, (day) => {
                                return openBlock(), createBlock(unref(_sfc_main$5), { key: day }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(day), 1)
                                  ]),
                                  _: 2
                                }, 1024);
                              }), 128))
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        _: 2
                      }, 1024),
                      createVNode(unref(_sfc_main$8), null, {
                        default: withCtx(() => [
                          (openBlock(true), createBlock(Fragment, null, renderList(month.rows, (weekDates, index) => {
                            return openBlock(), createBlock(unref(_sfc_main$6), {
                              key: `weekDate-${index}`,
                              class: "mt-2 w-full"
                            }, {
                              default: withCtx(() => [
                                (openBlock(true), createBlock(Fragment, null, renderList(weekDates, (weekDate) => {
                                  return openBlock(), createBlock(unref(_sfc_main$b), {
                                    key: weekDate.toString(),
                                    date: weekDate
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(unref(_sfc_main$a), {
                                        day: weekDate,
                                        month: month.value
                                      }, null, 8, ["day", "month"])
                                    ]),
                                    _: 2
                                  }, 1032, ["date"]);
                                }), 128))
                              ]),
                              _: 2
                            }, 1024);
                          }), 128))
                        ]),
                        _: 2
                      }, 1024)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]--></div>`);
          } else {
            return [
              createVNode(unref(_sfc_main$4), null, {
                default: withCtx(() => [
                  createVNode(unref(_sfc_main$1)),
                  createVNode(unref(_sfc_main$3)),
                  createVNode(unref(_sfc_main$2))
                ]),
                _: 1
              }),
              createVNode("div", { class: "flex flex-col gap-y-4 mt-4 sm:flex-row sm:gap-x-4 sm:gap-y-0" }, [
                (openBlock(true), createBlock(Fragment, null, renderList(grid, (month) => {
                  return openBlock(), createBlock(unref(_sfc_main$9), {
                    key: month.value.toString()
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(_sfc_main$7), null, {
                        default: withCtx(() => [
                          createVNode(unref(_sfc_main$6), null, {
                            default: withCtx(() => [
                              (openBlock(true), createBlock(Fragment, null, renderList(weekDays, (day) => {
                                return openBlock(), createBlock(unref(_sfc_main$5), { key: day }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(day), 1)
                                  ]),
                                  _: 2
                                }, 1024);
                              }), 128))
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        _: 2
                      }, 1024),
                      createVNode(unref(_sfc_main$8), null, {
                        default: withCtx(() => [
                          (openBlock(true), createBlock(Fragment, null, renderList(month.rows, (weekDates, index) => {
                            return openBlock(), createBlock(unref(_sfc_main$6), {
                              key: `weekDate-${index}`,
                              class: "mt-2 w-full"
                            }, {
                              default: withCtx(() => [
                                (openBlock(true), createBlock(Fragment, null, renderList(weekDates, (weekDate) => {
                                  return openBlock(), createBlock(unref(_sfc_main$b), {
                                    key: weekDate.toString(),
                                    date: weekDate
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(unref(_sfc_main$a), {
                                        day: weekDate,
                                        month: month.value
                                      }, null, 8, ["day", "month"])
                                    ]),
                                    _: 2
                                  }, 1032, ["date"]);
                                }), 128))
                              ]),
                              _: 2
                            }, 1024);
                          }), 128))
                        ]),
                        _: 2
                      }, 1024)
                    ]),
                    _: 2
                  }, 1024);
                }), 128))
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/range-calendar/RangeCalendar.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const _sfc_main$b = /* @__PURE__ */ defineComponent({
  __name: "RangeCalendarCell",
  __ssrInlineRender: true,
  props: {
    date: {},
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
      _push(ssrRenderComponent(unref(RangeCalendarCell), mergeProps({
        class: unref(cn)("relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&:has([data-selected])]:bg-accent first:[&:has([data-selected])]:rounded-l-md last:[&:has([data-selected])]:rounded-r-md [&:has([data-selected][data-outside-view])]:bg-accent/50 [&:has([data-selected][data-selection-end])]:rounded-r-md [&:has([data-selected][data-selection-start])]:rounded-l-md", props.class)
      }, unref(forwardedProps), _attrs), {
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/range-calendar/RangeCalendarCell.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const _sfc_main$a = /* @__PURE__ */ defineComponent({
  __name: "RangeCalendarCellTrigger",
  __ssrInlineRender: true,
  props: {
    day: {},
    month: {},
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
      _push(ssrRenderComponent(unref(RangeCalendarCellTrigger), mergeProps({
        class: unref(cn)(
          unref(buttonVariants)({ variant: "ghost" }),
          "h-8 w-8 p-0 font-normal data-[selected]:opacity-100",
          "[&[data-today]:not([data-selected])]:bg-accent [&[data-today]:not([data-selected])]:text-accent-foreground",
          // Selection Start
          "data-[selection-start]:bg-primary data-[selection-start]:text-primary-foreground data-[selection-start]:hover:bg-primary data-[selection-start]:hover:text-primary-foreground data-[selection-start]:focus:bg-primary data-[selection-start]:focus:text-primary-foreground",
          // Selection End
          "data-[selection-end]:bg-primary data-[selection-end]:text-primary-foreground data-[selection-end]:hover:bg-primary data-[selection-end]:hover:text-primary-foreground data-[selection-end]:focus:bg-primary data-[selection-end]:focus:text-primary-foreground",
          // Outside months
          "data-[outside-view]:text-muted-foreground data-[outside-view]:opacity-50 [&[data-outside-view][data-selected]]:text-muted-foreground [&[data-outside-view][data-selected]]:opacity-30",
          // Disabled
          "data-[disabled]:text-muted-foreground data-[disabled]:opacity-50",
          // Unavailable
          "data-[unavailable]:text-destructive-foreground data-[unavailable]:line-through",
          props.class
        )
      }, unref(forwardedProps), _attrs), {
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
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/range-calendar/RangeCalendarCellTrigger.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  __name: "RangeCalendarGrid",
  __ssrInlineRender: true,
  props: {
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
      _push(ssrRenderComponent(unref(RangeCalendarGrid), mergeProps({
        class: unref(cn)("w-full border-collapse space-y-1", props.class)
      }, unref(forwardedProps), _attrs), {
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/range-calendar/RangeCalendarGrid.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "RangeCalendarGridBody",
  __ssrInlineRender: true,
  props: {
    asChild: { type: Boolean },
    as: { type: [String, Object, Function] }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(RangeCalendarGridBody), mergeProps(props, _attrs), {
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
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/range-calendar/RangeCalendarGridBody.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "RangeCalendarGridHead",
  __ssrInlineRender: true,
  props: {
    asChild: { type: Boolean },
    as: { type: [String, Object, Function] }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(RangeCalendarGridHead), mergeProps(props, _attrs), {
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
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/range-calendar/RangeCalendarGridHead.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "RangeCalendarGridRow",
  __ssrInlineRender: true,
  props: {
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
      _push(ssrRenderComponent(unref(RangeCalendarGridRow), mergeProps({
        class: unref(cn)("flex", props.class)
      }, unref(forwardedProps), _attrs), {
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
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/range-calendar/RangeCalendarGridRow.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "RangeCalendarHeadCell",
  __ssrInlineRender: true,
  props: {
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
      _push(ssrRenderComponent(unref(RangeCalendarHeadCell), mergeProps({
        class: unref(cn)("w-8 rounded-md text-[0.8rem] font-normal text-muted-foreground", props.class)
      }, unref(forwardedProps), _attrs), {
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
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/range-calendar/RangeCalendarHeadCell.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "RangeCalendarHeader",
  __ssrInlineRender: true,
  props: {
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
      _push(ssrRenderComponent(unref(RangeCalendarHeader), mergeProps({
        class: unref(cn)("relative flex w-full items-center justify-between pt-1", props.class)
      }, unref(forwardedProps), _attrs), {
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
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/range-calendar/RangeCalendarHeader.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "RangeCalendarHeading",
  __ssrInlineRender: true,
  props: {
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
      _push(ssrRenderComponent(unref(RangeCalendarHeading), mergeProps({
        class: unref(cn)("text-sm font-medium", props.class)
      }, unref(forwardedProps), _attrs), {
        default: withCtx(({ headingValue }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", { headingValue }, () => {
              _push2(`${ssrInterpolate(headingValue)}`);
            }, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default", { headingValue }, () => [
                createTextVNode(toDisplayString(headingValue), 1)
              ])
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/range-calendar/RangeCalendarHeading.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "RangeCalendarNextButton",
  __ssrInlineRender: true,
  props: {
    nextPage: { type: Function },
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
      _push(ssrRenderComponent(unref(RangeCalendarNext), mergeProps({
        class: unref(cn)(
          unref(buttonVariants)({ variant: "outline" }),
          "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100",
          props.class
        )
      }, unref(forwardedProps), _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, () => {
              _push2(ssrRenderComponent(unref(ChevronRight), { class: "h-4 w-4" }, null, _parent2, _scopeId));
            }, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default", {}, () => [
                createVNode(unref(ChevronRight), { class: "h-4 w-4" })
              ])
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/range-calendar/RangeCalendarNextButton.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "RangeCalendarPrevButton",
  __ssrInlineRender: true,
  props: {
    prevPage: { type: Function },
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
      _push(ssrRenderComponent(unref(RangeCalendarPrev), mergeProps({
        class: unref(cn)(
          unref(buttonVariants)({ variant: "outline" }),
          "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100",
          props.class
        )
      }, unref(forwardedProps), _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, () => {
              _push2(ssrRenderComponent(unref(ChevronLeft), { class: "h-4 w-4" }, null, _parent2, _scopeId));
            }, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default", {}, () => [
                createVNode(unref(ChevronLeft), { class: "h-4 w-4" })
              ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/range-calendar/RangeCalendarPrevButton.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "DateRangePicker",
  __ssrInlineRender: true,
  props: {
    modelValue: {}
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const rangeStart = new CalendarDate(
      +props.modelValue.start.split("-")[0],
      +props.modelValue.start.split("-")[1],
      +props.modelValue.start.split("-")[2]
    );
    const rangeEnd = new CalendarDate(
      +props.modelValue.end.split("-")[0],
      +props.modelValue.end.split("-")[1],
      +props.modelValue.end.split("-")[2]
    );
    const df = new DateFormatter("ru-RU", {
      dateStyle: "medium"
    });
    const value = ref({
      start: rangeStart,
      end: rangeEnd
    });
    watch(value, (newValue) => {
      const range = {
        start: new Date(
          +newValue.start.year,
          +newValue.start.month - 1,
          +newValue.start.day + 1
        ).toISOString().slice(0, 10),
        end: new Date(
          +newValue.end.year,
          +newValue.end.month - 1,
          +newValue.end.day + 2
        ).toISOString().slice(0, 10)
      };
      console.log(range);
      emit("update:modelValue", range);
    });
    const emit = __emit;
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(_sfc_main$2$1), _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(_sfc_main$1$1), { "as-child": "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(_sfc_main$d), {
                    variant: "outline",
                    class: unref(cn)(
                      "w-[280px] justify-start text-left font-normal",
                      !value.value && "text-muted-foreground"
                    )
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(CalendarIcon), { class: "mr-2 h-4 w-4" }, null, _parent4, _scopeId3));
                        if (value.value.start) {
                          _push4(`<!--[-->`);
                          if (value.value.end) {
                            _push4(`<!--[-->${ssrInterpolate(unref(df).format(value.value.start.toDate(unref(getLocalTimeZone)())))} - ${ssrInterpolate(unref(df).format(value.value.end.toDate(unref(getLocalTimeZone)())))}<!--]-->`);
                          } else {
                            _push4(`<!--[-->${ssrInterpolate(unref(df).format(value.value.start.toDate(unref(getLocalTimeZone)())))}<!--]-->`);
                          }
                          _push4(`<!--]-->`);
                        } else {
                          _push4(`<!--[--> Pick a date <!--]-->`);
                        }
                      } else {
                        return [
                          createVNode(unref(CalendarIcon), { class: "mr-2 h-4 w-4" }),
                          value.value.start ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                            value.value.end ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                              createTextVNode(toDisplayString(unref(df).format(value.value.start.toDate(unref(getLocalTimeZone)()))) + " - " + toDisplayString(unref(df).format(value.value.end.toDate(unref(getLocalTimeZone)()))), 1)
                            ], 64)) : (openBlock(), createBlock(Fragment, { key: 1 }, [
                              createTextVNode(toDisplayString(unref(df).format(value.value.start.toDate(unref(getLocalTimeZone)()))), 1)
                            ], 64))
                          ], 64)) : (openBlock(), createBlock(Fragment, { key: 1 }, [
                            createTextVNode(" Pick a date ")
                          ], 64))
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(_sfc_main$d), {
                      variant: "outline",
                      class: unref(cn)(
                        "w-[280px] justify-start text-left font-normal",
                        !value.value && "text-muted-foreground"
                      )
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(CalendarIcon), { class: "mr-2 h-4 w-4" }),
                        value.value.start ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                          value.value.end ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                            createTextVNode(toDisplayString(unref(df).format(value.value.start.toDate(unref(getLocalTimeZone)()))) + " - " + toDisplayString(unref(df).format(value.value.end.toDate(unref(getLocalTimeZone)()))), 1)
                          ], 64)) : (openBlock(), createBlock(Fragment, { key: 1 }, [
                            createTextVNode(toDisplayString(unref(df).format(value.value.start.toDate(unref(getLocalTimeZone)()))), 1)
                          ], 64))
                        ], 64)) : (openBlock(), createBlock(Fragment, { key: 1 }, [
                          createTextVNode(" Pick a date ")
                        ], 64))
                      ]),
                      _: 1
                    }, 8, ["class"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(_sfc_main$e), { class: "w-auto p-0" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(_sfc_main$c), {
                    modelValue: value.value,
                    "onUpdate:modelValue": ($event) => value.value = $event,
                    "initial-focus": "",
                    "number-of-months": 1,
                    "onUpdate:startValue": (startDate) => value.value.start = startDate
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(_sfc_main$c), {
                      modelValue: value.value,
                      "onUpdate:modelValue": ($event) => value.value = $event,
                      "initial-focus": "",
                      "number-of-months": 1,
                      "onUpdate:startValue": (startDate) => value.value.start = startDate
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "onUpdate:startValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(_sfc_main$1$1), { "as-child": "" }, {
                default: withCtx(() => [
                  createVNode(unref(_sfc_main$d), {
                    variant: "outline",
                    class: unref(cn)(
                      "w-[280px] justify-start text-left font-normal",
                      !value.value && "text-muted-foreground"
                    )
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(CalendarIcon), { class: "mr-2 h-4 w-4" }),
                      value.value.start ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                        value.value.end ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                          createTextVNode(toDisplayString(unref(df).format(value.value.start.toDate(unref(getLocalTimeZone)()))) + " - " + toDisplayString(unref(df).format(value.value.end.toDate(unref(getLocalTimeZone)()))), 1)
                        ], 64)) : (openBlock(), createBlock(Fragment, { key: 1 }, [
                          createTextVNode(toDisplayString(unref(df).format(value.value.start.toDate(unref(getLocalTimeZone)()))), 1)
                        ], 64))
                      ], 64)) : (openBlock(), createBlock(Fragment, { key: 1 }, [
                        createTextVNode(" Pick a date ")
                      ], 64))
                    ]),
                    _: 1
                  }, 8, ["class"])
                ]),
                _: 1
              }),
              createVNode(unref(_sfc_main$e), { class: "w-auto p-0" }, {
                default: withCtx(() => [
                  createVNode(unref(_sfc_main$c), {
                    modelValue: value.value,
                    "onUpdate:modelValue": ($event) => value.value = $event,
                    "initial-focus": "",
                    "number-of-months": 1,
                    "onUpdate:startValue": (startDate) => value.value.start = startDate
                  }, null, 8, ["modelValue", "onUpdate:modelValue", "onUpdate:startValue"])
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
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/my/DateRangePicker.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=DateRangePicker-BxmmMoUS.mjs.map
