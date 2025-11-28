import { _ as __nuxt_component_0 } from './index-BPQNkNDf.mjs';
import { defineComponent, ref, computed, watch, resolveComponent, mergeProps, withCtx, createVNode, createBlock, createCommentVNode, openBlock, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrIncludeBooleanAttr, ssrRenderAttr } from 'vue/server-renderer';
import { useElementSize } from '@vueuse/core';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import '@iconify/vue';
import '@iconify/utils/lib/css/icon';
import './server.mjs';
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
import 'axios';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'unhead/plugins';
import 'perfect-debounce';

const STAGE_WIDTH = 2740;
const STAGE_HEIGHT = 1e3;
const COVER_COLOR = "rgba(0, 255, 255, 0.7)";
const DEFAULT_BLEED_COLOR = "rgba(255, 64, 128, 0.75)";
const PLACEHOLDER_FILL = "rgba(255, 255, 255, 0.45)";
const MIN_ZOOM = 100;
const MAX_ZOOM = 300;
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const createSpread = (index2) => {
      const palette = ["cyan", "blue", "magenta"];
      const accent = index2 === 0 ? "cyan" : palette[index2 % palette.length];
      return {
        id: index2,
        type: index2 === 0 ? "cover" : "spread",
        label: index2 === 0 ? "\u041E\u0431\u0440\u0430\u0442\u043D\u0430\u044F \u0441\u0442\u043E\u0440\u043E\u043D\u0430 - \u041B\u0438\u0446\u0435\u0432\u0430\u044F \u0441\u0442\u043E\u0440\u043E\u043D\u0430" : `\u0420\u0430\u0437\u0432\u043E\u0440\u043E\u0442 ${index2}`,
        accent
      };
    };
    const spreads = ref(Array.from({ length: 12 }, (_, index2) => createSpread(index2)));
    const currentIndex = ref(Math.min(2, spreads.value.length - 1));
    const zoom = ref(125);
    const canvasMainRef = ref(null);
    const { width: canvasWidth, height: canvasHeight } = useElementSize(canvasMainRef);
    const ACCENT_COLORS = {
      cyan: "rgba(0, 192, 255, 0.9)",
      blue: "rgba(64, 112, 255, 0.9)",
      magenta: "rgba(255, 82, 150, 0.9)"
    };
    const COVER_SPINE_OFFSET = STAGE_WIDTH * 0.01;
    const currentSpread = computed(() => spreads.value[currentIndex.value]);
    const canGoPrev = computed(() => currentIndex.value > 0);
    const canGoNext = computed(() => currentIndex.value < spreads.value.length - 1);
    const canRemoveSpread = computed(() => currentIndex.value > 0 && spreads.value.length > 1);
    const canAddSpread = computed(() => spreads.value.length < 24);
    const zoomFactor = computed(() => Number(zoom.value) / 100);
    const isCover = computed(() => {
      var _a;
      return ((_a = currentSpread.value) == null ? void 0 : _a.type) === "cover";
    });
    const stagePosition = ref({ x: 0, y: 0 });
    const previousCanvasSize = ref(null);
    const baseScale = computed(() => {
      const w = canvasWidth.value || STAGE_WIDTH;
      const h = canvasHeight.value || STAGE_HEIGHT;
      if (w === 0 || h === 0) {
        return 1;
      }
      return Math.min(w / STAGE_WIDTH, h / STAGE_HEIGHT);
    });
    const stageScale = computed(() => baseScale.value * zoomFactor.value);
    watch(
      [canvasWidth, canvasHeight],
      ([w, h]) => {
        if (!w || !h) {
          return;
        }
        const prev = previousCanvasSize.value;
        if (!prev) {
          stagePosition.value = clampStagePosition(
            {
              x: w / 2,
              y: h / 2
            },
            stageScale.value
          );
        } else {
          stagePosition.value = clampStagePosition(
            {
              x: stagePosition.value.x + (w - prev.width) / 2,
              y: stagePosition.value.y + (h - prev.height) / 2
            },
            stageScale.value
          );
        }
        previousCanvasSize.value = { width: w, height: h };
      },
      { immediate: true }
    );
    const stageConfig = computed(() => ({
      width: STAGE_WIDTH,
      height: STAGE_HEIGHT,
      scaleX: stageScale.value,
      scaleY: stageScale.value,
      x: stagePosition.value.x,
      y: stagePosition.value.y,
      offsetX: STAGE_WIDTH / 2,
      offsetY: STAGE_HEIGHT / 2
    }));
    const spreadBackgroundConfig = computed(() => ({
      x: 0,
      y: 0,
      width: STAGE_WIDTH,
      height: STAGE_HEIGHT,
      fill: "#ffffff",
      cornerRadius: 18,
      listening: false
    }));
    const coverBorderConfig = computed(() => {
      if (!isCover.value) {
        return null;
      }
      return {
        x: 16,
        y: 16,
        width: STAGE_WIDTH - 32,
        height: STAGE_HEIGHT - 32,
        stroke: COVER_COLOR,
        strokeWidth: 3,
        cornerRadius: 12,
        listening: false
      };
    });
    const coverSpineConfigs = computed(() => {
      if (!isCover.value) {
        return [];
      }
      const padding = 16;
      const offset = COVER_SPINE_OFFSET;
      const center = STAGE_WIDTH / 2;
      return [
        {
          points: [center - offset, padding, center - offset, STAGE_HEIGHT - padding],
          stroke: COVER_COLOR,
          strokeWidth: 2,
          lineCap: "round",
          listening: false
        },
        {
          points: [center + offset, padding, center + offset, STAGE_HEIGHT - padding],
          stroke: COVER_COLOR,
          strokeWidth: 2,
          lineCap: "round",
          listening: false
        }
      ];
    });
    const defaultBleedConfigs = computed(() => {
      if (!currentSpread.value || isCover.value) {
        return [];
      }
      const inset = 24;
      const strokeWidth = Math.max(8, STAGE_HEIGHT * 0.015);
      return [
        {
          x: inset,
          y: inset,
          width: STAGE_WIDTH - inset * 2,
          height: STAGE_HEIGHT - inset * 2,
          stroke: DEFAULT_BLEED_COLOR,
          strokeWidth,
          cornerRadius: 18,
          listening: false
        }
      ];
    });
    const defaultPageFrameConfigs = computed(() => {
      if (!currentSpread.value || isCover.value) {
        return [];
      }
      const accent = ACCENT_COLORS[currentSpread.value.accent];
      const insetX = STAGE_WIDTH * 0.07;
      const insetY = STAGE_HEIGHT * 0.11;
      const gutter = STAGE_WIDTH * 0.018;
      const pageWidth = (STAGE_WIDTH - insetX * 2 - gutter) / 2;
      const pageHeight = STAGE_HEIGHT - insetY * 2;
      const strokeWidth = Math.max(4, STAGE_HEIGHT * 6e-3);
      return [
        {
          x: insetX,
          y: insetY,
          width: pageWidth,
          height: pageHeight,
          stroke: accent,
          strokeWidth,
          cornerRadius: 16,
          listening: false
        },
        {
          x: insetX + pageWidth + gutter,
          y: insetY,
          width: pageWidth,
          height: pageHeight,
          stroke: accent,
          strokeWidth,
          cornerRadius: 16,
          listening: false
        }
      ];
    });
    const defaultPlaceholderConfigs = computed(() => {
      if (!currentSpread.value || isCover.value) {
        return [];
      }
      const accent = ACCENT_COLORS[currentSpread.value.accent];
      const insetX = STAGE_WIDTH * 0.11;
      const insetY = STAGE_HEIGHT * 0.16;
      const gutter = STAGE_WIDTH * 0.02;
      const placeholderWidth = (STAGE_WIDTH - insetX * 2 - gutter) / 2;
      const placeholderHeight = STAGE_HEIGHT - insetY * 2;
      const strokeWidth = Math.max(2, STAGE_HEIGHT * 45e-4);
      return [
        {
          x: insetX,
          y: insetY,
          width: placeholderWidth,
          height: placeholderHeight,
          stroke: accent,
          strokeWidth,
          dash: [16, 12],
          cornerRadius: 14,
          fill: PLACEHOLDER_FILL,
          listening: false
        },
        {
          x: insetX + placeholderWidth + gutter,
          y: insetY,
          width: placeholderWidth,
          height: placeholderHeight,
          stroke: accent,
          strokeWidth,
          dash: [16, 12],
          cornerRadius: 14,
          fill: PLACEHOLDER_FILL,
          listening: false
        }
      ];
    });
    const centerGuideConfig = computed(() => {
      if (!currentSpread.value || isCover.value) {
        return null;
      }
      const padding = STAGE_HEIGHT * 0.08;
      return {
        points: [
          STAGE_WIDTH / 2,
          padding,
          STAGE_WIDTH / 2,
          STAGE_HEIGHT - padding
        ],
        stroke: ACCENT_COLORS[currentSpread.value.accent],
        strokeWidth: 4,
        lineCap: "round",
        listening: false
      };
    });
    const coverTextConfigs = computed(() => {
      if (!isCover.value) {
        return [];
      }
      const shared = {
        fontFamily: "Inter, sans-serif",
        fontSize: 14,
        fill: COVER_COLOR,
        letterSpacing: 2
      };
      const edgeOffsetX = STAGE_WIDTH * 0.02;
      const edgeOffsetY = STAGE_HEIGHT * 0.035;
      const bottomOffsetY = STAGE_HEIGHT * 0.06;
      return [
        {
          ...shared,
          text: "\u041B\u0438\u043D\u0438\u044F \u043E\u0431\u0440\u0435\u0437\u043A\u0438",
          x: edgeOffsetX,
          y: edgeOffsetY
        },
        {
          ...shared,
          text: "\u041B\u0438\u043D\u0438\u044F \u043E\u0431\u0440\u0435\u0437\u043A\u0438",
          width: STAGE_WIDTH - edgeOffsetX * 2,
          x: edgeOffsetX,
          y: edgeOffsetY,
          align: "right"
        },
        {
          ...shared,
          text: "\u041A\u043E\u0440\u0435\u0448\u043E\u043A",
          x: STAGE_WIDTH / 2 + COVER_SPINE_OFFSET + 10,
          y: STAGE_HEIGHT / 2 - STAGE_HEIGHT * 0.08,
          rotation: 90
        },
        {
          ...shared,
          text: "\u041E\u0431\u0440\u0430\u0442\u043D\u0430\u044F \u0441\u0442\u043E\u0440\u043E\u043D\u0430 - \u041B\u0438\u0446\u0435\u0432\u0430\u044F \u0441\u0442\u043E\u0440\u043E\u043D\u0430",
          x: 0,
          width: STAGE_WIDTH,
          y: STAGE_HEIGHT - bottomOffsetY,
          align: "center"
        }
      ];
    });
    const clampZoom = (value) => Math.min(MAX_ZOOM, Math.max(MIN_ZOOM, Math.round(value)));
    const pointerFromAnchor = (anchor) => {
      if (anchor) {
        return anchor;
      }
      const w = canvasWidth.value || STAGE_WIDTH;
      const h = canvasHeight.value || STAGE_HEIGHT;
      return {
        x: w / 2,
        y: h / 2
      };
    };
    const clampStagePosition = (position, scale) => {
      const width = canvasWidth.value || STAGE_WIDTH;
      const height = canvasHeight.value || STAGE_HEIGHT;
      const halfStageWidth = STAGE_WIDTH * scale / 2;
      const halfStageHeight = STAGE_HEIGHT * scale / 2;
      let clampedX = position.x;
      let clampedY = position.y;
      if (!Number.isFinite(clampedX)) {
        clampedX = width / 2;
      }
      if (!Number.isFinite(clampedY)) {
        clampedY = height / 2;
      }
      if (width <= halfStageWidth * 2 || halfStageWidth === 0) {
        clampedX = width / 2;
      } else {
        clampedX = Math.min(Math.max(clampedX, halfStageWidth), width - halfStageWidth);
      }
      if (height <= halfStageHeight * 2 || halfStageHeight === 0) {
        clampedY = height / 2;
      } else {
        clampedY = Math.min(Math.max(clampedY, halfStageHeight), height - halfStageHeight);
      }
      return {
        x: clampedX,
        y: clampedY
      };
    };
    const updateZoom = (nextZoom, anchor) => {
      const targetZoom = clampZoom(nextZoom);
      const currentZoom = zoom.value;
      if (targetZoom === currentZoom) {
        return;
      }
      const direction = targetZoom > currentZoom ? "in" : "out";
      const base = baseScale.value;
      const currentScale = stageScale.value;
      const centerPoint = pointerFromAnchor();
      const newScale = base * (targetZoom / 100);
      if (direction === "out") {
        stagePosition.value = clampStagePosition(centerPoint, newScale);
        zoom.value = targetZoom;
        return;
      }
      if (base === 0 || currentScale === 0) {
        stagePosition.value = clampStagePosition(centerPoint, newScale);
        zoom.value = targetZoom;
        return;
      }
      const targetPoint = pointerFromAnchor(anchor);
      if (Number.isFinite(targetPoint.x) && Number.isFinite(targetPoint.y)) {
        const newScale2 = base * (targetZoom / 100);
        const pointerToCenter = {
          x: (targetPoint.x - stagePosition.value.x) / currentScale,
          y: (targetPoint.y - stagePosition.value.y) / currentScale
        };
        stagePosition.value = clampStagePosition(
          {
            x: targetPoint.x - pointerToCenter.x * newScale2,
            y: targetPoint.y - pointerToCenter.y * newScale2
          },
          newScale2
        );
      } else {
        stagePosition.value = clampStagePosition(centerPoint, newScale);
      }
      zoom.value = targetZoom;
    };
    const handleWheel = (event) => {
      if (!canvasMainRef.value) {
        return;
      }
      event.preventDefault();
      event.stopPropagation();
      const rect = canvasMainRef.value.getBoundingClientRect();
      const pointer = {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top
      };
      const direction = event.deltaY > 0 ? -1 : 1;
      const magnitude = Math.max(1, Math.round(Math.abs(event.deltaY) / 20));
      const step = event.altKey ? 1 : Math.min(10, magnitude * 2);
      updateZoom(zoom.value + direction * step, pointer);
    };
    watch(
      () => canvasMainRef.value,
      (element, previous) => {
        if (previous) {
          previous.removeEventListener("wheel", handleWheel);
        }
        if (element) {
          element.addEventListener("wheel", handleWheel, { passive: false });
        }
      }
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_0;
      const _component_v_stage = resolveComponent("v-stage");
      const _component_v_layer = resolveComponent("v-layer");
      const _component_v_rect = resolveComponent("v-rect");
      const _component_v_line = resolveComponent("v-line");
      const _component_v_text = resolveComponent("v-text");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "editor-page h-screen overflow-hidden bg-[#1b1b1b] text-white flex flex-col" }, _attrs))} data-v-158e0847><header class="flex flex-wrap items-center gap-3 justify-between px-6 py-3 bg-[#1f1f1f] border-b border-[#2a2a2a] shadow-lg" data-v-158e0847><div class="flex items-center gap-2" data-v-158e0847><button class="toolbar-button" aria-label="\u041D\u0430\u0437\u0430\u0434" data-v-158e0847>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:chevron-left",
        class: "w-5 h-5"
      }, null, _parent));
      _push(`</button></div><nav class="flex items-center gap-1 overflow-x-auto pr-2 max-w-full" data-v-158e0847><!--[-->`);
      ssrRenderList(spreads.value, (spread, index2) => {
        _push(`<button class="${ssrRenderClass([{
          "bg-[#f4f4f4] text-black font-semibold shadow-[0_0_0_1px_rgba(0,0,0,0.4)]": index2 === currentIndex.value,
          "bg-[#2b2b2b] text-[#9b9b9b] hover:text-white hover:bg-[#353535]": index2 !== currentIndex.value
        }, "page-tab"])}" data-v-158e0847>${ssrInterpolate(index2)}</button>`);
      });
      _push(`<!--]--></nav><div class="flex items-center gap-2" data-v-158e0847><button class="${ssrRenderClass([{ "opacity-60 cursor-not-allowed": !canAddSpread.value }, "circle-action"])}"${ssrIncludeBooleanAttr(!canAddSpread.value) ? " disabled" : ""} aria-label="\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0440\u0430\u0437\u0432\u043E\u0440\u043E\u0442" data-v-158e0847>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:plus",
        class: "w-5 h-5"
      }, null, _parent));
      _push(`</button><button class="${ssrRenderClass([{ "opacity-40 cursor-not-allowed": !canRemoveSpread.value }, "circle-action"])}"${ssrIncludeBooleanAttr(!canRemoveSpread.value) ? " disabled" : ""} aria-label="\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0440\u0430\u0437\u0432\u043E\u0440\u043E\u0442" data-v-158e0847>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:minus",
        class: "w-5 h-5"
      }, null, _parent));
      _push(`</button></div></header><div class="flex flex-1 min-h-0 overflow-hidden" data-v-158e0847><aside class="side-rail border-r border-[#2a2a2a]" data-v-158e0847><div class="flex flex-col items-center gap-4" data-v-158e0847><button class="rail-round" aria-label="\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u044D\u043B\u0435\u043C\u0435\u043D\u0442" data-v-158e0847>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:plus",
        class: "w-5 h-5"
      }, null, _parent));
      _push(`</button><button class="rail-round muted" aria-label="\u0417\u0430\u0431\u043B\u043E\u043A\u0438\u0440\u043E\u0432\u0430\u043D\u043E" data-v-158e0847>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:circle",
        class: "w-4 h-4"
      }, null, _parent));
      _push(`</button></div><div class="flex flex-col items-center gap-3" data-v-158e0847><button class="${ssrRenderClass([{ muted: zoom.value >= MAX_ZOOM }, "rail-zoom"])}"${ssrIncludeBooleanAttr(zoom.value >= MAX_ZOOM) ? " disabled" : ""} aria-label="\u0423\u0432\u0435\u043B\u0438\u0447\u0438\u0442\u044C" data-v-158e0847>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:zoom-in",
        class: "w-4 h-4"
      }, null, _parent));
      _push(`</button><div class="zoom-track" data-v-158e0847><input${ssrRenderAttr("value", zoom.value)} class="zoom-slider" type="range"${ssrRenderAttr("min", MIN_ZOOM)}${ssrRenderAttr("max", MAX_ZOOM)} step="1" aria-label="\u041C\u0430\u0441\u0448\u0442\u0430\u0431" data-v-158e0847><span class="zoom-label" data-v-158e0847>${ssrInterpolate(zoom.value)}%</span></div><button class="${ssrRenderClass([{ muted: zoom.value <= MIN_ZOOM }, "rail-zoom"])}"${ssrIncludeBooleanAttr(zoom.value <= MIN_ZOOM) ? " disabled" : ""} aria-label="\u0423\u043C\u0435\u043D\u044C\u0448\u0438\u0442\u044C" data-v-158e0847>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:zoom-out",
        class: "w-4 h-4"
      }, null, _parent));
      _push(`</button></div></aside><div class="canvas-region" data-v-158e0847><button class="${ssrRenderClass([{ "opacity-40 cursor-not-allowed": !canGoPrev.value }, "nav-arrow left"])}"${ssrIncludeBooleanAttr(!canGoPrev.value) ? " disabled" : ""} aria-label="\u041F\u0440\u0435\u0434\u044B\u0434\u0443\u0449\u0438\u0439 \u0440\u0430\u0437\u0432\u043E\u0440\u043E\u0442" data-v-158e0847>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:chevron-left",
        class: "w-5 h-5"
      }, null, _parent));
      _push(`</button><main class="canvas-main" data-v-158e0847>`);
      if (currentSpread.value) {
        _push(`<div class="workspace" data-v-158e0847><div class="workspace-inner" data-v-158e0847><div class="canvas" data-v-158e0847><div class="spread-template" data-v-158e0847>`);
        _push(ssrRenderComponent(_component_v_stage, {
          config: stageConfig.value,
          style: { width: "100%", height: "100%" }
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_v_layer, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_v_rect, { config: spreadBackgroundConfig.value }, null, _parent3, _scopeId2));
                    if (coverBorderConfig.value) {
                      _push3(ssrRenderComponent(_component_v_rect, { config: coverBorderConfig.value }, null, _parent3, _scopeId2));
                    } else {
                      _push3(`<!---->`);
                    }
                    _push3(`<!--[-->`);
                    ssrRenderList(defaultBleedConfigs.value, (bleedConfig, bleedIdx) => {
                      _push3(ssrRenderComponent(_component_v_rect, {
                        key: `bleed-${bleedIdx}`,
                        config: bleedConfig
                      }, null, _parent3, _scopeId2));
                    });
                    _push3(`<!--]--><!--[-->`);
                    ssrRenderList(defaultPageFrameConfigs.value, (frameConfig, frameIdx) => {
                      _push3(ssrRenderComponent(_component_v_rect, {
                        key: `frame-${frameIdx}`,
                        config: frameConfig
                      }, null, _parent3, _scopeId2));
                    });
                    _push3(`<!--]--><!--[-->`);
                    ssrRenderList(defaultPlaceholderConfigs.value, (placeholderConfig, placeholderIdx) => {
                      _push3(ssrRenderComponent(_component_v_rect, {
                        key: `placeholder-${placeholderIdx}`,
                        config: placeholderConfig
                      }, null, _parent3, _scopeId2));
                    });
                    _push3(`<!--]--><!--[-->`);
                    ssrRenderList(coverSpineConfigs.value, (spineConfig, spineIdx) => {
                      _push3(ssrRenderComponent(_component_v_line, {
                        key: `cover-spine-${spineIdx}`,
                        config: spineConfig
                      }, null, _parent3, _scopeId2));
                    });
                    _push3(`<!--]-->`);
                    if (centerGuideConfig.value) {
                      _push3(ssrRenderComponent(_component_v_line, { config: centerGuideConfig.value }, null, _parent3, _scopeId2));
                    } else {
                      _push3(`<!---->`);
                    }
                    _push3(`<!--[-->`);
                    ssrRenderList(coverTextConfigs.value, (textConfig, idx) => {
                      _push3(ssrRenderComponent(_component_v_text, {
                        key: `cover-text-${idx}`,
                        config: textConfig
                      }, null, _parent3, _scopeId2));
                    });
                    _push3(`<!--]-->`);
                  } else {
                    return [
                      createVNode(_component_v_rect, { config: spreadBackgroundConfig.value }, null, 8, ["config"]),
                      coverBorderConfig.value ? (openBlock(), createBlock(_component_v_rect, {
                        key: 0,
                        config: coverBorderConfig.value
                      }, null, 8, ["config"])) : createCommentVNode("", true),
                      (openBlock(true), createBlock(Fragment, null, renderList(defaultBleedConfigs.value, (bleedConfig, bleedIdx) => {
                        return openBlock(), createBlock(_component_v_rect, {
                          key: `bleed-${bleedIdx}`,
                          config: bleedConfig
                        }, null, 8, ["config"]);
                      }), 128)),
                      (openBlock(true), createBlock(Fragment, null, renderList(defaultPageFrameConfigs.value, (frameConfig, frameIdx) => {
                        return openBlock(), createBlock(_component_v_rect, {
                          key: `frame-${frameIdx}`,
                          config: frameConfig
                        }, null, 8, ["config"]);
                      }), 128)),
                      (openBlock(true), createBlock(Fragment, null, renderList(defaultPlaceholderConfigs.value, (placeholderConfig, placeholderIdx) => {
                        return openBlock(), createBlock(_component_v_rect, {
                          key: `placeholder-${placeholderIdx}`,
                          config: placeholderConfig
                        }, null, 8, ["config"]);
                      }), 128)),
                      (openBlock(true), createBlock(Fragment, null, renderList(coverSpineConfigs.value, (spineConfig, spineIdx) => {
                        return openBlock(), createBlock(_component_v_line, {
                          key: `cover-spine-${spineIdx}`,
                          config: spineConfig
                        }, null, 8, ["config"]);
                      }), 128)),
                      centerGuideConfig.value ? (openBlock(), createBlock(_component_v_line, {
                        key: 1,
                        config: centerGuideConfig.value
                      }, null, 8, ["config"])) : createCommentVNode("", true),
                      (openBlock(true), createBlock(Fragment, null, renderList(coverTextConfigs.value, (textConfig, idx) => {
                        return openBlock(), createBlock(_component_v_text, {
                          key: `cover-text-${idx}`,
                          config: textConfig
                        }, null, 8, ["config"]);
                      }), 128))
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_v_layer, null, {
                  default: withCtx(() => [
                    createVNode(_component_v_rect, { config: spreadBackgroundConfig.value }, null, 8, ["config"]),
                    coverBorderConfig.value ? (openBlock(), createBlock(_component_v_rect, {
                      key: 0,
                      config: coverBorderConfig.value
                    }, null, 8, ["config"])) : createCommentVNode("", true),
                    (openBlock(true), createBlock(Fragment, null, renderList(defaultBleedConfigs.value, (bleedConfig, bleedIdx) => {
                      return openBlock(), createBlock(_component_v_rect, {
                        key: `bleed-${bleedIdx}`,
                        config: bleedConfig
                      }, null, 8, ["config"]);
                    }), 128)),
                    (openBlock(true), createBlock(Fragment, null, renderList(defaultPageFrameConfigs.value, (frameConfig, frameIdx) => {
                      return openBlock(), createBlock(_component_v_rect, {
                        key: `frame-${frameIdx}`,
                        config: frameConfig
                      }, null, 8, ["config"]);
                    }), 128)),
                    (openBlock(true), createBlock(Fragment, null, renderList(defaultPlaceholderConfigs.value, (placeholderConfig, placeholderIdx) => {
                      return openBlock(), createBlock(_component_v_rect, {
                        key: `placeholder-${placeholderIdx}`,
                        config: placeholderConfig
                      }, null, 8, ["config"]);
                    }), 128)),
                    (openBlock(true), createBlock(Fragment, null, renderList(coverSpineConfigs.value, (spineConfig, spineIdx) => {
                      return openBlock(), createBlock(_component_v_line, {
                        key: `cover-spine-${spineIdx}`,
                        config: spineConfig
                      }, null, 8, ["config"]);
                    }), 128)),
                    centerGuideConfig.value ? (openBlock(), createBlock(_component_v_line, {
                      key: 1,
                      config: centerGuideConfig.value
                    }, null, 8, ["config"])) : createCommentVNode("", true),
                    (openBlock(true), createBlock(Fragment, null, renderList(coverTextConfigs.value, (textConfig, idx) => {
                      return openBlock(), createBlock(_component_v_text, {
                        key: `cover-text-${idx}`,
                        config: textConfig
                      }, null, 8, ["config"]);
                    }), 128))
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div><div class="spread-label" data-v-158e0847>${ssrInterpolate(currentSpread.value.label)}</div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</main><button class="${ssrRenderClass([{ "opacity-40 cursor-not-allowed": !canGoNext.value }, "nav-arrow right"])}"${ssrIncludeBooleanAttr(!canGoNext.value) ? " disabled" : ""} aria-label="\u0421\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u0439 \u0440\u0430\u0437\u0432\u043E\u0440\u043E\u0442" data-v-158e0847>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:chevron-right",
        class: "w-5 h-5"
      }, null, _parent));
      _push(`</button></div><aside class="side-rail border-l border-[#2a2a2a]" data-v-158e0847><div class="flex flex-col items-center gap-4" data-v-158e0847><button class="rail-round" aria-label="\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0440\u0430\u0437\u0432\u043E\u0440\u043E\u0442" data-v-158e0847>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:plus",
        class: "w-5 h-5"
      }, null, _parent));
      _push(`</button><button class="${ssrRenderClass([{ muted: !canRemoveSpread.value }, "rail-round"])}"${ssrIncludeBooleanAttr(!canRemoveSpread.value) ? " disabled" : ""} aria-label="\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0442\u0435\u043A\u0443\u0449\u0438\u0439 \u0440\u0430\u0437\u0432\u043E\u0440\u043E\u0442" data-v-158e0847>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:minus",
        class: "w-5 h-5"
      }, null, _parent));
      _push(`</button></div><div class="flex flex-col items-center gap-4" data-v-158e0847><button class="rail-round muted" aria-label="\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438" data-v-158e0847>`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "lucide:ellipsis",
        class: "w-5 h-5"
      }, null, _parent));
      _push(`</button></div></aside></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/editor/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-158e0847"]]);

export { index as default };
//# sourceMappingURL=index-BMM2YgbT.mjs.map
