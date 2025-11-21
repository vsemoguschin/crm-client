import { _ as _sfc_main$6$1, a as _sfc_main$4$1, b as _sfc_main$5$1, c as _sfc_main$3$1, d as _sfc_main$2$1 } from './SelectScrollDownButton-JzJI8BsA.mjs';
import { _ as _sfc_main$f } from './Separator-DmvFl46f.mjs';
import { _ as _sfc_main$g } from './AccountsCreateModal-ChJD2iFr.mjs';
import { _ as _sfc_main$h } from './index-B6vrBiru.mjs';
import { _ as _sfc_main$i } from './Card-D2-UPrX8.mjs';
import { _ as _sfc_main$1$1, a as _sfc_main$j } from './CardTitle-Dyaq6zaM.mjs';
import { _ as _sfc_main$k } from './CardContent-5uJgHkPl.mjs';
import { _ as _sfc_main$p } from './CardFooter-BUlih3MF.mjs';
import { _ as _sfc_main$2$2, a as _sfc_main$l, b as _sfc_main$1$2 } from './TabsList-C3eBcFGa.mjs';
import { _ as _sfc_main$m } from './TabsContent-9LTM_IKf.mjs';
import { _ as _sfc_main$n } from './Input-DoHPrX2-.mjs';
import { _ as _sfc_main$o, a as _sfc_main$1$8 } from './ScrollArea-Kzo2fjeX.mjs';
import { _ as _sfc_main$4$2, b as _sfc_main$q, c as _sfc_main$2$3, d as _sfc_main$1$3, a as _sfc_main$3$2 } from './DialogContent-BsO2ljLB.mjs';
import { _ as _sfc_main$r } from './DialogDescription-D5yt23q9.mjs';
import { _ as _sfc_main$s } from './Label-Bxzolydd.mjs';
import { _ as _sfc_main$t } from './Textarea-oqH4YeW4.mjs';
import { _ as _sfc_main$u } from './ComboboxModels-D84YuqHH.mjs';
import { defineComponent, ref, computed, watch, mergeProps, unref, isRef, withCtx, createVNode, createTextVNode, toDisplayString, createBlock, openBlock, Fragment, renderList, createCommentVNode, h, nextTick, withKeys, withModifiers, reactive, provide, renderSlot, inject, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderClass, ssrRenderSlot, ssrRenderStyle } from 'vue/server-renderer';
import { u as useHead, t as toast, b as useNuxtApp, c as useToast } from './server.mjs';
import { _ as _sfc_main$D } from './SelectGroup-BKLQULEA.mjs';
import { _ as _sfc_main$2$4, a as _sfc_main$1$4, b as _sfc_main$w } from './PopoverContent-Dy99cMmu.mjs';
import { _ as _sfc_main$5$2, a as _sfc_main$2$5, b as _sfc_main$x, c as _sfc_main$4$3, d as _sfc_main$3$3, e as _sfc_main$1$5 } from './CommandList-DiM7UR93.mjs';
import { _ as _sfc_main$y } from './CommandSeparator-Ck23HbWz.mjs';
import { List, Loader2, X, CirclePlus, Check, ChevronDown, Plus, Minus, MoreVertical } from 'lucide-vue-next';
import { _ as _sfc_main$v } from './index-DiSSjj1M.mjs';
import { _ as _sfc_main$4$4, a as _sfc_main$1$6, b as _sfc_main$2$6, c as _sfc_main$z, d as _sfc_main$3$4 } from './index-gpRkqh0i.mjs';
import { useForwardPropsEmits, ToggleGroupRoot, useForwardProps, ToggleGroupItem } from 'radix-vue';
import { v as valueUpdater, c as cn } from './utils-TCWotVPY.mjs';
import { cva } from 'class-variance-authority';
import { _ as _sfc_main$5$3, a as _sfc_main$A, b as _sfc_main$2$7, c as _sfc_main$1$7, d as _sfc_main$4$5, e as _sfc_main$3$5 } from './TableHeader-CsCuT7pu.mjs';
import { useVueTable, getFilteredRowModel, getSortedRowModel, getCoreRowModel, FlexRender } from '@tanstack/vue-table';
import { _ as _sfc_main$B } from './Switch-BsBEqAPz.mjs';
import { _ as _sfc_main$C } from './DialogFooter-CQpXS8R1.mjs';
import { _ as _sfc_main$2$8, a as _sfc_main$E, b as _sfc_main$1$a } from './CollapsibleTrigger-CpqLm9eE.mjs';
import { _ as _sfc_main$3$6, a as _sfc_main$2$9, b as _sfc_main$1$9, c as _sfc_main$F } from './DropdownMenuItem-Bzav__sm.mjs';
import { Q as Qn } from './vue-datepicker-OP97sJr3.mjs';
import { useDebounceFn } from '@vueuse/core';
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
import 'pinia';
import 'vue-router';
import '@iconify/vue';
import 'axios';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'unhead/plugins';
import 'reka-ui';
import 'clsx';
import 'tailwind-merge';
import 'date-fns';

const _sfc_main$e = /* @__PURE__ */ defineComponent({
  __name: "CreateModal",
  __ssrInlineRender: true,
  props: {
    type: {},
    expenseCategories: {},
    parent: {},
    isOpen: { type: Boolean },
    category: {}
  },
  emits: ["category-created", "category-updated", "update:isOpen", "error"],
  setup(__props, { emit: __emit }) {
    var _a, _b, _c, _d, _e, _f, _g;
    const { $useApi } = useNuxtApp();
    const { toast: toast2 } = useToast();
    const props = __props;
    const emit = __emit;
    const isEditMode = computed(() => !!props.category);
    const internalIsOpen = ref(props.isOpen || false);
    const isOpen = computed({
      get: () => props.isOpen !== void 0 ? props.isOpen : internalIsOpen.value,
      set: (value) => {
        if (props.isOpen !== void 0) {
          emit("update:isOpen", value);
        } else {
          internalIsOpen.value = value;
        }
      }
    });
    const localExpenseCategories = ref([]);
    const categoryType = ref(props.type || "\u0414\u043E\u0445\u043E\u0434\u044B");
    const disabled = ref(true);
    const parentLabel = computed(() => {
      if (categoryFormData.value.parentId === null || categoryFormData.value.parentId === void 0) {
        if (props.expenseCategories && props.expenseCategories.length > 0) {
          return "\u041D\u0435 \u043F\u0440\u0438\u043D\u0430\u0434\u043B\u0435\u0436\u0438\u0442";
        }
        return "\u041D\u0435 \u043F\u0440\u0438\u043D\u0430\u0434\u043B\u0435\u0436\u0438\u0442";
      }
      const found = localExpenseCategories.value.find(
        (c) => c.id === categoryFormData.value.parentId
      );
      if (found) return found.name;
      if (props.parent) return props.parent.name;
      return "\u041D\u0435 \u043F\u0440\u0438\u043D\u0430\u0434\u043B\u0435\u0436\u0438\u0442";
    });
    const categoryFormData = ref({
      name: ((_a = props.category) == null ? void 0 : _a.name) || "",
      type: ((_b = props.category) == null ? void 0 : _b.type) || props.type || "\u0414\u043E\u0445\u043E\u0434\u044B",
      description: ((_c = props.category) == null ? void 0 : _c.description) || "",
      parentId: (_g = (_f = (_d = props.category) == null ? void 0 : _d.parentId) != null ? _f : (_e = props.parent) == null ? void 0 : _e.id) != null ? _g : null
    });
    const fetchExpenseCategories = async (type) => {
      if (props.expenseCategories && props.expenseCategories.length > 0) {
        let categories = props.expenseCategories.map((cat) => ({
          id: cat.id,
          name: cat.name,
          type,
          createdAt: "",
          updatedAt: ""
        }));
        if (isEditMode.value && props.category) {
          categories = categories.filter((cat) => cat.id !== props.category.id);
        }
        localExpenseCategories.value = categories;
        return;
      }
      try {
        const { data } = await $useApi.get(
          "planfact/expense-categories-by-type",
          {
            params: { type }
          }
        );
        let categories = data;
        if (isEditMode.value && props.category) {
          categories = categories.filter(
            (cat) => cat.id !== props.category.id
          );
        }
        localExpenseCategories.value = categories;
      } catch (error) {
        console.error(error);
        toast2({
          variant: "destructive",
          title: "\u041E\u0448\u0438\u0431\u043A\u0430",
          description: "\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u0438."
        });
      }
    };
    const saveExpenseCategory = async () => {
      var _a2;
      try {
        disabled.value = true;
        let data;
        if (isEditMode.value && props.category) {
          const updateData = {
            name: categoryFormData.value.name,
            description: categoryFormData.value.description,
            parentId: categoryFormData.value.parentId === null || categoryFormData.value.parentId === void 0 ? null : categoryFormData.value.parentId
          };
          const { data: updatedData } = await $useApi.patch(
            `planfact/expense-categories/${props.category.id}`,
            updateData
          );
          data = updatedData;
          toast2({
            title: "\u0423\u0441\u043F\u0435\u0445",
            description: "\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u0430."
          });
          emit("category-updated", data);
        } else {
          const { data: createdData } = await $useApi.post(
            "planfact/expense-categories",
            categoryFormData.value
          );
          data = createdData;
          toast2({
            title: "\u0423\u0441\u043F\u0435\u0445",
            description: "\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u0441\u043E\u0437\u0434\u0430\u043D\u0430."
          });
          emit("category-created", data);
        }
        isOpen.value = false;
        disabled.value = false;
        if (!isEditMode.value) {
          categoryFormData.value = {
            name: "",
            type: props.type || "\u0414\u043E\u0445\u043E\u0434\u044B",
            description: "",
            parentId: ((_a2 = props.parent) == null ? void 0 : _a2.id) || null
          };
        }
      } catch (error) {
        console.error(error);
        disabled.value = false;
        toast2({
          variant: "destructive",
          title: "\u041E\u0448\u0438\u0431\u043A\u0430",
          description: isEditMode.value ? "\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u043E\u0431\u043D\u043E\u0432\u0438\u0442\u044C \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044E." : "\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0441\u043E\u0437\u0434\u0430\u0442\u044C \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044E."
        });
        emit("error");
      }
    };
    watch(
      () => [props.type, props.parent, props.category],
      () => {
        var _a2;
        if (props.category) {
          categoryFormData.value = {
            name: props.category.name,
            type: props.category.type,
            description: props.category.description || "",
            parentId: (_a2 = props.category.parentId) != null ? _a2 : null
          };
          categoryType.value = props.category.type;
        } else {
          if (props.type) {
            categoryFormData.value.type = props.type;
            categoryType.value = props.type;
          }
          if (props.parent) {
            categoryFormData.value.parentId = props.parent.id;
          }
        }
      },
      { immediate: true }
    );
    watch(
      () => props.expenseCategories,
      async (newCategories) => {
        if (isOpen.value) {
          if (newCategories && newCategories.length > 0) {
            await fetchExpenseCategories(categoryType.value);
          } else if (!props.expenseCategories) {
            await fetchExpenseCategories(categoryType.value);
          }
        }
      },
      { immediate: true, deep: true }
    );
    watch(isOpen, async (value) => {
      var _a2;
      if (value) {
        if (props.type) {
          categoryFormData.value.type = props.type;
          categoryType.value = props.type;
        }
        if (!props.expenseCategories || props.expenseCategories.length === 0) {
          await fetchExpenseCategories(categoryType.value);
        } else {
          await fetchExpenseCategories(categoryType.value);
        }
        if (props.parent) {
          categoryFormData.value.parentId = props.parent.id;
        }
      } else {
        categoryFormData.value = {
          name: "",
          type: props.type || "\u0414\u043E\u0445\u043E\u0434\u044B",
          description: "",
          parentId: ((_a2 = props.parent) == null ? void 0 : _a2.id) || null
        };
      }
    });
    watch(
      categoryType,
      async (value) => {
        categoryFormData.value.type = value;
        await fetchExpenseCategories(value);
      },
      { deep: true }
    );
    watch(
      categoryFormData,
      (value) => {
        console.log(value);
        const { name, type } = value;
        if (name && type) return disabled.value = false;
        disabled.value = true;
      },
      { deep: true }
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiDialog = _sfc_main$4$2;
      const _component_UiDialogTrigger = _sfc_main$3$2;
      const _component_UiButton = _sfc_main$h;
      const _component_UiDialogContent = _sfc_main$q;
      const _component_UiDialogHeader = _sfc_main$2$3;
      const _component_UiDialogTitle = _sfc_main$1$3;
      const _component_UiDialogDescription = _sfc_main$r;
      const _component_UiTabs = _sfc_main$2$2;
      const _component_UiTabsList = _sfc_main$l;
      const _component_UiTabsTrigger = _sfc_main$1$2;
      const _component_UiLabel = _sfc_main$s;
      const _component_MyComboboxModels = _sfc_main$u;
      const _component_UiInput = _sfc_main$n;
      const _component_UiTextarea = _sfc_main$t;
      _push(ssrRenderComponent(_component_UiDialog, mergeProps({
        open: unref(isOpen),
        "onUpdate:open": ($event) => isRef(isOpen) ? isOpen.value = $event : null
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (props.isOpen === void 0) {
              _push2(ssrRenderComponent(_component_UiDialogTrigger, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UiButton, { variant: "secondary" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u0441\u0442\u0430\u0442\u044C\u044E`);
                        } else {
                          return [
                            createTextVNode("\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u0441\u0442\u0430\u0442\u044C\u044E")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_UiButton, { variant: "secondary" }, {
                        default: withCtx(() => [
                          createTextVNode("\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u0441\u0442\u0430\u0442\u044C\u044E")
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(ssrRenderComponent(_component_UiDialogContent, { class: "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                var _a2, _b2;
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UiDialogHeader, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UiDialogTitle, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`${ssrInterpolate(unref(isEditMode) ? "\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u0441\u0442\u0430\u0442\u044C\u0438" : "\u0421\u043E\u0437\u0434\u0430\u043D\u0438\u0435 \u0441\u0442\u0430\u0442\u044C\u0438")}`);
                            } else {
                              return [
                                createTextVNode(toDisplayString(unref(isEditMode) ? "\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u0441\u0442\u0430\u0442\u044C\u0438" : "\u0421\u043E\u0437\u0434\u0430\u043D\u0438\u0435 \u0441\u0442\u0430\u0442\u044C\u0438"), 1)
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
                              createTextVNode(toDisplayString(unref(isEditMode) ? "\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u0441\u0442\u0430\u0442\u044C\u0438" : "\u0421\u043E\u0437\u0434\u0430\u043D\u0438\u0435 \u0441\u0442\u0430\u0442\u044C\u0438"), 1)
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UiDialogDescription)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<div class="space-y-5"${_scopeId2}><div class="relative w-full"${_scopeId2}>`);
                  if (unref(isEditMode) && props.category) {
                    _push3(`<div class="text-sm font-medium text-slate-700"${_scopeId2}> \u0422\u0438\u043F: ${ssrInterpolate(props.category.type)}</div>`);
                  } else if (props.type) {
                    _push3(`<div class="text-sm font-medium text-slate-700"${_scopeId2}> \u0421\u0442\u0430\u0442\u044C\u044F \u0434\u043B\u044F ${ssrInterpolate(props.type)}${ssrInterpolate(props.parent ? "/" + ((_a2 = props.parent) == null ? void 0 : _a2.name) : "")}</div>`);
                  } else {
                    _push3(ssrRenderComponent(_component_UiTabs, {
                      modelValue: unref(categoryType),
                      "onUpdate:modelValue": ($event) => isRef(categoryType) ? categoryType.value = $event : null
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_UiTabsList, { class: "w-full" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_UiTabsTrigger, {
                                  class: "w-full",
                                  value: "\u0420\u0430\u0441\u0445\u043E\u0434\u044B"
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`\u0420\u0430\u0441\u0445\u043E\u0434\u044B`);
                                    } else {
                                      return [
                                        createTextVNode("\u0420\u0430\u0441\u0445\u043E\u0434\u044B")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                                _push5(ssrRenderComponent(_component_UiTabsTrigger, {
                                  class: "w-full",
                                  value: "\u0414\u043E\u0445\u043E\u0434\u044B"
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`\u0414\u043E\u0445\u043E\u0434\u044B`);
                                    } else {
                                      return [
                                        createTextVNode("\u0414\u043E\u0445\u043E\u0434\u044B")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                                _push5(ssrRenderComponent(_component_UiTabsTrigger, {
                                  class: "w-full",
                                  value: "\u041E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u0430"
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`\u041E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u0430`);
                                    } else {
                                      return [
                                        createTextVNode("\u041E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u0430")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                                _push5(ssrRenderComponent(_component_UiTabsTrigger, {
                                  class: "w-full",
                                  value: "\u041A\u0430\u043F\u0438\u0442\u0430\u043B"
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`\u041A\u0430\u043F\u0438\u0442\u0430\u043B`);
                                    } else {
                                      return [
                                        createTextVNode("\u041A\u0430\u043F\u0438\u0442\u0430\u043B")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                                _push5(ssrRenderComponent(_component_UiTabsTrigger, {
                                  class: "w-full",
                                  value: "\u0410\u043A\u0442\u0438\u0432\u044B"
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`\u0410\u043A\u0442\u0438\u0432\u044B`);
                                    } else {
                                      return [
                                        createTextVNode("\u0410\u043A\u0442\u0438\u0432\u044B")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(_component_UiTabsTrigger, {
                                    class: "w-full",
                                    value: "\u0420\u0430\u0441\u0445\u043E\u0434\u044B"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("\u0420\u0430\u0441\u0445\u043E\u0434\u044B")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_UiTabsTrigger, {
                                    class: "w-full",
                                    value: "\u0414\u043E\u0445\u043E\u0434\u044B"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("\u0414\u043E\u0445\u043E\u0434\u044B")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_UiTabsTrigger, {
                                    class: "w-full",
                                    value: "\u041E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u0430"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("\u041E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u0430")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_UiTabsTrigger, {
                                    class: "w-full",
                                    value: "\u041A\u0430\u043F\u0438\u0442\u0430\u043B"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("\u041A\u0430\u043F\u0438\u0442\u0430\u043B")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_UiTabsTrigger, {
                                    class: "w-full",
                                    value: "\u0410\u043A\u0442\u0438\u0432\u044B"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("\u0410\u043A\u0442\u0438\u0432\u044B")
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
                            createVNode(_component_UiTabsList, { class: "w-full" }, {
                              default: withCtx(() => [
                                createVNode(_component_UiTabsTrigger, {
                                  class: "w-full",
                                  value: "\u0420\u0430\u0441\u0445\u043E\u0434\u044B"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("\u0420\u0430\u0441\u0445\u043E\u0434\u044B")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_UiTabsTrigger, {
                                  class: "w-full",
                                  value: "\u0414\u043E\u0445\u043E\u0434\u044B"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("\u0414\u043E\u0445\u043E\u0434\u044B")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_UiTabsTrigger, {
                                  class: "w-full",
                                  value: "\u041E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u0430"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("\u041E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u0430")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_UiTabsTrigger, {
                                  class: "w-full",
                                  value: "\u041A\u0430\u043F\u0438\u0442\u0430\u043B"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("\u041A\u0430\u043F\u0438\u0442\u0430\u043B")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_UiTabsTrigger, {
                                  class: "w-full",
                                  value: "\u0410\u043A\u0442\u0438\u0432\u044B"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("\u0410\u043A\u0442\u0438\u0432\u044B")
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
                  }
                  _push3(`</div>`);
                  if (props.type || unref(isEditMode) || props.expenseCategories && props.expenseCategories.length > 0) {
                    _push3(`<div class="relative"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(` \u041F\u0440\u0438\u043D\u0430\u0434\u043B\u0435\u0436\u0438\u0442 \u043A `);
                        } else {
                          return [
                            createTextVNode(" \u041F\u0440\u0438\u043D\u0430\u0434\u043B\u0435\u0436\u0438\u0442 \u043A ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(`<div class="flex gap-2 items-center"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_MyComboboxModels, {
                      key: unref(localExpenseCategories).length,
                      class: "min-w-[462px] w-[462px] overflow-hidden",
                      items: [
                        ...props.expenseCategories && props.expenseCategories.length > 0 ? [{ value: -1, label: "\u041D\u0435 \u043F\u0440\u0438\u043D\u0430\u0434\u043B\u0435\u0436\u0438\u0442" }] : [],
                        ...unref(localExpenseCategories).map((c) => ({
                          value: c.id,
                          label: c.name
                        }))
                      ],
                      label: unref(parentLabel),
                      "model-value": unref(categoryFormData).parentId,
                      onSelectedItem: (value) => {
                        unref(categoryFormData).parentId = value === -1 ? null : value || null;
                      }
                    }, null, _parent3, _scopeId2));
                    _push3(`</div></div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`<div class="relative"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UiInput, {
                    modelValue: unref(categoryFormData).name,
                    "onUpdate:modelValue": ($event) => unref(categoryFormData).name = $event,
                    placeholder: "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u0438",
                    class: unref(categoryFormData).name ? "" : "outline-1 outline-rose-300"
                  }, null, _parent3, _scopeId2));
                  if (unref(categoryFormData).name) {
                    _push3(ssrRenderComponent(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(` \u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u0438 `);
                        } else {
                          return [
                            createTextVNode(" \u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u0438 ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`</div><div class="relative"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UiTextarea, {
                    modelValue: unref(categoryFormData).description,
                    "onUpdate:modelValue": ($event) => unref(categoryFormData).description = $event,
                    placeholder: "\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435"
                  }, null, _parent3, _scopeId2));
                  if (unref(categoryFormData).description) {
                    _push3(ssrRenderComponent(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(` \u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435 `);
                        } else {
                          return [
                            createTextVNode(" \u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435 ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`</div></div><div class="flex justify-end gap-2 mt-4"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UiButton, {
                    variant: "outline",
                    onClick: ($event) => isOpen.value = false
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`\u041E\u0442\u043C\u0435\u043D\u0430`);
                      } else {
                        return [
                          createTextVNode("\u041E\u0442\u043C\u0435\u043D\u0430")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UiButton, {
                    disabled: unref(disabled),
                    onClick: saveExpenseCategory
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`${ssrInterpolate(unref(isEditMode) ? "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C" : "\u0421\u043E\u0437\u0434\u0430\u0442\u044C")}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(unref(isEditMode) ? "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C" : "\u0421\u043E\u0437\u0434\u0430\u0442\u044C"), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode(_component_UiDialogHeader, null, {
                      default: withCtx(() => [
                        createVNode(_component_UiDialogTitle, null, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(unref(isEditMode) ? "\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u0441\u0442\u0430\u0442\u044C\u0438" : "\u0421\u043E\u0437\u0434\u0430\u043D\u0438\u0435 \u0441\u0442\u0430\u0442\u044C\u0438"), 1)
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UiDialogDescription)
                      ]),
                      _: 1
                    }),
                    createVNode("div", { class: "space-y-5" }, [
                      createVNode("div", { class: "relative w-full" }, [
                        unref(isEditMode) && props.category ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: "text-sm font-medium text-slate-700"
                        }, " \u0422\u0438\u043F: " + toDisplayString(props.category.type), 1)) : props.type ? (openBlock(), createBlock("div", {
                          key: 1,
                          class: "text-sm font-medium text-slate-700"
                        }, " \u0421\u0442\u0430\u0442\u044C\u044F \u0434\u043B\u044F " + toDisplayString(props.type) + toDisplayString(props.parent ? "/" + ((_b2 = props.parent) == null ? void 0 : _b2.name) : ""), 1)) : (openBlock(), createBlock(_component_UiTabs, {
                          key: 2,
                          modelValue: unref(categoryType),
                          "onUpdate:modelValue": ($event) => isRef(categoryType) ? categoryType.value = $event : null
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_UiTabsList, { class: "w-full" }, {
                              default: withCtx(() => [
                                createVNode(_component_UiTabsTrigger, {
                                  class: "w-full",
                                  value: "\u0420\u0430\u0441\u0445\u043E\u0434\u044B"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("\u0420\u0430\u0441\u0445\u043E\u0434\u044B")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_UiTabsTrigger, {
                                  class: "w-full",
                                  value: "\u0414\u043E\u0445\u043E\u0434\u044B"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("\u0414\u043E\u0445\u043E\u0434\u044B")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_UiTabsTrigger, {
                                  class: "w-full",
                                  value: "\u041E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u0430"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("\u041E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u0430")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_UiTabsTrigger, {
                                  class: "w-full",
                                  value: "\u041A\u0430\u043F\u0438\u0442\u0430\u043B"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("\u041A\u0430\u043F\u0438\u0442\u0430\u043B")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_UiTabsTrigger, {
                                  class: "w-full",
                                  value: "\u0410\u043A\u0442\u0438\u0432\u044B"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("\u0410\u043A\u0442\u0438\u0432\u044B")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }, 8, ["modelValue", "onUpdate:modelValue"]))
                      ]),
                      props.type || unref(isEditMode) || props.expenseCategories && props.expenseCategories.length > 0 ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: "relative"
                      }, [
                        createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                          default: withCtx(() => [
                            createTextVNode(" \u041F\u0440\u0438\u043D\u0430\u0434\u043B\u0435\u0436\u0438\u0442 \u043A ")
                          ]),
                          _: 1
                        }),
                        createVNode("div", { class: "flex gap-2 items-center" }, [
                          (openBlock(), createBlock(_component_MyComboboxModels, {
                            key: unref(localExpenseCategories).length,
                            class: "min-w-[462px] w-[462px] overflow-hidden",
                            items: [
                              ...props.expenseCategories && props.expenseCategories.length > 0 ? [{ value: -1, label: "\u041D\u0435 \u043F\u0440\u0438\u043D\u0430\u0434\u043B\u0435\u0436\u0438\u0442" }] : [],
                              ...unref(localExpenseCategories).map((c) => ({
                                value: c.id,
                                label: c.name
                              }))
                            ],
                            label: unref(parentLabel),
                            "model-value": unref(categoryFormData).parentId,
                            onSelectedItem: (value) => {
                              unref(categoryFormData).parentId = value === -1 ? null : value || null;
                            }
                          }, null, 8, ["items", "label", "model-value", "onSelectedItem"]))
                        ])
                      ])) : createCommentVNode("", true),
                      createVNode("div", { class: "relative" }, [
                        createVNode(_component_UiInput, {
                          modelValue: unref(categoryFormData).name,
                          "onUpdate:modelValue": ($event) => unref(categoryFormData).name = $event,
                          placeholder: "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u0438",
                          class: unref(categoryFormData).name ? "" : "outline-1 outline-rose-300"
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "class"]),
                        unref(categoryFormData).name ? (openBlock(), createBlock(_component_UiLabel, {
                          key: 0,
                          class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" \u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u0438 ")
                          ]),
                          _: 1
                        })) : createCommentVNode("", true)
                      ]),
                      createVNode("div", { class: "relative" }, [
                        createVNode(_component_UiTextarea, {
                          modelValue: unref(categoryFormData).description,
                          "onUpdate:modelValue": ($event) => unref(categoryFormData).description = $event,
                          placeholder: "\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                        unref(categoryFormData).description ? (openBlock(), createBlock(_component_UiLabel, {
                          key: 0,
                          class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" \u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435 ")
                          ]),
                          _: 1
                        })) : createCommentVNode("", true)
                      ])
                    ]),
                    createVNode("div", { class: "flex justify-end gap-2 mt-4" }, [
                      createVNode(_component_UiButton, {
                        variant: "outline",
                        onClick: ($event) => isOpen.value = false
                      }, {
                        default: withCtx(() => [
                          createTextVNode("\u041E\u0442\u043C\u0435\u043D\u0430")
                        ]),
                        _: 1
                      }, 8, ["onClick"]),
                      createVNode(_component_UiButton, {
                        disabled: unref(disabled),
                        onClick: saveExpenseCategory
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(unref(isEditMode) ? "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C" : "\u0421\u043E\u0437\u0434\u0430\u0442\u044C"), 1)
                        ]),
                        _: 1
                      }, 8, ["disabled"])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              props.isOpen === void 0 ? (openBlock(), createBlock(_component_UiDialogTrigger, { key: 0 }, {
                default: withCtx(() => [
                  createVNode(_component_UiButton, { variant: "secondary" }, {
                    default: withCtx(() => [
                      createTextVNode("\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u0441\u0442\u0430\u0442\u044C\u044E")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })) : createCommentVNode("", true),
              createVNode(_component_UiDialogContent, { class: "" }, {
                default: withCtx(() => {
                  var _a2;
                  return [
                    createVNode(_component_UiDialogHeader, null, {
                      default: withCtx(() => [
                        createVNode(_component_UiDialogTitle, null, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(unref(isEditMode) ? "\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u0441\u0442\u0430\u0442\u044C\u0438" : "\u0421\u043E\u0437\u0434\u0430\u043D\u0438\u0435 \u0441\u0442\u0430\u0442\u044C\u0438"), 1)
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UiDialogDescription)
                      ]),
                      _: 1
                    }),
                    createVNode("div", { class: "space-y-5" }, [
                      createVNode("div", { class: "relative w-full" }, [
                        unref(isEditMode) && props.category ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: "text-sm font-medium text-slate-700"
                        }, " \u0422\u0438\u043F: " + toDisplayString(props.category.type), 1)) : props.type ? (openBlock(), createBlock("div", {
                          key: 1,
                          class: "text-sm font-medium text-slate-700"
                        }, " \u0421\u0442\u0430\u0442\u044C\u044F \u0434\u043B\u044F " + toDisplayString(props.type) + toDisplayString(props.parent ? "/" + ((_a2 = props.parent) == null ? void 0 : _a2.name) : ""), 1)) : (openBlock(), createBlock(_component_UiTabs, {
                          key: 2,
                          modelValue: unref(categoryType),
                          "onUpdate:modelValue": ($event) => isRef(categoryType) ? categoryType.value = $event : null
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_UiTabsList, { class: "w-full" }, {
                              default: withCtx(() => [
                                createVNode(_component_UiTabsTrigger, {
                                  class: "w-full",
                                  value: "\u0420\u0430\u0441\u0445\u043E\u0434\u044B"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("\u0420\u0430\u0441\u0445\u043E\u0434\u044B")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_UiTabsTrigger, {
                                  class: "w-full",
                                  value: "\u0414\u043E\u0445\u043E\u0434\u044B"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("\u0414\u043E\u0445\u043E\u0434\u044B")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_UiTabsTrigger, {
                                  class: "w-full",
                                  value: "\u041E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u0430"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("\u041E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u0430")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_UiTabsTrigger, {
                                  class: "w-full",
                                  value: "\u041A\u0430\u043F\u0438\u0442\u0430\u043B"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("\u041A\u0430\u043F\u0438\u0442\u0430\u043B")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_UiTabsTrigger, {
                                  class: "w-full",
                                  value: "\u0410\u043A\u0442\u0438\u0432\u044B"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("\u0410\u043A\u0442\u0438\u0432\u044B")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }, 8, ["modelValue", "onUpdate:modelValue"]))
                      ]),
                      props.type || unref(isEditMode) || props.expenseCategories && props.expenseCategories.length > 0 ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: "relative"
                      }, [
                        createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                          default: withCtx(() => [
                            createTextVNode(" \u041F\u0440\u0438\u043D\u0430\u0434\u043B\u0435\u0436\u0438\u0442 \u043A ")
                          ]),
                          _: 1
                        }),
                        createVNode("div", { class: "flex gap-2 items-center" }, [
                          (openBlock(), createBlock(_component_MyComboboxModels, {
                            key: unref(localExpenseCategories).length,
                            class: "min-w-[462px] w-[462px] overflow-hidden",
                            items: [
                              ...props.expenseCategories && props.expenseCategories.length > 0 ? [{ value: -1, label: "\u041D\u0435 \u043F\u0440\u0438\u043D\u0430\u0434\u043B\u0435\u0436\u0438\u0442" }] : [],
                              ...unref(localExpenseCategories).map((c) => ({
                                value: c.id,
                                label: c.name
                              }))
                            ],
                            label: unref(parentLabel),
                            "model-value": unref(categoryFormData).parentId,
                            onSelectedItem: (value) => {
                              unref(categoryFormData).parentId = value === -1 ? null : value || null;
                            }
                          }, null, 8, ["items", "label", "model-value", "onSelectedItem"]))
                        ])
                      ])) : createCommentVNode("", true),
                      createVNode("div", { class: "relative" }, [
                        createVNode(_component_UiInput, {
                          modelValue: unref(categoryFormData).name,
                          "onUpdate:modelValue": ($event) => unref(categoryFormData).name = $event,
                          placeholder: "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u0438",
                          class: unref(categoryFormData).name ? "" : "outline-1 outline-rose-300"
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "class"]),
                        unref(categoryFormData).name ? (openBlock(), createBlock(_component_UiLabel, {
                          key: 0,
                          class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" \u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u0438 ")
                          ]),
                          _: 1
                        })) : createCommentVNode("", true)
                      ]),
                      createVNode("div", { class: "relative" }, [
                        createVNode(_component_UiTextarea, {
                          modelValue: unref(categoryFormData).description,
                          "onUpdate:modelValue": ($event) => unref(categoryFormData).description = $event,
                          placeholder: "\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                        unref(categoryFormData).description ? (openBlock(), createBlock(_component_UiLabel, {
                          key: 0,
                          class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" \u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435 ")
                          ]),
                          _: 1
                        })) : createCommentVNode("", true)
                      ])
                    ]),
                    createVNode("div", { class: "flex justify-end gap-2 mt-4" }, [
                      createVNode(_component_UiButton, {
                        variant: "outline",
                        onClick: ($event) => isOpen.value = false
                      }, {
                        default: withCtx(() => [
                          createTextVNode("\u041E\u0442\u043C\u0435\u043D\u0430")
                        ]),
                        _: 1
                      }, 8, ["onClick"]),
                      createVNode(_component_UiButton, {
                        disabled: unref(disabled),
                        onClick: saveExpenseCategory
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(unref(isEditMode) ? "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C" : "\u0421\u043E\u0437\u0434\u0430\u0442\u044C"), 1)
                        ]),
                        _: 1
                      }, 8, ["disabled"])
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
    };
  }
});
const _sfc_setup$e = _sfc_main$e.setup;
_sfc_main$e.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/my/planfact/Categories/CreateModal.vue");
  return _sfc_setup$e ? _sfc_setup$e(props, ctx) : void 0;
};
function usePlanfact() {
  const { $useApi } = useNuxtApp();
  const api = $useApi;
  const accounts = ref([]);
  const counterPartiesFilters = ref([]);
  const counterPartiesFiltersPagination = ref({
    page: 1,
    limit: 20,
    total: 0,
    totalPages: 1,
    hasNext: false,
    hasPrev: false
  });
  const counterPartiesFiltersSearchTerm = ref("");
  const expenseCategoriesFilters = ref([]);
  const operationsData = ref([]);
  const operationsTotals = ref({
    counterPartyTotals: [],
    expenseCategoryTotals: [],
    mainTotals: {}
  });
  const pagination = ref({
    page: 1,
    limit: 50,
    total: 0,
    totalPages: 1,
    hasNext: false,
    hasPrev: false
  });
  const loading = ref(false);
  const isLoadingMore = ref(false);
  const isLoadingOperations = ref(false);
  const isLoadingTotals = ref(false);
  const isLoadingCounterParties = ref(false);
  const getAccounts = async () => {
    try {
      const { data } = await api.get("planfact/accounts");
      accounts.value = data.map(
        (acc) => ({
          value: acc.id,
          label: acc.name,
          account: acc.account
        })
      );
    } catch (error) {
      console.error(error);
      toast({
        variant: "destructive",
        title: "\u041E\u0448\u0438\u0431\u043A\u0430",
        description: "\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u0441\u0447\u0435\u0442\u0430."
      });
    }
  };
  const getCounterPartiesFilters = async (reset = true, searchTerm) => {
    if (isLoadingCounterParties.value) {
      return;
    }
    isLoadingCounterParties.value = true;
    loading.value = true;
    try {
      const page = reset ? 1 : counterPartiesFiltersPagination.value.page + 1;
      const search = searchTerm !== void 0 ? searchTerm.trim() || void 0 : reset ? void 0 : counterPartiesFiltersSearchTerm.value.trim() || void 0;
      const { data } = await api.get("planfact/counter-parties-filters", {
        params: {
          page,
          limit: 20,
          ...search && { title: search }
        }
      });
      if (reset) {
        counterPartiesFilters.value = data.data;
        counterPartiesFiltersSearchTerm.value = search || "";
      } else {
        counterPartiesFilters.value = [
          ...counterPartiesFilters.value,
          ...data.data
        ];
      }
      counterPartiesFiltersPagination.value = data.pagination;
    } catch (error) {
      console.error(error);
      toast({
        variant: "destructive",
        title: "\u041E\u0448\u0438\u0431\u043A\u0430",
        description: "\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u043A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442\u043E\u0432."
      });
    } finally {
      loading.value = false;
      isLoadingCounterParties.value = false;
    }
  };
  const getOriginalOperationsTotals = async (from, to, accountId) => {
    try {
      const accId = accountId === "all" ? void 0 : accountId;
      const params = {
        from,
        to,
        accountId: accId
      };
      const { data } = await api.get("planfact/original-operations-totals", {
        params
      });
      operationsTotals.value = data;
    } catch (error) {
      console.error(error);
      toast({
        variant: "destructive",
        title: "\u041E\u0448\u0438\u0431\u043A\u0430",
        description: "\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u0442\u043E\u0442\u0430\u043B\u044B \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u0439."
      });
    }
  };
  const getOriginalOperations = async (params) => {
    const { reset = true, ...requestParams } = params;
    if (!reset) {
      isLoadingMore.value = true;
    }
    try {
      const accId = requestParams.accountId === "all" ? void 0 : requestParams.accountId;
      const apiParams = {
        from: requestParams.from,
        to: requestParams.to,
        page: requestParams.page,
        limit: requestParams.limit,
        accountId: accId,
        ...requestParams.distributionFilter && requestParams.distributionFilter !== "all" && {
          distributionFilter: requestParams.distributionFilter
        }
      };
      if (requestParams.counterPartyId && requestParams.counterPartyId.length > 0) {
        apiParams.counterPartyId = requestParams.counterPartyId.join(",");
      }
      if (requestParams.expenseCategoryId && requestParams.expenseCategoryId.length > 0) {
        apiParams.expenseCategoryId = requestParams.expenseCategoryId.join(",");
      }
      if (requestParams.typeOfOperation && requestParams.typeOfOperation !== "all") {
        apiParams.typeOfOperation = requestParams.typeOfOperation;
      }
      if (requestParams.searchText) {
        apiParams.searchText = requestParams.searchText;
      }
      const response = await api.get("/planfact/original-operations", {
        params: apiParams
      });
      const { operations, pagination: pag } = response.data;
      if (reset) {
        operationsData.value = operations;
      } else {
        operationsData.value = [...operationsData.value, ...operations];
      }
      pagination.value = pag;
    } catch (error) {
      console.error(error);
      toast({
        variant: "destructive",
        title: "\u041E\u0448\u0438\u0431\u043A\u0430",
        description: "\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u0438."
      });
    } finally {
      if (!reset) {
        isLoadingMore.value = false;
      }
    }
  };
  const getExpenseCategoriesMini = async (operationType) => {
    try {
      let type = "";
      if (operationType === "Debit") {
        type = "\u0420\u0430\u0441\u0445\u043E\u0434\u044B";
      } else if (operationType === "Credit") {
        type = "\u0414\u043E\u0445\u043E\u0434\u044B";
      }
      const params = type ? { type } : {};
      const { data } = await api.get("planfact/expense-categories-mini", {
        params
      });
      return data;
    } catch (error) {
      console.error(error);
      toast({
        variant: "destructive",
        title: "\u041E\u0448\u0438\u0431\u043A\u0430",
        description: "\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u0441\u0442\u0430\u0442\u044C\u0438 \u0440\u0430\u0441\u0445\u043E\u0434\u043E\u0432."
      });
      throw error;
    }
  };
  const updateOperationPositions = async (operationId, positions) => {
    var _a, _b, _c, _d;
    try {
      await api.patch(
        `planfact/original-operation/${operationId}/positions`,
        positions
      );
    } catch (error) {
      console.error(error);
      const apiError = error;
      const errorMessage = ((_b = (_a = apiError == null ? void 0 : apiError.response) == null ? void 0 : _a.data) == null ? void 0 : _b.message) || ((_d = (_c = apiError == null ? void 0 : apiError.response) == null ? void 0 : _c.data) == null ? void 0 : _d.detail) || (apiError == null ? void 0 : apiError.message) || "\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u043E\u0431\u043D\u043E\u0432\u0438\u0442\u044C \u043F\u043E\u0437\u0438\u0446\u0438\u0438 \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u0438.";
      toast({
        variant: "destructive",
        title: "\u041E\u0448\u0438\u0431\u043A\u0430",
        description: errorMessage
      });
      throw error;
    }
  };
  const deleteOperation = async (operationId) => {
    try {
      await api.delete(`planfact/operation/${operationId}`);
      toast({
        title: "\u0423\u0441\u043F\u0435\u0445",
        description: "\u041E\u043F\u0435\u0440\u0430\u0446\u0438\u044F \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u0443\u0434\u0430\u043B\u0435\u043D\u0430."
      });
    } catch (error) {
      console.error(error);
      toast({
        variant: "destructive",
        title: "\u041E\u0448\u0438\u0431\u043A\u0430",
        description: "\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0443\u0434\u0430\u043B\u0438\u0442\u044C \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u044E."
      });
      throw error;
    }
  };
  const removeCategoryFromPosition = async (positionId) => {
    var _a, _b, _c, _d;
    try {
      await api.patch(`planfact/position/${positionId}/remove-category`);
      toast({
        title: "\u0423\u0441\u043F\u0435\u0445",
        description: "\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F \u0443\u0434\u0430\u043B\u0435\u043D\u0430 \u0438\u0437 \u043F\u043E\u0437\u0438\u0446\u0438\u0438."
      });
    } catch (error) {
      console.error(error);
      const apiError = error;
      toast({
        variant: "destructive",
        title: "\u041E\u0448\u0438\u0431\u043A\u0430",
        description: ((_b = (_a = apiError.response) == null ? void 0 : _a.data) == null ? void 0 : _b.message) || ((_d = (_c = apiError.response) == null ? void 0 : _c.data) == null ? void 0 : _d.detail) || "\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0443\u0434\u0430\u043B\u0438\u0442\u044C \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044E."
      });
      throw error;
    }
  };
  const createCounterParty = async (data) => {
    var _a, _b, _c, _d;
    try {
      const { data: result } = await api.post("planfact/counter-parties", data);
      toast({
        title: "\u0423\u0441\u043F\u0435\u0445",
        description: "\u041A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442 \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u0441\u043E\u0437\u0434\u0430\u043D."
      });
      return result;
    } catch (error) {
      console.error(error);
      const apiError = error;
      toast({
        variant: "destructive",
        title: "\u041E\u0448\u0438\u0431\u043A\u0430",
        description: ((_b = (_a = apiError.response) == null ? void 0 : _a.data) == null ? void 0 : _b.message) || ((_d = (_c = apiError.response) == null ? void 0 : _c.data) == null ? void 0 : _d.detail) || "\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0441\u043E\u0437\u0434\u0430\u0442\u044C \u043A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442\u0430."
      });
      throw error;
    }
  };
  const createCounterPartyRule = async (data) => {
    var _a, _b, _c, _d;
    try {
      const { data: result } = await api.patch(
        "planfact/counter-parties/expense-categories",
        data
      );
      toast({
        title: "\u0423\u0441\u043F\u0435\u0445",
        description: `\u041F\u0440\u0430\u0432\u0438\u043B\u043E \u0441\u043E\u0437\u0434\u0430\u043D\u043E. \u041E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u043E \u043F\u043E\u0437\u0438\u0446\u0438\u0439: ${result.updatedPositionsCount}`
      });
      return result;
    } catch (error) {
      console.error(error);
      const apiError = error;
      toast({
        variant: "destructive",
        title: "\u041E\u0448\u0438\u0431\u043A\u0430",
        description: ((_b = (_a = apiError.response) == null ? void 0 : _a.data) == null ? void 0 : _b.message) || ((_d = (_c = apiError.response) == null ? void 0 : _c.data) == null ? void 0 : _d.detail) || "\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0441\u043E\u0437\u0434\u0430\u0442\u044C \u043F\u0440\u0430\u0432\u0438\u043B\u043E."
      });
      throw error;
    }
  };
  return {
    // Состояния данных
    accounts,
    counterPartiesFilters,
    counterPartiesFiltersPagination,
    counterPartiesFiltersSearchTerm,
    expenseCategoriesFilters,
    operationsData,
    operationsTotals,
    pagination,
    loading,
    isLoadingMore,
    isLoadingOperations,
    isLoadingTotals,
    isLoadingCounterParties,
    // Методы
    getAccounts,
    getCounterPartiesFilters,
    getOriginalOperationsTotals,
    getOriginalOperations,
    getExpenseCategoriesMini,
    updateOperationPositions,
    deleteOperation,
    removeCategoryFromPosition,
    createCounterParty,
    createCounterPartyRule
  };
}
const _sfc_main$d = /* @__PURE__ */ defineComponent({
  __name: "CreateModal",
  __ssrInlineRender: true,
  emits: ["counterparty-created"],
  setup(__props, { emit: __emit }) {
    const {
      getExpenseCategoriesMini,
      createCounterParty: createCounterPartyApi
    } = usePlanfact();
    const isOpen = ref(false);
    const incomeExpenseCategories = ref([]);
    const outcomeExpenseCategories = ref([]);
    const disabled = ref(true);
    const emit = __emit;
    const counterPartyFormData = ref({
      title: "",
      inn: "",
      kpp: "",
      account: "",
      bankBic: "",
      bankName: "",
      contrAgentGroup: "",
      incomeExpenseCategoryId: null,
      outcomeExpenseCategoryId: null
    });
    const fetchIncomeExpenseCategories = async () => {
      try {
        const data = await getExpenseCategoriesMini("Credit");
        incomeExpenseCategories.value = data;
      } catch (error) {
        console.error(error);
      }
    };
    const fetchOutcomeExpenseCategories = async () => {
      try {
        const data = await getExpenseCategoriesMini("Debit");
        outcomeExpenseCategories.value = data;
      } catch (error) {
        console.error(error);
      }
    };
    const createCounterParty = async () => {
      try {
        disabled.value = true;
        const data = await createCounterPartyApi({
          title: counterPartyFormData.value.title,
          inn: counterPartyFormData.value.inn || "",
          kpp: counterPartyFormData.value.kpp || "",
          account: counterPartyFormData.value.account || "",
          bankBic: counterPartyFormData.value.bankBic || "",
          bankName: counterPartyFormData.value.bankName || "",
          contrAgentGroup: counterPartyFormData.value.contrAgentGroup || "",
          incomeExpenseCategoryId: counterPartyFormData.value.incomeExpenseCategoryId || null,
          outcomeExpenseCategoryId: counterPartyFormData.value.outcomeExpenseCategoryId || null
        });
        emit("counterparty-created", data);
        isOpen.value = false;
        disabled.value = false;
        counterPartyFormData.value = {
          title: "",
          inn: "",
          kpp: "",
          account: "",
          bankBic: "",
          bankName: "",
          contrAgentGroup: "",
          incomeExpenseCategoryId: null,
          outcomeExpenseCategoryId: null
        };
      } catch (error) {
        console.error(error);
      } finally {
        disabled.value = false;
      }
    };
    watch(isOpen, async (value) => {
      if (value) {
        await fetchIncomeExpenseCategories();
        await fetchOutcomeExpenseCategories();
      } else {
        counterPartyFormData.value = {
          title: "",
          inn: "",
          kpp: "",
          account: "",
          bankBic: "",
          bankName: "",
          contrAgentGroup: "",
          incomeExpenseCategoryId: null,
          outcomeExpenseCategoryId: null
        };
      }
    });
    watch(
      counterPartyFormData,
      (value) => {
        const { title } = value;
        disabled.value = !title;
      },
      { deep: true }
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiDialog = _sfc_main$4$2;
      const _component_UiDialogTrigger = _sfc_main$3$2;
      const _component_UiButton = _sfc_main$h;
      const _component_UiDialogContent = _sfc_main$q;
      const _component_UiDialogHeader = _sfc_main$2$3;
      const _component_UiDialogTitle = _sfc_main$1$3;
      const _component_UiDialogDescription = _sfc_main$r;
      const _component_UiInput = _sfc_main$n;
      const _component_UiLabel = _sfc_main$s;
      const _component_UiSelect = _sfc_main$6$1;
      const _component_UiSelectTrigger = _sfc_main$4$1;
      const _component_UiSelectValue = _sfc_main$5$1;
      const _component_UiSelectContent = _sfc_main$3$1;
      const _component_UiSelectGroup = _sfc_main$D;
      const _component_UiSelectItem = _sfc_main$2$1;
      const _component_MyComboboxModels = _sfc_main$u;
      _push(ssrRenderComponent(_component_UiDialog, mergeProps({
        open: unref(isOpen),
        "onUpdate:open": ($event) => isRef(isOpen) ? isOpen.value = $event : null
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UiDialogTrigger, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UiButton, { variant: "secondary" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u043A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442\u0430`);
                      } else {
                        return [
                          createTextVNode("\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u043A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442\u0430")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UiButton, { variant: "secondary" }, {
                      default: withCtx(() => [
                        createTextVNode("\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u043A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442\u0430")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UiDialogContent, { class: "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                var _a, _b, _c, _d, _e, _f, _g, _h;
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UiDialogHeader, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UiDialogTitle, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`\u0421\u043E\u0437\u0434\u0430\u043D\u0438\u0435 \u043A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442\u0430`);
                            } else {
                              return [
                                createTextVNode("\u0421\u043E\u0437\u0434\u0430\u043D\u0438\u0435 \u043A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442\u0430")
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
                              createTextVNode("\u0421\u043E\u0437\u0434\u0430\u043D\u0438\u0435 \u043A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442\u0430")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UiDialogDescription)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<div class="space-y-5"${_scopeId2}><div class="relative"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UiInput, {
                    modelValue: unref(counterPartyFormData).title,
                    "onUpdate:modelValue": ($event) => unref(counterPartyFormData).title = $event,
                    placeholder: "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u043A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442\u0430",
                    class: unref(counterPartyFormData).title ? "" : "outline-1 outline-rose-300"
                  }, null, _parent3, _scopeId2));
                  if (unref(counterPartyFormData).title) {
                    _push3(ssrRenderComponent(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(` \u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u043A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442\u0430 `);
                        } else {
                          return [
                            createTextVNode(" \u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u043A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442\u0430 ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`</div><div class="relative w-full"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UiSelect, {
                    modelValue: unref(counterPartyFormData).contrAgentGroup,
                    "onUpdate:modelValue": ($event) => unref(counterPartyFormData).contrAgentGroup = $event
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UiSelectTrigger, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_UiSelectValue, { placeholder: "\u0413\u0440\u0443\u043F\u043F\u0430" }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_UiSelectValue, { placeholder: "\u0413\u0440\u0443\u043F\u043F\u0430" })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_UiSelectContent, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_UiSelectGroup, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_UiSelectItem, {
                                      class: "w-full",
                                      value: "\u0411\u0430\u043D\u043A\u0438"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`\u0411\u0430\u043D\u043A\u0438`);
                                        } else {
                                          return [
                                            createTextVNode("\u0411\u0430\u043D\u043A\u0438")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_UiSelectItem, {
                                      class: "w-full",
                                      value: "\u0413\u043E\u0441. \u043E\u0440\u0433\u0430\u043D\u044B"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`\u0413\u043E\u0441. \u043E\u0440\u0433\u0430\u043D\u044B`);
                                        } else {
                                          return [
                                            createTextVNode("\u0413\u043E\u0441. \u043E\u0440\u0433\u0430\u043D\u044B")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_UiSelectItem, {
                                      class: "w-full",
                                      value: "\u041A\u043B\u0438\u0435\u043D\u0442\u044B"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`\u041A\u043B\u0438\u0435\u043D\u0442\u044B`);
                                        } else {
                                          return [
                                            createTextVNode("\u041A\u043B\u0438\u0435\u043D\u0442\u044B")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_UiSelectItem, {
                                      class: "w-full",
                                      value: "\u041F\u043E\u0441\u0442\u0430\u0432\u0449\u0438\u043A\u0438"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`\u041F\u043E\u0441\u0442\u0430\u0432\u0449\u0438\u043A\u0438`);
                                        } else {
                                          return [
                                            createTextVNode("\u041F\u043E\u0441\u0442\u0430\u0432\u0449\u0438\u043A\u0438")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_UiSelectItem, {
                                      class: "w-full",
                                      value: "\u0421\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`\u0421\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438`);
                                        } else {
                                          return [
                                            createTextVNode("\u0421\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_UiSelectItem, {
                                        class: "w-full",
                                        value: "\u0411\u0430\u043D\u043A\u0438"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode("\u0411\u0430\u043D\u043A\u0438")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_UiSelectItem, {
                                        class: "w-full",
                                        value: "\u0413\u043E\u0441. \u043E\u0440\u0433\u0430\u043D\u044B"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode("\u0413\u043E\u0441. \u043E\u0440\u0433\u0430\u043D\u044B")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_UiSelectItem, {
                                        class: "w-full",
                                        value: "\u041A\u043B\u0438\u0435\u043D\u0442\u044B"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode("\u041A\u043B\u0438\u0435\u043D\u0442\u044B")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_UiSelectItem, {
                                        class: "w-full",
                                        value: "\u041F\u043E\u0441\u0442\u0430\u0432\u0449\u0438\u043A\u0438"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode("\u041F\u043E\u0441\u0442\u0430\u0432\u0449\u0438\u043A\u0438")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_UiSelectItem, {
                                        class: "w-full",
                                        value: "\u0421\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode("\u0421\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438")
                                        ]),
                                        _: 1
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_UiSelectGroup, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_UiSelectItem, {
                                      class: "w-full",
                                      value: "\u0411\u0430\u043D\u043A\u0438"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode("\u0411\u0430\u043D\u043A\u0438")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_UiSelectItem, {
                                      class: "w-full",
                                      value: "\u0413\u043E\u0441. \u043E\u0440\u0433\u0430\u043D\u044B"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode("\u0413\u043E\u0441. \u043E\u0440\u0433\u0430\u043D\u044B")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_UiSelectItem, {
                                      class: "w-full",
                                      value: "\u041A\u043B\u0438\u0435\u043D\u0442\u044B"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode("\u041A\u043B\u0438\u0435\u043D\u0442\u044B")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_UiSelectItem, {
                                      class: "w-full",
                                      value: "\u041F\u043E\u0441\u0442\u0430\u0432\u0449\u0438\u043A\u0438"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode("\u041F\u043E\u0441\u0442\u0430\u0432\u0449\u0438\u043A\u0438")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_UiSelectItem, {
                                      class: "w-full",
                                      value: "\u0421\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode("\u0421\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438")
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
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_UiSelectTrigger, null, {
                            default: withCtx(() => [
                              createVNode(_component_UiSelectValue, { placeholder: "\u0413\u0440\u0443\u043F\u043F\u0430" })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UiSelectContent, null, {
                            default: withCtx(() => [
                              createVNode(_component_UiSelectGroup, null, {
                                default: withCtx(() => [
                                  createVNode(_component_UiSelectItem, {
                                    class: "w-full",
                                    value: "\u0411\u0430\u043D\u043A\u0438"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("\u0411\u0430\u043D\u043A\u0438")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_UiSelectItem, {
                                    class: "w-full",
                                    value: "\u0413\u043E\u0441. \u043E\u0440\u0433\u0430\u043D\u044B"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("\u0413\u043E\u0441. \u043E\u0440\u0433\u0430\u043D\u044B")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_UiSelectItem, {
                                    class: "w-full",
                                    value: "\u041A\u043B\u0438\u0435\u043D\u0442\u044B"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("\u041A\u043B\u0438\u0435\u043D\u0442\u044B")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_UiSelectItem, {
                                    class: "w-full",
                                    value: "\u041F\u043E\u0441\u0442\u0430\u0432\u0449\u0438\u043A\u0438"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("\u041F\u043E\u0441\u0442\u0430\u0432\u0449\u0438\u043A\u0438")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_UiSelectItem, {
                                    class: "w-full",
                                    value: "\u0421\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("\u0421\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438")
                                    ]),
                                    _: 1
                                  })
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
                  _push3(`</div><div class="relative"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` \u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F \u0434\u043B\u044F \u0432\u0445\u043E\u0434\u044F\u0449\u0438\u0445 \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u0439 `);
                      } else {
                        return [
                          createTextVNode(" \u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F \u0434\u043B\u044F \u0432\u0445\u043E\u0434\u044F\u0449\u0438\u0445 \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u0439 ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<div class="flex gap-2"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_MyComboboxModels, {
                    key: unref(incomeExpenseCategories).length,
                    class: "min-w-[462px] w-[462px] overflow-hidden",
                    items: unref(incomeExpenseCategories).map((c) => ({
                      value: c.id,
                      label: c.name
                    })),
                    label: (_b = (_a = unref(incomeExpenseCategories).find(
                      (c) => c.id === unref(counterPartyFormData).incomeExpenseCategoryId
                    )) == null ? void 0 : _a.name) != null ? _b : "\u0412\u044B\u0431\u0440\u0430\u0442\u044C",
                    "model-value": unref(counterPartyFormData).incomeExpenseCategoryId,
                    onSelectedItem: (value) => unref(counterPartyFormData).incomeExpenseCategoryId = value
                  }, null, _parent3, _scopeId2));
                  _push3(`</div></div><div class="relative"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` \u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F \u0434\u043B\u044F \u0438\u0441\u0445\u043E\u0434\u044F\u0449\u0438\u0445 \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u0439 `);
                      } else {
                        return [
                          createTextVNode(" \u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F \u0434\u043B\u044F \u0438\u0441\u0445\u043E\u0434\u044F\u0449\u0438\u0445 \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u0439 ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<div class="flex gap-2"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_MyComboboxModels, {
                    key: unref(outcomeExpenseCategories).length,
                    class: "min-w-[462px] w-[462px] overflow-hidden",
                    items: unref(outcomeExpenseCategories).map((c) => ({
                      value: c.id,
                      label: c.name
                    })),
                    label: (_d = (_c = unref(outcomeExpenseCategories).find(
                      (c) => c.id === unref(counterPartyFormData).outcomeExpenseCategoryId
                    )) == null ? void 0 : _c.name) != null ? _d : "\u0412\u044B\u0431\u0440\u0430\u0442\u044C",
                    "model-value": unref(counterPartyFormData).outcomeExpenseCategoryId,
                    onSelectedItem: (value) => unref(counterPartyFormData).outcomeExpenseCategoryId = value
                  }, null, _parent3, _scopeId2));
                  _push3(`</div></div><div class="relative"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UiInput, {
                    modelValue: unref(counterPartyFormData).inn,
                    "onUpdate:modelValue": ($event) => unref(counterPartyFormData).inn = $event,
                    placeholder: "\u0418\u041D\u041D"
                  }, null, _parent3, _scopeId2));
                  if (unref(counterPartyFormData).inn) {
                    _push3(ssrRenderComponent(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(` \u0418\u041D\u041D `);
                        } else {
                          return [
                            createTextVNode(" \u0418\u041D\u041D ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`</div><div class="relative"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UiInput, {
                    modelValue: unref(counterPartyFormData).kpp,
                    "onUpdate:modelValue": ($event) => unref(counterPartyFormData).kpp = $event,
                    placeholder: "\u041A\u041F\u041F"
                  }, null, _parent3, _scopeId2));
                  if (unref(counterPartyFormData).kpp) {
                    _push3(ssrRenderComponent(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(` \u041A\u041F\u041F `);
                        } else {
                          return [
                            createTextVNode(" \u041A\u041F\u041F ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`</div><div class="relative"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UiInput, {
                    modelValue: unref(counterPartyFormData).account,
                    "onUpdate:modelValue": ($event) => unref(counterPartyFormData).account = $event,
                    placeholder: "\u0420\u0430\u0441\u0447\u0435\u0442\u043D\u044B\u0439 \u0441\u0447\u0435\u0442"
                  }, null, _parent3, _scopeId2));
                  if (unref(counterPartyFormData).account) {
                    _push3(ssrRenderComponent(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(` \u0420\u0430\u0441\u0447\u0435\u0442\u043D\u044B\u0439 \u0441\u0447\u0435\u0442 `);
                        } else {
                          return [
                            createTextVNode(" \u0420\u0430\u0441\u0447\u0435\u0442\u043D\u044B\u0439 \u0441\u0447\u0435\u0442 ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`</div></div><div class="flex justify-end gap-2 mt-4"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UiButton, {
                    variant: "outline",
                    onClick: ($event) => isOpen.value = false
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`\u041E\u0442\u043C\u0435\u043D\u0430`);
                      } else {
                        return [
                          createTextVNode("\u041E\u0442\u043C\u0435\u043D\u0430")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UiButton, {
                    disabled: unref(disabled),
                    onClick: createCounterParty
                  }, {
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
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode(_component_UiDialogHeader, null, {
                      default: withCtx(() => [
                        createVNode(_component_UiDialogTitle, null, {
                          default: withCtx(() => [
                            createTextVNode("\u0421\u043E\u0437\u0434\u0430\u043D\u0438\u0435 \u043A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442\u0430")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UiDialogDescription)
                      ]),
                      _: 1
                    }),
                    createVNode("div", { class: "space-y-5" }, [
                      createVNode("div", { class: "relative" }, [
                        createVNode(_component_UiInput, {
                          modelValue: unref(counterPartyFormData).title,
                          "onUpdate:modelValue": ($event) => unref(counterPartyFormData).title = $event,
                          placeholder: "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u043A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442\u0430",
                          class: unref(counterPartyFormData).title ? "" : "outline-1 outline-rose-300"
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "class"]),
                        unref(counterPartyFormData).title ? (openBlock(), createBlock(_component_UiLabel, {
                          key: 0,
                          class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" \u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u043A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442\u0430 ")
                          ]),
                          _: 1
                        })) : createCommentVNode("", true)
                      ]),
                      createVNode("div", { class: "relative w-full" }, [
                        createVNode(_component_UiSelect, {
                          modelValue: unref(counterPartyFormData).contrAgentGroup,
                          "onUpdate:modelValue": ($event) => unref(counterPartyFormData).contrAgentGroup = $event
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_UiSelectTrigger, null, {
                              default: withCtx(() => [
                                createVNode(_component_UiSelectValue, { placeholder: "\u0413\u0440\u0443\u043F\u043F\u0430" })
                              ]),
                              _: 1
                            }),
                            createVNode(_component_UiSelectContent, null, {
                              default: withCtx(() => [
                                createVNode(_component_UiSelectGroup, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_UiSelectItem, {
                                      class: "w-full",
                                      value: "\u0411\u0430\u043D\u043A\u0438"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode("\u0411\u0430\u043D\u043A\u0438")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_UiSelectItem, {
                                      class: "w-full",
                                      value: "\u0413\u043E\u0441. \u043E\u0440\u0433\u0430\u043D\u044B"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode("\u0413\u043E\u0441. \u043E\u0440\u0433\u0430\u043D\u044B")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_UiSelectItem, {
                                      class: "w-full",
                                      value: "\u041A\u043B\u0438\u0435\u043D\u0442\u044B"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode("\u041A\u043B\u0438\u0435\u043D\u0442\u044B")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_UiSelectItem, {
                                      class: "w-full",
                                      value: "\u041F\u043E\u0441\u0442\u0430\u0432\u0449\u0438\u043A\u0438"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode("\u041F\u043E\u0441\u0442\u0430\u0432\u0449\u0438\u043A\u0438")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_UiSelectItem, {
                                      class: "w-full",
                                      value: "\u0421\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode("\u0421\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      createVNode("div", { class: "relative" }, [
                        createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                          default: withCtx(() => [
                            createTextVNode(" \u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F \u0434\u043B\u044F \u0432\u0445\u043E\u0434\u044F\u0449\u0438\u0445 \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u0439 ")
                          ]),
                          _: 1
                        }),
                        createVNode("div", { class: "flex gap-2" }, [
                          (openBlock(), createBlock(_component_MyComboboxModels, {
                            key: unref(incomeExpenseCategories).length,
                            class: "min-w-[462px] w-[462px] overflow-hidden",
                            items: unref(incomeExpenseCategories).map((c) => ({
                              value: c.id,
                              label: c.name
                            })),
                            label: (_f = (_e = unref(incomeExpenseCategories).find(
                              (c) => c.id === unref(counterPartyFormData).incomeExpenseCategoryId
                            )) == null ? void 0 : _e.name) != null ? _f : "\u0412\u044B\u0431\u0440\u0430\u0442\u044C",
                            "model-value": unref(counterPartyFormData).incomeExpenseCategoryId,
                            onSelectedItem: (value) => unref(counterPartyFormData).incomeExpenseCategoryId = value
                          }, null, 8, ["items", "label", "model-value", "onSelectedItem"]))
                        ])
                      ]),
                      createVNode("div", { class: "relative" }, [
                        createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                          default: withCtx(() => [
                            createTextVNode(" \u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F \u0434\u043B\u044F \u0438\u0441\u0445\u043E\u0434\u044F\u0449\u0438\u0445 \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u0439 ")
                          ]),
                          _: 1
                        }),
                        createVNode("div", { class: "flex gap-2" }, [
                          (openBlock(), createBlock(_component_MyComboboxModels, {
                            key: unref(outcomeExpenseCategories).length,
                            class: "min-w-[462px] w-[462px] overflow-hidden",
                            items: unref(outcomeExpenseCategories).map((c) => ({
                              value: c.id,
                              label: c.name
                            })),
                            label: (_h = (_g = unref(outcomeExpenseCategories).find(
                              (c) => c.id === unref(counterPartyFormData).outcomeExpenseCategoryId
                            )) == null ? void 0 : _g.name) != null ? _h : "\u0412\u044B\u0431\u0440\u0430\u0442\u044C",
                            "model-value": unref(counterPartyFormData).outcomeExpenseCategoryId,
                            onSelectedItem: (value) => unref(counterPartyFormData).outcomeExpenseCategoryId = value
                          }, null, 8, ["items", "label", "model-value", "onSelectedItem"]))
                        ])
                      ]),
                      createVNode("div", { class: "relative" }, [
                        createVNode(_component_UiInput, {
                          modelValue: unref(counterPartyFormData).inn,
                          "onUpdate:modelValue": ($event) => unref(counterPartyFormData).inn = $event,
                          placeholder: "\u0418\u041D\u041D"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                        unref(counterPartyFormData).inn ? (openBlock(), createBlock(_component_UiLabel, {
                          key: 0,
                          class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" \u0418\u041D\u041D ")
                          ]),
                          _: 1
                        })) : createCommentVNode("", true)
                      ]),
                      createVNode("div", { class: "relative" }, [
                        createVNode(_component_UiInput, {
                          modelValue: unref(counterPartyFormData).kpp,
                          "onUpdate:modelValue": ($event) => unref(counterPartyFormData).kpp = $event,
                          placeholder: "\u041A\u041F\u041F"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                        unref(counterPartyFormData).kpp ? (openBlock(), createBlock(_component_UiLabel, {
                          key: 0,
                          class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" \u041A\u041F\u041F ")
                          ]),
                          _: 1
                        })) : createCommentVNode("", true)
                      ]),
                      createVNode("div", { class: "relative" }, [
                        createVNode(_component_UiInput, {
                          modelValue: unref(counterPartyFormData).account,
                          "onUpdate:modelValue": ($event) => unref(counterPartyFormData).account = $event,
                          placeholder: "\u0420\u0430\u0441\u0447\u0435\u0442\u043D\u044B\u0439 \u0441\u0447\u0435\u0442"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                        unref(counterPartyFormData).account ? (openBlock(), createBlock(_component_UiLabel, {
                          key: 0,
                          class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" \u0420\u0430\u0441\u0447\u0435\u0442\u043D\u044B\u0439 \u0441\u0447\u0435\u0442 ")
                          ]),
                          _: 1
                        })) : createCommentVNode("", true)
                      ])
                    ]),
                    createVNode("div", { class: "flex justify-end gap-2 mt-4" }, [
                      createVNode(_component_UiButton, {
                        variant: "outline",
                        onClick: ($event) => isOpen.value = false
                      }, {
                        default: withCtx(() => [
                          createTextVNode("\u041E\u0442\u043C\u0435\u043D\u0430")
                        ]),
                        _: 1
                      }, 8, ["onClick"]),
                      createVNode(_component_UiButton, {
                        disabled: unref(disabled),
                        onClick: createCounterParty
                      }, {
                        default: withCtx(() => [
                          createTextVNode("\u0421\u043E\u0437\u0434\u0430\u0442\u044C")
                        ]),
                        _: 1
                      }, 8, ["disabled"])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UiDialogTrigger, null, {
                default: withCtx(() => [
                  createVNode(_component_UiButton, { variant: "secondary" }, {
                    default: withCtx(() => [
                      createTextVNode("\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u043A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442\u0430")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_UiDialogContent, { class: "" }, {
                default: withCtx(() => {
                  var _a, _b, _c, _d;
                  return [
                    createVNode(_component_UiDialogHeader, null, {
                      default: withCtx(() => [
                        createVNode(_component_UiDialogTitle, null, {
                          default: withCtx(() => [
                            createTextVNode("\u0421\u043E\u0437\u0434\u0430\u043D\u0438\u0435 \u043A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442\u0430")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UiDialogDescription)
                      ]),
                      _: 1
                    }),
                    createVNode("div", { class: "space-y-5" }, [
                      createVNode("div", { class: "relative" }, [
                        createVNode(_component_UiInput, {
                          modelValue: unref(counterPartyFormData).title,
                          "onUpdate:modelValue": ($event) => unref(counterPartyFormData).title = $event,
                          placeholder: "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u043A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442\u0430",
                          class: unref(counterPartyFormData).title ? "" : "outline-1 outline-rose-300"
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "class"]),
                        unref(counterPartyFormData).title ? (openBlock(), createBlock(_component_UiLabel, {
                          key: 0,
                          class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" \u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u043A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442\u0430 ")
                          ]),
                          _: 1
                        })) : createCommentVNode("", true)
                      ]),
                      createVNode("div", { class: "relative w-full" }, [
                        createVNode(_component_UiSelect, {
                          modelValue: unref(counterPartyFormData).contrAgentGroup,
                          "onUpdate:modelValue": ($event) => unref(counterPartyFormData).contrAgentGroup = $event
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_UiSelectTrigger, null, {
                              default: withCtx(() => [
                                createVNode(_component_UiSelectValue, { placeholder: "\u0413\u0440\u0443\u043F\u043F\u0430" })
                              ]),
                              _: 1
                            }),
                            createVNode(_component_UiSelectContent, null, {
                              default: withCtx(() => [
                                createVNode(_component_UiSelectGroup, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_UiSelectItem, {
                                      class: "w-full",
                                      value: "\u0411\u0430\u043D\u043A\u0438"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode("\u0411\u0430\u043D\u043A\u0438")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_UiSelectItem, {
                                      class: "w-full",
                                      value: "\u0413\u043E\u0441. \u043E\u0440\u0433\u0430\u043D\u044B"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode("\u0413\u043E\u0441. \u043E\u0440\u0433\u0430\u043D\u044B")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_UiSelectItem, {
                                      class: "w-full",
                                      value: "\u041A\u043B\u0438\u0435\u043D\u0442\u044B"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode("\u041A\u043B\u0438\u0435\u043D\u0442\u044B")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_UiSelectItem, {
                                      class: "w-full",
                                      value: "\u041F\u043E\u0441\u0442\u0430\u0432\u0449\u0438\u043A\u0438"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode("\u041F\u043E\u0441\u0442\u0430\u0432\u0449\u0438\u043A\u0438")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_UiSelectItem, {
                                      class: "w-full",
                                      value: "\u0421\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode("\u0421\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      createVNode("div", { class: "relative" }, [
                        createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                          default: withCtx(() => [
                            createTextVNode(" \u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F \u0434\u043B\u044F \u0432\u0445\u043E\u0434\u044F\u0449\u0438\u0445 \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u0439 ")
                          ]),
                          _: 1
                        }),
                        createVNode("div", { class: "flex gap-2" }, [
                          (openBlock(), createBlock(_component_MyComboboxModels, {
                            key: unref(incomeExpenseCategories).length,
                            class: "min-w-[462px] w-[462px] overflow-hidden",
                            items: unref(incomeExpenseCategories).map((c) => ({
                              value: c.id,
                              label: c.name
                            })),
                            label: (_b = (_a = unref(incomeExpenseCategories).find(
                              (c) => c.id === unref(counterPartyFormData).incomeExpenseCategoryId
                            )) == null ? void 0 : _a.name) != null ? _b : "\u0412\u044B\u0431\u0440\u0430\u0442\u044C",
                            "model-value": unref(counterPartyFormData).incomeExpenseCategoryId,
                            onSelectedItem: (value) => unref(counterPartyFormData).incomeExpenseCategoryId = value
                          }, null, 8, ["items", "label", "model-value", "onSelectedItem"]))
                        ])
                      ]),
                      createVNode("div", { class: "relative" }, [
                        createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                          default: withCtx(() => [
                            createTextVNode(" \u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F \u0434\u043B\u044F \u0438\u0441\u0445\u043E\u0434\u044F\u0449\u0438\u0445 \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u0439 ")
                          ]),
                          _: 1
                        }),
                        createVNode("div", { class: "flex gap-2" }, [
                          (openBlock(), createBlock(_component_MyComboboxModels, {
                            key: unref(outcomeExpenseCategories).length,
                            class: "min-w-[462px] w-[462px] overflow-hidden",
                            items: unref(outcomeExpenseCategories).map((c) => ({
                              value: c.id,
                              label: c.name
                            })),
                            label: (_d = (_c = unref(outcomeExpenseCategories).find(
                              (c) => c.id === unref(counterPartyFormData).outcomeExpenseCategoryId
                            )) == null ? void 0 : _c.name) != null ? _d : "\u0412\u044B\u0431\u0440\u0430\u0442\u044C",
                            "model-value": unref(counterPartyFormData).outcomeExpenseCategoryId,
                            onSelectedItem: (value) => unref(counterPartyFormData).outcomeExpenseCategoryId = value
                          }, null, 8, ["items", "label", "model-value", "onSelectedItem"]))
                        ])
                      ]),
                      createVNode("div", { class: "relative" }, [
                        createVNode(_component_UiInput, {
                          modelValue: unref(counterPartyFormData).inn,
                          "onUpdate:modelValue": ($event) => unref(counterPartyFormData).inn = $event,
                          placeholder: "\u0418\u041D\u041D"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                        unref(counterPartyFormData).inn ? (openBlock(), createBlock(_component_UiLabel, {
                          key: 0,
                          class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" \u0418\u041D\u041D ")
                          ]),
                          _: 1
                        })) : createCommentVNode("", true)
                      ]),
                      createVNode("div", { class: "relative" }, [
                        createVNode(_component_UiInput, {
                          modelValue: unref(counterPartyFormData).kpp,
                          "onUpdate:modelValue": ($event) => unref(counterPartyFormData).kpp = $event,
                          placeholder: "\u041A\u041F\u041F"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                        unref(counterPartyFormData).kpp ? (openBlock(), createBlock(_component_UiLabel, {
                          key: 0,
                          class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" \u041A\u041F\u041F ")
                          ]),
                          _: 1
                        })) : createCommentVNode("", true)
                      ]),
                      createVNode("div", { class: "relative" }, [
                        createVNode(_component_UiInput, {
                          modelValue: unref(counterPartyFormData).account,
                          "onUpdate:modelValue": ($event) => unref(counterPartyFormData).account = $event,
                          placeholder: "\u0420\u0430\u0441\u0447\u0435\u0442\u043D\u044B\u0439 \u0441\u0447\u0435\u0442"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                        unref(counterPartyFormData).account ? (openBlock(), createBlock(_component_UiLabel, {
                          key: 0,
                          class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" \u0420\u0430\u0441\u0447\u0435\u0442\u043D\u044B\u0439 \u0441\u0447\u0435\u0442 ")
                          ]),
                          _: 1
                        })) : createCommentVNode("", true)
                      ])
                    ]),
                    createVNode("div", { class: "flex justify-end gap-2 mt-4" }, [
                      createVNode(_component_UiButton, {
                        variant: "outline",
                        onClick: ($event) => isOpen.value = false
                      }, {
                        default: withCtx(() => [
                          createTextVNode("\u041E\u0442\u043C\u0435\u043D\u0430")
                        ]),
                        _: 1
                      }, 8, ["onClick"]),
                      createVNode(_component_UiButton, {
                        disabled: unref(disabled),
                        onClick: createCounterParty
                      }, {
                        default: withCtx(() => [
                          createTextVNode("\u0421\u043E\u0437\u0434\u0430\u0442\u044C")
                        ]),
                        _: 1
                      }, 8, ["disabled"])
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
    };
  }
});
const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/my/planfact/CounterParties/CreateModal.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};
function replaceLegalEntities(input) {
  const replacements = [
    [
      /ОБЩЕСТВО\s+С\s+ОГРАНИЧЕННОЙ\s+ОТВЕТСТВЕННОСТЬЮ|Общество\s+с\s+ограниченной\s+ответственностью/gi,
      "\u041E\u041E\u041E"
    ],
    [
      /ИНДИВИДУАЛЬНЫЙ\s+ПРЕДПРИНИМАТЕЛЬ|Индивидуальный\s+предприниматель/gi,
      "\u0418\u041F"
    ],
    [/АКЦИОНЕРНОЕ\s+ОБЩЕСТВО|Акционерное\s+общество/gi, "\u0410\u041E"],
    [
      /ЗАКРЫТОЕ\s+АКЦИОНЕРНОЕ\s+ОБЩЕСТВО|Закрытое\s+акционерное\s+общество/gi,
      "\u0417\u0410\u041E"
    ],
    [
      /ОТКРЫТОЕ\s+АКЦИОНЕРНОЕ\s+ОБЩЕСТВО|Открытое\s+акционерное\s+общество/gi,
      "\u041E\u0410\u041E"
    ]
  ];
  let result = input;
  for (const [pattern, replacement] of replacements) {
    result = result.replace(pattern, replacement);
  }
  return result.trim().replace(/\s+/g, " ");
}
const _sfc_main$c = /* @__PURE__ */ defineComponent({
  __name: "SelectPopover",
  __ssrInlineRender: true,
  props: {
    items: {},
    selectedId: {},
    label: {},
    placeholder: { default: "" },
    onLoadMore: { type: [Function, null], default: null },
    onSearch: { type: [Function, null], default: null },
    hasMore: { type: Boolean, default: false },
    isLoading: { type: Boolean, default: false }
  },
  emits: ["update:selectedId"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const searchTerm = ref("");
    const isPopoverOpen = ref(false);
    const loadMoreRef = ref(null);
    const selectedItem = computed(() => {
      return props.items.find((item) => item.id === props.selectedId);
    });
    const filteredItems = computed(() => {
      return props.items;
    });
    const handleSelect = (id) => {
      if (props.selectedId === id) {
        emit("update:selectedId", null);
      } else {
        emit("update:selectedId", id);
      }
      isPopoverOpen.value = false;
    };
    const resetSelection = () => {
      emit("update:selectedId", null);
      isPopoverOpen.value = false;
    };
    let searchTimeout = null;
    const triggerSearch = (value) => {
      if (searchTimeout) {
        clearTimeout(searchTimeout);
      }
      searchTimeout = setTimeout(() => {
        if (props.onSearch) {
          props.onSearch(value || "");
        }
      }, 300);
    };
    watch(searchTerm, (newValue) => {
      triggerSearch(newValue);
    });
    const handleScroll = (event) => {
      const target = event.target;
      if (!target || !loadMoreRef.value || !props.hasMore || props.isLoading) {
        return;
      }
      const loadMoreElement = loadMoreRef.value;
      const loadMoreRect = loadMoreElement.getBoundingClientRect();
      const containerRect = target.getBoundingClientRect();
      if (loadMoreRect.top <= containerRect.bottom + 100 && loadMoreRect.bottom >= containerRect.top) {
        if (props.onLoadMore) {
          props.onLoadMore();
        }
      }
    };
    watch(isPopoverOpen, (open) => {
      if (open) {
        nextTick(() => {
          if (props.onSearch) {
            props.onSearch("");
          }
        });
      } else {
        searchTerm.value = "";
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiPopover = _sfc_main$2$4;
      const _component_UiPopoverTrigger = _sfc_main$1$4;
      const _component_UiButton = _sfc_main$h;
      const _component_UiPopoverContent = _sfc_main$w;
      const _component_UiCommand = _sfc_main$5$2;
      const _component_UiCommandInput = _sfc_main$2$5;
      const _component_UiCommandList = _sfc_main$x;
      const _component_UiCommandEmpty = _sfc_main$4$3;
      const _component_UiCommandGroup = _sfc_main$3$3;
      const _component_UiCommandItem = _sfc_main$1$5;
      const _component_UiCommandSeparator = _sfc_main$y;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_UiPopover, {
        open: isPopoverOpen.value,
        "onUpdate:open": ($event) => isPopoverOpen.value = $event
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UiPopoverTrigger, { "as-child": "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UiButton, {
                    variant: "outline",
                    size: "sm",
                    class: "h-8 justify-between max-w-[300px] w-full"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<span class="truncate min-w-0 flex-1 text-left"${_scopeId3}>${ssrInterpolate(selectedItem.value ? selectedItem.value.title : _ctx.label)}</span>`);
                        _push4(ssrRenderComponent(unref(ChevronDown), { class: "ml-2 h-4 w-4 shrink-0 opacity-50" }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode("span", { class: "truncate min-w-0 flex-1 text-left" }, toDisplayString(selectedItem.value ? selectedItem.value.title : _ctx.label), 1),
                          createVNode(unref(ChevronDown), { class: "ml-2 h-4 w-4 shrink-0 opacity-50" })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UiButton, {
                      variant: "outline",
                      size: "sm",
                      class: "h-8 justify-between max-w-[300px] w-full"
                    }, {
                      default: withCtx(() => [
                        createVNode("span", { class: "truncate min-w-0 flex-1 text-left" }, toDisplayString(selectedItem.value ? selectedItem.value.title : _ctx.label), 1),
                        createVNode(unref(ChevronDown), { class: "ml-2 h-4 w-4 shrink-0 opacity-50" })
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UiPopoverContent, {
              class: "w-full max-w-[300px] p-0",
              align: "start"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UiCommand, { "should-filter": false }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UiCommandInput, {
                          "model-value": searchTerm.value,
                          placeholder: _ctx.placeholder || _ctx.label,
                          "onUpdate:modelValue": (value) => {
                            searchTerm.value = value;
                          },
                          onInput: (e) => {
                            const target = e.target;
                            if ((target == null ? void 0 : target.value) !== void 0) {
                              searchTerm.value = target.value;
                            }
                          }
                        }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_UiCommandList, {
                          class: "max-h-[300px]",
                          onScroll: handleScroll
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              if (!_ctx.isLoading && filteredItems.value.length === 0) {
                                _push5(ssrRenderComponent(_component_UiCommandEmpty, null, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(` \u041D\u0435\u0442 \u0441\u043E\u0432\u043F\u0430\u0434\u0435\u043D\u0438\u0439. `);
                                    } else {
                                      return [
                                        createTextVNode(" \u041D\u0435\u0442 \u0441\u043E\u0432\u043F\u0430\u0434\u0435\u043D\u0438\u0439. ")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                              } else {
                                _push5(`<!---->`);
                              }
                              _push5(ssrRenderComponent(_component_UiCommandGroup, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<!--[-->`);
                                    ssrRenderList(filteredItems.value, (item) => {
                                      _push6(ssrRenderComponent(_component_UiCommandItem, {
                                        key: item.id,
                                        value: item,
                                        class: "py-2",
                                        onSelect: ($event) => handleSelect(item.id)
                                      }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`<span class="${ssrRenderClass(
                                              _ctx.selectedId === item.id ? "flex-1 break-words whitespace-normal font-medium leading-relaxed" : "flex-1 break-words whitespace-normal leading-relaxed"
                                            )}"${_scopeId6}>${ssrInterpolate(item.title)}</span>`);
                                          } else {
                                            return [
                                              createVNode("span", {
                                                class: _ctx.selectedId === item.id ? "flex-1 break-words whitespace-normal font-medium leading-relaxed" : "flex-1 break-words whitespace-normal leading-relaxed"
                                              }, toDisplayString(item.title), 3)
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                    });
                                    _push6(`<!--]-->`);
                                    if (_ctx.hasMore && !_ctx.isLoading) {
                                      _push6(`<div class="h-4"${_scopeId5}></div>`);
                                    } else {
                                      _push6(`<!---->`);
                                    }
                                    if (_ctx.isLoading) {
                                      _push6(`<div class="flex items-center justify-center py-2 text-sm text-slate-500"${_scopeId5}> \u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430... </div>`);
                                    } else {
                                      _push6(`<!---->`);
                                    }
                                  } else {
                                    return [
                                      (openBlock(true), createBlock(Fragment, null, renderList(filteredItems.value, (item) => {
                                        return openBlock(), createBlock(_component_UiCommandItem, {
                                          key: item.id,
                                          value: item,
                                          class: "py-2",
                                          onSelect: ($event) => handleSelect(item.id)
                                        }, {
                                          default: withCtx(() => [
                                            createVNode("span", {
                                              class: _ctx.selectedId === item.id ? "flex-1 break-words whitespace-normal font-medium leading-relaxed" : "flex-1 break-words whitespace-normal leading-relaxed"
                                            }, toDisplayString(item.title), 3)
                                          ]),
                                          _: 2
                                        }, 1032, ["value", "onSelect"]);
                                      }), 128)),
                                      _ctx.hasMore && !_ctx.isLoading ? (openBlock(), createBlock("div", {
                                        key: 0,
                                        ref_key: "loadMoreRef",
                                        ref: loadMoreRef,
                                        class: "h-4"
                                      }, null, 512)) : createCommentVNode("", true),
                                      _ctx.isLoading ? (openBlock(), createBlock("div", {
                                        key: 1,
                                        class: "flex items-center justify-center py-2 text-sm text-slate-500"
                                      }, " \u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430... ")) : createCommentVNode("", true)
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              if (_ctx.selectedId !== null) {
                                _push5(`<!--[-->`);
                                _push5(ssrRenderComponent(_component_UiCommandSeparator, null, null, _parent5, _scopeId4));
                                _push5(ssrRenderComponent(_component_UiCommandGroup, null, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(_component_UiCommandItem, {
                                        value: { label: "\u041E\u0447\u0438\u0441\u0442\u0438\u0442\u044C" },
                                        class: "justify-center text-center",
                                        onSelect: resetSelection
                                      }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(` \u041E\u0447\u0438\u0441\u0442\u0438\u0442\u044C `);
                                          } else {
                                            return [
                                              createTextVNode(" \u041E\u0447\u0438\u0441\u0442\u0438\u0442\u044C ")
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(_component_UiCommandItem, {
                                          value: { label: "\u041E\u0447\u0438\u0441\u0442\u0438\u0442\u044C" },
                                          class: "justify-center text-center",
                                          onSelect: resetSelection
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(" \u041E\u0447\u0438\u0441\u0442\u0438\u0442\u044C ")
                                          ]),
                                          _: 1
                                        })
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                                _push5(`<!--]-->`);
                              } else {
                                _push5(`<!---->`);
                              }
                            } else {
                              return [
                                !_ctx.isLoading && filteredItems.value.length === 0 ? (openBlock(), createBlock(_component_UiCommandEmpty, { key: 0 }, {
                                  default: withCtx(() => [
                                    createTextVNode(" \u041D\u0435\u0442 \u0441\u043E\u0432\u043F\u0430\u0434\u0435\u043D\u0438\u0439. ")
                                  ]),
                                  _: 1
                                })) : createCommentVNode("", true),
                                createVNode(_component_UiCommandGroup, null, {
                                  default: withCtx(() => [
                                    (openBlock(true), createBlock(Fragment, null, renderList(filteredItems.value, (item) => {
                                      return openBlock(), createBlock(_component_UiCommandItem, {
                                        key: item.id,
                                        value: item,
                                        class: "py-2",
                                        onSelect: ($event) => handleSelect(item.id)
                                      }, {
                                        default: withCtx(() => [
                                          createVNode("span", {
                                            class: _ctx.selectedId === item.id ? "flex-1 break-words whitespace-normal font-medium leading-relaxed" : "flex-1 break-words whitespace-normal leading-relaxed"
                                          }, toDisplayString(item.title), 3)
                                        ]),
                                        _: 2
                                      }, 1032, ["value", "onSelect"]);
                                    }), 128)),
                                    _ctx.hasMore && !_ctx.isLoading ? (openBlock(), createBlock("div", {
                                      key: 0,
                                      ref_key: "loadMoreRef",
                                      ref: loadMoreRef,
                                      class: "h-4"
                                    }, null, 512)) : createCommentVNode("", true),
                                    _ctx.isLoading ? (openBlock(), createBlock("div", {
                                      key: 1,
                                      class: "flex items-center justify-center py-2 text-sm text-slate-500"
                                    }, " \u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430... ")) : createCommentVNode("", true)
                                  ]),
                                  _: 1
                                }),
                                _ctx.selectedId !== null ? (openBlock(), createBlock(Fragment, { key: 1 }, [
                                  createVNode(_component_UiCommandSeparator),
                                  createVNode(_component_UiCommandGroup, null, {
                                    default: withCtx(() => [
                                      createVNode(_component_UiCommandItem, {
                                        value: { label: "\u041E\u0447\u0438\u0441\u0442\u0438\u0442\u044C" },
                                        class: "justify-center text-center",
                                        onSelect: resetSelection
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(" \u041E\u0447\u0438\u0441\u0442\u0438\u0442\u044C ")
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  })
                                ], 64)) : createCommentVNode("", true)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_UiCommandInput, {
                            "model-value": searchTerm.value,
                            placeholder: _ctx.placeholder || _ctx.label,
                            "onUpdate:modelValue": (value) => {
                              searchTerm.value = value;
                            },
                            onInput: (e) => {
                              const target = e.target;
                              if ((target == null ? void 0 : target.value) !== void 0) {
                                searchTerm.value = target.value;
                              }
                            }
                          }, null, 8, ["model-value", "placeholder", "onUpdate:modelValue", "onInput"]),
                          createVNode(_component_UiCommandList, {
                            class: "max-h-[300px]",
                            onScroll: handleScroll
                          }, {
                            default: withCtx(() => [
                              !_ctx.isLoading && filteredItems.value.length === 0 ? (openBlock(), createBlock(_component_UiCommandEmpty, { key: 0 }, {
                                default: withCtx(() => [
                                  createTextVNode(" \u041D\u0435\u0442 \u0441\u043E\u0432\u043F\u0430\u0434\u0435\u043D\u0438\u0439. ")
                                ]),
                                _: 1
                              })) : createCommentVNode("", true),
                              createVNode(_component_UiCommandGroup, null, {
                                default: withCtx(() => [
                                  (openBlock(true), createBlock(Fragment, null, renderList(filteredItems.value, (item) => {
                                    return openBlock(), createBlock(_component_UiCommandItem, {
                                      key: item.id,
                                      value: item,
                                      class: "py-2",
                                      onSelect: ($event) => handleSelect(item.id)
                                    }, {
                                      default: withCtx(() => [
                                        createVNode("span", {
                                          class: _ctx.selectedId === item.id ? "flex-1 break-words whitespace-normal font-medium leading-relaxed" : "flex-1 break-words whitespace-normal leading-relaxed"
                                        }, toDisplayString(item.title), 3)
                                      ]),
                                      _: 2
                                    }, 1032, ["value", "onSelect"]);
                                  }), 128)),
                                  _ctx.hasMore && !_ctx.isLoading ? (openBlock(), createBlock("div", {
                                    key: 0,
                                    ref_key: "loadMoreRef",
                                    ref: loadMoreRef,
                                    class: "h-4"
                                  }, null, 512)) : createCommentVNode("", true),
                                  _ctx.isLoading ? (openBlock(), createBlock("div", {
                                    key: 1,
                                    class: "flex items-center justify-center py-2 text-sm text-slate-500"
                                  }, " \u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430... ")) : createCommentVNode("", true)
                                ]),
                                _: 1
                              }),
                              _ctx.selectedId !== null ? (openBlock(), createBlock(Fragment, { key: 1 }, [
                                createVNode(_component_UiCommandSeparator),
                                createVNode(_component_UiCommandGroup, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_UiCommandItem, {
                                      value: { label: "\u041E\u0447\u0438\u0441\u0442\u0438\u0442\u044C" },
                                      class: "justify-center text-center",
                                      onSelect: resetSelection
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" \u041E\u0447\u0438\u0441\u0442\u0438\u0442\u044C ")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                })
                              ], 64)) : createCommentVNode("", true)
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
                    createVNode(_component_UiCommand, { "should-filter": false }, {
                      default: withCtx(() => [
                        createVNode(_component_UiCommandInput, {
                          "model-value": searchTerm.value,
                          placeholder: _ctx.placeholder || _ctx.label,
                          "onUpdate:modelValue": (value) => {
                            searchTerm.value = value;
                          },
                          onInput: (e) => {
                            const target = e.target;
                            if ((target == null ? void 0 : target.value) !== void 0) {
                              searchTerm.value = target.value;
                            }
                          }
                        }, null, 8, ["model-value", "placeholder", "onUpdate:modelValue", "onInput"]),
                        createVNode(_component_UiCommandList, {
                          class: "max-h-[300px]",
                          onScroll: handleScroll
                        }, {
                          default: withCtx(() => [
                            !_ctx.isLoading && filteredItems.value.length === 0 ? (openBlock(), createBlock(_component_UiCommandEmpty, { key: 0 }, {
                              default: withCtx(() => [
                                createTextVNode(" \u041D\u0435\u0442 \u0441\u043E\u0432\u043F\u0430\u0434\u0435\u043D\u0438\u0439. ")
                              ]),
                              _: 1
                            })) : createCommentVNode("", true),
                            createVNode(_component_UiCommandGroup, null, {
                              default: withCtx(() => [
                                (openBlock(true), createBlock(Fragment, null, renderList(filteredItems.value, (item) => {
                                  return openBlock(), createBlock(_component_UiCommandItem, {
                                    key: item.id,
                                    value: item,
                                    class: "py-2",
                                    onSelect: ($event) => handleSelect(item.id)
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("span", {
                                        class: _ctx.selectedId === item.id ? "flex-1 break-words whitespace-normal font-medium leading-relaxed" : "flex-1 break-words whitespace-normal leading-relaxed"
                                      }, toDisplayString(item.title), 3)
                                    ]),
                                    _: 2
                                  }, 1032, ["value", "onSelect"]);
                                }), 128)),
                                _ctx.hasMore && !_ctx.isLoading ? (openBlock(), createBlock("div", {
                                  key: 0,
                                  ref_key: "loadMoreRef",
                                  ref: loadMoreRef,
                                  class: "h-4"
                                }, null, 512)) : createCommentVNode("", true),
                                _ctx.isLoading ? (openBlock(), createBlock("div", {
                                  key: 1,
                                  class: "flex items-center justify-center py-2 text-sm text-slate-500"
                                }, " \u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430... ")) : createCommentVNode("", true)
                              ]),
                              _: 1
                            }),
                            _ctx.selectedId !== null ? (openBlock(), createBlock(Fragment, { key: 1 }, [
                              createVNode(_component_UiCommandSeparator),
                              createVNode(_component_UiCommandGroup, null, {
                                default: withCtx(() => [
                                  createVNode(_component_UiCommandItem, {
                                    value: { label: "\u041E\u0447\u0438\u0441\u0442\u0438\u0442\u044C" },
                                    class: "justify-center text-center",
                                    onSelect: resetSelection
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" \u041E\u0447\u0438\u0441\u0442\u0438\u0442\u044C ")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              })
                            ], 64)) : createCommentVNode("", true)
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
          } else {
            return [
              createVNode(_component_UiPopoverTrigger, { "as-child": "" }, {
                default: withCtx(() => [
                  createVNode(_component_UiButton, {
                    variant: "outline",
                    size: "sm",
                    class: "h-8 justify-between max-w-[300px] w-full"
                  }, {
                    default: withCtx(() => [
                      createVNode("span", { class: "truncate min-w-0 flex-1 text-left" }, toDisplayString(selectedItem.value ? selectedItem.value.title : _ctx.label), 1),
                      createVNode(unref(ChevronDown), { class: "ml-2 h-4 w-4 shrink-0 opacity-50" })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_UiPopoverContent, {
                class: "w-full max-w-[300px] p-0",
                align: "start"
              }, {
                default: withCtx(() => [
                  createVNode(_component_UiCommand, { "should-filter": false }, {
                    default: withCtx(() => [
                      createVNode(_component_UiCommandInput, {
                        "model-value": searchTerm.value,
                        placeholder: _ctx.placeholder || _ctx.label,
                        "onUpdate:modelValue": (value) => {
                          searchTerm.value = value;
                        },
                        onInput: (e) => {
                          const target = e.target;
                          if ((target == null ? void 0 : target.value) !== void 0) {
                            searchTerm.value = target.value;
                          }
                        }
                      }, null, 8, ["model-value", "placeholder", "onUpdate:modelValue", "onInput"]),
                      createVNode(_component_UiCommandList, {
                        class: "max-h-[300px]",
                        onScroll: handleScroll
                      }, {
                        default: withCtx(() => [
                          !_ctx.isLoading && filteredItems.value.length === 0 ? (openBlock(), createBlock(_component_UiCommandEmpty, { key: 0 }, {
                            default: withCtx(() => [
                              createTextVNode(" \u041D\u0435\u0442 \u0441\u043E\u0432\u043F\u0430\u0434\u0435\u043D\u0438\u0439. ")
                            ]),
                            _: 1
                          })) : createCommentVNode("", true),
                          createVNode(_component_UiCommandGroup, null, {
                            default: withCtx(() => [
                              (openBlock(true), createBlock(Fragment, null, renderList(filteredItems.value, (item) => {
                                return openBlock(), createBlock(_component_UiCommandItem, {
                                  key: item.id,
                                  value: item,
                                  class: "py-2",
                                  onSelect: ($event) => handleSelect(item.id)
                                }, {
                                  default: withCtx(() => [
                                    createVNode("span", {
                                      class: _ctx.selectedId === item.id ? "flex-1 break-words whitespace-normal font-medium leading-relaxed" : "flex-1 break-words whitespace-normal leading-relaxed"
                                    }, toDisplayString(item.title), 3)
                                  ]),
                                  _: 2
                                }, 1032, ["value", "onSelect"]);
                              }), 128)),
                              _ctx.hasMore && !_ctx.isLoading ? (openBlock(), createBlock("div", {
                                key: 0,
                                ref_key: "loadMoreRef",
                                ref: loadMoreRef,
                                class: "h-4"
                              }, null, 512)) : createCommentVNode("", true),
                              _ctx.isLoading ? (openBlock(), createBlock("div", {
                                key: 1,
                                class: "flex items-center justify-center py-2 text-sm text-slate-500"
                              }, " \u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430... ")) : createCommentVNode("", true)
                            ]),
                            _: 1
                          }),
                          _ctx.selectedId !== null ? (openBlock(), createBlock(Fragment, { key: 1 }, [
                            createVNode(_component_UiCommandSeparator),
                            createVNode(_component_UiCommandGroup, null, {
                              default: withCtx(() => [
                                createVNode(_component_UiCommandItem, {
                                  value: { label: "\u041E\u0447\u0438\u0441\u0442\u0438\u0442\u044C" },
                                  class: "justify-center text-center",
                                  onSelect: resetSelection
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" \u041E\u0447\u0438\u0441\u0442\u0438\u0442\u044C ")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            })
                          ], 64)) : createCommentVNode("", true)
                        ]),
                        _: 1
                      })
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/my/SelectPopover.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const _sfc_main$b = /* @__PURE__ */ defineComponent({
  __name: "OperationCreateModal",
  __ssrInlineRender: true,
  props: {
    accountId: {}
  },
  emits: ["operation-created"],
  setup(__props, { emit: __emit }) {
    const { $useApi } = useNuxtApp();
    const {
      counterPartiesFilters,
      counterPartiesFiltersPagination,
      isLoadingCounterParties,
      getCounterPartiesFilters,
      getExpenseCategoriesMini
    } = usePlanfact();
    const props = __props;
    const isOpen = ref(false);
    const expenseCategories = ref([]);
    const opTypeTab = ref("\u041F\u043E\u0441\u0442\u0443\u043F\u043B\u0435\u043D\u0438\u0435");
    const disabled = ref(true);
    const formattedCounterParties = computed(() => {
      return counterPartiesFilters.value.map(
        (c) => ({
          id: c.id,
          title: replaceLegalEntities(c.title) + " (..." + c.account.slice(-4) + ")"
        })
      );
    });
    const emit = __emit;
    const formData = ref({
      operationDate: "",
      operationType: "Credit",
      // Поступление -> Credit
      payPurpose: "",
      accountId: props.accountId,
      operationPositions: [
        { amount: 0, counterPartyId: null, expenseCategoryId: null }
      ]
    });
    const isFormValid = computed(() => {
      var _a;
      return formData.value.operationDate && formData.value.operationType && formData.value.accountId && ((_a = formData.value.operationPositions) == null ? void 0 : _a.length) > 0 && formData.value.operationPositions.every(
        (pos) => pos.amount > 0 && pos.counterPartyId && pos.expenseCategoryId
      );
    });
    const totalAmountPrice = computed(() => {
      var _a;
      return ((_a = formData.value.operationPositions) == null ? void 0 : _a.reduce(
        (a, b) => a + (b.amount || 0),
        0
      )) || 0;
    });
    const mapOperationTypeToCode = (type) => {
      if (type === "\u041F\u043E\u0441\u0442\u0443\u043F\u043B\u0435\u043D\u0438\u0435") return "Credit";
      if (type === "\u0412\u044B\u043F\u043B\u0430\u0442\u0430") return "Debit";
      if (type === "\u041D\u0430\u0447\u0438\u0441\u043B\u0435\u043D\u0438\u0435") return "Debit";
      return type;
    };
    const fetchExpenseCategories = async (operationType) => {
      try {
        const mappedType = mapOperationTypeToCode(operationType);
        const data = await getExpenseCategoriesMini(mappedType);
        expenseCategories.value = data;
      } catch (error) {
        console.error(error);
        toast({
          variant: "destructive",
          title: "\u041E\u0448\u0438\u0431\u043A\u0430",
          description: "\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u0438."
        });
      }
    };
    const handleCounterPartySearch = async (searchTerm) => {
      await getCounterPartiesFilters(true, searchTerm);
    };
    const handleCounterPartyLoadMore = async () => {
      await getCounterPartiesFilters(false);
    };
    const createOperation = async () => {
      try {
        disabled.value = true;
        const { data } = await $useApi.post("planfact/operation", {
          ...formData.value,
          operationPositions: formData.value.operationPositions.map((pos) => ({
            amount: pos.amount,
            counterPartyId: pos.counterPartyId || null,
            expenseCategoryId: pos.expenseCategoryId || null
          }))
        });
        toast({
          title: "\u0423\u0441\u043F\u0435\u0445",
          description: "\u041E\u043F\u0435\u0440\u0430\u0446\u0438\u044F \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u0441\u043E\u0437\u0434\u0430\u043D\u0430."
        });
        emit("operation-created", data);
        isOpen.value = false;
        disabled.value = false;
        formData.value = {
          operationDate: "",
          operationType: "Credit",
          // Поступление -> Credit
          payPurpose: "",
          accountId: props.accountId,
          operationPositions: [
            { amount: 0, counterPartyId: null, expenseCategoryId: null }
          ]
        };
      } catch (error) {
        console.error(error);
        toast({
          variant: "destructive",
          title: "\u041E\u0448\u0438\u0431\u043A\u0430",
          description: "\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0441\u043E\u0437\u0434\u0430\u0442\u044C \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u044E."
        });
      }
    };
    const addPosition = () => {
      formData.value.operationPositions = [
        ...formData.value.operationPositions || [],
        { amount: 0, counterPartyId: null, expenseCategoryId: null }
      ];
    };
    const removePosition = (index) => {
      if (formData.value.operationPositions && formData.value.operationPositions.length > 1) {
        formData.value.operationPositions.splice(index, 1);
      } else {
        toast({
          variant: "destructive",
          title: "\u041E\u0448\u0438\u0431\u043A\u0430",
          description: "\u041D\u0435\u043B\u044C\u0437\u044F \u0443\u0434\u0430\u043B\u0438\u0442\u044C \u043F\u043E\u0441\u043B\u0435\u0434\u043D\u044E\u044E \u043F\u043E\u0437\u0438\u0446\u0438\u044E."
        });
      }
    };
    const handleCategory = async (category) => {
      expenseCategories.value.push(category);
    };
    const handleCounterParty = async () => {
      await getCounterPartiesFilters(true);
    };
    watch(isOpen, async (value) => {
      if (value) {
        await fetchExpenseCategories(opTypeTab.value);
        await getCounterPartiesFilters(true);
      } else {
        formData.value = {
          operationDate: "",
          operationType: "Credit",
          // Поступление -> Credit
          payPurpose: "",
          accountId: props.accountId,
          operationPositions: [
            { amount: 0, counterPartyId: null, expenseCategoryId: null }
          ]
        };
      }
    });
    watch(
      opTypeTab,
      async (value) => {
        var _a;
        const mappedType = mapOperationTypeToCode(value);
        formData.value.operationType = mappedType;
        await fetchExpenseCategories(value);
        formData.value.operationPositions = ((_a = formData.value.operationPositions) == null ? void 0 : _a.map((pos) => ({
          ...pos,
          expenseCategoryId: null
        }))) || [{ amount: 0, counterPartyId: null, expenseCategoryId: null }];
      },
      { deep: true }
    );
    watch(
      formData,
      () => {
        disabled.value = !isFormValid.value;
      },
      { deep: true }
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiDialog = _sfc_main$4$2;
      const _component_UiDialogTrigger = _sfc_main$3$2;
      const _component_UiButton = _sfc_main$h;
      const _component_UiDialogContent = _sfc_main$q;
      const _component_UiDialogHeader = _sfc_main$2$3;
      const _component_UiDialogTitle = _sfc_main$1$3;
      const _component_UiDialogDescription = _sfc_main$r;
      const _component_UiTabs = _sfc_main$2$2;
      const _component_UiTabsList = _sfc_main$l;
      const _component_UiTabsTrigger = _sfc_main$1$2;
      const _component_UiInput = _sfc_main$n;
      const _component_UiLabel = _sfc_main$s;
      const _component_UiTextarea = _sfc_main$t;
      const _component_MyPlanfactCategoriesCreateModal = _sfc_main$e;
      const _component_MyPlanfactCounterPartiesCreateModal = _sfc_main$d;
      const _component_MyComboboxModels = _sfc_main$u;
      _push(ssrRenderComponent(_component_UiDialog, mergeProps({
        open: isOpen.value,
        "onUpdate:open": ($event) => isOpen.value = $event
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UiDialogTrigger, { class: "z-[1]" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UiButton, { class: "h-8" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`+`);
                      } else {
                        return [
                          createTextVNode("+")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UiButton, { class: "h-8" }, {
                      default: withCtx(() => [
                        createTextVNode("+")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UiDialogContent, { class: "max-w-[1200px]" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UiDialogHeader, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UiDialogTitle, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`\u0421\u043E\u0437\u0434\u0430\u043D\u0438\u0435 \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u0438`);
                            } else {
                              return [
                                createTextVNode("\u0421\u043E\u0437\u0434\u0430\u043D\u0438\u0435 \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u0438")
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
                              createTextVNode("\u0421\u043E\u0437\u0434\u0430\u043D\u0438\u0435 \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u0438")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UiDialogDescription)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<div class="flex gap-2 min-h-[600px]"${_scopeId2}><div class="space-y-5 min-w-[450px]"${_scopeId2}><div class="relative w-full"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UiTabs, {
                    modelValue: opTypeTab.value,
                    "onUpdate:modelValue": ($event) => opTypeTab.value = $event
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UiTabsList, { class: "w-full" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_UiTabsTrigger, {
                                class: "w-full",
                                value: "\u041F\u043E\u0441\u0442\u0443\u043F\u043B\u0435\u043D\u0438\u0435"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`\u041F\u043E\u0441\u0442\u0443\u043F\u043B\u0435\u043D\u0438\u0435`);
                                  } else {
                                    return [
                                      createTextVNode("\u041F\u043E\u0441\u0442\u0443\u043F\u043B\u0435\u043D\u0438\u0435")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_UiTabsTrigger, {
                                class: "w-full",
                                value: "\u0412\u044B\u043F\u043B\u0430\u0442\u0430"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`\u0412\u044B\u043F\u043B\u0430\u0442\u0430`);
                                  } else {
                                    return [
                                      createTextVNode("\u0412\u044B\u043F\u043B\u0430\u0442\u0430")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_UiTabsTrigger, {
                                class: "w-full",
                                value: "\u041D\u0430\u0447\u0438\u0441\u043B\u0435\u043D\u0438\u0435"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`\u041D\u0430\u0447\u0438\u0441\u043B\u0435\u043D\u0438\u0435`);
                                  } else {
                                    return [
                                      createTextVNode("\u041D\u0430\u0447\u0438\u0441\u043B\u0435\u043D\u0438\u0435")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_UiTabsTrigger, {
                                  class: "w-full",
                                  value: "\u041F\u043E\u0441\u0442\u0443\u043F\u043B\u0435\u043D\u0438\u0435"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("\u041F\u043E\u0441\u0442\u0443\u043F\u043B\u0435\u043D\u0438\u0435")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_UiTabsTrigger, {
                                  class: "w-full",
                                  value: "\u0412\u044B\u043F\u043B\u0430\u0442\u0430"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("\u0412\u044B\u043F\u043B\u0430\u0442\u0430")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_UiTabsTrigger, {
                                  class: "w-full",
                                  value: "\u041D\u0430\u0447\u0438\u0441\u043B\u0435\u043D\u0438\u0435"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("\u041D\u0430\u0447\u0438\u0441\u043B\u0435\u043D\u0438\u0435")
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
                          createVNode(_component_UiTabsList, { class: "w-full" }, {
                            default: withCtx(() => [
                              createVNode(_component_UiTabsTrigger, {
                                class: "w-full",
                                value: "\u041F\u043E\u0441\u0442\u0443\u043F\u043B\u0435\u043D\u0438\u0435"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("\u041F\u043E\u0441\u0442\u0443\u043F\u043B\u0435\u043D\u0438\u0435")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_UiTabsTrigger, {
                                class: "w-full",
                                value: "\u0412\u044B\u043F\u043B\u0430\u0442\u0430"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("\u0412\u044B\u043F\u043B\u0430\u0442\u0430")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_UiTabsTrigger, {
                                class: "w-full",
                                value: "\u041D\u0430\u0447\u0438\u0441\u043B\u0435\u043D\u0438\u0435"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("\u041D\u0430\u0447\u0438\u0441\u043B\u0435\u043D\u0438\u0435")
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
                  _push3(`</div><div class="relative"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UiInput, {
                    modelValue: formData.value.operationDate,
                    "onUpdate:modelValue": ($event) => formData.value.operationDate = $event,
                    type: "date",
                    placeholder: "\u0414\u0430\u0442\u0430 \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u0438",
                    class: formData.value.operationDate ? "" : "outline-1 outline-rose-300"
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` \u0414\u0430\u0442\u0430 \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u0438 `);
                      } else {
                        return [
                          createTextVNode(" \u0414\u0430\u0442\u0430 \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u0438 ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div><div class="relative"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UiTextarea, {
                    modelValue: formData.value.payPurpose,
                    "onUpdate:modelValue": ($event) => formData.value.payPurpose = $event,
                    placeholder: "\u041D\u0430\u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u043F\u043B\u0430\u0442\u0435\u0436\u0430"
                  }, null, _parent3, _scopeId2));
                  if (formData.value.payPurpose) {
                    _push3(ssrRenderComponent(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(` \u041D\u0430\u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u043F\u043B\u0430\u0442\u0435\u0436\u0430 `);
                        } else {
                          return [
                            createTextVNode(" \u041D\u0430\u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u043F\u043B\u0430\u0442\u0435\u0436\u0430 ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`</div></div><div class="space-y-3"${_scopeId2}><div class="flex gap-4 justify-between"${_scopeId2}><div class="relative"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UiInput, {
                    value: totalAmountPrice.value,
                    type: "number",
                    placeholder: "\u041E\u0431\u0449\u0430\u044F \u0441\u0443\u043C\u043C\u0430",
                    disabled: "",
                    class: "bg-gray-100"
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` \u041E\u0431\u0449\u0430\u044F \u0441\u0443\u043C\u043C\u0430 `);
                      } else {
                        return [
                          createTextVNode(" \u041E\u0431\u0449\u0430\u044F \u0441\u0443\u043C\u043C\u0430 ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                  _push3(ssrRenderComponent(_component_MyPlanfactCategoriesCreateModal, { onCategoryCreated: handleCategory }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_MyPlanfactCounterPartiesCreateModal, { onCounterpartyCreated: handleCounterParty }, null, _parent3, _scopeId2));
                  _push3(`</div><!--[-->`);
                  ssrRenderList(formData.value.operationPositions, (position, index) => {
                    var _a, _b, _c;
                    _push3(`<div class="flex gap-2 items-center"${_scopeId2}><div class="relative flex-1"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_UiInput, {
                      modelValue: position.amount,
                      "onUpdate:modelValue": ($event) => position.amount = $event,
                      modelModifiers: { number: true },
                      type: "number",
                      placeholder: "\u0421\u0443\u043C\u043C\u0430",
                      class: position.amount > 0 ? "" : "outline-1 outline-rose-300"
                    }, null, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(` \u0421\u0443\u043C\u043C\u0430 `);
                        } else {
                          return [
                            createTextVNode(" \u0421\u0443\u043C\u043C\u0430 ")
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(`</div><div class="relative"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(` \u0421\u0442\u0430\u0442\u044C\u044F `);
                        } else {
                          return [
                            createTextVNode(" \u0421\u0442\u0430\u0442\u044C\u044F ")
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_MyComboboxModels, {
                      class: "min-w-[200px] w-[200px] overflow-hidden",
                      items: expenseCategories.value.map((c) => ({ value: c.id, label: c.name })),
                      label: (_b = (_a = expenseCategories.value.find(
                        (c) => c.id === position.expenseCategoryId
                      )) == null ? void 0 : _a.name) != null ? _b : "\u0412\u044B\u0431\u0440\u0430\u0442\u044C",
                      "model-value": position.expenseCategoryId,
                      onSelectedItem: (value) => position.expenseCategoryId = value
                    }, null, _parent3, _scopeId2));
                    _push3(`</div><div class="relative grow"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(` \u041A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442 `);
                        } else {
                          return [
                            createTextVNode(" \u041A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442 ")
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_sfc_main$c, {
                      items: formattedCounterParties.value,
                      "selected-id": position.counterPartyId,
                      label: (() => {
                        const counterparty = formattedCounterParties.value.find(
                          (c) => c.id === position.counterPartyId
                        );
                        return counterparty ? counterparty.title : "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u043A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442\u0430";
                      })(),
                      placeholder: "\u041F\u043E\u0438\u0441\u043A \u043A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442\u0430...",
                      "has-more": unref(counterPartiesFiltersPagination).hasNext,
                      "is-loading": unref(isLoadingCounterParties),
                      "on-search": handleCounterPartySearch,
                      "on-load-more": handleCounterPartyLoadMore,
                      "onUpdate:selectedId": (value) => position.counterPartyId = value
                    }, null, _parent3, _scopeId2));
                    _push3(`</div>`);
                    _push3(ssrRenderComponent(_component_UiButton, {
                      variant: "destructive",
                      disabled: ((_c = formData.value.operationPositions) == null ? void 0 : _c.length) === 1,
                      onClick: ($event) => removePosition(index)
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(` X `);
                        } else {
                          return [
                            createTextVNode(" X ")
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(`</div>`);
                  });
                  _push3(`<!--]--><div class="flex flex-col mt-6"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UiButton, {
                    class: "ml-auto",
                    onClick: addPosition
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043F\u043E\u0437\u0438\u0446\u0438\u044E`);
                      } else {
                        return [
                          createTextVNode("\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043F\u043E\u0437\u0438\u0446\u0438\u044E")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div></div></div><div class="flex justify-end gap-2 mt-4"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UiButton, {
                    variant: "outline",
                    onClick: ($event) => isOpen.value = false
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`\u041E\u0442\u043C\u0435\u043D\u0430`);
                      } else {
                        return [
                          createTextVNode("\u041E\u0442\u043C\u0435\u043D\u0430")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UiButton, {
                    disabled: disabled.value,
                    onClick: createOperation
                  }, {
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
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode(_component_UiDialogHeader, null, {
                      default: withCtx(() => [
                        createVNode(_component_UiDialogTitle, null, {
                          default: withCtx(() => [
                            createTextVNode("\u0421\u043E\u0437\u0434\u0430\u043D\u0438\u0435 \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u0438")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UiDialogDescription)
                      ]),
                      _: 1
                    }),
                    createVNode("div", { class: "flex gap-2 min-h-[600px]" }, [
                      createVNode("div", { class: "space-y-5 min-w-[450px]" }, [
                        createVNode("div", { class: "relative w-full" }, [
                          createVNode(_component_UiTabs, {
                            modelValue: opTypeTab.value,
                            "onUpdate:modelValue": ($event) => opTypeTab.value = $event
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_UiTabsList, { class: "w-full" }, {
                                default: withCtx(() => [
                                  createVNode(_component_UiTabsTrigger, {
                                    class: "w-full",
                                    value: "\u041F\u043E\u0441\u0442\u0443\u043F\u043B\u0435\u043D\u0438\u0435"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("\u041F\u043E\u0441\u0442\u0443\u043F\u043B\u0435\u043D\u0438\u0435")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_UiTabsTrigger, {
                                    class: "w-full",
                                    value: "\u0412\u044B\u043F\u043B\u0430\u0442\u0430"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("\u0412\u044B\u043F\u043B\u0430\u0442\u0430")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_UiTabsTrigger, {
                                    class: "w-full",
                                    value: "\u041D\u0430\u0447\u0438\u0441\u043B\u0435\u043D\u0438\u0435"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("\u041D\u0430\u0447\u0438\u0441\u043B\u0435\u043D\u0438\u0435")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        createVNode("div", { class: "relative" }, [
                          createVNode(_component_UiInput, {
                            modelValue: formData.value.operationDate,
                            "onUpdate:modelValue": ($event) => formData.value.operationDate = $event,
                            type: "date",
                            placeholder: "\u0414\u0430\u0442\u0430 \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u0438",
                            class: formData.value.operationDate ? "" : "outline-1 outline-rose-300"
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "class"]),
                          createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                            default: withCtx(() => [
                              createTextVNode(" \u0414\u0430\u0442\u0430 \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u0438 ")
                            ]),
                            _: 1
                          })
                        ]),
                        createVNode("div", { class: "relative" }, [
                          createVNode(_component_UiTextarea, {
                            modelValue: formData.value.payPurpose,
                            "onUpdate:modelValue": ($event) => formData.value.payPurpose = $event,
                            placeholder: "\u041D\u0430\u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u043F\u043B\u0430\u0442\u0435\u0436\u0430"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                          formData.value.payPurpose ? (openBlock(), createBlock(_component_UiLabel, {
                            key: 0,
                            class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" \u041D\u0430\u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u043F\u043B\u0430\u0442\u0435\u0436\u0430 ")
                            ]),
                            _: 1
                          })) : createCommentVNode("", true)
                        ])
                      ]),
                      createVNode("div", { class: "space-y-3" }, [
                        createVNode("div", { class: "flex gap-4 justify-between" }, [
                          createVNode("div", { class: "relative" }, [
                            createVNode(_component_UiInput, {
                              value: totalAmountPrice.value,
                              type: "number",
                              placeholder: "\u041E\u0431\u0449\u0430\u044F \u0441\u0443\u043C\u043C\u0430",
                              disabled: "",
                              class: "bg-gray-100"
                            }, null, 8, ["value"]),
                            createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                              default: withCtx(() => [
                                createTextVNode(" \u041E\u0431\u0449\u0430\u044F \u0441\u0443\u043C\u043C\u0430 ")
                              ]),
                              _: 1
                            })
                          ]),
                          createVNode(_component_MyPlanfactCategoriesCreateModal, { onCategoryCreated: handleCategory }),
                          createVNode(_component_MyPlanfactCounterPartiesCreateModal, { onCounterpartyCreated: handleCounterParty })
                        ]),
                        (openBlock(true), createBlock(Fragment, null, renderList(formData.value.operationPositions, (position, index) => {
                          var _a, _b, _c;
                          return openBlock(), createBlock("div", {
                            key: index,
                            class: "flex gap-2 items-center"
                          }, [
                            createVNode("div", { class: "relative flex-1" }, [
                              createVNode(_component_UiInput, {
                                modelValue: position.amount,
                                "onUpdate:modelValue": ($event) => position.amount = $event,
                                modelModifiers: { number: true },
                                type: "number",
                                placeholder: "\u0421\u0443\u043C\u043C\u0430",
                                class: position.amount > 0 ? "" : "outline-1 outline-rose-300"
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "class"]),
                              createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                                default: withCtx(() => [
                                  createTextVNode(" \u0421\u0443\u043C\u043C\u0430 ")
                                ]),
                                _: 1
                              })
                            ]),
                            createVNode("div", { class: "relative" }, [
                              createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                                default: withCtx(() => [
                                  createTextVNode(" \u0421\u0442\u0430\u0442\u044C\u044F ")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_MyComboboxModels, {
                                class: "min-w-[200px] w-[200px] overflow-hidden",
                                items: expenseCategories.value.map((c) => ({ value: c.id, label: c.name })),
                                label: (_b = (_a = expenseCategories.value.find(
                                  (c) => c.id === position.expenseCategoryId
                                )) == null ? void 0 : _a.name) != null ? _b : "\u0412\u044B\u0431\u0440\u0430\u0442\u044C",
                                "model-value": position.expenseCategoryId,
                                onSelectedItem: (value) => position.expenseCategoryId = value
                              }, null, 8, ["items", "label", "model-value", "onSelectedItem"])
                            ]),
                            createVNode("div", { class: "relative grow" }, [
                              createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                                default: withCtx(() => [
                                  createTextVNode(" \u041A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442 ")
                                ]),
                                _: 1
                              }),
                              createVNode(_sfc_main$c, {
                                items: formattedCounterParties.value,
                                "selected-id": position.counterPartyId,
                                label: (() => {
                                  const counterparty = formattedCounterParties.value.find(
                                    (c) => c.id === position.counterPartyId
                                  );
                                  return counterparty ? counterparty.title : "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u043A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442\u0430";
                                })(),
                                placeholder: "\u041F\u043E\u0438\u0441\u043A \u043A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442\u0430...",
                                "has-more": unref(counterPartiesFiltersPagination).hasNext,
                                "is-loading": unref(isLoadingCounterParties),
                                "on-search": handleCounterPartySearch,
                                "on-load-more": handleCounterPartyLoadMore,
                                "onUpdate:selectedId": (value) => position.counterPartyId = value
                              }, null, 8, ["items", "selected-id", "label", "has-more", "is-loading", "onUpdate:selectedId"])
                            ]),
                            createVNode(_component_UiButton, {
                              variant: "destructive",
                              disabled: ((_c = formData.value.operationPositions) == null ? void 0 : _c.length) === 1,
                              onClick: ($event) => removePosition(index)
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" X ")
                              ]),
                              _: 2
                            }, 1032, ["disabled", "onClick"])
                          ]);
                        }), 128)),
                        createVNode("div", { class: "flex flex-col mt-6" }, [
                          createVNode(_component_UiButton, {
                            class: "ml-auto",
                            onClick: addPosition
                          }, {
                            default: withCtx(() => [
                              createTextVNode("\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043F\u043E\u0437\u0438\u0446\u0438\u044E")
                            ]),
                            _: 1
                          })
                        ])
                      ])
                    ]),
                    createVNode("div", { class: "flex justify-end gap-2 mt-4" }, [
                      createVNode(_component_UiButton, {
                        variant: "outline",
                        onClick: ($event) => isOpen.value = false
                      }, {
                        default: withCtx(() => [
                          createTextVNode("\u041E\u0442\u043C\u0435\u043D\u0430")
                        ]),
                        _: 1
                      }, 8, ["onClick"]),
                      createVNode(_component_UiButton, {
                        disabled: disabled.value,
                        onClick: createOperation
                      }, {
                        default: withCtx(() => [
                          createTextVNode("\u0421\u043E\u0437\u0434\u0430\u0442\u044C")
                        ]),
                        _: 1
                      }, 8, ["disabled"])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UiDialogTrigger, { class: "z-[1]" }, {
                default: withCtx(() => [
                  createVNode(_component_UiButton, { class: "h-8" }, {
                    default: withCtx(() => [
                      createTextVNode("+")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_UiDialogContent, { class: "max-w-[1200px]" }, {
                default: withCtx(() => [
                  createVNode(_component_UiDialogHeader, null, {
                    default: withCtx(() => [
                      createVNode(_component_UiDialogTitle, null, {
                        default: withCtx(() => [
                          createTextVNode("\u0421\u043E\u0437\u0434\u0430\u043D\u0438\u0435 \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u0438")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_UiDialogDescription)
                    ]),
                    _: 1
                  }),
                  createVNode("div", { class: "flex gap-2 min-h-[600px]" }, [
                    createVNode("div", { class: "space-y-5 min-w-[450px]" }, [
                      createVNode("div", { class: "relative w-full" }, [
                        createVNode(_component_UiTabs, {
                          modelValue: opTypeTab.value,
                          "onUpdate:modelValue": ($event) => opTypeTab.value = $event
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_UiTabsList, { class: "w-full" }, {
                              default: withCtx(() => [
                                createVNode(_component_UiTabsTrigger, {
                                  class: "w-full",
                                  value: "\u041F\u043E\u0441\u0442\u0443\u043F\u043B\u0435\u043D\u0438\u0435"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("\u041F\u043E\u0441\u0442\u0443\u043F\u043B\u0435\u043D\u0438\u0435")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_UiTabsTrigger, {
                                  class: "w-full",
                                  value: "\u0412\u044B\u043F\u043B\u0430\u0442\u0430"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("\u0412\u044B\u043F\u043B\u0430\u0442\u0430")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_UiTabsTrigger, {
                                  class: "w-full",
                                  value: "\u041D\u0430\u0447\u0438\u0441\u043B\u0435\u043D\u0438\u0435"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("\u041D\u0430\u0447\u0438\u0441\u043B\u0435\u043D\u0438\u0435")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      createVNode("div", { class: "relative" }, [
                        createVNode(_component_UiInput, {
                          modelValue: formData.value.operationDate,
                          "onUpdate:modelValue": ($event) => formData.value.operationDate = $event,
                          type: "date",
                          placeholder: "\u0414\u0430\u0442\u0430 \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u0438",
                          class: formData.value.operationDate ? "" : "outline-1 outline-rose-300"
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "class"]),
                        createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                          default: withCtx(() => [
                            createTextVNode(" \u0414\u0430\u0442\u0430 \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u0438 ")
                          ]),
                          _: 1
                        })
                      ]),
                      createVNode("div", { class: "relative" }, [
                        createVNode(_component_UiTextarea, {
                          modelValue: formData.value.payPurpose,
                          "onUpdate:modelValue": ($event) => formData.value.payPurpose = $event,
                          placeholder: "\u041D\u0430\u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u043F\u043B\u0430\u0442\u0435\u0436\u0430"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                        formData.value.payPurpose ? (openBlock(), createBlock(_component_UiLabel, {
                          key: 0,
                          class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" \u041D\u0430\u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u043F\u043B\u0430\u0442\u0435\u0436\u0430 ")
                          ]),
                          _: 1
                        })) : createCommentVNode("", true)
                      ])
                    ]),
                    createVNode("div", { class: "space-y-3" }, [
                      createVNode("div", { class: "flex gap-4 justify-between" }, [
                        createVNode("div", { class: "relative" }, [
                          createVNode(_component_UiInput, {
                            value: totalAmountPrice.value,
                            type: "number",
                            placeholder: "\u041E\u0431\u0449\u0430\u044F \u0441\u0443\u043C\u043C\u0430",
                            disabled: "",
                            class: "bg-gray-100"
                          }, null, 8, ["value"]),
                          createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                            default: withCtx(() => [
                              createTextVNode(" \u041E\u0431\u0449\u0430\u044F \u0441\u0443\u043C\u043C\u0430 ")
                            ]),
                            _: 1
                          })
                        ]),
                        createVNode(_component_MyPlanfactCategoriesCreateModal, { onCategoryCreated: handleCategory }),
                        createVNode(_component_MyPlanfactCounterPartiesCreateModal, { onCounterpartyCreated: handleCounterParty })
                      ]),
                      (openBlock(true), createBlock(Fragment, null, renderList(formData.value.operationPositions, (position, index) => {
                        var _a, _b, _c;
                        return openBlock(), createBlock("div", {
                          key: index,
                          class: "flex gap-2 items-center"
                        }, [
                          createVNode("div", { class: "relative flex-1" }, [
                            createVNode(_component_UiInput, {
                              modelValue: position.amount,
                              "onUpdate:modelValue": ($event) => position.amount = $event,
                              modelModifiers: { number: true },
                              type: "number",
                              placeholder: "\u0421\u0443\u043C\u043C\u0430",
                              class: position.amount > 0 ? "" : "outline-1 outline-rose-300"
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "class"]),
                            createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                              default: withCtx(() => [
                                createTextVNode(" \u0421\u0443\u043C\u043C\u0430 ")
                              ]),
                              _: 1
                            })
                          ]),
                          createVNode("div", { class: "relative" }, [
                            createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                              default: withCtx(() => [
                                createTextVNode(" \u0421\u0442\u0430\u0442\u044C\u044F ")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_MyComboboxModels, {
                              class: "min-w-[200px] w-[200px] overflow-hidden",
                              items: expenseCategories.value.map((c) => ({ value: c.id, label: c.name })),
                              label: (_b = (_a = expenseCategories.value.find(
                                (c) => c.id === position.expenseCategoryId
                              )) == null ? void 0 : _a.name) != null ? _b : "\u0412\u044B\u0431\u0440\u0430\u0442\u044C",
                              "model-value": position.expenseCategoryId,
                              onSelectedItem: (value) => position.expenseCategoryId = value
                            }, null, 8, ["items", "label", "model-value", "onSelectedItem"])
                          ]),
                          createVNode("div", { class: "relative grow" }, [
                            createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                              default: withCtx(() => [
                                createTextVNode(" \u041A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442 ")
                              ]),
                              _: 1
                            }),
                            createVNode(_sfc_main$c, {
                              items: formattedCounterParties.value,
                              "selected-id": position.counterPartyId,
                              label: (() => {
                                const counterparty = formattedCounterParties.value.find(
                                  (c) => c.id === position.counterPartyId
                                );
                                return counterparty ? counterparty.title : "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u043A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442\u0430";
                              })(),
                              placeholder: "\u041F\u043E\u0438\u0441\u043A \u043A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442\u0430...",
                              "has-more": unref(counterPartiesFiltersPagination).hasNext,
                              "is-loading": unref(isLoadingCounterParties),
                              "on-search": handleCounterPartySearch,
                              "on-load-more": handleCounterPartyLoadMore,
                              "onUpdate:selectedId": (value) => position.counterPartyId = value
                            }, null, 8, ["items", "selected-id", "label", "has-more", "is-loading", "onUpdate:selectedId"])
                          ]),
                          createVNode(_component_UiButton, {
                            variant: "destructive",
                            disabled: ((_c = formData.value.operationPositions) == null ? void 0 : _c.length) === 1,
                            onClick: ($event) => removePosition(index)
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" X ")
                            ]),
                            _: 2
                          }, 1032, ["disabled", "onClick"])
                        ]);
                      }), 128)),
                      createVNode("div", { class: "flex flex-col mt-6" }, [
                        createVNode(_component_UiButton, {
                          class: "ml-auto",
                          onClick: addPosition
                        }, {
                          default: withCtx(() => [
                            createTextVNode("\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043F\u043E\u0437\u0438\u0446\u0438\u044E")
                          ]),
                          _: 1
                        })
                      ])
                    ])
                  ]),
                  createVNode("div", { class: "flex justify-end gap-2 mt-4" }, [
                    createVNode(_component_UiButton, {
                      variant: "outline",
                      onClick: ($event) => isOpen.value = false
                    }, {
                      default: withCtx(() => [
                        createTextVNode("\u041E\u0442\u043C\u0435\u043D\u0430")
                      ]),
                      _: 1
                    }, 8, ["onClick"]),
                    createVNode(_component_UiButton, {
                      disabled: disabled.value,
                      onClick: createOperation
                    }, {
                      default: withCtx(() => [
                        createTextVNode("\u0421\u043E\u0437\u0434\u0430\u0442\u044C")
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
      }, _parent));
    };
  }
});
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/my/planfact/OperationCreateModal.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const _sfc_main$a = /* @__PURE__ */ defineComponent({
  __name: "ToggleGroup",
  __ssrInlineRender: true,
  props: {
    rovingFocus: { type: Boolean },
    disabled: { type: Boolean },
    orientation: {},
    dir: {},
    loop: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    type: {},
    modelValue: {},
    defaultValue: {},
    class: {},
    variant: {},
    size: {}
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    provide("toggleGroup", {
      variant: props.variant,
      size: props.size
    });
    const delegatedProps = computed(() => {
      const { class: _, ...delegated } = props;
      return delegated;
    });
    const forwarded = useForwardPropsEmits(delegatedProps, emits);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(ToggleGroupRoot), mergeProps(unref(forwarded), {
        class: unref(cn)("flex items-center justify-center gap-1", props.class)
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
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/toggle-group/ToggleGroup.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const toggleVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-white transition-colors hover:bg-slate-100 hover:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-slate-100 data-[state=on]:text-slate-900 dark:ring-offset-slate-950 dark:hover:bg-slate-800 dark:hover:text-slate-400 dark:focus-visible:ring-slate-300 dark:data-[state=on]:bg-slate-800 dark:data-[state=on]:text-slate-50",
  {
    variants: {
      variant: {
        default: "bg-transparent",
        outline: "border border-slate-200 bg-transparent hover:bg-slate-100 hover:text-slate-900 dark:border-slate-800 dark:hover:bg-slate-800 dark:hover:text-slate-50"
      },
      size: {
        default: "h-10 px-3",
        sm: "h-9 px-2.5",
        lg: "h-11 px-5"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  __name: "ToggleGroupItem",
  __ssrInlineRender: true,
  props: {
    value: {},
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: {},
    variant: {},
    size: {}
  },
  setup(__props) {
    const props = __props;
    const context = inject("toggleGroup");
    const delegatedProps = computed(() => {
      const { class: _, variant, size, ...delegated } = props;
      return delegated;
    });
    const forwardedProps = useForwardProps(delegatedProps);
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b;
      _push(ssrRenderComponent(unref(ToggleGroupItem), mergeProps(unref(forwardedProps), {
        class: unref(cn)(
          unref(toggleVariants)({
            variant: ((_a = unref(context)) == null ? void 0 : _a.variant) || _ctx.variant,
            size: ((_b = unref(context)) == null ? void 0 : _b.size) || _ctx.size
          }),
          props.class
        )
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
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/toggle-group/ToggleGroupItem.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "DataTableToolbar",
  __ssrInlineRender: true,
  props: {
    table: {},
    counterPartiesFilters: {},
    expenseCategoriesFilters: {},
    distributionFilter: {},
    typeOfOperationFilter: {},
    selectedCounterPartyIds: {},
    selectedExpenseCategoryIds: {},
    counterPartiesFiltersPagination: {},
    isLoadingCounterParties: { type: Boolean },
    onCounterPartiesLoadMore: { type: Function },
    onCounterPartiesSearch: { type: Function }
  },
  emits: ["counter-parties-filter-change", "expense-categories-filter-change", "distribution-filter-change", "type-of-operation-filter-change"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const selectedCounterPartyIds = ref(
      props.selectedCounterPartyIds || []
    );
    const selectedExpenseCategoryIds = ref(
      props.selectedExpenseCategoryIds || []
    );
    const localDistributionFilter = ref(props.distributionFilter);
    const localTypeOfOperationFilter = ref(props.typeOfOperationFilter);
    computed(
      () => props.table.getState().columnFilters.length > 0 || selectedCounterPartyIds.value.length > 0 || selectedExpenseCategoryIds.value.length > 0 || localDistributionFilter.value !== "all" || localTypeOfOperationFilter.value !== "all"
    );
    const handleExpenseCategoryToggle = (id) => {
      const index = selectedExpenseCategoryIds.value.indexOf(id);
      if (index > -1) {
        selectedExpenseCategoryIds.value.splice(index, 1);
      } else {
        selectedExpenseCategoryIds.value.push(id);
      }
      emit("expense-categories-filter-change", [
        ...selectedExpenseCategoryIds.value
      ]);
    };
    const resetExpenseCategoriesFilter = () => {
      selectedExpenseCategoryIds.value = [];
      emit("expense-categories-filter-change", []);
    };
    const handleDistributionFilterChange = (value) => {
      localDistributionFilter.value = value;
      emit("distribution-filter-change", value);
    };
    const handleTypeOfOperationFilterChange = (value) => {
      localTypeOfOperationFilter.value = value;
      emit("type-of-operation-filter-change", value);
    };
    watch(
      () => props.distributionFilter,
      (newValue) => {
        localDistributionFilter.value = newValue;
      }
    );
    watch(
      () => props.typeOfOperationFilter,
      (newValue) => {
        localTypeOfOperationFilter.value = newValue;
      }
    );
    watch(
      () => props.selectedCounterPartyIds,
      (newValue) => {
        if (newValue) {
          selectedCounterPartyIds.value = [...newValue];
        } else {
          selectedCounterPartyIds.value = [];
        }
      },
      { immediate: true }
    );
    watch(
      () => props.selectedExpenseCategoryIds,
      (newValue) => {
        if (newValue) {
          selectedExpenseCategoryIds.value = [...newValue];
        } else {
          selectedExpenseCategoryIds.value = [];
        }
      },
      { immediate: true }
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiPopover = _sfc_main$2$4;
      const _component_UiPopoverTrigger = _sfc_main$1$4;
      const _component_UiButton = _sfc_main$h;
      const _component_UiSeparator = _sfc_main$f;
      const _component_UiBadge = _sfc_main$v;
      const _component_UiPopoverContent = _sfc_main$w;
      const _component_UiCommand = _sfc_main$5$2;
      const _component_UiCommandInput = _sfc_main$2$5;
      const _component_UiCommandList = _sfc_main$x;
      const _component_UiCommandEmpty = _sfc_main$4$3;
      const _component_UiCommandGroup = _sfc_main$3$3;
      const _component_UiCommandItem = _sfc_main$1$5;
      const _component_UiCommandSeparator = _sfc_main$y;
      const _component_UiNavigationMenu = _sfc_main$4$4;
      const _component_UiNavigationMenuList = _sfc_main$1$6;
      const _component_UiNavigationMenuItem = _sfc_main$2$6;
      const _component_UiNavigationMenuTrigger = _sfc_main$z;
      const _component_UiNavigationMenuContent = _sfc_main$3$4;
      const _component_UiToggleGroup = _sfc_main$a;
      const _component_UiToggleGroupItem = _sfc_main$9;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex items-center justify-between" }, _attrs))}><div class="flex flex-1 items-center gap-2">`);
      if (_ctx.expenseCategoriesFilters.length > 0) {
        _push(ssrRenderComponent(_component_UiPopover, null, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_UiPopoverTrigger, { "as-child": "" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UiButton, {
                      variant: "outline",
                      size: "sm",
                      class: "h-8 border-dashed"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(unref(CirclePlus), { class: "mr-2 h-4 w-4" }, null, _parent4, _scopeId3));
                          _push4(` \u0421\u0442\u0430\u0442\u044C\u044F `);
                          if (selectedExpenseCategoryIds.value.length > 0) {
                            _push4(`<!--[-->`);
                            _push4(ssrRenderComponent(_component_UiSeparator, {
                              orientation: "vertical",
                              class: "mx-2 h-4"
                            }, null, _parent4, _scopeId3));
                            _push4(ssrRenderComponent(_component_UiBadge, {
                              variant: "secondary",
                              class: "rounded-sm px-1 font-normal lg:hidden"
                            }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`${ssrInterpolate(selectedExpenseCategoryIds.value.length)}`);
                                } else {
                                  return [
                                    createTextVNode(toDisplayString(selectedExpenseCategoryIds.value.length), 1)
                                  ];
                                }
                              }),
                              _: 1
                            }, _parent4, _scopeId3));
                            _push4(`<div class="hidden space-x-1 lg:flex"${_scopeId3}>`);
                            if (selectedExpenseCategoryIds.value.length > 0) {
                              _push4(ssrRenderComponent(_component_UiBadge, {
                                variant: "secondary",
                                class: "rounded-sm px-1 font-normal"
                              }, {
                                default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                  if (_push5) {
                                    _push5(`${ssrInterpolate(selectedExpenseCategoryIds.value.length)}`);
                                  } else {
                                    return [
                                      createTextVNode(toDisplayString(selectedExpenseCategoryIds.value.length), 1)
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent4, _scopeId3));
                            } else {
                              _push4(`<!--[-->`);
                              ssrRenderList(_ctx.expenseCategoriesFilters.filter(
                                (cat) => selectedExpenseCategoryIds.value.includes(cat.id)
                              ), (category) => {
                                _push4(ssrRenderComponent(_component_UiBadge, {
                                  key: category.id,
                                  variant: "secondary",
                                  class: "rounded-sm px-1 font-normal"
                                }, {
                                  default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                    if (_push5) {
                                      _push5(`${ssrInterpolate(category.name)}`);
                                    } else {
                                      return [
                                        createTextVNode(toDisplayString(category.name), 1)
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent4, _scopeId3));
                              });
                              _push4(`<!--]-->`);
                            }
                            _push4(`</div><!--]-->`);
                          } else {
                            _push4(`<!---->`);
                          }
                        } else {
                          return [
                            createVNode(unref(CirclePlus), { class: "mr-2 h-4 w-4" }),
                            createTextVNode(" \u0421\u0442\u0430\u0442\u044C\u044F "),
                            selectedExpenseCategoryIds.value.length > 0 ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                              createVNode(_component_UiSeparator, {
                                orientation: "vertical",
                                class: "mx-2 h-4"
                              }),
                              createVNode(_component_UiBadge, {
                                variant: "secondary",
                                class: "rounded-sm px-1 font-normal lg:hidden"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(selectedExpenseCategoryIds.value.length), 1)
                                ]),
                                _: 1
                              }),
                              createVNode("div", { class: "hidden space-x-1 lg:flex" }, [
                                selectedExpenseCategoryIds.value.length > 0 ? (openBlock(), createBlock(_component_UiBadge, {
                                  key: 0,
                                  variant: "secondary",
                                  class: "rounded-sm px-1 font-normal"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(selectedExpenseCategoryIds.value.length), 1)
                                  ]),
                                  _: 1
                                })) : (openBlock(true), createBlock(Fragment, { key: 1 }, renderList(_ctx.expenseCategoriesFilters.filter(
                                  (cat) => selectedExpenseCategoryIds.value.includes(cat.id)
                                ), (category) => {
                                  return openBlock(), createBlock(_component_UiBadge, {
                                    key: category.id,
                                    variant: "secondary",
                                    class: "rounded-sm px-1 font-normal"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(category.name), 1)
                                    ]),
                                    _: 2
                                  }, 1024);
                                }), 128))
                              ])
                            ], 64)) : createCommentVNode("", true)
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_UiButton, {
                        variant: "outline",
                        size: "sm",
                        class: "h-8 border-dashed"
                      }, {
                        default: withCtx(() => [
                          createVNode(unref(CirclePlus), { class: "mr-2 h-4 w-4" }),
                          createTextVNode(" \u0421\u0442\u0430\u0442\u044C\u044F "),
                          selectedExpenseCategoryIds.value.length > 0 ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                            createVNode(_component_UiSeparator, {
                              orientation: "vertical",
                              class: "mx-2 h-4"
                            }),
                            createVNode(_component_UiBadge, {
                              variant: "secondary",
                              class: "rounded-sm px-1 font-normal lg:hidden"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(selectedExpenseCategoryIds.value.length), 1)
                              ]),
                              _: 1
                            }),
                            createVNode("div", { class: "hidden space-x-1 lg:flex" }, [
                              selectedExpenseCategoryIds.value.length > 0 ? (openBlock(), createBlock(_component_UiBadge, {
                                key: 0,
                                variant: "secondary",
                                class: "rounded-sm px-1 font-normal"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(selectedExpenseCategoryIds.value.length), 1)
                                ]),
                                _: 1
                              })) : (openBlock(true), createBlock(Fragment, { key: 1 }, renderList(_ctx.expenseCategoriesFilters.filter(
                                (cat) => selectedExpenseCategoryIds.value.includes(cat.id)
                              ), (category) => {
                                return openBlock(), createBlock(_component_UiBadge, {
                                  key: category.id,
                                  variant: "secondary",
                                  class: "rounded-sm px-1 font-normal"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(category.name), 1)
                                  ]),
                                  _: 2
                                }, 1024);
                              }), 128))
                            ])
                          ], 64)) : createCommentVNode("", true)
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UiPopoverContent, {
                class: "w-[250px] p-0",
                align: "start"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UiCommand, {
                      "filter-function": (list, term) => list.filter((i) => {
                        var _a;
                        return (_a = i.name.toLowerCase()) == null ? void 0 : _a.includes(term);
                      })
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_UiCommandInput, { placeholder: "\u0421\u0442\u0430\u0442\u044C\u044F" }, null, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_component_UiCommandList, null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_UiCommandEmpty, null, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`\u041D\u0435\u0442 \u0441\u043E\u0432\u043F\u0430\u0434\u0435\u043D\u0438\u0439.`);
                                    } else {
                                      return [
                                        createTextVNode("\u041D\u0435\u0442 \u0441\u043E\u0432\u043F\u0430\u0434\u0435\u043D\u0438\u0439.")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                                _push5(ssrRenderComponent(_component_UiCommandGroup, null, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`<!--[-->`);
                                      ssrRenderList(_ctx.expenseCategoriesFilters, (category) => {
                                        _push6(ssrRenderComponent(_component_UiCommandItem, {
                                          key: category.id,
                                          value: category,
                                          onSelect: ($event) => handleExpenseCategoryToggle(category.id)
                                        }, {
                                          default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                            if (_push7) {
                                              _push7(`<div class="${ssrRenderClass(
                                                selectedExpenseCategoryIds.value.includes(category.id) ? "mr-2 flex h-4 w-4 items-center justify-center rounded-sm border border-primary bg-primary text-primary-foreground" : "mr-2 flex h-4 w-4 items-center justify-center rounded-sm border border-primary opacity-50 [&_svg]:invisible"
                                              )}"${_scopeId6}>`);
                                              _push7(ssrRenderComponent(unref(Check), { class: "h-4 w-4" }, null, _parent7, _scopeId6));
                                              _push7(`</div><span${_scopeId6}>${ssrInterpolate(category.name)}</span>`);
                                            } else {
                                              return [
                                                createVNode("div", {
                                                  class: selectedExpenseCategoryIds.value.includes(category.id) ? "mr-2 flex h-4 w-4 items-center justify-center rounded-sm border border-primary bg-primary text-primary-foreground" : "mr-2 flex h-4 w-4 items-center justify-center rounded-sm border border-primary opacity-50 [&_svg]:invisible"
                                                }, [
                                                  createVNode(unref(Check), { class: "h-4 w-4" })
                                                ], 2),
                                                createVNode("span", null, toDisplayString(category.name), 1)
                                              ];
                                            }
                                          }),
                                          _: 2
                                        }, _parent6, _scopeId5));
                                      });
                                      _push6(`<!--]-->`);
                                    } else {
                                      return [
                                        (openBlock(true), createBlock(Fragment, null, renderList(_ctx.expenseCategoriesFilters, (category) => {
                                          return openBlock(), createBlock(_component_UiCommandItem, {
                                            key: category.id,
                                            value: category,
                                            onSelect: ($event) => handleExpenseCategoryToggle(category.id)
                                          }, {
                                            default: withCtx(() => [
                                              createVNode("div", {
                                                class: selectedExpenseCategoryIds.value.includes(category.id) ? "mr-2 flex h-4 w-4 items-center justify-center rounded-sm border border-primary bg-primary text-primary-foreground" : "mr-2 flex h-4 w-4 items-center justify-center rounded-sm border border-primary opacity-50 [&_svg]:invisible"
                                              }, [
                                                createVNode(unref(Check), { class: "h-4 w-4" })
                                              ], 2),
                                              createVNode("span", null, toDisplayString(category.name), 1)
                                            ]),
                                            _: 2
                                          }, 1032, ["value", "onSelect"]);
                                        }), 128))
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                                if (selectedExpenseCategoryIds.value.length > 0) {
                                  _push5(`<!--[-->`);
                                  _push5(ssrRenderComponent(_component_UiCommandSeparator, null, null, _parent5, _scopeId4));
                                  _push5(ssrRenderComponent(_component_UiCommandGroup, null, {
                                    default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        _push6(ssrRenderComponent(_component_UiCommandItem, {
                                          value: { label: "\u041E\u0447\u0438\u0441\u0442\u0438\u0442\u044C" },
                                          class: "justify-center text-center",
                                          onSelect: resetExpenseCategoriesFilter
                                        }, {
                                          default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                            if (_push7) {
                                              _push7(` \u041E\u0447\u0438\u0441\u0442\u0438\u0442\u044C `);
                                            } else {
                                              return [
                                                createTextVNode(" \u041E\u0447\u0438\u0441\u0442\u0438\u0442\u044C ")
                                              ];
                                            }
                                          }),
                                          _: 1
                                        }, _parent6, _scopeId5));
                                      } else {
                                        return [
                                          createVNode(_component_UiCommandItem, {
                                            value: { label: "\u041E\u0447\u0438\u0441\u0442\u0438\u0442\u044C" },
                                            class: "justify-center text-center",
                                            onSelect: resetExpenseCategoriesFilter
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(" \u041E\u0447\u0438\u0441\u0442\u0438\u0442\u044C ")
                                            ]),
                                            _: 1
                                          })
                                        ];
                                      }
                                    }),
                                    _: 1
                                  }, _parent5, _scopeId4));
                                  _push5(`<!--]-->`);
                                } else {
                                  _push5(`<!---->`);
                                }
                              } else {
                                return [
                                  createVNode(_component_UiCommandEmpty, null, {
                                    default: withCtx(() => [
                                      createTextVNode("\u041D\u0435\u0442 \u0441\u043E\u0432\u043F\u0430\u0434\u0435\u043D\u0438\u0439.")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_UiCommandGroup, null, {
                                    default: withCtx(() => [
                                      (openBlock(true), createBlock(Fragment, null, renderList(_ctx.expenseCategoriesFilters, (category) => {
                                        return openBlock(), createBlock(_component_UiCommandItem, {
                                          key: category.id,
                                          value: category,
                                          onSelect: ($event) => handleExpenseCategoryToggle(category.id)
                                        }, {
                                          default: withCtx(() => [
                                            createVNode("div", {
                                              class: selectedExpenseCategoryIds.value.includes(category.id) ? "mr-2 flex h-4 w-4 items-center justify-center rounded-sm border border-primary bg-primary text-primary-foreground" : "mr-2 flex h-4 w-4 items-center justify-center rounded-sm border border-primary opacity-50 [&_svg]:invisible"
                                            }, [
                                              createVNode(unref(Check), { class: "h-4 w-4" })
                                            ], 2),
                                            createVNode("span", null, toDisplayString(category.name), 1)
                                          ]),
                                          _: 2
                                        }, 1032, ["value", "onSelect"]);
                                      }), 128))
                                    ]),
                                    _: 1
                                  }),
                                  selectedExpenseCategoryIds.value.length > 0 ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                                    createVNode(_component_UiCommandSeparator),
                                    createVNode(_component_UiCommandGroup, null, {
                                      default: withCtx(() => [
                                        createVNode(_component_UiCommandItem, {
                                          value: { label: "\u041E\u0447\u0438\u0441\u0442\u0438\u0442\u044C" },
                                          class: "justify-center text-center",
                                          onSelect: resetExpenseCategoriesFilter
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(" \u041E\u0447\u0438\u0441\u0442\u0438\u0442\u044C ")
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    })
                                  ], 64)) : createCommentVNode("", true)
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_UiCommandInput, { placeholder: "\u0421\u0442\u0430\u0442\u044C\u044F" }),
                            createVNode(_component_UiCommandList, null, {
                              default: withCtx(() => [
                                createVNode(_component_UiCommandEmpty, null, {
                                  default: withCtx(() => [
                                    createTextVNode("\u041D\u0435\u0442 \u0441\u043E\u0432\u043F\u0430\u0434\u0435\u043D\u0438\u0439.")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_UiCommandGroup, null, {
                                  default: withCtx(() => [
                                    (openBlock(true), createBlock(Fragment, null, renderList(_ctx.expenseCategoriesFilters, (category) => {
                                      return openBlock(), createBlock(_component_UiCommandItem, {
                                        key: category.id,
                                        value: category,
                                        onSelect: ($event) => handleExpenseCategoryToggle(category.id)
                                      }, {
                                        default: withCtx(() => [
                                          createVNode("div", {
                                            class: selectedExpenseCategoryIds.value.includes(category.id) ? "mr-2 flex h-4 w-4 items-center justify-center rounded-sm border border-primary bg-primary text-primary-foreground" : "mr-2 flex h-4 w-4 items-center justify-center rounded-sm border border-primary opacity-50 [&_svg]:invisible"
                                          }, [
                                            createVNode(unref(Check), { class: "h-4 w-4" })
                                          ], 2),
                                          createVNode("span", null, toDisplayString(category.name), 1)
                                        ]),
                                        _: 2
                                      }, 1032, ["value", "onSelect"]);
                                    }), 128))
                                  ]),
                                  _: 1
                                }),
                                selectedExpenseCategoryIds.value.length > 0 ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                                  createVNode(_component_UiCommandSeparator),
                                  createVNode(_component_UiCommandGroup, null, {
                                    default: withCtx(() => [
                                      createVNode(_component_UiCommandItem, {
                                        value: { label: "\u041E\u0447\u0438\u0441\u0442\u0438\u0442\u044C" },
                                        class: "justify-center text-center",
                                        onSelect: resetExpenseCategoriesFilter
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(" \u041E\u0447\u0438\u0441\u0442\u0438\u0442\u044C ")
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  })
                                ], 64)) : createCommentVNode("", true)
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
                      createVNode(_component_UiCommand, {
                        "filter-function": (list, term) => list.filter((i) => {
                          var _a;
                          return (_a = i.name.toLowerCase()) == null ? void 0 : _a.includes(term);
                        })
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_UiCommandInput, { placeholder: "\u0421\u0442\u0430\u0442\u044C\u044F" }),
                          createVNode(_component_UiCommandList, null, {
                            default: withCtx(() => [
                              createVNode(_component_UiCommandEmpty, null, {
                                default: withCtx(() => [
                                  createTextVNode("\u041D\u0435\u0442 \u0441\u043E\u0432\u043F\u0430\u0434\u0435\u043D\u0438\u0439.")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_UiCommandGroup, null, {
                                default: withCtx(() => [
                                  (openBlock(true), createBlock(Fragment, null, renderList(_ctx.expenseCategoriesFilters, (category) => {
                                    return openBlock(), createBlock(_component_UiCommandItem, {
                                      key: category.id,
                                      value: category,
                                      onSelect: ($event) => handleExpenseCategoryToggle(category.id)
                                    }, {
                                      default: withCtx(() => [
                                        createVNode("div", {
                                          class: selectedExpenseCategoryIds.value.includes(category.id) ? "mr-2 flex h-4 w-4 items-center justify-center rounded-sm border border-primary bg-primary text-primary-foreground" : "mr-2 flex h-4 w-4 items-center justify-center rounded-sm border border-primary opacity-50 [&_svg]:invisible"
                                        }, [
                                          createVNode(unref(Check), { class: "h-4 w-4" })
                                        ], 2),
                                        createVNode("span", null, toDisplayString(category.name), 1)
                                      ]),
                                      _: 2
                                    }, 1032, ["value", "onSelect"]);
                                  }), 128))
                                ]),
                                _: 1
                              }),
                              selectedExpenseCategoryIds.value.length > 0 ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                                createVNode(_component_UiCommandSeparator),
                                createVNode(_component_UiCommandGroup, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_UiCommandItem, {
                                      value: { label: "\u041E\u0447\u0438\u0441\u0442\u0438\u0442\u044C" },
                                      class: "justify-center text-center",
                                      onSelect: resetExpenseCategoriesFilter
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" \u041E\u0447\u0438\u0441\u0442\u0438\u0442\u044C ")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                })
                              ], 64)) : createCommentVNode("", true)
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }, 8, ["filter-function"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_UiPopoverTrigger, { "as-child": "" }, {
                  default: withCtx(() => [
                    createVNode(_component_UiButton, {
                      variant: "outline",
                      size: "sm",
                      class: "h-8 border-dashed"
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(CirclePlus), { class: "mr-2 h-4 w-4" }),
                        createTextVNode(" \u0421\u0442\u0430\u0442\u044C\u044F "),
                        selectedExpenseCategoryIds.value.length > 0 ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                          createVNode(_component_UiSeparator, {
                            orientation: "vertical",
                            class: "mx-2 h-4"
                          }),
                          createVNode(_component_UiBadge, {
                            variant: "secondary",
                            class: "rounded-sm px-1 font-normal lg:hidden"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(selectedExpenseCategoryIds.value.length), 1)
                            ]),
                            _: 1
                          }),
                          createVNode("div", { class: "hidden space-x-1 lg:flex" }, [
                            selectedExpenseCategoryIds.value.length > 0 ? (openBlock(), createBlock(_component_UiBadge, {
                              key: 0,
                              variant: "secondary",
                              class: "rounded-sm px-1 font-normal"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(selectedExpenseCategoryIds.value.length), 1)
                              ]),
                              _: 1
                            })) : (openBlock(true), createBlock(Fragment, { key: 1 }, renderList(_ctx.expenseCategoriesFilters.filter(
                              (cat) => selectedExpenseCategoryIds.value.includes(cat.id)
                            ), (category) => {
                              return openBlock(), createBlock(_component_UiBadge, {
                                key: category.id,
                                variant: "secondary",
                                class: "rounded-sm px-1 font-normal"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(category.name), 1)
                                ]),
                                _: 2
                              }, 1024);
                            }), 128))
                          ])
                        ], 64)) : createCommentVNode("", true)
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode(_component_UiPopoverContent, {
                  class: "w-[250px] p-0",
                  align: "start"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_UiCommand, {
                      "filter-function": (list, term) => list.filter((i) => {
                        var _a;
                        return (_a = i.name.toLowerCase()) == null ? void 0 : _a.includes(term);
                      })
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_UiCommandInput, { placeholder: "\u0421\u0442\u0430\u0442\u044C\u044F" }),
                        createVNode(_component_UiCommandList, null, {
                          default: withCtx(() => [
                            createVNode(_component_UiCommandEmpty, null, {
                              default: withCtx(() => [
                                createTextVNode("\u041D\u0435\u0442 \u0441\u043E\u0432\u043F\u0430\u0434\u0435\u043D\u0438\u0439.")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_UiCommandGroup, null, {
                              default: withCtx(() => [
                                (openBlock(true), createBlock(Fragment, null, renderList(_ctx.expenseCategoriesFilters, (category) => {
                                  return openBlock(), createBlock(_component_UiCommandItem, {
                                    key: category.id,
                                    value: category,
                                    onSelect: ($event) => handleExpenseCategoryToggle(category.id)
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("div", {
                                        class: selectedExpenseCategoryIds.value.includes(category.id) ? "mr-2 flex h-4 w-4 items-center justify-center rounded-sm border border-primary bg-primary text-primary-foreground" : "mr-2 flex h-4 w-4 items-center justify-center rounded-sm border border-primary opacity-50 [&_svg]:invisible"
                                      }, [
                                        createVNode(unref(Check), { class: "h-4 w-4" })
                                      ], 2),
                                      createVNode("span", null, toDisplayString(category.name), 1)
                                    ]),
                                    _: 2
                                  }, 1032, ["value", "onSelect"]);
                                }), 128))
                              ]),
                              _: 1
                            }),
                            selectedExpenseCategoryIds.value.length > 0 ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                              createVNode(_component_UiCommandSeparator),
                              createVNode(_component_UiCommandGroup, null, {
                                default: withCtx(() => [
                                  createVNode(_component_UiCommandItem, {
                                    value: { label: "\u041E\u0447\u0438\u0441\u0442\u0438\u0442\u044C" },
                                    class: "justify-center text-center",
                                    onSelect: resetExpenseCategoriesFilter
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" \u041E\u0447\u0438\u0441\u0442\u0438\u0442\u044C ")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              })
                            ], 64)) : createCommentVNode("", true)
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["filter-function"])
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
      _push(`<div class="relative">`);
      _push(ssrRenderComponent(_component_UiNavigationMenu, {
        viewport: false,
        class: "z-50"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UiNavigationMenuList, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UiNavigationMenuItem, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UiNavigationMenuTrigger, { class: "h-8" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` \u0424\u0418\u041B\u042C\u0422\u0420\u042B `);
                            } else {
                              return [
                                createTextVNode(" \u0424\u0418\u041B\u042C\u0422\u0420\u042B ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_UiNavigationMenuContent, { class: "!right-0 !left-auto" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<div class="p-2 space-y-4"${_scopeId4}><div class="space-y-1"${_scopeId4}><div class="text-sm font-semibold mb-2"${_scopeId4}> \u0424\u0438\u043B\u044C\u0442\u0440 \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u0439 </div>`);
                              _push5(ssrRenderComponent(_component_UiToggleGroup, {
                                type: "single",
                                "model-value": localDistributionFilter.value,
                                class: "flex flex-col gap-1",
                                "onUpdate:modelValue": (value) => value && typeof value === "string" && handleDistributionFilterChange(value)
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<!--[-->`);
                                    ssrRenderList([
                                      { value: "all", label: "\u0412\u0441\u0435" },
                                      { value: "hasCat", label: "\u0420\u0430\u0441\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u043D\u044B\u0435" },
                                      { value: "hasntCat", label: "\u041D\u0435\u0440\u0430\u0441\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u043D\u044B\u0435" }
                                    ], (option) => {
                                      _push6(ssrRenderComponent(_component_UiToggleGroupItem, {
                                        key: option.value,
                                        value: option.value,
                                        class: "justify-between w-full"
                                      }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`<span class=""${_scopeId6}>${ssrInterpolate(option.label)}</span>`);
                                          } else {
                                            return [
                                              createVNode("span", { class: "" }, toDisplayString(option.label), 1)
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                    });
                                    _push6(`<!--]-->`);
                                  } else {
                                    return [
                                      (openBlock(), createBlock(Fragment, null, renderList([
                                        { value: "all", label: "\u0412\u0441\u0435" },
                                        { value: "hasCat", label: "\u0420\u0430\u0441\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u043D\u044B\u0435" },
                                        { value: "hasntCat", label: "\u041D\u0435\u0440\u0430\u0441\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u043D\u044B\u0435" }
                                      ], (option) => {
                                        return createVNode(_component_UiToggleGroupItem, {
                                          key: option.value,
                                          value: option.value,
                                          class: "justify-between w-full"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode("span", { class: "" }, toDisplayString(option.label), 1)
                                          ]),
                                          _: 2
                                        }, 1032, ["value"]);
                                      }), 64))
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(`</div>`);
                              _push5(ssrRenderComponent(_component_UiSeparator, null, null, _parent5, _scopeId4));
                              _push5(`<div class="space-y-2"${_scopeId4}><div class="text-sm font-semibold mb-2"${_scopeId4}>\u0422\u0438\u043F \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u0438</div>`);
                              _push5(ssrRenderComponent(_component_UiToggleGroup, {
                                type: "single",
                                "model-value": localTypeOfOperationFilter.value,
                                class: "flex flex-col gap-1",
                                "onUpdate:modelValue": (value) => value && typeof value === "string" && handleTypeOfOperationFilterChange(value)
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<!--[-->`);
                                    ssrRenderList([
                                      { value: "all", label: "\u0412\u0441\u0435" },
                                      { value: "Credit", label: "\u041F\u043E\u0441\u0442\u0443\u043F\u043B\u0435\u043D\u0438\u044F" },
                                      { value: "Debit", label: "\u0412\u044B\u043F\u043B\u0430\u0442\u044B" },
                                      { value: "Transfer", label: "\u041F\u0435\u0440\u0435\u043C\u0435\u0449\u0435\u043D\u0438\u044F" }
                                    ], (option) => {
                                      _push6(ssrRenderComponent(_component_UiToggleGroupItem, {
                                        key: option.value,
                                        value: option.value,
                                        class: "justify-between w-full"
                                      }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`<span class="text-sm"${_scopeId6}>${ssrInterpolate(option.label)}</span>`);
                                          } else {
                                            return [
                                              createVNode("span", { class: "text-sm" }, toDisplayString(option.label), 1)
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                    });
                                    _push6(`<!--]-->`);
                                  } else {
                                    return [
                                      (openBlock(), createBlock(Fragment, null, renderList([
                                        { value: "all", label: "\u0412\u0441\u0435" },
                                        { value: "Credit", label: "\u041F\u043E\u0441\u0442\u0443\u043F\u043B\u0435\u043D\u0438\u044F" },
                                        { value: "Debit", label: "\u0412\u044B\u043F\u043B\u0430\u0442\u044B" },
                                        { value: "Transfer", label: "\u041F\u0435\u0440\u0435\u043C\u0435\u0449\u0435\u043D\u0438\u044F" }
                                      ], (option) => {
                                        return createVNode(_component_UiToggleGroupItem, {
                                          key: option.value,
                                          value: option.value,
                                          class: "justify-between w-full"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode("span", { class: "text-sm" }, toDisplayString(option.label), 1)
                                          ]),
                                          _: 2
                                        }, 1032, ["value"]);
                                      }), 64))
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(`</div></div>`);
                            } else {
                              return [
                                createVNode("div", { class: "p-2 space-y-4" }, [
                                  createVNode("div", { class: "space-y-1" }, [
                                    createVNode("div", { class: "text-sm font-semibold mb-2" }, " \u0424\u0438\u043B\u044C\u0442\u0440 \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u0439 "),
                                    createVNode(_component_UiToggleGroup, {
                                      type: "single",
                                      "model-value": localDistributionFilter.value,
                                      class: "flex flex-col gap-1",
                                      "onUpdate:modelValue": (value) => value && typeof value === "string" && handleDistributionFilterChange(value)
                                    }, {
                                      default: withCtx(() => [
                                        (openBlock(), createBlock(Fragment, null, renderList([
                                          { value: "all", label: "\u0412\u0441\u0435" },
                                          { value: "hasCat", label: "\u0420\u0430\u0441\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u043D\u044B\u0435" },
                                          { value: "hasntCat", label: "\u041D\u0435\u0440\u0430\u0441\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u043D\u044B\u0435" }
                                        ], (option) => {
                                          return createVNode(_component_UiToggleGroupItem, {
                                            key: option.value,
                                            value: option.value,
                                            class: "justify-between w-full"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode("span", { class: "" }, toDisplayString(option.label), 1)
                                            ]),
                                            _: 2
                                          }, 1032, ["value"]);
                                        }), 64))
                                      ]),
                                      _: 1
                                    }, 8, ["model-value", "onUpdate:modelValue"])
                                  ]),
                                  createVNode(_component_UiSeparator),
                                  createVNode("div", { class: "space-y-2" }, [
                                    createVNode("div", { class: "text-sm font-semibold mb-2" }, "\u0422\u0438\u043F \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u0438"),
                                    createVNode(_component_UiToggleGroup, {
                                      type: "single",
                                      "model-value": localTypeOfOperationFilter.value,
                                      class: "flex flex-col gap-1",
                                      "onUpdate:modelValue": (value) => value && typeof value === "string" && handleTypeOfOperationFilterChange(value)
                                    }, {
                                      default: withCtx(() => [
                                        (openBlock(), createBlock(Fragment, null, renderList([
                                          { value: "all", label: "\u0412\u0441\u0435" },
                                          { value: "Credit", label: "\u041F\u043E\u0441\u0442\u0443\u043F\u043B\u0435\u043D\u0438\u044F" },
                                          { value: "Debit", label: "\u0412\u044B\u043F\u043B\u0430\u0442\u044B" },
                                          { value: "Transfer", label: "\u041F\u0435\u0440\u0435\u043C\u0435\u0449\u0435\u043D\u0438\u044F" }
                                        ], (option) => {
                                          return createVNode(_component_UiToggleGroupItem, {
                                            key: option.value,
                                            value: option.value,
                                            class: "justify-between w-full"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode("span", { class: "text-sm" }, toDisplayString(option.label), 1)
                                            ]),
                                            _: 2
                                          }, 1032, ["value"]);
                                        }), 64))
                                      ]),
                                      _: 1
                                    }, 8, ["model-value", "onUpdate:modelValue"])
                                  ])
                                ])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_UiNavigationMenuTrigger, { class: "h-8" }, {
                            default: withCtx(() => [
                              createTextVNode(" \u0424\u0418\u041B\u042C\u0422\u0420\u042B ")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UiNavigationMenuContent, { class: "!right-0 !left-auto" }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "p-2 space-y-4" }, [
                                createVNode("div", { class: "space-y-1" }, [
                                  createVNode("div", { class: "text-sm font-semibold mb-2" }, " \u0424\u0438\u043B\u044C\u0442\u0440 \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u0439 "),
                                  createVNode(_component_UiToggleGroup, {
                                    type: "single",
                                    "model-value": localDistributionFilter.value,
                                    class: "flex flex-col gap-1",
                                    "onUpdate:modelValue": (value) => value && typeof value === "string" && handleDistributionFilterChange(value)
                                  }, {
                                    default: withCtx(() => [
                                      (openBlock(), createBlock(Fragment, null, renderList([
                                        { value: "all", label: "\u0412\u0441\u0435" },
                                        { value: "hasCat", label: "\u0420\u0430\u0441\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u043D\u044B\u0435" },
                                        { value: "hasntCat", label: "\u041D\u0435\u0440\u0430\u0441\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u043D\u044B\u0435" }
                                      ], (option) => {
                                        return createVNode(_component_UiToggleGroupItem, {
                                          key: option.value,
                                          value: option.value,
                                          class: "justify-between w-full"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode("span", { class: "" }, toDisplayString(option.label), 1)
                                          ]),
                                          _: 2
                                        }, 1032, ["value"]);
                                      }), 64))
                                    ]),
                                    _: 1
                                  }, 8, ["model-value", "onUpdate:modelValue"])
                                ]),
                                createVNode(_component_UiSeparator),
                                createVNode("div", { class: "space-y-2" }, [
                                  createVNode("div", { class: "text-sm font-semibold mb-2" }, "\u0422\u0438\u043F \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u0438"),
                                  createVNode(_component_UiToggleGroup, {
                                    type: "single",
                                    "model-value": localTypeOfOperationFilter.value,
                                    class: "flex flex-col gap-1",
                                    "onUpdate:modelValue": (value) => value && typeof value === "string" && handleTypeOfOperationFilterChange(value)
                                  }, {
                                    default: withCtx(() => [
                                      (openBlock(), createBlock(Fragment, null, renderList([
                                        { value: "all", label: "\u0412\u0441\u0435" },
                                        { value: "Credit", label: "\u041F\u043E\u0441\u0442\u0443\u043F\u043B\u0435\u043D\u0438\u044F" },
                                        { value: "Debit", label: "\u0412\u044B\u043F\u043B\u0430\u0442\u044B" },
                                        { value: "Transfer", label: "\u041F\u0435\u0440\u0435\u043C\u0435\u0449\u0435\u043D\u0438\u044F" }
                                      ], (option) => {
                                        return createVNode(_component_UiToggleGroupItem, {
                                          key: option.value,
                                          value: option.value,
                                          class: "justify-between w-full"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode("span", { class: "text-sm" }, toDisplayString(option.label), 1)
                                          ]),
                                          _: 2
                                        }, 1032, ["value"]);
                                      }), 64))
                                    ]),
                                    _: 1
                                  }, 8, ["model-value", "onUpdate:modelValue"])
                                ])
                              ])
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
                    createVNode(_component_UiNavigationMenuItem, null, {
                      default: withCtx(() => [
                        createVNode(_component_UiNavigationMenuTrigger, { class: "h-8" }, {
                          default: withCtx(() => [
                            createTextVNode(" \u0424\u0418\u041B\u042C\u0422\u0420\u042B ")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UiNavigationMenuContent, { class: "!right-0 !left-auto" }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "p-2 space-y-4" }, [
                              createVNode("div", { class: "space-y-1" }, [
                                createVNode("div", { class: "text-sm font-semibold mb-2" }, " \u0424\u0438\u043B\u044C\u0442\u0440 \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u0439 "),
                                createVNode(_component_UiToggleGroup, {
                                  type: "single",
                                  "model-value": localDistributionFilter.value,
                                  class: "flex flex-col gap-1",
                                  "onUpdate:modelValue": (value) => value && typeof value === "string" && handleDistributionFilterChange(value)
                                }, {
                                  default: withCtx(() => [
                                    (openBlock(), createBlock(Fragment, null, renderList([
                                      { value: "all", label: "\u0412\u0441\u0435" },
                                      { value: "hasCat", label: "\u0420\u0430\u0441\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u043D\u044B\u0435" },
                                      { value: "hasntCat", label: "\u041D\u0435\u0440\u0430\u0441\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u043D\u044B\u0435" }
                                    ], (option) => {
                                      return createVNode(_component_UiToggleGroupItem, {
                                        key: option.value,
                                        value: option.value,
                                        class: "justify-between w-full"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode("span", { class: "" }, toDisplayString(option.label), 1)
                                        ]),
                                        _: 2
                                      }, 1032, ["value"]);
                                    }), 64))
                                  ]),
                                  _: 1
                                }, 8, ["model-value", "onUpdate:modelValue"])
                              ]),
                              createVNode(_component_UiSeparator),
                              createVNode("div", { class: "space-y-2" }, [
                                createVNode("div", { class: "text-sm font-semibold mb-2" }, "\u0422\u0438\u043F \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u0438"),
                                createVNode(_component_UiToggleGroup, {
                                  type: "single",
                                  "model-value": localTypeOfOperationFilter.value,
                                  class: "flex flex-col gap-1",
                                  "onUpdate:modelValue": (value) => value && typeof value === "string" && handleTypeOfOperationFilterChange(value)
                                }, {
                                  default: withCtx(() => [
                                    (openBlock(), createBlock(Fragment, null, renderList([
                                      { value: "all", label: "\u0412\u0441\u0435" },
                                      { value: "Credit", label: "\u041F\u043E\u0441\u0442\u0443\u043F\u043B\u0435\u043D\u0438\u044F" },
                                      { value: "Debit", label: "\u0412\u044B\u043F\u043B\u0430\u0442\u044B" },
                                      { value: "Transfer", label: "\u041F\u0435\u0440\u0435\u043C\u0435\u0449\u0435\u043D\u0438\u044F" }
                                    ], (option) => {
                                      return createVNode(_component_UiToggleGroupItem, {
                                        key: option.value,
                                        value: option.value,
                                        class: "justify-between w-full"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode("span", { class: "text-sm" }, toDisplayString(option.label), 1)
                                        ]),
                                        _: 2
                                      }, 1032, ["value"]);
                                    }), 64))
                                  ]),
                                  _: 1
                                }, 8, ["model-value", "onUpdate:modelValue"])
                              ])
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
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UiNavigationMenuList, null, {
                default: withCtx(() => [
                  createVNode(_component_UiNavigationMenuItem, null, {
                    default: withCtx(() => [
                      createVNode(_component_UiNavigationMenuTrigger, { class: "h-8" }, {
                        default: withCtx(() => [
                          createTextVNode(" \u0424\u0418\u041B\u042C\u0422\u0420\u042B ")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_UiNavigationMenuContent, { class: "!right-0 !left-auto" }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "p-2 space-y-4" }, [
                            createVNode("div", { class: "space-y-1" }, [
                              createVNode("div", { class: "text-sm font-semibold mb-2" }, " \u0424\u0438\u043B\u044C\u0442\u0440 \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u0439 "),
                              createVNode(_component_UiToggleGroup, {
                                type: "single",
                                "model-value": localDistributionFilter.value,
                                class: "flex flex-col gap-1",
                                "onUpdate:modelValue": (value) => value && typeof value === "string" && handleDistributionFilterChange(value)
                              }, {
                                default: withCtx(() => [
                                  (openBlock(), createBlock(Fragment, null, renderList([
                                    { value: "all", label: "\u0412\u0441\u0435" },
                                    { value: "hasCat", label: "\u0420\u0430\u0441\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u043D\u044B\u0435" },
                                    { value: "hasntCat", label: "\u041D\u0435\u0440\u0430\u0441\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u043D\u044B\u0435" }
                                  ], (option) => {
                                    return createVNode(_component_UiToggleGroupItem, {
                                      key: option.value,
                                      value: option.value,
                                      class: "justify-between w-full"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode("span", { class: "" }, toDisplayString(option.label), 1)
                                      ]),
                                      _: 2
                                    }, 1032, ["value"]);
                                  }), 64))
                                ]),
                                _: 1
                              }, 8, ["model-value", "onUpdate:modelValue"])
                            ]),
                            createVNode(_component_UiSeparator),
                            createVNode("div", { class: "space-y-2" }, [
                              createVNode("div", { class: "text-sm font-semibold mb-2" }, "\u0422\u0438\u043F \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u0438"),
                              createVNode(_component_UiToggleGroup, {
                                type: "single",
                                "model-value": localTypeOfOperationFilter.value,
                                class: "flex flex-col gap-1",
                                "onUpdate:modelValue": (value) => value && typeof value === "string" && handleTypeOfOperationFilterChange(value)
                              }, {
                                default: withCtx(() => [
                                  (openBlock(), createBlock(Fragment, null, renderList([
                                    { value: "all", label: "\u0412\u0441\u0435" },
                                    { value: "Credit", label: "\u041F\u043E\u0441\u0442\u0443\u043F\u043B\u0435\u043D\u0438\u044F" },
                                    { value: "Debit", label: "\u0412\u044B\u043F\u043B\u0430\u0442\u044B" },
                                    { value: "Transfer", label: "\u041F\u0435\u0440\u0435\u043C\u0435\u0449\u0435\u043D\u0438\u044F" }
                                  ], (option) => {
                                    return createVNode(_component_UiToggleGroupItem, {
                                      key: option.value,
                                      value: option.value,
                                      class: "justify-between w-full"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode("span", { class: "text-sm" }, toDisplayString(option.label), 1)
                                      ]),
                                      _: 2
                                    }, 1032, ["value"]);
                                  }), 64))
                                ]),
                                _: 1
                              }, 8, ["model-value", "onUpdate:modelValue"])
                            ])
                          ])
                        ]),
                        _: 1
                      })
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
      _push(`</div></div></div>`);
    };
  }
});
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/my/planfact/Operations/DataTableToolbar.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "DataTable",
  __ssrInlineRender: true,
  props: {
    columns: {},
    data: {},
    isLoading: { type: Boolean },
    isLoadingMore: { type: Boolean },
    hasMore: { type: Boolean },
    sorting: {},
    isInitialLoad: { type: Boolean }
  },
  emits: [
    "item-clicked",
    "load-more",
    "sort-change",
    "counter-parties-filter-change",
    "expense-categories-filter-change",
    "distribution-filter-change",
    "type-of-operation-filter-change"
  ],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const sorting = computed(() => {
      var _a;
      return (_a = props.sorting) != null ? _a : [];
    });
    const columnFilters = ref([]);
    const columnVisibility = ref({});
    const resolveNextSorting = (updaterOrValue) => typeof updaterOrValue === "function" ? updaterOrValue([...sorting.value]) : updaterOrValue != null ? updaterOrValue : [];
    const table = useVueTable({
      get data() {
        return props.data;
      },
      get columns() {
        return props.columns;
      },
      getCoreRowModel: getCoreRowModel(),
      getSortedRowModel: getSortedRowModel(),
      getFilteredRowModel: getFilteredRowModel(),
      onSortingChange: (updaterOrValue) => {
        const next = resolveNextSorting(updaterOrValue);
        emit("sort-change", next);
      },
      onColumnFiltersChange: (updaterOrValue) => valueUpdater(updaterOrValue, columnFilters),
      onColumnVisibilityChange: (updaterOrValue) => valueUpdater(updaterOrValue, columnVisibility),
      state: {
        get sorting() {
          return sorting.value;
        },
        get columnFilters() {
          return columnFilters.value;
        },
        get columnVisibility() {
          return columnVisibility.value;
        }
      }
    });
    const emit = __emit;
    const itemClick = (id) => {
      emit("item-clicked", id);
    };
    const loadMoreRef = ref(null);
    watch(
      () => loadMoreRef.value,
      (el) => {
        if (el && props.hasMore) ;
      },
      { immediate: true }
    );
    watch(
      () => props.hasMore,
      (hasMore) => {
        {
          return;
        }
      }
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiScrollArea = _sfc_main$o;
      const _component_UiTable = _sfc_main$5$3;
      const _component_UiTableHeader = _sfc_main$A;
      const _component_UiTableRow = _sfc_main$2$7;
      const _component_UiTableHead = _sfc_main$1$7;
      const _component_UiTableBody = _sfc_main$4$5;
      const _component_UiTableCell = _sfc_main$3$5;
      const _component_UiScrollBar = _sfc_main$1$8;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-slate-100 rounded-sm overflow-hidden" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_UiScrollArea, { class: "h-[calc(100vh-125px)]" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UiTable, { class: "bg-white relative" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UiTableHeader, { class: "bg-gray-50 sticky top-0" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<!--[-->`);
                        ssrRenderList(unref(table).getHeaderGroups(), (headerGroup) => {
                          _push4(ssrRenderComponent(_component_UiTableRow, {
                            key: headerGroup.id
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<!--[-->`);
                                ssrRenderList(headerGroup.headers, (header) => {
                                  _push5(ssrRenderComponent(_component_UiTableHead, {
                                    key: header.id
                                  }, {
                                    default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        if (!header.isPlaceholder) {
                                          _push6(ssrRenderComponent(unref(FlexRender), {
                                            render: header.column.columnDef.header,
                                            props: header.getContext()
                                          }, null, _parent6, _scopeId5));
                                        } else {
                                          _push6(`<!---->`);
                                        }
                                      } else {
                                        return [
                                          !header.isPlaceholder ? (openBlock(), createBlock(unref(FlexRender), {
                                            key: 0,
                                            render: header.column.columnDef.header,
                                            props: header.getContext()
                                          }, null, 8, ["render", "props"])) : createCommentVNode("", true)
                                        ];
                                      }
                                    }),
                                    _: 2
                                  }, _parent5, _scopeId4));
                                });
                                _push5(`<!--]-->`);
                              } else {
                                return [
                                  (openBlock(true), createBlock(Fragment, null, renderList(headerGroup.headers, (header) => {
                                    return openBlock(), createBlock(_component_UiTableHead, {
                                      key: header.id
                                    }, {
                                      default: withCtx(() => [
                                        !header.isPlaceholder ? (openBlock(), createBlock(unref(FlexRender), {
                                          key: 0,
                                          render: header.column.columnDef.header,
                                          props: header.getContext()
                                        }, null, 8, ["render", "props"])) : createCommentVNode("", true)
                                      ]),
                                      _: 2
                                    }, 1024);
                                  }), 128))
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        });
                        _push4(`<!--]-->`);
                      } else {
                        return [
                          (openBlock(true), createBlock(Fragment, null, renderList(unref(table).getHeaderGroups(), (headerGroup) => {
                            return openBlock(), createBlock(_component_UiTableRow, {
                              key: headerGroup.id
                            }, {
                              default: withCtx(() => [
                                (openBlock(true), createBlock(Fragment, null, renderList(headerGroup.headers, (header) => {
                                  return openBlock(), createBlock(_component_UiTableHead, {
                                    key: header.id
                                  }, {
                                    default: withCtx(() => [
                                      !header.isPlaceholder ? (openBlock(), createBlock(unref(FlexRender), {
                                        key: 0,
                                        render: header.column.columnDef.header,
                                        props: header.getContext()
                                      }, null, 8, ["render", "props"])) : createCommentVNode("", true)
                                    ]),
                                    _: 2
                                  }, 1024);
                                }), 128))
                              ]),
                              _: 2
                            }, 1024);
                          }), 128))
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UiTableBody, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      var _a, _b;
                      if (_push4) {
                        if (props.isLoading && !props.data.length) {
                          _push4(ssrRenderComponent(_component_UiTableRow, null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_UiTableCell, {
                                  colspan: props.columns.length,
                                  class: "text-left"
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(` \u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430... `);
                                    } else {
                                      return [
                                        createTextVNode(" \u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430... ")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(_component_UiTableCell, {
                                    colspan: props.columns.length,
                                    class: "text-left"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" \u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430... ")
                                    ]),
                                    _: 1
                                  }, 8, ["colspan"])
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else if ((_a = unref(table).getRowModel().rows) == null ? void 0 : _a.length) {
                          _push4(`<!--[--><!--[-->`);
                          ssrRenderList(unref(table).getRowModel().rows, (row) => {
                            _push4(ssrRenderComponent(_component_UiTableRow, {
                              key: row.id,
                              class: "cursor-pointer hover:bg-slate-300/50",
                              onClick: ($event) => itemClick(row.original.operationId)
                            }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`<!--[-->`);
                                  ssrRenderList(row.getVisibleCells(), (cell) => {
                                    _push5(ssrRenderComponent(_component_UiTableCell, {
                                      key: cell.id
                                    }, {
                                      default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                        if (_push6) {
                                          _push6(ssrRenderComponent(unref(FlexRender), {
                                            render: cell.column.columnDef.cell,
                                            props: cell.getContext()
                                          }, null, _parent6, _scopeId5));
                                        } else {
                                          return [
                                            createVNode(unref(FlexRender), {
                                              render: cell.column.columnDef.cell,
                                              props: cell.getContext()
                                            }, null, 8, ["render", "props"])
                                          ];
                                        }
                                      }),
                                      _: 2
                                    }, _parent5, _scopeId4));
                                  });
                                  _push5(`<!--]-->`);
                                } else {
                                  return [
                                    (openBlock(true), createBlock(Fragment, null, renderList(row.getVisibleCells(), (cell) => {
                                      return openBlock(), createBlock(_component_UiTableCell, {
                                        key: cell.id
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(unref(FlexRender), {
                                            render: cell.column.columnDef.cell,
                                            props: cell.getContext()
                                          }, null, 8, ["render", "props"])
                                        ]),
                                        _: 2
                                      }, 1024);
                                    }), 128))
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                          });
                          _push4(`<!--]-->`);
                          if (props.isLoadingMore) {
                            _push4(ssrRenderComponent(_component_UiTableRow, null, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(ssrRenderComponent(_component_UiTableCell, {
                                    colspan: props.columns.length,
                                    class: "text-center"
                                  }, {
                                    default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        _push6(` \u0414\u043E\u0433\u0440\u0443\u0436\u0430\u0435\u043C... `);
                                      } else {
                                        return [
                                          createTextVNode(" \u0414\u043E\u0433\u0440\u0443\u0436\u0430\u0435\u043C... ")
                                        ];
                                      }
                                    }),
                                    _: 1
                                  }, _parent5, _scopeId4));
                                } else {
                                  return [
                                    createVNode(_component_UiTableCell, {
                                      colspan: props.columns.length,
                                      class: "text-center"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" \u0414\u043E\u0433\u0440\u0443\u0436\u0430\u0435\u043C... ")
                                      ]),
                                      _: 1
                                    }, 8, ["colspan"])
                                  ];
                                }
                              }),
                              _: 1
                            }, _parent4, _scopeId3));
                          } else if (props.hasMore) {
                            _push4(ssrRenderComponent(_component_UiTableRow, null, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(ssrRenderComponent(_component_UiTableCell, {
                                    colspan: props.columns.length,
                                    class: "p-0"
                                  }, {
                                    default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        _push6(`<div class="h-6" aria-hidden="true"${_scopeId5}></div>`);
                                      } else {
                                        return [
                                          createVNode("div", {
                                            ref_key: "loadMoreRef",
                                            ref: loadMoreRef,
                                            class: "h-6",
                                            "aria-hidden": "true"
                                          }, null, 512)
                                        ];
                                      }
                                    }),
                                    _: 1
                                  }, _parent5, _scopeId4));
                                } else {
                                  return [
                                    createVNode(_component_UiTableCell, {
                                      colspan: props.columns.length,
                                      class: "p-0"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode("div", {
                                          ref_key: "loadMoreRef",
                                          ref: loadMoreRef,
                                          class: "h-6",
                                          "aria-hidden": "true"
                                        }, null, 512)
                                      ]),
                                      _: 1
                                    }, 8, ["colspan"])
                                  ];
                                }
                              }),
                              _: 1
                            }, _parent4, _scopeId3));
                          } else {
                            _push4(`<!---->`);
                          }
                          _push4(`<!--]-->`);
                        } else {
                          _push4(ssrRenderComponent(_component_UiTableRow, null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_UiTableCell, {
                                  colspan: _ctx.columns.length,
                                  class: "text-left"
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(` \u041D\u0435\u0442 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u043E\u0432. `);
                                    } else {
                                      return [
                                        createTextVNode(" \u041D\u0435\u0442 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u043E\u0432. ")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(_component_UiTableCell, {
                                    colspan: _ctx.columns.length,
                                    class: "text-left"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" \u041D\u0435\u0442 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u043E\u0432. ")
                                    ]),
                                    _: 1
                                  }, 8, ["colspan"])
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        }
                      } else {
                        return [
                          props.isLoading && !props.data.length ? (openBlock(), createBlock(_component_UiTableRow, { key: 0 }, {
                            default: withCtx(() => [
                              createVNode(_component_UiTableCell, {
                                colspan: props.columns.length,
                                class: "text-left"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" \u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430... ")
                                ]),
                                _: 1
                              }, 8, ["colspan"])
                            ]),
                            _: 1
                          })) : ((_b = unref(table).getRowModel().rows) == null ? void 0 : _b.length) ? (openBlock(), createBlock(Fragment, { key: 1 }, [
                            (openBlock(true), createBlock(Fragment, null, renderList(unref(table).getRowModel().rows, (row) => {
                              return openBlock(), createBlock(_component_UiTableRow, {
                                key: row.id,
                                class: "cursor-pointer hover:bg-slate-300/50",
                                onClick: ($event) => itemClick(row.original.operationId)
                              }, {
                                default: withCtx(() => [
                                  (openBlock(true), createBlock(Fragment, null, renderList(row.getVisibleCells(), (cell) => {
                                    return openBlock(), createBlock(_component_UiTableCell, {
                                      key: cell.id
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(unref(FlexRender), {
                                          render: cell.column.columnDef.cell,
                                          props: cell.getContext()
                                        }, null, 8, ["render", "props"])
                                      ]),
                                      _: 2
                                    }, 1024);
                                  }), 128))
                                ]),
                                _: 2
                              }, 1032, ["onClick"]);
                            }), 128)),
                            props.isLoadingMore ? (openBlock(), createBlock(_component_UiTableRow, { key: 0 }, {
                              default: withCtx(() => [
                                createVNode(_component_UiTableCell, {
                                  colspan: props.columns.length,
                                  class: "text-center"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" \u0414\u043E\u0433\u0440\u0443\u0436\u0430\u0435\u043C... ")
                                  ]),
                                  _: 1
                                }, 8, ["colspan"])
                              ]),
                              _: 1
                            })) : props.hasMore ? (openBlock(), createBlock(_component_UiTableRow, { key: 1 }, {
                              default: withCtx(() => [
                                createVNode(_component_UiTableCell, {
                                  colspan: props.columns.length,
                                  class: "p-0"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("div", {
                                      ref_key: "loadMoreRef",
                                      ref: loadMoreRef,
                                      class: "h-6",
                                      "aria-hidden": "true"
                                    }, null, 512)
                                  ]),
                                  _: 1
                                }, 8, ["colspan"])
                              ]),
                              _: 1
                            })) : createCommentVNode("", true)
                          ], 64)) : (openBlock(), createBlock(_component_UiTableRow, { key: 2 }, {
                            default: withCtx(() => [
                              createVNode(_component_UiTableCell, {
                                colspan: _ctx.columns.length,
                                class: "text-left"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" \u041D\u0435\u0442 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u043E\u0432. ")
                                ]),
                                _: 1
                              }, 8, ["colspan"])
                            ]),
                            _: 1
                          }))
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UiTableHeader, { class: "bg-gray-50 sticky top-0" }, {
                      default: withCtx(() => [
                        (openBlock(true), createBlock(Fragment, null, renderList(unref(table).getHeaderGroups(), (headerGroup) => {
                          return openBlock(), createBlock(_component_UiTableRow, {
                            key: headerGroup.id
                          }, {
                            default: withCtx(() => [
                              (openBlock(true), createBlock(Fragment, null, renderList(headerGroup.headers, (header) => {
                                return openBlock(), createBlock(_component_UiTableHead, {
                                  key: header.id
                                }, {
                                  default: withCtx(() => [
                                    !header.isPlaceholder ? (openBlock(), createBlock(unref(FlexRender), {
                                      key: 0,
                                      render: header.column.columnDef.header,
                                      props: header.getContext()
                                    }, null, 8, ["render", "props"])) : createCommentVNode("", true)
                                  ]),
                                  _: 2
                                }, 1024);
                              }), 128))
                            ]),
                            _: 2
                          }, 1024);
                        }), 128))
                      ]),
                      _: 1
                    }),
                    createVNode(_component_UiTableBody, null, {
                      default: withCtx(() => {
                        var _a;
                        return [
                          props.isLoading && !props.data.length ? (openBlock(), createBlock(_component_UiTableRow, { key: 0 }, {
                            default: withCtx(() => [
                              createVNode(_component_UiTableCell, {
                                colspan: props.columns.length,
                                class: "text-left"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" \u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430... ")
                                ]),
                                _: 1
                              }, 8, ["colspan"])
                            ]),
                            _: 1
                          })) : ((_a = unref(table).getRowModel().rows) == null ? void 0 : _a.length) ? (openBlock(), createBlock(Fragment, { key: 1 }, [
                            (openBlock(true), createBlock(Fragment, null, renderList(unref(table).getRowModel().rows, (row) => {
                              return openBlock(), createBlock(_component_UiTableRow, {
                                key: row.id,
                                class: "cursor-pointer hover:bg-slate-300/50",
                                onClick: ($event) => itemClick(row.original.operationId)
                              }, {
                                default: withCtx(() => [
                                  (openBlock(true), createBlock(Fragment, null, renderList(row.getVisibleCells(), (cell) => {
                                    return openBlock(), createBlock(_component_UiTableCell, {
                                      key: cell.id
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(unref(FlexRender), {
                                          render: cell.column.columnDef.cell,
                                          props: cell.getContext()
                                        }, null, 8, ["render", "props"])
                                      ]),
                                      _: 2
                                    }, 1024);
                                  }), 128))
                                ]),
                                _: 2
                              }, 1032, ["onClick"]);
                            }), 128)),
                            props.isLoadingMore ? (openBlock(), createBlock(_component_UiTableRow, { key: 0 }, {
                              default: withCtx(() => [
                                createVNode(_component_UiTableCell, {
                                  colspan: props.columns.length,
                                  class: "text-center"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" \u0414\u043E\u0433\u0440\u0443\u0436\u0430\u0435\u043C... ")
                                  ]),
                                  _: 1
                                }, 8, ["colspan"])
                              ]),
                              _: 1
                            })) : props.hasMore ? (openBlock(), createBlock(_component_UiTableRow, { key: 1 }, {
                              default: withCtx(() => [
                                createVNode(_component_UiTableCell, {
                                  colspan: props.columns.length,
                                  class: "p-0"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("div", {
                                      ref_key: "loadMoreRef",
                                      ref: loadMoreRef,
                                      class: "h-6",
                                      "aria-hidden": "true"
                                    }, null, 512)
                                  ]),
                                  _: 1
                                }, 8, ["colspan"])
                              ]),
                              _: 1
                            })) : createCommentVNode("", true)
                          ], 64)) : (openBlock(), createBlock(_component_UiTableRow, { key: 2 }, {
                            default: withCtx(() => [
                              createVNode(_component_UiTableCell, {
                                colspan: _ctx.columns.length,
                                class: "text-left"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" \u041D\u0435\u0442 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u043E\u0432. ")
                                ]),
                                _: 1
                              }, 8, ["colspan"])
                            ]),
                            _: 1
                          }))
                        ];
                      }),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UiScrollBar, { orientation: "horizontal" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UiTable, { class: "bg-white relative" }, {
                default: withCtx(() => [
                  createVNode(_component_UiTableHeader, { class: "bg-gray-50 sticky top-0" }, {
                    default: withCtx(() => [
                      (openBlock(true), createBlock(Fragment, null, renderList(unref(table).getHeaderGroups(), (headerGroup) => {
                        return openBlock(), createBlock(_component_UiTableRow, {
                          key: headerGroup.id
                        }, {
                          default: withCtx(() => [
                            (openBlock(true), createBlock(Fragment, null, renderList(headerGroup.headers, (header) => {
                              return openBlock(), createBlock(_component_UiTableHead, {
                                key: header.id
                              }, {
                                default: withCtx(() => [
                                  !header.isPlaceholder ? (openBlock(), createBlock(unref(FlexRender), {
                                    key: 0,
                                    render: header.column.columnDef.header,
                                    props: header.getContext()
                                  }, null, 8, ["render", "props"])) : createCommentVNode("", true)
                                ]),
                                _: 2
                              }, 1024);
                            }), 128))
                          ]),
                          _: 2
                        }, 1024);
                      }), 128))
                    ]),
                    _: 1
                  }),
                  createVNode(_component_UiTableBody, null, {
                    default: withCtx(() => {
                      var _a;
                      return [
                        props.isLoading && !props.data.length ? (openBlock(), createBlock(_component_UiTableRow, { key: 0 }, {
                          default: withCtx(() => [
                            createVNode(_component_UiTableCell, {
                              colspan: props.columns.length,
                              class: "text-left"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" \u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430... ")
                              ]),
                              _: 1
                            }, 8, ["colspan"])
                          ]),
                          _: 1
                        })) : ((_a = unref(table).getRowModel().rows) == null ? void 0 : _a.length) ? (openBlock(), createBlock(Fragment, { key: 1 }, [
                          (openBlock(true), createBlock(Fragment, null, renderList(unref(table).getRowModel().rows, (row) => {
                            return openBlock(), createBlock(_component_UiTableRow, {
                              key: row.id,
                              class: "cursor-pointer hover:bg-slate-300/50",
                              onClick: ($event) => itemClick(row.original.operationId)
                            }, {
                              default: withCtx(() => [
                                (openBlock(true), createBlock(Fragment, null, renderList(row.getVisibleCells(), (cell) => {
                                  return openBlock(), createBlock(_component_UiTableCell, {
                                    key: cell.id
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(unref(FlexRender), {
                                        render: cell.column.columnDef.cell,
                                        props: cell.getContext()
                                      }, null, 8, ["render", "props"])
                                    ]),
                                    _: 2
                                  }, 1024);
                                }), 128))
                              ]),
                              _: 2
                            }, 1032, ["onClick"]);
                          }), 128)),
                          props.isLoadingMore ? (openBlock(), createBlock(_component_UiTableRow, { key: 0 }, {
                            default: withCtx(() => [
                              createVNode(_component_UiTableCell, {
                                colspan: props.columns.length,
                                class: "text-center"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" \u0414\u043E\u0433\u0440\u0443\u0436\u0430\u0435\u043C... ")
                                ]),
                                _: 1
                              }, 8, ["colspan"])
                            ]),
                            _: 1
                          })) : props.hasMore ? (openBlock(), createBlock(_component_UiTableRow, { key: 1 }, {
                            default: withCtx(() => [
                              createVNode(_component_UiTableCell, {
                                colspan: props.columns.length,
                                class: "p-0"
                              }, {
                                default: withCtx(() => [
                                  createVNode("div", {
                                    ref_key: "loadMoreRef",
                                    ref: loadMoreRef,
                                    class: "h-6",
                                    "aria-hidden": "true"
                                  }, null, 512)
                                ]),
                                _: 1
                              }, 8, ["colspan"])
                            ]),
                            _: 1
                          })) : createCommentVNode("", true)
                        ], 64)) : (openBlock(), createBlock(_component_UiTableRow, { key: 2 }, {
                          default: withCtx(() => [
                            createVNode(_component_UiTableCell, {
                              colspan: _ctx.columns.length,
                              class: "text-left"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" \u041D\u0435\u0442 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u043E\u0432. ")
                              ]),
                              _: 1
                            }, 8, ["colspan"])
                          ]),
                          _: 1
                        }))
                      ];
                    }),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_UiScrollBar, { orientation: "horizontal" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/my/planfact/Operations/DataTable.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
function useAutoCategoryRules() {
  const { $useApi } = useNuxtApp();
  const api = $useApi;
  const rules = ref([]);
  const loading = ref(false);
  const rulesTotal = ref(0);
  const fetchRules = async () => {
    loading.value = true;
    try {
      const { data } = await api.get("auto-category-rules");
      let newRules = [];
      if (Array.isArray(data)) {
        newRules = data;
        rulesTotal.value = data.length;
      } else if (data && typeof data === "object" && "items" in data) {
        if (Array.isArray(data.items)) {
          newRules = data.items;
          rulesTotal.value = typeof data.total === "number" ? data.total : data.items.length;
        }
      } else if (data && typeof data === "object") {
        for (const key in data) {
          if (Array.isArray(data[key])) {
            newRules = data[key];
            rulesTotal.value = typeof data.total === "number" ? data.total : data[key].length;
            break;
          }
        }
      }
      rules.value = newRules;
    } finally {
      loading.value = false;
    }
  };
  const fetchRule = async (id) => {
    const { data } = await api.get(`auto-category-rules/${id}`);
    return data || null;
  };
  const createRule = async (dto) => {
    const { data } = await api.post("auto-category-rules", dto);
    return data;
  };
  const updateRule = async (id, dto) => {
    const { data } = await api.patch(`auto-category-rules/${id}`, dto);
    return data;
  };
  const deleteRule = async (id) => {
    const { data } = await api.delete(`auto-category-rules/${id}`);
    return data;
  };
  const testRule = async (id, take = 50, skip = 0) => {
    const { data } = await api.post(
      `auto-category-rules/${id}/test`,
      {},
      {
        params: { take, skip }
      }
    );
    return data;
  };
  const testRuleDraft = async (body, take = 50, skip = 0) => {
    const { data } = await api.post("auto-category-rules/test", body, {
      params: { take, skip }
    });
    return data;
  };
  return {
    // state
    rules,
    rulesTotal,
    loading,
    // crud
    fetchRules,
    fetchRule,
    createRule,
    updateRule,
    deleteRule,
    testRule,
    testRuleDraft
    // helpers
  };
}
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "FilterPopover",
  __ssrInlineRender: true,
  props: {
    items: {},
    selectedIds: {},
    label: {},
    placeholder: { default: "" },
    onLoadMore: { type: [Function, null], default: null },
    onSearch: { type: [Function, null], default: null },
    hasMore: { type: Boolean, default: false },
    isLoading: { type: Boolean, default: false }
  },
  emits: ["update:selectedIds", "clear"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const searchTerm = ref("");
    const isPopoverOpen = ref(false);
    const loadMoreRef = ref(null);
    const selectedItems = computed(() => {
      return props.items.filter((item) => props.selectedIds.includes(item.id));
    });
    const filteredItems = computed(() => {
      return props.items;
    });
    const handleToggle = (id) => {
      const newIds = [...props.selectedIds];
      const index = newIds.indexOf(id);
      if (index > -1) {
        newIds.splice(index, 1);
      } else {
        newIds.push(id);
      }
      emit("update:selectedIds", newIds);
    };
    const resetFilter = () => {
      emit("update:selectedIds", []);
      emit("clear");
    };
    let searchTimeout = null;
    const triggerSearch = (value) => {
      if (searchTimeout) {
        clearTimeout(searchTimeout);
      }
      searchTimeout = setTimeout(() => {
        if (props.onSearch) {
          props.onSearch(value || "");
        }
      }, 300);
    };
    watch(searchTerm, (newValue) => {
      triggerSearch(newValue);
    });
    const handleScroll = (event) => {
      const target = event.target;
      if (!target || !loadMoreRef.value || !props.hasMore || props.isLoading) {
        return;
      }
      const loadMoreElement = loadMoreRef.value;
      const loadMoreRect = loadMoreElement.getBoundingClientRect();
      const containerRect = target.getBoundingClientRect();
      if (loadMoreRect.top <= containerRect.bottom + 100 && loadMoreRect.bottom >= containerRect.top) {
        if (props.onLoadMore) {
          props.onLoadMore();
        }
      }
    };
    watch(isPopoverOpen, (open) => {
      if (open) {
        nextTick(() => {
          if (props.onSearch) {
            props.onSearch("");
          }
        });
      } else {
        searchTerm.value = "";
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiPopover = _sfc_main$2$4;
      const _component_UiPopoverTrigger = _sfc_main$1$4;
      const _component_UiButton = _sfc_main$h;
      const _component_UiSeparator = _sfc_main$f;
      const _component_UiBadge = _sfc_main$v;
      const _component_UiPopoverContent = _sfc_main$w;
      const _component_UiCommand = _sfc_main$5$2;
      const _component_UiCommandInput = _sfc_main$2$5;
      const _component_UiCommandList = _sfc_main$x;
      const _component_UiCommandEmpty = _sfc_main$4$3;
      const _component_UiCommandGroup = _sfc_main$3$3;
      const _component_UiCommandItem = _sfc_main$1$5;
      const _component_UiCommandSeparator = _sfc_main$y;
      _push(ssrRenderComponent(_component_UiPopover, mergeProps({
        open: isPopoverOpen.value,
        "onUpdate:open": ($event) => isPopoverOpen.value = $event
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UiPopoverTrigger, { "as-child": "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UiButton, {
                    variant: "outline",
                    size: "sm",
                    class: "h-8 border-dashed"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(CirclePlus), { class: "mr-2 h-4 w-4" }, null, _parent4, _scopeId3));
                        _push4(` ${ssrInterpolate(_ctx.label)} `);
                        if (_ctx.selectedIds.length > 0) {
                          _push4(`<!--[-->`);
                          _push4(ssrRenderComponent(_component_UiSeparator, {
                            orientation: "vertical",
                            class: "mx-2 h-4"
                          }, null, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_component_UiBadge, {
                            variant: "secondary",
                            class: "rounded-sm px-1 font-normal lg:hidden"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`${ssrInterpolate(_ctx.selectedIds.length)}`);
                              } else {
                                return [
                                  createTextVNode(toDisplayString(_ctx.selectedIds.length), 1)
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(`<div class="hidden space-x-1 lg:flex"${_scopeId3}>`);
                          if (_ctx.selectedIds.length <= 0) {
                            _push4(`<!--[-->`);
                            ssrRenderList(selectedItems.value, (item) => {
                              _push4(ssrRenderComponent(_component_UiBadge, {
                                key: item.id,
                                variant: "secondary",
                                class: "rounded-sm px-1 font-normal"
                              }, {
                                default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                  if (_push5) {
                                    _push5(`${ssrInterpolate(item.title)}`);
                                  } else {
                                    return [
                                      createTextVNode(toDisplayString(item.title), 1)
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent4, _scopeId3));
                            });
                            _push4(`<!--]-->`);
                          } else {
                            _push4(ssrRenderComponent(_component_UiBadge, {
                              variant: "secondary",
                              class: "rounded-sm px-1 font-normal"
                            }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`${ssrInterpolate(_ctx.selectedIds.length)}`);
                                } else {
                                  return [
                                    createTextVNode(toDisplayString(_ctx.selectedIds.length), 1)
                                  ];
                                }
                              }),
                              _: 1
                            }, _parent4, _scopeId3));
                          }
                          _push4(ssrRenderComponent(_component_UiBadge, {
                            variant: "destructive",
                            class: "rounded-sm px-1 font-normal h-6 ml-1",
                            onClick: () => {
                              resetFilter();
                              isPopoverOpen.value = false;
                            }
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(` x `);
                              } else {
                                return [
                                  createTextVNode(" x ")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(`</div><!--]-->`);
                        } else {
                          _push4(`<!---->`);
                        }
                      } else {
                        return [
                          createVNode(unref(CirclePlus), { class: "mr-2 h-4 w-4" }),
                          createTextVNode(" " + toDisplayString(_ctx.label) + " ", 1),
                          _ctx.selectedIds.length > 0 ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                            createVNode(_component_UiSeparator, {
                              orientation: "vertical",
                              class: "mx-2 h-4"
                            }),
                            createVNode(_component_UiBadge, {
                              variant: "secondary",
                              class: "rounded-sm px-1 font-normal lg:hidden"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(_ctx.selectedIds.length), 1)
                              ]),
                              _: 1
                            }),
                            createVNode("div", { class: "hidden space-x-1 lg:flex" }, [
                              _ctx.selectedIds.length <= 0 ? (openBlock(true), createBlock(Fragment, { key: 0 }, renderList(selectedItems.value, (item) => {
                                return openBlock(), createBlock(_component_UiBadge, {
                                  key: item.id,
                                  variant: "secondary",
                                  class: "rounded-sm px-1 font-normal"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(item.title), 1)
                                  ]),
                                  _: 2
                                }, 1024);
                              }), 128)) : (openBlock(), createBlock(_component_UiBadge, {
                                key: 1,
                                variant: "secondary",
                                class: "rounded-sm px-1 font-normal"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(_ctx.selectedIds.length), 1)
                                ]),
                                _: 1
                              })),
                              createVNode(_component_UiBadge, {
                                variant: "destructive",
                                class: "rounded-sm px-1 font-normal h-6 ml-1",
                                onClick: withModifiers(
                                  () => {
                                    resetFilter();
                                    isPopoverOpen.value = false;
                                  },
                                  ["stop"]
                                )
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" x ")
                                ]),
                                _: 1
                              }, 8, ["onClick"])
                            ])
                          ], 64)) : createCommentVNode("", true)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UiButton, {
                      variant: "outline",
                      size: "sm",
                      class: "h-8 border-dashed"
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(CirclePlus), { class: "mr-2 h-4 w-4" }),
                        createTextVNode(" " + toDisplayString(_ctx.label) + " ", 1),
                        _ctx.selectedIds.length > 0 ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                          createVNode(_component_UiSeparator, {
                            orientation: "vertical",
                            class: "mx-2 h-4"
                          }),
                          createVNode(_component_UiBadge, {
                            variant: "secondary",
                            class: "rounded-sm px-1 font-normal lg:hidden"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(_ctx.selectedIds.length), 1)
                            ]),
                            _: 1
                          }),
                          createVNode("div", { class: "hidden space-x-1 lg:flex" }, [
                            _ctx.selectedIds.length <= 0 ? (openBlock(true), createBlock(Fragment, { key: 0 }, renderList(selectedItems.value, (item) => {
                              return openBlock(), createBlock(_component_UiBadge, {
                                key: item.id,
                                variant: "secondary",
                                class: "rounded-sm px-1 font-normal"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(item.title), 1)
                                ]),
                                _: 2
                              }, 1024);
                            }), 128)) : (openBlock(), createBlock(_component_UiBadge, {
                              key: 1,
                              variant: "secondary",
                              class: "rounded-sm px-1 font-normal"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(_ctx.selectedIds.length), 1)
                              ]),
                              _: 1
                            })),
                            createVNode(_component_UiBadge, {
                              variant: "destructive",
                              class: "rounded-sm px-1 font-normal h-6 ml-1",
                              onClick: withModifiers(
                                () => {
                                  resetFilter();
                                  isPopoverOpen.value = false;
                                },
                                ["stop"]
                              )
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" x ")
                              ]),
                              _: 1
                            }, 8, ["onClick"])
                          ])
                        ], 64)) : createCommentVNode("", true)
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UiPopoverContent, {
              class: "w-[250px] p-0",
              align: "start"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UiCommand, { "should-filter": false }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UiCommandInput, {
                          "model-value": searchTerm.value,
                          placeholder: _ctx.placeholder || _ctx.label,
                          "onUpdate:modelValue": (value) => {
                            searchTerm.value = value;
                          },
                          onInput: (e) => {
                            const target = e.target;
                            if ((target == null ? void 0 : target.value) !== void 0) {
                              searchTerm.value = target.value;
                            }
                          }
                        }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_UiCommandList, {
                          class: "max-h-[300px]",
                          onScroll: handleScroll
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_UiCommandEmpty, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`\u041D\u0435\u0442 \u0441\u043E\u0432\u043F\u0430\u0434\u0435\u043D\u0438\u0439.`);
                                  } else {
                                    return [
                                      createTextVNode("\u041D\u0435\u0442 \u0441\u043E\u0432\u043F\u0430\u0434\u0435\u043D\u0438\u0439.")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_UiCommandGroup, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<!--[-->`);
                                    ssrRenderList(filteredItems.value, (item) => {
                                      _push6(ssrRenderComponent(_component_UiCommandItem, {
                                        key: item.id,
                                        value: item,
                                        class: "py-2",
                                        onSelect: ($event) => handleToggle(item.id)
                                      }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`<div class="${ssrRenderClass(
                                              _ctx.selectedIds.includes(item.id) ? "mr-2 flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-sm border border-primary bg-primary text-primary-foreground" : "mr-2 flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-sm border border-primary opacity-50 [&_svg]:invisible"
                                            )}"${_scopeId6}>`);
                                            _push7(ssrRenderComponent(unref(Check), { class: "h-4 w-4" }, null, _parent7, _scopeId6));
                                            _push7(`</div><span class="flex-1 break-words whitespace-normal leading-relaxed"${_scopeId6}>${ssrInterpolate(item.title)}</span>`);
                                          } else {
                                            return [
                                              createVNode("div", {
                                                class: _ctx.selectedIds.includes(item.id) ? "mr-2 flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-sm border border-primary bg-primary text-primary-foreground" : "mr-2 flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-sm border border-primary opacity-50 [&_svg]:invisible"
                                              }, [
                                                createVNode(unref(Check), { class: "h-4 w-4" })
                                              ], 2),
                                              createVNode("span", { class: "flex-1 break-words whitespace-normal leading-relaxed" }, toDisplayString(item.title), 1)
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                    });
                                    _push6(`<!--]-->`);
                                    if (_ctx.hasMore && !_ctx.isLoading) {
                                      _push6(`<div class="h-4"${_scopeId5}></div>`);
                                    } else {
                                      _push6(`<!---->`);
                                    }
                                    if (_ctx.isLoading) {
                                      _push6(`<div class="flex items-center justify-center py-2 text-sm text-slate-500"${_scopeId5}> \u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430... </div>`);
                                    } else {
                                      _push6(`<!---->`);
                                    }
                                  } else {
                                    return [
                                      (openBlock(true), createBlock(Fragment, null, renderList(filteredItems.value, (item) => {
                                        return openBlock(), createBlock(_component_UiCommandItem, {
                                          key: item.id,
                                          value: item,
                                          class: "py-2",
                                          onSelect: ($event) => handleToggle(item.id)
                                        }, {
                                          default: withCtx(() => [
                                            createVNode("div", {
                                              class: _ctx.selectedIds.includes(item.id) ? "mr-2 flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-sm border border-primary bg-primary text-primary-foreground" : "mr-2 flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-sm border border-primary opacity-50 [&_svg]:invisible"
                                            }, [
                                              createVNode(unref(Check), { class: "h-4 w-4" })
                                            ], 2),
                                            createVNode("span", { class: "flex-1 break-words whitespace-normal leading-relaxed" }, toDisplayString(item.title), 1)
                                          ]),
                                          _: 2
                                        }, 1032, ["value", "onSelect"]);
                                      }), 128)),
                                      _ctx.hasMore && !_ctx.isLoading ? (openBlock(), createBlock("div", {
                                        key: 0,
                                        ref_key: "loadMoreRef",
                                        ref: loadMoreRef,
                                        class: "h-4"
                                      }, null, 512)) : createCommentVNode("", true),
                                      _ctx.isLoading ? (openBlock(), createBlock("div", {
                                        key: 1,
                                        class: "flex items-center justify-center py-2 text-sm text-slate-500"
                                      }, " \u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430... ")) : createCommentVNode("", true)
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              if (_ctx.selectedIds.length > 0) {
                                _push5(`<!--[-->`);
                                _push5(ssrRenderComponent(_component_UiCommandSeparator, null, null, _parent5, _scopeId4));
                                _push5(ssrRenderComponent(_component_UiCommandGroup, null, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(_component_UiCommandItem, {
                                        value: { label: "\u041E\u0447\u0438\u0441\u0442\u0438\u0442\u044C" },
                                        class: "justify-center text-center",
                                        onSelect: resetFilter
                                      }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(` \u041E\u0447\u0438\u0441\u0442\u0438\u0442\u044C `);
                                          } else {
                                            return [
                                              createTextVNode(" \u041E\u0447\u0438\u0441\u0442\u0438\u0442\u044C ")
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(_component_UiCommandItem, {
                                          value: { label: "\u041E\u0447\u0438\u0441\u0442\u0438\u0442\u044C" },
                                          class: "justify-center text-center",
                                          onSelect: resetFilter
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(" \u041E\u0447\u0438\u0441\u0442\u0438\u0442\u044C ")
                                          ]),
                                          _: 1
                                        })
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                                _push5(`<!--]-->`);
                              } else {
                                _push5(`<!---->`);
                              }
                            } else {
                              return [
                                createVNode(_component_UiCommandEmpty, null, {
                                  default: withCtx(() => [
                                    createTextVNode("\u041D\u0435\u0442 \u0441\u043E\u0432\u043F\u0430\u0434\u0435\u043D\u0438\u0439.")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_UiCommandGroup, null, {
                                  default: withCtx(() => [
                                    (openBlock(true), createBlock(Fragment, null, renderList(filteredItems.value, (item) => {
                                      return openBlock(), createBlock(_component_UiCommandItem, {
                                        key: item.id,
                                        value: item,
                                        class: "py-2",
                                        onSelect: ($event) => handleToggle(item.id)
                                      }, {
                                        default: withCtx(() => [
                                          createVNode("div", {
                                            class: _ctx.selectedIds.includes(item.id) ? "mr-2 flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-sm border border-primary bg-primary text-primary-foreground" : "mr-2 flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-sm border border-primary opacity-50 [&_svg]:invisible"
                                          }, [
                                            createVNode(unref(Check), { class: "h-4 w-4" })
                                          ], 2),
                                          createVNode("span", { class: "flex-1 break-words whitespace-normal leading-relaxed" }, toDisplayString(item.title), 1)
                                        ]),
                                        _: 2
                                      }, 1032, ["value", "onSelect"]);
                                    }), 128)),
                                    _ctx.hasMore && !_ctx.isLoading ? (openBlock(), createBlock("div", {
                                      key: 0,
                                      ref_key: "loadMoreRef",
                                      ref: loadMoreRef,
                                      class: "h-4"
                                    }, null, 512)) : createCommentVNode("", true),
                                    _ctx.isLoading ? (openBlock(), createBlock("div", {
                                      key: 1,
                                      class: "flex items-center justify-center py-2 text-sm text-slate-500"
                                    }, " \u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430... ")) : createCommentVNode("", true)
                                  ]),
                                  _: 1
                                }),
                                _ctx.selectedIds.length > 0 ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                                  createVNode(_component_UiCommandSeparator),
                                  createVNode(_component_UiCommandGroup, null, {
                                    default: withCtx(() => [
                                      createVNode(_component_UiCommandItem, {
                                        value: { label: "\u041E\u0447\u0438\u0441\u0442\u0438\u0442\u044C" },
                                        class: "justify-center text-center",
                                        onSelect: resetFilter
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(" \u041E\u0447\u0438\u0441\u0442\u0438\u0442\u044C ")
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  })
                                ], 64)) : createCommentVNode("", true)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_UiCommandInput, {
                            "model-value": searchTerm.value,
                            placeholder: _ctx.placeholder || _ctx.label,
                            "onUpdate:modelValue": (value) => {
                              searchTerm.value = value;
                            },
                            onInput: (e) => {
                              const target = e.target;
                              if ((target == null ? void 0 : target.value) !== void 0) {
                                searchTerm.value = target.value;
                              }
                            }
                          }, null, 8, ["model-value", "placeholder", "onUpdate:modelValue", "onInput"]),
                          createVNode(_component_UiCommandList, {
                            class: "max-h-[300px]",
                            onScroll: handleScroll
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_UiCommandEmpty, null, {
                                default: withCtx(() => [
                                  createTextVNode("\u041D\u0435\u0442 \u0441\u043E\u0432\u043F\u0430\u0434\u0435\u043D\u0438\u0439.")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_UiCommandGroup, null, {
                                default: withCtx(() => [
                                  (openBlock(true), createBlock(Fragment, null, renderList(filteredItems.value, (item) => {
                                    return openBlock(), createBlock(_component_UiCommandItem, {
                                      key: item.id,
                                      value: item,
                                      class: "py-2",
                                      onSelect: ($event) => handleToggle(item.id)
                                    }, {
                                      default: withCtx(() => [
                                        createVNode("div", {
                                          class: _ctx.selectedIds.includes(item.id) ? "mr-2 flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-sm border border-primary bg-primary text-primary-foreground" : "mr-2 flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-sm border border-primary opacity-50 [&_svg]:invisible"
                                        }, [
                                          createVNode(unref(Check), { class: "h-4 w-4" })
                                        ], 2),
                                        createVNode("span", { class: "flex-1 break-words whitespace-normal leading-relaxed" }, toDisplayString(item.title), 1)
                                      ]),
                                      _: 2
                                    }, 1032, ["value", "onSelect"]);
                                  }), 128)),
                                  _ctx.hasMore && !_ctx.isLoading ? (openBlock(), createBlock("div", {
                                    key: 0,
                                    ref_key: "loadMoreRef",
                                    ref: loadMoreRef,
                                    class: "h-4"
                                  }, null, 512)) : createCommentVNode("", true),
                                  _ctx.isLoading ? (openBlock(), createBlock("div", {
                                    key: 1,
                                    class: "flex items-center justify-center py-2 text-sm text-slate-500"
                                  }, " \u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430... ")) : createCommentVNode("", true)
                                ]),
                                _: 1
                              }),
                              _ctx.selectedIds.length > 0 ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                                createVNode(_component_UiCommandSeparator),
                                createVNode(_component_UiCommandGroup, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_UiCommandItem, {
                                      value: { label: "\u041E\u0447\u0438\u0441\u0442\u0438\u0442\u044C" },
                                      class: "justify-center text-center",
                                      onSelect: resetFilter
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" \u041E\u0447\u0438\u0441\u0442\u0438\u0442\u044C ")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                })
                              ], 64)) : createCommentVNode("", true)
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
                    createVNode(_component_UiCommand, { "should-filter": false }, {
                      default: withCtx(() => [
                        createVNode(_component_UiCommandInput, {
                          "model-value": searchTerm.value,
                          placeholder: _ctx.placeholder || _ctx.label,
                          "onUpdate:modelValue": (value) => {
                            searchTerm.value = value;
                          },
                          onInput: (e) => {
                            const target = e.target;
                            if ((target == null ? void 0 : target.value) !== void 0) {
                              searchTerm.value = target.value;
                            }
                          }
                        }, null, 8, ["model-value", "placeholder", "onUpdate:modelValue", "onInput"]),
                        createVNode(_component_UiCommandList, {
                          class: "max-h-[300px]",
                          onScroll: handleScroll
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_UiCommandEmpty, null, {
                              default: withCtx(() => [
                                createTextVNode("\u041D\u0435\u0442 \u0441\u043E\u0432\u043F\u0430\u0434\u0435\u043D\u0438\u0439.")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_UiCommandGroup, null, {
                              default: withCtx(() => [
                                (openBlock(true), createBlock(Fragment, null, renderList(filteredItems.value, (item) => {
                                  return openBlock(), createBlock(_component_UiCommandItem, {
                                    key: item.id,
                                    value: item,
                                    class: "py-2",
                                    onSelect: ($event) => handleToggle(item.id)
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("div", {
                                        class: _ctx.selectedIds.includes(item.id) ? "mr-2 flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-sm border border-primary bg-primary text-primary-foreground" : "mr-2 flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-sm border border-primary opacity-50 [&_svg]:invisible"
                                      }, [
                                        createVNode(unref(Check), { class: "h-4 w-4" })
                                      ], 2),
                                      createVNode("span", { class: "flex-1 break-words whitespace-normal leading-relaxed" }, toDisplayString(item.title), 1)
                                    ]),
                                    _: 2
                                  }, 1032, ["value", "onSelect"]);
                                }), 128)),
                                _ctx.hasMore && !_ctx.isLoading ? (openBlock(), createBlock("div", {
                                  key: 0,
                                  ref_key: "loadMoreRef",
                                  ref: loadMoreRef,
                                  class: "h-4"
                                }, null, 512)) : createCommentVNode("", true),
                                _ctx.isLoading ? (openBlock(), createBlock("div", {
                                  key: 1,
                                  class: "flex items-center justify-center py-2 text-sm text-slate-500"
                                }, " \u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430... ")) : createCommentVNode("", true)
                              ]),
                              _: 1
                            }),
                            _ctx.selectedIds.length > 0 ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                              createVNode(_component_UiCommandSeparator),
                              createVNode(_component_UiCommandGroup, null, {
                                default: withCtx(() => [
                                  createVNode(_component_UiCommandItem, {
                                    value: { label: "\u041E\u0447\u0438\u0441\u0442\u0438\u0442\u044C" },
                                    class: "justify-center text-center",
                                    onSelect: resetFilter
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" \u041E\u0447\u0438\u0441\u0442\u0438\u0442\u044C ")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              })
                            ], 64)) : createCommentVNode("", true)
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
          } else {
            return [
              createVNode(_component_UiPopoverTrigger, { "as-child": "" }, {
                default: withCtx(() => [
                  createVNode(_component_UiButton, {
                    variant: "outline",
                    size: "sm",
                    class: "h-8 border-dashed"
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(CirclePlus), { class: "mr-2 h-4 w-4" }),
                      createTextVNode(" " + toDisplayString(_ctx.label) + " ", 1),
                      _ctx.selectedIds.length > 0 ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                        createVNode(_component_UiSeparator, {
                          orientation: "vertical",
                          class: "mx-2 h-4"
                        }),
                        createVNode(_component_UiBadge, {
                          variant: "secondary",
                          class: "rounded-sm px-1 font-normal lg:hidden"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(_ctx.selectedIds.length), 1)
                          ]),
                          _: 1
                        }),
                        createVNode("div", { class: "hidden space-x-1 lg:flex" }, [
                          _ctx.selectedIds.length <= 0 ? (openBlock(true), createBlock(Fragment, { key: 0 }, renderList(selectedItems.value, (item) => {
                            return openBlock(), createBlock(_component_UiBadge, {
                              key: item.id,
                              variant: "secondary",
                              class: "rounded-sm px-1 font-normal"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(item.title), 1)
                              ]),
                              _: 2
                            }, 1024);
                          }), 128)) : (openBlock(), createBlock(_component_UiBadge, {
                            key: 1,
                            variant: "secondary",
                            class: "rounded-sm px-1 font-normal"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(_ctx.selectedIds.length), 1)
                            ]),
                            _: 1
                          })),
                          createVNode(_component_UiBadge, {
                            variant: "destructive",
                            class: "rounded-sm px-1 font-normal h-6 ml-1",
                            onClick: withModifiers(
                              () => {
                                resetFilter();
                                isPopoverOpen.value = false;
                              },
                              ["stop"]
                            )
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" x ")
                            ]),
                            _: 1
                          }, 8, ["onClick"])
                        ])
                      ], 64)) : createCommentVNode("", true)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_UiPopoverContent, {
                class: "w-[250px] p-0",
                align: "start"
              }, {
                default: withCtx(() => [
                  createVNode(_component_UiCommand, { "should-filter": false }, {
                    default: withCtx(() => [
                      createVNode(_component_UiCommandInput, {
                        "model-value": searchTerm.value,
                        placeholder: _ctx.placeholder || _ctx.label,
                        "onUpdate:modelValue": (value) => {
                          searchTerm.value = value;
                        },
                        onInput: (e) => {
                          const target = e.target;
                          if ((target == null ? void 0 : target.value) !== void 0) {
                            searchTerm.value = target.value;
                          }
                        }
                      }, null, 8, ["model-value", "placeholder", "onUpdate:modelValue", "onInput"]),
                      createVNode(_component_UiCommandList, {
                        class: "max-h-[300px]",
                        onScroll: handleScroll
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_UiCommandEmpty, null, {
                            default: withCtx(() => [
                              createTextVNode("\u041D\u0435\u0442 \u0441\u043E\u0432\u043F\u0430\u0434\u0435\u043D\u0438\u0439.")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UiCommandGroup, null, {
                            default: withCtx(() => [
                              (openBlock(true), createBlock(Fragment, null, renderList(filteredItems.value, (item) => {
                                return openBlock(), createBlock(_component_UiCommandItem, {
                                  key: item.id,
                                  value: item,
                                  class: "py-2",
                                  onSelect: ($event) => handleToggle(item.id)
                                }, {
                                  default: withCtx(() => [
                                    createVNode("div", {
                                      class: _ctx.selectedIds.includes(item.id) ? "mr-2 flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-sm border border-primary bg-primary text-primary-foreground" : "mr-2 flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-sm border border-primary opacity-50 [&_svg]:invisible"
                                    }, [
                                      createVNode(unref(Check), { class: "h-4 w-4" })
                                    ], 2),
                                    createVNode("span", { class: "flex-1 break-words whitespace-normal leading-relaxed" }, toDisplayString(item.title), 1)
                                  ]),
                                  _: 2
                                }, 1032, ["value", "onSelect"]);
                              }), 128)),
                              _ctx.hasMore && !_ctx.isLoading ? (openBlock(), createBlock("div", {
                                key: 0,
                                ref_key: "loadMoreRef",
                                ref: loadMoreRef,
                                class: "h-4"
                              }, null, 512)) : createCommentVNode("", true),
                              _ctx.isLoading ? (openBlock(), createBlock("div", {
                                key: 1,
                                class: "flex items-center justify-center py-2 text-sm text-slate-500"
                              }, " \u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430... ")) : createCommentVNode("", true)
                            ]),
                            _: 1
                          }),
                          _ctx.selectedIds.length > 0 ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                            createVNode(_component_UiCommandSeparator),
                            createVNode(_component_UiCommandGroup, null, {
                              default: withCtx(() => [
                                createVNode(_component_UiCommandItem, {
                                  value: { label: "\u041E\u0447\u0438\u0441\u0442\u0438\u0442\u044C" },
                                  class: "justify-center text-center",
                                  onSelect: resetFilter
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" \u041E\u0447\u0438\u0441\u0442\u0438\u0442\u044C ")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            })
                          ], 64)) : createCommentVNode("", true)
                        ]),
                        _: 1
                      })
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
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/my/FilterPopover.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "RuleModal",
  __ssrInlineRender: true,
  props: {
    isOpen: { type: Boolean },
    rule: {}
  },
  emits: ["update:isOpen", "saved", "deleted"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const {
      rules,
      fetchRules,
      fetchRule,
      createRule,
      updateRule,
      deleteRule: deleteRuleApi,
      testRule,
      testRuleDraft
    } = useAutoCategoryRules();
    const {
      accounts,
      counterPartiesFilters,
      counterPartiesFiltersPagination,
      isLoadingCounterParties,
      getAccounts,
      getCounterPartiesFilters,
      getExpenseCategoriesMini
    } = usePlanfact();
    const isSaving = ref(false);
    const isTesting = ref(false);
    const expenseCategories = ref([]);
    const selectedRuleId = ref(null);
    const rulesToShow = computed(() => rules.value);
    const form = ref({
      enabled: true,
      priority: 100,
      name: "",
      description: "",
      keywords: [],
      operationType: "Debit",
      accountIds: [],
      counterPartyIds: [],
      expenseCategoryId: 0
    });
    const isEditMode = computed(() => selectedRuleId.value != null);
    const testParams = ref({ take: 50, skip: 0 });
    const testResult = ref(null);
    const isFormValid = computed(() => {
      if (!form.value.name || !form.value.operationType) return false;
      if (!form.value.expenseCategoryId) return false;
      return Array.isArray(form.value.keywords) && form.value.keywords.length > 0;
    });
    const isTestValid = computed(() => {
      if (isEditMode.value) return true;
      const hasKeywords = Array.isArray(form.value.keywords) && form.value.keywords.length > 0;
      const hasType = !!form.value.operationType;
      return hasKeywords && hasType;
    });
    const expenseCategoryIdStr = computed({
      get: () => form.value.expenseCategoryId ? String(form.value.expenseCategoryId) : "",
      set: (v) => {
        form.value.expenseCategoryId = v ? Number(v) : 0;
      }
    });
    const loadExpenseCategories = async (operationType) => {
      try {
        expenseCategories.value = await getExpenseCategoriesMini(operationType);
      } catch (e) {
        console.error(e);
        toast({
          variant: "destructive",
          title: "\u041E\u0448\u0438\u0431\u043A\u0430",
          description: "\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u0438."
        });
      }
    };
    const handleAccountsLoad = async () => {
      await getAccounts();
    };
    const handleCounterPartySearch = async (searchTerm) => {
      await getCounterPartiesFilters(true, searchTerm);
    };
    const handleCounterPartyLoadMore = async () => {
      await getCounterPartiesFilters(false);
    };
    const formattedAccounts = computed(() => {
      return accounts.value.map((acc) => ({
        id: Number(acc.value),
        title: acc.label
      }));
    });
    const formattedCounterParties = computed(() => {
      return counterPartiesFilters.value.map(
        (c) => ({
          id: c.id,
          title: replaceLegalEntities(c.title) + " [..." + c.account.slice(-4) + "]"
        })
      );
    });
    const resetForm = () => {
      form.value = {
        enabled: true,
        priority: 100,
        name: "",
        description: "",
        keywords: [],
        operationType: "Debit",
        accountIds: [],
        counterPartyIds: [],
        expenseCategoryId: 0
      };
      testParams.value = { take: 50, skip: 0 };
      testResult.value = null;
      selectedRuleId.value = null;
    };
    const applyRuleToForm = (r) => {
      form.value = {
        enabled: r.enabled,
        priority: r.priority,
        name: r.name,
        description: r.description || "",
        keywords: r.keywords || [],
        operationType: r.operationType,
        accountIds: r.accountIds || [],
        counterPartyIds: r.counterPartyIds || [],
        expenseCategoryId: r.expenseCategoryId
      };
    };
    watch(
      () => props.isOpen,
      async (open) => {
        if (open) {
          await fetchRules();
          await loadExpenseCategories(form.value.operationType);
          await handleAccountsLoad();
          await getCounterPartiesFilters(true);
          if (props.rule && props.rule.id != null) {
            try {
              const data = await fetchRule(props.rule.id);
              if (data) {
                selectedRuleId.value = data.id;
                applyRuleToForm(data);
              }
            } catch (e) {
              console.error(e);
              resetForm();
            }
          } else {
            resetForm();
          }
          await nextTick();
          await new Promise((resolve) => setTimeout(resolve, 200));
          let retries = 10;
          while (rules.value.length === 0 && retries > 0) {
            await new Promise((resolve) => setTimeout(resolve, 100));
            retries--;
          }
          console.log("[RulesModal] After fetchRules:", {
            rulesCount: rules.value.length
          });
        } else {
          resetForm();
        }
      }
    );
    watch(
      () => form.value.operationType,
      async (opType) => {
        await loadExpenseCategories(opType);
      }
    );
    const saveRule = async () => {
      var _a, _b;
      if (!isFormValid.value) {
        toast({
          variant: "destructive",
          title: "\u0424\u043E\u0440\u043C\u0430 \u043D\u0435\u0432\u0430\u043B\u0438\u0434\u043D\u0430",
          description: "\u041F\u0440\u043E\u0432\u0435\u0440\u044C\u0442\u0435 \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u044B\u0435 \u043F\u043E\u043B\u044F."
        });
        return;
      }
      isSaving.value = true;
      try {
        const payload = {
          enabled: form.value.enabled,
          priority: form.value.priority,
          name: form.value.name,
          description: form.value.description || "",
          keywords: form.value.keywords,
          operationType: form.value.operationType,
          accountIds: form.value.accountIds || [],
          counterPartyIds: form.value.counterPartyIds || [],
          expenseCategoryId: form.value.expenseCategoryId
        };
        let saved;
        if (isEditMode.value && selectedRuleId.value != null) {
          saved = await updateRule(selectedRuleId.value, payload);
        } else {
          saved = await createRule(payload);
        }
        toast({ title: "\u0423\u0441\u043F\u0435\u0445", description: "\u041F\u0440\u0430\u0432\u0438\u043B\u043E \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u043E." });
        await fetchRules();
        selectedRuleId.value = saved.id;
        applyRuleToForm(saved);
        emit("saved", saved);
      } catch (e) {
        console.error(e);
        toast({
          variant: "destructive",
          title: "\u041E\u0448\u0438\u0431\u043A\u0430",
          description: ((_b = (_a = e == null ? void 0 : e.response) == null ? void 0 : _a.data) == null ? void 0 : _b.message) || "\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0441\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u043F\u0440\u0430\u0432\u0438\u043B\u043E."
        });
      } finally {
        isSaving.value = false;
      }
    };
    const deleteRule = async () => {
      var _a, _b;
      if (!isEditMode.value || selectedRuleId.value == null) return;
      try {
        const id = selectedRuleId.value;
        await deleteRuleApi(id);
        toast({ title: "\u0423\u0434\u0430\u043B\u0435\u043D\u043E", description: "\u041F\u0440\u0430\u0432\u0438\u043B\u043E \u0443\u0434\u0430\u043B\u0435\u043D\u043E." });
        await fetchRules();
        emit("deleted", id);
        resetForm();
      } catch (e) {
        console.error(e);
        toast({
          variant: "destructive",
          title: "\u041E\u0448\u0438\u0431\u043A\u0430",
          description: ((_b = (_a = e == null ? void 0 : e.response) == null ? void 0 : _a.data) == null ? void 0 : _b.message) || "\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0443\u0434\u0430\u043B\u0438\u0442\u044C \u043F\u0440\u0430\u0432\u0438\u043B\u043E."
        });
      }
    };
    const runTest = async () => {
      var _a, _b;
      isTesting.value = true;
      testResult.value = null;
      try {
        if (isEditMode.value && selectedRuleId.value != null) {
          testResult.value = await testRule(
            selectedRuleId.value,
            testParams.value.take,
            testParams.value.skip
          );
        } else {
          testResult.value = await testRuleDraft(
            {
              operationType: form.value.operationType,
              keywords: form.value.keywords,
              accountIds: form.value.accountIds && form.value.accountIds.length > 0 ? form.value.accountIds : void 0,
              counterPartyIds: form.value.counterPartyIds && form.value.counterPartyIds.length > 0 ? form.value.counterPartyIds : void 0
            },
            testParams.value.take,
            testParams.value.skip
          );
        }
      } catch (e) {
        console.error(e);
        toast({
          variant: "destructive",
          title: "\u041E\u0448\u0438\u0431\u043A\u0430",
          description: ((_b = (_a = e == null ? void 0 : e.response) == null ? void 0 : _a.data) == null ? void 0 : _b.message) || "\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0432\u044B\u043F\u043E\u043B\u043D\u0438\u0442\u044C \u043F\u0440\u0435\u0434\u043F\u0440\u043E\u0441\u043C\u043E\u0442\u0440."
        });
      } finally {
        isTesting.value = false;
      }
    };
    const handleClose = () => {
      emit("update:isOpen", false);
    };
    const keywordsInput = ref("");
    const pushKeywords = () => {
      const raw = (keywordsInput.value || "").trim();
      if (!raw) return;
      const parts = raw.split(",").map((s) => s.trim()).filter(Boolean);
      if (parts.length === 0) return;
      const set = /* @__PURE__ */ new Set([...form.value.keywords || [], ...parts]);
      form.value.keywords = Array.from(set);
      keywordsInput.value = "";
    };
    const removeTag = (target, tag) => {
      {
        form.value.keywords = (form.value.keywords || []).filter((t) => t !== tag);
      }
    };
    const selectRule = (r) => {
      selectedRuleId.value = r.id;
      applyRuleToForm(r);
    };
    const createNew = () => {
      resetForm();
    };
    const opTypeLabel = (t) => t === "Debit" ? "\u0421\u043F\u0438\u0441\u0430\u043D\u0438\u0435" : t === "Credit" ? "\u041F\u043E\u0441\u0442\u0443\u043F\u043B\u0435\u043D\u0438\u0435" : t;
    const currentKeywords = computed(() => {
      if (isEditMode.value && selectedRuleId.value != null) {
        const rule = rules.value.find((r) => r.id === selectedRuleId.value);
        return (rule == null ? void 0 : rule.keywords) || [];
      }
      return form.value.keywords || [];
    });
    const highlightKeywords = (text, keywords) => {
      if (!text || !keywords || keywords.length === 0) {
        return text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;");
      }
      const validKeywords = keywords.filter((kw) => kw && kw.trim()).map((kw) => kw.trim());
      if (validKeywords.length === 0) {
        return text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;");
      }
      validKeywords.sort((a, b) => b.length - a.length);
      const escapeHtml = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;");
      let result = escapeHtml(text);
      validKeywords.forEach((keyword) => {
        const escapedKeyword = escapeHtml(keyword);
        const regexEscaped = escapedKeyword.replace(
          /[.*+?^${}()|[\]\\]/g,
          "\\$&"
        );
        const regex = new RegExp(`(${regexEscaped})`, "gi");
        result = result.replace(regex, '<span class="bg-green-200">$1</span>');
      });
      return result;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiDialog = _sfc_main$4$2;
      const _component_UiDialogContent = _sfc_main$q;
      const _component_UiDialogHeader = _sfc_main$2$3;
      const _component_UiDialogTitle = _sfc_main$1$3;
      const _component_UiDialogDescription = _sfc_main$r;
      const _component_UiButton = _sfc_main$h;
      const _component_UiInput = _sfc_main$n;
      const _component_UiLabel = _sfc_main$s;
      const _component_UiSwitch = _sfc_main$B;
      const _component_UiSelect = _sfc_main$6$1;
      const _component_UiSelectTrigger = _sfc_main$4$1;
      const _component_UiSelectValue = _sfc_main$5$1;
      const _component_UiSelectContent = _sfc_main$3$1;
      const _component_UiSelectItem = _sfc_main$2$1;
      const _component_UiTextarea = _sfc_main$t;
      _push(ssrRenderComponent(_component_UiDialog, mergeProps({
        open: _ctx.isOpen,
        "onUpdate:open": ($event) => emit("update:isOpen", $event)
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UiDialogContent, { class: "max-w-[1200px] h-[80vh] flex flex-col" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UiDialogHeader, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UiDialogTitle, null, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_UiDialogDescription, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_UiDialogTitle),
                          createVNode(_component_UiDialogDescription)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<div class="grid grid-cols-3 grow min-h-0 gap-6"${_scopeId2}><div class="space-y-3 border rounded-md p-3 flex flex-col min-h-0"${_scopeId2}><div class="flex justify-between items-center"${_scopeId2}><div class="text-sm font-medium"${_scopeId2}>\u0421\u043F\u0438\u0441\u043E\u043A \u043F\u0440\u0430\u0432\u0438\u043B</div>`);
                  _push3(ssrRenderComponent(_component_UiButton, {
                    size: "sm",
                    variant: "secondary",
                    onClick: createNew
                  }, {
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
                  _push3(`</div><div class="flex-1 min-h-0 overflow-auto border rounded"${_scopeId2}><!--[-->`);
                  ssrRenderList(rulesToShow.value, (r) => {
                    _push3(`<div class="${ssrRenderClass([{ "bg-slate-100": selectedRuleId.value === r.id }, "p-2 border-b cursor-pointer hover:bg-slate-50"])}"${_scopeId2}><div class="flex items-center justify-between"${_scopeId2}><div class="font-medium truncate max-w-[220px]"${_scopeId2}>${ssrInterpolate(r.name)}</div><span class="${ssrRenderClass([
                      r.enabled ? "bg-green-100 text-green-700" : "bg-slate-100 text-slate-600",
                      "text-[10px] px-2 py-0.5 rounded"
                    ])}"${_scopeId2}>${ssrInterpolate(r.enabled ? "on" : "off")}</span></div><div class="text-xs text-slate-500 flex gap-2"${_scopeId2}><span${_scopeId2}>#${ssrInterpolate(r.id)}</span><span${_scopeId2}>\u041F\u0440\u0438\u043E\u0440\u0438\u0442\u0435\u0442: ${ssrInterpolate(r.priority)}</span><span${_scopeId2}>${ssrInterpolate(opTypeLabel(r.operationType))}</span></div></div>`);
                  });
                  _push3(`<!--]--></div></div><div class="space-y-4 flex flex-col min-h-0"${_scopeId2}><div class="flex-1 min-h-0 space-y-4"${_scopeId2}><div class="flex items-center justify-between"${_scopeId2}><div class="relative flex-1 mr-3"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UiInput, {
                    modelValue: form.value.name,
                    "onUpdate:modelValue": ($event) => form.value.name = $event,
                    placeholder: "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u043F\u0440\u0430\u0432\u0438\u043B\u0430",
                    class: form.value.name ? "" : "outline-1 outline-rose-300"
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435`);
                      } else {
                        return [
                          createTextVNode("\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div><div class="flex items-center gap-2"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UiLabel, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`\u0412\u043A\u043B\u044E\u0447\u0435\u043D\u043E`);
                      } else {
                        return [
                          createTextVNode("\u0412\u043A\u043B\u044E\u0447\u0435\u043D\u043E")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UiSwitch, {
                    checked: form.value.enabled,
                    "onUpdate:checked": ($event) => form.value.enabled = $event
                  }, null, _parent3, _scopeId2));
                  _push3(`</div></div><div class="grid grid-cols-2 gap-3"${_scopeId2}><div class="relative"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UiInput, {
                    modelValue: form.value.priority,
                    "onUpdate:modelValue": ($event) => form.value.priority = $event,
                    modelModifiers: { number: true },
                    type: "number",
                    placeholder: "\u041F\u0440\u0438\u043E\u0440\u0438\u0442\u0435\u0442"
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`\u041F\u0440\u0438\u043E\u0440\u0438\u0442\u0435\u0442`);
                      } else {
                        return [
                          createTextVNode("\u041F\u0440\u0438\u043E\u0440\u0438\u0442\u0435\u0442")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div><div class="relative"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UiSelect, {
                    modelValue: form.value.operationType,
                    "onUpdate:modelValue": ($event) => form.value.operationType = $event
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UiSelectTrigger, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_UiSelectValue, { placeholder: "\u0422\u0438\u043F \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u0438" }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_UiSelectValue, { placeholder: "\u0422\u0438\u043F \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u0438" })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_UiSelectContent, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_UiSelectItem, { value: "Credit" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`\u041F\u043E\u0441\u0442\u0443\u043F\u043B\u0435\u043D\u0438\u0435`);
                                  } else {
                                    return [
                                      createTextVNode("\u041F\u043E\u0441\u0442\u0443\u043F\u043B\u0435\u043D\u0438\u0435")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_UiSelectItem, { value: "Debit" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`\u0421\u043F\u0438\u0441\u0430\u043D\u0438\u0435`);
                                  } else {
                                    return [
                                      createTextVNode("\u0421\u043F\u0438\u0441\u0430\u043D\u0438\u0435")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_UiSelectItem, { value: "Credit" }, {
                                  default: withCtx(() => [
                                    createTextVNode("\u041F\u043E\u0441\u0442\u0443\u043F\u043B\u0435\u043D\u0438\u0435")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_UiSelectItem, { value: "Debit" }, {
                                  default: withCtx(() => [
                                    createTextVNode("\u0421\u043F\u0438\u0441\u0430\u043D\u0438\u0435")
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
                          createVNode(_component_UiSelectTrigger, null, {
                            default: withCtx(() => [
                              createVNode(_component_UiSelectValue, { placeholder: "\u0422\u0438\u043F \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u0438" })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UiSelectContent, null, {
                            default: withCtx(() => [
                              createVNode(_component_UiSelectItem, { value: "Credit" }, {
                                default: withCtx(() => [
                                  createTextVNode("\u041F\u043E\u0441\u0442\u0443\u043F\u043B\u0435\u043D\u0438\u0435")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_UiSelectItem, { value: "Debit" }, {
                                default: withCtx(() => [
                                  createTextVNode("\u0421\u043F\u0438\u0441\u0430\u043D\u0438\u0435")
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
                  _push3(ssrRenderComponent(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`\u0422\u0438\u043F \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u0438`);
                      } else {
                        return [
                          createTextVNode("\u0422\u0438\u043F \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u0438")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div></div><div class="relative"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UiSelect, {
                    modelValue: expenseCategoryIdStr.value,
                    "onUpdate:modelValue": ($event) => expenseCategoryIdStr.value = $event
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UiSelectTrigger, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_UiSelectValue, { placeholder: "\u0421\u0442\u0430\u0442\u044C\u044F \u0440\u0430\u0441\u0445\u043E\u0434\u043E\u0432/\u0434\u043E\u0445\u043E\u0434\u043E\u0432" }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_UiSelectValue, { placeholder: "\u0421\u0442\u0430\u0442\u044C\u044F \u0440\u0430\u0441\u0445\u043E\u0434\u043E\u0432/\u0434\u043E\u0445\u043E\u0434\u043E\u0432" })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_UiSelectContent, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<!--[-->`);
                              ssrRenderList(expenseCategories.value, (c) => {
                                _push5(ssrRenderComponent(_component_UiSelectItem, {
                                  key: c.id,
                                  value: String(c.id)
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`${ssrInterpolate(c.name)}`);
                                    } else {
                                      return [
                                        createTextVNode(toDisplayString(c.name), 1)
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                              });
                              _push5(`<!--]-->`);
                            } else {
                              return [
                                (openBlock(true), createBlock(Fragment, null, renderList(expenseCategories.value, (c) => {
                                  return openBlock(), createBlock(_component_UiSelectItem, {
                                    key: c.id,
                                    value: String(c.id)
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(c.name), 1)
                                    ]),
                                    _: 2
                                  }, 1032, ["value"]);
                                }), 128))
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_UiSelectTrigger, null, {
                            default: withCtx(() => [
                              createVNode(_component_UiSelectValue, { placeholder: "\u0421\u0442\u0430\u0442\u044C\u044F \u0440\u0430\u0441\u0445\u043E\u0434\u043E\u0432/\u0434\u043E\u0445\u043E\u0434\u043E\u0432" })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UiSelectContent, null, {
                            default: withCtx(() => [
                              (openBlock(true), createBlock(Fragment, null, renderList(expenseCategories.value, (c) => {
                                return openBlock(), createBlock(_component_UiSelectItem, {
                                  key: c.id,
                                  value: String(c.id)
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(c.name), 1)
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
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F`);
                      } else {
                        return [
                          createTextVNode("\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div><div class="grid grid-cols-2 gap-3"${_scopeId2}><div class="relative col-span-2"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UiLabel, { class: "text-sm font-medium" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`\u041A\u043B\u044E\u0447\u0435\u0432\u044B\u0435 \u0441\u043B\u043E\u0432\u0430`);
                      } else {
                        return [
                          createTextVNode("\u041A\u043B\u044E\u0447\u0435\u0432\u044B\u0435 \u0441\u043B\u043E\u0432\u0430")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<div class="flex gap-2 mt-1"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UiInput, {
                    modelValue: keywordsInput.value,
                    "onUpdate:modelValue": ($event) => keywordsInput.value = $event,
                    placeholder: "\u0441\u043B\u043E\u0432\u043E, \u0441\u043B\u043E\u0432\u043E2, ...",
                    onKeydown: pushKeywords
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UiButton, {
                    variant: "secondary",
                    onClick: pushKeywords
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C`);
                      } else {
                        return [
                          createTextVNode("\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div><div class="flex flex-wrap gap-2 mt-2"${_scopeId2}><!--[-->`);
                  ssrRenderList(form.value.keywords, (kw) => {
                    _push3(`<span class="px-2 py-1 bg-slate-100 rounded text-xs flex items-center gap-2"${_scopeId2}>${ssrInterpolate(kw)} <button class="text-red-500"${_scopeId2}> x </button></span>`);
                  });
                  _push3(`<!--]--></div></div></div><div class="relative"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_sfc_main$6, {
                    items: formattedAccounts.value,
                    "selected-ids": form.value.accountIds || [],
                    label: "\u0421\u0447\u0435\u0442\u0430",
                    placeholder: "\u041F\u043E\u0438\u0441\u043A \u0441\u0447\u0435\u0442\u043E\u0432...",
                    "has-more": false,
                    "is-loading": false,
                    "onUpdate:selectedIds": (ids) => form.value.accountIds = ids,
                    onClear: ($event) => form.value.accountIds = []
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`\u0421\u0447\u0435\u0442\u0430`);
                      } else {
                        return [
                          createTextVNode("\u0421\u0447\u0435\u0442\u0430")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div><div class="relative"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_sfc_main$6, {
                    items: formattedCounterParties.value,
                    "selected-ids": form.value.counterPartyIds || [],
                    label: "\u041A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442\u044B",
                    placeholder: "\u041F\u043E\u0438\u0441\u043A \u043A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442\u043E\u0432...",
                    "has-more": unref(counterPartiesFiltersPagination).hasNext,
                    "is-loading": unref(isLoadingCounterParties),
                    "on-search": handleCounterPartySearch,
                    "on-load-more": handleCounterPartyLoadMore,
                    "onUpdate:selectedIds": (ids) => form.value.counterPartyIds = ids,
                    onClear: ($event) => form.value.counterPartyIds = []
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`\u041A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442\u044B`);
                      } else {
                        return [
                          createTextVNode("\u041A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442\u044B")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div><div class="relative"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UiTextarea, {
                    modelValue: form.value.description,
                    "onUpdate:modelValue": ($event) => form.value.description = $event,
                    placeholder: "\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435 (\u043D\u0435\u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E)"
                  }, null, _parent3, _scopeId2));
                  if (form.value.description) {
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
                  _push3(`</div></div><div class="flex justify-end gap-2"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UiButton, {
                    variant: "outline",
                    onClick: handleClose
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`\u041E\u0442\u043C\u0435\u043D\u0430`);
                      } else {
                        return [
                          createTextVNode("\u041E\u0442\u043C\u0435\u043D\u0430")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  if (isEditMode.value) {
                    _push3(ssrRenderComponent(_component_UiButton, {
                      variant: "destructive",
                      onClick: deleteRule
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`\u0423\u0434\u0430\u043B\u0438\u0442\u044C`);
                        } else {
                          return [
                            createTextVNode("\u0423\u0434\u0430\u043B\u0438\u0442\u044C")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(ssrRenderComponent(_component_UiButton, {
                    disabled: isSaving.value || !isFormValid.value,
                    onClick: saveRule
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        if (isSaving.value) {
                          _push4(`<span${_scopeId3}>\u0421\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0438\u0435...</span>`);
                        } else {
                          _push4(`<span${_scopeId3}>${ssrInterpolate(isEditMode.value ? "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C" : "\u0421\u043E\u0437\u0434\u0430\u0442\u044C")}</span>`);
                        }
                      } else {
                        return [
                          isSaving.value ? (openBlock(), createBlock("span", { key: 0 }, "\u0421\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0438\u0435...")) : (openBlock(), createBlock("span", { key: 1 }, toDisplayString(isEditMode.value ? "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C" : "\u0421\u043E\u0437\u0434\u0430\u0442\u044C"), 1))
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div></div><div class="space-y-4 flex flex-col min-h-0"${_scopeId2}><div class="border rounded-md p-3 space-y-3 flex-1 min-h-0 overflow-hidden flex flex-col"${_scopeId2}><div class="flex gap-2 justify-between items-center"${_scopeId2}><div class="text-sm font-medium"${_scopeId2}>\u0421\u043E\u0432\u043F\u0430\u0434\u0435\u043D\u0438\u044F</div>`);
                  _push3(ssrRenderComponent(_component_UiButton, {
                    size: "sm",
                    variant: "secondary",
                    disabled: isTesting.value || !isTestValid.value,
                    onClick: runTest
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        if (isTesting.value) {
                          _push4(`<span${_scopeId3}>\u0422\u0435\u0441\u0442\u0438\u0440\u0443\u0435\u043C...</span>`);
                        } else {
                          _push4(`<span${_scopeId3}>\u0422\u0435\u0441\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C</span>`);
                        }
                      } else {
                        return [
                          isTesting.value ? (openBlock(), createBlock("span", { key: 0 }, "\u0422\u0435\u0441\u0442\u0438\u0440\u0443\u0435\u043C...")) : (openBlock(), createBlock("span", { key: 1 }, "\u0422\u0435\u0441\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C"))
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                  if (testResult.value) {
                    _push3(`<div class="flex-1 min-h-0 h-full overflow-auto border rounded"${_scopeId2}><table class="w-full text-sm table-fixed"${_scopeId2}><thead class="sticky top-0 z-10 bg-slate-50"${_scopeId2}><tr${_scopeId2}><th class="text-left p-2 w-[70%]"${_scopeId2}>\u041D\u0430\u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435</th><th class="text-left p-2 w-[30%]"${_scopeId2}>\u0421\u0443\u043C\u043C\u0430</th></tr></thead><tbody${_scopeId2}><!--[-->`);
                    ssrRenderList(testResult.value.items, (s) => {
                      var _a, _b, _c;
                      _push3(`<tr class="border-t"${_scopeId2}><td class="p-2"${_scopeId2}><div class="text-xs text-slate-500 mb-1"${_scopeId2}>${ssrInterpolate(((_a = s.account) == null ? void 0 : _a.name) || "\u0421\u0447\u0435\u0442 \u043D\u0435 \u0443\u043A\u0430\u0437\u0430\u043D")} `);
                      if ((_b = s.account) == null ? void 0 : _b.accountNumber) {
                        _push3(`<span class="text-slate-400"${_scopeId2}> (${ssrInterpolate(s.account.accountNumber.slice(-4))}) </span>`);
                      } else {
                        _push3(`<!---->`);
                      }
                      _push3(`</div><div class="font-semibold break-words whitespace-pre-wrap"${_scopeId2}>${ssrInterpolate(unref(replaceLegalEntities)(
                        s.counterPartyTitle || "\u041D\u0435\u0442 \u043A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442\u0430"
                      ))}</div><div class="italic underline"${_scopeId2}>`);
                      if (s.operationPositions && s.operationPositions.length) {
                        _push3(`<!--[-->`);
                        ssrRenderList(s.operationPositions, (pos, idx) => {
                          _push3(`<span class="mr-2"${_scopeId2}>${ssrInterpolate(pos.expenseCategory && pos.expenseCategory.name || "\u0411\u0435\u0437 \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u0438")}</span>`);
                        });
                        _push3(`<!--]-->`);
                      } else {
                        _push3(`<!--[-->${ssrInterpolate(s.expenseCategoryName || "\u0411\u0435\u0437 \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u0438")}<!--]-->`);
                      }
                      _push3(`</div><div class="text-slate-600 break-words whitespace-pre-wrap"${_scopeId2}>${(_c = highlightKeywords(s.payPurpose, currentKeywords.value)) != null ? _c : ""}</div></td><td class="p-2 whitespace-nowrap"${_scopeId2}><span class="${ssrRenderClass(
                        s.typeOfOperation === "Debit" ? "text-red-600" : "text-green-600"
                      )}"${_scopeId2}>${ssrInterpolate((s.typeOfOperation === "Debit" ? "-" : "+") + Math.abs(s.accountAmount).toLocaleString("ru-RU"))}</span></td></tr>`);
                    });
                    _push3(`<!--]--></tbody></table></div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  if (testResult.value) {
                    _push3(`<div class="p-3 border-t bg-slate-50 text-sm text-slate-600"${_scopeId2}> \u0412\u0441\u0435\u0433\u043E \u0441\u043E\u0432\u043F\u0430\u0434\u0435\u043D\u0438\u0439: ${ssrInterpolate(testResult.value.total)}</div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`</div></div></div>`);
                } else {
                  return [
                    createVNode(_component_UiDialogHeader, null, {
                      default: withCtx(() => [
                        createVNode(_component_UiDialogTitle),
                        createVNode(_component_UiDialogDescription)
                      ]),
                      _: 1
                    }),
                    createVNode("div", { class: "grid grid-cols-3 grow min-h-0 gap-6" }, [
                      createVNode("div", { class: "space-y-3 border rounded-md p-3 flex flex-col min-h-0" }, [
                        createVNode("div", { class: "flex justify-between items-center" }, [
                          createVNode("div", { class: "text-sm font-medium" }, "\u0421\u043F\u0438\u0441\u043E\u043A \u043F\u0440\u0430\u0432\u0438\u043B"),
                          createVNode(_component_UiButton, {
                            size: "sm",
                            variant: "secondary",
                            onClick: createNew
                          }, {
                            default: withCtx(() => [
                              createTextVNode("\u0421\u043E\u0437\u0434\u0430\u0442\u044C")
                            ]),
                            _: 1
                          })
                        ]),
                        createVNode("div", { class: "flex-1 min-h-0 overflow-auto border rounded" }, [
                          (openBlock(true), createBlock(Fragment, null, renderList(rulesToShow.value, (r) => {
                            return openBlock(), createBlock("div", {
                              key: r.id,
                              class: ["p-2 border-b cursor-pointer hover:bg-slate-50", { "bg-slate-100": selectedRuleId.value === r.id }],
                              onClick: ($event) => selectRule(r)
                            }, [
                              createVNode("div", { class: "flex items-center justify-between" }, [
                                createVNode("div", { class: "font-medium truncate max-w-[220px]" }, toDisplayString(r.name), 1),
                                createVNode("span", {
                                  class: [
                                    "text-[10px] px-2 py-0.5 rounded",
                                    r.enabled ? "bg-green-100 text-green-700" : "bg-slate-100 text-slate-600"
                                  ]
                                }, toDisplayString(r.enabled ? "on" : "off"), 3)
                              ]),
                              createVNode("div", { class: "text-xs text-slate-500 flex gap-2" }, [
                                createVNode("span", null, "#" + toDisplayString(r.id), 1),
                                createVNode("span", null, "\u041F\u0440\u0438\u043E\u0440\u0438\u0442\u0435\u0442: " + toDisplayString(r.priority), 1),
                                createVNode("span", null, toDisplayString(opTypeLabel(r.operationType)), 1)
                              ])
                            ], 10, ["onClick"]);
                          }), 128))
                        ])
                      ]),
                      createVNode("div", { class: "space-y-4 flex flex-col min-h-0" }, [
                        createVNode("div", { class: "flex-1 min-h-0 space-y-4" }, [
                          createVNode("div", { class: "flex items-center justify-between" }, [
                            createVNode("div", { class: "relative flex-1 mr-3" }, [
                              createVNode(_component_UiInput, {
                                modelValue: form.value.name,
                                "onUpdate:modelValue": ($event) => form.value.name = $event,
                                placeholder: "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u043F\u0440\u0430\u0432\u0438\u043B\u0430",
                                class: form.value.name ? "" : "outline-1 outline-rose-300"
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "class"]),
                              createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1" }, {
                                default: withCtx(() => [
                                  createTextVNode("\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435")
                                ]),
                                _: 1
                              })
                            ]),
                            createVNode("div", { class: "flex items-center gap-2" }, [
                              createVNode(_component_UiLabel, null, {
                                default: withCtx(() => [
                                  createTextVNode("\u0412\u043A\u043B\u044E\u0447\u0435\u043D\u043E")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_UiSwitch, {
                                checked: form.value.enabled,
                                "onUpdate:checked": ($event) => form.value.enabled = $event
                              }, null, 8, ["checked", "onUpdate:checked"])
                            ])
                          ]),
                          createVNode("div", { class: "grid grid-cols-2 gap-3" }, [
                            createVNode("div", { class: "relative" }, [
                              createVNode(_component_UiInput, {
                                modelValue: form.value.priority,
                                "onUpdate:modelValue": ($event) => form.value.priority = $event,
                                modelModifiers: { number: true },
                                type: "number",
                                placeholder: "\u041F\u0440\u0438\u043E\u0440\u0438\u0442\u0435\u0442"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                              createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1" }, {
                                default: withCtx(() => [
                                  createTextVNode("\u041F\u0440\u0438\u043E\u0440\u0438\u0442\u0435\u0442")
                                ]),
                                _: 1
                              })
                            ]),
                            createVNode("div", { class: "relative" }, [
                              createVNode(_component_UiSelect, {
                                modelValue: form.value.operationType,
                                "onUpdate:modelValue": ($event) => form.value.operationType = $event
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_UiSelectTrigger, null, {
                                    default: withCtx(() => [
                                      createVNode(_component_UiSelectValue, { placeholder: "\u0422\u0438\u043F \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u0438" })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_UiSelectContent, null, {
                                    default: withCtx(() => [
                                      createVNode(_component_UiSelectItem, { value: "Credit" }, {
                                        default: withCtx(() => [
                                          createTextVNode("\u041F\u043E\u0441\u0442\u0443\u043F\u043B\u0435\u043D\u0438\u0435")
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_UiSelectItem, { value: "Debit" }, {
                                        default: withCtx(() => [
                                          createTextVNode("\u0421\u043F\u0438\u0441\u0430\u043D\u0438\u0435")
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }, 8, ["modelValue", "onUpdate:modelValue"]),
                              createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1" }, {
                                default: withCtx(() => [
                                  createTextVNode("\u0422\u0438\u043F \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u0438")
                                ]),
                                _: 1
                              })
                            ])
                          ]),
                          createVNode("div", { class: "relative" }, [
                            createVNode(_component_UiSelect, {
                              modelValue: expenseCategoryIdStr.value,
                              "onUpdate:modelValue": ($event) => expenseCategoryIdStr.value = $event
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_UiSelectTrigger, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_UiSelectValue, { placeholder: "\u0421\u0442\u0430\u0442\u044C\u044F \u0440\u0430\u0441\u0445\u043E\u0434\u043E\u0432/\u0434\u043E\u0445\u043E\u0434\u043E\u0432" })
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_UiSelectContent, null, {
                                  default: withCtx(() => [
                                    (openBlock(true), createBlock(Fragment, null, renderList(expenseCategories.value, (c) => {
                                      return openBlock(), createBlock(_component_UiSelectItem, {
                                        key: c.id,
                                        value: String(c.id)
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(c.name), 1)
                                        ]),
                                        _: 2
                                      }, 1032, ["value"]);
                                    }), 128))
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }, 8, ["modelValue", "onUpdate:modelValue"]),
                            createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1" }, {
                              default: withCtx(() => [
                                createTextVNode("\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F")
                              ]),
                              _: 1
                            })
                          ]),
                          createVNode("div", { class: "grid grid-cols-2 gap-3" }, [
                            createVNode("div", { class: "relative col-span-2" }, [
                              createVNode(_component_UiLabel, { class: "text-sm font-medium" }, {
                                default: withCtx(() => [
                                  createTextVNode("\u041A\u043B\u044E\u0447\u0435\u0432\u044B\u0435 \u0441\u043B\u043E\u0432\u0430")
                                ]),
                                _: 1
                              }),
                              createVNode("div", { class: "flex gap-2 mt-1" }, [
                                createVNode(_component_UiInput, {
                                  modelValue: keywordsInput.value,
                                  "onUpdate:modelValue": ($event) => keywordsInput.value = $event,
                                  placeholder: "\u0441\u043B\u043E\u0432\u043E, \u0441\u043B\u043E\u0432\u043E2, ...",
                                  onKeydown: withKeys(withModifiers(pushKeywords, ["prevent"]), ["enter"])
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "onKeydown"]),
                                createVNode(_component_UiButton, {
                                  variant: "secondary",
                                  onClick: pushKeywords
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C")
                                  ]),
                                  _: 1
                                })
                              ]),
                              createVNode("div", { class: "flex flex-wrap gap-2 mt-2" }, [
                                (openBlock(true), createBlock(Fragment, null, renderList(form.value.keywords, (kw) => {
                                  return openBlock(), createBlock("span", {
                                    key: kw,
                                    class: "px-2 py-1 bg-slate-100 rounded text-xs flex items-center gap-2"
                                  }, [
                                    createTextVNode(toDisplayString(kw) + " ", 1),
                                    createVNode("button", {
                                      class: "text-red-500",
                                      onClick: ($event) => removeTag("keywords", kw)
                                    }, " x ", 8, ["onClick"])
                                  ]);
                                }), 128))
                              ])
                            ])
                          ]),
                          createVNode("div", { class: "relative" }, [
                            createVNode(_sfc_main$6, {
                              items: formattedAccounts.value,
                              "selected-ids": form.value.accountIds || [],
                              label: "\u0421\u0447\u0435\u0442\u0430",
                              placeholder: "\u041F\u043E\u0438\u0441\u043A \u0441\u0447\u0435\u0442\u043E\u0432...",
                              "has-more": false,
                              "is-loading": false,
                              "onUpdate:selectedIds": (ids) => form.value.accountIds = ids,
                              onClear: ($event) => form.value.accountIds = []
                            }, null, 8, ["items", "selected-ids", "onUpdate:selectedIds", "onClear"]),
                            createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1" }, {
                              default: withCtx(() => [
                                createTextVNode("\u0421\u0447\u0435\u0442\u0430")
                              ]),
                              _: 1
                            })
                          ]),
                          createVNode("div", { class: "relative" }, [
                            createVNode(_sfc_main$6, {
                              items: formattedCounterParties.value,
                              "selected-ids": form.value.counterPartyIds || [],
                              label: "\u041A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442\u044B",
                              placeholder: "\u041F\u043E\u0438\u0441\u043A \u043A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442\u043E\u0432...",
                              "has-more": unref(counterPartiesFiltersPagination).hasNext,
                              "is-loading": unref(isLoadingCounterParties),
                              "on-search": handleCounterPartySearch,
                              "on-load-more": handleCounterPartyLoadMore,
                              "onUpdate:selectedIds": (ids) => form.value.counterPartyIds = ids,
                              onClear: ($event) => form.value.counterPartyIds = []
                            }, null, 8, ["items", "selected-ids", "has-more", "is-loading", "onUpdate:selectedIds", "onClear"]),
                            createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1" }, {
                              default: withCtx(() => [
                                createTextVNode("\u041A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442\u044B")
                              ]),
                              _: 1
                            })
                          ]),
                          createVNode("div", { class: "relative" }, [
                            createVNode(_component_UiTextarea, {
                              modelValue: form.value.description,
                              "onUpdate:modelValue": ($event) => form.value.description = $event,
                              placeholder: "\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435 (\u043D\u0435\u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E)"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                            form.value.description ? (openBlock(), createBlock(_component_UiLabel, {
                              key: 0,
                              class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435")
                              ]),
                              _: 1
                            })) : createCommentVNode("", true)
                          ])
                        ]),
                        createVNode("div", { class: "flex justify-end gap-2" }, [
                          createVNode(_component_UiButton, {
                            variant: "outline",
                            onClick: handleClose
                          }, {
                            default: withCtx(() => [
                              createTextVNode("\u041E\u0442\u043C\u0435\u043D\u0430")
                            ]),
                            _: 1
                          }),
                          isEditMode.value ? (openBlock(), createBlock(_component_UiButton, {
                            key: 0,
                            variant: "destructive",
                            onClick: deleteRule
                          }, {
                            default: withCtx(() => [
                              createTextVNode("\u0423\u0434\u0430\u043B\u0438\u0442\u044C")
                            ]),
                            _: 1
                          })) : createCommentVNode("", true),
                          createVNode(_component_UiButton, {
                            disabled: isSaving.value || !isFormValid.value,
                            onClick: saveRule
                          }, {
                            default: withCtx(() => [
                              isSaving.value ? (openBlock(), createBlock("span", { key: 0 }, "\u0421\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0438\u0435...")) : (openBlock(), createBlock("span", { key: 1 }, toDisplayString(isEditMode.value ? "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C" : "\u0421\u043E\u0437\u0434\u0430\u0442\u044C"), 1))
                            ]),
                            _: 1
                          }, 8, ["disabled"])
                        ])
                      ]),
                      createVNode("div", { class: "space-y-4 flex flex-col min-h-0" }, [
                        createVNode("div", { class: "border rounded-md p-3 space-y-3 flex-1 min-h-0 overflow-hidden flex flex-col" }, [
                          createVNode("div", { class: "flex gap-2 justify-between items-center" }, [
                            createVNode("div", { class: "text-sm font-medium" }, "\u0421\u043E\u0432\u043F\u0430\u0434\u0435\u043D\u0438\u044F"),
                            createVNode(_component_UiButton, {
                              size: "sm",
                              variant: "secondary",
                              disabled: isTesting.value || !isTestValid.value,
                              onClick: runTest
                            }, {
                              default: withCtx(() => [
                                isTesting.value ? (openBlock(), createBlock("span", { key: 0 }, "\u0422\u0435\u0441\u0442\u0438\u0440\u0443\u0435\u043C...")) : (openBlock(), createBlock("span", { key: 1 }, "\u0422\u0435\u0441\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C"))
                              ]),
                              _: 1
                            }, 8, ["disabled"])
                          ]),
                          testResult.value ? (openBlock(), createBlock("div", {
                            key: 0,
                            class: "flex-1 min-h-0 h-full overflow-auto border rounded"
                          }, [
                            createVNode("table", { class: "w-full text-sm table-fixed" }, [
                              createVNode("thead", { class: "sticky top-0 z-10 bg-slate-50" }, [
                                createVNode("tr", null, [
                                  createVNode("th", { class: "text-left p-2 w-[70%]" }, "\u041D\u0430\u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435"),
                                  createVNode("th", { class: "text-left p-2 w-[30%]" }, "\u0421\u0443\u043C\u043C\u0430")
                                ])
                              ]),
                              createVNode("tbody", null, [
                                (openBlock(true), createBlock(Fragment, null, renderList(testResult.value.items, (s) => {
                                  var _a, _b;
                                  return openBlock(), createBlock("tr", {
                                    key: s.id,
                                    class: "border-t"
                                  }, [
                                    createVNode("td", { class: "p-2" }, [
                                      createVNode("div", { class: "text-xs text-slate-500 mb-1" }, [
                                        createTextVNode(toDisplayString(((_a = s.account) == null ? void 0 : _a.name) || "\u0421\u0447\u0435\u0442 \u043D\u0435 \u0443\u043A\u0430\u0437\u0430\u043D") + " ", 1),
                                        ((_b = s.account) == null ? void 0 : _b.accountNumber) ? (openBlock(), createBlock("span", {
                                          key: 0,
                                          class: "text-slate-400"
                                        }, " (" + toDisplayString(s.account.accountNumber.slice(-4)) + ") ", 1)) : createCommentVNode("", true)
                                      ]),
                                      createVNode("div", { class: "font-semibold break-words whitespace-pre-wrap" }, toDisplayString(unref(replaceLegalEntities)(
                                        s.counterPartyTitle || "\u041D\u0435\u0442 \u043A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442\u0430"
                                      )), 1),
                                      createVNode("div", { class: "italic underline" }, [
                                        s.operationPositions && s.operationPositions.length ? (openBlock(true), createBlock(Fragment, { key: 0 }, renderList(s.operationPositions, (pos, idx) => {
                                          return openBlock(), createBlock("span", {
                                            key: idx,
                                            class: "mr-2"
                                          }, toDisplayString(pos.expenseCategory && pos.expenseCategory.name || "\u0411\u0435\u0437 \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u0438"), 1);
                                        }), 128)) : (openBlock(), createBlock(Fragment, { key: 1 }, [
                                          createTextVNode(toDisplayString(s.expenseCategoryName || "\u0411\u0435\u0437 \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u0438"), 1)
                                        ], 64))
                                      ]),
                                      createVNode("div", {
                                        class: "text-slate-600 break-words whitespace-pre-wrap",
                                        innerHTML: highlightKeywords(s.payPurpose, currentKeywords.value)
                                      }, null, 8, ["innerHTML"])
                                    ]),
                                    createVNode("td", { class: "p-2 whitespace-nowrap" }, [
                                      createVNode("span", {
                                        class: s.typeOfOperation === "Debit" ? "text-red-600" : "text-green-600"
                                      }, toDisplayString((s.typeOfOperation === "Debit" ? "-" : "+") + Math.abs(s.accountAmount).toLocaleString("ru-RU")), 3)
                                    ])
                                  ]);
                                }), 128))
                              ])
                            ])
                          ])) : createCommentVNode("", true),
                          testResult.value ? (openBlock(), createBlock("div", {
                            key: 1,
                            class: "p-3 border-t bg-slate-50 text-sm text-slate-600"
                          }, " \u0412\u0441\u0435\u0433\u043E \u0441\u043E\u0432\u043F\u0430\u0434\u0435\u043D\u0438\u0439: " + toDisplayString(testResult.value.total), 1)) : createCommentVNode("", true)
                        ])
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UiDialogContent, { class: "max-w-[1200px] h-[80vh] flex flex-col" }, {
                default: withCtx(() => [
                  createVNode(_component_UiDialogHeader, null, {
                    default: withCtx(() => [
                      createVNode(_component_UiDialogTitle),
                      createVNode(_component_UiDialogDescription)
                    ]),
                    _: 1
                  }),
                  createVNode("div", { class: "grid grid-cols-3 grow min-h-0 gap-6" }, [
                    createVNode("div", { class: "space-y-3 border rounded-md p-3 flex flex-col min-h-0" }, [
                      createVNode("div", { class: "flex justify-between items-center" }, [
                        createVNode("div", { class: "text-sm font-medium" }, "\u0421\u043F\u0438\u0441\u043E\u043A \u043F\u0440\u0430\u0432\u0438\u043B"),
                        createVNode(_component_UiButton, {
                          size: "sm",
                          variant: "secondary",
                          onClick: createNew
                        }, {
                          default: withCtx(() => [
                            createTextVNode("\u0421\u043E\u0437\u0434\u0430\u0442\u044C")
                          ]),
                          _: 1
                        })
                      ]),
                      createVNode("div", { class: "flex-1 min-h-0 overflow-auto border rounded" }, [
                        (openBlock(true), createBlock(Fragment, null, renderList(rulesToShow.value, (r) => {
                          return openBlock(), createBlock("div", {
                            key: r.id,
                            class: ["p-2 border-b cursor-pointer hover:bg-slate-50", { "bg-slate-100": selectedRuleId.value === r.id }],
                            onClick: ($event) => selectRule(r)
                          }, [
                            createVNode("div", { class: "flex items-center justify-between" }, [
                              createVNode("div", { class: "font-medium truncate max-w-[220px]" }, toDisplayString(r.name), 1),
                              createVNode("span", {
                                class: [
                                  "text-[10px] px-2 py-0.5 rounded",
                                  r.enabled ? "bg-green-100 text-green-700" : "bg-slate-100 text-slate-600"
                                ]
                              }, toDisplayString(r.enabled ? "on" : "off"), 3)
                            ]),
                            createVNode("div", { class: "text-xs text-slate-500 flex gap-2" }, [
                              createVNode("span", null, "#" + toDisplayString(r.id), 1),
                              createVNode("span", null, "\u041F\u0440\u0438\u043E\u0440\u0438\u0442\u0435\u0442: " + toDisplayString(r.priority), 1),
                              createVNode("span", null, toDisplayString(opTypeLabel(r.operationType)), 1)
                            ])
                          ], 10, ["onClick"]);
                        }), 128))
                      ])
                    ]),
                    createVNode("div", { class: "space-y-4 flex flex-col min-h-0" }, [
                      createVNode("div", { class: "flex-1 min-h-0 space-y-4" }, [
                        createVNode("div", { class: "flex items-center justify-between" }, [
                          createVNode("div", { class: "relative flex-1 mr-3" }, [
                            createVNode(_component_UiInput, {
                              modelValue: form.value.name,
                              "onUpdate:modelValue": ($event) => form.value.name = $event,
                              placeholder: "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u043F\u0440\u0430\u0432\u0438\u043B\u0430",
                              class: form.value.name ? "" : "outline-1 outline-rose-300"
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "class"]),
                            createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1" }, {
                              default: withCtx(() => [
                                createTextVNode("\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435")
                              ]),
                              _: 1
                            })
                          ]),
                          createVNode("div", { class: "flex items-center gap-2" }, [
                            createVNode(_component_UiLabel, null, {
                              default: withCtx(() => [
                                createTextVNode("\u0412\u043A\u043B\u044E\u0447\u0435\u043D\u043E")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_UiSwitch, {
                              checked: form.value.enabled,
                              "onUpdate:checked": ($event) => form.value.enabled = $event
                            }, null, 8, ["checked", "onUpdate:checked"])
                          ])
                        ]),
                        createVNode("div", { class: "grid grid-cols-2 gap-3" }, [
                          createVNode("div", { class: "relative" }, [
                            createVNode(_component_UiInput, {
                              modelValue: form.value.priority,
                              "onUpdate:modelValue": ($event) => form.value.priority = $event,
                              modelModifiers: { number: true },
                              type: "number",
                              placeholder: "\u041F\u0440\u0438\u043E\u0440\u0438\u0442\u0435\u0442"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                            createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1" }, {
                              default: withCtx(() => [
                                createTextVNode("\u041F\u0440\u0438\u043E\u0440\u0438\u0442\u0435\u0442")
                              ]),
                              _: 1
                            })
                          ]),
                          createVNode("div", { class: "relative" }, [
                            createVNode(_component_UiSelect, {
                              modelValue: form.value.operationType,
                              "onUpdate:modelValue": ($event) => form.value.operationType = $event
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_UiSelectTrigger, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_UiSelectValue, { placeholder: "\u0422\u0438\u043F \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u0438" })
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_UiSelectContent, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_UiSelectItem, { value: "Credit" }, {
                                      default: withCtx(() => [
                                        createTextVNode("\u041F\u043E\u0441\u0442\u0443\u043F\u043B\u0435\u043D\u0438\u0435")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_UiSelectItem, { value: "Debit" }, {
                                      default: withCtx(() => [
                                        createTextVNode("\u0421\u043F\u0438\u0441\u0430\u043D\u0438\u0435")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }, 8, ["modelValue", "onUpdate:modelValue"]),
                            createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1" }, {
                              default: withCtx(() => [
                                createTextVNode("\u0422\u0438\u043F \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u0438")
                              ]),
                              _: 1
                            })
                          ])
                        ]),
                        createVNode("div", { class: "relative" }, [
                          createVNode(_component_UiSelect, {
                            modelValue: expenseCategoryIdStr.value,
                            "onUpdate:modelValue": ($event) => expenseCategoryIdStr.value = $event
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_UiSelectTrigger, null, {
                                default: withCtx(() => [
                                  createVNode(_component_UiSelectValue, { placeholder: "\u0421\u0442\u0430\u0442\u044C\u044F \u0440\u0430\u0441\u0445\u043E\u0434\u043E\u0432/\u0434\u043E\u0445\u043E\u0434\u043E\u0432" })
                                ]),
                                _: 1
                              }),
                              createVNode(_component_UiSelectContent, null, {
                                default: withCtx(() => [
                                  (openBlock(true), createBlock(Fragment, null, renderList(expenseCategories.value, (c) => {
                                    return openBlock(), createBlock(_component_UiSelectItem, {
                                      key: c.id,
                                      value: String(c.id)
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(c.name), 1)
                                      ]),
                                      _: 2
                                    }, 1032, ["value"]);
                                  }), 128))
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }, 8, ["modelValue", "onUpdate:modelValue"]),
                          createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1" }, {
                            default: withCtx(() => [
                              createTextVNode("\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F")
                            ]),
                            _: 1
                          })
                        ]),
                        createVNode("div", { class: "grid grid-cols-2 gap-3" }, [
                          createVNode("div", { class: "relative col-span-2" }, [
                            createVNode(_component_UiLabel, { class: "text-sm font-medium" }, {
                              default: withCtx(() => [
                                createTextVNode("\u041A\u043B\u044E\u0447\u0435\u0432\u044B\u0435 \u0441\u043B\u043E\u0432\u0430")
                              ]),
                              _: 1
                            }),
                            createVNode("div", { class: "flex gap-2 mt-1" }, [
                              createVNode(_component_UiInput, {
                                modelValue: keywordsInput.value,
                                "onUpdate:modelValue": ($event) => keywordsInput.value = $event,
                                placeholder: "\u0441\u043B\u043E\u0432\u043E, \u0441\u043B\u043E\u0432\u043E2, ...",
                                onKeydown: withKeys(withModifiers(pushKeywords, ["prevent"]), ["enter"])
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "onKeydown"]),
                              createVNode(_component_UiButton, {
                                variant: "secondary",
                                onClick: pushKeywords
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C")
                                ]),
                                _: 1
                              })
                            ]),
                            createVNode("div", { class: "flex flex-wrap gap-2 mt-2" }, [
                              (openBlock(true), createBlock(Fragment, null, renderList(form.value.keywords, (kw) => {
                                return openBlock(), createBlock("span", {
                                  key: kw,
                                  class: "px-2 py-1 bg-slate-100 rounded text-xs flex items-center gap-2"
                                }, [
                                  createTextVNode(toDisplayString(kw) + " ", 1),
                                  createVNode("button", {
                                    class: "text-red-500",
                                    onClick: ($event) => removeTag("keywords", kw)
                                  }, " x ", 8, ["onClick"])
                                ]);
                              }), 128))
                            ])
                          ])
                        ]),
                        createVNode("div", { class: "relative" }, [
                          createVNode(_sfc_main$6, {
                            items: formattedAccounts.value,
                            "selected-ids": form.value.accountIds || [],
                            label: "\u0421\u0447\u0435\u0442\u0430",
                            placeholder: "\u041F\u043E\u0438\u0441\u043A \u0441\u0447\u0435\u0442\u043E\u0432...",
                            "has-more": false,
                            "is-loading": false,
                            "onUpdate:selectedIds": (ids) => form.value.accountIds = ids,
                            onClear: ($event) => form.value.accountIds = []
                          }, null, 8, ["items", "selected-ids", "onUpdate:selectedIds", "onClear"]),
                          createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1" }, {
                            default: withCtx(() => [
                              createTextVNode("\u0421\u0447\u0435\u0442\u0430")
                            ]),
                            _: 1
                          })
                        ]),
                        createVNode("div", { class: "relative" }, [
                          createVNode(_sfc_main$6, {
                            items: formattedCounterParties.value,
                            "selected-ids": form.value.counterPartyIds || [],
                            label: "\u041A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442\u044B",
                            placeholder: "\u041F\u043E\u0438\u0441\u043A \u043A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442\u043E\u0432...",
                            "has-more": unref(counterPartiesFiltersPagination).hasNext,
                            "is-loading": unref(isLoadingCounterParties),
                            "on-search": handleCounterPartySearch,
                            "on-load-more": handleCounterPartyLoadMore,
                            "onUpdate:selectedIds": (ids) => form.value.counterPartyIds = ids,
                            onClear: ($event) => form.value.counterPartyIds = []
                          }, null, 8, ["items", "selected-ids", "has-more", "is-loading", "onUpdate:selectedIds", "onClear"]),
                          createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1" }, {
                            default: withCtx(() => [
                              createTextVNode("\u041A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442\u044B")
                            ]),
                            _: 1
                          })
                        ]),
                        createVNode("div", { class: "relative" }, [
                          createVNode(_component_UiTextarea, {
                            modelValue: form.value.description,
                            "onUpdate:modelValue": ($event) => form.value.description = $event,
                            placeholder: "\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435 (\u043D\u0435\u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E)"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                          form.value.description ? (openBlock(), createBlock(_component_UiLabel, {
                            key: 0,
                            class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435")
                            ]),
                            _: 1
                          })) : createCommentVNode("", true)
                        ])
                      ]),
                      createVNode("div", { class: "flex justify-end gap-2" }, [
                        createVNode(_component_UiButton, {
                          variant: "outline",
                          onClick: handleClose
                        }, {
                          default: withCtx(() => [
                            createTextVNode("\u041E\u0442\u043C\u0435\u043D\u0430")
                          ]),
                          _: 1
                        }),
                        isEditMode.value ? (openBlock(), createBlock(_component_UiButton, {
                          key: 0,
                          variant: "destructive",
                          onClick: deleteRule
                        }, {
                          default: withCtx(() => [
                            createTextVNode("\u0423\u0434\u0430\u043B\u0438\u0442\u044C")
                          ]),
                          _: 1
                        })) : createCommentVNode("", true),
                        createVNode(_component_UiButton, {
                          disabled: isSaving.value || !isFormValid.value,
                          onClick: saveRule
                        }, {
                          default: withCtx(() => [
                            isSaving.value ? (openBlock(), createBlock("span", { key: 0 }, "\u0421\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0438\u0435...")) : (openBlock(), createBlock("span", { key: 1 }, toDisplayString(isEditMode.value ? "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C" : "\u0421\u043E\u0437\u0434\u0430\u0442\u044C"), 1))
                          ]),
                          _: 1
                        }, 8, ["disabled"])
                      ])
                    ]),
                    createVNode("div", { class: "space-y-4 flex flex-col min-h-0" }, [
                      createVNode("div", { class: "border rounded-md p-3 space-y-3 flex-1 min-h-0 overflow-hidden flex flex-col" }, [
                        createVNode("div", { class: "flex gap-2 justify-between items-center" }, [
                          createVNode("div", { class: "text-sm font-medium" }, "\u0421\u043E\u0432\u043F\u0430\u0434\u0435\u043D\u0438\u044F"),
                          createVNode(_component_UiButton, {
                            size: "sm",
                            variant: "secondary",
                            disabled: isTesting.value || !isTestValid.value,
                            onClick: runTest
                          }, {
                            default: withCtx(() => [
                              isTesting.value ? (openBlock(), createBlock("span", { key: 0 }, "\u0422\u0435\u0441\u0442\u0438\u0440\u0443\u0435\u043C...")) : (openBlock(), createBlock("span", { key: 1 }, "\u0422\u0435\u0441\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C"))
                            ]),
                            _: 1
                          }, 8, ["disabled"])
                        ]),
                        testResult.value ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: "flex-1 min-h-0 h-full overflow-auto border rounded"
                        }, [
                          createVNode("table", { class: "w-full text-sm table-fixed" }, [
                            createVNode("thead", { class: "sticky top-0 z-10 bg-slate-50" }, [
                              createVNode("tr", null, [
                                createVNode("th", { class: "text-left p-2 w-[70%]" }, "\u041D\u0430\u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435"),
                                createVNode("th", { class: "text-left p-2 w-[30%]" }, "\u0421\u0443\u043C\u043C\u0430")
                              ])
                            ]),
                            createVNode("tbody", null, [
                              (openBlock(true), createBlock(Fragment, null, renderList(testResult.value.items, (s) => {
                                var _a, _b;
                                return openBlock(), createBlock("tr", {
                                  key: s.id,
                                  class: "border-t"
                                }, [
                                  createVNode("td", { class: "p-2" }, [
                                    createVNode("div", { class: "text-xs text-slate-500 mb-1" }, [
                                      createTextVNode(toDisplayString(((_a = s.account) == null ? void 0 : _a.name) || "\u0421\u0447\u0435\u0442 \u043D\u0435 \u0443\u043A\u0430\u0437\u0430\u043D") + " ", 1),
                                      ((_b = s.account) == null ? void 0 : _b.accountNumber) ? (openBlock(), createBlock("span", {
                                        key: 0,
                                        class: "text-slate-400"
                                      }, " (" + toDisplayString(s.account.accountNumber.slice(-4)) + ") ", 1)) : createCommentVNode("", true)
                                    ]),
                                    createVNode("div", { class: "font-semibold break-words whitespace-pre-wrap" }, toDisplayString(unref(replaceLegalEntities)(
                                      s.counterPartyTitle || "\u041D\u0435\u0442 \u043A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442\u0430"
                                    )), 1),
                                    createVNode("div", { class: "italic underline" }, [
                                      s.operationPositions && s.operationPositions.length ? (openBlock(true), createBlock(Fragment, { key: 0 }, renderList(s.operationPositions, (pos, idx) => {
                                        return openBlock(), createBlock("span", {
                                          key: idx,
                                          class: "mr-2"
                                        }, toDisplayString(pos.expenseCategory && pos.expenseCategory.name || "\u0411\u0435\u0437 \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u0438"), 1);
                                      }), 128)) : (openBlock(), createBlock(Fragment, { key: 1 }, [
                                        createTextVNode(toDisplayString(s.expenseCategoryName || "\u0411\u0435\u0437 \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u0438"), 1)
                                      ], 64))
                                    ]),
                                    createVNode("div", {
                                      class: "text-slate-600 break-words whitespace-pre-wrap",
                                      innerHTML: highlightKeywords(s.payPurpose, currentKeywords.value)
                                    }, null, 8, ["innerHTML"])
                                  ]),
                                  createVNode("td", { class: "p-2 whitespace-nowrap" }, [
                                    createVNode("span", {
                                      class: s.typeOfOperation === "Debit" ? "text-red-600" : "text-green-600"
                                    }, toDisplayString((s.typeOfOperation === "Debit" ? "-" : "+") + Math.abs(s.accountAmount).toLocaleString("ru-RU")), 3)
                                  ])
                                ]);
                              }), 128))
                            ])
                          ])
                        ])) : createCommentVNode("", true),
                        testResult.value ? (openBlock(), createBlock("div", {
                          key: 1,
                          class: "p-3 border-t bg-slate-50 text-sm text-slate-600"
                        }, " \u0412\u0441\u0435\u0433\u043E \u0441\u043E\u0432\u043F\u0430\u0434\u0435\u043D\u0438\u0439: " + toDisplayString(testResult.value.total), 1)) : createCommentVNode("", true)
                      ])
                    ])
                  ])
                ]),
                _: 2
              }, 1024)
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/my/planfact/Rules/RuleModal.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
function formatDateForDisplay(dateString) {
  const date = new Date(dateString);
  const timezoneOffset = date.getTimezoneOffset();
  return new Date(date.getTime() + timezoneOffset * 6e4);
}
function formatDateForSave(localDate) {
  const timezoneOffset = localDate.getTimezoneOffset();
  const utcDate = new Date(localDate.getTime() - timezoneOffset * 6e4);
  return utcDate.toISOString();
}
function formatDateForTable(dateString) {
  const localDate = formatDateForDisplay(dateString);
  const day = localDate.getDate().toString().padStart(2, "0");
  const month = (localDate.getMonth() + 1).toString().padStart(2, "0");
  const year = localDate.getFullYear();
  const hours = localDate.getHours().toString().padStart(2, "0");
  const minutes = localDate.getMinutes().toString().padStart(2, "0");
  return {
    date: `${day}.${month}.${year}`,
    time: `${hours}:${minutes}`
  };
}
function formatDateForInput(dateString) {
  const localDate = formatDateForDisplay(dateString);
  const year = localDate.getFullYear();
  const month = String(localDate.getMonth() + 1).padStart(2, "0");
  const day = String(localDate.getDate()).padStart(2, "0");
  const hours = String(localDate.getHours()).padStart(2, "0");
  const minutes = String(localDate.getMinutes()).padStart(2, "0");
  return `${year}-${month}-${day}T${hours}:${minutes}`;
}
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "CreateRuleModal",
  __ssrInlineRender: true,
  props: {
    isOpen: { type: Boolean },
    counterParty: {},
    operationType: {}
  },
  emits: ["update:isOpen", "rule-created"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const { getExpenseCategoriesMini, createCounterPartyRule } = usePlanfact();
    const incomeExpenseCategoryId = ref(void 0);
    const outcomeExpenseCategoryId = ref(void 0);
    const incomeExpenseCategories = ref([]);
    const outcomeExpenseCategories = ref([]);
    const isLoading = ref(false);
    const shouldShowIncomeCategories = computed(() => {
      return !props.operationType || props.operationType === "Credit";
    });
    const shouldShowOutcomeCategories = computed(() => {
      return !props.operationType || props.operationType === "Debit";
    });
    const isFormValid = computed(() => {
      if (shouldShowIncomeCategories.value && shouldShowOutcomeCategories.value) {
        return incomeExpenseCategoryId.value !== void 0 || outcomeExpenseCategoryId.value !== void 0;
      } else if (shouldShowIncomeCategories.value) {
        return incomeExpenseCategoryId.value !== void 0;
      } else if (shouldShowOutcomeCategories.value) {
        return outcomeExpenseCategoryId.value !== void 0;
      }
      return false;
    });
    const handleSave = async () => {
      if (!props.counterParty || !isFormValid.value) {
        return;
      }
      isLoading.value = true;
      try {
        const requestBody = {
          counterPartyAccount: props.counterParty.counterPartyAccount
        };
        if (incomeExpenseCategoryId.value !== void 0) {
          requestBody.incomeExpenseCategoryId = Number(
            incomeExpenseCategoryId.value
          );
        }
        if (outcomeExpenseCategoryId.value !== void 0) {
          requestBody.outcomeExpenseCategoryId = Number(
            outcomeExpenseCategoryId.value
          );
        }
        await createCounterPartyRule(requestBody);
        emit("rule-created");
        emit("update:isOpen", false);
        incomeExpenseCategoryId.value = void 0;
        outcomeExpenseCategoryId.value = void 0;
      } catch (error) {
        console.error(error);
      } finally {
        isLoading.value = false;
      }
    };
    const fetchExpenseCategories = async (operationType) => {
      try {
        if (!operationType) {
          const [incomeData, outcomeData] = await Promise.all([
            getExpenseCategoriesMini("Credit"),
            getExpenseCategoriesMini("Debit")
          ]);
          incomeExpenseCategories.value = incomeData;
          outcomeExpenseCategories.value = outcomeData;
        } else if (operationType === "Credit") {
          const incomeData = await getExpenseCategoriesMini("Credit");
          incomeExpenseCategories.value = incomeData;
        } else if (operationType === "Debit") {
          const outcomeData = await getExpenseCategoriesMini("Debit");
          outcomeExpenseCategories.value = outcomeData;
        }
      } catch (error) {
        console.error(error);
      }
    };
    const handleCancel = () => {
      emit("update:isOpen", false);
      incomeExpenseCategoryId.value = void 0;
      outcomeExpenseCategoryId.value = void 0;
    };
    const incomeCategories = computed(() => incomeExpenseCategories.value);
    const outcomeCategories = computed(() => outcomeExpenseCategories.value);
    watch(
      () => props.isOpen,
      async (isOpen) => {
        if (isOpen) {
          await fetchExpenseCategories(props.operationType);
        }
      }
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiDialog = _sfc_main$4$2;
      const _component_UiDialogContent = _sfc_main$q;
      const _component_UiDialogHeader = _sfc_main$2$3;
      const _component_UiDialogTitle = _sfc_main$1$3;
      const _component_UiDialogDescription = _sfc_main$r;
      const _component_UiLabel = _sfc_main$s;
      const _component_UiSelect = _sfc_main$6$1;
      const _component_UiSelectTrigger = _sfc_main$4$1;
      const _component_UiSelectValue = _sfc_main$5$1;
      const _component_UiSelectContent = _sfc_main$3$1;
      const _component_UiSelectItem = _sfc_main$2$1;
      const _component_UiButton = _sfc_main$h;
      _push(ssrRenderComponent(_component_UiDialog, mergeProps({
        open: _ctx.isOpen,
        "onUpdate:open": ($event) => emit("update:isOpen", $event)
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UiDialogContent, { class: "max-w-[600px]" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UiDialogHeader, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UiDialogTitle, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`\u041F\u0440\u0438\u0441\u0432\u043E\u0438\u0442\u044C \u0441\u0442\u0430\u0442\u044C\u044E \u043A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442\u0443`);
                            } else {
                              return [
                                createTextVNode("\u041F\u0440\u0438\u0441\u0432\u043E\u0438\u0442\u044C \u0441\u0442\u0430\u0442\u044C\u044E \u043A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442\u0443")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_UiDialogDescription, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            var _a, _b;
                            if (_push5) {
                              _push5(` \u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u0438 \u0434\u043B\u044F \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u043E\u0433\u043E \u043D\u0430\u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044F \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u0439 \u043A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442\u0430 &quot;${ssrInterpolate((_a = _ctx.counterParty) == null ? void 0 : _a.counterPartyTitle)}&quot; `);
                            } else {
                              return [
                                createTextVNode(' \u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u0438 \u0434\u043B\u044F \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u043E\u0433\u043E \u043D\u0430\u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044F \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u0439 \u043A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442\u0430 "' + toDisplayString((_b = _ctx.counterParty) == null ? void 0 : _b.counterPartyTitle) + '" ', 1)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_UiDialogTitle, null, {
                            default: withCtx(() => [
                              createTextVNode("\u041F\u0440\u0438\u0441\u0432\u043E\u0438\u0442\u044C \u0441\u0442\u0430\u0442\u044C\u044E \u043A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442\u0443")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UiDialogDescription, null, {
                            default: withCtx(() => {
                              var _a;
                              return [
                                createTextVNode(' \u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u0438 \u0434\u043B\u044F \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u043E\u0433\u043E \u043D\u0430\u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044F \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u0439 \u043A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442\u0430 "' + toDisplayString((_a = _ctx.counterParty) == null ? void 0 : _a.counterPartyTitle) + '" ', 1)
                              ];
                            }),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<div class="space-y-6"${_scopeId2}>`);
                  if (shouldShowIncomeCategories.value) {
                    _push3(`<div class="space-y-2"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_UiLabel, { class: "text-sm font-medium" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F \u0434\u043B\u044F \u043F\u043E\u0441\u0442\u0443\u043F\u043B\u0435\u043D\u0438\u0439 (Credit)`);
                        } else {
                          return [
                            createTextVNode("\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F \u0434\u043B\u044F \u043F\u043E\u0441\u0442\u0443\u043F\u043B\u0435\u043D\u0438\u0439 (Credit)")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_UiSelect, {
                      modelValue: incomeExpenseCategoryId.value,
                      "onUpdate:modelValue": ($event) => incomeExpenseCategoryId.value = $event
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_UiSelectTrigger, null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_UiSelectValue, { placeholder: "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044E \u0434\u043B\u044F \u043F\u043E\u0441\u0442\u0443\u043F\u043B\u0435\u043D\u0438\u0439" }, null, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(_component_UiSelectValue, { placeholder: "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044E \u0434\u043B\u044F \u043F\u043E\u0441\u0442\u0443\u043F\u043B\u0435\u043D\u0438\u0439" })
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_component_UiSelectContent, null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<!--[-->`);
                                ssrRenderList(incomeCategories.value, (category) => {
                                  _push5(ssrRenderComponent(_component_UiSelectItem, {
                                    key: category.id,
                                    value: String(category.id)
                                  }, {
                                    default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        _push6(`${ssrInterpolate(category.name)}`);
                                      } else {
                                        return [
                                          createTextVNode(toDisplayString(category.name), 1)
                                        ];
                                      }
                                    }),
                                    _: 2
                                  }, _parent5, _scopeId4));
                                });
                                _push5(`<!--]-->`);
                              } else {
                                return [
                                  (openBlock(true), createBlock(Fragment, null, renderList(incomeCategories.value, (category) => {
                                    return openBlock(), createBlock(_component_UiSelectItem, {
                                      key: category.id,
                                      value: String(category.id)
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(category.name), 1)
                                      ]),
                                      _: 2
                                    }, 1032, ["value"]);
                                  }), 128))
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_UiSelectTrigger, null, {
                              default: withCtx(() => [
                                createVNode(_component_UiSelectValue, { placeholder: "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044E \u0434\u043B\u044F \u043F\u043E\u0441\u0442\u0443\u043F\u043B\u0435\u043D\u0438\u0439" })
                              ]),
                              _: 1
                            }),
                            createVNode(_component_UiSelectContent, null, {
                              default: withCtx(() => [
                                (openBlock(true), createBlock(Fragment, null, renderList(incomeCategories.value, (category) => {
                                  return openBlock(), createBlock(_component_UiSelectItem, {
                                    key: category.id,
                                    value: String(category.id)
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(category.name), 1)
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
                    }, _parent3, _scopeId2));
                    _push3(`</div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  if (shouldShowOutcomeCategories.value) {
                    _push3(`<div class="space-y-2"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_UiLabel, { class: "text-sm font-medium" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F \u0434\u043B\u044F \u0432\u044B\u043F\u043B\u0430\u0442 (Debit)`);
                        } else {
                          return [
                            createTextVNode("\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F \u0434\u043B\u044F \u0432\u044B\u043F\u043B\u0430\u0442 (Debit)")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_UiSelect, {
                      modelValue: outcomeExpenseCategoryId.value,
                      "onUpdate:modelValue": ($event) => outcomeExpenseCategoryId.value = $event
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_UiSelectTrigger, null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_UiSelectValue, { placeholder: "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044E \u0434\u043B\u044F \u0432\u044B\u043F\u043B\u0430\u0442" }, null, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(_component_UiSelectValue, { placeholder: "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044E \u0434\u043B\u044F \u0432\u044B\u043F\u043B\u0430\u0442" })
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_component_UiSelectContent, null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<!--[-->`);
                                ssrRenderList(outcomeCategories.value, (category) => {
                                  _push5(ssrRenderComponent(_component_UiSelectItem, {
                                    key: category.id,
                                    value: String(category.id)
                                  }, {
                                    default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        _push6(`${ssrInterpolate(category.name)}`);
                                      } else {
                                        return [
                                          createTextVNode(toDisplayString(category.name), 1)
                                        ];
                                      }
                                    }),
                                    _: 2
                                  }, _parent5, _scopeId4));
                                });
                                _push5(`<!--]-->`);
                              } else {
                                return [
                                  (openBlock(true), createBlock(Fragment, null, renderList(outcomeCategories.value, (category) => {
                                    return openBlock(), createBlock(_component_UiSelectItem, {
                                      key: category.id,
                                      value: String(category.id)
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(category.name), 1)
                                      ]),
                                      _: 2
                                    }, 1032, ["value"]);
                                  }), 128))
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_UiSelectTrigger, null, {
                              default: withCtx(() => [
                                createVNode(_component_UiSelectValue, { placeholder: "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044E \u0434\u043B\u044F \u0432\u044B\u043F\u043B\u0430\u0442" })
                              ]),
                              _: 1
                            }),
                            createVNode(_component_UiSelectContent, null, {
                              default: withCtx(() => [
                                (openBlock(true), createBlock(Fragment, null, renderList(outcomeCategories.value, (category) => {
                                  return openBlock(), createBlock(_component_UiSelectItem, {
                                    key: category.id,
                                    value: String(category.id)
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(category.name), 1)
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
                    }, _parent3, _scopeId2));
                    _push3(`</div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`<div class="text-sm text-muted-foreground"${_scopeId2}><p${_scopeId2}> \u041F\u043E\u0441\u043B\u0435 \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u044F \u043F\u0440\u0430\u0432\u0438\u043B\u0430 \u0432\u0441\u0435 \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u0438 \u044D\u0442\u043E\u0433\u043E \u043A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442\u0430 \u0431\u0443\u0434\u0443\u0442 \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0438 \u0440\u0430\u0441\u043F\u0440\u0435\u0434\u0435\u043B\u044F\u0442\u044C\u0441\u044F \u043F\u043E \u0432\u044B\u0431\u0440\u0430\u043D\u043D\u044B\u043C \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F\u043C. </p></div></div><div class="flex justify-end gap-2 mt-6"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UiButton, {
                    variant: "outline",
                    disabled: isLoading.value,
                    onClick: handleCancel
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` \u041E\u0442\u043C\u0435\u043D\u0430 `);
                      } else {
                        return [
                          createTextVNode(" \u041E\u0442\u043C\u0435\u043D\u0430 ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UiButton, {
                    disabled: !isFormValid.value || isLoading.value,
                    onClick: handleSave
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        if (isLoading.value) {
                          _push4(`<span${_scopeId3}>\u0421\u043E\u0437\u0434\u0430\u043D\u0438\u0435...</span>`);
                        } else {
                          _push4(`<span${_scopeId3}>\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u043F\u0440\u0430\u0432\u0438\u043B\u043E</span>`);
                        }
                      } else {
                        return [
                          isLoading.value ? (openBlock(), createBlock("span", { key: 0 }, "\u0421\u043E\u0437\u0434\u0430\u043D\u0438\u0435...")) : (openBlock(), createBlock("span", { key: 1 }, "\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u043F\u0440\u0430\u0432\u0438\u043B\u043E"))
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode(_component_UiDialogHeader, null, {
                      default: withCtx(() => [
                        createVNode(_component_UiDialogTitle, null, {
                          default: withCtx(() => [
                            createTextVNode("\u041F\u0440\u0438\u0441\u0432\u043E\u0438\u0442\u044C \u0441\u0442\u0430\u0442\u044C\u044E \u043A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442\u0443")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UiDialogDescription, null, {
                          default: withCtx(() => {
                            var _a;
                            return [
                              createTextVNode(' \u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u0438 \u0434\u043B\u044F \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u043E\u0433\u043E \u043D\u0430\u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044F \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u0439 \u043A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442\u0430 "' + toDisplayString((_a = _ctx.counterParty) == null ? void 0 : _a.counterPartyTitle) + '" ', 1)
                            ];
                          }),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode("div", { class: "space-y-6" }, [
                      shouldShowIncomeCategories.value ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: "space-y-2"
                      }, [
                        createVNode(_component_UiLabel, { class: "text-sm font-medium" }, {
                          default: withCtx(() => [
                            createTextVNode("\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F \u0434\u043B\u044F \u043F\u043E\u0441\u0442\u0443\u043F\u043B\u0435\u043D\u0438\u0439 (Credit)")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UiSelect, {
                          modelValue: incomeExpenseCategoryId.value,
                          "onUpdate:modelValue": ($event) => incomeExpenseCategoryId.value = $event
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_UiSelectTrigger, null, {
                              default: withCtx(() => [
                                createVNode(_component_UiSelectValue, { placeholder: "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044E \u0434\u043B\u044F \u043F\u043E\u0441\u0442\u0443\u043F\u043B\u0435\u043D\u0438\u0439" })
                              ]),
                              _: 1
                            }),
                            createVNode(_component_UiSelectContent, null, {
                              default: withCtx(() => [
                                (openBlock(true), createBlock(Fragment, null, renderList(incomeCategories.value, (category) => {
                                  return openBlock(), createBlock(_component_UiSelectItem, {
                                    key: category.id,
                                    value: String(category.id)
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(category.name), 1)
                                    ]),
                                    _: 2
                                  }, 1032, ["value"]);
                                }), 128))
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }, 8, ["modelValue", "onUpdate:modelValue"])
                      ])) : createCommentVNode("", true),
                      shouldShowOutcomeCategories.value ? (openBlock(), createBlock("div", {
                        key: 1,
                        class: "space-y-2"
                      }, [
                        createVNode(_component_UiLabel, { class: "text-sm font-medium" }, {
                          default: withCtx(() => [
                            createTextVNode("\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F \u0434\u043B\u044F \u0432\u044B\u043F\u043B\u0430\u0442 (Debit)")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UiSelect, {
                          modelValue: outcomeExpenseCategoryId.value,
                          "onUpdate:modelValue": ($event) => outcomeExpenseCategoryId.value = $event
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_UiSelectTrigger, null, {
                              default: withCtx(() => [
                                createVNode(_component_UiSelectValue, { placeholder: "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044E \u0434\u043B\u044F \u0432\u044B\u043F\u043B\u0430\u0442" })
                              ]),
                              _: 1
                            }),
                            createVNode(_component_UiSelectContent, null, {
                              default: withCtx(() => [
                                (openBlock(true), createBlock(Fragment, null, renderList(outcomeCategories.value, (category) => {
                                  return openBlock(), createBlock(_component_UiSelectItem, {
                                    key: category.id,
                                    value: String(category.id)
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(category.name), 1)
                                    ]),
                                    _: 2
                                  }, 1032, ["value"]);
                                }), 128))
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }, 8, ["modelValue", "onUpdate:modelValue"])
                      ])) : createCommentVNode("", true),
                      createVNode("div", { class: "text-sm text-muted-foreground" }, [
                        createVNode("p", null, " \u041F\u043E\u0441\u043B\u0435 \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u044F \u043F\u0440\u0430\u0432\u0438\u043B\u0430 \u0432\u0441\u0435 \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u0438 \u044D\u0442\u043E\u0433\u043E \u043A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442\u0430 \u0431\u0443\u0434\u0443\u0442 \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0438 \u0440\u0430\u0441\u043F\u0440\u0435\u0434\u0435\u043B\u044F\u0442\u044C\u0441\u044F \u043F\u043E \u0432\u044B\u0431\u0440\u0430\u043D\u043D\u044B\u043C \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F\u043C. ")
                      ])
                    ]),
                    createVNode("div", { class: "flex justify-end gap-2 mt-6" }, [
                      createVNode(_component_UiButton, {
                        variant: "outline",
                        disabled: isLoading.value,
                        onClick: handleCancel
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" \u041E\u0442\u043C\u0435\u043D\u0430 ")
                        ]),
                        _: 1
                      }, 8, ["disabled"]),
                      createVNode(_component_UiButton, {
                        disabled: !isFormValid.value || isLoading.value,
                        onClick: handleSave
                      }, {
                        default: withCtx(() => [
                          isLoading.value ? (openBlock(), createBlock("span", { key: 0 }, "\u0421\u043E\u0437\u0434\u0430\u043D\u0438\u0435...")) : (openBlock(), createBlock("span", { key: 1 }, "\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u043F\u0440\u0430\u0432\u0438\u043B\u043E"))
                        ]),
                        _: 1
                      }, 8, ["disabled"])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UiDialogContent, { class: "max-w-[600px]" }, {
                default: withCtx(() => [
                  createVNode(_component_UiDialogHeader, null, {
                    default: withCtx(() => [
                      createVNode(_component_UiDialogTitle, null, {
                        default: withCtx(() => [
                          createTextVNode("\u041F\u0440\u0438\u0441\u0432\u043E\u0438\u0442\u044C \u0441\u0442\u0430\u0442\u044C\u044E \u043A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442\u0443")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_UiDialogDescription, null, {
                        default: withCtx(() => {
                          var _a;
                          return [
                            createTextVNode(' \u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u0438 \u0434\u043B\u044F \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u043E\u0433\u043E \u043D\u0430\u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044F \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u0439 \u043A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442\u0430 "' + toDisplayString((_a = _ctx.counterParty) == null ? void 0 : _a.counterPartyTitle) + '" ', 1)
                          ];
                        }),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode("div", { class: "space-y-6" }, [
                    shouldShowIncomeCategories.value ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "space-y-2"
                    }, [
                      createVNode(_component_UiLabel, { class: "text-sm font-medium" }, {
                        default: withCtx(() => [
                          createTextVNode("\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F \u0434\u043B\u044F \u043F\u043E\u0441\u0442\u0443\u043F\u043B\u0435\u043D\u0438\u0439 (Credit)")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_UiSelect, {
                        modelValue: incomeExpenseCategoryId.value,
                        "onUpdate:modelValue": ($event) => incomeExpenseCategoryId.value = $event
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_UiSelectTrigger, null, {
                            default: withCtx(() => [
                              createVNode(_component_UiSelectValue, { placeholder: "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044E \u0434\u043B\u044F \u043F\u043E\u0441\u0442\u0443\u043F\u043B\u0435\u043D\u0438\u0439" })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UiSelectContent, null, {
                            default: withCtx(() => [
                              (openBlock(true), createBlock(Fragment, null, renderList(incomeCategories.value, (category) => {
                                return openBlock(), createBlock(_component_UiSelectItem, {
                                  key: category.id,
                                  value: String(category.id)
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(category.name), 1)
                                  ]),
                                  _: 2
                                }, 1032, ["value"]);
                              }), 128))
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }, 8, ["modelValue", "onUpdate:modelValue"])
                    ])) : createCommentVNode("", true),
                    shouldShowOutcomeCategories.value ? (openBlock(), createBlock("div", {
                      key: 1,
                      class: "space-y-2"
                    }, [
                      createVNode(_component_UiLabel, { class: "text-sm font-medium" }, {
                        default: withCtx(() => [
                          createTextVNode("\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F \u0434\u043B\u044F \u0432\u044B\u043F\u043B\u0430\u0442 (Debit)")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_UiSelect, {
                        modelValue: outcomeExpenseCategoryId.value,
                        "onUpdate:modelValue": ($event) => outcomeExpenseCategoryId.value = $event
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_UiSelectTrigger, null, {
                            default: withCtx(() => [
                              createVNode(_component_UiSelectValue, { placeholder: "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044E \u0434\u043B\u044F \u0432\u044B\u043F\u043B\u0430\u0442" })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UiSelectContent, null, {
                            default: withCtx(() => [
                              (openBlock(true), createBlock(Fragment, null, renderList(outcomeCategories.value, (category) => {
                                return openBlock(), createBlock(_component_UiSelectItem, {
                                  key: category.id,
                                  value: String(category.id)
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(category.name), 1)
                                  ]),
                                  _: 2
                                }, 1032, ["value"]);
                              }), 128))
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }, 8, ["modelValue", "onUpdate:modelValue"])
                    ])) : createCommentVNode("", true),
                    createVNode("div", { class: "text-sm text-muted-foreground" }, [
                      createVNode("p", null, " \u041F\u043E\u0441\u043B\u0435 \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u044F \u043F\u0440\u0430\u0432\u0438\u043B\u0430 \u0432\u0441\u0435 \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u0438 \u044D\u0442\u043E\u0433\u043E \u043A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442\u0430 \u0431\u0443\u0434\u0443\u0442 \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0438 \u0440\u0430\u0441\u043F\u0440\u0435\u0434\u0435\u043B\u044F\u0442\u044C\u0441\u044F \u043F\u043E \u0432\u044B\u0431\u0440\u0430\u043D\u043D\u044B\u043C \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F\u043C. ")
                    ])
                  ]),
                  createVNode("div", { class: "flex justify-end gap-2 mt-6" }, [
                    createVNode(_component_UiButton, {
                      variant: "outline",
                      disabled: isLoading.value,
                      onClick: handleCancel
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" \u041E\u0442\u043C\u0435\u043D\u0430 ")
                      ]),
                      _: 1
                    }, 8, ["disabled"]),
                    createVNode(_component_UiButton, {
                      disabled: !isFormValid.value || isLoading.value,
                      onClick: handleSave
                    }, {
                      default: withCtx(() => [
                        isLoading.value ? (openBlock(), createBlock("span", { key: 0 }, "\u0421\u043E\u0437\u0434\u0430\u043D\u0438\u0435...")) : (openBlock(), createBlock("span", { key: 1 }, "\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u043F\u0440\u0430\u0432\u0438\u043B\u043E"))
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
      }, _parent));
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/my/planfact/CreateRuleModal.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "OperationModal",
  __ssrInlineRender: true,
  props: {
    operation: {},
    isOpen: { type: Boolean }
  },
  emits: ["update:isOpen", "save", "delete", "refresh-operations"],
  setup(__props, { emit: __emit }) {
    const {
      counterPartiesFilters,
      counterPartiesFiltersPagination,
      isLoadingCounterParties,
      getCounterPartiesFilters,
      getExpenseCategoriesMini,
      updateOperationPositions,
      deleteOperation: deleteOperationApi,
      removeCategoryFromPosition: removeCategoryFromPositionApi
    } = usePlanfact();
    const props = __props;
    const localExpenseCategories = ref([]);
    const formattedCounterParties = computed(() => {
      return counterPartiesFilters.value.map(
        (c) => ({
          id: c.id,
          title: replaceLegalEntities(c.title) + " (..." + c.account.slice(-4) + ")"
        })
      );
    });
    const fetchExpenseCategories = async (operationType) => {
      try {
        const data = await getExpenseCategoriesMini(operationType);
        localExpenseCategories.value = data;
      } catch (error) {
        console.error(error);
      }
    };
    const emit = __emit;
    const formData = ref({});
    const originalData = ref({});
    const isRuleModalOpen = ref(false);
    watch(
      () => props.operation,
      (newOperation) => {
        var _a, _b;
        if (newOperation) {
          formData.value = {
            ...newOperation,
            operationPositions: ((_a = newOperation.operationPositions) == null ? void 0 : _a.map((pos) => ({
              ...pos
            }))) || [{ amount: 0, counterPartyId: null, expenseCategoryId: null }]
          };
          originalData.value = {
            ...newOperation,
            operationPositions: ((_b = newOperation.operationPositions) == null ? void 0 : _b.map((pos) => ({
              ...pos
            }))) || [{ amount: 0, counterPartyId: null, expenseCategoryId: null }]
          };
        } else {
          formData.value = {
            operationPositions: [
              {
                amount: 0,
                counterPartyId: null,
                expenseCategoryId: null,
                operationId: props.operation.id
              }
            ],
            accountAmount: 0,
            counterPartyTitle: "",
            typeOfOperation: "Credit"
          };
          originalData.value = {
            operationPositions: [
              {
                amount: 0,
                counterPartyId: null,
                expenseCategoryId: null,
                operationId: props.operation.id
              }
            ],
            accountAmount: 0,
            counterPartyTitle: "",
            typeOfOperation: "Credit"
          };
        }
      },
      { immediate: true }
    );
    const isFormChanged = computed(() => {
      return JSON.stringify(formData.value) !== JSON.stringify(originalData.value);
    });
    const totalAmountPrice = ref(0);
    const operationDateLocal = computed({
      get: () => {
        if (!formData.value.operationDate) return "";
        return formatDateForInput(formData.value.operationDate);
      },
      set: (value) => {
        if (value) {
          const localDate = new Date(value);
          formData.value.operationDate = formatDateForSave(localDate);
        }
      }
    });
    const isPositionsValid = computed(() => {
      var _a;
      return formData.value.operationPositions && ((_a = formData.value.operationPositions) == null ? void 0 : _a.length) > 0 && formData.value.operationPositions.every(
        (pos) => pos.amount > 0 && pos.counterPartyId && pos.expenseCategoryId
      );
    });
    const handleCancel = () => {
      var _a;
      formData.value = {
        ...originalData.value,
        operationPositions: ((_a = originalData.value.operationPositions) == null ? void 0 : _a.map((pos) => ({
          ...pos
        }))) || [
          {
            amount: 0,
            counterPartyId: null,
            expenseCategoryId: null,
            operationId: props.operation.id
          }
        ]
      };
      emit("update:isOpen", false);
    };
    const handleSave = async () => {
      if (formData.value && formData.value.operationId) {
        try {
          if (formData.value.operationPositions && formData.value.operationPositions.length > 0) {
            await updateOperationPositions(
              formData.value.operationId,
              formData.value.operationPositions.map((position) => ({
                counterPartyId: position.counterPartyId || null,
                expenseCategoryId: position.expenseCategoryId || null,
                amount: position.amount || 0
              }))
            );
          }
          emit("save", props.operation);
          emit("update:isOpen", false);
          toast({
            title: "\u0423\u0441\u043F\u0435\u0445",
            description: "\u041F\u043E\u0437\u0438\u0446\u0438\u0438 \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u0438 \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u044B."
          });
        } catch (error) {
          console.error(error);
        }
      } else {
        toast({
          variant: "destructive",
          title: "\u041E\u0448\u0438\u0431\u043A\u0430",
          description: "\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0441\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u043F\u043E\u0437\u0438\u0446\u0438\u0438 \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u0438."
        });
      }
    };
    const handleDelete = async () => {
      var _a;
      if ((_a = formData.value) == null ? void 0 : _a.operationId) {
        try {
          await deleteOperationApi(formData.value.operationId);
          emit("delete");
          emit("update:isOpen", false);
          emit("refresh-operations");
        } catch (error) {
          console.error(error);
        }
      }
    };
    const addPosition = () => {
      formData.value.operationPositions = [
        ...formData.value.operationPositions || [],
        {
          amount: 0,
          counterPartyId: null,
          expenseCategoryId: null,
          operationId: props.operation.id
        }
      ];
    };
    const removePosition = (index) => {
      if (formData.value.operationPositions && formData.value.operationPositions.length > 1) {
        formData.value.operationPositions.splice(index, 1);
      } else {
        toast({
          variant: "destructive",
          title: "\u041E\u0448\u0438\u0431\u043A\u0430",
          description: "\u041D\u0435\u043B\u044C\u0437\u044F \u0443\u0434\u0430\u043B\u0438\u0442\u044C \u043F\u043E\u0441\u043B\u0435\u0434\u043D\u044E\u044E \u043F\u043E\u0437\u0438\u0446\u0438\u044E."
        });
      }
    };
    const removeCategoryFromPosition = async (positionId) => {
      var _a;
      if (!positionId) return;
      try {
        await removeCategoryFromPositionApi(positionId);
        const position = (_a = formData.value.operationPositions) == null ? void 0 : _a.find(
          (p) => p.id === positionId
        );
        if (position) {
          position.expenseCategoryId = null;
        }
      } catch (error) {
        console.error(error);
      }
    };
    const handleCounterPartyCreated = () => {
      toast({
        title: "\u0423\u0441\u043F\u0435\u0445",
        description: "\u041A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442 \u0434\u043E\u0431\u0430\u0432\u043B\u0435\u043D \u0432 \u0441\u043F\u0438\u0441\u043E\u043A."
      });
    };
    const counterPartyForRule = computed(() => {
      return {
        counterPartyAccount: formData.value.counterPartyAccount || "",
        counterPartyTitle: formData.value.counterPartyTitle || ""
      };
    });
    const canCreateRule = computed(() => {
      return !!(formData.value.counterPartyTitle && formData.value.counterPartyAccount);
    });
    const handleRuleCreated = () => {
      toast({
        title: "\u0423\u0441\u043F\u0435\u0445",
        description: "\u041F\u0440\u0430\u0432\u0438\u043B\u043E \u0441\u043E\u0437\u0434\u0430\u043D\u043E. \u041E\u043F\u0435\u0440\u0430\u0446\u0438\u0438 \u043A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442\u0430 \u0431\u0443\u0434\u0443\u0442 \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0438 \u0440\u0430\u0441\u043F\u0440\u0435\u0434\u0435\u043B\u044F\u0442\u044C\u0441\u044F."
      });
      emit("refresh-operations");
    };
    watch(props, (val) => {
      if (!val.isOpen) {
        handleCancel();
      }
    });
    watch(
      formData,
      (val) => {
        totalAmountPrice.value = val.operationPositions ? val.operationPositions.reduce((a, b) => a + b.amount, 0) : 0;
      },
      { deep: true }
    );
    const handleCounterPartySearch = async (searchTerm) => {
      await getCounterPartiesFilters(true, searchTerm);
    };
    const handleCounterPartyLoadMore = async () => {
      await getCounterPartiesFilters(false);
    };
    watch(
      [() => props.isOpen, () => props.operation],
      async ([isOpen, operation]) => {
        if (isOpen && operation) {
          await fetchExpenseCategories(operation.typeOfOperation);
        }
      }
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiDialog = _sfc_main$4$2;
      const _component_UiDialogContent = _sfc_main$q;
      const _component_UiDialogHeader = _sfc_main$2$3;
      const _component_UiDialogTitle = _sfc_main$1$3;
      const _component_UiDialogDescription = _sfc_main$r;
      const _component_UiInput = _sfc_main$n;
      const _component_UiLabel = _sfc_main$s;
      const _component_UiSelect = _sfc_main$6$1;
      const _component_UiSelectTrigger = _sfc_main$4$1;
      const _component_UiSelectValue = _sfc_main$5$1;
      const _component_UiSelectContent = _sfc_main$3$1;
      const _component_UiSelectItem = _sfc_main$2$1;
      const _component_UiTextarea = _sfc_main$t;
      const _component_UiButton = _sfc_main$h;
      const _component_MyComboboxModels = _sfc_main$u;
      _push(ssrRenderComponent(_component_UiDialog, mergeProps({
        open: _ctx.isOpen,
        "onUpdate:open": ($event) => emit("update:isOpen", $event)
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UiDialogContent, { class: "max-w-[1200px]" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UiDialogHeader, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UiDialogTitle, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u0438`);
                            } else {
                              return [
                                createTextVNode("\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u0438")
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
                              createTextVNode("\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u0438")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UiDialogDescription)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<div class="flex gap-2 min-h-[600px]"${_scopeId2}><div class="space-y-5 min-w-[450px]"${_scopeId2}><div class="relative"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UiInput, {
                    modelValue: operationDateLocal.value,
                    "onUpdate:modelValue": ($event) => operationDateLocal.value = $event,
                    type: "datetime-local",
                    placeholder: "\u0414\u0430\u0442\u0430 \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u0438",
                    disabled: _ctx.operation.account.isReal,
                    class: formData.value.operationDate ? "" : "outline-1 outline-rose-300"
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` \u0414\u0430\u0442\u0430 \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u0438 `);
                      } else {
                        return [
                          createTextVNode(" \u0414\u0430\u0442\u0430 \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u0438 ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div><div class="relative"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UiSelect, {
                    modelValue: formData.value.typeOfOperation,
                    "onUpdate:modelValue": ($event) => formData.value.typeOfOperation = $event,
                    disabled: _ctx.operation.account.isReal
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UiSelectTrigger, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_UiSelectValue, { placeholder: "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0442\u0438\u043F \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u0438" }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_UiSelectValue, { placeholder: "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0442\u0438\u043F \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u0438" })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_UiSelectContent, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_UiSelectItem, { value: "Debit" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`\u0412\u044B\u043F\u043B\u0430\u0442\u0430`);
                                  } else {
                                    return [
                                      createTextVNode("\u0412\u044B\u043F\u043B\u0430\u0442\u0430")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_UiSelectItem, { value: "Credit" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`\u041F\u043E\u0441\u0442\u0443\u043F\u043B\u0435\u043D\u0438\u0435`);
                                  } else {
                                    return [
                                      createTextVNode("\u041F\u043E\u0441\u0442\u0443\u043F\u043B\u0435\u043D\u0438\u0435")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_UiSelectItem, { value: "Debit" }, {
                                  default: withCtx(() => [
                                    createTextVNode("\u0412\u044B\u043F\u043B\u0430\u0442\u0430")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_UiSelectItem, { value: "Credit" }, {
                                  default: withCtx(() => [
                                    createTextVNode("\u041F\u043E\u0441\u0442\u0443\u043F\u043B\u0435\u043D\u0438\u0435")
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
                          createVNode(_component_UiSelectTrigger, null, {
                            default: withCtx(() => [
                              createVNode(_component_UiSelectValue, { placeholder: "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0442\u0438\u043F \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u0438" })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UiSelectContent, null, {
                            default: withCtx(() => [
                              createVNode(_component_UiSelectItem, { value: "Debit" }, {
                                default: withCtx(() => [
                                  createTextVNode("\u0412\u044B\u043F\u043B\u0430\u0442\u0430")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_UiSelectItem, { value: "Credit" }, {
                                default: withCtx(() => [
                                  createTextVNode("\u041F\u043E\u0441\u0442\u0443\u043F\u043B\u0435\u043D\u0438\u0435")
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
                  _push3(ssrRenderComponent(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` \u0422\u0438\u043F \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u0438 `);
                      } else {
                        return [
                          createTextVNode(" \u0422\u0438\u043F \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u0438 ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div><div class="relative"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UiInput, {
                    modelValue: formData.value.counterPartyTitle,
                    "onUpdate:modelValue": [
                      ($event) => formData.value.counterPartyTitle = $event,
                      (value) => formData.value.counterPartyTitle = unref(replaceLegalEntities)(String(value))
                    ],
                    placeholder: "\u041A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442",
                    disabled: _ctx.operation.account.isReal,
                    class: "text-right truncate",
                    style: { "text-overflow": "ellipsis", "white-space": "nowrap", "direction": "rtl", "text-align": "left" }
                  }, null, _parent3, _scopeId2));
                  if (formData.value.counterPartyTitle) {
                    _push3(ssrRenderComponent(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(` \u041A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442 `);
                        } else {
                          return [
                            createTextVNode(" \u041A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442 ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`</div><div class="relative"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UiTextarea, {
                    modelValue: formData.value.payPurpose,
                    "onUpdate:modelValue": ($event) => formData.value.payPurpose = $event,
                    placeholder: "\u041D\u0430\u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u043F\u043B\u0430\u0442\u0435\u0436\u0430",
                    disabled: _ctx.operation.account.isReal
                  }, null, _parent3, _scopeId2));
                  if (formData.value.payPurpose) {
                    _push3(ssrRenderComponent(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(` \u041D\u0430\u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u043F\u043B\u0430\u0442\u0435\u0436\u0430 `);
                        } else {
                          return [
                            createTextVNode(" \u041D\u0430\u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u043F\u043B\u0430\u0442\u0435\u0436\u0430 ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`</div><div class="relative"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UiInput, {
                    modelValue: formData.value.accountAmount,
                    "onUpdate:modelValue": ($event) => formData.value.accountAmount = $event,
                    type: "number",
                    placeholder: "\u0421\u0443\u043C\u043C\u0430",
                    disabled: _ctx.operation.account.isReal
                  }, null, _parent3, _scopeId2));
                  if (formData.value.accountAmount) {
                    _push3(ssrRenderComponent(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(` \u0421\u0443\u043C\u043C\u0430 `);
                        } else {
                          return [
                            createTextVNode(" \u0421\u0443\u043C\u043C\u0430 ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`</div>`);
                  if (canCreateRule.value) {
                    _push3(`<div class="relative"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_UiButton, {
                      variant: "outline",
                      class: "w-full",
                      onClick: ($event) => isRuleModalOpen.value = true
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(` \u041F\u0440\u0438\u0441\u0432\u043E\u0438\u0442\u044C \u0441\u0442\u0430\u0442\u044C\u044E \u043A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442\u0443 `);
                        } else {
                          return [
                            createTextVNode(" \u041F\u0440\u0438\u0441\u0432\u043E\u0438\u0442\u044C \u0441\u0442\u0430\u0442\u044C\u044E \u043A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442\u0443 ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(`</div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(ssrRenderComponent(_sfc_main$4, {
                    "is-open": isRuleModalOpen.value,
                    "counter-party": counterPartyForRule.value,
                    "operation-type": formData.value.typeOfOperation,
                    "onUpdate:isOpen": ($event) => isRuleModalOpen.value = $event,
                    onRuleCreated: handleRuleCreated
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div class="space-y-4 grow"${_scopeId2}><div class="flex gap-2"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_sfc_main$d, { onCounterpartyCreated: handleCounterPartyCreated }, null, _parent3, _scopeId2));
                  _push3(`</div><!--[-->`);
                  ssrRenderList(formData.value.operationPositions, (position, index) => {
                    var _a, _b, _c;
                    _push3(`<div class="flex gap-2 items-center"${_scopeId2}><div class="relative flex-1 min-w-[100px] max-w-[100px]"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_UiInput, {
                      modelValue: position.amount,
                      "onUpdate:modelValue": ($event) => position.amount = $event,
                      modelModifiers: { number: true },
                      type: "number",
                      placeholder: "\u0421\u0443\u043C\u043C\u0430",
                      class: position.amount > 0 ? "" : "outline-1 outline-rose-300"
                    }, null, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(` \u0421\u0443\u043C\u043C\u0430 `);
                        } else {
                          return [
                            createTextVNode(" \u0421\u0443\u043C\u043C\u0430 ")
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(`</div><div class="relative"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(` \u0421\u0442\u0430\u0442\u044C\u044F `);
                        } else {
                          return [
                            createTextVNode(" \u0421\u0442\u0430\u0442\u044C\u044F ")
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(`<div class="flex items-center gap-2"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_MyComboboxModels, {
                      class: "min-w-[200px] w-[200px] overflow-hidden",
                      items: localExpenseCategories.value.map((c) => ({
                        value: c.id,
                        label: c.name
                      })),
                      label: (_b = (_a = localExpenseCategories.value.find(
                        (c) => c.id === position.expenseCategoryId
                      )) == null ? void 0 : _a.name) != null ? _b : "\u0412\u044B\u0431\u0440\u0430\u0442\u044C",
                      "model-value": position.expenseCategoryId,
                      onSelectedItem: (value) => position.expenseCategoryId = value
                    }, null, _parent3, _scopeId2));
                    if (position.expenseCategoryId && position.id) {
                      _push3(`<button class="flex-shrink-0 p-1 text-red-500 hover:text-red-700 hover:bg-red-50 rounded" title="\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044E"${_scopeId2}><svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"${_scopeId2}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"${_scopeId2}></path></svg></button>`);
                    } else {
                      _push3(`<!---->`);
                    }
                    _push3(`</div></div><div class="relative grow"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(` \u041A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442 `);
                        } else {
                          return [
                            createTextVNode(" \u041A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442 ")
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_sfc_main$c, {
                      items: formattedCounterParties.value,
                      "selected-id": position.counterPartyId,
                      label: (() => {
                        var _a2, _b2, _c2;
                        return position.counterPartyId ? (_c2 = unref(replaceLegalEntities)(
                          (_b2 = (_a2 = position.counterParty) == null ? void 0 : _a2.title) != null ? _b2 : ""
                        )) != null ? _c2 : "" : "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u043A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442\u0430";
                      })(),
                      placeholder: "\u041F\u043E\u0438\u0441\u043A \u043A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442\u0430...",
                      "has-more": unref(counterPartiesFiltersPagination).hasNext,
                      "is-loading": unref(isLoadingCounterParties),
                      "on-search": handleCounterPartySearch,
                      "on-load-more": handleCounterPartyLoadMore,
                      "onUpdate:selectedId": (value) => position.counterPartyId = value
                    }, null, _parent3, _scopeId2));
                    _push3(`</div>`);
                    _push3(ssrRenderComponent(_component_UiButton, {
                      variant: "destructive",
                      disabled: ((_c = formData.value.operationPositions) == null ? void 0 : _c.length) === 1,
                      onClick: ($event) => removePosition(index)
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(` X `);
                        } else {
                          return [
                            createTextVNode(" X ")
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(`</div>`);
                  });
                  _push3(`<!--]--><div class="flex flex-col gap-3 mt-6"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UiButton, {
                    class: "ml-auto",
                    onClick: addPosition
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043F\u043E\u0437\u0438\u0446\u0438\u044E`);
                      } else {
                        return [
                          createTextVNode("\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043F\u043E\u0437\u0438\u0446\u0438\u044E")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div></div></div><div class="flex justify-end gap-2 mt-4"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UiButton, {
                    variant: "destructive",
                    class: "mr-auto",
                    onClick: handleDelete
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`\u0423\u0434\u0430\u043B\u0438\u0442\u044C`);
                      } else {
                        return [
                          createTextVNode("\u0423\u0434\u0430\u043B\u0438\u0442\u044C")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UiButton, {
                    variant: "outline",
                    onClick: handleCancel
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`\u041E\u0442\u043C\u0435\u043D\u0430`);
                      } else {
                        return [
                          createTextVNode("\u041E\u0442\u043C\u0435\u043D\u0430")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UiButton, {
                    disabled: !isFormChanged.value || !isPositionsValid.value,
                    onClick: handleSave
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C`);
                      } else {
                        return [
                          createTextVNode("\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode(_component_UiDialogHeader, null, {
                      default: withCtx(() => [
                        createVNode(_component_UiDialogTitle, null, {
                          default: withCtx(() => [
                            createTextVNode("\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u0438")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UiDialogDescription)
                      ]),
                      _: 1
                    }),
                    createVNode("div", { class: "flex gap-2 min-h-[600px]" }, [
                      createVNode("div", { class: "space-y-5 min-w-[450px]" }, [
                        createVNode("div", { class: "relative" }, [
                          createVNode(_component_UiInput, {
                            modelValue: operationDateLocal.value,
                            "onUpdate:modelValue": ($event) => operationDateLocal.value = $event,
                            type: "datetime-local",
                            placeholder: "\u0414\u0430\u0442\u0430 \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u0438",
                            disabled: _ctx.operation.account.isReal,
                            class: formData.value.operationDate ? "" : "outline-1 outline-rose-300"
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled", "class"]),
                          createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                            default: withCtx(() => [
                              createTextVNode(" \u0414\u0430\u0442\u0430 \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u0438 ")
                            ]),
                            _: 1
                          })
                        ]),
                        createVNode("div", { class: "relative" }, [
                          createVNode(_component_UiSelect, {
                            modelValue: formData.value.typeOfOperation,
                            "onUpdate:modelValue": ($event) => formData.value.typeOfOperation = $event,
                            disabled: _ctx.operation.account.isReal
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_UiSelectTrigger, null, {
                                default: withCtx(() => [
                                  createVNode(_component_UiSelectValue, { placeholder: "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0442\u0438\u043F \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u0438" })
                                ]),
                                _: 1
                              }),
                              createVNode(_component_UiSelectContent, null, {
                                default: withCtx(() => [
                                  createVNode(_component_UiSelectItem, { value: "Debit" }, {
                                    default: withCtx(() => [
                                      createTextVNode("\u0412\u044B\u043F\u043B\u0430\u0442\u0430")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_UiSelectItem, { value: "Credit" }, {
                                    default: withCtx(() => [
                                      createTextVNode("\u041F\u043E\u0441\u0442\u0443\u043F\u043B\u0435\u043D\u0438\u0435")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }, 8, ["modelValue", "onUpdate:modelValue", "disabled"]),
                          createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                            default: withCtx(() => [
                              createTextVNode(" \u0422\u0438\u043F \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u0438 ")
                            ]),
                            _: 1
                          })
                        ]),
                        createVNode("div", { class: "relative" }, [
                          createVNode(_component_UiInput, {
                            modelValue: formData.value.counterPartyTitle,
                            "onUpdate:modelValue": [
                              ($event) => formData.value.counterPartyTitle = $event,
                              (value) => formData.value.counterPartyTitle = unref(replaceLegalEntities)(String(value))
                            ],
                            placeholder: "\u041A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442",
                            disabled: _ctx.operation.account.isReal,
                            class: "text-right truncate",
                            style: { "text-overflow": "ellipsis", "white-space": "nowrap", "direction": "rtl", "text-align": "left" }
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"]),
                          formData.value.counterPartyTitle ? (openBlock(), createBlock(_component_UiLabel, {
                            key: 0,
                            class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" \u041A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442 ")
                            ]),
                            _: 1
                          })) : createCommentVNode("", true)
                        ]),
                        createVNode("div", { class: "relative" }, [
                          createVNode(_component_UiTextarea, {
                            modelValue: formData.value.payPurpose,
                            "onUpdate:modelValue": ($event) => formData.value.payPurpose = $event,
                            placeholder: "\u041D\u0430\u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u043F\u043B\u0430\u0442\u0435\u0436\u0430",
                            disabled: _ctx.operation.account.isReal
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"]),
                          formData.value.payPurpose ? (openBlock(), createBlock(_component_UiLabel, {
                            key: 0,
                            class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" \u041D\u0430\u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u043F\u043B\u0430\u0442\u0435\u0436\u0430 ")
                            ]),
                            _: 1
                          })) : createCommentVNode("", true)
                        ]),
                        createVNode("div", { class: "relative" }, [
                          createVNode(_component_UiInput, {
                            modelValue: formData.value.accountAmount,
                            "onUpdate:modelValue": ($event) => formData.value.accountAmount = $event,
                            type: "number",
                            placeholder: "\u0421\u0443\u043C\u043C\u0430",
                            disabled: _ctx.operation.account.isReal
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"]),
                          formData.value.accountAmount ? (openBlock(), createBlock(_component_UiLabel, {
                            key: 0,
                            class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" \u0421\u0443\u043C\u043C\u0430 ")
                            ]),
                            _: 1
                          })) : createCommentVNode("", true)
                        ]),
                        canCreateRule.value ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: "relative"
                        }, [
                          createVNode(_component_UiButton, {
                            variant: "outline",
                            class: "w-full",
                            onClick: ($event) => isRuleModalOpen.value = true
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" \u041F\u0440\u0438\u0441\u0432\u043E\u0438\u0442\u044C \u0441\u0442\u0430\u0442\u044C\u044E \u043A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442\u0443 ")
                            ]),
                            _: 1
                          }, 8, ["onClick"])
                        ])) : createCommentVNode("", true),
                        createVNode(_sfc_main$4, {
                          "is-open": isRuleModalOpen.value,
                          "counter-party": counterPartyForRule.value,
                          "operation-type": formData.value.typeOfOperation,
                          "onUpdate:isOpen": ($event) => isRuleModalOpen.value = $event,
                          onRuleCreated: handleRuleCreated
                        }, null, 8, ["is-open", "counter-party", "operation-type", "onUpdate:isOpen"])
                      ]),
                      createVNode("div", { class: "space-y-4 grow" }, [
                        createVNode("div", { class: "flex gap-2" }, [
                          createVNode(_sfc_main$d, { onCounterpartyCreated: handleCounterPartyCreated })
                        ]),
                        (openBlock(true), createBlock(Fragment, null, renderList(formData.value.operationPositions, (position, index) => {
                          var _a, _b, _c;
                          return openBlock(), createBlock("div", {
                            key: index,
                            class: "flex gap-2 items-center"
                          }, [
                            createVNode("div", { class: "relative flex-1 min-w-[100px] max-w-[100px]" }, [
                              createVNode(_component_UiInput, {
                                modelValue: position.amount,
                                "onUpdate:modelValue": ($event) => position.amount = $event,
                                modelModifiers: { number: true },
                                type: "number",
                                placeholder: "\u0421\u0443\u043C\u043C\u0430",
                                class: position.amount > 0 ? "" : "outline-1 outline-rose-300"
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "class"]),
                              createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                                default: withCtx(() => [
                                  createTextVNode(" \u0421\u0443\u043C\u043C\u0430 ")
                                ]),
                                _: 1
                              })
                            ]),
                            createVNode("div", { class: "relative" }, [
                              createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                                default: withCtx(() => [
                                  createTextVNode(" \u0421\u0442\u0430\u0442\u044C\u044F ")
                                ]),
                                _: 1
                              }),
                              createVNode("div", { class: "flex items-center gap-2" }, [
                                createVNode(_component_MyComboboxModels, {
                                  class: "min-w-[200px] w-[200px] overflow-hidden",
                                  items: localExpenseCategories.value.map((c) => ({
                                    value: c.id,
                                    label: c.name
                                  })),
                                  label: (_b = (_a = localExpenseCategories.value.find(
                                    (c) => c.id === position.expenseCategoryId
                                  )) == null ? void 0 : _a.name) != null ? _b : "\u0412\u044B\u0431\u0440\u0430\u0442\u044C",
                                  "model-value": position.expenseCategoryId,
                                  onSelectedItem: (value) => position.expenseCategoryId = value
                                }, null, 8, ["items", "label", "model-value", "onSelectedItem"]),
                                position.expenseCategoryId && position.id ? (openBlock(), createBlock("button", {
                                  key: 0,
                                  class: "flex-shrink-0 p-1 text-red-500 hover:text-red-700 hover:bg-red-50 rounded",
                                  title: "\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044E",
                                  onClick: ($event) => removeCategoryFromPosition(position.id)
                                }, [
                                  (openBlock(), createBlock("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    class: "h-4 w-4",
                                    fill: "none",
                                    viewBox: "0 0 24 24",
                                    stroke: "currentColor"
                                  }, [
                                    createVNode("path", {
                                      "stroke-linecap": "round",
                                      "stroke-linejoin": "round",
                                      "stroke-width": "2",
                                      d: "M6 18L18 6M6 6l12 12"
                                    })
                                  ]))
                                ], 8, ["onClick"])) : createCommentVNode("", true)
                              ])
                            ]),
                            createVNode("div", { class: "relative grow" }, [
                              createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                                default: withCtx(() => [
                                  createTextVNode(" \u041A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442 ")
                                ]),
                                _: 1
                              }),
                              createVNode(_sfc_main$c, {
                                items: formattedCounterParties.value,
                                "selected-id": position.counterPartyId,
                                label: (() => {
                                  var _a2, _b2, _c2;
                                  return position.counterPartyId ? (_c2 = unref(replaceLegalEntities)(
                                    (_b2 = (_a2 = position.counterParty) == null ? void 0 : _a2.title) != null ? _b2 : ""
                                  )) != null ? _c2 : "" : "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u043A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442\u0430";
                                })(),
                                placeholder: "\u041F\u043E\u0438\u0441\u043A \u043A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442\u0430...",
                                "has-more": unref(counterPartiesFiltersPagination).hasNext,
                                "is-loading": unref(isLoadingCounterParties),
                                "on-search": handleCounterPartySearch,
                                "on-load-more": handleCounterPartyLoadMore,
                                "onUpdate:selectedId": (value) => position.counterPartyId = value
                              }, null, 8, ["items", "selected-id", "label", "has-more", "is-loading", "onUpdate:selectedId"])
                            ]),
                            createVNode(_component_UiButton, {
                              variant: "destructive",
                              disabled: ((_c = formData.value.operationPositions) == null ? void 0 : _c.length) === 1,
                              onClick: ($event) => removePosition(index)
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" X ")
                              ]),
                              _: 2
                            }, 1032, ["disabled", "onClick"])
                          ]);
                        }), 128)),
                        createVNode("div", { class: "flex flex-col gap-3 mt-6" }, [
                          createVNode(_component_UiButton, {
                            class: "ml-auto",
                            onClick: addPosition
                          }, {
                            default: withCtx(() => [
                              createTextVNode("\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043F\u043E\u0437\u0438\u0446\u0438\u044E")
                            ]),
                            _: 1
                          })
                        ])
                      ])
                    ]),
                    createVNode("div", { class: "flex justify-end gap-2 mt-4" }, [
                      createVNode(_component_UiButton, {
                        variant: "destructive",
                        class: "mr-auto",
                        onClick: handleDelete
                      }, {
                        default: withCtx(() => [
                          createTextVNode("\u0423\u0434\u0430\u043B\u0438\u0442\u044C")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_UiButton, {
                        variant: "outline",
                        onClick: handleCancel
                      }, {
                        default: withCtx(() => [
                          createTextVNode("\u041E\u0442\u043C\u0435\u043D\u0430")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_UiButton, {
                        disabled: !isFormChanged.value || !isPositionsValid.value,
                        onClick: handleSave
                      }, {
                        default: withCtx(() => [
                          createTextVNode("\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C")
                        ]),
                        _: 1
                      }, 8, ["disabled"])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UiDialogContent, { class: "max-w-[1200px]" }, {
                default: withCtx(() => [
                  createVNode(_component_UiDialogHeader, null, {
                    default: withCtx(() => [
                      createVNode(_component_UiDialogTitle, null, {
                        default: withCtx(() => [
                          createTextVNode("\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u0438")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_UiDialogDescription)
                    ]),
                    _: 1
                  }),
                  createVNode("div", { class: "flex gap-2 min-h-[600px]" }, [
                    createVNode("div", { class: "space-y-5 min-w-[450px]" }, [
                      createVNode("div", { class: "relative" }, [
                        createVNode(_component_UiInput, {
                          modelValue: operationDateLocal.value,
                          "onUpdate:modelValue": ($event) => operationDateLocal.value = $event,
                          type: "datetime-local",
                          placeholder: "\u0414\u0430\u0442\u0430 \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u0438",
                          disabled: _ctx.operation.account.isReal,
                          class: formData.value.operationDate ? "" : "outline-1 outline-rose-300"
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled", "class"]),
                        createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                          default: withCtx(() => [
                            createTextVNode(" \u0414\u0430\u0442\u0430 \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u0438 ")
                          ]),
                          _: 1
                        })
                      ]),
                      createVNode("div", { class: "relative" }, [
                        createVNode(_component_UiSelect, {
                          modelValue: formData.value.typeOfOperation,
                          "onUpdate:modelValue": ($event) => formData.value.typeOfOperation = $event,
                          disabled: _ctx.operation.account.isReal
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_UiSelectTrigger, null, {
                              default: withCtx(() => [
                                createVNode(_component_UiSelectValue, { placeholder: "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0442\u0438\u043F \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u0438" })
                              ]),
                              _: 1
                            }),
                            createVNode(_component_UiSelectContent, null, {
                              default: withCtx(() => [
                                createVNode(_component_UiSelectItem, { value: "Debit" }, {
                                  default: withCtx(() => [
                                    createTextVNode("\u0412\u044B\u043F\u043B\u0430\u0442\u0430")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_UiSelectItem, { value: "Credit" }, {
                                  default: withCtx(() => [
                                    createTextVNode("\u041F\u043E\u0441\u0442\u0443\u043F\u043B\u0435\u043D\u0438\u0435")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }, 8, ["modelValue", "onUpdate:modelValue", "disabled"]),
                        createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                          default: withCtx(() => [
                            createTextVNode(" \u0422\u0438\u043F \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u0438 ")
                          ]),
                          _: 1
                        })
                      ]),
                      createVNode("div", { class: "relative" }, [
                        createVNode(_component_UiInput, {
                          modelValue: formData.value.counterPartyTitle,
                          "onUpdate:modelValue": [
                            ($event) => formData.value.counterPartyTitle = $event,
                            (value) => formData.value.counterPartyTitle = unref(replaceLegalEntities)(String(value))
                          ],
                          placeholder: "\u041A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442",
                          disabled: _ctx.operation.account.isReal,
                          class: "text-right truncate",
                          style: { "text-overflow": "ellipsis", "white-space": "nowrap", "direction": "rtl", "text-align": "left" }
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"]),
                        formData.value.counterPartyTitle ? (openBlock(), createBlock(_component_UiLabel, {
                          key: 0,
                          class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" \u041A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442 ")
                          ]),
                          _: 1
                        })) : createCommentVNode("", true)
                      ]),
                      createVNode("div", { class: "relative" }, [
                        createVNode(_component_UiTextarea, {
                          modelValue: formData.value.payPurpose,
                          "onUpdate:modelValue": ($event) => formData.value.payPurpose = $event,
                          placeholder: "\u041D\u0430\u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u043F\u043B\u0430\u0442\u0435\u0436\u0430",
                          disabled: _ctx.operation.account.isReal
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"]),
                        formData.value.payPurpose ? (openBlock(), createBlock(_component_UiLabel, {
                          key: 0,
                          class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" \u041D\u0430\u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u043F\u043B\u0430\u0442\u0435\u0436\u0430 ")
                          ]),
                          _: 1
                        })) : createCommentVNode("", true)
                      ]),
                      createVNode("div", { class: "relative" }, [
                        createVNode(_component_UiInput, {
                          modelValue: formData.value.accountAmount,
                          "onUpdate:modelValue": ($event) => formData.value.accountAmount = $event,
                          type: "number",
                          placeholder: "\u0421\u0443\u043C\u043C\u0430",
                          disabled: _ctx.operation.account.isReal
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"]),
                        formData.value.accountAmount ? (openBlock(), createBlock(_component_UiLabel, {
                          key: 0,
                          class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" \u0421\u0443\u043C\u043C\u0430 ")
                          ]),
                          _: 1
                        })) : createCommentVNode("", true)
                      ]),
                      canCreateRule.value ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: "relative"
                      }, [
                        createVNode(_component_UiButton, {
                          variant: "outline",
                          class: "w-full",
                          onClick: ($event) => isRuleModalOpen.value = true
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" \u041F\u0440\u0438\u0441\u0432\u043E\u0438\u0442\u044C \u0441\u0442\u0430\u0442\u044C\u044E \u043A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442\u0443 ")
                          ]),
                          _: 1
                        }, 8, ["onClick"])
                      ])) : createCommentVNode("", true),
                      createVNode(_sfc_main$4, {
                        "is-open": isRuleModalOpen.value,
                        "counter-party": counterPartyForRule.value,
                        "operation-type": formData.value.typeOfOperation,
                        "onUpdate:isOpen": ($event) => isRuleModalOpen.value = $event,
                        onRuleCreated: handleRuleCreated
                      }, null, 8, ["is-open", "counter-party", "operation-type", "onUpdate:isOpen"])
                    ]),
                    createVNode("div", { class: "space-y-4 grow" }, [
                      createVNode("div", { class: "flex gap-2" }, [
                        createVNode(_sfc_main$d, { onCounterpartyCreated: handleCounterPartyCreated })
                      ]),
                      (openBlock(true), createBlock(Fragment, null, renderList(formData.value.operationPositions, (position, index) => {
                        var _a, _b, _c;
                        return openBlock(), createBlock("div", {
                          key: index,
                          class: "flex gap-2 items-center"
                        }, [
                          createVNode("div", { class: "relative flex-1 min-w-[100px] max-w-[100px]" }, [
                            createVNode(_component_UiInput, {
                              modelValue: position.amount,
                              "onUpdate:modelValue": ($event) => position.amount = $event,
                              modelModifiers: { number: true },
                              type: "number",
                              placeholder: "\u0421\u0443\u043C\u043C\u0430",
                              class: position.amount > 0 ? "" : "outline-1 outline-rose-300"
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "class"]),
                            createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                              default: withCtx(() => [
                                createTextVNode(" \u0421\u0443\u043C\u043C\u0430 ")
                              ]),
                              _: 1
                            })
                          ]),
                          createVNode("div", { class: "relative" }, [
                            createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                              default: withCtx(() => [
                                createTextVNode(" \u0421\u0442\u0430\u0442\u044C\u044F ")
                              ]),
                              _: 1
                            }),
                            createVNode("div", { class: "flex items-center gap-2" }, [
                              createVNode(_component_MyComboboxModels, {
                                class: "min-w-[200px] w-[200px] overflow-hidden",
                                items: localExpenseCategories.value.map((c) => ({
                                  value: c.id,
                                  label: c.name
                                })),
                                label: (_b = (_a = localExpenseCategories.value.find(
                                  (c) => c.id === position.expenseCategoryId
                                )) == null ? void 0 : _a.name) != null ? _b : "\u0412\u044B\u0431\u0440\u0430\u0442\u044C",
                                "model-value": position.expenseCategoryId,
                                onSelectedItem: (value) => position.expenseCategoryId = value
                              }, null, 8, ["items", "label", "model-value", "onSelectedItem"]),
                              position.expenseCategoryId && position.id ? (openBlock(), createBlock("button", {
                                key: 0,
                                class: "flex-shrink-0 p-1 text-red-500 hover:text-red-700 hover:bg-red-50 rounded",
                                title: "\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044E",
                                onClick: ($event) => removeCategoryFromPosition(position.id)
                              }, [
                                (openBlock(), createBlock("svg", {
                                  xmlns: "http://www.w3.org/2000/svg",
                                  class: "h-4 w-4",
                                  fill: "none",
                                  viewBox: "0 0 24 24",
                                  stroke: "currentColor"
                                }, [
                                  createVNode("path", {
                                    "stroke-linecap": "round",
                                    "stroke-linejoin": "round",
                                    "stroke-width": "2",
                                    d: "M6 18L18 6M6 6l12 12"
                                  })
                                ]))
                              ], 8, ["onClick"])) : createCommentVNode("", true)
                            ])
                          ]),
                          createVNode("div", { class: "relative grow" }, [
                            createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-13px] bg-white rounded-md p-1 whitespace-nowrap" }, {
                              default: withCtx(() => [
                                createTextVNode(" \u041A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442 ")
                              ]),
                              _: 1
                            }),
                            createVNode(_sfc_main$c, {
                              items: formattedCounterParties.value,
                              "selected-id": position.counterPartyId,
                              label: (() => {
                                var _a2, _b2, _c2;
                                return position.counterPartyId ? (_c2 = unref(replaceLegalEntities)(
                                  (_b2 = (_a2 = position.counterParty) == null ? void 0 : _a2.title) != null ? _b2 : ""
                                )) != null ? _c2 : "" : "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u043A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442\u0430";
                              })(),
                              placeholder: "\u041F\u043E\u0438\u0441\u043A \u043A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442\u0430...",
                              "has-more": unref(counterPartiesFiltersPagination).hasNext,
                              "is-loading": unref(isLoadingCounterParties),
                              "on-search": handleCounterPartySearch,
                              "on-load-more": handleCounterPartyLoadMore,
                              "onUpdate:selectedId": (value) => position.counterPartyId = value
                            }, null, 8, ["items", "selected-id", "label", "has-more", "is-loading", "onUpdate:selectedId"])
                          ]),
                          createVNode(_component_UiButton, {
                            variant: "destructive",
                            disabled: ((_c = formData.value.operationPositions) == null ? void 0 : _c.length) === 1,
                            onClick: ($event) => removePosition(index)
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" X ")
                            ]),
                            _: 2
                          }, 1032, ["disabled", "onClick"])
                        ]);
                      }), 128)),
                      createVNode("div", { class: "flex flex-col gap-3 mt-6" }, [
                        createVNode(_component_UiButton, {
                          class: "ml-auto",
                          onClick: addPosition
                        }, {
                          default: withCtx(() => [
                            createTextVNode("\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043F\u043E\u0437\u0438\u0446\u0438\u044E")
                          ]),
                          _: 1
                        })
                      ])
                    ])
                  ]),
                  createVNode("div", { class: "flex justify-end gap-2 mt-4" }, [
                    createVNode(_component_UiButton, {
                      variant: "destructive",
                      class: "mr-auto",
                      onClick: handleDelete
                    }, {
                      default: withCtx(() => [
                        createTextVNode("\u0423\u0434\u0430\u043B\u0438\u0442\u044C")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_UiButton, {
                      variant: "outline",
                      onClick: handleCancel
                    }, {
                      default: withCtx(() => [
                        createTextVNode("\u041E\u0442\u043C\u0435\u043D\u0430")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_UiButton, {
                      disabled: !isFormChanged.value || !isPositionsValid.value,
                      onClick: handleSave
                    }, {
                      default: withCtx(() => [
                        createTextVNode("\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C")
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
      }, _parent));
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/my/planfact/OperationModal.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "CategoryItem",
  __ssrInlineRender: true,
  props: {
    category: {},
    level: {}
  },
  emits: ["edit", "create"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const collapseState = inject("collapseState", {
      isAllCollapsed: ref(false),
      toggleAll: () => {
      }
    });
    const isOpen = ref(true);
    const hasChildren = computed(
      () => props.category.children && props.category.children.length > 0
    );
    watch(
      () => collapseState.isAllCollapsed.value,
      (newValue) => {
        if (hasChildren.value) {
          isOpen.value = !newValue;
        }
      },
      { immediate: true }
    );
    const emit = __emit;
    const handleEdit = () => {
      emit("edit", props.category);
    };
    const handleCreate = () => {
      emit("create", props.category);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiCollapsible = _sfc_main$2$8;
      const _component_UiCollapsibleTrigger = _sfc_main$E;
      const _component_UiDropdownMenu = _sfc_main$3$6;
      const _component_UiDropdownMenuTrigger = _sfc_main$2$9;
      const _component_UiButton = _sfc_main$h;
      const _component_UiDropdownMenuContent = _sfc_main$1$9;
      const _component_UiDropdownMenuItem = _sfc_main$F;
      const _component_UiCollapsibleContent = _sfc_main$1$a;
      const _component_MyPlanfactCategoryItem = _sfc_main$2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex items-center gap-2 pt-1.5 pl-2 border-t border-l border-slate-200 rounded-xs transition-colors" }, _attrs))}><div style="${ssrRenderStyle({ paddingLeft: "10px" })}" class="flex items-center gap-2 flex-1 min-w-0 w-full">`);
      if (unref(hasChildren)) {
        _push(ssrRenderComponent(_component_UiCollapsible, {
          open: unref(isOpen),
          "onUpdate:open": ($event) => isRef(isOpen) ? isOpen.value = $event : null,
          class: "flex-1 w-full"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="flex items-center gap-2 flex-1 min-w-0 w-full"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UiCollapsibleTrigger, { class: "flex items-center gap-2 flex-1 min-w-0 rounded px-1 py-0.5 -ml-1" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<span class="text-sm font-medium truncate"${_scopeId2}>${ssrInterpolate(_ctx.category.name)}</span><div class="w-4 h-4 flex items-center justify-center flex-shrink-0 border border-slate-300 rounded"${_scopeId2}>`);
                    if (!unref(isOpen)) {
                      _push3(ssrRenderComponent(unref(Plus), { class: "w-2.5 h-2.5 text-slate-600" }, null, _parent3, _scopeId2));
                    } else {
                      _push3(ssrRenderComponent(unref(Minus), { class: "w-2.5 h-2.5 text-slate-600" }, null, _parent3, _scopeId2));
                    }
                    _push3(`</div>`);
                  } else {
                    return [
                      createVNode("span", { class: "text-sm font-medium truncate" }, toDisplayString(_ctx.category.name), 1),
                      createVNode("div", { class: "w-4 h-4 flex items-center justify-center flex-shrink-0 border border-slate-300 rounded" }, [
                        !unref(isOpen) ? (openBlock(), createBlock(unref(Plus), {
                          key: 0,
                          class: "w-2.5 h-2.5 text-slate-600"
                        })) : (openBlock(), createBlock(unref(Minus), {
                          key: 1,
                          class: "w-2.5 h-2.5 text-slate-600"
                        }))
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UiDropdownMenu, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UiDropdownMenuTrigger, {
                      "as-child": "",
                      class: "cursor-pointer"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_UiButton, {
                            variant: "ghost",
                            size: "icon",
                            class: "h-6 w-6 hover:bg-slate-100 rounded flex-shrink-0 cursor-pointer",
                            onClick: () => {
                            }
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(unref(MoreVertical), { class: "w-4 h-4 text-slate-400" }, null, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(unref(MoreVertical), { class: "w-4 h-4 text-slate-400" })
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_UiButton, {
                              variant: "ghost",
                              size: "icon",
                              class: "h-6 w-6 hover:bg-slate-100 rounded flex-shrink-0 cursor-pointer",
                              onClick: withModifiers(() => {
                              }, ["stop"])
                            }, {
                              default: withCtx(() => [
                                createVNode(unref(MoreVertical), { class: "w-4 h-4 text-slate-400" })
                              ]),
                              _: 1
                            }, 8, ["onClick"])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_UiDropdownMenuContent, null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_UiDropdownMenuItem, {
                            class: "cursor-pointer",
                            onClick: handleEdit
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(` \u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C `);
                              } else {
                                return [
                                  createTextVNode(" \u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C ")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_component_UiDropdownMenuItem, {
                            class: "cursor-pointer",
                            onClick: handleCreate
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(` \u0421\u043E\u0437\u0434\u0430\u0442\u044C \u0441\u0442\u0430\u0442\u044C\u044E `);
                              } else {
                                return [
                                  createTextVNode(" \u0421\u043E\u0437\u0434\u0430\u0442\u044C \u0441\u0442\u0430\u0442\u044C\u044E ")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_UiDropdownMenuItem, {
                              class: "cursor-pointer",
                              onClick: withModifiers(handleEdit, ["stop"])
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" \u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C ")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_UiDropdownMenuItem, {
                              class: "cursor-pointer",
                              onClick: withModifiers(handleCreate, ["stop"])
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" \u0421\u043E\u0437\u0434\u0430\u0442\u044C \u0441\u0442\u0430\u0442\u044C\u044E ")
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
                      createVNode(_component_UiDropdownMenuTrigger, {
                        "as-child": "",
                        class: "cursor-pointer"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_UiButton, {
                            variant: "ghost",
                            size: "icon",
                            class: "h-6 w-6 hover:bg-slate-100 rounded flex-shrink-0 cursor-pointer",
                            onClick: withModifiers(() => {
                            }, ["stop"])
                          }, {
                            default: withCtx(() => [
                              createVNode(unref(MoreVertical), { class: "w-4 h-4 text-slate-400" })
                            ]),
                            _: 1
                          }, 8, ["onClick"])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_UiDropdownMenuContent, null, {
                        default: withCtx(() => [
                          createVNode(_component_UiDropdownMenuItem, {
                            class: "cursor-pointer",
                            onClick: withModifiers(handleEdit, ["stop"])
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" \u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C ")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UiDropdownMenuItem, {
                            class: "cursor-pointer",
                            onClick: withModifiers(handleCreate, ["stop"])
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" \u0421\u043E\u0437\u0434\u0430\u0442\u044C \u0441\u0442\u0430\u0442\u044C\u044E ")
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
              _push2(`</div>`);
              _push2(ssrRenderComponent(_component_UiCollapsibleContent, { class: "pl-0" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<!--[-->`);
                    ssrRenderList(_ctx.category.children, (child) => {
                      _push3(ssrRenderComponent(_component_MyPlanfactCategoryItem, {
                        key: child.id,
                        category: child,
                        level: (props.level || 0) + 1,
                        onCreate: ($event) => emit("create", $event),
                        onEdit: ($event) => emit("edit", $event)
                      }, null, _parent3, _scopeId2));
                    });
                    _push3(`<!--]-->`);
                  } else {
                    return [
                      (openBlock(true), createBlock(Fragment, null, renderList(_ctx.category.children, (child) => {
                        return openBlock(), createBlock(_component_MyPlanfactCategoryItem, {
                          key: child.id,
                          category: child,
                          level: (props.level || 0) + 1,
                          onCreate: ($event) => emit("create", $event),
                          onEdit: ($event) => emit("edit", $event)
                        }, null, 8, ["category", "level", "onCreate", "onEdit"]);
                      }), 128))
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode("div", { class: "flex items-center gap-2 flex-1 min-w-0 w-full" }, [
                  createVNode(_component_UiCollapsibleTrigger, { class: "flex items-center gap-2 flex-1 min-w-0 rounded px-1 py-0.5 -ml-1" }, {
                    default: withCtx(() => [
                      createVNode("span", { class: "text-sm font-medium truncate" }, toDisplayString(_ctx.category.name), 1),
                      createVNode("div", { class: "w-4 h-4 flex items-center justify-center flex-shrink-0 border border-slate-300 rounded" }, [
                        !unref(isOpen) ? (openBlock(), createBlock(unref(Plus), {
                          key: 0,
                          class: "w-2.5 h-2.5 text-slate-600"
                        })) : (openBlock(), createBlock(unref(Minus), {
                          key: 1,
                          class: "w-2.5 h-2.5 text-slate-600"
                        }))
                      ])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_UiDropdownMenu, null, {
                    default: withCtx(() => [
                      createVNode(_component_UiDropdownMenuTrigger, {
                        "as-child": "",
                        class: "cursor-pointer"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_UiButton, {
                            variant: "ghost",
                            size: "icon",
                            class: "h-6 w-6 hover:bg-slate-100 rounded flex-shrink-0 cursor-pointer",
                            onClick: withModifiers(() => {
                            }, ["stop"])
                          }, {
                            default: withCtx(() => [
                              createVNode(unref(MoreVertical), { class: "w-4 h-4 text-slate-400" })
                            ]),
                            _: 1
                          }, 8, ["onClick"])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_UiDropdownMenuContent, null, {
                        default: withCtx(() => [
                          createVNode(_component_UiDropdownMenuItem, {
                            class: "cursor-pointer",
                            onClick: withModifiers(handleEdit, ["stop"])
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" \u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C ")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UiDropdownMenuItem, {
                            class: "cursor-pointer",
                            onClick: withModifiers(handleCreate, ["stop"])
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" \u0421\u043E\u0437\u0434\u0430\u0442\u044C \u0441\u0442\u0430\u0442\u044C\u044E ")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                createVNode(_component_UiCollapsibleContent, { class: "pl-0" }, {
                  default: withCtx(() => [
                    (openBlock(true), createBlock(Fragment, null, renderList(_ctx.category.children, (child) => {
                      return openBlock(), createBlock(_component_MyPlanfactCategoryItem, {
                        key: child.id,
                        category: child,
                        level: (props.level || 0) + 1,
                        onCreate: ($event) => emit("create", $event),
                        onEdit: ($event) => emit("edit", $event)
                      }, null, 8, ["category", "level", "onCreate", "onEdit"]);
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
        _push(`<div class="flex items-center gap-2 flex-1 min-w-0 w-full"><span class="text-sm font-medium truncate flex-1">${ssrInterpolate(_ctx.category.name)}</span>`);
        _push(ssrRenderComponent(_component_UiDropdownMenu, null, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_UiDropdownMenuTrigger, { "as-child": "" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UiButton, {
                      variant: "ghost",
                      size: "icon",
                      class: "h-6 w-6 hover:bg-slate-100 rounded flex-shrink-0 cursor-pointer",
                      onClick: () => {
                      }
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(unref(MoreVertical), { class: "w-4 h-4 text-slate-400" }, null, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(unref(MoreVertical), { class: "w-4 h-4 text-slate-400" })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_UiButton, {
                        variant: "ghost",
                        size: "icon",
                        class: "h-6 w-6 hover:bg-slate-100 rounded flex-shrink-0 cursor-pointer",
                        onClick: withModifiers(() => {
                        }, ["stop"])
                      }, {
                        default: withCtx(() => [
                          createVNode(unref(MoreVertical), { class: "w-4 h-4 text-slate-400" })
                        ]),
                        _: 1
                      }, 8, ["onClick"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UiDropdownMenuContent, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UiDropdownMenuItem, {
                      class: "cursor-pointer",
                      onClick: handleEdit
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(` \u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C `);
                        } else {
                          return [
                            createTextVNode(" \u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_UiDropdownMenuItem, {
                      class: "cursor-pointer",
                      onClick: handleCreate
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(` \u0421\u043E\u0437\u0434\u0430\u0442\u044C \u0441\u0442\u0430\u0442\u044C\u044E `);
                        } else {
                          return [
                            createTextVNode(" \u0421\u043E\u0437\u0434\u0430\u0442\u044C \u0441\u0442\u0430\u0442\u044C\u044E ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_UiDropdownMenuItem, {
                        class: "cursor-pointer",
                        onClick: withModifiers(handleEdit, ["stop"])
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" \u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C ")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_UiDropdownMenuItem, {
                        class: "cursor-pointer",
                        onClick: withModifiers(handleCreate, ["stop"])
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" \u0421\u043E\u0437\u0434\u0430\u0442\u044C \u0441\u0442\u0430\u0442\u044C\u044E ")
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
                createVNode(_component_UiDropdownMenuTrigger, { "as-child": "" }, {
                  default: withCtx(() => [
                    createVNode(_component_UiButton, {
                      variant: "ghost",
                      size: "icon",
                      class: "h-6 w-6 hover:bg-slate-100 rounded flex-shrink-0 cursor-pointer",
                      onClick: withModifiers(() => {
                      }, ["stop"])
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(MoreVertical), { class: "w-4 h-4 text-slate-400" })
                      ]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 1
                }),
                createVNode(_component_UiDropdownMenuContent, null, {
                  default: withCtx(() => [
                    createVNode(_component_UiDropdownMenuItem, {
                      class: "cursor-pointer",
                      onClick: withModifiers(handleEdit, ["stop"])
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" \u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C ")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_UiDropdownMenuItem, {
                      class: "cursor-pointer",
                      onClick: withModifiers(handleCreate, ["stop"])
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" \u0421\u043E\u0437\u0434\u0430\u0442\u044C \u0441\u0442\u0430\u0442\u044C\u044E ")
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
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/my/planfact/CategoryItem.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "CategoriesListModal",
  __ssrInlineRender: true,
  props: {
    isOpen: { type: Boolean }
  },
  emits: ["update:isOpen"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const { $useApi } = useNuxtApp();
    const api = $useApi;
    const isModalOpen = computed({
      get: () => props.isOpen,
      set: (value) => emit("update:isOpen", value)
    });
    const categoriesData = ref({});
    const isLoading = ref(false);
    const activeTab = ref("");
    const isAllCollapsed = ref(false);
    const isCreateModalOpen = ref(false);
    const selectedParentCategory = ref(null);
    const isRootCreateModalOpen = reactive({});
    const isEditModalOpen = ref(false);
    const selectedCategoryForEdit = ref(null);
    provide("collapseState", {
      isAllCollapsed,
      toggleAll: () => {
        isAllCollapsed.value = !isAllCollapsed.value;
      }
    });
    watch(isModalOpen, async (newValue) => {
      if (newValue) {
        await loadCategories();
        isAllCollapsed.value = false;
      }
    });
    const collapseAll = () => {
      isAllCollapsed.value = !isAllCollapsed.value;
    };
    const handleCreateCategory = (category) => {
      selectedParentCategory.value = category;
      isCreateModalOpen.value = true;
    };
    const handleEditCategory = (category) => {
      selectedCategoryForEdit.value = category;
      isEditModalOpen.value = true;
    };
    const sortCategoriesAlphabetically = (categories) => {
      return [...categories].sort((a, b) => {
        const nameA = a.name.toLowerCase();
        const nameB = b.name.toLowerCase();
        return nameA.localeCompare(nameB, "ru");
      });
    };
    const addCategoryToTree = (newCategory, type) => {
      var _a;
      const categories = categoriesData.value[type] || [];
      const parentId = (_a = newCategory.parentId) != null ? _a : null;
      const addToCategory = (cats, parentId2, newCat) => {
        for (let i = 0; i < cats.length; i++) {
          if (cats[i].id === parentId2) {
            if (!cats[i].children) {
              cats[i].children = [];
            }
            cats[i].children.push({
              ...newCat,
              children: []
            });
            return true;
          }
          const children = cats[i].children;
          if (children && children.length > 0 && addToCategory(children, parentId2, newCat)) {
            return true;
          }
        }
        return false;
      };
      if (parentId === null || parentId === void 0) {
        categories.push({
          ...newCategory,
          children: []
        });
      } else {
        const added = addToCategory(categories, parentId, newCategory);
        if (!added) {
          categories.push({
            ...newCategory,
            children: []
          });
        }
      }
      categoriesData.value[type] = sortCategoriesAlphabetically(categories);
      categoriesData.value = { ...categoriesData.value };
    };
    const updateCategoryInTree = (updatedCategory, type) => {
      const categories = categoriesData.value[type] || [];
      const updateInCategory = (cats, categoryId, updatedCat) => {
        var _a;
        for (let i = 0; i < cats.length; i++) {
          if (cats[i].id === categoryId) {
            const oldParentId = cats[i].parentId;
            const newParentId = (_a = updatedCat.parentId) != null ? _a : null;
            Object.assign(cats[i], {
              ...updatedCat,
              children: cats[i].children || []
            });
            if (oldParentId !== newParentId) {
              const categoryToMove = { ...cats[i] };
              cats.splice(i, 1);
              if (newParentId === null || newParentId === void 0) {
                categories.push(categoryToMove);
              } else {
                const addToCategory = (catsList, parentId, cat) => {
                  for (let j = 0; j < catsList.length; j++) {
                    if (catsList[j].id === parentId) {
                      if (!catsList[j].children) {
                        catsList[j].children = [];
                      }
                      catsList[j].children.push(cat);
                      return true;
                    }
                    const children2 = catsList[j].children;
                    if (children2 && children2.length > 0 && addToCategory(children2, parentId, cat)) {
                      return true;
                    }
                  }
                  return false;
                };
                addToCategory(categories, newParentId, categoryToMove);
              }
            }
            return true;
          }
          const children = cats[i].children;
          if (children && children.length > 0 && updateInCategory(children, categoryId, updatedCat)) {
            return true;
          }
        }
        return false;
      };
      updateInCategory(categories, updatedCategory.id, updatedCategory);
      categoriesData.value[type] = sortCategoriesAlphabetically(categories);
      categoriesData.value = { ...categoriesData.value };
    };
    const getCategoriesForType = (type, excludeCategoryId) => {
      const categories = categoriesData.value[type] || [];
      const flattenCategories = (cats, excludeId) => {
        const result = [];
        cats.forEach((cat) => {
          if (excludeId && cat.id === excludeId) {
            return;
          }
          result.push({ id: cat.id, name: cat.name });
          if (cat.children && cat.children.length > 0) {
            result.push(...flattenCategories(cat.children, excludeId));
          }
        });
        return result;
      };
      return flattenCategories(categories, excludeCategoryId);
    };
    const loadCategories = async () => {
      isLoading.value = true;
      try {
        const { data } = await api.get(
          "planfact/expense-categories-list"
        );
        const sortedData = {};
        for (const [type, categories] of Object.entries(data)) {
          sortedData[type] = sortCategoriesAlphabetically(categories);
        }
        categoriesData.value = sortedData;
        if (!activeTab.value) {
          const firstKey = Object.keys(sortedData)[0];
          if (firstKey) {
            activeTab.value = firstKey;
          }
        }
      } catch (error) {
        console.error("\u041E\u0448\u0438\u0431\u043A\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0438 \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u0439:", error);
      } finally {
        isLoading.value = false;
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiDialog = _sfc_main$4$2;
      const _component_UiDialogContent = _sfc_main$q;
      const _component_UiDialogHeader = _sfc_main$2$3;
      const _component_UiDialogTitle = _sfc_main$1$3;
      const _component_UiDialogDescription = _sfc_main$r;
      const _component_UiTabs = _sfc_main$2$2;
      const _component_UiTabsList = _sfc_main$l;
      const _component_UiTabsTrigger = _sfc_main$1$2;
      const _component_UiTabsContent = _sfc_main$m;
      const _component_UiScrollArea = _sfc_main$o;
      const _component_UiButton = _sfc_main$h;
      const _component_MyPlanfactCategoryItem = _sfc_main$2;
      const _component_UiDialogFooter = _sfc_main$C;
      const _component_MyPlanfactCategoriesCreateModal = _sfc_main$e;
      _push(ssrRenderComponent(_component_UiDialog, mergeProps({
        open: unref(isModalOpen),
        "onUpdate:open": ($event) => isRef(isModalOpen) ? isModalOpen.value = $event : null
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UiDialogContent, { class: "max-w-[800px] h-[95vh] flex flex-col" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UiDialogHeader, { class: "flex-shrink-0" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UiDialogTitle, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`\u0421\u043F\u0438\u0441\u043E\u043A \u0441\u0442\u0430\u0442\u0435\u0439`);
                            } else {
                              return [
                                createTextVNode("\u0421\u043F\u0438\u0441\u043E\u043A \u0441\u0442\u0430\u0442\u0435\u0439")
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
                              createTextVNode("\u0421\u043F\u0438\u0441\u043E\u043A \u0441\u0442\u0430\u0442\u0435\u0439")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UiDialogDescription)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<div class="flex-1 min-h-0 overflow-hidden flex flex-col"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_UiTabs, {
                    modelValue: unref(activeTab),
                    "onUpdate:modelValue": ($event) => isRef(activeTab) ? activeTab.value = $event : null,
                    class: "flex flex-col flex-1 min-h-0"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UiTabsList, {
                          class: "grid w-full flex-shrink-0",
                          style: {
                            gridTemplateColumns: `repeat(${Object.keys(unref(categoriesData)).length}, 1fr)`
                          }
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<!--[-->`);
                              ssrRenderList(unref(categoriesData), (categories, type) => {
                                _push5(ssrRenderComponent(_component_UiTabsTrigger, {
                                  key: type,
                                  value: type
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`${ssrInterpolate(type)}`);
                                    } else {
                                      return [
                                        createTextVNode(toDisplayString(type), 1)
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                              });
                              _push5(`<!--]-->`);
                            } else {
                              return [
                                (openBlock(true), createBlock(Fragment, null, renderList(unref(categoriesData), (categories, type) => {
                                  return openBlock(), createBlock(_component_UiTabsTrigger, {
                                    key: type,
                                    value: type
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(type), 1)
                                    ]),
                                    _: 2
                                  }, 1032, ["value"]);
                                }), 128))
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`<div class="flex-1 min-h-0 overflow-hidden mt-4"${_scopeId3}><!--[-->`);
                        ssrRenderList(unref(categoriesData), (categories, type) => {
                          _push4(ssrRenderComponent(_component_UiTabsContent, {
                            key: type,
                            value: type,
                            class: "h-full mt-0"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_UiScrollArea, { class: "h-full pr-4" }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`<div class="mb-4 flex justify-between items-center"${_scopeId5}>`);
                                      _push6(ssrRenderComponent(_component_UiButton, {
                                        variant: "secondary",
                                        onClick: ($event) => unref(isRootCreateModalOpen)[type] = true
                                      }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(` \u0421\u043E\u0437\u0434\u0430\u0442\u044C \u0441\u0442\u0430\u0442\u044C\u044E `);
                                          } else {
                                            return [
                                              createTextVNode(" \u0421\u043E\u0437\u0434\u0430\u0442\u044C \u0441\u0442\u0430\u0442\u044C\u044E ")
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                      _push6(ssrRenderComponent(_component_UiButton, {
                                        variant: "ghost",
                                        class: "text-xs text-neutral-500",
                                        onClick: collapseAll
                                      }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`${ssrInterpolate(unref(isAllCollapsed) ? "\u0420\u0430\u0437\u0432\u0435\u0440\u043D\u0443\u0442\u044C \u0432\u0441\u0435" : "\u0421\u0432\u0435\u0440\u043D\u0443\u0442\u044C \u0432\u0441\u0435")}`);
                                          } else {
                                            return [
                                              createTextVNode(toDisplayString(unref(isAllCollapsed) ? "\u0420\u0430\u0437\u0432\u0435\u0440\u043D\u0443\u0442\u044C \u0432\u0441\u0435" : "\u0421\u0432\u0435\u0440\u043D\u0443\u0442\u044C \u0432\u0441\u0435"), 1)
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                      _push6(`</div>`);
                                      if (unref(isLoading)) {
                                        _push6(`<div class="text-sm text-slate-500 text-center py-8"${_scopeId5}> \u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430... </div>`);
                                      } else if (categories.length === 0) {
                                        _push6(`<div class="text-sm text-slate-500 text-center py-8"${_scopeId5}> \u041D\u0435\u0442 \u0434\u0430\u043D\u043D\u044B\u0445 </div>`);
                                      } else {
                                        _push6(`<div class="flex flex-col gap-1"${_scopeId5}><!--[-->`);
                                        ssrRenderList(categories, (category) => {
                                          _push6(ssrRenderComponent(_component_MyPlanfactCategoryItem, {
                                            key: category.id,
                                            category,
                                            level: 0,
                                            onCreate: handleCreateCategory,
                                            onEdit: handleEditCategory
                                          }, null, _parent6, _scopeId5));
                                        });
                                        _push6(`<!--]--></div>`);
                                      }
                                    } else {
                                      return [
                                        createVNode("div", { class: "mb-4 flex justify-between items-center" }, [
                                          createVNode(_component_UiButton, {
                                            variant: "secondary",
                                            onClick: ($event) => unref(isRootCreateModalOpen)[type] = true
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(" \u0421\u043E\u0437\u0434\u0430\u0442\u044C \u0441\u0442\u0430\u0442\u044C\u044E ")
                                            ]),
                                            _: 2
                                          }, 1032, ["onClick"]),
                                          createVNode(_component_UiButton, {
                                            variant: "ghost",
                                            class: "text-xs text-neutral-500",
                                            onClick: collapseAll
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(unref(isAllCollapsed) ? "\u0420\u0430\u0437\u0432\u0435\u0440\u043D\u0443\u0442\u044C \u0432\u0441\u0435" : "\u0421\u0432\u0435\u0440\u043D\u0443\u0442\u044C \u0432\u0441\u0435"), 1)
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        unref(isLoading) ? (openBlock(), createBlock("div", {
                                          key: 0,
                                          class: "text-sm text-slate-500 text-center py-8"
                                        }, " \u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430... ")) : categories.length === 0 ? (openBlock(), createBlock("div", {
                                          key: 1,
                                          class: "text-sm text-slate-500 text-center py-8"
                                        }, " \u041D\u0435\u0442 \u0434\u0430\u043D\u043D\u044B\u0445 ")) : (openBlock(), createBlock("div", {
                                          key: 2,
                                          class: "flex flex-col gap-1"
                                        }, [
                                          (openBlock(true), createBlock(Fragment, null, renderList(categories, (category) => {
                                            return openBlock(), createBlock(_component_MyPlanfactCategoryItem, {
                                              key: category.id,
                                              category,
                                              level: 0,
                                              onCreate: handleCreateCategory,
                                              onEdit: handleEditCategory
                                            }, null, 8, ["category"]);
                                          }), 128))
                                        ]))
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(_component_UiScrollArea, { class: "h-full pr-4" }, {
                                    default: withCtx(() => [
                                      createVNode("div", { class: "mb-4 flex justify-between items-center" }, [
                                        createVNode(_component_UiButton, {
                                          variant: "secondary",
                                          onClick: ($event) => unref(isRootCreateModalOpen)[type] = true
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(" \u0421\u043E\u0437\u0434\u0430\u0442\u044C \u0441\u0442\u0430\u0442\u044C\u044E ")
                                          ]),
                                          _: 2
                                        }, 1032, ["onClick"]),
                                        createVNode(_component_UiButton, {
                                          variant: "ghost",
                                          class: "text-xs text-neutral-500",
                                          onClick: collapseAll
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(unref(isAllCollapsed) ? "\u0420\u0430\u0437\u0432\u0435\u0440\u043D\u0443\u0442\u044C \u0432\u0441\u0435" : "\u0421\u0432\u0435\u0440\u043D\u0443\u0442\u044C \u0432\u0441\u0435"), 1)
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      unref(isLoading) ? (openBlock(), createBlock("div", {
                                        key: 0,
                                        class: "text-sm text-slate-500 text-center py-8"
                                      }, " \u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430... ")) : categories.length === 0 ? (openBlock(), createBlock("div", {
                                        key: 1,
                                        class: "text-sm text-slate-500 text-center py-8"
                                      }, " \u041D\u0435\u0442 \u0434\u0430\u043D\u043D\u044B\u0445 ")) : (openBlock(), createBlock("div", {
                                        key: 2,
                                        class: "flex flex-col gap-1"
                                      }, [
                                        (openBlock(true), createBlock(Fragment, null, renderList(categories, (category) => {
                                          return openBlock(), createBlock(_component_MyPlanfactCategoryItem, {
                                            key: category.id,
                                            category,
                                            level: 0,
                                            onCreate: handleCreateCategory,
                                            onEdit: handleEditCategory
                                          }, null, 8, ["category"]);
                                        }), 128))
                                      ]))
                                    ]),
                                    _: 2
                                  }, 1024)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        });
                        _push4(`<!--]--></div>`);
                      } else {
                        return [
                          createVNode(_component_UiTabsList, {
                            class: "grid w-full flex-shrink-0",
                            style: {
                              gridTemplateColumns: `repeat(${Object.keys(unref(categoriesData)).length}, 1fr)`
                            }
                          }, {
                            default: withCtx(() => [
                              (openBlock(true), createBlock(Fragment, null, renderList(unref(categoriesData), (categories, type) => {
                                return openBlock(), createBlock(_component_UiTabsTrigger, {
                                  key: type,
                                  value: type
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(type), 1)
                                  ]),
                                  _: 2
                                }, 1032, ["value"]);
                              }), 128))
                            ]),
                            _: 1
                          }, 8, ["style"]),
                          createVNode("div", { class: "flex-1 min-h-0 overflow-hidden mt-4" }, [
                            (openBlock(true), createBlock(Fragment, null, renderList(unref(categoriesData), (categories, type) => {
                              return openBlock(), createBlock(_component_UiTabsContent, {
                                key: type,
                                value: type,
                                class: "h-full mt-0"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_UiScrollArea, { class: "h-full pr-4" }, {
                                    default: withCtx(() => [
                                      createVNode("div", { class: "mb-4 flex justify-between items-center" }, [
                                        createVNode(_component_UiButton, {
                                          variant: "secondary",
                                          onClick: ($event) => unref(isRootCreateModalOpen)[type] = true
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(" \u0421\u043E\u0437\u0434\u0430\u0442\u044C \u0441\u0442\u0430\u0442\u044C\u044E ")
                                          ]),
                                          _: 2
                                        }, 1032, ["onClick"]),
                                        createVNode(_component_UiButton, {
                                          variant: "ghost",
                                          class: "text-xs text-neutral-500",
                                          onClick: collapseAll
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(unref(isAllCollapsed) ? "\u0420\u0430\u0437\u0432\u0435\u0440\u043D\u0443\u0442\u044C \u0432\u0441\u0435" : "\u0421\u0432\u0435\u0440\u043D\u0443\u0442\u044C \u0432\u0441\u0435"), 1)
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      unref(isLoading) ? (openBlock(), createBlock("div", {
                                        key: 0,
                                        class: "text-sm text-slate-500 text-center py-8"
                                      }, " \u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430... ")) : categories.length === 0 ? (openBlock(), createBlock("div", {
                                        key: 1,
                                        class: "text-sm text-slate-500 text-center py-8"
                                      }, " \u041D\u0435\u0442 \u0434\u0430\u043D\u043D\u044B\u0445 ")) : (openBlock(), createBlock("div", {
                                        key: 2,
                                        class: "flex flex-col gap-1"
                                      }, [
                                        (openBlock(true), createBlock(Fragment, null, renderList(categories, (category) => {
                                          return openBlock(), createBlock(_component_MyPlanfactCategoryItem, {
                                            key: category.id,
                                            category,
                                            level: 0,
                                            onCreate: handleCreateCategory,
                                            onEdit: handleEditCategory
                                          }, null, 8, ["category"]);
                                        }), 128))
                                      ]))
                                    ]),
                                    _: 2
                                  }, 1024)
                                ]),
                                _: 2
                              }, 1032, ["value"]);
                            }), 128))
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                  _push3(ssrRenderComponent(_component_UiDialogFooter, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UiDialogHeader, { class: "flex-shrink-0" }, {
                      default: withCtx(() => [
                        createVNode(_component_UiDialogTitle, null, {
                          default: withCtx(() => [
                            createTextVNode("\u0421\u043F\u0438\u0441\u043E\u043A \u0441\u0442\u0430\u0442\u0435\u0439")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UiDialogDescription)
                      ]),
                      _: 1
                    }),
                    createVNode("div", { class: "flex-1 min-h-0 overflow-hidden flex flex-col" }, [
                      createVNode(_component_UiTabs, {
                        modelValue: unref(activeTab),
                        "onUpdate:modelValue": ($event) => isRef(activeTab) ? activeTab.value = $event : null,
                        class: "flex flex-col flex-1 min-h-0"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_UiTabsList, {
                            class: "grid w-full flex-shrink-0",
                            style: {
                              gridTemplateColumns: `repeat(${Object.keys(unref(categoriesData)).length}, 1fr)`
                            }
                          }, {
                            default: withCtx(() => [
                              (openBlock(true), createBlock(Fragment, null, renderList(unref(categoriesData), (categories, type) => {
                                return openBlock(), createBlock(_component_UiTabsTrigger, {
                                  key: type,
                                  value: type
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(type), 1)
                                  ]),
                                  _: 2
                                }, 1032, ["value"]);
                              }), 128))
                            ]),
                            _: 1
                          }, 8, ["style"]),
                          createVNode("div", { class: "flex-1 min-h-0 overflow-hidden mt-4" }, [
                            (openBlock(true), createBlock(Fragment, null, renderList(unref(categoriesData), (categories, type) => {
                              return openBlock(), createBlock(_component_UiTabsContent, {
                                key: type,
                                value: type,
                                class: "h-full mt-0"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_UiScrollArea, { class: "h-full pr-4" }, {
                                    default: withCtx(() => [
                                      createVNode("div", { class: "mb-4 flex justify-between items-center" }, [
                                        createVNode(_component_UiButton, {
                                          variant: "secondary",
                                          onClick: ($event) => unref(isRootCreateModalOpen)[type] = true
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(" \u0421\u043E\u0437\u0434\u0430\u0442\u044C \u0441\u0442\u0430\u0442\u044C\u044E ")
                                          ]),
                                          _: 2
                                        }, 1032, ["onClick"]),
                                        createVNode(_component_UiButton, {
                                          variant: "ghost",
                                          class: "text-xs text-neutral-500",
                                          onClick: collapseAll
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(unref(isAllCollapsed) ? "\u0420\u0430\u0437\u0432\u0435\u0440\u043D\u0443\u0442\u044C \u0432\u0441\u0435" : "\u0421\u0432\u0435\u0440\u043D\u0443\u0442\u044C \u0432\u0441\u0435"), 1)
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      unref(isLoading) ? (openBlock(), createBlock("div", {
                                        key: 0,
                                        class: "text-sm text-slate-500 text-center py-8"
                                      }, " \u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430... ")) : categories.length === 0 ? (openBlock(), createBlock("div", {
                                        key: 1,
                                        class: "text-sm text-slate-500 text-center py-8"
                                      }, " \u041D\u0435\u0442 \u0434\u0430\u043D\u043D\u044B\u0445 ")) : (openBlock(), createBlock("div", {
                                        key: 2,
                                        class: "flex flex-col gap-1"
                                      }, [
                                        (openBlock(true), createBlock(Fragment, null, renderList(categories, (category) => {
                                          return openBlock(), createBlock(_component_MyPlanfactCategoryItem, {
                                            key: category.id,
                                            category,
                                            level: 0,
                                            onCreate: handleCreateCategory,
                                            onEdit: handleEditCategory
                                          }, null, 8, ["category"]);
                                        }), 128))
                                      ]))
                                    ]),
                                    _: 2
                                  }, 1024)
                                ]),
                                _: 2
                              }, 1032, ["value"]);
                            }), 128))
                          ])
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
            if (unref(selectedParentCategory) && unref(activeTab)) {
              _push2(ssrRenderComponent(_component_MyPlanfactCategoriesCreateModal, {
                type: unref(activeTab),
                parent: {
                  id: unref(selectedParentCategory).id,
                  name: unref(selectedParentCategory).name
                },
                "expense-categories": getCategoriesForType(unref(activeTab)),
                "is-open": unref(isCreateModalOpen),
                "onUpdate:isOpen": ($event) => isCreateModalOpen.value = $event,
                onCategoryCreated: (category) => {
                  if (unref(selectedParentCategory) && unref(activeTab)) {
                    addCategoryToTree(category, unref(activeTab));
                    isCreateModalOpen.value = false;
                    selectedParentCategory.value = null;
                  }
                },
                onError: () => {
                  loadCategories();
                }
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(`<!--[-->`);
            ssrRenderList(unref(categoriesData), (categories, type) => {
              _push2(`<!--[-->`);
              if (!!unref(isRootCreateModalOpen)[type]) {
                _push2(ssrRenderComponent(_component_MyPlanfactCategoriesCreateModal, {
                  type,
                  "expense-categories": getCategoriesForType(type),
                  "is-open": !!unref(isRootCreateModalOpen)[type],
                  "onUpdate:isOpen": (val) => unref(isRootCreateModalOpen)[type] = val,
                  onCategoryCreated: (category) => {
                    addCategoryToTree(category, type);
                    unref(isRootCreateModalOpen)[type] = false;
                  },
                  onError: loadCategories
                }, null, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              _push2(`<!--]-->`);
            });
            _push2(`<!--]-->`);
            if (unref(selectedCategoryForEdit) && unref(activeTab)) {
              _push2(ssrRenderComponent(_component_MyPlanfactCategoriesCreateModal, {
                category: unref(selectedCategoryForEdit),
                type: unref(activeTab),
                "expense-categories": getCategoriesForType(unref(activeTab), unref(selectedCategoryForEdit).id),
                "is-open": unref(isEditModalOpen),
                "onUpdate:isOpen": ($event) => isEditModalOpen.value = $event,
                onCategoryUpdated: (category) => {
                  if (unref(selectedCategoryForEdit) && unref(activeTab)) {
                    updateCategoryInTree(category, unref(activeTab));
                    isEditModalOpen.value = false;
                    selectedCategoryForEdit.value = null;
                  }
                },
                onError: () => {
                  loadCategories();
                }
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              createVNode(_component_UiDialogContent, { class: "max-w-[800px] h-[95vh] flex flex-col" }, {
                default: withCtx(() => [
                  createVNode(_component_UiDialogHeader, { class: "flex-shrink-0" }, {
                    default: withCtx(() => [
                      createVNode(_component_UiDialogTitle, null, {
                        default: withCtx(() => [
                          createTextVNode("\u0421\u043F\u0438\u0441\u043E\u043A \u0441\u0442\u0430\u0442\u0435\u0439")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_UiDialogDescription)
                    ]),
                    _: 1
                  }),
                  createVNode("div", { class: "flex-1 min-h-0 overflow-hidden flex flex-col" }, [
                    createVNode(_component_UiTabs, {
                      modelValue: unref(activeTab),
                      "onUpdate:modelValue": ($event) => isRef(activeTab) ? activeTab.value = $event : null,
                      class: "flex flex-col flex-1 min-h-0"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_UiTabsList, {
                          class: "grid w-full flex-shrink-0",
                          style: {
                            gridTemplateColumns: `repeat(${Object.keys(unref(categoriesData)).length}, 1fr)`
                          }
                        }, {
                          default: withCtx(() => [
                            (openBlock(true), createBlock(Fragment, null, renderList(unref(categoriesData), (categories, type) => {
                              return openBlock(), createBlock(_component_UiTabsTrigger, {
                                key: type,
                                value: type
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(type), 1)
                                ]),
                                _: 2
                              }, 1032, ["value"]);
                            }), 128))
                          ]),
                          _: 1
                        }, 8, ["style"]),
                        createVNode("div", { class: "flex-1 min-h-0 overflow-hidden mt-4" }, [
                          (openBlock(true), createBlock(Fragment, null, renderList(unref(categoriesData), (categories, type) => {
                            return openBlock(), createBlock(_component_UiTabsContent, {
                              key: type,
                              value: type,
                              class: "h-full mt-0"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_UiScrollArea, { class: "h-full pr-4" }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "mb-4 flex justify-between items-center" }, [
                                      createVNode(_component_UiButton, {
                                        variant: "secondary",
                                        onClick: ($event) => unref(isRootCreateModalOpen)[type] = true
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(" \u0421\u043E\u0437\u0434\u0430\u0442\u044C \u0441\u0442\u0430\u0442\u044C\u044E ")
                                        ]),
                                        _: 2
                                      }, 1032, ["onClick"]),
                                      createVNode(_component_UiButton, {
                                        variant: "ghost",
                                        class: "text-xs text-neutral-500",
                                        onClick: collapseAll
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(unref(isAllCollapsed) ? "\u0420\u0430\u0437\u0432\u0435\u0440\u043D\u0443\u0442\u044C \u0432\u0441\u0435" : "\u0421\u0432\u0435\u0440\u043D\u0443\u0442\u044C \u0432\u0441\u0435"), 1)
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    unref(isLoading) ? (openBlock(), createBlock("div", {
                                      key: 0,
                                      class: "text-sm text-slate-500 text-center py-8"
                                    }, " \u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430... ")) : categories.length === 0 ? (openBlock(), createBlock("div", {
                                      key: 1,
                                      class: "text-sm text-slate-500 text-center py-8"
                                    }, " \u041D\u0435\u0442 \u0434\u0430\u043D\u043D\u044B\u0445 ")) : (openBlock(), createBlock("div", {
                                      key: 2,
                                      class: "flex flex-col gap-1"
                                    }, [
                                      (openBlock(true), createBlock(Fragment, null, renderList(categories, (category) => {
                                        return openBlock(), createBlock(_component_MyPlanfactCategoryItem, {
                                          key: category.id,
                                          category,
                                          level: 0,
                                          onCreate: handleCreateCategory,
                                          onEdit: handleEditCategory
                                        }, null, 8, ["category"]);
                                      }), 128))
                                    ]))
                                  ]),
                                  _: 2
                                }, 1024)
                              ]),
                              _: 2
                            }, 1032, ["value"]);
                          }), 128))
                        ])
                      ]),
                      _: 1
                    }, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  createVNode(_component_UiDialogFooter)
                ]),
                _: 1
              }),
              unref(selectedParentCategory) && unref(activeTab) ? (openBlock(), createBlock(_component_MyPlanfactCategoriesCreateModal, {
                key: 0,
                type: unref(activeTab),
                parent: {
                  id: unref(selectedParentCategory).id,
                  name: unref(selectedParentCategory).name
                },
                "expense-categories": getCategoriesForType(unref(activeTab)),
                "is-open": unref(isCreateModalOpen),
                "onUpdate:isOpen": ($event) => isCreateModalOpen.value = $event,
                onCategoryCreated: (category) => {
                  if (unref(selectedParentCategory) && unref(activeTab)) {
                    addCategoryToTree(category, unref(activeTab));
                    isCreateModalOpen.value = false;
                    selectedParentCategory.value = null;
                  }
                },
                onError: () => {
                  loadCategories();
                }
              }, null, 8, ["type", "parent", "expense-categories", "is-open", "onUpdate:isOpen", "onCategoryCreated", "onError"])) : createCommentVNode("", true),
              (openBlock(true), createBlock(Fragment, null, renderList(unref(categoriesData), (categories, type) => {
                return openBlock(), createBlock(Fragment, { key: type }, [
                  !!unref(isRootCreateModalOpen)[type] ? (openBlock(), createBlock(_component_MyPlanfactCategoriesCreateModal, {
                    key: 0,
                    type,
                    "expense-categories": getCategoriesForType(type),
                    "is-open": !!unref(isRootCreateModalOpen)[type],
                    "onUpdate:isOpen": (val) => unref(isRootCreateModalOpen)[type] = val,
                    onCategoryCreated: (category) => {
                      addCategoryToTree(category, type);
                      unref(isRootCreateModalOpen)[type] = false;
                    },
                    onError: loadCategories
                  }, null, 8, ["type", "expense-categories", "is-open", "onUpdate:isOpen", "onCategoryCreated"])) : createCommentVNode("", true)
                ], 64);
              }), 128)),
              unref(selectedCategoryForEdit) && unref(activeTab) ? (openBlock(), createBlock(_component_MyPlanfactCategoriesCreateModal, {
                key: 1,
                category: unref(selectedCategoryForEdit),
                type: unref(activeTab),
                "expense-categories": getCategoriesForType(unref(activeTab), unref(selectedCategoryForEdit).id),
                "is-open": unref(isEditModalOpen),
                "onUpdate:isOpen": ($event) => isEditModalOpen.value = $event,
                onCategoryUpdated: (category) => {
                  if (unref(selectedCategoryForEdit) && unref(activeTab)) {
                    updateCategoryInTree(category, unref(activeTab));
                    isEditModalOpen.value = false;
                    selectedCategoryForEdit.value = null;
                  }
                },
                onError: () => {
                  loadCategories();
                }
              }, null, 8, ["category", "type", "expense-categories", "is-open", "onUpdate:isOpen", "onCategoryUpdated", "onError"])) : createCommentVNode("", true)
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/my/planfact/CategoriesListModal.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const bankOperationsColumns = [
  // Дата
  {
    accessorKey: "operationDate",
    ruName: "\u0414\u0430\u0442\u0430",
    header: () => {
      return h("div", { class: "text-center" }, "\u0414\u0430\u0442\u0430");
    },
    cell: ({ row }) => {
      const date = row.getValue("operationDate");
      const { date: formattedDate, time: formattedTime } = formatDateForTable(date);
      return h("div", { class: "text-center flex flex-col" }, [
        h("div", { class: "text-neutral-700" }, formattedDate),
        h("div", { class: "text-xs text-neutral-500" }, formattedTime)
      ]);
    }
  },
  // Тип
  {
    accessorKey: "typeOfOperation",
    ruName: "\u0422\u0438\u043F",
    size: 200,
    minSize: 200,
    maxSize: 200,
    header: () => {
      return h("div", { class: "text-center" }, "\u0422\u0438\u043F");
    },
    cell: ({ row }) => {
      var _a;
      const type = row.getValue("typeOfOperation");
      const category = row.getValue("category");
      const operationRow = row.original;
      const isTransfer = operationRow.isTransferOperation === true;
      const textStyle = isTransfer ? "text-slate-500" : type === "Debit" ? "text-red-500" : "text-green-600";
      const getCategoryDisplayName = (cat, operationType) => {
        if (!cat) return operationType === "Debit" ? "\u0412\u044B\u043F\u043B\u0430\u0442\u0430" : "\u041F\u043E\u0441\u0442\u0443\u043F\u043B\u0435\u043D\u0438\u0435";
        const debitCategories = {
          cardOperation: "\u041E\u043F\u043B\u0430\u0442\u0430 \u043A\u0430\u0440\u0442\u043E\u0439",
          cashOut: "\u0421\u043D\u044F\u0442\u0438\u0435 \u043D\u0430\u043B\u0438\u0447\u043D\u044B\u0445",
          fee: "\u0423\u0441\u043B\u0443\u0433\u0438 \u0431\u0430\u043D\u043A\u0430",
          penalty: "\u0428\u0442\u0440\u0430\u0444\u044B",
          contragentPeople: "\u0418\u0441\u0445\u043E\u0434\u044F\u0449\u0438\u0435 \u043F\u043B\u0430\u0442\u0435\u0436\u0438",
          selfIncomeOuter: "\u041F\u0435\u0440\u0435\u0432\u043E\u0434 \u0441\u0435\u0431\u0435 \u0432 \u0434\u0440\u0443\u0433\u043E\u0439 \u0431\u0430\u043D\u043A",
          selfTransferOuter: "\u041F\u0435\u0440\u0435\u0432\u043E\u0434 \u043C\u0435\u0436\u0434\u0443 \u0441\u0432\u043E\u0438\u043C\u0438 \u0441\u0447\u0435\u0442\u0430\u043C\u0438 \u0432 T\u2011\u0411\u0438\u0437\u043D\u0435\u0441\u0435",
          salary: "\u0412\u044B\u043F\u043B\u0430\u0442\u044B",
          contragentOutcome: "\u041F\u0435\u0440\u0435\u0432\u043E\u0434 \u043A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442\u0443",
          contragentRefund: "\u0412\u043E\u0437\u0432\u0440\u0430\u0442 \u043A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442\u0443",
          budget: "\u041F\u043B\u0430\u0442\u0435\u0436\u0438 \u0432 \u0431\u044E\u0434\u0436\u0435\u0442",
          tax: "\u041D\u0430\u043B\u043E\u0433\u043E\u0432\u044B\u0435 \u043F\u043B\u0430\u0442\u0435\u0436\u0438",
          creditPaymentOuter: "\u041F\u043E\u0433\u0430\u0448\u0435\u043D\u0438\u0435 \u043A\u0440\u0435\u0434\u0438\u0442\u0430",
          "sme-c2c": "\u0421 \u043A\u0430\u0440\u0442\u044B \u043D\u0430 \u043A\u0430\u0440\u0442\u0443",
          otherOut: "\u0414\u0440\u0443\u0433\u043E\u0435",
          unspecifiedOut: "\u0411\u0435\u0437 \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u0438"
        };
        const creditCategories = {
          incomePeople: "\u0412\u0445\u043E\u0434\u044F\u0449\u0438\u0435 \u043F\u043B\u0430\u0442\u0435\u0436\u0438",
          selfTransferInner: "\u041F\u0435\u0440\u0435\u0432\u043E\u0434 \u043C\u0435\u0436\u0434\u0443 \u0441\u0432\u043E\u0438\u043C\u0438 \u0441\u0447\u0435\u0442\u0430\u043C\u0438 \u0432 T\u2011\u0411\u0438\u0437\u043D\u0435\u0441\u0435",
          selfOutcomeOuter: "\u041F\u0435\u0440\u0435\u0432\u043E\u0434 \u0441\u0435\u0431\u0435 \u0438\u0437 \u0434\u0440\u0443\u0433\u043E\u0433\u043E \u0431\u0430\u043D\u043A\u0430",
          contragentIncome: "\u041F\u043E\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u0435 \u043E\u0442 \u043A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442\u0430",
          acquiring: "\u042D\u043A\u0432\u0430\u0439\u0440\u0438\u043D\u0433",
          acquiringPos: "\u0422\u043E\u0440\u0433\u043E\u0432\u044B\u0439 \u044D\u043A\u0432\u0430\u0439\u0440\u0438\u043D\u0433",
          acquiringInternet: "\u0418\u043D\u0442\u0435\u0440\u043D\u0435\u0442\u2011\u044D\u043A\u0432\u0430\u0439\u0440\u0438\u043D\u0433",
          incomeLoan: "\u041F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u0435 \u043A\u0440\u0435\u0434\u0438\u0442\u0430",
          refundIn: "\u0412\u043E\u0437\u0432\u0440\u0430\u0442 \u0441\u0440\u0435\u0434\u0441\u0442\u0432",
          cashIn: "\u0412\u0437\u043D\u043E\u0441 \u043D\u0430\u043B\u0438\u0447\u043D\u044B\u0445",
          cashInRevenue: "\u0412\u0437\u043D\u043E\u0441 \u0432\u044B\u0440\u0443\u0447\u043A\u0438 \u0438\u0437 \u043A\u0430\u0441\u0441\u044B",
          cashInOwn: "\u0412\u0437\u043D\u043E\u0441 \u0441\u043E\u0431\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u0445 \u0441\u0440\u0435\u0434\u0441\u0442\u0432",
          income: "\u041F\u0440\u043E\u0446\u0435\u043D\u0442\u044B \u043D\u0430 \u043E\u0441\u0442\u0430\u0442\u043E\u043A \u043F\u043E \u0441\u0447\u0435\u0442\u0443",
          depositPartWithdrawal: "\u0427\u0430\u0441\u0442\u0438\u0447\u043D\u043E\u0435 \u0438\u0437\u044A\u044F\u0442\u0438\u0435 \u0441\u0440\u0435\u0434\u0441\u0442\u0432 \u0434\u0435\u043F\u043E\u0437\u0438\u0442\u0430",
          depositFullWithdrawal: "\u0417\u0430\u043A\u0440\u044B\u0442\u0438\u0435 \u0434\u0435\u043F\u043E\u0437\u0438\u0442\u043D\u043E\u0433\u043E \u0441\u0447\u0435\u0442\u0430 \u042E\u041B",
          creditPaymentInner: "\u041F\u043E\u0433\u0430\u0448\u0435\u043D\u0438\u0435 \u043A\u0440\u0435\u0434\u0438\u0442\u0430",
          otherIn: "\u0414\u0440\u0443\u0433\u043E\u0435",
          unspecifiedIn: "\u0411\u0435\u0437 \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u0438"
        };
        if (operationType === "Debit") {
          return debitCategories[cat] || cat;
        } else if (operationType === "Credit") {
          return creditCategories[cat] || cat;
        }
        return cat;
      };
      const isGrouped = operationRow._isGrouped === true;
      const displayType = isGrouped ? "\u041F\u0435\u0440\u0435\u043C\u0435\u0449\u0435\u043D\u0438\u0435" : getCategoryDisplayName(category, type);
      const accountName = ((_a = operationRow.account) == null ? void 0 : _a.name) || "";
      return h(
        "div",
        {
          class: `text-center ${textStyle} text-wrap break-words flex flex-col justify-center items-center gap-1`
        },
        [
          accountName ? h(
            "div",
            { class: "text-xs text-neutral-500 font-normal" },
            accountName
          ) : null,
          h("div", {}, displayType)
        ].filter(Boolean)
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    }
  },
  // Категория (скрытая колонка для фильтрации)
  {
    accessorKey: "category",
    ruName: "\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F",
    header: () => {
      return h("div", { class: "hidden" }, "");
    },
    cell: () => {
      return h("div", { class: "hidden" }, "");
    },
    filterFn: (row, id, value) => {
      const category = row.getValue(id);
      return (category == null ? void 0 : category.toLowerCase().includes(value.toLowerCase())) || false;
    }
  },
  // Название счета (скрытая колонка)
  {
    accessorKey: "account",
    ruName: "\u0421\u0447\u0435\u0442",
    header: () => {
      return h("div", { class: "hidden" }, "");
    },
    cell: () => {
      return h("div", { class: "hidden" }, "");
    }
  },
  // Контрагент
  {
    accessorKey: "operationPositions",
    ruName: "\u041A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442",
    size: 300,
    minSize: 200,
    maxSize: 400,
    header: () => {
      return h("div", { class: "text-center" }, "\u041A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442");
    },
    cell: ({ row }) => {
      const operationPositions = row.getValue("operationPositions");
      if (!operationPositions || operationPositions.length === 0) {
        return h("div", { class: "text-center text-wrap" }, "");
      }
      const counterpartyTitles = operationPositions.map((pos) => {
        var _a;
        return (_a = pos.counterParty) == null ? void 0 : _a.title;
      }).filter(Boolean).map((title) => replaceLegalEntities(title)).filter((title, index, array) => array.indexOf(title) === index);
      return h(
        "div",
        {
          class: "flex flex-col gap-1 items-center justify-center max-w-[300px] text-wrap break-words text-center"
        },
        counterpartyTitles.map(
          (title) => h("span", { class: "break-words text-center" }, title)
        )
      );
    },
    filterFn: (row, id, value) => {
      const operationPositions = row.getValue(id);
      if (!operationPositions) return false;
      const counterpartyTitles = operationPositions.map((pos) => {
        var _a;
        return (_a = pos.counterParty) == null ? void 0 : _a.title;
      }).filter(Boolean);
      return counterpartyTitles.some((title) => value.includes(title));
    }
  },
  // Назначение платежа
  {
    accessorKey: "payPurpose",
    ruName: "\u041D\u0430\u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435",
    header: () => {
      return h("div", { class: "text-center" }, "\u041D\u0430\u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435");
    },
    cell: ({ row }) => {
      const payPurpose = row.getValue("payPurpose");
      const operationPositions = row.getValue("operationPositions");
      const categoryNames = (operationPositions == null ? void 0 : operationPositions.map((pos) => {
        var _a;
        return (_a = pos.expenseCategory) == null ? void 0 : _a.name;
      }).filter(Boolean).filter((name, index, array) => array.indexOf(name) === index)) || [];
      return h("div", { class: "text-left  text-wrap" }, [
        // Категории жирным текстом
        h("div", { class: "font-bold text-sm mb-1" }, categoryNames.join(", ")),
        // Назначение платежа
        h("div", { class: "text-sm" }, payPurpose || "")
      ]);
    },
    filterFn: (row, id, value) => {
      const payPurpose = row.getValue(id);
      const operationPositions = row.getValue("operationPositions");
      const categoryNames = (operationPositions == null ? void 0 : operationPositions.map((pos) => {
        var _a;
        return (_a = pos.expenseCategory) == null ? void 0 : _a.name;
      }).filter(Boolean).filter((name, index, array) => array.indexOf(name) === index)) || [];
      const searchText = [payPurpose, ...categoryNames].join(" ").toLowerCase();
      return searchText.includes(value.toLowerCase());
    }
  },
  // Сумма
  {
    accessorKey: "accountAmount",
    ruName: "\u0421\u0443\u043C\u043C\u0430",
    header: () => {
      return h("div", { class: "text-center" }, "\u0421\u0443\u043C\u043C\u0430");
    },
    cell: ({ row }) => {
      const type = row.getValue("typeOfOperation");
      const amount = row.getValue("accountAmount");
      const operationRow = row.original;
      const isTransfer = operationRow.isTransferOperation === true;
      const textStyle = isTransfer ? "text-slate-500" : type === "Debit" ? "text-red-500" : "text-green-600";
      const sign = isTransfer ? "\xB1" : type === "Debit" ? "-" : "+";
      const formattedAmount = `${sign}${amount} \u20BD`;
      return h(
        "div",
        { class: `text-center font-semibold ${textStyle}` },
        formattedAmount
      );
    },
    filterFn: (row, id, value) => {
      const amount = row.getValue(id);
      const [min, max] = value;
      return amount >= min && amount <= max;
    }
  }
];
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "\u041E\u043F\u0435\u0440\u0430\u0446\u0438\u0438 | Easy CRM"
    });
    const {
      accounts,
      counterPartiesFilters,
      expenseCategoriesFilters,
      operationsData,
      operationsTotals,
      pagination,
      isLoadingMore,
      isLoadingOperations,
      isLoadingTotals,
      isLoadingCounterParties,
      counterPartiesFiltersPagination,
      counterPartiesFiltersSearchTerm,
      getAccounts,
      getCounterPartiesFilters,
      getOriginalOperationsTotals,
      getOriginalOperations
    } = usePlanfact();
    const period = ref((/* @__PURE__ */ new Date()).toISOString().slice(0, 7));
    const range = ref([
      new Date(period.value).toISOString().slice(0, 10),
      new Date(+period.value.split("-")[0], +period.value.split("-")[1], 1).toISOString().slice(0, 10)
    ]);
    const account = ref("");
    const isInitialLoad = ref(true);
    const distributionFilter = ref("all");
    const typeOfOperationFilter = ref("all");
    const searchText = ref("");
    const curOperation = ref(null);
    const isOpen = ref(false);
    const tableStub = {
      getState: () => ({
        columnFilters: []
      })
    };
    const groupedOperationsData = computed(() => {
      const groupedMap = /* @__PURE__ */ new Map();
      const transferIdsToSkip = /* @__PURE__ */ new Set();
      const result = [];
      operationsData.value.forEach((op) => {
        const opAny = op;
        if (opAny.isTransferOperation === true) {
          const key = `${op.operationDate}_${Math.abs(op.accountAmount)}`;
          if (!groupedMap.has(key)) {
            groupedMap.set(key, []);
          }
          groupedMap.get(key).push(op);
          transferIdsToSkip.add(op.operationId);
        }
      });
      operationsData.value.forEach((op) => {
        if (transferIdsToSkip.has(op.operationId)) {
          const key = `${op.operationDate}_${Math.abs(op.accountAmount)}`;
          const group = groupedMap.get(key);
          if (group && group[0].operationId === op.operationId && group.length >= 2) {
            const groupedOp = {
              ...op,
              _isGrouped: true,
              _groupedOperations: group,
              // Объединяем информацию о счетах в название счета
              account: {
                ...op.account,
                name: group.map((o) => o.account.name).join(" \u2194 ")
              }
            };
            result.push(groupedOp);
          } else if (group && group.length === 1) {
            result.push(op);
          }
        } else {
          result.push(op);
        }
      });
      return result;
    });
    const isRuleModalOpen = ref(false);
    const handleRuleModalOpenUpdate = async (val) => {
      isRuleModalOpen.value = val;
      if (!val) {
        await Promise.all([
          getRangeData(true),
          getOriginalOperationsTotalsWrapper()
        ]);
      }
    };
    const selectedRule = ref(null);
    const selectedCounterPartyIds = ref([]);
    const selectedExpenseCategoryIds = ref([]);
    const activeTotalsTab = ref("categories");
    const categoriesSearchTerm = ref("");
    const counterpartiesSearchTerm = ref("");
    const filteredExpenseCategoryTotals = computed(() => {
      if (!categoriesSearchTerm.value.trim()) {
        return operationsTotals.value.expenseCategoryTotals;
      }
      const search = categoriesSearchTerm.value.toLowerCase().trim();
      return operationsTotals.value.expenseCategoryTotals.filter(
        (item) => item.title.toLowerCase().includes(search)
      );
    });
    const filteredCounterPartyTotals = computed(() => {
      if (!counterpartiesSearchTerm.value.trim()) {
        return operationsTotals.value.counterPartyTotals;
      }
      const search = counterpartiesSearchTerm.value.toLowerCase().trim();
      return operationsTotals.value.counterPartyTotals.filter(
        (item) => replaceLegalEntities(item.title).toLowerCase().includes(search)
      );
    });
    const formatPrice = (value) => {
      const rounded = Math.round(value * 100) / 100;
      const formatted = rounded.toFixed(2);
      const parts = formatted.split(".");
      const integerPart = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ");
      return `${integerPart}.${parts[1]} \u20BD`;
    };
    const getOriginalOperationsTotalsWrapper = async () => {
      isLoadingTotals.value = true;
      try {
        const from = new Date(range.value[0]).toISOString().slice(0, 10);
        const to = new Date(range.value[1]).toISOString().slice(0, 10);
        await getOriginalOperationsTotals(from, to, account.value);
      } finally {
        isLoadingTotals.value = false;
      }
    };
    const getRangeData = async (reset = true) => {
      console.log(
        "getRangeData called with reset:",
        reset,
        "account:",
        account.value,
        "isInitialLoad:",
        isInitialLoad.value
      );
      if (reset) {
        isLoadingOperations.value = true;
      }
      try {
        const from = new Date(range.value[0]).toISOString().slice(0, 10);
        const to = new Date(range.value[1]).toISOString().slice(0, 10);
        const page = reset ? 1 : pagination.value.page + 1;
        await getOriginalOperations({
          from,
          to,
          page,
          limit: pagination.value.limit,
          accountId: account.value,
          distributionFilter: distributionFilter.value !== "all" ? distributionFilter.value : void 0,
          counterPartyId: selectedCounterPartyIds.value.length > 0 ? selectedCounterPartyIds.value : void 0,
          expenseCategoryId: selectedExpenseCategoryIds.value.length > 0 ? selectedExpenseCategoryIds.value : void 0,
          typeOfOperation: typeOfOperationFilter.value !== "all" ? typeOfOperationFilter.value : void 0,
          searchText: searchText.value || void 0,
          reset
        });
      } finally {
        if (reset) {
          isLoadingOperations.value = false;
        }
      }
    };
    const debouncedSearch = useDebounceFn(() => {
      getRangeData(true);
    }, 300);
    const isGroupSelectionDialogOpen = ref(false);
    const groupedOperationsForSelection = ref([]);
    const pendingOperationId = ref(null);
    const isAccountsListModalOpen = ref(false);
    const getOperation = (operationId) => {
      const groupedData = groupedOperationsData.value;
      const op = groupedData.find(
        (item) => item.operationId === operationId
      );
      if ((op == null ? void 0 : op._isGrouped) && (op == null ? void 0 : op._groupedOperations)) {
        groupedOperationsForSelection.value = op._groupedOperations;
        pendingOperationId.value = operationId;
        isGroupSelectionDialogOpen.value = true;
      } else {
        const originalOp = operationsData.value.find(
          (item) => item.operationId === operationId
        );
        curOperation.value = originalOp ? originalOp : null;
        isOpen.value = true;
      }
    };
    const selectOperationFromGroup = (selectedOp) => {
      curOperation.value = selectedOp;
      isOpen.value = true;
      isGroupSelectionDialogOpen.value = false;
      groupedOperationsForSelection.value = [];
      pendingOperationId.value = null;
    };
    const handleLoadMore = async () => {
      isLoadingMore.value = true;
      await getRangeData(false);
      isLoadingMore.value = false;
    };
    const handleRefreshOperations = async () => {
      console.log("Refreshing operations after modal close");
      await Promise.all([
        getRangeData(true),
        getOriginalOperationsTotalsWrapper()
      ]);
    };
    const handleOperationDelete = async () => {
      await Promise.all([
        getRangeData(true),
        getOriginalOperationsTotalsWrapper()
      ]);
    };
    const handleOperationSave = async () => {
      await Promise.all([
        getRangeData(true),
        getOriginalOperationsTotalsWrapper()
      ]);
    };
    const formatRange = (date) => {
      return date.map((d) => {
        const date2 = new Date(d).toISOString().slice(0, 10).split("-");
        const day = date2[2];
        const mounth = date2[1];
        const year = date2[0];
        return `${day}.${mounth}.${year}`;
      }).join(" / ");
    };
    const handleCounterPartiesLoadMore = async () => {
      var _a;
      const currentSearch = ((_a = counterPartiesFiltersSearchTerm.value) == null ? void 0 : _a.trim()) || void 0;
      await getCounterPartiesFilters(false, currentSearch);
    };
    const handleCounterPartiesSearch = async (searchTerm) => {
      const search = searchTerm.trim() || void 0;
      await getCounterPartiesFilters(true, search);
    };
    const handleCounterPartiesFilterChange = (ids) => {
      selectedCounterPartyIds.value = ids;
      getRangeData(true);
    };
    const handleExpenseCategoriesFilterChange = (ids) => {
      selectedExpenseCategoryIds.value = ids;
      getRangeData(true);
    };
    const handleDistributionFilterChange = (value) => {
      distributionFilter.value = value;
      getRangeData(true);
    };
    const handleTypeOfOperationFilterChange = (value) => {
      typeOfOperationFilter.value = value;
      getRangeData(true);
    };
    const handleExpenseCategoryTitleClick = (expenseCategoryId) => {
      selectedCounterPartyIds.value = [];
      typeOfOperationFilter.value = "all";
      distributionFilter.value = "all";
      if (expenseCategoryId !== null) {
        selectedExpenseCategoryIds.value = [expenseCategoryId];
      } else {
        selectedExpenseCategoryIds.value = [0];
      }
      getRangeData(true);
    };
    const handleExpenseCategoryValueClick = (type, expenseCategoryId) => {
      selectedCounterPartyIds.value = [];
      distributionFilter.value = "all";
      typeOfOperationFilter.value = type;
      selectedExpenseCategoryIds.value = [
        expenseCategoryId !== null ? expenseCategoryId : 0
      ];
      getRangeData(true);
    };
    const handleCounterPartyTitleClick = (counterPartyId) => {
      selectedExpenseCategoryIds.value = [];
      typeOfOperationFilter.value = "all";
      distributionFilter.value = "all";
      selectedCounterPartyIds.value = [counterPartyId];
      getRangeData(true);
    };
    const handleCounterPartyCategoryClick = (expenseCategoryId, counterPartyId) => {
      typeOfOperationFilter.value = "all";
      distributionFilter.value = "all";
      selectedExpenseCategoryIds.value = [expenseCategoryId];
      selectedCounterPartyIds.value = [counterPartyId];
      getRangeData(true);
    };
    const handleCounterPartyValueClick = (type, counterPartyId) => {
      selectedExpenseCategoryIds.value = [];
      distributionFilter.value = "all";
      typeOfOperationFilter.value = type;
      selectedCounterPartyIds.value = [counterPartyId];
      getRangeData(true);
    };
    watch(
      [range, account],
      async ([_range, _account], [_oldRange, oldAccount]) => {
        if (isInitialLoad.value) return;
        if (oldAccount && oldAccount !== _account) {
          selectedCounterPartyIds.value = [];
          selectedExpenseCategoryIds.value = [];
          typeOfOperationFilter.value = "all";
          distributionFilter.value = "all";
        }
        console.log(
          "Watch triggered - loading operations for account:",
          _account
        );
        await Promise.all([getRangeData(), getOriginalOperationsTotalsWrapper()]);
      },
      { deep: true }
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiSelect = _sfc_main$6$1;
      const _component_UiSelectTrigger = _sfc_main$4$1;
      const _component_UiSelectValue = _sfc_main$5$1;
      const _component_UiSelectContent = _sfc_main$3$1;
      const _component_UiSelectItem = _sfc_main$2$1;
      const _component_UiSeparator = _sfc_main$f;
      const _component_MyPlanfactAccountsCreateModal = _sfc_main$g;
      const _component_UiButton = _sfc_main$h;
      const _component_UiCard = _sfc_main$i;
      const _component_UiCardHeader = _sfc_main$1$1;
      const _component_UiCardTitle = _sfc_main$j;
      const _component_UiCardContent = _sfc_main$k;
      const _component_UiTabs = _sfc_main$2$2;
      const _component_UiTabsList = _sfc_main$l;
      const _component_UiTabsTrigger = _sfc_main$1$2;
      const _component_UiTabsContent = _sfc_main$m;
      const _component_UiInput = _sfc_main$n;
      const _component_UiScrollArea = _sfc_main$o;
      const _component_UiCardFooter = _sfc_main$p;
      const _component_MyPlanfactOperationCreateModal = _sfc_main$b;
      const _component_MyPlanfactOperationsDataTableToolbar = _sfc_main$8;
      const _component_MyPlanfactOperationsDataTable = _sfc_main$7;
      const _component_MyPlanfactRulesRuleModal = _sfc_main$5;
      const _component_MyPlanfactOperationModal = _sfc_main$3;
      const _component_UiDialog = _sfc_main$4$2;
      const _component_UiDialogContent = _sfc_main$q;
      const _component_UiDialogHeader = _sfc_main$2$3;
      const _component_UiDialogTitle = _sfc_main$1$3;
      const _component_UiDialogDescription = _sfc_main$r;
      const _component_MyPlanfactCategoriesListModal = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full" }, _attrs))}><div class="mt-2 flex gap-4"><div class="flex flex-col gap-2"><div class="flex items-center gap-2"><div class="w-[250px] min-w-[250px]">`);
      _push(ssrRenderComponent(unref(Qn), {
        modelValue: unref(range),
        "onUpdate:modelValue": ($event) => isRef(range) ? range.value = $event : null,
        range: "",
        "enable-time-picker": false,
        "auto-apply": "",
        locale: "ru",
        placeholder: "\u0412\u044B\u0431\u0440\u0430\u0442\u044C \u0434\u043D\u0438",
        "select-text": "\u0413\u043E\u0442\u043E\u0432\u043E",
        "cancel-text": "\u0417\u0430\u043A\u0440\u044B\u0442\u044C",
        class: "grow",
        format: formatRange,
        clearable: false
      }, null, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_UiSelect, {
        modelValue: unref(account),
        "onUpdate:modelValue": ($event) => isRef(account) ? account.value = $event : null
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UiSelectTrigger, { class: "w-full" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UiSelectValue, { placeholder: "\u0412\u0441\u0435 \u0441\u0447\u0435\u0442\u0430" }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UiSelectValue, { placeholder: "\u0412\u0441\u0435 \u0441\u0447\u0435\u0442\u0430" })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UiSelectContent, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UiSelectItem, { value: "all" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`\u0412\u0441\u0435 \u0441\u0447\u0435\u0442\u0430`);
                      } else {
                        return [
                          createTextVNode("\u0412\u0441\u0435 \u0441\u0447\u0435\u0442\u0430")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<!--[-->`);
                  ssrRenderList(unref(accounts), (acc, i) => {
                    _push3(ssrRenderComponent(_component_UiSelectItem, {
                      key: i,
                      value: String(acc.value)
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate(acc.label)}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(acc.label), 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  });
                  _push3(`<!--]-->`);
                  _push3(ssrRenderComponent(_component_UiSeparator, { class: "my-1" }, null, _parent3, _scopeId2));
                  _push3(`<div class="p-1 w-full"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_MyPlanfactAccountsCreateModal, { onAccountCreated: unref(getAccounts) }, null, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode(_component_UiSelectItem, { value: "all" }, {
                      default: withCtx(() => [
                        createTextVNode("\u0412\u0441\u0435 \u0441\u0447\u0435\u0442\u0430")
                      ]),
                      _: 1
                    }),
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(accounts), (acc, i) => {
                      return openBlock(), createBlock(_component_UiSelectItem, {
                        key: i,
                        value: String(acc.value)
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(acc.label), 1)
                        ]),
                        _: 2
                      }, 1032, ["value"]);
                    }), 128)),
                    createVNode(_component_UiSeparator, { class: "my-1" }),
                    createVNode("div", { class: "p-1 w-full" }, [
                      createVNode(_component_MyPlanfactAccountsCreateModal, { onAccountCreated: unref(getAccounts) }, null, 8, ["onAccountCreated"])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UiSelectTrigger, { class: "w-full" }, {
                default: withCtx(() => [
                  createVNode(_component_UiSelectValue, { placeholder: "\u0412\u0441\u0435 \u0441\u0447\u0435\u0442\u0430" })
                ]),
                _: 1
              }),
              createVNode(_component_UiSelectContent, null, {
                default: withCtx(() => [
                  createVNode(_component_UiSelectItem, { value: "all" }, {
                    default: withCtx(() => [
                      createTextVNode("\u0412\u0441\u0435 \u0441\u0447\u0435\u0442\u0430")
                    ]),
                    _: 1
                  }),
                  (openBlock(true), createBlock(Fragment, null, renderList(unref(accounts), (acc, i) => {
                    return openBlock(), createBlock(_component_UiSelectItem, {
                      key: i,
                      value: String(acc.value)
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(acc.label), 1)
                      ]),
                      _: 2
                    }, 1032, ["value"]);
                  }), 128)),
                  createVNode(_component_UiSeparator, { class: "my-1" }),
                  createVNode("div", { class: "p-1 w-full" }, [
                    createVNode(_component_MyPlanfactAccountsCreateModal, { onAccountCreated: unref(getAccounts) }, null, 8, ["onAccountCreated"])
                  ])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UiButton, {
        variant: "outline",
        size: "icon",
        class: "h-10 w-10",
        onClick: ($event) => isAccountsListModalOpen.value = true
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(List), { class: "h-6 w-10" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(List), { class: "h-6 w-10" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_UiCard, { class: "w-[500px] flex-shrink-0 flex flex-col h-[calc(100vh-135px)] relative" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (unref(isLoadingTotals)) {
              _push2(`<div class="absolute inset-0 bg-white/80 backdrop-blur-sm z-50 flex items-center justify-center rounded-lg"${_scopeId}>`);
              _push2(ssrRenderComponent(unref(Loader2), { class: "h-8 w-8 animate-spin text-primary" }, null, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(ssrRenderComponent(_component_UiCardHeader, { class: "p-0 flex-shrink-0" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UiCardTitle, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UiCardTitle)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UiCardContent, { class: "p-2 flex flex-col flex-1 min-h-0" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UiTabs, {
                    modelValue: unref(activeTotalsTab),
                    "onUpdate:modelValue": ($event) => isRef(activeTotalsTab) ? activeTotalsTab.value = $event : null,
                    class: "w-full flex flex-col flex-1 min-h-0"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UiTabsList, { class: "grid w-full grid-cols-2 flex-shrink-0" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_UiTabsTrigger, { value: "categories" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`\u0421\u0442\u0430\u0442\u044C\u0438`);
                                  } else {
                                    return [
                                      createTextVNode("\u0421\u0442\u0430\u0442\u044C\u0438")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_UiTabsTrigger, { value: "counterparties" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`\u041A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442\u044B`);
                                  } else {
                                    return [
                                      createTextVNode("\u041A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442\u044B")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_UiTabsTrigger, { value: "categories" }, {
                                  default: withCtx(() => [
                                    createTextVNode("\u0421\u0442\u0430\u0442\u044C\u0438")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_UiTabsTrigger, { value: "counterparties" }, {
                                  default: withCtx(() => [
                                    createTextVNode("\u041A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442\u044B")
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_UiTabsContent, {
                          value: "categories",
                          class: "mt-4 flex-1 min-h-0 flex flex-col"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<div class="mb-2 flex-shrink-0"${_scopeId4}>`);
                              _push5(ssrRenderComponent(_component_UiInput, {
                                modelValue: unref(categoriesSearchTerm),
                                "onUpdate:modelValue": ($event) => isRef(categoriesSearchTerm) ? categoriesSearchTerm.value = $event : null,
                                placeholder: "\u041F\u043E\u0438\u0441\u043A \u043F\u043E \u0441\u0442\u0430\u0442\u044C\u044F\u043C...",
                                class: "h-8"
                              }, null, _parent5, _scopeId4));
                              _push5(`</div>`);
                              _push5(ssrRenderComponent(_component_UiScrollArea, { class: "flex-1 pr-2" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<div${_scopeId5}><!--[-->`);
                                    ssrRenderList(unref(filteredExpenseCategoryTotals), (item, index) => {
                                      _push6(`<!--[--><div class="p-1 rounded-md"${_scopeId5}><div class="flex items-center gap-2"${_scopeId5}><span class="text-sm font-medium truncate pr-2 flex-1 min-w-0 hover:bg-slate-100 rounded px-1 py-0.5 cursor-pointer transition-colors"${_scopeId5}>${ssrInterpolate(item.title)}</span><div class="flex gap-1 items-end flex-col flex-shrink-0"${_scopeId5}>`);
                                      if (item.credit !== 0) {
                                        _push6(`<span class="text-xs font-semibold whitespace-nowrap text-green-600 hover:bg-slate-100 rounded px-1 py-0.5 cursor-pointer transition-colors"${_scopeId5}> +${ssrInterpolate(formatPrice(item.credit))}</span>`);
                                      } else {
                                        _push6(`<!---->`);
                                      }
                                      if (item.transfer !== 0) {
                                        _push6(`<span class="text-xs font-semibold whitespace-nowrap text-slate-500 hover:bg-slate-100 rounded px-1 py-0.5 cursor-pointer transition-colors"${_scopeId5}> \xB1${ssrInterpolate(formatPrice(item.transfer))}</span>`);
                                      } else {
                                        _push6(`<!---->`);
                                      }
                                      if (item.debit !== 0) {
                                        _push6(`<span class="text-xs font-semibold whitespace-nowrap text-red-500 hover:bg-slate-100 rounded px-1 py-0.5 cursor-pointer transition-colors"${_scopeId5}> \u2212${ssrInterpolate(formatPrice(item.debit))}</span>`);
                                      } else {
                                        _push6(`<!---->`);
                                      }
                                      _push6(`</div></div></div>`);
                                      if (index < unref(filteredExpenseCategoryTotals).length - 1) {
                                        _push6(ssrRenderComponent(_component_UiSeparator, { class: "my-1" }, null, _parent6, _scopeId5));
                                      } else {
                                        _push6(`<!---->`);
                                      }
                                      _push6(`<!--]-->`);
                                    });
                                    _push6(`<!--]-->`);
                                    if (unref(filteredExpenseCategoryTotals).length === 0) {
                                      _push6(`<div class="text-sm text-slate-400 text-center py-4"${_scopeId5}>${ssrInterpolate(unref(categoriesSearchTerm) ? "\u041D\u0435\u0442 \u0441\u043E\u0432\u043F\u0430\u0434\u0435\u043D\u0438\u0439" : "\u041D\u0435\u0442 \u0434\u0430\u043D\u043D\u044B\u0445")}</div>`);
                                    } else {
                                      _push6(`<!---->`);
                                    }
                                    _push6(`</div>`);
                                  } else {
                                    return [
                                      createVNode("div", null, [
                                        (openBlock(true), createBlock(Fragment, null, renderList(unref(filteredExpenseCategoryTotals), (item, index) => {
                                          return openBlock(), createBlock(Fragment, { key: index }, [
                                            createVNode("div", { class: "p-1 rounded-md" }, [
                                              createVNode("div", { class: "flex items-center gap-2" }, [
                                                createVNode("span", {
                                                  class: "text-sm font-medium truncate pr-2 flex-1 min-w-0 hover:bg-slate-100 rounded px-1 py-0.5 cursor-pointer transition-colors",
                                                  onClick: ($event) => handleExpenseCategoryTitleClick(
                                                    item.expenseCategoryId
                                                  )
                                                }, toDisplayString(item.title), 9, ["onClick"]),
                                                createVNode("div", { class: "flex gap-1 items-end flex-col flex-shrink-0" }, [
                                                  item.credit !== 0 ? (openBlock(), createBlock("span", {
                                                    key: 0,
                                                    class: "text-xs font-semibold whitespace-nowrap text-green-600 hover:bg-slate-100 rounded px-1 py-0.5 cursor-pointer transition-colors",
                                                    onClick: ($event) => handleExpenseCategoryValueClick(
                                                      "Credit",
                                                      item.expenseCategoryId
                                                    )
                                                  }, " +" + toDisplayString(formatPrice(item.credit)), 9, ["onClick"])) : createCommentVNode("", true),
                                                  item.transfer !== 0 ? (openBlock(), createBlock("span", {
                                                    key: 1,
                                                    class: "text-xs font-semibold whitespace-nowrap text-slate-500 hover:bg-slate-100 rounded px-1 py-0.5 cursor-pointer transition-colors",
                                                    onClick: ($event) => handleExpenseCategoryValueClick(
                                                      "Transfer",
                                                      item.expenseCategoryId
                                                    )
                                                  }, " \xB1" + toDisplayString(formatPrice(item.transfer)), 9, ["onClick"])) : createCommentVNode("", true),
                                                  item.debit !== 0 ? (openBlock(), createBlock("span", {
                                                    key: 2,
                                                    class: "text-xs font-semibold whitespace-nowrap text-red-500 hover:bg-slate-100 rounded px-1 py-0.5 cursor-pointer transition-colors",
                                                    onClick: ($event) => handleExpenseCategoryValueClick(
                                                      "Debit",
                                                      item.expenseCategoryId
                                                    )
                                                  }, " \u2212" + toDisplayString(formatPrice(item.debit)), 9, ["onClick"])) : createCommentVNode("", true)
                                                ])
                                              ])
                                            ]),
                                            index < unref(filteredExpenseCategoryTotals).length - 1 ? (openBlock(), createBlock(_component_UiSeparator, {
                                              key: 0,
                                              class: "my-1"
                                            })) : createCommentVNode("", true)
                                          ], 64);
                                        }), 128)),
                                        unref(filteredExpenseCategoryTotals).length === 0 ? (openBlock(), createBlock("div", {
                                          key: 0,
                                          class: "text-sm text-slate-400 text-center py-4"
                                        }, toDisplayString(unref(categoriesSearchTerm) ? "\u041D\u0435\u0442 \u0441\u043E\u0432\u043F\u0430\u0434\u0435\u043D\u0438\u0439" : "\u041D\u0435\u0442 \u0434\u0430\u043D\u043D\u044B\u0445"), 1)) : createCommentVNode("", true)
                                      ])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode("div", { class: "mb-2 flex-shrink-0" }, [
                                  createVNode(_component_UiInput, {
                                    modelValue: unref(categoriesSearchTerm),
                                    "onUpdate:modelValue": ($event) => isRef(categoriesSearchTerm) ? categoriesSearchTerm.value = $event : null,
                                    placeholder: "\u041F\u043E\u0438\u0441\u043A \u043F\u043E \u0441\u0442\u0430\u0442\u044C\u044F\u043C...",
                                    class: "h-8"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                createVNode(_component_UiScrollArea, { class: "flex-1 pr-2" }, {
                                  default: withCtx(() => [
                                    createVNode("div", null, [
                                      (openBlock(true), createBlock(Fragment, null, renderList(unref(filteredExpenseCategoryTotals), (item, index) => {
                                        return openBlock(), createBlock(Fragment, { key: index }, [
                                          createVNode("div", { class: "p-1 rounded-md" }, [
                                            createVNode("div", { class: "flex items-center gap-2" }, [
                                              createVNode("span", {
                                                class: "text-sm font-medium truncate pr-2 flex-1 min-w-0 hover:bg-slate-100 rounded px-1 py-0.5 cursor-pointer transition-colors",
                                                onClick: ($event) => handleExpenseCategoryTitleClick(
                                                  item.expenseCategoryId
                                                )
                                              }, toDisplayString(item.title), 9, ["onClick"]),
                                              createVNode("div", { class: "flex gap-1 items-end flex-col flex-shrink-0" }, [
                                                item.credit !== 0 ? (openBlock(), createBlock("span", {
                                                  key: 0,
                                                  class: "text-xs font-semibold whitespace-nowrap text-green-600 hover:bg-slate-100 rounded px-1 py-0.5 cursor-pointer transition-colors",
                                                  onClick: ($event) => handleExpenseCategoryValueClick(
                                                    "Credit",
                                                    item.expenseCategoryId
                                                  )
                                                }, " +" + toDisplayString(formatPrice(item.credit)), 9, ["onClick"])) : createCommentVNode("", true),
                                                item.transfer !== 0 ? (openBlock(), createBlock("span", {
                                                  key: 1,
                                                  class: "text-xs font-semibold whitespace-nowrap text-slate-500 hover:bg-slate-100 rounded px-1 py-0.5 cursor-pointer transition-colors",
                                                  onClick: ($event) => handleExpenseCategoryValueClick(
                                                    "Transfer",
                                                    item.expenseCategoryId
                                                  )
                                                }, " \xB1" + toDisplayString(formatPrice(item.transfer)), 9, ["onClick"])) : createCommentVNode("", true),
                                                item.debit !== 0 ? (openBlock(), createBlock("span", {
                                                  key: 2,
                                                  class: "text-xs font-semibold whitespace-nowrap text-red-500 hover:bg-slate-100 rounded px-1 py-0.5 cursor-pointer transition-colors",
                                                  onClick: ($event) => handleExpenseCategoryValueClick(
                                                    "Debit",
                                                    item.expenseCategoryId
                                                  )
                                                }, " \u2212" + toDisplayString(formatPrice(item.debit)), 9, ["onClick"])) : createCommentVNode("", true)
                                              ])
                                            ])
                                          ]),
                                          index < unref(filteredExpenseCategoryTotals).length - 1 ? (openBlock(), createBlock(_component_UiSeparator, {
                                            key: 0,
                                            class: "my-1"
                                          })) : createCommentVNode("", true)
                                        ], 64);
                                      }), 128)),
                                      unref(filteredExpenseCategoryTotals).length === 0 ? (openBlock(), createBlock("div", {
                                        key: 0,
                                        class: "text-sm text-slate-400 text-center py-4"
                                      }, toDisplayString(unref(categoriesSearchTerm) ? "\u041D\u0435\u0442 \u0441\u043E\u0432\u043F\u0430\u0434\u0435\u043D\u0438\u0439" : "\u041D\u0435\u0442 \u0434\u0430\u043D\u043D\u044B\u0445"), 1)) : createCommentVNode("", true)
                                    ])
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_UiTabsContent, {
                          value: "counterparties",
                          class: "mt-4 flex-1 min-h-0 flex flex-col"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<div class="mb-2 flex-shrink-0"${_scopeId4}>`);
                              _push5(ssrRenderComponent(_component_UiInput, {
                                modelValue: unref(counterpartiesSearchTerm),
                                "onUpdate:modelValue": ($event) => isRef(counterpartiesSearchTerm) ? counterpartiesSearchTerm.value = $event : null,
                                placeholder: "\u041F\u043E\u0438\u0441\u043A \u043F\u043E \u043A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442\u0430\u043C...",
                                class: "h-8"
                              }, null, _parent5, _scopeId4));
                              _push5(`</div>`);
                              _push5(ssrRenderComponent(_component_UiScrollArea, { class: "flex-1 pr-2" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<div${_scopeId5}><!--[-->`);
                                    ssrRenderList(unref(filteredCounterPartyTotals), (item, index) => {
                                      _push6(`<!--[--><div class="p-1 rounded-md"${_scopeId5}><div class="flex items-center gap-2"${_scopeId5}><span class="text-sm font-medium truncate flex-1 min-w-0 hover:bg-slate-100 rounded px-1 py-0.5 cursor-pointer transition-colors"${_scopeId5}>${ssrInterpolate(unref(replaceLegalEntities)(item.title))}</span><div class="flex gap-1 items-end flex-col flex-shrink-0"${_scopeId5}>`);
                                      if (item.credit !== 0) {
                                        _push6(`<span class="text-xs font-semibold whitespace-nowrap text-green-600"${_scopeId5}>`);
                                        if (item.incomeExpenseCategory) {
                                          _push6(`<span class="text-slate-500 font-normal mr-1 hover:bg-slate-100 rounded px-1 py-0.5 cursor-pointer transition-colors"${_scopeId5}>${ssrInterpolate(item.incomeExpenseCategory.name)}: </span>`);
                                        } else {
                                          _push6(`<!---->`);
                                        }
                                        _push6(`<span class="hover:bg-slate-100 rounded px-1 py-0.5 cursor-pointer transition-colors"${_scopeId5}> +${ssrInterpolate(formatPrice(item.credit))}</span></span>`);
                                      } else {
                                        _push6(`<!---->`);
                                      }
                                      if (item.transfer !== 0) {
                                        _push6(`<span class="text-xs font-semibold whitespace-nowrap text-slate-500 hover:bg-slate-100 rounded px-1 py-0.5 cursor-pointer transition-colors"${_scopeId5}> \xB1${ssrInterpolate(formatPrice(item.transfer))}</span>`);
                                      } else {
                                        _push6(`<!---->`);
                                      }
                                      if (item.debit !== 0) {
                                        _push6(`<span class="text-xs font-semibold whitespace-nowrap text-red-500"${_scopeId5}>`);
                                        if (item.outcomeExpenseCategory) {
                                          _push6(`<span class="text-slate-500 font-normal mr-1 hover:bg-slate-100 rounded px-1 py-0.5 cursor-pointer transition-colors"${_scopeId5}>${ssrInterpolate(item.outcomeExpenseCategory.name)}: </span>`);
                                        } else {
                                          _push6(`<!---->`);
                                        }
                                        _push6(`<span class="hover:bg-slate-100 rounded px-1 py-0.5 cursor-pointer transition-colors"${_scopeId5}> \u2212${ssrInterpolate(formatPrice(item.debit))}</span></span>`);
                                      } else {
                                        _push6(`<!---->`);
                                      }
                                      _push6(`</div></div></div>`);
                                      if (index < unref(filteredCounterPartyTotals).length - 1) {
                                        _push6(ssrRenderComponent(_component_UiSeparator, { class: "my-1" }, null, _parent6, _scopeId5));
                                      } else {
                                        _push6(`<!---->`);
                                      }
                                      _push6(`<!--]-->`);
                                    });
                                    _push6(`<!--]-->`);
                                    if (unref(filteredCounterPartyTotals).length === 0) {
                                      _push6(`<div class="text-sm text-slate-400 text-center py-4"${_scopeId5}>${ssrInterpolate(unref(counterpartiesSearchTerm) ? "\u041D\u0435\u0442 \u0441\u043E\u0432\u043F\u0430\u0434\u0435\u043D\u0438\u0439" : "\u041D\u0435\u0442 \u0434\u0430\u043D\u043D\u044B\u0445")}</div>`);
                                    } else {
                                      _push6(`<!---->`);
                                    }
                                    _push6(`</div>`);
                                  } else {
                                    return [
                                      createVNode("div", null, [
                                        (openBlock(true), createBlock(Fragment, null, renderList(unref(filteredCounterPartyTotals), (item, index) => {
                                          return openBlock(), createBlock(Fragment, { key: index }, [
                                            createVNode("div", { class: "p-1 rounded-md" }, [
                                              createVNode("div", { class: "flex items-center gap-2" }, [
                                                createVNode("span", {
                                                  class: "text-sm font-medium truncate flex-1 min-w-0 hover:bg-slate-100 rounded px-1 py-0.5 cursor-pointer transition-colors",
                                                  onClick: ($event) => handleCounterPartyTitleClick(item.counterPartyId)
                                                }, toDisplayString(unref(replaceLegalEntities)(item.title)), 9, ["onClick"]),
                                                createVNode("div", { class: "flex gap-1 items-end flex-col flex-shrink-0" }, [
                                                  item.credit !== 0 ? (openBlock(), createBlock("span", {
                                                    key: 0,
                                                    class: "text-xs font-semibold whitespace-nowrap text-green-600"
                                                  }, [
                                                    item.incomeExpenseCategory ? (openBlock(), createBlock("span", {
                                                      key: 0,
                                                      class: "text-slate-500 font-normal mr-1 hover:bg-slate-100 rounded px-1 py-0.5 cursor-pointer transition-colors",
                                                      onClick: ($event) => handleCounterPartyCategoryClick(
                                                        item.incomeExpenseCategory.id,
                                                        item.counterPartyId
                                                      )
                                                    }, toDisplayString(item.incomeExpenseCategory.name) + ": ", 9, ["onClick"])) : createCommentVNode("", true),
                                                    createVNode("span", {
                                                      class: "hover:bg-slate-100 rounded px-1 py-0.5 cursor-pointer transition-colors",
                                                      onClick: ($event) => handleCounterPartyValueClick(
                                                        "Credit",
                                                        item.counterPartyId
                                                      )
                                                    }, " +" + toDisplayString(formatPrice(item.credit)), 9, ["onClick"])
                                                  ])) : createCommentVNode("", true),
                                                  item.transfer !== 0 ? (openBlock(), createBlock("span", {
                                                    key: 1,
                                                    class: "text-xs font-semibold whitespace-nowrap text-slate-500 hover:bg-slate-100 rounded px-1 py-0.5 cursor-pointer transition-colors",
                                                    onClick: ($event) => handleCounterPartyValueClick(
                                                      "Transfer",
                                                      item.counterPartyId
                                                    )
                                                  }, " \xB1" + toDisplayString(formatPrice(item.transfer)), 9, ["onClick"])) : createCommentVNode("", true),
                                                  item.debit !== 0 ? (openBlock(), createBlock("span", {
                                                    key: 2,
                                                    class: "text-xs font-semibold whitespace-nowrap text-red-500"
                                                  }, [
                                                    item.outcomeExpenseCategory ? (openBlock(), createBlock("span", {
                                                      key: 0,
                                                      class: "text-slate-500 font-normal mr-1 hover:bg-slate-100 rounded px-1 py-0.5 cursor-pointer transition-colors",
                                                      onClick: ($event) => handleCounterPartyCategoryClick(
                                                        item.outcomeExpenseCategory.id,
                                                        item.counterPartyId
                                                      )
                                                    }, toDisplayString(item.outcomeExpenseCategory.name) + ": ", 9, ["onClick"])) : createCommentVNode("", true),
                                                    createVNode("span", {
                                                      class: "hover:bg-slate-100 rounded px-1 py-0.5 cursor-pointer transition-colors",
                                                      onClick: ($event) => handleCounterPartyValueClick(
                                                        "Debit",
                                                        item.counterPartyId
                                                      )
                                                    }, " \u2212" + toDisplayString(formatPrice(item.debit)), 9, ["onClick"])
                                                  ])) : createCommentVNode("", true)
                                                ])
                                              ])
                                            ]),
                                            index < unref(filteredCounterPartyTotals).length - 1 ? (openBlock(), createBlock(_component_UiSeparator, {
                                              key: 0,
                                              class: "my-1"
                                            })) : createCommentVNode("", true)
                                          ], 64);
                                        }), 128)),
                                        unref(filteredCounterPartyTotals).length === 0 ? (openBlock(), createBlock("div", {
                                          key: 0,
                                          class: "text-sm text-slate-400 text-center py-4"
                                        }, toDisplayString(unref(counterpartiesSearchTerm) ? "\u041D\u0435\u0442 \u0441\u043E\u0432\u043F\u0430\u0434\u0435\u043D\u0438\u0439" : "\u041D\u0435\u0442 \u0434\u0430\u043D\u043D\u044B\u0445"), 1)) : createCommentVNode("", true)
                                      ])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode("div", { class: "mb-2 flex-shrink-0" }, [
                                  createVNode(_component_UiInput, {
                                    modelValue: unref(counterpartiesSearchTerm),
                                    "onUpdate:modelValue": ($event) => isRef(counterpartiesSearchTerm) ? counterpartiesSearchTerm.value = $event : null,
                                    placeholder: "\u041F\u043E\u0438\u0441\u043A \u043F\u043E \u043A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442\u0430\u043C...",
                                    class: "h-8"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                createVNode(_component_UiScrollArea, { class: "flex-1 pr-2" }, {
                                  default: withCtx(() => [
                                    createVNode("div", null, [
                                      (openBlock(true), createBlock(Fragment, null, renderList(unref(filteredCounterPartyTotals), (item, index) => {
                                        return openBlock(), createBlock(Fragment, { key: index }, [
                                          createVNode("div", { class: "p-1 rounded-md" }, [
                                            createVNode("div", { class: "flex items-center gap-2" }, [
                                              createVNode("span", {
                                                class: "text-sm font-medium truncate flex-1 min-w-0 hover:bg-slate-100 rounded px-1 py-0.5 cursor-pointer transition-colors",
                                                onClick: ($event) => handleCounterPartyTitleClick(item.counterPartyId)
                                              }, toDisplayString(unref(replaceLegalEntities)(item.title)), 9, ["onClick"]),
                                              createVNode("div", { class: "flex gap-1 items-end flex-col flex-shrink-0" }, [
                                                item.credit !== 0 ? (openBlock(), createBlock("span", {
                                                  key: 0,
                                                  class: "text-xs font-semibold whitespace-nowrap text-green-600"
                                                }, [
                                                  item.incomeExpenseCategory ? (openBlock(), createBlock("span", {
                                                    key: 0,
                                                    class: "text-slate-500 font-normal mr-1 hover:bg-slate-100 rounded px-1 py-0.5 cursor-pointer transition-colors",
                                                    onClick: ($event) => handleCounterPartyCategoryClick(
                                                      item.incomeExpenseCategory.id,
                                                      item.counterPartyId
                                                    )
                                                  }, toDisplayString(item.incomeExpenseCategory.name) + ": ", 9, ["onClick"])) : createCommentVNode("", true),
                                                  createVNode("span", {
                                                    class: "hover:bg-slate-100 rounded px-1 py-0.5 cursor-pointer transition-colors",
                                                    onClick: ($event) => handleCounterPartyValueClick(
                                                      "Credit",
                                                      item.counterPartyId
                                                    )
                                                  }, " +" + toDisplayString(formatPrice(item.credit)), 9, ["onClick"])
                                                ])) : createCommentVNode("", true),
                                                item.transfer !== 0 ? (openBlock(), createBlock("span", {
                                                  key: 1,
                                                  class: "text-xs font-semibold whitespace-nowrap text-slate-500 hover:bg-slate-100 rounded px-1 py-0.5 cursor-pointer transition-colors",
                                                  onClick: ($event) => handleCounterPartyValueClick(
                                                    "Transfer",
                                                    item.counterPartyId
                                                  )
                                                }, " \xB1" + toDisplayString(formatPrice(item.transfer)), 9, ["onClick"])) : createCommentVNode("", true),
                                                item.debit !== 0 ? (openBlock(), createBlock("span", {
                                                  key: 2,
                                                  class: "text-xs font-semibold whitespace-nowrap text-red-500"
                                                }, [
                                                  item.outcomeExpenseCategory ? (openBlock(), createBlock("span", {
                                                    key: 0,
                                                    class: "text-slate-500 font-normal mr-1 hover:bg-slate-100 rounded px-1 py-0.5 cursor-pointer transition-colors",
                                                    onClick: ($event) => handleCounterPartyCategoryClick(
                                                      item.outcomeExpenseCategory.id,
                                                      item.counterPartyId
                                                    )
                                                  }, toDisplayString(item.outcomeExpenseCategory.name) + ": ", 9, ["onClick"])) : createCommentVNode("", true),
                                                  createVNode("span", {
                                                    class: "hover:bg-slate-100 rounded px-1 py-0.5 cursor-pointer transition-colors",
                                                    onClick: ($event) => handleCounterPartyValueClick(
                                                      "Debit",
                                                      item.counterPartyId
                                                    )
                                                  }, " \u2212" + toDisplayString(formatPrice(item.debit)), 9, ["onClick"])
                                                ])) : createCommentVNode("", true)
                                              ])
                                            ])
                                          ]),
                                          index < unref(filteredCounterPartyTotals).length - 1 ? (openBlock(), createBlock(_component_UiSeparator, {
                                            key: 0,
                                            class: "my-1"
                                          })) : createCommentVNode("", true)
                                        ], 64);
                                      }), 128)),
                                      unref(filteredCounterPartyTotals).length === 0 ? (openBlock(), createBlock("div", {
                                        key: 0,
                                        class: "text-sm text-slate-400 text-center py-4"
                                      }, toDisplayString(unref(counterpartiesSearchTerm) ? "\u041D\u0435\u0442 \u0441\u043E\u0432\u043F\u0430\u0434\u0435\u043D\u0438\u0439" : "\u041D\u0435\u0442 \u0434\u0430\u043D\u043D\u044B\u0445"), 1)) : createCommentVNode("", true)
                                    ])
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
                          createVNode(_component_UiTabsList, { class: "grid w-full grid-cols-2 flex-shrink-0" }, {
                            default: withCtx(() => [
                              createVNode(_component_UiTabsTrigger, { value: "categories" }, {
                                default: withCtx(() => [
                                  createTextVNode("\u0421\u0442\u0430\u0442\u044C\u0438")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_UiTabsTrigger, { value: "counterparties" }, {
                                default: withCtx(() => [
                                  createTextVNode("\u041A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442\u044B")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UiTabsContent, {
                            value: "categories",
                            class: "mt-4 flex-1 min-h-0 flex flex-col"
                          }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "mb-2 flex-shrink-0" }, [
                                createVNode(_component_UiInput, {
                                  modelValue: unref(categoriesSearchTerm),
                                  "onUpdate:modelValue": ($event) => isRef(categoriesSearchTerm) ? categoriesSearchTerm.value = $event : null,
                                  placeholder: "\u041F\u043E\u0438\u0441\u043A \u043F\u043E \u0441\u0442\u0430\u0442\u044C\u044F\u043C...",
                                  class: "h-8"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              createVNode(_component_UiScrollArea, { class: "flex-1 pr-2" }, {
                                default: withCtx(() => [
                                  createVNode("div", null, [
                                    (openBlock(true), createBlock(Fragment, null, renderList(unref(filteredExpenseCategoryTotals), (item, index) => {
                                      return openBlock(), createBlock(Fragment, { key: index }, [
                                        createVNode("div", { class: "p-1 rounded-md" }, [
                                          createVNode("div", { class: "flex items-center gap-2" }, [
                                            createVNode("span", {
                                              class: "text-sm font-medium truncate pr-2 flex-1 min-w-0 hover:bg-slate-100 rounded px-1 py-0.5 cursor-pointer transition-colors",
                                              onClick: ($event) => handleExpenseCategoryTitleClick(
                                                item.expenseCategoryId
                                              )
                                            }, toDisplayString(item.title), 9, ["onClick"]),
                                            createVNode("div", { class: "flex gap-1 items-end flex-col flex-shrink-0" }, [
                                              item.credit !== 0 ? (openBlock(), createBlock("span", {
                                                key: 0,
                                                class: "text-xs font-semibold whitespace-nowrap text-green-600 hover:bg-slate-100 rounded px-1 py-0.5 cursor-pointer transition-colors",
                                                onClick: ($event) => handleExpenseCategoryValueClick(
                                                  "Credit",
                                                  item.expenseCategoryId
                                                )
                                              }, " +" + toDisplayString(formatPrice(item.credit)), 9, ["onClick"])) : createCommentVNode("", true),
                                              item.transfer !== 0 ? (openBlock(), createBlock("span", {
                                                key: 1,
                                                class: "text-xs font-semibold whitespace-nowrap text-slate-500 hover:bg-slate-100 rounded px-1 py-0.5 cursor-pointer transition-colors",
                                                onClick: ($event) => handleExpenseCategoryValueClick(
                                                  "Transfer",
                                                  item.expenseCategoryId
                                                )
                                              }, " \xB1" + toDisplayString(formatPrice(item.transfer)), 9, ["onClick"])) : createCommentVNode("", true),
                                              item.debit !== 0 ? (openBlock(), createBlock("span", {
                                                key: 2,
                                                class: "text-xs font-semibold whitespace-nowrap text-red-500 hover:bg-slate-100 rounded px-1 py-0.5 cursor-pointer transition-colors",
                                                onClick: ($event) => handleExpenseCategoryValueClick(
                                                  "Debit",
                                                  item.expenseCategoryId
                                                )
                                              }, " \u2212" + toDisplayString(formatPrice(item.debit)), 9, ["onClick"])) : createCommentVNode("", true)
                                            ])
                                          ])
                                        ]),
                                        index < unref(filteredExpenseCategoryTotals).length - 1 ? (openBlock(), createBlock(_component_UiSeparator, {
                                          key: 0,
                                          class: "my-1"
                                        })) : createCommentVNode("", true)
                                      ], 64);
                                    }), 128)),
                                    unref(filteredExpenseCategoryTotals).length === 0 ? (openBlock(), createBlock("div", {
                                      key: 0,
                                      class: "text-sm text-slate-400 text-center py-4"
                                    }, toDisplayString(unref(categoriesSearchTerm) ? "\u041D\u0435\u0442 \u0441\u043E\u0432\u043F\u0430\u0434\u0435\u043D\u0438\u0439" : "\u041D\u0435\u0442 \u0434\u0430\u043D\u043D\u044B\u0445"), 1)) : createCommentVNode("", true)
                                  ])
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UiTabsContent, {
                            value: "counterparties",
                            class: "mt-4 flex-1 min-h-0 flex flex-col"
                          }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "mb-2 flex-shrink-0" }, [
                                createVNode(_component_UiInput, {
                                  modelValue: unref(counterpartiesSearchTerm),
                                  "onUpdate:modelValue": ($event) => isRef(counterpartiesSearchTerm) ? counterpartiesSearchTerm.value = $event : null,
                                  placeholder: "\u041F\u043E\u0438\u0441\u043A \u043F\u043E \u043A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442\u0430\u043C...",
                                  class: "h-8"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              createVNode(_component_UiScrollArea, { class: "flex-1 pr-2" }, {
                                default: withCtx(() => [
                                  createVNode("div", null, [
                                    (openBlock(true), createBlock(Fragment, null, renderList(unref(filteredCounterPartyTotals), (item, index) => {
                                      return openBlock(), createBlock(Fragment, { key: index }, [
                                        createVNode("div", { class: "p-1 rounded-md" }, [
                                          createVNode("div", { class: "flex items-center gap-2" }, [
                                            createVNode("span", {
                                              class: "text-sm font-medium truncate flex-1 min-w-0 hover:bg-slate-100 rounded px-1 py-0.5 cursor-pointer transition-colors",
                                              onClick: ($event) => handleCounterPartyTitleClick(item.counterPartyId)
                                            }, toDisplayString(unref(replaceLegalEntities)(item.title)), 9, ["onClick"]),
                                            createVNode("div", { class: "flex gap-1 items-end flex-col flex-shrink-0" }, [
                                              item.credit !== 0 ? (openBlock(), createBlock("span", {
                                                key: 0,
                                                class: "text-xs font-semibold whitespace-nowrap text-green-600"
                                              }, [
                                                item.incomeExpenseCategory ? (openBlock(), createBlock("span", {
                                                  key: 0,
                                                  class: "text-slate-500 font-normal mr-1 hover:bg-slate-100 rounded px-1 py-0.5 cursor-pointer transition-colors",
                                                  onClick: ($event) => handleCounterPartyCategoryClick(
                                                    item.incomeExpenseCategory.id,
                                                    item.counterPartyId
                                                  )
                                                }, toDisplayString(item.incomeExpenseCategory.name) + ": ", 9, ["onClick"])) : createCommentVNode("", true),
                                                createVNode("span", {
                                                  class: "hover:bg-slate-100 rounded px-1 py-0.5 cursor-pointer transition-colors",
                                                  onClick: ($event) => handleCounterPartyValueClick(
                                                    "Credit",
                                                    item.counterPartyId
                                                  )
                                                }, " +" + toDisplayString(formatPrice(item.credit)), 9, ["onClick"])
                                              ])) : createCommentVNode("", true),
                                              item.transfer !== 0 ? (openBlock(), createBlock("span", {
                                                key: 1,
                                                class: "text-xs font-semibold whitespace-nowrap text-slate-500 hover:bg-slate-100 rounded px-1 py-0.5 cursor-pointer transition-colors",
                                                onClick: ($event) => handleCounterPartyValueClick(
                                                  "Transfer",
                                                  item.counterPartyId
                                                )
                                              }, " \xB1" + toDisplayString(formatPrice(item.transfer)), 9, ["onClick"])) : createCommentVNode("", true),
                                              item.debit !== 0 ? (openBlock(), createBlock("span", {
                                                key: 2,
                                                class: "text-xs font-semibold whitespace-nowrap text-red-500"
                                              }, [
                                                item.outcomeExpenseCategory ? (openBlock(), createBlock("span", {
                                                  key: 0,
                                                  class: "text-slate-500 font-normal mr-1 hover:bg-slate-100 rounded px-1 py-0.5 cursor-pointer transition-colors",
                                                  onClick: ($event) => handleCounterPartyCategoryClick(
                                                    item.outcomeExpenseCategory.id,
                                                    item.counterPartyId
                                                  )
                                                }, toDisplayString(item.outcomeExpenseCategory.name) + ": ", 9, ["onClick"])) : createCommentVNode("", true),
                                                createVNode("span", {
                                                  class: "hover:bg-slate-100 rounded px-1 py-0.5 cursor-pointer transition-colors",
                                                  onClick: ($event) => handleCounterPartyValueClick(
                                                    "Debit",
                                                    item.counterPartyId
                                                  )
                                                }, " \u2212" + toDisplayString(formatPrice(item.debit)), 9, ["onClick"])
                                              ])) : createCommentVNode("", true)
                                            ])
                                          ])
                                        ]),
                                        index < unref(filteredCounterPartyTotals).length - 1 ? (openBlock(), createBlock(_component_UiSeparator, {
                                          key: 0,
                                          class: "my-1"
                                        })) : createCommentVNode("", true)
                                      ], 64);
                                    }), 128)),
                                    unref(filteredCounterPartyTotals).length === 0 ? (openBlock(), createBlock("div", {
                                      key: 0,
                                      class: "text-sm text-slate-400 text-center py-4"
                                    }, toDisplayString(unref(counterpartiesSearchTerm) ? "\u041D\u0435\u0442 \u0441\u043E\u0432\u043F\u0430\u0434\u0435\u043D\u0438\u0439" : "\u041D\u0435\u0442 \u0434\u0430\u043D\u043D\u044B\u0445"), 1)) : createCommentVNode("", true)
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
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UiTabs, {
                      modelValue: unref(activeTotalsTab),
                      "onUpdate:modelValue": ($event) => isRef(activeTotalsTab) ? activeTotalsTab.value = $event : null,
                      class: "w-full flex flex-col flex-1 min-h-0"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_UiTabsList, { class: "grid w-full grid-cols-2 flex-shrink-0" }, {
                          default: withCtx(() => [
                            createVNode(_component_UiTabsTrigger, { value: "categories" }, {
                              default: withCtx(() => [
                                createTextVNode("\u0421\u0442\u0430\u0442\u044C\u0438")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_UiTabsTrigger, { value: "counterparties" }, {
                              default: withCtx(() => [
                                createTextVNode("\u041A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442\u044B")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UiTabsContent, {
                          value: "categories",
                          class: "mt-4 flex-1 min-h-0 flex flex-col"
                        }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "mb-2 flex-shrink-0" }, [
                              createVNode(_component_UiInput, {
                                modelValue: unref(categoriesSearchTerm),
                                "onUpdate:modelValue": ($event) => isRef(categoriesSearchTerm) ? categoriesSearchTerm.value = $event : null,
                                placeholder: "\u041F\u043E\u0438\u0441\u043A \u043F\u043E \u0441\u0442\u0430\u0442\u044C\u044F\u043C...",
                                class: "h-8"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            createVNode(_component_UiScrollArea, { class: "flex-1 pr-2" }, {
                              default: withCtx(() => [
                                createVNode("div", null, [
                                  (openBlock(true), createBlock(Fragment, null, renderList(unref(filteredExpenseCategoryTotals), (item, index) => {
                                    return openBlock(), createBlock(Fragment, { key: index }, [
                                      createVNode("div", { class: "p-1 rounded-md" }, [
                                        createVNode("div", { class: "flex items-center gap-2" }, [
                                          createVNode("span", {
                                            class: "text-sm font-medium truncate pr-2 flex-1 min-w-0 hover:bg-slate-100 rounded px-1 py-0.5 cursor-pointer transition-colors",
                                            onClick: ($event) => handleExpenseCategoryTitleClick(
                                              item.expenseCategoryId
                                            )
                                          }, toDisplayString(item.title), 9, ["onClick"]),
                                          createVNode("div", { class: "flex gap-1 items-end flex-col flex-shrink-0" }, [
                                            item.credit !== 0 ? (openBlock(), createBlock("span", {
                                              key: 0,
                                              class: "text-xs font-semibold whitespace-nowrap text-green-600 hover:bg-slate-100 rounded px-1 py-0.5 cursor-pointer transition-colors",
                                              onClick: ($event) => handleExpenseCategoryValueClick(
                                                "Credit",
                                                item.expenseCategoryId
                                              )
                                            }, " +" + toDisplayString(formatPrice(item.credit)), 9, ["onClick"])) : createCommentVNode("", true),
                                            item.transfer !== 0 ? (openBlock(), createBlock("span", {
                                              key: 1,
                                              class: "text-xs font-semibold whitespace-nowrap text-slate-500 hover:bg-slate-100 rounded px-1 py-0.5 cursor-pointer transition-colors",
                                              onClick: ($event) => handleExpenseCategoryValueClick(
                                                "Transfer",
                                                item.expenseCategoryId
                                              )
                                            }, " \xB1" + toDisplayString(formatPrice(item.transfer)), 9, ["onClick"])) : createCommentVNode("", true),
                                            item.debit !== 0 ? (openBlock(), createBlock("span", {
                                              key: 2,
                                              class: "text-xs font-semibold whitespace-nowrap text-red-500 hover:bg-slate-100 rounded px-1 py-0.5 cursor-pointer transition-colors",
                                              onClick: ($event) => handleExpenseCategoryValueClick(
                                                "Debit",
                                                item.expenseCategoryId
                                              )
                                            }, " \u2212" + toDisplayString(formatPrice(item.debit)), 9, ["onClick"])) : createCommentVNode("", true)
                                          ])
                                        ])
                                      ]),
                                      index < unref(filteredExpenseCategoryTotals).length - 1 ? (openBlock(), createBlock(_component_UiSeparator, {
                                        key: 0,
                                        class: "my-1"
                                      })) : createCommentVNode("", true)
                                    ], 64);
                                  }), 128)),
                                  unref(filteredExpenseCategoryTotals).length === 0 ? (openBlock(), createBlock("div", {
                                    key: 0,
                                    class: "text-sm text-slate-400 text-center py-4"
                                  }, toDisplayString(unref(categoriesSearchTerm) ? "\u041D\u0435\u0442 \u0441\u043E\u0432\u043F\u0430\u0434\u0435\u043D\u0438\u0439" : "\u041D\u0435\u0442 \u0434\u0430\u043D\u043D\u044B\u0445"), 1)) : createCommentVNode("", true)
                                ])
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UiTabsContent, {
                          value: "counterparties",
                          class: "mt-4 flex-1 min-h-0 flex flex-col"
                        }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "mb-2 flex-shrink-0" }, [
                              createVNode(_component_UiInput, {
                                modelValue: unref(counterpartiesSearchTerm),
                                "onUpdate:modelValue": ($event) => isRef(counterpartiesSearchTerm) ? counterpartiesSearchTerm.value = $event : null,
                                placeholder: "\u041F\u043E\u0438\u0441\u043A \u043F\u043E \u043A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442\u0430\u043C...",
                                class: "h-8"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            createVNode(_component_UiScrollArea, { class: "flex-1 pr-2" }, {
                              default: withCtx(() => [
                                createVNode("div", null, [
                                  (openBlock(true), createBlock(Fragment, null, renderList(unref(filteredCounterPartyTotals), (item, index) => {
                                    return openBlock(), createBlock(Fragment, { key: index }, [
                                      createVNode("div", { class: "p-1 rounded-md" }, [
                                        createVNode("div", { class: "flex items-center gap-2" }, [
                                          createVNode("span", {
                                            class: "text-sm font-medium truncate flex-1 min-w-0 hover:bg-slate-100 rounded px-1 py-0.5 cursor-pointer transition-colors",
                                            onClick: ($event) => handleCounterPartyTitleClick(item.counterPartyId)
                                          }, toDisplayString(unref(replaceLegalEntities)(item.title)), 9, ["onClick"]),
                                          createVNode("div", { class: "flex gap-1 items-end flex-col flex-shrink-0" }, [
                                            item.credit !== 0 ? (openBlock(), createBlock("span", {
                                              key: 0,
                                              class: "text-xs font-semibold whitespace-nowrap text-green-600"
                                            }, [
                                              item.incomeExpenseCategory ? (openBlock(), createBlock("span", {
                                                key: 0,
                                                class: "text-slate-500 font-normal mr-1 hover:bg-slate-100 rounded px-1 py-0.5 cursor-pointer transition-colors",
                                                onClick: ($event) => handleCounterPartyCategoryClick(
                                                  item.incomeExpenseCategory.id,
                                                  item.counterPartyId
                                                )
                                              }, toDisplayString(item.incomeExpenseCategory.name) + ": ", 9, ["onClick"])) : createCommentVNode("", true),
                                              createVNode("span", {
                                                class: "hover:bg-slate-100 rounded px-1 py-0.5 cursor-pointer transition-colors",
                                                onClick: ($event) => handleCounterPartyValueClick(
                                                  "Credit",
                                                  item.counterPartyId
                                                )
                                              }, " +" + toDisplayString(formatPrice(item.credit)), 9, ["onClick"])
                                            ])) : createCommentVNode("", true),
                                            item.transfer !== 0 ? (openBlock(), createBlock("span", {
                                              key: 1,
                                              class: "text-xs font-semibold whitespace-nowrap text-slate-500 hover:bg-slate-100 rounded px-1 py-0.5 cursor-pointer transition-colors",
                                              onClick: ($event) => handleCounterPartyValueClick(
                                                "Transfer",
                                                item.counterPartyId
                                              )
                                            }, " \xB1" + toDisplayString(formatPrice(item.transfer)), 9, ["onClick"])) : createCommentVNode("", true),
                                            item.debit !== 0 ? (openBlock(), createBlock("span", {
                                              key: 2,
                                              class: "text-xs font-semibold whitespace-nowrap text-red-500"
                                            }, [
                                              item.outcomeExpenseCategory ? (openBlock(), createBlock("span", {
                                                key: 0,
                                                class: "text-slate-500 font-normal mr-1 hover:bg-slate-100 rounded px-1 py-0.5 cursor-pointer transition-colors",
                                                onClick: ($event) => handleCounterPartyCategoryClick(
                                                  item.outcomeExpenseCategory.id,
                                                  item.counterPartyId
                                                )
                                              }, toDisplayString(item.outcomeExpenseCategory.name) + ": ", 9, ["onClick"])) : createCommentVNode("", true),
                                              createVNode("span", {
                                                class: "hover:bg-slate-100 rounded px-1 py-0.5 cursor-pointer transition-colors",
                                                onClick: ($event) => handleCounterPartyValueClick(
                                                  "Debit",
                                                  item.counterPartyId
                                                )
                                              }, " \u2212" + toDisplayString(formatPrice(item.debit)), 9, ["onClick"])
                                            ])) : createCommentVNode("", true)
                                          ])
                                        ])
                                      ]),
                                      index < unref(filteredCounterPartyTotals).length - 1 ? (openBlock(), createBlock(_component_UiSeparator, {
                                        key: 0,
                                        class: "my-1"
                                      })) : createCommentVNode("", true)
                                    ], 64);
                                  }), 128)),
                                  unref(filteredCounterPartyTotals).length === 0 ? (openBlock(), createBlock("div", {
                                    key: 0,
                                    class: "text-sm text-slate-400 text-center py-4"
                                  }, toDisplayString(unref(counterpartiesSearchTerm) ? "\u041D\u0435\u0442 \u0441\u043E\u0432\u043F\u0430\u0434\u0435\u043D\u0438\u0439" : "\u041D\u0435\u0442 \u0434\u0430\u043D\u043D\u044B\u0445"), 1)) : createCommentVNode("", true)
                                ])
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UiCardFooter, { class: "p-2 pt-0 border-t border-slate-200" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x;
                if (_push3) {
                  _push3(`<div class="flex gap-1 items-end flex-col flex-shrink-0 w-full"${_scopeId2}><span class="text-xs font-semibold whitespace-nowrap text-green-600"${_scopeId2}> \u0414\u043E\u0445\u043E\u0434\u044B: ${ssrInterpolate(formatPrice((_b = (_a = unref(operationsTotals).mainTotals) == null ? void 0 : _a.credit) != null ? _b : 0))}</span>`);
                  if (((_c = unref(operationsTotals).mainTotals) == null ? void 0 : _c.transfer) !== 0) {
                    _push3(`<span class="text-xs font-semibold whitespace-nowrap text-slate-500"${_scopeId2}> \u041F\u0435\u0440\u0435\u043C\u0435\u0449\u0435\u043D\u0438\u044F: \xB1${ssrInterpolate(formatPrice((_e = (_d = unref(operationsTotals).mainTotals) == null ? void 0 : _d.transfer) != null ? _e : 0))}</span>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`<span class="text-xs font-semibold whitespace-nowrap text-red-500"${_scopeId2}> \u0420\u0430\u0441\u0445\u043E\u0434\u044B: ${ssrInterpolate(formatPrice((_g = (_f = unref(operationsTotals).mainTotals) == null ? void 0 : _f.debit) != null ? _g : 0))}</span><span class="text-xs font-bold whitespace-nowrap"${_scopeId2}> \u0427\u0438\u0441\u0442\u0430\u044F \u043F\u0440\u0438\u0431\u044B\u043B\u044C: ${ssrInterpolate(formatPrice((_i = (_h = unref(operationsTotals).mainTotals) == null ? void 0 : _h.netProfit) != null ? _i : 0))}</span><span class="text-xs font-bold whitespace-nowrap"${_scopeId2}> \u0420\u0435\u043D\u0442\u0430\u0431\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u044C: ${ssrInterpolate((_j = unref(operationsTotals).mainTotals) == null ? void 0 : _j.profitability)}% </span><span class="text-xs font-semibold whitespace-nowrap text-orange-600"${_scopeId2}> \u0414\u0438\u0432\u0438\u0434\u0435\u043D\u0434\u044B: ${ssrInterpolate(formatPrice((_l = (_k = unref(operationsTotals).mainTotals) == null ? void 0 : _k.dividends) != null ? _l : 0))}</span></div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex gap-1 items-end flex-col flex-shrink-0 w-full" }, [
                      createVNode("span", { class: "text-xs font-semibold whitespace-nowrap text-green-600" }, " \u0414\u043E\u0445\u043E\u0434\u044B: " + toDisplayString(formatPrice((_n = (_m = unref(operationsTotals).mainTotals) == null ? void 0 : _m.credit) != null ? _n : 0)), 1),
                      ((_o = unref(operationsTotals).mainTotals) == null ? void 0 : _o.transfer) !== 0 ? (openBlock(), createBlock("span", {
                        key: 0,
                        class: "text-xs font-semibold whitespace-nowrap text-slate-500"
                      }, " \u041F\u0435\u0440\u0435\u043C\u0435\u0449\u0435\u043D\u0438\u044F: \xB1" + toDisplayString(formatPrice((_q = (_p = unref(operationsTotals).mainTotals) == null ? void 0 : _p.transfer) != null ? _q : 0)), 1)) : createCommentVNode("", true),
                      createVNode("span", { class: "text-xs font-semibold whitespace-nowrap text-red-500" }, " \u0420\u0430\u0441\u0445\u043E\u0434\u044B: " + toDisplayString(formatPrice((_s = (_r = unref(operationsTotals).mainTotals) == null ? void 0 : _r.debit) != null ? _s : 0)), 1),
                      createVNode("span", { class: "text-xs font-bold whitespace-nowrap" }, " \u0427\u0438\u0441\u0442\u0430\u044F \u043F\u0440\u0438\u0431\u044B\u043B\u044C: " + toDisplayString(formatPrice((_u = (_t = unref(operationsTotals).mainTotals) == null ? void 0 : _t.netProfit) != null ? _u : 0)), 1),
                      createVNode("span", { class: "text-xs font-bold whitespace-nowrap" }, " \u0420\u0435\u043D\u0442\u0430\u0431\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u044C: " + toDisplayString((_v = unref(operationsTotals).mainTotals) == null ? void 0 : _v.profitability) + "% ", 1),
                      createVNode("span", { class: "text-xs font-semibold whitespace-nowrap text-orange-600" }, " \u0414\u0438\u0432\u0438\u0434\u0435\u043D\u0434\u044B: " + toDisplayString(formatPrice((_x = (_w = unref(operationsTotals).mainTotals) == null ? void 0 : _w.dividends) != null ? _x : 0)), 1)
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              unref(isLoadingTotals) ? (openBlock(), createBlock("div", {
                key: 0,
                class: "absolute inset-0 bg-white/80 backdrop-blur-sm z-50 flex items-center justify-center rounded-lg"
              }, [
                createVNode(unref(Loader2), { class: "h-8 w-8 animate-spin text-primary" })
              ])) : createCommentVNode("", true),
              createVNode(_component_UiCardHeader, { class: "p-0 flex-shrink-0" }, {
                default: withCtx(() => [
                  createVNode(_component_UiCardTitle)
                ]),
                _: 1
              }),
              createVNode(_component_UiCardContent, { class: "p-2 flex flex-col flex-1 min-h-0" }, {
                default: withCtx(() => [
                  createVNode(_component_UiTabs, {
                    modelValue: unref(activeTotalsTab),
                    "onUpdate:modelValue": ($event) => isRef(activeTotalsTab) ? activeTotalsTab.value = $event : null,
                    class: "w-full flex flex-col flex-1 min-h-0"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_UiTabsList, { class: "grid w-full grid-cols-2 flex-shrink-0" }, {
                        default: withCtx(() => [
                          createVNode(_component_UiTabsTrigger, { value: "categories" }, {
                            default: withCtx(() => [
                              createTextVNode("\u0421\u0442\u0430\u0442\u044C\u0438")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UiTabsTrigger, { value: "counterparties" }, {
                            default: withCtx(() => [
                              createTextVNode("\u041A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442\u044B")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_UiTabsContent, {
                        value: "categories",
                        class: "mt-4 flex-1 min-h-0 flex flex-col"
                      }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "mb-2 flex-shrink-0" }, [
                            createVNode(_component_UiInput, {
                              modelValue: unref(categoriesSearchTerm),
                              "onUpdate:modelValue": ($event) => isRef(categoriesSearchTerm) ? categoriesSearchTerm.value = $event : null,
                              placeholder: "\u041F\u043E\u0438\u0441\u043A \u043F\u043E \u0441\u0442\u0430\u0442\u044C\u044F\u043C...",
                              class: "h-8"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          createVNode(_component_UiScrollArea, { class: "flex-1 pr-2" }, {
                            default: withCtx(() => [
                              createVNode("div", null, [
                                (openBlock(true), createBlock(Fragment, null, renderList(unref(filteredExpenseCategoryTotals), (item, index) => {
                                  return openBlock(), createBlock(Fragment, { key: index }, [
                                    createVNode("div", { class: "p-1 rounded-md" }, [
                                      createVNode("div", { class: "flex items-center gap-2" }, [
                                        createVNode("span", {
                                          class: "text-sm font-medium truncate pr-2 flex-1 min-w-0 hover:bg-slate-100 rounded px-1 py-0.5 cursor-pointer transition-colors",
                                          onClick: ($event) => handleExpenseCategoryTitleClick(
                                            item.expenseCategoryId
                                          )
                                        }, toDisplayString(item.title), 9, ["onClick"]),
                                        createVNode("div", { class: "flex gap-1 items-end flex-col flex-shrink-0" }, [
                                          item.credit !== 0 ? (openBlock(), createBlock("span", {
                                            key: 0,
                                            class: "text-xs font-semibold whitespace-nowrap text-green-600 hover:bg-slate-100 rounded px-1 py-0.5 cursor-pointer transition-colors",
                                            onClick: ($event) => handleExpenseCategoryValueClick(
                                              "Credit",
                                              item.expenseCategoryId
                                            )
                                          }, " +" + toDisplayString(formatPrice(item.credit)), 9, ["onClick"])) : createCommentVNode("", true),
                                          item.transfer !== 0 ? (openBlock(), createBlock("span", {
                                            key: 1,
                                            class: "text-xs font-semibold whitespace-nowrap text-slate-500 hover:bg-slate-100 rounded px-1 py-0.5 cursor-pointer transition-colors",
                                            onClick: ($event) => handleExpenseCategoryValueClick(
                                              "Transfer",
                                              item.expenseCategoryId
                                            )
                                          }, " \xB1" + toDisplayString(formatPrice(item.transfer)), 9, ["onClick"])) : createCommentVNode("", true),
                                          item.debit !== 0 ? (openBlock(), createBlock("span", {
                                            key: 2,
                                            class: "text-xs font-semibold whitespace-nowrap text-red-500 hover:bg-slate-100 rounded px-1 py-0.5 cursor-pointer transition-colors",
                                            onClick: ($event) => handleExpenseCategoryValueClick(
                                              "Debit",
                                              item.expenseCategoryId
                                            )
                                          }, " \u2212" + toDisplayString(formatPrice(item.debit)), 9, ["onClick"])) : createCommentVNode("", true)
                                        ])
                                      ])
                                    ]),
                                    index < unref(filteredExpenseCategoryTotals).length - 1 ? (openBlock(), createBlock(_component_UiSeparator, {
                                      key: 0,
                                      class: "my-1"
                                    })) : createCommentVNode("", true)
                                  ], 64);
                                }), 128)),
                                unref(filteredExpenseCategoryTotals).length === 0 ? (openBlock(), createBlock("div", {
                                  key: 0,
                                  class: "text-sm text-slate-400 text-center py-4"
                                }, toDisplayString(unref(categoriesSearchTerm) ? "\u041D\u0435\u0442 \u0441\u043E\u0432\u043F\u0430\u0434\u0435\u043D\u0438\u0439" : "\u041D\u0435\u0442 \u0434\u0430\u043D\u043D\u044B\u0445"), 1)) : createCommentVNode("", true)
                              ])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_UiTabsContent, {
                        value: "counterparties",
                        class: "mt-4 flex-1 min-h-0 flex flex-col"
                      }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "mb-2 flex-shrink-0" }, [
                            createVNode(_component_UiInput, {
                              modelValue: unref(counterpartiesSearchTerm),
                              "onUpdate:modelValue": ($event) => isRef(counterpartiesSearchTerm) ? counterpartiesSearchTerm.value = $event : null,
                              placeholder: "\u041F\u043E\u0438\u0441\u043A \u043F\u043E \u043A\u043E\u043D\u0442\u0440\u0430\u0433\u0435\u043D\u0442\u0430\u043C...",
                              class: "h-8"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          createVNode(_component_UiScrollArea, { class: "flex-1 pr-2" }, {
                            default: withCtx(() => [
                              createVNode("div", null, [
                                (openBlock(true), createBlock(Fragment, null, renderList(unref(filteredCounterPartyTotals), (item, index) => {
                                  return openBlock(), createBlock(Fragment, { key: index }, [
                                    createVNode("div", { class: "p-1 rounded-md" }, [
                                      createVNode("div", { class: "flex items-center gap-2" }, [
                                        createVNode("span", {
                                          class: "text-sm font-medium truncate flex-1 min-w-0 hover:bg-slate-100 rounded px-1 py-0.5 cursor-pointer transition-colors",
                                          onClick: ($event) => handleCounterPartyTitleClick(item.counterPartyId)
                                        }, toDisplayString(unref(replaceLegalEntities)(item.title)), 9, ["onClick"]),
                                        createVNode("div", { class: "flex gap-1 items-end flex-col flex-shrink-0" }, [
                                          item.credit !== 0 ? (openBlock(), createBlock("span", {
                                            key: 0,
                                            class: "text-xs font-semibold whitespace-nowrap text-green-600"
                                          }, [
                                            item.incomeExpenseCategory ? (openBlock(), createBlock("span", {
                                              key: 0,
                                              class: "text-slate-500 font-normal mr-1 hover:bg-slate-100 rounded px-1 py-0.5 cursor-pointer transition-colors",
                                              onClick: ($event) => handleCounterPartyCategoryClick(
                                                item.incomeExpenseCategory.id,
                                                item.counterPartyId
                                              )
                                            }, toDisplayString(item.incomeExpenseCategory.name) + ": ", 9, ["onClick"])) : createCommentVNode("", true),
                                            createVNode("span", {
                                              class: "hover:bg-slate-100 rounded px-1 py-0.5 cursor-pointer transition-colors",
                                              onClick: ($event) => handleCounterPartyValueClick(
                                                "Credit",
                                                item.counterPartyId
                                              )
                                            }, " +" + toDisplayString(formatPrice(item.credit)), 9, ["onClick"])
                                          ])) : createCommentVNode("", true),
                                          item.transfer !== 0 ? (openBlock(), createBlock("span", {
                                            key: 1,
                                            class: "text-xs font-semibold whitespace-nowrap text-slate-500 hover:bg-slate-100 rounded px-1 py-0.5 cursor-pointer transition-colors",
                                            onClick: ($event) => handleCounterPartyValueClick(
                                              "Transfer",
                                              item.counterPartyId
                                            )
                                          }, " \xB1" + toDisplayString(formatPrice(item.transfer)), 9, ["onClick"])) : createCommentVNode("", true),
                                          item.debit !== 0 ? (openBlock(), createBlock("span", {
                                            key: 2,
                                            class: "text-xs font-semibold whitespace-nowrap text-red-500"
                                          }, [
                                            item.outcomeExpenseCategory ? (openBlock(), createBlock("span", {
                                              key: 0,
                                              class: "text-slate-500 font-normal mr-1 hover:bg-slate-100 rounded px-1 py-0.5 cursor-pointer transition-colors",
                                              onClick: ($event) => handleCounterPartyCategoryClick(
                                                item.outcomeExpenseCategory.id,
                                                item.counterPartyId
                                              )
                                            }, toDisplayString(item.outcomeExpenseCategory.name) + ": ", 9, ["onClick"])) : createCommentVNode("", true),
                                            createVNode("span", {
                                              class: "hover:bg-slate-100 rounded px-1 py-0.5 cursor-pointer transition-colors",
                                              onClick: ($event) => handleCounterPartyValueClick(
                                                "Debit",
                                                item.counterPartyId
                                              )
                                            }, " \u2212" + toDisplayString(formatPrice(item.debit)), 9, ["onClick"])
                                          ])) : createCommentVNode("", true)
                                        ])
                                      ])
                                    ]),
                                    index < unref(filteredCounterPartyTotals).length - 1 ? (openBlock(), createBlock(_component_UiSeparator, {
                                      key: 0,
                                      class: "my-1"
                                    })) : createCommentVNode("", true)
                                  ], 64);
                                }), 128)),
                                unref(filteredCounterPartyTotals).length === 0 ? (openBlock(), createBlock("div", {
                                  key: 0,
                                  class: "text-sm text-slate-400 text-center py-4"
                                }, toDisplayString(unref(counterpartiesSearchTerm) ? "\u041D\u0435\u0442 \u0441\u043E\u0432\u043F\u0430\u0434\u0435\u043D\u0438\u0439" : "\u041D\u0435\u0442 \u0434\u0430\u043D\u043D\u044B\u0445"), 1)) : createCommentVNode("", true)
                              ])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                _: 1
              }),
              createVNode(_component_UiCardFooter, { class: "p-2 pt-0 border-t border-slate-200" }, {
                default: withCtx(() => {
                  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l;
                  return [
                    createVNode("div", { class: "flex gap-1 items-end flex-col flex-shrink-0 w-full" }, [
                      createVNode("span", { class: "text-xs font-semibold whitespace-nowrap text-green-600" }, " \u0414\u043E\u0445\u043E\u0434\u044B: " + toDisplayString(formatPrice((_b = (_a = unref(operationsTotals).mainTotals) == null ? void 0 : _a.credit) != null ? _b : 0)), 1),
                      ((_c = unref(operationsTotals).mainTotals) == null ? void 0 : _c.transfer) !== 0 ? (openBlock(), createBlock("span", {
                        key: 0,
                        class: "text-xs font-semibold whitespace-nowrap text-slate-500"
                      }, " \u041F\u0435\u0440\u0435\u043C\u0435\u0449\u0435\u043D\u0438\u044F: \xB1" + toDisplayString(formatPrice((_e = (_d = unref(operationsTotals).mainTotals) == null ? void 0 : _d.transfer) != null ? _e : 0)), 1)) : createCommentVNode("", true),
                      createVNode("span", { class: "text-xs font-semibold whitespace-nowrap text-red-500" }, " \u0420\u0430\u0441\u0445\u043E\u0434\u044B: " + toDisplayString(formatPrice((_g = (_f = unref(operationsTotals).mainTotals) == null ? void 0 : _f.debit) != null ? _g : 0)), 1),
                      createVNode("span", { class: "text-xs font-bold whitespace-nowrap" }, " \u0427\u0438\u0441\u0442\u0430\u044F \u043F\u0440\u0438\u0431\u044B\u043B\u044C: " + toDisplayString(formatPrice((_i = (_h = unref(operationsTotals).mainTotals) == null ? void 0 : _h.netProfit) != null ? _i : 0)), 1),
                      createVNode("span", { class: "text-xs font-bold whitespace-nowrap" }, " \u0420\u0435\u043D\u0442\u0430\u0431\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u044C: " + toDisplayString((_j = unref(operationsTotals).mainTotals) == null ? void 0 : _j.profitability) + "% ", 1),
                      createVNode("span", { class: "text-xs font-semibold whitespace-nowrap text-orange-600" }, " \u0414\u0438\u0432\u0438\u0434\u0435\u043D\u0434\u044B: " + toDisplayString(formatPrice((_l = (_k = unref(operationsTotals).mainTotals) == null ? void 0 : _k.dividends) != null ? _l : 0)), 1)
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
      _push(`</div><div class="flex flex-col flex-1 relative"><div class="flex gap-1 items-center mb-2"><div class="relative max-w-[200px]">`);
      _push(ssrRenderComponent(_component_UiInput, {
        modelValue: unref(searchText),
        "onUpdate:modelValue": ($event) => isRef(searchText) ? searchText.value = $event : null,
        placeholder: "\u041F\u043E\u0438\u0441\u043A \u043F\u043E \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u044F\u043C...",
        class: "max-w-[200px] h-8 z-[1] pr-8",
        onInput: unref(debouncedSearch)
      }, null, _parent));
      if (unref(searchText)) {
        _push(`<button type="button" class="absolute right-2 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors">`);
        _push(ssrRenderComponent(unref(X), { class: "h-4 w-4" }, null, _parent));
        _push(`</button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="flex gap-1 items-center">`);
      _push(ssrRenderComponent(_component_MyPlanfactOperationCreateModal, {
        key: unref(account),
        "account-id": +unref(account),
        onOperationCreated: async () => {
          await getRangeData(true);
        }
      }, null, _parent));
      _push(ssrRenderComponent(_component_UiButton, {
        class: "h-8 z-[1]",
        variant: "outline",
        onClick: () => {
          selectedRule.value = null;
          isRuleModalOpen.value = true;
        }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u041F\u0440\u0430\u0432\u0438\u043B\u0430 `);
          } else {
            return [
              createTextVNode(" \u041F\u0440\u0430\u0432\u0438\u043B\u0430 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="flex justify-between mb-1 mt-[-40px]"><div class="ml-auto">`);
      _push(ssrRenderComponent(_component_MyPlanfactOperationsDataTableToolbar, {
        table: tableStub,
        "counter-parties-filters": unref(counterPartiesFilters),
        "expense-categories-filters": unref(expenseCategoriesFilters),
        "distribution-filter": unref(distributionFilter),
        "type-of-operation-filter": unref(typeOfOperationFilter),
        "selected-counter-party-ids": unref(selectedCounterPartyIds),
        "selected-expense-category-ids": unref(selectedExpenseCategoryIds),
        "counter-parties-filters-pagination": unref(counterPartiesFiltersPagination),
        "is-loading-counter-parties": unref(isLoadingCounterParties),
        "on-counter-parties-load-more": handleCounterPartiesLoadMore,
        "on-counter-parties-search": handleCounterPartiesSearch,
        onCounterPartiesFilterChange: handleCounterPartiesFilterChange,
        onExpenseCategoriesFilterChange: handleExpenseCategoriesFilterChange,
        onDistributionFilterChange: handleDistributionFilterChange,
        onTypeOfOperationFilterChange: handleTypeOfOperationFilterChange
      }, null, _parent));
      _push(`</div></div><div class="relative">`);
      if (unref(isLoadingOperations)) {
        _push(`<div class="absolute inset-0 bg-white/80 backdrop-blur-sm z-50 flex items-center justify-center rounded-lg">`);
        _push(ssrRenderComponent(unref(Loader2), { class: "h-8 w-8 animate-spin text-primary" }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_component_MyPlanfactOperationsDataTable, {
        columns: unref(bankOperationsColumns),
        data: unref(groupedOperationsData),
        "is-loading": unref(isLoadingOperations),
        "is-loading-more": unref(isLoadingMore),
        "has-more": unref(pagination).hasNext,
        "is-initial-load": unref(isInitialLoad),
        onItemClicked: getOperation,
        onLoadMore: handleLoadMore
      }, null, _parent));
      _push(`</div></div></div>`);
      _push(ssrRenderComponent(_component_MyPlanfactRulesRuleModal, {
        "is-open": unref(isRuleModalOpen),
        rule: unref(selectedRule),
        "onUpdate:isOpen": handleRuleModalOpenUpdate,
        onSaved: () => {
          unref(toast)({ title: "\u0423\u0441\u043F\u0435\u0445", description: "\u041F\u0440\u0430\u0432\u0438\u043B\u043E \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u043E." });
        },
        onDeleted: () => {
          unref(toast)({ title: "\u0423\u0434\u0430\u043B\u0435\u043D\u043E", description: "\u041F\u0440\u0430\u0432\u0438\u043B\u043E \u0443\u0434\u0430\u043B\u0435\u043D\u043E." });
        }
      }, null, _parent));
      if (unref(curOperation)) {
        _push(ssrRenderComponent(_component_MyPlanfactOperationModal, {
          key: unref(curOperation).id,
          operation: unref(curOperation),
          "is-open": unref(isOpen),
          "onUpdate:isOpen": ($event) => isOpen.value = $event,
          onRefreshOperations: handleRefreshOperations,
          onDelete: handleOperationDelete,
          onSave: handleOperationSave
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_component_UiDialog, {
        open: unref(isGroupSelectionDialogOpen),
        "onUpdate:open": ($event) => isRef(isGroupSelectionDialogOpen) ? isGroupSelectionDialogOpen.value = $event : null
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UiDialogContent, { class: "max-w-md" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UiDialogHeader, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UiDialogTitle, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u044E`);
                            } else {
                              return [
                                createTextVNode("\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u044E")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_UiDialogDescription, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` \u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u043E\u0434\u043D\u0443 \u0438\u0437 \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u0439 \u043F\u0435\u0440\u0435\u043C\u0435\u0449\u0435\u043D\u0438\u044F \u0434\u043B\u044F \u043F\u0440\u043E\u0441\u043C\u043E\u0442\u0440\u0430 `);
                            } else {
                              return [
                                createTextVNode(" \u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u043E\u0434\u043D\u0443 \u0438\u0437 \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u0439 \u043F\u0435\u0440\u0435\u043C\u0435\u0449\u0435\u043D\u0438\u044F \u0434\u043B\u044F \u043F\u0440\u043E\u0441\u043C\u043E\u0442\u0440\u0430 ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_UiDialogTitle, null, {
                            default: withCtx(() => [
                              createTextVNode("\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u044E")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UiDialogDescription, null, {
                            default: withCtx(() => [
                              createTextVNode(" \u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u043E\u0434\u043D\u0443 \u0438\u0437 \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u0439 \u043F\u0435\u0440\u0435\u043C\u0435\u0449\u0435\u043D\u0438\u044F \u0434\u043B\u044F \u043F\u0440\u043E\u0441\u043C\u043E\u0442\u0440\u0430 ")
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<div class="flex flex-col gap-2 mt-4"${_scopeId2}><!--[-->`);
                  ssrRenderList(unref(groupedOperationsForSelection), (op) => {
                    _push3(ssrRenderComponent(_component_UiButton, {
                      key: op.operationId,
                      variant: "outline",
                      class: "justify-start text-left h-auto py-3",
                      onClick: ($event) => selectOperationFromGroup(op)
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<div class="flex flex-col gap-1"${_scopeId3}><div class="font-semibold"${_scopeId3}>${ssrInterpolate(op.account.name)}</div><div class="text-sm text-slate-500"${_scopeId3}>${ssrInterpolate(formatPrice(Math.abs(op.accountAmount)))}</div>`);
                          if (op.payPurpose) {
                            _push4(`<div class="text-xs text-slate-400 truncate"${_scopeId3}>${ssrInterpolate(op.payPurpose)}</div>`);
                          } else {
                            _push4(`<!---->`);
                          }
                          _push4(`</div>`);
                        } else {
                          return [
                            createVNode("div", { class: "flex flex-col gap-1" }, [
                              createVNode("div", { class: "font-semibold" }, toDisplayString(op.account.name), 1),
                              createVNode("div", { class: "text-sm text-slate-500" }, toDisplayString(formatPrice(Math.abs(op.accountAmount))), 1),
                              op.payPurpose ? (openBlock(), createBlock("div", {
                                key: 0,
                                class: "text-xs text-slate-400 truncate"
                              }, toDisplayString(op.payPurpose), 1)) : createCommentVNode("", true)
                            ])
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  });
                  _push3(`<!--]--></div>`);
                } else {
                  return [
                    createVNode(_component_UiDialogHeader, null, {
                      default: withCtx(() => [
                        createVNode(_component_UiDialogTitle, null, {
                          default: withCtx(() => [
                            createTextVNode("\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u044E")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UiDialogDescription, null, {
                          default: withCtx(() => [
                            createTextVNode(" \u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u043E\u0434\u043D\u0443 \u0438\u0437 \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u0439 \u043F\u0435\u0440\u0435\u043C\u0435\u0449\u0435\u043D\u0438\u044F \u0434\u043B\u044F \u043F\u0440\u043E\u0441\u043C\u043E\u0442\u0440\u0430 ")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode("div", { class: "flex flex-col gap-2 mt-4" }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(unref(groupedOperationsForSelection), (op) => {
                        return openBlock(), createBlock(_component_UiButton, {
                          key: op.operationId,
                          variant: "outline",
                          class: "justify-start text-left h-auto py-3",
                          onClick: ($event) => selectOperationFromGroup(op)
                        }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "flex flex-col gap-1" }, [
                              createVNode("div", { class: "font-semibold" }, toDisplayString(op.account.name), 1),
                              createVNode("div", { class: "text-sm text-slate-500" }, toDisplayString(formatPrice(Math.abs(op.accountAmount))), 1),
                              op.payPurpose ? (openBlock(), createBlock("div", {
                                key: 0,
                                class: "text-xs text-slate-400 truncate"
                              }, toDisplayString(op.payPurpose), 1)) : createCommentVNode("", true)
                            ])
                          ]),
                          _: 2
                        }, 1032, ["onClick"]);
                      }), 128))
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UiDialogContent, { class: "max-w-md" }, {
                default: withCtx(() => [
                  createVNode(_component_UiDialogHeader, null, {
                    default: withCtx(() => [
                      createVNode(_component_UiDialogTitle, null, {
                        default: withCtx(() => [
                          createTextVNode("\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u044E")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_UiDialogDescription, null, {
                        default: withCtx(() => [
                          createTextVNode(" \u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u043E\u0434\u043D\u0443 \u0438\u0437 \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u0439 \u043F\u0435\u0440\u0435\u043C\u0435\u0449\u0435\u043D\u0438\u044F \u0434\u043B\u044F \u043F\u0440\u043E\u0441\u043C\u043E\u0442\u0440\u0430 ")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode("div", { class: "flex flex-col gap-2 mt-4" }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(groupedOperationsForSelection), (op) => {
                      return openBlock(), createBlock(_component_UiButton, {
                        key: op.operationId,
                        variant: "outline",
                        class: "justify-start text-left h-auto py-3",
                        onClick: ($event) => selectOperationFromGroup(op)
                      }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "flex flex-col gap-1" }, [
                            createVNode("div", { class: "font-semibold" }, toDisplayString(op.account.name), 1),
                            createVNode("div", { class: "text-sm text-slate-500" }, toDisplayString(formatPrice(Math.abs(op.accountAmount))), 1),
                            op.payPurpose ? (openBlock(), createBlock("div", {
                              key: 0,
                              class: "text-xs text-slate-400 truncate"
                            }, toDisplayString(op.payPurpose), 1)) : createCommentVNode("", true)
                          ])
                        ]),
                        _: 2
                      }, 1032, ["onClick"]);
                    }), 128))
                  ])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_MyPlanfactCategoriesListModal, {
        "is-open": unref(isAccountsListModalOpen),
        "onUpdate:isOpen": ($event) => isAccountsListModalOpen.value = $event
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/planfact/operations/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-CnEuRGO_.mjs.map
