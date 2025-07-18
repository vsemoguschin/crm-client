import { _ as _sfc_main$1 } from './Sidebar-D1AIfhZZ.mjs';
import { _ as _sfc_main$2, a as _sfc_main$3, b as _sfc_main$1$1 } from './TabsList-DbIwKgY4.mjs';
import { _ as _sfc_main$4 } from './List-BIAcp_m2.mjs';
import { defineComponent, ref, withAsyncContext, watch, mergeProps, unref, isRef, withCtx, createTextVNode, toDisplayString, createBlock, openBlock, Fragment, renderList, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { a as useNuxtApp } from './server.mjs';
import { u as useHead } from './v3-BEwgjOp-.mjs';
import 'radix-vue';
import './isLoading-BbWzubgi.mjs';
import 'class-variance-authority';
import 'clsx';
import 'tailwind-merge';
import 'pinia';
import 'lucide-vue-next';
import './CardDescription-Bo1EqluP.mjs';
import './CardContent-BEDjQwzu.mjs';
import './CardFooter-DAxSdo34.mjs';
import './EditModal-CeMennDJ.mjs';
import './DialogContent-N24W_Bx3.mjs';
import './DialogDescription-CHHvh8Oz.mjs';
import './DialogFooter-C_pMBt3g.mjs';
import './index-OemDKZ57.mjs';
import '@iconify/vue';
import '@iconify/utils/lib/css/icon';
import 'perfect-debounce';
import './Label-B6Kf4x8e.mjs';
import './SelectScrollDownButton-BvZ6jJsS.mjs';
import './Input-DBSZ1Mdv.mjs';
import '@vueuse/core';
import './Textarea-UC8L-TqN.mjs';
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
import 'ipx';
import 'vue-router';
import 'axios';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'unhead/plugins';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { $useApi } = useNuxtApp();
    useHead({
      title: "\u041E\u0442\u043F\u0440\u0430\u0432\u043A\u0438 | Easy CRM"
    });
    const defaultDelivery = {
      id: 0,
      method: "\u0421\u0414\u0415\u041A",
      type: "\u0411\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u043E",
      description: "",
      track: "",
      status: "",
      price: 0
    };
    const deliveriesStatuses = [
      "\u0421\u043E\u0437\u0434\u0430\u043D\u0430",
      // 'Доступна',
      "\u041E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0430",
      "\u0412\u0440\u0443\u0447\u0435\u043D\u0430",
      "\u0412\u043E\u0437\u0432\u0440\u0430\u0442"
    ];
    const deliveriesFilter = ref(deliveriesStatuses[1]);
    const deliveries = ref([defaultDelivery]);
    ref(defaultDelivery);
    const getDeliveries = async () => {
      const { data: deliveriesDatas } = await $useApi.get(
        "/production/deliveries/",
        { params: { status: deliveriesFilter.value } }
      );
      console.log(deliveriesDatas);
      deliveries.value = deliveriesDatas || [];
      return;
    };
    [__temp, __restore] = withAsyncContext(() => getDeliveries()), await __temp, __restore();
    watch(deliveriesFilter, async () => {
      await getDeliveries();
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_LayoutSidebar = _sfc_main$1;
      const _component_UiTabs = _sfc_main$2;
      const _component_UiTabsList = _sfc_main$3;
      const _component_UiTabsTrigger = _sfc_main$1$1;
      const _component_MyDeliveriesList = _sfc_main$4;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex relative h-screen" }, _attrs))}><div class="w-[50px] fixed">`);
      _push(ssrRenderComponent(_component_LayoutSidebar, null, null, _parent));
      _push(`</div><div class="flex flex-col p-3 h-full w-full ml-[50px]">`);
      _push(ssrRenderComponent(_component_UiTabs, {
        modelValue: unref(deliveriesFilter),
        "onUpdate:modelValue": ($event) => isRef(deliveriesFilter) ? deliveriesFilter.value = $event : null,
        "default-value": "\u0421\u043E\u0437\u0434\u0430\u043D\u0430"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UiTabsList, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(deliveriesStatuses, (status, idx) => {
                    _push3(ssrRenderComponent(_component_UiTabsTrigger, {
                      key: idx,
                      value: status
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate(status)}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(status), 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [
                    (openBlock(), createBlock(Fragment, null, renderList(deliveriesStatuses, (status, idx) => {
                      return createVNode(_component_UiTabsTrigger, {
                        key: idx,
                        value: status
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(status), 1)
                        ]),
                        _: 2
                      }, 1032, ["value"]);
                    }), 64))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UiTabsList, null, {
                default: withCtx(() => [
                  (openBlock(), createBlock(Fragment, null, renderList(deliveriesStatuses, (status, idx) => {
                    return createVNode(_component_UiTabsTrigger, {
                      key: idx,
                      value: status
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(status), 1)
                      ]),
                      _: 2
                    }, 1032, ["value"]);
                  }), 64))
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      if (unref(deliveries).length) {
        _push(`<div class="mt-2 flex gap-2 h-[95%]"><div class="flex flex-col w-full">`);
        _push(ssrRenderComponent(_component_MyDeliveriesList, { deliveries: unref(deliveries) }, null, _parent));
        _push(`</div></div>`);
      } else {
        _push(`<div>\u041F\u0443\u0441\u0442\u043E...</div>`);
      }
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/deliveries/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-BpsAAM5g.mjs.map
