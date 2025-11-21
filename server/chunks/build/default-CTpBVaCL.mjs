import { _ as _sfc_main$1 } from './index-B6vrBiru.mjs';
import { defineComponent, useSSRContext, ref, mergeProps, withCtx, createTextVNode, unref } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot } from 'vue/server-renderer';
import { u as useAuthStore } from './auth-CDeEREL9.mjs';
import { u as useIsLoadingStore } from './isLoading-BaPa0n0V.mjs';
import { a as useRouter, b as useNuxtApp } from './server.mjs';
import { _ as _sfc_main$3 } from './ToastViewport-BDwwoyJ8.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import 'radix-vue';
import 'class-variance-authority';
import './utils-TCWotVPY.mjs';
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
import 'vue-router';
import '@iconify/vue';
import 'axios';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'unhead/plugins';
import 'lucide-vue-next';

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
      const accessToken = localStorage.getItem("accessToken");
      if (!accessToken) {
        isLoading.value = false;
        await router.push("/login");
        return;
      }
      try {
        const { data } = await $useApi.get("/profile");
        authStore.setUser(data);
        if (data.role.shortName === "DIZ") {
          await router.push("/diz");
        }
        if (["MASTER", "PACKER", "FRZ"].includes(data.role.shortName)) {
          await router.push("/production");
        }
        if (["FINANCIER"].includes(data.role.shortName)) {
          await router.push("/production");
        }
      } catch (e) {
        isError.value = true;
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        await router.push("/login");
      } finally {
        isLoading.value = false;
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiButton = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "h-screen" }, _attrs))} data-v-43c0e613><section data-v-43c0e613>`);
      if (isLoading.value) {
        _push(`<div class="flex items-center justify-center h-screen" data-v-43c0e613><span data-v-43c0e613>\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430...</span></div>`);
      } else if (isError.value) {
        _push(`<div class="flex items-center justify-center h-screen" data-v-43c0e613><div class="text-center" data-v-43c0e613><p class="text-red-500" data-v-43c0e613>\u041E\u0448\u0438\u0431\u043A\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0438 \u043F\u0440\u043E\u0444\u0438\u043B\u044F</p>`);
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
        _push(`<div data-v-43c0e613>`);
        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
        _push(`</div>`);
      }
      _push(`</section>`);
      _push(ssrRenderComponent(unref(_sfc_main$3), null, null, _parent));
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
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-43c0e613"]]);

export { _default as default };
//# sourceMappingURL=default-CTpBVaCL.mjs.map
