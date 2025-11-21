import { defineComponent, unref, mergeProps, withCtx, renderSlot, computed, createVNode, ref, createTextVNode, toDisplayString, createBlock, openBlock, Fragment, renderList, createCommentVNode, withModifiers, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderSlot, ssrRenderClass, ssrInterpolate, ssrRenderList, ssrRenderAttrs } from 'vue/server-renderer';
import { useForwardPropsEmits, AccordionRoot, useForwardProps, AccordionItem, AccordionHeader, AccordionTrigger, AccordionContent } from 'radix-vue';
import { c as cn } from './utils-TCWotVPY.mjs';
import { ChevronDown, ArrowLeft, ArrowRight } from 'lucide-vue-next';
import { _ as _sfc_main$c } from './Card-D2-UPrX8.mjs';
import { _ as _sfc_main$1$1, a as _sfc_main$d } from './CardTitle-Dyaq6zaM.mjs';
import { _ as _sfc_main$g } from './CardDescription-CwDlX6V_.mjs';
import { _ as _sfc_main$h } from './CardContent-5uJgHkPl.mjs';
import { _ as _sfc_main$l } from './CardFooter-BUlih3MF.mjs';
import { _ as _sfc_main$e } from './OrderFormModal-Cg_8pl1L.mjs';
import { _ as _sfc_main$f } from './index-B6vrBiru.mjs';
import { _ as __nuxt_component_0 } from './index-BPQNkNDf.mjs';
import { createInjectionState } from '@vueuse/core';
import emblaCarouselVue from 'embla-carousel-vue';
import { _ as _sfc_main$i } from './NuxtImg-BJKLxDnu.mjs';
import { _ as _sfc_main$4$1, a as _sfc_main$3$2, b as _sfc_main$n, c as _sfc_main$2$2, d as _sfc_main$1$5 } from './DialogContent-BsO2ljLB.mjs';
import { _ as _sfc_main$o } from './DialogDescription-D5yt23q9.mjs';
import { _ as _sfc_main$q } from './DialogFooter-CQpXS8R1.mjs';
import { _ as _sfc_main$p } from './Input-DoHPrX2-.mjs';
import FormData from 'form-data';
import { b as useNuxtApp } from './server.mjs';
import { _ as _sfc_main$3$1, a as _sfc_main$2$1, b as _sfc_main$1$2 } from './DropdownMenuItem-Bzav__sm.mjs';
import { _ as _sfc_main$1$4, a as _sfc_main$k } from './DropdownMenuRadioItem-4ysE0sdZ.mjs';
import { a as _sfc_main$1$3 } from './Sidebar-ClYzRSuC.mjs';
import { _ as _sfc_main$j } from './Separator-DmvFl46f.mjs';
import { _ as _sfc_main$m } from './EditModal-BkYjnShT.mjs';

