import { _ as _sfc_main$1 } from './Sidebar-ClYzRSuC.mjs';
import { _ as _sfc_main$2 } from './NuxtImg-BJKLxDnu.mjs';
import { _ as _sfc_main$3 } from './index-B6vrBiru.mjs';
import { _ as __nuxt_component_0 } from './index-BPQNkNDf.mjs';
import { _ as _sfc_main$4 } from './index-DiSSjj1M.mjs';
import { _ as __nuxt_component_0$1 } from './nuxt-link-BxYosf5u.mjs';
import { _ as _sfc_main$5 } from './OrderFormModal-Cg_8pl1L.mjs';
import { u as useMyFormatDate, _ as _sfc_main$b, a as _sfc_main$9, b as _sfc_main$8, c as _sfc_main$a, d as _sfc_main$1$1, e as _sfc_main$7 } from './useMyFormatDate-BhDuhd2V.mjs';
import { _ as _sfc_main$6 } from './CreateModal-D5eq6dl9.mjs';
import { _ as _sfc_main$2$1, a as _sfc_main$d, b as _sfc_main$1$2 } from './CollapsibleTrigger-CpqLm9eE.mjs';
import { _ as _sfc_main$c } from './UploadFileForm-D83FwgZv.mjs';
import { defineComponent, ref, mergeProps, unref, withCtx, createVNode, toDisplayString, createTextVNode, createBlock, openBlock, Fragment, renderList, createCommentVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import { b as useNuxtApp, i as useRoute, u as useHead } from './server.mjs';
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
import '@iconify/utils/lib/css/icon';
import 'perfect-debounce';
import './DialogContent-BsO2ljLB.mjs';
import './DialogDescription-D5yt23q9.mjs';
import './DialogFooter-CQpXS8R1.mjs';
import './OrderForm-DCVnpRuC.mjs';
import 'vee-validate';
import './Label-Bxzolydd.mjs';
import './Input-DoHPrX2-.mjs';
import './SelectScrollDownButton-JzJI8BsA.mjs';
import './SelectGroup-BKLQULEA.mjs';
import './Switch-BsBEqAPz.mjs';
import './Textarea-oqH4YeW4.mjs';
import '@vee-validate/zod';
import 'zod';
import './Card-D2-UPrX8.mjs';
import './CardTitle-Dyaq6zaM.mjs';
import './CardDescription-CwDlX6V_.mjs';
import './CardContent-5uJgHkPl.mjs';
import './CardFooter-BUlih3MF.mjs';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[id]",
  __ssrInlineRender: true,
  setup(__props) {
    const { $useApi } = useNuxtApp();
    const route = useRoute();
    const dealId = route.params.id;
    const defaultDeal = {
      id: 0,
      title: "\u041F\u0443\u0441\u0442\u043E",
      price: 1e4,
      status: "null",
      deadline: "-----",
      clothingMethod: "string",
      description: "string",
      source: "string",
      adTag: "string",
      discont: "string",
      sphere: "string",
      city: "string",
      region: "string",
      cardLink: "string",
      paid: "string",
      totalPrice: 1,
      dopsPrice: 1,
      recievedPayments: 1,
      remainder: 1,
      firstPayment: "string",
      clientType: "string",
      recievedPay: 1,
      createdAt: "",
      dealers: [],
      client: {
        id: 0,
        fullName: "string",
        workSpaceId: 0,
        groupId: 0,
        phone: "string",
        type: "string",
        chatLink: "string",
        gender: "string",
        firstContact: "string",
        adLink: "string",
        inn: "string"
      },
      preorder: {
        preview: "string"
      },
      deliveries: [
        {
          id: 0,
          method: "string",
          type: "string",
          description: "string",
          track: "string",
          status: "string",
          price: 0
        }
      ]
    };
    const deal = ref({ ...defaultDeal });
    const dealDeliveries = ref([...defaultDeal.deliveries]);
    const stages = ref([]);
    ref(true);
    const workersList = ref([]);
    const getDeal = async () => {
      try {
        const { data: dealData } = await $useApi.get(`production/deals/${dealId}`);
        const { data: preorder } = await $useApi.get(
          "kaiten/card/" + dealData.card_id
        );
        const { data: workers } = await $useApi.get("production/workers");
        if (preorder !== "Nope") {
          dealData.preorder = preorder;
        }
        deal.value = dealData;
        workersList.value = workers;
        console.log(dealData.files);
        useHead({
          title: dealData.title ? `${dealData.title} | Easy CRM` : "Easy CRM"
          // meta: [
          //   { property: "og:image", content: deal.value.preorder.preview },
          //   { property: "og:image:alt", content: 'preview'},
          //   { property: "og:site_name", content: 'easy-crm.pro'},
          //   { property: "og:type", content: "object" },
          //   { property: "og:title", content: deal.value.title },
          //   { property: "og:description", content: deal.value.deadline },
          //   { property: "og:url", content: `https://easy-crm.pro/orders/${dealId}` },
          // ],
        });
      } catch (error) {
        console.error("\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u0440\u0438 \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0435 \u0441\u0434\u0435\u043B\u043A\u0438:", error);
      }
    };
    async function changeOrderStage(orderIdx, order) {
      try {
        deal.value.orders[orderIdx] = order;
        console.log("\u0421\u0442\u0430\u0434\u0438\u044F \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0430");
      } catch (error) {
        console.error("\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u0440\u0438 \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u0438 \u0441\u0442\u0430\u0434\u0438\u0438:", error);
        console.log("\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u0440\u0438 \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u0438 \u0441\u0442\u0430\u0434\u0438\u0438");
      }
    }
    const getDeliveries = async () => {
      try {
        const { data } = await $useApi.get(`/deals/${dealId}/deliveries`);
        console.log(data);
        dealDeliveries.value = data.deliveries || [];
        return;
      } catch (error) {
        console.log(error);
      }
    };
    const getFiles = async () => {
      try {
        const { data } = await $useApi.get(`/deals/${dealId}/files`);
        deal.value.files = data.files || [];
        return;
      } catch (error) {
        console.log(error);
      }
    };
    const getOrders = async () => {
      try {
        const { data } = await $useApi.get(`/deals/${dealId}/orders`);
        deal.value.orders = data.orders || [];
        return;
      } catch (error) {
        console.log(error);
      }
    };
    const copyToClipboard = async () => {
      try {
        await (void 0).clipboard.writeText(
          "https://easy-crm.pro/orders/" + dealId
        );
        console.log("\u0421\u0441\u044B\u043B\u043A\u0430 \u0441\u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u043D\u0430 \u0432 \u0431\u0443\u0444\u0435\u0440 \u043E\u0431\u043C\u0435\u043D\u0430!");
      } catch (error) {
        console.error("\u041E\u0448\u0438\u0431\u043A\u0430 \u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F \u0441\u0441\u044B\u043B\u043A\u0438:", error);
      }
    };
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
    const dealUpdated = () => {
      console.log("deal-updated");
      getDeal();
    };
    const deleteDoc = async (fileId) => {
      try {
        await $useApi.delete(`files/${fileId}`);
        await getFiles();
      } catch (e) {
        console.log(e);
      }
    };
    const openInNewWindow = (url) => {
      if (url) {
        (void 0).open(url, "_blank");
      } else {
        console.error("URL \u043E\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u0435\u0442");
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_LayoutSidebar = _sfc_main$1;
      const _component_NuxtImg = _sfc_main$2;
      const _component_UiButton = _sfc_main$3;
      const _component_Icon = __nuxt_component_0;
      const _component_UiBadge = _sfc_main$4;
      const _component_NuxtLink = __nuxt_component_0$1;
      const _component_MyOrdersOrderFormModal = _sfc_main$5;
      const _component_UiAccordion = _sfc_main$b;
      const _component_UiAccordionItem = _sfc_main$9;
      const _component_UiAccordionTrigger = _sfc_main$8;
      const _component_UiAccordionContent = _sfc_main$a;
      const _component_MyOrdersOrderPreview = _sfc_main$1$1;
      const _component_MyDeliveriesCreateModal = _sfc_main$6;
      const _component_MyDeliveriesDeliveryPreview = _sfc_main$7;
      const _component_UiCollapsible = _sfc_main$2$1;
      const _component_MyOrdersUploadFileForm = _sfc_main$c;
      const _component_UiCollapsibleTrigger = _sfc_main$d;
      const _component_UiCollapsibleContent = _sfc_main$1$2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex relative" }, _attrs))}><div class="w-[50px] fixed">`);
      _push(ssrRenderComponent(_component_LayoutSidebar, null, null, _parent));
      _push(`</div><div class="p-3 w-full ml-[50px] flex justify-center gap-3"><div class="flex flex-col max-w-[720px] w-full gap-3 p-4 bg-slate-100 rounded-md shadow">`);
      if (unref(deal).preorder.preview) {
        _push(ssrRenderComponent(_component_NuxtImg, {
          src: unref(deal).preorder.preview,
          alt: "\u041F\u0440\u0435\u0434\u043F\u0440\u043E\u0441\u043C\u043E\u0442\u0440",
          class: "mb-2 rounded w-full cursor-pointer",
          onClick: ($event) => openInNewWindow(unref(deal).preorder.preview)
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<div><div class="flex">`);
      _push(ssrRenderComponent(_component_UiButton, {
        class: "h-6 w-6 mr-2 p-0",
        onClick: ($event) => copyToClipboard()
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
        _: 1
      }, _parent));
      _push(`<strong>${ssrInterpolate(((_a = unref(deal)) == null ? void 0 : _a.title) || "\u041D\u0435\u0438\u0437\u0432\u0435\u0441\u0442\u043D\u0430\u044F \u0441\u0434\u0435\u043B\u043A\u0430")}</strong></div><div>\u0413\u043E\u0442\u043E\u0432\u043D\u043E\u0441\u0442\u044C: ${ssrInterpolate(("useMyFormatDate" in _ctx ? _ctx.useMyFormatDate : unref(useMyFormatDate))(unref(deal).deadline))}</div><div> \u0421\u0441\u044B\u043B\u043A\u0430 \u043D\u0430 \u0441\u0434\u0435\u043B\u043A\u0443: `);
      _push(ssrRenderComponent(_component_UiBadge, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: unref(deal).client.chatLink,
              target: "_blank"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span${_scopeId2}>${ssrInterpolate(unref(deal).client.chatLink.includes("amo") ? "amo" : "bluesaless")}</span>`);
                } else {
                  return [
                    createVNode("span", null, toDisplayString(unref(deal).client.chatLink.includes("amo") ? "amo" : "bluesaless"), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_NuxtLink, {
                to: unref(deal).client.chatLink,
                target: "_blank"
              }, {
                default: withCtx(() => [
                  createVNode("span", null, toDisplayString(unref(deal).client.chatLink.includes("amo") ? "amo" : "bluesaless"), 1)
                ]),
                _: 1
              }, 8, ["to"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div>`);
      _push(ssrRenderComponent(_component_UiBadge, { class: "mb-2" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: `${unref(deal).preorder.maket}?name=${encodeURIComponent(unref(deal).title)}.cdr&dl=true`,
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
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_NuxtLink, {
                to: `${unref(deal).preorder.maket}?name=${encodeURIComponent(unref(deal).title)}.cdr&dl=true`,
                target: "_blank"
              }, {
                default: withCtx(() => [
                  createTextVNode(" \u0421\u043A\u0430\u0447\u0430\u0442\u044C \u043C\u0430\u043A\u0435\u0442 ")
                ]),
                _: 1
              }, 8, ["to"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div><div class="flex font-semibold">`);
      _push(ssrRenderComponent(_component_MyOrdersOrderFormModal, {
        deal: unref(deal),
        class: "mr-2 justify-between",
        onOrderCreated: dealUpdated
      }, null, _parent));
      _push(` \u0417\u0430\u0434\u0430\u043D\u0438\u0435: </div><!--[-->`);
      ssrRenderList(unref(deal).orders, (order, orderIdx) => {
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
                          _push4(`\u0417\u0430\u043A\u0430\u0437 ${ssrInterpolate(`(${order.stage.title})`)}`);
                        } else {
                          return [
                            createTextVNode("\u0417\u0430\u043A\u0430\u0437 " + toDisplayString(`(${order.stage.title})`), 1)
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
                            "from-page": "id",
                            onChangeStage: (payload) => changeOrderStage(orderIdx, payload.order),
                            onUpdateOrdersList: getOrders
                          }, null, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_MyOrdersOrderPreview, {
                              order,
                              stages: unref(stages),
                              workers: unref(workersList),
                              "from-page": "id",
                              onChangeStage: (payload) => changeOrderStage(orderIdx, payload.order),
                              onUpdateOrdersList: getOrders
                            }, null, 8, ["order", "stages", "workers", "onChangeStage"])
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_UiAccordionTrigger, { class: "p-0 pl-2 bg-slate-200/60 rounded-t-sm mb-1" }, {
                        default: withCtx(() => [
                          createTextVNode("\u0417\u0430\u043A\u0430\u0437 " + toDisplayString(`(${order.stage.title})`), 1)
                        ]),
                        _: 2
                      }, 1024),
                      createVNode(_component_UiAccordionContent, null, {
                        default: withCtx(() => [
                          createVNode(_component_MyOrdersOrderPreview, {
                            order,
                            stages: unref(stages),
                            workers: unref(workersList),
                            "from-page": "id",
                            onChangeStage: (payload) => changeOrderStage(orderIdx, payload.order),
                            onUpdateOrdersList: getOrders
                          }, null, 8, ["order", "stages", "workers", "onChangeStage"])
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
                        createTextVNode("\u0417\u0430\u043A\u0430\u0437 " + toDisplayString(`(${order.stage.title})`), 1)
                      ]),
                      _: 2
                    }, 1024),
                    createVNode(_component_UiAccordionContent, null, {
                      default: withCtx(() => [
                        createVNode(_component_MyOrdersOrderPreview, {
                          order,
                          stages: unref(stages),
                          workers: unref(workersList),
                          "from-page": "id",
                          onChangeStage: (payload) => changeOrderStage(orderIdx, payload.order),
                          onUpdateOrdersList: getOrders
                        }, null, 8, ["order", "stages", "workers", "onChangeStage"])
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
      _push(`<!--]--></div><div><div class="flex font-semibold">`);
      _push(ssrRenderComponent(_component_MyDeliveriesCreateModal, {
        deal: unref(deal),
        class: "mr-2",
        onDeliveryCreated: getDeliveries
      }, null, _parent));
      _push(` \u0414\u043E\u0441\u0442\u0430\u0432\u043A\u0430: </div><!--[-->`);
      ssrRenderList(unref(dealDeliveries), (delivery, deliveryIdx) => {
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
                            onDeliveryDeleted: getDeliveries
                          }, null, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_MyDeliveriesDeliveryPreview, {
                              delivery,
                              onDeliveryDeleted: getDeliveries
                            }, null, 8, ["delivery"])
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
                            onDeliveryDeleted: getDeliveries
                          }, null, 8, ["delivery"])
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
                          onDeliveryDeleted: getDeliveries
                        }, null, 8, ["delivery"])
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
      _push(`<!--]--></div>`);
      _push(ssrRenderComponent(_component_UiCollapsible, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_MyOrdersUploadFileForm, {
              deal: unref(deal),
              onFileUploaded: getFiles
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UiCollapsibleTrigger, { class: "font-semibold pl-2 w-full text-left bg-slate-200/60 flex items-center justify-between" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u0414\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u044B: `);
                  _push3(ssrRenderComponent(_component_Icon, {
                    class: "ml-auto",
                    name: "mingcute:arrows-down-line",
                    size: "18px"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createTextVNode(" \u0414\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u044B: "),
                    createVNode(_component_Icon, {
                      class: "ml-auto",
                      name: "mingcute:arrows-down-line",
                      size: "18px"
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(_component_UiCollapsibleContent, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(unref(deal).files, (file, index) => {
                    _push3(`<div class="flex gap-2 p-2"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_UiButton, {
                      class: "w-5 h-5 p-0",
                      variant: "destructive",
                      onClick: () => deleteDoc(file.id)
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_Icon, {
                            name: "streamline:delete-1-solid",
                            color: "",
                            size: "11px"
                          }, null, _parent4, _scopeId3));
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
                    }, _parent3, _scopeId2));
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
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(deal).files, (file, index) => {
                      return openBlock(), createBlock("div", {
                        key: index,
                        class: "flex gap-2 p-2"
                      }, [
                        createVNode(_component_UiButton, {
                          class: "w-5 h-5 p-0",
                          variant: "destructive",
                          onClick: () => deleteDoc(file.id)
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_Icon, {
                              name: "streamline:delete-1-solid",
                              color: "",
                              size: "11px"
                            })
                          ]),
                          _: 2
                        }, 1032, ["onClick"]),
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
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode("div", { class: "flex" }, [
                createVNode(_component_MyOrdersUploadFileForm, {
                  deal: unref(deal),
                  onFileUploaded: getFiles
                }, null, 8, ["deal"]),
                createVNode(_component_UiCollapsibleTrigger, { class: "font-semibold pl-2 w-full text-left bg-slate-200/60 flex items-center justify-between" }, {
                  default: withCtx(() => [
                    createTextVNode(" \u0414\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u044B: "),
                    createVNode(_component_Icon, {
                      class: "ml-auto",
                      name: "mingcute:arrows-down-line",
                      size: "18px"
                    })
                  ]),
                  _: 1
                })
              ]),
              createVNode(_component_UiCollapsibleContent, null, {
                default: withCtx(() => [
                  (openBlock(true), createBlock(Fragment, null, renderList(unref(deal).files, (file, index) => {
                    return openBlock(), createBlock("div", {
                      key: index,
                      class: "flex gap-2 p-2"
                    }, [
                      createVNode(_component_UiButton, {
                        class: "w-5 h-5 p-0",
                        variant: "destructive",
                        onClick: () => deleteDoc(file.id)
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_Icon, {
                            name: "streamline:delete-1-solid",
                            color: "",
                            size: "11px"
                          })
                        ]),
                        _: 2
                      }, 1032, ["onClick"]),
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
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/orders/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_id_-Dwtp5uek.mjs.map
