import { defineComponent, ref, mergeProps, unref, withCtx, createTextVNode, createVNode, toDisplayString, createBlock, openBlock, Fragment, renderList, provide, renderSlot, toValue, inject, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderSlot } from 'vue/server-renderer';
import { useId, Slot } from 'radix-vue';
import { useForm, Field, ErrorMessage, FieldContextKey, useFieldError, useIsFieldTouched, useIsFieldDirty, useIsFieldValid } from 'vee-validate';
import { c as cn } from './utils-TCWotVPY.mjs';
import { _ as _sfc_main$7 } from './Label-Bxzolydd.mjs';
import { _ as _sfc_main$6 } from './Input-DoHPrX2-.mjs';
import { _ as _sfc_main$6$1, a as _sfc_main$4$1, b as _sfc_main$5$1, c as _sfc_main$3$1, d as _sfc_main$2$1 } from './SelectScrollDownButton-JzJI8BsA.mjs';
import { _ as _sfc_main$8 } from './SelectGroup-BKLQULEA.mjs';
import { _ as _sfc_main$9 } from './Switch-BsBEqAPz.mjs';
import { _ as _sfc_main$a } from './index-B6vrBiru.mjs';
import { _ as _sfc_main$b } from './Textarea-oqH4YeW4.mjs';
import { toTypedSchema } from '@vee-validate/zod';
import * as z from 'zod';

