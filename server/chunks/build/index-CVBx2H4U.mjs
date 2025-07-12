import { _ as _sfc_main$f } from './Sidebar-D1AIfhZZ.mjs';
import { _ as _sfc_main$2$1, a as _sfc_main$g, b as _sfc_main$1$1 } from './TabsList-DbIwKgY4.mjs';
import { _ as _sfc_main$h } from './ComboboxModels-DWUZvn_d.mjs';
import { _ as _sfc_main$4$2, a as _sfc_main$3$3, b as _sfc_main$l, c as _sfc_main$2$5, d as _sfc_main$1$5 } from './DialogContent-N24W_Bx3.mjs';
import { _ as _sfc_main$m } from './DialogDescription-CHHvh8Oz.mjs';
import { _ as _sfc_main$o } from './DialogFooter-C_pMBt3g.mjs';
import { a as useAuthStore, _ as _sfc_main$q } from './isLoading-BbWzubgi.mjs';
import { _ as _sfc_main$r } from './TabsContent-CO2mHCzx.mjs';
import { _ as _sfc_main$s } from './Label-B6Kf4x8e.mjs';
import { _ as _sfc_main$k } from './Input-DBSZ1Mdv.mjs';
import { _ as _sfc_main$7$1, a as _sfc_main$5$3, b as _sfc_main$6$2, c as _sfc_main$4$4, d as _sfc_main$3$5, e as _sfc_main$2$7 } from './SelectScrollDownButton-BvZ6jJsS.mjs';
import { defineComponent, ref, watch, mergeProps, unref, isRef, withCtx, createTextVNode, toDisplayString, createBlock, openBlock, Fragment, renderList, createVNode, createCommentVNode, withModifiers, computed, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderAttr, ssrRenderClass } from 'vue/server-renderer';
import { a as useNuxtApp, b as useToast } from './server.mjs';
import { _ as _sfc_main$5$1, a as _sfc_main$i, b as _sfc_main$2$2, c as _sfc_main$1$2, d as _sfc_main$4$1, e as _sfc_main$3$1 } from './TableHeader-e42BjEs_.mjs';
import { f as _sfc_main$6$1, _ as _sfc_main$5$2, a as _sfc_main$4$3, b as _sfc_main$3$4, c as _sfc_main$2$6, d as _sfc_main$1$6, e as _sfc_main$p } from './index-DnaTyMzW.mjs';
import { _ as _sfc_main$t } from './Textarea-UC8L-TqN.mjs';
import { Q as Qn } from './main-BplioMC0.mjs';
import { MessageCircle } from 'lucide-vue-next';
import { _ as _sfc_main$3$2, a as _sfc_main$2$3, b as _sfc_main$j, c as _sfc_main$1$3 } from './CardDescription-Bo1EqluP.mjs';
import { _ as _sfc_main$2$4, a as _sfc_main$1$4, s as suppliesColumns, b as _sfc_main$n } from './table.columns-DDJJfAYz.mjs';
import { u as useHead } from './v3-BEwgjOp-.mjs';
import { u as useMyFormatPrice } from './useMyFormatPrice-CCAsFuev.mjs';
import { _ as _sfc_main$u } from './ScrollArea-CPCatQNH.mjs';
import { format } from 'date-fns';
import { ru } from 'date-fns/locale';
import { _ as _sfc_main$v } from './Switch-DrDfxfly.mjs';
import { d as dateFormat } from './useMyDateFormat-Cn1Jsliy.mjs';
import 'radix-vue';
import './PopoverContent-Bm4609Rb.mjs';
import './CommandList-CkzhgsM2.mjs';
import './CommandEmpty-D_LexUCd.mjs';
import './CommandInput-BSbgAzOV.mjs';
import 'class-variance-authority';
import 'clsx';
import 'tailwind-merge';
import 'pinia';
import '@vueuse/core';
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
import './Combobox-tEllFkYA.mjs';
import './Separator-kiHjH00C.mjs';
import './Checkbox-Cx8b_7FZ.mjs';
import '@tanstack/vue-table';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'unhead/plugins';

const _sfc_main$e = /* @__PURE__ */ defineComponent({
  __name: "CreateMasterReport",
  __ssrInlineRender: true,
  props: {
    masterId: {}
  },
  emits: ["report-created"],
  setup(__props, { emit: __emit }) {
    const { $useApi } = useNuxtApp();
    const { toast } = useToast();
    const emit = __emit;
    const props = __props;
    const isOpen = ref(false);
    const disabled = ref(true);
    const curTab = ref("new");
    const types = [
      "\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u0430\u044F",
      "\u0423\u043B\u0438\u0447\u043D\u0430\u044F",
      "\u0420\u0413\u0411",
      "\u0421\u043C\u0430\u0440\u0442",
      "\u041A\u043E\u043D\u0442\u0440\u0430\u0436\u0443\u0440",
      "\u0420\u0413\u0411 \u041A\u043E\u043D\u0442\u0440\u0430\u0436\u0443\u0440",
      "\u0412\u0411",
      "\u041E\u0417\u041E\u041D",
      "\u041F\u043E\u0434\u0430\u0440\u043E\u043A"
    ];
    const repairTypes = [
      "\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u0430\u044F",
      "\u0423\u043B\u0438\u0447\u043D\u0430\u044F",
      "\u0420\u0413\u0411",
      "\u0421\u043C\u0430\u0440\u0442"
    ];
    const newReportMasterBlank = {
      date: (/* @__PURE__ */ new Date()).toISOString().slice(0, 10),
      name: "",
      metrs: 0,
      els: 0,
      type: types[0],
      cost: 0,
      userId: props.masterId,
      penaltyCost: 0
    };
    const newRepairReportBlank = {
      date: (/* @__PURE__ */ new Date()).toISOString().slice(0, 10),
      name: "",
      metrs: 0,
      els: 0,
      type: repairTypes[0],
      cost: 0,
      userId: props.masterId,
      grinding: 0,
      unpackage: 0,
      unpackageBig: 0,
      acoustics: 0,
      smartContr: 0
    };
    const newOtherReportBlank = {
      date: (/* @__PURE__ */ new Date()).toISOString().slice(0, 10),
      name: "",
      cost: 0,
      userId: props.masterId
    };
    const newOtherReport = ref({ ...newOtherReportBlank });
    const newReportMaster = ref({ ...newReportMasterBlank });
    const newRepairReport = ref({ ...newRepairReportBlank });
    const calculateCost = () => {
      const { metrs, els, type } = newReportMaster.value;
      let cost = 0;
      switch (type) {
        case "\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u0430\u044F":
        case "\u0412\u0411":
        case "\u041E\u0417\u041E\u041D":
        case "\u041F\u043E\u0434\u0430\u0440\u043E\u043A":
          cost = metrs * 100 + els * 50;
          break;
        case "\u0423\u043B\u0438\u0447\u043D\u0430\u044F":
        case "\u0420\u0413\u0411 \u041A\u043E\u043D\u0442\u0440\u0430\u0436\u0443\u0440":
          cost = metrs * 130 + els * 70;
          break;
        case "\u0420\u0413\u0411":
        case "\u0421\u043C\u0430\u0440\u0442":
          cost = metrs * 140 + els * 150;
          break;
        case "\u041A\u043E\u043D\u0442\u0440\u0430\u0436\u0443\u0440":
          cost = metrs * 60 + els * 30;
          break;
        default:
          cost = 0;
      }
      newReportMaster.value.cost = cost;
    };
    const calculateRepairCost = () => {
      const { metrs, els, type, grinding, unpackage, unpackageBig, acoustics, smartContr } = newRepairReport.value;
      let cost = 0;
      switch (type) {
        case "\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u0430\u044F":
          cost = metrs * 130 + els * 70;
          break;
        case "\u0423\u043B\u0438\u0447\u043D\u0430\u044F":
          cost = metrs * 140 + els * 80;
          break;
        case "\u0420\u0413\u0411":
          cost = metrs * 150 + els * 200;
          break;
        case "\u0421\u043C\u0430\u0440\u0442":
          cost = metrs * 160 + els * 180;
          break;
        default:
          cost = 0;
      }
      cost += grinding * 350;
      cost += unpackage * 50;
      cost += unpackageBig * 100;
      cost += acoustics * 150;
      cost += smartContr * 200;
      newRepairReport.value.cost = cost;
    };
    const createMasterReport = async () => {
      try {
        disabled.value = true;
        await $useApi.post("production/master-report", { ...newReportMaster.value, userId: props.masterId });
        isOpen.value = false;
        disabled.value = false;
        emit("report-created");
        toast({
          title: "\u0423\u0441\u043F\u0435\u0445",
          description: "\u041E\u0442\u0447\u0435\u0442 \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u0441\u043E\u0437\u0434\u0430\u043D"
        });
      } catch (e) {
        console.log(e);
      }
    };
    const createRepairReport = async () => {
      try {
        disabled.value = true;
        await $useApi.post(`production/master-repair`, { ...newRepairReport.value, userId: props.masterId });
        isOpen.value = false;
        disabled.value = false;
        emit("report-created");
        toast({
          title: "\u0423\u0441\u043F\u0435\u0445",
          description: "\u0420\u0435\u043C\u043E\u043D\u0442\u043D\u044B\u0439 \u043E\u0442\u0447\u0435\u0442 \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u0441\u043E\u0437\u0434\u0430\u043D"
        });
      } catch (e) {
        console.log(e);
      }
    };
    const createOtherReport = async () => {
      try {
        disabled.value = true;
        await $useApi.post("production/other-report", { ...newOtherReport.value, userId: props.masterId });
        isOpen.value = false;
        disabled.value = false;
        emit("report-created");
        toast({
          title: "\u0423\u0441\u043F\u0435\u0445",
          description: "\u041E\u0442\u0447\u0435\u0442 \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u0441\u043E\u0437\u0434\u0430\u043D"
        });
      } catch (e) {
        console.log(e);
      }
    };
    watch(
      newOtherReport,
      () => {
        const { date, name, cost } = newOtherReport.value;
        disabled.value = !(date && name && cost);
      },
      { deep: true }
    );
    watch(
      newReportMaster,
      () => {
        const { date, name, metrs, els, type } = newReportMaster.value;
        calculateCost();
        disabled.value = !(date && name && metrs > 0 && els > 0 && type);
      },
      { deep: true }
    );
    watch(
      newRepairReport,
      (val) => {
        const {
          date,
          name,
          metrs,
          els,
          type,
          grinding,
          unpackage,
          unpackageBig,
          acoustics,
          smartContr
        } = newRepairReport.value;
        calculateRepairCost();
        console.log("d" + grinding + "d");
        console.log(val);
        disabled.value = !(date && name && metrs >= 0 && els >= 0 && type && grinding >= 0 && unpackage >= 0 && unpackageBig >= 0 && acoustics >= 0 && smartContr >= 0);
      },
      { deep: true }
    );
    watch(isOpen, (newValue) => {
      if (!newValue) {
        newReportMaster.value = { ...newReportMasterBlank, userId: props.masterId };
        newRepairReport.value = { ...newRepairReportBlank, userId: props.masterId };
        newOtherReport.value = { ...newOtherReportBlank, userId: props.masterId };
      }
    });
    watch(curTab, () => {
      newReportMaster.value = { ...newReportMasterBlank, userId: props.masterId };
      newRepairReport.value = { ...newRepairReportBlank, userId: props.masterId };
      newOtherReport.value = { ...newOtherReportBlank, userId: props.masterId };
      disabled.value = true;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiDialog = _sfc_main$4$2;
      const _component_UiDialogTrigger = _sfc_main$3$3;
      const _component_UiButton = _sfc_main$q;
      const _component_UiDialogContent = _sfc_main$l;
      const _component_UiDialogHeader = _sfc_main$2$5;
      const _component_UiDialogTitle = _sfc_main$1$5;
      const _component_UiDialogDescription = _sfc_main$m;
      const _component_UiTabs = _sfc_main$2$1;
      const _component_UiTabsList = _sfc_main$g;
      const _component_UiTabsTrigger = _sfc_main$1$1;
      const _component_UiTabsContent = _sfc_main$r;
      const _component_UiLabel = _sfc_main$s;
      const _component_UiInput = _sfc_main$k;
      const _component_UiSelect = _sfc_main$7$1;
      const _component_UiSelectTrigger = _sfc_main$5$3;
      const _component_UiSelectValue = _sfc_main$6$2;
      const _component_UiSelectContent = _sfc_main$4$4;
      const _component_UiSelectGroup = _sfc_main$3$5;
      const _component_UiSelectItem = _sfc_main$2$7;
      const _component_UiDialogFooter = _sfc_main$o;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_UiDialog, {
        open: isOpen.value,
        "onUpdate:open": ($event) => isOpen.value = $event
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UiDialogTrigger, { "as-child": "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UiButton, { class: "w-full" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`\u0421\u043E\u0437\u0434\u0430\u0442\u044C`);
                      } else {
                        return [
                          createTextVNode("\u0421\u043E\u0437\u0434\u0430\u0442\u044C")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UiButton, { class: "w-full" }, {
                      default: withCtx(() => [
                        createTextVNode("\u0421\u043E\u0437\u0434\u0430\u0442\u044C")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UiDialogContent, { class: "max-w-[400px] flex flex-col top-0 translate-y-[0px]" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UiDialogHeader, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UiDialogTitle, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u0437\u0430\u043F\u0438\u0441\u044C`);
                            } else {
                              return [
                                createTextVNode("\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u0437\u0430\u043F\u0438\u0441\u044C")
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
                              createTextVNode("\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u0437\u0430\u043F\u0438\u0441\u044C")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UiDialogDescription)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<div class=""${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UiTabs, {
                    modelValue: curTab.value,
                    "onUpdate:modelValue": ($event) => curTab.value = $event
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UiTabsList, { class: "w-full mb-4" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_UiTabsTrigger, {
                                class: "w-full",
                                value: "new"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(` \u041D\u043E\u0432\u043E\u0435 `);
                                  } else {
                                    return [
                                      createTextVNode(" \u041D\u043E\u0432\u043E\u0435 ")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_UiTabsTrigger, {
                                class: "w-full",
                                value: "repair"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(` \u0420\u0435\u043C\u043E\u043D\u0442 `);
                                  } else {
                                    return [
                                      createTextVNode(" \u0420\u0435\u043C\u043E\u043D\u0442 ")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_UiTabsTrigger, {
                                class: "w-full",
                                value: "other"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(` \u0414\u0440\u0443\u0433\u043E\u0435 `);
                                  } else {
                                    return [
                                      createTextVNode(" \u0414\u0440\u0443\u0433\u043E\u0435 ")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_UiTabsTrigger, {
                                  class: "w-full",
                                  value: "new"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" \u041D\u043E\u0432\u043E\u0435 ")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_UiTabsTrigger, {
                                  class: "w-full",
                                  value: "repair"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" \u0420\u0435\u043C\u043E\u043D\u0442 ")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_UiTabsTrigger, {
                                  class: "w-full",
                                  value: "other"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" \u0414\u0440\u0443\u0433\u043E\u0435 ")
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_UiTabsContent, { value: "new" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<div class="flex flex-col gap-5"${_scopeId4}><div class="relative"${_scopeId4}>`);
                              if (newReportMaster.value.date) {
                                _push5(ssrRenderComponent(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`\u0414\u0430\u0442\u0430 \u0441\u043C\u0435\u043D\u044B`);
                                    } else {
                                      return [
                                        createTextVNode("\u0414\u0430\u0442\u0430 \u0441\u043C\u0435\u043D\u044B")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                              } else {
                                _push5(`<!---->`);
                              }
                              _push5(ssrRenderComponent(_component_UiInput, {
                                modelValue: newReportMaster.value.date,
                                "onUpdate:modelValue": ($event) => newReportMaster.value.date = $event,
                                type: "date",
                                placeholder: "\u0414\u0430\u0442\u0430 \u0441\u043C\u0435\u043D\u044B",
                                class: newReportMaster.value.date ? "" : "outline-1 outline-rose-300"
                              }, null, _parent5, _scopeId4));
                              _push5(`</div><div class="relative"${_scopeId4}>`);
                              if (newReportMaster.value.type) {
                                _push5(ssrRenderComponent(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1" }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`\u0422\u0438\u043F`);
                                    } else {
                                      return [
                                        createTextVNode("\u0422\u0438\u043F")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                              } else {
                                _push5(`<!---->`);
                              }
                              _push5(`<div class="${ssrRenderClass(newReportMaster.value.type ? "" : "outline-1 outline-rose-300 rounded-md")}"${_scopeId4}>`);
                              _push5(ssrRenderComponent(_component_UiSelect, {
                                modelValue: newReportMaster.value.type,
                                "onUpdate:modelValue": ($event) => newReportMaster.value.type = $event
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_UiSelectTrigger, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(_component_UiSelectValue, { placeholder: "\u0422\u0438\u043F" }, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(_component_UiSelectValue, { placeholder: "\u0422\u0438\u043F" })
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_UiSelectContent, { class: "h-[250px]" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`<!--[-->`);
                                          ssrRenderList(types, (item, i) => {
                                            _push7(ssrRenderComponent(_component_UiSelectGroup, { key: i }, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(ssrRenderComponent(_component_UiSelectItem, { value: item }, {
                                                    default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                      if (_push9) {
                                                        _push9(`${ssrInterpolate(item)}`);
                                                      } else {
                                                        return [
                                                          createTextVNode(toDisplayString(item), 1)
                                                        ];
                                                      }
                                                    }),
                                                    _: 2
                                                  }, _parent8, _scopeId7));
                                                } else {
                                                  return [
                                                    createVNode(_component_UiSelectItem, { value: item }, {
                                                      default: withCtx(() => [
                                                        createTextVNode(toDisplayString(item), 1)
                                                      ]),
                                                      _: 2
                                                    }, 1032, ["value"])
                                                  ];
                                                }
                                              }),
                                              _: 2
                                            }, _parent7, _scopeId6));
                                          });
                                          _push7(`<!--]-->`);
                                        } else {
                                          return [
                                            (openBlock(), createBlock(Fragment, null, renderList(types, (item, i) => {
                                              return createVNode(_component_UiSelectGroup, { key: i }, {
                                                default: withCtx(() => [
                                                  createVNode(_component_UiSelectItem, { value: item }, {
                                                    default: withCtx(() => [
                                                      createTextVNode(toDisplayString(item), 1)
                                                    ]),
                                                    _: 2
                                                  }, 1032, ["value"])
                                                ]),
                                                _: 2
                                              }, 1024);
                                            }), 64))
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_UiSelectTrigger, null, {
                                        default: withCtx(() => [
                                          createVNode(_component_UiSelectValue, { placeholder: "\u0422\u0438\u043F" })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_UiSelectContent, { class: "h-[250px]" }, {
                                        default: withCtx(() => [
                                          (openBlock(), createBlock(Fragment, null, renderList(types, (item, i) => {
                                            return createVNode(_component_UiSelectGroup, { key: i }, {
                                              default: withCtx(() => [
                                                createVNode(_component_UiSelectItem, { value: item }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(toDisplayString(item), 1)
                                                  ]),
                                                  _: 2
                                                }, 1032, ["value"])
                                              ]),
                                              _: 2
                                            }, 1024);
                                          }), 64))
                                        ]),
                                        _: 1
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(`</div></div><div class="relative"${_scopeId4}>`);
                              if (newReportMaster.value.name) {
                                _push5(ssrRenderComponent(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1" }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0438\u043B\u0438 \u0441\u0441\u044B\u043B\u043A\u0430`);
                                    } else {
                                      return [
                                        createTextVNode("\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0438\u043B\u0438 \u0441\u0441\u044B\u043B\u043A\u0430")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                              } else {
                                _push5(`<!---->`);
                              }
                              _push5(ssrRenderComponent(_component_UiInput, {
                                modelValue: newReportMaster.value.name,
                                "onUpdate:modelValue": ($event) => newReportMaster.value.name = $event,
                                placeholder: "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0438\u043B\u0438 \u0441\u0441\u044B\u043B\u043A\u0430",
                                class: newReportMaster.value.name ? "" : "outline-1 outline-rose-300"
                              }, null, _parent5, _scopeId4));
                              _push5(`</div><div class="flex gap-2"${_scopeId4}><div class="relative"${_scopeId4}>`);
                              _push5(ssrRenderComponent(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`\u041C\u0435\u0442\u0440\u044B`);
                                  } else {
                                    return [
                                      createTextVNode("\u041C\u0435\u0442\u0440\u044B")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(`<div class="flex gap-2"${_scopeId4}>`);
                              _push5(ssrRenderComponent(_component_UiInput, {
                                modelValue: newReportMaster.value.metrs,
                                "onUpdate:modelValue": ($event) => newReportMaster.value.metrs = $event,
                                modelModifiers: { number: true },
                                placeholder: "\u041C\u0435\u0442\u0440\u044B",
                                type: "number",
                                min: "0",
                                class: newReportMaster.value.metrs > 0 ? "" : "outline-1 outline-rose-300"
                              }, null, _parent5, _scopeId4));
                              _push5(`</div></div><div class="relative"${_scopeId4}>`);
                              _push5(ssrRenderComponent(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`\u042D\u043B\u0435\u043C\u0435\u043D\u0442\u044B`);
                                  } else {
                                    return [
                                      createTextVNode("\u042D\u043B\u0435\u043C\u0435\u043D\u0442\u044B")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(`<div class="flex gap-2"${_scopeId4}>`);
                              _push5(ssrRenderComponent(_component_UiInput, {
                                modelValue: newReportMaster.value.els,
                                "onUpdate:modelValue": ($event) => newReportMaster.value.els = $event,
                                modelModifiers: { number: true },
                                placeholder: "\u042D\u043B\u0435\u043C\u0435\u043D\u0442\u044B",
                                type: "number",
                                min: "0",
                                class: newReportMaster.value.els > 0 ? "" : "outline-1 outline-rose-300"
                              }, null, _parent5, _scopeId4));
                              _push5(`</div></div></div><span${_scopeId4}> \u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C: ${ssrInterpolate(newReportMaster.value.cost)}\u0440. </span></div><div class="flex justify-end w-full"${_scopeId4}>`);
                              _push5(ssrRenderComponent(_component_UiButton, {
                                disabled: disabled.value,
                                onClick: createMasterReport
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(` \u0421\u043E\u0437\u0434\u0430\u0442\u044C `);
                                  } else {
                                    return [
                                      createTextVNode(" \u0421\u043E\u0437\u0434\u0430\u0442\u044C ")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(`</div>`);
                            } else {
                              return [
                                createVNode("div", { class: "flex flex-col gap-5" }, [
                                  createVNode("div", { class: "relative" }, [
                                    newReportMaster.value.date ? (openBlock(), createBlock(_component_UiLabel, {
                                      key: 0,
                                      class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode("\u0414\u0430\u0442\u0430 \u0441\u043C\u0435\u043D\u044B")
                                      ]),
                                      _: 1
                                    })) : createCommentVNode("", true),
                                    createVNode(_component_UiInput, {
                                      modelValue: newReportMaster.value.date,
                                      "onUpdate:modelValue": ($event) => newReportMaster.value.date = $event,
                                      type: "date",
                                      placeholder: "\u0414\u0430\u0442\u0430 \u0441\u043C\u0435\u043D\u044B",
                                      class: newReportMaster.value.date ? "" : "outline-1 outline-rose-300"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "class"])
                                  ]),
                                  createVNode("div", { class: "relative" }, [
                                    newReportMaster.value.type ? (openBlock(), createBlock(_component_UiLabel, {
                                      key: 0,
                                      class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode("\u0422\u0438\u043F")
                                      ]),
                                      _: 1
                                    })) : createCommentVNode("", true),
                                    createVNode("div", {
                                      class: newReportMaster.value.type ? "" : "outline-1 outline-rose-300 rounded-md"
                                    }, [
                                      createVNode(_component_UiSelect, {
                                        modelValue: newReportMaster.value.type,
                                        "onUpdate:modelValue": ($event) => newReportMaster.value.type = $event
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_UiSelectTrigger, null, {
                                            default: withCtx(() => [
                                              createVNode(_component_UiSelectValue, { placeholder: "\u0422\u0438\u043F" })
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_UiSelectContent, { class: "h-[250px]" }, {
                                            default: withCtx(() => [
                                              (openBlock(), createBlock(Fragment, null, renderList(types, (item, i) => {
                                                return createVNode(_component_UiSelectGroup, { key: i }, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_UiSelectItem, { value: item }, {
                                                      default: withCtx(() => [
                                                        createTextVNode(toDisplayString(item), 1)
                                                      ]),
                                                      _: 2
                                                    }, 1032, ["value"])
                                                  ]),
                                                  _: 2
                                                }, 1024);
                                              }), 64))
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      }, 8, ["modelValue", "onUpdate:modelValue"])
                                    ], 2)
                                  ]),
                                  createVNode("div", { class: "relative" }, [
                                    newReportMaster.value.name ? (openBlock(), createBlock(_component_UiLabel, {
                                      key: 0,
                                      class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode("\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0438\u043B\u0438 \u0441\u0441\u044B\u043B\u043A\u0430")
                                      ]),
                                      _: 1
                                    })) : createCommentVNode("", true),
                                    createVNode(_component_UiInput, {
                                      modelValue: newReportMaster.value.name,
                                      "onUpdate:modelValue": ($event) => newReportMaster.value.name = $event,
                                      placeholder: "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0438\u043B\u0438 \u0441\u0441\u044B\u043B\u043A\u0430",
                                      class: newReportMaster.value.name ? "" : "outline-1 outline-rose-300"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "class"])
                                  ]),
                                  createVNode("div", { class: "flex gap-2" }, [
                                    createVNode("div", { class: "relative" }, [
                                      createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                                        default: withCtx(() => [
                                          createTextVNode("\u041C\u0435\u0442\u0440\u044B")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode("div", { class: "flex gap-2" }, [
                                        createVNode(_component_UiInput, {
                                          modelValue: newReportMaster.value.metrs,
                                          "onUpdate:modelValue": ($event) => newReportMaster.value.metrs = $event,
                                          modelModifiers: { number: true },
                                          placeholder: "\u041C\u0435\u0442\u0440\u044B",
                                          type: "number",
                                          min: "0",
                                          class: newReportMaster.value.metrs > 0 ? "" : "outline-1 outline-rose-300"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "class"])
                                      ])
                                    ]),
                                    createVNode("div", { class: "relative" }, [
                                      createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                                        default: withCtx(() => [
                                          createTextVNode("\u042D\u043B\u0435\u043C\u0435\u043D\u0442\u044B")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode("div", { class: "flex gap-2" }, [
                                        createVNode(_component_UiInput, {
                                          modelValue: newReportMaster.value.els,
                                          "onUpdate:modelValue": ($event) => newReportMaster.value.els = $event,
                                          modelModifiers: { number: true },
                                          placeholder: "\u042D\u043B\u0435\u043C\u0435\u043D\u0442\u044B",
                                          type: "number",
                                          min: "0",
                                          class: newReportMaster.value.els > 0 ? "" : "outline-1 outline-rose-300"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "class"])
                                      ])
                                    ])
                                  ]),
                                  createVNode("span", null, " \u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C: " + toDisplayString(newReportMaster.value.cost) + "\u0440. ", 1)
                                ]),
                                createVNode("div", { class: "flex justify-end w-full" }, [
                                  createVNode(_component_UiButton, {
                                    disabled: disabled.value,
                                    onClick: createMasterReport
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" \u0421\u043E\u0437\u0434\u0430\u0442\u044C ")
                                    ]),
                                    _: 1
                                  }, 8, ["disabled"])
                                ])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_UiTabsContent, { value: "repair" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<div class="flex flex-col gap-5"${_scopeId4}><div class="relative"${_scopeId4}>`);
                              if (newRepairReport.value.date) {
                                _push5(ssrRenderComponent(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`\u0414\u0430\u0442\u0430 \u0441\u043C\u0435\u043D\u044B`);
                                    } else {
                                      return [
                                        createTextVNode("\u0414\u0430\u0442\u0430 \u0441\u043C\u0435\u043D\u044B")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                              } else {
                                _push5(`<!---->`);
                              }
                              _push5(ssrRenderComponent(_component_UiInput, {
                                modelValue: newRepairReport.value.date,
                                "onUpdate:modelValue": ($event) => newRepairReport.value.date = $event,
                                type: "date",
                                placeholder: "\u0414\u0430\u0442\u0430 \u0441\u043C\u0435\u043D\u044B",
                                class: newRepairReport.value.date ? "" : "outline-1 outline-rose-300"
                              }, null, _parent5, _scopeId4));
                              _push5(`</div><div class="relative"${_scopeId4}>`);
                              if (newRepairReport.value.type) {
                                _push5(ssrRenderComponent(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1" }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`\u0422\u0438\u043F`);
                                    } else {
                                      return [
                                        createTextVNode("\u0422\u0438\u043F")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                              } else {
                                _push5(`<!---->`);
                              }
                              _push5(`<div class="${ssrRenderClass(newRepairReport.value.type ? "" : "outline-1 outline-rose-300 rounded-md")}"${_scopeId4}>`);
                              _push5(ssrRenderComponent(_component_UiSelect, {
                                modelValue: newRepairReport.value.type,
                                "onUpdate:modelValue": ($event) => newRepairReport.value.type = $event
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_UiSelectTrigger, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(_component_UiSelectValue, { placeholder: "\u0422\u0438\u043F" }, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(_component_UiSelectValue, { placeholder: "\u0422\u0438\u043F" })
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_UiSelectContent, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`<!--[-->`);
                                          ssrRenderList(repairTypes, (item, i) => {
                                            _push7(ssrRenderComponent(_component_UiSelectGroup, { key: i }, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(ssrRenderComponent(_component_UiSelectItem, { value: item }, {
                                                    default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                      if (_push9) {
                                                        _push9(`${ssrInterpolate(item)}`);
                                                      } else {
                                                        return [
                                                          createTextVNode(toDisplayString(item), 1)
                                                        ];
                                                      }
                                                    }),
                                                    _: 2
                                                  }, _parent8, _scopeId7));
                                                } else {
                                                  return [
                                                    createVNode(_component_UiSelectItem, { value: item }, {
                                                      default: withCtx(() => [
                                                        createTextVNode(toDisplayString(item), 1)
                                                      ]),
                                                      _: 2
                                                    }, 1032, ["value"])
                                                  ];
                                                }
                                              }),
                                              _: 2
                                            }, _parent7, _scopeId6));
                                          });
                                          _push7(`<!--]-->`);
                                        } else {
                                          return [
                                            (openBlock(), createBlock(Fragment, null, renderList(repairTypes, (item, i) => {
                                              return createVNode(_component_UiSelectGroup, { key: i }, {
                                                default: withCtx(() => [
                                                  createVNode(_component_UiSelectItem, { value: item }, {
                                                    default: withCtx(() => [
                                                      createTextVNode(toDisplayString(item), 1)
                                                    ]),
                                                    _: 2
                                                  }, 1032, ["value"])
                                                ]),
                                                _: 2
                                              }, 1024);
                                            }), 64))
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_UiSelectTrigger, null, {
                                        default: withCtx(() => [
                                          createVNode(_component_UiSelectValue, { placeholder: "\u0422\u0438\u043F" })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_UiSelectContent, null, {
                                        default: withCtx(() => [
                                          (openBlock(), createBlock(Fragment, null, renderList(repairTypes, (item, i) => {
                                            return createVNode(_component_UiSelectGroup, { key: i }, {
                                              default: withCtx(() => [
                                                createVNode(_component_UiSelectItem, { value: item }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(toDisplayString(item), 1)
                                                  ]),
                                                  _: 2
                                                }, 1032, ["value"])
                                              ]),
                                              _: 2
                                            }, 1024);
                                          }), 64))
                                        ]),
                                        _: 1
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(`</div></div><div class="relative"${_scopeId4}>`);
                              if (newRepairReport.value.name) {
                                _push5(ssrRenderComponent(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1" }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0438\u043B\u0438 \u0441\u0441\u044B\u043B\u043A\u0430`);
                                    } else {
                                      return [
                                        createTextVNode("\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0438\u043B\u0438 \u0441\u0441\u044B\u043B\u043A\u0430")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                              } else {
                                _push5(`<!---->`);
                              }
                              _push5(ssrRenderComponent(_component_UiInput, {
                                modelValue: newRepairReport.value.name,
                                "onUpdate:modelValue": ($event) => newRepairReport.value.name = $event,
                                placeholder: "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0438\u043B\u0438 \u0441\u0441\u044B\u043B\u043A\u0430",
                                class: newRepairReport.value.name ? "" : "outline-1 outline-rose-300"
                              }, null, _parent5, _scopeId4));
                              _push5(`</div><div class="flex gap-2"${_scopeId4}><div class="relative"${_scopeId4}>`);
                              _push5(ssrRenderComponent(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`\u041C\u0435\u0442\u0440\u044B(\u043D\u0435\u043E\u043D)`);
                                  } else {
                                    return [
                                      createTextVNode("\u041C\u0435\u0442\u0440\u044B(\u043D\u0435\u043E\u043D)")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_UiInput, {
                                modelValue: newRepairReport.value.metrs,
                                "onUpdate:modelValue": ($event) => newRepairReport.value.metrs = $event,
                                modelModifiers: { number: true },
                                placeholder: "\u041C\u0435\u0442\u0440\u044B(\u043D\u0435\u043E\u043D)",
                                type: "number",
                                min: "0"
                              }, null, _parent5, _scopeId4));
                              _push5(`</div><div class="relative"${_scopeId4}>`);
                              _push5(ssrRenderComponent(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`\u042D\u043B-\u0442\u044B(\u043D\u0435\u043E\u043D)`);
                                  } else {
                                    return [
                                      createTextVNode("\u042D\u043B-\u0442\u044B(\u043D\u0435\u043E\u043D)")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_UiInput, {
                                modelValue: newRepairReport.value.els,
                                "onUpdate:modelValue": ($event) => newRepairReport.value.els = $event,
                                modelModifiers: { number: true },
                                placeholder: "\u042D\u043B-\u0442\u044B(\u043D\u0435\u043E\u043D)",
                                type: "number",
                                min: "0"
                              }, null, _parent5, _scopeId4));
                              _push5(`</div><div class="relative"${_scopeId4}>`);
                              _push5(ssrRenderComponent(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`\u0410\u043A\u0443\u0441\u0442\u0438\u043A\u0430`);
                                  } else {
                                    return [
                                      createTextVNode("\u0410\u043A\u0443\u0441\u0442\u0438\u043A\u0430")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_UiInput, {
                                modelValue: newRepairReport.value.acoustics,
                                "onUpdate:modelValue": ($event) => newRepairReport.value.acoustics = $event,
                                modelModifiers: { number: true },
                                placeholder: "\u0410\u043A\u0443\u0441\u0442\u0438\u043A\u0430",
                                type: "number",
                                min: "0"
                              }, null, _parent5, _scopeId4));
                              _push5(`</div></div><div class="flex gap-2"${_scopeId4}><div class="relative"${_scopeId4}>`);
                              _push5(ssrRenderComponent(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`\u0420\u0430\u0441\u043F\u0430\u043A\u043E\u0432\u043A\u0430 \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442`);
                                  } else {
                                    return [
                                      createTextVNode("\u0420\u0430\u0441\u043F\u0430\u043A\u043E\u0432\u043A\u0430 \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_UiInput, {
                                modelValue: newRepairReport.value.unpackage,
                                "onUpdate:modelValue": ($event) => newRepairReport.value.unpackage = $event,
                                modelModifiers: { number: true },
                                placeholder: "\u0420\u0430\u0441\u043F\u0430\u043A\u043E\u0432\u043A\u0430 \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442",
                                type: "number",
                                min: "0"
                              }, null, _parent5, _scopeId4));
                              _push5(`</div><div class="relative"${_scopeId4}>`);
                              _push5(ssrRenderComponent(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`\u0420\u0430\u0441\u043F\u0430\u043A\u043E\u0432\u043A\u0430 \u0431\u043E\u043B\u044C\u0448\u0430\u044F`);
                                  } else {
                                    return [
                                      createTextVNode("\u0420\u0430\u0441\u043F\u0430\u043A\u043E\u0432\u043A\u0430 \u0431\u043E\u043B\u044C\u0448\u0430\u044F")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_UiInput, {
                                modelValue: newRepairReport.value.unpackageBig,
                                "onUpdate:modelValue": ($event) => newRepairReport.value.unpackageBig = $event,
                                modelModifiers: { number: true },
                                placeholder: "\u0420\u0430\u0441\u043F\u0430\u043A\u043E\u0432\u043A\u0430 \u0431\u043E\u043B\u044C\u0448\u0430\u044F",
                                type: "number",
                                min: "0"
                              }, null, _parent5, _scopeId4));
                              _push5(`</div></div><div class="flex gap-2"${_scopeId4}><div class="relative"${_scopeId4}>`);
                              _push5(ssrRenderComponent(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`\u0428\u043B\u0438\u0444\u043E\u0432\u043A\u0430`);
                                  } else {
                                    return [
                                      createTextVNode("\u0428\u043B\u0438\u0444\u043E\u0432\u043A\u0430")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_UiInput, {
                                modelValue: newRepairReport.value.grinding,
                                "onUpdate:modelValue": ($event) => newRepairReport.value.grinding = $event,
                                modelModifiers: { number: true },
                                placeholder: "\u0428\u043B\u0438\u0444\u043E\u0432\u043A\u0430",
                                type: "number",
                                min: "0"
                              }, null, _parent5, _scopeId4));
                              _push5(`</div><div class="relative"${_scopeId4}>`);
                              _push5(ssrRenderComponent(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`\u0421\u043C\u0430\u0440\u0442 \u043A\u043E\u043D\u0442\u0440\u043E\u043B\u043B\u0435\u0440`);
                                  } else {
                                    return [
                                      createTextVNode("\u0421\u043C\u0430\u0440\u0442 \u043A\u043E\u043D\u0442\u0440\u043E\u043B\u043B\u0435\u0440")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_UiInput, {
                                modelValue: newRepairReport.value.smartContr,
                                "onUpdate:modelValue": ($event) => newRepairReport.value.smartContr = $event,
                                modelModifiers: { number: true },
                                placeholder: "\u0421\u043C\u0430\u0440\u0442 \u043A\u043E\u043D\u0442\u0440\u043E\u043B\u043B\u0435\u0440",
                                type: "number",
                                min: "0"
                              }, null, _parent5, _scopeId4));
                              _push5(`</div></div><span${_scopeId4}> \u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C: ${ssrInterpolate(newRepairReport.value.cost)}\u0440. </span></div><div class="flex justify-end w-full"${_scopeId4}>`);
                              _push5(ssrRenderComponent(_component_UiButton, {
                                disabled: disabled.value,
                                onClick: createRepairReport
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(` \u0421\u043E\u0437\u0434\u0430\u0442\u044C `);
                                  } else {
                                    return [
                                      createTextVNode(" \u0421\u043E\u0437\u0434\u0430\u0442\u044C ")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(`</div>`);
                            } else {
                              return [
                                createVNode("div", { class: "flex flex-col gap-5" }, [
                                  createVNode("div", { class: "relative" }, [
                                    newRepairReport.value.date ? (openBlock(), createBlock(_component_UiLabel, {
                                      key: 0,
                                      class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode("\u0414\u0430\u0442\u0430 \u0441\u043C\u0435\u043D\u044B")
                                      ]),
                                      _: 1
                                    })) : createCommentVNode("", true),
                                    createVNode(_component_UiInput, {
                                      modelValue: newRepairReport.value.date,
                                      "onUpdate:modelValue": ($event) => newRepairReport.value.date = $event,
                                      type: "date",
                                      placeholder: "\u0414\u0430\u0442\u0430 \u0441\u043C\u0435\u043D\u044B",
                                      class: newRepairReport.value.date ? "" : "outline-1 outline-rose-300"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "class"])
                                  ]),
                                  createVNode("div", { class: "relative" }, [
                                    newRepairReport.value.type ? (openBlock(), createBlock(_component_UiLabel, {
                                      key: 0,
                                      class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode("\u0422\u0438\u043F")
                                      ]),
                                      _: 1
                                    })) : createCommentVNode("", true),
                                    createVNode("div", {
                                      class: newRepairReport.value.type ? "" : "outline-1 outline-rose-300 rounded-md"
                                    }, [
                                      createVNode(_component_UiSelect, {
                                        modelValue: newRepairReport.value.type,
                                        "onUpdate:modelValue": ($event) => newRepairReport.value.type = $event
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_UiSelectTrigger, null, {
                                            default: withCtx(() => [
                                              createVNode(_component_UiSelectValue, { placeholder: "\u0422\u0438\u043F" })
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_UiSelectContent, null, {
                                            default: withCtx(() => [
                                              (openBlock(), createBlock(Fragment, null, renderList(repairTypes, (item, i) => {
                                                return createVNode(_component_UiSelectGroup, { key: i }, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_UiSelectItem, { value: item }, {
                                                      default: withCtx(() => [
                                                        createTextVNode(toDisplayString(item), 1)
                                                      ]),
                                                      _: 2
                                                    }, 1032, ["value"])
                                                  ]),
                                                  _: 2
                                                }, 1024);
                                              }), 64))
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      }, 8, ["modelValue", "onUpdate:modelValue"])
                                    ], 2)
                                  ]),
                                  createVNode("div", { class: "relative" }, [
                                    newRepairReport.value.name ? (openBlock(), createBlock(_component_UiLabel, {
                                      key: 0,
                                      class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode("\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0438\u043B\u0438 \u0441\u0441\u044B\u043B\u043A\u0430")
                                      ]),
                                      _: 1
                                    })) : createCommentVNode("", true),
                                    createVNode(_component_UiInput, {
                                      modelValue: newRepairReport.value.name,
                                      "onUpdate:modelValue": ($event) => newRepairReport.value.name = $event,
                                      placeholder: "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0438\u043B\u0438 \u0441\u0441\u044B\u043B\u043A\u0430",
                                      class: newRepairReport.value.name ? "" : "outline-1 outline-rose-300"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "class"])
                                  ]),
                                  createVNode("div", { class: "flex gap-2" }, [
                                    createVNode("div", { class: "relative" }, [
                                      createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                                        default: withCtx(() => [
                                          createTextVNode("\u041C\u0435\u0442\u0440\u044B(\u043D\u0435\u043E\u043D)")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_UiInput, {
                                        modelValue: newRepairReport.value.metrs,
                                        "onUpdate:modelValue": ($event) => newRepairReport.value.metrs = $event,
                                        modelModifiers: { number: true },
                                        placeholder: "\u041C\u0435\u0442\u0440\u044B(\u043D\u0435\u043E\u043D)",
                                        type: "number",
                                        min: "0"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ]),
                                    createVNode("div", { class: "relative" }, [
                                      createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                                        default: withCtx(() => [
                                          createTextVNode("\u042D\u043B-\u0442\u044B(\u043D\u0435\u043E\u043D)")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_UiInput, {
                                        modelValue: newRepairReport.value.els,
                                        "onUpdate:modelValue": ($event) => newRepairReport.value.els = $event,
                                        modelModifiers: { number: true },
                                        placeholder: "\u042D\u043B-\u0442\u044B(\u043D\u0435\u043E\u043D)",
                                        type: "number",
                                        min: "0"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ]),
                                    createVNode("div", { class: "relative" }, [
                                      createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                                        default: withCtx(() => [
                                          createTextVNode("\u0410\u043A\u0443\u0441\u0442\u0438\u043A\u0430")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_UiInput, {
                                        modelValue: newRepairReport.value.acoustics,
                                        "onUpdate:modelValue": ($event) => newRepairReport.value.acoustics = $event,
                                        modelModifiers: { number: true },
                                        placeholder: "\u0410\u043A\u0443\u0441\u0442\u0438\u043A\u0430",
                                        type: "number",
                                        min: "0"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ])
                                  ]),
                                  createVNode("div", { class: "flex gap-2" }, [
                                    createVNode("div", { class: "relative" }, [
                                      createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                                        default: withCtx(() => [
                                          createTextVNode("\u0420\u0430\u0441\u043F\u0430\u043A\u043E\u0432\u043A\u0430 \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_UiInput, {
                                        modelValue: newRepairReport.value.unpackage,
                                        "onUpdate:modelValue": ($event) => newRepairReport.value.unpackage = $event,
                                        modelModifiers: { number: true },
                                        placeholder: "\u0420\u0430\u0441\u043F\u0430\u043A\u043E\u0432\u043A\u0430 \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442",
                                        type: "number",
                                        min: "0"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ]),
                                    createVNode("div", { class: "relative" }, [
                                      createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                                        default: withCtx(() => [
                                          createTextVNode("\u0420\u0430\u0441\u043F\u0430\u043A\u043E\u0432\u043A\u0430 \u0431\u043E\u043B\u044C\u0448\u0430\u044F")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_UiInput, {
                                        modelValue: newRepairReport.value.unpackageBig,
                                        "onUpdate:modelValue": ($event) => newRepairReport.value.unpackageBig = $event,
                                        modelModifiers: { number: true },
                                        placeholder: "\u0420\u0430\u0441\u043F\u0430\u043A\u043E\u0432\u043A\u0430 \u0431\u043E\u043B\u044C\u0448\u0430\u044F",
                                        type: "number",
                                        min: "0"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ])
                                  ]),
                                  createVNode("div", { class: "flex gap-2" }, [
                                    createVNode("div", { class: "relative" }, [
                                      createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                                        default: withCtx(() => [
                                          createTextVNode("\u0428\u043B\u0438\u0444\u043E\u0432\u043A\u0430")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_UiInput, {
                                        modelValue: newRepairReport.value.grinding,
                                        "onUpdate:modelValue": ($event) => newRepairReport.value.grinding = $event,
                                        modelModifiers: { number: true },
                                        placeholder: "\u0428\u043B\u0438\u0444\u043E\u0432\u043A\u0430",
                                        type: "number",
                                        min: "0"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ]),
                                    createVNode("div", { class: "relative" }, [
                                      createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                                        default: withCtx(() => [
                                          createTextVNode("\u0421\u043C\u0430\u0440\u0442 \u043A\u043E\u043D\u0442\u0440\u043E\u043B\u043B\u0435\u0440")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_UiInput, {
                                        modelValue: newRepairReport.value.smartContr,
                                        "onUpdate:modelValue": ($event) => newRepairReport.value.smartContr = $event,
                                        modelModifiers: { number: true },
                                        placeholder: "\u0421\u043C\u0430\u0440\u0442 \u043A\u043E\u043D\u0442\u0440\u043E\u043B\u043B\u0435\u0440",
                                        type: "number",
                                        min: "0"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ])
                                  ]),
                                  createVNode("span", null, " \u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C: " + toDisplayString(newRepairReport.value.cost) + "\u0440. ", 1)
                                ]),
                                createVNode("div", { class: "flex justify-end w-full" }, [
                                  createVNode(_component_UiButton, {
                                    disabled: disabled.value,
                                    onClick: createRepairReport
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" \u0421\u043E\u0437\u0434\u0430\u0442\u044C ")
                                    ]),
                                    _: 1
                                  }, 8, ["disabled"])
                                ])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_UiTabsContent, { value: "other" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<div class="flex flex-col gap-5"${_scopeId4}><div class="relative"${_scopeId4}>`);
                              if (newOtherReport.value.date) {
                                _push5(ssrRenderComponent(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`\u0414\u0430\u0442\u0430`);
                                    } else {
                                      return [
                                        createTextVNode("\u0414\u0430\u0442\u0430")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                              } else {
                                _push5(`<!---->`);
                              }
                              _push5(ssrRenderComponent(_component_UiInput, {
                                modelValue: newOtherReport.value.date,
                                "onUpdate:modelValue": ($event) => newOtherReport.value.date = $event,
                                type: "date",
                                placeholder: "\u0414\u0430\u0442\u0430",
                                class: newOtherReport.value.date ? "" : "outline-1 outline-rose-300"
                              }, null, _parent5, _scopeId4));
                              _push5(`</div><div class="relative"${_scopeId4}>`);
                              if (newOtherReport.value.name) {
                                _push5(ssrRenderComponent(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1" }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435`);
                                    } else {
                                      return [
                                        createTextVNode("\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                              } else {
                                _push5(`<!---->`);
                              }
                              _push5(ssrRenderComponent(_component_UiInput, {
                                modelValue: newOtherReport.value.name,
                                "onUpdate:modelValue": ($event) => newOtherReport.value.name = $event,
                                placeholder: "\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435",
                                class: newOtherReport.value.name ? "" : "outline-1 outline-rose-300"
                              }, null, _parent5, _scopeId4));
                              _push5(`</div><div class="relative"${_scopeId4}>`);
                              if (newOtherReport.value.cost) {
                                _push5(ssrRenderComponent(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1" }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C`);
                                    } else {
                                      return [
                                        createTextVNode("\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                              } else {
                                _push5(`<!---->`);
                              }
                              _push5(ssrRenderComponent(_component_UiInput, {
                                modelValue: newOtherReport.value.cost,
                                "onUpdate:modelValue": ($event) => newOtherReport.value.cost = $event,
                                type: "number",
                                placeholder: "\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C",
                                class: newOtherReport.value.cost ? "" : "outline-1 outline-rose-300"
                              }, null, _parent5, _scopeId4));
                              _push5(`</div><span${_scopeId4}> \u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C: ${ssrInterpolate(newOtherReport.value.cost)}\u0440. </span></div><div class="flex justify-end w-full"${_scopeId4}>`);
                              _push5(ssrRenderComponent(_component_UiButton, {
                                disabled: disabled.value,
                                onClick: createOtherReport
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(` \u0421\u043E\u0437\u0434\u0430\u0442\u044C `);
                                  } else {
                                    return [
                                      createTextVNode(" \u0421\u043E\u0437\u0434\u0430\u0442\u044C ")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(`</div>`);
                            } else {
                              return [
                                createVNode("div", { class: "flex flex-col gap-5" }, [
                                  createVNode("div", { class: "relative" }, [
                                    newOtherReport.value.date ? (openBlock(), createBlock(_component_UiLabel, {
                                      key: 0,
                                      class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode("\u0414\u0430\u0442\u0430")
                                      ]),
                                      _: 1
                                    })) : createCommentVNode("", true),
                                    createVNode(_component_UiInput, {
                                      modelValue: newOtherReport.value.date,
                                      "onUpdate:modelValue": ($event) => newOtherReport.value.date = $event,
                                      type: "date",
                                      placeholder: "\u0414\u0430\u0442\u0430",
                                      class: newOtherReport.value.date ? "" : "outline-1 outline-rose-300"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "class"])
                                  ]),
                                  createVNode("div", { class: "relative" }, [
                                    newOtherReport.value.name ? (openBlock(), createBlock(_component_UiLabel, {
                                      key: 0,
                                      class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode("\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435")
                                      ]),
                                      _: 1
                                    })) : createCommentVNode("", true),
                                    createVNode(_component_UiInput, {
                                      modelValue: newOtherReport.value.name,
                                      "onUpdate:modelValue": ($event) => newOtherReport.value.name = $event,
                                      placeholder: "\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435",
                                      class: newOtherReport.value.name ? "" : "outline-1 outline-rose-300"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "class"])
                                  ]),
                                  createVNode("div", { class: "relative" }, [
                                    newOtherReport.value.cost ? (openBlock(), createBlock(_component_UiLabel, {
                                      key: 0,
                                      class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode("\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C")
                                      ]),
                                      _: 1
                                    })) : createCommentVNode("", true),
                                    createVNode(_component_UiInput, {
                                      modelValue: newOtherReport.value.cost,
                                      "onUpdate:modelValue": ($event) => newOtherReport.value.cost = $event,
                                      type: "number",
                                      placeholder: "\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C",
                                      class: newOtherReport.value.cost ? "" : "outline-1 outline-rose-300"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "class"])
                                  ]),
                                  createVNode("span", null, " \u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C: " + toDisplayString(newOtherReport.value.cost) + "\u0440. ", 1)
                                ]),
                                createVNode("div", { class: "flex justify-end w-full" }, [
                                  createVNode(_component_UiButton, {
                                    disabled: disabled.value,
                                    onClick: createOtherReport
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" \u0421\u043E\u0437\u0434\u0430\u0442\u044C ")
                                    ]),
                                    _: 1
                                  }, 8, ["disabled"])
                                ])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_UiTabsList, { class: "w-full mb-4" }, {
                            default: withCtx(() => [
                              createVNode(_component_UiTabsTrigger, {
                                class: "w-full",
                                value: "new"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" \u041D\u043E\u0432\u043E\u0435 ")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_UiTabsTrigger, {
                                class: "w-full",
                                value: "repair"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" \u0420\u0435\u043C\u043E\u043D\u0442 ")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_UiTabsTrigger, {
                                class: "w-full",
                                value: "other"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" \u0414\u0440\u0443\u0433\u043E\u0435 ")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UiTabsContent, { value: "new" }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "flex flex-col gap-5" }, [
                                createVNode("div", { class: "relative" }, [
                                  newReportMaster.value.date ? (openBlock(), createBlock(_component_UiLabel, {
                                    key: 0,
                                    class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("\u0414\u0430\u0442\u0430 \u0441\u043C\u0435\u043D\u044B")
                                    ]),
                                    _: 1
                                  })) : createCommentVNode("", true),
                                  createVNode(_component_UiInput, {
                                    modelValue: newReportMaster.value.date,
                                    "onUpdate:modelValue": ($event) => newReportMaster.value.date = $event,
                                    type: "date",
                                    placeholder: "\u0414\u0430\u0442\u0430 \u0441\u043C\u0435\u043D\u044B",
                                    class: newReportMaster.value.date ? "" : "outline-1 outline-rose-300"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "class"])
                                ]),
                                createVNode("div", { class: "relative" }, [
                                  newReportMaster.value.type ? (openBlock(), createBlock(_component_UiLabel, {
                                    key: 0,
                                    class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("\u0422\u0438\u043F")
                                    ]),
                                    _: 1
                                  })) : createCommentVNode("", true),
                                  createVNode("div", {
                                    class: newReportMaster.value.type ? "" : "outline-1 outline-rose-300 rounded-md"
                                  }, [
                                    createVNode(_component_UiSelect, {
                                      modelValue: newReportMaster.value.type,
                                      "onUpdate:modelValue": ($event) => newReportMaster.value.type = $event
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_UiSelectTrigger, null, {
                                          default: withCtx(() => [
                                            createVNode(_component_UiSelectValue, { placeholder: "\u0422\u0438\u043F" })
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_UiSelectContent, { class: "h-[250px]" }, {
                                          default: withCtx(() => [
                                            (openBlock(), createBlock(Fragment, null, renderList(types, (item, i) => {
                                              return createVNode(_component_UiSelectGroup, { key: i }, {
                                                default: withCtx(() => [
                                                  createVNode(_component_UiSelectItem, { value: item }, {
                                                    default: withCtx(() => [
                                                      createTextVNode(toDisplayString(item), 1)
                                                    ]),
                                                    _: 2
                                                  }, 1032, ["value"])
                                                ]),
                                                _: 2
                                              }, 1024);
                                            }), 64))
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    }, 8, ["modelValue", "onUpdate:modelValue"])
                                  ], 2)
                                ]),
                                createVNode("div", { class: "relative" }, [
                                  newReportMaster.value.name ? (openBlock(), createBlock(_component_UiLabel, {
                                    key: 0,
                                    class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0438\u043B\u0438 \u0441\u0441\u044B\u043B\u043A\u0430")
                                    ]),
                                    _: 1
                                  })) : createCommentVNode("", true),
                                  createVNode(_component_UiInput, {
                                    modelValue: newReportMaster.value.name,
                                    "onUpdate:modelValue": ($event) => newReportMaster.value.name = $event,
                                    placeholder: "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0438\u043B\u0438 \u0441\u0441\u044B\u043B\u043A\u0430",
                                    class: newReportMaster.value.name ? "" : "outline-1 outline-rose-300"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "class"])
                                ]),
                                createVNode("div", { class: "flex gap-2" }, [
                                  createVNode("div", { class: "relative" }, [
                                    createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                                      default: withCtx(() => [
                                        createTextVNode("\u041C\u0435\u0442\u0440\u044B")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode("div", { class: "flex gap-2" }, [
                                      createVNode(_component_UiInput, {
                                        modelValue: newReportMaster.value.metrs,
                                        "onUpdate:modelValue": ($event) => newReportMaster.value.metrs = $event,
                                        modelModifiers: { number: true },
                                        placeholder: "\u041C\u0435\u0442\u0440\u044B",
                                        type: "number",
                                        min: "0",
                                        class: newReportMaster.value.metrs > 0 ? "" : "outline-1 outline-rose-300"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "class"])
                                    ])
                                  ]),
                                  createVNode("div", { class: "relative" }, [
                                    createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                                      default: withCtx(() => [
                                        createTextVNode("\u042D\u043B\u0435\u043C\u0435\u043D\u0442\u044B")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode("div", { class: "flex gap-2" }, [
                                      createVNode(_component_UiInput, {
                                        modelValue: newReportMaster.value.els,
                                        "onUpdate:modelValue": ($event) => newReportMaster.value.els = $event,
                                        modelModifiers: { number: true },
                                        placeholder: "\u042D\u043B\u0435\u043C\u0435\u043D\u0442\u044B",
                                        type: "number",
                                        min: "0",
                                        class: newReportMaster.value.els > 0 ? "" : "outline-1 outline-rose-300"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "class"])
                                    ])
                                  ])
                                ]),
                                createVNode("span", null, " \u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C: " + toDisplayString(newReportMaster.value.cost) + "\u0440. ", 1)
                              ]),
                              createVNode("div", { class: "flex justify-end w-full" }, [
                                createVNode(_component_UiButton, {
                                  disabled: disabled.value,
                                  onClick: createMasterReport
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" \u0421\u043E\u0437\u0434\u0430\u0442\u044C ")
                                  ]),
                                  _: 1
                                }, 8, ["disabled"])
                              ])
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UiTabsContent, { value: "repair" }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "flex flex-col gap-5" }, [
                                createVNode("div", { class: "relative" }, [
                                  newRepairReport.value.date ? (openBlock(), createBlock(_component_UiLabel, {
                                    key: 0,
                                    class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("\u0414\u0430\u0442\u0430 \u0441\u043C\u0435\u043D\u044B")
                                    ]),
                                    _: 1
                                  })) : createCommentVNode("", true),
                                  createVNode(_component_UiInput, {
                                    modelValue: newRepairReport.value.date,
                                    "onUpdate:modelValue": ($event) => newRepairReport.value.date = $event,
                                    type: "date",
                                    placeholder: "\u0414\u0430\u0442\u0430 \u0441\u043C\u0435\u043D\u044B",
                                    class: newRepairReport.value.date ? "" : "outline-1 outline-rose-300"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "class"])
                                ]),
                                createVNode("div", { class: "relative" }, [
                                  newRepairReport.value.type ? (openBlock(), createBlock(_component_UiLabel, {
                                    key: 0,
                                    class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("\u0422\u0438\u043F")
                                    ]),
                                    _: 1
                                  })) : createCommentVNode("", true),
                                  createVNode("div", {
                                    class: newRepairReport.value.type ? "" : "outline-1 outline-rose-300 rounded-md"
                                  }, [
                                    createVNode(_component_UiSelect, {
                                      modelValue: newRepairReport.value.type,
                                      "onUpdate:modelValue": ($event) => newRepairReport.value.type = $event
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_UiSelectTrigger, null, {
                                          default: withCtx(() => [
                                            createVNode(_component_UiSelectValue, { placeholder: "\u0422\u0438\u043F" })
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_UiSelectContent, null, {
                                          default: withCtx(() => [
                                            (openBlock(), createBlock(Fragment, null, renderList(repairTypes, (item, i) => {
                                              return createVNode(_component_UiSelectGroup, { key: i }, {
                                                default: withCtx(() => [
                                                  createVNode(_component_UiSelectItem, { value: item }, {
                                                    default: withCtx(() => [
                                                      createTextVNode(toDisplayString(item), 1)
                                                    ]),
                                                    _: 2
                                                  }, 1032, ["value"])
                                                ]),
                                                _: 2
                                              }, 1024);
                                            }), 64))
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    }, 8, ["modelValue", "onUpdate:modelValue"])
                                  ], 2)
                                ]),
                                createVNode("div", { class: "relative" }, [
                                  newRepairReport.value.name ? (openBlock(), createBlock(_component_UiLabel, {
                                    key: 0,
                                    class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0438\u043B\u0438 \u0441\u0441\u044B\u043B\u043A\u0430")
                                    ]),
                                    _: 1
                                  })) : createCommentVNode("", true),
                                  createVNode(_component_UiInput, {
                                    modelValue: newRepairReport.value.name,
                                    "onUpdate:modelValue": ($event) => newRepairReport.value.name = $event,
                                    placeholder: "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0438\u043B\u0438 \u0441\u0441\u044B\u043B\u043A\u0430",
                                    class: newRepairReport.value.name ? "" : "outline-1 outline-rose-300"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "class"])
                                ]),
                                createVNode("div", { class: "flex gap-2" }, [
                                  createVNode("div", { class: "relative" }, [
                                    createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                                      default: withCtx(() => [
                                        createTextVNode("\u041C\u0435\u0442\u0440\u044B(\u043D\u0435\u043E\u043D)")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_UiInput, {
                                      modelValue: newRepairReport.value.metrs,
                                      "onUpdate:modelValue": ($event) => newRepairReport.value.metrs = $event,
                                      modelModifiers: { number: true },
                                      placeholder: "\u041C\u0435\u0442\u0440\u044B(\u043D\u0435\u043E\u043D)",
                                      type: "number",
                                      min: "0"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  createVNode("div", { class: "relative" }, [
                                    createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                                      default: withCtx(() => [
                                        createTextVNode("\u042D\u043B-\u0442\u044B(\u043D\u0435\u043E\u043D)")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_UiInput, {
                                      modelValue: newRepairReport.value.els,
                                      "onUpdate:modelValue": ($event) => newRepairReport.value.els = $event,
                                      modelModifiers: { number: true },
                                      placeholder: "\u042D\u043B-\u0442\u044B(\u043D\u0435\u043E\u043D)",
                                      type: "number",
                                      min: "0"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  createVNode("div", { class: "relative" }, [
                                    createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                                      default: withCtx(() => [
                                        createTextVNode("\u0410\u043A\u0443\u0441\u0442\u0438\u043A\u0430")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_UiInput, {
                                      modelValue: newRepairReport.value.acoustics,
                                      "onUpdate:modelValue": ($event) => newRepairReport.value.acoustics = $event,
                                      modelModifiers: { number: true },
                                      placeholder: "\u0410\u043A\u0443\u0441\u0442\u0438\u043A\u0430",
                                      type: "number",
                                      min: "0"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ])
                                ]),
                                createVNode("div", { class: "flex gap-2" }, [
                                  createVNode("div", { class: "relative" }, [
                                    createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                                      default: withCtx(() => [
                                        createTextVNode("\u0420\u0430\u0441\u043F\u0430\u043A\u043E\u0432\u043A\u0430 \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_UiInput, {
                                      modelValue: newRepairReport.value.unpackage,
                                      "onUpdate:modelValue": ($event) => newRepairReport.value.unpackage = $event,
                                      modelModifiers: { number: true },
                                      placeholder: "\u0420\u0430\u0441\u043F\u0430\u043A\u043E\u0432\u043A\u0430 \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442",
                                      type: "number",
                                      min: "0"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  createVNode("div", { class: "relative" }, [
                                    createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                                      default: withCtx(() => [
                                        createTextVNode("\u0420\u0430\u0441\u043F\u0430\u043A\u043E\u0432\u043A\u0430 \u0431\u043E\u043B\u044C\u0448\u0430\u044F")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_UiInput, {
                                      modelValue: newRepairReport.value.unpackageBig,
                                      "onUpdate:modelValue": ($event) => newRepairReport.value.unpackageBig = $event,
                                      modelModifiers: { number: true },
                                      placeholder: "\u0420\u0430\u0441\u043F\u0430\u043A\u043E\u0432\u043A\u0430 \u0431\u043E\u043B\u044C\u0448\u0430\u044F",
                                      type: "number",
                                      min: "0"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ])
                                ]),
                                createVNode("div", { class: "flex gap-2" }, [
                                  createVNode("div", { class: "relative" }, [
                                    createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                                      default: withCtx(() => [
                                        createTextVNode("\u0428\u043B\u0438\u0444\u043E\u0432\u043A\u0430")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_UiInput, {
                                      modelValue: newRepairReport.value.grinding,
                                      "onUpdate:modelValue": ($event) => newRepairReport.value.grinding = $event,
                                      modelModifiers: { number: true },
                                      placeholder: "\u0428\u043B\u0438\u0444\u043E\u0432\u043A\u0430",
                                      type: "number",
                                      min: "0"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  createVNode("div", { class: "relative" }, [
                                    createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                                      default: withCtx(() => [
                                        createTextVNode("\u0421\u043C\u0430\u0440\u0442 \u043A\u043E\u043D\u0442\u0440\u043E\u043B\u043B\u0435\u0440")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_UiInput, {
                                      modelValue: newRepairReport.value.smartContr,
                                      "onUpdate:modelValue": ($event) => newRepairReport.value.smartContr = $event,
                                      modelModifiers: { number: true },
                                      placeholder: "\u0421\u043C\u0430\u0440\u0442 \u043A\u043E\u043D\u0442\u0440\u043E\u043B\u043B\u0435\u0440",
                                      type: "number",
                                      min: "0"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ])
                                ]),
                                createVNode("span", null, " \u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C: " + toDisplayString(newRepairReport.value.cost) + "\u0440. ", 1)
                              ]),
                              createVNode("div", { class: "flex justify-end w-full" }, [
                                createVNode(_component_UiButton, {
                                  disabled: disabled.value,
                                  onClick: createRepairReport
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" \u0421\u043E\u0437\u0434\u0430\u0442\u044C ")
                                  ]),
                                  _: 1
                                }, 8, ["disabled"])
                              ])
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UiTabsContent, { value: "other" }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "flex flex-col gap-5" }, [
                                createVNode("div", { class: "relative" }, [
                                  newOtherReport.value.date ? (openBlock(), createBlock(_component_UiLabel, {
                                    key: 0,
                                    class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("\u0414\u0430\u0442\u0430")
                                    ]),
                                    _: 1
                                  })) : createCommentVNode("", true),
                                  createVNode(_component_UiInput, {
                                    modelValue: newOtherReport.value.date,
                                    "onUpdate:modelValue": ($event) => newOtherReport.value.date = $event,
                                    type: "date",
                                    placeholder: "\u0414\u0430\u0442\u0430",
                                    class: newOtherReport.value.date ? "" : "outline-1 outline-rose-300"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "class"])
                                ]),
                                createVNode("div", { class: "relative" }, [
                                  newOtherReport.value.name ? (openBlock(), createBlock(_component_UiLabel, {
                                    key: 0,
                                    class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435")
                                    ]),
                                    _: 1
                                  })) : createCommentVNode("", true),
                                  createVNode(_component_UiInput, {
                                    modelValue: newOtherReport.value.name,
                                    "onUpdate:modelValue": ($event) => newOtherReport.value.name = $event,
                                    placeholder: "\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435",
                                    class: newOtherReport.value.name ? "" : "outline-1 outline-rose-300"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "class"])
                                ]),
                                createVNode("div", { class: "relative" }, [
                                  newOtherReport.value.cost ? (openBlock(), createBlock(_component_UiLabel, {
                                    key: 0,
                                    class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C")
                                    ]),
                                    _: 1
                                  })) : createCommentVNode("", true),
                                  createVNode(_component_UiInput, {
                                    modelValue: newOtherReport.value.cost,
                                    "onUpdate:modelValue": ($event) => newOtherReport.value.cost = $event,
                                    type: "number",
                                    placeholder: "\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C",
                                    class: newOtherReport.value.cost ? "" : "outline-1 outline-rose-300"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "class"])
                                ]),
                                createVNode("span", null, " \u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C: " + toDisplayString(newOtherReport.value.cost) + "\u0440. ", 1)
                              ]),
                              createVNode("div", { class: "flex justify-end w-full" }, [
                                createVNode(_component_UiButton, {
                                  disabled: disabled.value,
                                  onClick: createOtherReport
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" \u0421\u043E\u0437\u0434\u0430\u0442\u044C ")
                                  ]),
                                  _: 1
                                }, 8, ["disabled"])
                              ])
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                  _push3(ssrRenderComponent(_component_UiDialogFooter, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UiDialogHeader, null, {
                      default: withCtx(() => [
                        createVNode(_component_UiDialogTitle, null, {
                          default: withCtx(() => [
                            createTextVNode("\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u0437\u0430\u043F\u0438\u0441\u044C")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UiDialogDescription)
                      ]),
                      _: 1
                    }),
                    createVNode("div", { class: "" }, [
                      createVNode(_component_UiTabs, {
                        modelValue: curTab.value,
                        "onUpdate:modelValue": ($event) => curTab.value = $event
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_UiTabsList, { class: "w-full mb-4" }, {
                            default: withCtx(() => [
                              createVNode(_component_UiTabsTrigger, {
                                class: "w-full",
                                value: "new"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" \u041D\u043E\u0432\u043E\u0435 ")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_UiTabsTrigger, {
                                class: "w-full",
                                value: "repair"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" \u0420\u0435\u043C\u043E\u043D\u0442 ")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_UiTabsTrigger, {
                                class: "w-full",
                                value: "other"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" \u0414\u0440\u0443\u0433\u043E\u0435 ")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UiTabsContent, { value: "new" }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "flex flex-col gap-5" }, [
                                createVNode("div", { class: "relative" }, [
                                  newReportMaster.value.date ? (openBlock(), createBlock(_component_UiLabel, {
                                    key: 0,
                                    class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("\u0414\u0430\u0442\u0430 \u0441\u043C\u0435\u043D\u044B")
                                    ]),
                                    _: 1
                                  })) : createCommentVNode("", true),
                                  createVNode(_component_UiInput, {
                                    modelValue: newReportMaster.value.date,
                                    "onUpdate:modelValue": ($event) => newReportMaster.value.date = $event,
                                    type: "date",
                                    placeholder: "\u0414\u0430\u0442\u0430 \u0441\u043C\u0435\u043D\u044B",
                                    class: newReportMaster.value.date ? "" : "outline-1 outline-rose-300"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "class"])
                                ]),
                                createVNode("div", { class: "relative" }, [
                                  newReportMaster.value.type ? (openBlock(), createBlock(_component_UiLabel, {
                                    key: 0,
                                    class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("\u0422\u0438\u043F")
                                    ]),
                                    _: 1
                                  })) : createCommentVNode("", true),
                                  createVNode("div", {
                                    class: newReportMaster.value.type ? "" : "outline-1 outline-rose-300 rounded-md"
                                  }, [
                                    createVNode(_component_UiSelect, {
                                      modelValue: newReportMaster.value.type,
                                      "onUpdate:modelValue": ($event) => newReportMaster.value.type = $event
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_UiSelectTrigger, null, {
                                          default: withCtx(() => [
                                            createVNode(_component_UiSelectValue, { placeholder: "\u0422\u0438\u043F" })
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_UiSelectContent, { class: "h-[250px]" }, {
                                          default: withCtx(() => [
                                            (openBlock(), createBlock(Fragment, null, renderList(types, (item, i) => {
                                              return createVNode(_component_UiSelectGroup, { key: i }, {
                                                default: withCtx(() => [
                                                  createVNode(_component_UiSelectItem, { value: item }, {
                                                    default: withCtx(() => [
                                                      createTextVNode(toDisplayString(item), 1)
                                                    ]),
                                                    _: 2
                                                  }, 1032, ["value"])
                                                ]),
                                                _: 2
                                              }, 1024);
                                            }), 64))
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    }, 8, ["modelValue", "onUpdate:modelValue"])
                                  ], 2)
                                ]),
                                createVNode("div", { class: "relative" }, [
                                  newReportMaster.value.name ? (openBlock(), createBlock(_component_UiLabel, {
                                    key: 0,
                                    class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0438\u043B\u0438 \u0441\u0441\u044B\u043B\u043A\u0430")
                                    ]),
                                    _: 1
                                  })) : createCommentVNode("", true),
                                  createVNode(_component_UiInput, {
                                    modelValue: newReportMaster.value.name,
                                    "onUpdate:modelValue": ($event) => newReportMaster.value.name = $event,
                                    placeholder: "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0438\u043B\u0438 \u0441\u0441\u044B\u043B\u043A\u0430",
                                    class: newReportMaster.value.name ? "" : "outline-1 outline-rose-300"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "class"])
                                ]),
                                createVNode("div", { class: "flex gap-2" }, [
                                  createVNode("div", { class: "relative" }, [
                                    createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                                      default: withCtx(() => [
                                        createTextVNode("\u041C\u0435\u0442\u0440\u044B")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode("div", { class: "flex gap-2" }, [
                                      createVNode(_component_UiInput, {
                                        modelValue: newReportMaster.value.metrs,
                                        "onUpdate:modelValue": ($event) => newReportMaster.value.metrs = $event,
                                        modelModifiers: { number: true },
                                        placeholder: "\u041C\u0435\u0442\u0440\u044B",
                                        type: "number",
                                        min: "0",
                                        class: newReportMaster.value.metrs > 0 ? "" : "outline-1 outline-rose-300"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "class"])
                                    ])
                                  ]),
                                  createVNode("div", { class: "relative" }, [
                                    createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                                      default: withCtx(() => [
                                        createTextVNode("\u042D\u043B\u0435\u043C\u0435\u043D\u0442\u044B")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode("div", { class: "flex gap-2" }, [
                                      createVNode(_component_UiInput, {
                                        modelValue: newReportMaster.value.els,
                                        "onUpdate:modelValue": ($event) => newReportMaster.value.els = $event,
                                        modelModifiers: { number: true },
                                        placeholder: "\u042D\u043B\u0435\u043C\u0435\u043D\u0442\u044B",
                                        type: "number",
                                        min: "0",
                                        class: newReportMaster.value.els > 0 ? "" : "outline-1 outline-rose-300"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "class"])
                                    ])
                                  ])
                                ]),
                                createVNode("span", null, " \u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C: " + toDisplayString(newReportMaster.value.cost) + "\u0440. ", 1)
                              ]),
                              createVNode("div", { class: "flex justify-end w-full" }, [
                                createVNode(_component_UiButton, {
                                  disabled: disabled.value,
                                  onClick: createMasterReport
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" \u0421\u043E\u0437\u0434\u0430\u0442\u044C ")
                                  ]),
                                  _: 1
                                }, 8, ["disabled"])
                              ])
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UiTabsContent, { value: "repair" }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "flex flex-col gap-5" }, [
                                createVNode("div", { class: "relative" }, [
                                  newRepairReport.value.date ? (openBlock(), createBlock(_component_UiLabel, {
                                    key: 0,
                                    class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("\u0414\u0430\u0442\u0430 \u0441\u043C\u0435\u043D\u044B")
                                    ]),
                                    _: 1
                                  })) : createCommentVNode("", true),
                                  createVNode(_component_UiInput, {
                                    modelValue: newRepairReport.value.date,
                                    "onUpdate:modelValue": ($event) => newRepairReport.value.date = $event,
                                    type: "date",
                                    placeholder: "\u0414\u0430\u0442\u0430 \u0441\u043C\u0435\u043D\u044B",
                                    class: newRepairReport.value.date ? "" : "outline-1 outline-rose-300"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "class"])
                                ]),
                                createVNode("div", { class: "relative" }, [
                                  newRepairReport.value.type ? (openBlock(), createBlock(_component_UiLabel, {
                                    key: 0,
                                    class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("\u0422\u0438\u043F")
                                    ]),
                                    _: 1
                                  })) : createCommentVNode("", true),
                                  createVNode("div", {
                                    class: newRepairReport.value.type ? "" : "outline-1 outline-rose-300 rounded-md"
                                  }, [
                                    createVNode(_component_UiSelect, {
                                      modelValue: newRepairReport.value.type,
                                      "onUpdate:modelValue": ($event) => newRepairReport.value.type = $event
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_UiSelectTrigger, null, {
                                          default: withCtx(() => [
                                            createVNode(_component_UiSelectValue, { placeholder: "\u0422\u0438\u043F" })
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_UiSelectContent, null, {
                                          default: withCtx(() => [
                                            (openBlock(), createBlock(Fragment, null, renderList(repairTypes, (item, i) => {
                                              return createVNode(_component_UiSelectGroup, { key: i }, {
                                                default: withCtx(() => [
                                                  createVNode(_component_UiSelectItem, { value: item }, {
                                                    default: withCtx(() => [
                                                      createTextVNode(toDisplayString(item), 1)
                                                    ]),
                                                    _: 2
                                                  }, 1032, ["value"])
                                                ]),
                                                _: 2
                                              }, 1024);
                                            }), 64))
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    }, 8, ["modelValue", "onUpdate:modelValue"])
                                  ], 2)
                                ]),
                                createVNode("div", { class: "relative" }, [
                                  newRepairReport.value.name ? (openBlock(), createBlock(_component_UiLabel, {
                                    key: 0,
                                    class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0438\u043B\u0438 \u0441\u0441\u044B\u043B\u043A\u0430")
                                    ]),
                                    _: 1
                                  })) : createCommentVNode("", true),
                                  createVNode(_component_UiInput, {
                                    modelValue: newRepairReport.value.name,
                                    "onUpdate:modelValue": ($event) => newRepairReport.value.name = $event,
                                    placeholder: "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0438\u043B\u0438 \u0441\u0441\u044B\u043B\u043A\u0430",
                                    class: newRepairReport.value.name ? "" : "outline-1 outline-rose-300"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "class"])
                                ]),
                                createVNode("div", { class: "flex gap-2" }, [
                                  createVNode("div", { class: "relative" }, [
                                    createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                                      default: withCtx(() => [
                                        createTextVNode("\u041C\u0435\u0442\u0440\u044B(\u043D\u0435\u043E\u043D)")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_UiInput, {
                                      modelValue: newRepairReport.value.metrs,
                                      "onUpdate:modelValue": ($event) => newRepairReport.value.metrs = $event,
                                      modelModifiers: { number: true },
                                      placeholder: "\u041C\u0435\u0442\u0440\u044B(\u043D\u0435\u043E\u043D)",
                                      type: "number",
                                      min: "0"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  createVNode("div", { class: "relative" }, [
                                    createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                                      default: withCtx(() => [
                                        createTextVNode("\u042D\u043B-\u0442\u044B(\u043D\u0435\u043E\u043D)")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_UiInput, {
                                      modelValue: newRepairReport.value.els,
                                      "onUpdate:modelValue": ($event) => newRepairReport.value.els = $event,
                                      modelModifiers: { number: true },
                                      placeholder: "\u042D\u043B-\u0442\u044B(\u043D\u0435\u043E\u043D)",
                                      type: "number",
                                      min: "0"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  createVNode("div", { class: "relative" }, [
                                    createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                                      default: withCtx(() => [
                                        createTextVNode("\u0410\u043A\u0443\u0441\u0442\u0438\u043A\u0430")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_UiInput, {
                                      modelValue: newRepairReport.value.acoustics,
                                      "onUpdate:modelValue": ($event) => newRepairReport.value.acoustics = $event,
                                      modelModifiers: { number: true },
                                      placeholder: "\u0410\u043A\u0443\u0441\u0442\u0438\u043A\u0430",
                                      type: "number",
                                      min: "0"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ])
                                ]),
                                createVNode("div", { class: "flex gap-2" }, [
                                  createVNode("div", { class: "relative" }, [
                                    createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                                      default: withCtx(() => [
                                        createTextVNode("\u0420\u0430\u0441\u043F\u0430\u043A\u043E\u0432\u043A\u0430 \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_UiInput, {
                                      modelValue: newRepairReport.value.unpackage,
                                      "onUpdate:modelValue": ($event) => newRepairReport.value.unpackage = $event,
                                      modelModifiers: { number: true },
                                      placeholder: "\u0420\u0430\u0441\u043F\u0430\u043A\u043E\u0432\u043A\u0430 \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442",
                                      type: "number",
                                      min: "0"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  createVNode("div", { class: "relative" }, [
                                    createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                                      default: withCtx(() => [
                                        createTextVNode("\u0420\u0430\u0441\u043F\u0430\u043A\u043E\u0432\u043A\u0430 \u0431\u043E\u043B\u044C\u0448\u0430\u044F")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_UiInput, {
                                      modelValue: newRepairReport.value.unpackageBig,
                                      "onUpdate:modelValue": ($event) => newRepairReport.value.unpackageBig = $event,
                                      modelModifiers: { number: true },
                                      placeholder: "\u0420\u0430\u0441\u043F\u0430\u043A\u043E\u0432\u043A\u0430 \u0431\u043E\u043B\u044C\u0448\u0430\u044F",
                                      type: "number",
                                      min: "0"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ])
                                ]),
                                createVNode("div", { class: "flex gap-2" }, [
                                  createVNode("div", { class: "relative" }, [
                                    createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                                      default: withCtx(() => [
                                        createTextVNode("\u0428\u043B\u0438\u0444\u043E\u0432\u043A\u0430")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_UiInput, {
                                      modelValue: newRepairReport.value.grinding,
                                      "onUpdate:modelValue": ($event) => newRepairReport.value.grinding = $event,
                                      modelModifiers: { number: true },
                                      placeholder: "\u0428\u043B\u0438\u0444\u043E\u0432\u043A\u0430",
                                      type: "number",
                                      min: "0"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  createVNode("div", { class: "relative" }, [
                                    createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                                      default: withCtx(() => [
                                        createTextVNode("\u0421\u043C\u0430\u0440\u0442 \u043A\u043E\u043D\u0442\u0440\u043E\u043B\u043B\u0435\u0440")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_UiInput, {
                                      modelValue: newRepairReport.value.smartContr,
                                      "onUpdate:modelValue": ($event) => newRepairReport.value.smartContr = $event,
                                      modelModifiers: { number: true },
                                      placeholder: "\u0421\u043C\u0430\u0440\u0442 \u043A\u043E\u043D\u0442\u0440\u043E\u043B\u043B\u0435\u0440",
                                      type: "number",
                                      min: "0"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ])
                                ]),
                                createVNode("span", null, " \u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C: " + toDisplayString(newRepairReport.value.cost) + "\u0440. ", 1)
                              ]),
                              createVNode("div", { class: "flex justify-end w-full" }, [
                                createVNode(_component_UiButton, {
                                  disabled: disabled.value,
                                  onClick: createRepairReport
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" \u0421\u043E\u0437\u0434\u0430\u0442\u044C ")
                                  ]),
                                  _: 1
                                }, 8, ["disabled"])
                              ])
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UiTabsContent, { value: "other" }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "flex flex-col gap-5" }, [
                                createVNode("div", { class: "relative" }, [
                                  newOtherReport.value.date ? (openBlock(), createBlock(_component_UiLabel, {
                                    key: 0,
                                    class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("\u0414\u0430\u0442\u0430")
                                    ]),
                                    _: 1
                                  })) : createCommentVNode("", true),
                                  createVNode(_component_UiInput, {
                                    modelValue: newOtherReport.value.date,
                                    "onUpdate:modelValue": ($event) => newOtherReport.value.date = $event,
                                    type: "date",
                                    placeholder: "\u0414\u0430\u0442\u0430",
                                    class: newOtherReport.value.date ? "" : "outline-1 outline-rose-300"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "class"])
                                ]),
                                createVNode("div", { class: "relative" }, [
                                  newOtherReport.value.name ? (openBlock(), createBlock(_component_UiLabel, {
                                    key: 0,
                                    class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435")
                                    ]),
                                    _: 1
                                  })) : createCommentVNode("", true),
                                  createVNode(_component_UiInput, {
                                    modelValue: newOtherReport.value.name,
                                    "onUpdate:modelValue": ($event) => newOtherReport.value.name = $event,
                                    placeholder: "\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435",
                                    class: newOtherReport.value.name ? "" : "outline-1 outline-rose-300"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "class"])
                                ]),
                                createVNode("div", { class: "relative" }, [
                                  newOtherReport.value.cost ? (openBlock(), createBlock(_component_UiLabel, {
                                    key: 0,
                                    class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C")
                                    ]),
                                    _: 1
                                  })) : createCommentVNode("", true),
                                  createVNode(_component_UiInput, {
                                    modelValue: newOtherReport.value.cost,
                                    "onUpdate:modelValue": ($event) => newOtherReport.value.cost = $event,
                                    type: "number",
                                    placeholder: "\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C",
                                    class: newOtherReport.value.cost ? "" : "outline-1 outline-rose-300"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "class"])
                                ]),
                                createVNode("span", null, " \u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C: " + toDisplayString(newOtherReport.value.cost) + "\u0440. ", 1)
                              ]),
                              createVNode("div", { class: "flex justify-end w-full" }, [
                                createVNode(_component_UiButton, {
                                  disabled: disabled.value,
                                  onClick: createOtherReport
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" \u0421\u043E\u0437\u0434\u0430\u0442\u044C ")
                                  ]),
                                  _: 1
                                }, 8, ["disabled"])
                              ])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    createVNode(_component_UiDialogFooter)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UiDialogTrigger, { "as-child": "" }, {
                default: withCtx(() => [
                  createVNode(_component_UiButton, { class: "w-full" }, {
                    default: withCtx(() => [
                      createTextVNode("\u0421\u043E\u0437\u0434\u0430\u0442\u044C")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_UiDialogContent, { class: "max-w-[400px] flex flex-col top-0 translate-y-[0px]" }, {
                default: withCtx(() => [
                  createVNode(_component_UiDialogHeader, null, {
                    default: withCtx(() => [
                      createVNode(_component_UiDialogTitle, null, {
                        default: withCtx(() => [
                          createTextVNode("\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u0437\u0430\u043F\u0438\u0441\u044C")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_UiDialogDescription)
                    ]),
                    _: 1
                  }),
                  createVNode("div", { class: "" }, [
                    createVNode(_component_UiTabs, {
                      modelValue: curTab.value,
                      "onUpdate:modelValue": ($event) => curTab.value = $event
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_UiTabsList, { class: "w-full mb-4" }, {
                          default: withCtx(() => [
                            createVNode(_component_UiTabsTrigger, {
                              class: "w-full",
                              value: "new"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" \u041D\u043E\u0432\u043E\u0435 ")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_UiTabsTrigger, {
                              class: "w-full",
                              value: "repair"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" \u0420\u0435\u043C\u043E\u043D\u0442 ")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_UiTabsTrigger, {
                              class: "w-full",
                              value: "other"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" \u0414\u0440\u0443\u0433\u043E\u0435 ")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UiTabsContent, { value: "new" }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "flex flex-col gap-5" }, [
                              createVNode("div", { class: "relative" }, [
                                newReportMaster.value.date ? (openBlock(), createBlock(_component_UiLabel, {
                                  key: 0,
                                  class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("\u0414\u0430\u0442\u0430 \u0441\u043C\u0435\u043D\u044B")
                                  ]),
                                  _: 1
                                })) : createCommentVNode("", true),
                                createVNode(_component_UiInput, {
                                  modelValue: newReportMaster.value.date,
                                  "onUpdate:modelValue": ($event) => newReportMaster.value.date = $event,
                                  type: "date",
                                  placeholder: "\u0414\u0430\u0442\u0430 \u0441\u043C\u0435\u043D\u044B",
                                  class: newReportMaster.value.date ? "" : "outline-1 outline-rose-300"
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "class"])
                              ]),
                              createVNode("div", { class: "relative" }, [
                                newReportMaster.value.type ? (openBlock(), createBlock(_component_UiLabel, {
                                  key: 0,
                                  class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("\u0422\u0438\u043F")
                                  ]),
                                  _: 1
                                })) : createCommentVNode("", true),
                                createVNode("div", {
                                  class: newReportMaster.value.type ? "" : "outline-1 outline-rose-300 rounded-md"
                                }, [
                                  createVNode(_component_UiSelect, {
                                    modelValue: newReportMaster.value.type,
                                    "onUpdate:modelValue": ($event) => newReportMaster.value.type = $event
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_UiSelectTrigger, null, {
                                        default: withCtx(() => [
                                          createVNode(_component_UiSelectValue, { placeholder: "\u0422\u0438\u043F" })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_UiSelectContent, { class: "h-[250px]" }, {
                                        default: withCtx(() => [
                                          (openBlock(), createBlock(Fragment, null, renderList(types, (item, i) => {
                                            return createVNode(_component_UiSelectGroup, { key: i }, {
                                              default: withCtx(() => [
                                                createVNode(_component_UiSelectItem, { value: item }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(toDisplayString(item), 1)
                                                  ]),
                                                  _: 2
                                                }, 1032, ["value"])
                                              ]),
                                              _: 2
                                            }, 1024);
                                          }), 64))
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }, 8, ["modelValue", "onUpdate:modelValue"])
                                ], 2)
                              ]),
                              createVNode("div", { class: "relative" }, [
                                newReportMaster.value.name ? (openBlock(), createBlock(_component_UiLabel, {
                                  key: 0,
                                  class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0438\u043B\u0438 \u0441\u0441\u044B\u043B\u043A\u0430")
                                  ]),
                                  _: 1
                                })) : createCommentVNode("", true),
                                createVNode(_component_UiInput, {
                                  modelValue: newReportMaster.value.name,
                                  "onUpdate:modelValue": ($event) => newReportMaster.value.name = $event,
                                  placeholder: "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0438\u043B\u0438 \u0441\u0441\u044B\u043B\u043A\u0430",
                                  class: newReportMaster.value.name ? "" : "outline-1 outline-rose-300"
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "class"])
                              ]),
                              createVNode("div", { class: "flex gap-2" }, [
                                createVNode("div", { class: "relative" }, [
                                  createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                                    default: withCtx(() => [
                                      createTextVNode("\u041C\u0435\u0442\u0440\u044B")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode("div", { class: "flex gap-2" }, [
                                    createVNode(_component_UiInput, {
                                      modelValue: newReportMaster.value.metrs,
                                      "onUpdate:modelValue": ($event) => newReportMaster.value.metrs = $event,
                                      modelModifiers: { number: true },
                                      placeholder: "\u041C\u0435\u0442\u0440\u044B",
                                      type: "number",
                                      min: "0",
                                      class: newReportMaster.value.metrs > 0 ? "" : "outline-1 outline-rose-300"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "class"])
                                  ])
                                ]),
                                createVNode("div", { class: "relative" }, [
                                  createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                                    default: withCtx(() => [
                                      createTextVNode("\u042D\u043B\u0435\u043C\u0435\u043D\u0442\u044B")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode("div", { class: "flex gap-2" }, [
                                    createVNode(_component_UiInput, {
                                      modelValue: newReportMaster.value.els,
                                      "onUpdate:modelValue": ($event) => newReportMaster.value.els = $event,
                                      modelModifiers: { number: true },
                                      placeholder: "\u042D\u043B\u0435\u043C\u0435\u043D\u0442\u044B",
                                      type: "number",
                                      min: "0",
                                      class: newReportMaster.value.els > 0 ? "" : "outline-1 outline-rose-300"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "class"])
                                  ])
                                ])
                              ]),
                              createVNode("span", null, " \u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C: " + toDisplayString(newReportMaster.value.cost) + "\u0440. ", 1)
                            ]),
                            createVNode("div", { class: "flex justify-end w-full" }, [
                              createVNode(_component_UiButton, {
                                disabled: disabled.value,
                                onClick: createMasterReport
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" \u0421\u043E\u0437\u0434\u0430\u0442\u044C ")
                                ]),
                                _: 1
                              }, 8, ["disabled"])
                            ])
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UiTabsContent, { value: "repair" }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "flex flex-col gap-5" }, [
                              createVNode("div", { class: "relative" }, [
                                newRepairReport.value.date ? (openBlock(), createBlock(_component_UiLabel, {
                                  key: 0,
                                  class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("\u0414\u0430\u0442\u0430 \u0441\u043C\u0435\u043D\u044B")
                                  ]),
                                  _: 1
                                })) : createCommentVNode("", true),
                                createVNode(_component_UiInput, {
                                  modelValue: newRepairReport.value.date,
                                  "onUpdate:modelValue": ($event) => newRepairReport.value.date = $event,
                                  type: "date",
                                  placeholder: "\u0414\u0430\u0442\u0430 \u0441\u043C\u0435\u043D\u044B",
                                  class: newRepairReport.value.date ? "" : "outline-1 outline-rose-300"
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "class"])
                              ]),
                              createVNode("div", { class: "relative" }, [
                                newRepairReport.value.type ? (openBlock(), createBlock(_component_UiLabel, {
                                  key: 0,
                                  class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("\u0422\u0438\u043F")
                                  ]),
                                  _: 1
                                })) : createCommentVNode("", true),
                                createVNode("div", {
                                  class: newRepairReport.value.type ? "" : "outline-1 outline-rose-300 rounded-md"
                                }, [
                                  createVNode(_component_UiSelect, {
                                    modelValue: newRepairReport.value.type,
                                    "onUpdate:modelValue": ($event) => newRepairReport.value.type = $event
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_UiSelectTrigger, null, {
                                        default: withCtx(() => [
                                          createVNode(_component_UiSelectValue, { placeholder: "\u0422\u0438\u043F" })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_UiSelectContent, null, {
                                        default: withCtx(() => [
                                          (openBlock(), createBlock(Fragment, null, renderList(repairTypes, (item, i) => {
                                            return createVNode(_component_UiSelectGroup, { key: i }, {
                                              default: withCtx(() => [
                                                createVNode(_component_UiSelectItem, { value: item }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(toDisplayString(item), 1)
                                                  ]),
                                                  _: 2
                                                }, 1032, ["value"])
                                              ]),
                                              _: 2
                                            }, 1024);
                                          }), 64))
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }, 8, ["modelValue", "onUpdate:modelValue"])
                                ], 2)
                              ]),
                              createVNode("div", { class: "relative" }, [
                                newRepairReport.value.name ? (openBlock(), createBlock(_component_UiLabel, {
                                  key: 0,
                                  class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0438\u043B\u0438 \u0441\u0441\u044B\u043B\u043A\u0430")
                                  ]),
                                  _: 1
                                })) : createCommentVNode("", true),
                                createVNode(_component_UiInput, {
                                  modelValue: newRepairReport.value.name,
                                  "onUpdate:modelValue": ($event) => newRepairReport.value.name = $event,
                                  placeholder: "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0438\u043B\u0438 \u0441\u0441\u044B\u043B\u043A\u0430",
                                  class: newRepairReport.value.name ? "" : "outline-1 outline-rose-300"
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "class"])
                              ]),
                              createVNode("div", { class: "flex gap-2" }, [
                                createVNode("div", { class: "relative" }, [
                                  createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                                    default: withCtx(() => [
                                      createTextVNode("\u041C\u0435\u0442\u0440\u044B(\u043D\u0435\u043E\u043D)")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_UiInput, {
                                    modelValue: newRepairReport.value.metrs,
                                    "onUpdate:modelValue": ($event) => newRepairReport.value.metrs = $event,
                                    modelModifiers: { number: true },
                                    placeholder: "\u041C\u0435\u0442\u0440\u044B(\u043D\u0435\u043E\u043D)",
                                    type: "number",
                                    min: "0"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                createVNode("div", { class: "relative" }, [
                                  createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                                    default: withCtx(() => [
                                      createTextVNode("\u042D\u043B-\u0442\u044B(\u043D\u0435\u043E\u043D)")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_UiInput, {
                                    modelValue: newRepairReport.value.els,
                                    "onUpdate:modelValue": ($event) => newRepairReport.value.els = $event,
                                    modelModifiers: { number: true },
                                    placeholder: "\u042D\u043B-\u0442\u044B(\u043D\u0435\u043E\u043D)",
                                    type: "number",
                                    min: "0"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                createVNode("div", { class: "relative" }, [
                                  createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                                    default: withCtx(() => [
                                      createTextVNode("\u0410\u043A\u0443\u0441\u0442\u0438\u043A\u0430")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_UiInput, {
                                    modelValue: newRepairReport.value.acoustics,
                                    "onUpdate:modelValue": ($event) => newRepairReport.value.acoustics = $event,
                                    modelModifiers: { number: true },
                                    placeholder: "\u0410\u043A\u0443\u0441\u0442\u0438\u043A\u0430",
                                    type: "number",
                                    min: "0"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ])
                              ]),
                              createVNode("div", { class: "flex gap-2" }, [
                                createVNode("div", { class: "relative" }, [
                                  createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                                    default: withCtx(() => [
                                      createTextVNode("\u0420\u0430\u0441\u043F\u0430\u043A\u043E\u0432\u043A\u0430 \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_UiInput, {
                                    modelValue: newRepairReport.value.unpackage,
                                    "onUpdate:modelValue": ($event) => newRepairReport.value.unpackage = $event,
                                    modelModifiers: { number: true },
                                    placeholder: "\u0420\u0430\u0441\u043F\u0430\u043A\u043E\u0432\u043A\u0430 \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442",
                                    type: "number",
                                    min: "0"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                createVNode("div", { class: "relative" }, [
                                  createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                                    default: withCtx(() => [
                                      createTextVNode("\u0420\u0430\u0441\u043F\u0430\u043A\u043E\u0432\u043A\u0430 \u0431\u043E\u043B\u044C\u0448\u0430\u044F")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_UiInput, {
                                    modelValue: newRepairReport.value.unpackageBig,
                                    "onUpdate:modelValue": ($event) => newRepairReport.value.unpackageBig = $event,
                                    modelModifiers: { number: true },
                                    placeholder: "\u0420\u0430\u0441\u043F\u0430\u043A\u043E\u0432\u043A\u0430 \u0431\u043E\u043B\u044C\u0448\u0430\u044F",
                                    type: "number",
                                    min: "0"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ])
                              ]),
                              createVNode("div", { class: "flex gap-2" }, [
                                createVNode("div", { class: "relative" }, [
                                  createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                                    default: withCtx(() => [
                                      createTextVNode("\u0428\u043B\u0438\u0444\u043E\u0432\u043A\u0430")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_UiInput, {
                                    modelValue: newRepairReport.value.grinding,
                                    "onUpdate:modelValue": ($event) => newRepairReport.value.grinding = $event,
                                    modelModifiers: { number: true },
                                    placeholder: "\u0428\u043B\u0438\u0444\u043E\u0432\u043A\u0430",
                                    type: "number",
                                    min: "0"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                createVNode("div", { class: "relative" }, [
                                  createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                                    default: withCtx(() => [
                                      createTextVNode("\u0421\u043C\u0430\u0440\u0442 \u043A\u043E\u043D\u0442\u0440\u043E\u043B\u043B\u0435\u0440")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_UiInput, {
                                    modelValue: newRepairReport.value.smartContr,
                                    "onUpdate:modelValue": ($event) => newRepairReport.value.smartContr = $event,
                                    modelModifiers: { number: true },
                                    placeholder: "\u0421\u043C\u0430\u0440\u0442 \u043A\u043E\u043D\u0442\u0440\u043E\u043B\u043B\u0435\u0440",
                                    type: "number",
                                    min: "0"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ])
                              ]),
                              createVNode("span", null, " \u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C: " + toDisplayString(newRepairReport.value.cost) + "\u0440. ", 1)
                            ]),
                            createVNode("div", { class: "flex justify-end w-full" }, [
                              createVNode(_component_UiButton, {
                                disabled: disabled.value,
                                onClick: createRepairReport
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" \u0421\u043E\u0437\u0434\u0430\u0442\u044C ")
                                ]),
                                _: 1
                              }, 8, ["disabled"])
                            ])
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UiTabsContent, { value: "other" }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "flex flex-col gap-5" }, [
                              createVNode("div", { class: "relative" }, [
                                newOtherReport.value.date ? (openBlock(), createBlock(_component_UiLabel, {
                                  key: 0,
                                  class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("\u0414\u0430\u0442\u0430")
                                  ]),
                                  _: 1
                                })) : createCommentVNode("", true),
                                createVNode(_component_UiInput, {
                                  modelValue: newOtherReport.value.date,
                                  "onUpdate:modelValue": ($event) => newOtherReport.value.date = $event,
                                  type: "date",
                                  placeholder: "\u0414\u0430\u0442\u0430",
                                  class: newOtherReport.value.date ? "" : "outline-1 outline-rose-300"
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "class"])
                              ]),
                              createVNode("div", { class: "relative" }, [
                                newOtherReport.value.name ? (openBlock(), createBlock(_component_UiLabel, {
                                  key: 0,
                                  class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435")
                                  ]),
                                  _: 1
                                })) : createCommentVNode("", true),
                                createVNode(_component_UiInput, {
                                  modelValue: newOtherReport.value.name,
                                  "onUpdate:modelValue": ($event) => newOtherReport.value.name = $event,
                                  placeholder: "\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435",
                                  class: newOtherReport.value.name ? "" : "outline-1 outline-rose-300"
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "class"])
                              ]),
                              createVNode("div", { class: "relative" }, [
                                newOtherReport.value.cost ? (openBlock(), createBlock(_component_UiLabel, {
                                  key: 0,
                                  class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C")
                                  ]),
                                  _: 1
                                })) : createCommentVNode("", true),
                                createVNode(_component_UiInput, {
                                  modelValue: newOtherReport.value.cost,
                                  "onUpdate:modelValue": ($event) => newOtherReport.value.cost = $event,
                                  type: "number",
                                  placeholder: "\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C",
                                  class: newOtherReport.value.cost ? "" : "outline-1 outline-rose-300"
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "class"])
                              ]),
                              createVNode("span", null, " \u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C: " + toDisplayString(newOtherReport.value.cost) + "\u0440. ", 1)
                            ]),
                            createVNode("div", { class: "flex justify-end w-full" }, [
                              createVNode(_component_UiButton, {
                                disabled: disabled.value,
                                onClick: createOtherReport
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" \u0421\u043E\u0437\u0434\u0430\u0442\u044C ")
                                ]),
                                _: 1
                              }, 8, ["disabled"])
                            ])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  createVNode(_component_UiDialogFooter)
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$e = _sfc_main$e.setup;
_sfc_main$e.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/my/production/CreateMasterReport.vue");
  return _sfc_setup$e ? _sfc_setup$e(props, ctx) : void 0;
};
const _sfc_main$d = /* @__PURE__ */ defineComponent({
  __name: "EditMasterReport",
  __ssrInlineRender: true,
  props: {
    report: {},
    masterId: {},
    curUser: {}
  },
  emits: ["report-updated", "close"],
  setup(__props, { emit: __emit }) {
    const { $useApi } = useNuxtApp();
    const { toast } = useToast();
    const emit = __emit;
    const props = __props;
    const isOpen = ref(true);
    const disabled = ref(true);
    const types = [
      "\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u0430\u044F",
      "\u0423\u043B\u0438\u0447\u043D\u0430\u044F",
      "\u0420\u0413\u0411",
      "\u0421\u043C\u0430\u0440\u0442",
      "\u041A\u043E\u043D\u0442\u0440\u0430\u0436\u0443\u0440",
      "\u0420\u0413\u0411 \u041A\u043E\u043D\u0442\u0440\u0430\u0436\u0443\u0440",
      "\u0412\u0411",
      "\u041E\u0417\u041E\u041D",
      "\u041F\u043E\u0434\u0430\u0440\u043E\u043A"
    ];
    const editedReport = ref({ ...props.report });
    const calculateCost = () => {
      const { metrs, els, type } = editedReport.value;
      let cost = 0;
      switch (type) {
        case "\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u0430\u044F":
        case "\u0412\u0411":
        case "\u041E\u0417\u041E\u041D":
        case "\u041F\u043E\u0434\u0430\u0440\u043E\u043A":
          cost = metrs * 100 + els * 50;
          break;
        case "\u0423\u043B\u0438\u0447\u043D\u0430\u044F":
        case "\u0420\u0413\u0411 \u041A\u043E\u043D\u0442\u0440\u0430\u0436\u0443\u0440":
          cost = metrs * 130 + els * 70;
          break;
        case "\u0420\u0413\u0411":
        case "\u0421\u043C\u0430\u0440\u0442":
          cost = metrs * 140 + els * 150;
          break;
        case "\u041A\u043E\u043D\u0442\u0440\u0430\u0436\u0443\u0440":
          cost = metrs * 60 + els * 30;
          break;
        default:
          cost = 0;
      }
      editedReport.value.cost = cost;
    };
    const updateMasterReport = async () => {
      try {
        disabled.value = true;
        await $useApi.patch(`production/master-report/${editedReport.value.id}`, editedReport.value);
        isOpen.value = false;
        emit("report-updated");
        disabled.value = false;
        toast({
          title: "\u0423\u0441\u043F\u0435\u0445",
          description: "\u041E\u0442\u0447\u0435\u0442 \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D"
        });
      } catch (e) {
        console.log(e);
      }
    };
    const deleteMasterReport = async () => {
      try {
        await $useApi.delete(`production/master-report/${editedReport.value.id}`);
        isOpen.value = false;
        emit("report-updated");
        toast({
          title: "\u0423\u0441\u043F\u0435\u0445",
          description: "\u041E\u0442\u0447\u0435\u0442 \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u0443\u0434\u0430\u043B\u0435\u043D"
        });
      } catch (e) {
        console.log(e);
      }
    };
    watch(
      editedReport,
      () => {
        const { date, name, metrs, els, type } = editedReport.value;
        calculateCost();
        disabled.value = !(date && name && metrs > 0 && els > 0 && type);
      },
      { deep: true }
    );
    watch(isOpen, (newValue) => {
      if (!newValue) {
        emit("close");
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiDialog = _sfc_main$4$2;
      const _component_UiDialogContent = _sfc_main$l;
      const _component_UiDialogHeader = _sfc_main$2$5;
      const _component_UiDialogTitle = _sfc_main$1$5;
      const _component_UiDialogDescription = _sfc_main$m;
      const _component_UiLabel = _sfc_main$s;
      const _component_UiInput = _sfc_main$k;
      const _component_UiSelect = _sfc_main$7$1;
      const _component_UiSelectTrigger = _sfc_main$5$3;
      const _component_UiSelectValue = _sfc_main$6$2;
      const _component_UiSelectContent = _sfc_main$4$4;
      const _component_UiSelectGroup = _sfc_main$3$5;
      const _component_UiSelectItem = _sfc_main$2$7;
      const _component_UiTextarea = _sfc_main$t;
      const _component_UiDialogFooter = _sfc_main$o;
      const _component_UiButton = _sfc_main$q;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_UiDialog, {
        open: isOpen.value,
        "onUpdate:open": ($event) => isOpen.value = $event
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UiDialogContent, { class: "max-w-[400px] flex flex-col top-0 translate-y-[0px]" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                var _a, _b, _c, _d;
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UiDialogHeader, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UiDialogTitle, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0437\u0430\u043F\u0438\u0441\u044C`);
                            } else {
                              return [
                                createTextVNode("\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0437\u0430\u043F\u0438\u0441\u044C")
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
                              createTextVNode("\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0437\u0430\u043F\u0438\u0441\u044C")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UiDialogDescription)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<div class="flex flex-col gap-5"${_scopeId2}><div class="relative"${_scopeId2}>`);
                  if (editedReport.value.date) {
                    _push3(ssrRenderComponent(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`\u0414\u0430\u0442\u0430 \u0441\u043C\u0435\u043D\u044B`);
                        } else {
                          return [
                            createTextVNode("\u0414\u0430\u0442\u0430 \u0441\u043C\u0435\u043D\u044B")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(ssrRenderComponent(_component_UiInput, {
                    modelValue: editedReport.value.date,
                    "onUpdate:modelValue": ($event) => editedReport.value.date = $event,
                    type: "date",
                    placeholder: "\u0414\u0430\u0442\u0430 \u0441\u043C\u0435\u043D\u044B",
                    class: editedReport.value.date ? "" : "outline-1 outline-rose-300"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div class="relative"${_scopeId2}>`);
                  if (editedReport.value.type) {
                    _push3(ssrRenderComponent(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`\u0422\u0438\u043F`);
                        } else {
                          return [
                            createTextVNode("\u0422\u0438\u043F")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`<div class="${ssrRenderClass(editedReport.value.type ? "" : "outline-1 outline-rose-300 rounded-md")}"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UiSelect, {
                    modelValue: editedReport.value.type,
                    "onUpdate:modelValue": ($event) => editedReport.value.type = $event
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UiSelectTrigger, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_UiSelectValue, { placeholder: "\u0422\u0438\u043F" }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_UiSelectValue, { placeholder: "\u0422\u0438\u043F" })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_UiSelectContent, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<!--[-->`);
                              ssrRenderList(types, (item, i) => {
                                _push5(ssrRenderComponent(_component_UiSelectGroup, { key: i }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(_component_UiSelectItem, { value: item }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`${ssrInterpolate(item)}`);
                                          } else {
                                            return [
                                              createTextVNode(toDisplayString(item), 1)
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(_component_UiSelectItem, { value: item }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(item), 1)
                                          ]),
                                          _: 2
                                        }, 1032, ["value"])
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                              });
                              _push5(`<!--]-->`);
                            } else {
                              return [
                                (openBlock(), createBlock(Fragment, null, renderList(types, (item, i) => {
                                  return createVNode(_component_UiSelectGroup, { key: i }, {
                                    default: withCtx(() => [
                                      createVNode(_component_UiSelectItem, { value: item }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(item), 1)
                                        ]),
                                        _: 2
                                      }, 1032, ["value"])
                                    ]),
                                    _: 2
                                  }, 1024);
                                }), 64))
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_UiSelectTrigger, null, {
                            default: withCtx(() => [
                              createVNode(_component_UiSelectValue, { placeholder: "\u0422\u0438\u043F" })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UiSelectContent, null, {
                            default: withCtx(() => [
                              (openBlock(), createBlock(Fragment, null, renderList(types, (item, i) => {
                                return createVNode(_component_UiSelectGroup, { key: i }, {
                                  default: withCtx(() => [
                                    createVNode(_component_UiSelectItem, { value: item }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(item), 1)
                                      ]),
                                      _: 2
                                    }, 1032, ["value"])
                                  ]),
                                  _: 2
                                }, 1024);
                              }), 64))
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div></div><div class="relative"${_scopeId2}>`);
                  if (editedReport.value.name) {
                    _push3(ssrRenderComponent(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0438\u043B\u0438 \u0441\u0441\u044B\u043B\u043A\u0430`);
                        } else {
                          return [
                            createTextVNode("\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0438\u043B\u0438 \u0441\u0441\u044B\u043B\u043A\u0430")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(ssrRenderComponent(_component_UiInput, {
                    modelValue: editedReport.value.name,
                    "onUpdate:modelValue": ($event) => editedReport.value.name = $event,
                    placeholder: "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0438\u043B\u0438 \u0441\u0441\u044B\u043B\u043A\u0430",
                    class: editedReport.value.name ? "" : "outline-1 outline-rose-300"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div class="flex gap-2"${_scopeId2}><div class="relative"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`\u042D\u043B\u0435\u043C\u0435\u043D\u0442\u044B`);
                      } else {
                        return [
                          createTextVNode("\u042D\u043B\u0435\u043C\u0435\u043D\u0442\u044B")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<div class="flex gap-2"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UiInput, {
                    modelValue: editedReport.value.els,
                    "onUpdate:modelValue": ($event) => editedReport.value.els = $event,
                    modelModifiers: { number: true },
                    placeholder: "\u042D\u043B\u0435\u043C\u0435\u043D\u0442\u044B",
                    type: "number",
                    min: "0",
                    class: editedReport.value.els > 0 ? "" : "outline-1 outline-rose-300"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div></div><div class="relative"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`\u041C\u0435\u0442\u0440\u044B`);
                      } else {
                        return [
                          createTextVNode("\u041C\u0435\u0442\u0440\u044B")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<div class="flex gap-2"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UiInput, {
                    modelValue: editedReport.value.metrs,
                    "onUpdate:modelValue": ($event) => editedReport.value.metrs = $event,
                    modelModifiers: { number: true },
                    placeholder: "\u041C\u0435\u0442\u0440\u044B",
                    type: "number",
                    min: "0",
                    class: editedReport.value.metrs > 0 ? "" : "outline-1 outline-rose-300"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div></div></div>`);
                  if (((_a = _ctx.curUser) == null ? void 0 : _a.role.shortName) !== "MASTER") {
                    _push3(`<div class="relative"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`\u0428\u0442\u0440\u0430\u0444`);
                        } else {
                          return [
                            createTextVNode("\u0428\u0442\u0440\u0430\u0444")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_UiInput, {
                      modelValue: editedReport.value.penaltyCost,
                      "onUpdate:modelValue": ($event) => editedReport.value.penaltyCost = $event,
                      placeholder: "\u0428\u0442\u0440\u0430\u0444",
                      type: "number"
                    }, null, _parent3, _scopeId2));
                    _push3(`</div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`<div class="relative"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UiTextarea, {
                    modelValue: editedReport.value.comment,
                    "onUpdate:modelValue": ($event) => editedReport.value.comment = $event,
                    placeholder: "\u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439",
                    disabled: ((_b = _ctx.curUser) == null ? void 0 : _b.role.shortName) === "MASTER" ? true : false
                  }, null, _parent3, _scopeId2));
                  if (editedReport.value.comment) {
                    _push3(ssrRenderComponent(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(` \u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439 `);
                        } else {
                          return [
                            createTextVNode(" \u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439 ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`</div><span${_scopeId2}> \u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C: ${ssrInterpolate(editedReport.value.cost)}\u0440. </span></div>`);
                  _push3(ssrRenderComponent(_component_UiDialogFooter, { class: "w-full" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="flex justify-between w-full gap-2"${_scopeId3}>`);
                        _push4(ssrRenderComponent(_component_UiButton, {
                          variant: "destructive",
                          onClick: deleteMasterReport
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` \u0423\u0434\u0430\u043B\u0438\u0442\u044C `);
                            } else {
                              return [
                                createTextVNode(" \u0423\u0434\u0430\u043B\u0438\u0442\u044C ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_UiButton, {
                          disabled: disabled.value,
                          onClick: updateMasterReport
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` \u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C `);
                            } else {
                              return [
                                createTextVNode(" \u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`</div>`);
                      } else {
                        return [
                          createVNode("div", { class: "flex justify-between w-full gap-2" }, [
                            createVNode(_component_UiButton, {
                              variant: "destructive",
                              onClick: deleteMasterReport
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" \u0423\u0434\u0430\u043B\u0438\u0442\u044C ")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_UiButton, {
                              disabled: disabled.value,
                              onClick: updateMasterReport
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" \u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C ")
                              ]),
                              _: 1
                            }, 8, ["disabled"])
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UiDialogHeader, null, {
                      default: withCtx(() => [
                        createVNode(_component_UiDialogTitle, null, {
                          default: withCtx(() => [
                            createTextVNode("\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0437\u0430\u043F\u0438\u0441\u044C")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UiDialogDescription)
                      ]),
                      _: 1
                    }),
                    createVNode("div", { class: "flex flex-col gap-5" }, [
                      createVNode("div", { class: "relative" }, [
                        editedReport.value.date ? (openBlock(), createBlock(_component_UiLabel, {
                          key: 0,
                          class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap"
                        }, {
                          default: withCtx(() => [
                            createTextVNode("\u0414\u0430\u0442\u0430 \u0441\u043C\u0435\u043D\u044B")
                          ]),
                          _: 1
                        })) : createCommentVNode("", true),
                        createVNode(_component_UiInput, {
                          modelValue: editedReport.value.date,
                          "onUpdate:modelValue": ($event) => editedReport.value.date = $event,
                          type: "date",
                          placeholder: "\u0414\u0430\u0442\u0430 \u0441\u043C\u0435\u043D\u044B",
                          class: editedReport.value.date ? "" : "outline-1 outline-rose-300"
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "class"])
                      ]),
                      createVNode("div", { class: "relative" }, [
                        editedReport.value.type ? (openBlock(), createBlock(_component_UiLabel, {
                          key: 0,
                          class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1"
                        }, {
                          default: withCtx(() => [
                            createTextVNode("\u0422\u0438\u043F")
                          ]),
                          _: 1
                        })) : createCommentVNode("", true),
                        createVNode("div", {
                          class: editedReport.value.type ? "" : "outline-1 outline-rose-300 rounded-md"
                        }, [
                          createVNode(_component_UiSelect, {
                            modelValue: editedReport.value.type,
                            "onUpdate:modelValue": ($event) => editedReport.value.type = $event
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_UiSelectTrigger, null, {
                                default: withCtx(() => [
                                  createVNode(_component_UiSelectValue, { placeholder: "\u0422\u0438\u043F" })
                                ]),
                                _: 1
                              }),
                              createVNode(_component_UiSelectContent, null, {
                                default: withCtx(() => [
                                  (openBlock(), createBlock(Fragment, null, renderList(types, (item, i) => {
                                    return createVNode(_component_UiSelectGroup, { key: i }, {
                                      default: withCtx(() => [
                                        createVNode(_component_UiSelectItem, { value: item }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(item), 1)
                                          ]),
                                          _: 2
                                        }, 1032, ["value"])
                                      ]),
                                      _: 2
                                    }, 1024);
                                  }), 64))
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }, 8, ["modelValue", "onUpdate:modelValue"])
                        ], 2)
                      ]),
                      createVNode("div", { class: "relative" }, [
                        editedReport.value.name ? (openBlock(), createBlock(_component_UiLabel, {
                          key: 0,
                          class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1"
                        }, {
                          default: withCtx(() => [
                            createTextVNode("\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0438\u043B\u0438 \u0441\u0441\u044B\u043B\u043A\u0430")
                          ]),
                          _: 1
                        })) : createCommentVNode("", true),
                        createVNode(_component_UiInput, {
                          modelValue: editedReport.value.name,
                          "onUpdate:modelValue": ($event) => editedReport.value.name = $event,
                          placeholder: "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0438\u043B\u0438 \u0441\u0441\u044B\u043B\u043A\u0430",
                          class: editedReport.value.name ? "" : "outline-1 outline-rose-300"
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "class"])
                      ]),
                      createVNode("div", { class: "flex gap-2" }, [
                        createVNode("div", { class: "relative" }, [
                          createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                            default: withCtx(() => [
                              createTextVNode("\u042D\u043B\u0435\u043C\u0435\u043D\u0442\u044B")
                            ]),
                            _: 1
                          }),
                          createVNode("div", { class: "flex gap-2" }, [
                            createVNode(_component_UiInput, {
                              modelValue: editedReport.value.els,
                              "onUpdate:modelValue": ($event) => editedReport.value.els = $event,
                              modelModifiers: { number: true },
                              placeholder: "\u042D\u043B\u0435\u043C\u0435\u043D\u0442\u044B",
                              type: "number",
                              min: "0",
                              class: editedReport.value.els > 0 ? "" : "outline-1 outline-rose-300"
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "class"])
                          ])
                        ]),
                        createVNode("div", { class: "relative" }, [
                          createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                            default: withCtx(() => [
                              createTextVNode("\u041C\u0435\u0442\u0440\u044B")
                            ]),
                            _: 1
                          }),
                          createVNode("div", { class: "flex gap-2" }, [
                            createVNode(_component_UiInput, {
                              modelValue: editedReport.value.metrs,
                              "onUpdate:modelValue": ($event) => editedReport.value.metrs = $event,
                              modelModifiers: { number: true },
                              placeholder: "\u041C\u0435\u0442\u0440\u044B",
                              type: "number",
                              min: "0",
                              class: editedReport.value.metrs > 0 ? "" : "outline-1 outline-rose-300"
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "class"])
                          ])
                        ])
                      ]),
                      ((_c = _ctx.curUser) == null ? void 0 : _c.role.shortName) !== "MASTER" ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: "relative"
                      }, [
                        createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1" }, {
                          default: withCtx(() => [
                            createTextVNode("\u0428\u0442\u0440\u0430\u0444")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UiInput, {
                          modelValue: editedReport.value.penaltyCost,
                          "onUpdate:modelValue": ($event) => editedReport.value.penaltyCost = $event,
                          placeholder: "\u0428\u0442\u0440\u0430\u0444",
                          type: "number"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ])) : createCommentVNode("", true),
                      createVNode("div", { class: "relative" }, [
                        createVNode(_component_UiTextarea, {
                          modelValue: editedReport.value.comment,
                          "onUpdate:modelValue": ($event) => editedReport.value.comment = $event,
                          placeholder: "\u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439",
                          disabled: ((_d = _ctx.curUser) == null ? void 0 : _d.role.shortName) === "MASTER" ? true : false
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"]),
                        editedReport.value.comment ? (openBlock(), createBlock(_component_UiLabel, {
                          key: 0,
                          class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" \u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439 ")
                          ]),
                          _: 1
                        })) : createCommentVNode("", true)
                      ]),
                      createVNode("span", null, " \u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C: " + toDisplayString(editedReport.value.cost) + "\u0440. ", 1)
                    ]),
                    createVNode(_component_UiDialogFooter, { class: "w-full" }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "flex justify-between w-full gap-2" }, [
                          createVNode(_component_UiButton, {
                            variant: "destructive",
                            onClick: deleteMasterReport
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" \u0423\u0434\u0430\u043B\u0438\u0442\u044C ")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UiButton, {
                            disabled: disabled.value,
                            onClick: updateMasterReport
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" \u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C ")
                            ]),
                            _: 1
                          }, 8, ["disabled"])
                        ])
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UiDialogContent, { class: "max-w-[400px] flex flex-col top-0 translate-y-[0px]" }, {
                default: withCtx(() => {
                  var _a, _b;
                  return [
                    createVNode(_component_UiDialogHeader, null, {
                      default: withCtx(() => [
                        createVNode(_component_UiDialogTitle, null, {
                          default: withCtx(() => [
                            createTextVNode("\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0437\u0430\u043F\u0438\u0441\u044C")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UiDialogDescription)
                      ]),
                      _: 1
                    }),
                    createVNode("div", { class: "flex flex-col gap-5" }, [
                      createVNode("div", { class: "relative" }, [
                        editedReport.value.date ? (openBlock(), createBlock(_component_UiLabel, {
                          key: 0,
                          class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap"
                        }, {
                          default: withCtx(() => [
                            createTextVNode("\u0414\u0430\u0442\u0430 \u0441\u043C\u0435\u043D\u044B")
                          ]),
                          _: 1
                        })) : createCommentVNode("", true),
                        createVNode(_component_UiInput, {
                          modelValue: editedReport.value.date,
                          "onUpdate:modelValue": ($event) => editedReport.value.date = $event,
                          type: "date",
                          placeholder: "\u0414\u0430\u0442\u0430 \u0441\u043C\u0435\u043D\u044B",
                          class: editedReport.value.date ? "" : "outline-1 outline-rose-300"
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "class"])
                      ]),
                      createVNode("div", { class: "relative" }, [
                        editedReport.value.type ? (openBlock(), createBlock(_component_UiLabel, {
                          key: 0,
                          class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1"
                        }, {
                          default: withCtx(() => [
                            createTextVNode("\u0422\u0438\u043F")
                          ]),
                          _: 1
                        })) : createCommentVNode("", true),
                        createVNode("div", {
                          class: editedReport.value.type ? "" : "outline-1 outline-rose-300 rounded-md"
                        }, [
                          createVNode(_component_UiSelect, {
                            modelValue: editedReport.value.type,
                            "onUpdate:modelValue": ($event) => editedReport.value.type = $event
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_UiSelectTrigger, null, {
                                default: withCtx(() => [
                                  createVNode(_component_UiSelectValue, { placeholder: "\u0422\u0438\u043F" })
                                ]),
                                _: 1
                              }),
                              createVNode(_component_UiSelectContent, null, {
                                default: withCtx(() => [
                                  (openBlock(), createBlock(Fragment, null, renderList(types, (item, i) => {
                                    return createVNode(_component_UiSelectGroup, { key: i }, {
                                      default: withCtx(() => [
                                        createVNode(_component_UiSelectItem, { value: item }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(item), 1)
                                          ]),
                                          _: 2
                                        }, 1032, ["value"])
                                      ]),
                                      _: 2
                                    }, 1024);
                                  }), 64))
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }, 8, ["modelValue", "onUpdate:modelValue"])
                        ], 2)
                      ]),
                      createVNode("div", { class: "relative" }, [
                        editedReport.value.name ? (openBlock(), createBlock(_component_UiLabel, {
                          key: 0,
                          class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1"
                        }, {
                          default: withCtx(() => [
                            createTextVNode("\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0438\u043B\u0438 \u0441\u0441\u044B\u043B\u043A\u0430")
                          ]),
                          _: 1
                        })) : createCommentVNode("", true),
                        createVNode(_component_UiInput, {
                          modelValue: editedReport.value.name,
                          "onUpdate:modelValue": ($event) => editedReport.value.name = $event,
                          placeholder: "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0438\u043B\u0438 \u0441\u0441\u044B\u043B\u043A\u0430",
                          class: editedReport.value.name ? "" : "outline-1 outline-rose-300"
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "class"])
                      ]),
                      createVNode("div", { class: "flex gap-2" }, [
                        createVNode("div", { class: "relative" }, [
                          createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                            default: withCtx(() => [
                              createTextVNode("\u042D\u043B\u0435\u043C\u0435\u043D\u0442\u044B")
                            ]),
                            _: 1
                          }),
                          createVNode("div", { class: "flex gap-2" }, [
                            createVNode(_component_UiInput, {
                              modelValue: editedReport.value.els,
                              "onUpdate:modelValue": ($event) => editedReport.value.els = $event,
                              modelModifiers: { number: true },
                              placeholder: "\u042D\u043B\u0435\u043C\u0435\u043D\u0442\u044B",
                              type: "number",
                              min: "0",
                              class: editedReport.value.els > 0 ? "" : "outline-1 outline-rose-300"
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "class"])
                          ])
                        ]),
                        createVNode("div", { class: "relative" }, [
                          createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                            default: withCtx(() => [
                              createTextVNode("\u041C\u0435\u0442\u0440\u044B")
                            ]),
                            _: 1
                          }),
                          createVNode("div", { class: "flex gap-2" }, [
                            createVNode(_component_UiInput, {
                              modelValue: editedReport.value.metrs,
                              "onUpdate:modelValue": ($event) => editedReport.value.metrs = $event,
                              modelModifiers: { number: true },
                              placeholder: "\u041C\u0435\u0442\u0440\u044B",
                              type: "number",
                              min: "0",
                              class: editedReport.value.metrs > 0 ? "" : "outline-1 outline-rose-300"
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "class"])
                          ])
                        ])
                      ]),
                      ((_a = _ctx.curUser) == null ? void 0 : _a.role.shortName) !== "MASTER" ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: "relative"
                      }, [
                        createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1" }, {
                          default: withCtx(() => [
                            createTextVNode("\u0428\u0442\u0440\u0430\u0444")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UiInput, {
                          modelValue: editedReport.value.penaltyCost,
                          "onUpdate:modelValue": ($event) => editedReport.value.penaltyCost = $event,
                          placeholder: "\u0428\u0442\u0440\u0430\u0444",
                          type: "number"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ])) : createCommentVNode("", true),
                      createVNode("div", { class: "relative" }, [
                        createVNode(_component_UiTextarea, {
                          modelValue: editedReport.value.comment,
                          "onUpdate:modelValue": ($event) => editedReport.value.comment = $event,
                          placeholder: "\u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439",
                          disabled: ((_b = _ctx.curUser) == null ? void 0 : _b.role.shortName) === "MASTER" ? true : false
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"]),
                        editedReport.value.comment ? (openBlock(), createBlock(_component_UiLabel, {
                          key: 0,
                          class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" \u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439 ")
                          ]),
                          _: 1
                        })) : createCommentVNode("", true)
                      ]),
                      createVNode("span", null, " \u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C: " + toDisplayString(editedReport.value.cost) + "\u0440. ", 1)
                    ]),
                    createVNode(_component_UiDialogFooter, { class: "w-full" }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "flex justify-between w-full gap-2" }, [
                          createVNode(_component_UiButton, {
                            variant: "destructive",
                            onClick: deleteMasterReport
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" \u0423\u0434\u0430\u043B\u0438\u0442\u044C ")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UiButton, {
                            disabled: disabled.value,
                            onClick: updateMasterReport
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" \u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C ")
                            ]),
                            _: 1
                          }, 8, ["disabled"])
                        ])
                      ]),
                      _: 1
                    })
                  ];
                }),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/my/production/EditMasterReport.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};
const _sfc_main$c = /* @__PURE__ */ defineComponent({
  __name: "EditMasterRepairReport",
  __ssrInlineRender: true,
  props: {
    report: {},
    masterId: {}
  },
  emits: ["report-updated", "close"],
  setup(__props, { emit: __emit }) {
    const { $useApi } = useNuxtApp();
    const { toast } = useToast();
    const emit = __emit;
    const props = __props;
    const isOpen = ref(true);
    const disabled = ref(false);
    const repairTypes = ["\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u0430\u044F", "\u0423\u043B\u0438\u0447\u043D\u0430\u044F", "\u0420\u0413\u0411", "\u0421\u043C\u0430\u0440\u0442"];
    const editedReport = ref({ ...props.report });
    const calculateCost = () => {
      const { metrs, els, type, grinding, unpackage, unpackageBig, acoustics, smartContr } = editedReport.value;
      let cost = 0;
      switch (type) {
        case "\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u0430\u044F":
          cost = metrs * 130 + els * 70;
          break;
        case "\u0423\u043B\u0438\u0447\u043D\u0430\u044F":
          cost = metrs * 140 + els * 80;
          break;
        case "\u0420\u0413\u0411":
          cost = metrs * 150 + els * 200;
          break;
        case "\u0421\u043C\u0430\u0440\u0442":
          cost = metrs * 160 + els * 180;
          break;
        default:
          cost = 0;
      }
      cost += unpackage * 50;
      cost += grinding * 350;
      cost += unpackageBig * 100;
      cost += acoustics * 150;
      cost += smartContr * 200;
      editedReport.value.cost = cost;
    };
    const updateMasterRepairReport = async () => {
      try {
        await $useApi.patch(`production/master-repair/${editedReport.value.id}`, editedReport.value);
        isOpen.value = false;
        emit("report-updated");
        toast({
          title: "\u0423\u0441\u043F\u0435\u0445",
          description: "\u0420\u0435\u043C\u043E\u043D\u0442\u043D\u044B\u0439 \u043E\u0442\u0447\u0435\u0442 \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D"
        });
      } catch (e) {
        console.log(e);
      }
    };
    const deleteMasterRepairReport = async () => {
      try {
        await $useApi.delete(`production/master-repair/${editedReport.value.id}`);
        isOpen.value = false;
        emit("report-updated");
        toast({
          title: "\u0423\u0441\u043F\u0435\u0445",
          description: "\u0420\u0435\u043C\u043E\u043D\u0442\u043D\u044B\u0439 \u043E\u0442\u0447\u0435\u0442 \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u0443\u0434\u0430\u043B\u0435\u043D"
        });
      } catch (e) {
        console.log(e);
      }
    };
    watch(
      editedReport,
      () => {
        const { date, name, metrs, els, type } = editedReport.value;
        calculateCost();
        disabled.value = !(date && name && metrs >= 0 && els >= 0 && type);
      },
      { deep: true }
    );
    watch(isOpen, (newValue) => {
      if (!newValue) {
        emit("close");
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiDialog = _sfc_main$4$2;
      const _component_UiDialogContent = _sfc_main$l;
      const _component_UiDialogHeader = _sfc_main$2$5;
      const _component_UiDialogTitle = _sfc_main$1$5;
      const _component_UiDialogDescription = _sfc_main$m;
      const _component_UiLabel = _sfc_main$s;
      const _component_UiInput = _sfc_main$k;
      const _component_UiSelect = _sfc_main$7$1;
      const _component_UiSelectTrigger = _sfc_main$5$3;
      const _component_UiSelectValue = _sfc_main$6$2;
      const _component_UiSelectContent = _sfc_main$4$4;
      const _component_UiSelectGroup = _sfc_main$3$5;
      const _component_UiSelectItem = _sfc_main$2$7;
      const _component_UiDialogFooter = _sfc_main$o;
      const _component_UiButton = _sfc_main$q;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_UiDialog, {
        open: isOpen.value,
        "onUpdate:open": ($event) => isOpen.value = $event
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UiDialogContent, { class: "max-w-[400px] flex flex-col top-0 translate-y-[0px]" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UiDialogHeader, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UiDialogTitle, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0440\u0435\u043C\u043E\u043D\u0442\u043D\u044B\u0439 \u043E\u0442\u0447\u0435\u0442`);
                            } else {
                              return [
                                createTextVNode("\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0440\u0435\u043C\u043E\u043D\u0442\u043D\u044B\u0439 \u043E\u0442\u0447\u0435\u0442")
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
                              createTextVNode("\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0440\u0435\u043C\u043E\u043D\u0442\u043D\u044B\u0439 \u043E\u0442\u0447\u0435\u0442")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UiDialogDescription)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<div class="flex flex-col gap-5"${_scopeId2}><div class="relative"${_scopeId2}>`);
                  if (editedReport.value.date) {
                    _push3(ssrRenderComponent(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`\u0414\u0430\u0442\u0430 \u0441\u043C\u0435\u043D\u044B`);
                        } else {
                          return [
                            createTextVNode("\u0414\u0430\u0442\u0430 \u0441\u043C\u0435\u043D\u044B")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(ssrRenderComponent(_component_UiInput, {
                    modelValue: editedReport.value.date,
                    "onUpdate:modelValue": ($event) => editedReport.value.date = $event,
                    type: "date",
                    placeholder: "\u0414\u0430\u0442\u0430 \u0441\u043C\u0435\u043D\u044B",
                    class: editedReport.value.date ? "" : "outline-1 outline-rose-300"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div class="relative"${_scopeId2}>`);
                  if (editedReport.value.type) {
                    _push3(ssrRenderComponent(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`\u0422\u0438\u043F`);
                        } else {
                          return [
                            createTextVNode("\u0422\u0438\u043F")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`<div class="${ssrRenderClass(editedReport.value.type ? "" : "outline-1 outline-rose-300 rounded-md")}"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UiSelect, {
                    modelValue: editedReport.value.type,
                    "onUpdate:modelValue": ($event) => editedReport.value.type = $event
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UiSelectTrigger, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_UiSelectValue, { placeholder: "\u0422\u0438\u043F" }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_UiSelectValue, { placeholder: "\u0422\u0438\u043F" })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_UiSelectContent, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<!--[-->`);
                              ssrRenderList(repairTypes, (item, i) => {
                                _push5(ssrRenderComponent(_component_UiSelectGroup, { key: i }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(_component_UiSelectItem, { value: item }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`${ssrInterpolate(item)}`);
                                          } else {
                                            return [
                                              createTextVNode(toDisplayString(item), 1)
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(_component_UiSelectItem, { value: item }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(item), 1)
                                          ]),
                                          _: 2
                                        }, 1032, ["value"])
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                              });
                              _push5(`<!--]-->`);
                            } else {
                              return [
                                (openBlock(), createBlock(Fragment, null, renderList(repairTypes, (item, i) => {
                                  return createVNode(_component_UiSelectGroup, { key: i }, {
                                    default: withCtx(() => [
                                      createVNode(_component_UiSelectItem, { value: item }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(item), 1)
                                        ]),
                                        _: 2
                                      }, 1032, ["value"])
                                    ]),
                                    _: 2
                                  }, 1024);
                                }), 64))
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_UiSelectTrigger, null, {
                            default: withCtx(() => [
                              createVNode(_component_UiSelectValue, { placeholder: "\u0422\u0438\u043F" })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UiSelectContent, null, {
                            default: withCtx(() => [
                              (openBlock(), createBlock(Fragment, null, renderList(repairTypes, (item, i) => {
                                return createVNode(_component_UiSelectGroup, { key: i }, {
                                  default: withCtx(() => [
                                    createVNode(_component_UiSelectItem, { value: item }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(item), 1)
                                      ]),
                                      _: 2
                                    }, 1032, ["value"])
                                  ]),
                                  _: 2
                                }, 1024);
                              }), 64))
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div></div><div class="relative"${_scopeId2}>`);
                  if (editedReport.value.name) {
                    _push3(ssrRenderComponent(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0438\u043B\u0438 \u0441\u0441\u044B\u043B\u043A\u0430`);
                        } else {
                          return [
                            createTextVNode("\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0438\u043B\u0438 \u0441\u0441\u044B\u043B\u043A\u0430")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(ssrRenderComponent(_component_UiInput, {
                    modelValue: editedReport.value.name,
                    "onUpdate:modelValue": ($event) => editedReport.value.name = $event,
                    placeholder: "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0438\u043B\u0438 \u0441\u0441\u044B\u043B\u043A\u0430",
                    class: editedReport.value.name ? "" : "outline-1 outline-rose-300"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div class="flex gap-2"${_scopeId2}><div class="relative"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`\u041C\u0435\u0442\u0440\u044B(\u043D\u0435\u043E\u043D)`);
                      } else {
                        return [
                          createTextVNode("\u041C\u0435\u0442\u0440\u044B(\u043D\u0435\u043E\u043D)")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UiInput, {
                    modelValue: editedReport.value.metrs,
                    "onUpdate:modelValue": ($event) => editedReport.value.metrs = $event,
                    modelModifiers: { number: true },
                    placeholder: "\u041C\u0435\u0442\u0440\u044B(\u043D\u0435\u043E\u043D)",
                    type: "number",
                    min: "0"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div class="relative"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`\u042D\u043B-\u0442\u044B(\u043D\u0435\u043E\u043D)`);
                      } else {
                        return [
                          createTextVNode("\u042D\u043B-\u0442\u044B(\u043D\u0435\u043E\u043D)")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UiInput, {
                    modelValue: editedReport.value.els,
                    "onUpdate:modelValue": ($event) => editedReport.value.els = $event,
                    modelModifiers: { number: true },
                    placeholder: "\u042D\u043B-\u0442\u044B(\u043D\u0435\u043E\u043D)",
                    type: "number",
                    min: "0"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div class="relative"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`\u0410\u043A\u0443\u0441\u0442\u0438\u043A\u0430`);
                      } else {
                        return [
                          createTextVNode("\u0410\u043A\u0443\u0441\u0442\u0438\u043A\u0430")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UiInput, {
                    modelValue: editedReport.value.acoustics,
                    "onUpdate:modelValue": ($event) => editedReport.value.acoustics = $event,
                    modelModifiers: { number: true },
                    placeholder: "\u0410\u043A\u0443\u0441\u0442\u0438\u043A\u0430",
                    type: "number",
                    min: "0"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div></div><div class="flex gap-2"${_scopeId2}><div class="relative"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`\u0420\u0430\u0441\u043F\u0430\u043A\u043E\u0432\u043A\u0430 \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442`);
                      } else {
                        return [
                          createTextVNode("\u0420\u0430\u0441\u043F\u0430\u043A\u043E\u0432\u043A\u0430 \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UiInput, {
                    modelValue: editedReport.value.unpackage,
                    "onUpdate:modelValue": ($event) => editedReport.value.unpackage = $event,
                    modelModifiers: { number: true },
                    placeholder: "\u0420\u0430\u0441\u043F\u0430\u043A\u043E\u0432\u043A\u0430 \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442",
                    type: "number",
                    min: "0"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div class="relative"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`\u0420\u0430\u0441\u043F\u0430\u043A\u043E\u0432\u043A\u0430 \u0431\u043E\u043B\u044C\u0448\u0430\u044F`);
                      } else {
                        return [
                          createTextVNode("\u0420\u0430\u0441\u043F\u0430\u043A\u043E\u0432\u043A\u0430 \u0431\u043E\u043B\u044C\u0448\u0430\u044F")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UiInput, {
                    modelValue: editedReport.value.unpackageBig,
                    "onUpdate:modelValue": ($event) => editedReport.value.unpackageBig = $event,
                    modelModifiers: { number: true },
                    placeholder: "\u0420\u0430\u0441\u043F\u0430\u043A\u043E\u0432\u043A\u0430 \u0431\u043E\u043B\u044C\u0448\u0430\u044F",
                    type: "number",
                    min: "0"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div></div><div class="flex gap-2"${_scopeId2}><div class="relative"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`\u0428\u043B\u0438\u0444\u043E\u0432\u043A\u0430`);
                      } else {
                        return [
                          createTextVNode("\u0428\u043B\u0438\u0444\u043E\u0432\u043A\u0430")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UiInput, {
                    modelValue: editedReport.value.grinding,
                    "onUpdate:modelValue": ($event) => editedReport.value.grinding = $event,
                    modelModifiers: { number: true },
                    placeholder: "\u0428\u043B\u0438\u0444\u043E\u0432\u043A\u0430",
                    type: "number",
                    min: "0"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div class="relative"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`\u0421\u043C\u0430\u0440\u0442 \u043A\u043E\u043D\u0442\u0440\u043E\u043B\u043B\u0435\u0440`);
                      } else {
                        return [
                          createTextVNode("\u0421\u043C\u0430\u0440\u0442 \u043A\u043E\u043D\u0442\u0440\u043E\u043B\u043B\u0435\u0440")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UiInput, {
                    modelValue: editedReport.value.smartContr,
                    "onUpdate:modelValue": ($event) => editedReport.value.smartContr = $event,
                    modelModifiers: { number: true },
                    placeholder: "\u0421\u043C\u0430\u0440\u0442 \u043A\u043E\u043D\u0442\u0440\u043E\u043B\u043B\u0435\u0440",
                    type: "number",
                    min: "0"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div></div><span${_scopeId2}> \u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C: ${ssrInterpolate(editedReport.value.cost)}\u0440. </span></div>`);
                  _push3(ssrRenderComponent(_component_UiDialogFooter, { class: "w-full" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="flex justify-between w-full gap-2"${_scopeId3}>`);
                        _push4(ssrRenderComponent(_component_UiButton, {
                          variant: "destructive",
                          onClick: deleteMasterRepairReport
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` \u0423\u0434\u0430\u043B\u0438\u0442\u044C `);
                            } else {
                              return [
                                createTextVNode(" \u0423\u0434\u0430\u043B\u0438\u0442\u044C ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_UiButton, {
                          disabled: disabled.value,
                          onClick: updateMasterRepairReport
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` \u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C `);
                            } else {
                              return [
                                createTextVNode(" \u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`</div>`);
                      } else {
                        return [
                          createVNode("div", { class: "flex justify-between w-full gap-2" }, [
                            createVNode(_component_UiButton, {
                              variant: "destructive",
                              onClick: deleteMasterRepairReport
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" \u0423\u0434\u0430\u043B\u0438\u0442\u044C ")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_UiButton, {
                              disabled: disabled.value,
                              onClick: updateMasterRepairReport
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" \u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C ")
                              ]),
                              _: 1
                            }, 8, ["disabled"])
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UiDialogHeader, null, {
                      default: withCtx(() => [
                        createVNode(_component_UiDialogTitle, null, {
                          default: withCtx(() => [
                            createTextVNode("\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0440\u0435\u043C\u043E\u043D\u0442\u043D\u044B\u0439 \u043E\u0442\u0447\u0435\u0442")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UiDialogDescription)
                      ]),
                      _: 1
                    }),
                    createVNode("div", { class: "flex flex-col gap-5" }, [
                      createVNode("div", { class: "relative" }, [
                        editedReport.value.date ? (openBlock(), createBlock(_component_UiLabel, {
                          key: 0,
                          class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap"
                        }, {
                          default: withCtx(() => [
                            createTextVNode("\u0414\u0430\u0442\u0430 \u0441\u043C\u0435\u043D\u044B")
                          ]),
                          _: 1
                        })) : createCommentVNode("", true),
                        createVNode(_component_UiInput, {
                          modelValue: editedReport.value.date,
                          "onUpdate:modelValue": ($event) => editedReport.value.date = $event,
                          type: "date",
                          placeholder: "\u0414\u0430\u0442\u0430 \u0441\u043C\u0435\u043D\u044B",
                          class: editedReport.value.date ? "" : "outline-1 outline-rose-300"
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "class"])
                      ]),
                      createVNode("div", { class: "relative" }, [
                        editedReport.value.type ? (openBlock(), createBlock(_component_UiLabel, {
                          key: 0,
                          class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1"
                        }, {
                          default: withCtx(() => [
                            createTextVNode("\u0422\u0438\u043F")
                          ]),
                          _: 1
                        })) : createCommentVNode("", true),
                        createVNode("div", {
                          class: editedReport.value.type ? "" : "outline-1 outline-rose-300 rounded-md"
                        }, [
                          createVNode(_component_UiSelect, {
                            modelValue: editedReport.value.type,
                            "onUpdate:modelValue": ($event) => editedReport.value.type = $event
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_UiSelectTrigger, null, {
                                default: withCtx(() => [
                                  createVNode(_component_UiSelectValue, { placeholder: "\u0422\u0438\u043F" })
                                ]),
                                _: 1
                              }),
                              createVNode(_component_UiSelectContent, null, {
                                default: withCtx(() => [
                                  (openBlock(), createBlock(Fragment, null, renderList(repairTypes, (item, i) => {
                                    return createVNode(_component_UiSelectGroup, { key: i }, {
                                      default: withCtx(() => [
                                        createVNode(_component_UiSelectItem, { value: item }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(item), 1)
                                          ]),
                                          _: 2
                                        }, 1032, ["value"])
                                      ]),
                                      _: 2
                                    }, 1024);
                                  }), 64))
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }, 8, ["modelValue", "onUpdate:modelValue"])
                        ], 2)
                      ]),
                      createVNode("div", { class: "relative" }, [
                        editedReport.value.name ? (openBlock(), createBlock(_component_UiLabel, {
                          key: 0,
                          class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1"
                        }, {
                          default: withCtx(() => [
                            createTextVNode("\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0438\u043B\u0438 \u0441\u0441\u044B\u043B\u043A\u0430")
                          ]),
                          _: 1
                        })) : createCommentVNode("", true),
                        createVNode(_component_UiInput, {
                          modelValue: editedReport.value.name,
                          "onUpdate:modelValue": ($event) => editedReport.value.name = $event,
                          placeholder: "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0438\u043B\u0438 \u0441\u0441\u044B\u043B\u043A\u0430",
                          class: editedReport.value.name ? "" : "outline-1 outline-rose-300"
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "class"])
                      ]),
                      createVNode("div", { class: "flex gap-2" }, [
                        createVNode("div", { class: "relative" }, [
                          createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                            default: withCtx(() => [
                              createTextVNode("\u041C\u0435\u0442\u0440\u044B(\u043D\u0435\u043E\u043D)")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UiInput, {
                            modelValue: editedReport.value.metrs,
                            "onUpdate:modelValue": ($event) => editedReport.value.metrs = $event,
                            modelModifiers: { number: true },
                            placeholder: "\u041C\u0435\u0442\u0440\u044B(\u043D\u0435\u043E\u043D)",
                            type: "number",
                            min: "0"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        createVNode("div", { class: "relative" }, [
                          createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                            default: withCtx(() => [
                              createTextVNode("\u042D\u043B-\u0442\u044B(\u043D\u0435\u043E\u043D)")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UiInput, {
                            modelValue: editedReport.value.els,
                            "onUpdate:modelValue": ($event) => editedReport.value.els = $event,
                            modelModifiers: { number: true },
                            placeholder: "\u042D\u043B-\u0442\u044B(\u043D\u0435\u043E\u043D)",
                            type: "number",
                            min: "0"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        createVNode("div", { class: "relative" }, [
                          createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                            default: withCtx(() => [
                              createTextVNode("\u0410\u043A\u0443\u0441\u0442\u0438\u043A\u0430")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UiInput, {
                            modelValue: editedReport.value.acoustics,
                            "onUpdate:modelValue": ($event) => editedReport.value.acoustics = $event,
                            modelModifiers: { number: true },
                            placeholder: "\u0410\u043A\u0443\u0441\u0442\u0438\u043A\u0430",
                            type: "number",
                            min: "0"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ])
                      ]),
                      createVNode("div", { class: "flex gap-2" }, [
                        createVNode("div", { class: "relative" }, [
                          createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                            default: withCtx(() => [
                              createTextVNode("\u0420\u0430\u0441\u043F\u0430\u043A\u043E\u0432\u043A\u0430 \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UiInput, {
                            modelValue: editedReport.value.unpackage,
                            "onUpdate:modelValue": ($event) => editedReport.value.unpackage = $event,
                            modelModifiers: { number: true },
                            placeholder: "\u0420\u0430\u0441\u043F\u0430\u043A\u043E\u0432\u043A\u0430 \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442",
                            type: "number",
                            min: "0"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        createVNode("div", { class: "relative" }, [
                          createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                            default: withCtx(() => [
                              createTextVNode("\u0420\u0430\u0441\u043F\u0430\u043A\u043E\u0432\u043A\u0430 \u0431\u043E\u043B\u044C\u0448\u0430\u044F")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UiInput, {
                            modelValue: editedReport.value.unpackageBig,
                            "onUpdate:modelValue": ($event) => editedReport.value.unpackageBig = $event,
                            modelModifiers: { number: true },
                            placeholder: "\u0420\u0430\u0441\u043F\u0430\u043A\u043E\u0432\u043A\u0430 \u0431\u043E\u043B\u044C\u0448\u0430\u044F",
                            type: "number",
                            min: "0"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ])
                      ]),
                      createVNode("div", { class: "flex gap-2" }, [
                        createVNode("div", { class: "relative" }, [
                          createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                            default: withCtx(() => [
                              createTextVNode("\u0428\u043B\u0438\u0444\u043E\u0432\u043A\u0430")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UiInput, {
                            modelValue: editedReport.value.grinding,
                            "onUpdate:modelValue": ($event) => editedReport.value.grinding = $event,
                            modelModifiers: { number: true },
                            placeholder: "\u0428\u043B\u0438\u0444\u043E\u0432\u043A\u0430",
                            type: "number",
                            min: "0"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        createVNode("div", { class: "relative" }, [
                          createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                            default: withCtx(() => [
                              createTextVNode("\u0421\u043C\u0430\u0440\u0442 \u043A\u043E\u043D\u0442\u0440\u043E\u043B\u043B\u0435\u0440")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UiInput, {
                            modelValue: editedReport.value.smartContr,
                            "onUpdate:modelValue": ($event) => editedReport.value.smartContr = $event,
                            modelModifiers: { number: true },
                            placeholder: "\u0421\u043C\u0430\u0440\u0442 \u043A\u043E\u043D\u0442\u0440\u043E\u043B\u043B\u0435\u0440",
                            type: "number",
                            min: "0"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ])
                      ]),
                      createVNode("span", null, " \u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C: " + toDisplayString(editedReport.value.cost) + "\u0440. ", 1)
                    ]),
                    createVNode(_component_UiDialogFooter, { class: "w-full" }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "flex justify-between w-full gap-2" }, [
                          createVNode(_component_UiButton, {
                            variant: "destructive",
                            onClick: deleteMasterRepairReport
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" \u0423\u0434\u0430\u043B\u0438\u0442\u044C ")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UiButton, {
                            disabled: disabled.value,
                            onClick: updateMasterRepairReport
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" \u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C ")
                            ]),
                            _: 1
                          }, 8, ["disabled"])
                        ])
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UiDialogContent, { class: "max-w-[400px] flex flex-col top-0 translate-y-[0px]" }, {
                default: withCtx(() => [
                  createVNode(_component_UiDialogHeader, null, {
                    default: withCtx(() => [
                      createVNode(_component_UiDialogTitle, null, {
                        default: withCtx(() => [
                          createTextVNode("\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0440\u0435\u043C\u043E\u043D\u0442\u043D\u044B\u0439 \u043E\u0442\u0447\u0435\u0442")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_UiDialogDescription)
                    ]),
                    _: 1
                  }),
                  createVNode("div", { class: "flex flex-col gap-5" }, [
                    createVNode("div", { class: "relative" }, [
                      editedReport.value.date ? (openBlock(), createBlock(_component_UiLabel, {
                        key: 0,
                        class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("\u0414\u0430\u0442\u0430 \u0441\u043C\u0435\u043D\u044B")
                        ]),
                        _: 1
                      })) : createCommentVNode("", true),
                      createVNode(_component_UiInput, {
                        modelValue: editedReport.value.date,
                        "onUpdate:modelValue": ($event) => editedReport.value.date = $event,
                        type: "date",
                        placeholder: "\u0414\u0430\u0442\u0430 \u0441\u043C\u0435\u043D\u044B",
                        class: editedReport.value.date ? "" : "outline-1 outline-rose-300"
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "class"])
                    ]),
                    createVNode("div", { class: "relative" }, [
                      editedReport.value.type ? (openBlock(), createBlock(_component_UiLabel, {
                        key: 0,
                        class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("\u0422\u0438\u043F")
                        ]),
                        _: 1
                      })) : createCommentVNode("", true),
                      createVNode("div", {
                        class: editedReport.value.type ? "" : "outline-1 outline-rose-300 rounded-md"
                      }, [
                        createVNode(_component_UiSelect, {
                          modelValue: editedReport.value.type,
                          "onUpdate:modelValue": ($event) => editedReport.value.type = $event
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_UiSelectTrigger, null, {
                              default: withCtx(() => [
                                createVNode(_component_UiSelectValue, { placeholder: "\u0422\u0438\u043F" })
                              ]),
                              _: 1
                            }),
                            createVNode(_component_UiSelectContent, null, {
                              default: withCtx(() => [
                                (openBlock(), createBlock(Fragment, null, renderList(repairTypes, (item, i) => {
                                  return createVNode(_component_UiSelectGroup, { key: i }, {
                                    default: withCtx(() => [
                                      createVNode(_component_UiSelectItem, { value: item }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(item), 1)
                                        ]),
                                        _: 2
                                      }, 1032, ["value"])
                                    ]),
                                    _: 2
                                  }, 1024);
                                }), 64))
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }, 8, ["modelValue", "onUpdate:modelValue"])
                      ], 2)
                    ]),
                    createVNode("div", { class: "relative" }, [
                      editedReport.value.name ? (openBlock(), createBlock(_component_UiLabel, {
                        key: 0,
                        class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0438\u043B\u0438 \u0441\u0441\u044B\u043B\u043A\u0430")
                        ]),
                        _: 1
                      })) : createCommentVNode("", true),
                      createVNode(_component_UiInput, {
                        modelValue: editedReport.value.name,
                        "onUpdate:modelValue": ($event) => editedReport.value.name = $event,
                        placeholder: "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0438\u043B\u0438 \u0441\u0441\u044B\u043B\u043A\u0430",
                        class: editedReport.value.name ? "" : "outline-1 outline-rose-300"
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "class"])
                    ]),
                    createVNode("div", { class: "flex gap-2" }, [
                      createVNode("div", { class: "relative" }, [
                        createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                          default: withCtx(() => [
                            createTextVNode("\u041C\u0435\u0442\u0440\u044B(\u043D\u0435\u043E\u043D)")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UiInput, {
                          modelValue: editedReport.value.metrs,
                          "onUpdate:modelValue": ($event) => editedReport.value.metrs = $event,
                          modelModifiers: { number: true },
                          placeholder: "\u041C\u0435\u0442\u0440\u044B(\u043D\u0435\u043E\u043D)",
                          type: "number",
                          min: "0"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      createVNode("div", { class: "relative" }, [
                        createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                          default: withCtx(() => [
                            createTextVNode("\u042D\u043B-\u0442\u044B(\u043D\u0435\u043E\u043D)")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UiInput, {
                          modelValue: editedReport.value.els,
                          "onUpdate:modelValue": ($event) => editedReport.value.els = $event,
                          modelModifiers: { number: true },
                          placeholder: "\u042D\u043B-\u0442\u044B(\u043D\u0435\u043E\u043D)",
                          type: "number",
                          min: "0"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      createVNode("div", { class: "relative" }, [
                        createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                          default: withCtx(() => [
                            createTextVNode("\u0410\u043A\u0443\u0441\u0442\u0438\u043A\u0430")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UiInput, {
                          modelValue: editedReport.value.acoustics,
                          "onUpdate:modelValue": ($event) => editedReport.value.acoustics = $event,
                          modelModifiers: { number: true },
                          placeholder: "\u0410\u043A\u0443\u0441\u0442\u0438\u043A\u0430",
                          type: "number",
                          min: "0"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ])
                    ]),
                    createVNode("div", { class: "flex gap-2" }, [
                      createVNode("div", { class: "relative" }, [
                        createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                          default: withCtx(() => [
                            createTextVNode("\u0420\u0430\u0441\u043F\u0430\u043A\u043E\u0432\u043A\u0430 \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UiInput, {
                          modelValue: editedReport.value.unpackage,
                          "onUpdate:modelValue": ($event) => editedReport.value.unpackage = $event,
                          modelModifiers: { number: true },
                          placeholder: "\u0420\u0430\u0441\u043F\u0430\u043A\u043E\u0432\u043A\u0430 \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442",
                          type: "number",
                          min: "0"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      createVNode("div", { class: "relative" }, [
                        createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                          default: withCtx(() => [
                            createTextVNode("\u0420\u0430\u0441\u043F\u0430\u043A\u043E\u0432\u043A\u0430 \u0431\u043E\u043B\u044C\u0448\u0430\u044F")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UiInput, {
                          modelValue: editedReport.value.unpackageBig,
                          "onUpdate:modelValue": ($event) => editedReport.value.unpackageBig = $event,
                          modelModifiers: { number: true },
                          placeholder: "\u0420\u0430\u0441\u043F\u0430\u043A\u043E\u0432\u043A\u0430 \u0431\u043E\u043B\u044C\u0448\u0430\u044F",
                          type: "number",
                          min: "0"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ])
                    ]),
                    createVNode("div", { class: "flex gap-2" }, [
                      createVNode("div", { class: "relative" }, [
                        createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                          default: withCtx(() => [
                            createTextVNode("\u0428\u043B\u0438\u0444\u043E\u0432\u043A\u0430")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UiInput, {
                          modelValue: editedReport.value.grinding,
                          "onUpdate:modelValue": ($event) => editedReport.value.grinding = $event,
                          modelModifiers: { number: true },
                          placeholder: "\u0428\u043B\u0438\u0444\u043E\u0432\u043A\u0430",
                          type: "number",
                          min: "0"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      createVNode("div", { class: "relative" }, [
                        createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                          default: withCtx(() => [
                            createTextVNode("\u0421\u043C\u0430\u0440\u0442 \u043A\u043E\u043D\u0442\u0440\u043E\u043B\u043B\u0435\u0440")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UiInput, {
                          modelValue: editedReport.value.smartContr,
                          "onUpdate:modelValue": ($event) => editedReport.value.smartContr = $event,
                          modelModifiers: { number: true },
                          placeholder: "\u0421\u043C\u0430\u0440\u0442 \u043A\u043E\u043D\u0442\u0440\u043E\u043B\u043B\u0435\u0440",
                          type: "number",
                          min: "0"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ])
                    ]),
                    createVNode("span", null, " \u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C: " + toDisplayString(editedReport.value.cost) + "\u0440. ", 1)
                  ]),
                  createVNode(_component_UiDialogFooter, { class: "w-full" }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "flex justify-between w-full gap-2" }, [
                        createVNode(_component_UiButton, {
                          variant: "destructive",
                          onClick: deleteMasterRepairReport
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" \u0423\u0434\u0430\u043B\u0438\u0442\u044C ")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UiButton, {
                          disabled: disabled.value,
                          onClick: updateMasterRepairReport
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" \u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C ")
                          ]),
                          _: 1
                        }, 8, ["disabled"])
                      ])
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
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/my/production/EditMasterRepairReport.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const _sfc_main$b = /* @__PURE__ */ defineComponent({
  __name: "EditOtherReport",
  __ssrInlineRender: true,
  props: {
    report: {},
    masterId: {}
  },
  emits: ["report-updated", "close"],
  setup(__props, { emit: __emit }) {
    const { $useApi } = useNuxtApp();
    const { toast } = useToast();
    const emit = __emit;
    const props = __props;
    const isOpen = ref(true);
    const disabled = ref(true);
    const editedReport = ref({ ...props.report });
    const updateOtherReport = async () => {
      try {
        await $useApi.patch(`production/other-report/${editedReport.value.id}`, editedReport.value);
        isOpen.value = false;
        emit("report-updated");
        toast({
          title: "\u0423\u0441\u043F\u0435\u0445",
          description: "\u041E\u0442\u0447\u0435\u0442 \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D"
        });
      } catch {
        toast({
          title: "\u041E\u0448\u0438\u0431\u043A\u0430",
          description: "\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u043E\u0431\u043D\u043E\u0432\u0438\u0442\u044C \u043E\u0442\u0447\u0435\u0442",
          variant: "destructive"
        });
      }
    };
    const deleteOtherReport = async () => {
      try {
        await $useApi.delete(`production/other-report/${editedReport.value.id}`);
        isOpen.value = false;
        emit("report-updated");
        toast({
          title: "\u0423\u0441\u043F\u0435\u0445",
          description: "\u041E\u0442\u0447\u0435\u0442 \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u0443\u0434\u0430\u043B\u0435\u043D"
        });
      } catch {
        toast({
          title: "\u041E\u0448\u0438\u0431\u043A\u0430",
          description: "\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0443\u0434\u0430\u043B\u0438\u0442\u044C \u043E\u0442\u0447\u0435\u0442",
          variant: "destructive"
        });
      }
    };
    watch(
      editedReport,
      () => {
        const { date, name, cost } = editedReport.value;
        disabled.value = !(date && name && cost);
      },
      { deep: true }
    );
    watch(isOpen, (newValue) => {
      if (!newValue) {
        emit("close");
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiDialog = _sfc_main$4$2;
      const _component_UiDialogContent = _sfc_main$l;
      const _component_UiDialogHeader = _sfc_main$2$5;
      const _component_UiDialogTitle = _sfc_main$1$5;
      const _component_UiDialogDescription = _sfc_main$m;
      const _component_UiLabel = _sfc_main$s;
      const _component_UiInput = _sfc_main$k;
      const _component_UiDialogFooter = _sfc_main$o;
      const _component_UiButton = _sfc_main$q;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_UiDialog, {
        open: isOpen.value,
        "onUpdate:open": ($event) => isOpen.value = $event
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UiDialogContent, { class: "max-w-[300px] flex flex-col" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UiDialogHeader, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UiDialogTitle, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u043E\u0442\u0447\u0435\u0442`);
                            } else {
                              return [
                                createTextVNode("\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u043E\u0442\u0447\u0435\u0442")
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
                              createTextVNode("\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u043E\u0442\u0447\u0435\u0442")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UiDialogDescription)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<div class="flex flex-col gap-5"${_scopeId2}><div class="relative"${_scopeId2}>`);
                  if (editedReport.value.date) {
                    _push3(ssrRenderComponent(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`\u0414\u0430\u0442\u0430`);
                        } else {
                          return [
                            createTextVNode("\u0414\u0430\u0442\u0430")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(ssrRenderComponent(_component_UiInput, {
                    modelValue: editedReport.value.date,
                    "onUpdate:modelValue": ($event) => editedReport.value.date = $event,
                    type: "date",
                    placeholder: "\u0414\u0430\u0442\u0430",
                    class: editedReport.value.date ? "" : "outline-1 outline-rose-300"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div class="relative"${_scopeId2}>`);
                  if (editedReport.value.name) {
                    _push3(ssrRenderComponent(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435`);
                        } else {
                          return [
                            createTextVNode("\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(ssrRenderComponent(_component_UiInput, {
                    modelValue: editedReport.value.name,
                    "onUpdate:modelValue": ($event) => editedReport.value.name = $event,
                    placeholder: "\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435",
                    class: editedReport.value.name ? "" : "outline-1 outline-rose-300"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div class="relative"${_scopeId2}>`);
                  if (editedReport.value.cost) {
                    _push3(ssrRenderComponent(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C`);
                        } else {
                          return [
                            createTextVNode("\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(ssrRenderComponent(_component_UiInput, {
                    modelValue: editedReport.value.cost,
                    "onUpdate:modelValue": ($event) => editedReport.value.cost = $event,
                    type: "number",
                    placeholder: "\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C",
                    class: editedReport.value.cost ? "" : "outline-1 outline-rose-300"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><span${_scopeId2}> \u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C: ${ssrInterpolate(editedReport.value.cost)}\u0440. </span></div>`);
                  _push3(ssrRenderComponent(_component_UiDialogFooter, { class: "w-full" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="flex justify-between w-full gap-2"${_scopeId3}>`);
                        _push4(ssrRenderComponent(_component_UiButton, {
                          variant: "destructive",
                          onClick: deleteOtherReport
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` \u0423\u0434\u0430\u043B\u0438\u0442\u044C `);
                            } else {
                              return [
                                createTextVNode(" \u0423\u0434\u0430\u043B\u0438\u0442\u044C ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_UiButton, {
                          disabled: disabled.value,
                          onClick: updateOtherReport
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` \u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C `);
                            } else {
                              return [
                                createTextVNode(" \u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`</div>`);
                      } else {
                        return [
                          createVNode("div", { class: "flex justify-between w-full gap-2" }, [
                            createVNode(_component_UiButton, {
                              variant: "destructive",
                              onClick: deleteOtherReport
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" \u0423\u0434\u0430\u043B\u0438\u0442\u044C ")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_UiButton, {
                              disabled: disabled.value,
                              onClick: updateOtherReport
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" \u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C ")
                              ]),
                              _: 1
                            }, 8, ["disabled"])
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UiDialogHeader, null, {
                      default: withCtx(() => [
                        createVNode(_component_UiDialogTitle, null, {
                          default: withCtx(() => [
                            createTextVNode("\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u043E\u0442\u0447\u0435\u0442")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UiDialogDescription)
                      ]),
                      _: 1
                    }),
                    createVNode("div", { class: "flex flex-col gap-5" }, [
                      createVNode("div", { class: "relative" }, [
                        editedReport.value.date ? (openBlock(), createBlock(_component_UiLabel, {
                          key: 0,
                          class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap"
                        }, {
                          default: withCtx(() => [
                            createTextVNode("\u0414\u0430\u0442\u0430")
                          ]),
                          _: 1
                        })) : createCommentVNode("", true),
                        createVNode(_component_UiInput, {
                          modelValue: editedReport.value.date,
                          "onUpdate:modelValue": ($event) => editedReport.value.date = $event,
                          type: "date",
                          placeholder: "\u0414\u0430\u0442\u0430",
                          class: editedReport.value.date ? "" : "outline-1 outline-rose-300"
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "class"])
                      ]),
                      createVNode("div", { class: "relative" }, [
                        editedReport.value.name ? (openBlock(), createBlock(_component_UiLabel, {
                          key: 0,
                          class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1"
                        }, {
                          default: withCtx(() => [
                            createTextVNode("\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435")
                          ]),
                          _: 1
                        })) : createCommentVNode("", true),
                        createVNode(_component_UiInput, {
                          modelValue: editedReport.value.name,
                          "onUpdate:modelValue": ($event) => editedReport.value.name = $event,
                          placeholder: "\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435",
                          class: editedReport.value.name ? "" : "outline-1 outline-rose-300"
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "class"])
                      ]),
                      createVNode("div", { class: "relative" }, [
                        editedReport.value.cost ? (openBlock(), createBlock(_component_UiLabel, {
                          key: 0,
                          class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1"
                        }, {
                          default: withCtx(() => [
                            createTextVNode("\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C")
                          ]),
                          _: 1
                        })) : createCommentVNode("", true),
                        createVNode(_component_UiInput, {
                          modelValue: editedReport.value.cost,
                          "onUpdate:modelValue": ($event) => editedReport.value.cost = $event,
                          type: "number",
                          placeholder: "\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C",
                          class: editedReport.value.cost ? "" : "outline-1 outline-rose-300"
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "class"])
                      ]),
                      createVNode("span", null, " \u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C: " + toDisplayString(editedReport.value.cost) + "\u0440. ", 1)
                    ]),
                    createVNode(_component_UiDialogFooter, { class: "w-full" }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "flex justify-between w-full gap-2" }, [
                          createVNode(_component_UiButton, {
                            variant: "destructive",
                            onClick: deleteOtherReport
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" \u0423\u0434\u0430\u043B\u0438\u0442\u044C ")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UiButton, {
                            disabled: disabled.value,
                            onClick: updateOtherReport
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" \u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C ")
                            ]),
                            _: 1
                          }, 8, ["disabled"])
                        ])
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UiDialogContent, { class: "max-w-[300px] flex flex-col" }, {
                default: withCtx(() => [
                  createVNode(_component_UiDialogHeader, null, {
                    default: withCtx(() => [
                      createVNode(_component_UiDialogTitle, null, {
                        default: withCtx(() => [
                          createTextVNode("\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u043E\u0442\u0447\u0435\u0442")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_UiDialogDescription)
                    ]),
                    _: 1
                  }),
                  createVNode("div", { class: "flex flex-col gap-5" }, [
                    createVNode("div", { class: "relative" }, [
                      editedReport.value.date ? (openBlock(), createBlock(_component_UiLabel, {
                        key: 0,
                        class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("\u0414\u0430\u0442\u0430")
                        ]),
                        _: 1
                      })) : createCommentVNode("", true),
                      createVNode(_component_UiInput, {
                        modelValue: editedReport.value.date,
                        "onUpdate:modelValue": ($event) => editedReport.value.date = $event,
                        type: "date",
                        placeholder: "\u0414\u0430\u0442\u0430",
                        class: editedReport.value.date ? "" : "outline-1 outline-rose-300"
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "class"])
                    ]),
                    createVNode("div", { class: "relative" }, [
                      editedReport.value.name ? (openBlock(), createBlock(_component_UiLabel, {
                        key: 0,
                        class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435")
                        ]),
                        _: 1
                      })) : createCommentVNode("", true),
                      createVNode(_component_UiInput, {
                        modelValue: editedReport.value.name,
                        "onUpdate:modelValue": ($event) => editedReport.value.name = $event,
                        placeholder: "\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435",
                        class: editedReport.value.name ? "" : "outline-1 outline-rose-300"
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "class"])
                    ]),
                    createVNode("div", { class: "relative" }, [
                      editedReport.value.cost ? (openBlock(), createBlock(_component_UiLabel, {
                        key: 0,
                        class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C")
                        ]),
                        _: 1
                      })) : createCommentVNode("", true),
                      createVNode(_component_UiInput, {
                        modelValue: editedReport.value.cost,
                        "onUpdate:modelValue": ($event) => editedReport.value.cost = $event,
                        type: "number",
                        placeholder: "\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C",
                        class: editedReport.value.cost ? "" : "outline-1 outline-rose-300"
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "class"])
                    ]),
                    createVNode("span", null, " \u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C: " + toDisplayString(editedReport.value.cost) + "\u0440. ", 1)
                  ]),
                  createVNode(_component_UiDialogFooter, { class: "w-full" }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "flex justify-between w-full gap-2" }, [
                        createVNode(_component_UiButton, {
                          variant: "destructive",
                          onClick: deleteOtherReport
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" \u0423\u0434\u0430\u043B\u0438\u0442\u044C ")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UiButton, {
                          disabled: disabled.value,
                          onClick: updateOtherReport
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" \u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C ")
                          ]),
                          _: 1
                        }, 8, ["disabled"])
                      ])
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
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/my/production/EditOtherReport.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const _sfc_main$a = /* @__PURE__ */ defineComponent({
  __name: "Masters",
  __ssrInlineRender: true,
  props: {
    period: {}
  },
  setup(__props) {
    const authStore = useAuthStore();
    const { $useApi } = useNuxtApp();
    const { toast } = useToast();
    const props = __props;
    const curUser = authStore.user;
    const period = ref(props.period);
    const minDate = ref(/* @__PURE__ */ new Date(props.period + "-01"));
    const maxDate = ref(new Date(+props.period.split("-")[0], +props.period.split("-")[1], 0));
    const mastersList = ref([]);
    const curMaster = ref(null);
    const reports = ref([]);
    const originalReports = ref([]);
    const isLoading = ref(false);
    const error = ref(null);
    const isEditModalOpen = ref(false);
    const isEditRepairModalOpen = ref(false);
    const editingReport = ref(null);
    const editingRepairReport = ref(null);
    const isEditOtherModalOpen = ref(false);
    const editingOtherReport = ref(null);
    const date = ref();
    const range = ref([
      new Date(props.period).toISOString().slice(0, 10),
      new Date(+props.period.split("-")[0], +props.period.split("-")[1], 1).toISOString().slice(0, 10)
    ]);
    const totalCost = ref(0);
    const totalEls = ref(0);
    const sortTab = ref("all");
    const calcTotals = () => {
      totalCost.value = reports.value.reduce((a, b) => a + b.cost - b.penaltyCost, 0);
      totalEls.value = reports.value.reduce((a, b) => a + (b.isOther ? 0 : b.els), 0);
    };
    const getMasterReports = async () => {
      if (!curMaster.value) return;
      try {
        isLoading.value = true;
        error.value = null;
        const from = new Date(range.value[0]).toISOString().slice(0, 10);
        const to = new Date(range.value[1]).toISOString().slice(0, 10);
        const { data } = await $useApi.get(`production/master/${curMaster.value.id}/reports`, {
          params: { from, to }
        });
        reports.value = data;
        originalReports.value = data;
        sortReports(sortTab.value);
        calcTotals();
      } catch {
        error.value = "\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u043E\u0442\u0447\u0435\u0442\u044B";
        toast({
          title: "\u041E\u0448\u0438\u0431\u043A\u0430",
          description: error.value,
          variant: "destructive"
        });
      } finally {
        isLoading.value = false;
      }
    };
    const editReport = (report) => {
      if (report.isRepair) {
        editingRepairReport.value = { ...report };
        isEditRepairModalOpen.value = true;
      } else if (report.isOther) {
        editingOtherReport.value = { ...report };
        isEditOtherModalOpen.value = true;
      } else {
        editingReport.value = { ...report };
        isEditModalOpen.value = true;
      }
    };
    const handleReportUpdated = async () => {
      await getMasterReports();
      isEditModalOpen.value = false;
      isEditRepairModalOpen.value = false;
      isEditOtherModalOpen.value = false;
      editingReport.value = null;
      editingRepairReport.value = null;
      editingOtherReport.value = null;
    };
    const loadMasterShifts = async () => {
      if (!curMaster.value) return;
      try {
        const { data } = await $useApi.get(`production/master/${curMaster.value.id}/shifts`, {
          params: { period: period.value }
        });
        date.value = data.map((d) => d.shift_date);
      } catch {
        toast({
          title: "\u041E\u0448\u0438\u0431\u043A\u0430",
          description: "\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u0441\u043C\u0435\u043D\u044B",
          variant: "destructive"
        });
      }
    };
    const format2 = (date2) => {
      return "\u0420\u0430\u0431\u043E\u0447\u0438\u0445 \u0434\u043D\u0435\u0439: " + date2.length;
    };
    const formatRange = (date2) => {
      return "\u041F\u0435\u0440\u0438\u043E\u0434 \u0441 " + date2.map((d) => {
        const date3 = new Date(d).toISOString().slice(0, 10).split("-");
        const day = date3[2];
        const mounth = date3[1];
        const year = date3[0];
        return `${day}.${mounth}.${year}`;
      }).join(" \u043F\u043E ");
    };
    const saveMasterShifts = async () => {
      if (!curMaster.value) return;
      try {
        const formattedDates = date.value ? date.value.map((d) => new Date(d).toISOString().slice(0, 10)) : [];
        await $useApi.post(`production/master/${curMaster.value.id}/shifts`, {
          shiftDates: formattedDates,
          period: period.value
        });
        toast({
          title: "\u0423\u0441\u043F\u0435\u0445",
          description: "\u0421\u043C\u0435\u043D\u044B \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u044B"
        });
      } catch (e) {
        console.log(e);
        toast({
          title: "\u041E\u0448\u0438\u0431\u043A\u0430",
          description: "\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0441\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u0441\u043C\u0435\u043D\u044B",
          variant: "destructive"
        });
      }
    };
    const dateFormat2 = (date2) => {
      const d = new Date(date2);
      return `${d.getDate().toString().padStart(2, "0")}.${(d.getMonth() + 1).toString().padStart(2, "0")}.${d.getFullYear()}`;
    };
    watch([curMaster, period], () => {
      console.log("watch");
      if (curMaster.value) {
        getMasterReports();
        loadMasterShifts();
      }
    });
    watch(range, () => {
      console.log("range");
      getMasterReports();
    }, { deep: true });
    const sortReports = (val) => {
      if (val === "repairs") {
        reports.value = originalReports.value.filter((r) => r.isRepair === true);
        calcTotals();
        return;
      }
      if (val === "works") {
        reports.value = originalReports.value.filter((r) => r.isRepair !== true && r.isOther !== true);
        calcTotals();
        return;
      }
      if (val === "other") {
        reports.value = originalReports.value.filter((r) => r.isOther === true);
        calcTotals();
        return;
      }
      reports.value = originalReports.value;
    };
    watch(sortTab, (val) => {
      sortReports(val);
      calcTotals();
    }, { deep: true });
    return (_ctx, _push, _parent, _attrs) => {
      var _a2, _b2, _c2, _d2;
      var _a, _b, _c, _d, _e, _f;
      const _component_MyComboboxModels = _sfc_main$h;
      const _component_MyProductionCreateMasterReport = _sfc_main$e;
      const _component_UiTabs = _sfc_main$2$1;
      const _component_UiTabsList = _sfc_main$g;
      const _component_UiTabsTrigger = _sfc_main$1$1;
      const _component_UiTable = _sfc_main$5$1;
      const _component_UiTableCaption = _sfc_main$6$1;
      const _component_UiTableHeader = _sfc_main$i;
      const _component_UiTableRow = _sfc_main$2$2;
      const _component_UiTableHead = _sfc_main$1$2;
      const _component_UiTableBody = _sfc_main$4$1;
      const _component_UiTableCell = _sfc_main$3$1;
      const _component_MyProductionEditMasterReport = _sfc_main$d;
      const _component_MyProductionEditMasterRepairReport = _sfc_main$c;
      const _component_MyProductionEditOtherReport = _sfc_main$b;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col gap-2" }, _attrs))}><div class="flex flex-col gap-2"><div class="flex gap-2">`);
      if (mastersList.value.length > 1) {
        _push(ssrRenderComponent(_component_MyComboboxModels, {
          items: mastersList.value.map((m) => ({ value: m.id, label: m.fullName })),
          label: ((_a = curMaster.value) == null ? void 0 : _a.fullName) || "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u043C\u0430\u0441\u0442\u0435\u0440\u0430",
          onSelectedItem: (value) => {
            curMaster.value = mastersList.value.find((m) => m.id === value) || null;
          }
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_component_MyProductionCreateMasterReport, {
        "master-id": (_a2 = (_b = curMaster.value) == null ? void 0 : _b.id) != null ? _a2 : 0,
        class: "w-full",
        onReportCreated: getMasterReports
      }, null, _parent));
      _push(`</div><div class="flex items-center"><div class="w-full">`);
      _push(ssrRenderComponent(unref(Qn), {
        modelValue: range.value,
        "onUpdate:modelValue": ($event) => range.value = $event,
        range: "",
        "enable-time-picker": false,
        "min-date": minDate.value,
        "max-date": maxDate.value,
        "auto-apply": "",
        locale: "ru",
        placeholder: "\u0412\u044B\u0431\u0440\u0430\u0442\u044C \u0434\u043D\u0438",
        "select-text": "\u0413\u043E\u0442\u043E\u0432\u043E",
        "cancel-text": "\u0417\u0430\u043A\u0440\u044B\u0442\u044C",
        class: "grow",
        format: formatRange,
        clearable: false
      }, null, _parent));
      _push(`</div></div><div class="flex items-center"><div class="w-full">`);
      _push(ssrRenderComponent(unref(Qn), {
        modelValue: date.value,
        "onUpdate:modelValue": [($event) => date.value = $event, saveMasterShifts],
        "multi-dates": "",
        "enable-time-picker": false,
        locale: "ru",
        "min-date": minDate.value,
        "max-date": maxDate.value,
        "start-date": minDate.value,
        placeholder: "\u0412\u044B\u0431\u0440\u0430\u0442\u044C \u0441\u043C\u0435\u043D\u044B",
        "select-text": "\u0413\u043E\u0442\u043E\u0432\u043E",
        "cancel-text": "\u0417\u0430\u043A\u0440\u044B\u0442\u044C",
        format: format2,
        class: "grow",
        clearable: false
      }, null, _parent));
      _push(`</div></div><div class="flex flex-col gap-2">`);
      if (((_c = unref(curUser)) == null ? void 0 : _c.role.shortName) !== "MASTER") {
        _push(ssrRenderComponent(_component_UiTabs, {
          modelValue: sortTab.value,
          "onUpdate:modelValue": ($event) => sortTab.value = $event
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_UiTabsList, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UiTabsTrigger, { value: "all" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(` \u0412\u0441\u0435 `);
                        } else {
                          return [
                            createTextVNode(" \u0412\u0441\u0435 ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_UiTabsTrigger, { value: "works" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(` \u0412\u044B\u0432\u0435\u0441\u043A\u0438 `);
                        } else {
                          return [
                            createTextVNode(" \u0412\u044B\u0432\u0435\u0441\u043A\u0438 ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_UiTabsTrigger, { value: "repairs" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(` \u0420\u0435\u043C\u043E\u043D\u0442\u044B `);
                        } else {
                          return [
                            createTextVNode(" \u0420\u0435\u043C\u043E\u043D\u0442\u044B ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_UiTabsTrigger, { value: "other" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(` \u0414\u0440\u0443\u0433\u043E\u0435 `);
                        } else {
                          return [
                            createTextVNode(" \u0414\u0440\u0443\u0433\u043E\u0435 ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_UiTabsTrigger, { value: "all" }, {
                        default: withCtx(() => [
                          createTextVNode(" \u0412\u0441\u0435 ")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_UiTabsTrigger, { value: "works" }, {
                        default: withCtx(() => [
                          createTextVNode(" \u0412\u044B\u0432\u0435\u0441\u043A\u0438 ")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_UiTabsTrigger, { value: "repairs" }, {
                        default: withCtx(() => [
                          createTextVNode(" \u0420\u0435\u043C\u043E\u043D\u0442\u044B ")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_UiTabsTrigger, { value: "other" }, {
                        default: withCtx(() => [
                          createTextVNode(" \u0414\u0440\u0443\u0433\u043E\u0435 ")
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_UiTabsList, null, {
                  default: withCtx(() => [
                    createVNode(_component_UiTabsTrigger, { value: "all" }, {
                      default: withCtx(() => [
                        createTextVNode(" \u0412\u0441\u0435 ")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_UiTabsTrigger, { value: "works" }, {
                      default: withCtx(() => [
                        createTextVNode(" \u0412\u044B\u0432\u0435\u0441\u043A\u0438 ")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_UiTabsTrigger, { value: "repairs" }, {
                      default: withCtx(() => [
                        createTextVNode(" \u0420\u0435\u043C\u043E\u043D\u0442\u044B ")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_UiTabsTrigger, { value: "other" }, {
                      default: withCtx(() => [
                        createTextVNode(" \u0414\u0440\u0443\u0433\u043E\u0435 ")
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
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="w-full rounded-lg p-2 border border-slate-200 bg-white text-slate-950 shadow-sm dark:border-slate-800 dark:bg-slate-950 dark:text-slate-50"><div class="flex justify-between"><span> \u042D\u043B-\u0442\u044B: ${ssrInterpolate(totalEls.value)}</span><span> \u0421\u0443\u043C\u043C\u0430: ${ssrInterpolate(totalCost.value)}\u0440. </span></div></div></div></div>`);
      if (isLoading.value) {
        _push(`<div class="text-center">\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430...</div>`);
      } else if (error.value) {
        _push(`<div class="text-red-500 text-center">${ssrInterpolate(error.value)}</div>`);
      } else if (!curMaster.value) {
        _push(`<div class="text-center"> \u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u043C\u0430\u0441\u0442\u0435\u0440\u0430 \u0434\u043B\u044F \u043E\u0442\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F \u043E\u0442\u0447\u0435\u0442\u043E\u0432. </div>`);
      } else if (reports.value.length === 0) {
        _push(`<div class="text-center"> \u041D\u0435\u0442 \u043E\u0442\u0447\u0435\u0442\u043E\u0432 \u0434\u043B\u044F \u0432\u044B\u0431\u0440\u0430\u043D\u043D\u043E\u0433\u043E \u043C\u0430\u0441\u0442\u0435\u0440\u0430. </div>`);
      } else {
        _push(`<div>`);
        _push(ssrRenderComponent(_component_UiTable, { class: "bg-white rounded-sm" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_UiTableCaption, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  var _a22, _b22;
                  if (_push3) {
                    _push3(`\u041E\u0442\u0447\u0435\u0442\u044B \u043C\u0430\u0441\u0442\u0435\u0440\u0430: ${ssrInterpolate((_a22 = curMaster.value) == null ? void 0 : _a22.fullName)}`);
                  } else {
                    return [
                      createTextVNode("\u041E\u0442\u0447\u0435\u0442\u044B \u043C\u0430\u0441\u0442\u0435\u0440\u0430: " + toDisplayString((_b22 = curMaster.value) == null ? void 0 : _b22.fullName), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UiTableHeader, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UiTableRow, null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_UiTableHead, null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`\u0414\u0430\u0442\u0430`);
                              } else {
                                return [
                                  createTextVNode("\u0414\u0430\u0442\u0430")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_component_UiTableHead, { class: "text-center" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435`);
                              } else {
                                return [
                                  createTextVNode("\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_component_UiTableHead, { class: "text-center" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`\u0418\u043D\u0444\u043E`);
                              } else {
                                return [
                                  createTextVNode("\u0418\u043D\u0444\u043E")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_component_UiTableHead, { class: "text-center" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C`);
                              } else {
                                return [
                                  createTextVNode("\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_UiTableHead, null, {
                              default: withCtx(() => [
                                createTextVNode("\u0414\u0430\u0442\u0430")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_UiTableHead, { class: "text-center" }, {
                              default: withCtx(() => [
                                createTextVNode("\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_UiTableHead, { class: "text-center" }, {
                              default: withCtx(() => [
                                createTextVNode("\u0418\u043D\u0444\u043E")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_UiTableHead, { class: "text-center" }, {
                              default: withCtx(() => [
                                createTextVNode("\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C")
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_UiTableRow, null, {
                        default: withCtx(() => [
                          createVNode(_component_UiTableHead, null, {
                            default: withCtx(() => [
                              createTextVNode("\u0414\u0430\u0442\u0430")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UiTableHead, { class: "text-center" }, {
                            default: withCtx(() => [
                              createTextVNode("\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UiTableHead, { class: "text-center" }, {
                            default: withCtx(() => [
                              createTextVNode("\u0418\u043D\u0444\u043E")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UiTableHead, { class: "text-center" }, {
                            default: withCtx(() => [
                              createTextVNode("\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C")
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
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UiTableBody, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<!--[-->`);
                    ssrRenderList(reports.value, (report) => {
                      _push3(ssrRenderComponent(_component_UiTableRow, {
                        key: report.key,
                        class: {
                          "cursor-pointer hover:bg-gray-100": true,
                          "bg-blue-100/50": report.isRepair,
                          "bg-yellow-100/50": report.isOther,
                          "bg-red-100": report.penaltyCost > 0
                        },
                        onClick: ($event) => editReport(report)
                      }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(ssrRenderComponent(_component_UiTableCell, null, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`<div class="flex items-center gap-2"${_scopeId4}><span${_scopeId4}>${ssrInterpolate(dateFormat2(report.date).slice(0, 5))}</span>`);
                                  if (report.comment) {
                                    _push5(ssrRenderComponent(unref(MessageCircle), null, null, _parent5, _scopeId4));
                                  } else {
                                    _push5(`<!---->`);
                                  }
                                  _push5(`</div>`);
                                } else {
                                  return [
                                    createVNode("div", { class: "flex items-center gap-2" }, [
                                      createVNode("span", null, toDisplayString(dateFormat2(report.date).slice(0, 5)), 1),
                                      report.comment ? (openBlock(), createBlock(unref(MessageCircle), { key: 0 })) : createCommentVNode("", true)
                                    ])
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                            _push4(ssrRenderComponent(_component_UiTableCell, { class: "text-center" }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`<div class="flex flex-col items-center"${_scopeId4}>`);
                                  if (report.name.startsWith("http")) {
                                    _push5(`<a${ssrRenderAttr("href", report.name)} target="_blank" class="text-blue-500 hover:underline"${_scopeId4}>\u041A\u0430\u0440\u0442\u043E\u0447\u043A\u0430</a>`);
                                  } else {
                                    _push5(`<div class="flex flex-col items-center"${_scopeId4}><span${_scopeId4}>${ssrInterpolate(report.name)}</span></div>`);
                                  }
                                  _push5(`<span class="text-wrap text-gray-600"${_scopeId4}>(${ssrInterpolate(report.type)})</span></div>`);
                                } else {
                                  return [
                                    createVNode("div", { class: "flex flex-col items-center" }, [
                                      report.name.startsWith("http") ? (openBlock(), createBlock("a", {
                                        key: 0,
                                        href: report.name,
                                        target: "_blank",
                                        class: "text-blue-500 hover:underline",
                                        onClick: withModifiers(() => {
                                        }, ["stop"])
                                      }, "\u041A\u0430\u0440\u0442\u043E\u0447\u043A\u0430", 8, ["href", "onClick"])) : (openBlock(), createBlock("div", {
                                        key: 1,
                                        class: "flex flex-col items-center"
                                      }, [
                                        createVNode("span", null, toDisplayString(report.name), 1)
                                      ])),
                                      createVNode("span", { class: "text-wrap text-gray-600" }, "(" + toDisplayString(report.type) + ")", 1)
                                    ])
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                            _push4(ssrRenderComponent(_component_UiTableCell, { class: "text-center" }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  if (report.isRepair) {
                                    _push5(`<span${_scopeId4}> \u0420\u0435\u043C\u043E\u043D\u0442 </span>`);
                                  } else if (report.isOther) {
                                    _push5(`<span${_scopeId4}> \u0414\u0440\u0443\u0433\u043E\u0435 </span>`);
                                  } else {
                                    _push5(`<div class="flex flex-col"${_scopeId4}><span${_scopeId4}>${ssrInterpolate(report.metrs)}\u043C. </span><span${_scopeId4}>${ssrInterpolate(report.els)}\u044D\u043B. </span></div>`);
                                  }
                                } else {
                                  return [
                                    report.isRepair ? (openBlock(), createBlock("span", { key: 0 }, " \u0420\u0435\u043C\u043E\u043D\u0442 ")) : report.isOther ? (openBlock(), createBlock("span", { key: 1 }, " \u0414\u0440\u0443\u0433\u043E\u0435 ")) : (openBlock(), createBlock("div", {
                                      key: 2,
                                      class: "flex flex-col"
                                    }, [
                                      createVNode("span", null, toDisplayString(report.metrs) + "\u043C. ", 1),
                                      createVNode("span", null, toDisplayString(report.els) + "\u044D\u043B. ", 1)
                                    ]))
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                            _push4(ssrRenderComponent(_component_UiTableCell, { class: "text-center" }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`<div class="flex flex-col items-center"${_scopeId4}><span class="font-semibold text-green-600"${_scopeId4}>+${ssrInterpolate(report.cost)}\u0440.</span>`);
                                  if (report.penaltyCost) {
                                    _push5(`<span class="font-semibold text-red-500"${_scopeId4}>${ssrInterpolate(" -" + report.penaltyCost)}\u0440.</span>`);
                                  } else {
                                    _push5(`<!---->`);
                                  }
                                  _push5(`</div>`);
                                } else {
                                  return [
                                    createVNode("div", { class: "flex flex-col items-center" }, [
                                      createVNode("span", { class: "font-semibold text-green-600" }, "+" + toDisplayString(report.cost) + "\u0440.", 1),
                                      report.penaltyCost ? (openBlock(), createBlock("span", {
                                        key: 0,
                                        class: "font-semibold text-red-500"
                                      }, toDisplayString(" -" + report.penaltyCost) + "\u0440.", 1)) : createCommentVNode("", true)
                                    ])
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                          } else {
                            return [
                              createVNode(_component_UiTableCell, null, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "flex items-center gap-2" }, [
                                    createVNode("span", null, toDisplayString(dateFormat2(report.date).slice(0, 5)), 1),
                                    report.comment ? (openBlock(), createBlock(unref(MessageCircle), { key: 0 })) : createCommentVNode("", true)
                                  ])
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(_component_UiTableCell, { class: "text-center" }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "flex flex-col items-center" }, [
                                    report.name.startsWith("http") ? (openBlock(), createBlock("a", {
                                      key: 0,
                                      href: report.name,
                                      target: "_blank",
                                      class: "text-blue-500 hover:underline",
                                      onClick: withModifiers(() => {
                                      }, ["stop"])
                                    }, "\u041A\u0430\u0440\u0442\u043E\u0447\u043A\u0430", 8, ["href", "onClick"])) : (openBlock(), createBlock("div", {
                                      key: 1,
                                      class: "flex flex-col items-center"
                                    }, [
                                      createVNode("span", null, toDisplayString(report.name), 1)
                                    ])),
                                    createVNode("span", { class: "text-wrap text-gray-600" }, "(" + toDisplayString(report.type) + ")", 1)
                                  ])
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(_component_UiTableCell, { class: "text-center" }, {
                                default: withCtx(() => [
                                  report.isRepair ? (openBlock(), createBlock("span", { key: 0 }, " \u0420\u0435\u043C\u043E\u043D\u0442 ")) : report.isOther ? (openBlock(), createBlock("span", { key: 1 }, " \u0414\u0440\u0443\u0433\u043E\u0435 ")) : (openBlock(), createBlock("div", {
                                    key: 2,
                                    class: "flex flex-col"
                                  }, [
                                    createVNode("span", null, toDisplayString(report.metrs) + "\u043C. ", 1),
                                    createVNode("span", null, toDisplayString(report.els) + "\u044D\u043B. ", 1)
                                  ]))
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(_component_UiTableCell, { class: "text-center" }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "flex flex-col items-center" }, [
                                    createVNode("span", { class: "font-semibold text-green-600" }, "+" + toDisplayString(report.cost) + "\u0440.", 1),
                                    report.penaltyCost ? (openBlock(), createBlock("span", {
                                      key: 0,
                                      class: "font-semibold text-red-500"
                                    }, toDisplayString(" -" + report.penaltyCost) + "\u0440.", 1)) : createCommentVNode("", true)
                                  ])
                                ]),
                                _: 2
                              }, 1024)
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                    });
                    _push3(`<!--]-->`);
                  } else {
                    return [
                      (openBlock(true), createBlock(Fragment, null, renderList(reports.value, (report) => {
                        return openBlock(), createBlock(_component_UiTableRow, {
                          key: report.key,
                          class: {
                            "cursor-pointer hover:bg-gray-100": true,
                            "bg-blue-100/50": report.isRepair,
                            "bg-yellow-100/50": report.isOther,
                            "bg-red-100": report.penaltyCost > 0
                          },
                          onClick: ($event) => editReport(report)
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_UiTableCell, null, {
                              default: withCtx(() => [
                                createVNode("div", { class: "flex items-center gap-2" }, [
                                  createVNode("span", null, toDisplayString(dateFormat2(report.date).slice(0, 5)), 1),
                                  report.comment ? (openBlock(), createBlock(unref(MessageCircle), { key: 0 })) : createCommentVNode("", true)
                                ])
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(_component_UiTableCell, { class: "text-center" }, {
                              default: withCtx(() => [
                                createVNode("div", { class: "flex flex-col items-center" }, [
                                  report.name.startsWith("http") ? (openBlock(), createBlock("a", {
                                    key: 0,
                                    href: report.name,
                                    target: "_blank",
                                    class: "text-blue-500 hover:underline",
                                    onClick: withModifiers(() => {
                                    }, ["stop"])
                                  }, "\u041A\u0430\u0440\u0442\u043E\u0447\u043A\u0430", 8, ["href", "onClick"])) : (openBlock(), createBlock("div", {
                                    key: 1,
                                    class: "flex flex-col items-center"
                                  }, [
                                    createVNode("span", null, toDisplayString(report.name), 1)
                                  ])),
                                  createVNode("span", { class: "text-wrap text-gray-600" }, "(" + toDisplayString(report.type) + ")", 1)
                                ])
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(_component_UiTableCell, { class: "text-center" }, {
                              default: withCtx(() => [
                                report.isRepair ? (openBlock(), createBlock("span", { key: 0 }, " \u0420\u0435\u043C\u043E\u043D\u0442 ")) : report.isOther ? (openBlock(), createBlock("span", { key: 1 }, " \u0414\u0440\u0443\u0433\u043E\u0435 ")) : (openBlock(), createBlock("div", {
                                  key: 2,
                                  class: "flex flex-col"
                                }, [
                                  createVNode("span", null, toDisplayString(report.metrs) + "\u043C. ", 1),
                                  createVNode("span", null, toDisplayString(report.els) + "\u044D\u043B. ", 1)
                                ]))
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(_component_UiTableCell, { class: "text-center" }, {
                              default: withCtx(() => [
                                createVNode("div", { class: "flex flex-col items-center" }, [
                                  createVNode("span", { class: "font-semibold text-green-600" }, "+" + toDisplayString(report.cost) + "\u0440.", 1),
                                  report.penaltyCost ? (openBlock(), createBlock("span", {
                                    key: 0,
                                    class: "font-semibold text-red-500"
                                  }, toDisplayString(" -" + report.penaltyCost) + "\u0440.", 1)) : createCommentVNode("", true)
                                ])
                              ]),
                              _: 2
                            }, 1024)
                          ]),
                          _: 2
                        }, 1032, ["class", "onClick"]);
                      }), 128))
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_UiTableCaption, null, {
                  default: withCtx(() => {
                    var _a22;
                    return [
                      createTextVNode("\u041E\u0442\u0447\u0435\u0442\u044B \u043C\u0430\u0441\u0442\u0435\u0440\u0430: " + toDisplayString((_a22 = curMaster.value) == null ? void 0 : _a22.fullName), 1)
                    ];
                  }),
                  _: 1
                }),
                createVNode(_component_UiTableHeader, null, {
                  default: withCtx(() => [
                    createVNode(_component_UiTableRow, null, {
                      default: withCtx(() => [
                        createVNode(_component_UiTableHead, null, {
                          default: withCtx(() => [
                            createTextVNode("\u0414\u0430\u0442\u0430")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UiTableHead, { class: "text-center" }, {
                          default: withCtx(() => [
                            createTextVNode("\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UiTableHead, { class: "text-center" }, {
                          default: withCtx(() => [
                            createTextVNode("\u0418\u043D\u0444\u043E")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UiTableHead, { class: "text-center" }, {
                          default: withCtx(() => [
                            createTextVNode("\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode(_component_UiTableBody, null, {
                  default: withCtx(() => [
                    (openBlock(true), createBlock(Fragment, null, renderList(reports.value, (report) => {
                      return openBlock(), createBlock(_component_UiTableRow, {
                        key: report.key,
                        class: {
                          "cursor-pointer hover:bg-gray-100": true,
                          "bg-blue-100/50": report.isRepair,
                          "bg-yellow-100/50": report.isOther,
                          "bg-red-100": report.penaltyCost > 0
                        },
                        onClick: ($event) => editReport(report)
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_UiTableCell, null, {
                            default: withCtx(() => [
                              createVNode("div", { class: "flex items-center gap-2" }, [
                                createVNode("span", null, toDisplayString(dateFormat2(report.date).slice(0, 5)), 1),
                                report.comment ? (openBlock(), createBlock(unref(MessageCircle), { key: 0 })) : createCommentVNode("", true)
                              ])
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(_component_UiTableCell, { class: "text-center" }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "flex flex-col items-center" }, [
                                report.name.startsWith("http") ? (openBlock(), createBlock("a", {
                                  key: 0,
                                  href: report.name,
                                  target: "_blank",
                                  class: "text-blue-500 hover:underline",
                                  onClick: withModifiers(() => {
                                  }, ["stop"])
                                }, "\u041A\u0430\u0440\u0442\u043E\u0447\u043A\u0430", 8, ["href", "onClick"])) : (openBlock(), createBlock("div", {
                                  key: 1,
                                  class: "flex flex-col items-center"
                                }, [
                                  createVNode("span", null, toDisplayString(report.name), 1)
                                ])),
                                createVNode("span", { class: "text-wrap text-gray-600" }, "(" + toDisplayString(report.type) + ")", 1)
                              ])
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(_component_UiTableCell, { class: "text-center" }, {
                            default: withCtx(() => [
                              report.isRepair ? (openBlock(), createBlock("span", { key: 0 }, " \u0420\u0435\u043C\u043E\u043D\u0442 ")) : report.isOther ? (openBlock(), createBlock("span", { key: 1 }, " \u0414\u0440\u0443\u0433\u043E\u0435 ")) : (openBlock(), createBlock("div", {
                                key: 2,
                                class: "flex flex-col"
                              }, [
                                createVNode("span", null, toDisplayString(report.metrs) + "\u043C. ", 1),
                                createVNode("span", null, toDisplayString(report.els) + "\u044D\u043B. ", 1)
                              ]))
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(_component_UiTableCell, { class: "text-center" }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "flex flex-col items-center" }, [
                                createVNode("span", { class: "font-semibold text-green-600" }, "+" + toDisplayString(report.cost) + "\u0440.", 1),
                                report.penaltyCost ? (openBlock(), createBlock("span", {
                                  key: 0,
                                  class: "font-semibold text-red-500"
                                }, toDisplayString(" -" + report.penaltyCost) + "\u0440.", 1)) : createCommentVNode("", true)
                              ])
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        _: 2
                      }, 1032, ["class", "onClick"]);
                    }), 128))
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      }
      if (isEditModalOpen.value && editingReport.value) {
        _push(ssrRenderComponent(_component_MyProductionEditMasterReport, {
          report: editingReport.value,
          "cur-user": unref(curUser),
          "master-id": (_b2 = (_d = curMaster.value) == null ? void 0 : _d.id) != null ? _b2 : 0,
          onReportUpdated: handleReportUpdated,
          onClose: ($event) => isEditModalOpen.value = false
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (isEditRepairModalOpen.value && editingRepairReport.value) {
        _push(ssrRenderComponent(_component_MyProductionEditMasterRepairReport, {
          report: editingRepairReport.value,
          "master-id": (_c2 = (_e = curMaster.value) == null ? void 0 : _e.id) != null ? _c2 : 0,
          onReportUpdated: handleReportUpdated,
          onClose: ($event) => isEditRepairModalOpen.value = false
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (isEditOtherModalOpen.value && editingOtherReport.value) {
        _push(ssrRenderComponent(_component_MyProductionEditOtherReport, {
          report: editingOtherReport.value,
          "master-id": (_d2 = (_f = curMaster.value) == null ? void 0 : _f.id) != null ? _d2 : 0,
          onReportUpdated: handleReportUpdated,
          onClose: ($event) => isEditOtherModalOpen.value = false
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/my/production/Masters.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  __name: "Page",
  __ssrInlineRender: true,
  props: {
    period: {}
  },
  setup(__props) {
    const { $useApi } = useNuxtApp();
    const props = __props;
    useHead({
      title: "\u0417\u0430\u043A\u0443\u043F\u043A\u0438 | Easy CRM"
    });
    const isOpen = ref(false);
    const period = ref(props.period);
    const tabValue = ref("this_month");
    const total = ref(useMyFormatPrice(0) + "\u20BD");
    const suppliers = ref(['\u041E\u041E\u041E "\u0422\u0414\u0412 \u0413\u0420\u0423\u041F\u041F"', "\u0418\u041F \u041A\u043E\u0440\u043E\u043B\u0451\u0432"]);
    const positionsList = ref([]);
    const supplies = ref([]);
    const blank = {
      date: (/* @__PURE__ */ new Date()).toISOString().slice(0, 10),
      shipmentDate: "",
      supplier: "",
      paymentMethod: "\u0421\u0447\u0435\u0442",
      orderStatus: "\u041E\u0444\u043E\u0440\u043C\u043B\u0435\u043D \u0437\u0430\u043A\u0430\u0437",
      paymentStatus: "\u041D\u0435 \u043E\u043F\u043B\u0430\u0447\u0435\u043D",
      deliveryMethod: "\u0414\u043E\u0441\u0442\u0430\u0432\u043A\u0430 \u043E\u0442 \u043F\u043E\u0441\u0442\u0430\u0432\u0449\u0438\u043A\u0430",
      invoice: "",
      track: "",
      positions: [{ name: "", quantity: 1, priceForItem: 1, category: "" }]
    };
    const editingSupplie = ref(blank);
    const getSuppliers = async () => {
      const { data } = await $useApi.get("supplies/suppliers");
      suppliers.value = data.map((s) => s.name) || [];
      const { data: positionsData } = await $useApi.get("supplies/positions");
      positionsList.value = positionsData || [];
    };
    const getSupplies = async () => {
      const { data } = await $useApi.get("supplies", {
        params: { period: period.value }
      });
      supplies.value = data || [];
      total.value = calcTotals(
        supplies.value.filter((s) => !!s.id).map((s) => s.id)
      );
    };
    const calcTotals = (ids) => {
      const selectedSupplies = supplies.value.filter((ad) => ids.includes(ad.id));
      const totalPrice = selectedSupplies.reduce((sum, supplie) => {
        return sum + supplie.positions.reduce(
          (posSum, pos) => posSum + pos.quantity * pos.priceForItem,
          0
        );
      }, 0);
      return useMyFormatPrice(+totalPrice.toFixed(2)) + "\u20BD";
    };
    const editItem = (id) => {
      isOpen.value = true;
      editingSupplie.value = supplies.value.find((ad) => ad.id === id) || blank;
      console.log(editingSupplie.value);
    };
    watch(tabValue, () => {
      if (tabValue.value === "this_month") {
        period.value = (/* @__PURE__ */ new Date()).toISOString().slice(0, 7);
      }
      if (tabValue.value === "yesterday") {
        const today = /* @__PURE__ */ new Date();
        const yesterday = new Date(today);
        yesterday.setDate(today.getDate() - 1);
        period.value = yesterday.toISOString().split("T")[0];
      }
    });
    watch(
      period,
      async () => {
        await getSupplies();
      },
      { deep: true }
    );
    watch(isOpen, async () => {
      if (!isOpen.value) {
        await getSupplies();
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiCard = _sfc_main$3$2;
      const _component_UiCardHeader = _sfc_main$2$3;
      const _component_UiCardDescription = _sfc_main$j;
      const _component_UiCardTitle = _sfc_main$1$3;
      const _component_MySuppliesCreate = _sfc_main$2$4;
      const _component_UiTabs = _sfc_main$2$1;
      const _component_UiTabsList = _sfc_main$g;
      const _component_UiTabsTrigger = _sfc_main$1$1;
      const _component_UiInput = _sfc_main$k;
      const _component_MySuppliesDataTable = _sfc_main$1$4;
      const _component_UiDialog = _sfc_main$4$2;
      const _component_UiDialogTrigger = _sfc_main$3$3;
      const _component_UiDialogContent = _sfc_main$l;
      const _component_UiDialogHeader = _sfc_main$2$5;
      const _component_UiDialogTitle = _sfc_main$1$5;
      const _component_UiDialogDescription = _sfc_main$m;
      const _component_MySuppliesEdit = _sfc_main$n;
      const _component_UiDialogFooter = _sfc_main$o;
      _push(`<!--[--><div class="w-full flex gap-2"><div class="flex flex-col w-full gap-2">`);
      _push(ssrRenderComponent(_component_UiCard, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UiCardHeader, { class: "p-3 pb-2" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UiCardDescription, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`\u041F\u0440\u0438\u043E\u0431\u0440\u0435\u0442\u0435\u043D\u043E \u043D\u0430 \u0441\u0443\u043C\u043C\u0443`);
                      } else {
                        return [
                          createTextVNode("\u041F\u0440\u0438\u043E\u0431\u0440\u0435\u0442\u0435\u043D\u043E \u043D\u0430 \u0441\u0443\u043C\u043C\u0443")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UiCardTitle, { class: "text-3xl font-semibold whitespace-nowrap" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`${ssrInterpolate(total.value)}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(total.value), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UiCardDescription, null, {
                      default: withCtx(() => [
                        createTextVNode("\u041F\u0440\u0438\u043E\u0431\u0440\u0435\u0442\u0435\u043D\u043E \u043D\u0430 \u0441\u0443\u043C\u043C\u0443")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_UiCardTitle, { class: "text-3xl font-semibold whitespace-nowrap" }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(total.value), 1)
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UiCardHeader, { class: "p-3 pb-2" }, {
                default: withCtx(() => [
                  createVNode(_component_UiCardDescription, null, {
                    default: withCtx(() => [
                      createTextVNode("\u041F\u0440\u0438\u043E\u0431\u0440\u0435\u0442\u0435\u043D\u043E \u043D\u0430 \u0441\u0443\u043C\u043C\u0443")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_UiCardTitle, { class: "text-3xl font-semibold whitespace-nowrap" }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(total.value), 1)
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
      }, _parent));
      _push(`<div class="flex gap-2">`);
      _push(ssrRenderComponent(_component_MySuppliesCreate, {
        suppliers: suppliers.value,
        "positions-list": positionsList.value,
        onSupplieCreated: async () => {
          await getSupplies();
          await getSuppliers();
        }
      }, null, _parent));
      _push(ssrRenderComponent(_component_UiTabs, {
        modelValue: tabValue.value,
        "onUpdate:modelValue": ($event) => tabValue.value = $event,
        "default-value": "month"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex items-center gap-2"${_scopeId}><div class="flex items-center"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_UiTabsList, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UiTabsTrigger, { value: "this_month" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` \u042D\u0442\u043E\u0442 \u043C\u0435\u0441\u044F\u0446 `);
                      } else {
                        return [
                          createTextVNode(" \u042D\u0442\u043E\u0442 \u043C\u0435\u0441\u044F\u0446 ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UiTabsTrigger, { value: "yesterday" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` \u0412\u0447\u0435\u0440\u0430 `);
                      } else {
                        return [
                          createTextVNode(" \u0412\u0447\u0435\u0440\u0430 ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UiTabsTrigger, { value: "month" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` \u0412\u044B\u0431\u0440\u0430\u0442\u044C \u043C\u0435\u0441\u044F\u0446 `);
                      } else {
                        return [
                          createTextVNode(" \u0412\u044B\u0431\u0440\u0430\u0442\u044C \u043C\u0435\u0441\u044F\u0446 ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UiTabsTrigger, { value: "day" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` \u0412\u044B\u0431\u0440\u0430\u0442\u044C \u0434\u0435\u043D\u044C `);
                      } else {
                        return [
                          createTextVNode(" \u0412\u044B\u0431\u0440\u0430\u0442\u044C \u0434\u0435\u043D\u044C ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UiTabsTrigger, { value: "this_month" }, {
                      default: withCtx(() => [
                        createTextVNode(" \u042D\u0442\u043E\u0442 \u043C\u0435\u0441\u044F\u0446 ")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_UiTabsTrigger, { value: "yesterday" }, {
                      default: withCtx(() => [
                        createTextVNode(" \u0412\u0447\u0435\u0440\u0430 ")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_UiTabsTrigger, { value: "month" }, {
                      default: withCtx(() => [
                        createTextVNode(" \u0412\u044B\u0431\u0440\u0430\u0442\u044C \u043C\u0435\u0441\u044F\u0446 ")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_UiTabsTrigger, { value: "day" }, {
                      default: withCtx(() => [
                        createTextVNode(" \u0412\u044B\u0431\u0440\u0430\u0442\u044C \u0434\u0435\u043D\u044C ")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            if (tabValue.value === "month") {
              _push2(`<div class="ml-2"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UiInput, {
                modelValue: period.value,
                "onUpdate:modelValue": ($event) => period.value = $event,
                type: "month"
              }, null, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            if (tabValue.value === "day") {
              _push2(`<div class="ml-2"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UiInput, {
                modelValue: period.value,
                "onUpdate:modelValue": ($event) => period.value = $event,
                type: "date"
              }, null, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "flex items-center gap-2" }, [
                createVNode("div", { class: "flex items-center" }, [
                  createVNode(_component_UiTabsList, null, {
                    default: withCtx(() => [
                      createVNode(_component_UiTabsTrigger, { value: "this_month" }, {
                        default: withCtx(() => [
                          createTextVNode(" \u042D\u0442\u043E\u0442 \u043C\u0435\u0441\u044F\u0446 ")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_UiTabsTrigger, { value: "yesterday" }, {
                        default: withCtx(() => [
                          createTextVNode(" \u0412\u0447\u0435\u0440\u0430 ")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_UiTabsTrigger, { value: "month" }, {
                        default: withCtx(() => [
                          createTextVNode(" \u0412\u044B\u0431\u0440\u0430\u0442\u044C \u043C\u0435\u0441\u044F\u0446 ")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_UiTabsTrigger, { value: "day" }, {
                        default: withCtx(() => [
                          createTextVNode(" \u0412\u044B\u0431\u0440\u0430\u0442\u044C \u0434\u0435\u043D\u044C ")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  tabValue.value === "month" ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "ml-2"
                  }, [
                    createVNode(_component_UiInput, {
                      modelValue: period.value,
                      "onUpdate:modelValue": ($event) => period.value = $event,
                      type: "month"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ])) : createCommentVNode("", true),
                  tabValue.value === "day" ? (openBlock(), createBlock("div", {
                    key: 1,
                    class: "ml-2"
                  }, [
                    createVNode(_component_UiInput, {
                      modelValue: period.value,
                      "onUpdate:modelValue": ($event) => period.value = $event,
                      type: "date"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ])) : createCommentVNode("", true)
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div>`);
      _push(ssrRenderComponent(_component_MySuppliesDataTable, {
        key: supplies.value.length,
        data: supplies.value,
        columns: unref(suppliesColumns),
        onTableSorted: (ids) => total.value = calcTotals(ids),
        onItemClicked: (id) => editItem(id)
      }, null, _parent));
      _push(`</div></div></div>`);
      _push(ssrRenderComponent(_component_UiDialog, {
        open: isOpen.value,
        "onUpdate:open": ($event) => isOpen.value = $event
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UiDialogTrigger, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UiDialogContent, { class: "max-w-[1200px] flex flex-col" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UiDialogHeader, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UiDialogTitle, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0441\u0442\u0430\u0442\u044C\u044E`);
                            } else {
                              return [
                                createTextVNode("\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0441\u0442\u0430\u0442\u044C\u044E")
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
                              createTextVNode("\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0441\u0442\u0430\u0442\u044C\u044E")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UiDialogDescription)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_MySuppliesEdit, {
                    key: editingSupplie.value.id,
                    suppliers: suppliers.value,
                    supplie: editingSupplie.value,
                    "positions-list": positionsList.value,
                    onSupplieUpdated: async () => {
                      isOpen.value = false;
                      editingSupplie.value = blank;
                      await getSupplies();
                    }
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UiDialogFooter, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UiDialogHeader, null, {
                      default: withCtx(() => [
                        createVNode(_component_UiDialogTitle, null, {
                          default: withCtx(() => [
                            createTextVNode("\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0441\u0442\u0430\u0442\u044C\u044E")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UiDialogDescription)
                      ]),
                      _: 1
                    }),
                    (openBlock(), createBlock(_component_MySuppliesEdit, {
                      key: editingSupplie.value.id,
                      suppliers: suppliers.value,
                      supplie: editingSupplie.value,
                      "positions-list": positionsList.value,
                      onSupplieUpdated: async () => {
                        isOpen.value = false;
                        editingSupplie.value = blank;
                        await getSupplies();
                      }
                    }, null, 8, ["suppliers", "supplie", "positions-list", "onSupplieUpdated"])),
                    createVNode(_component_UiDialogFooter)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UiDialogTrigger),
              createVNode(_component_UiDialogContent, { class: "max-w-[1200px] flex flex-col" }, {
                default: withCtx(() => [
                  createVNode(_component_UiDialogHeader, null, {
                    default: withCtx(() => [
                      createVNode(_component_UiDialogTitle, null, {
                        default: withCtx(() => [
                          createTextVNode("\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0441\u0442\u0430\u0442\u044C\u044E")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_UiDialogDescription)
                    ]),
                    _: 1
                  }),
                  (openBlock(), createBlock(_component_MySuppliesEdit, {
                    key: editingSupplie.value.id,
                    suppliers: suppliers.value,
                    supplie: editingSupplie.value,
                    "positions-list": positionsList.value,
                    onSupplieUpdated: async () => {
                      isOpen.value = false;
                      editingSupplie.value = blank;
                      await getSupplies();
                    }
                  }, null, 8, ["suppliers", "supplie", "positions-list", "onSupplieUpdated"])),
                  createVNode(_component_UiDialogFooter)
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/my/supplies/Page.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "MastersReportsTable",
  __ssrInlineRender: true,
  props: {
    period: {},
    currentMaster: {}
  },
  emits: ["updated"],
  setup(__props, { emit: __emit }) {
    const authStore = useAuthStore();
    const { $useApi } = useNuxtApp();
    const { toast } = useToast();
    const props = __props;
    const curUser = authStore.user;
    const minDate = ref(/* @__PURE__ */ new Date(props.period + "-01"));
    const maxDate = ref(new Date(+props.period.split("-")[0], +props.period.split("-")[1], 0));
    const reports = ref([]);
    const originalReports = ref([]);
    const isLoading = ref(false);
    const error = ref(null);
    const isEditModalOpen = ref(false);
    const isEditRepairModalOpen = ref(false);
    const editingReport = ref(null);
    const editingRepairReport = ref(null);
    const isEditOtherModalOpen = ref(false);
    const editingOtherReport = ref(null);
    const date = ref();
    const range = ref([
      new Date(props.period).toISOString().slice(0, 10),
      new Date(+props.period.split("-")[0], +props.period.split("-")[1], 1).toISOString().slice(0, 10)
    ]);
    const totalCost = ref(0);
    const totalEls = ref(0);
    const sortTab = ref("all");
    const calcTotals = () => {
      totalCost.value = reports.value.reduce((a, b) => a + b.cost - b.penaltyCost, 0);
      totalEls.value = reports.value.reduce((a, b) => a + (b.isOther ? 0 : b.els), 0);
    };
    const getMasterReports = async () => {
      if (!props.currentMaster) return;
      try {
        isLoading.value = true;
        error.value = null;
        const from = new Date(range.value[0]).toISOString().slice(0, 10);
        const to = new Date(range.value[1]).toISOString().slice(0, 10);
        const { data } = await $useApi.get(`production/master/${props.currentMaster.id}/reports`, {
          params: { from, to }
        });
        reports.value = data;
        originalReports.value = data;
        sortReports(sortTab.value);
        calcTotals();
      } catch {
        error.value = "\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u043E\u0442\u0447\u0435\u0442\u044B";
        toast({
          title: "\u041E\u0448\u0438\u0431\u043A\u0430",
          description: error.value,
          variant: "destructive"
        });
      } finally {
        isLoading.value = false;
      }
    };
    const editReport = (report) => {
      if (report.isRepair) {
        editingRepairReport.value = { ...report };
        isEditRepairModalOpen.value = true;
      } else if (report.isOther) {
        editingOtherReport.value = { ...report };
        isEditOtherModalOpen.value = true;
      } else {
        editingReport.value = { ...report };
        isEditModalOpen.value = true;
      }
    };
    const handleReportUpdated = async () => {
      await getMasterReports();
      isEditModalOpen.value = false;
      isEditRepairModalOpen.value = false;
      isEditOtherModalOpen.value = false;
      editingReport.value = null;
      editingRepairReport.value = null;
      editingOtherReport.value = null;
    };
    const format2 = (date2) => {
      return "\u0420\u0430\u0431\u043E\u0447\u0438\u0445 \u0434\u043D\u0435\u0439: " + date2.length;
    };
    const formatRange = (date2) => {
      return "\u041F\u0435\u0440\u0438\u043E\u0434 \u0441 " + date2.map((d) => {
        const date3 = new Date(d).toISOString().slice(0, 10).split("-");
        const day = date3[2];
        const mounth = date3[1];
        const year = date3[0];
        return `${day}.${mounth}.${year}`;
      }).join(" \u043F\u043E ");
    };
    const emit = __emit;
    const saveMasterShifts = async () => {
      if (!props.currentMaster) return;
      try {
        const formattedDates = date.value ? date.value.map((d) => new Date(d).toISOString().slice(0, 10)) : [];
        await $useApi.post(`production/master/${props.currentMaster.id}/shifts`, {
          shiftDates: formattedDates,
          period: props.period
        });
        emit("updated");
        toast({
          title: "\u0423\u0441\u043F\u0435\u0445",
          description: "\u0421\u043C\u0435\u043D\u044B \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u044B"
        });
      } catch (e) {
        console.log(e);
        toast({
          title: "\u041E\u0448\u0438\u0431\u043A\u0430",
          description: "\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0441\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u0441\u043C\u0435\u043D\u044B",
          variant: "destructive"
        });
      }
    };
    const dateFormat2 = (date2) => {
      const d = new Date(date2);
      return `${d.getDate().toString().padStart(2, "0")}.${(d.getMonth() + 1).toString().padStart(2, "0")}.${d.getFullYear()}`;
    };
    watch(range, () => {
      getMasterReports();
    }, { deep: true });
    const sortReports = (val) => {
      if (val === "repairs") {
        reports.value = originalReports.value.filter((r) => r.isRepair === true);
        calcTotals();
        return;
      }
      if (val === "works") {
        reports.value = originalReports.value.filter((r) => r.isRepair !== true && r.isOther !== true);
        calcTotals();
        return;
      }
      if (val === "other") {
        reports.value = originalReports.value.filter((r) => r.isOther === true);
        calcTotals();
        return;
      }
      reports.value = originalReports.value;
    };
    watch(sortTab, (val) => {
      sortReports(val);
      calcTotals();
    }, { deep: true });
    return (_ctx, _push, _parent, _attrs) => {
      var _a2, _b2, _c2;
      var _a, _b, _c;
      const _component_UiTabs = _sfc_main$2$1;
      const _component_UiTabsList = _sfc_main$g;
      const _component_UiTabsTrigger = _sfc_main$1$1;
      const _component_UiScrollArea = _sfc_main$u;
      const _component_UiTable = _sfc_main$5$1;
      const _component_UiTableCaption = _sfc_main$6$1;
      const _component_UiTableHeader = _sfc_main$i;
      const _component_UiTableRow = _sfc_main$2$2;
      const _component_UiTableHead = _sfc_main$1$2;
      const _component_UiTableBody = _sfc_main$4$1;
      const _component_UiTableCell = _sfc_main$3$1;
      const _component_MyProductionEditMasterReport = _sfc_main$d;
      const _component_MyProductionEditMasterRepairReport = _sfc_main$c;
      const _component_MyProductionEditOtherReport = _sfc_main$b;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col gap-2" }, _attrs))}><div class="flex flex-col gap-2"><div class="flex items-center"><div class="w-full">`);
      _push(ssrRenderComponent(unref(Qn), {
        modelValue: range.value,
        "onUpdate:modelValue": ($event) => range.value = $event,
        range: "",
        "enable-time-picker": false,
        "min-date": minDate.value,
        "max-date": maxDate.value,
        "auto-apply": "",
        locale: "ru",
        placeholder: "\u0412\u044B\u0431\u0440\u0430\u0442\u044C \u0434\u043D\u0438",
        "select-text": "\u0413\u043E\u0442\u043E\u0432\u043E",
        "cancel-text": "\u0417\u0430\u043A\u0440\u044B\u0442\u044C",
        class: "grow",
        format: formatRange,
        clearable: false
      }, null, _parent));
      _push(`</div></div><div class="flex items-center"><div class="w-full">`);
      _push(ssrRenderComponent(unref(Qn), {
        modelValue: date.value,
        "onUpdate:modelValue": [($event) => date.value = $event, saveMasterShifts],
        "multi-dates": "",
        "enable-time-picker": false,
        locale: "ru",
        "min-date": minDate.value,
        "max-date": maxDate.value,
        "start-date": minDate.value,
        placeholder: "\u0412\u044B\u0431\u0440\u0430\u0442\u044C \u0441\u043C\u0435\u043D\u044B",
        "select-text": "\u0413\u043E\u0442\u043E\u0432\u043E",
        "cancel-text": "\u0417\u0430\u043A\u0440\u044B\u0442\u044C",
        format: format2,
        class: "grow",
        clearable: false
      }, null, _parent));
      _push(`</div></div><div class="flex flex-col gap-2">`);
      _push(ssrRenderComponent(_component_UiTabs, {
        modelValue: sortTab.value,
        "onUpdate:modelValue": ($event) => sortTab.value = $event
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UiTabsList, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UiTabsTrigger, { value: "all" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` \u0412\u0441\u0435 `);
                      } else {
                        return [
                          createTextVNode(" \u0412\u0441\u0435 ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UiTabsTrigger, { value: "works" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` \u0412\u044B\u0432\u0435\u0441\u043A\u0438 `);
                      } else {
                        return [
                          createTextVNode(" \u0412\u044B\u0432\u0435\u0441\u043A\u0438 ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UiTabsTrigger, { value: "repairs" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` \u0420\u0435\u043C\u043E\u043D\u0442\u044B `);
                      } else {
                        return [
                          createTextVNode(" \u0420\u0435\u043C\u043E\u043D\u0442\u044B ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UiTabsTrigger, { value: "other" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` \u0414\u0440\u0443\u0433\u043E\u0435 `);
                      } else {
                        return [
                          createTextVNode(" \u0414\u0440\u0443\u0433\u043E\u0435 ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UiTabsTrigger, { value: "all" }, {
                      default: withCtx(() => [
                        createTextVNode(" \u0412\u0441\u0435 ")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_UiTabsTrigger, { value: "works" }, {
                      default: withCtx(() => [
                        createTextVNode(" \u0412\u044B\u0432\u0435\u0441\u043A\u0438 ")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_UiTabsTrigger, { value: "repairs" }, {
                      default: withCtx(() => [
                        createTextVNode(" \u0420\u0435\u043C\u043E\u043D\u0442\u044B ")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_UiTabsTrigger, { value: "other" }, {
                      default: withCtx(() => [
                        createTextVNode(" \u0414\u0440\u0443\u0433\u043E\u0435 ")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UiTabsList, null, {
                default: withCtx(() => [
                  createVNode(_component_UiTabsTrigger, { value: "all" }, {
                    default: withCtx(() => [
                      createTextVNode(" \u0412\u0441\u0435 ")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_UiTabsTrigger, { value: "works" }, {
                    default: withCtx(() => [
                      createTextVNode(" \u0412\u044B\u0432\u0435\u0441\u043A\u0438 ")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_UiTabsTrigger, { value: "repairs" }, {
                    default: withCtx(() => [
                      createTextVNode(" \u0420\u0435\u043C\u043E\u043D\u0442\u044B ")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_UiTabsTrigger, { value: "other" }, {
                    default: withCtx(() => [
                      createTextVNode(" \u0414\u0440\u0443\u0433\u043E\u0435 ")
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
      }, _parent));
      _push(`<div class="w-full rounded-lg p-2 border border-slate-200 bg-white text-slate-950 shadow-sm dark:border-slate-800 dark:bg-slate-950 dark:text-slate-50"><div class="flex justify-between"><span> \u042D\u043B-\u0442\u044B: ${ssrInterpolate(totalEls.value)}</span><span> \u0421\u0443\u043C\u043C\u0430: ${ssrInterpolate(totalCost.value)}\u0440. </span></div></div></div></div>`);
      if (isLoading.value) {
        _push(`<div class="text-center">\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430...</div>`);
      } else if (error.value) {
        _push(`<div class="text-red-500 text-center">${ssrInterpolate(error.value)}</div>`);
      } else if (!props.currentMaster) {
        _push(`<div class="text-center"> \u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u043C\u0430\u0441\u0442\u0435\u0440\u0430 \u0434\u043B\u044F \u043E\u0442\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F \u043E\u0442\u0447\u0435\u0442\u043E\u0432. </div>`);
      } else if (reports.value.length === 0) {
        _push(`<div class="text-center"> \u041D\u0435\u0442 \u043E\u0442\u0447\u0435\u0442\u043E\u0432 \u0434\u043B\u044F \u0432\u044B\u0431\u0440\u0430\u043D\u043D\u043E\u0433\u043E \u043C\u0430\u0441\u0442\u0435\u0440\u0430. </div>`);
      } else {
        _push(`<div>`);
        _push(ssrRenderComponent(_component_UiScrollArea, { class: "h-[calc(100vh-270px)]" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_UiTable, { class: "bg-white rounded-sm" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UiTableCaption, null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        var _a22, _b22;
                        if (_push4) {
                          _push4(`\u041E\u0442\u0447\u0435\u0442\u044B \u043C\u0430\u0441\u0442\u0435\u0440\u0430: ${ssrInterpolate((_a22 = props.currentMaster) == null ? void 0 : _a22.fullName)}`);
                        } else {
                          return [
                            createTextVNode("\u041E\u0442\u0447\u0435\u0442\u044B \u043C\u0430\u0441\u0442\u0435\u0440\u0430: " + toDisplayString((_b22 = props.currentMaster) == null ? void 0 : _b22.fullName), 1)
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_UiTableHeader, null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_UiTableRow, null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_UiTableHead, null, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`\u0414\u0430\u0442\u0430`);
                                    } else {
                                      return [
                                        createTextVNode("\u0414\u0430\u0442\u0430")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                                _push5(ssrRenderComponent(_component_UiTableHead, { class: "text-center" }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435`);
                                    } else {
                                      return [
                                        createTextVNode("\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                                _push5(ssrRenderComponent(_component_UiTableHead, { class: "text-center" }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`\u0418\u043D\u0444\u043E`);
                                    } else {
                                      return [
                                        createTextVNode("\u0418\u043D\u0444\u043E")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                                _push5(ssrRenderComponent(_component_UiTableHead, { class: "text-center" }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C`);
                                    } else {
                                      return [
                                        createTextVNode("\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(_component_UiTableHead, null, {
                                    default: withCtx(() => [
                                      createTextVNode("\u0414\u0430\u0442\u0430")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_UiTableHead, { class: "text-center" }, {
                                    default: withCtx(() => [
                                      createTextVNode("\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_UiTableHead, { class: "text-center" }, {
                                    default: withCtx(() => [
                                      createTextVNode("\u0418\u043D\u0444\u043E")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_UiTableHead, { class: "text-center" }, {
                                    default: withCtx(() => [
                                      createTextVNode("\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C")
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
                            createVNode(_component_UiTableRow, null, {
                              default: withCtx(() => [
                                createVNode(_component_UiTableHead, null, {
                                  default: withCtx(() => [
                                    createTextVNode("\u0414\u0430\u0442\u0430")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_UiTableHead, { class: "text-center" }, {
                                  default: withCtx(() => [
                                    createTextVNode("\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_UiTableHead, { class: "text-center" }, {
                                  default: withCtx(() => [
                                    createTextVNode("\u0418\u043D\u0444\u043E")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_UiTableHead, { class: "text-center" }, {
                                  default: withCtx(() => [
                                    createTextVNode("\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C")
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
                    _push3(ssrRenderComponent(_component_UiTableBody, null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<!--[-->`);
                          ssrRenderList(reports.value, (report) => {
                            _push4(ssrRenderComponent(_component_UiTableRow, {
                              key: report.key,
                              class: {
                                "cursor-pointer hover:bg-gray-100": true,
                                "bg-blue-100/50": report.isRepair,
                                "bg-yellow-100/50": report.isOther,
                                "bg-red-100": report.penaltyCost > 0
                              },
                              onClick: ($event) => editReport(report)
                            }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(ssrRenderComponent(_component_UiTableCell, null, {
                                    default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        _push6(`<div class="flex items-center gap-2"${_scopeId5}><span${_scopeId5}>${ssrInterpolate(dateFormat2(report.date).slice(0, 5))}</span>`);
                                        if (report.comment) {
                                          _push6(ssrRenderComponent(unref(MessageCircle), null, null, _parent6, _scopeId5));
                                        } else {
                                          _push6(`<!---->`);
                                        }
                                        _push6(`</div>`);
                                      } else {
                                        return [
                                          createVNode("div", { class: "flex items-center gap-2" }, [
                                            createVNode("span", null, toDisplayString(dateFormat2(report.date).slice(0, 5)), 1),
                                            report.comment ? (openBlock(), createBlock(unref(MessageCircle), { key: 0 })) : createCommentVNode("", true)
                                          ])
                                        ];
                                      }
                                    }),
                                    _: 2
                                  }, _parent5, _scopeId4));
                                  _push5(ssrRenderComponent(_component_UiTableCell, { class: "text-center" }, {
                                    default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        if (report.name.startsWith("http")) {
                                          _push6(`<a${ssrRenderAttr("href", report.name)} target="_blank" class="text-blue-500 hover:underline"${_scopeId5}>\u041A\u0430\u0440\u0442\u043E\u0447\u043A\u0430 <br${_scopeId5}>(${ssrInterpolate(report.type)})</a>`);
                                        } else {
                                          _push6(`<span${_scopeId5}>${ssrInterpolate(report.name)}<br${_scopeId5}>(${ssrInterpolate(report.type)})</span>`);
                                        }
                                      } else {
                                        return [
                                          report.name.startsWith("http") ? (openBlock(), createBlock("a", {
                                            key: 0,
                                            href: report.name,
                                            target: "_blank",
                                            class: "text-blue-500 hover:underline",
                                            onClick: withModifiers(() => {
                                            }, ["stop"])
                                          }, [
                                            createTextVNode("\u041A\u0430\u0440\u0442\u043E\u0447\u043A\u0430 "),
                                            createVNode("br"),
                                            createTextVNode("(" + toDisplayString(report.type) + ")", 1)
                                          ], 8, ["href", "onClick"])) : (openBlock(), createBlock("span", { key: 1 }, [
                                            createTextVNode(toDisplayString(report.name), 1),
                                            createVNode("br"),
                                            createTextVNode("(" + toDisplayString(report.type) + ")", 1)
                                          ]))
                                        ];
                                      }
                                    }),
                                    _: 2
                                  }, _parent5, _scopeId4));
                                  _push5(ssrRenderComponent(_component_UiTableCell, { class: "text-center" }, {
                                    default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        if (report.isRepair) {
                                          _push6(`<span${_scopeId5}> \u0420\u0435\u043C\u043E\u043D\u0442 </span>`);
                                        } else if (report.isOther) {
                                          _push6(`<span${_scopeId5}> \u0414\u0440\u0443\u0433\u043E\u0435 </span>`);
                                        } else {
                                          _push6(`<div class="flex flex-col"${_scopeId5}><span${_scopeId5}>${ssrInterpolate(report.metrs)}\u043C. </span><span${_scopeId5}>${ssrInterpolate(report.els)}\u044D\u043B. </span></div>`);
                                        }
                                      } else {
                                        return [
                                          report.isRepair ? (openBlock(), createBlock("span", { key: 0 }, " \u0420\u0435\u043C\u043E\u043D\u0442 ")) : report.isOther ? (openBlock(), createBlock("span", { key: 1 }, " \u0414\u0440\u0443\u0433\u043E\u0435 ")) : (openBlock(), createBlock("div", {
                                            key: 2,
                                            class: "flex flex-col"
                                          }, [
                                            createVNode("span", null, toDisplayString(report.metrs) + "\u043C. ", 1),
                                            createVNode("span", null, toDisplayString(report.els) + "\u044D\u043B. ", 1)
                                          ]))
                                        ];
                                      }
                                    }),
                                    _: 2
                                  }, _parent5, _scopeId4));
                                  _push5(ssrRenderComponent(_component_UiTableCell, { class: "text-center" }, {
                                    default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        _push6(`<div class="flex flex-col"${_scopeId5}><span class="font-semibold text-green-600"${_scopeId5}>+${ssrInterpolate(report.cost)}\u0440.</span>`);
                                        if (report.penaltyCost) {
                                          _push6(`<span class="font-semibold text-red-500"${_scopeId5}>${ssrInterpolate(" -" + report.penaltyCost)}\u0440.</span>`);
                                        } else {
                                          _push6(`<!---->`);
                                        }
                                        _push6(`</div>`);
                                      } else {
                                        return [
                                          createVNode("div", { class: "flex flex-col" }, [
                                            createVNode("span", { class: "font-semibold text-green-600" }, "+" + toDisplayString(report.cost) + "\u0440.", 1),
                                            report.penaltyCost ? (openBlock(), createBlock("span", {
                                              key: 0,
                                              class: "font-semibold text-red-500"
                                            }, toDisplayString(" -" + report.penaltyCost) + "\u0440.", 1)) : createCommentVNode("", true)
                                          ])
                                        ];
                                      }
                                    }),
                                    _: 2
                                  }, _parent5, _scopeId4));
                                } else {
                                  return [
                                    createVNode(_component_UiTableCell, null, {
                                      default: withCtx(() => [
                                        createVNode("div", { class: "flex items-center gap-2" }, [
                                          createVNode("span", null, toDisplayString(dateFormat2(report.date).slice(0, 5)), 1),
                                          report.comment ? (openBlock(), createBlock(unref(MessageCircle), { key: 0 })) : createCommentVNode("", true)
                                        ])
                                      ]),
                                      _: 2
                                    }, 1024),
                                    createVNode(_component_UiTableCell, { class: "text-center" }, {
                                      default: withCtx(() => [
                                        report.name.startsWith("http") ? (openBlock(), createBlock("a", {
                                          key: 0,
                                          href: report.name,
                                          target: "_blank",
                                          class: "text-blue-500 hover:underline",
                                          onClick: withModifiers(() => {
                                          }, ["stop"])
                                        }, [
                                          createTextVNode("\u041A\u0430\u0440\u0442\u043E\u0447\u043A\u0430 "),
                                          createVNode("br"),
                                          createTextVNode("(" + toDisplayString(report.type) + ")", 1)
                                        ], 8, ["href", "onClick"])) : (openBlock(), createBlock("span", { key: 1 }, [
                                          createTextVNode(toDisplayString(report.name), 1),
                                          createVNode("br"),
                                          createTextVNode("(" + toDisplayString(report.type) + ")", 1)
                                        ]))
                                      ]),
                                      _: 2
                                    }, 1024),
                                    createVNode(_component_UiTableCell, { class: "text-center" }, {
                                      default: withCtx(() => [
                                        report.isRepair ? (openBlock(), createBlock("span", { key: 0 }, " \u0420\u0435\u043C\u043E\u043D\u0442 ")) : report.isOther ? (openBlock(), createBlock("span", { key: 1 }, " \u0414\u0440\u0443\u0433\u043E\u0435 ")) : (openBlock(), createBlock("div", {
                                          key: 2,
                                          class: "flex flex-col"
                                        }, [
                                          createVNode("span", null, toDisplayString(report.metrs) + "\u043C. ", 1),
                                          createVNode("span", null, toDisplayString(report.els) + "\u044D\u043B. ", 1)
                                        ]))
                                      ]),
                                      _: 2
                                    }, 1024),
                                    createVNode(_component_UiTableCell, { class: "text-center" }, {
                                      default: withCtx(() => [
                                        createVNode("div", { class: "flex flex-col" }, [
                                          createVNode("span", { class: "font-semibold text-green-600" }, "+" + toDisplayString(report.cost) + "\u0440.", 1),
                                          report.penaltyCost ? (openBlock(), createBlock("span", {
                                            key: 0,
                                            class: "font-semibold text-red-500"
                                          }, toDisplayString(" -" + report.penaltyCost) + "\u0440.", 1)) : createCommentVNode("", true)
                                        ])
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                          });
                          _push4(`<!--]-->`);
                        } else {
                          return [
                            (openBlock(true), createBlock(Fragment, null, renderList(reports.value, (report) => {
                              return openBlock(), createBlock(_component_UiTableRow, {
                                key: report.key,
                                class: {
                                  "cursor-pointer hover:bg-gray-100": true,
                                  "bg-blue-100/50": report.isRepair,
                                  "bg-yellow-100/50": report.isOther,
                                  "bg-red-100": report.penaltyCost > 0
                                },
                                onClick: ($event) => editReport(report)
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_UiTableCell, null, {
                                    default: withCtx(() => [
                                      createVNode("div", { class: "flex items-center gap-2" }, [
                                        createVNode("span", null, toDisplayString(dateFormat2(report.date).slice(0, 5)), 1),
                                        report.comment ? (openBlock(), createBlock(unref(MessageCircle), { key: 0 })) : createCommentVNode("", true)
                                      ])
                                    ]),
                                    _: 2
                                  }, 1024),
                                  createVNode(_component_UiTableCell, { class: "text-center" }, {
                                    default: withCtx(() => [
                                      report.name.startsWith("http") ? (openBlock(), createBlock("a", {
                                        key: 0,
                                        href: report.name,
                                        target: "_blank",
                                        class: "text-blue-500 hover:underline",
                                        onClick: withModifiers(() => {
                                        }, ["stop"])
                                      }, [
                                        createTextVNode("\u041A\u0430\u0440\u0442\u043E\u0447\u043A\u0430 "),
                                        createVNode("br"),
                                        createTextVNode("(" + toDisplayString(report.type) + ")", 1)
                                      ], 8, ["href", "onClick"])) : (openBlock(), createBlock("span", { key: 1 }, [
                                        createTextVNode(toDisplayString(report.name), 1),
                                        createVNode("br"),
                                        createTextVNode("(" + toDisplayString(report.type) + ")", 1)
                                      ]))
                                    ]),
                                    _: 2
                                  }, 1024),
                                  createVNode(_component_UiTableCell, { class: "text-center" }, {
                                    default: withCtx(() => [
                                      report.isRepair ? (openBlock(), createBlock("span", { key: 0 }, " \u0420\u0435\u043C\u043E\u043D\u0442 ")) : report.isOther ? (openBlock(), createBlock("span", { key: 1 }, " \u0414\u0440\u0443\u0433\u043E\u0435 ")) : (openBlock(), createBlock("div", {
                                        key: 2,
                                        class: "flex flex-col"
                                      }, [
                                        createVNode("span", null, toDisplayString(report.metrs) + "\u043C. ", 1),
                                        createVNode("span", null, toDisplayString(report.els) + "\u044D\u043B. ", 1)
                                      ]))
                                    ]),
                                    _: 2
                                  }, 1024),
                                  createVNode(_component_UiTableCell, { class: "text-center" }, {
                                    default: withCtx(() => [
                                      createVNode("div", { class: "flex flex-col" }, [
                                        createVNode("span", { class: "font-semibold text-green-600" }, "+" + toDisplayString(report.cost) + "\u0440.", 1),
                                        report.penaltyCost ? (openBlock(), createBlock("span", {
                                          key: 0,
                                          class: "font-semibold text-red-500"
                                        }, toDisplayString(" -" + report.penaltyCost) + "\u0440.", 1)) : createCommentVNode("", true)
                                      ])
                                    ]),
                                    _: 2
                                  }, 1024)
                                ]),
                                _: 2
                              }, 1032, ["class", "onClick"]);
                            }), 128))
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_UiTableCaption, null, {
                        default: withCtx(() => {
                          var _a22;
                          return [
                            createTextVNode("\u041E\u0442\u0447\u0435\u0442\u044B \u043C\u0430\u0441\u0442\u0435\u0440\u0430: " + toDisplayString((_a22 = props.currentMaster) == null ? void 0 : _a22.fullName), 1)
                          ];
                        }),
                        _: 1
                      }),
                      createVNode(_component_UiTableHeader, null, {
                        default: withCtx(() => [
                          createVNode(_component_UiTableRow, null, {
                            default: withCtx(() => [
                              createVNode(_component_UiTableHead, null, {
                                default: withCtx(() => [
                                  createTextVNode("\u0414\u0430\u0442\u0430")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_UiTableHead, { class: "text-center" }, {
                                default: withCtx(() => [
                                  createTextVNode("\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_UiTableHead, { class: "text-center" }, {
                                default: withCtx(() => [
                                  createTextVNode("\u0418\u043D\u0444\u043E")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_UiTableHead, { class: "text-center" }, {
                                default: withCtx(() => [
                                  createTextVNode("\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_UiTableBody, null, {
                        default: withCtx(() => [
                          (openBlock(true), createBlock(Fragment, null, renderList(reports.value, (report) => {
                            return openBlock(), createBlock(_component_UiTableRow, {
                              key: report.key,
                              class: {
                                "cursor-pointer hover:bg-gray-100": true,
                                "bg-blue-100/50": report.isRepair,
                                "bg-yellow-100/50": report.isOther,
                                "bg-red-100": report.penaltyCost > 0
                              },
                              onClick: ($event) => editReport(report)
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_UiTableCell, null, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "flex items-center gap-2" }, [
                                      createVNode("span", null, toDisplayString(dateFormat2(report.date).slice(0, 5)), 1),
                                      report.comment ? (openBlock(), createBlock(unref(MessageCircle), { key: 0 })) : createCommentVNode("", true)
                                    ])
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode(_component_UiTableCell, { class: "text-center" }, {
                                  default: withCtx(() => [
                                    report.name.startsWith("http") ? (openBlock(), createBlock("a", {
                                      key: 0,
                                      href: report.name,
                                      target: "_blank",
                                      class: "text-blue-500 hover:underline",
                                      onClick: withModifiers(() => {
                                      }, ["stop"])
                                    }, [
                                      createTextVNode("\u041A\u0430\u0440\u0442\u043E\u0447\u043A\u0430 "),
                                      createVNode("br"),
                                      createTextVNode("(" + toDisplayString(report.type) + ")", 1)
                                    ], 8, ["href", "onClick"])) : (openBlock(), createBlock("span", { key: 1 }, [
                                      createTextVNode(toDisplayString(report.name), 1),
                                      createVNode("br"),
                                      createTextVNode("(" + toDisplayString(report.type) + ")", 1)
                                    ]))
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode(_component_UiTableCell, { class: "text-center" }, {
                                  default: withCtx(() => [
                                    report.isRepair ? (openBlock(), createBlock("span", { key: 0 }, " \u0420\u0435\u043C\u043E\u043D\u0442 ")) : report.isOther ? (openBlock(), createBlock("span", { key: 1 }, " \u0414\u0440\u0443\u0433\u043E\u0435 ")) : (openBlock(), createBlock("div", {
                                      key: 2,
                                      class: "flex flex-col"
                                    }, [
                                      createVNode("span", null, toDisplayString(report.metrs) + "\u043C. ", 1),
                                      createVNode("span", null, toDisplayString(report.els) + "\u044D\u043B. ", 1)
                                    ]))
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode(_component_UiTableCell, { class: "text-center" }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "flex flex-col" }, [
                                      createVNode("span", { class: "font-semibold text-green-600" }, "+" + toDisplayString(report.cost) + "\u0440.", 1),
                                      report.penaltyCost ? (openBlock(), createBlock("span", {
                                        key: 0,
                                        class: "font-semibold text-red-500"
                                      }, toDisplayString(" -" + report.penaltyCost) + "\u0440.", 1)) : createCommentVNode("", true)
                                    ])
                                  ]),
                                  _: 2
                                }, 1024)
                              ]),
                              _: 2
                            }, 1032, ["class", "onClick"]);
                          }), 128))
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_UiTable, { class: "bg-white rounded-sm" }, {
                  default: withCtx(() => [
                    createVNode(_component_UiTableCaption, null, {
                      default: withCtx(() => {
                        var _a22;
                        return [
                          createTextVNode("\u041E\u0442\u0447\u0435\u0442\u044B \u043C\u0430\u0441\u0442\u0435\u0440\u0430: " + toDisplayString((_a22 = props.currentMaster) == null ? void 0 : _a22.fullName), 1)
                        ];
                      }),
                      _: 1
                    }),
                    createVNode(_component_UiTableHeader, null, {
                      default: withCtx(() => [
                        createVNode(_component_UiTableRow, null, {
                          default: withCtx(() => [
                            createVNode(_component_UiTableHead, null, {
                              default: withCtx(() => [
                                createTextVNode("\u0414\u0430\u0442\u0430")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_UiTableHead, { class: "text-center" }, {
                              default: withCtx(() => [
                                createTextVNode("\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_UiTableHead, { class: "text-center" }, {
                              default: withCtx(() => [
                                createTextVNode("\u0418\u043D\u0444\u043E")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_UiTableHead, { class: "text-center" }, {
                              default: withCtx(() => [
                                createTextVNode("\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_UiTableBody, null, {
                      default: withCtx(() => [
                        (openBlock(true), createBlock(Fragment, null, renderList(reports.value, (report) => {
                          return openBlock(), createBlock(_component_UiTableRow, {
                            key: report.key,
                            class: {
                              "cursor-pointer hover:bg-gray-100": true,
                              "bg-blue-100/50": report.isRepair,
                              "bg-yellow-100/50": report.isOther,
                              "bg-red-100": report.penaltyCost > 0
                            },
                            onClick: ($event) => editReport(report)
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_UiTableCell, null, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "flex items-center gap-2" }, [
                                    createVNode("span", null, toDisplayString(dateFormat2(report.date).slice(0, 5)), 1),
                                    report.comment ? (openBlock(), createBlock(unref(MessageCircle), { key: 0 })) : createCommentVNode("", true)
                                  ])
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(_component_UiTableCell, { class: "text-center" }, {
                                default: withCtx(() => [
                                  report.name.startsWith("http") ? (openBlock(), createBlock("a", {
                                    key: 0,
                                    href: report.name,
                                    target: "_blank",
                                    class: "text-blue-500 hover:underline",
                                    onClick: withModifiers(() => {
                                    }, ["stop"])
                                  }, [
                                    createTextVNode("\u041A\u0430\u0440\u0442\u043E\u0447\u043A\u0430 "),
                                    createVNode("br"),
                                    createTextVNode("(" + toDisplayString(report.type) + ")", 1)
                                  ], 8, ["href", "onClick"])) : (openBlock(), createBlock("span", { key: 1 }, [
                                    createTextVNode(toDisplayString(report.name), 1),
                                    createVNode("br"),
                                    createTextVNode("(" + toDisplayString(report.type) + ")", 1)
                                  ]))
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(_component_UiTableCell, { class: "text-center" }, {
                                default: withCtx(() => [
                                  report.isRepair ? (openBlock(), createBlock("span", { key: 0 }, " \u0420\u0435\u043C\u043E\u043D\u0442 ")) : report.isOther ? (openBlock(), createBlock("span", { key: 1 }, " \u0414\u0440\u0443\u0433\u043E\u0435 ")) : (openBlock(), createBlock("div", {
                                    key: 2,
                                    class: "flex flex-col"
                                  }, [
                                    createVNode("span", null, toDisplayString(report.metrs) + "\u043C. ", 1),
                                    createVNode("span", null, toDisplayString(report.els) + "\u044D\u043B. ", 1)
                                  ]))
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(_component_UiTableCell, { class: "text-center" }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "flex flex-col" }, [
                                    createVNode("span", { class: "font-semibold text-green-600" }, "+" + toDisplayString(report.cost) + "\u0440.", 1),
                                    report.penaltyCost ? (openBlock(), createBlock("span", {
                                      key: 0,
                                      class: "font-semibold text-red-500"
                                    }, toDisplayString(" -" + report.penaltyCost) + "\u0440.", 1)) : createCommentVNode("", true)
                                  ])
                                ]),
                                _: 2
                              }, 1024)
                            ]),
                            _: 2
                          }, 1032, ["class", "onClick"]);
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
        }, _parent));
        _push(`</div>`);
      }
      if (isEditModalOpen.value && editingReport.value) {
        _push(ssrRenderComponent(_component_MyProductionEditMasterReport, {
          class: "z-[10000]",
          report: editingReport.value,
          "cur-user": unref(curUser),
          "master-id": (_a2 = (_a = props.currentMaster) == null ? void 0 : _a.id) != null ? _a2 : 0,
          onReportUpdated: handleReportUpdated,
          onClose: ($event) => isEditModalOpen.value = false
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (isEditRepairModalOpen.value && editingRepairReport.value) {
        _push(ssrRenderComponent(_component_MyProductionEditMasterRepairReport, {
          class: "z-[10000]",
          report: editingRepairReport.value,
          "master-id": (_b2 = (_b = props.currentMaster) == null ? void 0 : _b.id) != null ? _b2 : 0,
          onReportUpdated: handleReportUpdated,
          onClose: ($event) => isEditRepairModalOpen.value = false
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (isEditOtherModalOpen.value && editingOtherReport.value) {
        _push(ssrRenderComponent(_component_MyProductionEditOtherReport, {
          class: "z-[10000]",
          report: editingOtherReport.value,
          "master-id": (_c2 = (_c = props.currentMaster) == null ? void 0 : _c.id) != null ? _c2 : 0,
          onReportUpdated: handleReportUpdated,
          onClose: ($event) => isEditOtherModalOpen.value = false
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/my/production/MastersReportsTable.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "Stat",
  __ssrInlineRender: true,
  props: {
    period: {}
  },
  setup(__props) {
    const { $useApi } = useNuxtApp();
    const { toast } = useToast();
    const props = __props;
    const period = ref(props.period);
    const isLoading = ref(false);
    const error = ref(null);
    const statData = ref(null);
    const isSheetOpen = ref(false);
    const getDatas = async () => {
      try {
        isLoading.value = true;
        error.value = null;
        const { data } = await $useApi.get("production/stat", {
          params: {
            period: period.value
          }
        });
        statData.value = data;
      } catch (e) {
        error.value = "\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u0441\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043A\u0443";
        toast({
          title: "\u041E\u0448\u0438\u0431\u043A\u0430",
          description: error.value,
          variant: "destructive"
        });
      } finally {
        isLoading.value = false;
      }
    };
    const curMaster = ref();
    const getMasterReports = async (master) => {
      curMaster.value = master;
      isSheetOpen.value = true;
    };
    const formatDate = (date) => {
      const parsedDate = new Date(date);
      const day = format(parsedDate, "dd", { locale: ru });
      const weekday = format(parsedDate, "EEEEEE", { locale: ru });
      return `${day} (${weekday})`;
    };
    const isWeekend = (date) => {
      const parsedDate = new Date(date);
      const dayOfWeek = parsedDate.getDay();
      return dayOfWeek === 0 || dayOfWeek === 6;
    };
    const totalShifts = computed(() => {
      if (!statData.value) return 0;
      return Object.values(statData.value.shiftsSumByDate).reduce((sum, count) => sum + count, 0);
    });
    const totalRegularEls = computed(() => {
      if (!statData.value) return 0;
      return Object.values(statData.value.regularElsSumByDate).reduce((sum, count) => sum + count, 0);
    });
    const totalSpecialEls = computed(() => {
      if (!statData.value) return 0;
      return Object.values(statData.value.specialElsSumByDate).reduce((sum, count) => sum + count, 0);
    });
    watch(period, () => {
      getDatas();
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiSheet = _sfc_main$5$2;
      const _component_UiSheetTrigger = _sfc_main$4$3;
      const _component_UiSheetContent = _sfc_main$3$4;
      const _component_UiSheetHeader = _sfc_main$2$6;
      const _component_UiSheetTitle = _sfc_main$1$6;
      const _component_UiSheetDescription = _sfc_main$p;
      const _component_MyProductionMastersReportsTable = _sfc_main$8;
      const _component_UiCard = _sfc_main$3$2;
      const _component_UiTable = _sfc_main$5$1;
      const _component_UiTableCaption = _sfc_main$6$1;
      const _component_UiTableHeader = _sfc_main$i;
      const _component_UiTableRow = _sfc_main$2$2;
      const _component_UiTableHead = _sfc_main$1$2;
      const _component_UiTableBody = _sfc_main$4$1;
      const _component_UiTableCell = _sfc_main$3$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col gap-2" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_UiSheet, {
        open: isSheetOpen.value,
        "onUpdate:open": ($event) => isSheetOpen.value = $event
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UiSheetTrigger, { class: "hidden" }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UiSheetContent, { class: "p-0 min-w-[500px]" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                var _a, _b;
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UiSheetHeader, { class: "hidden" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UiSheetTitle, null, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_UiSheetDescription, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_UiSheetTitle),
                          createVNode(_component_UiSheetDescription)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<div class="px-2"${_scopeId2}><div class="text-xl font-semibold py-2"${_scopeId2}>${ssrInterpolate((_a = curMaster.value) == null ? void 0 : _a.fullName)}</div>`);
                  if (curMaster.value) {
                    _push3(ssrRenderComponent(_component_MyProductionMastersReportsTable, {
                      key: curMaster.value.id,
                      period: period.value,
                      "current-master": curMaster.value,
                      onUpdated: getDatas
                    }, null, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode(_component_UiSheetHeader, { class: "hidden" }, {
                      default: withCtx(() => [
                        createVNode(_component_UiSheetTitle),
                        createVNode(_component_UiSheetDescription)
                      ]),
                      _: 1
                    }),
                    createVNode("div", { class: "px-2" }, [
                      createVNode("div", { class: "text-xl font-semibold py-2" }, toDisplayString((_b = curMaster.value) == null ? void 0 : _b.fullName), 1),
                      curMaster.value ? (openBlock(), createBlock(_component_MyProductionMastersReportsTable, {
                        key: curMaster.value.id,
                        period: period.value,
                        "current-master": curMaster.value,
                        onUpdated: getDatas
                      }, null, 8, ["period", "current-master"])) : createCommentVNode("", true)
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UiSheetTrigger, { class: "hidden" }),
              createVNode(_component_UiSheetContent, { class: "p-0 min-w-[500px]" }, {
                default: withCtx(() => {
                  var _a;
                  return [
                    createVNode(_component_UiSheetHeader, { class: "hidden" }, {
                      default: withCtx(() => [
                        createVNode(_component_UiSheetTitle),
                        createVNode(_component_UiSheetDescription)
                      ]),
                      _: 1
                    }),
                    createVNode("div", { class: "px-2" }, [
                      createVNode("div", { class: "text-xl font-semibold py-2" }, toDisplayString((_a = curMaster.value) == null ? void 0 : _a.fullName), 1),
                      curMaster.value ? (openBlock(), createBlock(_component_MyProductionMastersReportsTable, {
                        key: curMaster.value.id,
                        period: period.value,
                        "current-master": curMaster.value,
                        onUpdated: getDatas
                      }, null, 8, ["period", "current-master"])) : createCommentVNode("", true)
                    ])
                  ];
                }),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      if (isLoading.value) {
        _push(`<div class="text-center">\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430...</div>`);
      } else if (error.value) {
        _push(`<div class="text-red-500 text-center">${ssrInterpolate(error.value)}</div>`);
      } else if (!statData.value || statData.value.masters.length === 0) {
        _push(`<div class="text-center"> \u041D\u0435\u0442 \u0434\u0430\u043D\u043D\u044B\u0445 \u0437\u0430 \u0432\u044B\u0431\u0440\u0430\u043D\u043D\u044B\u0439 \u043F\u0435\u0440\u0438\u043E\u0434 </div>`);
      } else {
        _push(`<div>`);
        _push(ssrRenderComponent(_component_UiCard, { class: "mb-4 p-4 bg-white rounded-sm shadow-sm" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="flex flex-col sm:flex-row gap-4"${_scopeId}><div class="flex-1"${_scopeId}><h3 class="text-sm font-semibold text-gray-700"${_scopeId}> \u041E\u0431\u0449\u0435\u0435 \u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u0441\u043C\u0435\u043D </h3><p class="text-lg font-bold text-green-600"${_scopeId}>${ssrInterpolate(totalShifts.value)}</p></div><div class="flex-1"${_scopeId}><h3 class="text-sm font-semibold text-gray-700"${_scopeId}> \u041E\u0431\u0449\u0435\u0435 \u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u043E\u0431\u044B\u0447\u043D\u044B\u0445 \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u043E\u0432 </h3><p class="text-lg font-bold text-blue-600"${_scopeId}>${ssrInterpolate(totalRegularEls.value)}</p></div><div class="flex-1"${_scopeId}><h3 class="text-sm font-semibold text-gray-700"${_scopeId}> \u041E\u0431\u0449\u0435\u0435 \u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u0441\u043F\u0435\u0446\u0438\u0430\u043B\u044C\u043D\u044B\u0445 \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u043E\u0432 </h3><p class="text-lg font-bold text-blue-600"${_scopeId}>${ssrInterpolate(totalSpecialEls.value)}</p></div></div>`);
            } else {
              return [
                createVNode("div", { class: "flex flex-col sm:flex-row gap-4" }, [
                  createVNode("div", { class: "flex-1" }, [
                    createVNode("h3", { class: "text-sm font-semibold text-gray-700" }, " \u041E\u0431\u0449\u0435\u0435 \u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u0441\u043C\u0435\u043D "),
                    createVNode("p", { class: "text-lg font-bold text-green-600" }, toDisplayString(totalShifts.value), 1)
                  ]),
                  createVNode("div", { class: "flex-1" }, [
                    createVNode("h3", { class: "text-sm font-semibold text-gray-700" }, " \u041E\u0431\u0449\u0435\u0435 \u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u043E\u0431\u044B\u0447\u043D\u044B\u0445 \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u043E\u0432 "),
                    createVNode("p", { class: "text-lg font-bold text-blue-600" }, toDisplayString(totalRegularEls.value), 1)
                  ]),
                  createVNode("div", { class: "flex-1" }, [
                    createVNode("h3", { class: "text-sm font-semibold text-gray-700" }, " \u041E\u0431\u0449\u0435\u0435 \u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u0441\u043F\u0435\u0446\u0438\u0430\u043B\u044C\u043D\u044B\u0445 \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u043E\u0432 "),
                    createVNode("p", { class: "text-lg font-bold text-blue-600" }, toDisplayString(totalSpecialEls.value), 1)
                  ])
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<div class="overflow-x-auto">`);
        _push(ssrRenderComponent(_component_UiTable, { class: "bg-white rounded-sm text-xs w-full" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_UiTableCaption, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043A\u0430 \u043C\u0430\u0441\u0442\u0435\u0440\u043E\u0432 \u0437\u0430 ${ssrInterpolate(period.value)}`);
                  } else {
                    return [
                      createTextVNode("\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043A\u0430 \u043C\u0430\u0441\u0442\u0435\u0440\u043E\u0432 \u0437\u0430 " + toDisplayString(period.value), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UiTableHeader, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UiTableRow, null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_UiTableHead, { class: "p-2 sticky left-0 bg-gray-300 font-bold border border-black/50" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`\u041C\u0430\u0441\u0442\u0435\u0440 (\u0420\u0435\u0439\u0442\u0438\u043D\u0433)`);
                              } else {
                                return [
                                  createTextVNode("\u041C\u0430\u0441\u0442\u0435\u0440 (\u0420\u0435\u0439\u0442\u0438\u043D\u0433)")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(`<!--[-->`);
                          ssrRenderList(statData.value.dates, (date, index) => {
                            _push4(ssrRenderComponent(_component_UiTableHead, {
                              key: date,
                              class: "p-1 text-center bg-gray-300 border border-black/50"
                            }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`${ssrInterpolate(formatDate(date).split(" ")[0])}<br${_scopeId4}> ${ssrInterpolate(formatDate(date).split(" ")[1])}`);
                                } else {
                                  return [
                                    createTextVNode(toDisplayString(formatDate(date).split(" ")[0]), 1),
                                    createVNode("br"),
                                    createTextVNode(" " + toDisplayString(formatDate(date).split(" ")[1]), 1)
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                          });
                          _push4(`<!--]-->`);
                        } else {
                          return [
                            createVNode(_component_UiTableHead, { class: "p-2 sticky left-0 bg-gray-300 font-bold border border-black/50" }, {
                              default: withCtx(() => [
                                createTextVNode("\u041C\u0430\u0441\u0442\u0435\u0440 (\u0420\u0435\u0439\u0442\u0438\u043D\u0433)")
                              ]),
                              _: 1
                            }),
                            (openBlock(true), createBlock(Fragment, null, renderList(statData.value.dates, (date, index) => {
                              return openBlock(), createBlock(_component_UiTableHead, {
                                key: date,
                                class: "p-1 text-center bg-gray-300 border border-black/50"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(formatDate(date).split(" ")[0]), 1),
                                  createVNode("br"),
                                  createTextVNode(" " + toDisplayString(formatDate(date).split(" ")[1]), 1)
                                ]),
                                _: 2
                              }, 1024);
                            }), 128))
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_UiTableRow, null, {
                        default: withCtx(() => [
                          createVNode(_component_UiTableHead, { class: "p-2 sticky left-0 bg-gray-300 font-bold border border-black/50" }, {
                            default: withCtx(() => [
                              createTextVNode("\u041C\u0430\u0441\u0442\u0435\u0440 (\u0420\u0435\u0439\u0442\u0438\u043D\u0433)")
                            ]),
                            _: 1
                          }),
                          (openBlock(true), createBlock(Fragment, null, renderList(statData.value.dates, (date, index) => {
                            return openBlock(), createBlock(_component_UiTableHead, {
                              key: date,
                              class: "p-1 text-center bg-gray-300 border border-black/50"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(formatDate(date).split(" ")[0]), 1),
                                createVNode("br"),
                                createTextVNode(" " + toDisplayString(formatDate(date).split(" ")[1]), 1)
                              ]),
                              _: 2
                            }, 1024);
                          }), 128))
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UiTableBody, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UiTableRow, null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_UiTableCell, { class: "p-2 sticky left-0 bg-gray-300 font-semibold border border-black/50" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`\u0421\u043C\u0435\u043D\u044B`);
                              } else {
                                return [
                                  createTextVNode("\u0421\u043C\u0435\u043D\u044B")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(`<!--[-->`);
                          ssrRenderList(statData.value.dates, (date, index) => {
                            _push4(ssrRenderComponent(_component_UiTableCell, {
                              key: date,
                              class: "p-1 text-center bg-green-500/50 border border-black/50"
                            }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`${ssrInterpolate(statData.value.shiftsSumByDate[date] || 0)}`);
                                } else {
                                  return [
                                    createTextVNode(toDisplayString(statData.value.shiftsSumByDate[date] || 0), 1)
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                          });
                          _push4(`<!--]-->`);
                        } else {
                          return [
                            createVNode(_component_UiTableCell, { class: "p-2 sticky left-0 bg-gray-300 font-semibold border border-black/50" }, {
                              default: withCtx(() => [
                                createTextVNode("\u0421\u043C\u0435\u043D\u044B")
                              ]),
                              _: 1
                            }),
                            (openBlock(true), createBlock(Fragment, null, renderList(statData.value.dates, (date, index) => {
                              return openBlock(), createBlock(_component_UiTableCell, {
                                key: date,
                                class: "p-1 text-center bg-green-500/50 border border-black/50"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(statData.value.shiftsSumByDate[date] || 0), 1)
                                ]),
                                _: 2
                              }, 1024);
                            }), 128))
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_UiTableRow, null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_UiTableCell, { class: "p-2 sticky left-0 bg-gray-300 font-semibold border border-black/50" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`\u042D\u043B\u0435\u043C\u0435\u043D\u0442\u044B`);
                              } else {
                                return [
                                  createTextVNode("\u042D\u043B\u0435\u043C\u0435\u043D\u0442\u044B")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(`<!--[-->`);
                          ssrRenderList(statData.value.dates, (date, index) => {
                            _push4(ssrRenderComponent(_component_UiTableCell, {
                              key: date,
                              class: "p-1 text-center bg-gray-300/50 border border-black/50"
                            }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`${ssrInterpolate(statData.value.regularElsSumByDate[date] || 0)} / ${ssrInterpolate(statData.value.specialElsSumByDate[date] || 0)}`);
                                } else {
                                  return [
                                    createTextVNode(toDisplayString(statData.value.regularElsSumByDate[date] || 0) + " / " + toDisplayString(statData.value.specialElsSumByDate[date] || 0), 1)
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                          });
                          _push4(`<!--]-->`);
                        } else {
                          return [
                            createVNode(_component_UiTableCell, { class: "p-2 sticky left-0 bg-gray-300 font-semibold border border-black/50" }, {
                              default: withCtx(() => [
                                createTextVNode("\u042D\u043B\u0435\u043C\u0435\u043D\u0442\u044B")
                              ]),
                              _: 1
                            }),
                            (openBlock(true), createBlock(Fragment, null, renderList(statData.value.dates, (date, index) => {
                              return openBlock(), createBlock(_component_UiTableCell, {
                                key: date,
                                class: "p-1 text-center bg-gray-300/50 border border-black/50"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(statData.value.regularElsSumByDate[date] || 0) + " / " + toDisplayString(statData.value.specialElsSumByDate[date] || 0), 1)
                                ]),
                                _: 2
                              }, 1024);
                            }), 128))
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(`<!--[-->`);
                    ssrRenderList(statData.value.masters, (master) => {
                      _push3(ssrRenderComponent(_component_UiTableRow, {
                        key: master.masterId,
                        class: "cursor-pointer",
                        onClick: ($event) => getMasterReports({ id: master.masterId, fullName: master.fullName })
                      }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(ssrRenderComponent(_component_UiTableCell, { class: "p-2 sticky left-0 bg-gray-300 border border-black/50" }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`${ssrInterpolate(master.fullName)} (${ssrInterpolate(master.rating)}) `);
                                } else {
                                  return [
                                    createTextVNode(toDisplayString(master.fullName) + " (" + toDisplayString(master.rating) + ") ", 1)
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                            _push4(`<!--[-->`);
                            ssrRenderList(statData.value.dates, (date, index) => {
                              _push4(ssrRenderComponent(_component_UiTableCell, {
                                key: date,
                                class: ["p-1 text-center border border-black/50", {
                                  "bg-blue-100/50": isWeekend(date),
                                  "bg-green-500/50": master.shiftsByDate[date],
                                  "font-bold": master.elsByDate[date].regular || master.elsByDate[date].special
                                }]
                              }, {
                                default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                  if (_push5) {
                                    _push5(`${ssrInterpolate(master.elsByDate[date].regular || 0)} / ${ssrInterpolate(master.elsByDate[date].special || 0)}`);
                                  } else {
                                    return [
                                      createTextVNode(toDisplayString(master.elsByDate[date].regular || 0) + " / " + toDisplayString(master.elsByDate[date].special || 0), 1)
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent4, _scopeId3));
                            });
                            _push4(`<!--]-->`);
                          } else {
                            return [
                              createVNode(_component_UiTableCell, { class: "p-2 sticky left-0 bg-gray-300 border border-black/50" }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(master.fullName) + " (" + toDisplayString(master.rating) + ") ", 1)
                                ]),
                                _: 2
                              }, 1024),
                              (openBlock(true), createBlock(Fragment, null, renderList(statData.value.dates, (date, index) => {
                                return openBlock(), createBlock(_component_UiTableCell, {
                                  key: date,
                                  class: ["p-1 text-center border border-black/50", {
                                    "bg-blue-100/50": isWeekend(date),
                                    "bg-green-500/50": master.shiftsByDate[date],
                                    "font-bold": master.elsByDate[date].regular || master.elsByDate[date].special
                                  }]
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(master.elsByDate[date].regular || 0) + " / " + toDisplayString(master.elsByDate[date].special || 0), 1)
                                  ]),
                                  _: 2
                                }, 1032, ["class"]);
                              }), 128))
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                    });
                    _push3(`<!--]-->`);
                  } else {
                    return [
                      createVNode(_component_UiTableRow, null, {
                        default: withCtx(() => [
                          createVNode(_component_UiTableCell, { class: "p-2 sticky left-0 bg-gray-300 font-semibold border border-black/50" }, {
                            default: withCtx(() => [
                              createTextVNode("\u0421\u043C\u0435\u043D\u044B")
                            ]),
                            _: 1
                          }),
                          (openBlock(true), createBlock(Fragment, null, renderList(statData.value.dates, (date, index) => {
                            return openBlock(), createBlock(_component_UiTableCell, {
                              key: date,
                              class: "p-1 text-center bg-green-500/50 border border-black/50"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(statData.value.shiftsSumByDate[date] || 0), 1)
                              ]),
                              _: 2
                            }, 1024);
                          }), 128))
                        ]),
                        _: 1
                      }),
                      createVNode(_component_UiTableRow, null, {
                        default: withCtx(() => [
                          createVNode(_component_UiTableCell, { class: "p-2 sticky left-0 bg-gray-300 font-semibold border border-black/50" }, {
                            default: withCtx(() => [
                              createTextVNode("\u042D\u043B\u0435\u043C\u0435\u043D\u0442\u044B")
                            ]),
                            _: 1
                          }),
                          (openBlock(true), createBlock(Fragment, null, renderList(statData.value.dates, (date, index) => {
                            return openBlock(), createBlock(_component_UiTableCell, {
                              key: date,
                              class: "p-1 text-center bg-gray-300/50 border border-black/50"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(statData.value.regularElsSumByDate[date] || 0) + " / " + toDisplayString(statData.value.specialElsSumByDate[date] || 0), 1)
                              ]),
                              _: 2
                            }, 1024);
                          }), 128))
                        ]),
                        _: 1
                      }),
                      (openBlock(true), createBlock(Fragment, null, renderList(statData.value.masters, (master) => {
                        return openBlock(), createBlock(_component_UiTableRow, {
                          key: master.masterId,
                          class: "cursor-pointer",
                          onClick: ($event) => getMasterReports({ id: master.masterId, fullName: master.fullName })
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_UiTableCell, { class: "p-2 sticky left-0 bg-gray-300 border border-black/50" }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(master.fullName) + " (" + toDisplayString(master.rating) + ") ", 1)
                              ]),
                              _: 2
                            }, 1024),
                            (openBlock(true), createBlock(Fragment, null, renderList(statData.value.dates, (date, index) => {
                              return openBlock(), createBlock(_component_UiTableCell, {
                                key: date,
                                class: ["p-1 text-center border border-black/50", {
                                  "bg-blue-100/50": isWeekend(date),
                                  "bg-green-500/50": master.shiftsByDate[date],
                                  "font-bold": master.elsByDate[date].regular || master.elsByDate[date].special
                                }]
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(master.elsByDate[date].regular || 0) + " / " + toDisplayString(master.elsByDate[date].special || 0), 1)
                                ]),
                                _: 2
                              }, 1032, ["class"]);
                            }), 128))
                          ]),
                          _: 2
                        }, 1032, ["onClick"]);
                      }), 128))
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_UiTableCaption, null, {
                  default: withCtx(() => [
                    createTextVNode("\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043A\u0430 \u043C\u0430\u0441\u0442\u0435\u0440\u043E\u0432 \u0437\u0430 " + toDisplayString(period.value), 1)
                  ]),
                  _: 1
                }),
                createVNode(_component_UiTableHeader, null, {
                  default: withCtx(() => [
                    createVNode(_component_UiTableRow, null, {
                      default: withCtx(() => [
                        createVNode(_component_UiTableHead, { class: "p-2 sticky left-0 bg-gray-300 font-bold border border-black/50" }, {
                          default: withCtx(() => [
                            createTextVNode("\u041C\u0430\u0441\u0442\u0435\u0440 (\u0420\u0435\u0439\u0442\u0438\u043D\u0433)")
                          ]),
                          _: 1
                        }),
                        (openBlock(true), createBlock(Fragment, null, renderList(statData.value.dates, (date, index) => {
                          return openBlock(), createBlock(_component_UiTableHead, {
                            key: date,
                            class: "p-1 text-center bg-gray-300 border border-black/50"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(formatDate(date).split(" ")[0]), 1),
                              createVNode("br"),
                              createTextVNode(" " + toDisplayString(formatDate(date).split(" ")[1]), 1)
                            ]),
                            _: 2
                          }, 1024);
                        }), 128))
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode(_component_UiTableBody, null, {
                  default: withCtx(() => [
                    createVNode(_component_UiTableRow, null, {
                      default: withCtx(() => [
                        createVNode(_component_UiTableCell, { class: "p-2 sticky left-0 bg-gray-300 font-semibold border border-black/50" }, {
                          default: withCtx(() => [
                            createTextVNode("\u0421\u043C\u0435\u043D\u044B")
                          ]),
                          _: 1
                        }),
                        (openBlock(true), createBlock(Fragment, null, renderList(statData.value.dates, (date, index) => {
                          return openBlock(), createBlock(_component_UiTableCell, {
                            key: date,
                            class: "p-1 text-center bg-green-500/50 border border-black/50"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(statData.value.shiftsSumByDate[date] || 0), 1)
                            ]),
                            _: 2
                          }, 1024);
                        }), 128))
                      ]),
                      _: 1
                    }),
                    createVNode(_component_UiTableRow, null, {
                      default: withCtx(() => [
                        createVNode(_component_UiTableCell, { class: "p-2 sticky left-0 bg-gray-300 font-semibold border border-black/50" }, {
                          default: withCtx(() => [
                            createTextVNode("\u042D\u043B\u0435\u043C\u0435\u043D\u0442\u044B")
                          ]),
                          _: 1
                        }),
                        (openBlock(true), createBlock(Fragment, null, renderList(statData.value.dates, (date, index) => {
                          return openBlock(), createBlock(_component_UiTableCell, {
                            key: date,
                            class: "p-1 text-center bg-gray-300/50 border border-black/50"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(statData.value.regularElsSumByDate[date] || 0) + " / " + toDisplayString(statData.value.specialElsSumByDate[date] || 0), 1)
                            ]),
                            _: 2
                          }, 1024);
                        }), 128))
                      ]),
                      _: 1
                    }),
                    (openBlock(true), createBlock(Fragment, null, renderList(statData.value.masters, (master) => {
                      return openBlock(), createBlock(_component_UiTableRow, {
                        key: master.masterId,
                        class: "cursor-pointer",
                        onClick: ($event) => getMasterReports({ id: master.masterId, fullName: master.fullName })
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_UiTableCell, { class: "p-2 sticky left-0 bg-gray-300 border border-black/50" }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(master.fullName) + " (" + toDisplayString(master.rating) + ") ", 1)
                            ]),
                            _: 2
                          }, 1024),
                          (openBlock(true), createBlock(Fragment, null, renderList(statData.value.dates, (date, index) => {
                            return openBlock(), createBlock(_component_UiTableCell, {
                              key: date,
                              class: ["p-1 text-center border border-black/50", {
                                "bg-blue-100/50": isWeekend(date),
                                "bg-green-500/50": master.shiftsByDate[date],
                                "font-bold": master.elsByDate[date].regular || master.elsByDate[date].special
                              }]
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(master.elsByDate[date].regular || 0) + " / " + toDisplayString(master.elsByDate[date].special || 0), 1)
                              ]),
                              _: 2
                            }, 1032, ["class"]);
                          }), 128))
                        ]),
                        _: 2
                      }, 1032, ["onClick"]);
                    }), 128))
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div>`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/my/production/Stat.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "CreatePackerReport",
  __ssrInlineRender: true,
  props: {
    packerId: {}
  },
  emits: ["report-created"],
  setup(__props, { emit: __emit }) {
    const { $useApi } = useNuxtApp();
    const { toast } = useToast();
    const emit = __emit;
    const props = __props;
    const isOpen = ref(false);
    const disabled = ref(true);
    const curTab = ref("new");
    const newReportPackerBlank = {
      date: (/* @__PURE__ */ new Date()).toISOString().slice(0, 10),
      name: "",
      overSize: false,
      isGift: false,
      items: 1,
      //
      adapters: 1,
      //
      lam: 1,
      //
      cost: 0,
      dimmers: 0,
      userId: props.packerId,
      dops: 0,
      dopsComment: ""
    };
    const newReportPacker = ref({ ...newReportPackerBlank });
    const newOtherReportBlank = {
      date: (/* @__PURE__ */ new Date()).toISOString().slice(0, 10),
      name: "",
      cost: 0,
      userId: props.packerId
    };
    const newOtherReport = ref({ ...newOtherReportBlank });
    const calculateCost = () => {
      const { items, dimmers, overSize, isGift, dops, adapters, lam } = newReportPacker.value;
      const cost = items * 100 + adapters * 60 + lam * 20 + dimmers * 60 + (overSize ? 100 : 0) + (isGift ? 120 : 0) + dops;
      newReportPacker.value.cost = cost;
    };
    const createPackerReport = async () => {
      try {
        await $useApi.post("production/packer-report", {
          ...newReportPacker.value,
          userId: props.packerId
        });
        isOpen.value = false;
        emit("report-created");
        toast({
          title: "\u0423\u0441\u043F\u0435\u0445",
          description: "\u041E\u0442\u0447\u0435\u0442 \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u0441\u043E\u0437\u0434\u0430\u043D"
        });
      } catch {
        toast({
          title: "\u041E\u0448\u0438\u0431\u043A\u0430",
          description: "\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0441\u043E\u0437\u0434\u0430\u0442\u044C \u043E\u0442\u0447\u0435\u0442",
          variant: "destructive"
        });
      }
    };
    const createOtherReport = async () => {
      try {
        await $useApi.post("production/other-report", { ...newOtherReport.value, userId: props.packerId });
        isOpen.value = false;
        emit("report-created");
        toast({
          title: "\u0423\u0441\u043F\u0435\u0445",
          description: "\u041E\u0442\u0447\u0435\u0442 \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u0441\u043E\u0437\u0434\u0430\u043D"
        });
      } catch {
        toast({
          title: "\u041E\u0448\u0438\u0431\u043A\u0430",
          description: "\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0441\u043E\u0437\u0434\u0430\u0442\u044C \u043E\u0442\u0447\u0435\u0442",
          variant: "destructive"
        });
      }
    };
    watch(
      newOtherReport,
      () => {
        const { date, name, cost } = newOtherReport.value;
        disabled.value = !(date && name && cost);
      },
      { deep: true }
    );
    watch(
      newReportPacker,
      () => {
        const { date, name, items, adapters, lam, dimmers } = newReportPacker.value;
        calculateCost();
        disabled.value = !(date && name && (items || adapters || lam || dimmers));
      },
      { deep: true }
    );
    watch(isOpen, (newValue) => {
      if (!newValue) {
        newReportPacker.value = { ...newReportPackerBlank, userId: props.packerId };
        newOtherReport.value = { ...newOtherReportBlank, userId: props.packerId };
      }
    });
    watch(curTab, () => {
      newReportPacker.value = { ...newReportPackerBlank, userId: props.packerId };
      newOtherReport.value = { ...newOtherReportBlank, userId: props.packerId };
      disabled.value = true;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiDialog = _sfc_main$4$2;
      const _component_UiDialogTrigger = _sfc_main$3$3;
      const _component_UiButton = _sfc_main$q;
      const _component_UiDialogContent = _sfc_main$l;
      const _component_UiDialogHeader = _sfc_main$2$5;
      const _component_UiDialogTitle = _sfc_main$1$5;
      const _component_UiDialogDescription = _sfc_main$m;
      const _component_UiTabs = _sfc_main$2$1;
      const _component_UiTabsList = _sfc_main$g;
      const _component_UiTabsTrigger = _sfc_main$1$1;
      const _component_UiTabsContent = _sfc_main$r;
      const _component_UiLabel = _sfc_main$s;
      const _component_UiInput = _sfc_main$k;
      const _component_UiSwitch = _sfc_main$v;
      const _component_UiDialogFooter = _sfc_main$o;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_UiDialog, {
        open: isOpen.value,
        "onUpdate:open": ($event) => isOpen.value = $event
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UiDialogTrigger, { "as-child": "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UiButton, { class: "w-full" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`\u0421\u043E\u0437\u0434\u0430\u0442\u044C`);
                      } else {
                        return [
                          createTextVNode("\u0421\u043E\u0437\u0434\u0430\u0442\u044C")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UiButton, { class: "w-full" }, {
                      default: withCtx(() => [
                        createTextVNode("\u0421\u043E\u0437\u0434\u0430\u0442\u044C")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UiDialogContent, { class: "max-w-[400px] flex flex-col top-0 translate-y-[0px]" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UiDialogHeader, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UiDialogTitle, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u0437\u0430\u043F\u0438\u0441\u044C`);
                            } else {
                              return [
                                createTextVNode("\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u0437\u0430\u043F\u0438\u0441\u044C")
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
                              createTextVNode("\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u0437\u0430\u043F\u0438\u0441\u044C")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UiDialogDescription)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<div class=""${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UiTabs, {
                    modelValue: curTab.value,
                    "onUpdate:modelValue": ($event) => curTab.value = $event
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UiTabsList, { class: "w-full mb-4" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_UiTabsTrigger, {
                                class: "w-full",
                                value: "new"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(` \u041D\u043E\u0432\u043E\u0435 `);
                                  } else {
                                    return [
                                      createTextVNode(" \u041D\u043E\u0432\u043E\u0435 ")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_UiTabsTrigger, {
                                class: "w-full",
                                value: "other"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(` \u0414\u0440\u0443\u0433\u043E\u0435 `);
                                  } else {
                                    return [
                                      createTextVNode(" \u0414\u0440\u0443\u0433\u043E\u0435 ")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_UiTabsTrigger, {
                                  class: "w-full",
                                  value: "new"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" \u041D\u043E\u0432\u043E\u0435 ")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_UiTabsTrigger, {
                                  class: "w-full",
                                  value: "other"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" \u0414\u0440\u0443\u0433\u043E\u0435 ")
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_UiTabsContent, { value: "new" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<div class="flex flex-col gap-5"${_scopeId4}><div class="relative"${_scopeId4}>`);
                              if (newReportPacker.value.date) {
                                _push5(ssrRenderComponent(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`\u0414\u0430\u0442\u0430 \u0441\u043C\u0435\u043D\u044B`);
                                    } else {
                                      return [
                                        createTextVNode("\u0414\u0430\u0442\u0430 \u0441\u043C\u0435\u043D\u044B")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                              } else {
                                _push5(`<!---->`);
                              }
                              _push5(ssrRenderComponent(_component_UiInput, {
                                modelValue: newReportPacker.value.date,
                                "onUpdate:modelValue": ($event) => newReportPacker.value.date = $event,
                                type: "date",
                                placeholder: "\u0414\u0430\u0442\u0430 \u0441\u043C\u0435\u043D\u044B",
                                class: newReportPacker.value.date ? "" : "outline-1 outline-rose-300"
                              }, null, _parent5, _scopeId4));
                              _push5(`</div><div class="relative"${_scopeId4}>`);
                              if (newReportPacker.value.name) {
                                _push5(ssrRenderComponent(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1" }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0438\u043B\u0438 \u0441\u0441\u044B\u043B\u043A\u0430`);
                                    } else {
                                      return [
                                        createTextVNode("\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0438\u043B\u0438 \u0441\u0441\u044B\u043B\u043A\u0430")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                              } else {
                                _push5(`<!---->`);
                              }
                              _push5(ssrRenderComponent(_component_UiInput, {
                                modelValue: newReportPacker.value.name,
                                "onUpdate:modelValue": ($event) => newReportPacker.value.name = $event,
                                placeholder: "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0438\u043B\u0438 \u0441\u0441\u044B\u043B\u043A\u0430",
                                class: newReportPacker.value.name ? "" : "outline-1 outline-rose-300"
                              }, null, _parent5, _scopeId4));
                              _push5(`</div><div class="flex justify-between"${_scopeId4}><div class="relative flex items-center gap-2"${_scopeId4}>`);
                              _push5(ssrRenderComponent(_component_UiSwitch, {
                                checked: newReportPacker.value.overSize,
                                "onUpdate:checked": ($event) => newReportPacker.value.overSize = $event
                              }, null, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_UiLabel, { class: "" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`\u041D\u0435\u0433\u0430\u0431\u0430\u0440\u0438\u0442`);
                                  } else {
                                    return [
                                      createTextVNode("\u041D\u0435\u0433\u0430\u0431\u0430\u0440\u0438\u0442")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(`</div><div${_scopeId4}>|</div><div class="relative flex items-center gap-4"${_scopeId4}>`);
                              _push5(ssrRenderComponent(_component_UiSwitch, {
                                checked: newReportPacker.value.isGift,
                                "onUpdate:checked": ($event) => newReportPacker.value.isGift = $event
                              }, null, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_UiLabel, { class: "" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`\u041F\u043E\u0434\u0430\u0440\u043E\u043A`);
                                  } else {
                                    return [
                                      createTextVNode("\u041F\u043E\u0434\u0430\u0440\u043E\u043A")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(`</div></div><div class="flex gap-2"${_scopeId4}><div class="relative"${_scopeId4}>`);
                              _push5(ssrRenderComponent(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`\u0423\u043F-\u043A\u0430`);
                                  } else {
                                    return [
                                      createTextVNode("\u0423\u043F-\u043A\u0430")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_UiInput, {
                                modelValue: newReportPacker.value.items,
                                "onUpdate:modelValue": ($event) => newReportPacker.value.items = $event,
                                modelModifiers: { number: true },
                                placeholder: "\u0423\u043F-\u043A\u0430",
                                type: "number",
                                min: "0"
                              }, null, _parent5, _scopeId4));
                              _push5(`</div><div class="relative"${_scopeId4}>`);
                              _push5(ssrRenderComponent(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`\u0411\u043B\u043E\u043A\u0438`);
                                  } else {
                                    return [
                                      createTextVNode("\u0411\u043B\u043E\u043A\u0438")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_UiInput, {
                                modelValue: newReportPacker.value.adapters,
                                "onUpdate:modelValue": ($event) => newReportPacker.value.adapters = $event,
                                modelModifiers: { number: true },
                                placeholder: "\u0411\u043B\u043E\u043A\u0438",
                                type: "number",
                                min: "0"
                              }, null, _parent5, _scopeId4));
                              _push5(`</div><div class="relative"${_scopeId4}>`);
                              _push5(ssrRenderComponent(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`\u041F\u043B\u0435\u043D\u043A\u0430`);
                                  } else {
                                    return [
                                      createTextVNode("\u041F\u043B\u0435\u043D\u043A\u0430")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_UiInput, {
                                modelValue: newReportPacker.value.lam,
                                "onUpdate:modelValue": ($event) => newReportPacker.value.lam = $event,
                                modelModifiers: { number: true },
                                placeholder: "\u041F\u043B\u0435\u043D\u043A\u0430",
                                type: "number",
                                min: "0"
                              }, null, _parent5, _scopeId4));
                              _push5(`</div><div class="relative"${_scopeId4}>`);
                              _push5(ssrRenderComponent(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`\u0414\u0438\u043C`);
                                  } else {
                                    return [
                                      createTextVNode("\u0414\u0438\u043C")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_UiInput, {
                                modelValue: newReportPacker.value.dimmers,
                                "onUpdate:modelValue": ($event) => newReportPacker.value.dimmers = $event,
                                modelModifiers: { number: true },
                                placeholder: "\u0414\u0438\u043C",
                                type: "number",
                                min: "0"
                              }, null, _parent5, _scopeId4));
                              _push5(`</div></div><div class="relative"${_scopeId4}>`);
                              if (newReportPacker.value.dopsComment) {
                                _push5(ssrRenderComponent(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1" }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`\u0414\u043E\u043F \u0440\u0430\u0431\u043E\u0442\u044B`);
                                    } else {
                                      return [
                                        createTextVNode("\u0414\u043E\u043F \u0440\u0430\u0431\u043E\u0442\u044B")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                              } else {
                                _push5(`<!---->`);
                              }
                              _push5(ssrRenderComponent(_component_UiInput, {
                                modelValue: newReportPacker.value.dopsComment,
                                "onUpdate:modelValue": ($event) => newReportPacker.value.dopsComment = $event,
                                placeholder: "\u0414\u043E\u043F \u0440\u0430\u0431\u043E\u0442\u044B"
                              }, null, _parent5, _scopeId4));
                              _push5(`</div><div class="relative"${_scopeId4}>`);
                              if (newReportPacker.value.dops) {
                                _push5(ssrRenderComponent(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1" }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C`);
                                    } else {
                                      return [
                                        createTextVNode("\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                              } else {
                                _push5(`<!---->`);
                              }
                              _push5(ssrRenderComponent(_component_UiInput, {
                                modelValue: newReportPacker.value.dops,
                                "onUpdate:modelValue": ($event) => newReportPacker.value.dops = $event,
                                placeholder: "\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C",
                                type: "number"
                              }, null, _parent5, _scopeId4));
                              _push5(`</div><span${_scopeId4}> \u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C: ${ssrInterpolate(newReportPacker.value.cost)}\u0440. </span></div><div class="flex justify-between w-full"${_scopeId4}>`);
                              _push5(ssrRenderComponent(_component_UiButton, {
                                disabled: disabled.value,
                                onClick: createPackerReport
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(` \u0421\u043E\u0437\u0434\u0430\u0442\u044C `);
                                  } else {
                                    return [
                                      createTextVNode(" \u0421\u043E\u0437\u0434\u0430\u0442\u044C ")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(`</div>`);
                            } else {
                              return [
                                createVNode("div", { class: "flex flex-col gap-5" }, [
                                  createVNode("div", { class: "relative" }, [
                                    newReportPacker.value.date ? (openBlock(), createBlock(_component_UiLabel, {
                                      key: 0,
                                      class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode("\u0414\u0430\u0442\u0430 \u0441\u043C\u0435\u043D\u044B")
                                      ]),
                                      _: 1
                                    })) : createCommentVNode("", true),
                                    createVNode(_component_UiInput, {
                                      modelValue: newReportPacker.value.date,
                                      "onUpdate:modelValue": ($event) => newReportPacker.value.date = $event,
                                      type: "date",
                                      placeholder: "\u0414\u0430\u0442\u0430 \u0441\u043C\u0435\u043D\u044B",
                                      class: newReportPacker.value.date ? "" : "outline-1 outline-rose-300"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "class"])
                                  ]),
                                  createVNode("div", { class: "relative" }, [
                                    newReportPacker.value.name ? (openBlock(), createBlock(_component_UiLabel, {
                                      key: 0,
                                      class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode("\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0438\u043B\u0438 \u0441\u0441\u044B\u043B\u043A\u0430")
                                      ]),
                                      _: 1
                                    })) : createCommentVNode("", true),
                                    createVNode(_component_UiInput, {
                                      modelValue: newReportPacker.value.name,
                                      "onUpdate:modelValue": ($event) => newReportPacker.value.name = $event,
                                      placeholder: "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0438\u043B\u0438 \u0441\u0441\u044B\u043B\u043A\u0430",
                                      class: newReportPacker.value.name ? "" : "outline-1 outline-rose-300"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "class"])
                                  ]),
                                  createVNode("div", { class: "flex justify-between" }, [
                                    createVNode("div", { class: "relative flex items-center gap-2" }, [
                                      createVNode(_component_UiSwitch, {
                                        checked: newReportPacker.value.overSize,
                                        "onUpdate:checked": ($event) => newReportPacker.value.overSize = $event
                                      }, null, 8, ["checked", "onUpdate:checked"]),
                                      createVNode(_component_UiLabel, { class: "" }, {
                                        default: withCtx(() => [
                                          createTextVNode("\u041D\u0435\u0433\u0430\u0431\u0430\u0440\u0438\u0442")
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    createVNode("div", null, "|"),
                                    createVNode("div", { class: "relative flex items-center gap-4" }, [
                                      createVNode(_component_UiSwitch, {
                                        checked: newReportPacker.value.isGift,
                                        "onUpdate:checked": ($event) => newReportPacker.value.isGift = $event
                                      }, null, 8, ["checked", "onUpdate:checked"]),
                                      createVNode(_component_UiLabel, { class: "" }, {
                                        default: withCtx(() => [
                                          createTextVNode("\u041F\u043E\u0434\u0430\u0440\u043E\u043A")
                                        ]),
                                        _: 1
                                      })
                                    ])
                                  ]),
                                  createVNode("div", { class: "flex gap-2" }, [
                                    createVNode("div", { class: "relative" }, [
                                      createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1" }, {
                                        default: withCtx(() => [
                                          createTextVNode("\u0423\u043F-\u043A\u0430")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_UiInput, {
                                        modelValue: newReportPacker.value.items,
                                        "onUpdate:modelValue": ($event) => newReportPacker.value.items = $event,
                                        modelModifiers: { number: true },
                                        placeholder: "\u0423\u043F-\u043A\u0430",
                                        type: "number",
                                        min: "0"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ]),
                                    createVNode("div", { class: "relative" }, [
                                      createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1" }, {
                                        default: withCtx(() => [
                                          createTextVNode("\u0411\u043B\u043E\u043A\u0438")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_UiInput, {
                                        modelValue: newReportPacker.value.adapters,
                                        "onUpdate:modelValue": ($event) => newReportPacker.value.adapters = $event,
                                        modelModifiers: { number: true },
                                        placeholder: "\u0411\u043B\u043E\u043A\u0438",
                                        type: "number",
                                        min: "0"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ]),
                                    createVNode("div", { class: "relative" }, [
                                      createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1" }, {
                                        default: withCtx(() => [
                                          createTextVNode("\u041F\u043B\u0435\u043D\u043A\u0430")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_UiInput, {
                                        modelValue: newReportPacker.value.lam,
                                        "onUpdate:modelValue": ($event) => newReportPacker.value.lam = $event,
                                        modelModifiers: { number: true },
                                        placeholder: "\u041F\u043B\u0435\u043D\u043A\u0430",
                                        type: "number",
                                        min: "0"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ]),
                                    createVNode("div", { class: "relative" }, [
                                      createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1" }, {
                                        default: withCtx(() => [
                                          createTextVNode("\u0414\u0438\u043C")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_UiInput, {
                                        modelValue: newReportPacker.value.dimmers,
                                        "onUpdate:modelValue": ($event) => newReportPacker.value.dimmers = $event,
                                        modelModifiers: { number: true },
                                        placeholder: "\u0414\u0438\u043C",
                                        type: "number",
                                        min: "0"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ])
                                  ]),
                                  createVNode("div", { class: "relative" }, [
                                    newReportPacker.value.dopsComment ? (openBlock(), createBlock(_component_UiLabel, {
                                      key: 0,
                                      class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode("\u0414\u043E\u043F \u0440\u0430\u0431\u043E\u0442\u044B")
                                      ]),
                                      _: 1
                                    })) : createCommentVNode("", true),
                                    createVNode(_component_UiInput, {
                                      modelValue: newReportPacker.value.dopsComment,
                                      "onUpdate:modelValue": ($event) => newReportPacker.value.dopsComment = $event,
                                      placeholder: "\u0414\u043E\u043F \u0440\u0430\u0431\u043E\u0442\u044B"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  createVNode("div", { class: "relative" }, [
                                    newReportPacker.value.dops ? (openBlock(), createBlock(_component_UiLabel, {
                                      key: 0,
                                      class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode("\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C")
                                      ]),
                                      _: 1
                                    })) : createCommentVNode("", true),
                                    createVNode(_component_UiInput, {
                                      modelValue: newReportPacker.value.dops,
                                      "onUpdate:modelValue": ($event) => newReportPacker.value.dops = $event,
                                      placeholder: "\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C",
                                      type: "number"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  createVNode("span", null, " \u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C: " + toDisplayString(newReportPacker.value.cost) + "\u0440. ", 1)
                                ]),
                                createVNode("div", { class: "flex justify-between w-full" }, [
                                  createVNode(_component_UiButton, {
                                    disabled: disabled.value,
                                    onClick: createPackerReport
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" \u0421\u043E\u0437\u0434\u0430\u0442\u044C ")
                                    ]),
                                    _: 1
                                  }, 8, ["disabled"])
                                ])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_UiTabsContent, { value: "other" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<div class="flex flex-col gap-5"${_scopeId4}><div class="relative"${_scopeId4}>`);
                              if (newOtherReport.value.date) {
                                _push5(ssrRenderComponent(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`\u0414\u0430\u0442\u0430`);
                                    } else {
                                      return [
                                        createTextVNode("\u0414\u0430\u0442\u0430")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                              } else {
                                _push5(`<!---->`);
                              }
                              _push5(ssrRenderComponent(_component_UiInput, {
                                modelValue: newOtherReport.value.date,
                                "onUpdate:modelValue": ($event) => newOtherReport.value.date = $event,
                                type: "date",
                                placeholder: "\u0414\u0430\u0442\u0430",
                                class: newOtherReport.value.date ? "" : "outline-1 outline-rose-300"
                              }, null, _parent5, _scopeId4));
                              _push5(`</div><div class="relative"${_scopeId4}>`);
                              if (newOtherReport.value.name) {
                                _push5(ssrRenderComponent(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1" }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435`);
                                    } else {
                                      return [
                                        createTextVNode("\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                              } else {
                                _push5(`<!---->`);
                              }
                              _push5(ssrRenderComponent(_component_UiInput, {
                                modelValue: newOtherReport.value.name,
                                "onUpdate:modelValue": ($event) => newOtherReport.value.name = $event,
                                placeholder: "\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435",
                                class: newOtherReport.value.name ? "" : "outline-1 outline-rose-300"
                              }, null, _parent5, _scopeId4));
                              _push5(`</div><div class="relative"${_scopeId4}>`);
                              if (newOtherReport.value.cost) {
                                _push5(ssrRenderComponent(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1" }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C`);
                                    } else {
                                      return [
                                        createTextVNode("\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                              } else {
                                _push5(`<!---->`);
                              }
                              _push5(ssrRenderComponent(_component_UiInput, {
                                modelValue: newOtherReport.value.cost,
                                "onUpdate:modelValue": ($event) => newOtherReport.value.cost = $event,
                                type: "number",
                                placeholder: "\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C",
                                class: newOtherReport.value.cost ? "" : "outline-1 outline-rose-300"
                              }, null, _parent5, _scopeId4));
                              _push5(`</div><span${_scopeId4}> \u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C: ${ssrInterpolate(newOtherReport.value.cost)}\u0440. </span></div><div class="flex justify-between w-full"${_scopeId4}>`);
                              _push5(ssrRenderComponent(_component_UiButton, {
                                disabled: disabled.value,
                                onClick: createOtherReport
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(` \u0421\u043E\u0437\u0434\u0430\u0442\u044C `);
                                  } else {
                                    return [
                                      createTextVNode(" \u0421\u043E\u0437\u0434\u0430\u0442\u044C ")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(`</div>`);
                            } else {
                              return [
                                createVNode("div", { class: "flex flex-col gap-5" }, [
                                  createVNode("div", { class: "relative" }, [
                                    newOtherReport.value.date ? (openBlock(), createBlock(_component_UiLabel, {
                                      key: 0,
                                      class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode("\u0414\u0430\u0442\u0430")
                                      ]),
                                      _: 1
                                    })) : createCommentVNode("", true),
                                    createVNode(_component_UiInput, {
                                      modelValue: newOtherReport.value.date,
                                      "onUpdate:modelValue": ($event) => newOtherReport.value.date = $event,
                                      type: "date",
                                      placeholder: "\u0414\u0430\u0442\u0430",
                                      class: newOtherReport.value.date ? "" : "outline-1 outline-rose-300"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "class"])
                                  ]),
                                  createVNode("div", { class: "relative" }, [
                                    newOtherReport.value.name ? (openBlock(), createBlock(_component_UiLabel, {
                                      key: 0,
                                      class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode("\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435")
                                      ]),
                                      _: 1
                                    })) : createCommentVNode("", true),
                                    createVNode(_component_UiInput, {
                                      modelValue: newOtherReport.value.name,
                                      "onUpdate:modelValue": ($event) => newOtherReport.value.name = $event,
                                      placeholder: "\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435",
                                      class: newOtherReport.value.name ? "" : "outline-1 outline-rose-300"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "class"])
                                  ]),
                                  createVNode("div", { class: "relative" }, [
                                    newOtherReport.value.cost ? (openBlock(), createBlock(_component_UiLabel, {
                                      key: 0,
                                      class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode("\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C")
                                      ]),
                                      _: 1
                                    })) : createCommentVNode("", true),
                                    createVNode(_component_UiInput, {
                                      modelValue: newOtherReport.value.cost,
                                      "onUpdate:modelValue": ($event) => newOtherReport.value.cost = $event,
                                      type: "number",
                                      placeholder: "\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C",
                                      class: newOtherReport.value.cost ? "" : "outline-1 outline-rose-300"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "class"])
                                  ]),
                                  createVNode("span", null, " \u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C: " + toDisplayString(newOtherReport.value.cost) + "\u0440. ", 1)
                                ]),
                                createVNode("div", { class: "flex justify-between w-full" }, [
                                  createVNode(_component_UiButton, {
                                    disabled: disabled.value,
                                    onClick: createOtherReport
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" \u0421\u043E\u0437\u0434\u0430\u0442\u044C ")
                                    ]),
                                    _: 1
                                  }, 8, ["disabled"])
                                ])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_UiTabsList, { class: "w-full mb-4" }, {
                            default: withCtx(() => [
                              createVNode(_component_UiTabsTrigger, {
                                class: "w-full",
                                value: "new"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" \u041D\u043E\u0432\u043E\u0435 ")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_UiTabsTrigger, {
                                class: "w-full",
                                value: "other"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" \u0414\u0440\u0443\u0433\u043E\u0435 ")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UiTabsContent, { value: "new" }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "flex flex-col gap-5" }, [
                                createVNode("div", { class: "relative" }, [
                                  newReportPacker.value.date ? (openBlock(), createBlock(_component_UiLabel, {
                                    key: 0,
                                    class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("\u0414\u0430\u0442\u0430 \u0441\u043C\u0435\u043D\u044B")
                                    ]),
                                    _: 1
                                  })) : createCommentVNode("", true),
                                  createVNode(_component_UiInput, {
                                    modelValue: newReportPacker.value.date,
                                    "onUpdate:modelValue": ($event) => newReportPacker.value.date = $event,
                                    type: "date",
                                    placeholder: "\u0414\u0430\u0442\u0430 \u0441\u043C\u0435\u043D\u044B",
                                    class: newReportPacker.value.date ? "" : "outline-1 outline-rose-300"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "class"])
                                ]),
                                createVNode("div", { class: "relative" }, [
                                  newReportPacker.value.name ? (openBlock(), createBlock(_component_UiLabel, {
                                    key: 0,
                                    class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0438\u043B\u0438 \u0441\u0441\u044B\u043B\u043A\u0430")
                                    ]),
                                    _: 1
                                  })) : createCommentVNode("", true),
                                  createVNode(_component_UiInput, {
                                    modelValue: newReportPacker.value.name,
                                    "onUpdate:modelValue": ($event) => newReportPacker.value.name = $event,
                                    placeholder: "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0438\u043B\u0438 \u0441\u0441\u044B\u043B\u043A\u0430",
                                    class: newReportPacker.value.name ? "" : "outline-1 outline-rose-300"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "class"])
                                ]),
                                createVNode("div", { class: "flex justify-between" }, [
                                  createVNode("div", { class: "relative flex items-center gap-2" }, [
                                    createVNode(_component_UiSwitch, {
                                      checked: newReportPacker.value.overSize,
                                      "onUpdate:checked": ($event) => newReportPacker.value.overSize = $event
                                    }, null, 8, ["checked", "onUpdate:checked"]),
                                    createVNode(_component_UiLabel, { class: "" }, {
                                      default: withCtx(() => [
                                        createTextVNode("\u041D\u0435\u0433\u0430\u0431\u0430\u0440\u0438\u0442")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  createVNode("div", null, "|"),
                                  createVNode("div", { class: "relative flex items-center gap-4" }, [
                                    createVNode(_component_UiSwitch, {
                                      checked: newReportPacker.value.isGift,
                                      "onUpdate:checked": ($event) => newReportPacker.value.isGift = $event
                                    }, null, 8, ["checked", "onUpdate:checked"]),
                                    createVNode(_component_UiLabel, { class: "" }, {
                                      default: withCtx(() => [
                                        createTextVNode("\u041F\u043E\u0434\u0430\u0440\u043E\u043A")
                                      ]),
                                      _: 1
                                    })
                                  ])
                                ]),
                                createVNode("div", { class: "flex gap-2" }, [
                                  createVNode("div", { class: "relative" }, [
                                    createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1" }, {
                                      default: withCtx(() => [
                                        createTextVNode("\u0423\u043F-\u043A\u0430")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_UiInput, {
                                      modelValue: newReportPacker.value.items,
                                      "onUpdate:modelValue": ($event) => newReportPacker.value.items = $event,
                                      modelModifiers: { number: true },
                                      placeholder: "\u0423\u043F-\u043A\u0430",
                                      type: "number",
                                      min: "0"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  createVNode("div", { class: "relative" }, [
                                    createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1" }, {
                                      default: withCtx(() => [
                                        createTextVNode("\u0411\u043B\u043E\u043A\u0438")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_UiInput, {
                                      modelValue: newReportPacker.value.adapters,
                                      "onUpdate:modelValue": ($event) => newReportPacker.value.adapters = $event,
                                      modelModifiers: { number: true },
                                      placeholder: "\u0411\u043B\u043E\u043A\u0438",
                                      type: "number",
                                      min: "0"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  createVNode("div", { class: "relative" }, [
                                    createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1" }, {
                                      default: withCtx(() => [
                                        createTextVNode("\u041F\u043B\u0435\u043D\u043A\u0430")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_UiInput, {
                                      modelValue: newReportPacker.value.lam,
                                      "onUpdate:modelValue": ($event) => newReportPacker.value.lam = $event,
                                      modelModifiers: { number: true },
                                      placeholder: "\u041F\u043B\u0435\u043D\u043A\u0430",
                                      type: "number",
                                      min: "0"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  createVNode("div", { class: "relative" }, [
                                    createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1" }, {
                                      default: withCtx(() => [
                                        createTextVNode("\u0414\u0438\u043C")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_UiInput, {
                                      modelValue: newReportPacker.value.dimmers,
                                      "onUpdate:modelValue": ($event) => newReportPacker.value.dimmers = $event,
                                      modelModifiers: { number: true },
                                      placeholder: "\u0414\u0438\u043C",
                                      type: "number",
                                      min: "0"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ])
                                ]),
                                createVNode("div", { class: "relative" }, [
                                  newReportPacker.value.dopsComment ? (openBlock(), createBlock(_component_UiLabel, {
                                    key: 0,
                                    class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("\u0414\u043E\u043F \u0440\u0430\u0431\u043E\u0442\u044B")
                                    ]),
                                    _: 1
                                  })) : createCommentVNode("", true),
                                  createVNode(_component_UiInput, {
                                    modelValue: newReportPacker.value.dopsComment,
                                    "onUpdate:modelValue": ($event) => newReportPacker.value.dopsComment = $event,
                                    placeholder: "\u0414\u043E\u043F \u0440\u0430\u0431\u043E\u0442\u044B"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                createVNode("div", { class: "relative" }, [
                                  newReportPacker.value.dops ? (openBlock(), createBlock(_component_UiLabel, {
                                    key: 0,
                                    class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C")
                                    ]),
                                    _: 1
                                  })) : createCommentVNode("", true),
                                  createVNode(_component_UiInput, {
                                    modelValue: newReportPacker.value.dops,
                                    "onUpdate:modelValue": ($event) => newReportPacker.value.dops = $event,
                                    placeholder: "\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C",
                                    type: "number"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                createVNode("span", null, " \u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C: " + toDisplayString(newReportPacker.value.cost) + "\u0440. ", 1)
                              ]),
                              createVNode("div", { class: "flex justify-between w-full" }, [
                                createVNode(_component_UiButton, {
                                  disabled: disabled.value,
                                  onClick: createPackerReport
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" \u0421\u043E\u0437\u0434\u0430\u0442\u044C ")
                                  ]),
                                  _: 1
                                }, 8, ["disabled"])
                              ])
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UiTabsContent, { value: "other" }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "flex flex-col gap-5" }, [
                                createVNode("div", { class: "relative" }, [
                                  newOtherReport.value.date ? (openBlock(), createBlock(_component_UiLabel, {
                                    key: 0,
                                    class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("\u0414\u0430\u0442\u0430")
                                    ]),
                                    _: 1
                                  })) : createCommentVNode("", true),
                                  createVNode(_component_UiInput, {
                                    modelValue: newOtherReport.value.date,
                                    "onUpdate:modelValue": ($event) => newOtherReport.value.date = $event,
                                    type: "date",
                                    placeholder: "\u0414\u0430\u0442\u0430",
                                    class: newOtherReport.value.date ? "" : "outline-1 outline-rose-300"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "class"])
                                ]),
                                createVNode("div", { class: "relative" }, [
                                  newOtherReport.value.name ? (openBlock(), createBlock(_component_UiLabel, {
                                    key: 0,
                                    class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435")
                                    ]),
                                    _: 1
                                  })) : createCommentVNode("", true),
                                  createVNode(_component_UiInput, {
                                    modelValue: newOtherReport.value.name,
                                    "onUpdate:modelValue": ($event) => newOtherReport.value.name = $event,
                                    placeholder: "\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435",
                                    class: newOtherReport.value.name ? "" : "outline-1 outline-rose-300"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "class"])
                                ]),
                                createVNode("div", { class: "relative" }, [
                                  newOtherReport.value.cost ? (openBlock(), createBlock(_component_UiLabel, {
                                    key: 0,
                                    class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C")
                                    ]),
                                    _: 1
                                  })) : createCommentVNode("", true),
                                  createVNode(_component_UiInput, {
                                    modelValue: newOtherReport.value.cost,
                                    "onUpdate:modelValue": ($event) => newOtherReport.value.cost = $event,
                                    type: "number",
                                    placeholder: "\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C",
                                    class: newOtherReport.value.cost ? "" : "outline-1 outline-rose-300"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "class"])
                                ]),
                                createVNode("span", null, " \u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C: " + toDisplayString(newOtherReport.value.cost) + "\u0440. ", 1)
                              ]),
                              createVNode("div", { class: "flex justify-between w-full" }, [
                                createVNode(_component_UiButton, {
                                  disabled: disabled.value,
                                  onClick: createOtherReport
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" \u0421\u043E\u0437\u0434\u0430\u0442\u044C ")
                                  ]),
                                  _: 1
                                }, 8, ["disabled"])
                              ])
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                  _push3(ssrRenderComponent(_component_UiDialogFooter, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UiDialogHeader, null, {
                      default: withCtx(() => [
                        createVNode(_component_UiDialogTitle, null, {
                          default: withCtx(() => [
                            createTextVNode("\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u0437\u0430\u043F\u0438\u0441\u044C")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UiDialogDescription)
                      ]),
                      _: 1
                    }),
                    createVNode("div", { class: "" }, [
                      createVNode(_component_UiTabs, {
                        modelValue: curTab.value,
                        "onUpdate:modelValue": ($event) => curTab.value = $event
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_UiTabsList, { class: "w-full mb-4" }, {
                            default: withCtx(() => [
                              createVNode(_component_UiTabsTrigger, {
                                class: "w-full",
                                value: "new"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" \u041D\u043E\u0432\u043E\u0435 ")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_UiTabsTrigger, {
                                class: "w-full",
                                value: "other"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" \u0414\u0440\u0443\u0433\u043E\u0435 ")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UiTabsContent, { value: "new" }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "flex flex-col gap-5" }, [
                                createVNode("div", { class: "relative" }, [
                                  newReportPacker.value.date ? (openBlock(), createBlock(_component_UiLabel, {
                                    key: 0,
                                    class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("\u0414\u0430\u0442\u0430 \u0441\u043C\u0435\u043D\u044B")
                                    ]),
                                    _: 1
                                  })) : createCommentVNode("", true),
                                  createVNode(_component_UiInput, {
                                    modelValue: newReportPacker.value.date,
                                    "onUpdate:modelValue": ($event) => newReportPacker.value.date = $event,
                                    type: "date",
                                    placeholder: "\u0414\u0430\u0442\u0430 \u0441\u043C\u0435\u043D\u044B",
                                    class: newReportPacker.value.date ? "" : "outline-1 outline-rose-300"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "class"])
                                ]),
                                createVNode("div", { class: "relative" }, [
                                  newReportPacker.value.name ? (openBlock(), createBlock(_component_UiLabel, {
                                    key: 0,
                                    class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0438\u043B\u0438 \u0441\u0441\u044B\u043B\u043A\u0430")
                                    ]),
                                    _: 1
                                  })) : createCommentVNode("", true),
                                  createVNode(_component_UiInput, {
                                    modelValue: newReportPacker.value.name,
                                    "onUpdate:modelValue": ($event) => newReportPacker.value.name = $event,
                                    placeholder: "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0438\u043B\u0438 \u0441\u0441\u044B\u043B\u043A\u0430",
                                    class: newReportPacker.value.name ? "" : "outline-1 outline-rose-300"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "class"])
                                ]),
                                createVNode("div", { class: "flex justify-between" }, [
                                  createVNode("div", { class: "relative flex items-center gap-2" }, [
                                    createVNode(_component_UiSwitch, {
                                      checked: newReportPacker.value.overSize,
                                      "onUpdate:checked": ($event) => newReportPacker.value.overSize = $event
                                    }, null, 8, ["checked", "onUpdate:checked"]),
                                    createVNode(_component_UiLabel, { class: "" }, {
                                      default: withCtx(() => [
                                        createTextVNode("\u041D\u0435\u0433\u0430\u0431\u0430\u0440\u0438\u0442")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  createVNode("div", null, "|"),
                                  createVNode("div", { class: "relative flex items-center gap-4" }, [
                                    createVNode(_component_UiSwitch, {
                                      checked: newReportPacker.value.isGift,
                                      "onUpdate:checked": ($event) => newReportPacker.value.isGift = $event
                                    }, null, 8, ["checked", "onUpdate:checked"]),
                                    createVNode(_component_UiLabel, { class: "" }, {
                                      default: withCtx(() => [
                                        createTextVNode("\u041F\u043E\u0434\u0430\u0440\u043E\u043A")
                                      ]),
                                      _: 1
                                    })
                                  ])
                                ]),
                                createVNode("div", { class: "flex gap-2" }, [
                                  createVNode("div", { class: "relative" }, [
                                    createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1" }, {
                                      default: withCtx(() => [
                                        createTextVNode("\u0423\u043F-\u043A\u0430")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_UiInput, {
                                      modelValue: newReportPacker.value.items,
                                      "onUpdate:modelValue": ($event) => newReportPacker.value.items = $event,
                                      modelModifiers: { number: true },
                                      placeholder: "\u0423\u043F-\u043A\u0430",
                                      type: "number",
                                      min: "0"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  createVNode("div", { class: "relative" }, [
                                    createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1" }, {
                                      default: withCtx(() => [
                                        createTextVNode("\u0411\u043B\u043E\u043A\u0438")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_UiInput, {
                                      modelValue: newReportPacker.value.adapters,
                                      "onUpdate:modelValue": ($event) => newReportPacker.value.adapters = $event,
                                      modelModifiers: { number: true },
                                      placeholder: "\u0411\u043B\u043E\u043A\u0438",
                                      type: "number",
                                      min: "0"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  createVNode("div", { class: "relative" }, [
                                    createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1" }, {
                                      default: withCtx(() => [
                                        createTextVNode("\u041F\u043B\u0435\u043D\u043A\u0430")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_UiInput, {
                                      modelValue: newReportPacker.value.lam,
                                      "onUpdate:modelValue": ($event) => newReportPacker.value.lam = $event,
                                      modelModifiers: { number: true },
                                      placeholder: "\u041F\u043B\u0435\u043D\u043A\u0430",
                                      type: "number",
                                      min: "0"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  createVNode("div", { class: "relative" }, [
                                    createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1" }, {
                                      default: withCtx(() => [
                                        createTextVNode("\u0414\u0438\u043C")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_UiInput, {
                                      modelValue: newReportPacker.value.dimmers,
                                      "onUpdate:modelValue": ($event) => newReportPacker.value.dimmers = $event,
                                      modelModifiers: { number: true },
                                      placeholder: "\u0414\u0438\u043C",
                                      type: "number",
                                      min: "0"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ])
                                ]),
                                createVNode("div", { class: "relative" }, [
                                  newReportPacker.value.dopsComment ? (openBlock(), createBlock(_component_UiLabel, {
                                    key: 0,
                                    class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("\u0414\u043E\u043F \u0440\u0430\u0431\u043E\u0442\u044B")
                                    ]),
                                    _: 1
                                  })) : createCommentVNode("", true),
                                  createVNode(_component_UiInput, {
                                    modelValue: newReportPacker.value.dopsComment,
                                    "onUpdate:modelValue": ($event) => newReportPacker.value.dopsComment = $event,
                                    placeholder: "\u0414\u043E\u043F \u0440\u0430\u0431\u043E\u0442\u044B"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                createVNode("div", { class: "relative" }, [
                                  newReportPacker.value.dops ? (openBlock(), createBlock(_component_UiLabel, {
                                    key: 0,
                                    class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C")
                                    ]),
                                    _: 1
                                  })) : createCommentVNode("", true),
                                  createVNode(_component_UiInput, {
                                    modelValue: newReportPacker.value.dops,
                                    "onUpdate:modelValue": ($event) => newReportPacker.value.dops = $event,
                                    placeholder: "\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C",
                                    type: "number"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                createVNode("span", null, " \u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C: " + toDisplayString(newReportPacker.value.cost) + "\u0440. ", 1)
                              ]),
                              createVNode("div", { class: "flex justify-between w-full" }, [
                                createVNode(_component_UiButton, {
                                  disabled: disabled.value,
                                  onClick: createPackerReport
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" \u0421\u043E\u0437\u0434\u0430\u0442\u044C ")
                                  ]),
                                  _: 1
                                }, 8, ["disabled"])
                              ])
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UiTabsContent, { value: "other" }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "flex flex-col gap-5" }, [
                                createVNode("div", { class: "relative" }, [
                                  newOtherReport.value.date ? (openBlock(), createBlock(_component_UiLabel, {
                                    key: 0,
                                    class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("\u0414\u0430\u0442\u0430")
                                    ]),
                                    _: 1
                                  })) : createCommentVNode("", true),
                                  createVNode(_component_UiInput, {
                                    modelValue: newOtherReport.value.date,
                                    "onUpdate:modelValue": ($event) => newOtherReport.value.date = $event,
                                    type: "date",
                                    placeholder: "\u0414\u0430\u0442\u0430",
                                    class: newOtherReport.value.date ? "" : "outline-1 outline-rose-300"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "class"])
                                ]),
                                createVNode("div", { class: "relative" }, [
                                  newOtherReport.value.name ? (openBlock(), createBlock(_component_UiLabel, {
                                    key: 0,
                                    class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435")
                                    ]),
                                    _: 1
                                  })) : createCommentVNode("", true),
                                  createVNode(_component_UiInput, {
                                    modelValue: newOtherReport.value.name,
                                    "onUpdate:modelValue": ($event) => newOtherReport.value.name = $event,
                                    placeholder: "\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435",
                                    class: newOtherReport.value.name ? "" : "outline-1 outline-rose-300"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "class"])
                                ]),
                                createVNode("div", { class: "relative" }, [
                                  newOtherReport.value.cost ? (openBlock(), createBlock(_component_UiLabel, {
                                    key: 0,
                                    class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C")
                                    ]),
                                    _: 1
                                  })) : createCommentVNode("", true),
                                  createVNode(_component_UiInput, {
                                    modelValue: newOtherReport.value.cost,
                                    "onUpdate:modelValue": ($event) => newOtherReport.value.cost = $event,
                                    type: "number",
                                    placeholder: "\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C",
                                    class: newOtherReport.value.cost ? "" : "outline-1 outline-rose-300"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "class"])
                                ]),
                                createVNode("span", null, " \u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C: " + toDisplayString(newOtherReport.value.cost) + "\u0440. ", 1)
                              ]),
                              createVNode("div", { class: "flex justify-between w-full" }, [
                                createVNode(_component_UiButton, {
                                  disabled: disabled.value,
                                  onClick: createOtherReport
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" \u0421\u043E\u0437\u0434\u0430\u0442\u044C ")
                                  ]),
                                  _: 1
                                }, 8, ["disabled"])
                              ])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    createVNode(_component_UiDialogFooter)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UiDialogTrigger, { "as-child": "" }, {
                default: withCtx(() => [
                  createVNode(_component_UiButton, { class: "w-full" }, {
                    default: withCtx(() => [
                      createTextVNode("\u0421\u043E\u0437\u0434\u0430\u0442\u044C")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_UiDialogContent, { class: "max-w-[400px] flex flex-col top-0 translate-y-[0px]" }, {
                default: withCtx(() => [
                  createVNode(_component_UiDialogHeader, null, {
                    default: withCtx(() => [
                      createVNode(_component_UiDialogTitle, null, {
                        default: withCtx(() => [
                          createTextVNode("\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u0437\u0430\u043F\u0438\u0441\u044C")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_UiDialogDescription)
                    ]),
                    _: 1
                  }),
                  createVNode("div", { class: "" }, [
                    createVNode(_component_UiTabs, {
                      modelValue: curTab.value,
                      "onUpdate:modelValue": ($event) => curTab.value = $event
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_UiTabsList, { class: "w-full mb-4" }, {
                          default: withCtx(() => [
                            createVNode(_component_UiTabsTrigger, {
                              class: "w-full",
                              value: "new"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" \u041D\u043E\u0432\u043E\u0435 ")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_UiTabsTrigger, {
                              class: "w-full",
                              value: "other"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" \u0414\u0440\u0443\u0433\u043E\u0435 ")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UiTabsContent, { value: "new" }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "flex flex-col gap-5" }, [
                              createVNode("div", { class: "relative" }, [
                                newReportPacker.value.date ? (openBlock(), createBlock(_component_UiLabel, {
                                  key: 0,
                                  class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("\u0414\u0430\u0442\u0430 \u0441\u043C\u0435\u043D\u044B")
                                  ]),
                                  _: 1
                                })) : createCommentVNode("", true),
                                createVNode(_component_UiInput, {
                                  modelValue: newReportPacker.value.date,
                                  "onUpdate:modelValue": ($event) => newReportPacker.value.date = $event,
                                  type: "date",
                                  placeholder: "\u0414\u0430\u0442\u0430 \u0441\u043C\u0435\u043D\u044B",
                                  class: newReportPacker.value.date ? "" : "outline-1 outline-rose-300"
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "class"])
                              ]),
                              createVNode("div", { class: "relative" }, [
                                newReportPacker.value.name ? (openBlock(), createBlock(_component_UiLabel, {
                                  key: 0,
                                  class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0438\u043B\u0438 \u0441\u0441\u044B\u043B\u043A\u0430")
                                  ]),
                                  _: 1
                                })) : createCommentVNode("", true),
                                createVNode(_component_UiInput, {
                                  modelValue: newReportPacker.value.name,
                                  "onUpdate:modelValue": ($event) => newReportPacker.value.name = $event,
                                  placeholder: "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0438\u043B\u0438 \u0441\u0441\u044B\u043B\u043A\u0430",
                                  class: newReportPacker.value.name ? "" : "outline-1 outline-rose-300"
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "class"])
                              ]),
                              createVNode("div", { class: "flex justify-between" }, [
                                createVNode("div", { class: "relative flex items-center gap-2" }, [
                                  createVNode(_component_UiSwitch, {
                                    checked: newReportPacker.value.overSize,
                                    "onUpdate:checked": ($event) => newReportPacker.value.overSize = $event
                                  }, null, 8, ["checked", "onUpdate:checked"]),
                                  createVNode(_component_UiLabel, { class: "" }, {
                                    default: withCtx(() => [
                                      createTextVNode("\u041D\u0435\u0433\u0430\u0431\u0430\u0440\u0438\u0442")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                createVNode("div", null, "|"),
                                createVNode("div", { class: "relative flex items-center gap-4" }, [
                                  createVNode(_component_UiSwitch, {
                                    checked: newReportPacker.value.isGift,
                                    "onUpdate:checked": ($event) => newReportPacker.value.isGift = $event
                                  }, null, 8, ["checked", "onUpdate:checked"]),
                                  createVNode(_component_UiLabel, { class: "" }, {
                                    default: withCtx(() => [
                                      createTextVNode("\u041F\u043E\u0434\u0430\u0440\u043E\u043A")
                                    ]),
                                    _: 1
                                  })
                                ])
                              ]),
                              createVNode("div", { class: "flex gap-2" }, [
                                createVNode("div", { class: "relative" }, [
                                  createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1" }, {
                                    default: withCtx(() => [
                                      createTextVNode("\u0423\u043F-\u043A\u0430")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_UiInput, {
                                    modelValue: newReportPacker.value.items,
                                    "onUpdate:modelValue": ($event) => newReportPacker.value.items = $event,
                                    modelModifiers: { number: true },
                                    placeholder: "\u0423\u043F-\u043A\u0430",
                                    type: "number",
                                    min: "0"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                createVNode("div", { class: "relative" }, [
                                  createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1" }, {
                                    default: withCtx(() => [
                                      createTextVNode("\u0411\u043B\u043E\u043A\u0438")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_UiInput, {
                                    modelValue: newReportPacker.value.adapters,
                                    "onUpdate:modelValue": ($event) => newReportPacker.value.adapters = $event,
                                    modelModifiers: { number: true },
                                    placeholder: "\u0411\u043B\u043E\u043A\u0438",
                                    type: "number",
                                    min: "0"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                createVNode("div", { class: "relative" }, [
                                  createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1" }, {
                                    default: withCtx(() => [
                                      createTextVNode("\u041F\u043B\u0435\u043D\u043A\u0430")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_UiInput, {
                                    modelValue: newReportPacker.value.lam,
                                    "onUpdate:modelValue": ($event) => newReportPacker.value.lam = $event,
                                    modelModifiers: { number: true },
                                    placeholder: "\u041F\u043B\u0435\u043D\u043A\u0430",
                                    type: "number",
                                    min: "0"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                createVNode("div", { class: "relative" }, [
                                  createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1" }, {
                                    default: withCtx(() => [
                                      createTextVNode("\u0414\u0438\u043C")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_UiInput, {
                                    modelValue: newReportPacker.value.dimmers,
                                    "onUpdate:modelValue": ($event) => newReportPacker.value.dimmers = $event,
                                    modelModifiers: { number: true },
                                    placeholder: "\u0414\u0438\u043C",
                                    type: "number",
                                    min: "0"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ])
                              ]),
                              createVNode("div", { class: "relative" }, [
                                newReportPacker.value.dopsComment ? (openBlock(), createBlock(_component_UiLabel, {
                                  key: 0,
                                  class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("\u0414\u043E\u043F \u0440\u0430\u0431\u043E\u0442\u044B")
                                  ]),
                                  _: 1
                                })) : createCommentVNode("", true),
                                createVNode(_component_UiInput, {
                                  modelValue: newReportPacker.value.dopsComment,
                                  "onUpdate:modelValue": ($event) => newReportPacker.value.dopsComment = $event,
                                  placeholder: "\u0414\u043E\u043F \u0440\u0430\u0431\u043E\u0442\u044B"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              createVNode("div", { class: "relative" }, [
                                newReportPacker.value.dops ? (openBlock(), createBlock(_component_UiLabel, {
                                  key: 0,
                                  class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C")
                                  ]),
                                  _: 1
                                })) : createCommentVNode("", true),
                                createVNode(_component_UiInput, {
                                  modelValue: newReportPacker.value.dops,
                                  "onUpdate:modelValue": ($event) => newReportPacker.value.dops = $event,
                                  placeholder: "\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C",
                                  type: "number"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              createVNode("span", null, " \u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C: " + toDisplayString(newReportPacker.value.cost) + "\u0440. ", 1)
                            ]),
                            createVNode("div", { class: "flex justify-between w-full" }, [
                              createVNode(_component_UiButton, {
                                disabled: disabled.value,
                                onClick: createPackerReport
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" \u0421\u043E\u0437\u0434\u0430\u0442\u044C ")
                                ]),
                                _: 1
                              }, 8, ["disabled"])
                            ])
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UiTabsContent, { value: "other" }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "flex flex-col gap-5" }, [
                              createVNode("div", { class: "relative" }, [
                                newOtherReport.value.date ? (openBlock(), createBlock(_component_UiLabel, {
                                  key: 0,
                                  class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("\u0414\u0430\u0442\u0430")
                                  ]),
                                  _: 1
                                })) : createCommentVNode("", true),
                                createVNode(_component_UiInput, {
                                  modelValue: newOtherReport.value.date,
                                  "onUpdate:modelValue": ($event) => newOtherReport.value.date = $event,
                                  type: "date",
                                  placeholder: "\u0414\u0430\u0442\u0430",
                                  class: newOtherReport.value.date ? "" : "outline-1 outline-rose-300"
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "class"])
                              ]),
                              createVNode("div", { class: "relative" }, [
                                newOtherReport.value.name ? (openBlock(), createBlock(_component_UiLabel, {
                                  key: 0,
                                  class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435")
                                  ]),
                                  _: 1
                                })) : createCommentVNode("", true),
                                createVNode(_component_UiInput, {
                                  modelValue: newOtherReport.value.name,
                                  "onUpdate:modelValue": ($event) => newOtherReport.value.name = $event,
                                  placeholder: "\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435",
                                  class: newOtherReport.value.name ? "" : "outline-1 outline-rose-300"
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "class"])
                              ]),
                              createVNode("div", { class: "relative" }, [
                                newOtherReport.value.cost ? (openBlock(), createBlock(_component_UiLabel, {
                                  key: 0,
                                  class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C")
                                  ]),
                                  _: 1
                                })) : createCommentVNode("", true),
                                createVNode(_component_UiInput, {
                                  modelValue: newOtherReport.value.cost,
                                  "onUpdate:modelValue": ($event) => newOtherReport.value.cost = $event,
                                  type: "number",
                                  placeholder: "\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C",
                                  class: newOtherReport.value.cost ? "" : "outline-1 outline-rose-300"
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "class"])
                              ]),
                              createVNode("span", null, " \u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C: " + toDisplayString(newOtherReport.value.cost) + "\u0440. ", 1)
                            ]),
                            createVNode("div", { class: "flex justify-between w-full" }, [
                              createVNode(_component_UiButton, {
                                disabled: disabled.value,
                                onClick: createOtherReport
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" \u0421\u043E\u0437\u0434\u0430\u0442\u044C ")
                                ]),
                                _: 1
                              }, 8, ["disabled"])
                            ])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  createVNode(_component_UiDialogFooter)
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/my/production/CreatePackerReport.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "EditPackerReport",
  __ssrInlineRender: true,
  props: {
    report: {},
    packerId: {},
    curUser: {}
  },
  emits: ["report-updated", "close"],
  setup(__props, { emit: __emit }) {
    const { $useApi } = useNuxtApp();
    const { toast } = useToast();
    const emit = __emit;
    const props = __props;
    const isOpen = ref(true);
    const disabled = ref(true);
    const editedReport = ref({ ...props.report });
    const calculateCost = () => {
      const { items, dimmers, overSize, isGift, dops, adapters, lam } = editedReport.value;
      const cost = items * 100 + adapters * 60 + lam * 20 + dimmers * 60 + (overSize ? 100 : 0) + (isGift ? 120 : 0) + dops;
      editedReport.value.cost = cost;
    };
    const updatePackerReport = async () => {
      try {
        disabled.value = true;
        await $useApi.patch(`production/packer-report/${editedReport.value.id}`, editedReport.value);
        isOpen.value = false;
        emit("report-updated");
        disabled.value = false;
        toast({
          title: "\u0423\u0441\u043F\u0435\u0445",
          description: "\u041E\u0442\u0447\u0435\u0442 \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D"
        });
      } catch (e) {
        console.log(e);
      }
    };
    const deletePackerReport = async () => {
      try {
        await $useApi.delete(`production/packer-report/${editedReport.value.id}`);
        isOpen.value = false;
        emit("report-updated");
        toast({
          title: "\u0423\u0441\u043F\u0435\u0445",
          description: "\u041E\u0442\u0447\u0435\u0442 \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u0443\u0434\u0430\u043B\u0435\u043D"
        });
      } catch (e) {
        console.log(e);
      }
    };
    watch(
      editedReport,
      () => {
        const { date, name, items } = editedReport.value;
        calculateCost();
        disabled.value = !(date && name && items > 0);
      },
      { deep: true }
    );
    watch(isOpen, (newValue) => {
      if (!newValue) {
        emit("close");
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiDialog = _sfc_main$4$2;
      const _component_UiDialogContent = _sfc_main$l;
      const _component_UiDialogHeader = _sfc_main$2$5;
      const _component_UiDialogTitle = _sfc_main$1$5;
      const _component_UiDialogDescription = _sfc_main$m;
      const _component_UiLabel = _sfc_main$s;
      const _component_UiInput = _sfc_main$k;
      const _component_UiSwitch = _sfc_main$v;
      const _component_UiTextarea = _sfc_main$t;
      const _component_UiDialogFooter = _sfc_main$o;
      const _component_UiButton = _sfc_main$q;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_UiDialog, {
        open: isOpen.value,
        "onUpdate:open": ($event) => isOpen.value = $event
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UiDialogContent, { class: "max-w-[400px] flex flex-col top-0 translate-y-[0px]" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                var _a, _b, _c, _d;
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UiDialogHeader, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UiDialogTitle, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0437\u0430\u043F\u0438\u0441\u044C`);
                            } else {
                              return [
                                createTextVNode("\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0437\u0430\u043F\u0438\u0441\u044C")
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
                              createTextVNode("\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0437\u0430\u043F\u0438\u0441\u044C")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UiDialogDescription)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<div class="flex flex-col gap-5"${_scopeId2}><div class="relative"${_scopeId2}>`);
                  if (editedReport.value.date) {
                    _push3(ssrRenderComponent(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`\u0414\u0430\u0442\u0430 \u0441\u043C\u0435\u043D\u044B`);
                        } else {
                          return [
                            createTextVNode("\u0414\u0430\u0442\u0430 \u0441\u043C\u0435\u043D\u044B")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(ssrRenderComponent(_component_UiInput, {
                    modelValue: editedReport.value.date,
                    "onUpdate:modelValue": ($event) => editedReport.value.date = $event,
                    type: "date",
                    placeholder: "\u0414\u0430\u0442\u0430 \u0441\u043C\u0435\u043D\u044B",
                    class: editedReport.value.date ? "" : "outline-1 outline-rose-300"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div class="relative"${_scopeId2}>`);
                  if (editedReport.value.name) {
                    _push3(ssrRenderComponent(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0438\u043B\u0438 \u0441\u0441\u044B\u043B\u043A\u0430`);
                        } else {
                          return [
                            createTextVNode("\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0438\u043B\u0438 \u0441\u0441\u044B\u043B\u043A\u0430")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(ssrRenderComponent(_component_UiInput, {
                    modelValue: editedReport.value.name,
                    "onUpdate:modelValue": ($event) => editedReport.value.name = $event,
                    placeholder: "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0438\u043B\u0438 \u0441\u0441\u044B\u043B\u043A\u0430",
                    class: editedReport.value.name ? "" : "outline-1 outline-rose-300"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div class="flex justify-between"${_scopeId2}><div class="relative flex items-center gap-2"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UiSwitch, {
                    checked: editedReport.value.overSize,
                    "onUpdate:checked": ($event) => editedReport.value.overSize = $event
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UiLabel, { class: "" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`\u041D\u0435\u0433\u0430\u0431\u0430\u0440\u0438\u0442`);
                      } else {
                        return [
                          createTextVNode("\u041D\u0435\u0433\u0430\u0431\u0430\u0440\u0438\u0442")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div><div${_scopeId2}>|</div><div class="relative flex items-center gap-4"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UiSwitch, {
                    checked: editedReport.value.isGift,
                    "onUpdate:checked": ($event) => editedReport.value.isGift = $event
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UiLabel, { class: "" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`\u041F\u043E\u0434\u0430\u0440\u043E\u043A`);
                      } else {
                        return [
                          createTextVNode("\u041F\u043E\u0434\u0430\u0440\u043E\u043A")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div></div><div class="flex gap-2"${_scopeId2}><div class="relative"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`\u0423\u043F-\u043A\u0430`);
                      } else {
                        return [
                          createTextVNode("\u0423\u043F-\u043A\u0430")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UiInput, {
                    modelValue: editedReport.value.items,
                    "onUpdate:modelValue": ($event) => editedReport.value.items = $event,
                    modelModifiers: { number: true },
                    placeholder: "\u0423\u043F-\u043A\u0430",
                    type: "number",
                    min: "0"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div class="relative"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`\u0411\u043B\u043E\u043A\u0438`);
                      } else {
                        return [
                          createTextVNode("\u0411\u043B\u043E\u043A\u0438")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UiInput, {
                    modelValue: editedReport.value.adapters,
                    "onUpdate:modelValue": ($event) => editedReport.value.adapters = $event,
                    modelModifiers: { number: true },
                    placeholder: "\u0411\u043B\u043E\u043A\u0438",
                    type: "number",
                    min: "0"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div class="relative"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`\u041F\u043B\u0435\u043D\u043A\u0430`);
                      } else {
                        return [
                          createTextVNode("\u041F\u043B\u0435\u043D\u043A\u0430")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UiInput, {
                    modelValue: editedReport.value.lam,
                    "onUpdate:modelValue": ($event) => editedReport.value.lam = $event,
                    modelModifiers: { number: true },
                    placeholder: "\u041F\u043B\u0435\u043D\u043A\u0430",
                    type: "number",
                    min: "0"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div class="relative"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`\u0414\u0438\u043C`);
                      } else {
                        return [
                          createTextVNode("\u0414\u0438\u043C")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UiInput, {
                    modelValue: editedReport.value.dimmers,
                    "onUpdate:modelValue": ($event) => editedReport.value.dimmers = $event,
                    modelModifiers: { number: true },
                    placeholder: "\u0414\u0438\u043C",
                    type: "number",
                    min: "0"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div></div><div class="relative"${_scopeId2}>`);
                  if (editedReport.value.dopsComment) {
                    _push3(ssrRenderComponent(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`\u0414\u043E\u043F \u0440\u0430\u0431\u043E\u0442\u044B`);
                        } else {
                          return [
                            createTextVNode("\u0414\u043E\u043F \u0440\u0430\u0431\u043E\u0442\u044B")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(ssrRenderComponent(_component_UiInput, {
                    modelValue: editedReport.value.dopsComment,
                    "onUpdate:modelValue": ($event) => editedReport.value.dopsComment = $event,
                    placeholder: "\u0414\u043E\u043F \u0440\u0430\u0431\u043E\u0442\u044B"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div class="relative"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C \u0437\u0430 \u0434\u043E\u043F. \u0440\u0430\u0431\u043E\u0442\u044B`);
                      } else {
                        return [
                          createTextVNode("\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C \u0437\u0430 \u0434\u043E\u043F. \u0440\u0430\u0431\u043E\u0442\u044B")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UiInput, {
                    modelValue: editedReport.value.dops,
                    "onUpdate:modelValue": ($event) => editedReport.value.dops = $event,
                    placeholder: "\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C \u0437\u0430 \u0434\u043E\u043F. \u0440\u0430\u0431\u043E\u0442\u044B",
                    type: "number"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div>`);
                  if (((_a = _ctx.curUser) == null ? void 0 : _a.role.shortName) !== "PACKER") {
                    _push3(`<div class="relative"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`\u0428\u0442\u0440\u0430\u0444`);
                        } else {
                          return [
                            createTextVNode("\u0428\u0442\u0440\u0430\u0444")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_UiInput, {
                      modelValue: editedReport.value.penaltyCost,
                      "onUpdate:modelValue": ($event) => editedReport.value.penaltyCost = $event,
                      placeholder: "\u0428\u0442\u0440\u0430\u0444",
                      type: "number"
                    }, null, _parent3, _scopeId2));
                    _push3(`</div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`<div class="relative"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UiTextarea, {
                    modelValue: editedReport.value.comment,
                    "onUpdate:modelValue": ($event) => editedReport.value.comment = $event,
                    placeholder: "\u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439",
                    disabled: ((_b = _ctx.curUser) == null ? void 0 : _b.role.shortName) === "PACKER" ? true : false
                  }, null, _parent3, _scopeId2));
                  if (editedReport.value.comment) {
                    _push3(ssrRenderComponent(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(` \u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439 `);
                        } else {
                          return [
                            createTextVNode(" \u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439 ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`</div><span${_scopeId2}> \u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C: ${ssrInterpolate(editedReport.value.cost)}\u0440. </span></div>`);
                  _push3(ssrRenderComponent(_component_UiDialogFooter, { class: "w-full" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="flex justify-between w-full gap-2"${_scopeId3}>`);
                        _push4(ssrRenderComponent(_component_UiButton, {
                          variant: "destructive",
                          onClick: deletePackerReport
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` \u0423\u0434\u0430\u043B\u0438\u0442\u044C `);
                            } else {
                              return [
                                createTextVNode(" \u0423\u0434\u0430\u043B\u0438\u0442\u044C ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_UiButton, {
                          disabled: disabled.value,
                          onClick: updatePackerReport
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` \u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C `);
                            } else {
                              return [
                                createTextVNode(" \u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`</div>`);
                      } else {
                        return [
                          createVNode("div", { class: "flex justify-between w-full gap-2" }, [
                            createVNode(_component_UiButton, {
                              variant: "destructive",
                              onClick: deletePackerReport
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" \u0423\u0434\u0430\u043B\u0438\u0442\u044C ")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_UiButton, {
                              disabled: disabled.value,
                              onClick: updatePackerReport
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" \u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C ")
                              ]),
                              _: 1
                            }, 8, ["disabled"])
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UiDialogHeader, null, {
                      default: withCtx(() => [
                        createVNode(_component_UiDialogTitle, null, {
                          default: withCtx(() => [
                            createTextVNode("\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0437\u0430\u043F\u0438\u0441\u044C")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UiDialogDescription)
                      ]),
                      _: 1
                    }),
                    createVNode("div", { class: "flex flex-col gap-5" }, [
                      createVNode("div", { class: "relative" }, [
                        editedReport.value.date ? (openBlock(), createBlock(_component_UiLabel, {
                          key: 0,
                          class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap"
                        }, {
                          default: withCtx(() => [
                            createTextVNode("\u0414\u0430\u0442\u0430 \u0441\u043C\u0435\u043D\u044B")
                          ]),
                          _: 1
                        })) : createCommentVNode("", true),
                        createVNode(_component_UiInput, {
                          modelValue: editedReport.value.date,
                          "onUpdate:modelValue": ($event) => editedReport.value.date = $event,
                          type: "date",
                          placeholder: "\u0414\u0430\u0442\u0430 \u0441\u043C\u0435\u043D\u044B",
                          class: editedReport.value.date ? "" : "outline-1 outline-rose-300"
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "class"])
                      ]),
                      createVNode("div", { class: "relative" }, [
                        editedReport.value.name ? (openBlock(), createBlock(_component_UiLabel, {
                          key: 0,
                          class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1"
                        }, {
                          default: withCtx(() => [
                            createTextVNode("\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0438\u043B\u0438 \u0441\u0441\u044B\u043B\u043A\u0430")
                          ]),
                          _: 1
                        })) : createCommentVNode("", true),
                        createVNode(_component_UiInput, {
                          modelValue: editedReport.value.name,
                          "onUpdate:modelValue": ($event) => editedReport.value.name = $event,
                          placeholder: "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0438\u043B\u0438 \u0441\u0441\u044B\u043B\u043A\u0430",
                          class: editedReport.value.name ? "" : "outline-1 outline-rose-300"
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "class"])
                      ]),
                      createVNode("div", { class: "flex justify-between" }, [
                        createVNode("div", { class: "relative flex items-center gap-2" }, [
                          createVNode(_component_UiSwitch, {
                            checked: editedReport.value.overSize,
                            "onUpdate:checked": ($event) => editedReport.value.overSize = $event
                          }, null, 8, ["checked", "onUpdate:checked"]),
                          createVNode(_component_UiLabel, { class: "" }, {
                            default: withCtx(() => [
                              createTextVNode("\u041D\u0435\u0433\u0430\u0431\u0430\u0440\u0438\u0442")
                            ]),
                            _: 1
                          })
                        ]),
                        createVNode("div", null, "|"),
                        createVNode("div", { class: "relative flex items-center gap-4" }, [
                          createVNode(_component_UiSwitch, {
                            checked: editedReport.value.isGift,
                            "onUpdate:checked": ($event) => editedReport.value.isGift = $event
                          }, null, 8, ["checked", "onUpdate:checked"]),
                          createVNode(_component_UiLabel, { class: "" }, {
                            default: withCtx(() => [
                              createTextVNode("\u041F\u043E\u0434\u0430\u0440\u043E\u043A")
                            ]),
                            _: 1
                          })
                        ])
                      ]),
                      createVNode("div", { class: "flex gap-2" }, [
                        createVNode("div", { class: "relative" }, [
                          createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1" }, {
                            default: withCtx(() => [
                              createTextVNode("\u0423\u043F-\u043A\u0430")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UiInput, {
                            modelValue: editedReport.value.items,
                            "onUpdate:modelValue": ($event) => editedReport.value.items = $event,
                            modelModifiers: { number: true },
                            placeholder: "\u0423\u043F-\u043A\u0430",
                            type: "number",
                            min: "0"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        createVNode("div", { class: "relative" }, [
                          createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1" }, {
                            default: withCtx(() => [
                              createTextVNode("\u0411\u043B\u043E\u043A\u0438")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UiInput, {
                            modelValue: editedReport.value.adapters,
                            "onUpdate:modelValue": ($event) => editedReport.value.adapters = $event,
                            modelModifiers: { number: true },
                            placeholder: "\u0411\u043B\u043E\u043A\u0438",
                            type: "number",
                            min: "0"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        createVNode("div", { class: "relative" }, [
                          createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1" }, {
                            default: withCtx(() => [
                              createTextVNode("\u041F\u043B\u0435\u043D\u043A\u0430")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UiInput, {
                            modelValue: editedReport.value.lam,
                            "onUpdate:modelValue": ($event) => editedReport.value.lam = $event,
                            modelModifiers: { number: true },
                            placeholder: "\u041F\u043B\u0435\u043D\u043A\u0430",
                            type: "number",
                            min: "0"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        createVNode("div", { class: "relative" }, [
                          createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1" }, {
                            default: withCtx(() => [
                              createTextVNode("\u0414\u0438\u043C")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UiInput, {
                            modelValue: editedReport.value.dimmers,
                            "onUpdate:modelValue": ($event) => editedReport.value.dimmers = $event,
                            modelModifiers: { number: true },
                            placeholder: "\u0414\u0438\u043C",
                            type: "number",
                            min: "0"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ])
                      ]),
                      createVNode("div", { class: "relative" }, [
                        editedReport.value.dopsComment ? (openBlock(), createBlock(_component_UiLabel, {
                          key: 0,
                          class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1"
                        }, {
                          default: withCtx(() => [
                            createTextVNode("\u0414\u043E\u043F \u0440\u0430\u0431\u043E\u0442\u044B")
                          ]),
                          _: 1
                        })) : createCommentVNode("", true),
                        createVNode(_component_UiInput, {
                          modelValue: editedReport.value.dopsComment,
                          "onUpdate:modelValue": ($event) => editedReport.value.dopsComment = $event,
                          placeholder: "\u0414\u043E\u043F \u0440\u0430\u0431\u043E\u0442\u044B"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      createVNode("div", { class: "relative" }, [
                        createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1" }, {
                          default: withCtx(() => [
                            createTextVNode("\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C \u0437\u0430 \u0434\u043E\u043F. \u0440\u0430\u0431\u043E\u0442\u044B")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UiInput, {
                          modelValue: editedReport.value.dops,
                          "onUpdate:modelValue": ($event) => editedReport.value.dops = $event,
                          placeholder: "\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C \u0437\u0430 \u0434\u043E\u043F. \u0440\u0430\u0431\u043E\u0442\u044B",
                          type: "number"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      ((_c = _ctx.curUser) == null ? void 0 : _c.role.shortName) !== "PACKER" ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: "relative"
                      }, [
                        createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1" }, {
                          default: withCtx(() => [
                            createTextVNode("\u0428\u0442\u0440\u0430\u0444")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UiInput, {
                          modelValue: editedReport.value.penaltyCost,
                          "onUpdate:modelValue": ($event) => editedReport.value.penaltyCost = $event,
                          placeholder: "\u0428\u0442\u0440\u0430\u0444",
                          type: "number"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ])) : createCommentVNode("", true),
                      createVNode("div", { class: "relative" }, [
                        createVNode(_component_UiTextarea, {
                          modelValue: editedReport.value.comment,
                          "onUpdate:modelValue": ($event) => editedReport.value.comment = $event,
                          placeholder: "\u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439",
                          disabled: ((_d = _ctx.curUser) == null ? void 0 : _d.role.shortName) === "PACKER" ? true : false
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"]),
                        editedReport.value.comment ? (openBlock(), createBlock(_component_UiLabel, {
                          key: 0,
                          class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" \u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439 ")
                          ]),
                          _: 1
                        })) : createCommentVNode("", true)
                      ]),
                      createVNode("span", null, " \u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C: " + toDisplayString(editedReport.value.cost) + "\u0440. ", 1)
                    ]),
                    createVNode(_component_UiDialogFooter, { class: "w-full" }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "flex justify-between w-full gap-2" }, [
                          createVNode(_component_UiButton, {
                            variant: "destructive",
                            onClick: deletePackerReport
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" \u0423\u0434\u0430\u043B\u0438\u0442\u044C ")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UiButton, {
                            disabled: disabled.value,
                            onClick: updatePackerReport
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" \u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C ")
                            ]),
                            _: 1
                          }, 8, ["disabled"])
                        ])
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UiDialogContent, { class: "max-w-[400px] flex flex-col top-0 translate-y-[0px]" }, {
                default: withCtx(() => {
                  var _a, _b;
                  return [
                    createVNode(_component_UiDialogHeader, null, {
                      default: withCtx(() => [
                        createVNode(_component_UiDialogTitle, null, {
                          default: withCtx(() => [
                            createTextVNode("\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0437\u0430\u043F\u0438\u0441\u044C")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UiDialogDescription)
                      ]),
                      _: 1
                    }),
                    createVNode("div", { class: "flex flex-col gap-5" }, [
                      createVNode("div", { class: "relative" }, [
                        editedReport.value.date ? (openBlock(), createBlock(_component_UiLabel, {
                          key: 0,
                          class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap"
                        }, {
                          default: withCtx(() => [
                            createTextVNode("\u0414\u0430\u0442\u0430 \u0441\u043C\u0435\u043D\u044B")
                          ]),
                          _: 1
                        })) : createCommentVNode("", true),
                        createVNode(_component_UiInput, {
                          modelValue: editedReport.value.date,
                          "onUpdate:modelValue": ($event) => editedReport.value.date = $event,
                          type: "date",
                          placeholder: "\u0414\u0430\u0442\u0430 \u0441\u043C\u0435\u043D\u044B",
                          class: editedReport.value.date ? "" : "outline-1 outline-rose-300"
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "class"])
                      ]),
                      createVNode("div", { class: "relative" }, [
                        editedReport.value.name ? (openBlock(), createBlock(_component_UiLabel, {
                          key: 0,
                          class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1"
                        }, {
                          default: withCtx(() => [
                            createTextVNode("\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0438\u043B\u0438 \u0441\u0441\u044B\u043B\u043A\u0430")
                          ]),
                          _: 1
                        })) : createCommentVNode("", true),
                        createVNode(_component_UiInput, {
                          modelValue: editedReport.value.name,
                          "onUpdate:modelValue": ($event) => editedReport.value.name = $event,
                          placeholder: "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0438\u043B\u0438 \u0441\u0441\u044B\u043B\u043A\u0430",
                          class: editedReport.value.name ? "" : "outline-1 outline-rose-300"
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "class"])
                      ]),
                      createVNode("div", { class: "flex justify-between" }, [
                        createVNode("div", { class: "relative flex items-center gap-2" }, [
                          createVNode(_component_UiSwitch, {
                            checked: editedReport.value.overSize,
                            "onUpdate:checked": ($event) => editedReport.value.overSize = $event
                          }, null, 8, ["checked", "onUpdate:checked"]),
                          createVNode(_component_UiLabel, { class: "" }, {
                            default: withCtx(() => [
                              createTextVNode("\u041D\u0435\u0433\u0430\u0431\u0430\u0440\u0438\u0442")
                            ]),
                            _: 1
                          })
                        ]),
                        createVNode("div", null, "|"),
                        createVNode("div", { class: "relative flex items-center gap-4" }, [
                          createVNode(_component_UiSwitch, {
                            checked: editedReport.value.isGift,
                            "onUpdate:checked": ($event) => editedReport.value.isGift = $event
                          }, null, 8, ["checked", "onUpdate:checked"]),
                          createVNode(_component_UiLabel, { class: "" }, {
                            default: withCtx(() => [
                              createTextVNode("\u041F\u043E\u0434\u0430\u0440\u043E\u043A")
                            ]),
                            _: 1
                          })
                        ])
                      ]),
                      createVNode("div", { class: "flex gap-2" }, [
                        createVNode("div", { class: "relative" }, [
                          createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1" }, {
                            default: withCtx(() => [
                              createTextVNode("\u0423\u043F-\u043A\u0430")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UiInput, {
                            modelValue: editedReport.value.items,
                            "onUpdate:modelValue": ($event) => editedReport.value.items = $event,
                            modelModifiers: { number: true },
                            placeholder: "\u0423\u043F-\u043A\u0430",
                            type: "number",
                            min: "0"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        createVNode("div", { class: "relative" }, [
                          createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1" }, {
                            default: withCtx(() => [
                              createTextVNode("\u0411\u043B\u043E\u043A\u0438")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UiInput, {
                            modelValue: editedReport.value.adapters,
                            "onUpdate:modelValue": ($event) => editedReport.value.adapters = $event,
                            modelModifiers: { number: true },
                            placeholder: "\u0411\u043B\u043E\u043A\u0438",
                            type: "number",
                            min: "0"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        createVNode("div", { class: "relative" }, [
                          createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1" }, {
                            default: withCtx(() => [
                              createTextVNode("\u041F\u043B\u0435\u043D\u043A\u0430")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UiInput, {
                            modelValue: editedReport.value.lam,
                            "onUpdate:modelValue": ($event) => editedReport.value.lam = $event,
                            modelModifiers: { number: true },
                            placeholder: "\u041F\u043B\u0435\u043D\u043A\u0430",
                            type: "number",
                            min: "0"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        createVNode("div", { class: "relative" }, [
                          createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1" }, {
                            default: withCtx(() => [
                              createTextVNode("\u0414\u0438\u043C")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UiInput, {
                            modelValue: editedReport.value.dimmers,
                            "onUpdate:modelValue": ($event) => editedReport.value.dimmers = $event,
                            modelModifiers: { number: true },
                            placeholder: "\u0414\u0438\u043C",
                            type: "number",
                            min: "0"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ])
                      ]),
                      createVNode("div", { class: "relative" }, [
                        editedReport.value.dopsComment ? (openBlock(), createBlock(_component_UiLabel, {
                          key: 0,
                          class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1"
                        }, {
                          default: withCtx(() => [
                            createTextVNode("\u0414\u043E\u043F \u0440\u0430\u0431\u043E\u0442\u044B")
                          ]),
                          _: 1
                        })) : createCommentVNode("", true),
                        createVNode(_component_UiInput, {
                          modelValue: editedReport.value.dopsComment,
                          "onUpdate:modelValue": ($event) => editedReport.value.dopsComment = $event,
                          placeholder: "\u0414\u043E\u043F \u0440\u0430\u0431\u043E\u0442\u044B"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      createVNode("div", { class: "relative" }, [
                        createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1" }, {
                          default: withCtx(() => [
                            createTextVNode("\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C \u0437\u0430 \u0434\u043E\u043F. \u0440\u0430\u0431\u043E\u0442\u044B")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UiInput, {
                          modelValue: editedReport.value.dops,
                          "onUpdate:modelValue": ($event) => editedReport.value.dops = $event,
                          placeholder: "\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C \u0437\u0430 \u0434\u043E\u043F. \u0440\u0430\u0431\u043E\u0442\u044B",
                          type: "number"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      ((_a = _ctx.curUser) == null ? void 0 : _a.role.shortName) !== "PACKER" ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: "relative"
                      }, [
                        createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1" }, {
                          default: withCtx(() => [
                            createTextVNode("\u0428\u0442\u0440\u0430\u0444")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UiInput, {
                          modelValue: editedReport.value.penaltyCost,
                          "onUpdate:modelValue": ($event) => editedReport.value.penaltyCost = $event,
                          placeholder: "\u0428\u0442\u0440\u0430\u0444",
                          type: "number"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ])) : createCommentVNode("", true),
                      createVNode("div", { class: "relative" }, [
                        createVNode(_component_UiTextarea, {
                          modelValue: editedReport.value.comment,
                          "onUpdate:modelValue": ($event) => editedReport.value.comment = $event,
                          placeholder: "\u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439",
                          disabled: ((_b = _ctx.curUser) == null ? void 0 : _b.role.shortName) === "PACKER" ? true : false
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"]),
                        editedReport.value.comment ? (openBlock(), createBlock(_component_UiLabel, {
                          key: 0,
                          class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" \u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439 ")
                          ]),
                          _: 1
                        })) : createCommentVNode("", true)
                      ]),
                      createVNode("span", null, " \u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C: " + toDisplayString(editedReport.value.cost) + "\u0440. ", 1)
                    ]),
                    createVNode(_component_UiDialogFooter, { class: "w-full" }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "flex justify-between w-full gap-2" }, [
                          createVNode(_component_UiButton, {
                            variant: "destructive",
                            onClick: deletePackerReport
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" \u0423\u0434\u0430\u043B\u0438\u0442\u044C ")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UiButton, {
                            disabled: disabled.value,
                            onClick: updatePackerReport
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" \u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C ")
                            ]),
                            _: 1
                          }, 8, ["disabled"])
                        ])
                      ]),
                      _: 1
                    })
                  ];
                }),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/my/production/EditPackerReport.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "Packers",
  __ssrInlineRender: true,
  props: {
    period: {}
  },
  setup(__props) {
    const authStore = useAuthStore();
    const { $useApi } = useNuxtApp();
    const { toast } = useToast();
    const props = __props;
    const curUser = authStore.user;
    const period = ref(props.period);
    const minDate = ref(/* @__PURE__ */ new Date(props.period + "-01"));
    const maxDate = ref(new Date(+props.period.split("-")[0], +props.period.split("-")[1], 0));
    const packersList = ref([]);
    const curPacker = ref(null);
    const reports = ref([]);
    const isLoading = ref(false);
    const error = ref(null);
    const isEditModalOpen = ref(false);
    const editingReport = ref(null);
    const date = ref();
    const isEditOtherModalOpen = ref(false);
    const editingOtherReport = ref(null);
    const totalCost = ref(0);
    const range = ref([
      new Date(props.period).toISOString().slice(0, 10),
      new Date(+props.period.split("-")[0], +props.period.split("-")[1], 1).toISOString().slice(0, 10)
    ]);
    const getPackerReports = async () => {
      if (!curPacker.value) return;
      try {
        isLoading.value = true;
        error.value = null;
        const from = new Date(range.value[0]).toISOString().slice(0, 10);
        const to = new Date(range.value[1]).toISOString().slice(0, 10);
        const { data } = await $useApi.get(`production/packer/${curPacker.value.id}/reports`, {
          params: { from, to }
        });
        reports.value = data;
        totalCost.value = data.reduce((a, b) => a + b.cost - b.penaltyCost, 0);
      } catch {
        error.value = "\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u043E\u0442\u0447\u0435\u0442\u044B";
        toast({
          title: "\u041E\u0448\u0438\u0431\u043A\u0430",
          description: error.value,
          variant: "destructive"
        });
      } finally {
        isLoading.value = false;
      }
    };
    const editReport = (report) => {
      if (report.isOther) {
        editingOtherReport.value = { ...report };
        isEditOtherModalOpen.value = true;
      } else {
        editingReport.value = { ...report };
        isEditModalOpen.value = true;
      }
    };
    const handleReportUpdated = async () => {
      await getPackerReports();
      isEditModalOpen.value = false;
      editingReport.value = null;
    };
    const loadPackerShifts = async () => {
      if (!curPacker.value) return;
      try {
        const { data } = await $useApi.get(`production/packer/${curPacker.value.id}/shifts`, {
          params: { period: period.value }
        });
        date.value = data.map((d) => d.shift_date);
      } catch {
        toast({
          title: "\u041E\u0448\u0438\u0431\u043A\u0430",
          description: "\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u0441\u043C\u0435\u043D\u044B",
          variant: "destructive"
        });
      }
    };
    const format2 = (date2) => {
      return "\u0420\u0430\u0431\u043E\u0447\u0438\u0445 \u0434\u043D\u0435\u0439: " + date2.length;
    };
    const formatRange = (date2) => {
      return "\u041F\u0435\u0440\u0438\u043E\u0434 \u0441 " + date2.map((d) => {
        const date3 = new Date(d).toISOString().slice(0, 10).split("-");
        const day = date3[2];
        const mounth = date3[1];
        const year = date3[0];
        return `${day}.${mounth}.${year}`;
      }).join(" \u043F\u043E ");
    };
    const savePackerShifts = async () => {
      if (!curPacker.value) return;
      try {
        const formattedDates = date.value ? date.value.map((d) => new Date(d).toISOString().slice(0, 10)) : [];
        await $useApi.post(`production/packer/${curPacker.value.id}/shifts`, {
          shiftDates: formattedDates,
          period: period.value
        });
        toast({
          title: "\u0423\u0441\u043F\u0435\u0445",
          description: "\u0421\u043C\u0435\u043D\u044B \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u044B"
        });
      } catch (e) {
        console.log(e);
        toast({
          title: "\u041E\u0448\u0438\u0431\u043A\u0430",
          description: "\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0441\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u0441\u043C\u0435\u043D\u044B",
          variant: "destructive"
        });
      }
    };
    const dateFormat2 = (date2) => {
      const d = new Date(date2);
      return `${d.getDate().toString().padStart(2, "0")}.${(d.getMonth() + 1).toString().padStart(2, "0")}.${d.getFullYear()}`;
    };
    watch([curPacker, period], () => {
      if (curPacker.value) {
        getPackerReports();
        loadPackerShifts();
      }
    });
    watch(range, () => {
      getPackerReports();
    }, { deep: true });
    return (_ctx, _push, _parent, _attrs) => {
      var _a2, _b2, _c2;
      var _a, _b, _c, _d, _e;
      const _component_MyComboboxModels = _sfc_main$h;
      const _component_MyProductionCreatePackerReport = _sfc_main$6;
      const _component_UiTable = _sfc_main$5$1;
      const _component_UiTableCaption = _sfc_main$6$1;
      const _component_UiTableHeader = _sfc_main$i;
      const _component_UiTableRow = _sfc_main$2$2;
      const _component_UiTableHead = _sfc_main$1$2;
      const _component_UiTableBody = _sfc_main$4$1;
      const _component_UiTableCell = _sfc_main$3$1;
      const _component_MyProductionEditPackerReport = _sfc_main$5;
      const _component_MyProductionEditOtherReport = _sfc_main$b;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col gap-2" }, _attrs))}><div class="flex flex-col gap-2"><div class="flex gap-2">`);
      if (packersList.value.length > 1 || ((_a = unref(curUser)) == null ? void 0 : _a.role.shortName) !== "PACKER") {
        _push(ssrRenderComponent(_component_MyComboboxModels, {
          items: packersList.value.map((p) => ({ value: p.id, label: p.fullName })),
          class: "w-[180px]",
          label: ((_b = curPacker.value) == null ? void 0 : _b.fullName) || "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0443\u043F\u0430\u043A\u043E\u0432\u0449\u0438\u043A\u0430",
          onSelectedItem: (value) => {
            curPacker.value = packersList.value.find((p) => p.id === value) || null;
          }
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_component_MyProductionCreatePackerReport, {
        "packer-id": (_a2 = (_c = curPacker.value) == null ? void 0 : _c.id) != null ? _a2 : 0,
        class: "w-full",
        onReportCreated: getPackerReports
      }, null, _parent));
      _push(`</div><div class="flex items-center"><div class="w-full">`);
      _push(ssrRenderComponent(unref(Qn), {
        modelValue: range.value,
        "onUpdate:modelValue": ($event) => range.value = $event,
        range: "",
        "enable-time-picker": false,
        "min-date": minDate.value,
        "max-date": maxDate.value,
        "auto-apply": "",
        locale: "ru",
        placeholder: "\u0412\u044B\u0431\u0440\u0430\u0442\u044C \u0434\u043D\u0438",
        "select-text": "\u0413\u043E\u0442\u043E\u0432\u043E",
        "cancel-text": "\u0417\u0430\u043A\u0440\u044B\u0442\u044C",
        class: "grow",
        format: formatRange,
        clearable: false
      }, null, _parent));
      _push(`</div></div><div class="flex items-center"><div class="w-full">`);
      _push(ssrRenderComponent(unref(Qn), {
        modelValue: date.value,
        "onUpdate:modelValue": [($event) => date.value = $event, savePackerShifts],
        "multi-dates": "",
        "enable-time-picker": false,
        locale: "ru",
        "min-date": minDate.value,
        "max-date": maxDate.value,
        "start-date": minDate.value,
        placeholder: "\u0412\u044B\u0431\u0440\u0430\u0442\u044C \u0441\u043C\u0435\u043D\u044B",
        "select-text": "\u0413\u043E\u0442\u043E\u0432\u043E",
        "cancel-text": "\u0417\u0430\u043A\u0440\u044B\u0442\u044C",
        format: format2,
        class: "grow",
        clearable: false
      }, null, _parent));
      _push(`</div></div></div><div class="rounded-lg p-2 border border-slate-200 bg-white text-slate-950 shadow-sm dark:border-slate-800 dark:bg-slate-950 dark:text-slate-50"><div class="flex justify-end"><span> \u0421\u0443\u043C\u043C\u0430: ${ssrInterpolate(totalCost.value)}\u0440. </span></div></div>`);
      if (isLoading.value) {
        _push(`<div class="text-center">\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430...</div>`);
      } else if (error.value) {
        _push(`<div class="text-red-500 text-center">${ssrInterpolate(error.value)}</div>`);
      } else if (!curPacker.value) {
        _push(`<div class="text-center"> \u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0443\u043F\u0430\u043A\u043E\u0432\u0449\u0438\u043A\u0430 \u0434\u043B\u044F \u043E\u0442\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F \u043E\u0442\u0447\u0435\u0442\u043E\u0432 </div>`);
      } else if (reports.value.length === 0) {
        _push(`<div class="text-center"> \u041D\u0435\u0442 \u043E\u0442\u0447\u0435\u0442\u043E\u0432 \u0434\u043B\u044F \u0432\u044B\u0431\u0440\u0430\u043D\u043D\u043E\u0433\u043E \u0443\u043F\u0430\u043A\u043E\u0432\u0449\u0438\u043A\u0430 </div>`);
      } else {
        _push(`<div>`);
        _push(ssrRenderComponent(_component_UiTable, { class: "bg-white rounded-sm" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_UiTableCaption, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  var _a22, _b22;
                  if (_push3) {
                    _push3(`\u041E\u0442\u0447\u0435\u0442\u044B \u0443\u043F\u0430\u043A\u043E\u0432\u0449\u0438\u043A\u0430: ${ssrInterpolate((_a22 = curPacker.value) == null ? void 0 : _a22.fullName)}`);
                  } else {
                    return [
                      createTextVNode("\u041E\u0442\u0447\u0435\u0442\u044B \u0443\u043F\u0430\u043A\u043E\u0432\u0449\u0438\u043A\u0430: " + toDisplayString((_b22 = curPacker.value) == null ? void 0 : _b22.fullName), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UiTableHeader, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UiTableRow, null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_UiTableHead, null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`\u0414\u0430\u0442\u0430`);
                              } else {
                                return [
                                  createTextVNode("\u0414\u0430\u0442\u0430")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_component_UiTableHead, { class: "text-center" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435`);
                              } else {
                                return [
                                  createTextVNode("\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_component_UiTableHead, { class: "text-center" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`\u0418\u043D\u0444\u043E`);
                              } else {
                                return [
                                  createTextVNode("\u0418\u043D\u0444\u043E")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_component_UiTableHead, { class: "text-center" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C`);
                              } else {
                                return [
                                  createTextVNode("\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_UiTableHead, null, {
                              default: withCtx(() => [
                                createTextVNode("\u0414\u0430\u0442\u0430")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_UiTableHead, { class: "text-center" }, {
                              default: withCtx(() => [
                                createTextVNode("\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_UiTableHead, { class: "text-center" }, {
                              default: withCtx(() => [
                                createTextVNode("\u0418\u043D\u0444\u043E")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_UiTableHead, { class: "text-center" }, {
                              default: withCtx(() => [
                                createTextVNode("\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C")
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_UiTableRow, null, {
                        default: withCtx(() => [
                          createVNode(_component_UiTableHead, null, {
                            default: withCtx(() => [
                              createTextVNode("\u0414\u0430\u0442\u0430")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UiTableHead, { class: "text-center" }, {
                            default: withCtx(() => [
                              createTextVNode("\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UiTableHead, { class: "text-center" }, {
                            default: withCtx(() => [
                              createTextVNode("\u0418\u043D\u0444\u043E")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UiTableHead, { class: "text-center" }, {
                            default: withCtx(() => [
                              createTextVNode("\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C")
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
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UiTableBody, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<!--[-->`);
                    ssrRenderList(reports.value, (report) => {
                      _push3(ssrRenderComponent(_component_UiTableRow, {
                        key: report.id,
                        class: {
                          "cursor-pointer hover:bg-gray-100": true,
                          "bg-yellow-100/50": report.isOther,
                          "bg-red-100": report.penaltyCost > 0
                        },
                        onClick: ($event) => editReport(report)
                      }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(ssrRenderComponent(_component_UiTableCell, null, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`<div class="flex items-center gap-2"${_scopeId4}><span${_scopeId4}>${ssrInterpolate(dateFormat2(report.date).slice(0, 5))}</span>`);
                                  if (report.comment) {
                                    _push5(ssrRenderComponent(unref(MessageCircle), null, null, _parent5, _scopeId4));
                                  } else {
                                    _push5(`<!---->`);
                                  }
                                  _push5(`</div>`);
                                } else {
                                  return [
                                    createVNode("div", { class: "flex items-center gap-2" }, [
                                      createVNode("span", null, toDisplayString(dateFormat2(report.date).slice(0, 5)), 1),
                                      report.comment ? (openBlock(), createBlock(unref(MessageCircle), { key: 0 })) : createCommentVNode("", true)
                                    ])
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                            _push4(ssrRenderComponent(_component_UiTableCell, { class: "text-center" }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`<div class="flex flex-col items-center"${_scopeId4}>`);
                                  if (report.name.startsWith("http")) {
                                    _push5(`<a${ssrRenderAttr("href", report.name)} target="_blank" class="text-blue-500 hover:underline"${_scopeId4}>\u041A\u0430\u0440\u0442\u043E\u0447\u043A\u0430</a>`);
                                  } else {
                                    _push5(`<div class="flex flex-col"${_scopeId4}><span${_scopeId4}>${ssrInterpolate(report.name)}</span></div>`);
                                  }
                                  if (report.dopsComment) {
                                    _push5(`<span class="text-wrap text-gray-600"${_scopeId4}> + ${ssrInterpolate(report.dopsComment)}</span>`);
                                  } else {
                                    _push5(`<!---->`);
                                  }
                                  _push5(`</div>`);
                                } else {
                                  return [
                                    createVNode("div", { class: "flex flex-col items-center" }, [
                                      report.name.startsWith("http") ? (openBlock(), createBlock("a", {
                                        key: 0,
                                        href: report.name,
                                        target: "_blank",
                                        class: "text-blue-500 hover:underline",
                                        onClick: withModifiers(() => {
                                        }, ["stop"])
                                      }, "\u041A\u0430\u0440\u0442\u043E\u0447\u043A\u0430", 8, ["href", "onClick"])) : (openBlock(), createBlock("div", {
                                        key: 1,
                                        class: "flex flex-col"
                                      }, [
                                        createVNode("span", null, toDisplayString(report.name), 1)
                                      ])),
                                      report.dopsComment ? (openBlock(), createBlock("span", {
                                        key: 2,
                                        class: "text-wrap text-gray-600"
                                      }, " + " + toDisplayString(report.dopsComment), 1)) : createCommentVNode("", true)
                                    ])
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                            if (report.isOther) {
                              _push4(ssrRenderComponent(_component_UiTableCell, { class: "text-center" }, {
                                default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                  if (_push5) {
                                    _push5(` \u0414\u0440\u0443\u0433\u043E\u0435 `);
                                  } else {
                                    return [
                                      createTextVNode(" \u0414\u0440\u0443\u0433\u043E\u0435 ")
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent4, _scopeId3));
                            } else {
                              _push4(ssrRenderComponent(_component_UiTableCell, { class: "text-center" }, {
                                default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                  if (_push5) {
                                    _push5(`<div class="flex flex-col gap-1"${_scopeId4}>`);
                                    if (report.items) {
                                      _push5(`<span${_scopeId4}>${ssrInterpolate(report.items)} \u0432\u044B\u0432.</span>`);
                                    } else {
                                      _push5(`<!---->`);
                                    }
                                    if (report.dimmers) {
                                      _push5(`<span${_scopeId4}>${ssrInterpolate(report.dimmers)} \u0434\u0438\u043C.</span>`);
                                    } else {
                                      _push5(`<!---->`);
                                    }
                                    if (report.adapters) {
                                      _push5(`<span${_scopeId4}>${ssrInterpolate(report.adapters)} \u0431\u043B\u043E\u043A</span>`);
                                    } else {
                                      _push5(`<!---->`);
                                    }
                                    if (report.lam) {
                                      _push5(`<span${_scopeId4}>${ssrInterpolate(report.lam)} \u043F\u043B\u0435\u043D\u043A\u0430</span>`);
                                    } else {
                                      _push5(`<!---->`);
                                    }
                                    if (report.overSize) {
                                      _push5(`<span${_scopeId4}>\u041D\u0435 \u0433\u0430\u0431\u0430\u0440\u0438\u0442</span>`);
                                    } else {
                                      _push5(`<!---->`);
                                    }
                                    _push5(`</div>`);
                                  } else {
                                    return [
                                      createVNode("div", { class: "flex flex-col gap-1" }, [
                                        report.items ? (openBlock(), createBlock("span", { key: 0 }, toDisplayString(report.items) + " \u0432\u044B\u0432.", 1)) : createCommentVNode("", true),
                                        report.dimmers ? (openBlock(), createBlock("span", { key: 1 }, toDisplayString(report.dimmers) + " \u0434\u0438\u043C.", 1)) : createCommentVNode("", true),
                                        report.adapters ? (openBlock(), createBlock("span", { key: 2 }, toDisplayString(report.adapters) + " \u0431\u043B\u043E\u043A", 1)) : createCommentVNode("", true),
                                        report.lam ? (openBlock(), createBlock("span", { key: 3 }, toDisplayString(report.lam) + " \u043F\u043B\u0435\u043D\u043A\u0430", 1)) : createCommentVNode("", true),
                                        report.overSize ? (openBlock(), createBlock("span", { key: 4 }, "\u041D\u0435 \u0433\u0430\u0431\u0430\u0440\u0438\u0442")) : createCommentVNode("", true)
                                      ])
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent4, _scopeId3));
                            }
                            _push4(ssrRenderComponent(_component_UiTableCell, { class: "text-center" }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`<div class="flex flex-col"${_scopeId4}><span class="font-semibold text-green-600"${_scopeId4}>+${ssrInterpolate(report.cost)}\u0440.</span>`);
                                  if (report.penaltyCost) {
                                    _push5(`<span class="font-semibold text-red-500"${_scopeId4}>${ssrInterpolate(" -" + report.penaltyCost)}\u0440.</span>`);
                                  } else {
                                    _push5(`<!---->`);
                                  }
                                  _push5(`</div>`);
                                } else {
                                  return [
                                    createVNode("div", { class: "flex flex-col" }, [
                                      createVNode("span", { class: "font-semibold text-green-600" }, "+" + toDisplayString(report.cost) + "\u0440.", 1),
                                      report.penaltyCost ? (openBlock(), createBlock("span", {
                                        key: 0,
                                        class: "font-semibold text-red-500"
                                      }, toDisplayString(" -" + report.penaltyCost) + "\u0440.", 1)) : createCommentVNode("", true)
                                    ])
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                          } else {
                            return [
                              createVNode(_component_UiTableCell, null, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "flex items-center gap-2" }, [
                                    createVNode("span", null, toDisplayString(dateFormat2(report.date).slice(0, 5)), 1),
                                    report.comment ? (openBlock(), createBlock(unref(MessageCircle), { key: 0 })) : createCommentVNode("", true)
                                  ])
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(_component_UiTableCell, { class: "text-center" }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "flex flex-col items-center" }, [
                                    report.name.startsWith("http") ? (openBlock(), createBlock("a", {
                                      key: 0,
                                      href: report.name,
                                      target: "_blank",
                                      class: "text-blue-500 hover:underline",
                                      onClick: withModifiers(() => {
                                      }, ["stop"])
                                    }, "\u041A\u0430\u0440\u0442\u043E\u0447\u043A\u0430", 8, ["href", "onClick"])) : (openBlock(), createBlock("div", {
                                      key: 1,
                                      class: "flex flex-col"
                                    }, [
                                      createVNode("span", null, toDisplayString(report.name), 1)
                                    ])),
                                    report.dopsComment ? (openBlock(), createBlock("span", {
                                      key: 2,
                                      class: "text-wrap text-gray-600"
                                    }, " + " + toDisplayString(report.dopsComment), 1)) : createCommentVNode("", true)
                                  ])
                                ]),
                                _: 2
                              }, 1024),
                              report.isOther ? (openBlock(), createBlock(_component_UiTableCell, {
                                key: 0,
                                class: "text-center"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" \u0414\u0440\u0443\u0433\u043E\u0435 ")
                                ]),
                                _: 1
                              })) : (openBlock(), createBlock(_component_UiTableCell, {
                                key: 1,
                                class: "text-center"
                              }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "flex flex-col gap-1" }, [
                                    report.items ? (openBlock(), createBlock("span", { key: 0 }, toDisplayString(report.items) + " \u0432\u044B\u0432.", 1)) : createCommentVNode("", true),
                                    report.dimmers ? (openBlock(), createBlock("span", { key: 1 }, toDisplayString(report.dimmers) + " \u0434\u0438\u043C.", 1)) : createCommentVNode("", true),
                                    report.adapters ? (openBlock(), createBlock("span", { key: 2 }, toDisplayString(report.adapters) + " \u0431\u043B\u043E\u043A", 1)) : createCommentVNode("", true),
                                    report.lam ? (openBlock(), createBlock("span", { key: 3 }, toDisplayString(report.lam) + " \u043F\u043B\u0435\u043D\u043A\u0430", 1)) : createCommentVNode("", true),
                                    report.overSize ? (openBlock(), createBlock("span", { key: 4 }, "\u041D\u0435 \u0433\u0430\u0431\u0430\u0440\u0438\u0442")) : createCommentVNode("", true)
                                  ])
                                ]),
                                _: 2
                              }, 1024)),
                              createVNode(_component_UiTableCell, { class: "text-center" }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "flex flex-col" }, [
                                    createVNode("span", { class: "font-semibold text-green-600" }, "+" + toDisplayString(report.cost) + "\u0440.", 1),
                                    report.penaltyCost ? (openBlock(), createBlock("span", {
                                      key: 0,
                                      class: "font-semibold text-red-500"
                                    }, toDisplayString(" -" + report.penaltyCost) + "\u0440.", 1)) : createCommentVNode("", true)
                                  ])
                                ]),
                                _: 2
                              }, 1024)
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                    });
                    _push3(`<!--]-->`);
                  } else {
                    return [
                      (openBlock(true), createBlock(Fragment, null, renderList(reports.value, (report) => {
                        return openBlock(), createBlock(_component_UiTableRow, {
                          key: report.id,
                          class: {
                            "cursor-pointer hover:bg-gray-100": true,
                            "bg-yellow-100/50": report.isOther,
                            "bg-red-100": report.penaltyCost > 0
                          },
                          onClick: ($event) => editReport(report)
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_UiTableCell, null, {
                              default: withCtx(() => [
                                createVNode("div", { class: "flex items-center gap-2" }, [
                                  createVNode("span", null, toDisplayString(dateFormat2(report.date).slice(0, 5)), 1),
                                  report.comment ? (openBlock(), createBlock(unref(MessageCircle), { key: 0 })) : createCommentVNode("", true)
                                ])
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(_component_UiTableCell, { class: "text-center" }, {
                              default: withCtx(() => [
                                createVNode("div", { class: "flex flex-col items-center" }, [
                                  report.name.startsWith("http") ? (openBlock(), createBlock("a", {
                                    key: 0,
                                    href: report.name,
                                    target: "_blank",
                                    class: "text-blue-500 hover:underline",
                                    onClick: withModifiers(() => {
                                    }, ["stop"])
                                  }, "\u041A\u0430\u0440\u0442\u043E\u0447\u043A\u0430", 8, ["href", "onClick"])) : (openBlock(), createBlock("div", {
                                    key: 1,
                                    class: "flex flex-col"
                                  }, [
                                    createVNode("span", null, toDisplayString(report.name), 1)
                                  ])),
                                  report.dopsComment ? (openBlock(), createBlock("span", {
                                    key: 2,
                                    class: "text-wrap text-gray-600"
                                  }, " + " + toDisplayString(report.dopsComment), 1)) : createCommentVNode("", true)
                                ])
                              ]),
                              _: 2
                            }, 1024),
                            report.isOther ? (openBlock(), createBlock(_component_UiTableCell, {
                              key: 0,
                              class: "text-center"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" \u0414\u0440\u0443\u0433\u043E\u0435 ")
                              ]),
                              _: 1
                            })) : (openBlock(), createBlock(_component_UiTableCell, {
                              key: 1,
                              class: "text-center"
                            }, {
                              default: withCtx(() => [
                                createVNode("div", { class: "flex flex-col gap-1" }, [
                                  report.items ? (openBlock(), createBlock("span", { key: 0 }, toDisplayString(report.items) + " \u0432\u044B\u0432.", 1)) : createCommentVNode("", true),
                                  report.dimmers ? (openBlock(), createBlock("span", { key: 1 }, toDisplayString(report.dimmers) + " \u0434\u0438\u043C.", 1)) : createCommentVNode("", true),
                                  report.adapters ? (openBlock(), createBlock("span", { key: 2 }, toDisplayString(report.adapters) + " \u0431\u043B\u043E\u043A", 1)) : createCommentVNode("", true),
                                  report.lam ? (openBlock(), createBlock("span", { key: 3 }, toDisplayString(report.lam) + " \u043F\u043B\u0435\u043D\u043A\u0430", 1)) : createCommentVNode("", true),
                                  report.overSize ? (openBlock(), createBlock("span", { key: 4 }, "\u041D\u0435 \u0433\u0430\u0431\u0430\u0440\u0438\u0442")) : createCommentVNode("", true)
                                ])
                              ]),
                              _: 2
                            }, 1024)),
                            createVNode(_component_UiTableCell, { class: "text-center" }, {
                              default: withCtx(() => [
                                createVNode("div", { class: "flex flex-col" }, [
                                  createVNode("span", { class: "font-semibold text-green-600" }, "+" + toDisplayString(report.cost) + "\u0440.", 1),
                                  report.penaltyCost ? (openBlock(), createBlock("span", {
                                    key: 0,
                                    class: "font-semibold text-red-500"
                                  }, toDisplayString(" -" + report.penaltyCost) + "\u0440.", 1)) : createCommentVNode("", true)
                                ])
                              ]),
                              _: 2
                            }, 1024)
                          ]),
                          _: 2
                        }, 1032, ["class", "onClick"]);
                      }), 128))
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_UiTableCaption, null, {
                  default: withCtx(() => {
                    var _a22;
                    return [
                      createTextVNode("\u041E\u0442\u0447\u0435\u0442\u044B \u0443\u043F\u0430\u043A\u043E\u0432\u0449\u0438\u043A\u0430: " + toDisplayString((_a22 = curPacker.value) == null ? void 0 : _a22.fullName), 1)
                    ];
                  }),
                  _: 1
                }),
                createVNode(_component_UiTableHeader, null, {
                  default: withCtx(() => [
                    createVNode(_component_UiTableRow, null, {
                      default: withCtx(() => [
                        createVNode(_component_UiTableHead, null, {
                          default: withCtx(() => [
                            createTextVNode("\u0414\u0430\u0442\u0430")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UiTableHead, { class: "text-center" }, {
                          default: withCtx(() => [
                            createTextVNode("\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UiTableHead, { class: "text-center" }, {
                          default: withCtx(() => [
                            createTextVNode("\u0418\u043D\u0444\u043E")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UiTableHead, { class: "text-center" }, {
                          default: withCtx(() => [
                            createTextVNode("\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode(_component_UiTableBody, null, {
                  default: withCtx(() => [
                    (openBlock(true), createBlock(Fragment, null, renderList(reports.value, (report) => {
                      return openBlock(), createBlock(_component_UiTableRow, {
                        key: report.id,
                        class: {
                          "cursor-pointer hover:bg-gray-100": true,
                          "bg-yellow-100/50": report.isOther,
                          "bg-red-100": report.penaltyCost > 0
                        },
                        onClick: ($event) => editReport(report)
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_UiTableCell, null, {
                            default: withCtx(() => [
                              createVNode("div", { class: "flex items-center gap-2" }, [
                                createVNode("span", null, toDisplayString(dateFormat2(report.date).slice(0, 5)), 1),
                                report.comment ? (openBlock(), createBlock(unref(MessageCircle), { key: 0 })) : createCommentVNode("", true)
                              ])
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(_component_UiTableCell, { class: "text-center" }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "flex flex-col items-center" }, [
                                report.name.startsWith("http") ? (openBlock(), createBlock("a", {
                                  key: 0,
                                  href: report.name,
                                  target: "_blank",
                                  class: "text-blue-500 hover:underline",
                                  onClick: withModifiers(() => {
                                  }, ["stop"])
                                }, "\u041A\u0430\u0440\u0442\u043E\u0447\u043A\u0430", 8, ["href", "onClick"])) : (openBlock(), createBlock("div", {
                                  key: 1,
                                  class: "flex flex-col"
                                }, [
                                  createVNode("span", null, toDisplayString(report.name), 1)
                                ])),
                                report.dopsComment ? (openBlock(), createBlock("span", {
                                  key: 2,
                                  class: "text-wrap text-gray-600"
                                }, " + " + toDisplayString(report.dopsComment), 1)) : createCommentVNode("", true)
                              ])
                            ]),
                            _: 2
                          }, 1024),
                          report.isOther ? (openBlock(), createBlock(_component_UiTableCell, {
                            key: 0,
                            class: "text-center"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" \u0414\u0440\u0443\u0433\u043E\u0435 ")
                            ]),
                            _: 1
                          })) : (openBlock(), createBlock(_component_UiTableCell, {
                            key: 1,
                            class: "text-center"
                          }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "flex flex-col gap-1" }, [
                                report.items ? (openBlock(), createBlock("span", { key: 0 }, toDisplayString(report.items) + " \u0432\u044B\u0432.", 1)) : createCommentVNode("", true),
                                report.dimmers ? (openBlock(), createBlock("span", { key: 1 }, toDisplayString(report.dimmers) + " \u0434\u0438\u043C.", 1)) : createCommentVNode("", true),
                                report.adapters ? (openBlock(), createBlock("span", { key: 2 }, toDisplayString(report.adapters) + " \u0431\u043B\u043E\u043A", 1)) : createCommentVNode("", true),
                                report.lam ? (openBlock(), createBlock("span", { key: 3 }, toDisplayString(report.lam) + " \u043F\u043B\u0435\u043D\u043A\u0430", 1)) : createCommentVNode("", true),
                                report.overSize ? (openBlock(), createBlock("span", { key: 4 }, "\u041D\u0435 \u0433\u0430\u0431\u0430\u0440\u0438\u0442")) : createCommentVNode("", true)
                              ])
                            ]),
                            _: 2
                          }, 1024)),
                          createVNode(_component_UiTableCell, { class: "text-center" }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "flex flex-col" }, [
                                createVNode("span", { class: "font-semibold text-green-600" }, "+" + toDisplayString(report.cost) + "\u0440.", 1),
                                report.penaltyCost ? (openBlock(), createBlock("span", {
                                  key: 0,
                                  class: "font-semibold text-red-500"
                                }, toDisplayString(" -" + report.penaltyCost) + "\u0440.", 1)) : createCommentVNode("", true)
                              ])
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        _: 2
                      }, 1032, ["class", "onClick"]);
                    }), 128))
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      }
      if (isEditModalOpen.value && editingReport.value) {
        _push(ssrRenderComponent(_component_MyProductionEditPackerReport, {
          report: editingReport.value,
          "cur-user": unref(curUser),
          "packer-id": (_b2 = (_d = curPacker.value) == null ? void 0 : _d.id) != null ? _b2 : 0,
          onReportUpdated: handleReportUpdated,
          onClose: ($event) => isEditModalOpen.value = false
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (isEditOtherModalOpen.value && editingOtherReport.value) {
        _push(ssrRenderComponent(_component_MyProductionEditOtherReport, {
          report: editingOtherReport.value,
          "master-id": (_c2 = (_e = curPacker.value) == null ? void 0 : _e.id) != null ? _c2 : 0,
          onReportUpdated: handleReportUpdated,
          onClose: ($event) => isEditOtherModalOpen.value = false
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/my/production/Packers.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "Logist",
  __ssrInlineRender: true,
  props: {
    period: {}
  },
  setup(__props) {
    const authStore = useAuthStore();
    const { $useApi } = useNuxtApp();
    const { toast } = useToast();
    const props = __props;
    const curUser = authStore.user;
    const period = ref(props.period);
    const minDate = ref(/* @__PURE__ */ new Date(props.period + "-01"));
    const maxDate = ref(new Date(+props.period.split("-")[0], +props.period.split("-")[1], 0));
    const logistsList = ref([]);
    const curLogist = ref(null);
    const isLoading = ref(false);
    const error = ref(null);
    const date = ref();
    const logistShifts = ref([]);
    const totalCost = ref(0);
    const range = ref([
      new Date(props.period).toISOString().slice(0, 10),
      new Date(+props.period.split("-")[0], +props.period.split("-")[1], 1).toISOString().slice(0, 10)
    ]);
    const loadLogistShifts = async () => {
      if (!curLogist.value) return;
      try {
        const from = new Date(range.value[0]).toISOString().slice(0, 10);
        const to = new Date(range.value[1]).toISOString().slice(0, 10);
        const { data } = await $useApi.get(`production/logist/${curLogist.value.id}/shifts`, {
          params: { from, to }
        });
        date.value = data.map((d) => d.shift_date);
        logistShifts.value = data || [];
        totalCost.value = logistShifts.value.reduce((a, b) => a + b.cost, 0);
      } catch {
        toast({
          title: "\u041E\u0448\u0438\u0431\u043A\u0430",
          description: "\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u0441\u043C\u0435\u043D\u044B",
          variant: "destructive"
        });
      }
    };
    const format2 = (date2) => {
      return "\u0420\u0430\u0431\u043E\u0447\u0438\u0445 \u0434\u043D\u0435\u0439: " + date2.length;
    };
    const formatRange = (date2) => {
      return "\u041F\u0435\u0440\u0438\u043E\u0434 \u0441 " + date2.map((d) => {
        const date3 = new Date(d).toISOString().slice(0, 10).split("-");
        const day = date3[2];
        const mounth = date3[1];
        const year = date3[0];
        return `${day}.${mounth}.${year}`;
      }).join(" \u043F\u043E ");
    };
    const saveLogistShifts = async () => {
      if (!curLogist.value) return;
      try {
        const formattedDates = date.value ? date.value.map((d) => new Date(d).toISOString().slice(0, 10)) : [];
        await $useApi.post(`production/logists/${curLogist.value.id}/shifts`, {
          shiftDates: formattedDates,
          period: period.value
        });
        loadLogistShifts();
        toast({
          title: "\u0423\u0441\u043F\u0435\u0445",
          description: "\u0421\u043C\u0435\u043D\u044B \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u044B"
        });
      } catch (e) {
        console.log(e);
        toast({
          title: "\u041E\u0448\u0438\u0431\u043A\u0430",
          description: "\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0441\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u0441\u043C\u0435\u043D\u044B",
          variant: "destructive"
        });
      }
    };
    watch([curLogist, period], () => {
      if (curLogist.value) {
        loadLogistShifts();
      }
    });
    watch(range, () => {
      loadLogistShifts();
    }, { deep: true });
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b;
      const _component_MyComboboxModels = _sfc_main$h;
      const _component_UiTable = _sfc_main$5$1;
      const _component_UiTableCaption = _sfc_main$6$1;
      const _component_UiTableHeader = _sfc_main$i;
      const _component_UiTableRow = _sfc_main$2$2;
      const _component_UiTableHead = _sfc_main$1$2;
      const _component_UiTableBody = _sfc_main$4$1;
      const _component_UiTableCell = _sfc_main$3$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col gap-2" }, _attrs))}><div class="flex flex-col gap-2"><div class="flex gap-2">`);
      if (logistsList.value.length > 1 || ((_a = unref(curUser)) == null ? void 0 : _a.role.shortName) !== "PACKER") {
        _push(ssrRenderComponent(_component_MyComboboxModels, {
          items: logistsList.value.map((p) => ({ value: p.id, label: p.fullName })),
          class: "w-[180px]",
          label: ((_b = curLogist.value) == null ? void 0 : _b.fullName) || "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0443\u043F\u0430\u043A\u043E\u0432\u0449\u0438\u043A\u0430",
          onSelectedItem: (value) => {
            curLogist.value = logistsList.value.find((p) => p.id === value) || null;
          }
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="flex items-center"><div class="w-full">`);
      _push(ssrRenderComponent(unref(Qn), {
        modelValue: range.value,
        "onUpdate:modelValue": ($event) => range.value = $event,
        range: "",
        "enable-time-picker": false,
        "min-date": minDate.value,
        "max-date": maxDate.value,
        "auto-apply": "",
        locale: "ru",
        placeholder: "\u0412\u044B\u0431\u0440\u0430\u0442\u044C \u0434\u043D\u0438",
        "select-text": "\u0413\u043E\u0442\u043E\u0432\u043E",
        "cancel-text": "\u0417\u0430\u043A\u0440\u044B\u0442\u044C",
        class: "grow",
        format: formatRange,
        clearable: false
      }, null, _parent));
      _push(`</div></div><div class="flex items-center"><div class="w-full">`);
      _push(ssrRenderComponent(unref(Qn), {
        modelValue: date.value,
        "onUpdate:modelValue": [($event) => date.value = $event, saveLogistShifts],
        "multi-dates": "",
        "enable-time-picker": false,
        locale: "ru",
        "min-date": minDate.value,
        "max-date": maxDate.value,
        "start-date": minDate.value,
        placeholder: "\u0412\u044B\u0431\u0440\u0430\u0442\u044C \u0441\u043C\u0435\u043D\u044B",
        "select-text": "\u0413\u043E\u0442\u043E\u0432\u043E",
        "cancel-text": "\u0417\u0430\u043A\u0440\u044B\u0442\u044C",
        format: format2,
        class: "grow",
        clearable: false
      }, null, _parent));
      _push(`</div></div></div><div class="rounded-lg p-2 border border-slate-200 bg-white text-slate-950 shadow-sm dark:border-slate-800 dark:bg-slate-950 dark:text-slate-50"><div class="flex justify-end"><span> \u0421\u0443\u043C\u043C\u0430: ${ssrInterpolate(totalCost.value)}\u0440. </span></div></div>`);
      if (isLoading.value) {
        _push(`<div class="text-center">\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430...</div>`);
      } else if (error.value) {
        _push(`<div class="text-red-500 text-center">${ssrInterpolate(error.value)}</div>`);
      } else if (!curLogist.value) {
        _push(`<div class="text-center"> \u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u043B\u043E\u0433\u0438\u0441\u0442\u0430 \u0434\u043B\u044F \u043E\u0442\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F \u043E\u0442\u0447\u0435\u0442\u043E\u0432 </div>`);
      } else {
        _push(`<div>`);
        _push(ssrRenderComponent(_component_UiTable, { class: "bg-white rounded-sm" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_UiTableCaption, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  var _a2, _b2;
                  if (_push3) {
                    _push3(`\u041E\u0442\u0447\u0435\u0442\u044B \u043B\u043E\u0433\u0438\u0441\u0442\u0430: ${ssrInterpolate((_a2 = curLogist.value) == null ? void 0 : _a2.fullName)}`);
                  } else {
                    return [
                      createTextVNode("\u041E\u0442\u0447\u0435\u0442\u044B \u043B\u043E\u0433\u0438\u0441\u0442\u0430: " + toDisplayString((_b2 = curLogist.value) == null ? void 0 : _b2.fullName), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UiTableHeader, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UiTableRow, null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_UiTableHead, null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`\u0414\u0430\u0442\u0430`);
                              } else {
                                return [
                                  createTextVNode("\u0414\u0430\u0442\u0430")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_component_UiTableHead, { class: "text-center" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C`);
                              } else {
                                return [
                                  createTextVNode("\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_UiTableHead, null, {
                              default: withCtx(() => [
                                createTextVNode("\u0414\u0430\u0442\u0430")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_UiTableHead, { class: "text-center" }, {
                              default: withCtx(() => [
                                createTextVNode("\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C")
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_UiTableRow, null, {
                        default: withCtx(() => [
                          createVNode(_component_UiTableHead, null, {
                            default: withCtx(() => [
                              createTextVNode("\u0414\u0430\u0442\u0430")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UiTableHead, { class: "text-center" }, {
                            default: withCtx(() => [
                              createTextVNode("\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C")
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
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UiTableBody, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<!--[-->`);
                    ssrRenderList(logistShifts.value, (shift) => {
                      _push3(ssrRenderComponent(_component_UiTableRow, {
                        key: shift.id,
                        class: {
                          "cursor-pointer hover:bg-gray-100": true
                        }
                      }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(ssrRenderComponent(_component_UiTableCell, null, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`<div class="flex items-center gap-2"${_scopeId4}><span${_scopeId4}>${ssrInterpolate(("dateFormat" in _ctx ? _ctx.dateFormat : unref(dateFormat))(shift.shift_date).slice(0, 5))}</span></div>`);
                                } else {
                                  return [
                                    createVNode("div", { class: "flex items-center gap-2" }, [
                                      createVNode("span", null, toDisplayString(("dateFormat" in _ctx ? _ctx.dateFormat : unref(dateFormat))(shift.shift_date).slice(0, 5)), 1)
                                    ])
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                            _push4(ssrRenderComponent(_component_UiTableCell, { class: "text-center" }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`<div class="flex flex-col"${_scopeId4}><span class="font-semibold text-green-600"${_scopeId4}>+${ssrInterpolate(shift.cost)}\u0440.</span></div>`);
                                } else {
                                  return [
                                    createVNode("div", { class: "flex flex-col" }, [
                                      createVNode("span", { class: "font-semibold text-green-600" }, "+" + toDisplayString(shift.cost) + "\u0440.", 1)
                                    ])
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                          } else {
                            return [
                              createVNode(_component_UiTableCell, null, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "flex items-center gap-2" }, [
                                    createVNode("span", null, toDisplayString(("dateFormat" in _ctx ? _ctx.dateFormat : unref(dateFormat))(shift.shift_date).slice(0, 5)), 1)
                                  ])
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(_component_UiTableCell, { class: "text-center" }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "flex flex-col" }, [
                                    createVNode("span", { class: "font-semibold text-green-600" }, "+" + toDisplayString(shift.cost) + "\u0440.", 1)
                                  ])
                                ]),
                                _: 2
                              }, 1024)
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                    });
                    _push3(`<!--]-->`);
                  } else {
                    return [
                      (openBlock(true), createBlock(Fragment, null, renderList(logistShifts.value, (shift) => {
                        return openBlock(), createBlock(_component_UiTableRow, {
                          key: shift.id,
                          class: {
                            "cursor-pointer hover:bg-gray-100": true
                          }
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_UiTableCell, null, {
                              default: withCtx(() => [
                                createVNode("div", { class: "flex items-center gap-2" }, [
                                  createVNode("span", null, toDisplayString(("dateFormat" in _ctx ? _ctx.dateFormat : unref(dateFormat))(shift.shift_date).slice(0, 5)), 1)
                                ])
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(_component_UiTableCell, { class: "text-center" }, {
                              default: withCtx(() => [
                                createVNode("div", { class: "flex flex-col" }, [
                                  createVNode("span", { class: "font-semibold text-green-600" }, "+" + toDisplayString(shift.cost) + "\u0440.", 1)
                                ])
                              ]),
                              _: 2
                            }, 1024)
                          ]),
                          _: 2
                        }, 1024);
                      }), 128))
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_UiTableCaption, null, {
                  default: withCtx(() => {
                    var _a2;
                    return [
                      createTextVNode("\u041E\u0442\u0447\u0435\u0442\u044B \u043B\u043E\u0433\u0438\u0441\u0442\u0430: " + toDisplayString((_a2 = curLogist.value) == null ? void 0 : _a2.fullName), 1)
                    ];
                  }),
                  _: 1
                }),
                createVNode(_component_UiTableHeader, null, {
                  default: withCtx(() => [
                    createVNode(_component_UiTableRow, null, {
                      default: withCtx(() => [
                        createVNode(_component_UiTableHead, null, {
                          default: withCtx(() => [
                            createTextVNode("\u0414\u0430\u0442\u0430")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UiTableHead, { class: "text-center" }, {
                          default: withCtx(() => [
                            createTextVNode("\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode(_component_UiTableBody, null, {
                  default: withCtx(() => [
                    (openBlock(true), createBlock(Fragment, null, renderList(logistShifts.value, (shift) => {
                      return openBlock(), createBlock(_component_UiTableRow, {
                        key: shift.id,
                        class: {
                          "cursor-pointer hover:bg-gray-100": true
                        }
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_UiTableCell, null, {
                            default: withCtx(() => [
                              createVNode("div", { class: "flex items-center gap-2" }, [
                                createVNode("span", null, toDisplayString(("dateFormat" in _ctx ? _ctx.dateFormat : unref(dateFormat))(shift.shift_date).slice(0, 5)), 1)
                              ])
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(_component_UiTableCell, { class: "text-center" }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "flex flex-col" }, [
                                createVNode("span", { class: "font-semibold text-green-600" }, "+" + toDisplayString(shift.cost) + "\u0440.", 1)
                              ])
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        _: 2
                      }, 1024);
                    }), 128))
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/my/production/Logist.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "PackersReportTable",
  __ssrInlineRender: true,
  props: {
    period: {},
    curentPacker: {}
  },
  emits: ["updated"],
  setup(__props, { emit: __emit }) {
    const authStore = useAuthStore();
    const { $useApi } = useNuxtApp();
    const { toast } = useToast();
    const props = __props;
    const curUser = authStore.user;
    const period = ref(props.period);
    const minDate = ref(/* @__PURE__ */ new Date(props.period + "-01"));
    const maxDate = ref(new Date(+props.period.split("-")[0], +props.period.split("-")[1], 0));
    const reports = ref([]);
    const isLoading = ref(false);
    const error = ref(null);
    const isEditModalOpen = ref(false);
    const editingReport = ref(null);
    const isEditOtherModalOpen = ref(false);
    const editingOtherReport = ref(null);
    const date = ref();
    const totalCost = ref(0);
    const range = ref([
      new Date(props.period).toISOString().slice(0, 10),
      new Date(+props.period.split("-")[0], +props.period.split("-")[1], 1).toISOString().slice(0, 10)
    ]);
    const getPackerReports = async () => {
      if (!props.curentPacker) return;
      try {
        isLoading.value = true;
        error.value = null;
        const from = new Date(range.value[0]).toISOString().slice(0, 10);
        const to = new Date(range.value[1]).toISOString().slice(0, 10);
        const { data } = await $useApi.get(`production/packer/${props.curentPacker.id}/reports`, {
          params: { from, to }
        });
        reports.value = data;
        totalCost.value = data.reduce((a, b) => a + b.cost - b.penaltyCost, 0);
      } catch {
        error.value = "\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u043E\u0442\u0447\u0435\u0442\u044B";
        toast({
          title: "\u041E\u0448\u0438\u0431\u043A\u0430",
          description: error.value,
          variant: "destructive"
        });
      } finally {
        isLoading.value = false;
      }
    };
    const editReport = (report) => {
      if (report.isOther) {
        editingOtherReport.value = { ...report };
        isEditOtherModalOpen.value = true;
      } else {
        editingReport.value = { ...report };
        isEditModalOpen.value = true;
      }
    };
    const handleReportUpdated = async () => {
      await getPackerReports();
      isEditModalOpen.value = false;
      editingReport.value = null;
    };
    const format2 = (date2) => {
      return "\u0420\u0430\u0431\u043E\u0447\u0438\u0445 \u0434\u043D\u0435\u0439: " + date2.length;
    };
    const formatRange = (date2) => {
      return "\u041F\u0435\u0440\u0438\u043E\u0434 \u0441 " + date2.map((d) => {
        const date3 = new Date(d).toISOString().slice(0, 10).split("-");
        const day = date3[2];
        const mounth = date3[1];
        const year = date3[0];
        return `${day}.${mounth}.${year}`;
      }).join(" \u043F\u043E ");
    };
    const savePackerShifts = async () => {
      if (!props.curentPacker) return;
      try {
        const formattedDates = date.value ? date.value.map((d) => new Date(d).toISOString().slice(0, 10)) : [];
        await $useApi.post(`production/packer/${props.curentPacker.id}/shifts`, {
          shiftDates: formattedDates,
          period: period.value
        });
        toast({
          title: "\u0423\u0441\u043F\u0435\u0445",
          description: "\u0421\u043C\u0435\u043D\u044B \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u044B"
        });
        emit("updated");
      } catch (e) {
        console.log(e);
        toast({
          title: "\u041E\u0448\u0438\u0431\u043A\u0430",
          description: "\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0441\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u0441\u043C\u0435\u043D\u044B",
          variant: "destructive"
        });
      }
    };
    const dateFormat2 = (date2) => {
      const d = new Date(date2);
      return `${d.getDate().toString().padStart(2, "0")}.${(d.getMonth() + 1).toString().padStart(2, "0")}.${d.getFullYear()}`;
    };
    const emit = __emit;
    watch(range, () => {
      getPackerReports();
    }, { deep: true });
    return (_ctx, _push, _parent, _attrs) => {
      var _a2, _b2;
      var _a, _b;
      const _component_UiScrollArea = _sfc_main$u;
      const _component_UiTable = _sfc_main$5$1;
      const _component_UiTableCaption = _sfc_main$6$1;
      const _component_UiTableHeader = _sfc_main$i;
      const _component_UiTableRow = _sfc_main$2$2;
      const _component_UiTableHead = _sfc_main$1$2;
      const _component_UiTableBody = _sfc_main$4$1;
      const _component_UiTableCell = _sfc_main$3$1;
      const _component_MyProductionEditPackerReport = _sfc_main$5;
      const _component_MyProductionEditOtherReport = _sfc_main$b;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col gap-2" }, _attrs))}><div class="flex flex-col gap-2"><div class="flex items-center"><div class="w-full">`);
      _push(ssrRenderComponent(unref(Qn), {
        modelValue: unref(range),
        "onUpdate:modelValue": ($event) => isRef(range) ? range.value = $event : null,
        range: "",
        "enable-time-picker": false,
        "min-date": unref(minDate),
        "max-date": unref(maxDate),
        "auto-apply": "",
        locale: "ru",
        placeholder: "\u0412\u044B\u0431\u0440\u0430\u0442\u044C \u0434\u043D\u0438",
        "select-text": "\u0413\u043E\u0442\u043E\u0432\u043E",
        "cancel-text": "\u0417\u0430\u043A\u0440\u044B\u0442\u044C",
        class: "grow",
        format: formatRange,
        clearable: false
      }, null, _parent));
      _push(`</div></div><div class="flex items-center"><div class="w-full">`);
      _push(ssrRenderComponent(unref(Qn), {
        modelValue: unref(date),
        "onUpdate:modelValue": [($event) => isRef(date) ? date.value = $event : null, savePackerShifts],
        "multi-dates": "",
        "enable-time-picker": false,
        locale: "ru",
        "min-date": unref(minDate),
        "max-date": unref(maxDate),
        "start-date": unref(minDate),
        placeholder: "\u0412\u044B\u0431\u0440\u0430\u0442\u044C \u0441\u043C\u0435\u043D\u044B",
        "select-text": "\u0413\u043E\u0442\u043E\u0432\u043E",
        "cancel-text": "\u0417\u0430\u043A\u0440\u044B\u0442\u044C",
        format: format2,
        class: "grow",
        clearable: false
      }, null, _parent));
      _push(`</div></div></div><div class="rounded-lg p-2 border border-slate-200 bg-white text-slate-950 shadow-sm dark:border-slate-800 dark:bg-slate-950 dark:text-slate-50"><div class="flex justify-end"><span> \u0421\u0443\u043C\u043C\u0430: ${ssrInterpolate(unref(totalCost))}\u0440. </span></div></div>`);
      if (unref(isLoading)) {
        _push(`<div class="text-center">\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430...</div>`);
      } else if (unref(error)) {
        _push(`<div class="text-red-500 text-center">${ssrInterpolate(unref(error))}</div>`);
      } else if (!_ctx.curentPacker) {
        _push(`<div class="text-center"> \u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0443\u043F\u0430\u043A\u043E\u0432\u0449\u0438\u043A\u0430 \u0434\u043B\u044F \u043E\u0442\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F \u043E\u0442\u0447\u0435\u0442\u043E\u0432 </div>`);
      } else if (unref(reports).length === 0) {
        _push(`<div class="text-center"> \u041D\u0435\u0442 \u043E\u0442\u0447\u0435\u0442\u043E\u0432 \u0434\u043B\u044F \u0432\u044B\u0431\u0440\u0430\u043D\u043D\u043E\u0433\u043E \u0443\u043F\u0430\u043A\u043E\u0432\u0449\u0438\u043A\u0430 </div>`);
      } else {
        _push(ssrRenderComponent(_component_UiScrollArea, { class: "h-[calc(100vh-200px)]" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_UiTable, { class: "bg-white rounded-sm" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UiTableCaption, null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        var _a22, _b22;
                        if (_push4) {
                          _push4(`\u041E\u0442\u0447\u0435\u0442\u044B \u0443\u043F\u0430\u043A\u043E\u0432\u0449\u0438\u043A\u0430: ${ssrInterpolate((_a22 = _ctx.curentPacker) == null ? void 0 : _a22.fullName)}`);
                        } else {
                          return [
                            createTextVNode("\u041E\u0442\u0447\u0435\u0442\u044B \u0443\u043F\u0430\u043A\u043E\u0432\u0449\u0438\u043A\u0430: " + toDisplayString((_b22 = _ctx.curentPacker) == null ? void 0 : _b22.fullName), 1)
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_UiTableHeader, null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_UiTableRow, null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_UiTableHead, null, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`\u0414\u0430\u0442\u0430`);
                                    } else {
                                      return [
                                        createTextVNode("\u0414\u0430\u0442\u0430")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                                _push5(ssrRenderComponent(_component_UiTableHead, { class: "text-center" }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435`);
                                    } else {
                                      return [
                                        createTextVNode("\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                                _push5(ssrRenderComponent(_component_UiTableHead, { class: "text-center" }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`\u0418\u043D\u0444\u043E`);
                                    } else {
                                      return [
                                        createTextVNode("\u0418\u043D\u0444\u043E")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                                _push5(ssrRenderComponent(_component_UiTableHead, { class: "text-center" }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C`);
                                    } else {
                                      return [
                                        createTextVNode("\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(_component_UiTableHead, null, {
                                    default: withCtx(() => [
                                      createTextVNode("\u0414\u0430\u0442\u0430")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_UiTableHead, { class: "text-center" }, {
                                    default: withCtx(() => [
                                      createTextVNode("\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_UiTableHead, { class: "text-center" }, {
                                    default: withCtx(() => [
                                      createTextVNode("\u0418\u043D\u0444\u043E")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_UiTableHead, { class: "text-center" }, {
                                    default: withCtx(() => [
                                      createTextVNode("\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C")
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
                            createVNode(_component_UiTableRow, null, {
                              default: withCtx(() => [
                                createVNode(_component_UiTableHead, null, {
                                  default: withCtx(() => [
                                    createTextVNode("\u0414\u0430\u0442\u0430")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_UiTableHead, { class: "text-center" }, {
                                  default: withCtx(() => [
                                    createTextVNode("\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_UiTableHead, { class: "text-center" }, {
                                  default: withCtx(() => [
                                    createTextVNode("\u0418\u043D\u0444\u043E")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_UiTableHead, { class: "text-center" }, {
                                  default: withCtx(() => [
                                    createTextVNode("\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C")
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
                    _push3(ssrRenderComponent(_component_UiTableBody, null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<!--[-->`);
                          ssrRenderList(unref(reports), (report) => {
                            _push4(ssrRenderComponent(_component_UiTableRow, {
                              key: report.id,
                              class: {
                                "cursor-pointer hover:bg-gray-100": true,
                                "bg-yellow-100/50": report.isOther,
                                "bg-red-100": report.penaltyCost > 0
                              },
                              onClick: ($event) => editReport(report)
                            }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(ssrRenderComponent(_component_UiTableCell, null, {
                                    default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        _push6(`<div class="flex items-center gap-2"${_scopeId5}><span${_scopeId5}>${ssrInterpolate(dateFormat2(report.date).slice(0, 5))}</span>`);
                                        if (report.comment) {
                                          _push6(ssrRenderComponent(unref(MessageCircle), null, null, _parent6, _scopeId5));
                                        } else {
                                          _push6(`<!---->`);
                                        }
                                        _push6(`</div>`);
                                      } else {
                                        return [
                                          createVNode("div", { class: "flex items-center gap-2" }, [
                                            createVNode("span", null, toDisplayString(dateFormat2(report.date).slice(0, 5)), 1),
                                            report.comment ? (openBlock(), createBlock(unref(MessageCircle), { key: 0 })) : createCommentVNode("", true)
                                          ])
                                        ];
                                      }
                                    }),
                                    _: 2
                                  }, _parent5, _scopeId4));
                                  _push5(ssrRenderComponent(_component_UiTableCell, { class: "text-center" }, {
                                    default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        _push6(`<div class="flex flex-col items-center"${_scopeId5}>`);
                                        if (report.name.startsWith("http")) {
                                          _push6(`<a${ssrRenderAttr("href", report.name)} target="_blank" class="text-blue-500 hover:underline"${_scopeId5}>\u041A\u0430\u0440\u0442\u043E\u0447\u043A\u0430</a>`);
                                        } else {
                                          _push6(`<div class="flex flex-col"${_scopeId5}><span${_scopeId5}>${ssrInterpolate(report.name)}</span></div>`);
                                        }
                                        if (report.dopsComment) {
                                          _push6(`<span class="text-wrap text-gray-600"${_scopeId5}> + ${ssrInterpolate(report.dopsComment)}</span>`);
                                        } else {
                                          _push6(`<!---->`);
                                        }
                                        _push6(`</div>`);
                                      } else {
                                        return [
                                          createVNode("div", { class: "flex flex-col items-center" }, [
                                            report.name.startsWith("http") ? (openBlock(), createBlock("a", {
                                              key: 0,
                                              href: report.name,
                                              target: "_blank",
                                              class: "text-blue-500 hover:underline",
                                              onClick: withModifiers(() => {
                                              }, ["stop"])
                                            }, "\u041A\u0430\u0440\u0442\u043E\u0447\u043A\u0430", 8, ["href", "onClick"])) : (openBlock(), createBlock("div", {
                                              key: 1,
                                              class: "flex flex-col"
                                            }, [
                                              createVNode("span", null, toDisplayString(report.name), 1)
                                            ])),
                                            report.dopsComment ? (openBlock(), createBlock("span", {
                                              key: 2,
                                              class: "text-wrap text-gray-600"
                                            }, " + " + toDisplayString(report.dopsComment), 1)) : createCommentVNode("", true)
                                          ])
                                        ];
                                      }
                                    }),
                                    _: 2
                                  }, _parent5, _scopeId4));
                                  if (report.isOther) {
                                    _push5(ssrRenderComponent(_component_UiTableCell, { class: "text-center" }, {
                                      default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                        if (_push6) {
                                          _push6(` \u0414\u0440\u0443\u0433\u043E\u0435 `);
                                        } else {
                                          return [
                                            createTextVNode(" \u0414\u0440\u0443\u0433\u043E\u0435 ")
                                          ];
                                        }
                                      }),
                                      _: 2
                                    }, _parent5, _scopeId4));
                                  } else {
                                    _push5(ssrRenderComponent(_component_UiTableCell, { class: "text-center" }, {
                                      default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                        if (_push6) {
                                          _push6(`<div class="flex flex-col gap-1"${_scopeId5}>`);
                                          if (report.items) {
                                            _push6(`<span${_scopeId5}>${ssrInterpolate(report.items)} \u0432\u044B\u0432.</span>`);
                                          } else {
                                            _push6(`<!---->`);
                                          }
                                          if (report.dimmers) {
                                            _push6(`<span${_scopeId5}>${ssrInterpolate(report.dimmers)} \u0434\u0438\u043C.</span>`);
                                          } else {
                                            _push6(`<!---->`);
                                          }
                                          if (report.adapters) {
                                            _push6(`<span${_scopeId5}>${ssrInterpolate(report.adapters)} \u0431\u043B\u043E\u043A</span>`);
                                          } else {
                                            _push6(`<!---->`);
                                          }
                                          if (report.lam) {
                                            _push6(`<span${_scopeId5}>${ssrInterpolate(report.lam)} \u043F\u043B\u0435\u043D\u043A\u0430</span>`);
                                          } else {
                                            _push6(`<!---->`);
                                          }
                                          if (report.overSize) {
                                            _push6(`<span${_scopeId5}>\u041D\u0435 \u0433\u0430\u0431\u0430\u0440\u0438\u0442</span>`);
                                          } else {
                                            _push6(`<!---->`);
                                          }
                                          _push6(`</div>`);
                                        } else {
                                          return [
                                            createVNode("div", { class: "flex flex-col gap-1" }, [
                                              report.items ? (openBlock(), createBlock("span", { key: 0 }, toDisplayString(report.items) + " \u0432\u044B\u0432.", 1)) : createCommentVNode("", true),
                                              report.dimmers ? (openBlock(), createBlock("span", { key: 1 }, toDisplayString(report.dimmers) + " \u0434\u0438\u043C.", 1)) : createCommentVNode("", true),
                                              report.adapters ? (openBlock(), createBlock("span", { key: 2 }, toDisplayString(report.adapters) + " \u0431\u043B\u043E\u043A", 1)) : createCommentVNode("", true),
                                              report.lam ? (openBlock(), createBlock("span", { key: 3 }, toDisplayString(report.lam) + " \u043F\u043B\u0435\u043D\u043A\u0430", 1)) : createCommentVNode("", true),
                                              report.overSize ? (openBlock(), createBlock("span", { key: 4 }, "\u041D\u0435 \u0433\u0430\u0431\u0430\u0440\u0438\u0442")) : createCommentVNode("", true)
                                            ])
                                          ];
                                        }
                                      }),
                                      _: 2
                                    }, _parent5, _scopeId4));
                                  }
                                  _push5(ssrRenderComponent(_component_UiTableCell, { class: "text-center" }, {
                                    default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        _push6(`<div class="flex flex-col"${_scopeId5}><span class="font-semibold text-green-600"${_scopeId5}>+${ssrInterpolate(report.cost)}\u0440.</span>`);
                                        if (report.penaltyCost) {
                                          _push6(`<span class="font-semibold text-red-500"${_scopeId5}>${ssrInterpolate(" -" + report.penaltyCost)}\u0440.</span>`);
                                        } else {
                                          _push6(`<!---->`);
                                        }
                                        _push6(`</div>`);
                                      } else {
                                        return [
                                          createVNode("div", { class: "flex flex-col" }, [
                                            createVNode("span", { class: "font-semibold text-green-600" }, "+" + toDisplayString(report.cost) + "\u0440.", 1),
                                            report.penaltyCost ? (openBlock(), createBlock("span", {
                                              key: 0,
                                              class: "font-semibold text-red-500"
                                            }, toDisplayString(" -" + report.penaltyCost) + "\u0440.", 1)) : createCommentVNode("", true)
                                          ])
                                        ];
                                      }
                                    }),
                                    _: 2
                                  }, _parent5, _scopeId4));
                                } else {
                                  return [
                                    createVNode(_component_UiTableCell, null, {
                                      default: withCtx(() => [
                                        createVNode("div", { class: "flex items-center gap-2" }, [
                                          createVNode("span", null, toDisplayString(dateFormat2(report.date).slice(0, 5)), 1),
                                          report.comment ? (openBlock(), createBlock(unref(MessageCircle), { key: 0 })) : createCommentVNode("", true)
                                        ])
                                      ]),
                                      _: 2
                                    }, 1024),
                                    createVNode(_component_UiTableCell, { class: "text-center" }, {
                                      default: withCtx(() => [
                                        createVNode("div", { class: "flex flex-col items-center" }, [
                                          report.name.startsWith("http") ? (openBlock(), createBlock("a", {
                                            key: 0,
                                            href: report.name,
                                            target: "_blank",
                                            class: "text-blue-500 hover:underline",
                                            onClick: withModifiers(() => {
                                            }, ["stop"])
                                          }, "\u041A\u0430\u0440\u0442\u043E\u0447\u043A\u0430", 8, ["href", "onClick"])) : (openBlock(), createBlock("div", {
                                            key: 1,
                                            class: "flex flex-col"
                                          }, [
                                            createVNode("span", null, toDisplayString(report.name), 1)
                                          ])),
                                          report.dopsComment ? (openBlock(), createBlock("span", {
                                            key: 2,
                                            class: "text-wrap text-gray-600"
                                          }, " + " + toDisplayString(report.dopsComment), 1)) : createCommentVNode("", true)
                                        ])
                                      ]),
                                      _: 2
                                    }, 1024),
                                    report.isOther ? (openBlock(), createBlock(_component_UiTableCell, {
                                      key: 0,
                                      class: "text-center"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" \u0414\u0440\u0443\u0433\u043E\u0435 ")
                                      ]),
                                      _: 1
                                    })) : (openBlock(), createBlock(_component_UiTableCell, {
                                      key: 1,
                                      class: "text-center"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode("div", { class: "flex flex-col gap-1" }, [
                                          report.items ? (openBlock(), createBlock("span", { key: 0 }, toDisplayString(report.items) + " \u0432\u044B\u0432.", 1)) : createCommentVNode("", true),
                                          report.dimmers ? (openBlock(), createBlock("span", { key: 1 }, toDisplayString(report.dimmers) + " \u0434\u0438\u043C.", 1)) : createCommentVNode("", true),
                                          report.adapters ? (openBlock(), createBlock("span", { key: 2 }, toDisplayString(report.adapters) + " \u0431\u043B\u043E\u043A", 1)) : createCommentVNode("", true),
                                          report.lam ? (openBlock(), createBlock("span", { key: 3 }, toDisplayString(report.lam) + " \u043F\u043B\u0435\u043D\u043A\u0430", 1)) : createCommentVNode("", true),
                                          report.overSize ? (openBlock(), createBlock("span", { key: 4 }, "\u041D\u0435 \u0433\u0430\u0431\u0430\u0440\u0438\u0442")) : createCommentVNode("", true)
                                        ])
                                      ]),
                                      _: 2
                                    }, 1024)),
                                    createVNode(_component_UiTableCell, { class: "text-center" }, {
                                      default: withCtx(() => [
                                        createVNode("div", { class: "flex flex-col" }, [
                                          createVNode("span", { class: "font-semibold text-green-600" }, "+" + toDisplayString(report.cost) + "\u0440.", 1),
                                          report.penaltyCost ? (openBlock(), createBlock("span", {
                                            key: 0,
                                            class: "font-semibold text-red-500"
                                          }, toDisplayString(" -" + report.penaltyCost) + "\u0440.", 1)) : createCommentVNode("", true)
                                        ])
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                          });
                          _push4(`<!--]-->`);
                        } else {
                          return [
                            (openBlock(true), createBlock(Fragment, null, renderList(unref(reports), (report) => {
                              return openBlock(), createBlock(_component_UiTableRow, {
                                key: report.id,
                                class: {
                                  "cursor-pointer hover:bg-gray-100": true,
                                  "bg-yellow-100/50": report.isOther,
                                  "bg-red-100": report.penaltyCost > 0
                                },
                                onClick: ($event) => editReport(report)
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_UiTableCell, null, {
                                    default: withCtx(() => [
                                      createVNode("div", { class: "flex items-center gap-2" }, [
                                        createVNode("span", null, toDisplayString(dateFormat2(report.date).slice(0, 5)), 1),
                                        report.comment ? (openBlock(), createBlock(unref(MessageCircle), { key: 0 })) : createCommentVNode("", true)
                                      ])
                                    ]),
                                    _: 2
                                  }, 1024),
                                  createVNode(_component_UiTableCell, { class: "text-center" }, {
                                    default: withCtx(() => [
                                      createVNode("div", { class: "flex flex-col items-center" }, [
                                        report.name.startsWith("http") ? (openBlock(), createBlock("a", {
                                          key: 0,
                                          href: report.name,
                                          target: "_blank",
                                          class: "text-blue-500 hover:underline",
                                          onClick: withModifiers(() => {
                                          }, ["stop"])
                                        }, "\u041A\u0430\u0440\u0442\u043E\u0447\u043A\u0430", 8, ["href", "onClick"])) : (openBlock(), createBlock("div", {
                                          key: 1,
                                          class: "flex flex-col"
                                        }, [
                                          createVNode("span", null, toDisplayString(report.name), 1)
                                        ])),
                                        report.dopsComment ? (openBlock(), createBlock("span", {
                                          key: 2,
                                          class: "text-wrap text-gray-600"
                                        }, " + " + toDisplayString(report.dopsComment), 1)) : createCommentVNode("", true)
                                      ])
                                    ]),
                                    _: 2
                                  }, 1024),
                                  report.isOther ? (openBlock(), createBlock(_component_UiTableCell, {
                                    key: 0,
                                    class: "text-center"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" \u0414\u0440\u0443\u0433\u043E\u0435 ")
                                    ]),
                                    _: 1
                                  })) : (openBlock(), createBlock(_component_UiTableCell, {
                                    key: 1,
                                    class: "text-center"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("div", { class: "flex flex-col gap-1" }, [
                                        report.items ? (openBlock(), createBlock("span", { key: 0 }, toDisplayString(report.items) + " \u0432\u044B\u0432.", 1)) : createCommentVNode("", true),
                                        report.dimmers ? (openBlock(), createBlock("span", { key: 1 }, toDisplayString(report.dimmers) + " \u0434\u0438\u043C.", 1)) : createCommentVNode("", true),
                                        report.adapters ? (openBlock(), createBlock("span", { key: 2 }, toDisplayString(report.adapters) + " \u0431\u043B\u043E\u043A", 1)) : createCommentVNode("", true),
                                        report.lam ? (openBlock(), createBlock("span", { key: 3 }, toDisplayString(report.lam) + " \u043F\u043B\u0435\u043D\u043A\u0430", 1)) : createCommentVNode("", true),
                                        report.overSize ? (openBlock(), createBlock("span", { key: 4 }, "\u041D\u0435 \u0433\u0430\u0431\u0430\u0440\u0438\u0442")) : createCommentVNode("", true)
                                      ])
                                    ]),
                                    _: 2
                                  }, 1024)),
                                  createVNode(_component_UiTableCell, { class: "text-center" }, {
                                    default: withCtx(() => [
                                      createVNode("div", { class: "flex flex-col" }, [
                                        createVNode("span", { class: "font-semibold text-green-600" }, "+" + toDisplayString(report.cost) + "\u0440.", 1),
                                        report.penaltyCost ? (openBlock(), createBlock("span", {
                                          key: 0,
                                          class: "font-semibold text-red-500"
                                        }, toDisplayString(" -" + report.penaltyCost) + "\u0440.", 1)) : createCommentVNode("", true)
                                      ])
                                    ]),
                                    _: 2
                                  }, 1024)
                                ]),
                                _: 2
                              }, 1032, ["class", "onClick"]);
                            }), 128))
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_UiTableCaption, null, {
                        default: withCtx(() => {
                          var _a22;
                          return [
                            createTextVNode("\u041E\u0442\u0447\u0435\u0442\u044B \u0443\u043F\u0430\u043A\u043E\u0432\u0449\u0438\u043A\u0430: " + toDisplayString((_a22 = _ctx.curentPacker) == null ? void 0 : _a22.fullName), 1)
                          ];
                        }),
                        _: 1
                      }),
                      createVNode(_component_UiTableHeader, null, {
                        default: withCtx(() => [
                          createVNode(_component_UiTableRow, null, {
                            default: withCtx(() => [
                              createVNode(_component_UiTableHead, null, {
                                default: withCtx(() => [
                                  createTextVNode("\u0414\u0430\u0442\u0430")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_UiTableHead, { class: "text-center" }, {
                                default: withCtx(() => [
                                  createTextVNode("\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_UiTableHead, { class: "text-center" }, {
                                default: withCtx(() => [
                                  createTextVNode("\u0418\u043D\u0444\u043E")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_UiTableHead, { class: "text-center" }, {
                                default: withCtx(() => [
                                  createTextVNode("\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_UiTableBody, null, {
                        default: withCtx(() => [
                          (openBlock(true), createBlock(Fragment, null, renderList(unref(reports), (report) => {
                            return openBlock(), createBlock(_component_UiTableRow, {
                              key: report.id,
                              class: {
                                "cursor-pointer hover:bg-gray-100": true,
                                "bg-yellow-100/50": report.isOther,
                                "bg-red-100": report.penaltyCost > 0
                              },
                              onClick: ($event) => editReport(report)
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_UiTableCell, null, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "flex items-center gap-2" }, [
                                      createVNode("span", null, toDisplayString(dateFormat2(report.date).slice(0, 5)), 1),
                                      report.comment ? (openBlock(), createBlock(unref(MessageCircle), { key: 0 })) : createCommentVNode("", true)
                                    ])
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode(_component_UiTableCell, { class: "text-center" }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "flex flex-col items-center" }, [
                                      report.name.startsWith("http") ? (openBlock(), createBlock("a", {
                                        key: 0,
                                        href: report.name,
                                        target: "_blank",
                                        class: "text-blue-500 hover:underline",
                                        onClick: withModifiers(() => {
                                        }, ["stop"])
                                      }, "\u041A\u0430\u0440\u0442\u043E\u0447\u043A\u0430", 8, ["href", "onClick"])) : (openBlock(), createBlock("div", {
                                        key: 1,
                                        class: "flex flex-col"
                                      }, [
                                        createVNode("span", null, toDisplayString(report.name), 1)
                                      ])),
                                      report.dopsComment ? (openBlock(), createBlock("span", {
                                        key: 2,
                                        class: "text-wrap text-gray-600"
                                      }, " + " + toDisplayString(report.dopsComment), 1)) : createCommentVNode("", true)
                                    ])
                                  ]),
                                  _: 2
                                }, 1024),
                                report.isOther ? (openBlock(), createBlock(_component_UiTableCell, {
                                  key: 0,
                                  class: "text-center"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" \u0414\u0440\u0443\u0433\u043E\u0435 ")
                                  ]),
                                  _: 1
                                })) : (openBlock(), createBlock(_component_UiTableCell, {
                                  key: 1,
                                  class: "text-center"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "flex flex-col gap-1" }, [
                                      report.items ? (openBlock(), createBlock("span", { key: 0 }, toDisplayString(report.items) + " \u0432\u044B\u0432.", 1)) : createCommentVNode("", true),
                                      report.dimmers ? (openBlock(), createBlock("span", { key: 1 }, toDisplayString(report.dimmers) + " \u0434\u0438\u043C.", 1)) : createCommentVNode("", true),
                                      report.adapters ? (openBlock(), createBlock("span", { key: 2 }, toDisplayString(report.adapters) + " \u0431\u043B\u043E\u043A", 1)) : createCommentVNode("", true),
                                      report.lam ? (openBlock(), createBlock("span", { key: 3 }, toDisplayString(report.lam) + " \u043F\u043B\u0435\u043D\u043A\u0430", 1)) : createCommentVNode("", true),
                                      report.overSize ? (openBlock(), createBlock("span", { key: 4 }, "\u041D\u0435 \u0433\u0430\u0431\u0430\u0440\u0438\u0442")) : createCommentVNode("", true)
                                    ])
                                  ]),
                                  _: 2
                                }, 1024)),
                                createVNode(_component_UiTableCell, { class: "text-center" }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "flex flex-col" }, [
                                      createVNode("span", { class: "font-semibold text-green-600" }, "+" + toDisplayString(report.cost) + "\u0440.", 1),
                                      report.penaltyCost ? (openBlock(), createBlock("span", {
                                        key: 0,
                                        class: "font-semibold text-red-500"
                                      }, toDisplayString(" -" + report.penaltyCost) + "\u0440.", 1)) : createCommentVNode("", true)
                                    ])
                                  ]),
                                  _: 2
                                }, 1024)
                              ]),
                              _: 2
                            }, 1032, ["class", "onClick"]);
                          }), 128))
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_UiTable, { class: "bg-white rounded-sm" }, {
                  default: withCtx(() => [
                    createVNode(_component_UiTableCaption, null, {
                      default: withCtx(() => {
                        var _a22;
                        return [
                          createTextVNode("\u041E\u0442\u0447\u0435\u0442\u044B \u0443\u043F\u0430\u043A\u043E\u0432\u0449\u0438\u043A\u0430: " + toDisplayString((_a22 = _ctx.curentPacker) == null ? void 0 : _a22.fullName), 1)
                        ];
                      }),
                      _: 1
                    }),
                    createVNode(_component_UiTableHeader, null, {
                      default: withCtx(() => [
                        createVNode(_component_UiTableRow, null, {
                          default: withCtx(() => [
                            createVNode(_component_UiTableHead, null, {
                              default: withCtx(() => [
                                createTextVNode("\u0414\u0430\u0442\u0430")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_UiTableHead, { class: "text-center" }, {
                              default: withCtx(() => [
                                createTextVNode("\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_UiTableHead, { class: "text-center" }, {
                              default: withCtx(() => [
                                createTextVNode("\u0418\u043D\u0444\u043E")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_UiTableHead, { class: "text-center" }, {
                              default: withCtx(() => [
                                createTextVNode("\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_UiTableBody, null, {
                      default: withCtx(() => [
                        (openBlock(true), createBlock(Fragment, null, renderList(unref(reports), (report) => {
                          return openBlock(), createBlock(_component_UiTableRow, {
                            key: report.id,
                            class: {
                              "cursor-pointer hover:bg-gray-100": true,
                              "bg-yellow-100/50": report.isOther,
                              "bg-red-100": report.penaltyCost > 0
                            },
                            onClick: ($event) => editReport(report)
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_UiTableCell, null, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "flex items-center gap-2" }, [
                                    createVNode("span", null, toDisplayString(dateFormat2(report.date).slice(0, 5)), 1),
                                    report.comment ? (openBlock(), createBlock(unref(MessageCircle), { key: 0 })) : createCommentVNode("", true)
                                  ])
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(_component_UiTableCell, { class: "text-center" }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "flex flex-col items-center" }, [
                                    report.name.startsWith("http") ? (openBlock(), createBlock("a", {
                                      key: 0,
                                      href: report.name,
                                      target: "_blank",
                                      class: "text-blue-500 hover:underline",
                                      onClick: withModifiers(() => {
                                      }, ["stop"])
                                    }, "\u041A\u0430\u0440\u0442\u043E\u0447\u043A\u0430", 8, ["href", "onClick"])) : (openBlock(), createBlock("div", {
                                      key: 1,
                                      class: "flex flex-col"
                                    }, [
                                      createVNode("span", null, toDisplayString(report.name), 1)
                                    ])),
                                    report.dopsComment ? (openBlock(), createBlock("span", {
                                      key: 2,
                                      class: "text-wrap text-gray-600"
                                    }, " + " + toDisplayString(report.dopsComment), 1)) : createCommentVNode("", true)
                                  ])
                                ]),
                                _: 2
                              }, 1024),
                              report.isOther ? (openBlock(), createBlock(_component_UiTableCell, {
                                key: 0,
                                class: "text-center"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" \u0414\u0440\u0443\u0433\u043E\u0435 ")
                                ]),
                                _: 1
                              })) : (openBlock(), createBlock(_component_UiTableCell, {
                                key: 1,
                                class: "text-center"
                              }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "flex flex-col gap-1" }, [
                                    report.items ? (openBlock(), createBlock("span", { key: 0 }, toDisplayString(report.items) + " \u0432\u044B\u0432.", 1)) : createCommentVNode("", true),
                                    report.dimmers ? (openBlock(), createBlock("span", { key: 1 }, toDisplayString(report.dimmers) + " \u0434\u0438\u043C.", 1)) : createCommentVNode("", true),
                                    report.adapters ? (openBlock(), createBlock("span", { key: 2 }, toDisplayString(report.adapters) + " \u0431\u043B\u043E\u043A", 1)) : createCommentVNode("", true),
                                    report.lam ? (openBlock(), createBlock("span", { key: 3 }, toDisplayString(report.lam) + " \u043F\u043B\u0435\u043D\u043A\u0430", 1)) : createCommentVNode("", true),
                                    report.overSize ? (openBlock(), createBlock("span", { key: 4 }, "\u041D\u0435 \u0433\u0430\u0431\u0430\u0440\u0438\u0442")) : createCommentVNode("", true)
                                  ])
                                ]),
                                _: 2
                              }, 1024)),
                              createVNode(_component_UiTableCell, { class: "text-center" }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "flex flex-col" }, [
                                    createVNode("span", { class: "font-semibold text-green-600" }, "+" + toDisplayString(report.cost) + "\u0440.", 1),
                                    report.penaltyCost ? (openBlock(), createBlock("span", {
                                      key: 0,
                                      class: "font-semibold text-red-500"
                                    }, toDisplayString(" -" + report.penaltyCost) + "\u0440.", 1)) : createCommentVNode("", true)
                                  ])
                                ]),
                                _: 2
                              }, 1024)
                            ]),
                            _: 2
                          }, 1032, ["class", "onClick"]);
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
        }, _parent));
      }
      if (unref(isEditModalOpen) && unref(editingReport)) {
        _push(ssrRenderComponent(_component_MyProductionEditPackerReport, {
          report: unref(editingReport),
          "cur-user": unref(curUser),
          "packer-id": (_a2 = (_a = _ctx.curentPacker) == null ? void 0 : _a.id) != null ? _a2 : 0,
          onReportUpdated: handleReportUpdated,
          onClose: ($event) => isEditModalOpen.value = false
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (unref(isEditOtherModalOpen) && unref(editingOtherReport)) {
        _push(ssrRenderComponent(_component_MyProductionEditOtherReport, {
          report: unref(editingOtherReport),
          "master-id": (_b2 = (_b = _ctx.curentPacker) == null ? void 0 : _b.id) != null ? _b2 : 0,
          onReportUpdated: handleReportUpdated,
          onClose: ($event) => isEditOtherModalOpen.value = false
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/my/production/PackersReportTable.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "PackersStat",
  __ssrInlineRender: true,
  props: {
    period: {}
  },
  setup(__props) {
    const { $useApi } = useNuxtApp();
    const { toast } = useToast();
    const props = __props;
    const period = ref(props.period);
    const isLoading = ref(false);
    const error = ref(null);
    const statData = ref(null);
    const curPacker = ref();
    const isSheetOpen = ref(false);
    const getDatas = async () => {
      try {
        isLoading.value = true;
        error.value = null;
        const { data } = await $useApi.get("production/packer-stat", {
          params: {
            period: period.value
          }
        });
        statData.value = data;
      } catch (e) {
        error.value = "\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u0441\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043A\u0443";
        toast({
          title: "\u041E\u0448\u0438\u0431\u043A\u0430",
          description: error.value,
          variant: "destructive"
        });
      } finally {
        isLoading.value = false;
      }
    };
    const formatDate = (date) => {
      const parsedDate = new Date(date);
      const day = format(parsedDate, "dd", { locale: ru });
      const weekday = format(parsedDate, "EEEEEE", { locale: ru });
      return `${day} (${weekday})`;
    };
    const isWeekend = (date) => {
      const parsedDate = new Date(date);
      const dayOfWeek = parsedDate.getDay();
      return dayOfWeek === 0 || dayOfWeek === 6;
    };
    const totalShifts = computed(() => {
      if (!statData.value) return 0;
      return Object.values(statData.value.shiftsSumByDate).reduce((sum, count) => sum + count, 0);
    });
    const totalItems = computed(() => {
      if (!statData.value) return 0;
      return Object.values(statData.value.itemsSumByDate).reduce((sum, count) => sum + count, 0);
    });
    const getPackerReports = async (master) => {
      curPacker.value = master;
      isSheetOpen.value = true;
    };
    watch(period, () => {
      getDatas();
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiSheet = _sfc_main$5$2;
      const _component_UiSheetTrigger = _sfc_main$4$3;
      const _component_UiSheetContent = _sfc_main$3$4;
      const _component_UiSheetHeader = _sfc_main$2$6;
      const _component_UiSheetTitle = _sfc_main$1$6;
      const _component_UiSheetDescription = _sfc_main$p;
      const _component_MyProductionPackersReportTable = _sfc_main$2;
      const _component_UiCard = _sfc_main$3$2;
      const _component_UiTable = _sfc_main$5$1;
      const _component_UiTableCaption = _sfc_main$6$1;
      const _component_UiTableHeader = _sfc_main$i;
      const _component_UiTableRow = _sfc_main$2$2;
      const _component_UiTableHead = _sfc_main$1$2;
      const _component_UiTableBody = _sfc_main$4$1;
      const _component_UiTableCell = _sfc_main$3$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col gap-2" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_UiSheet, {
        open: isSheetOpen.value,
        "onUpdate:open": ($event) => isSheetOpen.value = $event
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UiSheetTrigger, { class: "hidden" }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UiSheetContent, { class: "min-w-[500px] p-0" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                var _a, _b;
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UiSheetHeader, { class: "hidden" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UiSheetTitle, null, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_UiSheetDescription, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_UiSheetTitle),
                          createVNode(_component_UiSheetDescription)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<div class="px-2"${_scopeId2}><div class="text-xl font-semibold py-2"${_scopeId2}>${ssrInterpolate((_a = curPacker.value) == null ? void 0 : _a.fullName)}</div>`);
                  if (curPacker.value) {
                    _push3(ssrRenderComponent(_component_MyProductionPackersReportTable, {
                      period: period.value,
                      "curent-packer": curPacker.value,
                      onUpdated: getDatas
                    }, null, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode(_component_UiSheetHeader, { class: "hidden" }, {
                      default: withCtx(() => [
                        createVNode(_component_UiSheetTitle),
                        createVNode(_component_UiSheetDescription)
                      ]),
                      _: 1
                    }),
                    createVNode("div", { class: "px-2" }, [
                      createVNode("div", { class: "text-xl font-semibold py-2" }, toDisplayString((_b = curPacker.value) == null ? void 0 : _b.fullName), 1),
                      curPacker.value ? (openBlock(), createBlock(_component_MyProductionPackersReportTable, {
                        key: 0,
                        period: period.value,
                        "curent-packer": curPacker.value,
                        onUpdated: getDatas
                      }, null, 8, ["period", "curent-packer"])) : createCommentVNode("", true)
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UiSheetTrigger, { class: "hidden" }),
              createVNode(_component_UiSheetContent, { class: "min-w-[500px] p-0" }, {
                default: withCtx(() => {
                  var _a;
                  return [
                    createVNode(_component_UiSheetHeader, { class: "hidden" }, {
                      default: withCtx(() => [
                        createVNode(_component_UiSheetTitle),
                        createVNode(_component_UiSheetDescription)
                      ]),
                      _: 1
                    }),
                    createVNode("div", { class: "px-2" }, [
                      createVNode("div", { class: "text-xl font-semibold py-2" }, toDisplayString((_a = curPacker.value) == null ? void 0 : _a.fullName), 1),
                      curPacker.value ? (openBlock(), createBlock(_component_MyProductionPackersReportTable, {
                        key: 0,
                        period: period.value,
                        "curent-packer": curPacker.value,
                        onUpdated: getDatas
                      }, null, 8, ["period", "curent-packer"])) : createCommentVNode("", true)
                    ])
                  ];
                }),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      if (isLoading.value) {
        _push(`<div class="text-center">\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430...</div>`);
      } else if (error.value) {
        _push(`<div class="text-red-500 text-center">${ssrInterpolate(error.value)}</div>`);
      } else if (!statData.value || statData.value.packers.length === 0) {
        _push(`<div class="text-center"> \u041D\u0435\u0442 \u0434\u0430\u043D\u043D\u044B\u0445 \u0437\u0430 \u0432\u044B\u0431\u0440\u0430\u043D\u043D\u044B\u0439 \u043F\u0435\u0440\u0438\u043E\u0434 </div>`);
      } else {
        _push(`<div>`);
        _push(ssrRenderComponent(_component_UiCard, { class: "mb-4 p-4 bg-white rounded-sm shadow-sm" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="flex flex-col sm:flex-row gap-4"${_scopeId}><div class="flex-1"${_scopeId}><h3 class="text-sm font-semibold text-gray-700"${_scopeId}> \u041E\u0431\u0449\u0435\u0435 \u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u0441\u043C\u0435\u043D </h3><p class="text-lg font-bold text-green-600"${_scopeId}>${ssrInterpolate(totalShifts.value)}</p></div><div class="flex-1"${_scopeId}><h3 class="text-sm font-semibold text-gray-700"${_scopeId}> \u041E\u0431\u0449\u0435\u0435 \u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u0432\u044B\u0432\u0435\u0441\u043E\u043A </h3><p class="text-lg font-bold text-blue-600"${_scopeId}>${ssrInterpolate(totalItems.value)}</p></div></div>`);
            } else {
              return [
                createVNode("div", { class: "flex flex-col sm:flex-row gap-4" }, [
                  createVNode("div", { class: "flex-1" }, [
                    createVNode("h3", { class: "text-sm font-semibold text-gray-700" }, " \u041E\u0431\u0449\u0435\u0435 \u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u0441\u043C\u0435\u043D "),
                    createVNode("p", { class: "text-lg font-bold text-green-600" }, toDisplayString(totalShifts.value), 1)
                  ]),
                  createVNode("div", { class: "flex-1" }, [
                    createVNode("h3", { class: "text-sm font-semibold text-gray-700" }, " \u041E\u0431\u0449\u0435\u0435 \u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u0432\u044B\u0432\u0435\u0441\u043E\u043A "),
                    createVNode("p", { class: "text-lg font-bold text-blue-600" }, toDisplayString(totalItems.value), 1)
                  ])
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<div class="overflow-x-auto">`);
        _push(ssrRenderComponent(_component_UiTable, { class: "bg-white rounded-sm text-xs w-full border border-black" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_UiTableCaption, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043A\u0430 \u0443\u043F\u0430\u043A\u043E\u0432\u0449\u0438\u043A\u043E\u0432 \u0437\u0430 ${ssrInterpolate(period.value)}`);
                  } else {
                    return [
                      createTextVNode("\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043A\u0430 \u0443\u043F\u0430\u043A\u043E\u0432\u0449\u0438\u043A\u043E\u0432 \u0437\u0430 " + toDisplayString(period.value), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UiTableHeader, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UiTableRow, null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_UiTableHead, { class: "p-2 sticky left-0 bg-gray-300 font-bold border border-black" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`\u0423\u043F\u0430\u043A\u043E\u0432\u0449\u0438\u043A`);
                              } else {
                                return [
                                  createTextVNode("\u0423\u043F\u0430\u043A\u043E\u0432\u0449\u0438\u043A")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(`<!--[-->`);
                          ssrRenderList(statData.value.dates, (date, index) => {
                            _push4(ssrRenderComponent(_component_UiTableHead, {
                              key: date,
                              class: "p-1 text-center bg-gray-300 border border-black"
                            }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`${ssrInterpolate(formatDate(date).split(" ")[0])}<br${_scopeId4}> ${ssrInterpolate(formatDate(date).split(" ")[1])}`);
                                } else {
                                  return [
                                    createTextVNode(toDisplayString(formatDate(date).split(" ")[0]), 1),
                                    createVNode("br"),
                                    createTextVNode(" " + toDisplayString(formatDate(date).split(" ")[1]), 1)
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                          });
                          _push4(`<!--]-->`);
                        } else {
                          return [
                            createVNode(_component_UiTableHead, { class: "p-2 sticky left-0 bg-gray-300 font-bold border border-black" }, {
                              default: withCtx(() => [
                                createTextVNode("\u0423\u043F\u0430\u043A\u043E\u0432\u0449\u0438\u043A")
                              ]),
                              _: 1
                            }),
                            (openBlock(true), createBlock(Fragment, null, renderList(statData.value.dates, (date, index) => {
                              return openBlock(), createBlock(_component_UiTableHead, {
                                key: date,
                                class: "p-1 text-center bg-gray-300 border border-black"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(formatDate(date).split(" ")[0]), 1),
                                  createVNode("br"),
                                  createTextVNode(" " + toDisplayString(formatDate(date).split(" ")[1]), 1)
                                ]),
                                _: 2
                              }, 1024);
                            }), 128))
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_UiTableRow, null, {
                        default: withCtx(() => [
                          createVNode(_component_UiTableHead, { class: "p-2 sticky left-0 bg-gray-300 font-bold border border-black" }, {
                            default: withCtx(() => [
                              createTextVNode("\u0423\u043F\u0430\u043A\u043E\u0432\u0449\u0438\u043A")
                            ]),
                            _: 1
                          }),
                          (openBlock(true), createBlock(Fragment, null, renderList(statData.value.dates, (date, index) => {
                            return openBlock(), createBlock(_component_UiTableHead, {
                              key: date,
                              class: "p-1 text-center bg-gray-300 border border-black"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(formatDate(date).split(" ")[0]), 1),
                                createVNode("br"),
                                createTextVNode(" " + toDisplayString(formatDate(date).split(" ")[1]), 1)
                              ]),
                              _: 2
                            }, 1024);
                          }), 128))
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UiTableBody, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UiTableRow, null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_UiTableCell, { class: "p-2 sticky left-0 bg-gray-300 font-semibold border border-black" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`\u0421\u043C\u0435\u043D\u044B`);
                              } else {
                                return [
                                  createTextVNode("\u0421\u043C\u0435\u043D\u044B")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(`<!--[-->`);
                          ssrRenderList(statData.value.dates, (date, index) => {
                            _push4(ssrRenderComponent(_component_UiTableCell, {
                              key: date,
                              class: "p-1 text-center bg-green-500/50 border border-black"
                            }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`${ssrInterpolate(statData.value.shiftsSumByDate[date] || 0)}`);
                                } else {
                                  return [
                                    createTextVNode(toDisplayString(statData.value.shiftsSumByDate[date] || 0), 1)
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                          });
                          _push4(`<!--]-->`);
                        } else {
                          return [
                            createVNode(_component_UiTableCell, { class: "p-2 sticky left-0 bg-gray-300 font-semibold border border-black" }, {
                              default: withCtx(() => [
                                createTextVNode("\u0421\u043C\u0435\u043D\u044B")
                              ]),
                              _: 1
                            }),
                            (openBlock(true), createBlock(Fragment, null, renderList(statData.value.dates, (date, index) => {
                              return openBlock(), createBlock(_component_UiTableCell, {
                                key: date,
                                class: "p-1 text-center bg-green-500/50 border border-black"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(statData.value.shiftsSumByDate[date] || 0), 1)
                                ]),
                                _: 2
                              }, 1024);
                            }), 128))
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_UiTableRow, null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_UiTableCell, { class: "p-2 sticky left-0 bg-gray-300 font-semibold border border-black" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`\u0412\u044B\u0432\u0435\u0441\u043A\u0438`);
                              } else {
                                return [
                                  createTextVNode("\u0412\u044B\u0432\u0435\u0441\u043A\u0438")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(`<!--[-->`);
                          ssrRenderList(statData.value.dates, (date, index) => {
                            _push4(ssrRenderComponent(_component_UiTableCell, {
                              key: date,
                              class: "p-1 text-center bg-gray-300/50 border border-black"
                            }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`${ssrInterpolate(statData.value.itemsSumByDate[date] || 0)}`);
                                } else {
                                  return [
                                    createTextVNode(toDisplayString(statData.value.itemsSumByDate[date] || 0), 1)
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                          });
                          _push4(`<!--]-->`);
                        } else {
                          return [
                            createVNode(_component_UiTableCell, { class: "p-2 sticky left-0 bg-gray-300 font-semibold border border-black" }, {
                              default: withCtx(() => [
                                createTextVNode("\u0412\u044B\u0432\u0435\u0441\u043A\u0438")
                              ]),
                              _: 1
                            }),
                            (openBlock(true), createBlock(Fragment, null, renderList(statData.value.dates, (date, index) => {
                              return openBlock(), createBlock(_component_UiTableCell, {
                                key: date,
                                class: "p-1 text-center bg-gray-300/50 border border-black"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(statData.value.itemsSumByDate[date] || 0), 1)
                                ]),
                                _: 2
                              }, 1024);
                            }), 128))
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(`<!--[-->`);
                    ssrRenderList(statData.value.packers, (packer) => {
                      _push3(ssrRenderComponent(_component_UiTableRow, {
                        key: packer.packerId,
                        class: "cursor-pointer",
                        onClick: ($event) => getPackerReports({ id: packer.packerId, fullName: packer.fullName })
                      }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(ssrRenderComponent(_component_UiTableCell, { class: "p-2 sticky left-0 bg-gray-300 border border-black" }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`${ssrInterpolate(packer.fullName)}`);
                                } else {
                                  return [
                                    createTextVNode(toDisplayString(packer.fullName), 1)
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                            _push4(`<!--[-->`);
                            ssrRenderList(statData.value.dates, (date, index) => {
                              _push4(ssrRenderComponent(_component_UiTableCell, {
                                key: date,
                                class: ["p-1 text-center border border-black", {
                                  "bg-blue-100/50": isWeekend(date),
                                  "bg-green-500/50": packer.shiftsByDate[date],
                                  "font-bold": packer.itemsByDate[date]
                                }]
                              }, {
                                default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                  if (_push5) {
                                    _push5(`${ssrInterpolate(packer.itemsByDate[date] || 0)}`);
                                  } else {
                                    return [
                                      createTextVNode(toDisplayString(packer.itemsByDate[date] || 0), 1)
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent4, _scopeId3));
                            });
                            _push4(`<!--]-->`);
                          } else {
                            return [
                              createVNode(_component_UiTableCell, { class: "p-2 sticky left-0 bg-gray-300 border border-black" }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(packer.fullName), 1)
                                ]),
                                _: 2
                              }, 1024),
                              (openBlock(true), createBlock(Fragment, null, renderList(statData.value.dates, (date, index) => {
                                return openBlock(), createBlock(_component_UiTableCell, {
                                  key: date,
                                  class: ["p-1 text-center border border-black", {
                                    "bg-blue-100/50": isWeekend(date),
                                    "bg-green-500/50": packer.shiftsByDate[date],
                                    "font-bold": packer.itemsByDate[date]
                                  }]
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(packer.itemsByDate[date] || 0), 1)
                                  ]),
                                  _: 2
                                }, 1032, ["class"]);
                              }), 128))
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                    });
                    _push3(`<!--]-->`);
                  } else {
                    return [
                      createVNode(_component_UiTableRow, null, {
                        default: withCtx(() => [
                          createVNode(_component_UiTableCell, { class: "p-2 sticky left-0 bg-gray-300 font-semibold border border-black" }, {
                            default: withCtx(() => [
                              createTextVNode("\u0421\u043C\u0435\u043D\u044B")
                            ]),
                            _: 1
                          }),
                          (openBlock(true), createBlock(Fragment, null, renderList(statData.value.dates, (date, index) => {
                            return openBlock(), createBlock(_component_UiTableCell, {
                              key: date,
                              class: "p-1 text-center bg-green-500/50 border border-black"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(statData.value.shiftsSumByDate[date] || 0), 1)
                              ]),
                              _: 2
                            }, 1024);
                          }), 128))
                        ]),
                        _: 1
                      }),
                      createVNode(_component_UiTableRow, null, {
                        default: withCtx(() => [
                          createVNode(_component_UiTableCell, { class: "p-2 sticky left-0 bg-gray-300 font-semibold border border-black" }, {
                            default: withCtx(() => [
                              createTextVNode("\u0412\u044B\u0432\u0435\u0441\u043A\u0438")
                            ]),
                            _: 1
                          }),
                          (openBlock(true), createBlock(Fragment, null, renderList(statData.value.dates, (date, index) => {
                            return openBlock(), createBlock(_component_UiTableCell, {
                              key: date,
                              class: "p-1 text-center bg-gray-300/50 border border-black"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(statData.value.itemsSumByDate[date] || 0), 1)
                              ]),
                              _: 2
                            }, 1024);
                          }), 128))
                        ]),
                        _: 1
                      }),
                      (openBlock(true), createBlock(Fragment, null, renderList(statData.value.packers, (packer) => {
                        return openBlock(), createBlock(_component_UiTableRow, {
                          key: packer.packerId,
                          class: "cursor-pointer",
                          onClick: ($event) => getPackerReports({ id: packer.packerId, fullName: packer.fullName })
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_UiTableCell, { class: "p-2 sticky left-0 bg-gray-300 border border-black" }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(packer.fullName), 1)
                              ]),
                              _: 2
                            }, 1024),
                            (openBlock(true), createBlock(Fragment, null, renderList(statData.value.dates, (date, index) => {
                              return openBlock(), createBlock(_component_UiTableCell, {
                                key: date,
                                class: ["p-1 text-center border border-black", {
                                  "bg-blue-100/50": isWeekend(date),
                                  "bg-green-500/50": packer.shiftsByDate[date],
                                  "font-bold": packer.itemsByDate[date]
                                }]
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(packer.itemsByDate[date] || 0), 1)
                                ]),
                                _: 2
                              }, 1032, ["class"]);
                            }), 128))
                          ]),
                          _: 2
                        }, 1032, ["onClick"]);
                      }), 128))
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_UiTableCaption, null, {
                  default: withCtx(() => [
                    createTextVNode("\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043A\u0430 \u0443\u043F\u0430\u043A\u043E\u0432\u0449\u0438\u043A\u043E\u0432 \u0437\u0430 " + toDisplayString(period.value), 1)
                  ]),
                  _: 1
                }),
                createVNode(_component_UiTableHeader, null, {
                  default: withCtx(() => [
                    createVNode(_component_UiTableRow, null, {
                      default: withCtx(() => [
                        createVNode(_component_UiTableHead, { class: "p-2 sticky left-0 bg-gray-300 font-bold border border-black" }, {
                          default: withCtx(() => [
                            createTextVNode("\u0423\u043F\u0430\u043A\u043E\u0432\u0449\u0438\u043A")
                          ]),
                          _: 1
                        }),
                        (openBlock(true), createBlock(Fragment, null, renderList(statData.value.dates, (date, index) => {
                          return openBlock(), createBlock(_component_UiTableHead, {
                            key: date,
                            class: "p-1 text-center bg-gray-300 border border-black"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(formatDate(date).split(" ")[0]), 1),
                              createVNode("br"),
                              createTextVNode(" " + toDisplayString(formatDate(date).split(" ")[1]), 1)
                            ]),
                            _: 2
                          }, 1024);
                        }), 128))
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode(_component_UiTableBody, null, {
                  default: withCtx(() => [
                    createVNode(_component_UiTableRow, null, {
                      default: withCtx(() => [
                        createVNode(_component_UiTableCell, { class: "p-2 sticky left-0 bg-gray-300 font-semibold border border-black" }, {
                          default: withCtx(() => [
                            createTextVNode("\u0421\u043C\u0435\u043D\u044B")
                          ]),
                          _: 1
                        }),
                        (openBlock(true), createBlock(Fragment, null, renderList(statData.value.dates, (date, index) => {
                          return openBlock(), createBlock(_component_UiTableCell, {
                            key: date,
                            class: "p-1 text-center bg-green-500/50 border border-black"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(statData.value.shiftsSumByDate[date] || 0), 1)
                            ]),
                            _: 2
                          }, 1024);
                        }), 128))
                      ]),
                      _: 1
                    }),
                    createVNode(_component_UiTableRow, null, {
                      default: withCtx(() => [
                        createVNode(_component_UiTableCell, { class: "p-2 sticky left-0 bg-gray-300 font-semibold border border-black" }, {
                          default: withCtx(() => [
                            createTextVNode("\u0412\u044B\u0432\u0435\u0441\u043A\u0438")
                          ]),
                          _: 1
                        }),
                        (openBlock(true), createBlock(Fragment, null, renderList(statData.value.dates, (date, index) => {
                          return openBlock(), createBlock(_component_UiTableCell, {
                            key: date,
                            class: "p-1 text-center bg-gray-300/50 border border-black"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(statData.value.itemsSumByDate[date] || 0), 1)
                            ]),
                            _: 2
                          }, 1024);
                        }), 128))
                      ]),
                      _: 1
                    }),
                    (openBlock(true), createBlock(Fragment, null, renderList(statData.value.packers, (packer) => {
                      return openBlock(), createBlock(_component_UiTableRow, {
                        key: packer.packerId,
                        class: "cursor-pointer",
                        onClick: ($event) => getPackerReports({ id: packer.packerId, fullName: packer.fullName })
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_UiTableCell, { class: "p-2 sticky left-0 bg-gray-300 border border-black" }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(packer.fullName), 1)
                            ]),
                            _: 2
                          }, 1024),
                          (openBlock(true), createBlock(Fragment, null, renderList(statData.value.dates, (date, index) => {
                            return openBlock(), createBlock(_component_UiTableCell, {
                              key: date,
                              class: ["p-1 text-center border border-black", {
                                "bg-blue-100/50": isWeekend(date),
                                "bg-green-500/50": packer.shiftsByDate[date],
                                "font-bold": packer.itemsByDate[date]
                              }]
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(packer.itemsByDate[date] || 0), 1)
                              ]),
                              _: 2
                            }, 1032, ["class"]);
                          }), 128))
                        ]),
                        _: 2
                      }, 1032, ["onClick"]);
                    }), 128))
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div>`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/my/production/PackersStat.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const { $useApi } = useNuxtApp();
    useHead({
      title: "\u041F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0441\u0442\u0432\u043E | Easy CRM"
    });
    const period = ref(
      (/* @__PURE__ */ new Date()).toISOString().slice(0, 7)
      //'этот месяц'
    );
    const month = ref({
      month: (/* @__PURE__ */ new Date()).getMonth(),
      year: (/* @__PURE__ */ new Date()).getFullYear()
    });
    const tabsList = ref([]);
    const curTab = ref("");
    watch(month, (val) => {
      console.log(val);
      const { month: month2, year } = val;
      console.log(new Date(year, month2 + 1).toISOString().slice(0, 7));
      period.value = new Date(year, month2 + 1).toISOString().slice(0, 7);
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_LayoutSidebar = _sfc_main$f;
      const _component_UiTabs = _sfc_main$2$1;
      const _component_UiTabsList = _sfc_main$g;
      const _component_UiTabsTrigger = _sfc_main$1$1;
      const _component_MyProductionMasters = _sfc_main$a;
      const _component_MySuppliesPage = _sfc_main$9;
      const _component_MyProductionStat = _sfc_main$7;
      const _component_MyProductionPackers = _sfc_main$4;
      const _component_MyProductionLogist = _sfc_main$3;
      const _component_MyProductionPackersStat = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative h-screen hidden-scrollbar" }, _attrs))}><div class="w-full fixed z-10">`);
      _push(ssrRenderComponent(_component_LayoutSidebar, null, null, _parent));
      _push(`</div><div class="h-[full] flex p-4 gap-2 mx-[auto] max-w-[2048px] pt-16"><div class="flex flex-col gap-2 w-full"><div class="flex gap-2"><div class="w-[180px]">`);
      _push(ssrRenderComponent(unref(Qn), {
        modelValue: unref(month),
        "onUpdate:modelValue": ($event) => isRef(month) ? month.value = $event : null,
        "month-picker": "",
        "auto-apply": "",
        locale: "ru",
        "select-text": "\u0413\u043E\u0442\u043E\u0432\u043E",
        "cancel-text": "\u0417\u0430\u043A\u0440\u044B\u0442\u044C",
        clearable: false
      }, null, _parent));
      _push(`</div>`);
      if (unref(tabsList).length && unref(tabsList).length > 1) {
        _push(ssrRenderComponent(_component_UiTabs, {
          modelValue: unref(curTab),
          "onUpdate:modelValue": ($event) => isRef(curTab) ? curTab.value = $event : null,
          class: "w-[400px]"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_UiTabsList, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<!--[-->`);
                    ssrRenderList(unref(tabsList), (t) => {
                      _push3(ssrRenderComponent(_component_UiTabsTrigger, {
                        key: t.value,
                        value: t.value
                      }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(`${ssrInterpolate(t.label)}`);
                          } else {
                            return [
                              createTextVNode(toDisplayString(t.label), 1)
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                    });
                    _push3(`<!--]-->`);
                  } else {
                    return [
                      (openBlock(true), createBlock(Fragment, null, renderList(unref(tabsList), (t) => {
                        return openBlock(), createBlock(_component_UiTabsTrigger, {
                          key: t.value,
                          value: t.value
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(t.label), 1)
                          ]),
                          _: 2
                        }, 1032, ["value"]);
                      }), 128))
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_UiTabsList, null, {
                  default: withCtx(() => [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(tabsList), (t) => {
                      return openBlock(), createBlock(_component_UiTabsTrigger, {
                        key: t.value,
                        value: t.value
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(t.label), 1)
                        ]),
                        _: 2
                      }, 1032, ["value"]);
                    }), 128))
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      if (unref(curTab) === "masters") {
        _push(`<div>`);
        _push(ssrRenderComponent(_component_MyProductionMasters, {
          key: unref(period),
          period: unref(period)
        }, null, _parent));
        _push(`</div>`);
      } else if (unref(curTab) === "supplie") {
        _push(`<div>`);
        _push(ssrRenderComponent(_component_MySuppliesPage, {
          key: unref(period),
          period: unref(period)
        }, null, _parent));
        _push(`</div>`);
      } else if (unref(curTab) === "table") {
        _push(`<div>`);
        _push(ssrRenderComponent(_component_MyProductionStat, {
          key: unref(period),
          period: unref(period)
        }, null, _parent));
        _push(`</div>`);
      } else if (unref(curTab) === "package") {
        _push(`<div>`);
        _push(ssrRenderComponent(_component_MyProductionPackers, {
          key: unref(period),
          period: unref(period)
        }, null, _parent));
        _push(`</div>`);
      } else if (unref(curTab) === "logist") {
        _push(`<div>`);
        _push(ssrRenderComponent(_component_MyProductionLogist, {
          key: unref(period),
          period: unref(period)
        }, null, _parent));
        _push(`</div>`);
      } else if (unref(curTab) === "packers-stat") {
        _push(`<div>`);
        _push(ssrRenderComponent(_component_MyProductionPackersStat, {
          key: unref(period),
          period: unref(period)
        }, null, _parent));
        _push(`</div>`);
      } else if (unref(curTab) === "salaries") {
        _push(`<div>\u0417\u0430\u0440\u043F\u043B\u0430\u0442\u044B</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/production/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-CVBx2H4U.mjs.map
