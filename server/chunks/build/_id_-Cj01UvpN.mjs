import { _ as _sfc_main$2 } from './index-DXIlBIYA.mjs';
import { a as useNuxtApp, d as useRoute, c as __nuxt_component_1$1, _ as _export_sfc } from './server.mjs';
import { _ as _sfc_main$3 } from './Input-CzbisvbY.mjs';
import { _ as _sfc_main$3$1, a as _sfc_main$2$1, b as _sfc_main$1$1, c as _sfc_main$4 } from './DropdownMenuItem-bkfc8fNQ.mjs';
import { _ as _sfc_main$5 } from './Textarea-8eRA4fdT.mjs';
import { _ as _sfc_main$6 } from './Separator-CLaMwOnh.mjs';
import { _ as _sfc_main$2$2, a as _sfc_main$7, b as _sfc_main$1$2 } from './TabsList-BccwyRY_.mjs';
import { _ as _sfc_main$8 } from './TabsContent-B79lmJ9I.mjs';
import { defineComponent, computed, ref, reactive, watch, unref, withCtx, createTextVNode, mergeProps, createVNode, toDisplayString, createBlock, createCommentVNode, openBlock, Fragment, renderList, withModifiers, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle, ssrRenderClass, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import { EllipsisVertical, X } from 'lucide-vue-next';
import { u as useHead } from './v3-CJAL4xID.mjs';
import 'radix-vue';
import 'class-variance-authority';
import 'clsx';
import 'tailwind-merge';
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
import 'pinia';
import 'vue-router';
import '@iconify/vue';
import 'axios';
import '@vueuse/core';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'unhead/plugins';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "TaskModal",
  __ssrInlineRender: true,
  props: {
    open: { type: Boolean },
    taskId: {}
  },
  emits: [
    "update:open",
    "delete",
    // 'duplicate', task: FullTask
    "move"
  ],
  setup(__props, { emit: __emit }) {
    const { $api } = useNuxtApp();
    const { $useApi } = useNuxtApp();
    const isLoading = ref(false);
    const isSaving = ref(false);
    const isSavingVisible = ref(false);
    const isDeleting = ref(false);
    ref(false);
    let saveTimer = null;
    const props = __props;
    const emit = __emit;
    const editTask = ref(null);
    ref(null);
    async function fetchFullTask() {
      if (!props.taskId) return;
      isLoading.value = true;
      const taskId = Number(props.taskId);
      try {
        const data = await $api.$get(`tasks/${taskId}`);
        const full = data;
        editTask.value = full;
      } catch (e) {
        console.error("fetchFullTask failed", e);
      } finally {
        isLoading.value = false;
      }
    }
    function scheduleSave() {
      if (!editTask.value) return;
      if (saveTimer) clearTimeout(saveTimer);
      saveTimer = setTimeout(saveTask, 1e3);
    }
    async function saveTask() {
      var _a;
      if (!editTask.value) return;
      isSaving.value = true;
      try {
        const taskId = Number(props.taskId);
        const payload = {
          title: editTask.value.title,
          description: (_a = editTask.value.description) != null ? _a : ""
        };
        const error = await $api.$patch(`tasks/${taskId}`, payload);
        if (error == null ? void 0 : error.value) throw error.value;
      } catch (e) {
        console.error("saveTask failed", e);
      } finally {
        isSaving.value = false;
      }
    }
    watch(
      () => props.open,
      async (isOpen) => {
        if (isOpen) {
          await fetchFullTask();
        } else {
          editTask.value = null;
        }
      },
      { immediate: true }
    );
    function close() {
      emit("update:open", false);
    }
    function openAttachment(att) {
      if (!att) return;
      if (att.mimeType === "image/jpeg") {
        const url2 = att.preview;
        const newSize = "XXXL";
        const urlObj = new URL(url2);
        urlObj.searchParams.set("size", newSize);
        const newUrl = urlObj.toString();
        if (newUrl) (void 0).open(newUrl, "_blank", "noopener,noreferrer");
        return;
      }
      const url = att.preview;
      if (!url) return;
      const a = (void 0).createElement("a");
      a.href = url;
      a.download = att.name || "file";
      (void 0).body.appendChild(a);
      a.click();
      a.remove();
    }
    async function removeAttachment(attId) {
      if (!editTask.value) return;
      try {
        editTask.value.attachments = editTask.value.attachments.filter(
          (a) => a.id !== attId
        );
        const error = await $api.$del(`attachments/${Number(attId)}`);
        if (error == null ? void 0 : error.value) throw error.value;
      } catch (e) {
        console.error("removeAttachment failed", e);
        fetchFullTask();
      }
    }
    async function emitDelete() {
      console.log(editTask.value);
      if (!editTask.value) return;
      isDeleting.value = true;
      try {
        const taskId = props.taskId;
        await $api.$del(`tasks/${taskId}`);
        emit("update:open", false);
        emit("delete", editTask.value.id);
      } catch (e) {
        console.error("deleteTask failed", e);
      } finally {
        isDeleting.value = false;
      }
    }
    const file = ref(null);
    const errorMessage = ref(null);
    const previewUrl = ref(null);
    const pasteInput = ref(null);
    const getFile = async (event) => {
      var _a;
      const input = event.target;
      const selectedFile = (_a = input.files) == null ? void 0 : _a[0];
      if (!selectedFile) {
        errorMessage.value = "\u041F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, \u0432\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0444\u0430\u0439\u043B";
        file.value = null;
        previewUrl.value = null;
        return;
      }
      validateAndSetFile(selectedFile);
      await saveReview();
    };
    const onFocus = () => {
      var _a;
      (_a = pasteInput.value) == null ? void 0 : _a.addEventListener("paste", handlePaste);
    };
    const onBlur = () => {
      var _a;
      (_a = pasteInput.value) == null ? void 0 : _a.removeEventListener("paste", handlePaste);
    };
    const validateAndSetFile = (selectedFile) => {
      const allowedTypes = ["image/jpeg", "image/png"];
      const maxSize = 5 * 1024 * 1024;
      if (!allowedTypes.includes(selectedFile.type)) {
        errorMessage.value = "\u0414\u043E\u043F\u0443\u0441\u0442\u0438\u043C\u044B \u0442\u043E\u043B\u044C\u043A\u043E \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F (JPEG, PNG)";
        file.value = null;
        previewUrl.value = null;
        return;
      }
      if (selectedFile.size > maxSize) {
        errorMessage.value = "\u0420\u0430\u0437\u043C\u0435\u0440 \u0444\u0430\u0439\u043B\u0430 \u043D\u0435 \u0434\u043E\u043B\u0436\u0435\u043D \u043F\u0440\u0435\u0432\u044B\u0448\u0430\u0442\u044C 5MB";
        file.value = null;
        previewUrl.value = null;
        return;
      }
      errorMessage.value = null;
      file.value = selectedFile;
      const reader = new FileReader();
      reader.onload = (e) => {
        var _a;
        previewUrl.value = (_a = e.target) == null ? void 0 : _a.result;
      };
      reader.readAsDataURL(selectedFile);
    };
    const handlePaste = (event) => {
      var _a;
      const clipboardItems = (_a = event.clipboardData) == null ? void 0 : _a.items;
      if (!clipboardItems) {
        errorMessage.value = "\u041D\u0435\u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E \u043F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u0434\u0430\u043D\u043D\u044B\u0435 \u0438\u0437 \u0431\u0443\u0444\u0435\u0440\u0430 \u043E\u0431\u043C\u0435\u043D\u0430";
        return;
      }
      for (const item of clipboardItems) {
        if (item.type.startsWith("image/")) {
          const pastedFile = item.getAsFile();
          if (pastedFile) {
            validateAndSetFile(pastedFile);
            saveReview();
            if (pasteInput.value) pasteInput.value.value = "";
            return;
          }
        }
      }
      errorMessage.value = "\u0412 \u0431\u0443\u0444\u0435\u0440\u0435 \u043E\u0431\u043C\u0435\u043D\u0430 \u043D\u0435\u0442 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F";
    };
    const saveReview = async () => {
      var _a;
      if (!file.value) {
        errorMessage.value = "\u0424\u0430\u0439\u043B \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u0435\u043D \u0434\u043B\u044F \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0438";
        return;
      }
      isLoading.value = true;
      errorMessage.value = null;
      try {
        const formData = new FormData();
        formData.append("file", file.value);
        await $useApi.post(`attachments/tasks/${(_a = editTask.value) == null ? void 0 : _a.id}`, formData, {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        });
      } catch (error) {
        console.log(error);
      } finally {
        isLoading.value = false;
        await fetchFullTask();
      }
    };
    const formatSize = (bytes) => {
      if (bytes === 0) return "0 B";
      const k = 1024;
      const sizes = ["B", "KB", "MB", "GB", "TB"];
      const i = Math.floor(Math.log(bytes) / Math.log(k));
      return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
    };
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d;
      const _component_UiInput = _sfc_main$3;
      const _component_UiDropdownMenu = _sfc_main$3$1;
      const _component_UiDropdownMenuTrigger = _sfc_main$2$1;
      const _component_UiButton = _sfc_main$2;
      const _component_UiDropdownMenuContent = _sfc_main$1$1;
      const _component_UiDropdownMenuItem = _sfc_main$4;
      const _component_UiTextarea = _sfc_main$5;
      const _component_UiSeparator = _sfc_main$6;
      const _component_UiTabs = _sfc_main$2$2;
      const _component_UiTabsList = _sfc_main$7;
      const _component_UiTabsTrigger = _sfc_main$1$2;
      const _component_UiTabsContent = _sfc_main$8;
      const _component_ClientOnly = __nuxt_component_1$1;
      if (_ctx.open && unref(editTask)) {
        _push(`<div${ssrRenderAttrs(mergeProps({
          class: "fixed inset-0 z-50 flex items-start justify-center bg-black/40 p-4",
          role: "dialog",
          "aria-modal": "true"
        }, _attrs))} data-v-a85c60b6><div class="mt-10 w-full max-w-5xl rounded-2xl bg-white shadow-xl ring-1 ring-black/5" data-v-a85c60b6><div style="${ssrRenderStyle(unref(isLoading) || unref(isSavingVisible) ? null : { display: "none" })}" class="${ssrRenderClass([unref(isLoading) || unref(isSavingVisible) ? "opacity-100" : "opacity-0", "absolute inset-0 z-10 grid place-items-center rounded-2xl bg-white/60 backdrop-blur-[1px] text-sm text-neutral-600 transition-opacity duration-200"])}" data-v-a85c60b6>${ssrInterpolate(unref(isLoading) ? "\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430\u2026" : "\u0421\u043E\u0445\u0440\u0430\u043D\u044F\u044E\u2026")}</div><div class="flex items-center justify-between border-b px-5 py-4" data-v-a85c60b6>`);
        _push(ssrRenderComponent(_component_UiInput, {
          modelValue: unref(editTask).title,
          "onUpdate:modelValue": ($event) => unref(editTask).title = $event,
          class: "w-full rounded-lg border border-neutral-200 px-3 py-2 text-base font-semibold outline-none focus:ring-2 focus:ring-indigo-500",
          placeholder: "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0438",
          onInput: scheduleSave
        }, null, _parent));
        _push(ssrRenderComponent(_component_UiDropdownMenu, null, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_UiDropdownMenuTrigger, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UiButton, {
                      class: "ml-3 size-9 p-0",
                      title: "\u0414\u0435\u0439\u0441\u0442\u0432\u0438\u044F",
                      variant: "outline"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(unref(EllipsisVertical), null, null, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(unref(EllipsisVertical))
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_UiButton, {
                        class: "ml-3 size-9 p-0",
                        title: "\u0414\u0435\u0439\u0441\u0442\u0432\u0438\u044F",
                        variant: "outline"
                      }, {
                        default: withCtx(() => [
                          createVNode(unref(EllipsisVertical))
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UiDropdownMenuContent, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UiDropdownMenuItem, null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`\u041F\u0435\u0440\u0435\u043C\u0435\u0441\u0442\u0438\u0442\u044C \u0432 \u0430\u0440\u0445\u0438\u0432`);
                        } else {
                          return [
                            createTextVNode("\u041F\u0435\u0440\u0435\u043C\u0435\u0441\u0442\u0438\u0442\u044C \u0432 \u0430\u0440\u0445\u0438\u0432")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_UiDropdownMenuItem, null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`\u0414\u0443\u0431\u043B\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0443`);
                        } else {
                          return [
                            createTextVNode("\u0414\u0443\u0431\u043B\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0443")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_UiDropdownMenuItem, {
                      onClick: ($event) => emitDelete()
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0443`);
                        } else {
                          return [
                            createTextVNode("\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0443")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_UiDropdownMenuItem, null, {
                        default: withCtx(() => [
                          createTextVNode("\u041F\u0435\u0440\u0435\u043C\u0435\u0441\u0442\u0438\u0442\u044C \u0432 \u0430\u0440\u0445\u0438\u0432")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_UiDropdownMenuItem, null, {
                        default: withCtx(() => [
                          createTextVNode("\u0414\u0443\u0431\u043B\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0443")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_UiDropdownMenuItem, {
                        onClick: ($event) => emitDelete()
                      }, {
                        default: withCtx(() => [
                          createTextVNode("\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0443")
                        ]),
                        _: 1
                      }, 8, ["onClick"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_UiDropdownMenuTrigger, null, {
                  default: withCtx(() => [
                    createVNode(_component_UiButton, {
                      class: "ml-3 size-9 p-0",
                      title: "\u0414\u0435\u0439\u0441\u0442\u0432\u0438\u044F",
                      variant: "outline"
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(EllipsisVertical))
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode(_component_UiDropdownMenuContent, null, {
                  default: withCtx(() => [
                    createVNode(_component_UiDropdownMenuItem, null, {
                      default: withCtx(() => [
                        createTextVNode("\u041F\u0435\u0440\u0435\u043C\u0435\u0441\u0442\u0438\u0442\u044C \u0432 \u0430\u0440\u0445\u0438\u0432")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_UiDropdownMenuItem, null, {
                      default: withCtx(() => [
                        createTextVNode("\u0414\u0443\u0431\u043B\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0443")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_UiDropdownMenuItem, {
                      onClick: ($event) => emitDelete()
                    }, {
                      default: withCtx(() => [
                        createTextVNode("\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0443")
                      ]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_UiButton, {
          class: "p-0 ml-3 size-9",
          title: "\u0417\u0430\u043A\u0440\u044B\u0442\u044C",
          variant: "default",
          onClick: ($event) => close()
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(unref(X), null, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(unref(X))
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div><div class="relative grid gap-6 px-5 pb-5 pt-2 md:grid-cols-4" data-v-a85c60b6><div class="md:col-span-2" data-v-a85c60b6><div class="mb-4 space-y-1" data-v-a85c60b6><div class="text-sm text-neutral-700" data-v-a85c60b6><span class="font-medium" data-v-a85c60b6>\u0421\u043E\u0437\u0434\u0430\u0442\u0435\u043B\u044C:</span> ${ssrInterpolate(((_a = unref(editTask).creator) == null ? void 0 : _a.fullName) || ((_b = unref(editTask).creator) == null ? void 0 : _b.email) || "\u2014")}</div><div class="text-xs text-neutral-500" data-v-a85c60b6><span class="font-medium" data-v-a85c60b6>\u0420\u0430\u0441\u043F\u043E\u043B\u043E\u0436\u0435\u043D\u0438\u0435:</span> ${ssrInterpolate(((_c = unref(editTask).board) == null ? void 0 : _c.title) || "\u2014")} / ${ssrInterpolate(((_d = unref(editTask).column) == null ? void 0 : _d.title) || "sd")}</div><div class="text-xs text-neutral-500" data-v-a85c60b6><span class="font-medium" data-v-a85c60b6>\u0421\u043E\u0437\u0434\u0430\u043D\u0430:</span> ${ssrInterpolate(unref(editTask).createdAt || "\u2014")}</div></div><label class="block text-sm font-medium text-neutral-700" data-v-a85c60b6>\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435</label>`);
        _push(ssrRenderComponent(_component_UiTextarea, {
          modelValue: unref(editTask).description,
          "onUpdate:modelValue": ($event) => unref(editTask).description = $event,
          rows: "6",
          class: "mt-1 h-[600px] w-full resize-y rounded-xl border border-neutral-200 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-indigo-500",
          placeholder: "\u041E\u043F\u0438\u0448\u0438\u0442\u0435 \u0437\u0430\u0434\u0430\u0447\u0443, \u043A\u0440\u0438\u0442\u0435\u0440\u0438\u0438 \u043F\u0440\u0438\u0451\u043C\u043A\u0438, \u0447\u0435\u043A-\u043B\u0438\u0441\u0442 \u0438 \u0442.\u0434.",
          onInput: scheduleSave
        }, null, _parent));
        _push(`</div>`);
        _push(ssrRenderComponent(_component_UiSeparator, {
          orientation: "vertical",
          class: "absolute left-[50%]"
        }, null, _parent));
        _push(`<aside class="md:col-span-2 space-y-4" data-v-a85c60b6><div class="w-full" data-v-a85c60b6>`);
        _push(ssrRenderComponent(_component_UiTabs, { "default-value": "attachments" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_UiTabsList, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_UiTabsTrigger, { value: "attachments" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        var _a2, _b2;
                        if (_push4) {
                          _push4(` \u0424\u0430\u0439\u043B\u044B (${ssrInterpolate(((_a2 = unref(editTask).attachments) == null ? void 0 : _a2.length) || 0)}) `);
                        } else {
                          return [
                            createTextVNode(" \u0424\u0430\u0439\u043B\u044B (" + toDisplayString(((_b2 = unref(editTask).attachments) == null ? void 0 : _b2.length) || 0) + ") ", 1)
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_UiTabsTrigger, { value: "comments" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(` \u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0438 `);
                        } else {
                          return [
                            createTextVNode(" \u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0438 ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_UiTabsTrigger, { value: "audit" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(` \u0418\u0441\u0442\u043E\u0440\u0438\u044F `);
                        } else {
                          return [
                            createTextVNode(" \u0418\u0441\u0442\u043E\u0440\u0438\u044F ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_UiTabsTrigger, { value: "attachments" }, {
                        default: withCtx(() => {
                          var _a2;
                          return [
                            createTextVNode(" \u0424\u0430\u0439\u043B\u044B (" + toDisplayString(((_a2 = unref(editTask).attachments) == null ? void 0 : _a2.length) || 0) + ") ", 1)
                          ];
                        }),
                        _: 1
                      }),
                      createVNode(_component_UiTabsTrigger, { value: "comments" }, {
                        default: withCtx(() => [
                          createTextVNode(" \u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0438 ")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_UiTabsTrigger, { value: "audit" }, {
                        default: withCtx(() => [
                          createTextVNode(" \u0418\u0441\u0442\u043E\u0440\u0438\u044F ")
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UiTabsContent, { value: "attachments" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  var _a2, _b2, _c2, _d2;
                  if (_push3) {
                    _push3(`<div class="" data-v-a85c60b6${_scopeId2}><div class="flex flex-col gap-2" data-v-a85c60b6${_scopeId2}><div class="flex items-center gap-2" data-v-a85c60b6${_scopeId2}><input type="text" placeholder="Ctrl+V" readonly class="px-2 py-1 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500" data-v-a85c60b6${_scopeId2}><input id="file-input" type="file" accept="image/jpeg,image/png" class="hidden" data-v-a85c60b6${_scopeId2}><label for="file-input" class="w-full text-center bg-slate-800 text-slate-100 cursor-pointer px-4 py-1 rounded inline-block hover:bg-slate-700" data-v-a85c60b6${_scopeId2}> \u0412\u044B\u0431\u0440\u0430\u0442\u044C </label></div>`);
                    if (unref(errorMessage)) {
                      _push3(`<div class="text-red-500 text-sm mt-1" data-v-a85c60b6${_scopeId2}>${ssrInterpolate(unref(errorMessage))}</div>`);
                    } else {
                      _push3(`<!---->`);
                    }
                    _push3(`</div><div class="flex flex-wrap gap-3 mt-5" data-v-a85c60b6${_scopeId2}>`);
                    if ((((_a2 = unref(editTask).attachments) == null ? void 0 : _a2.length) || 0) === 0) {
                      _push3(`<div class="text-sm text-neutral-500" data-v-a85c60b6${_scopeId2}> \u0424\u0430\u0439\u043B\u043E\u0432 \u043F\u043E\u043A\u0430 \u043D\u0435\u0442 </div>`);
                    } else {
                      _push3(`<!---->`);
                    }
                    _push3(`</div>`);
                    if ((_b2 = unref(editTask).attachments) == null ? void 0 : _b2.length) {
                      _push3(`<div class="space-y-4" data-v-a85c60b6${_scopeId2}><!--[-->`);
                      ssrRenderList(unref(editTask).attachments, (att) => {
                        _push3(`<div class="relative flex items-center overflow-hidden rounded-xl border cursor-pointer hover:bg-neutral-50" data-v-a85c60b6${_scopeId2}>`);
                        _push3(ssrRenderComponent(_component_ClientOnly, null, {}, _parent3, _scopeId2));
                        _push3(`<div class="flex-1 p-2" data-v-a85c60b6${_scopeId2}><div class="text-sm font-medium hover:underline" data-v-a85c60b6${_scopeId2}>${ssrInterpolate(att.file.name)} (${ssrInterpolate(formatSize(att.file.size))}) </div><div class="text-xs text-neutral-500" data-v-a85c60b6${_scopeId2}> \u0414\u043E\u0431\u0430\u0432\u043B\u0435\u043D: ${ssrInterpolate(att.createdAt)} | ${ssrInterpolate(att.file.uploadedBy.fullName)}</div><div class="absolute top-1 right-2" data-v-a85c60b6${_scopeId2}>`);
                        _push3(ssrRenderComponent(_component_UiButton, {
                          class: "px-1 h-5 ml-auto",
                          title: "\u0423\u0434\u0430\u043B\u0438\u0442\u044C",
                          variant: "destructive",
                          onClick: [($event) => removeAttachment(att.file.id), () => {
                          }]
                        }, {
                          default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                            if (_push4) {
                              _push4(` \u2715 `);
                            } else {
                              return [
                                createTextVNode(" \u2715 ")
                              ];
                            }
                          }),
                          _: 2
                        }, _parent3, _scopeId2));
                        _push3(`</div></div></div>`);
                      });
                      _push3(`<!--]--></div>`);
                    } else {
                      _push3(`<!---->`);
                    }
                    _push3(`</div>`);
                  } else {
                    return [
                      createVNode("div", { class: "" }, [
                        createVNode("div", { class: "flex flex-col gap-2" }, [
                          createVNode("div", { class: "flex items-center gap-2" }, [
                            createVNode("input", {
                              ref_key: "pasteInput",
                              ref: pasteInput,
                              type: "text",
                              placeholder: "Ctrl+V",
                              readonly: "",
                              class: "px-2 py-1 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500",
                              onPaste: handlePaste,
                              onFocus,
                              onBlur
                            }, null, 544),
                            createVNode("input", {
                              id: "file-input",
                              type: "file",
                              accept: "image/jpeg,image/png",
                              class: "hidden",
                              onChange: getFile
                            }, null, 32),
                            createVNode("label", {
                              for: "file-input",
                              class: "w-full text-center bg-slate-800 text-slate-100 cursor-pointer px-4 py-1 rounded inline-block hover:bg-slate-700"
                            }, " \u0412\u044B\u0431\u0440\u0430\u0442\u044C ")
                          ]),
                          unref(errorMessage) ? (openBlock(), createBlock("div", {
                            key: 0,
                            class: "text-red-500 text-sm mt-1"
                          }, toDisplayString(unref(errorMessage)), 1)) : createCommentVNode("", true)
                        ]),
                        createVNode("div", { class: "flex flex-wrap gap-3 mt-5" }, [
                          (((_c2 = unref(editTask).attachments) == null ? void 0 : _c2.length) || 0) === 0 ? (openBlock(), createBlock("div", {
                            key: 0,
                            class: "text-sm text-neutral-500"
                          }, " \u0424\u0430\u0439\u043B\u043E\u0432 \u043F\u043E\u043A\u0430 \u043D\u0435\u0442 ")) : createCommentVNode("", true)
                        ]),
                        ((_d2 = unref(editTask).attachments) == null ? void 0 : _d2.length) ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: "space-y-4"
                        }, [
                          (openBlock(true), createBlock(Fragment, null, renderList(unref(editTask).attachments, (att) => {
                            return openBlock(), createBlock("div", {
                              key: att.id,
                              class: "relative flex items-center overflow-hidden rounded-xl border cursor-pointer hover:bg-neutral-50",
                              onClick: ($event) => openAttachment(att.file)
                            }, [
                              createVNode(_component_ClientOnly, null, {
                                default: withCtx(() => [
                                  att.file.mimeType === "image/jpeg" || att.file.mimeType === "image/png" ? (openBlock(), createBlock("img", {
                                    key: 0,
                                    src: att.file.preview,
                                    alt: "",
                                    class: "h-28 w-28 object-cover",
                                    loading: "lazy",
                                    referrerpolicy: "no-referrer"
                                  }, null, 8, ["src"])) : (openBlock(), createBlock("div", {
                                    key: 1,
                                    class: "h-28 w-28 flex items-center justify-center bg-neutral-50 text-neutral-600"
                                  }, [
                                    createVNode("span", { class: "text-xs" }, toDisplayString(att.file.name.split(".").pop()), 1)
                                  ]))
                                ]),
                                _: 2
                              }, 1024),
                              createVNode("div", { class: "flex-1 p-2" }, [
                                createVNode("div", { class: "text-sm font-medium hover:underline" }, toDisplayString(att.file.name) + " (" + toDisplayString(formatSize(att.file.size)) + ") ", 1),
                                createVNode("div", { class: "text-xs text-neutral-500" }, " \u0414\u043E\u0431\u0430\u0432\u043B\u0435\u043D: " + toDisplayString(att.createdAt) + " | " + toDisplayString(att.file.uploadedBy.fullName), 1),
                                createVNode("div", { class: "absolute top-1 right-2" }, [
                                  createVNode(_component_UiButton, {
                                    class: "px-1 h-5 ml-auto",
                                    title: "\u0423\u0434\u0430\u043B\u0438\u0442\u044C",
                                    variant: "destructive",
                                    onClick: [
                                      ($event) => removeAttachment(att.file.id),
                                      withModifiers(() => {
                                      }, ["stop"])
                                    ]
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" \u2715 ")
                                    ]),
                                    _: 2
                                  }, 1032, ["onClick"])
                                ])
                              ])
                            ], 8, ["onClick"]);
                          }), 128))
                        ])) : createCommentVNode("", true)
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_UiTabsList, null, {
                  default: withCtx(() => [
                    createVNode(_component_UiTabsTrigger, { value: "attachments" }, {
                      default: withCtx(() => {
                        var _a2;
                        return [
                          createTextVNode(" \u0424\u0430\u0439\u043B\u044B (" + toDisplayString(((_a2 = unref(editTask).attachments) == null ? void 0 : _a2.length) || 0) + ") ", 1)
                        ];
                      }),
                      _: 1
                    }),
                    createVNode(_component_UiTabsTrigger, { value: "comments" }, {
                      default: withCtx(() => [
                        createTextVNode(" \u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0438 ")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_UiTabsTrigger, { value: "audit" }, {
                      default: withCtx(() => [
                        createTextVNode(" \u0418\u0441\u0442\u043E\u0440\u0438\u044F ")
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode(_component_UiTabsContent, { value: "attachments" }, {
                  default: withCtx(() => {
                    var _a2, _b2;
                    return [
                      createVNode("div", { class: "" }, [
                        createVNode("div", { class: "flex flex-col gap-2" }, [
                          createVNode("div", { class: "flex items-center gap-2" }, [
                            createVNode("input", {
                              ref_key: "pasteInput",
                              ref: pasteInput,
                              type: "text",
                              placeholder: "Ctrl+V",
                              readonly: "",
                              class: "px-2 py-1 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500",
                              onPaste: handlePaste,
                              onFocus,
                              onBlur
                            }, null, 544),
                            createVNode("input", {
                              id: "file-input",
                              type: "file",
                              accept: "image/jpeg,image/png",
                              class: "hidden",
                              onChange: getFile
                            }, null, 32),
                            createVNode("label", {
                              for: "file-input",
                              class: "w-full text-center bg-slate-800 text-slate-100 cursor-pointer px-4 py-1 rounded inline-block hover:bg-slate-700"
                            }, " \u0412\u044B\u0431\u0440\u0430\u0442\u044C ")
                          ]),
                          unref(errorMessage) ? (openBlock(), createBlock("div", {
                            key: 0,
                            class: "text-red-500 text-sm mt-1"
                          }, toDisplayString(unref(errorMessage)), 1)) : createCommentVNode("", true)
                        ]),
                        createVNode("div", { class: "flex flex-wrap gap-3 mt-5" }, [
                          (((_a2 = unref(editTask).attachments) == null ? void 0 : _a2.length) || 0) === 0 ? (openBlock(), createBlock("div", {
                            key: 0,
                            class: "text-sm text-neutral-500"
                          }, " \u0424\u0430\u0439\u043B\u043E\u0432 \u043F\u043E\u043A\u0430 \u043D\u0435\u0442 ")) : createCommentVNode("", true)
                        ]),
                        ((_b2 = unref(editTask).attachments) == null ? void 0 : _b2.length) ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: "space-y-4"
                        }, [
                          (openBlock(true), createBlock(Fragment, null, renderList(unref(editTask).attachments, (att) => {
                            return openBlock(), createBlock("div", {
                              key: att.id,
                              class: "relative flex items-center overflow-hidden rounded-xl border cursor-pointer hover:bg-neutral-50",
                              onClick: ($event) => openAttachment(att.file)
                            }, [
                              createVNode(_component_ClientOnly, null, {
                                default: withCtx(() => [
                                  att.file.mimeType === "image/jpeg" || att.file.mimeType === "image/png" ? (openBlock(), createBlock("img", {
                                    key: 0,
                                    src: att.file.preview,
                                    alt: "",
                                    class: "h-28 w-28 object-cover",
                                    loading: "lazy",
                                    referrerpolicy: "no-referrer"
                                  }, null, 8, ["src"])) : (openBlock(), createBlock("div", {
                                    key: 1,
                                    class: "h-28 w-28 flex items-center justify-center bg-neutral-50 text-neutral-600"
                                  }, [
                                    createVNode("span", { class: "text-xs" }, toDisplayString(att.file.name.split(".").pop()), 1)
                                  ]))
                                ]),
                                _: 2
                              }, 1024),
                              createVNode("div", { class: "flex-1 p-2" }, [
                                createVNode("div", { class: "text-sm font-medium hover:underline" }, toDisplayString(att.file.name) + " (" + toDisplayString(formatSize(att.file.size)) + ") ", 1),
                                createVNode("div", { class: "text-xs text-neutral-500" }, " \u0414\u043E\u0431\u0430\u0432\u043B\u0435\u043D: " + toDisplayString(att.createdAt) + " | " + toDisplayString(att.file.uploadedBy.fullName), 1),
                                createVNode("div", { class: "absolute top-1 right-2" }, [
                                  createVNode(_component_UiButton, {
                                    class: "px-1 h-5 ml-auto",
                                    title: "\u0423\u0434\u0430\u043B\u0438\u0442\u044C",
                                    variant: "destructive",
                                    onClick: [
                                      ($event) => removeAttachment(att.file.id),
                                      withModifiers(() => {
                                      }, ["stop"])
                                    ]
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" \u2715 ")
                                    ]),
                                    _: 2
                                  }, 1032, ["onClick"])
                                ])
                              ])
                            ], 8, ["onClick"]);
                          }), 128))
                        ])) : createCommentVNode("", true)
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
        _push(`</div></aside></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/my/kanban/TaskModal.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-a85c60b6"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[id]",
  __ssrInlineRender: true,
  setup(__props) {
    const { $api } = useNuxtApp();
    const route = useRoute();
    const curBoardId = computed(() => Number(route.params.id));
    useHead({
      title: computed(() => `\u0414\u043E\u0441\u043A\u0430 | Easy CRM`)
    });
    const columns = ref([]);
    async function fetchKanban(boardId) {
      var _a;
      try {
        const data = await $api.$get(`/boards/${boardId}/kanban`);
        useHead({
          title: computed(() => `\u0414\u043E\u0441\u043A\u0430 ${data.title} | Easy CRM`)
        });
        columns.value = (_a = data == null ? void 0 : data.columns) != null ? _a : [];
      } catch (e) {
        console.log(e);
      }
    }
    async function createColumn() {
      if (!curBoardId.value) return;
      try {
        const data = await $api.$post(`columns`, {
          title: "\u041D\u043E\u0432\u0430\u044F \u043A\u043E\u043B\u043E\u043D\u043A\u0430",
          boardId: curBoardId.value
        });
        const c = data;
        if (c) {
          columns.value.push({
            id: c.id,
            title: c.title,
            tasks: [],
            position: c.position
          });
        }
      } catch (e) {
        console.error("createColumn failed", e);
      }
    }
    const activeTaskId = ref(0);
    const activeColumnId = ref(0);
    const ui = reactive({
      editOpen: false,
      tagDraft: "",
      moveToColumnId: 0
    });
    function closeTaskModal() {
      ui.editOpen = false;
      activeTaskId.value = 0;
    }
    function onDeleteTask(taskId) {
      const col = columnById(activeColumnId.value);
      if (!col) return;
      col.tasks = col.tasks.filter((t) => t.id !== taskId);
      closeTaskModal();
    }
    function columnById(id) {
      return columns.value.find((c) => c.id === id);
    }
    watch(
      curBoardId,
      async (val) => {
        await fetchKanban(val);
      },
      { deep: true }
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiButton = _sfc_main$2;
      const _component_ClientOnly = __nuxt_component_1$1;
      const _component_MyKanbanTaskModal = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(_attrs)}><header><div class="bg-slate-200/70 px-4 py-4 flex justify-end">`);
      if (unref(curBoardId)) {
        _push(`<div>`);
        _push(ssrRenderComponent(_component_UiButton, {
          class: "rounded-xl border border-neutral-200 bg-white px-3 py-2 text-sm font-medium hover:bg-neutral-50 active:scale-[0.99]",
          variant: "ghost",
          onClick: ($event) => createColumn()
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` + \u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043A\u043E\u043B\u043E\u043D\u043A\u0443 `);
            } else {
              return [
                createTextVNode(" + \u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043A\u043E\u043B\u043E\u043D\u043A\u0443 ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></header><main class="px-4 pt-6">`);
      _push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
      _push(`</main>`);
      _push(ssrRenderComponent(_component_MyKanbanTaskModal, {
        open: unref(ui).editOpen,
        "onUpdate:open": [
          ($event) => unref(ui).editOpen = $event,
          (v) => {
            unref(ui).editOpen = v;
            if (!v) fetchKanban(unref(curBoardId));
          }
        ],
        "task-id": unref(activeTaskId),
        "column-id": +unref(activeColumnId),
        columns: unref(columns),
        "board-id": unref(curBoardId),
        onDelete: onDeleteTask
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/boards/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_id_-Cj01UvpN.mjs.map