const FORM_ITEM_INJECTION_KEY = Symbol();
function useFormField() {
  const fieldContext = inject(FieldContextKey);
  const fieldItemContext = inject(FORM_ITEM_INJECTION_KEY);
  if (!fieldContext)
    throw new Error("useFormField should be used within <FormField>");
  const { name } = fieldContext;
  const id = fieldItemContext;
  const fieldState = {
    valid: useIsFieldValid(name),
    isDirty: useIsFieldDirty(name),
    isTouched: useIsFieldTouched(name),
    error: useFieldError(name)
  };
  return {
    id,
    name,
    formItemId: `${id}-form-item`,
    formDescriptionId: `${id}-form-item-description`,
    formMessageId: `${id}-form-item-message`,
    ...fieldState
  };
}
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "FormControl",
  __ssrInlineRender: true,
  setup(__props) {
    const { error, formItemId, formDescriptionId, formMessageId } = useFormField();
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Slot), mergeProps({
        id: unref(formItemId),
        "aria-describedby": !unref(error) ? `${unref(formDescriptionId)}` : `${unref(formDescriptionId)} ${unref(formMessageId)}`,
        "aria-invalid": !!unref(error)
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
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/form/FormControl.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "FormDescription",
  __ssrInlineRender: true,
  props: {
    class: {}
  },
  setup(__props) {
    const props = __props;
    const { formDescriptionId } = useFormField();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<p${ssrRenderAttrs(mergeProps({
        id: unref(formDescriptionId),
        class: unref(cn)("text-sm text-slate-500 dark:text-slate-400", props.class)
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</p>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/form/FormDescription.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "FormItem",
  __ssrInlineRender: true,
  props: {
    class: {}
  },
  setup(__props) {
    const props = __props;
    const id = useId();
    provide(FORM_ITEM_INJECTION_KEY, id);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: unref(cn)("space-y-2", props.class)
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/form/FormItem.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "FormLabel",
  __ssrInlineRender: true,
  props: {
    for: {},
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(__props) {
    const props = __props;
    const { error, formItemId } = useFormField();
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(_sfc_main$7), mergeProps({
        class: unref(cn)(unref(error) && "text-red-500 dark:text-red-900", props.class),
        for: unref(formItemId)
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
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/form/FormLabel.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "FormMessage",
  __ssrInlineRender: true,
  setup(__props) {
    const { name, formMessageId } = useFormField();
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(ErrorMessage), mergeProps({
        id: unref(formMessageId),
        as: "p",
        name: toValue(unref(name)),
        class: "text-sm font-medium text-red-500 dark:text-red-900"
      }, _attrs), null, _parent));
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/form/FormMessage.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "OrderForm",
  __ssrInlineRender: true,
  props: {
    deal: {},
    order: {}
  },
  emits: ["create-order", "edit-order"],
  setup(__props, { emit: __emit }) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x;
    const props = __props;
    const materials = ["\u041F\u043E\u043B\u0438\u043A\u0430\u0440\u0431\u043E\u043D\u0430\u0442", "\u041F\u0412\u0425"];
    const holeTypes = ["6\u043C\u043C", "9\u043C\u043C", "\u041D\u0435\u0442"];
    const types = ["\u041F\u043E\u043C\u0435\u0449\u0435\u043D\u0438\u0435", "\u0423\u043B\u0438\u0446\u0430"];
    const adapters = ["\u041F\u043E\u043C\u0435\u0449\u0435\u043D\u0438\u0435", "\u0423\u043B\u0438\u0447\u043D\u044B\u0439", "\u041D\u0435\u0442"];
    const fittings = [
      "\u0414\u0435\u0440\u0436\u0430\u0442\u0435\u043B\u0438 \u0445\u0440\u043E\u043C\u0438\u0440\u043E\u0432\u0430\u043D\u044B\u0435",
      "\u0414\u0435\u0440\u0436\u0430\u0442\u0435\u043B\u0438 \u0437\u043E\u043B\u043E\u0442\u044B\u0435",
      "\u0414\u0435\u0440\u0436\u0430\u0442\u0435\u043B\u0438 \u0447\u0435\u0440\u043D\u044B\u0435",
      "\u041A\u0440\u0435\u043F\u043B\u0435\u043D\u0438\u044F \u0434\u043B\u044F \u043E\u043A\u043D\u0430",
      "\u0414\u044E\u0431\u0435\u043B\u044F",
      "\u041F\u0440\u0438\u0441\u043E\u0441\u043A\u0438",
      "\u041D\u0435\u0442"
    ];
    const neonWidths = ["6\u043C\u043C", "8\u043C\u043C", "\u041F\u043E\u0434\u0441\u0432\u0435\u0442\u043A\u0430"];
    const neonColors = [
      "\u043A\u0440\u0430\u0441\u043D\u044B\u0439",
      "\u0441\u0438\u043D\u0438\u0439",
      "\u0433\u043E\u043B\u0443\u0431\u043E\u0439",
      "\u043E\u0440\u0430\u043D\u0436\u0435\u0432\u044B\u0439",
      "\u0444\u0438\u043E\u043B\u0435\u0442\u043E\u0432\u044B\u0439",
      "\u0440\u043E\u0437\u043E\u0432\u044B\u0439",
      "\u0431\u0438\u0440\u044E\u0437\u043E\u0432\u044B\u0439",
      "\u0436\u0435\u043B\u0442\u044B\u0439",
      "\u0437\u0435\u043B\u0435\u043D\u044B\u0439",
      "\u0445\u043E\u043B\u043E\u0434\u043D\u044B\u0439 \u0431\u0435\u043B\u044B\u0439",
      "\u0442\u0435\u043F\u043B\u044B\u0439 \u0431\u0435\u043B\u044B\u0439",
      "\u0441\u043C\u0430\u0440\u0442",
      "rgb"
    ];
    const neonDatas = z.object({
      width: z.enum(neonWidths).default("6\u043C\u043C"),
      length: z.number(),
      color: z.enum(neonColors),
      elements: z.number()
    });
    const newOrderForm = toTypedSchema(
      z.object({
        title: z.string().min(3).default(((_a = props.deal) == null ? void 0 : _a.title) || ((_b = props.order) == null ? void 0 : _b.title) || "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435"),
        material: z.enum(materials).default(((_c = props.order) == null ? void 0 : _c.material) || materials[0]),
        boardWidth: z.number().min(5).max(300).default(((_d = props.order) == null ? void 0 : _d.boardWidth) || 0),
        boardHeight: z.number().min(5).max(300).default(((_e = props.order) == null ? void 0 : _e.boardHeight) || 0),
        holeType: z.enum(holeTypes).default(((_f = props.order) == null ? void 0 : _f.holeType) || holeTypes[0]),
        stand: z.boolean().optional().default(((_g = props.order) == null ? void 0 : _g.stand) || false),
        neons: z.array(neonDatas),
        print: z.boolean().optional().default(((_h = props.order) == null ? void 0 : _h.print) || false),
        printQuality: z.boolean().optional().default(((_i = props.order) == null ? void 0 : _i.printQuality) || false),
        laminate: z.string().optional().default(((_j = props.order) == null ? void 0 : _j.laminate) || ""),
        acrylic: z.string().optional().default(((_k = props.order) == null ? void 0 : _k.acrylic) || ""),
        type: z.enum(types).default(((_l = props.order) == null ? void 0 : _l.type) || types[0]),
        wireLength: z.string().min(2).default(((_m = props.order) == null ? void 0 : _m.wireLength) || "\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442(1\u043C)"),
        elements: z.number().min(1).default(((_n = props.order) == null ? void 0 : _n.elements) || 0),
        gift: z.boolean().optional().default(((_o = props.order) == null ? void 0 : _o.gift) || false),
        gift_elements: z.number().default(((_p = props.order) == null ? void 0 : _p.gift_elements) || 0),
        gift_metrs: z.number().default(((_q = props.order) == null ? void 0 : _q.gift_metrs) || 0),
        adapter: z.enum(adapters).default(((_r = props.order) == null ? void 0 : _r.adapter) || adapters[0]),
        plug: z.string().min(3).default(((_s = props.order) == null ? void 0 : _s.plug) || "\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442(\u0432\u0438\u043B\u043A\u0430)"),
        fitting: z.enum(fittings).default(((_t = props.order) == null ? void 0 : _t.fitting) || "\u041D\u0435\u0442"),
        dimmer: z.boolean().optional().default(((_u = props.order) == null ? void 0 : _u.dimmer) || false),
        giftPack: z.boolean().optional().default(((_v = props.order) == null ? void 0 : _v.giftPack) || false),
        description: z.string().default(((_w = props.order) == null ? void 0 : _w.description) || "")
      })
    );
    const defaultNeonData = [
      {
        width: "6\u043C\u043C",
        length: 0,
        color: "\u043A\u0440\u0430\u0441\u043D\u044B\u0439",
        elements: 0
      }
    ];
    const { isFieldDirty, handleSubmit, values, setValues } = useForm({
      validationSchema: newOrderForm,
      initialValues: {
        neons: [...((_x = props.order) == null ? void 0 : _x.neons) || defaultNeonData]
      }
    });
    const addNeon = () => {
      const newNeon = {
        width: "6\u043C\u043C",
        length: 0,
        color: "\u043A\u0440\u0430\u0441\u043D\u044B\u0439",
        elements: 0
      };
      const neonList = JSON.parse(JSON.stringify(values.neons || []));
      neonList.push(newNeon);
      setValues({ neons: neonList });
    };
    const removeNeon = (index) => {
      console.log(index);
      const updatedNeons = JSON.parse(JSON.stringify(values.neons)).filter(
        (neon, i) => i !== index
      );
      setValues({ neons: updatedNeons });
    };
    const emit = __emit;
    handleSubmit((values2) => {
      try {
        if (props.deal) {
          emit("create-order", values2);
          return console.log("create");
        }
        emit("edit-order", values2);
        console.log("edit");
      } catch (error) {
        console.log(error);
      }
    });
    ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiFormField = Field;
      const _component_UiFormItem = _sfc_main$3;
      const _component_UiFormLabel = _sfc_main$2;
      const _component_UiFormControl = _sfc_main$5;
      const _component_UiInput = _sfc_main$6;
      const _component_UiFormMessage = _sfc_main$1;
      const _component_UiLabel = _sfc_main$7;
      const _component_UiSelect = _sfc_main$6$1;
      const _component_UiSelectTrigger = _sfc_main$4$1;
      const _component_UiSelectValue = _sfc_main$5$1;
      const _component_UiSelectContent = _sfc_main$3$1;
      const _component_UiSelectGroup = _sfc_main$8;
      const _component_UiSelectItem = _sfc_main$2$1;
      const _component_UiSwitch = _sfc_main$9;
      const _component_UiFormDescription = _sfc_main$4;
      const _component_UiButton = _sfc_main$a;
      const _component_UiTextarea = _sfc_main$b;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "" }, _attrs))}><form class="w-full flex flex-col"><div class="flex flex-col gap-6">`);
      _push(ssrRenderComponent(_component_UiFormField, {
        name: "title",
        "validate-on-blur": !unref(isFieldDirty)
      }, {
        default: withCtx(({ componentField }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UiFormItem, { class: "relative" }, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UiFormLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-12px] bg-white rounded-md p-1" }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435`);
                      } else {
                        return [
                          createTextVNode("\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435")
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UiFormControl, null, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UiInput, mergeProps({
                          type: "text",
                          placeholder: "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435"
                        }, componentField), null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_UiInput, mergeProps({
                            type: "text",
                            placeholder: "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435"
                          }, componentField), null, 16)
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UiFormMessage, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UiFormLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-12px] bg-white rounded-md p-1" }, {
                      default: withCtx(() => [
                        createTextVNode("\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_UiFormControl, null, {
                      default: withCtx(() => [
                        createVNode(_component_UiInput, mergeProps({
                          type: "text",
                          placeholder: "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435"
                        }, componentField), null, 16)
                      ]),
                      _: 2
                    }, 1024),
                    createVNode(_component_UiFormMessage)
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UiFormItem, { class: "relative" }, {
                default: withCtx(() => [
                  createVNode(_component_UiFormLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-12px] bg-white rounded-md p-1" }, {
                    default: withCtx(() => [
                      createTextVNode("\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_UiFormControl, null, {
                    default: withCtx(() => [
                      createVNode(_component_UiInput, mergeProps({
                        type: "text",
                        placeholder: "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435"
                      }, componentField), null, 16)
                    ]),
                    _: 2
                  }, 1024),
                  createVNode(_component_UiFormMessage)
                ]),
                _: 2
              }, 1024)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="flex flex-col gap-5"><div class="flex flex-col flex-1 gap-3">`);
      _push(ssrRenderComponent(_component_UiLabel, { class: "mb-3" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u0417\u0430\u0434\u0430\u043D\u0438\u0435 \u043D\u0430 \u0444\u0440\u0435\u0437\u0435\u0440\u043E\u0432\u043A\u0443 `);
          } else {
            return [
              createTextVNode(" \u0417\u0430\u0434\u0430\u043D\u0438\u0435 \u043D\u0430 \u0444\u0440\u0435\u0437\u0435\u0440\u043E\u0432\u043A\u0443 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UiFormField, {
        name: "material",
        "validate-on-blur": !unref(isFieldDirty)
      }, {
        default: withCtx(({ componentField }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UiFormItem, { class: "relative" }, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UiFormLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-12px] bg-white rounded-md p-1" }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`\u041C\u0430\u0442\u0435\u0440\u0438\u0430\u043B`);
                      } else {
                        return [
                          createTextVNode("\u041C\u0430\u0442\u0435\u0440\u0438\u0430\u043B")
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UiSelect, componentField, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UiFormControl, null, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_UiSelectTrigger, null, {
                                default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_UiSelectValue, { placeholder: "Select a verified email to display" }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_UiSelectValue, { placeholder: "Select a verified email to display" })
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_UiSelectTrigger, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_UiSelectValue, { placeholder: "Select a verified email to display" })
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_UiSelectContent, null, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<!--[-->`);
                              ssrRenderList(materials, (item, index) => {
                                _push5(ssrRenderComponent(_component_UiSelectGroup, {
                                  key: materials[index]
                                }, {
                                  default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(_component_UiSelectItem, { value: item }, {
                                        default: withCtx((_5, _push7, _parent7, _scopeId6) => {
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
                                (openBlock(), createBlock(Fragment, null, renderList(materials, (item, index) => {
                                  return createVNode(_component_UiSelectGroup, {
                                    key: materials[index]
                                  }, {
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
                          _: 2
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_UiFormControl, null, {
                            default: withCtx(() => [
                              createVNode(_component_UiSelectTrigger, null, {
                                default: withCtx(() => [
                                  createVNode(_component_UiSelectValue, { placeholder: "Select a verified email to display" })
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UiSelectContent, null, {
                            default: withCtx(() => [
                              (openBlock(), createBlock(Fragment, null, renderList(materials, (item, index) => {
                                return createVNode(_component_UiSelectGroup, {
                                  key: materials[index]
                                }, {
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
                    _: 2
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UiFormMessage, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UiFormLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-12px] bg-white rounded-md p-1" }, {
                      default: withCtx(() => [
                        createTextVNode("\u041C\u0430\u0442\u0435\u0440\u0438\u0430\u043B")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_UiSelect, componentField, {
                      default: withCtx(() => [
                        createVNode(_component_UiFormControl, null, {
                          default: withCtx(() => [
                            createVNode(_component_UiSelectTrigger, null, {
                              default: withCtx(() => [
                                createVNode(_component_UiSelectValue, { placeholder: "Select a verified email to display" })
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UiSelectContent, null, {
                          default: withCtx(() => [
                            (openBlock(), createBlock(Fragment, null, renderList(materials, (item, index) => {
                              return createVNode(_component_UiSelectGroup, {
                                key: materials[index]
                              }, {
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
                      _: 2
                    }, 1040),
                    createVNode(_component_UiFormMessage)
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UiFormItem, { class: "relative" }, {
                default: withCtx(() => [
                  createVNode(_component_UiFormLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-12px] bg-white rounded-md p-1" }, {
                    default: withCtx(() => [
                      createTextVNode("\u041C\u0430\u0442\u0435\u0440\u0438\u0430\u043B")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_UiSelect, componentField, {
                    default: withCtx(() => [
                      createVNode(_component_UiFormControl, null, {
                        default: withCtx(() => [
                          createVNode(_component_UiSelectTrigger, null, {
                            default: withCtx(() => [
                              createVNode(_component_UiSelectValue, { placeholder: "Select a verified email to display" })
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_UiSelectContent, null, {
                        default: withCtx(() => [
                          (openBlock(), createBlock(Fragment, null, renderList(materials, (item, index) => {
                            return createVNode(_component_UiSelectGroup, {
                              key: materials[index]
                            }, {
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
                    _: 2
                  }, 1040),
                  createVNode(_component_UiFormMessage)
                ]),
                _: 2
              }, 1024)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="flex justify-between">`);
      _push(ssrRenderComponent(_component_UiFormField, {
        name: "boardWidth",
        "validate-on-blur": !unref(isFieldDirty)
      }, {
        default: withCtx(({ componentField }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UiFormItem, { class: "relative" }, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UiFormLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-12px] bg-white rounded-md p-1" }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`\u0428\u0438\u0440\u0438\u043D\u0430(\u0441\u043C)`);
                      } else {
                        return [
                          createTextVNode("\u0428\u0438\u0440\u0438\u043D\u0430(\u0441\u043C)")
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UiFormControl, null, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UiInput, mergeProps({ type: "number" }, componentField), null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_UiInput, mergeProps({ type: "number" }, componentField), null, 16)
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UiFormMessage, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UiFormLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-12px] bg-white rounded-md p-1" }, {
                      default: withCtx(() => [
                        createTextVNode("\u0428\u0438\u0440\u0438\u043D\u0430(\u0441\u043C)")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_UiFormControl, null, {
                      default: withCtx(() => [
                        createVNode(_component_UiInput, mergeProps({ type: "number" }, componentField), null, 16)
                      ]),
                      _: 2
                    }, 1024),
                    createVNode(_component_UiFormMessage)
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UiFormItem, { class: "relative" }, {
                default: withCtx(() => [
                  createVNode(_component_UiFormLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-12px] bg-white rounded-md p-1" }, {
                    default: withCtx(() => [
                      createTextVNode("\u0428\u0438\u0440\u0438\u043D\u0430(\u0441\u043C)")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_UiFormControl, null, {
                    default: withCtx(() => [
                      createVNode(_component_UiInput, mergeProps({ type: "number" }, componentField), null, 16)
                    ]),
                    _: 2
                  }, 1024),
                  createVNode(_component_UiFormMessage)
                ]),
                _: 2
              }, 1024)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UiFormField, {
        name: "boardHeight",
        "validate-on-blur": !unref(isFieldDirty)
      }, {
        default: withCtx(({ componentField }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UiFormItem, { class: "relative" }, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UiFormLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-12px] bg-white rounded-md p-1" }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`\u0412\u044B\u0441\u043E\u0442\u0430(\u0441\u043C)`);
                      } else {
                        return [
                          createTextVNode("\u0412\u044B\u0441\u043E\u0442\u0430(\u0441\u043C)")
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UiFormControl, null, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UiInput, mergeProps({ type: "number" }, componentField), null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_UiInput, mergeProps({ type: "number" }, componentField), null, 16)
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UiFormMessage, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UiFormLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-12px] bg-white rounded-md p-1" }, {
                      default: withCtx(() => [
                        createTextVNode("\u0412\u044B\u0441\u043E\u0442\u0430(\u0441\u043C)")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_UiFormControl, null, {
                      default: withCtx(() => [
                        createVNode(_component_UiInput, mergeProps({ type: "number" }, componentField), null, 16)
                      ]),
                      _: 2
                    }, 1024),
                    createVNode(_component_UiFormMessage)
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UiFormItem, { class: "relative" }, {
                default: withCtx(() => [
                  createVNode(_component_UiFormLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-12px] bg-white rounded-md p-1" }, {
                    default: withCtx(() => [
                      createTextVNode("\u0412\u044B\u0441\u043E\u0442\u0430(\u0441\u043C)")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_UiFormControl, null, {
                    default: withCtx(() => [
                      createVNode(_component_UiInput, mergeProps({ type: "number" }, componentField), null, 16)
                    ]),
                    _: 2
                  }, 1024),
                  createVNode(_component_UiFormMessage)
                ]),
                _: 2
              }, 1024)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_UiFormField, {
        name: "holeType",
        "validate-on-blur": !unref(isFieldDirty)
      }, {
        default: withCtx(({ componentField }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UiFormItem, { class: "relative" }, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UiFormLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-12px] bg-white rounded-md p-1" }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`\u041E\u0442\u0432\u0435\u0440\u0441\u0442\u0438\u044F`);
                      } else {
                        return [
                          createTextVNode("\u041E\u0442\u0432\u0435\u0440\u0441\u0442\u0438\u044F")
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UiSelect, componentField, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UiFormControl, null, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_UiSelectTrigger, null, {
                                default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_UiSelectValue, { placeholder: "Select a verified email to display" }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_UiSelectValue, { placeholder: "Select a verified email to display" })
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_UiSelectTrigger, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_UiSelectValue, { placeholder: "Select a verified email to display" })
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_UiSelectContent, null, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<!--[-->`);
                              ssrRenderList(holeTypes, (item, index) => {
                                _push5(ssrRenderComponent(_component_UiSelectGroup, {
                                  key: holeTypes[index]
                                }, {
                                  default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(_component_UiSelectItem, { value: item }, {
                                        default: withCtx((_5, _push7, _parent7, _scopeId6) => {
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
                                (openBlock(), createBlock(Fragment, null, renderList(holeTypes, (item, index) => {
                                  return createVNode(_component_UiSelectGroup, {
                                    key: holeTypes[index]
                                  }, {
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
                          _: 2
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_UiFormControl, null, {
                            default: withCtx(() => [
                              createVNode(_component_UiSelectTrigger, null, {
                                default: withCtx(() => [
                                  createVNode(_component_UiSelectValue, { placeholder: "Select a verified email to display" })
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UiSelectContent, null, {
                            default: withCtx(() => [
                              (openBlock(), createBlock(Fragment, null, renderList(holeTypes, (item, index) => {
                                return createVNode(_component_UiSelectGroup, {
                                  key: holeTypes[index]
                                }, {
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
                    _: 2
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UiFormMessage, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UiFormLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-12px] bg-white rounded-md p-1" }, {
                      default: withCtx(() => [
                        createTextVNode("\u041E\u0442\u0432\u0435\u0440\u0441\u0442\u0438\u044F")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_UiSelect, componentField, {
                      default: withCtx(() => [
                        createVNode(_component_UiFormControl, null, {
                          default: withCtx(() => [
                            createVNode(_component_UiSelectTrigger, null, {
                              default: withCtx(() => [
                                createVNode(_component_UiSelectValue, { placeholder: "Select a verified email to display" })
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UiSelectContent, null, {
                          default: withCtx(() => [
                            (openBlock(), createBlock(Fragment, null, renderList(holeTypes, (item, index) => {
                              return createVNode(_component_UiSelectGroup, {
                                key: holeTypes[index]
                              }, {
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
                      _: 2
                    }, 1040),
                    createVNode(_component_UiFormMessage)
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UiFormItem, { class: "relative" }, {
                default: withCtx(() => [
                  createVNode(_component_UiFormLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-12px] bg-white rounded-md p-1" }, {
                    default: withCtx(() => [
                      createTextVNode("\u041E\u0442\u0432\u0435\u0440\u0441\u0442\u0438\u044F")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_UiSelect, componentField, {
                    default: withCtx(() => [
                      createVNode(_component_UiFormControl, null, {
                        default: withCtx(() => [
                          createVNode(_component_UiSelectTrigger, null, {
                            default: withCtx(() => [
                              createVNode(_component_UiSelectValue, { placeholder: "Select a verified email to display" })
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_UiSelectContent, null, {
                        default: withCtx(() => [
                          (openBlock(), createBlock(Fragment, null, renderList(holeTypes, (item, index) => {
                            return createVNode(_component_UiSelectGroup, {
                              key: holeTypes[index]
                            }, {
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
                    _: 2
                  }, 1040),
                  createVNode(_component_UiFormMessage)
                ]),
                _: 2
              }, 1024)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UiFormField, { name: "stand" }, {
        default: withCtx(({ value, handleChange }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UiFormItem, { class: "ml-3" }, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UiFormControl, null, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UiSwitch, {
                          checked: value,
                          "onUpdate:checked": handleChange
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_UiSwitch, {
                            checked: value,
                            "onUpdate:checked": handleChange
                          }, null, 8, ["checked", "onUpdate:checked"])
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UiFormLabel, { class: "font-medium text-slate-500" }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` \u041F\u043E\u0434\u0441\u0442\u0430\u0432\u043A\u0430 `);
                      } else {
                        return [
                          createTextVNode(" \u041F\u043E\u0434\u0441\u0442\u0430\u0432\u043A\u0430 ")
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UiFormDescription, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UiFormControl, null, {
                      default: withCtx(() => [
                        createVNode(_component_UiSwitch, {
                          checked: value,
                          "onUpdate:checked": handleChange
                        }, null, 8, ["checked", "onUpdate:checked"])
                      ]),
                      _: 2
                    }, 1024),
                    createVNode(_component_UiFormLabel, { class: "font-medium text-slate-500" }, {
                      default: withCtx(() => [
                        createTextVNode(" \u041F\u043E\u0434\u0441\u0442\u0430\u0432\u043A\u0430 ")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_UiFormDescription)
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UiFormItem, { class: "ml-3" }, {
                default: withCtx(() => [
                  createVNode(_component_UiFormControl, null, {
                    default: withCtx(() => [
                      createVNode(_component_UiSwitch, {
                        checked: value,
                        "onUpdate:checked": handleChange
                      }, null, 8, ["checked", "onUpdate:checked"])
                    ]),
                    _: 2
                  }, 1024),
                  createVNode(_component_UiFormLabel, { class: "font-medium text-slate-500" }, {
                    default: withCtx(() => [
                      createTextVNode(" \u041F\u043E\u0434\u0441\u0442\u0430\u0432\u043A\u0430 ")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_UiFormDescription)
                ]),
                _: 2
              }, 1024)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="flex justify-between">`);
      _push(ssrRenderComponent(_component_UiFormField, { name: "print" }, {
        default: withCtx(({ value, handleChange }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UiFormItem, { class: "ml-3" }, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UiFormControl, null, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UiSwitch, {
                          checked: value,
                          "onUpdate:checked": handleChange
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_UiSwitch, {
                            checked: value,
                            "onUpdate:checked": handleChange
                          }, null, 8, ["checked", "onUpdate:checked"])
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UiFormLabel, { class: "font-medium text-slate-500" }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` \u041F\u0435\u0447\u0430\u0442\u044C `);
                      } else {
                        return [
                          createTextVNode(" \u041F\u0435\u0447\u0430\u0442\u044C ")
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UiFormDescription, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UiFormControl, null, {
                      default: withCtx(() => [
                        createVNode(_component_UiSwitch, {
                          checked: value,
                          "onUpdate:checked": handleChange
                        }, null, 8, ["checked", "onUpdate:checked"])
                      ]),
                      _: 2
                    }, 1024),
                    createVNode(_component_UiFormLabel, { class: "font-medium text-slate-500" }, {
                      default: withCtx(() => [
                        createTextVNode(" \u041F\u0435\u0447\u0430\u0442\u044C ")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_UiFormDescription)
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UiFormItem, { class: "ml-3" }, {
                default: withCtx(() => [
                  createVNode(_component_UiFormControl, null, {
                    default: withCtx(() => [
                      createVNode(_component_UiSwitch, {
                        checked: value,
                        "onUpdate:checked": handleChange
                      }, null, 8, ["checked", "onUpdate:checked"])
                    ]),
                    _: 2
                  }, 1024),
                  createVNode(_component_UiFormLabel, { class: "font-medium text-slate-500" }, {
                    default: withCtx(() => [
                      createTextVNode(" \u041F\u0435\u0447\u0430\u0442\u044C ")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_UiFormDescription)
                ]),
                _: 2
              }, 1024)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div>`);
      _push(ssrRenderComponent(_component_UiFormField, { name: "printQuality" }, {
        default: withCtx(({ value, handleChange }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UiFormItem, { class: "ml-3" }, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UiFormControl, null, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UiSwitch, {
                          checked: value,
                          "onUpdate:checked": handleChange
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_UiSwitch, {
                            checked: value,
                            "onUpdate:checked": handleChange
                          }, null, 8, ["checked", "onUpdate:checked"])
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UiFormLabel, { class: "font-medium text-slate-500" }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` \u041A\u0430\u0447\u0435\u0441\u0442\u0432\u043E \u0441\u043E\u0433\u043B\u0430\u0441\u043E\u0432\u0430\u043D\u043E `);
                      } else {
                        return [
                          createTextVNode(" \u041A\u0430\u0447\u0435\u0441\u0442\u0432\u043E \u0441\u043E\u0433\u043B\u0430\u0441\u043E\u0432\u0430\u043D\u043E ")
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UiFormDescription, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UiFormControl, null, {
                      default: withCtx(() => [
                        createVNode(_component_UiSwitch, {
                          checked: value,
                          "onUpdate:checked": handleChange
                        }, null, 8, ["checked", "onUpdate:checked"])
                      ]),
                      _: 2
                    }, 1024),
                    createVNode(_component_UiFormLabel, { class: "font-medium text-slate-500" }, {
                      default: withCtx(() => [
                        createTextVNode(" \u041A\u0430\u0447\u0435\u0441\u0442\u0432\u043E \u0441\u043E\u0433\u043B\u0430\u0441\u043E\u0432\u0430\u043D\u043E ")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_UiFormDescription)
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UiFormItem, { class: "ml-3" }, {
                default: withCtx(() => [
                  createVNode(_component_UiFormControl, null, {
                    default: withCtx(() => [
                      createVNode(_component_UiSwitch, {
                        checked: value,
                        "onUpdate:checked": handleChange
                      }, null, 8, ["checked", "onUpdate:checked"])
                    ]),
                    _: 2
                  }, 1024),
                  createVNode(_component_UiFormLabel, { class: "font-medium text-slate-500" }, {
                    default: withCtx(() => [
                      createTextVNode(" \u041A\u0430\u0447\u0435\u0441\u0442\u0432\u043E \u0441\u043E\u0433\u043B\u0430\u0441\u043E\u0432\u0430\u043D\u043E ")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_UiFormDescription)
                ]),
                _: 2
              }, 1024)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
      _push(ssrRenderComponent(_component_UiFormField, {
        name: "laminate",
        "validate-on-blur": !unref(isFieldDirty)
      }, {
        default: withCtx(({ componentField }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UiFormItem, { class: "relative" }, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UiFormLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-12px] bg-white rounded-md p-1" }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`\u041F\u043B\u0435\u043D\u043A\u0430`);
                      } else {
                        return [
                          createTextVNode("\u041F\u043B\u0435\u043D\u043A\u0430")
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UiFormControl, null, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UiInput, mergeProps({
                          type: "text",
                          placeholder: "\u0418\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F \u043F\u043E \u043F\u043B\u0435\u043D\u043A\u0438"
                        }, componentField), null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_UiInput, mergeProps({
                            type: "text",
                            placeholder: "\u0418\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F \u043F\u043E \u043F\u043B\u0435\u043D\u043A\u0438"
                          }, componentField), null, 16)
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UiFormMessage, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UiFormLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-12px] bg-white rounded-md p-1" }, {
                      default: withCtx(() => [
                        createTextVNode("\u041F\u043B\u0435\u043D\u043A\u0430")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_UiFormControl, null, {
                      default: withCtx(() => [
                        createVNode(_component_UiInput, mergeProps({
                          type: "text",
                          placeholder: "\u0418\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F \u043F\u043E \u043F\u043B\u0435\u043D\u043A\u0438"
                        }, componentField), null, 16)
                      ]),
                      _: 2
                    }, 1024),
                    createVNode(_component_UiFormMessage)
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UiFormItem, { class: "relative" }, {
                default: withCtx(() => [
                  createVNode(_component_UiFormLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-12px] bg-white rounded-md p-1" }, {
                    default: withCtx(() => [
                      createTextVNode("\u041F\u043B\u0435\u043D\u043A\u0430")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_UiFormControl, null, {
                    default: withCtx(() => [
                      createVNode(_component_UiInput, mergeProps({
                        type: "text",
                        placeholder: "\u0418\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F \u043F\u043E \u043F\u043B\u0435\u043D\u043A\u0438"
                      }, componentField), null, 16)
                    ]),
                    _: 2
                  }, 1024),
                  createVNode(_component_UiFormMessage)
                ]),
                _: 2
              }, 1024)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UiFormField, {
        name: "acrylic",
        "validate-on-blur": !unref(isFieldDirty)
      }, {
        default: withCtx(({ componentField }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UiFormItem, { class: "relative" }, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UiFormLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-12px] bg-white rounded-md p-1" }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`\u0410\u043A\u0440\u0438\u043B`);
                      } else {
                        return [
                          createTextVNode("\u0410\u043A\u0440\u0438\u043B")
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UiFormControl, null, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UiInput, mergeProps({
                          type: "text",
                          placeholder: "\u0418\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F \u043F\u043E \u0430\u043A\u0440\u0438\u043B\u0443"
                        }, componentField), null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_UiInput, mergeProps({
                            type: "text",
                            placeholder: "\u0418\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F \u043F\u043E \u0430\u043A\u0440\u0438\u043B\u0443"
                          }, componentField), null, 16)
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UiFormMessage, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UiFormLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-12px] bg-white rounded-md p-1" }, {
                      default: withCtx(() => [
                        createTextVNode("\u0410\u043A\u0440\u0438\u043B")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_UiFormControl, null, {
                      default: withCtx(() => [
                        createVNode(_component_UiInput, mergeProps({
                          type: "text",
                          placeholder: "\u0418\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F \u043F\u043E \u0430\u043A\u0440\u0438\u043B\u0443"
                        }, componentField), null, 16)
                      ]),
                      _: 2
                    }, 1024),
                    createVNode(_component_UiFormMessage)
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UiFormItem, { class: "relative" }, {
                default: withCtx(() => [
                  createVNode(_component_UiFormLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-12px] bg-white rounded-md p-1" }, {
                    default: withCtx(() => [
                      createTextVNode("\u0410\u043A\u0440\u0438\u043B")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_UiFormControl, null, {
                    default: withCtx(() => [
                      createVNode(_component_UiInput, mergeProps({
                        type: "text",
                        placeholder: "\u0418\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F \u043F\u043E \u0430\u043A\u0440\u0438\u043B\u0443"
                      }, componentField), null, 16)
                    ]),
                    _: 2
                  }, 1024),
                  createVNode(_component_UiFormMessage)
                ]),
                _: 2
              }, 1024)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="flex flex-col flex-1 gap-3">`);
      _push(ssrRenderComponent(_component_UiLabel, { class: "mb-3" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u0417\u0430\u0434\u0430\u043D\u0438\u0435 \u043D\u0430 \u0441\u0431\u043E\u0440\u043A\u0443 `);
          } else {
            return [
              createTextVNode(" \u0417\u0430\u0434\u0430\u043D\u0438\u0435 \u043D\u0430 \u0441\u0431\u043E\u0440\u043A\u0443 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UiFormField, {
        name: "type",
        "validate-on-blur": !unref(isFieldDirty)
      }, {
        default: withCtx(({ componentField }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UiFormItem, { class: "relative" }, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UiFormLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-12px] bg-white rounded-md p-1" }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`\u041D\u0430\u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435`);
                      } else {
                        return [
                          createTextVNode("\u041D\u0430\u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435")
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UiSelect, componentField, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UiFormControl, null, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_UiSelectTrigger, null, {
                                default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_UiSelectValue, { placeholder: "Select a verified email to display" }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_UiSelectValue, { placeholder: "Select a verified email to display" })
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_UiSelectTrigger, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_UiSelectValue, { placeholder: "Select a verified email to display" })
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_UiSelectContent, null, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<!--[-->`);
                              ssrRenderList(types, (item, index) => {
                                _push5(ssrRenderComponent(_component_UiSelectGroup, {
                                  key: types[index]
                                }, {
                                  default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(_component_UiSelectItem, { value: item }, {
                                        default: withCtx((_5, _push7, _parent7, _scopeId6) => {
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
                                (openBlock(), createBlock(Fragment, null, renderList(types, (item, index) => {
                                  return createVNode(_component_UiSelectGroup, {
                                    key: types[index]
                                  }, {
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
                          _: 2
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_UiFormControl, null, {
                            default: withCtx(() => [
                              createVNode(_component_UiSelectTrigger, null, {
                                default: withCtx(() => [
                                  createVNode(_component_UiSelectValue, { placeholder: "Select a verified email to display" })
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UiSelectContent, null, {
                            default: withCtx(() => [
                              (openBlock(), createBlock(Fragment, null, renderList(types, (item, index) => {
                                return createVNode(_component_UiSelectGroup, {
                                  key: types[index]
                                }, {
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
                    _: 2
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UiFormMessage, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UiFormLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-12px] bg-white rounded-md p-1" }, {
                      default: withCtx(() => [
                        createTextVNode("\u041D\u0430\u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_UiSelect, componentField, {
                      default: withCtx(() => [
                        createVNode(_component_UiFormControl, null, {
                          default: withCtx(() => [
                            createVNode(_component_UiSelectTrigger, null, {
                              default: withCtx(() => [
                                createVNode(_component_UiSelectValue, { placeholder: "Select a verified email to display" })
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UiSelectContent, null, {
                          default: withCtx(() => [
                            (openBlock(), createBlock(Fragment, null, renderList(types, (item, index) => {
                              return createVNode(_component_UiSelectGroup, {
                                key: types[index]
                              }, {
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
                      _: 2
                    }, 1040),
                    createVNode(_component_UiFormMessage)
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UiFormItem, { class: "relative" }, {
                default: withCtx(() => [
                  createVNode(_component_UiFormLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-12px] bg-white rounded-md p-1" }, {
                    default: withCtx(() => [
                      createTextVNode("\u041D\u0430\u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_UiSelect, componentField, {
                    default: withCtx(() => [
                      createVNode(_component_UiFormControl, null, {
                        default: withCtx(() => [
                          createVNode(_component_UiSelectTrigger, null, {
                            default: withCtx(() => [
                              createVNode(_component_UiSelectValue, { placeholder: "Select a verified email to display" })
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_UiSelectContent, null, {
                        default: withCtx(() => [
                          (openBlock(), createBlock(Fragment, null, renderList(types, (item, index) => {
                            return createVNode(_component_UiSelectGroup, {
                              key: types[index]
                            }, {
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
                    _: 2
                  }, 1040),
                  createVNode(_component_UiFormMessage)
                ]),
                _: 2
              }, 1024)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UiFormField, {
        name: "wireLength",
        "validate-on-blur": !unref(isFieldDirty)
      }, {
        default: withCtx(({ componentField }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UiFormItem, { class: "relative" }, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UiFormLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-12px] bg-white rounded-md p-1" }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`\u041F\u0440\u043E\u0432\u043E\u0434 \u043E\u0442 \u0432\u044B\u0432\u0435\u0441\u043A\u0438(\u0430\u043A\u0443\u0441\u0442\u0438\u043A\u0430)`);
                      } else {
                        return [
                          createTextVNode("\u041F\u0440\u043E\u0432\u043E\u0434 \u043E\u0442 \u0432\u044B\u0432\u0435\u0441\u043A\u0438(\u0430\u043A\u0443\u0441\u0442\u0438\u043A\u0430)")
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UiFormControl, null, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UiInput, mergeProps({
                          type: "text",
                          placeholder: ""
                        }, componentField), null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_UiInput, mergeProps({
                            type: "text",
                            placeholder: ""
                          }, componentField), null, 16)
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UiFormMessage, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UiFormLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-12px] bg-white rounded-md p-1" }, {
                      default: withCtx(() => [
                        createTextVNode("\u041F\u0440\u043E\u0432\u043E\u0434 \u043E\u0442 \u0432\u044B\u0432\u0435\u0441\u043A\u0438(\u0430\u043A\u0443\u0441\u0442\u0438\u043A\u0430)")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_UiFormControl, null, {
                      default: withCtx(() => [
                        createVNode(_component_UiInput, mergeProps({
                          type: "text",
                          placeholder: ""
                        }, componentField), null, 16)
                      ]),
                      _: 2
                    }, 1024),
                    createVNode(_component_UiFormMessage)
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UiFormItem, { class: "relative" }, {
                default: withCtx(() => [
                  createVNode(_component_UiFormLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-12px] bg-white rounded-md p-1" }, {
                    default: withCtx(() => [
                      createTextVNode("\u041F\u0440\u043E\u0432\u043E\u0434 \u043E\u0442 \u0432\u044B\u0432\u0435\u0441\u043A\u0438(\u0430\u043A\u0443\u0441\u0442\u0438\u043A\u0430)")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_UiFormControl, null, {
                    default: withCtx(() => [
                      createVNode(_component_UiInput, mergeProps({
                        type: "text",
                        placeholder: ""
                      }, componentField), null, 16)
                    ]),
                    _: 2
                  }, 1024),
                  createVNode(_component_UiFormMessage)
                ]),
                _: 2
              }, 1024)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--[-->`);
      ssrRenderList(unref(values).neons, (neon, index) => {
        _push(`<div class="flex flex-col"><div class="flex gap-3"><div class="w-full">`);
        _push(ssrRenderComponent(_component_UiFormField, {
          name: `neons[${index}].width`,
          "validate-on-blur": !unref(isFieldDirty)
        }, {
          default: withCtx(({ componentField }, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_UiFormItem, { class: "relative" }, {
                default: withCtx((_, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UiFormLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-12px] bg-white rounded-md p-1" }, {
                      default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`\u0422\u0438\u043F`);
                        } else {
                          return [
                            createTextVNode("\u0422\u0438\u043F")
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_UiSelect, mergeProps({ ref_for: true }, componentField), {
                      default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_UiFormControl, null, {
                            default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_UiSelectTrigger, null, {
                                  default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(_component_UiSelectValue, { placeholder: "" }, null, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(_component_UiSelectValue, { placeholder: "" })
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(_component_UiSelectTrigger, null, {
                                    default: withCtx(() => [
                                      createVNode(_component_UiSelectValue, { placeholder: "" })
                                    ]),
                                    _: 1
                                  })
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_component_UiSelectContent, null, {
                            default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<!--[-->`);
                                ssrRenderList(neonWidths, (item, idx) => {
                                  _push5(ssrRenderComponent(_component_UiSelectGroup, { key: idx }, {
                                    default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        _push6(ssrRenderComponent(_component_UiSelectItem, { value: item }, {
                                          default: withCtx((_5, _push7, _parent7, _scopeId6) => {
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
                                  (openBlock(), createBlock(Fragment, null, renderList(neonWidths, (item, idx) => {
                                    return createVNode(_component_UiSelectGroup, { key: idx }, {
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
                            _: 2
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_UiFormControl, null, {
                              default: withCtx(() => [
                                createVNode(_component_UiSelectTrigger, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_UiSelectValue, { placeholder: "" })
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(_component_UiSelectContent, null, {
                              default: withCtx(() => [
                                (openBlock(), createBlock(Fragment, null, renderList(neonWidths, (item, idx) => {
                                  return createVNode(_component_UiSelectGroup, { key: idx }, {
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
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_UiFormMessage, null, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_UiFormLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-12px] bg-white rounded-md p-1" }, {
                        default: withCtx(() => [
                          createTextVNode("\u0422\u0438\u043F")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_UiSelect, mergeProps({ ref_for: true }, componentField), {
                        default: withCtx(() => [
                          createVNode(_component_UiFormControl, null, {
                            default: withCtx(() => [
                              createVNode(_component_UiSelectTrigger, null, {
                                default: withCtx(() => [
                                  createVNode(_component_UiSelectValue, { placeholder: "" })
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UiSelectContent, null, {
                            default: withCtx(() => [
                              (openBlock(), createBlock(Fragment, null, renderList(neonWidths, (item, idx) => {
                                return createVNode(_component_UiSelectGroup, { key: idx }, {
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
                        _: 2
                      }, 1040),
                      createVNode(_component_UiFormMessage)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_UiFormItem, { class: "relative" }, {
                  default: withCtx(() => [
                    createVNode(_component_UiFormLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-12px] bg-white rounded-md p-1" }, {
                      default: withCtx(() => [
                        createTextVNode("\u0422\u0438\u043F")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_UiSelect, mergeProps({ ref_for: true }, componentField), {
                      default: withCtx(() => [
                        createVNode(_component_UiFormControl, null, {
                          default: withCtx(() => [
                            createVNode(_component_UiSelectTrigger, null, {
                              default: withCtx(() => [
                                createVNode(_component_UiSelectValue, { placeholder: "" })
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UiSelectContent, null, {
                          default: withCtx(() => [
                            (openBlock(), createBlock(Fragment, null, renderList(neonWidths, (item, idx) => {
                              return createVNode(_component_UiSelectGroup, { key: idx }, {
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
                      _: 2
                    }, 1040),
                    createVNode(_component_UiFormMessage)
                  ]),
                  _: 2
                }, 1024)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div><div class="w-full">`);
        _push(ssrRenderComponent(_component_UiFormField, {
          name: `neons[${index}].color`,
          "validate-on-blur": !unref(isFieldDirty)
        }, {
          default: withCtx(({ componentField }, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_UiFormItem, { class: "relative" }, {
                default: withCtx((_, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UiFormLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-12px] bg-white rounded-md p-1" }, {
                      default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`\u0426\u0432\u0435\u0442`);
                        } else {
                          return [
                            createTextVNode("\u0426\u0432\u0435\u0442")
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_UiSelect, mergeProps({ ref_for: true }, componentField), {
                      default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_UiFormControl, null, {
                            default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_UiSelectTrigger, null, {
                                  default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(_component_UiSelectValue, { placeholder: "" }, null, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(_component_UiSelectValue, { placeholder: "" })
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(_component_UiSelectTrigger, null, {
                                    default: withCtx(() => [
                                      createVNode(_component_UiSelectValue, { placeholder: "" })
                                    ]),
                                    _: 1
                                  })
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_component_UiSelectContent, null, {
                            default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<!--[-->`);
                                ssrRenderList(neonColors, (item, idx) => {
                                  _push5(ssrRenderComponent(_component_UiSelectGroup, { key: idx }, {
                                    default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        _push6(ssrRenderComponent(_component_UiSelectItem, { value: item }, {
                                          default: withCtx((_5, _push7, _parent7, _scopeId6) => {
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
                                  (openBlock(), createBlock(Fragment, null, renderList(neonColors, (item, idx) => {
                                    return createVNode(_component_UiSelectGroup, { key: idx }, {
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
                            _: 2
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_UiFormControl, null, {
                              default: withCtx(() => [
                                createVNode(_component_UiSelectTrigger, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_UiSelectValue, { placeholder: "" })
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(_component_UiSelectContent, null, {
                              default: withCtx(() => [
                                (openBlock(), createBlock(Fragment, null, renderList(neonColors, (item, idx) => {
                                  return createVNode(_component_UiSelectGroup, { key: idx }, {
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
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_UiFormMessage, null, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_UiFormLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-12px] bg-white rounded-md p-1" }, {
                        default: withCtx(() => [
                          createTextVNode("\u0426\u0432\u0435\u0442")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_UiSelect, mergeProps({ ref_for: true }, componentField), {
                        default: withCtx(() => [
                          createVNode(_component_UiFormControl, null, {
                            default: withCtx(() => [
                              createVNode(_component_UiSelectTrigger, null, {
                                default: withCtx(() => [
                                  createVNode(_component_UiSelectValue, { placeholder: "" })
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UiSelectContent, null, {
                            default: withCtx(() => [
                              (openBlock(), createBlock(Fragment, null, renderList(neonColors, (item, idx) => {
                                return createVNode(_component_UiSelectGroup, { key: idx }, {
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
                        _: 2
                      }, 1040),
                      createVNode(_component_UiFormMessage)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_UiFormItem, { class: "relative" }, {
                  default: withCtx(() => [
                    createVNode(_component_UiFormLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-12px] bg-white rounded-md p-1" }, {
                      default: withCtx(() => [
                        createTextVNode("\u0426\u0432\u0435\u0442")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_UiSelect, mergeProps({ ref_for: true }, componentField), {
                      default: withCtx(() => [
                        createVNode(_component_UiFormControl, null, {
                          default: withCtx(() => [
                            createVNode(_component_UiSelectTrigger, null, {
                              default: withCtx(() => [
                                createVNode(_component_UiSelectValue, { placeholder: "" })
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UiSelectContent, null, {
                          default: withCtx(() => [
                            (openBlock(), createBlock(Fragment, null, renderList(neonColors, (item, idx) => {
                              return createVNode(_component_UiSelectGroup, { key: idx }, {
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
                      _: 2
                    }, 1040),
                    createVNode(_component_UiFormMessage)
                  ]),
                  _: 2
                }, 1024)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div><div class="w-full">`);
        _push(ssrRenderComponent(_component_UiFormField, {
          name: `neons[${index}].length`,
          "validate-on-blur": !unref(isFieldDirty)
        }, {
          default: withCtx(({ componentField }, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_UiFormItem, { class: "relative" }, {
                default: withCtx((_, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UiFormLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-12px] bg-white rounded-md p-1" }, {
                      default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`L(\u0441\u043C)`);
                        } else {
                          return [
                            createTextVNode("L(\u0441\u043C)")
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_UiFormControl, null, {
                      default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_UiInput, mergeProps({ type: "number" }, { ref_for: true }, componentField), null, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_UiInput, mergeProps({ type: "number" }, { ref_for: true }, componentField), null, 16)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_UiFormMessage, null, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_UiFormLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-12px] bg-white rounded-md p-1" }, {
                        default: withCtx(() => [
                          createTextVNode("L(\u0441\u043C)")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_UiFormControl, null, {
                        default: withCtx(() => [
                          createVNode(_component_UiInput, mergeProps({ type: "number" }, { ref_for: true }, componentField), null, 16)
                        ]),
                        _: 2
                      }, 1024),
                      createVNode(_component_UiFormMessage)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_UiFormItem, { class: "relative" }, {
                  default: withCtx(() => [
                    createVNode(_component_UiFormLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-12px] bg-white rounded-md p-1" }, {
                      default: withCtx(() => [
                        createTextVNode("L(\u0441\u043C)")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_UiFormControl, null, {
                      default: withCtx(() => [
                        createVNode(_component_UiInput, mergeProps({ type: "number" }, { ref_for: true }, componentField), null, 16)
                      ]),
                      _: 2
                    }, 1024),
                    createVNode(_component_UiFormMessage)
                  ]),
                  _: 2
                }, 1024)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div><div class="h-[40px] self-end">`);
        _push(ssrRenderComponent(_component_UiButton, {
          class: "h-full",
          onClick: () => removeNeon(index)
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` - `);
            } else {
              return [
                createTextVNode(" - ")
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div></div>`);
        if (neon.width === "\u041F\u043E\u0434\u0441\u0432\u0435\u0442\u043A\u0430") {
          _push(`<div class="relative flex-1 mt-2">`);
          _push(ssrRenderComponent(_component_UiFormField, {
            name: `neons[${index}].elements`,
            "validate-on-blur": !unref(isFieldDirty)
          }, {
            default: withCtx(({ componentField }, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(ssrRenderComponent(_component_UiFormItem, { class: "relative" }, {
                  default: withCtx((_, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(ssrRenderComponent(_component_UiFormLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-12px] bg-white rounded-md p-1" }, {
                        default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(`^\u042D\u043B\u0435\u043C\u0435\u043D\u0442\u044B \u043F\u043E\u0434\u0441\u0442\u0432\u0435\u0442\u043A\u0438^`);
                          } else {
                            return [
                              createTextVNode("^\u042D\u043B\u0435\u043C\u0435\u043D\u0442\u044B \u043F\u043E\u0434\u0441\u0442\u0432\u0435\u0442\u043A\u0438^")
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                      _push3(ssrRenderComponent(_component_UiFormControl, null, {
                        default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(ssrRenderComponent(_component_UiInput, mergeProps({ type: "number" }, { ref_for: true }, componentField), null, _parent4, _scopeId3));
                          } else {
                            return [
                              createVNode(_component_UiInput, mergeProps({ type: "number" }, { ref_for: true }, componentField), null, 16)
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                      _push3(ssrRenderComponent(_component_UiFormMessage, null, null, _parent3, _scopeId2));
                    } else {
                      return [
                        createVNode(_component_UiFormLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-12px] bg-white rounded-md p-1" }, {
                          default: withCtx(() => [
                            createTextVNode("^\u042D\u043B\u0435\u043C\u0435\u043D\u0442\u044B \u043F\u043E\u0434\u0441\u0442\u0432\u0435\u0442\u043A\u0438^")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UiFormControl, null, {
                          default: withCtx(() => [
                            createVNode(_component_UiInput, mergeProps({ type: "number" }, { ref_for: true }, componentField), null, 16)
                          ]),
                          _: 2
                        }, 1024),
                        createVNode(_component_UiFormMessage)
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              } else {
                return [
                  createVNode(_component_UiFormItem, { class: "relative" }, {
                    default: withCtx(() => [
                      createVNode(_component_UiFormLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-12px] bg-white rounded-md p-1" }, {
                        default: withCtx(() => [
                          createTextVNode("^\u042D\u043B\u0435\u043C\u0435\u043D\u0442\u044B \u043F\u043E\u0434\u0441\u0442\u0432\u0435\u0442\u043A\u0438^")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_UiFormControl, null, {
                        default: withCtx(() => [
                          createVNode(_component_UiInput, mergeProps({ type: "number" }, { ref_for: true }, componentField), null, 16)
                        ]),
                        _: 2
                      }, 1024),
                      createVNode(_component_UiFormMessage)
                    ]),
                    _: 2
                  }, 1024)
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      });
      _push(`<!--]-->`);
      _push(ssrRenderComponent(_component_UiButton, {
        type: "button",
        onClick: addNeon
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` + \u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043D\u0435\u043E\u043D `);
          } else {
            return [
              createTextVNode(" + \u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043D\u0435\u043E\u043D ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UiFormField, {
        name: "elements",
        "validate-on-blur": !unref(isFieldDirty)
      }, {
        default: withCtx(({ componentField }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UiFormItem, { class: "relative" }, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UiFormLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-12px] bg-white rounded-md p-1" }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`\u042D\u043B\u0435\u043C\u0435\u043D\u0442\u044B`);
                      } else {
                        return [
                          createTextVNode("\u042D\u043B\u0435\u043C\u0435\u043D\u0442\u044B")
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UiFormControl, null, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UiInput, mergeProps({ type: "number" }, componentField), null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_UiInput, mergeProps({ type: "number" }, componentField), null, 16)
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UiFormMessage, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UiFormLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-12px] bg-white rounded-md p-1" }, {
                      default: withCtx(() => [
                        createTextVNode("\u042D\u043B\u0435\u043C\u0435\u043D\u0442\u044B")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_UiFormControl, null, {
                      default: withCtx(() => [
                        createVNode(_component_UiInput, mergeProps({ type: "number" }, componentField), null, 16)
                      ]),
                      _: 2
                    }, 1024),
                    createVNode(_component_UiFormMessage)
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UiFormItem, { class: "relative" }, {
                default: withCtx(() => [
                  createVNode(_component_UiFormLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-12px] bg-white rounded-md p-1" }, {
                    default: withCtx(() => [
                      createTextVNode("\u042D\u043B\u0435\u043C\u0435\u043D\u0442\u044B")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_UiFormControl, null, {
                    default: withCtx(() => [
                      createVNode(_component_UiInput, mergeProps({ type: "number" }, componentField), null, 16)
                    ]),
                    _: 2
                  }, 1024),
                  createVNode(_component_UiFormMessage)
                ]),
                _: 2
              }, 1024)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UiFormField, { name: "gift" }, {
        default: withCtx(({ value, handleChange }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UiFormItem, { class: "ml-3" }, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UiFormControl, null, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UiSwitch, {
                          checked: value,
                          "onUpdate:checked": handleChange
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_UiSwitch, {
                            checked: value,
                            "onUpdate:checked": handleChange
                          }, null, 8, ["checked", "onUpdate:checked"])
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UiFormLabel, { class: "font-medium text-slate-500" }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` \u041F\u043E\u0434\u0430\u0440\u043E\u043A `);
                      } else {
                        return [
                          createTextVNode(" \u041F\u043E\u0434\u0430\u0440\u043E\u043A ")
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UiFormDescription, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UiFormControl, null, {
                      default: withCtx(() => [
                        createVNode(_component_UiSwitch, {
                          checked: value,
                          "onUpdate:checked": handleChange
                        }, null, 8, ["checked", "onUpdate:checked"])
                      ]),
                      _: 2
                    }, 1024),
                    createVNode(_component_UiFormLabel, { class: "font-medium text-slate-500" }, {
                      default: withCtx(() => [
                        createTextVNode(" \u041F\u043E\u0434\u0430\u0440\u043E\u043A ")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_UiFormDescription)
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UiFormItem, { class: "ml-3" }, {
                default: withCtx(() => [
                  createVNode(_component_UiFormControl, null, {
                    default: withCtx(() => [
                      createVNode(_component_UiSwitch, {
                        checked: value,
                        "onUpdate:checked": handleChange
                      }, null, 8, ["checked", "onUpdate:checked"])
                    ]),
                    _: 2
                  }, 1024),
                  createVNode(_component_UiFormLabel, { class: "font-medium text-slate-500" }, {
                    default: withCtx(() => [
                      createTextVNode(" \u041F\u043E\u0434\u0430\u0440\u043E\u043A ")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_UiFormDescription)
                ]),
                _: 2
              }, 1024)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UiFormField, {
        name: "gift_elements",
        "validate-on-blur": !unref(isFieldDirty)
      }, {
        default: withCtx(({ componentField }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UiFormItem, { class: "relative" }, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UiFormLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-12px] bg-white rounded-md p-1" }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`\u042D\u043B\u0435\u043C\u0435\u043D\u0442\u044B \u043F\u043E\u0434\u0430\u0440\u043A\u0430`);
                      } else {
                        return [
                          createTextVNode("\u042D\u043B\u0435\u043C\u0435\u043D\u0442\u044B \u043F\u043E\u0434\u0430\u0440\u043A\u0430")
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UiFormControl, null, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UiInput, mergeProps({ type: "number" }, componentField), null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_UiInput, mergeProps({ type: "number" }, componentField), null, 16)
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UiFormMessage, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UiFormLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-12px] bg-white rounded-md p-1" }, {
                      default: withCtx(() => [
                        createTextVNode("\u042D\u043B\u0435\u043C\u0435\u043D\u0442\u044B \u043F\u043E\u0434\u0430\u0440\u043A\u0430")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_UiFormControl, null, {
                      default: withCtx(() => [
                        createVNode(_component_UiInput, mergeProps({ type: "number" }, componentField), null, 16)
                      ]),
                      _: 2
                    }, 1024),
                    createVNode(_component_UiFormMessage)
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UiFormItem, { class: "relative" }, {
                default: withCtx(() => [
                  createVNode(_component_UiFormLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-12px] bg-white rounded-md p-1" }, {
                    default: withCtx(() => [
                      createTextVNode("\u042D\u043B\u0435\u043C\u0435\u043D\u0442\u044B \u043F\u043E\u0434\u0430\u0440\u043A\u0430")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_UiFormControl, null, {
                    default: withCtx(() => [
                      createVNode(_component_UiInput, mergeProps({ type: "number" }, componentField), null, 16)
                    ]),
                    _: 2
                  }, 1024),
                  createVNode(_component_UiFormMessage)
                ]),
                _: 2
              }, 1024)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UiFormField, {
        name: "gift_metrs",
        "validate-on-blur": !unref(isFieldDirty)
      }, {
        default: withCtx(({ componentField }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UiFormItem, { class: "relative" }, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UiFormLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-12px] bg-white rounded-md p-1" }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`\u041C\u0435\u0442\u0440\u0430\u0436 \u043F\u043E\u0434\u0430\u0440\u043A\u0430`);
                      } else {
                        return [
                          createTextVNode("\u041C\u0435\u0442\u0440\u0430\u0436 \u043F\u043E\u0434\u0430\u0440\u043A\u0430")
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UiFormControl, null, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UiInput, mergeProps({ type: "number" }, componentField), null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_UiInput, mergeProps({ type: "number" }, componentField), null, 16)
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UiFormMessage, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UiFormLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-12px] bg-white rounded-md p-1" }, {
                      default: withCtx(() => [
                        createTextVNode("\u041C\u0435\u0442\u0440\u0430\u0436 \u043F\u043E\u0434\u0430\u0440\u043A\u0430")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_UiFormControl, null, {
                      default: withCtx(() => [
                        createVNode(_component_UiInput, mergeProps({ type: "number" }, componentField), null, 16)
                      ]),
                      _: 2
                    }, 1024),
                    createVNode(_component_UiFormMessage)
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UiFormItem, { class: "relative" }, {
                default: withCtx(() => [
                  createVNode(_component_UiFormLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-12px] bg-white rounded-md p-1" }, {
                    default: withCtx(() => [
                      createTextVNode("\u041C\u0435\u0442\u0440\u0430\u0436 \u043F\u043E\u0434\u0430\u0440\u043A\u0430")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_UiFormControl, null, {
                    default: withCtx(() => [
                      createVNode(_component_UiInput, mergeProps({ type: "number" }, componentField), null, 16)
                    ]),
                    _: 2
                  }, 1024),
                  createVNode(_component_UiFormMessage)
                ]),
                _: 2
              }, 1024)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="flex flex-col flex-1 gap-3">`);
      _push(ssrRenderComponent(_component_UiLabel, { class: "mb-3" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u0417\u0430\u0434\u0430\u043D\u0438\u0435 \u043D\u0430 \u0443\u043F\u0430\u043A\u043E\u0432\u043A\u0443 `);
          } else {
            return [
              createTextVNode(" \u0417\u0430\u0434\u0430\u043D\u0438\u0435 \u043D\u0430 \u0443\u043F\u0430\u043A\u043E\u0432\u043A\u0443 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UiFormField, {
        name: "adapter",
        "validate-on-blur": !unref(isFieldDirty)
      }, {
        default: withCtx(({ componentField }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UiFormItem, { class: "relative" }, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UiFormLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-12px] bg-white rounded-md p-1" }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`\u0422\u0438\u043F \u0431\u043B\u043E\u043A\u0430`);
                      } else {
                        return [
                          createTextVNode("\u0422\u0438\u043F \u0431\u043B\u043E\u043A\u0430")
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UiSelect, componentField, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UiFormControl, null, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_UiSelectTrigger, null, {
                                default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_UiSelectValue, { placeholder: "Select a verified email to display" }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_UiSelectValue, { placeholder: "Select a verified email to display" })
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_UiSelectTrigger, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_UiSelectValue, { placeholder: "Select a verified email to display" })
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_UiSelectContent, null, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<!--[-->`);
                              ssrRenderList(adapters, (item, index) => {
                                _push5(ssrRenderComponent(_component_UiSelectGroup, {
                                  key: adapters[index]
                                }, {
                                  default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(_component_UiSelectItem, { value: item }, {
                                        default: withCtx((_5, _push7, _parent7, _scopeId6) => {
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
                                (openBlock(), createBlock(Fragment, null, renderList(adapters, (item, index) => {
                                  return createVNode(_component_UiSelectGroup, {
                                    key: adapters[index]
                                  }, {
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
                          _: 2
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_UiFormControl, null, {
                            default: withCtx(() => [
                              createVNode(_component_UiSelectTrigger, null, {
                                default: withCtx(() => [
                                  createVNode(_component_UiSelectValue, { placeholder: "Select a verified email to display" })
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UiSelectContent, null, {
                            default: withCtx(() => [
                              (openBlock(), createBlock(Fragment, null, renderList(adapters, (item, index) => {
                                return createVNode(_component_UiSelectGroup, {
                                  key: adapters[index]
                                }, {
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
                    _: 2
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UiFormMessage, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UiFormLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-12px] bg-white rounded-md p-1" }, {
                      default: withCtx(() => [
                        createTextVNode("\u0422\u0438\u043F \u0431\u043B\u043E\u043A\u0430")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_UiSelect, componentField, {
                      default: withCtx(() => [
                        createVNode(_component_UiFormControl, null, {
                          default: withCtx(() => [
                            createVNode(_component_UiSelectTrigger, null, {
                              default: withCtx(() => [
                                createVNode(_component_UiSelectValue, { placeholder: "Select a verified email to display" })
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UiSelectContent, null, {
                          default: withCtx(() => [
                            (openBlock(), createBlock(Fragment, null, renderList(adapters, (item, index) => {
                              return createVNode(_component_UiSelectGroup, {
                                key: adapters[index]
                              }, {
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
                      _: 2
                    }, 1040),
                    createVNode(_component_UiFormMessage)
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UiFormItem, { class: "relative" }, {
                default: withCtx(() => [
                  createVNode(_component_UiFormLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-12px] bg-white rounded-md p-1" }, {
                    default: withCtx(() => [
                      createTextVNode("\u0422\u0438\u043F \u0431\u043B\u043E\u043A\u0430")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_UiSelect, componentField, {
                    default: withCtx(() => [
                      createVNode(_component_UiFormControl, null, {
                        default: withCtx(() => [
                          createVNode(_component_UiSelectTrigger, null, {
                            default: withCtx(() => [
                              createVNode(_component_UiSelectValue, { placeholder: "Select a verified email to display" })
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_UiSelectContent, null, {
                        default: withCtx(() => [
                          (openBlock(), createBlock(Fragment, null, renderList(adapters, (item, index) => {
                            return createVNode(_component_UiSelectGroup, {
                              key: adapters[index]
                            }, {
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
                    _: 2
                  }, 1040),
                  createVNode(_component_UiFormMessage)
                ]),
                _: 2
              }, 1024)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UiFormField, {
        name: "plug",
        "validate-on-blur": !unref(isFieldDirty)
      }, {
        default: withCtx(({ componentField }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UiFormItem, { class: "relative" }, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UiFormLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-12px] bg-white rounded-md p-1" }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`\u041F\u0440\u043E\u0432\u043E\u0434 \u043E\u0442 \u0431\u043B\u043E\u043A\u0430(+ \u0446\u0432\u0435\u0442)`);
                      } else {
                        return [
                          createTextVNode("\u041F\u0440\u043E\u0432\u043E\u0434 \u043E\u0442 \u0431\u043B\u043E\u043A\u0430(+ \u0446\u0432\u0435\u0442)")
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UiFormControl, null, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UiInput, mergeProps({
                          type: "text",
                          placeholder: ""
                        }, componentField), null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_UiInput, mergeProps({
                            type: "text",
                            placeholder: ""
                          }, componentField), null, 16)
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UiFormMessage, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UiFormLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-12px] bg-white rounded-md p-1" }, {
                      default: withCtx(() => [
                        createTextVNode("\u041F\u0440\u043E\u0432\u043E\u0434 \u043E\u0442 \u0431\u043B\u043E\u043A\u0430(+ \u0446\u0432\u0435\u0442)")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_UiFormControl, null, {
                      default: withCtx(() => [
                        createVNode(_component_UiInput, mergeProps({
                          type: "text",
                          placeholder: ""
                        }, componentField), null, 16)
                      ]),
                      _: 2
                    }, 1024),
                    createVNode(_component_UiFormMessage)
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UiFormItem, { class: "relative" }, {
                default: withCtx(() => [
                  createVNode(_component_UiFormLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-12px] bg-white rounded-md p-1" }, {
                    default: withCtx(() => [
                      createTextVNode("\u041F\u0440\u043E\u0432\u043E\u0434 \u043E\u0442 \u0431\u043B\u043E\u043A\u0430(+ \u0446\u0432\u0435\u0442)")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_UiFormControl, null, {
                    default: withCtx(() => [
                      createVNode(_component_UiInput, mergeProps({
                        type: "text",
                        placeholder: ""
                      }, componentField), null, 16)
                    ]),
                    _: 2
                  }, 1024),
                  createVNode(_component_UiFormMessage)
                ]),
                _: 2
              }, 1024)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UiFormField, {
        name: "fitting",
        "validate-on-blur": !unref(isFieldDirty)
      }, {
        default: withCtx(({ componentField }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UiFormItem, { class: "relative" }, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UiFormLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-12px] bg-white rounded-md p-1" }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`\u041A\u0440\u0435\u043F\u043B\u0435\u043D\u0438\u044F`);
                      } else {
                        return [
                          createTextVNode("\u041A\u0440\u0435\u043F\u043B\u0435\u043D\u0438\u044F")
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UiSelect, componentField, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UiFormControl, null, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_UiSelectTrigger, null, {
                                default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_UiSelectValue, { placeholder: "Select a verified email to display" }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_UiSelectValue, { placeholder: "Select a verified email to display" })
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_UiSelectTrigger, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_UiSelectValue, { placeholder: "Select a verified email to display" })
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_UiSelectContent, null, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<!--[-->`);
                              ssrRenderList(fittings, (item, index) => {
                                _push5(ssrRenderComponent(_component_UiSelectGroup, {
                                  key: fittings[index]
                                }, {
                                  default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(_component_UiSelectItem, { value: item }, {
                                        default: withCtx((_5, _push7, _parent7, _scopeId6) => {
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
                                (openBlock(), createBlock(Fragment, null, renderList(fittings, (item, index) => {
                                  return createVNode(_component_UiSelectGroup, {
                                    key: fittings[index]
                                  }, {
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
                          _: 2
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_UiFormControl, null, {
                            default: withCtx(() => [
                              createVNode(_component_UiSelectTrigger, null, {
                                default: withCtx(() => [
                                  createVNode(_component_UiSelectValue, { placeholder: "Select a verified email to display" })
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UiSelectContent, null, {
                            default: withCtx(() => [
                              (openBlock(), createBlock(Fragment, null, renderList(fittings, (item, index) => {
                                return createVNode(_component_UiSelectGroup, {
                                  key: fittings[index]
                                }, {
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
                    _: 2
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UiFormMessage, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UiFormLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-12px] bg-white rounded-md p-1" }, {
                      default: withCtx(() => [
                        createTextVNode("\u041A\u0440\u0435\u043F\u043B\u0435\u043D\u0438\u044F")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_UiSelect, componentField, {
                      default: withCtx(() => [
                        createVNode(_component_UiFormControl, null, {
                          default: withCtx(() => [
                            createVNode(_component_UiSelectTrigger, null, {
                              default: withCtx(() => [
                                createVNode(_component_UiSelectValue, { placeholder: "Select a verified email to display" })
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UiSelectContent, null, {
                          default: withCtx(() => [
                            (openBlock(), createBlock(Fragment, null, renderList(fittings, (item, index) => {
                              return createVNode(_component_UiSelectGroup, {
                                key: fittings[index]
                              }, {
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
                      _: 2
                    }, 1040),
                    createVNode(_component_UiFormMessage)
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UiFormItem, { class: "relative" }, {
                default: withCtx(() => [
                  createVNode(_component_UiFormLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-12px] bg-white rounded-md p-1" }, {
                    default: withCtx(() => [
                      createTextVNode("\u041A\u0440\u0435\u043F\u043B\u0435\u043D\u0438\u044F")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_UiSelect, componentField, {
                    default: withCtx(() => [
                      createVNode(_component_UiFormControl, null, {
                        default: withCtx(() => [
                          createVNode(_component_UiSelectTrigger, null, {
                            default: withCtx(() => [
                              createVNode(_component_UiSelectValue, { placeholder: "Select a verified email to display" })
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_UiSelectContent, null, {
                        default: withCtx(() => [
                          (openBlock(), createBlock(Fragment, null, renderList(fittings, (item, index) => {
                            return createVNode(_component_UiSelectGroup, {
                              key: fittings[index]
                            }, {
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
                    _: 2
                  }, 1040),
                  createVNode(_component_UiFormMessage)
                ]),
                _: 2
              }, 1024)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UiFormField, { name: "dimmer" }, {
        default: withCtx(({ value, handleChange }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UiFormItem, { class: "ml-3" }, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UiFormControl, null, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UiSwitch, {
                          checked: value,
                          "onUpdate:checked": handleChange
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_UiSwitch, {
                            checked: value,
                            "onUpdate:checked": handleChange
                          }, null, 8, ["checked", "onUpdate:checked"])
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UiFormLabel, { class: "font-medium text-slate-500" }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` \u0414\u0438\u043C\u043C\u0435\u0440 `);
                      } else {
                        return [
                          createTextVNode(" \u0414\u0438\u043C\u043C\u0435\u0440 ")
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UiFormDescription, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UiFormControl, null, {
                      default: withCtx(() => [
                        createVNode(_component_UiSwitch, {
                          checked: value,
                          "onUpdate:checked": handleChange
                        }, null, 8, ["checked", "onUpdate:checked"])
                      ]),
                      _: 2
                    }, 1024),
                    createVNode(_component_UiFormLabel, { class: "font-medium text-slate-500" }, {
                      default: withCtx(() => [
                        createTextVNode(" \u0414\u0438\u043C\u043C\u0435\u0440 ")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_UiFormDescription)
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UiFormItem, { class: "ml-3" }, {
                default: withCtx(() => [
                  createVNode(_component_UiFormControl, null, {
                    default: withCtx(() => [
                      createVNode(_component_UiSwitch, {
                        checked: value,
                        "onUpdate:checked": handleChange
                      }, null, 8, ["checked", "onUpdate:checked"])
                    ]),
                    _: 2
                  }, 1024),
                  createVNode(_component_UiFormLabel, { class: "font-medium text-slate-500" }, {
                    default: withCtx(() => [
                      createTextVNode(" \u0414\u0438\u043C\u043C\u0435\u0440 ")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_UiFormDescription)
                ]),
                _: 2
              }, 1024)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UiFormField, { name: "giftPack" }, {
        default: withCtx(({ value, handleChange }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UiFormItem, { class: "ml-3" }, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UiFormControl, null, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UiSwitch, {
                          checked: value,
                          "onUpdate:checked": handleChange
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_UiSwitch, {
                            checked: value,
                            "onUpdate:checked": handleChange
                          }, null, 8, ["checked", "onUpdate:checked"])
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UiFormLabel, { class: "font-medium text-slate-500" }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` \u041F\u043E\u0434\u0430\u0440\u043E\u0447\u043D\u0430\u044F \u0443\u043F\u0430\u043A\u043E\u0432\u043A\u0430 `);
                      } else {
                        return [
                          createTextVNode(" \u041F\u043E\u0434\u0430\u0440\u043E\u0447\u043D\u0430\u044F \u0443\u043F\u0430\u043A\u043E\u0432\u043A\u0430 ")
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UiFormDescription, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UiFormControl, null, {
                      default: withCtx(() => [
                        createVNode(_component_UiSwitch, {
                          checked: value,
                          "onUpdate:checked": handleChange
                        }, null, 8, ["checked", "onUpdate:checked"])
                      ]),
                      _: 2
                    }, 1024),
                    createVNode(_component_UiFormLabel, { class: "font-medium text-slate-500" }, {
                      default: withCtx(() => [
                        createTextVNode(" \u041F\u043E\u0434\u0430\u0440\u043E\u0447\u043D\u0430\u044F \u0443\u043F\u0430\u043A\u043E\u0432\u043A\u0430 ")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_UiFormDescription)
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UiFormItem, { class: "ml-3" }, {
                default: withCtx(() => [
                  createVNode(_component_UiFormControl, null, {
                    default: withCtx(() => [
                      createVNode(_component_UiSwitch, {
                        checked: value,
                        "onUpdate:checked": handleChange
                      }, null, 8, ["checked", "onUpdate:checked"])
                    ]),
                    _: 2
                  }, 1024),
                  createVNode(_component_UiFormLabel, { class: "font-medium text-slate-500" }, {
                    default: withCtx(() => [
                      createTextVNode(" \u041F\u043E\u0434\u0430\u0440\u043E\u0447\u043D\u0430\u044F \u0443\u043F\u0430\u043A\u043E\u0432\u043A\u0430 ")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_UiFormDescription)
                ]),
                _: 2
              }, 1024)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UiFormField, {
        name: "description",
        "validate-on-blur": !unref(isFieldDirty)
      }, {
        default: withCtx(({ componentField }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UiFormItem, { class: "relative" }, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UiFormLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-12px] bg-white rounded-md p-1" }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`\u0414\u043E\u043F. \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F`);
                      } else {
                        return [
                          createTextVNode("\u0414\u043E\u043F. \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F")
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UiFormControl, null, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-12px] bg-white rounded-md p-1" }, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435/\u0414\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u0430\u044F \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F`);
                            } else {
                              return [
                                createTextVNode("\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435/\u0414\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u0430\u044F \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F")
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_UiTextarea, mergeProps(componentField, {
                          placeholder: "\u043A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439 \u043A \u0437\u0430\u043A\u0430\u0437\u0443",
                          class: "resize-none h-[120px]"
                        }), null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-12px] bg-white rounded-md p-1" }, {
                            default: withCtx(() => [
                              createTextVNode("\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435/\u0414\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u0430\u044F \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UiTextarea, mergeProps(componentField, {
                            placeholder: "\u043A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439 \u043A \u0437\u0430\u043A\u0430\u0437\u0443",
                            class: "resize-none h-[120px]"
                          }), null, 16)
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UiFormMessage, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UiFormLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-12px] bg-white rounded-md p-1" }, {
                      default: withCtx(() => [
                        createTextVNode("\u0414\u043E\u043F. \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_UiFormControl, null, {
                      default: withCtx(() => [
                        createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-12px] bg-white rounded-md p-1" }, {
                          default: withCtx(() => [
                            createTextVNode("\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435/\u0414\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u0430\u044F \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UiTextarea, mergeProps(componentField, {
                          placeholder: "\u043A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439 \u043A \u0437\u0430\u043A\u0430\u0437\u0443",
                          class: "resize-none h-[120px]"
                        }), null, 16)
                      ]),
                      _: 2
                    }, 1024),
                    createVNode(_component_UiFormMessage)
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UiFormItem, { class: "relative" }, {
                default: withCtx(() => [
                  createVNode(_component_UiFormLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-12px] bg-white rounded-md p-1" }, {
                    default: withCtx(() => [
                      createTextVNode("\u0414\u043E\u043F. \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_UiFormControl, null, {
                    default: withCtx(() => [
                      createVNode(_component_UiLabel, { class: "font-medium text-slate-400 absolute left-2 top-[-12px] bg-white rounded-md p-1" }, {
                        default: withCtx(() => [
                          createTextVNode("\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435/\u0414\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u0430\u044F \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_UiTextarea, mergeProps(componentField, {
                        placeholder: "\u043A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439 \u043A \u0437\u0430\u043A\u0430\u0437\u0443",
                        class: "resize-none h-[120px]"
                      }), null, 16)
                    ]),
                    _: 2
                  }, 1024),
                  createVNode(_component_UiFormMessage)
                ]),
                _: 2
              }, 1024)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div>`);
      _push(ssrRenderComponent(_component_UiButton, {
        class: "ml-auto self-right mt-8",
        type: "submit"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C `);
          } else {
            return [
              createTextVNode(" \u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</form></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/my/orders/OrderForm.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=OrderForm-DCVnpRuC.mjs.map
