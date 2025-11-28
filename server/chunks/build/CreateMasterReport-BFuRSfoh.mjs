import { _ as _sfc_main$4, a as _sfc_main$3, b as _sfc_main$2, c as _sfc_main$2$1, d as _sfc_main$1$1 } from './DialogContent-BsO2ljLB.mjs';
import { _ as _sfc_main$5 } from './DialogDescription-D5yt23q9.mjs';
import { _ as _sfc_main$c } from './DialogFooter-CQpXS8R1.mjs';
import { _ as _sfc_main$1 } from './index-B6vrBiru.mjs';
import { _ as _sfc_main$2$2, a as _sfc_main$6, b as _sfc_main$1$2 } from './TabsList-C3eBcFGa.mjs';
import { _ as _sfc_main$7 } from './TabsContent-9LTM_IKf.mjs';
import { _ as _sfc_main$8 } from './Label-Bxzolydd.mjs';
import { _ as _sfc_main$9 } from './Input-DoHPrX2-.mjs';
import { _ as _sfc_main$6$1, a as _sfc_main$4$1, b as _sfc_main$5$1, c as _sfc_main$3$1, d as _sfc_main$2$3 } from './SelectScrollDownButton-JzJI8BsA.mjs';
import { _ as _sfc_main$a } from './SelectGroup-BKLQULEA.mjs';
import { _ as _sfc_main$b } from './Textarea-oqH4YeW4.mjs';
import { defineComponent, ref, computed, watch, nextTick, mergeProps, withCtx, createTextVNode, toDisplayString, createVNode, createBlock, openBlock, Fragment, renderList, createCommentVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderClass, ssrRenderList } from 'vue/server-renderer';
import { b as useNuxtApp, c as useToast } from './server.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "CreateMasterReport",
  __ssrInlineRender: true,
  props: {
    masterId: {},
    curUser: {},
    initialData: {}
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
    const hasInitialData = computed(() => !!props.initialData);
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
    const lightingsTypes = ["\u041A\u043E\u043D\u0442\u0440\u0430\u0436\u0443\u0440", "\u0420\u0413\u0411 \u041A\u043E\u043D\u0442\u0440\u0430\u0436\u0443\u0440"];
    const permsTypes = [
      "\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u0430\u044F",
      "\u041A\u043E\u043D\u0442\u0440\u0430\u0436\u0443\u0440",
      "\u041F\u043E\u0434\u0430\u0440\u043E\u043A",
      "\u0423\u043B\u0438\u0447\u043D\u0430\u044F",
      "\u0423\u043B\u0438\u0447\u043D\u0430\u044F \u043F\u043E\u0434\u0441\u0432\u0435\u0442\u043A\u0430",
      "\u0420\u0413\u0411 \u041A\u043E\u043D\u0442\u0440\u0430\u0436\u0443\u0440",
      "\u0420\u0413\u0411",
      "\u0421\u043C\u0430\u0440\u0442"
    ];
    const repairTypes = ["\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u0430\u044F", "\u0423\u043B\u0438\u0447\u043D\u0430\u044F", "\u0420\u0413\u0411", "\u0421\u043C\u0430\u0440\u0442"];
    const newReportMasterBlank = {
      date: (/* @__PURE__ */ new Date()).toISOString().slice(0, 10),
      name: "",
      metrs: 0,
      els: 0,
      type: types[0],
      cost: 0,
      userId: props.masterId,
      penaltyCost: 0,
      comment: "",
      lightingType: "",
      lightingLength: 0,
      lightingElements: 0,
      lightingCost: 0
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
    const getInitialReportData = () => {
      var _a, _b, _c, _d;
      if (props.initialData) {
        return {
          ...newReportMasterBlank,
          date: props.initialData.date || newReportMasterBlank.date,
          name: props.initialData.name || newReportMasterBlank.name,
          type: props.initialData.type || newReportMasterBlank.type,
          metrs: (_a = props.initialData.metrs) != null ? _a : newReportMasterBlank.metrs,
          els: (_b = props.initialData.els) != null ? _b : newReportMasterBlank.els,
          lightingType: props.initialData.lightingType || newReportMasterBlank.lightingType,
          lightingLength: (_c = props.initialData.lightingLength) != null ? _c : newReportMasterBlank.lightingLength,
          lightingElements: (_d = props.initialData.lightingElements) != null ? _d : newReportMasterBlank.lightingElements,
          lightingCost: 0
        };
      }
      return { ...newReportMasterBlank };
    };
    const newReportMaster = ref(getInitialReportData());
    const newRepairReport = ref({ ...newRepairReportBlank });
    const calculateCost = () => {
      const { metrs, els, type } = newReportMaster.value;
      let cost = 0;
      if (props.curUser.workSpaceId === 8) {
        switch (type) {
          case "\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u0430\u044F":
          case "\u0412\u0411":
          case "\u041E\u0417\u041E\u041D":
          case "\u041F\u043E\u0434\u0430\u0440\u043E\u043A":
            cost = metrs * 60 + els * 30;
            break;
          case "\u0423\u043B\u0438\u0447\u043D\u0430\u044F":
            cost = metrs * 90 + els * 45;
            break;
          case "\u0423\u043B\u0438\u0447\u043D\u0430\u044F \u043F\u043E\u0434\u0441\u0432\u0435\u0442\u043A\u0430":
            cost = metrs * 54 + els * 37;
            break;
          case "\u0420\u0413\u0411 \u041A\u043E\u043D\u0442\u0440\u0430\u0436\u0443\u0440":
            cost = metrs * 80 + els * 67;
            break;
          case "\u0420\u0413\u0411":
          case "\u0421\u043C\u0430\u0440\u0442":
            cost = metrs * 84 + els * 42;
            break;
          case "\u041A\u043E\u043D\u0442\u0440\u0430\u0436\u0443\u0440":
            cost = metrs * 36 + els * 18;
            break;
          default:
            cost = 0;
        }
      } else {
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
      }
      newReportMaster.value.cost = cost;
    };
    const calculateLightingCost = () => {
      const { lightingLength, lightingElements, lightingType } = newReportMaster.value;
      let lightingCost = 0;
      const isEmptyType = !lightingType || lightingType === "none" || lightingType === "";
      if (isEmptyType || !lightingLength || !lightingElements) {
        newReportMaster.value.lightingCost = 0;
        if (isEmptyType) {
          newReportMaster.value.lightingLength = 0;
          newReportMaster.value.lightingElements = 0;
          newReportMaster.value.lightingType = "none";
        }
        return;
      }
      if (props.curUser.workSpaceId === 8) {
        switch (lightingType) {
          case "\u041A\u043E\u043D\u0442\u0440\u0430\u0436\u0443\u0440":
            lightingCost = lightingLength * 36 + lightingElements * 18;
            break;
          case "\u0420\u0413\u0411 \u041A\u043E\u043D\u0442\u0440\u0430\u0436\u0443\u0440":
            lightingCost = lightingLength * 80 + lightingElements * 67;
            break;
          default:
            lightingCost = 0;
        }
      } else {
        switch (lightingType) {
          case "\u041A\u043E\u043D\u0442\u0440\u0430\u0436\u0443\u0440":
            lightingCost = lightingLength * 60 + lightingElements * 30;
            break;
          case "\u0420\u0413\u0411 \u041A\u043E\u043D\u0442\u0440\u0430\u0436\u0443\u0440":
            lightingCost = lightingLength * 130 + lightingElements * 70;
            break;
          default:
            lightingCost = 0;
        }
      }
      newReportMaster.value.lightingCost = lightingCost;
    };
    const totalCost = computed(() => {
      var _a;
      return (newReportMaster.value.cost || 0) + ((_a = newReportMaster.value.lightingCost) != null ? _a : 0);
    });
    const isLightingValid = computed(() => {
      const { lightingType, lightingLength, lightingElements } = newReportMaster.value;
      const isEmptyType = !lightingType || lightingType === "none" || lightingType === "";
      const hasAny = !!(!isEmptyType && lightingType || (lightingLength != null ? lightingLength : 0) > 0 || (lightingElements != null ? lightingElements : 0) > 0);
      if (!hasAny) return true;
      return !!(!isEmptyType && lightingType && (lightingLength != null ? lightingLength : 0) > 0 && (lightingElements != null ? lightingElements : 0) > 0);
    });
    const showLightingError = computed(() => {
      const { lightingType, lightingLength, lightingElements } = newReportMaster.value;
      const isEmptyType = !lightingType || lightingType === "none" || lightingType === "";
      const hasAny = !!(!isEmptyType && lightingType || (lightingLength != null ? lightingLength : 0) > 0 || (lightingElements != null ? lightingElements : 0) > 0);
      return hasAny && !isLightingValid.value;
    });
    const calculateRepairCost = () => {
      const {
        metrs,
        els,
        type,
        grinding,
        unpackage,
        unpackageBig,
        acoustics,
        smartContr
      } = newRepairReport.value;
      let cost = 0;
      if (props.curUser.workSpaceId !== 8) {
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
      } else {
        switch (type) {
          case "\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u0430\u044F":
            cost = metrs * 80 + els * 40;
            break;
          case "\u0423\u043B\u0438\u0447\u043D\u0430\u044F":
            cost = metrs * 90 + els * 45;
            break;
          case "\u0420\u0413\u0411":
            cost = metrs * 100 + els * 90;
            break;
          case "\u0421\u043C\u0430\u0440\u0442":
            cost = metrs * 75 + els * 80;
            break;
          default:
            cost = 0;
        }
        cost += grinding * 200;
        cost += unpackage * 50;
        cost += unpackageBig * 100;
        cost += acoustics * 50;
        cost += smartContr * 200;
      }
      newRepairReport.value.cost = cost;
    };
    const createMasterReport = async () => {
      var _a;
      try {
        disabled.value = true;
        const dataToSend = {
          ...newReportMaster.value,
          userId: props.masterId,
          // Преобразуем "none" в пустую строку для отправки
          lightingType: newReportMaster.value.lightingType === "none" ? "" : newReportMaster.value.lightingType,
          // Добавляем orderId если есть в initialData
          orderId: (_a = props.initialData) == null ? void 0 : _a.orderId
        };
        await $useApi.post("production/master-report", dataToSend);
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
        await $useApi.post(`production/master-repair`, {
          ...newRepairReport.value,
          userId: props.masterId
        });
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
        await $useApi.post("production/other-report", {
          ...newOtherReport.value,
          userId: props.masterId
        });
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
        calculateCost();
        calculateLightingCost();
        const { date, name, metrs, els, type } = newReportMaster.value;
        const baseValid = props.curUser.role.shortName === "MASTER" || props.curUser.role.shortName === "PACKER" ? !!(date && name && metrs > 0 && els > 0 && type) : !!(date && name && type);
        disabled.value = !(baseValid && isLightingValid.value);
      },
      { deep: true }
    );
    watch(
      newRepairReport,
      () => {
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
        disabled.value = !(date && name && metrs >= 0 && els >= 0 && type && grinding >= 0 && unpackage >= 0 && unpackageBig >= 0 && acoustics >= 0 && smartContr >= 0);
      },
      { deep: true }
    );
    watch(isOpen, (newValue) => {
      var _a, _b, _c, _d;
      if (!newValue) {
        newReportMaster.value = {
          ...newReportMasterBlank,
          userId: props.masterId,
          lightingType: "",
          lightingLength: 0,
          lightingElements: 0,
          lightingCost: 0
        };
        newRepairReport.value = {
          ...newRepairReportBlank,
          userId: props.masterId
        };
        newOtherReport.value = { ...newOtherReportBlank, userId: props.masterId };
        curTab.value = "new";
      } else {
        if (props.initialData) {
          curTab.value = "new";
          newReportMaster.value = {
            ...newReportMasterBlank,
            userId: props.masterId,
            date: props.initialData.date || newReportMasterBlank.date,
            name: props.initialData.name || newReportMasterBlank.name,
            type: props.initialData.type || newReportMasterBlank.type,
            metrs: (_a = props.initialData.metrs) != null ? _a : newReportMasterBlank.metrs,
            els: (_b = props.initialData.els) != null ? _b : newReportMasterBlank.els,
            lightingType: props.initialData.lightingType || "",
            lightingLength: (_c = props.initialData.lightingLength) != null ? _c : 0,
            lightingElements: (_d = props.initialData.lightingElements) != null ? _d : 0,
            lightingCost: 0
          };
          nextTick(() => {
            calculateCost();
            calculateLightingCost();
          });
        }
      }
    });
    watch(curTab, () => {
      newReportMaster.value = {
        ...newReportMasterBlank,
        userId: props.masterId,
        lightingType: "",
        lightingLength: 0,
        lightingElements: 0,
        lightingCost: 0
      };
      newRepairReport.value = { ...newRepairReportBlank, userId: props.masterId };
      newOtherReport.value = { ...newOtherReportBlank, userId: props.masterId };
      disabled.value = true;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiDialog = _sfc_main$4;
      const _component_UiDialogTrigger = _sfc_main$3;
      const _component_UiButton = _sfc_main$1;
      const _component_UiDialogContent = _sfc_main$2;
      const _component_UiDialogHeader = _sfc_main$2$1;
      const _component_UiDialogTitle = _sfc_main$1$1;
      const _component_UiDialogDescription = _sfc_main$5;
      const _component_UiTabs = _sfc_main$2$2;
      const _component_UiTabsList = _sfc_main$6;
      const _component_UiTabsTrigger = _sfc_main$1$2;
      const _component_UiTabsContent = _sfc_main$7;
      const _component_UiLabel = _sfc_main$8;
      const _component_UiInput = _sfc_main$9;
      const _component_UiSelect = _sfc_main$6$1;
      const _component_UiSelectTrigger = _sfc_main$4$1;
      const _component_UiSelectValue = _sfc_main$5$1;
      const _component_UiSelectContent = _sfc_main$3$1;
      const _component_UiSelectGroup = _sfc_main$a;
      const _component_UiSelectItem = _sfc_main$2$3;
      const _component_UiTextarea = _sfc_main$b;
      const _component_UiDialogFooter = _sfc_main$c;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full border-none" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_UiDialog, {
        open: isOpen.value,
        "onUpdate:open": ($event) => isOpen.value = $event
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UiDialogTrigger, { "as-child": "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UiButton, {
                    class: [
                      "w-full",
                      hasInitialData.value ? "bg-neutral-700/70 text-neutral-300 border-1 border-neutral-500/20 hover:bg-neutral-700/50" : ""
                    ]
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`${ssrInterpolate(props.initialData ? "\u0412\u044B\u043F\u043E\u043B\u043D\u0438\u0442\u044C" : "\u0421\u043E\u0437\u0434\u0430\u0442\u044C")}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(props.initialData ? "\u0412\u044B\u043F\u043E\u043B\u043D\u0438\u0442\u044C" : "\u0421\u043E\u0437\u0434\u0430\u0442\u044C"), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UiButton, {
                      class: [
                        "w-full",
                        hasInitialData.value ? "bg-neutral-700/70 text-neutral-300 border-1 border-neutral-500/20 hover:bg-neutral-700/50" : ""
                      ]
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(props.initialData ? "\u0412\u044B\u043F\u043E\u043B\u043D\u0438\u0442\u044C" : "\u0421\u043E\u0437\u0434\u0430\u0442\u044C"), 1)
                      ]),
                      _: 1
                    }, 8, ["class"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UiDialogContent, {
              class: [
                "max-w-[400px] flex flex-col top-0 translate-y-[0px] max-h-[90vh] overflow-y-auto",
                hasInitialData.value ? "bg-neutral-800 text-neutral-300 border-1 border-neutral-500/20" : ""
              ]
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UiDialogHeader, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UiDialogTitle, {
                          class: hasInitialData.value ? "text-neutral-300" : ""
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`${ssrInterpolate(props.initialData ? "\u0412\u044B\u043F\u043E\u043B\u043D\u0438\u0442\u044C \u0437\u0430\u043A\u0430\u0437" : "\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u0437\u0430\u043F\u0438\u0441\u044C")}`);
                            } else {
                              return [
                                createTextVNode(toDisplayString(props.initialData ? "\u0412\u044B\u043F\u043E\u043B\u043D\u0438\u0442\u044C \u0437\u0430\u043A\u0430\u0437" : "\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u0437\u0430\u043F\u0438\u0441\u044C"), 1)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_UiDialogDescription, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_UiDialogTitle, {
                            class: hasInitialData.value ? "text-neutral-300" : ""
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(props.initialData ? "\u0412\u044B\u043F\u043E\u043B\u043D\u0438\u0442\u044C \u0437\u0430\u043A\u0430\u0437" : "\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u0437\u0430\u043F\u0438\u0441\u044C"), 1)
                            ]),
                            _: 1
                          }, 8, ["class"]),
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
                        if (!hasInitialData.value) {
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
                        } else {
                          _push4(`<!---->`);
                        }
                        _push4(ssrRenderComponent(_component_UiTabsContent, { value: "new" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j;
                            if (_push5) {
                              _push5(`<div class="flex flex-col gap-5"${_scopeId4}><div class="relative"${_scopeId4}>`);
                              if (newReportMaster.value.date) {
                                _push5(ssrRenderComponent(_component_UiLabel, {
                                  class: [
                                    "font-medium absolute left-2 top-[-13px] rounded-md p-1 whitespace-nowrap",
                                    hasInitialData.value ? "text-neutral-400 bg-neutral-800" : "text-slate-400 bg-white"
                                  ]
                                }, {
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
                                min: (/* @__PURE__ */ new Date()).toISOString().slice(0, 10),
                                type: "date",
                                placeholder: "\u0414\u0430\u0442\u0430 \u0441\u043C\u0435\u043D\u044B",
                                class: [
                                  newReportMaster.value.date ? "" : "outline-1 outline-rose-300",
                                  hasInitialData.value ? "bg-neutral-800 text-neutral-300 placeholder:text-neutral-600 border-neutral-500/20" : ""
                                ]
                              }, null, _parent5, _scopeId4));
                              _push5(`</div>`);
                              if (props.curUser.workSpaceId !== 8) {
                                _push5(`<div class="relative"${_scopeId4}>`);
                                if (newReportMaster.value.type) {
                                  _push5(ssrRenderComponent(_component_UiLabel, {
                                    class: [
                                      "font-medium absolute left-2 top-[-13px] rounded-md p-1",
                                      hasInitialData.value ? "text-neutral-400 bg-neutral-800" : "text-slate-400 bg-white"
                                    ]
                                  }, {
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
                                _push5(`<div class="${ssrRenderClass([
                                  newReportMaster.value.type ? "" : "outline-1 outline-rose-300 rounded-md"
                                ])}"${_scopeId4}>`);
                                _push5(ssrRenderComponent(_component_UiSelect, {
                                  modelValue: newReportMaster.value.type,
                                  "onUpdate:modelValue": ($event) => newReportMaster.value.type = $event
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(_component_UiSelectTrigger, {
                                        class: hasInitialData.value ? "bg-neutral-800 text-neutral-300 border-neutral-500/20" : ""
                                      }, {
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
                                      _push6(ssrRenderComponent(_component_UiSelectContent, {
                                        class: [
                                          "h-[250px]",
                                          hasInitialData.value ? "bg-neutral-800 text-neutral-300" : ""
                                        ]
                                      }, {
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
                                        createVNode(_component_UiSelectTrigger, {
                                          class: hasInitialData.value ? "bg-neutral-800 text-neutral-300 border-neutral-500/20" : ""
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_UiSelectValue, { placeholder: "\u0422\u0438\u043F" })
                                          ]),
                                          _: 1
                                        }, 8, ["class"]),
                                        createVNode(_component_UiSelectContent, {
                                          class: [
                                            "h-[250px]",
                                            hasInitialData.value ? "bg-neutral-800 text-neutral-300" : ""
                                          ]
                                        }, {
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
                                        }, 8, ["class"])
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                                _push5(`</div></div>`);
                              } else {
                                _push5(`<div class="relative"${_scopeId4}>`);
                                if (newReportMaster.value.type) {
                                  _push5(ssrRenderComponent(_component_UiLabel, {
                                    class: [
                                      "font-medium absolute left-2 top-[-13px] rounded-md p-1",
                                      hasInitialData.value ? "text-neutral-400 bg-neutral-800" : "text-slate-400 bg-white"
                                    ]
                                  }, {
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
                                _push5(`<div class="${ssrRenderClass([
                                  newReportMaster.value.type ? "" : "outline-1 outline-rose-300 rounded-md"
                                ])}"${_scopeId4}>`);
                                _push5(ssrRenderComponent(_component_UiSelect, {
                                  modelValue: newReportMaster.value.type,
                                  "onUpdate:modelValue": ($event) => newReportMaster.value.type = $event
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(_component_UiSelectTrigger, {
                                        class: hasInitialData.value ? "bg-neutral-800 text-neutral-300 border-neutral-500/20" : ""
                                      }, {
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
                                      _push6(ssrRenderComponent(_component_UiSelectContent, {
                                        class: hasInitialData.value ? "bg-neutral-800 text-neutral-300" : ""
                                      }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`<!--[-->`);
                                            ssrRenderList(permsTypes, (item, i) => {
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
                                              (openBlock(), createBlock(Fragment, null, renderList(permsTypes, (item, i) => {
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
                                        createVNode(_component_UiSelectTrigger, {
                                          class: hasInitialData.value ? "bg-neutral-800 text-neutral-300 border-neutral-500/20" : ""
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_UiSelectValue, { placeholder: "\u0422\u0438\u043F" })
                                          ]),
                                          _: 1
                                        }, 8, ["class"]),
                                        createVNode(_component_UiSelectContent, {
                                          class: hasInitialData.value ? "bg-neutral-800 text-neutral-300" : ""
                                        }, {
                                          default: withCtx(() => [
                                            (openBlock(), createBlock(Fragment, null, renderList(permsTypes, (item, i) => {
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
                                        }, 8, ["class"])
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                                _push5(`</div></div>`);
                              }
                              _push5(`<div class="relative"${_scopeId4}>`);
                              if (newReportMaster.value.name) {
                                _push5(ssrRenderComponent(_component_UiLabel, {
                                  class: [
                                    "font-medium absolute left-2 top-[-13px] rounded-md p-1",
                                    hasInitialData.value ? "text-neutral-400 bg-neutral-800" : "text-slate-400 bg-white"
                                  ]
                                }, {
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
                                class: [
                                  newReportMaster.value.name ? "" : "outline-1 outline-rose-300",
                                  hasInitialData.value ? "bg-neutral-800 text-neutral-300 placeholder:text-neutral-600 border-neutral-500/20" : ""
                                ]
                              }, null, _parent5, _scopeId4));
                              _push5(`</div><div class="flex gap-2"${_scopeId4}><div class="relative"${_scopeId4}>`);
                              _push5(ssrRenderComponent(_component_UiLabel, {
                                class: [
                                  "font-medium absolute left-2 top-[-13px] rounded-md p-1 whitespace-nowrap",
                                  hasInitialData.value ? "text-neutral-400 bg-neutral-800" : "text-slate-400 bg-white"
                                ]
                              }, {
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
                                class: [
                                  newReportMaster.value.metrs > 0 ? "" : "outline-1 outline-rose-300",
                                  hasInitialData.value ? "bg-neutral-800 text-neutral-300 placeholder:text-neutral-600 border-neutral-500/20" : ""
                                ]
                              }, null, _parent5, _scopeId4));
                              _push5(`</div></div><div class="relative"${_scopeId4}>`);
                              _push5(ssrRenderComponent(_component_UiLabel, {
                                class: [
                                  "font-medium absolute left-2 top-[-13px] rounded-md p-1 whitespace-nowrap",
                                  hasInitialData.value ? "text-neutral-400 bg-neutral-800" : "text-slate-400 bg-white"
                                ]
                              }, {
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
                                class: [
                                  newReportMaster.value.els > 0 ? "" : "outline-1 outline-rose-300",
                                  hasInitialData.value ? "bg-neutral-800 text-neutral-300 placeholder:text-neutral-600 border-neutral-500/20" : ""
                                ]
                              }, null, _parent5, _scopeId4));
                              _push5(`</div></div></div><div class="flex flex-col gap-4"${_scopeId4}><div class="relative"${_scopeId4}>`);
                              _push5(ssrRenderComponent(_component_UiSelect, {
                                modelValue: newReportMaster.value.lightingType,
                                "onUpdate:modelValue": ($event) => newReportMaster.value.lightingType = $event
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_UiSelectTrigger, {
                                      class: [
                                        showLightingError.value && (!newReportMaster.value.lightingType || newReportMaster.value.lightingType === "none") ? "outline-1 outline-rose-300" : "",
                                        hasInitialData.value ? "bg-neutral-800 text-neutral-300 border-neutral-500/20" : ""
                                      ]
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(_component_UiSelectValue, { placeholder: "\u0411\u0435\u0437 \u043F\u043E\u0434\u0441\u0432\u0435\u0442\u043A\u0438" }, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(_component_UiSelectValue, { placeholder: "\u0411\u0435\u0437 \u043F\u043E\u0434\u0441\u0432\u0435\u0442\u043A\u0438" })
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_UiSelectContent, {
                                      class: hasInitialData.value ? "bg-neutral-800 text-neutral-300" : ""
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(_component_UiSelectItem, { value: "none" }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(`\u0411\u0435\u0437 \u043F\u043E\u0434\u0441\u0432\u0435\u0442\u043A\u0438`);
                                              } else {
                                                return [
                                                  createTextVNode("\u0411\u0435\u0437 \u043F\u043E\u0434\u0441\u0432\u0435\u0442\u043A\u0438")
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(`<!--[-->`);
                                          ssrRenderList(lightingsTypes, (item, i) => {
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
                                            createVNode(_component_UiSelectItem, { value: "none" }, {
                                              default: withCtx(() => [
                                                createTextVNode("\u0411\u0435\u0437 \u043F\u043E\u0434\u0441\u0432\u0435\u0442\u043A\u0438")
                                              ]),
                                              _: 1
                                            }),
                                            (openBlock(), createBlock(Fragment, null, renderList(lightingsTypes, (item, i) => {
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
                                      createVNode(_component_UiSelectTrigger, {
                                        class: [
                                          showLightingError.value && (!newReportMaster.value.lightingType || newReportMaster.value.lightingType === "none") ? "outline-1 outline-rose-300" : "",
                                          hasInitialData.value ? "bg-neutral-800 text-neutral-300 border-neutral-500/20" : ""
                                        ]
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_UiSelectValue, { placeholder: "\u0411\u0435\u0437 \u043F\u043E\u0434\u0441\u0432\u0435\u0442\u043A\u0438" })
                                        ]),
                                        _: 1
                                      }, 8, ["class"]),
                                      createVNode(_component_UiSelectContent, {
                                        class: hasInitialData.value ? "bg-neutral-800 text-neutral-300" : ""
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_UiSelectItem, { value: "none" }, {
                                            default: withCtx(() => [
                                              createTextVNode("\u0411\u0435\u0437 \u043F\u043E\u0434\u0441\u0432\u0435\u0442\u043A\u0438")
                                            ]),
                                            _: 1
                                          }),
                                          (openBlock(), createBlock(Fragment, null, renderList(lightingsTypes, (item, i) => {
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
                                      }, 8, ["class"])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(`</div>`);
                              if (newReportMaster.value.lightingType && newReportMaster.value.lightingType !== "none") {
                                _push5(`<div class="flex gap-2"${_scopeId4}><div class="relative"${_scopeId4}>`);
                                _push5(ssrRenderComponent(_component_UiLabel, {
                                  class: [
                                    "font-medium absolute left-2 top-[-13px] rounded-md p-1 whitespace-nowrap",
                                    hasInitialData.value ? "text-neutral-400 bg-neutral-800" : "text-slate-400 bg-white"
                                  ]
                                }, {
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
                                _push5(ssrRenderComponent(_component_UiInput, {
                                  modelValue: newReportMaster.value.lightingLength,
                                  "onUpdate:modelValue": ($event) => newReportMaster.value.lightingLength = $event,
                                  modelModifiers: { number: true },
                                  placeholder: "\u041C\u0435\u0442\u0440\u044B",
                                  type: "number",
                                  min: "0",
                                  class: [
                                    showLightingError.value && !((_a = newReportMaster.value.lightingLength) != null ? _a : 0) ? "outline-1 outline-rose-300" : "",
                                    hasInitialData.value ? "bg-neutral-800 text-neutral-300 placeholder:text-neutral-600 border-neutral-500/20" : ""
                                  ]
                                }, null, _parent5, _scopeId4));
                                _push5(`</div><div class="relative"${_scopeId4}>`);
                                _push5(ssrRenderComponent(_component_UiLabel, {
                                  class: [
                                    "font-medium absolute left-2 top-[-13px] rounded-md p-1 whitespace-nowrap",
                                    hasInitialData.value ? "text-neutral-400 bg-neutral-800" : "text-slate-400 bg-white"
                                  ]
                                }, {
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
                                _push5(ssrRenderComponent(_component_UiInput, {
                                  modelValue: newReportMaster.value.lightingElements,
                                  "onUpdate:modelValue": ($event) => newReportMaster.value.lightingElements = $event,
                                  modelModifiers: { number: true },
                                  placeholder: "\u042D\u043B\u0435\u043C\u0435\u043D\u0442\u044B",
                                  type: "number",
                                  min: "0",
                                  class: [
                                    showLightingError.value && !((_b = newReportMaster.value.lightingElements) != null ? _b : 0) ? "outline-1 outline-rose-300" : "",
                                    hasInitialData.value ? "bg-neutral-800 text-neutral-300 placeholder:text-neutral-600 border-neutral-500/20" : ""
                                  ]
                                }, null, _parent5, _scopeId4));
                                _push5(`</div></div>`);
                              } else {
                                _push5(`<!---->`);
                              }
                              _push5(`</div><div class="flex flex-col gap-2"${_scopeId4}>`);
                              if (!["PACKER", "MASTER"].includes(
                                ((_c = _ctx.curUser) == null ? void 0 : _c.role.shortName) || ""
                              )) {
                                _push5(`<div class="relative"${_scopeId4}>`);
                                _push5(ssrRenderComponent(_component_UiLabel, {
                                  class: [
                                    "font-medium absolute left-2 top-[-13px] rounded-md p-1",
                                    hasInitialData.value ? "text-neutral-400 bg-neutral-800" : "text-slate-400 bg-white"
                                  ]
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`\u0428\u0442\u0440\u0430\u0444`);
                                    } else {
                                      return [
                                        createTextVNode("\u0428\u0442\u0440\u0430\u0444")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                                _push5(ssrRenderComponent(_component_UiInput, {
                                  modelValue: newReportMaster.value.penaltyCost,
                                  "onUpdate:modelValue": ($event) => newReportMaster.value.penaltyCost = $event,
                                  placeholder: "\u0428\u0442\u0440\u0430\u0444",
                                  type: "number",
                                  class: hasInitialData.value ? "bg-neutral-800 text-neutral-300 placeholder:text-neutral-600 border-neutral-500/20" : ""
                                }, null, _parent5, _scopeId4));
                                _push5(`</div>`);
                              } else {
                                _push5(`<!---->`);
                              }
                              _push5(`<div class="relative"${_scopeId4}>`);
                              _push5(ssrRenderComponent(_component_UiTextarea, {
                                modelValue: newReportMaster.value.comment,
                                "onUpdate:modelValue": ($event) => newReportMaster.value.comment = $event,
                                placeholder: "\u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439",
                                class: hasInitialData.value ? "bg-neutral-800 text-neutral-300 placeholder:text-neutral-600 border-neutral-500/20" : ""
                              }, null, _parent5, _scopeId4));
                              if (newReportMaster.value.comment) {
                                _push5(ssrRenderComponent(_component_UiLabel, {
                                  class: [
                                    "font-medium absolute left-2 top-[-13px] rounded-md p-1 whitespace-nowrap",
                                    hasInitialData.value ? "text-neutral-400 bg-neutral-800" : "text-slate-400 bg-white"
                                  ]
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(` \u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439 `);
                                    } else {
                                      return [
                                        createTextVNode(" \u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439 ")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                              } else {
                                _push5(`<!---->`);
                              }
                              _push5(`</div></div><div class="${ssrRenderClass([
                                "flex flex-col gap-1 border-t pt-2",
                                hasInitialData.value ? "border-neutral-500/20 text-neutral-300" : ""
                              ])}"${_scopeId4}>`);
                              if (((_d = newReportMaster.value.lightingCost) != null ? _d : 0) > 0) {
                                _push5(`<span${_scopeId4}> \u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C \u043E\u0441\u043D\u043E\u0432\u043D\u043E\u0439 \u0440\u0430\u0431\u043E\u0442\u044B: ${ssrInterpolate(newReportMaster.value.cost)}\u0440. </span>`);
                              } else {
                                _push5(`<!---->`);
                              }
                              if (((_e = newReportMaster.value.lightingCost) != null ? _e : 0) > 0) {
                                _push5(`<span${_scopeId4}> \u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C \u043F\u043E\u0434\u0441\u0432\u0435\u0442\u043A\u0438: ${ssrInterpolate(newReportMaster.value.lightingCost)}\u0440. </span>`);
                              } else {
                                _push5(`<!---->`);
                              }
                              _push5(`<span class="font-semibold text-lg"${_scopeId4}> \u041E\u0431\u0449\u0430\u044F \u0441\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C: ${ssrInterpolate(totalCost.value)}\u0440. </span></div></div><div class="flex justify-end w-full"${_scopeId4}>`);
                              _push5(ssrRenderComponent(_component_UiButton, {
                                disabled: disabled.value,
                                class: hasInitialData.value ? "bg-neutral-600 text-neutral-300 hover:bg-neutral-600/50" : "",
                                onClick: createMasterReport
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`${ssrInterpolate(props.initialData ? "\u0412\u044B\u043F\u043E\u043B\u043D\u0438\u0442\u044C" : "\u0421\u043E\u0437\u0434\u0430\u0442\u044C")}`);
                                  } else {
                                    return [
                                      createTextVNode(toDisplayString(props.initialData ? "\u0412\u044B\u043F\u043E\u043B\u043D\u0438\u0442\u044C" : "\u0421\u043E\u0437\u0434\u0430\u0442\u044C"), 1)
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
                                      class: [
                                        "font-medium absolute left-2 top-[-13px] rounded-md p-1 whitespace-nowrap",
                                        hasInitialData.value ? "text-neutral-400 bg-neutral-800" : "text-slate-400 bg-white"
                                      ]
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode("\u0414\u0430\u0442\u0430 \u0441\u043C\u0435\u043D\u044B")
                                      ]),
                                      _: 1
                                    }, 8, ["class"])) : createCommentVNode("", true),
                                    createVNode(_component_UiInput, {
                                      modelValue: newReportMaster.value.date,
                                      "onUpdate:modelValue": ($event) => newReportMaster.value.date = $event,
                                      min: (/* @__PURE__ */ new Date()).toISOString().slice(0, 10),
                                      type: "date",
                                      placeholder: "\u0414\u0430\u0442\u0430 \u0441\u043C\u0435\u043D\u044B",
                                      class: [
                                        newReportMaster.value.date ? "" : "outline-1 outline-rose-300",
                                        hasInitialData.value ? "bg-neutral-800 text-neutral-300 placeholder:text-neutral-600 border-neutral-500/20" : ""
                                      ]
                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "min", "class"])
                                  ]),
                                  props.curUser.workSpaceId !== 8 ? (openBlock(), createBlock("div", {
                                    key: 0,
                                    class: "relative"
                                  }, [
                                    newReportMaster.value.type ? (openBlock(), createBlock(_component_UiLabel, {
                                      key: 0,
                                      class: [
                                        "font-medium absolute left-2 top-[-13px] rounded-md p-1",
                                        hasInitialData.value ? "text-neutral-400 bg-neutral-800" : "text-slate-400 bg-white"
                                      ]
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode("\u0422\u0438\u043F")
                                      ]),
                                      _: 1
                                    }, 8, ["class"])) : createCommentVNode("", true),
                                    createVNode("div", {
                                      class: [
                                        newReportMaster.value.type ? "" : "outline-1 outline-rose-300 rounded-md"
                                      ]
                                    }, [
                                      createVNode(_component_UiSelect, {
                                        modelValue: newReportMaster.value.type,
                                        "onUpdate:modelValue": ($event) => newReportMaster.value.type = $event
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_UiSelectTrigger, {
                                            class: hasInitialData.value ? "bg-neutral-800 text-neutral-300 border-neutral-500/20" : ""
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(_component_UiSelectValue, { placeholder: "\u0422\u0438\u043F" })
                                            ]),
                                            _: 1
                                          }, 8, ["class"]),
                                          createVNode(_component_UiSelectContent, {
                                            class: [
                                              "h-[250px]",
                                              hasInitialData.value ? "bg-neutral-800 text-neutral-300" : ""
                                            ]
                                          }, {
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
                                          }, 8, ["class"])
                                        ]),
                                        _: 1
                                      }, 8, ["modelValue", "onUpdate:modelValue"])
                                    ], 2)
                                  ])) : (openBlock(), createBlock("div", {
                                    key: 1,
                                    class: "relative"
                                  }, [
                                    newReportMaster.value.type ? (openBlock(), createBlock(_component_UiLabel, {
                                      key: 0,
                                      class: [
                                        "font-medium absolute left-2 top-[-13px] rounded-md p-1",
                                        hasInitialData.value ? "text-neutral-400 bg-neutral-800" : "text-slate-400 bg-white"
                                      ]
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode("\u0422\u0438\u043F")
                                      ]),
                                      _: 1
                                    }, 8, ["class"])) : createCommentVNode("", true),
                                    createVNode("div", {
                                      class: [
                                        newReportMaster.value.type ? "" : "outline-1 outline-rose-300 rounded-md"
                                      ]
                                    }, [
                                      createVNode(_component_UiSelect, {
                                        modelValue: newReportMaster.value.type,
                                        "onUpdate:modelValue": ($event) => newReportMaster.value.type = $event
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_UiSelectTrigger, {
                                            class: hasInitialData.value ? "bg-neutral-800 text-neutral-300 border-neutral-500/20" : ""
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(_component_UiSelectValue, { placeholder: "\u0422\u0438\u043F" })
                                            ]),
                                            _: 1
                                          }, 8, ["class"]),
                                          createVNode(_component_UiSelectContent, {
                                            class: hasInitialData.value ? "bg-neutral-800 text-neutral-300" : ""
                                          }, {
                                            default: withCtx(() => [
                                              (openBlock(), createBlock(Fragment, null, renderList(permsTypes, (item, i) => {
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
                                          }, 8, ["class"])
                                        ]),
                                        _: 1
                                      }, 8, ["modelValue", "onUpdate:modelValue"])
                                    ], 2)
                                  ])),
                                  createVNode("div", { class: "relative" }, [
                                    newReportMaster.value.name ? (openBlock(), createBlock(_component_UiLabel, {
                                      key: 0,
                                      class: [
                                        "font-medium absolute left-2 top-[-13px] rounded-md p-1",
                                        hasInitialData.value ? "text-neutral-400 bg-neutral-800" : "text-slate-400 bg-white"
                                      ]
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode("\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0438\u043B\u0438 \u0441\u0441\u044B\u043B\u043A\u0430")
                                      ]),
                                      _: 1
                                    }, 8, ["class"])) : createCommentVNode("", true),
                                    createVNode(_component_UiInput, {
                                      modelValue: newReportMaster.value.name,
                                      "onUpdate:modelValue": ($event) => newReportMaster.value.name = $event,
                                      placeholder: "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0438\u043B\u0438 \u0441\u0441\u044B\u043B\u043A\u0430",
                                      class: [
                                        newReportMaster.value.name ? "" : "outline-1 outline-rose-300",
                                        hasInitialData.value ? "bg-neutral-800 text-neutral-300 placeholder:text-neutral-600 border-neutral-500/20" : ""
                                      ]
                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "class"])
                                  ]),
                                  createVNode("div", { class: "flex gap-2" }, [
                                    createVNode("div", { class: "relative" }, [
                                      createVNode(_component_UiLabel, {
                                        class: [
                                          "font-medium absolute left-2 top-[-13px] rounded-md p-1 whitespace-nowrap",
                                          hasInitialData.value ? "text-neutral-400 bg-neutral-800" : "text-slate-400 bg-white"
                                        ]
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode("\u041C\u0435\u0442\u0440\u044B")
                                        ]),
                                        _: 1
                                      }, 8, ["class"]),
                                      createVNode("div", { class: "flex gap-2" }, [
                                        createVNode(_component_UiInput, {
                                          modelValue: newReportMaster.value.metrs,
                                          "onUpdate:modelValue": ($event) => newReportMaster.value.metrs = $event,
                                          modelModifiers: { number: true },
                                          placeholder: "\u041C\u0435\u0442\u0440\u044B",
                                          type: "number",
                                          min: "0",
                                          class: [
                                            newReportMaster.value.metrs > 0 ? "" : "outline-1 outline-rose-300",
                                            hasInitialData.value ? "bg-neutral-800 text-neutral-300 placeholder:text-neutral-600 border-neutral-500/20" : ""
                                          ]
                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "class"])
                                      ])
                                    ]),
                                    createVNode("div", { class: "relative" }, [
                                      createVNode(_component_UiLabel, {
                                        class: [
                                          "font-medium absolute left-2 top-[-13px] rounded-md p-1 whitespace-nowrap",
                                          hasInitialData.value ? "text-neutral-400 bg-neutral-800" : "text-slate-400 bg-white"
                                        ]
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode("\u042D\u043B\u0435\u043C\u0435\u043D\u0442\u044B")
                                        ]),
                                        _: 1
                                      }, 8, ["class"]),
                                      createVNode("div", { class: "flex gap-2" }, [
                                        createVNode(_component_UiInput, {
                                          modelValue: newReportMaster.value.els,
                                          "onUpdate:modelValue": ($event) => newReportMaster.value.els = $event,
                                          modelModifiers: { number: true },
                                          placeholder: "\u042D\u043B\u0435\u043C\u0435\u043D\u0442\u044B",
                                          type: "number",
                                          min: "0",
                                          class: [
                                            newReportMaster.value.els > 0 ? "" : "outline-1 outline-rose-300",
                                            hasInitialData.value ? "bg-neutral-800 text-neutral-300 placeholder:text-neutral-600 border-neutral-500/20" : ""
                                          ]
                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "class"])
                                      ])
                                    ])
                                  ]),
                                  createVNode("div", { class: "flex flex-col gap-4" }, [
                                    createVNode("div", { class: "relative" }, [
                                      createVNode(_component_UiSelect, {
                                        modelValue: newReportMaster.value.lightingType,
                                        "onUpdate:modelValue": ($event) => newReportMaster.value.lightingType = $event
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_UiSelectTrigger, {
                                            class: [
                                              showLightingError.value && (!newReportMaster.value.lightingType || newReportMaster.value.lightingType === "none") ? "outline-1 outline-rose-300" : "",
                                              hasInitialData.value ? "bg-neutral-800 text-neutral-300 border-neutral-500/20" : ""
                                            ]
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(_component_UiSelectValue, { placeholder: "\u0411\u0435\u0437 \u043F\u043E\u0434\u0441\u0432\u0435\u0442\u043A\u0438" })
                                            ]),
                                            _: 1
                                          }, 8, ["class"]),
                                          createVNode(_component_UiSelectContent, {
                                            class: hasInitialData.value ? "bg-neutral-800 text-neutral-300" : ""
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(_component_UiSelectItem, { value: "none" }, {
                                                default: withCtx(() => [
                                                  createTextVNode("\u0411\u0435\u0437 \u043F\u043E\u0434\u0441\u0432\u0435\u0442\u043A\u0438")
                                                ]),
                                                _: 1
                                              }),
                                              (openBlock(), createBlock(Fragment, null, renderList(lightingsTypes, (item, i) => {
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
                                          }, 8, ["class"])
                                        ]),
                                        _: 1
                                      }, 8, ["modelValue", "onUpdate:modelValue"])
                                    ]),
                                    newReportMaster.value.lightingType && newReportMaster.value.lightingType !== "none" ? (openBlock(), createBlock("div", {
                                      key: 0,
                                      class: "flex gap-2"
                                    }, [
                                      createVNode("div", { class: "relative" }, [
                                        createVNode(_component_UiLabel, {
                                          class: [
                                            "font-medium absolute left-2 top-[-13px] rounded-md p-1 whitespace-nowrap",
                                            hasInitialData.value ? "text-neutral-400 bg-neutral-800" : "text-slate-400 bg-white"
                                          ]
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode("\u041C\u0435\u0442\u0440\u044B")
                                          ]),
                                          _: 1
                                        }, 8, ["class"]),
                                        createVNode(_component_UiInput, {
                                          modelValue: newReportMaster.value.lightingLength,
                                          "onUpdate:modelValue": ($event) => newReportMaster.value.lightingLength = $event,
                                          modelModifiers: { number: true },
                                          placeholder: "\u041C\u0435\u0442\u0440\u044B",
                                          type: "number",
                                          min: "0",
                                          class: [
                                            showLightingError.value && !((_f = newReportMaster.value.lightingLength) != null ? _f : 0) ? "outline-1 outline-rose-300" : "",
                                            hasInitialData.value ? "bg-neutral-800 text-neutral-300 placeholder:text-neutral-600 border-neutral-500/20" : ""
                                          ]
                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "class"])
                                      ]),
                                      createVNode("div", { class: "relative" }, [
                                        createVNode(_component_UiLabel, {
                                          class: [
                                            "font-medium absolute left-2 top-[-13px] rounded-md p-1 whitespace-nowrap",
                                            hasInitialData.value ? "text-neutral-400 bg-neutral-800" : "text-slate-400 bg-white"
                                          ]
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode("\u042D\u043B\u0435\u043C\u0435\u043D\u0442\u044B")
                                          ]),
                                          _: 1
                                        }, 8, ["class"]),
                                        createVNode(_component_UiInput, {
                                          modelValue: newReportMaster.value.lightingElements,
                                          "onUpdate:modelValue": ($event) => newReportMaster.value.lightingElements = $event,
                                          modelModifiers: { number: true },
                                          placeholder: "\u042D\u043B\u0435\u043C\u0435\u043D\u0442\u044B",
                                          type: "number",
                                          min: "0",
                                          class: [
                                            showLightingError.value && !((_g = newReportMaster.value.lightingElements) != null ? _g : 0) ? "outline-1 outline-rose-300" : "",
                                            hasInitialData.value ? "bg-neutral-800 text-neutral-300 placeholder:text-neutral-600 border-neutral-500/20" : ""
                                          ]
                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "class"])
                                      ])
                                    ])) : createCommentVNode("", true)
                                  ]),
                                  createVNode("div", { class: "flex flex-col gap-2" }, [
                                    !["PACKER", "MASTER"].includes(
                                      ((_h = _ctx.curUser) == null ? void 0 : _h.role.shortName) || ""
                                    ) ? (openBlock(), createBlock("div", {
                                      key: 0,
                                      class: "relative"
                                    }, [
                                      createVNode(_component_UiLabel, {
                                        class: [
                                          "font-medium absolute left-2 top-[-13px] rounded-md p-1",
                                          hasInitialData.value ? "text-neutral-400 bg-neutral-800" : "text-slate-400 bg-white"
                                        ]
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode("\u0428\u0442\u0440\u0430\u0444")
                                        ]),
                                        _: 1
                                      }, 8, ["class"]),
                                      createVNode(_component_UiInput, {
                                        modelValue: newReportMaster.value.penaltyCost,
                                        "onUpdate:modelValue": ($event) => newReportMaster.value.penaltyCost = $event,
                                        placeholder: "\u0428\u0442\u0440\u0430\u0444",
                                        type: "number",
                                        class: hasInitialData.value ? "bg-neutral-800 text-neutral-300 placeholder:text-neutral-600 border-neutral-500/20" : ""
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "class"])
                                    ])) : createCommentVNode("", true),
                                    createVNode("div", { class: "relative" }, [
                                      createVNode(_component_UiTextarea, {
                                        modelValue: newReportMaster.value.comment,
                                        "onUpdate:modelValue": ($event) => newReportMaster.value.comment = $event,
                                        placeholder: "\u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439",
                                        class: hasInitialData.value ? "bg-neutral-800 text-neutral-300 placeholder:text-neutral-600 border-neutral-500/20" : ""
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "class"]),
                                      newReportMaster.value.comment ? (openBlock(), createBlock(_component_UiLabel, {
                                        key: 0,
                                        class: [
                                          "font-medium absolute left-2 top-[-13px] rounded-md p-1 whitespace-nowrap",
                                          hasInitialData.value ? "text-neutral-400 bg-neutral-800" : "text-slate-400 bg-white"
                                        ]
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(" \u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439 ")
                                        ]),
                                        _: 1
                                      }, 8, ["class"])) : createCommentVNode("", true)
                                    ])
                                  ]),
                                  createVNode("div", {
                                    class: [
                                      "flex flex-col gap-1 border-t pt-2",
                                      hasInitialData.value ? "border-neutral-500/20 text-neutral-300" : ""
                                    ]
                                  }, [
                                    ((_i = newReportMaster.value.lightingCost) != null ? _i : 0) > 0 ? (openBlock(), createBlock("span", { key: 0 }, " \u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C \u043E\u0441\u043D\u043E\u0432\u043D\u043E\u0439 \u0440\u0430\u0431\u043E\u0442\u044B: " + toDisplayString(newReportMaster.value.cost) + "\u0440. ", 1)) : createCommentVNode("", true),
                                    ((_j = newReportMaster.value.lightingCost) != null ? _j : 0) > 0 ? (openBlock(), createBlock("span", { key: 1 }, " \u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C \u043F\u043E\u0434\u0441\u0432\u0435\u0442\u043A\u0438: " + toDisplayString(newReportMaster.value.lightingCost) + "\u0440. ", 1)) : createCommentVNode("", true),
                                    createVNode("span", { class: "font-semibold text-lg" }, " \u041E\u0431\u0449\u0430\u044F \u0441\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C: " + toDisplayString(totalCost.value) + "\u0440. ", 1)
                                  ], 2)
                                ]),
                                createVNode("div", { class: "flex justify-end w-full" }, [
                                  createVNode(_component_UiButton, {
                                    disabled: disabled.value,
                                    class: hasInitialData.value ? "bg-neutral-600 text-neutral-300 hover:bg-neutral-600/50" : "",
                                    onClick: createMasterReport
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(props.initialData ? "\u0412\u044B\u043F\u043E\u043B\u043D\u0438\u0442\u044C" : "\u0421\u043E\u0437\u0434\u0430\u0442\u044C"), 1)
                                    ]),
                                    _: 1
                                  }, 8, ["disabled", "class"])
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
                                min: (/* @__PURE__ */ new Date()).toISOString().slice(0, 10),
                                placeholder: "\u0414\u0430\u0442\u0430 \u0441\u043C\u0435\u043D\u044B",
                                class: [
                                  "h-8",
                                  newRepairReport.value.date ? "" : "outline-1 outline-rose-300"
                                ]
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
                              _push5(`<div class="${ssrRenderClass(
                                newRepairReport.value.type ? "" : "outline-1 outline-rose-300 rounded-md"
                              )}"${_scopeId4}>`);
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
                                class: [
                                  "h-8",
                                  newRepairReport.value.name ? "" : "outline-1 outline-rose-300"
                                ]
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
                              _push5(`</div></div><span${_scopeId4}> \u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C: ${ssrInterpolate(newRepairReport.value.cost.toFixed(2))}\u0440. </span></div><div class="flex justify-end w-full"${_scopeId4}>`);
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
                                      min: (/* @__PURE__ */ new Date()).toISOString().slice(0, 10),
                                      placeholder: "\u0414\u0430\u0442\u0430 \u0441\u043C\u0435\u043D\u044B",
                                      class: [
                                        "h-8",
                                        newRepairReport.value.date ? "" : "outline-1 outline-rose-300"
                                      ]
                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "min", "class"])
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
                                      class: [
                                        "h-8",
                                        newRepairReport.value.name ? "" : "outline-1 outline-rose-300"
                                      ]
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
                                  createVNode("span", null, " \u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C: " + toDisplayString(newRepairReport.value.cost.toFixed(2)) + "\u0440. ", 1)
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
                                min: (/* @__PURE__ */ new Date()).toISOString().slice(0, 10),
                                type: "date",
                                placeholder: "\u0414\u0430\u0442\u0430",
                                class: [
                                  "h-8",
                                  newOtherReport.value.date ? "" : "outline-1 outline-rose-300"
                                ]
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
                                class: [
                                  "h-8",
                                  newOtherReport.value.name ? "" : "outline-1 outline-rose-300"
                                ]
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
                                class: [
                                  "h-8",
                                  newOtherReport.value.cost ? "" : "outline-1 outline-rose-300"
                                ]
                              }, null, _parent5, _scopeId4));
                              _push5(`</div><div class="relative"${_scopeId4}>`);
                              _push5(ssrRenderComponent(_component_UiTextarea, {
                                modelValue: newOtherReport.value.comment,
                                "onUpdate:modelValue": ($event) => newOtherReport.value.comment = $event,
                                placeholder: "\u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439"
                              }, null, _parent5, _scopeId4));
                              if (newReportMaster.value.comment) {
                                _push5(ssrRenderComponent(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(` \u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439 `);
                                    } else {
                                      return [
                                        createTextVNode(" \u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439 ")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                              } else {
                                _push5(`<!---->`);
                              }
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
                                      min: (/* @__PURE__ */ new Date()).toISOString().slice(0, 10),
                                      type: "date",
                                      placeholder: "\u0414\u0430\u0442\u0430",
                                      class: [
                                        "h-8",
                                        newOtherReport.value.date ? "" : "outline-1 outline-rose-300"
                                      ]
                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "min", "class"])
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
                                      class: [
                                        "h-8",
                                        newOtherReport.value.name ? "" : "outline-1 outline-rose-300"
                                      ]
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
                                      class: [
                                        "h-8",
                                        newOtherReport.value.cost ? "" : "outline-1 outline-rose-300"
                                      ]
                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "class"])
                                  ]),
                                  createVNode("div", { class: "relative" }, [
                                    createVNode(_component_UiTextarea, {
                                      modelValue: newOtherReport.value.comment,
                                      "onUpdate:modelValue": ($event) => newOtherReport.value.comment = $event,
                                      placeholder: "\u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                    newReportMaster.value.comment ? (openBlock(), createBlock(_component_UiLabel, {
                                      key: 0,
                                      class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" \u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439 ")
                                      ]),
                                      _: 1
                                    })) : createCommentVNode("", true)
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
                          !hasInitialData.value ? (openBlock(), createBlock(_component_UiTabsList, {
                            key: 0,
                            class: "w-full mb-4"
                          }, {
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
                          })) : createCommentVNode("", true),
                          createVNode(_component_UiTabsContent, { value: "new" }, {
                            default: withCtx(() => {
                              var _a, _b, _c, _d, _e;
                              return [
                                createVNode("div", { class: "flex flex-col gap-5" }, [
                                  createVNode("div", { class: "relative" }, [
                                    newReportMaster.value.date ? (openBlock(), createBlock(_component_UiLabel, {
                                      key: 0,
                                      class: [
                                        "font-medium absolute left-2 top-[-13px] rounded-md p-1 whitespace-nowrap",
                                        hasInitialData.value ? "text-neutral-400 bg-neutral-800" : "text-slate-400 bg-white"
                                      ]
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode("\u0414\u0430\u0442\u0430 \u0441\u043C\u0435\u043D\u044B")
                                      ]),
                                      _: 1
                                    }, 8, ["class"])) : createCommentVNode("", true),
                                    createVNode(_component_UiInput, {
                                      modelValue: newReportMaster.value.date,
                                      "onUpdate:modelValue": ($event) => newReportMaster.value.date = $event,
                                      min: (/* @__PURE__ */ new Date()).toISOString().slice(0, 10),
                                      type: "date",
                                      placeholder: "\u0414\u0430\u0442\u0430 \u0441\u043C\u0435\u043D\u044B",
                                      class: [
                                        newReportMaster.value.date ? "" : "outline-1 outline-rose-300",
                                        hasInitialData.value ? "bg-neutral-800 text-neutral-300 placeholder:text-neutral-600 border-neutral-500/20" : ""
                                      ]
                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "min", "class"])
                                  ]),
                                  props.curUser.workSpaceId !== 8 ? (openBlock(), createBlock("div", {
                                    key: 0,
                                    class: "relative"
                                  }, [
                                    newReportMaster.value.type ? (openBlock(), createBlock(_component_UiLabel, {
                                      key: 0,
                                      class: [
                                        "font-medium absolute left-2 top-[-13px] rounded-md p-1",
                                        hasInitialData.value ? "text-neutral-400 bg-neutral-800" : "text-slate-400 bg-white"
                                      ]
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode("\u0422\u0438\u043F")
                                      ]),
                                      _: 1
                                    }, 8, ["class"])) : createCommentVNode("", true),
                                    createVNode("div", {
                                      class: [
                                        newReportMaster.value.type ? "" : "outline-1 outline-rose-300 rounded-md"
                                      ]
                                    }, [
                                      createVNode(_component_UiSelect, {
                                        modelValue: newReportMaster.value.type,
                                        "onUpdate:modelValue": ($event) => newReportMaster.value.type = $event
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_UiSelectTrigger, {
                                            class: hasInitialData.value ? "bg-neutral-800 text-neutral-300 border-neutral-500/20" : ""
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(_component_UiSelectValue, { placeholder: "\u0422\u0438\u043F" })
                                            ]),
                                            _: 1
                                          }, 8, ["class"]),
                                          createVNode(_component_UiSelectContent, {
                                            class: [
                                              "h-[250px]",
                                              hasInitialData.value ? "bg-neutral-800 text-neutral-300" : ""
                                            ]
                                          }, {
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
                                          }, 8, ["class"])
                                        ]),
                                        _: 1
                                      }, 8, ["modelValue", "onUpdate:modelValue"])
                                    ], 2)
                                  ])) : (openBlock(), createBlock("div", {
                                    key: 1,
                                    class: "relative"
                                  }, [
                                    newReportMaster.value.type ? (openBlock(), createBlock(_component_UiLabel, {
                                      key: 0,
                                      class: [
                                        "font-medium absolute left-2 top-[-13px] rounded-md p-1",
                                        hasInitialData.value ? "text-neutral-400 bg-neutral-800" : "text-slate-400 bg-white"
                                      ]
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode("\u0422\u0438\u043F")
                                      ]),
                                      _: 1
                                    }, 8, ["class"])) : createCommentVNode("", true),
                                    createVNode("div", {
                                      class: [
                                        newReportMaster.value.type ? "" : "outline-1 outline-rose-300 rounded-md"
                                      ]
                                    }, [
                                      createVNode(_component_UiSelect, {
                                        modelValue: newReportMaster.value.type,
                                        "onUpdate:modelValue": ($event) => newReportMaster.value.type = $event
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_UiSelectTrigger, {
                                            class: hasInitialData.value ? "bg-neutral-800 text-neutral-300 border-neutral-500/20" : ""
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(_component_UiSelectValue, { placeholder: "\u0422\u0438\u043F" })
                                            ]),
                                            _: 1
                                          }, 8, ["class"]),
                                          createVNode(_component_UiSelectContent, {
                                            class: hasInitialData.value ? "bg-neutral-800 text-neutral-300" : ""
                                          }, {
                                            default: withCtx(() => [
                                              (openBlock(), createBlock(Fragment, null, renderList(permsTypes, (item, i) => {
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
                                          }, 8, ["class"])
                                        ]),
                                        _: 1
                                      }, 8, ["modelValue", "onUpdate:modelValue"])
                                    ], 2)
                                  ])),
                                  createVNode("div", { class: "relative" }, [
                                    newReportMaster.value.name ? (openBlock(), createBlock(_component_UiLabel, {
                                      key: 0,
                                      class: [
                                        "font-medium absolute left-2 top-[-13px] rounded-md p-1",
                                        hasInitialData.value ? "text-neutral-400 bg-neutral-800" : "text-slate-400 bg-white"
                                      ]
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode("\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0438\u043B\u0438 \u0441\u0441\u044B\u043B\u043A\u0430")
                                      ]),
                                      _: 1
                                    }, 8, ["class"])) : createCommentVNode("", true),
                                    createVNode(_component_UiInput, {
                                      modelValue: newReportMaster.value.name,
                                      "onUpdate:modelValue": ($event) => newReportMaster.value.name = $event,
                                      placeholder: "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0438\u043B\u0438 \u0441\u0441\u044B\u043B\u043A\u0430",
                                      class: [
                                        newReportMaster.value.name ? "" : "outline-1 outline-rose-300",
                                        hasInitialData.value ? "bg-neutral-800 text-neutral-300 placeholder:text-neutral-600 border-neutral-500/20" : ""
                                      ]
                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "class"])
                                  ]),
                                  createVNode("div", { class: "flex gap-2" }, [
                                    createVNode("div", { class: "relative" }, [
                                      createVNode(_component_UiLabel, {
                                        class: [
                                          "font-medium absolute left-2 top-[-13px] rounded-md p-1 whitespace-nowrap",
                                          hasInitialData.value ? "text-neutral-400 bg-neutral-800" : "text-slate-400 bg-white"
                                        ]
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode("\u041C\u0435\u0442\u0440\u044B")
                                        ]),
                                        _: 1
                                      }, 8, ["class"]),
                                      createVNode("div", { class: "flex gap-2" }, [
                                        createVNode(_component_UiInput, {
                                          modelValue: newReportMaster.value.metrs,
                                          "onUpdate:modelValue": ($event) => newReportMaster.value.metrs = $event,
                                          modelModifiers: { number: true },
                                          placeholder: "\u041C\u0435\u0442\u0440\u044B",
                                          type: "number",
                                          min: "0",
                                          class: [
                                            newReportMaster.value.metrs > 0 ? "" : "outline-1 outline-rose-300",
                                            hasInitialData.value ? "bg-neutral-800 text-neutral-300 placeholder:text-neutral-600 border-neutral-500/20" : ""
                                          ]
                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "class"])
                                      ])
                                    ]),
                                    createVNode("div", { class: "relative" }, [
                                      createVNode(_component_UiLabel, {
                                        class: [
                                          "font-medium absolute left-2 top-[-13px] rounded-md p-1 whitespace-nowrap",
                                          hasInitialData.value ? "text-neutral-400 bg-neutral-800" : "text-slate-400 bg-white"
                                        ]
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode("\u042D\u043B\u0435\u043C\u0435\u043D\u0442\u044B")
                                        ]),
                                        _: 1
                                      }, 8, ["class"]),
                                      createVNode("div", { class: "flex gap-2" }, [
                                        createVNode(_component_UiInput, {
                                          modelValue: newReportMaster.value.els,
                                          "onUpdate:modelValue": ($event) => newReportMaster.value.els = $event,
                                          modelModifiers: { number: true },
                                          placeholder: "\u042D\u043B\u0435\u043C\u0435\u043D\u0442\u044B",
                                          type: "number",
                                          min: "0",
                                          class: [
                                            newReportMaster.value.els > 0 ? "" : "outline-1 outline-rose-300",
                                            hasInitialData.value ? "bg-neutral-800 text-neutral-300 placeholder:text-neutral-600 border-neutral-500/20" : ""
                                          ]
                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "class"])
                                      ])
                                    ])
                                  ]),
                                  createVNode("div", { class: "flex flex-col gap-4" }, [
                                    createVNode("div", { class: "relative" }, [
                                      createVNode(_component_UiSelect, {
                                        modelValue: newReportMaster.value.lightingType,
                                        "onUpdate:modelValue": ($event) => newReportMaster.value.lightingType = $event
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_UiSelectTrigger, {
                                            class: [
                                              showLightingError.value && (!newReportMaster.value.lightingType || newReportMaster.value.lightingType === "none") ? "outline-1 outline-rose-300" : "",
                                              hasInitialData.value ? "bg-neutral-800 text-neutral-300 border-neutral-500/20" : ""
                                            ]
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(_component_UiSelectValue, { placeholder: "\u0411\u0435\u0437 \u043F\u043E\u0434\u0441\u0432\u0435\u0442\u043A\u0438" })
                                            ]),
                                            _: 1
                                          }, 8, ["class"]),
                                          createVNode(_component_UiSelectContent, {
                                            class: hasInitialData.value ? "bg-neutral-800 text-neutral-300" : ""
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(_component_UiSelectItem, { value: "none" }, {
                                                default: withCtx(() => [
                                                  createTextVNode("\u0411\u0435\u0437 \u043F\u043E\u0434\u0441\u0432\u0435\u0442\u043A\u0438")
                                                ]),
                                                _: 1
                                              }),
                                              (openBlock(), createBlock(Fragment, null, renderList(lightingsTypes, (item, i) => {
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
                                          }, 8, ["class"])
                                        ]),
                                        _: 1
                                      }, 8, ["modelValue", "onUpdate:modelValue"])
                                    ]),
                                    newReportMaster.value.lightingType && newReportMaster.value.lightingType !== "none" ? (openBlock(), createBlock("div", {
                                      key: 0,
                                      class: "flex gap-2"
                                    }, [
                                      createVNode("div", { class: "relative" }, [
                                        createVNode(_component_UiLabel, {
                                          class: [
                                            "font-medium absolute left-2 top-[-13px] rounded-md p-1 whitespace-nowrap",
                                            hasInitialData.value ? "text-neutral-400 bg-neutral-800" : "text-slate-400 bg-white"
                                          ]
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode("\u041C\u0435\u0442\u0440\u044B")
                                          ]),
                                          _: 1
                                        }, 8, ["class"]),
                                        createVNode(_component_UiInput, {
                                          modelValue: newReportMaster.value.lightingLength,
                                          "onUpdate:modelValue": ($event) => newReportMaster.value.lightingLength = $event,
                                          modelModifiers: { number: true },
                                          placeholder: "\u041C\u0435\u0442\u0440\u044B",
                                          type: "number",
                                          min: "0",
                                          class: [
                                            showLightingError.value && !((_a = newReportMaster.value.lightingLength) != null ? _a : 0) ? "outline-1 outline-rose-300" : "",
                                            hasInitialData.value ? "bg-neutral-800 text-neutral-300 placeholder:text-neutral-600 border-neutral-500/20" : ""
                                          ]
                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "class"])
                                      ]),
                                      createVNode("div", { class: "relative" }, [
                                        createVNode(_component_UiLabel, {
                                          class: [
                                            "font-medium absolute left-2 top-[-13px] rounded-md p-1 whitespace-nowrap",
                                            hasInitialData.value ? "text-neutral-400 bg-neutral-800" : "text-slate-400 bg-white"
                                          ]
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode("\u042D\u043B\u0435\u043C\u0435\u043D\u0442\u044B")
                                          ]),
                                          _: 1
                                        }, 8, ["class"]),
                                        createVNode(_component_UiInput, {
                                          modelValue: newReportMaster.value.lightingElements,
                                          "onUpdate:modelValue": ($event) => newReportMaster.value.lightingElements = $event,
                                          modelModifiers: { number: true },
                                          placeholder: "\u042D\u043B\u0435\u043C\u0435\u043D\u0442\u044B",
                                          type: "number",
                                          min: "0",
                                          class: [
                                            showLightingError.value && !((_b = newReportMaster.value.lightingElements) != null ? _b : 0) ? "outline-1 outline-rose-300" : "",
                                            hasInitialData.value ? "bg-neutral-800 text-neutral-300 placeholder:text-neutral-600 border-neutral-500/20" : ""
                                          ]
                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "class"])
                                      ])
                                    ])) : createCommentVNode("", true)
                                  ]),
                                  createVNode("div", { class: "flex flex-col gap-2" }, [
                                    !["PACKER", "MASTER"].includes(
                                      ((_c = _ctx.curUser) == null ? void 0 : _c.role.shortName) || ""
                                    ) ? (openBlock(), createBlock("div", {
                                      key: 0,
                                      class: "relative"
                                    }, [
                                      createVNode(_component_UiLabel, {
                                        class: [
                                          "font-medium absolute left-2 top-[-13px] rounded-md p-1",
                                          hasInitialData.value ? "text-neutral-400 bg-neutral-800" : "text-slate-400 bg-white"
                                        ]
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode("\u0428\u0442\u0440\u0430\u0444")
                                        ]),
                                        _: 1
                                      }, 8, ["class"]),
                                      createVNode(_component_UiInput, {
                                        modelValue: newReportMaster.value.penaltyCost,
                                        "onUpdate:modelValue": ($event) => newReportMaster.value.penaltyCost = $event,
                                        placeholder: "\u0428\u0442\u0440\u0430\u0444",
                                        type: "number",
                                        class: hasInitialData.value ? "bg-neutral-800 text-neutral-300 placeholder:text-neutral-600 border-neutral-500/20" : ""
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "class"])
                                    ])) : createCommentVNode("", true),
                                    createVNode("div", { class: "relative" }, [
                                      createVNode(_component_UiTextarea, {
                                        modelValue: newReportMaster.value.comment,
                                        "onUpdate:modelValue": ($event) => newReportMaster.value.comment = $event,
                                        placeholder: "\u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439",
                                        class: hasInitialData.value ? "bg-neutral-800 text-neutral-300 placeholder:text-neutral-600 border-neutral-500/20" : ""
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "class"]),
                                      newReportMaster.value.comment ? (openBlock(), createBlock(_component_UiLabel, {
                                        key: 0,
                                        class: [
                                          "font-medium absolute left-2 top-[-13px] rounded-md p-1 whitespace-nowrap",
                                          hasInitialData.value ? "text-neutral-400 bg-neutral-800" : "text-slate-400 bg-white"
                                        ]
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(" \u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439 ")
                                        ]),
                                        _: 1
                                      }, 8, ["class"])) : createCommentVNode("", true)
                                    ])
                                  ]),
                                  createVNode("div", {
                                    class: [
                                      "flex flex-col gap-1 border-t pt-2",
                                      hasInitialData.value ? "border-neutral-500/20 text-neutral-300" : ""
                                    ]
                                  }, [
                                    ((_d = newReportMaster.value.lightingCost) != null ? _d : 0) > 0 ? (openBlock(), createBlock("span", { key: 0 }, " \u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C \u043E\u0441\u043D\u043E\u0432\u043D\u043E\u0439 \u0440\u0430\u0431\u043E\u0442\u044B: " + toDisplayString(newReportMaster.value.cost) + "\u0440. ", 1)) : createCommentVNode("", true),
                                    ((_e = newReportMaster.value.lightingCost) != null ? _e : 0) > 0 ? (openBlock(), createBlock("span", { key: 1 }, " \u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C \u043F\u043E\u0434\u0441\u0432\u0435\u0442\u043A\u0438: " + toDisplayString(newReportMaster.value.lightingCost) + "\u0440. ", 1)) : createCommentVNode("", true),
                                    createVNode("span", { class: "font-semibold text-lg" }, " \u041E\u0431\u0449\u0430\u044F \u0441\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C: " + toDisplayString(totalCost.value) + "\u0440. ", 1)
                                  ], 2)
                                ]),
                                createVNode("div", { class: "flex justify-end w-full" }, [
                                  createVNode(_component_UiButton, {
                                    disabled: disabled.value,
                                    class: hasInitialData.value ? "bg-neutral-600 text-neutral-300 hover:bg-neutral-600/50" : "",
                                    onClick: createMasterReport
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(props.initialData ? "\u0412\u044B\u043F\u043E\u043B\u043D\u0438\u0442\u044C" : "\u0421\u043E\u0437\u0434\u0430\u0442\u044C"), 1)
                                    ]),
                                    _: 1
                                  }, 8, ["disabled", "class"])
                                ])
                              ];
                            }),
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
                                    min: (/* @__PURE__ */ new Date()).toISOString().slice(0, 10),
                                    placeholder: "\u0414\u0430\u0442\u0430 \u0441\u043C\u0435\u043D\u044B",
                                    class: [
                                      "h-8",
                                      newRepairReport.value.date ? "" : "outline-1 outline-rose-300"
                                    ]
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "min", "class"])
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
                                    class: [
                                      "h-8",
                                      newRepairReport.value.name ? "" : "outline-1 outline-rose-300"
                                    ]
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
                                createVNode("span", null, " \u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C: " + toDisplayString(newRepairReport.value.cost.toFixed(2)) + "\u0440. ", 1)
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
                                    min: (/* @__PURE__ */ new Date()).toISOString().slice(0, 10),
                                    type: "date",
                                    placeholder: "\u0414\u0430\u0442\u0430",
                                    class: [
                                      "h-8",
                                      newOtherReport.value.date ? "" : "outline-1 outline-rose-300"
                                    ]
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "min", "class"])
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
                                    class: [
                                      "h-8",
                                      newOtherReport.value.name ? "" : "outline-1 outline-rose-300"
                                    ]
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
                                    class: [
                                      "h-8",
                                      newOtherReport.value.cost ? "" : "outline-1 outline-rose-300"
                                    ]
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "class"])
                                ]),
                                createVNode("div", { class: "relative" }, [
                                  createVNode(_component_UiTextarea, {
                                    modelValue: newOtherReport.value.comment,
                                    "onUpdate:modelValue": ($event) => newOtherReport.value.comment = $event,
                                    placeholder: "\u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                  newReportMaster.value.comment ? (openBlock(), createBlock(_component_UiLabel, {
                                    key: 0,
                                    class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" \u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439 ")
                                    ]),
                                    _: 1
                                  })) : createCommentVNode("", true)
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
                        createVNode(_component_UiDialogTitle, {
                          class: hasInitialData.value ? "text-neutral-300" : ""
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(props.initialData ? "\u0412\u044B\u043F\u043E\u043B\u043D\u0438\u0442\u044C \u0437\u0430\u043A\u0430\u0437" : "\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u0437\u0430\u043F\u0438\u0441\u044C"), 1)
                          ]),
                          _: 1
                        }, 8, ["class"]),
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
                          !hasInitialData.value ? (openBlock(), createBlock(_component_UiTabsList, {
                            key: 0,
                            class: "w-full mb-4"
                          }, {
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
                          })) : createCommentVNode("", true),
                          createVNode(_component_UiTabsContent, { value: "new" }, {
                            default: withCtx(() => {
                              var _a, _b, _c, _d, _e;
                              return [
                                createVNode("div", { class: "flex flex-col gap-5" }, [
                                  createVNode("div", { class: "relative" }, [
                                    newReportMaster.value.date ? (openBlock(), createBlock(_component_UiLabel, {
                                      key: 0,
                                      class: [
                                        "font-medium absolute left-2 top-[-13px] rounded-md p-1 whitespace-nowrap",
                                        hasInitialData.value ? "text-neutral-400 bg-neutral-800" : "text-slate-400 bg-white"
                                      ]
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode("\u0414\u0430\u0442\u0430 \u0441\u043C\u0435\u043D\u044B")
                                      ]),
                                      _: 1
                                    }, 8, ["class"])) : createCommentVNode("", true),
                                    createVNode(_component_UiInput, {
                                      modelValue: newReportMaster.value.date,
                                      "onUpdate:modelValue": ($event) => newReportMaster.value.date = $event,
                                      min: (/* @__PURE__ */ new Date()).toISOString().slice(0, 10),
                                      type: "date",
                                      placeholder: "\u0414\u0430\u0442\u0430 \u0441\u043C\u0435\u043D\u044B",
                                      class: [
                                        newReportMaster.value.date ? "" : "outline-1 outline-rose-300",
                                        hasInitialData.value ? "bg-neutral-800 text-neutral-300 placeholder:text-neutral-600 border-neutral-500/20" : ""
                                      ]
                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "min", "class"])
                                  ]),
                                  props.curUser.workSpaceId !== 8 ? (openBlock(), createBlock("div", {
                                    key: 0,
                                    class: "relative"
                                  }, [
                                    newReportMaster.value.type ? (openBlock(), createBlock(_component_UiLabel, {
                                      key: 0,
                                      class: [
                                        "font-medium absolute left-2 top-[-13px] rounded-md p-1",
                                        hasInitialData.value ? "text-neutral-400 bg-neutral-800" : "text-slate-400 bg-white"
                                      ]
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode("\u0422\u0438\u043F")
                                      ]),
                                      _: 1
                                    }, 8, ["class"])) : createCommentVNode("", true),
                                    createVNode("div", {
                                      class: [
                                        newReportMaster.value.type ? "" : "outline-1 outline-rose-300 rounded-md"
                                      ]
                                    }, [
                                      createVNode(_component_UiSelect, {
                                        modelValue: newReportMaster.value.type,
                                        "onUpdate:modelValue": ($event) => newReportMaster.value.type = $event
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_UiSelectTrigger, {
                                            class: hasInitialData.value ? "bg-neutral-800 text-neutral-300 border-neutral-500/20" : ""
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(_component_UiSelectValue, { placeholder: "\u0422\u0438\u043F" })
                                            ]),
                                            _: 1
                                          }, 8, ["class"]),
                                          createVNode(_component_UiSelectContent, {
                                            class: [
                                              "h-[250px]",
                                              hasInitialData.value ? "bg-neutral-800 text-neutral-300" : ""
                                            ]
                                          }, {
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
                                          }, 8, ["class"])
                                        ]),
                                        _: 1
                                      }, 8, ["modelValue", "onUpdate:modelValue"])
                                    ], 2)
                                  ])) : (openBlock(), createBlock("div", {
                                    key: 1,
                                    class: "relative"
                                  }, [
                                    newReportMaster.value.type ? (openBlock(), createBlock(_component_UiLabel, {
                                      key: 0,
                                      class: [
                                        "font-medium absolute left-2 top-[-13px] rounded-md p-1",
                                        hasInitialData.value ? "text-neutral-400 bg-neutral-800" : "text-slate-400 bg-white"
                                      ]
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode("\u0422\u0438\u043F")
                                      ]),
                                      _: 1
                                    }, 8, ["class"])) : createCommentVNode("", true),
                                    createVNode("div", {
                                      class: [
                                        newReportMaster.value.type ? "" : "outline-1 outline-rose-300 rounded-md"
                                      ]
                                    }, [
                                      createVNode(_component_UiSelect, {
                                        modelValue: newReportMaster.value.type,
                                        "onUpdate:modelValue": ($event) => newReportMaster.value.type = $event
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_UiSelectTrigger, {
                                            class: hasInitialData.value ? "bg-neutral-800 text-neutral-300 border-neutral-500/20" : ""
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(_component_UiSelectValue, { placeholder: "\u0422\u0438\u043F" })
                                            ]),
                                            _: 1
                                          }, 8, ["class"]),
                                          createVNode(_component_UiSelectContent, {
                                            class: hasInitialData.value ? "bg-neutral-800 text-neutral-300" : ""
                                          }, {
                                            default: withCtx(() => [
                                              (openBlock(), createBlock(Fragment, null, renderList(permsTypes, (item, i) => {
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
                                          }, 8, ["class"])
                                        ]),
                                        _: 1
                                      }, 8, ["modelValue", "onUpdate:modelValue"])
                                    ], 2)
                                  ])),
                                  createVNode("div", { class: "relative" }, [
                                    newReportMaster.value.name ? (openBlock(), createBlock(_component_UiLabel, {
                                      key: 0,
                                      class: [
                                        "font-medium absolute left-2 top-[-13px] rounded-md p-1",
                                        hasInitialData.value ? "text-neutral-400 bg-neutral-800" : "text-slate-400 bg-white"
                                      ]
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode("\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0438\u043B\u0438 \u0441\u0441\u044B\u043B\u043A\u0430")
                                      ]),
                                      _: 1
                                    }, 8, ["class"])) : createCommentVNode("", true),
                                    createVNode(_component_UiInput, {
                                      modelValue: newReportMaster.value.name,
                                      "onUpdate:modelValue": ($event) => newReportMaster.value.name = $event,
                                      placeholder: "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0438\u043B\u0438 \u0441\u0441\u044B\u043B\u043A\u0430",
                                      class: [
                                        newReportMaster.value.name ? "" : "outline-1 outline-rose-300",
                                        hasInitialData.value ? "bg-neutral-800 text-neutral-300 placeholder:text-neutral-600 border-neutral-500/20" : ""
                                      ]
                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "class"])
                                  ]),
                                  createVNode("div", { class: "flex gap-2" }, [
                                    createVNode("div", { class: "relative" }, [
                                      createVNode(_component_UiLabel, {
                                        class: [
                                          "font-medium absolute left-2 top-[-13px] rounded-md p-1 whitespace-nowrap",
                                          hasInitialData.value ? "text-neutral-400 bg-neutral-800" : "text-slate-400 bg-white"
                                        ]
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode("\u041C\u0435\u0442\u0440\u044B")
                                        ]),
                                        _: 1
                                      }, 8, ["class"]),
                                      createVNode("div", { class: "flex gap-2" }, [
                                        createVNode(_component_UiInput, {
                                          modelValue: newReportMaster.value.metrs,
                                          "onUpdate:modelValue": ($event) => newReportMaster.value.metrs = $event,
                                          modelModifiers: { number: true },
                                          placeholder: "\u041C\u0435\u0442\u0440\u044B",
                                          type: "number",
                                          min: "0",
                                          class: [
                                            newReportMaster.value.metrs > 0 ? "" : "outline-1 outline-rose-300",
                                            hasInitialData.value ? "bg-neutral-800 text-neutral-300 placeholder:text-neutral-600 border-neutral-500/20" : ""
                                          ]
                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "class"])
                                      ])
                                    ]),
                                    createVNode("div", { class: "relative" }, [
                                      createVNode(_component_UiLabel, {
                                        class: [
                                          "font-medium absolute left-2 top-[-13px] rounded-md p-1 whitespace-nowrap",
                                          hasInitialData.value ? "text-neutral-400 bg-neutral-800" : "text-slate-400 bg-white"
                                        ]
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode("\u042D\u043B\u0435\u043C\u0435\u043D\u0442\u044B")
                                        ]),
                                        _: 1
                                      }, 8, ["class"]),
                                      createVNode("div", { class: "flex gap-2" }, [
                                        createVNode(_component_UiInput, {
                                          modelValue: newReportMaster.value.els,
                                          "onUpdate:modelValue": ($event) => newReportMaster.value.els = $event,
                                          modelModifiers: { number: true },
                                          placeholder: "\u042D\u043B\u0435\u043C\u0435\u043D\u0442\u044B",
                                          type: "number",
                                          min: "0",
                                          class: [
                                            newReportMaster.value.els > 0 ? "" : "outline-1 outline-rose-300",
                                            hasInitialData.value ? "bg-neutral-800 text-neutral-300 placeholder:text-neutral-600 border-neutral-500/20" : ""
                                          ]
                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "class"])
                                      ])
                                    ])
                                  ]),
                                  createVNode("div", { class: "flex flex-col gap-4" }, [
                                    createVNode("div", { class: "relative" }, [
                                      createVNode(_component_UiSelect, {
                                        modelValue: newReportMaster.value.lightingType,
                                        "onUpdate:modelValue": ($event) => newReportMaster.value.lightingType = $event
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_UiSelectTrigger, {
                                            class: [
                                              showLightingError.value && (!newReportMaster.value.lightingType || newReportMaster.value.lightingType === "none") ? "outline-1 outline-rose-300" : "",
                                              hasInitialData.value ? "bg-neutral-800 text-neutral-300 border-neutral-500/20" : ""
                                            ]
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(_component_UiSelectValue, { placeholder: "\u0411\u0435\u0437 \u043F\u043E\u0434\u0441\u0432\u0435\u0442\u043A\u0438" })
                                            ]),
                                            _: 1
                                          }, 8, ["class"]),
                                          createVNode(_component_UiSelectContent, {
                                            class: hasInitialData.value ? "bg-neutral-800 text-neutral-300" : ""
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(_component_UiSelectItem, { value: "none" }, {
                                                default: withCtx(() => [
                                                  createTextVNode("\u0411\u0435\u0437 \u043F\u043E\u0434\u0441\u0432\u0435\u0442\u043A\u0438")
                                                ]),
                                                _: 1
                                              }),
                                              (openBlock(), createBlock(Fragment, null, renderList(lightingsTypes, (item, i) => {
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
                                          }, 8, ["class"])
                                        ]),
                                        _: 1
                                      }, 8, ["modelValue", "onUpdate:modelValue"])
                                    ]),
                                    newReportMaster.value.lightingType && newReportMaster.value.lightingType !== "none" ? (openBlock(), createBlock("div", {
                                      key: 0,
                                      class: "flex gap-2"
                                    }, [
                                      createVNode("div", { class: "relative" }, [
                                        createVNode(_component_UiLabel, {
                                          class: [
                                            "font-medium absolute left-2 top-[-13px] rounded-md p-1 whitespace-nowrap",
                                            hasInitialData.value ? "text-neutral-400 bg-neutral-800" : "text-slate-400 bg-white"
                                          ]
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode("\u041C\u0435\u0442\u0440\u044B")
                                          ]),
                                          _: 1
                                        }, 8, ["class"]),
                                        createVNode(_component_UiInput, {
                                          modelValue: newReportMaster.value.lightingLength,
                                          "onUpdate:modelValue": ($event) => newReportMaster.value.lightingLength = $event,
                                          modelModifiers: { number: true },
                                          placeholder: "\u041C\u0435\u0442\u0440\u044B",
                                          type: "number",
                                          min: "0",
                                          class: [
                                            showLightingError.value && !((_a = newReportMaster.value.lightingLength) != null ? _a : 0) ? "outline-1 outline-rose-300" : "",
                                            hasInitialData.value ? "bg-neutral-800 text-neutral-300 placeholder:text-neutral-600 border-neutral-500/20" : ""
                                          ]
                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "class"])
                                      ]),
                                      createVNode("div", { class: "relative" }, [
                                        createVNode(_component_UiLabel, {
                                          class: [
                                            "font-medium absolute left-2 top-[-13px] rounded-md p-1 whitespace-nowrap",
                                            hasInitialData.value ? "text-neutral-400 bg-neutral-800" : "text-slate-400 bg-white"
                                          ]
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode("\u042D\u043B\u0435\u043C\u0435\u043D\u0442\u044B")
                                          ]),
                                          _: 1
                                        }, 8, ["class"]),
                                        createVNode(_component_UiInput, {
                                          modelValue: newReportMaster.value.lightingElements,
                                          "onUpdate:modelValue": ($event) => newReportMaster.value.lightingElements = $event,
                                          modelModifiers: { number: true },
                                          placeholder: "\u042D\u043B\u0435\u043C\u0435\u043D\u0442\u044B",
                                          type: "number",
                                          min: "0",
                                          class: [
                                            showLightingError.value && !((_b = newReportMaster.value.lightingElements) != null ? _b : 0) ? "outline-1 outline-rose-300" : "",
                                            hasInitialData.value ? "bg-neutral-800 text-neutral-300 placeholder:text-neutral-600 border-neutral-500/20" : ""
                                          ]
                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "class"])
                                      ])
                                    ])) : createCommentVNode("", true)
                                  ]),
                                  createVNode("div", { class: "flex flex-col gap-2" }, [
                                    !["PACKER", "MASTER"].includes(
                                      ((_c = _ctx.curUser) == null ? void 0 : _c.role.shortName) || ""
                                    ) ? (openBlock(), createBlock("div", {
                                      key: 0,
                                      class: "relative"
                                    }, [
                                      createVNode(_component_UiLabel, {
                                        class: [
                                          "font-medium absolute left-2 top-[-13px] rounded-md p-1",
                                          hasInitialData.value ? "text-neutral-400 bg-neutral-800" : "text-slate-400 bg-white"
                                        ]
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode("\u0428\u0442\u0440\u0430\u0444")
                                        ]),
                                        _: 1
                                      }, 8, ["class"]),
                                      createVNode(_component_UiInput, {
                                        modelValue: newReportMaster.value.penaltyCost,
                                        "onUpdate:modelValue": ($event) => newReportMaster.value.penaltyCost = $event,
                                        placeholder: "\u0428\u0442\u0440\u0430\u0444",
                                        type: "number",
                                        class: hasInitialData.value ? "bg-neutral-800 text-neutral-300 placeholder:text-neutral-600 border-neutral-500/20" : ""
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "class"])
                                    ])) : createCommentVNode("", true),
                                    createVNode("div", { class: "relative" }, [
                                      createVNode(_component_UiTextarea, {
                                        modelValue: newReportMaster.value.comment,
                                        "onUpdate:modelValue": ($event) => newReportMaster.value.comment = $event,
                                        placeholder: "\u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439",
                                        class: hasInitialData.value ? "bg-neutral-800 text-neutral-300 placeholder:text-neutral-600 border-neutral-500/20" : ""
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "class"]),
                                      newReportMaster.value.comment ? (openBlock(), createBlock(_component_UiLabel, {
                                        key: 0,
                                        class: [
                                          "font-medium absolute left-2 top-[-13px] rounded-md p-1 whitespace-nowrap",
                                          hasInitialData.value ? "text-neutral-400 bg-neutral-800" : "text-slate-400 bg-white"
                                        ]
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(" \u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439 ")
                                        ]),
                                        _: 1
                                      }, 8, ["class"])) : createCommentVNode("", true)
                                    ])
                                  ]),
                                  createVNode("div", {
                                    class: [
                                      "flex flex-col gap-1 border-t pt-2",
                                      hasInitialData.value ? "border-neutral-500/20 text-neutral-300" : ""
                                    ]
                                  }, [
                                    ((_d = newReportMaster.value.lightingCost) != null ? _d : 0) > 0 ? (openBlock(), createBlock("span", { key: 0 }, " \u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C \u043E\u0441\u043D\u043E\u0432\u043D\u043E\u0439 \u0440\u0430\u0431\u043E\u0442\u044B: " + toDisplayString(newReportMaster.value.cost) + "\u0440. ", 1)) : createCommentVNode("", true),
                                    ((_e = newReportMaster.value.lightingCost) != null ? _e : 0) > 0 ? (openBlock(), createBlock("span", { key: 1 }, " \u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C \u043F\u043E\u0434\u0441\u0432\u0435\u0442\u043A\u0438: " + toDisplayString(newReportMaster.value.lightingCost) + "\u0440. ", 1)) : createCommentVNode("", true),
                                    createVNode("span", { class: "font-semibold text-lg" }, " \u041E\u0431\u0449\u0430\u044F \u0441\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C: " + toDisplayString(totalCost.value) + "\u0440. ", 1)
                                  ], 2)
                                ]),
                                createVNode("div", { class: "flex justify-end w-full" }, [
                                  createVNode(_component_UiButton, {
                                    disabled: disabled.value,
                                    class: hasInitialData.value ? "bg-neutral-600 text-neutral-300 hover:bg-neutral-600/50" : "",
                                    onClick: createMasterReport
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(props.initialData ? "\u0412\u044B\u043F\u043E\u043B\u043D\u0438\u0442\u044C" : "\u0421\u043E\u0437\u0434\u0430\u0442\u044C"), 1)
                                    ]),
                                    _: 1
                                  }, 8, ["disabled", "class"])
                                ])
                              ];
                            }),
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
                                    min: (/* @__PURE__ */ new Date()).toISOString().slice(0, 10),
                                    placeholder: "\u0414\u0430\u0442\u0430 \u0441\u043C\u0435\u043D\u044B",
                                    class: [
                                      "h-8",
                                      newRepairReport.value.date ? "" : "outline-1 outline-rose-300"
                                    ]
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "min", "class"])
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
                                    class: [
                                      "h-8",
                                      newRepairReport.value.name ? "" : "outline-1 outline-rose-300"
                                    ]
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
                                createVNode("span", null, " \u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C: " + toDisplayString(newRepairReport.value.cost.toFixed(2)) + "\u0440. ", 1)
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
                                    min: (/* @__PURE__ */ new Date()).toISOString().slice(0, 10),
                                    type: "date",
                                    placeholder: "\u0414\u0430\u0442\u0430",
                                    class: [
                                      "h-8",
                                      newOtherReport.value.date ? "" : "outline-1 outline-rose-300"
                                    ]
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "min", "class"])
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
                                    class: [
                                      "h-8",
                                      newOtherReport.value.name ? "" : "outline-1 outline-rose-300"
                                    ]
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
                                    class: [
                                      "h-8",
                                      newOtherReport.value.cost ? "" : "outline-1 outline-rose-300"
                                    ]
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "class"])
                                ]),
                                createVNode("div", { class: "relative" }, [
                                  createVNode(_component_UiTextarea, {
                                    modelValue: newOtherReport.value.comment,
                                    "onUpdate:modelValue": ($event) => newOtherReport.value.comment = $event,
                                    placeholder: "\u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                  newReportMaster.value.comment ? (openBlock(), createBlock(_component_UiLabel, {
                                    key: 0,
                                    class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" \u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439 ")
                                    ]),
                                    _: 1
                                  })) : createCommentVNode("", true)
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
                  createVNode(_component_UiButton, {
                    class: [
                      "w-full",
                      hasInitialData.value ? "bg-neutral-700/70 text-neutral-300 border-1 border-neutral-500/20 hover:bg-neutral-700/50" : ""
                    ]
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(props.initialData ? "\u0412\u044B\u043F\u043E\u043B\u043D\u0438\u0442\u044C" : "\u0421\u043E\u0437\u0434\u0430\u0442\u044C"), 1)
                    ]),
                    _: 1
                  }, 8, ["class"])
                ]),
                _: 1
              }),
              createVNode(_component_UiDialogContent, {
                class: [
                  "max-w-[400px] flex flex-col top-0 translate-y-[0px] max-h-[90vh] overflow-y-auto",
                  hasInitialData.value ? "bg-neutral-800 text-neutral-300 border-1 border-neutral-500/20" : ""
                ]
              }, {
                default: withCtx(() => [
                  createVNode(_component_UiDialogHeader, null, {
                    default: withCtx(() => [
                      createVNode(_component_UiDialogTitle, {
                        class: hasInitialData.value ? "text-neutral-300" : ""
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(props.initialData ? "\u0412\u044B\u043F\u043E\u043B\u043D\u0438\u0442\u044C \u0437\u0430\u043A\u0430\u0437" : "\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u0437\u0430\u043F\u0438\u0441\u044C"), 1)
                        ]),
                        _: 1
                      }, 8, ["class"]),
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
                        !hasInitialData.value ? (openBlock(), createBlock(_component_UiTabsList, {
                          key: 0,
                          class: "w-full mb-4"
                        }, {
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
                        })) : createCommentVNode("", true),
                        createVNode(_component_UiTabsContent, { value: "new" }, {
                          default: withCtx(() => {
                            var _a, _b, _c, _d, _e;
                            return [
                              createVNode("div", { class: "flex flex-col gap-5" }, [
                                createVNode("div", { class: "relative" }, [
                                  newReportMaster.value.date ? (openBlock(), createBlock(_component_UiLabel, {
                                    key: 0,
                                    class: [
                                      "font-medium absolute left-2 top-[-13px] rounded-md p-1 whitespace-nowrap",
                                      hasInitialData.value ? "text-neutral-400 bg-neutral-800" : "text-slate-400 bg-white"
                                    ]
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("\u0414\u0430\u0442\u0430 \u0441\u043C\u0435\u043D\u044B")
                                    ]),
                                    _: 1
                                  }, 8, ["class"])) : createCommentVNode("", true),
                                  createVNode(_component_UiInput, {
                                    modelValue: newReportMaster.value.date,
                                    "onUpdate:modelValue": ($event) => newReportMaster.value.date = $event,
                                    min: (/* @__PURE__ */ new Date()).toISOString().slice(0, 10),
                                    type: "date",
                                    placeholder: "\u0414\u0430\u0442\u0430 \u0441\u043C\u0435\u043D\u044B",
                                    class: [
                                      newReportMaster.value.date ? "" : "outline-1 outline-rose-300",
                                      hasInitialData.value ? "bg-neutral-800 text-neutral-300 placeholder:text-neutral-600 border-neutral-500/20" : ""
                                    ]
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "min", "class"])
                                ]),
                                props.curUser.workSpaceId !== 8 ? (openBlock(), createBlock("div", {
                                  key: 0,
                                  class: "relative"
                                }, [
                                  newReportMaster.value.type ? (openBlock(), createBlock(_component_UiLabel, {
                                    key: 0,
                                    class: [
                                      "font-medium absolute left-2 top-[-13px] rounded-md p-1",
                                      hasInitialData.value ? "text-neutral-400 bg-neutral-800" : "text-slate-400 bg-white"
                                    ]
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("\u0422\u0438\u043F")
                                    ]),
                                    _: 1
                                  }, 8, ["class"])) : createCommentVNode("", true),
                                  createVNode("div", {
                                    class: [
                                      newReportMaster.value.type ? "" : "outline-1 outline-rose-300 rounded-md"
                                    ]
                                  }, [
                                    createVNode(_component_UiSelect, {
                                      modelValue: newReportMaster.value.type,
                                      "onUpdate:modelValue": ($event) => newReportMaster.value.type = $event
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_UiSelectTrigger, {
                                          class: hasInitialData.value ? "bg-neutral-800 text-neutral-300 border-neutral-500/20" : ""
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_UiSelectValue, { placeholder: "\u0422\u0438\u043F" })
                                          ]),
                                          _: 1
                                        }, 8, ["class"]),
                                        createVNode(_component_UiSelectContent, {
                                          class: [
                                            "h-[250px]",
                                            hasInitialData.value ? "bg-neutral-800 text-neutral-300" : ""
                                          ]
                                        }, {
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
                                        }, 8, ["class"])
                                      ]),
                                      _: 1
                                    }, 8, ["modelValue", "onUpdate:modelValue"])
                                  ], 2)
                                ])) : (openBlock(), createBlock("div", {
                                  key: 1,
                                  class: "relative"
                                }, [
                                  newReportMaster.value.type ? (openBlock(), createBlock(_component_UiLabel, {
                                    key: 0,
                                    class: [
                                      "font-medium absolute left-2 top-[-13px] rounded-md p-1",
                                      hasInitialData.value ? "text-neutral-400 bg-neutral-800" : "text-slate-400 bg-white"
                                    ]
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("\u0422\u0438\u043F")
                                    ]),
                                    _: 1
                                  }, 8, ["class"])) : createCommentVNode("", true),
                                  createVNode("div", {
                                    class: [
                                      newReportMaster.value.type ? "" : "outline-1 outline-rose-300 rounded-md"
                                    ]
                                  }, [
                                    createVNode(_component_UiSelect, {
                                      modelValue: newReportMaster.value.type,
                                      "onUpdate:modelValue": ($event) => newReportMaster.value.type = $event
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_UiSelectTrigger, {
                                          class: hasInitialData.value ? "bg-neutral-800 text-neutral-300 border-neutral-500/20" : ""
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_UiSelectValue, { placeholder: "\u0422\u0438\u043F" })
                                          ]),
                                          _: 1
                                        }, 8, ["class"]),
                                        createVNode(_component_UiSelectContent, {
                                          class: hasInitialData.value ? "bg-neutral-800 text-neutral-300" : ""
                                        }, {
                                          default: withCtx(() => [
                                            (openBlock(), createBlock(Fragment, null, renderList(permsTypes, (item, i) => {
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
                                        }, 8, ["class"])
                                      ]),
                                      _: 1
                                    }, 8, ["modelValue", "onUpdate:modelValue"])
                                  ], 2)
                                ])),
                                createVNode("div", { class: "relative" }, [
                                  newReportMaster.value.name ? (openBlock(), createBlock(_component_UiLabel, {
                                    key: 0,
                                    class: [
                                      "font-medium absolute left-2 top-[-13px] rounded-md p-1",
                                      hasInitialData.value ? "text-neutral-400 bg-neutral-800" : "text-slate-400 bg-white"
                                    ]
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0438\u043B\u0438 \u0441\u0441\u044B\u043B\u043A\u0430")
                                    ]),
                                    _: 1
                                  }, 8, ["class"])) : createCommentVNode("", true),
                                  createVNode(_component_UiInput, {
                                    modelValue: newReportMaster.value.name,
                                    "onUpdate:modelValue": ($event) => newReportMaster.value.name = $event,
                                    placeholder: "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0438\u043B\u0438 \u0441\u0441\u044B\u043B\u043A\u0430",
                                    class: [
                                      newReportMaster.value.name ? "" : "outline-1 outline-rose-300",
                                      hasInitialData.value ? "bg-neutral-800 text-neutral-300 placeholder:text-neutral-600 border-neutral-500/20" : ""
                                    ]
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "class"])
                                ]),
                                createVNode("div", { class: "flex gap-2" }, [
                                  createVNode("div", { class: "relative" }, [
                                    createVNode(_component_UiLabel, {
                                      class: [
                                        "font-medium absolute left-2 top-[-13px] rounded-md p-1 whitespace-nowrap",
                                        hasInitialData.value ? "text-neutral-400 bg-neutral-800" : "text-slate-400 bg-white"
                                      ]
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode("\u041C\u0435\u0442\u0440\u044B")
                                      ]),
                                      _: 1
                                    }, 8, ["class"]),
                                    createVNode("div", { class: "flex gap-2" }, [
                                      createVNode(_component_UiInput, {
                                        modelValue: newReportMaster.value.metrs,
                                        "onUpdate:modelValue": ($event) => newReportMaster.value.metrs = $event,
                                        modelModifiers: { number: true },
                                        placeholder: "\u041C\u0435\u0442\u0440\u044B",
                                        type: "number",
                                        min: "0",
                                        class: [
                                          newReportMaster.value.metrs > 0 ? "" : "outline-1 outline-rose-300",
                                          hasInitialData.value ? "bg-neutral-800 text-neutral-300 placeholder:text-neutral-600 border-neutral-500/20" : ""
                                        ]
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "class"])
                                    ])
                                  ]),
                                  createVNode("div", { class: "relative" }, [
                                    createVNode(_component_UiLabel, {
                                      class: [
                                        "font-medium absolute left-2 top-[-13px] rounded-md p-1 whitespace-nowrap",
                                        hasInitialData.value ? "text-neutral-400 bg-neutral-800" : "text-slate-400 bg-white"
                                      ]
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode("\u042D\u043B\u0435\u043C\u0435\u043D\u0442\u044B")
                                      ]),
                                      _: 1
                                    }, 8, ["class"]),
                                    createVNode("div", { class: "flex gap-2" }, [
                                      createVNode(_component_UiInput, {
                                        modelValue: newReportMaster.value.els,
                                        "onUpdate:modelValue": ($event) => newReportMaster.value.els = $event,
                                        modelModifiers: { number: true },
                                        placeholder: "\u042D\u043B\u0435\u043C\u0435\u043D\u0442\u044B",
                                        type: "number",
                                        min: "0",
                                        class: [
                                          newReportMaster.value.els > 0 ? "" : "outline-1 outline-rose-300",
                                          hasInitialData.value ? "bg-neutral-800 text-neutral-300 placeholder:text-neutral-600 border-neutral-500/20" : ""
                                        ]
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "class"])
                                    ])
                                  ])
                                ]),
                                createVNode("div", { class: "flex flex-col gap-4" }, [
                                  createVNode("div", { class: "relative" }, [
                                    createVNode(_component_UiSelect, {
                                      modelValue: newReportMaster.value.lightingType,
                                      "onUpdate:modelValue": ($event) => newReportMaster.value.lightingType = $event
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_UiSelectTrigger, {
                                          class: [
                                            showLightingError.value && (!newReportMaster.value.lightingType || newReportMaster.value.lightingType === "none") ? "outline-1 outline-rose-300" : "",
                                            hasInitialData.value ? "bg-neutral-800 text-neutral-300 border-neutral-500/20" : ""
                                          ]
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_UiSelectValue, { placeholder: "\u0411\u0435\u0437 \u043F\u043E\u0434\u0441\u0432\u0435\u0442\u043A\u0438" })
                                          ]),
                                          _: 1
                                        }, 8, ["class"]),
                                        createVNode(_component_UiSelectContent, {
                                          class: hasInitialData.value ? "bg-neutral-800 text-neutral-300" : ""
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_UiSelectItem, { value: "none" }, {
                                              default: withCtx(() => [
                                                createTextVNode("\u0411\u0435\u0437 \u043F\u043E\u0434\u0441\u0432\u0435\u0442\u043A\u0438")
                                              ]),
                                              _: 1
                                            }),
                                            (openBlock(), createBlock(Fragment, null, renderList(lightingsTypes, (item, i) => {
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
                                        }, 8, ["class"])
                                      ]),
                                      _: 1
                                    }, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  newReportMaster.value.lightingType && newReportMaster.value.lightingType !== "none" ? (openBlock(), createBlock("div", {
                                    key: 0,
                                    class: "flex gap-2"
                                  }, [
                                    createVNode("div", { class: "relative" }, [
                                      createVNode(_component_UiLabel, {
                                        class: [
                                          "font-medium absolute left-2 top-[-13px] rounded-md p-1 whitespace-nowrap",
                                          hasInitialData.value ? "text-neutral-400 bg-neutral-800" : "text-slate-400 bg-white"
                                        ]
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode("\u041C\u0435\u0442\u0440\u044B")
                                        ]),
                                        _: 1
                                      }, 8, ["class"]),
                                      createVNode(_component_UiInput, {
                                        modelValue: newReportMaster.value.lightingLength,
                                        "onUpdate:modelValue": ($event) => newReportMaster.value.lightingLength = $event,
                                        modelModifiers: { number: true },
                                        placeholder: "\u041C\u0435\u0442\u0440\u044B",
                                        type: "number",
                                        min: "0",
                                        class: [
                                          showLightingError.value && !((_a = newReportMaster.value.lightingLength) != null ? _a : 0) ? "outline-1 outline-rose-300" : "",
                                          hasInitialData.value ? "bg-neutral-800 text-neutral-300 placeholder:text-neutral-600 border-neutral-500/20" : ""
                                        ]
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "class"])
                                    ]),
                                    createVNode("div", { class: "relative" }, [
                                      createVNode(_component_UiLabel, {
                                        class: [
                                          "font-medium absolute left-2 top-[-13px] rounded-md p-1 whitespace-nowrap",
                                          hasInitialData.value ? "text-neutral-400 bg-neutral-800" : "text-slate-400 bg-white"
                                        ]
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode("\u042D\u043B\u0435\u043C\u0435\u043D\u0442\u044B")
                                        ]),
                                        _: 1
                                      }, 8, ["class"]),
                                      createVNode(_component_UiInput, {
                                        modelValue: newReportMaster.value.lightingElements,
                                        "onUpdate:modelValue": ($event) => newReportMaster.value.lightingElements = $event,
                                        modelModifiers: { number: true },
                                        placeholder: "\u042D\u043B\u0435\u043C\u0435\u043D\u0442\u044B",
                                        type: "number",
                                        min: "0",
                                        class: [
                                          showLightingError.value && !((_b = newReportMaster.value.lightingElements) != null ? _b : 0) ? "outline-1 outline-rose-300" : "",
                                          hasInitialData.value ? "bg-neutral-800 text-neutral-300 placeholder:text-neutral-600 border-neutral-500/20" : ""
                                        ]
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "class"])
                                    ])
                                  ])) : createCommentVNode("", true)
                                ]),
                                createVNode("div", { class: "flex flex-col gap-2" }, [
                                  !["PACKER", "MASTER"].includes(
                                    ((_c = _ctx.curUser) == null ? void 0 : _c.role.shortName) || ""
                                  ) ? (openBlock(), createBlock("div", {
                                    key: 0,
                                    class: "relative"
                                  }, [
                                    createVNode(_component_UiLabel, {
                                      class: [
                                        "font-medium absolute left-2 top-[-13px] rounded-md p-1",
                                        hasInitialData.value ? "text-neutral-400 bg-neutral-800" : "text-slate-400 bg-white"
                                      ]
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode("\u0428\u0442\u0440\u0430\u0444")
                                      ]),
                                      _: 1
                                    }, 8, ["class"]),
                                    createVNode(_component_UiInput, {
                                      modelValue: newReportMaster.value.penaltyCost,
                                      "onUpdate:modelValue": ($event) => newReportMaster.value.penaltyCost = $event,
                                      placeholder: "\u0428\u0442\u0440\u0430\u0444",
                                      type: "number",
                                      class: hasInitialData.value ? "bg-neutral-800 text-neutral-300 placeholder:text-neutral-600 border-neutral-500/20" : ""
                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "class"])
                                  ])) : createCommentVNode("", true),
                                  createVNode("div", { class: "relative" }, [
                                    createVNode(_component_UiTextarea, {
                                      modelValue: newReportMaster.value.comment,
                                      "onUpdate:modelValue": ($event) => newReportMaster.value.comment = $event,
                                      placeholder: "\u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439",
                                      class: hasInitialData.value ? "bg-neutral-800 text-neutral-300 placeholder:text-neutral-600 border-neutral-500/20" : ""
                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "class"]),
                                    newReportMaster.value.comment ? (openBlock(), createBlock(_component_UiLabel, {
                                      key: 0,
                                      class: [
                                        "font-medium absolute left-2 top-[-13px] rounded-md p-1 whitespace-nowrap",
                                        hasInitialData.value ? "text-neutral-400 bg-neutral-800" : "text-slate-400 bg-white"
                                      ]
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" \u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439 ")
                                      ]),
                                      _: 1
                                    }, 8, ["class"])) : createCommentVNode("", true)
                                  ])
                                ]),
                                createVNode("div", {
                                  class: [
                                    "flex flex-col gap-1 border-t pt-2",
                                    hasInitialData.value ? "border-neutral-500/20 text-neutral-300" : ""
                                  ]
                                }, [
                                  ((_d = newReportMaster.value.lightingCost) != null ? _d : 0) > 0 ? (openBlock(), createBlock("span", { key: 0 }, " \u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C \u043E\u0441\u043D\u043E\u0432\u043D\u043E\u0439 \u0440\u0430\u0431\u043E\u0442\u044B: " + toDisplayString(newReportMaster.value.cost) + "\u0440. ", 1)) : createCommentVNode("", true),
                                  ((_e = newReportMaster.value.lightingCost) != null ? _e : 0) > 0 ? (openBlock(), createBlock("span", { key: 1 }, " \u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C \u043F\u043E\u0434\u0441\u0432\u0435\u0442\u043A\u0438: " + toDisplayString(newReportMaster.value.lightingCost) + "\u0440. ", 1)) : createCommentVNode("", true),
                                  createVNode("span", { class: "font-semibold text-lg" }, " \u041E\u0431\u0449\u0430\u044F \u0441\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C: " + toDisplayString(totalCost.value) + "\u0440. ", 1)
                                ], 2)
                              ]),
                              createVNode("div", { class: "flex justify-end w-full" }, [
                                createVNode(_component_UiButton, {
                                  disabled: disabled.value,
                                  class: hasInitialData.value ? "bg-neutral-600 text-neutral-300 hover:bg-neutral-600/50" : "",
                                  onClick: createMasterReport
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(props.initialData ? "\u0412\u044B\u043F\u043E\u043B\u043D\u0438\u0442\u044C" : "\u0421\u043E\u0437\u0434\u0430\u0442\u044C"), 1)
                                  ]),
                                  _: 1
                                }, 8, ["disabled", "class"])
                              ])
                            ];
                          }),
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
                                  min: (/* @__PURE__ */ new Date()).toISOString().slice(0, 10),
                                  placeholder: "\u0414\u0430\u0442\u0430 \u0441\u043C\u0435\u043D\u044B",
                                  class: [
                                    "h-8",
                                    newRepairReport.value.date ? "" : "outline-1 outline-rose-300"
                                  ]
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "min", "class"])
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
                                  class: [
                                    "h-8",
                                    newRepairReport.value.name ? "" : "outline-1 outline-rose-300"
                                  ]
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
                              createVNode("span", null, " \u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C: " + toDisplayString(newRepairReport.value.cost.toFixed(2)) + "\u0440. ", 1)
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
                                  min: (/* @__PURE__ */ new Date()).toISOString().slice(0, 10),
                                  type: "date",
                                  placeholder: "\u0414\u0430\u0442\u0430",
                                  class: [
                                    "h-8",
                                    newOtherReport.value.date ? "" : "outline-1 outline-rose-300"
                                  ]
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "min", "class"])
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
                                  class: [
                                    "h-8",
                                    newOtherReport.value.name ? "" : "outline-1 outline-rose-300"
                                  ]
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
                                  class: [
                                    "h-8",
                                    newOtherReport.value.cost ? "" : "outline-1 outline-rose-300"
                                  ]
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "class"])
                              ]),
                              createVNode("div", { class: "relative" }, [
                                createVNode(_component_UiTextarea, {
                                  modelValue: newOtherReport.value.comment,
                                  "onUpdate:modelValue": ($event) => newOtherReport.value.comment = $event,
                                  placeholder: "\u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                newReportMaster.value.comment ? (openBlock(), createBlock(_component_UiLabel, {
                                  key: 0,
                                  class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" \u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439 ")
                                  ]),
                                  _: 1
                                })) : createCommentVNode("", true)
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
              }, 8, ["class"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/my/production/CreateMasterReport.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=CreateMasterReport-BFuRSfoh.mjs.map
