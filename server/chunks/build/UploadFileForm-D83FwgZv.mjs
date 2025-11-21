import { _ as _sfc_main$4, a as _sfc_main$3, b as _sfc_main$2, c as _sfc_main$2$1, d as _sfc_main$1$1 } from './DialogContent-BsO2ljLB.mjs';
import { _ as _sfc_main$5 } from './DialogDescription-D5yt23q9.mjs';
import { _ as _sfc_main$7 } from './DialogFooter-CQpXS8R1.mjs';
import { _ as _sfc_main$1 } from './index-B6vrBiru.mjs';
import { _ as __nuxt_component_0 } from './index-BPQNkNDf.mjs';
import { _ as _sfc_main$6 } from './Input-DoHPrX2-.mjs';
import { defineComponent, ref, mergeProps, withCtx, createVNode, createTextVNode, createBlock, openBlock, withModifiers, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import FormData from 'form-data';
import { b as useNuxtApp } from './server.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "UploadFileForm",
  __ssrInlineRender: true,
  props: {
    deal: {}
  },
  emits: ["file-uploaded"],
  setup(__props, { emit: __emit }) {
    const { $useApi } = useNuxtApp();
    const props = __props;
    const file = ref(null);
    const isOpen = ref(false);
    const isLoading = ref(false);
    const getFile = (event) => {
      const selectedFile = event.target.files[0];
      if (!selectedFile) {
        console.warn("\u0424\u0430\u0439\u043B \u043D\u0435 \u0432\u044B\u0431\u0440\u0430\u043D");
        return;
      }
      console.log(selectedFile);
      file.value = selectedFile;
    };
    const uploadFile = async () => {
      if (!file.value) {
        console.error("\u0424\u0430\u0439\u043B \u043D\u0435 \u0432\u044B\u0431\u0440\u0430\u043D");
        return;
      }
      const formData = new FormData();
      formData.append("file", file.value, file.value.name);
      await $useApi.post(`deals/${props.deal.id}/files`, formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      });
    };
    const emit = __emit;
    const onSubmit = async () => {
      isLoading.value = true;
      await uploadFile();
      isOpen.value = false;
      isLoading.value = false;
      return emit("file-uploaded");
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiDialog = _sfc_main$4;
      const _component_UiDialogTrigger = _sfc_main$3;
      const _component_UiButton = _sfc_main$1;
      const _component_Icon = __nuxt_component_0;
      const _component_UiDialogContent = _sfc_main$2;
      const _component_UiDialogHeader = _sfc_main$2$1;
      const _component_UiDialogTitle = _sfc_main$1$1;
      const _component_UiDialogDescription = _sfc_main$5;
      const _component_UiInput = _sfc_main$6;
      const _component_UiDialogFooter = _sfc_main$7;
      _push(ssrRenderComponent(_component_UiDialog, mergeProps({
        open: isOpen.value,
        "onUpdate:open": ($event) => isOpen.value = $event
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UiDialogTrigger, { "as-child": "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UiButton, { class: "p-0 w-6 h-6" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_Icon, {
                          name: "akar-icons:plus",
                          color: "white",
                          size: "18px"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_Icon, {
                            name: "akar-icons:plus",
                            color: "white",
                            size: "18px"
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UiButton, { class: "p-0 w-6 h-6" }, {
                      default: withCtx(() => [
                        createVNode(_component_Icon, {
                          name: "akar-icons:plus",
                          color: "white",
                          size: "18px"
                        })
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UiDialogContent, { class: "flex flex-col" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  if (!isLoading.value) {
                    _push3(`<div${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_UiDialogHeader, null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_UiDialogTitle, null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u0444\u0430\u0439\u043B`);
                              } else {
                                return [
                                  createTextVNode("\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u0444\u0430\u0439\u043B")
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
                                createTextVNode("\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u0444\u0430\u0439\u043B")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_UiDialogDescription)
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(`<div class="flex flex-col gap-5"${_scopeId2}><form class="w-full flex flex-col"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_UiInput, {
                      id: "file-input",
                      type: "file",
                      onChange: ($event) => getFile($event)
                    }, null, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_UiButton, {
                      class: "ml-auto self-right mt-8",
                      type: "submit"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(` \u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C `);
                        } else {
                          return [
                            createTextVNode(" \u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(`</form></div>`);
                    _push3(ssrRenderComponent(_component_UiDialogFooter, null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<div class="flex justify-between w-full"${_scopeId3}></div>`);
                        } else {
                          return [
                            createVNode("div", { class: "flex justify-between w-full" })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(`</div>`);
                  } else {
                    _push3(`<div${_scopeId2}>\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430...</div>`);
                  }
                } else {
                  return [
                    !isLoading.value ? (openBlock(), createBlock("div", { key: 0 }, [
                      createVNode(_component_UiDialogHeader, null, {
                        default: withCtx(() => [
                          createVNode(_component_UiDialogTitle, null, {
                            default: withCtx(() => [
                              createTextVNode("\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u0444\u0430\u0439\u043B")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UiDialogDescription)
                        ]),
                        _: 1
                      }),
                      createVNode("div", { class: "flex flex-col gap-5" }, [
                        createVNode("form", {
                          class: "w-full flex flex-col",
                          onSubmit: withModifiers(onSubmit, ["prevent"])
                        }, [
                          createVNode(_component_UiInput, {
                            id: "file-input",
                            type: "file",
                            onChange: ($event) => getFile($event)
                          }, null, 8, ["onChange"]),
                          createVNode(_component_UiButton, {
                            class: "ml-auto self-right mt-8",
                            type: "submit"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" \u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C ")
                            ]),
                            _: 1
                          })
                        ], 32)
                      ]),
                      createVNode(_component_UiDialogFooter, null, {
                        default: withCtx(() => [
                          createVNode("div", { class: "flex justify-between w-full" })
                        ]),
                        _: 1
                      })
                    ])) : (openBlock(), createBlock("div", { key: 1 }, "\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430..."))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UiDialogTrigger, { "as-child": "" }, {
                default: withCtx(() => [
                  createVNode(_component_UiButton, { class: "p-0 w-6 h-6" }, {
                    default: withCtx(() => [
                      createVNode(_component_Icon, {
                        name: "akar-icons:plus",
                        color: "white",
                        size: "18px"
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_UiDialogContent, { class: "flex flex-col" }, {
                default: withCtx(() => [
                  !isLoading.value ? (openBlock(), createBlock("div", { key: 0 }, [
                    createVNode(_component_UiDialogHeader, null, {
                      default: withCtx(() => [
                        createVNode(_component_UiDialogTitle, null, {
                          default: withCtx(() => [
                            createTextVNode("\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u0444\u0430\u0439\u043B")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UiDialogDescription)
                      ]),
                      _: 1
                    }),
                    createVNode("div", { class: "flex flex-col gap-5" }, [
                      createVNode("form", {
                        class: "w-full flex flex-col",
                        onSubmit: withModifiers(onSubmit, ["prevent"])
                      }, [
                        createVNode(_component_UiInput, {
                          id: "file-input",
                          type: "file",
                          onChange: ($event) => getFile($event)
                        }, null, 8, ["onChange"]),
                        createVNode(_component_UiButton, {
                          class: "ml-auto self-right mt-8",
                          type: "submit"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" \u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C ")
                          ]),
                          _: 1
                        })
                      ], 32)
                    ]),
                    createVNode(_component_UiDialogFooter, null, {
                      default: withCtx(() => [
                        createVNode("div", { class: "flex justify-between w-full" })
                      ]),
                      _: 1
                    })
                  ])) : (openBlock(), createBlock("div", { key: 1 }, "\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430..."))
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
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/my/orders/UploadFileForm.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=UploadFileForm-D83FwgZv.mjs.map
