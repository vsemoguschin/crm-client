import { _ as _sfc_main$1 } from './Label-DWRrr4Tu.mjs';
import { _ as _sfc_main$2 } from './Input-aD0e3Jyr.mjs';
import { _ as _sfc_main$3 } from './index-BASHn9g0.mjs';
import { defineComponent, ref, mergeProps, withCtx, createTextVNode, unref, isRef, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { u as useIsLoadingStore, a as useAuthStore } from './isLoading-D2o5w2su.mjs';
import { u as useHead } from './v3-BEwgjOp-.mjs';
import { u as useRouter, a as useNuxtApp, s as setPageLayout } from './server.mjs';
import 'radix-vue';
import '@vueuse/core';
import 'class-variance-authority';
import 'clsx';
import 'tailwind-merge';
import 'pinia';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
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
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'unhead/plugins';
import 'vue-router';
import '@iconify/vue';
import 'axios';

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
    const router = useRouter();
    const { $useApi } = useNuxtApp();
    const login = async () => {
      isLoadingStore.set(true);
      if (email.value === "" || password.value === "")
        return console.log("\u041D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E \u0437\u0430\u043F\u043E\u043B\u043D\u0438\u0442\u044C \u043F\u043E\u043B\u044F");
      try {
        const { data } = await $useApi.post("/login", {
          email: email.value,
          password: password.value
        });
        localStorage.setItem("accessToken", data.accessToken);
        localStorage.setItem("refreshToken", data.refreshToken);
        const { data: userProfile } = await $useApi.get("/profile");
        console.log(userProfile);
        email.value = "";
        password.value = "";
        setPageLayout("default");
        if (userProfile.role.shortName === "DIZ") {
          await router.push("diz");
        } else if (userProfile.role.shortName === "ROD") {
          await router.push("/deals");
        } else if (userProfile.role.shortName === "MARKETER") {
          await router.push("/ad");
        } else if (userProfile.role.shortName === "DP") {
          await router.push("/production");
        } else {
          await router.push("/deals");
        }
        isLoadingStore.set(false);
      } catch (e) {
        console.log(e);
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiLabel = _sfc_main$1;
      const _component_UiInput = _sfc_main$2;
      const _component_UiButton = _sfc_main$3;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex items-center h-screen justify-center min-h-screen bg-zinc" }, _attrs))}><div class="w-full"><div class="text-center mb-8"><h1 class="text-3xl font-bold">EASY NEON CRM</h1><p class="text-slate-500 font-light"> \u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043B\u043E\u0433\u0438\u043D \u0438 \u043F\u0430\u0440\u043E\u043B\u044C \u0434\u043B\u044F \u0432\u0445\u043E\u0434\u0430 \u0432 \u0441\u0438\u0441\u0442\u0435\u043C\u0443 </p></div><form class="flex flex-col items-center text-left font-bold"><div class="mb-4">`);
      _push(ssrRenderComponent(_component_UiLabel, { for: "login" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Login`);
          } else {
            return [
              createTextVNode("Login")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UiInput, {
        id: "login",
        modelValue: unref(email),
        "onUpdate:modelValue": ($event) => isRef(email) ? email.value = $event : null,
        type: "login",
        placeholder: "Enter login",
        required: ""
      }, null, _parent));
      _push(`</div><div class="mb-10">`);
      _push(ssrRenderComponent(_component_UiLabel, { for: "password" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Password`);
          } else {
            return [
              createTextVNode("Password")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UiInput, {
        id: "password",
        modelValue: unref(password),
        "onUpdate:modelValue": ($event) => isRef(password) ? password.value = $event : null,
        placeholder: "Enter password",
        type: "password",
        required: ""
      }, null, _parent));
      _push(`</div><div class="">`);
      _push(ssrRenderComponent(_component_UiButton, {
        class: "w-full h-10 text-xl",
        type: "submit",
        onClick: login
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Login `);
          } else {
            return [
              createTextVNode(" Login ")
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
//# sourceMappingURL=login-KFkRg0mR.mjs.map
