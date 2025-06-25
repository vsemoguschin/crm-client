import { c as cn, u as useIsLoadingStore, a as useAuthStore, _ as _sfc_main$8 } from './isLoading-BbWzubgi.mjs';
import { defineComponent, useSSRContext, computed, unref, mergeProps, withCtx, renderSlot, createVNode, createTextVNode, toDisplayString, isVNode, resolveDynamicComponent, createBlock, openBlock, createCommentVNode, Fragment, renderList, ref } from 'vue';
import { ssrRenderComponent, ssrRenderSlot, ssrRenderList, ssrInterpolate, ssrRenderVNode, ssrRenderAttrs } from 'vue/server-renderer';
import { useRouter } from 'vue-router';
import { b as useToast, a as useNuxtApp } from './server.mjs';
import { cva } from 'class-variance-authority';
import { useForwardPropsEmits, ToastRoot, ToastClose, ToastDescription, ToastProvider, ToastTitle, ToastViewport } from 'radix-vue';
import { X } from 'lucide-vue-next';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import 'clsx';
import 'tailwind-merge';
import 'pinia';
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
import '@iconify/vue';
import 'axios';

const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "Toast",
  __ssrInlineRender: true,
  props: {
    class: {},
    variant: {},
    onOpenChange: { type: Function },
    defaultOpen: { type: Boolean },
    forceMount: { type: Boolean },
    type: {},
    open: { type: Boolean },
    duration: {},
    asChild: { type: Boolean },
    as: { type: [String, Object, Function] }
  },
  emits: ["escapeKeyDown", "pause", "resume", "swipeStart", "swipeMove", "swipeCancel", "swipeEnd", "update:open"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const delegatedProps = computed(() => {
      const { class: _, ...delegated } = props;
      return delegated;
    });
    const forwarded = useForwardPropsEmits(delegatedProps, emits);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(ToastRoot), mergeProps(unref(forwarded), {
        class: unref(cn)(unref(toastVariants)({ variant: _ctx.variant }), props.class),
        "onUpdate:open": _ctx.onOpenChange
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
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/toast/Toast.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "ToastClose",
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
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(ToastClose), mergeProps(delegatedProps.value, {
        class: unref(cn)(
          "absolute right-2 top-2 rounded-md p-1 text-slate-950/50 opacity-0 transition-opacity hover:text-slate-950 focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600 dark:text-slate-50/50 dark:hover:text-slate-50",
          props.class
        )
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(X), { class: "h-4 w-4" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(X), { class: "h-4 w-4" })
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/toast/ToastClose.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "ToastDescription",
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
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(ToastDescription), mergeProps({
        class: unref(cn)("text-sm opacity-90", props.class)
      }, delegatedProps.value, _attrs), {
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/toast/ToastDescription.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "Toaster",
  __ssrInlineRender: true,
  setup(__props) {
    const { toasts } = useToast();
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(_sfc_main$3), _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(unref(toasts), (toast) => {
              _push2(ssrRenderComponent(unref(_sfc_main$7), mergeProps({
                key: toast.id
              }, { ref_for: true }, toast), {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="grid gap-1"${_scopeId2}>`);
                    if (toast.title) {
                      _push3(ssrRenderComponent(unref(_sfc_main$2), null, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(`${ssrInterpolate(toast.title)}`);
                          } else {
                            return [
                              createTextVNode(toDisplayString(toast.title), 1)
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                    } else {
                      _push3(`<!---->`);
                    }
                    if (toast.description) {
                      _push3(`<!--[-->`);
                      if (isVNode(toast.description)) {
                        _push3(ssrRenderComponent(unref(_sfc_main$5), null, {
                          default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                            if (_push4) {
                              ssrRenderVNode(_push4, createVNode(resolveDynamicComponent(toast.description), null, null), _parent4, _scopeId3);
                            } else {
                              return [
                                (openBlock(), createBlock(resolveDynamicComponent(toast.description)))
                              ];
                            }
                          }),
                          _: 2
                        }, _parent3, _scopeId2));
                      } else {
                        _push3(ssrRenderComponent(unref(_sfc_main$5), null, {
                          default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                            if (_push4) {
                              _push4(`${ssrInterpolate(toast.description)}`);
                            } else {
                              return [
                                createTextVNode(toDisplayString(toast.description), 1)
                              ];
                            }
                          }),
                          _: 2
                        }, _parent3, _scopeId2));
                      }
                      _push3(`<!--]-->`);
                    } else {
                      _push3(`<!---->`);
                    }
                    _push3(ssrRenderComponent(unref(_sfc_main$6), null, null, _parent3, _scopeId2));
                    _push3(`</div>`);
                    ssrRenderVNode(_push3, createVNode(resolveDynamicComponent(toast.action), null, null), _parent3, _scopeId2);
                  } else {
                    return [
                      createVNode("div", { class: "grid gap-1" }, [
                        toast.title ? (openBlock(), createBlock(unref(_sfc_main$2), { key: 0 }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(toast.title), 1)
                          ]),
                          _: 2
                        }, 1024)) : createCommentVNode("", true),
                        toast.description ? (openBlock(), createBlock(Fragment, { key: 1 }, [
                          isVNode(toast.description) ? (openBlock(), createBlock(unref(_sfc_main$5), { key: 0 }, {
                            default: withCtx(() => [
                              (openBlock(), createBlock(resolveDynamicComponent(toast.description)))
                            ]),
                            _: 2
                          }, 1024)) : (openBlock(), createBlock(unref(_sfc_main$5), { key: 1 }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(toast.description), 1)
                            ]),
                            _: 2
                          }, 1024))
                        ], 64)) : createCommentVNode("", true),
                        createVNode(unref(_sfc_main$6))
                      ]),
                      (openBlock(), createBlock(resolveDynamicComponent(toast.action)))
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
            _push2(ssrRenderComponent(unref(_sfc_main$1), null, null, _parent2, _scopeId));
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(unref(toasts), (toast) => {
                return openBlock(), createBlock(unref(_sfc_main$7), mergeProps({
                  key: toast.id
                }, { ref_for: true }, toast), {
                  default: withCtx(() => [
                    createVNode("div", { class: "grid gap-1" }, [
                      toast.title ? (openBlock(), createBlock(unref(_sfc_main$2), { key: 0 }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(toast.title), 1)
                        ]),
                        _: 2
                      }, 1024)) : createCommentVNode("", true),
                      toast.description ? (openBlock(), createBlock(Fragment, { key: 1 }, [
                        isVNode(toast.description) ? (openBlock(), createBlock(unref(_sfc_main$5), { key: 0 }, {
                          default: withCtx(() => [
                            (openBlock(), createBlock(resolveDynamicComponent(toast.description)))
                          ]),
                          _: 2
                        }, 1024)) : (openBlock(), createBlock(unref(_sfc_main$5), { key: 1 }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(toast.description), 1)
                          ]),
                          _: 2
                        }, 1024))
                      ], 64)) : createCommentVNode("", true),
                      createVNode(unref(_sfc_main$6))
                    ]),
                    (openBlock(), createBlock(resolveDynamicComponent(toast.action)))
                  ]),
                  _: 2
                }, 1040);
              }), 128)),
              createVNode(unref(_sfc_main$1))
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/toast/Toaster.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "ToastProvider",
  __ssrInlineRender: true,
  props: {
    label: {},
    duration: {},
    swipeDirection: {},
    swipeThreshold: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(ToastProvider), mergeProps(props, _attrs), {
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
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/toast/ToastProvider.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "ToastTitle",
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
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(ToastTitle), mergeProps(delegatedProps.value, {
        class: unref(cn)("text-sm font-semibold", props.class)
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
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/toast/ToastTitle.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "ToastViewport",
  __ssrInlineRender: true,
  props: {
    hotkey: {},
    label: { type: [String, Function] },
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
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(ToastViewport), mergeProps(delegatedProps.value, {
        class: unref(cn)(
          "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
          props.class
        )
      }, _attrs), null, _parent));
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/toast/ToastViewport.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const toastVariants = cva(
  "group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border border-slate-200 p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[--radix-toast-swipe-end-x] data-[swipe=move]:translate-x-[--radix-toast-swipe-move-x] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full dark:border-slate-800",
  {
    variants: {
      variant: {
        default: "border bg-white text-slate-950 dark:bg-slate-950 dark:text-slate-50",
        destructive: "destructive group border-red-500 bg-red-500 text-slate-50 dark:border-red-900 dark:bg-red-900 dark:text-slate-50"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    useIsLoadingStore();
    const authStore = useAuthStore();
    const router = useRouter();
    const { $useApi } = useNuxtApp();
    const isLoading = ref(true);
    const isError = ref(false);
    const getProfile = async () => {
      var _a, _b;
      const accessToken = localStorage.getItem("accessToken");
      console.log("Tokens:", {
        accessToken,
        refreshToken: localStorage.getItem("refreshToken")
      });
      if (!accessToken) {
        console.log("No access token, redirecting to login");
        isLoading.value = false;
        await router.push("/login");
        return;
      }
      try {
        const { data } = await $useApi.get("/profile");
        console.log("/profile data:", data);
        authStore.setUser(data);
        if (data.role.shortName === "DIZ") {
          await router.push("/diz");
        }
        if (["MASTER", "PACKER"].includes(data.role.shortName)) {
          await router.push("/production");
        }
        if (["FINANCIER"].includes(data.role.shortName)) {
          await router.push("/production");
        }
      } catch (e) {
        console.error("Profile error:", (_a = e.response) == null ? void 0 : _a.status, (_b = e.response) == null ? void 0 : _b.data);
        isError.value = true;
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        await router.push("/login");
      } finally {
        isLoading.value = false;
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiButton = _sfc_main$8;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "h-screen" }, _attrs))} data-v-285078ab><section data-v-285078ab>`);
      if (isLoading.value) {
        _push(`<div class="flex items-center justify-center h-screen" data-v-285078ab><span data-v-285078ab>\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430...</span></div>`);
      } else if (isError.value) {
        _push(`<div class="flex items-center justify-center h-screen" data-v-285078ab><div class="text-center" data-v-285078ab><p class="text-red-500" data-v-285078ab>\u041E\u0448\u0438\u0431\u043A\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0438 \u043F\u0440\u043E\u0444\u0438\u043B\u044F</p>`);
        _push(ssrRenderComponent(_component_UiButton, {
          variant: "outline",
          onClick: getProfile
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` \u041F\u043E\u0432\u0442\u043E\u0440\u0438\u0442\u044C `);
            } else {
              return [
                createTextVNode(" \u041F\u043E\u0432\u0442\u043E\u0440\u0438\u0442\u044C ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div>`);
      } else {
        _push(`<div data-v-285078ab>`);
        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
        _push(`</div>`);
      }
      _push(`</section>`);
      _push(ssrRenderComponent(unref(_sfc_main$4), null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-285078ab"]]);

export { _default as default };
//# sourceMappingURL=default-zhGxqOQJ.mjs.map
