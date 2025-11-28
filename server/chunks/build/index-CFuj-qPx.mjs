import { _ as __nuxt_component_0 } from './nuxt-link-BxYosf5u.mjs';
import { a as useMyDeals, _ as _sfc_main$1 } from './DealCard-BcrLEhxL.mjs';
import { defineComponent, computed, withAsyncContext, mergeProps, withCtx, createTextVNode, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import { i as useRoute, a as useRouter, u as useHead } from './server.mjs';
import { u as useAsyncData } from './index-BPQNkNDf.mjs';
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
import './utils-TCWotVPY.mjs';
import 'clsx';
import 'tailwind-merge';
import './state-_I5XcLqc.mjs';
import './Card-D2-UPrX8.mjs';
import './CardTitle-Dyaq6zaM.mjs';
import './CardDescription-CwDlX6V_.mjs';
import './CardContent-5uJgHkPl.mjs';
import './CardFooter-BUlih3MF.mjs';
import './DialogContent-BsO2ljLB.mjs';
import 'radix-vue';
import 'lucide-vue-next';
import './DialogDescription-D5yt23q9.mjs';
import './DialogFooter-CQpXS8R1.mjs';
import './index-B6vrBiru.mjs';
import 'class-variance-authority';
import './TableHeader-CsCuT7pu.mjs';
import './Switch-BsBEqAPz.mjs';
import './Label-Bxzolydd.mjs';
import './Input-DoHPrX2-.mjs';
import '@vueuse/core';
import './SelectScrollDownButton-JzJI8BsA.mjs';
import './SelectGroup-BKLQULEA.mjs';
import './Combobox-kxEuhT4H.mjs';
import './PopoverContent-Dy99cMmu.mjs';
import './CommandList-DiM7UR93.mjs';
import './ScrollArea-Kzo2fjeX.mjs';
import './Separator-DmvFl46f.mjs';
import './CreateModal-D5eq6dl9.mjs';
import './Textarea-oqH4YeW4.mjs';
import './EditModal-BkYjnShT.mjs';
import './ComboboxModels-D84YuqHH.mjs';
import './TabsList-C3eBcFGa.mjs';
import './auth-CDeEREL9.mjs';
import 'pinia';
import './NuxtImg-BJKLxDnu.mjs';
import './useMyDateFormat-Cn1Jsliy.mjs';
import 'vue-router';
import '@iconify/vue';
import 'axios';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'unhead/plugins';
import '@iconify/utils/lib/css/icon';
import 'perfect-debounce';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const route = useRoute();
    const router = useRouter();
    const { getDeal } = useMyDeals();
    const dealId = computed(() => {
      const raw = route.params.id;
      const value = Array.isArray(raw) ? raw[0] : raw;
      const parsed = Number.parseInt(String(value != null ? value : ""), 10);
      return Number.isFinite(parsed) && parsed > 0 ? parsed : null;
    });
    const {
      data: deal,
      pending,
      error,
      refresh
    } = ([__temp, __restore] = withAsyncContext(async () => useAsyncData(
      () => dealId.value ? `deal:${dealId.value}` : "deal:invalid",
      async () => {
        var _a;
        if (!dealId.value) {
          return null;
        }
        try {
          return await getDeal(dealId.value);
        } catch (err) {
          if (((_a = err == null ? void 0 : err.response) == null ? void 0 : _a.status) === 404) {
            return null;
          }
          throw err;
        }
      },
      {
        watch: [dealId]
      }
    )), __temp = await __temp, __restore(), __temp);
    const pageTitle = computed(
      () => {
        var _a;
        return ((_a = deal.value) == null ? void 0 : _a.title) ? `\u0421\u0434\u0435\u043B\u043A\u0430 ${deal.value.title} | Easy CRM` : "\u0421\u0434\u0435\u043B\u043A\u0430 | Easy CRM";
      }
    );
    useHead(() => ({
      title: pageTitle.value
    }));
    const isInvalidParam = computed(() => dealId.value === null);
    const isDealNotFound = computed(
      () => !isInvalidParam.value && !pending.value && !error.value && !deal.value
    );
    const hasCriticalError = computed(() => Boolean(error.value));
    const handleDealUpdated = async (_dealId) => {
      await refresh();
    };
    const handleDealDeleted = async () => {
      await refresh();
      router.replace("/deals");
    };
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b;
      const _component_NuxtLink = __nuxt_component_0;
      const _component_MyDealsDealCard = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col gap-6 p-6" }, _attrs))}><div class="flex items-center gap-3 text-sm text-muted-foreground">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/deals",
        class: "transition-colors hover:text-primary"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u2190 \u041D\u0430\u0437\u0430\u0434 \u043A \u0441\u0434\u0435\u043B\u043A\u0430\u043C `);
          } else {
            return [
              createTextVNode(" \u2190 \u041D\u0430\u0437\u0430\u0434 \u043A \u0441\u0434\u0435\u043B\u043A\u0430\u043C ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<span class="text-muted-foreground/70">/</span><span class="truncate"${ssrRenderAttr("title", ((_a = unref(deal)) == null ? void 0 : _a.title) || "\u0421\u0434\u0435\u043B\u043A\u0430")}>${ssrInterpolate(((_b = unref(deal)) == null ? void 0 : _b.title) || "\u0421\u0434\u0435\u043B\u043A\u0430")}</span></div><div class="w-full max-w-4xl">`);
      if (unref(pending)) {
        _push(`<div class="rounded-lg border border-border bg-card p-8 text-center text-muted-foreground"> \u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430 \u0441\u0434\u0435\u043B\u043A\u0438... </div>`);
      } else if (unref(hasCriticalError)) {
        _push(`<div class="rounded-lg border border-destructive/40 bg-destructive/10 p-6 text-sm text-destructive"> \u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u0434\u0430\u043D\u043D\u044B\u0435 \u0441\u0434\u0435\u043B\u043A\u0438. \u041F\u043E\u043F\u0440\u043E\u0431\u0443\u0439\u0442\u0435 \u043E\u0431\u043D\u043E\u0432\u0438\u0442\u044C \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0443. </div>`);
      } else if (unref(isInvalidParam)) {
        _push(`<div class="rounded-lg border border-border bg-card p-6 text-sm text-muted-foreground"> \u041D\u0435\u043A\u043E\u0440\u0440\u0435\u043A\u0442\u043D\u044B\u0439 \u0438\u0434\u0435\u043D\u0442\u0438\u0444\u0438\u043A\u0430\u0442\u043E\u0440 \u0441\u0434\u0435\u043B\u043A\u0438. </div>`);
      } else if (unref(isDealNotFound)) {
        _push(`<div class="rounded-lg border border-border bg-card p-6 text-sm text-muted-foreground"> \u0421\u0434\u0435\u043B\u043A\u0430 \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u0430 \u0438\u043B\u0438 \u0431\u044B\u043B\u0430 \u0443\u0434\u0430\u043B\u0435\u043D\u0430. </div>`);
      } else {
        _push(`<div class="min-w-[450px] w-[450px]">`);
        _push(ssrRenderComponent(_component_MyDealsDealCard, {
          deal: unref(deal),
          onDealUpdated: handleDealUpdated,
          onDealDeleted: handleDealDeleted
        }, null, _parent));
        _push(`</div>`);
      }
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/deals/[id]/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-CFuj-qPx.mjs.map
