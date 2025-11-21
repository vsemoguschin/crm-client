import { _ as _sfc_main$1 } from './Label-Bxzolydd.mjs';
import { _ as _sfc_main$2 } from './Input-DoHPrX2-.mjs';
import { _ as _sfc_main$3 } from './index-B6vrBiru.mjs';
import { defineComponent, ref, mergeProps, withCtx, createTextVNode, unref, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { u as useAuthStore } from './auth-CDeEREL9.mjs';
import { u as useIsLoadingStore } from './isLoading-BaPa0n0V.mjs';
import { u as useHead, b as useNuxtApp, c as useToast } from './server.mjs';
import { useRouter } from 'vue-router';
import 'radix-vue';
import './utils-TCWotVPY.mjs';
import 'clsx';
import 'tailwind-merge';
import '@vueuse/core';
import 'class-variance-authority';
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
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'unhead/plugins';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "login",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Login | Easy CRM"
    });
    const email = ref("");
    const password = ref("");
    const isLoadingStore = useIsLoadingStore();
    useAuthStore();
    useRouter();
    const { $useApi } = useNuxtApp();
    useToast();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiLabel = _sfc_main$1;
      const _component_UiInput = _sfc_main$2;
      const _component_UiButton = _sfc_main$3;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex items-center h-screen justify-center min-h-screen" }, _attrs))}><div class="w-full max-w-sm mx-auto"><div class="text-center mb-8"><h3 class="text-3xl font-bold">EASY NEON CRM</h3><p class="text-slate-500 font-light"> \u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043B\u043E\u0433\u0438\u043D \u0438 \u043F\u0430\u0440\u043E\u043B\u044C \u0434\u043B\u044F \u0432\u0445\u043E\u0434\u0430 \u0432 \u0441\u0438\u0441\u0442\u0435\u043C\u0443 </p></div><form class="flex flex-col items-center text-left font-semibold"><div class="mb-4 w-full">`);
      _push(ssrRenderComponent(_component_UiLabel, { for: "login" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`\u041B\u043E\u0433\u0438\u043D`);
          } else {
            return [
              createTextVNode("\u041B\u043E\u0433\u0438\u043D")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UiInput, {
        id: "login",
        modelValue: email.value,
        "onUpdate:modelValue": ($event) => email.value = $event,
        placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043B\u043E\u0433\u0438\u043D",
        required: ""
      }, null, _parent));
      _push(`</div><div class="mb-10 w-full">`);
      _push(ssrRenderComponent(_component_UiLabel, { for: "password" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`\u041F\u0430\u0440\u043E\u043B\u044C`);
          } else {
            return [
              createTextVNode("\u041F\u0430\u0440\u043E\u043B\u044C")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UiInput, {
        id: "password",
        modelValue: password.value,
        "onUpdate:modelValue": ($event) => password.value = $event,
        placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043F\u0430\u0440\u043E\u043B\u044C",
        type: "password",
        required: "",
        autocomplete: "current-password"
      }, null, _parent));
      _push(`</div><div class="w-full">`);
      _push(ssrRenderComponent(_component_UiButton, {
        class: "w-full h-10 text-xl",
        type: "submit",
        disabled: unref(isLoadingStore).isLoading
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(isLoadingStore).isLoading ? "\u0412\u0445\u043E\u0434..." : "\u0412\u043E\u0439\u0442\u0438")}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(isLoadingStore).isLoading ? "\u0412\u0445\u043E\u0434..." : "\u0412\u043E\u0439\u0442\u0438"), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></form></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/login.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=login-BVUikYer.mjs.map
