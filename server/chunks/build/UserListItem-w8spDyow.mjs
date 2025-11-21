import { defineComponent, ref, computed, withCtx, unref, createBlock, openBlock, createCommentVNode, toDisplayString, createVNode, mergeProps, renderSlot, reactive, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderClass, ssrRenderAttr, ssrRenderStyle, ssrInterpolate, ssrRenderAttrs, ssrRenderSlot } from 'vue/server-renderer';
import { useForwardPropsEmits, HoverCardRoot, HoverCardTrigger, useForwardProps, HoverCardPortal, HoverCardContent } from 'reka-ui';
import { reactiveOmit } from '@vueuse/core';
import { c as cn } from './utils-TCWotVPY.mjs';
import { b as useNuxtApp, d as useRuntimeConfig } from './server.mjs';

const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "HoverCard",
  __ssrInlineRender: true,
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean },
    openDelay: {},
    closeDelay: {}
  },
  emits: ["update:open"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const forwarded = useForwardPropsEmits(props, emits);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(HoverCardRoot), mergeProps({ "data-slot": "hover-card" }, unref(forwarded), _attrs), {
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
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/hover-card/HoverCard.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "HoverCardContent",
  __ssrInlineRender: true,
  props: {
    forceMount: { type: Boolean },
    side: {},
    sideOffset: { default: 4 },
    sideFlip: { type: Boolean },
    align: {},
    alignOffset: {},
    alignFlip: { type: Boolean },
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: {},
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean },
    positionStrategy: {},
    updatePositionStrategy: {},
    disableUpdateOnLayoutShift: { type: Boolean },
    prioritizePosition: { type: Boolean },
    reference: {},
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(__props) {
    const props = __props;
    const delegatedProps = reactiveOmit(props, "class");
    const forwardedProps = useForwardProps(delegatedProps);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(HoverCardPortal), _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(HoverCardContent), mergeProps({ "data-slot": "hover-card-content" }, unref(forwardedProps), {
              class: unref(cn)(
                "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-64 rounded-md border p-4 shadow-md outline-hidden",
                props.class
              )
            }), {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push3, _parent3, _scopeId2);
                } else {
                  return [
                    renderSlot(_ctx.$slots, "default")
                  ];
                }
              }),
              _: 3
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(HoverCardContent), mergeProps({ "data-slot": "hover-card-content" }, unref(forwardedProps), {
                class: unref(cn)(
                  "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-64 rounded-md border p-4 shadow-md outline-hidden",
                  props.class
                )
              }), {
                default: withCtx(() => [
                  renderSlot(_ctx.$slots, "default")
                ]),
                _: 3
              }, 16, ["class"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/hover-card/HoverCardContent.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "HoverCardTrigger",
  __ssrInlineRender: true,
  props: {
    reference: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(HoverCardTrigger), mergeProps({ "data-slot": "hover-card-trigger" }, props, _attrs), {
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
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/hover-card/HoverCardTrigger.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const THUMB_W = 480;
const THUMB_FMT = "webp";
const previewCache = reactive({});
const downloadCache = reactive({});
function qs(obj) {
  return new URLSearchParams(
    Object.fromEntries(
      Object.entries(obj).filter(
        ([, v]) => v !== void 0 && v !== null && v !== ""
      )
    )
  ).toString();
}
function useAttachments() {
  var _a, _b;
  const { $useApi } = useNuxtApp();
  const config = useRuntimeConfig();
  const apiBase = ((_b = (_a = config.public) == null ? void 0 : _a.baseURL) != null ? _b : "").replace(/\/+$/, "");
  function buildPreviewProxySrc(path, bust, w = THUMB_W) {
    const q = { path, w, format: THUMB_FMT, v: bust };
    return `${apiBase}/attachments/preview-file?${qs(q)}`;
  }
  function buildDownloadProxySrc(path) {
    return `${apiBase}/attachments/download-file?${qs({ path })}`;
  }
  function getPreviewSrc(rawPath, width) {
    const path = unref(rawPath);
    if (!path) return "";
    const w = width != null ? width : THUMB_W;
    const key = `${path}|w=${w}`;
    {
      if (!previewCache[key]) {
        previewCache[key] = buildPreviewProxySrc(path, void 0, w);
      }
      return previewCache[key];
    }
  }
  async function refreshPreview(rawPath, width) {
    const path = unref(rawPath);
    if (!path) return;
    const w = width != null ? width : THUMB_W;
    const key = `${path}|w=${w}`;
    {
      previewCache[key] = buildPreviewProxySrc(path, Date.now(), w);
      return;
    }
  }
  function getDownloadSrc(rawPath) {
    const path = unref(rawPath);
    if (!path) return "";
    const key = path;
    {
      if (!downloadCache[key]) downloadCache[key] = buildDownloadProxySrc(path);
      return downloadCache[key];
    }
  }
  async function downloadAttachment(rawPath, filename) {
    const path = unref(rawPath);
    if (!path) return;
    let href = downloadCache[path];
    if (!href) {
      {
        href = buildDownloadProxySrc(path);
        downloadCache[path] = href;
      }
    }
    if (!href) return;
    if (filename) {
      try {
        const resp = await $useApi.get(href, {
          responseType: "blob"
        });
        const blob = new Blob([resp.data]);
        const blobUrl = URL.createObjectURL(blob);
        const a2 = (void 0).createElement("a");
        a2.href = blobUrl;
        a2.download = filename;
        a2.rel = "noopener noreferrer";
        (void 0).body.appendChild(a2);
        a2.click();
        a2.remove();
        setTimeout(() => URL.revokeObjectURL(blobUrl), 1e4);
        return;
      } catch (_) {
      }
    }
    const a = (void 0).createElement("a");
    a.href = href;
    if (filename) a.download = filename;
    a.target = "_blank";
    a.rel = "noopener noreferrer";
    (void 0).body.appendChild(a);
    a.click();
    a.remove();
  }
  async function openAttachment(att) {
    const { path, mimeType, name } = att;
    if (!path) return;
    if (["image/jpeg", "image/png", "image/webp"].includes(mimeType)) {
      {
        const u = new URL(buildPreviewProxySrc(path));
        u.searchParams.set("w", "1920");
        (void 0).open(u.toString(), "_blank", "noopener,noreferrer");
        return;
      }
    }
    await downloadAttachment(path, name);
  }
  function getPreviewSrcset(rawPath, baseW = THUMB_W) {
    const path = unref(rawPath);
    if (!path) return "";
    const src1x = buildPreviewProxySrc(path, void 0, baseW);
    const src2x = buildPreviewProxySrc(path, void 0, baseW * 2);
    return `${src1x} 1x, ${src2x} 2x`;
  }
  function invalidateByPath(path) {
    Object.keys(previewCache).filter((k) => k.startsWith(`${path}|w=`)).forEach((k) => Reflect.deleteProperty(previewCache, k));
    Reflect.deleteProperty(downloadCache, path);
  }
  function invalidateMany(paths) {
    paths.forEach(invalidateByPath);
  }
  const erroredOnce = /* @__PURE__ */ new Set();
  async function onImgError(path, width) {
    if (erroredOnce.has(path)) return;
    erroredOnce.add(path);
    try {
      await refreshPreview(path, width);
    } finally {
      setTimeout(() => erroredOnce.delete(path), 3e4);
    }
  }
  return {
    // превью
    getPreviewSrc,
    getPreviewSrcset,
    refreshPreview,
    // скачивание
    getDownloadSrc,
    downloadAttachment,
    // общий обработчик
    openAttachment,
    // инвалидация
    invalidateByPath,
    invalidateMany,
    onImgError
  };
}
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "UserListItem",
  __ssrInlineRender: true,
  props: {
    fullName: {},
    roleName: {},
    size: {},
    hover: { type: Boolean },
    info: {},
    avatarUrl: {},
    hideFullName: { type: Boolean },
    dark: { type: Boolean },
    tg: {}
  },
  setup(__props) {
    const _previewMemo = /* @__PURE__ */ new Map();
    function memoGetPreviewSrc(url, w) {
      if (!url) return void 0;
      const key = w ? `${url}|w=${w}` : url;
      const hit = _previewMemo.get(key);
      if (hit) return hit;
      const out = getPreviewSrc(url, w);
      _previewMemo.set(key, out);
      return out;
    }
    const clientReady = ref(false);
    const avatarW = computed(() => {
      switch (props.size) {
        case "sm":
          return 28;
        // px
        case "lg":
          return 40;
        default:
          return 32;
      }
    });
    const imgSrc = computed(() => {
      if (!clientReady.value) return void 0;
      return memoGetPreviewSrc(props.avatarUrl, avatarW.value);
    });
    const props = __props;
    function getInitials(fullName) {
      const name = (fullName || "").trim().replace(/\s+/g, " ");
      if (!name) return "\u220E";
      const parts = name.split(" ");
      if (parts.length >= 2) return (parts[0][0] + parts[1][0]).toUpperCase();
      return name.slice(0, 2).toUpperCase();
    }
    function hslFromName(name) {
      const str = (name || "").toLowerCase();
      let hash = 5381;
      for (let i = 0; i < str.length; i++) {
        hash = (hash << 5) + hash + str.charCodeAt(i);
        hash |= 0;
      }
      const h = Math.abs(hash) % 360;
      return { h, s: 65, l: 45 };
    }
    const avatarStyle = computed(() => {
      const { h, s, l } = hslFromName(props.fullName);
      return { backgroundColor: `hsl(${h}deg ${s}% ${l}%)`, color: "#fff" };
    });
    const sizeClass = computed(() => {
      switch (props.size) {
        case "sm":
          return "h-7 w-7 text-[10px]";
        case "lg":
          return "h-10 w-10 text-sm";
        default:
          return "h-8 w-8 text-xs";
      }
    });
    const { getPreviewSrc, getPreviewSrcset, onImgError } = useAttachments();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiHoverCard = _sfc_main$3;
      const _component_UiHoverCardTrigger = _sfc_main$1;
      const _component_UiHoverCardContent = _sfc_main$2;
      if (_ctx.hover) {
        _push(ssrRenderComponent(_component_UiHoverCard, _attrs, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_UiHoverCardTrigger, { "as-child": "" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    if (_ctx.avatarUrl) {
                      _push3(`<div class="${ssrRenderClass([unref(sizeClass), "inline-flex items-center justify-center rounded-full cursor-pointer"])}" aria-hidden="true"${_scopeId2}>`);
                      if (unref(imgSrc)) {
                        _push3(`<img${ssrRenderAttr("src", unref(imgSrc))}${ssrRenderAttr("srcset", unref(getPreviewSrcset)(_ctx.avatarUrl, unref(avatarW)))} alt="avatar" class="w-full h-full rounded-full object-cover" loading="lazy" referrerpolicy="no-referrer"${_scopeId2}>`);
                      } else {
                        _push3(`<!---->`);
                      }
                      _push3(`</div>`);
                    } else {
                      _push3(`<div class="${ssrRenderClass([unref(sizeClass), "inline-flex items-center justify-center cursor-pointer rounded-full font-semibold"])}" style="${ssrRenderStyle(unref(avatarStyle))}" aria-hidden="true"${_scopeId2}>${ssrInterpolate(getInitials(_ctx.fullName))}</div>`);
                    }
                  } else {
                    return [
                      _ctx.avatarUrl ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: ["inline-flex items-center justify-center rounded-full cursor-pointer", unref(sizeClass)],
                        "aria-hidden": "true"
                      }, [
                        unref(imgSrc) ? (openBlock(), createBlock("img", {
                          key: unref(imgSrc),
                          src: unref(imgSrc),
                          srcset: unref(getPreviewSrcset)(_ctx.avatarUrl, unref(avatarW)),
                          alt: "avatar",
                          class: "w-full h-full rounded-full object-cover",
                          loading: "lazy",
                          referrerpolicy: "no-referrer",
                          onError: () => unref(onImgError)(_ctx.avatarUrl, unref(avatarW))
                        }, null, 40, ["src", "srcset", "onError"])) : createCommentVNode("", true)
                      ], 2)) : (openBlock(), createBlock("div", {
                        key: 1,
                        class: ["inline-flex items-center justify-center cursor-pointer rounded-full font-semibold", unref(sizeClass)],
                        style: unref(avatarStyle),
                        "aria-hidden": "true"
                      }, toDisplayString(getInitials(_ctx.fullName)), 7))
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UiHoverCardContent, { class: "w-56" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="flex items-center gap-3"${_scopeId2}>`);
                    if (_ctx.avatarUrl) {
                      _push3(`<div class="${ssrRenderClass([unref(sizeClass), "flex items-center justify-center rounded-full shrink-0"])}" aria-hidden="true"${_scopeId2}>`);
                      if (unref(imgSrc)) {
                        _push3(`<img${ssrRenderAttr("src", unref(imgSrc))}${ssrRenderAttr("srcset", unref(getPreviewSrcset)(_ctx.avatarUrl, unref(avatarW)))} alt="avatar" class="w-full h-full rounded-full object-cover" loading="lazy" referrerpolicy="no-referrer"${_scopeId2}>`);
                      } else {
                        _push3(`<!---->`);
                      }
                      _push3(`</div>`);
                    } else {
                      _push3(`<div class="${ssrRenderClass([unref(sizeClass), "flex items-center justify-center rounded-full font-semibold shrink-0"])}" style="${ssrRenderStyle(unref(avatarStyle))}" aria-hidden="true"${_scopeId2}>${ssrInterpolate(getInitials(_ctx.fullName))}</div>`);
                    }
                    _push3(`<div class="min-w-0"${_scopeId2}><div class="font-medium"${_scopeId2}>${ssrInterpolate(_ctx.fullName || "\u2014")}</div><span class="text-xs text-neutral-500 truncate"${_scopeId2}>${ssrInterpolate(_ctx.tg)}</span>`);
                    if (_ctx.roleName) {
                      _push3(`<div class="text-xs text-gray-600 truncate"${_scopeId2}>${ssrInterpolate(_ctx.roleName)}</div>`);
                    } else {
                      _push3(`<!---->`);
                    }
                    _push3(`</div></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "flex items-center gap-3" }, [
                        _ctx.avatarUrl ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: ["flex items-center justify-center rounded-full shrink-0", unref(sizeClass)],
                          "aria-hidden": "true"
                        }, [
                          unref(imgSrc) ? (openBlock(), createBlock("img", {
                            key: unref(imgSrc),
                            src: unref(imgSrc),
                            srcset: unref(getPreviewSrcset)(_ctx.avatarUrl, unref(avatarW)),
                            alt: "avatar",
                            class: "w-full h-full rounded-full object-cover",
                            loading: "lazy",
                            referrerpolicy: "no-referrer",
                            onError: () => unref(onImgError)(_ctx.avatarUrl, unref(avatarW))
                          }, null, 40, ["src", "srcset", "onError"])) : createCommentVNode("", true)
                        ], 2)) : (openBlock(), createBlock("div", {
                          key: 1,
                          class: ["flex items-center justify-center rounded-full font-semibold shrink-0", unref(sizeClass)],
                          style: unref(avatarStyle),
                          "aria-hidden": "true"
                        }, toDisplayString(getInitials(_ctx.fullName)), 7)),
                        createVNode("div", { class: "min-w-0" }, [
                          createVNode("div", { class: "font-medium" }, toDisplayString(_ctx.fullName || "\u2014"), 1),
                          createVNode("span", { class: "text-xs text-neutral-500 truncate" }, toDisplayString(_ctx.tg), 1),
                          _ctx.roleName ? (openBlock(), createBlock("div", {
                            key: 0,
                            class: "text-xs text-gray-600 truncate"
                          }, toDisplayString(_ctx.roleName), 1)) : createCommentVNode("", true)
                        ])
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_UiHoverCardTrigger, { "as-child": "" }, {
                  default: withCtx(() => [
                    _ctx.avatarUrl ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: ["inline-flex items-center justify-center rounded-full cursor-pointer", unref(sizeClass)],
                      "aria-hidden": "true"
                    }, [
                      unref(imgSrc) ? (openBlock(), createBlock("img", {
                        key: unref(imgSrc),
                        src: unref(imgSrc),
                        srcset: unref(getPreviewSrcset)(_ctx.avatarUrl, unref(avatarW)),
                        alt: "avatar",
                        class: "w-full h-full rounded-full object-cover",
                        loading: "lazy",
                        referrerpolicy: "no-referrer",
                        onError: () => unref(onImgError)(_ctx.avatarUrl, unref(avatarW))
                      }, null, 40, ["src", "srcset", "onError"])) : createCommentVNode("", true)
                    ], 2)) : (openBlock(), createBlock("div", {
                      key: 1,
                      class: ["inline-flex items-center justify-center cursor-pointer rounded-full font-semibold", unref(sizeClass)],
                      style: unref(avatarStyle),
                      "aria-hidden": "true"
                    }, toDisplayString(getInitials(_ctx.fullName)), 7))
                  ]),
                  _: 1
                }),
                createVNode(_component_UiHoverCardContent, { class: "w-56" }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "flex items-center gap-3" }, [
                      _ctx.avatarUrl ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: ["flex items-center justify-center rounded-full shrink-0", unref(sizeClass)],
                        "aria-hidden": "true"
                      }, [
                        unref(imgSrc) ? (openBlock(), createBlock("img", {
                          key: unref(imgSrc),
                          src: unref(imgSrc),
                          srcset: unref(getPreviewSrcset)(_ctx.avatarUrl, unref(avatarW)),
                          alt: "avatar",
                          class: "w-full h-full rounded-full object-cover",
                          loading: "lazy",
                          referrerpolicy: "no-referrer",
                          onError: () => unref(onImgError)(_ctx.avatarUrl, unref(avatarW))
                        }, null, 40, ["src", "srcset", "onError"])) : createCommentVNode("", true)
                      ], 2)) : (openBlock(), createBlock("div", {
                        key: 1,
                        class: ["flex items-center justify-center rounded-full font-semibold shrink-0", unref(sizeClass)],
                        style: unref(avatarStyle),
                        "aria-hidden": "true"
                      }, toDisplayString(getInitials(_ctx.fullName)), 7)),
                      createVNode("div", { class: "min-w-0" }, [
                        createVNode("div", { class: "font-medium" }, toDisplayString(_ctx.fullName || "\u2014"), 1),
                        createVNode("span", { class: "text-xs text-neutral-500 truncate" }, toDisplayString(_ctx.tg), 1),
                        _ctx.roleName ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: "text-xs text-gray-600 truncate"
                        }, toDisplayString(_ctx.roleName), 1)) : createCommentVNode("", true)
                      ])
                    ])
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex items-center gap-3" }, _attrs))}>`);
        if (_ctx.avatarUrl) {
          _push(`<div class="${ssrRenderClass([
            unref(sizeClass),
            "flex items-center justify-center rounded-full font-semibold shrink-0"
          ])}" aria-hidden="true">`);
          if (unref(imgSrc)) {
            _push(`<img${ssrRenderAttr("src", unref(imgSrc))}${ssrRenderAttr("srcset", unref(getPreviewSrcset)(_ctx.avatarUrl, unref(avatarW)))} alt="avatar" class="w-full h-full rounded-full object-cover" loading="lazy" referrerpolicy="no-referrer">`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div>`);
        } else {
          _push(`<div class="${ssrRenderClass([unref(sizeClass), "flex items-center justify-center rounded-full font-semibold shrink-0"])}" style="${ssrRenderStyle(unref(avatarStyle))}" aria-hidden="true">${ssrInterpolate(getInitials(_ctx.fullName))}</div>`);
        }
        _push(`<div class="${ssrRenderClass([
          "flex flex-col leading-tight min-w-0",
          _ctx.dark ? "text-neutral-300" : ""
        ])}">`);
        if (!_ctx.hideFullName) {
          _push(`<span class="truncate">${ssrInterpolate(_ctx.fullName || "\u2014")}</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<span class="text-xs text-neutral-400">${ssrInterpolate(_ctx.tg)}</span>`);
        if (_ctx.roleName) {
          _push(`<span class="${ssrRenderClass([
            "text-xs text-gray-600 truncate",
            _ctx.dark ? "text-neutral-400" : ""
          ])}">${ssrInterpolate(_ctx.roleName)}</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div>`);
      }
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/my/UserListItem.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _, _sfc_main$3 as a, _sfc_main$1 as b, _sfc_main$2 as c, useAttachments as u };
//# sourceMappingURL=UserListItem-w8spDyow.mjs.map