const _sfc_main$b = /* @__PURE__ */ defineComponent({
  __name: "Accordion",
  __ssrInlineRender: true,
  props: {
    collapsible: { type: Boolean },
    disabled: { type: Boolean },
    dir: {},
    orientation: {},
    asChild: { type: Boolean },
    as: {},
    type: {},
    modelValue: {},
    defaultValue: {}
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const forwarded = useForwardPropsEmits(props, emits);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(AccordionRoot), mergeProps(unref(forwarded), _attrs), {
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/accordion/Accordion.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const _sfc_main$a = /* @__PURE__ */ defineComponent({
  __name: "AccordionContent",
  __ssrInlineRender: true,
  props: {
    forceMount: { type: Boolean },
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
      _push(ssrRenderComponent(unref(AccordionContent), mergeProps(delegatedProps.value, { class: "overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="${ssrRenderClass(unref(cn)("pb-4 pt-0", props.class))}"${_scopeId}>`);
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", {
                class: unref(cn)("pb-4 pt-0", props.class)
              }, [
                renderSlot(_ctx.$slots, "default")
              ], 2)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/accordion/AccordionContent.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  __name: "AccordionItem",
  __ssrInlineRender: true,
  props: {
    disabled: { type: Boolean },
    value: {},
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
      _push(ssrRenderComponent(unref(AccordionItem), mergeProps(unref(forwardedProps), {
        class: unref(cn)("border-b", props.class)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/accordion/AccordionItem.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "AccordionTrigger",
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
      _push(ssrRenderComponent(unref(AccordionHeader), mergeProps({ class: "flex" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(AccordionTrigger), mergeProps(delegatedProps.value, {
              class: unref(cn)(
                "flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
                props.class
              )
            }), {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push3, _parent3, _scopeId2);
                  ssrRenderSlot(_ctx.$slots, "icon", {}, () => {
                    _push3(ssrRenderComponent(unref(ChevronDown), { class: "h-4 w-4 shrink-0 transition-transform duration-200" }, null, _parent3, _scopeId2));
                  }, _push3, _parent3, _scopeId2);
                } else {
                  return [
                    renderSlot(_ctx.$slots, "default"),
                    renderSlot(_ctx.$slots, "icon", {}, () => [
                      createVNode(unref(ChevronDown), { class: "h-4 w-4 shrink-0 transition-transform duration-200" })
                    ])
                  ];
                }
              }),
              _: 3
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(AccordionTrigger), mergeProps(delegatedProps.value, {
                class: unref(cn)(
                  "flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
                  props.class
                )
              }), {
                default: withCtx(() => [
                  renderSlot(_ctx.$slots, "default"),
                  renderSlot(_ctx.$slots, "icon", {}, () => [
                    createVNode(unref(ChevronDown), { class: "h-4 w-4 shrink-0 transition-transform duration-200" })
                  ])
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
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/accordion/AccordionTrigger.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const [useProvideCarousel, useInjectCarousel] = createInjectionState(
  ({ opts, orientation, plugins }, emits) => {
    const [emblaNode, emblaApi] = emblaCarouselVue(
      {
        ...opts,
        axis: orientation === "horizontal" ? "x" : "y"
      },
      plugins
    );
    function scrollPrev() {
      var _a;
      (_a = emblaApi.value) == null ? void 0 : _a.scrollPrev();
    }
    function scrollNext() {
      var _a;
      (_a = emblaApi.value) == null ? void 0 : _a.scrollNext();
    }
    const canScrollNext = ref(false);
    const canScrollPrev = ref(false);
    return {
      carouselRef: emblaNode,
      carouselApi: emblaApi,
      canScrollPrev,
      canScrollNext,
      scrollPrev,
      scrollNext,
      orientation
    };
  }
);
function useCarousel() {
  const carouselState = useInjectCarousel();
  if (!carouselState)
    throw new Error("useCarousel must be used within a <Carousel />");
  return carouselState;
}
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "Carousel",
  __ssrInlineRender: true,
  props: {
    opts: {},
    plugins: {},
    orientation: { default: "horizontal" },
    class: {}
  },
  emits: ["init-api"],
  setup(__props, { expose: __expose, emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const {
      canScrollNext,
      canScrollPrev,
      carouselApi,
      carouselRef,
      orientation,
      scrollNext,
      scrollPrev
    } = useProvideCarousel(props, emits);
    __expose({
      canScrollNext,
      canScrollPrev,
      carouselApi,
      carouselRef,
      orientation,
      scrollNext,
      scrollPrev
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: unref(cn)("relative", props.class),
        role: "region",
        "aria-roledescription": "carousel",
        tabindex: "0"
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {
        canScrollNext: unref(canScrollNext),
        canScrollPrev: unref(canScrollPrev),
        carouselApi: unref(carouselApi),
        carouselRef: unref(carouselRef),
        orientation: unref(orientation),
        scrollNext: unref(scrollNext),
        scrollPrev: unref(scrollPrev)
      }, null, _push, _parent);
      _push(`</div>`);
    };
  }
});
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/carousel/Carousel.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  ...{
    inheritAttrs: false
  },
  __name: "CarouselContent",
  __ssrInlineRender: true,
  props: {
    class: {}
  },
  setup(__props) {
    const props = __props;
    const { carouselRef, orientation } = useCarousel();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        ref_key: "carouselRef",
        ref: carouselRef,
        class: "overflow-hidden"
      }, _attrs))}><div${ssrRenderAttrs(mergeProps({
        class: unref(cn)(
          "flex",
          unref(orientation) === "horizontal" ? "-ml-4" : "-mt-4 flex-col",
          props.class
        )
      }, _ctx.$attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/carousel/CarouselContent.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "CarouselItem",
  __ssrInlineRender: true,
  props: {
    class: {}
  },
  setup(__props) {
    const props = __props;
    const { orientation } = useCarousel();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        role: "group",
        "aria-roledescription": "slide",
        class: unref(cn)(
          "min-w-0 shrink-0 grow-0 basis-full",
          unref(orientation) === "horizontal" ? "pl-4" : "pt-4",
          props.class
        )
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/carousel/CarouselItem.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "CarouselNext",
  __ssrInlineRender: true,
  props: {
    class: {}
  },
  setup(__props) {
    const props = __props;
    const { orientation, canScrollNext, scrollNext } = useCarousel();
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(_sfc_main$f), mergeProps({
        disabled: !unref(canScrollNext),
        class: unref(cn)(
          "touch-manipulation absolute h-8 w-8 rounded-full p-0",
          unref(orientation) === "horizontal" ? "-right-12 top-1/2 -translate-y-1/2" : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
          props.class
        ),
        variant: "outline",
        onClick: unref(scrollNext)
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, () => {
              _push2(ssrRenderComponent(unref(ArrowRight), { class: "h-4 w-4 text-current" }, null, _parent2, _scopeId));
              _push2(`<span class="sr-only"${_scopeId}>Next Slide</span>`);
            }, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default", {}, () => [
                createVNode(unref(ArrowRight), { class: "h-4 w-4 text-current" }),
                createVNode("span", { class: "sr-only" }, "Next Slide")
              ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/carousel/CarouselNext.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "CarouselPrevious",
  __ssrInlineRender: true,
  props: {
    class: {}
  },
  setup(__props) {
    const props = __props;
    const { orientation, canScrollPrev, scrollPrev } = useCarousel();
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(_sfc_main$f), mergeProps({
        disabled: !unref(canScrollPrev),
        class: unref(cn)(
          "touch-manipulation absolute h-8 w-8 rounded-full p-0",
          unref(orientation) === "horizontal" ? "-left-12 top-1/2 -translate-y-1/2" : "-top-12 left-1/2 -translate-x-1/2 rotate-90",
          props.class
        ),
        variant: "outline",
        onClick: unref(scrollPrev)
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, () => {
              _push2(ssrRenderComponent(unref(ArrowLeft), { class: "h-4 w-4 text-current" }, null, _parent2, _scopeId));
              _push2(`<span class="sr-only"${_scopeId}>Previous Slide</span>`);
            }, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default", {}, () => [
                createVNode(unref(ArrowLeft), { class: "h-4 w-4 text-current" }),
                createVNode("span", { class: "sr-only" }, "Previous Slide")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/carousel/CarouselPrevious.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "UploadImgForm",
  __ssrInlineRender: true,
  props: {
    order: {}
  },
  emits: ["file-uploaded"],
  setup(__props, { emit: __emit }) {
    const { $useApi } = useNuxtApp();
    const props = __props;
    const file = ref(null);
    const isOpen = ref(false);
    const isLoading = ref(false);
    const getFile = (event) => {
      const selectedFile = event.target.files[0];
      if (!selectedFile) {
        console.warn("\u0424\u0430\u0439\u043B \u043D\u0435 \u0432\u044B\u0431\u0440\u0430\u043D");
        return;
      }
      console.log(selectedFile);
      file.value = selectedFile;
    };
    const uploadFile = async () => {
      if (!file.value) {
        console.error("\u0424\u0430\u0439\u043B \u043D\u0435 \u0432\u044B\u0431\u0440\u0430\u043D");
        return;
      }
      try {
        const formData = new FormData();
        formData.append("file", file.value, file.value.name);
        await $useApi.post(`orders/${props.order.id}/files`, formData, {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        });
      } catch (error) {
        console.log(error);
      }
    };
    const emit = __emit;
    const onSubmit = async () => {
      isLoading.value = true;
      await uploadFile();
      isOpen.value = false;
      isLoading.value = false;
      return emit("file-uploaded");
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiDialog = _sfc_main$4$1;
      const _component_UiDialogTrigger = _sfc_main$3$2;
      const _component_UiButton = _sfc_main$f;
      const _component_UiDialogContent = _sfc_main$n;
      const _component_UiDialogHeader = _sfc_main$2$2;
      const _component_UiDialogTitle = _sfc_main$1$5;
      const _component_UiDialogDescription = _sfc_main$o;
      const _component_UiInput = _sfc_main$p;
      const _component_UiDialogFooter = _sfc_main$q;
      _push(ssrRenderComponent(_component_UiDialog, mergeProps({
        open: isOpen.value,
        "onUpdate:open": ($event) => isOpen.value = $event
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UiDialogTrigger, { "as-child": "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UiButton, {
                    class: "w-full",
                    variant: "secondary"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` \u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0444\u043E\u0442\u043E `);
                      } else {
                        return [
                          createTextVNode(" \u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0444\u043E\u0442\u043E ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UiButton, {
                      class: "w-full",
                      variant: "secondary"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" \u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0444\u043E\u0442\u043E ")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UiDialogContent, { class: "flex flex-col" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  if (!isLoading.value) {
                    _push3(`<div${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_UiDialogHeader, null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_UiDialogTitle, null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435`);
                              } else {
                                return [
                                  createTextVNode("\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_component_UiDialogDescription, null, null, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_UiDialogTitle, null, {
                              default: withCtx(() => [
                                createTextVNode("\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_UiDialogDescription)
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(`<div class="flex flex-col gap-5"${_scopeId2}><form class="w-full flex flex-col"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_UiInput, {
                      id: "file-input",
                      type: "file",
                      onChange: ($event) => getFile($event)
                    }, null, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_UiButton, {
                      class: "ml-auto self-right mt-8",
                      type: "submit"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(` \u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C `);
                        } else {
                          return [
                            createTextVNode(" \u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(`</form></div>`);
                    _push3(ssrRenderComponent(_component_UiDialogFooter, null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<div class="flex justify-between w-full"${_scopeId3}></div>`);
                        } else {
                          return [
                            createVNode("div", { class: "flex justify-between w-full" })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(`</div>`);
                  } else {
                    _push3(`<div${_scopeId2}>\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430...</div>`);
                  }
                } else {
                  return [
                    !isLoading.value ? (openBlock(), createBlock("div", { key: 0 }, [
                      createVNode(_component_UiDialogHeader, null, {
                        default: withCtx(() => [
                          createVNode(_component_UiDialogTitle, null, {
                            default: withCtx(() => [
                              createTextVNode("\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UiDialogDescription)
                        ]),
                        _: 1
                      }),
                      createVNode("div", { class: "flex flex-col gap-5" }, [
                        createVNode("form", {
                          class: "w-full flex flex-col",
                          onSubmit: withModifiers(onSubmit, ["prevent"])
                        }, [
                          createVNode(_component_UiInput, {
                            id: "file-input",
                            type: "file",
                            onChange: ($event) => getFile($event)
                          }, null, 8, ["onChange"]),
                          createVNode(_component_UiButton, {
                            class: "ml-auto self-right mt-8",
                            type: "submit"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" \u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C ")
                            ]),
                            _: 1
                          })
                        ], 32)
                      ]),
                      createVNode(_component_UiDialogFooter, null, {
                        default: withCtx(() => [
                          createVNode("div", { class: "flex justify-between w-full" })
                        ]),
                        _: 1
                      })
                    ])) : (openBlock(), createBlock("div", { key: 1 }, "\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430..."))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UiDialogTrigger, { "as-child": "" }, {
                default: withCtx(() => [
                  createVNode(_component_UiButton, {
                    class: "w-full",
                    variant: "secondary"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" \u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0444\u043E\u0442\u043E ")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_UiDialogContent, { class: "flex flex-col" }, {
                default: withCtx(() => [
                  !isLoading.value ? (openBlock(), createBlock("div", { key: 0 }, [
                    createVNode(_component_UiDialogHeader, null, {
                      default: withCtx(() => [
                        createVNode(_component_UiDialogTitle, null, {
                          default: withCtx(() => [
                            createTextVNode("\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UiDialogDescription)
                      ]),
                      _: 1
                    }),
                    createVNode("div", { class: "flex flex-col gap-5" }, [
                      createVNode("form", {
                        class: "w-full flex flex-col",
                        onSubmit: withModifiers(onSubmit, ["prevent"])
                      }, [
                        createVNode(_component_UiInput, {
                          id: "file-input",
                          type: "file",
                          onChange: ($event) => getFile($event)
                        }, null, 8, ["onChange"]),
                        createVNode(_component_UiButton, {
                          class: "ml-auto self-right mt-8",
                          type: "submit"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" \u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C ")
                          ]),
                          _: 1
                        })
                      ], 32)
                    ]),
                    createVNode(_component_UiDialogFooter, null, {
                      default: withCtx(() => [
                        createVNode("div", { class: "flex justify-between w-full" })
                      ]),
                      _: 1
                    })
                  ])) : (openBlock(), createBlock("div", { key: 1 }, "\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430..."))
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
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/my/orders/UploadImgForm.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "OrderPreview",
  __ssrInlineRender: true,
  props: {
    order: {
      type: Object,
      required: true
    },
    stages: {
      type: Array,
      required: true
    },
    workers: {
      type: Array,
      required: true
    },
    fromPage: {
      type: String,
      required: true
    }
  },
  emits: ["change-stage", "img-deleted", "update-orders-list"],
  setup(__props, { emit: __emit }) {
    const { $useApi } = useNuxtApp();
    const authStore = useAuthStore();
    const props = __props;
    const isIdPage = ref(props.fromPage === "id" ? true : false);
    const order = ref({ ...props.order });
    const fetchYandexResource = async (path) => {
      const url = `https://cloud-api.yandex.net/v1/disk/resources?path=${encodeURIComponent(path)}`;
      const headers = {
        Accept: "application/json",
        Authorization: "OAuth y0_AgAEA7qkcvrzAADLWwAAAAD3ffQIQaf8Plw0QhqCi-7Zcz02CNT3scc"
      };
      try {
        const response = await fetch(url, { method: "GET", headers });
        if (!response.ok) {
          throw new Error(`\u041E\u0448\u0438\u0431\u043A\u0430: ${response.status} ${response.statusText}`);
        }
        return await response.json();
      } catch (error) {
        console.error("\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u0440\u0438 \u0432\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u0438 \u0437\u0430\u043F\u0440\u043E\u0441\u0430:", error);
        throw error;
      }
    };
    const imgs = ref([]);
    const emit = __emit;
    const getImg = async () => {
      const { data } = await $useApi.get(`/orders/${props.order.id}/files`);
      console.log(data, 32323232);
      imgs.value = data.files.map((img) => {
        return { id: img.id, user: img.user, url: "EasyCRM/imgs/" + img.ya_name };
      });
      console.log(imgs.value, 3424242);
      for (let i = 0; i < imgs.value.length; i++) {
        imgs.value[i].url = await fetchYandexResource(imgs.value[i].url).then(
          (data2) => data2.sizes[2].url
        );
      }
    };
    const deleteImg = async (fileId) => {
      try {
        await $useApi.delete(`files/${fileId}`);
        await getImg();
      } catch (e) {
        console.log(e);
      }
    };
    const changeStage = async (orderId, newStageId) => {
      try {
        await $useApi.patch(`/orders/${orderId}/stage/${newStageId}`);
        const { data: updatedOrder } = await $useApi.get(`/orders/${orderId}`);
        order.value = updatedOrder;
        emit("change-stage", { order: order.value });
      } catch (error) {
        console.log(error);
      }
    };
    const getOrder = async () => {
      try {
        const { data } = await $useApi.get("/orders/" + order.value.id);
        order.value = data;
      } catch (error) {
        console.log(error);
      }
    };
    const deleteOrder = async () => {
      try {
        await $useApi.delete(`/orders/${order.value.id}`);
        console.log(order.value.id);
        emit("update-orders-list");
      } catch (error) {
        console.log(error);
      }
    };
    const setFrezer = async (orderId, frezerId) => {
      console.log(orderId, frezerId);
      const { data: order2 } = await $useApi.patch(
        `/orders/${orderId}/frezer/${frezerId}`
      );
      await getOrder();
      return console.log(order2);
    };
    const setLaminater = async (orderId, laminaterId) => {
      console.log(orderId, laminaterId);
      const { data: order2 } = await $useApi.patch(
        `/orders/${orderId}/laminater/${laminaterId}`
      );
      await getOrder();
      return console.log(order2);
    };
    const setMaster = async (orderId, masterId) => {
      console.log(orderId, masterId);
      const { data: order2 } = await $useApi.patch(
        `/orders/${orderId}/master/${masterId}`
      );
      await getOrder();
      return console.log(order2);
    };
    const setPacker = async (orderId, packerId) => {
      console.log(orderId, packerId);
      const { data: order2 } = await $useApi.patch(
        `/orders/${orderId}/packer/${packerId}`
      );
      await getOrder();
      return console.log(order2);
    };
    const takeOrder = async (masterType) => {
      const { data: order2 } = await $useApi.patch(
        `/orders/${props.order.id}/${masterType}/${authStore.user.id}`
      );
      await getOrder();
      return console.log(order2);
    };
    const openInNewWindow = (url) => {
      if (url) {
        (void 0).open(url, "_blank");
      } else {
        console.error("URL \u043E\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u0435\u0442");
      }
    };
    console.log("orderPreview");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiCard = _sfc_main$c;
      const _component_UiCardHeader = _sfc_main$1$1;
      const _component_UiCardTitle = _sfc_main$d;
      const _component_MyOrdersOrderFormModal = _sfc_main$e;
      const _component_UiButton = _sfc_main$f;
      const _component_Icon = __nuxt_component_0;
      const _component_UiCardDescription = _sfc_main$g;
      const _component_UiCardContent = _sfc_main$h;
      const _component_UiCarousel = _sfc_main$7;
      const _component_UiCarouselContent = _sfc_main$6;
      const _component_UiCarouselItem = _sfc_main$5;
      const _component_NuxtImg = _sfc_main$i;
      const _component_UiCarouselPrevious = _sfc_main$3;
      const _component_UiCarouselNext = _sfc_main$4;
      const _component_MyOrdersUploadImgForm = _sfc_main$2;
      const _component_UiDropdownMenu = _sfc_main$3$1;
      const _component_UiDropdownMenuTrigger = _sfc_main$2$1;
      const _component_UiDropdownMenuContent = _sfc_main$1$2;
      const _component_UiDropdownMenuLabel = _sfc_main$1$3;
      const _component_UiSeparator = _sfc_main$j;
      const _component_UiDropdownMenuRadioGroup = _sfc_main$1$4;
      const _component_UiDropdownMenuRadioItem = _sfc_main$k;
      const _component_UiCardFooter = _sfc_main$l;
      _push(ssrRenderComponent(_component_UiCard, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UiCardHeader, { class: "bg-slate-50 p-2 pl-4" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UiCardTitle, { class: "text-base flex w-full" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_MyOrdersOrderFormModal, {
                          order: unref(order),
                          class: "mr-2 justify-between",
                          onOrderEdited: getOrder
                        }, null, _parent4, _scopeId3));
                        _push4(` ${ssrInterpolate(unref(order).title)} <div class="ml-[auto]"${_scopeId3}>`);
                        _push4(ssrRenderComponent(_component_UiButton, {
                          class: "ml-[auto] w-6 h-6 p-0",
                          onClick: () => deleteOrder()
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_Icon, {
                                name: "mi:delete",
                                color: "white",
                                size: "18px"
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_Icon, {
                                  name: "mi:delete",
                                  color: "white",
                                  size: "18px"
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`</div>`);
                      } else {
                        return [
                          createVNode(_component_MyOrdersOrderFormModal, {
                            order: unref(order),
                            class: "mr-2 justify-between",
                            onOrderEdited: getOrder
                          }, null, 8, ["order"]),
                          createTextVNode(" " + toDisplayString(unref(order).title) + " ", 1),
                          createVNode("div", { class: "ml-[auto]" }, [
                            createVNode(_component_UiButton, {
                              class: "ml-[auto] w-6 h-6 p-0",
                              onClick: () => deleteOrder()
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_Icon, {
                                  name: "mi:delete",
                                  color: "white",
                                  size: "18px"
                                })
                              ]),
                              _: 1
                            }, 8, ["onClick"])
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UiCardDescription, { class: "flex items-center gap-2" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      var _a, _b;
                      if (_push4) {
                        _push4(` \u0421\u0442\u0430\u0442\u0443\u0441: ${ssrInterpolate((_a = __props.stages.find((s) => s.id === unref(order).stageId)) == null ? void 0 : _a.title)}`);
                      } else {
                        return [
                          createTextVNode(" \u0421\u0442\u0430\u0442\u0443\u0441: " + toDisplayString((_b = __props.stages.find((s) => s.id === unref(order).stageId)) == null ? void 0 : _b.title), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UiCardTitle, { class: "text-base flex w-full" }, {
                      default: withCtx(() => [
                        createVNode(_component_MyOrdersOrderFormModal, {
                          order: unref(order),
                          class: "mr-2 justify-between",
                          onOrderEdited: getOrder
                        }, null, 8, ["order"]),
                        createTextVNode(" " + toDisplayString(unref(order).title) + " ", 1),
                        createVNode("div", { class: "ml-[auto]" }, [
                          createVNode(_component_UiButton, {
                            class: "ml-[auto] w-6 h-6 p-0",
                            onClick: () => deleteOrder()
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_Icon, {
                                name: "mi:delete",
                                color: "white",
                                size: "18px"
                              })
                            ]),
                            _: 1
                          }, 8, ["onClick"])
                        ])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_UiCardDescription, { class: "flex items-center gap-2" }, {
                      default: withCtx(() => {
                        var _a;
                        return [
                          createTextVNode(" \u0421\u0442\u0430\u0442\u0443\u0441: " + toDisplayString((_a = __props.stages.find((s) => s.id === unref(order).stageId)) == null ? void 0 : _a.title), 1)
                        ];
                      }),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UiCardContent, { class: "flex gap-2 p-2 flex-col" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                var _a, _b, _c, _d, _e, _f, _g, _h;
                if (_push3) {
                  if (unref(imgs).length) {
                    _push3(ssrRenderComponent(_component_UiCarousel, null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_UiCarouselContent, null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<!--[-->`);
                                ssrRenderList(unref(imgs), (img, index) => {
                                  _push5(ssrRenderComponent(_component_UiCarouselItem, {
                                    key: index,
                                    class: "relative flex flex-col items-center"
                                  }, {
                                    default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                      var _a2, _b2;
                                      if (_push6) {
                                        _push6(ssrRenderComponent(_component_NuxtImg, {
                                          src: img.url,
                                          alt: "prev.name",
                                          class: "rounded-t-md cursor-pointer",
                                          onClick: ($event) => openInNewWindow(img.url)
                                        }, null, _parent6, _scopeId5));
                                        _push6(`<div class="flex w-full items-center justify-center py-1 gap-2 bg-zinc-200 rounded-b-md"${_scopeId5}><div${_scopeId5}>\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u043B: ${ssrInterpolate(((_a2 = img.user) == null ? void 0 : _a2.fullName) || "")}</div>`);
                                        _push6(ssrRenderComponent(_component_UiButton, {
                                          class: "w-5 h-5 p-0",
                                          variant: "destructive",
                                          onClick: () => deleteImg(img.id)
                                        }, {
                                          default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                            if (_push7) {
                                              _push7(ssrRenderComponent(_component_Icon, {
                                                name: "streamline:delete-1-solid",
                                                color: "",
                                                size: "11px"
                                              }, null, _parent7, _scopeId6));
                                            } else {
                                              return [
                                                createVNode(_component_Icon, {
                                                  name: "streamline:delete-1-solid",
                                                  color: "",
                                                  size: "11px"
                                                })
                                              ];
                                            }
                                          }),
                                          _: 2
                                        }, _parent6, _scopeId5));
                                        _push6(`</div>`);
                                      } else {
                                        return [
                                          createVNode(_component_NuxtImg, {
                                            src: img.url,
                                            alt: "prev.name",
                                            class: "rounded-t-md cursor-pointer",
                                            onClick: ($event) => openInNewWindow(img.url)
                                          }, null, 8, ["src", "onClick"]),
                                          createVNode("div", { class: "flex w-full items-center justify-center py-1 gap-2 bg-zinc-200 rounded-b-md" }, [
                                            createVNode("div", null, "\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u043B: " + toDisplayString(((_b2 = img.user) == null ? void 0 : _b2.fullName) || ""), 1),
                                            createVNode(_component_UiButton, {
                                              class: "w-5 h-5 p-0",
                                              variant: "destructive",
                                              onClick: () => deleteImg(img.id)
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(_component_Icon, {
                                                  name: "streamline:delete-1-solid",
                                                  color: "",
                                                  size: "11px"
                                                })
                                              ]),
                                              _: 2
                                            }, 1032, ["onClick"])
                                          ])
                                        ];
                                      }
                                    }),
                                    _: 2
                                  }, _parent5, _scopeId4));
                                });
                                _push5(`<!--]-->`);
                              } else {
                                return [
                                  (openBlock(true), createBlock(Fragment, null, renderList(unref(imgs), (img, index) => {
                                    return openBlock(), createBlock(_component_UiCarouselItem, {
                                      key: index,
                                      class: "relative flex flex-col items-center"
                                    }, {
                                      default: withCtx(() => {
                                        var _a2;
                                        return [
                                          createVNode(_component_NuxtImg, {
                                            src: img.url,
                                            alt: "prev.name",
                                            class: "rounded-t-md cursor-pointer",
                                            onClick: ($event) => openInNewWindow(img.url)
                                          }, null, 8, ["src", "onClick"]),
                                          createVNode("div", { class: "flex w-full items-center justify-center py-1 gap-2 bg-zinc-200 rounded-b-md" }, [
                                            createVNode("div", null, "\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u043B: " + toDisplayString(((_a2 = img.user) == null ? void 0 : _a2.fullName) || ""), 1),
                                            createVNode(_component_UiButton, {
                                              class: "w-5 h-5 p-0",
                                              variant: "destructive",
                                              onClick: () => deleteImg(img.id)
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(_component_Icon, {
                                                  name: "streamline:delete-1-solid",
                                                  color: "",
                                                  size: "11px"
                                                })
                                              ]),
                                              _: 2
                                            }, 1032, ["onClick"])
                                          ])
                                        ];
                                      }),
                                      _: 2
                                    }, 1024);
                                  }), 128))
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_component_UiCarouselPrevious, { class: "ml-[50px]" }, null, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_component_UiCarouselNext, { class: "mr-[50px]" }, null, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_UiCarouselContent, null, {
                              default: withCtx(() => [
                                (openBlock(true), createBlock(Fragment, null, renderList(unref(imgs), (img, index) => {
                                  return openBlock(), createBlock(_component_UiCarouselItem, {
                                    key: index,
                                    class: "relative flex flex-col items-center"
                                  }, {
                                    default: withCtx(() => {
                                      var _a2;
                                      return [
                                        createVNode(_component_NuxtImg, {
                                          src: img.url,
                                          alt: "prev.name",
                                          class: "rounded-t-md cursor-pointer",
                                          onClick: ($event) => openInNewWindow(img.url)
                                        }, null, 8, ["src", "onClick"]),
                                        createVNode("div", { class: "flex w-full items-center justify-center py-1 gap-2 bg-zinc-200 rounded-b-md" }, [
                                          createVNode("div", null, "\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u043B: " + toDisplayString(((_a2 = img.user) == null ? void 0 : _a2.fullName) || ""), 1),
                                          createVNode(_component_UiButton, {
                                            class: "w-5 h-5 p-0",
                                            variant: "destructive",
                                            onClick: () => deleteImg(img.id)
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(_component_Icon, {
                                                name: "streamline:delete-1-solid",
                                                color: "",
                                                size: "11px"
                                              })
                                            ]),
                                            _: 2
                                          }, 1032, ["onClick"])
                                        ])
                                      ];
                                    }),
                                    _: 2
                                  }, 1024);
                                }), 128))
                              ]),
                              _: 1
                            }),
                            createVNode(_component_UiCarouselPrevious, { class: "ml-[50px]" }),
                            createVNode(_component_UiCarouselNext, { class: "mr-[50px]" })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                  if (unref(imgs).length) {
                    _push3(`<div class="font-semibold"${_scopeId2}> \u0417\u0430\u0433\u0440\u0443\u0436\u0435\u043D\u043E ${ssrInterpolate(unref(imgs).length)} \u0444\u043E\u0442\u043E </div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(ssrRenderComponent(_component_MyOrdersUploadImgForm, {
                    order: unref(order),
                    onFileUploaded: getImg
                  }, null, _parent3, _scopeId2));
                  _push3(`<div class="flex gap-2 flex-col"${_scopeId2}><div class="gap-3 flex-1 border p-2 rounded-md"${_scopeId2}><div class="font-semibold pb-2"${_scopeId2}>\u0417\u0430\u0434\u0430\u043D\u0438\u0435 \u043D\u0430 \u0444\u0440\u0435\u0437\u0435\u0440\u043E\u0432\u043A\u0443</div><ul class="text-gray-600"${_scopeId2}><li${_scopeId2}>\u041C\u0430\u0442\u0435\u0440\u0438\u0430\u043B: ${ssrInterpolate(unref(order).material)}</li><li${_scopeId2}>\u0420\u0430\u0437\u043C\u0435\u0440\u044B: ${ssrInterpolate(unref(order).boardHeight)}/${ssrInterpolate(unref(order).boardWidth)} \u0441\u043C</li><li${_scopeId2}>\u041E\u0442\u0432\u0435\u0440\u0441\u0442\u0438\u044F: ${ssrInterpolate(unref(order).holeType)}</li><li${_scopeId2}>\u041F\u043E\u0434\u0441\u0442\u0430\u0432\u043A\u0430: ${ssrInterpolate(unref(order).stand ? "\u0414\u0430" : "\u041D\u0435\u0442")}</li><li${_scopeId2}> \u041F\u0430\u0437 8\u043C\u043C: ${ssrInterpolate(unref(order).neons.find((n) => n.width === "8\u043C\u043C") ? "\u0414\u0430" : "\u041D\u0435\u0442")}</li><li${_scopeId2}> \u0418\u0441\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C: ${ssrInterpolate(((_a = unref(order).frezer) == null ? void 0 : _a.fullName) || "")} `);
                  if (unref(isIdPage)) {
                    _push3(ssrRenderComponent(_component_UiDropdownMenu, null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_UiDropdownMenuTrigger, { "as-child": "" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_UiButton, {
                                  size: "icon",
                                  class: "h-6 w-6"
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(_component_Icon, {
                                        name: "mingcute:edit-line",
                                        color: "white",
                                        size: "20px"
                                      }, null, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(_component_Icon, {
                                          name: "mingcute:edit-line",
                                          color: "white",
                                          size: "20px"
                                        })
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(_component_UiButton, {
                                    size: "icon",
                                    class: "h-6 w-6"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_Icon, {
                                        name: "mingcute:edit-line",
                                        color: "white",
                                        size: "20px"
                                      })
                                    ]),
                                    _: 1
                                  })
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_component_UiDropdownMenuContent, null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_UiDropdownMenuLabel, { class: "text-center" }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`\u041D\u0430\u0437\u043D\u0430\u0447\u0438\u0442\u044C `);
                                    } else {
                                      return [
                                        createTextVNode("\u041D\u0430\u0437\u043D\u0430\u0447\u0438\u0442\u044C ")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                                _push5(ssrRenderComponent(_component_UiSeparator, null, null, _parent5, _scopeId4));
                                _push5(ssrRenderComponent(_component_UiDropdownMenuRadioGroup, null, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`<!--[-->`);
                                      ssrRenderList(__props.workers, (worker) => {
                                        _push6(ssrRenderComponent(_component_UiDropdownMenuRadioItem, {
                                          key: worker.id,
                                          value: worker.fullName,
                                          onClick: ($event) => setFrezer(unref(order).id, worker.id)
                                        }, {
                                          default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                            if (_push7) {
                                              _push7(`${ssrInterpolate(worker.fullName)} - ${ssrInterpolate(worker.role.fullName)}`);
                                            } else {
                                              return [
                                                createTextVNode(toDisplayString(worker.fullName) + " - " + toDisplayString(worker.role.fullName), 1)
                                              ];
                                            }
                                          }),
                                          _: 2
                                        }, _parent6, _scopeId5));
                                      });
                                      _push6(`<!--]-->`);
                                    } else {
                                      return [
                                        (openBlock(true), createBlock(Fragment, null, renderList(__props.workers, (worker) => {
                                          return openBlock(), createBlock(_component_UiDropdownMenuRadioItem, {
                                            key: worker.id,
                                            value: worker.fullName,
                                            onClick: ($event) => setFrezer(unref(order).id, worker.id)
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(worker.fullName) + " - " + toDisplayString(worker.role.fullName), 1)
                                            ]),
                                            _: 2
                                          }, 1032, ["value", "onClick"]);
                                        }), 128))
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(_component_UiDropdownMenuLabel, { class: "text-center" }, {
                                    default: withCtx(() => [
                                      createTextVNode("\u041D\u0430\u0437\u043D\u0430\u0447\u0438\u0442\u044C ")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_UiSeparator),
                                  createVNode(_component_UiDropdownMenuRadioGroup, null, {
                                    default: withCtx(() => [
                                      (openBlock(true), createBlock(Fragment, null, renderList(__props.workers, (worker) => {
                                        return openBlock(), createBlock(_component_UiDropdownMenuRadioItem, {
                                          key: worker.id,
                                          value: worker.fullName,
                                          onClick: ($event) => setFrezer(unref(order).id, worker.id)
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(worker.fullName) + " - " + toDisplayString(worker.role.fullName), 1)
                                          ]),
                                          _: 2
                                        }, 1032, ["value", "onClick"]);
                                      }), 128))
                                    ]),
                                    _: 1
                                  })
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_UiDropdownMenuTrigger, { "as-child": "" }, {
                              default: withCtx(() => [
                                createVNode(_component_UiButton, {
                                  size: "icon",
                                  class: "h-6 w-6"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_Icon, {
                                      name: "mingcute:edit-line",
                                      color: "white",
                                      size: "20px"
                                    })
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(_component_UiDropdownMenuContent, null, {
                              default: withCtx(() => [
                                createVNode(_component_UiDropdownMenuLabel, { class: "text-center" }, {
                                  default: withCtx(() => [
                                    createTextVNode("\u041D\u0430\u0437\u043D\u0430\u0447\u0438\u0442\u044C ")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_UiSeparator),
                                createVNode(_component_UiDropdownMenuRadioGroup, null, {
                                  default: withCtx(() => [
                                    (openBlock(true), createBlock(Fragment, null, renderList(__props.workers, (worker) => {
                                      return openBlock(), createBlock(_component_UiDropdownMenuRadioItem, {
                                        key: worker.id,
                                        value: worker.fullName,
                                        onClick: ($event) => setFrezer(unref(order).id, worker.id)
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(worker.fullName) + " - " + toDisplayString(worker.role.fullName), 1)
                                        ]),
                                        _: 2
                                      }, 1032, ["value", "onClick"]);
                                    }), 128))
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
                    }, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                  if (!unref(isIdPage) && !unref(order).frezer) {
                    _push3(ssrRenderComponent(_component_UiButton, {
                      class: "p-1.5 h-4",
                      onClick: () => takeOrder("frezer")
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(` \u0412\u044B\u043F\u043E\u043B\u043D\u0438\u0442\u044C \u0437\u0430\u043A\u0430\u0437 `);
                        } else {
                          return [
                            createTextVNode(" \u0412\u044B\u043F\u043E\u043B\u043D\u0438\u0442\u044C \u0437\u0430\u043A\u0430\u0437 ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`</li></ul></div><div class="gap-3 flex-1 border p-2 rounded-md"${_scopeId2}><div class="font-semibold pb-2"${_scopeId2}>\u0417\u0430\u0434\u0430\u043D\u0438\u0435 \u043D\u0430 \u043F\u043B\u0435\u043D\u043A\u0443</div><ul class="text-gray-600"${_scopeId2}><li${_scopeId2}>\u041F\u043B\u0435\u043D\u043A\u0430: ${ssrInterpolate(unref(order).laminate || "\u041D\u0435\u0442")}</li><li${_scopeId2}>\u0410\u043A\u0440\u0438\u043B: ${ssrInterpolate(unref(order).acrylic || "\u041D\u0435\u0442")}</li><li${_scopeId2}>\u041F\u0435\u0447\u0430\u0442\u044C: ${ssrInterpolate(unref(order).print ? "\u0414\u0430" : "\u041D\u0435\u0442")}</li>`);
                  if (unref(order).print) {
                    _push3(`<li${_scopeId2}> \u041A\u0430\u0447\u0435\u0441\u0442\u0432\u043E: ${ssrInterpolate(unref(order).printQuality ? "\u0421\u043E\u0433\u043B\u0430\u0441\u043E\u0432\u0430\u043D\u043E" : "\u041D\u0435 \u0441\u043E\u0433\u043B\u0430\u0441\u043E\u0432\u0430\u043D\u043E")}</li>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`<li${_scopeId2}> \u0418\u0441\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C: ${ssrInterpolate((_b = unref(order).laminater) == null ? void 0 : _b.fullName)} `);
                  if (unref(isIdPage)) {
                    _push3(ssrRenderComponent(_component_UiDropdownMenu, null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_UiDropdownMenuTrigger, { "as-child": "" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_UiButton, {
                                  size: "icon",
                                  class: "h-6 w-6"
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(_component_Icon, {
                                        name: "mingcute:edit-line",
                                        color: "white",
                                        size: "20px"
                                      }, null, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(_component_Icon, {
                                          name: "mingcute:edit-line",
                                          color: "white",
                                          size: "20px"
                                        })
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(_component_UiButton, {
                                    size: "icon",
                                    class: "h-6 w-6"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_Icon, {
                                        name: "mingcute:edit-line",
                                        color: "white",
                                        size: "20px"
                                      })
                                    ]),
                                    _: 1
                                  })
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_component_UiDropdownMenuContent, null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_UiDropdownMenuLabel, { class: "text-center" }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`\u041D\u0430\u0437\u043D\u0430\u0447\u0438\u0442\u044C `);
                                    } else {
                                      return [
                                        createTextVNode("\u041D\u0430\u0437\u043D\u0430\u0447\u0438\u0442\u044C ")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                                _push5(ssrRenderComponent(_component_UiSeparator, null, null, _parent5, _scopeId4));
                                _push5(ssrRenderComponent(_component_UiDropdownMenuRadioGroup, null, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`<!--[-->`);
                                      ssrRenderList(__props.workers, (worker) => {
                                        _push6(ssrRenderComponent(_component_UiDropdownMenuRadioItem, {
                                          key: worker.id,
                                          value: worker.fullName,
                                          onClick: ($event) => setLaminater(unref(order).id, worker.id)
                                        }, {
                                          default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                            if (_push7) {
                                              _push7(`${ssrInterpolate(worker.fullName)}`);
                                            } else {
                                              return [
                                                createTextVNode(toDisplayString(worker.fullName), 1)
                                              ];
                                            }
                                          }),
                                          _: 2
                                        }, _parent6, _scopeId5));
                                      });
                                      _push6(`<!--]-->`);
                                    } else {
                                      return [
                                        (openBlock(true), createBlock(Fragment, null, renderList(__props.workers, (worker) => {
                                          return openBlock(), createBlock(_component_UiDropdownMenuRadioItem, {
                                            key: worker.id,
                                            value: worker.fullName,
                                            onClick: ($event) => setLaminater(unref(order).id, worker.id)
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(worker.fullName), 1)
                                            ]),
                                            _: 2
                                          }, 1032, ["value", "onClick"]);
                                        }), 128))
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(_component_UiDropdownMenuLabel, { class: "text-center" }, {
                                    default: withCtx(() => [
                                      createTextVNode("\u041D\u0430\u0437\u043D\u0430\u0447\u0438\u0442\u044C ")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_UiSeparator),
                                  createVNode(_component_UiDropdownMenuRadioGroup, null, {
                                    default: withCtx(() => [
                                      (openBlock(true), createBlock(Fragment, null, renderList(__props.workers, (worker) => {
                                        return openBlock(), createBlock(_component_UiDropdownMenuRadioItem, {
                                          key: worker.id,
                                          value: worker.fullName,
                                          onClick: ($event) => setLaminater(unref(order).id, worker.id)
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(worker.fullName), 1)
                                          ]),
                                          _: 2
                                        }, 1032, ["value", "onClick"]);
                                      }), 128))
                                    ]),
                                    _: 1
                                  })
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_UiDropdownMenuTrigger, { "as-child": "" }, {
                              default: withCtx(() => [
                                createVNode(_component_UiButton, {
                                  size: "icon",
                                  class: "h-6 w-6"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_Icon, {
                                      name: "mingcute:edit-line",
                                      color: "white",
                                      size: "20px"
                                    })
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(_component_UiDropdownMenuContent, null, {
                              default: withCtx(() => [
                                createVNode(_component_UiDropdownMenuLabel, { class: "text-center" }, {
                                  default: withCtx(() => [
                                    createTextVNode("\u041D\u0430\u0437\u043D\u0430\u0447\u0438\u0442\u044C ")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_UiSeparator),
                                createVNode(_component_UiDropdownMenuRadioGroup, null, {
                                  default: withCtx(() => [
                                    (openBlock(true), createBlock(Fragment, null, renderList(__props.workers, (worker) => {
                                      return openBlock(), createBlock(_component_UiDropdownMenuRadioItem, {
                                        key: worker.id,
                                        value: worker.fullName,
                                        onClick: ($event) => setLaminater(unref(order).id, worker.id)
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(worker.fullName), 1)
                                        ]),
                                        _: 2
                                      }, 1032, ["value", "onClick"]);
                                    }), 128))
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
                    }, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                  if (!unref(isIdPage) && !unref(order).laminater) {
                    _push3(ssrRenderComponent(_component_UiButton, {
                      class: "p-1.5 h-4",
                      onClick: () => takeOrder("laminater")
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(` \u0412\u044B\u043F\u043E\u043B\u043D\u0438\u0442\u044C \u0437\u0430\u043A\u0430\u0437 `);
                        } else {
                          return [
                            createTextVNode(" \u0412\u044B\u043F\u043E\u043B\u043D\u0438\u0442\u044C \u0437\u0430\u043A\u0430\u0437 ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`</li></ul></div><div class="gap-3 flex-1 border p-2 rounded-md"${_scopeId2}><div class="font-semibold pb-2"${_scopeId2}>\u0417\u0430\u0434\u0430\u043D\u0438\u0435 \u043D\u0430 \u0441\u0431\u043E\u0440\u043A\u0443</div><ul class="text-gray-600"${_scopeId2}><li${_scopeId2}>\u041D\u0430\u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435: ${ssrInterpolate(unref(order).type)}</li><li${_scopeId2}>\u041F\u0440\u043E\u0432\u043E\u0434 \u043E\u0442 \u0432\u044B\u0432\u0435\u0441\u043A\u0438(\u0430\u043A\u0443\u0441\u0442\u0438\u043A\u0430): ${ssrInterpolate(unref(order).wireLength)}</li><li${_scopeId2}>\u041D\u0435\u043E\u043D:</li><!--[-->`);
                  ssrRenderList(unref(order).neons, (neon) => {
                    _push3(`<li class="pl-3"${_scopeId2}> - <span${_scopeId2}>${ssrInterpolate(neon.color)}(${ssrInterpolate(neon.width)}) / ${ssrInterpolate(neon.length)}\u0441\u043C </span>`);
                    if (neon.width === "\u041F\u043E\u0434\u0441\u0432\u0435\u0442\u043A\u0430") {
                      _push3(`<span${_scopeId2}>${ssrInterpolate(neon.elements)}(\u044D\u043B).</span>`);
                    } else {
                      _push3(`<!---->`);
                    }
                    _push3(`</li>`);
                  });
                  _push3(`<!--]--><li${_scopeId2}>\u042D\u043B\u0435\u043C\u0435\u043D\u0442\u044B: ${ssrInterpolate(unref(order).elements)}</li><li${_scopeId2}>\u041F\u043E\u0434\u0430\u0440\u043E\u043A: ${ssrInterpolate(unref(order).gift ? "\u0414\u0430" : "\u041D\u0435\u0442")}</li><li${_scopeId2}> \u0418\u0441\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C: ${ssrInterpolate((_c = unref(order).master) == null ? void 0 : _c.fullName)} `);
                  if (unref(isIdPage)) {
                    _push3(ssrRenderComponent(_component_UiDropdownMenu, null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_UiDropdownMenuTrigger, { "as-child": "" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_UiButton, {
                                  size: "icon",
                                  class: "h-6 w-6"
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(_component_Icon, {
                                        name: "mingcute:edit-line",
                                        color: "white",
                                        size: "20px"
                                      }, null, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(_component_Icon, {
                                          name: "mingcute:edit-line",
                                          color: "white",
                                          size: "20px"
                                        })
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(_component_UiButton, {
                                    size: "icon",
                                    class: "h-6 w-6"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_Icon, {
                                        name: "mingcute:edit-line",
                                        color: "white",
                                        size: "20px"
                                      })
                                    ]),
                                    _: 1
                                  })
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_component_UiDropdownMenuContent, null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_UiDropdownMenuLabel, { class: "text-center" }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`\u041D\u0430\u0437\u043D\u0430\u0447\u0438\u0442\u044C `);
                                    } else {
                                      return [
                                        createTextVNode("\u041D\u0430\u0437\u043D\u0430\u0447\u0438\u0442\u044C ")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                                _push5(ssrRenderComponent(_component_UiSeparator, null, null, _parent5, _scopeId4));
                                _push5(ssrRenderComponent(_component_UiDropdownMenuRadioGroup, null, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`<!--[-->`);
                                      ssrRenderList(__props.workers, (worker) => {
                                        _push6(ssrRenderComponent(_component_UiDropdownMenuRadioItem, {
                                          key: worker.id,
                                          value: worker.fullName,
                                          onClick: ($event) => setMaster(unref(order).id, worker.id)
                                        }, {
                                          default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                            if (_push7) {
                                              _push7(`${ssrInterpolate(worker.fullName)}`);
                                            } else {
                                              return [
                                                createTextVNode(toDisplayString(worker.fullName), 1)
                                              ];
                                            }
                                          }),
                                          _: 2
                                        }, _parent6, _scopeId5));
                                      });
                                      _push6(`<!--]-->`);
                                    } else {
                                      return [
                                        (openBlock(true), createBlock(Fragment, null, renderList(__props.workers, (worker) => {
                                          return openBlock(), createBlock(_component_UiDropdownMenuRadioItem, {
                                            key: worker.id,
                                            value: worker.fullName,
                                            onClick: ($event) => setMaster(unref(order).id, worker.id)
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(worker.fullName), 1)
                                            ]),
                                            _: 2
                                          }, 1032, ["value", "onClick"]);
                                        }), 128))
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(_component_UiDropdownMenuLabel, { class: "text-center" }, {
                                    default: withCtx(() => [
                                      createTextVNode("\u041D\u0430\u0437\u043D\u0430\u0447\u0438\u0442\u044C ")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_UiSeparator),
                                  createVNode(_component_UiDropdownMenuRadioGroup, null, {
                                    default: withCtx(() => [
                                      (openBlock(true), createBlock(Fragment, null, renderList(__props.workers, (worker) => {
                                        return openBlock(), createBlock(_component_UiDropdownMenuRadioItem, {
                                          key: worker.id,
                                          value: worker.fullName,
                                          onClick: ($event) => setMaster(unref(order).id, worker.id)
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(worker.fullName), 1)
                                          ]),
                                          _: 2
                                        }, 1032, ["value", "onClick"]);
                                      }), 128))
                                    ]),
                                    _: 1
                                  })
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_UiDropdownMenuTrigger, { "as-child": "" }, {
                              default: withCtx(() => [
                                createVNode(_component_UiButton, {
                                  size: "icon",
                                  class: "h-6 w-6"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_Icon, {
                                      name: "mingcute:edit-line",
                                      color: "white",
                                      size: "20px"
                                    })
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(_component_UiDropdownMenuContent, null, {
                              default: withCtx(() => [
                                createVNode(_component_UiDropdownMenuLabel, { class: "text-center" }, {
                                  default: withCtx(() => [
                                    createTextVNode("\u041D\u0430\u0437\u043D\u0430\u0447\u0438\u0442\u044C ")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_UiSeparator),
                                createVNode(_component_UiDropdownMenuRadioGroup, null, {
                                  default: withCtx(() => [
                                    (openBlock(true), createBlock(Fragment, null, renderList(__props.workers, (worker) => {
                                      return openBlock(), createBlock(_component_UiDropdownMenuRadioItem, {
                                        key: worker.id,
                                        value: worker.fullName,
                                        onClick: ($event) => setMaster(unref(order).id, worker.id)
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(worker.fullName), 1)
                                        ]),
                                        _: 2
                                      }, 1032, ["value", "onClick"]);
                                    }), 128))
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
                    }, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                  if (!unref(isIdPage) && !unref(order).master) {
                    _push3(ssrRenderComponent(_component_UiButton, {
                      class: "p-1.5 h-4",
                      onClick: () => takeOrder("master")
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(` \u0412\u044B\u043F\u043E\u043B\u043D\u0438\u0442\u044C \u0437\u0430\u043A\u0430\u0437 `);
                        } else {
                          return [
                            createTextVNode(" \u0412\u044B\u043F\u043E\u043B\u043D\u0438\u0442\u044C \u0437\u0430\u043A\u0430\u0437 ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`</li></ul></div><div class="gap-3 flex-1 border p-2 rounded-md"${_scopeId2}><div class="font-semibold pb-2"${_scopeId2}>\u0417\u0430\u0434\u0430\u043D\u0438\u0435 \u043D\u0430 \u0443\u043F\u0430\u043A\u043E\u0432\u043A\u0443</div><ul class="text-gray-600"${_scopeId2}><li${_scopeId2}>\u0422\u0438\u043F \u0431\u043B\u043E\u043A\u0430: ${ssrInterpolate(unref(order).adapter)}</li><li${_scopeId2}>\u041F\u0440\u043E\u0432\u043E\u0434 \u043E\u0442 \u0431\u043B\u043E\u043A\u0430: ${ssrInterpolate(unref(order).plug)}</li><li${_scopeId2}>\u041A\u0440\u0435\u043F\u043B\u0435\u043D\u0438\u044F: ${ssrInterpolate(unref(order).fitting)}</li><li${_scopeId2}>\u0414\u0438\u043C\u043C\u0435\u0440: ${ssrInterpolate(unref(order).dimmer ? "\u0414\u0430" : "\u041D\u0435\u0442")}</li><li${_scopeId2}>\u041F\u043E\u0434\u0430\u0440\u043E\u0447\u043D\u0430\u044F \u0443\u043F\u0430\u043A\u043E\u0432\u043A\u0430: ${ssrInterpolate(unref(order).giftPack ? "\u0414\u0430" : "\u041D\u0435\u0442")}</li><li${_scopeId2}>\u041F\u043E\u0434\u0430\u0440\u043E\u043A: ${ssrInterpolate(unref(order).gift ? "\u0414\u0430" : "\u041D\u0435\u0442")}</li><li${_scopeId2}> \u0418\u0441\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C: ${ssrInterpolate((_d = unref(order).packer) == null ? void 0 : _d.fullName)} `);
                  if (unref(isIdPage)) {
                    _push3(ssrRenderComponent(_component_UiDropdownMenu, null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_UiDropdownMenuTrigger, { "as-child": "" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_UiButton, {
                                  size: "icon",
                                  class: "h-6 w-6"
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(_component_Icon, {
                                        name: "mingcute:edit-line",
                                        color: "white",
                                        size: "20px"
                                      }, null, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(_component_Icon, {
                                          name: "mingcute:edit-line",
                                          color: "white",
                                          size: "20px"
                                        })
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(_component_UiButton, {
                                    size: "icon",
                                    class: "h-6 w-6"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_Icon, {
                                        name: "mingcute:edit-line",
                                        color: "white",
                                        size: "20px"
                                      })
                                    ]),
                                    _: 1
                                  })
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_component_UiDropdownMenuContent, null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_UiDropdownMenuLabel, { class: "text-center" }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`\u041D\u0430\u0437\u043D\u0430\u0447\u0438\u0442\u044C `);
                                    } else {
                                      return [
                                        createTextVNode("\u041D\u0430\u0437\u043D\u0430\u0447\u0438\u0442\u044C ")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                                _push5(ssrRenderComponent(_component_UiSeparator, null, null, _parent5, _scopeId4));
                                _push5(ssrRenderComponent(_component_UiDropdownMenuRadioGroup, null, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`<!--[-->`);
                                      ssrRenderList(__props.workers, (worker) => {
                                        _push6(ssrRenderComponent(_component_UiDropdownMenuRadioItem, {
                                          key: worker.id,
                                          value: worker.fullName,
                                          onClick: ($event) => setPacker(unref(order).id, worker.id)
                                        }, {
                                          default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                            if (_push7) {
                                              _push7(`${ssrInterpolate(worker.fullName)}`);
                                            } else {
                                              return [
                                                createTextVNode(toDisplayString(worker.fullName), 1)
                                              ];
                                            }
                                          }),
                                          _: 2
                                        }, _parent6, _scopeId5));
                                      });
                                      _push6(`<!--]-->`);
                                    } else {
                                      return [
                                        (openBlock(true), createBlock(Fragment, null, renderList(__props.workers, (worker) => {
                                          return openBlock(), createBlock(_component_UiDropdownMenuRadioItem, {
                                            key: worker.id,
                                            value: worker.fullName,
                                            onClick: ($event) => setPacker(unref(order).id, worker.id)
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(worker.fullName), 1)
                                            ]),
                                            _: 2
                                          }, 1032, ["value", "onClick"]);
                                        }), 128))
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(_component_UiDropdownMenuLabel, { class: "text-center" }, {
                                    default: withCtx(() => [
                                      createTextVNode("\u041D\u0430\u0437\u043D\u0430\u0447\u0438\u0442\u044C ")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_UiSeparator),
                                  createVNode(_component_UiDropdownMenuRadioGroup, null, {
                                    default: withCtx(() => [
                                      (openBlock(true), createBlock(Fragment, null, renderList(__props.workers, (worker) => {
                                        return openBlock(), createBlock(_component_UiDropdownMenuRadioItem, {
                                          key: worker.id,
                                          value: worker.fullName,
                                          onClick: ($event) => setPacker(unref(order).id, worker.id)
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(worker.fullName), 1)
                                          ]),
                                          _: 2
                                        }, 1032, ["value", "onClick"]);
                                      }), 128))
                                    ]),
                                    _: 1
                                  })
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_UiDropdownMenuTrigger, { "as-child": "" }, {
                              default: withCtx(() => [
                                createVNode(_component_UiButton, {
                                  size: "icon",
                                  class: "h-6 w-6"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_Icon, {
                                      name: "mingcute:edit-line",
                                      color: "white",
                                      size: "20px"
                                    })
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(_component_UiDropdownMenuContent, null, {
                              default: withCtx(() => [
                                createVNode(_component_UiDropdownMenuLabel, { class: "text-center" }, {
                                  default: withCtx(() => [
                                    createTextVNode("\u041D\u0430\u0437\u043D\u0430\u0447\u0438\u0442\u044C ")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_UiSeparator),
                                createVNode(_component_UiDropdownMenuRadioGroup, null, {
                                  default: withCtx(() => [
                                    (openBlock(true), createBlock(Fragment, null, renderList(__props.workers, (worker) => {
                                      return openBlock(), createBlock(_component_UiDropdownMenuRadioItem, {
                                        key: worker.id,
                                        value: worker.fullName,
                                        onClick: ($event) => setPacker(unref(order).id, worker.id)
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(worker.fullName), 1)
                                        ]),
                                        _: 2
                                      }, 1032, ["value", "onClick"]);
                                    }), 128))
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
                    }, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                  if (!unref(isIdPage) && !unref(order).packer) {
                    _push3(ssrRenderComponent(_component_UiButton, {
                      class: "p-1.5 h-4",
                      onClick: () => takeOrder("packer")
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(` \u0412\u044B\u043F\u043E\u043B\u043D\u0438\u0442\u044C \u0437\u0430\u043A\u0430\u0437 `);
                        } else {
                          return [
                            createTextVNode(" \u0412\u044B\u043F\u043E\u043B\u043D\u0438\u0442\u044C \u0437\u0430\u043A\u0430\u0437 ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`</li></ul></div>`);
                  if (unref(order).description) {
                    _push3(`<div class="gap-3 flex-1 border p-2 rounded-md"${_scopeId2}><div class="font-semibold pb-2"${_scopeId2}>\u0414\u043E\u043F. \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F</div><div class="text-gray-600"${_scopeId2}>${ssrInterpolate(unref(order).description)}</div></div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`</div>`);
                } else {
                  return [
                    unref(imgs).length ? (openBlock(), createBlock(_component_UiCarousel, { key: 0 }, {
                      default: withCtx(() => [
                        createVNode(_component_UiCarouselContent, null, {
                          default: withCtx(() => [
                            (openBlock(true), createBlock(Fragment, null, renderList(unref(imgs), (img, index) => {
                              return openBlock(), createBlock(_component_UiCarouselItem, {
                                key: index,
                                class: "relative flex flex-col items-center"
                              }, {
                                default: withCtx(() => {
                                  var _a2;
                                  return [
                                    createVNode(_component_NuxtImg, {
                                      src: img.url,
                                      alt: "prev.name",
                                      class: "rounded-t-md cursor-pointer",
                                      onClick: ($event) => openInNewWindow(img.url)
                                    }, null, 8, ["src", "onClick"]),
                                    createVNode("div", { class: "flex w-full items-center justify-center py-1 gap-2 bg-zinc-200 rounded-b-md" }, [
                                      createVNode("div", null, "\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u043B: " + toDisplayString(((_a2 = img.user) == null ? void 0 : _a2.fullName) || ""), 1),
                                      createVNode(_component_UiButton, {
                                        class: "w-5 h-5 p-0",
                                        variant: "destructive",
                                        onClick: () => deleteImg(img.id)
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_Icon, {
                                            name: "streamline:delete-1-solid",
                                            color: "",
                                            size: "11px"
                                          })
                                        ]),
                                        _: 2
                                      }, 1032, ["onClick"])
                                    ])
                                  ];
                                }),
                                _: 2
                              }, 1024);
                            }), 128))
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UiCarouselPrevious, { class: "ml-[50px]" }),
                        createVNode(_component_UiCarouselNext, { class: "mr-[50px]" })
                      ]),
                      _: 1
                    })) : createCommentVNode("", true),
                    unref(imgs).length ? (openBlock(), createBlock("div", {
                      key: 1,
                      class: "font-semibold"
                    }, " \u0417\u0430\u0433\u0440\u0443\u0436\u0435\u043D\u043E " + toDisplayString(unref(imgs).length) + " \u0444\u043E\u0442\u043E ", 1)) : createCommentVNode("", true),
                    createVNode(_component_MyOrdersUploadImgForm, {
                      order: unref(order),
                      onFileUploaded: getImg
                    }, null, 8, ["order"]),
                    createVNode("div", { class: "flex gap-2 flex-col" }, [
                      createVNode("div", { class: "gap-3 flex-1 border p-2 rounded-md" }, [
                        createVNode("div", { class: "font-semibold pb-2" }, "\u0417\u0430\u0434\u0430\u043D\u0438\u0435 \u043D\u0430 \u0444\u0440\u0435\u0437\u0435\u0440\u043E\u0432\u043A\u0443"),
                        createVNode("ul", { class: "text-gray-600" }, [
                          createVNode("li", null, "\u041C\u0430\u0442\u0435\u0440\u0438\u0430\u043B: " + toDisplayString(unref(order).material), 1),
                          createVNode("li", null, "\u0420\u0430\u0437\u043C\u0435\u0440\u044B: " + toDisplayString(unref(order).boardHeight) + "/" + toDisplayString(unref(order).boardWidth) + " \u0441\u043C", 1),
                          createVNode("li", null, "\u041E\u0442\u0432\u0435\u0440\u0441\u0442\u0438\u044F: " + toDisplayString(unref(order).holeType), 1),
                          createVNode("li", null, "\u041F\u043E\u0434\u0441\u0442\u0430\u0432\u043A\u0430: " + toDisplayString(unref(order).stand ? "\u0414\u0430" : "\u041D\u0435\u0442"), 1),
                          createVNode("li", null, " \u041F\u0430\u0437 8\u043C\u043C: " + toDisplayString(unref(order).neons.find((n) => n.width === "8\u043C\u043C") ? "\u0414\u0430" : "\u041D\u0435\u0442"), 1),
                          createVNode("li", null, [
                            createTextVNode(" \u0418\u0441\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C: " + toDisplayString(((_e = unref(order).frezer) == null ? void 0 : _e.fullName) || "") + " ", 1),
                            unref(isIdPage) ? (openBlock(), createBlock(_component_UiDropdownMenu, { key: 0 }, {
                              default: withCtx(() => [
                                createVNode(_component_UiDropdownMenuTrigger, { "as-child": "" }, {
                                  default: withCtx(() => [
                                    createVNode(_component_UiButton, {
                                      size: "icon",
                                      class: "h-6 w-6"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_Icon, {
                                          name: "mingcute:edit-line",
                                          color: "white",
                                          size: "20px"
                                        })
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_UiDropdownMenuContent, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_UiDropdownMenuLabel, { class: "text-center" }, {
                                      default: withCtx(() => [
                                        createTextVNode("\u041D\u0430\u0437\u043D\u0430\u0447\u0438\u0442\u044C ")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_UiSeparator),
                                    createVNode(_component_UiDropdownMenuRadioGroup, null, {
                                      default: withCtx(() => [
                                        (openBlock(true), createBlock(Fragment, null, renderList(__props.workers, (worker) => {
                                          return openBlock(), createBlock(_component_UiDropdownMenuRadioItem, {
                                            key: worker.id,
                                            value: worker.fullName,
                                            onClick: ($event) => setFrezer(unref(order).id, worker.id)
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(worker.fullName) + " - " + toDisplayString(worker.role.fullName), 1)
                                            ]),
                                            _: 2
                                          }, 1032, ["value", "onClick"]);
                                        }), 128))
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            })) : createCommentVNode("", true),
                            !unref(isIdPage) && !unref(order).frezer ? (openBlock(), createBlock(_component_UiButton, {
                              key: 1,
                              class: "p-1.5 h-4",
                              onClick: () => takeOrder("frezer")
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" \u0412\u044B\u043F\u043E\u043B\u043D\u0438\u0442\u044C \u0437\u0430\u043A\u0430\u0437 ")
                              ]),
                              _: 1
                            }, 8, ["onClick"])) : createCommentVNode("", true)
                          ])
                        ])
                      ]),
                      createVNode("div", { class: "gap-3 flex-1 border p-2 rounded-md" }, [
                        createVNode("div", { class: "font-semibold pb-2" }, "\u0417\u0430\u0434\u0430\u043D\u0438\u0435 \u043D\u0430 \u043F\u043B\u0435\u043D\u043A\u0443"),
                        createVNode("ul", { class: "text-gray-600" }, [
                          createVNode("li", null, "\u041F\u043B\u0435\u043D\u043A\u0430: " + toDisplayString(unref(order).laminate || "\u041D\u0435\u0442"), 1),
                          createVNode("li", null, "\u0410\u043A\u0440\u0438\u043B: " + toDisplayString(unref(order).acrylic || "\u041D\u0435\u0442"), 1),
                          createVNode("li", null, "\u041F\u0435\u0447\u0430\u0442\u044C: " + toDisplayString(unref(order).print ? "\u0414\u0430" : "\u041D\u0435\u0442"), 1),
                          unref(order).print ? (openBlock(), createBlock("li", { key: 0 }, " \u041A\u0430\u0447\u0435\u0441\u0442\u0432\u043E: " + toDisplayString(unref(order).printQuality ? "\u0421\u043E\u0433\u043B\u0430\u0441\u043E\u0432\u0430\u043D\u043E" : "\u041D\u0435 \u0441\u043E\u0433\u043B\u0430\u0441\u043E\u0432\u0430\u043D\u043E"), 1)) : createCommentVNode("", true),
                          createVNode("li", null, [
                            createTextVNode(" \u0418\u0441\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C: " + toDisplayString((_f = unref(order).laminater) == null ? void 0 : _f.fullName) + " ", 1),
                            unref(isIdPage) ? (openBlock(), createBlock(_component_UiDropdownMenu, { key: 0 }, {
                              default: withCtx(() => [
                                createVNode(_component_UiDropdownMenuTrigger, { "as-child": "" }, {
                                  default: withCtx(() => [
                                    createVNode(_component_UiButton, {
                                      size: "icon",
                                      class: "h-6 w-6"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_Icon, {
                                          name: "mingcute:edit-line",
                                          color: "white",
                                          size: "20px"
                                        })
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_UiDropdownMenuContent, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_UiDropdownMenuLabel, { class: "text-center" }, {
                                      default: withCtx(() => [
                                        createTextVNode("\u041D\u0430\u0437\u043D\u0430\u0447\u0438\u0442\u044C ")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_UiSeparator),
                                    createVNode(_component_UiDropdownMenuRadioGroup, null, {
                                      default: withCtx(() => [
                                        (openBlock(true), createBlock(Fragment, null, renderList(__props.workers, (worker) => {
                                          return openBlock(), createBlock(_component_UiDropdownMenuRadioItem, {
                                            key: worker.id,
                                            value: worker.fullName,
                                            onClick: ($event) => setLaminater(unref(order).id, worker.id)
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(worker.fullName), 1)
                                            ]),
                                            _: 2
                                          }, 1032, ["value", "onClick"]);
                                        }), 128))
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            })) : createCommentVNode("", true),
                            !unref(isIdPage) && !unref(order).laminater ? (openBlock(), createBlock(_component_UiButton, {
                              key: 1,
                              class: "p-1.5 h-4",
                              onClick: () => takeOrder("laminater")
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" \u0412\u044B\u043F\u043E\u043B\u043D\u0438\u0442\u044C \u0437\u0430\u043A\u0430\u0437 ")
                              ]),
                              _: 1
                            }, 8, ["onClick"])) : createCommentVNode("", true)
                          ])
                        ])
                      ]),
                      createVNode("div", { class: "gap-3 flex-1 border p-2 rounded-md" }, [
                        createVNode("div", { class: "font-semibold pb-2" }, "\u0417\u0430\u0434\u0430\u043D\u0438\u0435 \u043D\u0430 \u0441\u0431\u043E\u0440\u043A\u0443"),
                        createVNode("ul", { class: "text-gray-600" }, [
                          createVNode("li", null, "\u041D\u0430\u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435: " + toDisplayString(unref(order).type), 1),
                          createVNode("li", null, "\u041F\u0440\u043E\u0432\u043E\u0434 \u043E\u0442 \u0432\u044B\u0432\u0435\u0441\u043A\u0438(\u0430\u043A\u0443\u0441\u0442\u0438\u043A\u0430): " + toDisplayString(unref(order).wireLength), 1),
                          createVNode("li", null, "\u041D\u0435\u043E\u043D:"),
                          (openBlock(true), createBlock(Fragment, null, renderList(unref(order).neons, (neon) => {
                            return openBlock(), createBlock("li", {
                              key: neon.id,
                              class: "pl-3"
                            }, [
                              createTextVNode(" - "),
                              createVNode("span", null, toDisplayString(neon.color) + "(" + toDisplayString(neon.width) + ") / " + toDisplayString(neon.length) + "\u0441\u043C ", 1),
                              neon.width === "\u041F\u043E\u0434\u0441\u0432\u0435\u0442\u043A\u0430" ? (openBlock(), createBlock("span", { key: 0 }, toDisplayString(neon.elements) + "(\u044D\u043B).", 1)) : createCommentVNode("", true)
                            ]);
                          }), 128)),
                          createVNode("li", null, "\u042D\u043B\u0435\u043C\u0435\u043D\u0442\u044B: " + toDisplayString(unref(order).elements), 1),
                          createVNode("li", null, "\u041F\u043E\u0434\u0430\u0440\u043E\u043A: " + toDisplayString(unref(order).gift ? "\u0414\u0430" : "\u041D\u0435\u0442"), 1),
                          createVNode("li", null, [
                            createTextVNode(" \u0418\u0441\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C: " + toDisplayString((_g = unref(order).master) == null ? void 0 : _g.fullName) + " ", 1),
                            unref(isIdPage) ? (openBlock(), createBlock(_component_UiDropdownMenu, { key: 0 }, {
                              default: withCtx(() => [
                                createVNode(_component_UiDropdownMenuTrigger, { "as-child": "" }, {
                                  default: withCtx(() => [
                                    createVNode(_component_UiButton, {
                                      size: "icon",
                                      class: "h-6 w-6"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_Icon, {
                                          name: "mingcute:edit-line",
                                          color: "white",
                                          size: "20px"
                                        })
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_UiDropdownMenuContent, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_UiDropdownMenuLabel, { class: "text-center" }, {
                                      default: withCtx(() => [
                                        createTextVNode("\u041D\u0430\u0437\u043D\u0430\u0447\u0438\u0442\u044C ")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_UiSeparator),
                                    createVNode(_component_UiDropdownMenuRadioGroup, null, {
                                      default: withCtx(() => [
                                        (openBlock(true), createBlock(Fragment, null, renderList(__props.workers, (worker) => {
                                          return openBlock(), createBlock(_component_UiDropdownMenuRadioItem, {
                                            key: worker.id,
                                            value: worker.fullName,
                                            onClick: ($event) => setMaster(unref(order).id, worker.id)
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(worker.fullName), 1)
                                            ]),
                                            _: 2
                                          }, 1032, ["value", "onClick"]);
                                        }), 128))
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            })) : createCommentVNode("", true),
                            !unref(isIdPage) && !unref(order).master ? (openBlock(), createBlock(_component_UiButton, {
                              key: 1,
                              class: "p-1.5 h-4",
                              onClick: () => takeOrder("master")
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" \u0412\u044B\u043F\u043E\u043B\u043D\u0438\u0442\u044C \u0437\u0430\u043A\u0430\u0437 ")
                              ]),
                              _: 1
                            }, 8, ["onClick"])) : createCommentVNode("", true)
                          ])
                        ])
                      ]),
                      createVNode("div", { class: "gap-3 flex-1 border p-2 rounded-md" }, [
                        createVNode("div", { class: "font-semibold pb-2" }, "\u0417\u0430\u0434\u0430\u043D\u0438\u0435 \u043D\u0430 \u0443\u043F\u0430\u043A\u043E\u0432\u043A\u0443"),
                        createVNode("ul", { class: "text-gray-600" }, [
                          createVNode("li", null, "\u0422\u0438\u043F \u0431\u043B\u043E\u043A\u0430: " + toDisplayString(unref(order).adapter), 1),
                          createVNode("li", null, "\u041F\u0440\u043E\u0432\u043E\u0434 \u043E\u0442 \u0431\u043B\u043E\u043A\u0430: " + toDisplayString(unref(order).plug), 1),
                          createVNode("li", null, "\u041A\u0440\u0435\u043F\u043B\u0435\u043D\u0438\u044F: " + toDisplayString(unref(order).fitting), 1),
                          createVNode("li", null, "\u0414\u0438\u043C\u043C\u0435\u0440: " + toDisplayString(unref(order).dimmer ? "\u0414\u0430" : "\u041D\u0435\u0442"), 1),
                          createVNode("li", null, "\u041F\u043E\u0434\u0430\u0440\u043E\u0447\u043D\u0430\u044F \u0443\u043F\u0430\u043A\u043E\u0432\u043A\u0430: " + toDisplayString(unref(order).giftPack ? "\u0414\u0430" : "\u041D\u0435\u0442"), 1),
                          createVNode("li", null, "\u041F\u043E\u0434\u0430\u0440\u043E\u043A: " + toDisplayString(unref(order).gift ? "\u0414\u0430" : "\u041D\u0435\u0442"), 1),
                          createVNode("li", null, [
                            createTextVNode(" \u0418\u0441\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C: " + toDisplayString((_h = unref(order).packer) == null ? void 0 : _h.fullName) + " ", 1),
                            unref(isIdPage) ? (openBlock(), createBlock(_component_UiDropdownMenu, { key: 0 }, {
                              default: withCtx(() => [
                                createVNode(_component_UiDropdownMenuTrigger, { "as-child": "" }, {
                                  default: withCtx(() => [
                                    createVNode(_component_UiButton, {
                                      size: "icon",
                                      class: "h-6 w-6"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_Icon, {
                                          name: "mingcute:edit-line",
                                          color: "white",
                                          size: "20px"
                                        })
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_UiDropdownMenuContent, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_UiDropdownMenuLabel, { class: "text-center" }, {
                                      default: withCtx(() => [
                                        createTextVNode("\u041D\u0430\u0437\u043D\u0430\u0447\u0438\u0442\u044C ")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_UiSeparator),
                                    createVNode(_component_UiDropdownMenuRadioGroup, null, {
                                      default: withCtx(() => [
                                        (openBlock(true), createBlock(Fragment, null, renderList(__props.workers, (worker) => {
                                          return openBlock(), createBlock(_component_UiDropdownMenuRadioItem, {
                                            key: worker.id,
                                            value: worker.fullName,
                                            onClick: ($event) => setPacker(unref(order).id, worker.id)
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(worker.fullName), 1)
                                            ]),
                                            _: 2
                                          }, 1032, ["value", "onClick"]);
                                        }), 128))
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            })) : createCommentVNode("", true),
                            !unref(isIdPage) && !unref(order).packer ? (openBlock(), createBlock(_component_UiButton, {
                              key: 1,
                              class: "p-1.5 h-4",
                              onClick: () => takeOrder("packer")
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" \u0412\u044B\u043F\u043E\u043B\u043D\u0438\u0442\u044C \u0437\u0430\u043A\u0430\u0437 ")
                              ]),
                              _: 1
                            }, 8, ["onClick"])) : createCommentVNode("", true)
                          ])
                        ])
                      ]),
                      unref(order).description ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: "gap-3 flex-1 border p-2 rounded-md"
                      }, [
                        createVNode("div", { class: "font-semibold pb-2" }, "\u0414\u043E\u043F. \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F"),
                        createVNode("div", { class: "text-gray-600" }, toDisplayString(unref(order).description), 1)
                      ])) : createCommentVNode("", true)
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UiCardFooter, { class: "p-2 flex flex-col gap-2" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex w-full gap-2"${_scopeId2}>`);
                  if (unref(order).stageId > 1) {
                    _push3(ssrRenderComponent(_component_UiButton, {
                      class: "w-full",
                      onClick: () => changeStage(unref(order).id, unref(order).stageId - 1)
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        var _a, _b;
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_Icon, {
                            name: "mingcute:arrow-left-line",
                            color: "white",
                            size: "20px"
                          }, null, _parent4, _scopeId3));
                          _push4(` ${ssrInterpolate((_a = __props.stages.find((s) => s.id === unref(order).stageId - 1)) == null ? void 0 : _a.title)}`);
                        } else {
                          return [
                            createVNode(_component_Icon, {
                              name: "mingcute:arrow-left-line",
                              color: "white",
                              size: "20px"
                            }),
                            createTextVNode(" " + toDisplayString((_b = __props.stages.find((s) => s.id === unref(order).stageId - 1)) == null ? void 0 : _b.title), 1)
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                  if (unref(isIdPage)) {
                    _push3(ssrRenderComponent(_component_UiDropdownMenu, null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_UiDropdownMenuTrigger, { "as-child": "" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_UiButton, { class: "" }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(_component_Icon, {
                                        name: "ic:round-menu",
                                        color: "white",
                                        size: "20px"
                                      }, null, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(_component_Icon, {
                                          name: "ic:round-menu",
                                          color: "white",
                                          size: "20px"
                                        })
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(_component_UiButton, { class: "" }, {
                                    default: withCtx(() => [
                                      createVNode(_component_Icon, {
                                        name: "ic:round-menu",
                                        color: "white",
                                        size: "20px"
                                      })
                                    ]),
                                    _: 1
                                  })
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_component_UiDropdownMenuContent, null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_UiDropdownMenuLabel, { class: "text-center" }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`\u041F\u0435\u0440\u0435\u043C\u0435\u0441\u0442\u0438\u0442\u044C `);
                                    } else {
                                      return [
                                        createTextVNode("\u041F\u0435\u0440\u0435\u043C\u0435\u0441\u0442\u0438\u0442\u044C ")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                                _push5(ssrRenderComponent(_component_UiSeparator, null, null, _parent5, _scopeId4));
                                _push5(ssrRenderComponent(_component_UiDropdownMenuRadioGroup, null, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`<!--[-->`);
                                      ssrRenderList(__props.stages, (stage) => {
                                        _push6(ssrRenderComponent(_component_UiDropdownMenuRadioItem, {
                                          key: stage.id,
                                          value: stage.title,
                                          onClick: ($event) => changeStage(unref(order).id, stage.id)
                                        }, {
                                          default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                            if (_push7) {
                                              _push7(`${ssrInterpolate(stage.title)}`);
                                            } else {
                                              return [
                                                createTextVNode(toDisplayString(stage.title), 1)
                                              ];
                                            }
                                          }),
                                          _: 2
                                        }, _parent6, _scopeId5));
                                      });
                                      _push6(`<!--]-->`);
                                    } else {
                                      return [
                                        (openBlock(true), createBlock(Fragment, null, renderList(__props.stages, (stage) => {
                                          return openBlock(), createBlock(_component_UiDropdownMenuRadioItem, {
                                            key: stage.id,
                                            value: stage.title,
                                            onClick: ($event) => changeStage(unref(order).id, stage.id)
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(stage.title), 1)
                                            ]),
                                            _: 2
                                          }, 1032, ["value", "onClick"]);
                                        }), 128))
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(_component_UiDropdownMenuLabel, { class: "text-center" }, {
                                    default: withCtx(() => [
                                      createTextVNode("\u041F\u0435\u0440\u0435\u043C\u0435\u0441\u0442\u0438\u0442\u044C ")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_UiSeparator),
                                  createVNode(_component_UiDropdownMenuRadioGroup, null, {
                                    default: withCtx(() => [
                                      (openBlock(true), createBlock(Fragment, null, renderList(__props.stages, (stage) => {
                                        return openBlock(), createBlock(_component_UiDropdownMenuRadioItem, {
                                          key: stage.id,
                                          value: stage.title,
                                          onClick: ($event) => changeStage(unref(order).id, stage.id)
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(stage.title), 1)
                                          ]),
                                          _: 2
                                        }, 1032, ["value", "onClick"]);
                                      }), 128))
                                    ]),
                                    _: 1
                                  })
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_UiDropdownMenuTrigger, { "as-child": "" }, {
                              default: withCtx(() => [
                                createVNode(_component_UiButton, { class: "" }, {
                                  default: withCtx(() => [
                                    createVNode(_component_Icon, {
                                      name: "ic:round-menu",
                                      color: "white",
                                      size: "20px"
                                    })
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(_component_UiDropdownMenuContent, null, {
                              default: withCtx(() => [
                                createVNode(_component_UiDropdownMenuLabel, { class: "text-center" }, {
                                  default: withCtx(() => [
                                    createTextVNode("\u041F\u0435\u0440\u0435\u043C\u0435\u0441\u0442\u0438\u0442\u044C ")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_UiSeparator),
                                createVNode(_component_UiDropdownMenuRadioGroup, null, {
                                  default: withCtx(() => [
                                    (openBlock(true), createBlock(Fragment, null, renderList(__props.stages, (stage) => {
                                      return openBlock(), createBlock(_component_UiDropdownMenuRadioItem, {
                                        key: stage.id,
                                        value: stage.title,
                                        onClick: ($event) => changeStage(unref(order).id, stage.id)
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(stage.title), 1)
                                        ]),
                                        _: 2
                                      }, 1032, ["value", "onClick"]);
                                    }), 128))
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
                    }, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                  if (unref(order).stageId !== __props.stages[__props.stages.length - 1].id) {
                    _push3(ssrRenderComponent(_component_UiButton, {
                      class: "w-full",
                      onClick: () => changeStage(unref(order).id, unref(order).stageId + 1)
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        var _a, _b;
                        if (_push4) {
                          _push4(`${ssrInterpolate((_a = __props.stages.find((s) => s.id === unref(order).stageId + 1)) == null ? void 0 : _a.title)} `);
                          _push4(ssrRenderComponent(_component_Icon, {
                            name: "mingcute:arrow-right-line",
                            color: "white",
                            size: "20px"
                          }, null, _parent4, _scopeId3));
                        } else {
                          return [
                            createTextVNode(toDisplayString((_b = __props.stages.find((s) => s.id === unref(order).stageId + 1)) == null ? void 0 : _b.title) + " ", 1),
                            createVNode(_component_Icon, {
                              name: "mingcute:arrow-right-line",
                              color: "white",
                              size: "20px"
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex w-full gap-2" }, [
                      unref(order).stageId > 1 ? (openBlock(), createBlock(_component_UiButton, {
                        key: 0,
                        class: "w-full",
                        onClick: () => changeStage(unref(order).id, unref(order).stageId - 1)
                      }, {
                        default: withCtx(() => {
                          var _a;
                          return [
                            createVNode(_component_Icon, {
                              name: "mingcute:arrow-left-line",
                              color: "white",
                              size: "20px"
                            }),
                            createTextVNode(" " + toDisplayString((_a = __props.stages.find((s) => s.id === unref(order).stageId - 1)) == null ? void 0 : _a.title), 1)
                          ];
                        }),
                        _: 1
                      }, 8, ["onClick"])) : createCommentVNode("", true),
                      unref(isIdPage) ? (openBlock(), createBlock(_component_UiDropdownMenu, { key: 1 }, {
                        default: withCtx(() => [
                          createVNode(_component_UiDropdownMenuTrigger, { "as-child": "" }, {
                            default: withCtx(() => [
                              createVNode(_component_UiButton, { class: "" }, {
                                default: withCtx(() => [
                                  createVNode(_component_Icon, {
                                    name: "ic:round-menu",
                                    color: "white",
                                    size: "20px"
                                  })
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UiDropdownMenuContent, null, {
                            default: withCtx(() => [
                              createVNode(_component_UiDropdownMenuLabel, { class: "text-center" }, {
                                default: withCtx(() => [
                                  createTextVNode("\u041F\u0435\u0440\u0435\u043C\u0435\u0441\u0442\u0438\u0442\u044C ")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_UiSeparator),
                              createVNode(_component_UiDropdownMenuRadioGroup, null, {
                                default: withCtx(() => [
                                  (openBlock(true), createBlock(Fragment, null, renderList(__props.stages, (stage) => {
                                    return openBlock(), createBlock(_component_UiDropdownMenuRadioItem, {
                                      key: stage.id,
                                      value: stage.title,
                                      onClick: ($event) => changeStage(unref(order).id, stage.id)
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(stage.title), 1)
                                      ]),
                                      _: 2
                                    }, 1032, ["value", "onClick"]);
                                  }), 128))
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })) : createCommentVNode("", true),
                      unref(order).stageId !== __props.stages[__props.stages.length - 1].id ? (openBlock(), createBlock(_component_UiButton, {
                        key: 2,
                        class: "w-full",
                        onClick: () => changeStage(unref(order).id, unref(order).stageId + 1)
                      }, {
                        default: withCtx(() => {
                          var _a;
                          return [
                            createTextVNode(toDisplayString((_a = __props.stages.find((s) => s.id === unref(order).stageId + 1)) == null ? void 0 : _a.title) + " ", 1),
                            createVNode(_component_Icon, {
                              name: "mingcute:arrow-right-line",
                              color: "white",
                              size: "20px"
                            })
                          ];
                        }),
                        _: 1
                      }, 8, ["onClick"])) : createCommentVNode("", true)
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UiCardHeader, { class: "bg-slate-50 p-2 pl-4" }, {
                default: withCtx(() => [
                  createVNode(_component_UiCardTitle, { class: "text-base flex w-full" }, {
                    default: withCtx(() => [
                      createVNode(_component_MyOrdersOrderFormModal, {
                        order: unref(order),
                        class: "mr-2 justify-between",
                        onOrderEdited: getOrder
                      }, null, 8, ["order"]),
                      createTextVNode(" " + toDisplayString(unref(order).title) + " ", 1),
                      createVNode("div", { class: "ml-[auto]" }, [
                        createVNode(_component_UiButton, {
                          class: "ml-[auto] w-6 h-6 p-0",
                          onClick: () => deleteOrder()
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_Icon, {
                              name: "mi:delete",
                              color: "white",
                              size: "18px"
                            })
                          ]),
                          _: 1
                        }, 8, ["onClick"])
                      ])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_UiCardDescription, { class: "flex items-center gap-2" }, {
                    default: withCtx(() => {
                      var _a;
                      return [
                        createTextVNode(" \u0421\u0442\u0430\u0442\u0443\u0441: " + toDisplayString((_a = __props.stages.find((s) => s.id === unref(order).stageId)) == null ? void 0 : _a.title), 1)
                      ];
                    }),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_UiCardContent, { class: "flex gap-2 p-2 flex-col" }, {
                default: withCtx(() => {
                  var _a, _b, _c, _d;
                  return [
                    unref(imgs).length ? (openBlock(), createBlock(_component_UiCarousel, { key: 0 }, {
                      default: withCtx(() => [
                        createVNode(_component_UiCarouselContent, null, {
                          default: withCtx(() => [
                            (openBlock(true), createBlock(Fragment, null, renderList(unref(imgs), (img, index) => {
                              return openBlock(), createBlock(_component_UiCarouselItem, {
                                key: index,
                                class: "relative flex flex-col items-center"
                              }, {
                                default: withCtx(() => {
                                  var _a2;
                                  return [
                                    createVNode(_component_NuxtImg, {
                                      src: img.url,
                                      alt: "prev.name",
                                      class: "rounded-t-md cursor-pointer",
                                      onClick: ($event) => openInNewWindow(img.url)
                                    }, null, 8, ["src", "onClick"]),
                                    createVNode("div", { class: "flex w-full items-center justify-center py-1 gap-2 bg-zinc-200 rounded-b-md" }, [
                                      createVNode("div", null, "\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u043B: " + toDisplayString(((_a2 = img.user) == null ? void 0 : _a2.fullName) || ""), 1),
                                      createVNode(_component_UiButton, {
                                        class: "w-5 h-5 p-0",
                                        variant: "destructive",
                                        onClick: () => deleteImg(img.id)
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_Icon, {
                                            name: "streamline:delete-1-solid",
                                            color: "",
                                            size: "11px"
                                          })
                                        ]),
                                        _: 2
                                      }, 1032, ["onClick"])
                                    ])
                                  ];
                                }),
                                _: 2
                              }, 1024);
                            }), 128))
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UiCarouselPrevious, { class: "ml-[50px]" }),
                        createVNode(_component_UiCarouselNext, { class: "mr-[50px]" })
                      ]),
                      _: 1
                    })) : createCommentVNode("", true),
                    unref(imgs).length ? (openBlock(), createBlock("div", {
                      key: 1,
                      class: "font-semibold"
                    }, " \u0417\u0430\u0433\u0440\u0443\u0436\u0435\u043D\u043E " + toDisplayString(unref(imgs).length) + " \u0444\u043E\u0442\u043E ", 1)) : createCommentVNode("", true),
                    createVNode(_component_MyOrdersUploadImgForm, {
                      order: unref(order),
                      onFileUploaded: getImg
                    }, null, 8, ["order"]),
                    createVNode("div", { class: "flex gap-2 flex-col" }, [
                      createVNode("div", { class: "gap-3 flex-1 border p-2 rounded-md" }, [
                        createVNode("div", { class: "font-semibold pb-2" }, "\u0417\u0430\u0434\u0430\u043D\u0438\u0435 \u043D\u0430 \u0444\u0440\u0435\u0437\u0435\u0440\u043E\u0432\u043A\u0443"),
                        createVNode("ul", { class: "text-gray-600" }, [
                          createVNode("li", null, "\u041C\u0430\u0442\u0435\u0440\u0438\u0430\u043B: " + toDisplayString(unref(order).material), 1),
                          createVNode("li", null, "\u0420\u0430\u0437\u043C\u0435\u0440\u044B: " + toDisplayString(unref(order).boardHeight) + "/" + toDisplayString(unref(order).boardWidth) + " \u0441\u043C", 1),
                          createVNode("li", null, "\u041E\u0442\u0432\u0435\u0440\u0441\u0442\u0438\u044F: " + toDisplayString(unref(order).holeType), 1),
                          createVNode("li", null, "\u041F\u043E\u0434\u0441\u0442\u0430\u0432\u043A\u0430: " + toDisplayString(unref(order).stand ? "\u0414\u0430" : "\u041D\u0435\u0442"), 1),
                          createVNode("li", null, " \u041F\u0430\u0437 8\u043C\u043C: " + toDisplayString(unref(order).neons.find((n) => n.width === "8\u043C\u043C") ? "\u0414\u0430" : "\u041D\u0435\u0442"), 1),
                          createVNode("li", null, [
                            createTextVNode(" \u0418\u0441\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C: " + toDisplayString(((_a = unref(order).frezer) == null ? void 0 : _a.fullName) || "") + " ", 1),
                            unref(isIdPage) ? (openBlock(), createBlock(_component_UiDropdownMenu, { key: 0 }, {
                              default: withCtx(() => [
                                createVNode(_component_UiDropdownMenuTrigger, { "as-child": "" }, {
                                  default: withCtx(() => [
                                    createVNode(_component_UiButton, {
                                      size: "icon",
                                      class: "h-6 w-6"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_Icon, {
                                          name: "mingcute:edit-line",
                                          color: "white",
                                          size: "20px"
                                        })
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_UiDropdownMenuContent, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_UiDropdownMenuLabel, { class: "text-center" }, {
                                      default: withCtx(() => [
                                        createTextVNode("\u041D\u0430\u0437\u043D\u0430\u0447\u0438\u0442\u044C ")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_UiSeparator),
                                    createVNode(_component_UiDropdownMenuRadioGroup, null, {
                                      default: withCtx(() => [
                                        (openBlock(true), createBlock(Fragment, null, renderList(__props.workers, (worker) => {
                                          return openBlock(), createBlock(_component_UiDropdownMenuRadioItem, {
                                            key: worker.id,
                                            value: worker.fullName,
                                            onClick: ($event) => setFrezer(unref(order).id, worker.id)
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(worker.fullName) + " - " + toDisplayString(worker.role.fullName), 1)
                                            ]),
                                            _: 2
                                          }, 1032, ["value", "onClick"]);
                                        }), 128))
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            })) : createCommentVNode("", true),
                            !unref(isIdPage) && !unref(order).frezer ? (openBlock(), createBlock(_component_UiButton, {
                              key: 1,
                              class: "p-1.5 h-4",
                              onClick: () => takeOrder("frezer")
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" \u0412\u044B\u043F\u043E\u043B\u043D\u0438\u0442\u044C \u0437\u0430\u043A\u0430\u0437 ")
                              ]),
                              _: 1
                            }, 8, ["onClick"])) : createCommentVNode("", true)
                          ])
                        ])
                      ]),
                      createVNode("div", { class: "gap-3 flex-1 border p-2 rounded-md" }, [
                        createVNode("div", { class: "font-semibold pb-2" }, "\u0417\u0430\u0434\u0430\u043D\u0438\u0435 \u043D\u0430 \u043F\u043B\u0435\u043D\u043A\u0443"),
                        createVNode("ul", { class: "text-gray-600" }, [
                          createVNode("li", null, "\u041F\u043B\u0435\u043D\u043A\u0430: " + toDisplayString(unref(order).laminate || "\u041D\u0435\u0442"), 1),
                          createVNode("li", null, "\u0410\u043A\u0440\u0438\u043B: " + toDisplayString(unref(order).acrylic || "\u041D\u0435\u0442"), 1),
                          createVNode("li", null, "\u041F\u0435\u0447\u0430\u0442\u044C: " + toDisplayString(unref(order).print ? "\u0414\u0430" : "\u041D\u0435\u0442"), 1),
                          unref(order).print ? (openBlock(), createBlock("li", { key: 0 }, " \u041A\u0430\u0447\u0435\u0441\u0442\u0432\u043E: " + toDisplayString(unref(order).printQuality ? "\u0421\u043E\u0433\u043B\u0430\u0441\u043E\u0432\u0430\u043D\u043E" : "\u041D\u0435 \u0441\u043E\u0433\u043B\u0430\u0441\u043E\u0432\u0430\u043D\u043E"), 1)) : createCommentVNode("", true),
                          createVNode("li", null, [
                            createTextVNode(" \u0418\u0441\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C: " + toDisplayString((_b = unref(order).laminater) == null ? void 0 : _b.fullName) + " ", 1),
                            unref(isIdPage) ? (openBlock(), createBlock(_component_UiDropdownMenu, { key: 0 }, {
                              default: withCtx(() => [
                                createVNode(_component_UiDropdownMenuTrigger, { "as-child": "" }, {
                                  default: withCtx(() => [
                                    createVNode(_component_UiButton, {
                                      size: "icon",
                                      class: "h-6 w-6"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_Icon, {
                                          name: "mingcute:edit-line",
                                          color: "white",
                                          size: "20px"
                                        })
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_UiDropdownMenuContent, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_UiDropdownMenuLabel, { class: "text-center" }, {
                                      default: withCtx(() => [
                                        createTextVNode("\u041D\u0430\u0437\u043D\u0430\u0447\u0438\u0442\u044C ")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_UiSeparator),
                                    createVNode(_component_UiDropdownMenuRadioGroup, null, {
                                      default: withCtx(() => [
                                        (openBlock(true), createBlock(Fragment, null, renderList(__props.workers, (worker) => {
                                          return openBlock(), createBlock(_component_UiDropdownMenuRadioItem, {
                                            key: worker.id,
                                            value: worker.fullName,
                                            onClick: ($event) => setLaminater(unref(order).id, worker.id)
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(worker.fullName), 1)
                                            ]),
                                            _: 2
                                          }, 1032, ["value", "onClick"]);
                                        }), 128))
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            })) : createCommentVNode("", true),
                            !unref(isIdPage) && !unref(order).laminater ? (openBlock(), createBlock(_component_UiButton, {
                              key: 1,
                              class: "p-1.5 h-4",
                              onClick: () => takeOrder("laminater")
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" \u0412\u044B\u043F\u043E\u043B\u043D\u0438\u0442\u044C \u0437\u0430\u043A\u0430\u0437 ")
                              ]),
                              _: 1
                            }, 8, ["onClick"])) : createCommentVNode("", true)
                          ])
                        ])
                      ]),
                      createVNode("div", { class: "gap-3 flex-1 border p-2 rounded-md" }, [
                        createVNode("div", { class: "font-semibold pb-2" }, "\u0417\u0430\u0434\u0430\u043D\u0438\u0435 \u043D\u0430 \u0441\u0431\u043E\u0440\u043A\u0443"),
                        createVNode("ul", { class: "text-gray-600" }, [
                          createVNode("li", null, "\u041D\u0430\u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435: " + toDisplayString(unref(order).type), 1),
                          createVNode("li", null, "\u041F\u0440\u043E\u0432\u043E\u0434 \u043E\u0442 \u0432\u044B\u0432\u0435\u0441\u043A\u0438(\u0430\u043A\u0443\u0441\u0442\u0438\u043A\u0430): " + toDisplayString(unref(order).wireLength), 1),
                          createVNode("li", null, "\u041D\u0435\u043E\u043D:"),
                          (openBlock(true), createBlock(Fragment, null, renderList(unref(order).neons, (neon) => {
                            return openBlock(), createBlock("li", {
                              key: neon.id,
                              class: "pl-3"
                            }, [
                              createTextVNode(" - "),
                              createVNode("span", null, toDisplayString(neon.color) + "(" + toDisplayString(neon.width) + ") / " + toDisplayString(neon.length) + "\u0441\u043C ", 1),
                              neon.width === "\u041F\u043E\u0434\u0441\u0432\u0435\u0442\u043A\u0430" ? (openBlock(), createBlock("span", { key: 0 }, toDisplayString(neon.elements) + "(\u044D\u043B).", 1)) : createCommentVNode("", true)
                            ]);
                          }), 128)),
                          createVNode("li", null, "\u042D\u043B\u0435\u043C\u0435\u043D\u0442\u044B: " + toDisplayString(unref(order).elements), 1),
                          createVNode("li", null, "\u041F\u043E\u0434\u0430\u0440\u043E\u043A: " + toDisplayString(unref(order).gift ? "\u0414\u0430" : "\u041D\u0435\u0442"), 1),
                          createVNode("li", null, [
                            createTextVNode(" \u0418\u0441\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C: " + toDisplayString((_c = unref(order).master) == null ? void 0 : _c.fullName) + " ", 1),
                            unref(isIdPage) ? (openBlock(), createBlock(_component_UiDropdownMenu, { key: 0 }, {
                              default: withCtx(() => [
                                createVNode(_component_UiDropdownMenuTrigger, { "as-child": "" }, {
                                  default: withCtx(() => [
                                    createVNode(_component_UiButton, {
                                      size: "icon",
                                      class: "h-6 w-6"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_Icon, {
                                          name: "mingcute:edit-line",
                                          color: "white",
                                          size: "20px"
                                        })
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_UiDropdownMenuContent, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_UiDropdownMenuLabel, { class: "text-center" }, {
                                      default: withCtx(() => [
                                        createTextVNode("\u041D\u0430\u0437\u043D\u0430\u0447\u0438\u0442\u044C ")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_UiSeparator),
                                    createVNode(_component_UiDropdownMenuRadioGroup, null, {
                                      default: withCtx(() => [
                                        (openBlock(true), createBlock(Fragment, null, renderList(__props.workers, (worker) => {
                                          return openBlock(), createBlock(_component_UiDropdownMenuRadioItem, {
                                            key: worker.id,
                                            value: worker.fullName,
                                            onClick: ($event) => setMaster(unref(order).id, worker.id)
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(worker.fullName), 1)
                                            ]),
                                            _: 2
                                          }, 1032, ["value", "onClick"]);
                                        }), 128))
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            })) : createCommentVNode("", true),
                            !unref(isIdPage) && !unref(order).master ? (openBlock(), createBlock(_component_UiButton, {
                              key: 1,
                              class: "p-1.5 h-4",
                              onClick: () => takeOrder("master")
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" \u0412\u044B\u043F\u043E\u043B\u043D\u0438\u0442\u044C \u0437\u0430\u043A\u0430\u0437 ")
                              ]),
                              _: 1
                            }, 8, ["onClick"])) : createCommentVNode("", true)
                          ])
                        ])
                      ]),
                      createVNode("div", { class: "gap-3 flex-1 border p-2 rounded-md" }, [
                        createVNode("div", { class: "font-semibold pb-2" }, "\u0417\u0430\u0434\u0430\u043D\u0438\u0435 \u043D\u0430 \u0443\u043F\u0430\u043A\u043E\u0432\u043A\u0443"),
                        createVNode("ul", { class: "text-gray-600" }, [
                          createVNode("li", null, "\u0422\u0438\u043F \u0431\u043B\u043E\u043A\u0430: " + toDisplayString(unref(order).adapter), 1),
                          createVNode("li", null, "\u041F\u0440\u043E\u0432\u043E\u0434 \u043E\u0442 \u0431\u043B\u043E\u043A\u0430: " + toDisplayString(unref(order).plug), 1),
                          createVNode("li", null, "\u041A\u0440\u0435\u043F\u043B\u0435\u043D\u0438\u044F: " + toDisplayString(unref(order).fitting), 1),
                          createVNode("li", null, "\u0414\u0438\u043C\u043C\u0435\u0440: " + toDisplayString(unref(order).dimmer ? "\u0414\u0430" : "\u041D\u0435\u0442"), 1),
                          createVNode("li", null, "\u041F\u043E\u0434\u0430\u0440\u043E\u0447\u043D\u0430\u044F \u0443\u043F\u0430\u043A\u043E\u0432\u043A\u0430: " + toDisplayString(unref(order).giftPack ? "\u0414\u0430" : "\u041D\u0435\u0442"), 1),
                          createVNode("li", null, "\u041F\u043E\u0434\u0430\u0440\u043E\u043A: " + toDisplayString(unref(order).gift ? "\u0414\u0430" : "\u041D\u0435\u0442"), 1),
                          createVNode("li", null, [
                            createTextVNode(" \u0418\u0441\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C: " + toDisplayString((_d = unref(order).packer) == null ? void 0 : _d.fullName) + " ", 1),
                            unref(isIdPage) ? (openBlock(), createBlock(_component_UiDropdownMenu, { key: 0 }, {
                              default: withCtx(() => [
                                createVNode(_component_UiDropdownMenuTrigger, { "as-child": "" }, {
                                  default: withCtx(() => [
                                    createVNode(_component_UiButton, {
                                      size: "icon",
                                      class: "h-6 w-6"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_Icon, {
                                          name: "mingcute:edit-line",
                                          color: "white",
                                          size: "20px"
                                        })
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_UiDropdownMenuContent, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_UiDropdownMenuLabel, { class: "text-center" }, {
                                      default: withCtx(() => [
                                        createTextVNode("\u041D\u0430\u0437\u043D\u0430\u0447\u0438\u0442\u044C ")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_UiSeparator),
                                    createVNode(_component_UiDropdownMenuRadioGroup, null, {
                                      default: withCtx(() => [
                                        (openBlock(true), createBlock(Fragment, null, renderList(__props.workers, (worker) => {
                                          return openBlock(), createBlock(_component_UiDropdownMenuRadioItem, {
                                            key: worker.id,
                                            value: worker.fullName,
                                            onClick: ($event) => setPacker(unref(order).id, worker.id)
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(worker.fullName), 1)
                                            ]),
                                            _: 2
                                          }, 1032, ["value", "onClick"]);
                                        }), 128))
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            })) : createCommentVNode("", true),
                            !unref(isIdPage) && !unref(order).packer ? (openBlock(), createBlock(_component_UiButton, {
                              key: 1,
                              class: "p-1.5 h-4",
                              onClick: () => takeOrder("packer")
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" \u0412\u044B\u043F\u043E\u043B\u043D\u0438\u0442\u044C \u0437\u0430\u043A\u0430\u0437 ")
                              ]),
                              _: 1
                            }, 8, ["onClick"])) : createCommentVNode("", true)
                          ])
                        ])
                      ]),
                      unref(order).description ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: "gap-3 flex-1 border p-2 rounded-md"
                      }, [
                        createVNode("div", { class: "font-semibold pb-2" }, "\u0414\u043E\u043F. \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F"),
                        createVNode("div", { class: "text-gray-600" }, toDisplayString(unref(order).description), 1)
                      ])) : createCommentVNode("", true)
                    ])
                  ];
                }),
                _: 1
              }),
              createVNode(_component_UiCardFooter, { class: "p-2 flex flex-col gap-2" }, {
                default: withCtx(() => [
                  createVNode("div", { class: "flex w-full gap-2" }, [
                    unref(order).stageId > 1 ? (openBlock(), createBlock(_component_UiButton, {
                      key: 0,
                      class: "w-full",
                      onClick: () => changeStage(unref(order).id, unref(order).stageId - 1)
                    }, {
                      default: withCtx(() => {
                        var _a;
                        return [
                          createVNode(_component_Icon, {
                            name: "mingcute:arrow-left-line",
                            color: "white",
                            size: "20px"
                          }),
                          createTextVNode(" " + toDisplayString((_a = __props.stages.find((s) => s.id === unref(order).stageId - 1)) == null ? void 0 : _a.title), 1)
                        ];
                      }),
                      _: 1
                    }, 8, ["onClick"])) : createCommentVNode("", true),
                    unref(isIdPage) ? (openBlock(), createBlock(_component_UiDropdownMenu, { key: 1 }, {
                      default: withCtx(() => [
                        createVNode(_component_UiDropdownMenuTrigger, { "as-child": "" }, {
                          default: withCtx(() => [
                            createVNode(_component_UiButton, { class: "" }, {
                              default: withCtx(() => [
                                createVNode(_component_Icon, {
                                  name: "ic:round-menu",
                                  color: "white",
                                  size: "20px"
                                })
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UiDropdownMenuContent, null, {
                          default: withCtx(() => [
                            createVNode(_component_UiDropdownMenuLabel, { class: "text-center" }, {
                              default: withCtx(() => [
                                createTextVNode("\u041F\u0435\u0440\u0435\u043C\u0435\u0441\u0442\u0438\u0442\u044C ")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_UiSeparator),
                            createVNode(_component_UiDropdownMenuRadioGroup, null, {
                              default: withCtx(() => [
                                (openBlock(true), createBlock(Fragment, null, renderList(__props.stages, (stage) => {
                                  return openBlock(), createBlock(_component_UiDropdownMenuRadioItem, {
                                    key: stage.id,
                                    value: stage.title,
                                    onClick: ($event) => changeStage(unref(order).id, stage.id)
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(stage.title), 1)
                                    ]),
                                    _: 2
                                  }, 1032, ["value", "onClick"]);
                                }), 128))
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })) : createCommentVNode("", true),
                    unref(order).stageId !== __props.stages[__props.stages.length - 1].id ? (openBlock(), createBlock(_component_UiButton, {
                      key: 2,
                      class: "w-full",
                      onClick: () => changeStage(unref(order).id, unref(order).stageId + 1)
                    }, {
                      default: withCtx(() => {
                        var _a;
                        return [
                          createTextVNode(toDisplayString((_a = __props.stages.find((s) => s.id === unref(order).stageId + 1)) == null ? void 0 : _a.title) + " ", 1),
                          createVNode(_component_Icon, {
                            name: "mingcute:arrow-right-line",
                            color: "white",
                            size: "20px"
                          })
                        ];
                      }),
                      _: 1
                    }, 8, ["onClick"])) : createCommentVNode("", true)
                  ])
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
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/my/orders/OrderPreview.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "DeliveryPreview",
  __ssrInlineRender: true,
  props: {
    delivery: {
      type: Object,
      required: true
    }
  },
  emits: ["delivery-deleted"],
  setup(__props, { emit: __emit }) {
    const { $useApi } = useNuxtApp();
    const props = __props;
    const delivery = ref({ ...props.delivery });
    const deleteDelivery = async (id) => {
      try {
        await $useApi.delete("deliveries/" + id);
        emit("delivery-deleted");
      } catch (error) {
        console.log(error);
      }
    };
    const getDelivery = async () => {
      try {
        const { data } = await $useApi.get(`/deliveries/${delivery.value.id}`);
        delivery.value = data;
      } catch (error) {
        console.log(error);
      }
    };
    const emit = __emit;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiCard = _sfc_main$c;
      const _component_UiCardHeader = _sfc_main$1$1;
      const _component_UiCardTitle = _sfc_main$d;
      const _component_MyDeliveriesEditModal = _sfc_main$m;
      const _component_UiButton = _sfc_main$f;
      const _component_Icon = __nuxt_component_0;
      const _component_UiCardDescription = _sfc_main$g;
      const _component_UiCardContent = _sfc_main$h;
      _push(ssrRenderComponent(_component_UiCard, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UiCardHeader, { class: "p-2" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UiCardTitle, { class: "flex" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_MyDeliveriesEditModal, {
                          delivery: unref(delivery),
                          onDeliveryEdited: getDelivery
                        }, null, _parent4, _scopeId3));
                        _push4(`<div class="ml-2"${_scopeId3}>${ssrInterpolate(unref(delivery).method)}</div><div class="ml-[auto]"${_scopeId3}>`);
                        _push4(ssrRenderComponent(_component_UiButton, {
                          class: "ml-[auto] w-6 h-6 p-0",
                          onClick: () => deleteDelivery(unref(delivery).id)
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_Icon, {
                                name: "mi:delete",
                                color: "white",
                                size: "18px"
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_Icon, {
                                  name: "mi:delete",
                                  color: "white",
                                  size: "18px"
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`</div>`);
                      } else {
                        return [
                          createVNode(_component_MyDeliveriesEditModal, {
                            delivery: unref(delivery),
                            onDeliveryEdited: getDelivery
                          }, null, 8, ["delivery"]),
                          createVNode("div", { class: "ml-2" }, toDisplayString(unref(delivery).method), 1),
                          createVNode("div", { class: "ml-[auto]" }, [
                            createVNode(_component_UiButton, {
                              class: "ml-[auto] w-6 h-6 p-0",
                              onClick: () => deleteDelivery(unref(delivery).id)
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_Icon, {
                                  name: "mi:delete",
                                  color: "white",
                                  size: "18px"
                                })
                              ]),
                              _: 1
                            }, 8, ["onClick"])
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UiCardDescription, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`${ssrInterpolate(unref(delivery).type)}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(unref(delivery).type), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UiCardTitle, { class: "flex" }, {
                      default: withCtx(() => [
                        createVNode(_component_MyDeliveriesEditModal, {
                          delivery: unref(delivery),
                          onDeliveryEdited: getDelivery
                        }, null, 8, ["delivery"]),
                        createVNode("div", { class: "ml-2" }, toDisplayString(unref(delivery).method), 1),
                        createVNode("div", { class: "ml-[auto]" }, [
                          createVNode(_component_UiButton, {
                            class: "ml-[auto] w-6 h-6 p-0",
                            onClick: () => deleteDelivery(unref(delivery).id)
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_Icon, {
                                name: "mi:delete",
                                color: "white",
                                size: "18px"
                              })
                            ]),
                            _: 1
                          }, 8, ["onClick"])
                        ])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_UiCardDescription, null, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(unref(delivery).type), 1)
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UiCardContent, { class: "p-2" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div${_scopeId2}><ul class="text-gray-600"${_scopeId2}><li${_scopeId2}>\u0422\u0440\u0435\u043A: ${ssrInterpolate(unref(delivery).track)}</li><li${_scopeId2}>\u0421\u0442\u0430\u0442\u0443\u0441: ${ssrInterpolate(unref(delivery).status)}</li><li${_scopeId2}>\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435: ${ssrInterpolate(unref(delivery).description)}</li></ul></div>`);
                } else {
                  return [
                    createVNode("div", null, [
                      createVNode("ul", { class: "text-gray-600" }, [
                        createVNode("li", null, "\u0422\u0440\u0435\u043A: " + toDisplayString(unref(delivery).track), 1),
                        createVNode("li", null, "\u0421\u0442\u0430\u0442\u0443\u0441: " + toDisplayString(unref(delivery).status), 1),
                        createVNode("li", null, "\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435: " + toDisplayString(unref(delivery).description), 1)
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UiCardHeader, { class: "p-2" }, {
                default: withCtx(() => [
                  createVNode(_component_UiCardTitle, { class: "flex" }, {
                    default: withCtx(() => [
                      createVNode(_component_MyDeliveriesEditModal, {
                        delivery: unref(delivery),
                        onDeliveryEdited: getDelivery
                      }, null, 8, ["delivery"]),
                      createVNode("div", { class: "ml-2" }, toDisplayString(unref(delivery).method), 1),
                      createVNode("div", { class: "ml-[auto]" }, [
                        createVNode(_component_UiButton, {
                          class: "ml-[auto] w-6 h-6 p-0",
                          onClick: () => deleteDelivery(unref(delivery).id)
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_Icon, {
                              name: "mi:delete",
                              color: "white",
                              size: "18px"
                            })
                          ]),
                          _: 1
                        }, 8, ["onClick"])
                      ])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_UiCardDescription, null, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(unref(delivery).type), 1)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_UiCardContent, { class: "p-2" }, {
                default: withCtx(() => [
                  createVNode("div", null, [
                    createVNode("ul", { class: "text-gray-600" }, [
                      createVNode("li", null, "\u0422\u0440\u0435\u043A: " + toDisplayString(unref(delivery).track), 1),
                      createVNode("li", null, "\u0421\u0442\u0430\u0442\u0443\u0441: " + toDisplayString(unref(delivery).status), 1),
                      createVNode("li", null, "\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435: " + toDisplayString(unref(delivery).description), 1)
                    ])
                  ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/my/deliveries/DeliveryPreview.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const useMyFormatDate = (dateString) => {
  const months = [
    "\u044F\u043D\u0432\u0430\u0440\u044F",
    "\u0444\u0435\u0432\u0440\u0430\u043B\u044F",
    "\u043C\u0430\u0440\u0442\u0430",
    "\u0430\u043F\u0440\u0435\u043B\u044F",
    "\u043C\u0430\u044F",
    "\u0438\u044E\u043D\u044F",
    "\u0438\u044E\u043B\u044F",
    "\u0430\u0432\u0433\u0443\u0441\u0442\u0430",
    "\u0441\u0435\u043D\u0442\u044F\u0431\u0440\u044F",
    "\u043E\u043A\u0442\u044F\u0431\u0440\u044F",
    "\u043D\u043E\u044F\u0431\u0440\u044F",
    "\u0434\u0435\u043A\u0430\u0431\u0440\u044F"
  ];
  const [year, month, day] = dateString.split("-").map(Number);
  return `${day} ${months[month - 1]} ${year}`;
};

export { _sfc_main$b as _, _sfc_main$9 as a, _sfc_main$8 as b, _sfc_main$a as c, _sfc_main$1 as d, _sfc_main as e, useMyFormatDate as u };
//# sourceMappingURL=useMyFormatDate-BhDuhd2V.mjs.map
