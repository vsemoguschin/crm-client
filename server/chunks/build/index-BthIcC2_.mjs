import { _ as _sfc_main$2 } from './Sidebar-ClYzRSuC.mjs';
import { _ as _sfc_main$3 } from './index-B6vrBiru.mjs';
import { _ as __nuxt_component_0 } from './index-BPQNkNDf.mjs';
import { _ as _sfc_main$6, a as _sfc_main$4, b as _sfc_main$5, c as _sfc_main$3$1, d as _sfc_main$2$1 } from './SelectScrollDownButton-JzJI8BsA.mjs';
import { _ as _sfc_main$7 } from './SelectGroup-BKLQULEA.mjs';
import { _ as _sfc_main$8 } from './SelectLabel-D0_xRNOo.mjs';
import { _ as _sfc_main$9 } from './index-DiSSjj1M.mjs';
import { _ as _sfc_main$a } from './Input-DoHPrX2-.mjs';
import { _ as _sfc_main$b } from './NuxtImg-BJKLxDnu.mjs';
import { _ as __nuxt_component_0$1 } from './nuxt-link-BxYosf5u.mjs';
import { u as useMyFormatDate, _ as _sfc_main$b$1, a as _sfc_main$9$1, b as _sfc_main$8$1, c as _sfc_main$a$1, d as _sfc_main$1$1, e as _sfc_main$d } from './useMyFormatDate-BhDuhd2V.mjs';
import { defineComponent, ref, watch, mergeProps, unref, withCtx, createVNode, isRef, createTextVNode, toDisplayString, createBlock, createCommentVNode, openBlock, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { b as useNuxtApp, u as useHead } from './server.mjs';
import { _ as _sfc_main$2$2, a as _sfc_main$c, b as _sfc_main$1$2 } from './CollapsibleTrigger-CpqLm9eE.mjs';
import './index-9T5woGxV.mjs';
import 'radix-vue';
import 'lucide-vue-next';
import 'class-variance-authority';
import './utils-TCWotVPY.mjs';
import 'clsx';
import 'tailwind-merge';
import './ScrollArea-Kzo2fjeX.mjs';
import './index-gpRkqh0i.mjs';
import '@vueuse/core';
import 'reka-ui';
import './DropdownMenuItem-Bzav__sm.mjs';
import './DropdownMenuSeparator-B4V4iajS.mjs';
import './UserListItem-w8spDyow.mjs';
import './auth-CDeEREL9.mjs';
import 'pinia';
import './isLoading-BaPa0n0V.mjs';
import 'vue-router';
import '@iconify/vue';
import '@iconify/utils/lib/css/icon';
import 'perfect-debounce';
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
import './Card-D2-UPrX8.mjs';
import './CardTitle-Dyaq6zaM.mjs';
import './CardDescription-CwDlX6V_.mjs';
import './CardContent-5uJgHkPl.mjs';
import './CardFooter-BUlih3MF.mjs';
import './OrderFormModal-Cg_8pl1L.mjs';
import './DialogContent-BsO2ljLB.mjs';
import './DialogDescription-D5yt23q9.mjs';
import './DialogFooter-CQpXS8R1.mjs';
import './OrderForm-DCVnpRuC.mjs';
import 'vee-validate';
import './Label-Bxzolydd.mjs';
import './Switch-BsBEqAPz.mjs';
import './Textarea-oqH4YeW4.mjs';
import '@vee-validate/zod';
import 'zod';
import 'embla-carousel-vue';
import 'form-data';
import './DropdownMenuRadioItem-4ysE0sdZ.mjs';
import './Separator-DmvFl46f.mjs';
import './EditModal-BkYjnShT.mjs';
import 'axios';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'unhead/plugins';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "DeliveryList",
  __ssrInlineRender: true,
  props: {
    deliveries: {}
  },
  emits: ["delivery-deleted"],
  setup(__props, { emit: __emit }) {
    const { $useApi } = useNuxtApp();
    const props = __props;
    const deliveries = ref({ ...props.deliveries });
    const getDelivery = async (deliveryIdx, deliveryId) => {
      try {
        const { data } = await $useApi.get(`/deliveries/${deliveryId}`);
        deliveries.value[deliveryIdx] = data;
      } catch (error) {
        console.log(error);
      }
    };
    const emit = __emit;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiAccordion = _sfc_main$b$1;
      const _component_UiAccordionItem = _sfc_main$9$1;
      const _component_UiAccordionTrigger = _sfc_main$8$1;
      const _component_UiAccordionContent = _sfc_main$a$1;
      const _component_MyDeliveriesDeliveryPreview = _sfc_main$d;
      _push(`<!--[-->`);
      ssrRenderList(unref(deliveries), (delivery, deliveryIdx) => {
        _push(`<div class="w-full">`);
        _push(ssrRenderComponent(_component_UiAccordion, {
          type: "single",
          collapsible: ""
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_UiAccordionItem, { value: "item-1" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UiAccordionTrigger, { class: "p-0 pl-2 bg-slate-200/60 rounded-t-sm mb-1" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate(delivery.method)} ${ssrInterpolate(delivery.track ? "(" + delivery.track + ")" : "")}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(delivery.method) + " " + toDisplayString(delivery.track ? "(" + delivery.track + ")" : ""), 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_UiAccordionContent, null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_MyDeliveriesDeliveryPreview, {
                            delivery,
                            onDeliveryEdited: async () => await getDelivery(+deliveryIdx, delivery.id),
                            onDeliveryDeleted: ($event) => emit("delivery-deleted")
                          }, null, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_MyDeliveriesDeliveryPreview, {
                              delivery,
                              onDeliveryEdited: async () => await getDelivery(+deliveryIdx, delivery.id),
                              onDeliveryDeleted: ($event) => emit("delivery-deleted")
                            }, null, 8, ["delivery", "onDeliveryEdited", "onDeliveryDeleted"])
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_UiAccordionTrigger, { class: "p-0 pl-2 bg-slate-200/60 rounded-t-sm mb-1" }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(delivery.method) + " " + toDisplayString(delivery.track ? "(" + delivery.track + ")" : ""), 1)
                        ]),
                        _: 2
                      }, 1024),
                      createVNode(_component_UiAccordionContent, null, {
                        default: withCtx(() => [
                          createVNode(_component_MyDeliveriesDeliveryPreview, {
                            delivery,
                            onDeliveryEdited: async () => await getDelivery(+deliveryIdx, delivery.id),
                            onDeliveryDeleted: ($event) => emit("delivery-deleted")
                          }, null, 8, ["delivery", "onDeliveryEdited", "onDeliveryDeleted"])
                        ]),
                        _: 2
                      }, 1024)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_UiAccordionItem, { value: "item-1" }, {
                  default: withCtx(() => [
                    createVNode(_component_UiAccordionTrigger, { class: "p-0 pl-2 bg-slate-200/60 rounded-t-sm mb-1" }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(delivery.method) + " " + toDisplayString(delivery.track ? "(" + delivery.track + ")" : ""), 1)
                      ]),
                      _: 2
                    }, 1024),
                    createVNode(_component_UiAccordionContent, null, {
                      default: withCtx(() => [
                        createVNode(_component_MyDeliveriesDeliveryPreview, {
                          delivery,
                          onDeliveryEdited: async () => await getDelivery(+deliveryIdx, delivery.id),
                          onDeliveryDeleted: ($event) => emit("delivery-deleted")
                        }, null, 8, ["delivery", "onDeliveryEdited", "onDeliveryDeleted"])
                      ]),
                      _: 2
                    }, 1024)
                  ]),
                  _: 2
                }, 1024)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div>`);
      });
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/my/deliveries/DeliveryList.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const stages = ref([]);
    ref(true);
    const currentStageId = ref("1");
    const deals = ref([]);
    const dealsLoading = ref(false);
    const totalDeals = ref(0);
    const totalPages = ref(0);
    const isSearch = ref(false);
    const orderSearch = ref("");
    const workersList = ref([]);
    const { $useApi } = useNuxtApp();
    useHead({
      title: "\u041F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0441\u0442\u0432\u043E"
    });
    async function loadDealsForStage() {
      console.log("loadDealsForStage");
      if (!currentStageId.value) return;
      dealsLoading.value = true;
      try {
        const response = await $useApi.get(
          `production/stage/${currentStageId.value}`
        );
        const fetchedDeals = response.data.deals;
        await Promise.all(
          fetchedDeals.map(async (deal) => {
            try {
              const preorderResponse = await $useApi.get(
                `kaiten/card/${deal.card_id}`
              );
              deal.preorder = preorderResponse.data;
            } catch (preorderError) {
              console.error(
                `\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u0440\u0438 \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0435 preorder \u0434\u043B\u044F \u0441\u0434\u0435\u043B\u043A\u0438 ${deal.id}:`,
                preorderError
              );
              deal.preorder = null;
            }
          })
        );
        deals.value = fetchedDeals;
        totalDeals.value = response.data.total;
        totalPages.value = response.data.totalPages;
      } catch (error) {
        console.error("\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u0440\u0438 \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0435 \u0441\u0434\u0435\u043B\u043E\u043A:", error);
      } finally {
        dealsLoading.value = false;
      }
    }
    async function loadDealsByName() {
      dealsLoading.value = true;
      if (!orderSearch.value.trim()) return;
      try {
        const response = await $useApi.get(`production/deals`, {
          params: { title: orderSearch.value }
        });
        const fetchedDeals = response.data.deals;
        await Promise.all(
          fetchedDeals.map(async (deal) => {
            try {
              const preorderResponse = await $useApi.get(
                `kaiten/card/${deal.card_id}`
              );
              deal.preorder = preorderResponse.data;
            } catch (preorderError) {
              console.error(
                `\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u0440\u0438 \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0435 preorder \u0434\u043B\u044F \u0441\u0434\u0435\u043B\u043A\u0438 ${deal.id}:`,
                preorderError
              );
              deal.preorder = null;
            }
          })
        );
        deals.value = fetchedDeals;
        totalDeals.value = response.data.total;
        totalPages.value = response.data.totalPages;
      } catch (error) {
        console.error("\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u0440\u0438 \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0435 \u0441\u0434\u0435\u043B\u043E\u043A:", error);
      } finally {
        dealsLoading.value = false;
      }
    }
    const debounce = (func, delay) => {
      let timeout;
      return (...args) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => func(...args), delay);
      };
    };
    const debouncedLoadDealsByName = debounce(
      (query) => loadDealsByName(),
      1e3
    );
    const onInput = () => {
      debouncedLoadDealsByName(orderSearch.value);
    };
    async function changeOrderStage(dealIdx, orderIdx, order) {
      try {
        deals.value[dealIdx].orders[orderIdx] = order;
        console.log(
          !!deals.value[dealIdx].orders.filter(
            (o) => o.stageId === +currentStageId.value
          ).length
        );
        if (deals.value[dealIdx].orders.filter(
          (o) => o.stageId === +currentStageId.value
        ).length) {
          return console.log("stay");
        }
        deals.value.splice(dealIdx, 1);
        console.log("\u0421\u0442\u0430\u0434\u0438\u044F \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0430");
      } catch (error) {
        console.error("\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u0440\u0438 \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u0438 \u0441\u0442\u0430\u0434\u0438\u0438:", error);
        console.log("\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u0440\u0438 \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u0438 \u0441\u0442\u0430\u0434\u0438\u0438");
      }
    }
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
    const downloadYandexResource = async (path, filename) => {
      try {
        const resource = await fetchYandexResource(path);
        if (resource && resource.file) {
          const link = (void 0).createElement("a");
          link.href = resource.file;
          link.download = filename;
          (void 0).body.appendChild(link);
          link.click();
          (void 0).body.removeChild(link);
        } else {
          console.error("\u0420\u0435\u0441\u0443\u0440\u0441 \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D \u0438\u043B\u0438 \u0441\u0441\u044B\u043B\u043A\u0430 \u043E\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u0435\u0442");
        }
      } catch (error) {
        console.error("\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u0440\u0438 \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u0438 \u0440\u0435\u0441\u0443\u0440\u0441\u0430:", error);
      }
    };
    const copyToClipboard = async (text) => {
      try {
        await (void 0).clipboard.writeText("https://easy-crm.pro" + text);
        console.log("\u0421\u0441\u044B\u043B\u043A\u0430 \u0441\u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u043D\u0430 \u0432 \u0431\u0443\u0444\u0435\u0440 \u043E\u0431\u043C\u0435\u043D\u0430!");
      } catch (error) {
        console.error("\u041E\u0448\u0438\u0431\u043A\u0430 \u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F \u0441\u0441\u044B\u043B\u043A\u0438:", error);
      }
    };
    const getDealOrders = async (dealIdx, dealId) => {
      try {
        const { data } = await $useApi.get(`/deals/${dealId}/orders`);
        deals.value[dealIdx].orders = data.orders;
        if (deals.value[dealIdx].orders.filter(
          (o) => o.stageId === +currentStageId.value
        ).length) {
          return console.log("stay");
        }
        deals.value.splice(dealIdx, 1);
        console.log("order deleted");
      } catch (error) {
        console.log(error);
      }
    };
    watch(currentStageId, () => {
      loadDealsForStage();
    });
    console.log("prod/index");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_LayoutSidebar = _sfc_main$2;
      const _component_UiButton = _sfc_main$3;
      const _component_Icon = __nuxt_component_0;
      const _component_UiSelect = _sfc_main$6;
      const _component_UiSelectTrigger = _sfc_main$4;
      const _component_UiSelectValue = _sfc_main$5;
      const _component_UiSelectContent = _sfc_main$3$1;
      const _component_UiSelectGroup = _sfc_main$7;
      const _component_UiSelectLabel = _sfc_main$8;
      const _component_UiSelectItem = _sfc_main$2$1;
      const _component_UiBadge = _sfc_main$9;
      const _component_UiInput = _sfc_main$a;
      const _component_NuxtImg = _sfc_main$b;
      const _component_NuxtLink = __nuxt_component_0$1;
      const _component_UiAccordion = _sfc_main$b$1;
      const _component_UiAccordionItem = _sfc_main$9$1;
      const _component_UiAccordionTrigger = _sfc_main$8$1;
      const _component_UiAccordionContent = _sfc_main$a$1;
      const _component_MyOrdersOrderPreview = _sfc_main$1$1;
      const _component_MyDeliveriesDeliveryList = _sfc_main$1;
      const _component_UiCollapsible = _sfc_main$2$2;
      const _component_UiCollapsibleTrigger = _sfc_main$c;
      const _component_UiCollapsibleContent = _sfc_main$1$2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex relative h-screen overflow-hidden" }, _attrs))}><div><div class="w-[50px] fixed">`);
      _push(ssrRenderComponent(_component_LayoutSidebar, null, null, _parent));
      _push(`</div><div class="mr-[50px]"></div></div><div class="flex flex-col p-3 h-full w-[calc(100%-0px)] items-center overflow-auto"><div class="max-w-[720px] w-full flex items-center gap-2">`);
      if (unref(isSearch)) {
        _push(ssrRenderComponent(_component_UiButton, {
          variant: "outline",
          onClick: async () => {
            isSearch.value = false;
            await loadDealsForStage();
            orderSearch.value = "";
          }
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_Icon, {
                name: "ic:round-menu",
                color: "",
                size: "20px"
              }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_Icon, {
                  name: "ic:round-menu",
                  color: "",
                  size: "20px"
                })
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="flex w-full items-center gap-2">`);
      if (!unref(isSearch)) {
        _push(ssrRenderComponent(_component_UiSelect, {
          modelValue: unref(currentStageId),
          "onUpdate:modelValue": ($event) => isRef(currentStageId) ? currentStageId.value = $event : null,
          class: "w-full"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_UiSelectTrigger, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UiSelectValue, { placeholder: "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0441\u0442\u0430\u0434\u0438\u044E" }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_UiSelectValue, { placeholder: "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0441\u0442\u0430\u0434\u0438\u044E" })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UiSelectContent, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UiSelectGroup, null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_UiSelectLabel, null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`\u0421\u0442\u0430\u0434\u0438\u0438`);
                              } else {
                                return [
                                  createTextVNode("\u0421\u0442\u0430\u0434\u0438\u0438")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(`<!--[-->`);
                          ssrRenderList(unref(stages), (stage) => {
                            _push4(ssrRenderComponent(_component_UiSelectItem, {
                              key: stage.id,
                              value: stage.id.toString()
                            }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`<div class="flex items-center gap-2"${_scopeId4}><div${_scopeId4}>${ssrInterpolate(stage.title)}</div>`);
                                  if (stage.id.toString() === unref(currentStageId)) {
                                    _push5(ssrRenderComponent(_component_UiBadge, {
                                      class: "rounded-sm py-0",
                                      variant: "outline"
                                    }, {
                                      default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                        if (_push6) {
                                          _push6(`${ssrInterpolate(unref(totalDeals))}`);
                                        } else {
                                          return [
                                            createTextVNode(toDisplayString(unref(totalDeals)), 1)
                                          ];
                                        }
                                      }),
                                      _: 2
                                    }, _parent5, _scopeId4));
                                  } else {
                                    _push5(`<!---->`);
                                  }
                                  _push5(`</div>`);
                                } else {
                                  return [
                                    createVNode("div", { class: "flex items-center gap-2" }, [
                                      createVNode("div", null, toDisplayString(stage.title), 1),
                                      stage.id.toString() === unref(currentStageId) ? (openBlock(), createBlock(_component_UiBadge, {
                                        key: 0,
                                        class: "rounded-sm py-0",
                                        variant: "outline"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(unref(totalDeals)), 1)
                                        ]),
                                        _: 1
                                      })) : createCommentVNode("", true)
                                    ])
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                          });
                          _push4(`<!--]-->`);
                        } else {
                          return [
                            createVNode(_component_UiSelectLabel, null, {
                              default: withCtx(() => [
                                createTextVNode("\u0421\u0442\u0430\u0434\u0438\u0438")
                              ]),
                              _: 1
                            }),
                            (openBlock(true), createBlock(Fragment, null, renderList(unref(stages), (stage) => {
                              return openBlock(), createBlock(_component_UiSelectItem, {
                                key: stage.id,
                                value: stage.id.toString()
                              }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "flex items-center gap-2" }, [
                                    createVNode("div", null, toDisplayString(stage.title), 1),
                                    stage.id.toString() === unref(currentStageId) ? (openBlock(), createBlock(_component_UiBadge, {
                                      key: 0,
                                      class: "rounded-sm py-0",
                                      variant: "outline"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(unref(totalDeals)), 1)
                                      ]),
                                      _: 1
                                    })) : createCommentVNode("", true)
                                  ])
                                ]),
                                _: 2
                              }, 1032, ["value"]);
                            }), 128))
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_UiSelectGroup, null, {
                        default: withCtx(() => [
                          createVNode(_component_UiSelectLabel, null, {
                            default: withCtx(() => [
                              createTextVNode("\u0421\u0442\u0430\u0434\u0438\u0438")
                            ]),
                            _: 1
                          }),
                          (openBlock(true), createBlock(Fragment, null, renderList(unref(stages), (stage) => {
                            return openBlock(), createBlock(_component_UiSelectItem, {
                              key: stage.id,
                              value: stage.id.toString()
                            }, {
                              default: withCtx(() => [
                                createVNode("div", { class: "flex items-center gap-2" }, [
                                  createVNode("div", null, toDisplayString(stage.title), 1),
                                  stage.id.toString() === unref(currentStageId) ? (openBlock(), createBlock(_component_UiBadge, {
                                    key: 0,
                                    class: "rounded-sm py-0",
                                    variant: "outline"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(unref(totalDeals)), 1)
                                    ]),
                                    _: 1
                                  })) : createCommentVNode("", true)
                                ])
                              ]),
                              _: 2
                            }, 1032, ["value"]);
                          }), 128))
                        ]),
                        _: 2
                      }, 1024)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_UiSelectTrigger, null, {
                  default: withCtx(() => [
                    createVNode(_component_UiSelectValue, { placeholder: "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0441\u0442\u0430\u0434\u0438\u044E" })
                  ]),
                  _: 1
                }),
                createVNode(_component_UiSelectContent, null, {
                  default: withCtx(() => [
                    createVNode(_component_UiSelectGroup, null, {
                      default: withCtx(() => [
                        createVNode(_component_UiSelectLabel, null, {
                          default: withCtx(() => [
                            createTextVNode("\u0421\u0442\u0430\u0434\u0438\u0438")
                          ]),
                          _: 1
                        }),
                        (openBlock(true), createBlock(Fragment, null, renderList(unref(stages), (stage) => {
                          return openBlock(), createBlock(_component_UiSelectItem, {
                            key: stage.id,
                            value: stage.id.toString()
                          }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "flex items-center gap-2" }, [
                                createVNode("div", null, toDisplayString(stage.title), 1),
                                stage.id.toString() === unref(currentStageId) ? (openBlock(), createBlock(_component_UiBadge, {
                                  key: 0,
                                  class: "rounded-sm py-0",
                                  variant: "outline"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(unref(totalDeals)), 1)
                                  ]),
                                  _: 1
                                })) : createCommentVNode("", true)
                              ])
                            ]),
                            _: 2
                          }, 1032, ["value"]);
                        }), 128))
                      ]),
                      _: 2
                    }, 1024)
                  ]),
                  _: 2
                }, 1024)
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      if (unref(isSearch)) {
        _push(`<div class="w-full">`);
        _push(ssrRenderComponent(_component_UiInput, {
          modelValue: unref(orderSearch),
          "onUpdate:modelValue": ($event) => isRef(orderSearch) ? orderSearch.value = $event : null,
          class: "pl-8 w-full",
          type: "search",
          placeholder: "\u0418\u0441\u043A\u0430\u0442\u044C \u0441\u0434\u0435\u043B\u043A\u0438...",
          onInput
        }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      if (!unref(isSearch)) {
        _push(ssrRenderComponent(_component_UiButton, {
          variant: "outline",
          onClick: () => {
            isSearch.value = true;
            console.log(unref(isSearch));
          }
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_Icon, {
                name: "humbleicons:search",
                color: "",
                size: "20px"
              }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_Icon, {
                  name: "humbleicons:search",
                  color: "",
                  size: "20px"
                })
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="max-w-[720px] w-full">`);
      if (unref(dealsLoading)) {
        _push(`<div>\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430 \u0441\u0434\u0435\u043B\u043E\u043A...</div>`);
      } else {
        _push(`<ul class="mt-4 space-y-2"><!--[-->`);
        ssrRenderList(unref(deals), (deal, dealIdx) => {
          var _a;
          _push(`<li class="p-4 bg-slate-100 rounded-md shadow">`);
          if ((_a = deal.preorder) == null ? void 0 : _a.preview) {
            _push(ssrRenderComponent(_component_NuxtImg, {
              src: deal.preorder.preview,
              alt: "\u041F\u0440\u0435\u0434\u043F\u0440\u043E\u0441\u043C\u043E\u0442\u0440",
              class: "mb-2 rounded w-full"
            }, null, _parent));
          } else {
            _push(`<!---->`);
          }
          _push(`<div class="flex">`);
          _push(ssrRenderComponent(_component_UiButton, {
            class: "h-6 w-6 mr-2 p-0",
            onClick: ($event) => copyToClipboard("/orders/" + deal.id)
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(ssrRenderComponent(_component_Icon, {
                  name: "bx:copy",
                  color: "white",
                  size: "18px"
                }, null, _parent2, _scopeId));
              } else {
                return [
                  createVNode(_component_Icon, {
                    name: "bx:copy",
                    color: "white",
                    size: "18px"
                  })
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: "/orders/" + deal.id
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<strong${_scopeId}>${ssrInterpolate(deal.title)}</strong>`);
              } else {
                return [
                  createVNode("strong", null, toDisplayString(deal.title), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</div><div>\u0413\u043E\u0442\u043E\u0432\u043D\u043E\u0441\u0442\u044C: ${ssrInterpolate(("useMyFormatDate" in _ctx ? _ctx.useMyFormatDate : unref(useMyFormatDate))(deal.deadline))}</div><div> \u0421\u0441\u044B\u043B\u043A\u0430 \u043D\u0430 \u0441\u0434\u0435\u043B\u043A\u0443: `);
          _push(ssrRenderComponent(_component_UiBadge, null, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(ssrRenderComponent(_component_NuxtLink, {
                  to: deal.chatLink,
                  target: "_blank"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<span${_scopeId2}>${ssrInterpolate(deal.chatLink.includes("amo") ? "amo" : "bluesaless")}</span>`);
                    } else {
                      return [
                        createVNode("span", null, toDisplayString(deal.chatLink.includes("amo") ? "amo" : "bluesaless"), 1)
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              } else {
                return [
                  createVNode(_component_NuxtLink, {
                    to: deal.chatLink,
                    target: "_blank"
                  }, {
                    default: withCtx(() => [
                      createVNode("span", null, toDisplayString(deal.chatLink.includes("amo") ? "amo" : "bluesaless"), 1)
                    ]),
                    _: 2
                  }, 1032, ["to"])
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</div>`);
          _push(ssrRenderComponent(_component_UiBadge, { class: "mb-2" }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(ssrRenderComponent(_component_NuxtLink, {
                  to: `${deal.preorder.maket}?name=${encodeURIComponent(deal.title)}.cdr&dl=true`,
                  target: "_blank"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(` \u0421\u043A\u0430\u0447\u0430\u0442\u044C \u043C\u0430\u043A\u0435\u0442 `);
                    } else {
                      return [
                        createTextVNode(" \u0421\u043A\u0430\u0447\u0430\u0442\u044C \u043C\u0430\u043A\u0435\u0442 ")
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              } else {
                return [
                  createVNode(_component_NuxtLink, {
                    to: `${deal.preorder.maket}?name=${encodeURIComponent(deal.title)}.cdr&dl=true`,
                    target: "_blank"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" \u0421\u043A\u0430\u0447\u0430\u0442\u044C \u043C\u0430\u043A\u0435\u0442 ")
                    ]),
                    _: 2
                  }, 1032, ["to"])
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`<div class="font-semibold"> \u0417\u0430\u0434\u0430\u043D\u0438\u0435: ${ssrInterpolate(deal.orders.length ? "" : 0)}</div><!--[-->`);
          ssrRenderList(deal.orders, (order, orderIdx) => {
            _push(`<div class="w-full">`);
            _push(ssrRenderComponent(_component_UiAccordion, {
              type: "single",
              collapsible: ""
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(ssrRenderComponent(_component_UiAccordionItem, { value: "item-1" }, {
                    default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                      if (_push3) {
                        _push3(ssrRenderComponent(_component_UiAccordionTrigger, { class: "p-0 pl-2 bg-slate-200/60 rounded-t-sm mb-1" }, {
                          default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                            var _a2, _b;
                            if (_push4) {
                              _push4(`\u0417\u0430\u043A\u0430\u0437 ${ssrInterpolate(deal.orders.length === 1 ? "" : orderIdx + 1)} ${ssrInterpolate(order.stageId === +unref(currentStageId) ? "" : `(${(_a2 = unref(stages).find((s) => s.id === order.stageId)) == null ? void 0 : _a2.title})`)}`);
                            } else {
                              return [
                                createTextVNode("\u0417\u0430\u043A\u0430\u0437 " + toDisplayString(deal.orders.length === 1 ? "" : orderIdx + 1) + " " + toDisplayString(order.stageId === +unref(currentStageId) ? "" : `(${(_b = unref(stages).find((s) => s.id === order.stageId)) == null ? void 0 : _b.title})`), 1)
                              ];
                            }
                          }),
                          _: 2
                        }, _parent3, _scopeId2));
                        _push3(ssrRenderComponent(_component_UiAccordionContent, null, {
                          default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                            if (_push4) {
                              _push4(ssrRenderComponent(_component_MyOrdersOrderPreview, {
                                order,
                                stages: unref(stages),
                                workers: unref(workersList),
                                "from-page": "prod",
                                onUpdateOrdersList: () => getDealOrders(dealIdx, deal.id),
                                onChangeStage: (payload) => changeOrderStage(dealIdx, orderIdx, payload.order)
                              }, null, _parent4, _scopeId3));
                            } else {
                              return [
                                createVNode(_component_MyOrdersOrderPreview, {
                                  order,
                                  stages: unref(stages),
                                  workers: unref(workersList),
                                  "from-page": "prod",
                                  onUpdateOrdersList: () => getDealOrders(dealIdx, deal.id),
                                  onChangeStage: (payload) => changeOrderStage(dealIdx, orderIdx, payload.order)
                                }, null, 8, ["order", "stages", "workers", "onUpdateOrdersList", "onChangeStage"])
                              ];
                            }
                          }),
                          _: 2
                        }, _parent3, _scopeId2));
                      } else {
                        return [
                          createVNode(_component_UiAccordionTrigger, { class: "p-0 pl-2 bg-slate-200/60 rounded-t-sm mb-1" }, {
                            default: withCtx(() => {
                              var _a2;
                              return [
                                createTextVNode("\u0417\u0430\u043A\u0430\u0437 " + toDisplayString(deal.orders.length === 1 ? "" : orderIdx + 1) + " " + toDisplayString(order.stageId === +unref(currentStageId) ? "" : `(${(_a2 = unref(stages).find((s) => s.id === order.stageId)) == null ? void 0 : _a2.title})`), 1)
                              ];
                            }),
                            _: 2
                          }, 1024),
                          createVNode(_component_UiAccordionContent, null, {
                            default: withCtx(() => [
                              createVNode(_component_MyOrdersOrderPreview, {
                                order,
                                stages: unref(stages),
                                workers: unref(workersList),
                                "from-page": "prod",
                                onUpdateOrdersList: () => getDealOrders(dealIdx, deal.id),
                                onChangeStage: (payload) => changeOrderStage(dealIdx, orderIdx, payload.order)
                              }, null, 8, ["order", "stages", "workers", "onUpdateOrdersList", "onChangeStage"])
                            ]),
                            _: 2
                          }, 1024)
                        ];
                      }
                    }),
                    _: 2
                  }, _parent2, _scopeId));
                } else {
                  return [
                    createVNode(_component_UiAccordionItem, { value: "item-1" }, {
                      default: withCtx(() => [
                        createVNode(_component_UiAccordionTrigger, { class: "p-0 pl-2 bg-slate-200/60 rounded-t-sm mb-1" }, {
                          default: withCtx(() => {
                            var _a2;
                            return [
                              createTextVNode("\u0417\u0430\u043A\u0430\u0437 " + toDisplayString(deal.orders.length === 1 ? "" : orderIdx + 1) + " " + toDisplayString(order.stageId === +unref(currentStageId) ? "" : `(${(_a2 = unref(stages).find((s) => s.id === order.stageId)) == null ? void 0 : _a2.title})`), 1)
                            ];
                          }),
                          _: 2
                        }, 1024),
                        createVNode(_component_UiAccordionContent, null, {
                          default: withCtx(() => [
                            createVNode(_component_MyOrdersOrderPreview, {
                              order,
                              stages: unref(stages),
                              workers: unref(workersList),
                              "from-page": "prod",
                              onUpdateOrdersList: () => getDealOrders(dealIdx, deal.id),
                              onChangeStage: (payload) => changeOrderStage(dealIdx, orderIdx, payload.order)
                            }, null, 8, ["order", "stages", "workers", "onUpdateOrdersList", "onChangeStage"])
                          ]),
                          _: 2
                        }, 1024)
                      ]),
                      _: 2
                    }, 1024)
                  ];
                }
              }),
              _: 2
            }, _parent));
            _push(`</div>`);
          });
          _push(`<!--]--><div class="font-semibold">\u0414\u043E\u0441\u0442\u0430\u0432\u043A\u0430:</div>`);
          _push(ssrRenderComponent(_component_MyDeliveriesDeliveryList, {
            deliveries: deal.deliveries
          }, null, _parent));
          _push(`<div class="mt-2">`);
          _push(ssrRenderComponent(_component_UiCollapsible, null, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<div class="flex"${_scopeId}>`);
                _push2(ssrRenderComponent(_component_UiCollapsibleTrigger, { class: "font-semibold pl-2 w-full text-left bg-slate-200/60 flex items-center justify-between" }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(` \u0414\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u044B: ${ssrInterpolate(deal.files.length ? "" : "\u041D\u0435 \u043D\u0443\u0436\u043D\u044B")} `);
                      _push3(ssrRenderComponent(_component_Icon, {
                        class: "ml-auto",
                        name: "mingcute:arrows-down-line",
                        size: "18px"
                      }, null, _parent3, _scopeId2));
                    } else {
                      return [
                        createTextVNode(" \u0414\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u044B: " + toDisplayString(deal.files.length ? "" : "\u041D\u0435 \u043D\u0443\u0436\u043D\u044B") + " ", 1),
                        createVNode(_component_Icon, {
                          class: "ml-auto",
                          name: "mingcute:arrows-down-line",
                          size: "18px"
                        })
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
                _push2(`</div>`);
                _push2(ssrRenderComponent(_component_UiCollapsibleContent, null, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<!--[-->`);
                      ssrRenderList(deal.files, (file, index) => {
                        _push3(`<div class="flex gap-2 p-2"${_scopeId2}>`);
                        if (file.type === "documents") {
                          _push3(`<div class="underline decoration-solid cursor-pointer text-blue-600"${_scopeId2}>${ssrInterpolate(file.name)}</div>`);
                        } else {
                          _push3(`<!---->`);
                        }
                        _push3(`</div>`);
                      });
                      _push3(`<!--]-->`);
                    } else {
                      return [
                        (openBlock(true), createBlock(Fragment, null, renderList(deal.files, (file, index) => {
                          return openBlock(), createBlock("div", {
                            key: index,
                            class: "flex gap-2 p-2"
                          }, [
                            file.type === "documents" ? (openBlock(), createBlock("div", {
                              key: 0,
                              class: "underline decoration-solid cursor-pointer text-blue-600",
                              onClick: ($event) => downloadYandexResource(
                                `EasyCRM/documents/${file.ya_name}`,
                                file.name
                              )
                            }, toDisplayString(file.name), 9, ["onClick"])) : createCommentVNode("", true)
                          ]);
                        }), 128))
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              } else {
                return [
                  createVNode("div", { class: "flex" }, [
                    createVNode(_component_UiCollapsibleTrigger, { class: "font-semibold pl-2 w-full text-left bg-slate-200/60 flex items-center justify-between" }, {
                      default: withCtx(() => [
                        createTextVNode(" \u0414\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u044B: " + toDisplayString(deal.files.length ? "" : "\u041D\u0435 \u043D\u0443\u0436\u043D\u044B") + " ", 1),
                        createVNode(_component_Icon, {
                          class: "ml-auto",
                          name: "mingcute:arrows-down-line",
                          size: "18px"
                        })
                      ]),
                      _: 2
                    }, 1024)
                  ]),
                  createVNode(_component_UiCollapsibleContent, null, {
                    default: withCtx(() => [
                      (openBlock(true), createBlock(Fragment, null, renderList(deal.files, (file, index) => {
                        return openBlock(), createBlock("div", {
                          key: index,
                          class: "flex gap-2 p-2"
                        }, [
                          file.type === "documents" ? (openBlock(), createBlock("div", {
                            key: 0,
                            class: "underline decoration-solid cursor-pointer text-blue-600",
                            onClick: ($event) => downloadYandexResource(
                              `EasyCRM/documents/${file.ya_name}`,
                              file.name
                            )
                          }, toDisplayString(file.name), 9, ["onClick"])) : createCommentVNode("", true)
                        ]);
                      }), 128))
                    ]),
                    _: 2
                  }, 1024)
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</div></li>`);
        });
        _push(`<!--]--></ul>`);
      }
      _push(`</div><div class="mt-4 text-sm text-gray-600"> \u0412\u0441\u0435\u0433\u043E \u0441\u0434\u0435\u043B\u043E\u043A: ${ssrInterpolate(unref(totalDeals))} | \u0421\u0442\u0440\u0430\u043D\u0438\u0446: ${ssrInterpolate(unref(totalPages))}</div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/prod/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-BthIcC2_.mjs.map
