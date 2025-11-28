import { _ as _sfc_main$1 } from './Sidebar-ClYzRSuC.mjs';
import { _ as _sfc_main$6, a as _sfc_main$4, b as _sfc_main$5, c as _sfc_main$3, d as _sfc_main$2$1 } from './SelectScrollDownButton-JzJI8BsA.mjs';
import { _ as _sfc_main$2 } from './SelectGroup-BKLQULEA.mjs';
import { _ as _sfc_main$7 } from './SelectLabel-D0_xRNOo.mjs';
import { _ as _sfc_main$2$2, a as _sfc_main$8, b as _sfc_main$1$1 } from './TabsList-C3eBcFGa.mjs';
import { _ as _sfc_main$9 } from './ScrollArea-Kzo2fjeX.mjs';
import { _ as _sfc_main$a } from './Card-D2-UPrX8.mjs';
import { _ as _sfc_main$1$2, a as _sfc_main$c } from './CardTitle-Dyaq6zaM.mjs';
import { _ as _sfc_main$d } from './CardDescription-CwDlX6V_.mjs';
import { _ as _sfc_main$e } from './CardContent-5uJgHkPl.mjs';
import { _ as _sfc_main$f } from './CardFooter-BUlih3MF.mjs';
import { _ as _sfc_main$b } from './NuxtImg-BJKLxDnu.mjs';
import { _ as _sfc_main$g } from './Textarea-oqH4YeW4.mjs';
import { _ as _sfc_main$h } from './index-B6vrBiru.mjs';
import { _ as _sfc_main$i } from './CreateModal-HWEILUCM.mjs';
import { defineComponent, ref, watch, mergeProps, unref, isRef, withCtx, createVNode, createTextVNode, toDisplayString, createBlock, openBlock, Fragment, renderList, createCommentVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderClass, ssrRenderAttr } from 'vue/server-renderer';
import './index-9T5woGxV.mjs';
import 'radix-vue';
import 'lucide-vue-next';
import 'class-variance-authority';
import './utils-TCWotVPY.mjs';
import 'clsx';
import 'tailwind-merge';
import './nuxt-link-BxYosf5u.mjs';
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
import './server.mjs';
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
import './index-gpRkqh0i.mjs';
import '@vueuse/core';
import 'reka-ui';
import './DropdownMenuItem-Bzav__sm.mjs';
import './DropdownMenuSeparator-B4V4iajS.mjs';
import './UserListItem-w8spDyow.mjs';
import './auth-CDeEREL9.mjs';
import './isLoading-BaPa0n0V.mjs';
import './DialogContent-BsO2ljLB.mjs';
import './DialogFooter-CQpXS8R1.mjs';
import './Label-Bxzolydd.mjs';
import './Input-DoHPrX2-.mjs';
import './Switch-BsBEqAPz.mjs';

const EasyKover = "vk1.a.gPMgWt-2HYbeo_F8uEkzQvpB0mRD_qSgZ4veFtUQbxR4yNj8CBT_EIqCV1BZ3ZsjSsqod_WYh-18Zz3xHAgrpacaeg5rV5Cfs_oMBpn3uNAzcD5JGGNREwe_0WlCuYVPfDuCjOBrwEff-WM6y7mObRaJPjlfvggNmTSm_oxlh0Dsy9ZMIGKq0E06UxLjiI_alqsoIWqli-SzoYi31_V09g";
const EasyNeon = "vk1.a.Oylj4WwtIpER8ynH05r2TsbvzpOQC1sFtZNGSTxGdAbmm8WZtYkGDvN6RmXuYu2IFnCZSJ4SYjJJM5voy7goB2ZHIF8MeZ4fJ99AabZilEQk7V33QsZrTRXz474xPueqXdKEKVWEChHH7cqKDJm3ZFmWw_MO1BvdVVQpGHAXQ2G5QlKDMR3hh69I4UkDjijBk1NWmf_MPlAoNMh3cI-u2Q";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const authStore = useAuthStore();
    ref("EasyKover");
    const VK_TOKEN = ref(EasyKover);
    const defaultConversation = {
      peer_id: 0,
      // ID собеседника
      last_message_text: "string",
      // Текст последнего сообщения
      unread_count: 0,
      // Прочитано ли сообщение
      profile_photo_50: "string",
      // URL аватара собеседника
      full_name: "string",
      // Имя собеседника
      last_message_date: 1740750524,
      // Дата последнего сообщения
      unanswered: false
      // Прочитано ли сообщение
    };
    const defaultConversationMSG = {
      id: 0,
      // ID сообщения
      text: "string",
      // Текст сообщения
      date: 1740750524,
      // Дата сообщения
      peer_id: 0,
      from_id: 0,
      attachments: [],
      payload: {
        userId: 0,
        userName: ""
      }
    };
    const conversations = ref([defaultConversation]);
    const conversationsFilter = ref("all");
    const unreadCount = ref(0);
    const messages = ref([defaultConversationMSG]);
    const loadingConversations = ref(false);
    const loadingMessages = ref(false);
    const selectedChat = ref(0);
    const messageText = ref("");
    const selectChat = (peerId) => {
      selectedChat.value = peerId;
      fetchMessages(peerId);
    };
    const fetchConversations = async () => {
      loadingConversations.value = true;
      try {
        const { response } = await $fetch(
          "/api/vk/method/messages.getConversations",
          {
            params: {
              access_token: VK_TOKEN.value,
              v: "5.199",
              extended: 1,
              count: 40,
              fields: "id,photo_50",
              filter: conversationsFilter.value
            }
          }
        );
        if (response) {
          const { items, profiles, unread_count } = response;
          unreadCount.value = unread_count;
          conversations.value = items.map((item) => {
            var _a, _b, _c;
            return {
              peer_id: item.conversation.peer.id,
              last_message_text: item.last_message.text || "",
              last_message_date: item.last_message.date,
              unanswered: item.conversation.unanswered,
              profile_photo_50: ((_a = profiles.find((profile) => profile.id === item.conversation.peer.id)) == null ? void 0 : _a.photo_50) || "",
              full_name: ((_b = profiles.find((profile) => profile.id === item.conversation.peer.id)) == null ? void 0 : _b.first_name) + " " + ((_c = profiles.find((profile) => profile.id === item.conversation.peer.id)) == null ? void 0 : _c.last_name) || ""
            };
          });
          console.log("\u0414\u0438\u0430\u043B\u043E\u0433\u0438:", conversations.value);
        }
      } catch (error) {
        console.error("\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u0440\u0438 \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0435 \u0434\u0438\u0430\u043B\u043E\u0433\u043E\u0432:", error);
      } finally {
        loadingConversations.value = false;
      }
    };
    const fetchMessages = async (peerId) => {
      loadingMessages.value = true;
      try {
        const { response } = await $fetch(
          "/api/vk/method/messages.getHistory",
          {
            params: {
              access_token: VK_TOKEN.value,
              v: "5.199",
              peer_id: peerId
              // count: 20,
              // offset: 0,
              // user_id - // Идентификатор пользователя, историю переписки с которым необходимо вернуть?
              //start_message_id - // Если значение > 0, то это идентификатор сообщения, начиная с которого нужно вернуть историю переписки, если передано значение -1, то к значению параметра offset прибавляется количество входящих непрочитанных сообщений в конце диалога (подробности смотрите ниже).
              //rev: 1, // 1 — возвращать сообщения в хронологическом порядке. 0 — возвращать сообщения в обратном хронологическом порядке (по умолчанию).
              //extended // Если указать в качестве этого параметра 1, то будет возвращена информация о пользователях, являющихся авторами сообщений. По умолчанию 0.
              //fields // Список дополнительных полей профилей, которые необходимо вернуть.
            }
          }
        );
        if (response) {
          const { items } = response;
          messages.value = items.map((item) => ({
            id: item.id,
            text: item.text || "",
            date: item.date,
            peer_id: item.peer_id,
            from_id: item.from_id,
            attachments: item.attachments,
            payload: item.payload ? JSON.parse(typeof item.payload === "string" ? item.payload : "{}") : { userId: 0, userName: "" }
          }));
          console.log("\u0421\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u044F:", messages.value);
        }
      } catch (error) {
        console.error("\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u0440\u0438 \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0435 \u043F\u0435\u0440\u0435\u043F\u0438\u0441\u043A\u0438:", error);
      } finally {
        loadingMessages.value = false;
      }
    };
    const sendMessage = async () => {
      var _a, _b;
      try {
        const { response } = await $fetch("/api/vk/method/messages.send", {
          method: "POST",
          params: {
            access_token: VK_TOKEN.value,
            v: "5.199",
            peer_id: selectedChat.value,
            message: messageText.value,
            random_id: Math.floor(Math.random() * 1e6),
            payload: JSON.stringify({
              userId: ((_a = authStore.user) == null ? void 0 : _a.id) || 0,
              userName: ((_b = authStore.user) == null ? void 0 : _b.fullName) || ""
            })
          }
        });
        console.log("\u0421\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435 \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u043E:", response);
      } catch (error) {
        console.error("\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u0440\u0438 \u043E\u0442\u043F\u0440\u0430\u0432\u043A\u0435 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u044F:", error);
      } finally {
        messageText.value = "";
        fetchMessages(selectedChat.value);
      }
    };
    watch(conversationsFilter, () => {
      fetchConversations();
    });
    watch(VK_TOKEN, () => {
      fetchConversations();
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_LayoutSidebar = _sfc_main$1;
      const _component_UiSelect = _sfc_main$6;
      const _component_UiSelectTrigger = _sfc_main$4;
      const _component_UiSelectValue = _sfc_main$5;
      const _component_UiSelectContent = _sfc_main$3;
      const _component_UiSelectGroup = _sfc_main$2;
      const _component_UiSelectLabel = _sfc_main$7;
      const _component_UiSelectItem = _sfc_main$2$1;
      const _component_UiTabs = _sfc_main$2$2;
      const _component_UiTabsList = _sfc_main$8;
      const _component_UiTabsTrigger = _sfc_main$1$1;
      const _component_UiScrollArea = _sfc_main$9;
      const _component_UiCard = _sfc_main$a;
      const _component_NuxtImg = _sfc_main$b;
      const _component_UiCardHeader = _sfc_main$1$2;
      const _component_UiCardTitle = _sfc_main$c;
      const _component_UiCardDescription = _sfc_main$d;
      const _component_UiCardContent = _sfc_main$e;
      const _component_UiCardFooter = _sfc_main$f;
      const _component_UiTextarea = _sfc_main$g;
      const _component_UiButton = _sfc_main$h;
      const _component_MyOperationsCreateModal = _sfc_main$i;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative h-screen hidden-scrollbar" }, _attrs))}><div class="w-full fixed z-10">`);
      _push(ssrRenderComponent(_component_LayoutSidebar, null, null, _parent));
      _push(`</div><div class="h-full flex flex-col py-4 gap-2 mx-[auto] max-w-[2048px] pt-16 min-w-[1024px]"><div class="flex h-screen bg-gray-100 rounded-sm overflow-hidden"><div class="w-1/3 p-4">`);
      _push(ssrRenderComponent(_component_UiSelect, {
        modelValue: unref(VK_TOKEN),
        "onUpdate:modelValue": ($event) => isRef(VK_TOKEN) ? VK_TOKEN.value = $event : null
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UiSelectTrigger, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UiSelectValue, { placeholder: "UiSelect a fruit" }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UiSelectValue, { placeholder: "UiSelect a fruit" })
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
                              _push5(`\u0413\u0440\u0443\u043F\u043F\u044B`);
                            } else {
                              return [
                                createTextVNode("\u0413\u0440\u0443\u043F\u043F\u044B")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_UiSelectItem, { value: EasyKover }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` EasyKover `);
                            } else {
                              return [
                                createTextVNode(" EasyKover ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_UiSelectItem, { value: EasyNeon }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` EasyNeon `);
                            } else {
                              return [
                                createTextVNode(" EasyNeon ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_UiSelectLabel, null, {
                            default: withCtx(() => [
                              createTextVNode("\u0413\u0440\u0443\u043F\u043F\u044B")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UiSelectItem, { value: EasyKover }, {
                            default: withCtx(() => [
                              createTextVNode(" EasyKover ")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_UiSelectItem, { value: EasyNeon }, {
                            default: withCtx(() => [
                              createTextVNode(" EasyNeon ")
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
                    createVNode(_component_UiSelectGroup, null, {
                      default: withCtx(() => [
                        createVNode(_component_UiSelectLabel, null, {
                          default: withCtx(() => [
                            createTextVNode("\u0413\u0440\u0443\u043F\u043F\u044B")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UiSelectItem, { value: EasyKover }, {
                          default: withCtx(() => [
                            createTextVNode(" EasyKover ")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_UiSelectItem, { value: EasyNeon }, {
                          default: withCtx(() => [
                            createTextVNode(" EasyNeon ")
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
              createVNode(_component_UiSelectTrigger, null, {
                default: withCtx(() => [
                  createVNode(_component_UiSelectValue, { placeholder: "UiSelect a fruit" })
                ]),
                _: 1
              }),
              createVNode(_component_UiSelectContent, null, {
                default: withCtx(() => [
                  createVNode(_component_UiSelectGroup, null, {
                    default: withCtx(() => [
                      createVNode(_component_UiSelectLabel, null, {
                        default: withCtx(() => [
                          createTextVNode("\u0413\u0440\u0443\u043F\u043F\u044B")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_UiSelectItem, { value: EasyKover }, {
                        default: withCtx(() => [
                          createTextVNode(" EasyKover ")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_UiSelectItem, { value: EasyNeon }, {
                        default: withCtx(() => [
                          createTextVNode(" EasyNeon ")
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
      _push(`<h2>\u041E\u043A\u043D\u043E \u0441\u043A\u0440\u0438\u043F\u0442\u043E\u0432</h2></div><div class="w-4/12 border-r bg-white shadow-sm"><h2 class="p-4 text-lg font-bold text-gray-800">\u0414\u0438\u0430\u043B\u043E\u0433\u0438</h2>`);
      _push(ssrRenderComponent(_component_UiTabs, {
        modelValue: unref(conversationsFilter),
        "onUpdate:modelValue": ($event) => isRef(conversationsFilter) ? conversationsFilter.value = $event : null,
        class: "px-1"
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
                  _push3(ssrRenderComponent(_component_UiTabsTrigger, { value: "unread" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` \u041D\u0435\u043F\u0440\u043E\u0447\u0438\u0442\u0430\u043D\u043D\u044B\u0435 (${ssrInterpolate(unref(unreadCount))})`);
                      } else {
                        return [
                          createTextVNode(" \u041D\u0435\u043F\u0440\u043E\u0447\u0438\u0442\u0430\u043D\u043D\u044B\u0435 (" + toDisplayString(unref(unreadCount)) + ")", 1)
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
                    createVNode(_component_UiTabsTrigger, { value: "unread" }, {
                      default: withCtx(() => [
                        createTextVNode(" \u041D\u0435\u043F\u0440\u043E\u0447\u0438\u0442\u0430\u043D\u043D\u044B\u0435 (" + toDisplayString(unref(unreadCount)) + ")", 1)
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
                  createVNode(_component_UiTabsTrigger, { value: "unread" }, {
                    default: withCtx(() => [
                      createTextVNode(" \u041D\u0435\u043F\u0440\u043E\u0447\u0438\u0442\u0430\u043D\u043D\u044B\u0435 (" + toDisplayString(unref(unreadCount)) + ")", 1)
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
      _push(ssrRenderComponent(_component_UiScrollArea, { class: "h-[calc(100vh-145px)] px-2" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (unref(loadingConversations)) {
              _push2(`<div class="p-4 text-center text-gray-500"${_scopeId}> \u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430... </div>`);
            } else {
              _push2(`<!--[-->`);
              ssrRenderList(unref(conversations), (chat) => {
                _push2(ssrRenderComponent(_component_UiCard, {
                  key: chat.peer_id,
                  class: "m-2 cursor-pointer hover:bg-gray-50 transition",
                  onClick: ($event) => selectChat(chat.peer_id)
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<div class="flex items-center"${_scopeId2}>`);
                      _push3(ssrRenderComponent(_component_NuxtImg, {
                        src: chat.profile_photo_50,
                        class: "w-10 h-10 rounded-full mr-3",
                        alt: "Chat avatar"
                      }, null, _parent3, _scopeId2));
                      _push3(`<div class="w-full"${_scopeId2}><p class="font-semibold text-gray-900"${_scopeId2}>${ssrInterpolate(chat.full_name)}</p><div class="flex justify-between items-center"${_scopeId2}><p class="${ssrRenderClass([
                        chat.unanswered ? "font-semibold text-sky-900/80" : " ",
                        "text-sm text-gray-500 truncate"
                      ])}"${_scopeId2}>${ssrInterpolate(chat.last_message_text.slice(0, 15))}... </p><p class="${ssrRenderClass(["text-xs text-gray-500 mr-1"])}"${_scopeId2}>${ssrInterpolate(new Date(
                        chat.last_message_date * 1e3
                      ).toLocaleTimeString("ru-RU", {
                        hour: "2-digit",
                        minute: "2-digit"
                      }))}</p></div></div></div>`);
                    } else {
                      return [
                        createVNode("div", { class: "flex items-center" }, [
                          createVNode(_component_NuxtImg, {
                            src: chat.profile_photo_50,
                            class: "w-10 h-10 rounded-full mr-3",
                            alt: "Chat avatar"
                          }, null, 8, ["src"]),
                          createVNode("div", { class: "w-full" }, [
                            createVNode("p", { class: "font-semibold text-gray-900" }, toDisplayString(chat.full_name), 1),
                            createVNode("div", { class: "flex justify-between items-center" }, [
                              createVNode("p", {
                                class: [
                                  chat.unanswered ? "font-semibold text-sky-900/80" : " ",
                                  "text-sm text-gray-500 truncate"
                                ]
                              }, toDisplayString(chat.last_message_text.slice(0, 15)) + "... ", 3),
                              createVNode("p", { class: ["text-xs text-gray-500 mr-1"] }, toDisplayString(new Date(
                                chat.last_message_date * 1e3
                              ).toLocaleTimeString("ru-RU", {
                                hour: "2-digit",
                                minute: "2-digit"
                              })), 1)
                            ])
                          ])
                        ])
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              });
              _push2(`<!--]-->`);
            }
          } else {
            return [
              unref(loadingConversations) ? (openBlock(), createBlock("div", {
                key: 0,
                class: "p-4 text-center text-gray-500"
              }, " \u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430... ")) : (openBlock(true), createBlock(Fragment, { key: 1 }, renderList(unref(conversations), (chat) => {
                return openBlock(), createBlock(_component_UiCard, {
                  key: chat.peer_id,
                  class: "m-2 cursor-pointer hover:bg-gray-50 transition",
                  onClick: ($event) => selectChat(chat.peer_id)
                }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "flex items-center" }, [
                      createVNode(_component_NuxtImg, {
                        src: chat.profile_photo_50,
                        class: "w-10 h-10 rounded-full mr-3",
                        alt: "Chat avatar"
                      }, null, 8, ["src"]),
                      createVNode("div", { class: "w-full" }, [
                        createVNode("p", { class: "font-semibold text-gray-900" }, toDisplayString(chat.full_name), 1),
                        createVNode("div", { class: "flex justify-between items-center" }, [
                          createVNode("p", {
                            class: [
                              chat.unanswered ? "font-semibold text-sky-900/80" : " ",
                              "text-sm text-gray-500 truncate"
                            ]
                          }, toDisplayString(chat.last_message_text.slice(0, 15)) + "... ", 3),
                          createVNode("p", { class: ["text-xs text-gray-500 mr-1"] }, toDisplayString(new Date(
                            chat.last_message_date * 1e3
                          ).toLocaleTimeString("ru-RU", {
                            hour: "2-digit",
                            minute: "2-digit"
                          })), 1)
                        ])
                      ])
                    ])
                  ]),
                  _: 2
                }, 1032, ["onClick"]);
              }), 128))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="w-2/3">`);
      _push(ssrRenderComponent(_component_UiCard, { class: "rounded-none border-none bg-gray-100 shadow-none" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UiCardHeader, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UiCardTitle, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      var _a, _b;
                      if (_push4) {
                        _push4(`${ssrInterpolate(((_a = unref(conversations).find((c) => c.peer_id === unref(selectedChat))) == null ? void 0 : _a.full_name) || "\u041F\u0435\u0440\u0435\u043F\u0438\u0441\u043A\u0430")}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(((_b = unref(conversations).find((c) => c.peer_id === unref(selectedChat))) == null ? void 0 : _b.full_name) || "\u041F\u0435\u0440\u0435\u043F\u0438\u0441\u043A\u0430"), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UiCardDescription, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UiCardTitle, null, {
                      default: withCtx(() => {
                        var _a;
                        return [
                          createTextVNode(toDisplayString(((_a = unref(conversations).find((c) => c.peer_id === unref(selectedChat))) == null ? void 0 : _a.full_name) || "\u041F\u0435\u0440\u0435\u043F\u0438\u0441\u043A\u0430"), 1)
                        ];
                      }),
                      _: 1
                    }),
                    createVNode(_component_UiCardDescription)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UiCardContent, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  if (unref(loadingMessages)) {
                    _push3(`<div class="flex-1 flex items-center justify-center text-gray-500"${_scopeId2}> \u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0439... </div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`<div class="h-[calc(100vh-310px)] px-2 overflow-y-scroll"${_scopeId2}><div class="flex flex-col-reverse gap-4 mb-6"${_scopeId2}><!--[-->`);
                  ssrRenderList(unref(messages), (message) => {
                    var _a;
                    _push3(`<div class="${ssrRenderClass([
                      message.from_id !== unref(selectedChat) ? "ml-auto bg-amber-400/70" : "bg-slate-400/80",
                      "p-3 rounded-lg max-w-xs bg-gray-200"
                    ])}"${_scopeId2}><p class="font-semibold text-gray-900"${_scopeId2}>${ssrInterpolate(message.from_id !== unref(selectedChat) ? message.payload.userName ? `\u0412\u044B(${message.payload.userName})` : "\u0412\u044B" : (_a = unref(conversations).find(
                      (c) => c.peer_id === unref(selectedChat)
                    )) == null ? void 0 : _a.full_name)}</p><p${_scopeId2}>${ssrInterpolate(message.text)}</p><p class="text-xs mt-1"${_scopeId2}>${ssrInterpolate(new Date(message.date * 1e3).toLocaleDateString(
                      "ru-RU"
                    ))} ${ssrInterpolate(new Date(message.date * 1e3).toLocaleTimeString(
                      "ru-RU"
                    ))}</p>`);
                    if (message.attachments.length) {
                      _push3(`<div${_scopeId2}><!--[-->`);
                      ssrRenderList(message.attachments, (attachment) => {
                        _push3(`<div class="mt-2"${_scopeId2}><a${ssrRenderAttr("href", attachment.photo.orig_photo.url)} target="_blank" rel="noopener noreferrer"${_scopeId2}>`);
                        _push3(ssrRenderComponent(_component_NuxtImg, {
                          src: attachment.photo.orig_photo.url,
                          alt: attachment.type,
                          class: "w-32 h-32 object-cover rounded-lg"
                        }, null, _parent3, _scopeId2));
                        _push3(`</a></div>`);
                      });
                      _push3(`<!--]--></div>`);
                    } else {
                      _push3(`<!---->`);
                    }
                    _push3(`</div>`);
                  });
                  _push3(`<!--]--></div></div>`);
                } else {
                  return [
                    unref(loadingMessages) ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "flex-1 flex items-center justify-center text-gray-500"
                    }, " \u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0439... ")) : createCommentVNode("", true),
                    createVNode("div", {
                      ref: "messagesContainer",
                      class: "h-[calc(100vh-310px)] px-2 overflow-y-scroll"
                    }, [
                      createVNode("div", { class: "flex flex-col-reverse gap-4 mb-6" }, [
                        (openBlock(true), createBlock(Fragment, null, renderList(unref(messages), (message) => {
                          var _a;
                          return openBlock(), createBlock("div", {
                            key: message.id,
                            class: [
                              message.from_id !== unref(selectedChat) ? "ml-auto bg-amber-400/70" : "bg-slate-400/80",
                              "p-3 rounded-lg max-w-xs bg-gray-200"
                            ]
                          }, [
                            createVNode("p", { class: "font-semibold text-gray-900" }, toDisplayString(message.from_id !== unref(selectedChat) ? message.payload.userName ? `\u0412\u044B(${message.payload.userName})` : "\u0412\u044B" : (_a = unref(conversations).find(
                              (c) => c.peer_id === unref(selectedChat)
                            )) == null ? void 0 : _a.full_name), 1),
                            createVNode("p", null, toDisplayString(message.text), 1),
                            createVNode("p", { class: "text-xs mt-1" }, toDisplayString(new Date(message.date * 1e3).toLocaleDateString(
                              "ru-RU"
                            )) + " " + toDisplayString(new Date(message.date * 1e3).toLocaleTimeString(
                              "ru-RU"
                            )), 1),
                            message.attachments.length ? (openBlock(), createBlock("div", { key: 0 }, [
                              (openBlock(true), createBlock(Fragment, null, renderList(message.attachments, (attachment) => {
                                return openBlock(), createBlock("div", {
                                  key: attachment.id,
                                  class: "mt-2"
                                }, [
                                  createVNode("a", {
                                    href: attachment.photo.orig_photo.url,
                                    target: "_blank",
                                    rel: "noopener noreferrer"
                                  }, [
                                    createVNode(_component_NuxtImg, {
                                      src: attachment.photo.orig_photo.url,
                                      alt: attachment.type,
                                      class: "w-32 h-32 object-cover rounded-lg"
                                    }, null, 8, ["src", "alt"])
                                  ], 8, ["href"])
                                ]);
                              }), 128))
                            ])) : createCommentVNode("", true)
                          ], 2);
                        }), 128))
                      ])
                    ], 512)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UiCardFooter, { class: "h-full items-end" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UiTextarea, {
                    modelValue: unref(messageText),
                    "onUpdate:modelValue": ($event) => isRef(messageText) ? messageText.value = $event : null,
                    placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435...",
                    class: "w-full mr-2 resize-none"
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_UiButton, { onClick: sendMessage }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Send `);
                      } else {
                        return [
                          createTextVNode(" Send ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UiTextarea, {
                      modelValue: unref(messageText),
                      "onUpdate:modelValue": ($event) => isRef(messageText) ? messageText.value = $event : null,
                      placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435...",
                      class: "w-full mr-2 resize-none"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                    createVNode(_component_UiButton, { onClick: sendMessage }, {
                      default: withCtx(() => [
                        createTextVNode(" Send ")
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
              createVNode(_component_UiCardHeader, null, {
                default: withCtx(() => [
                  createVNode(_component_UiCardTitle, null, {
                    default: withCtx(() => {
                      var _a;
                      return [
                        createTextVNode(toDisplayString(((_a = unref(conversations).find((c) => c.peer_id === unref(selectedChat))) == null ? void 0 : _a.full_name) || "\u041F\u0435\u0440\u0435\u043F\u0438\u0441\u043A\u0430"), 1)
                      ];
                    }),
                    _: 1
                  }),
                  createVNode(_component_UiCardDescription)
                ]),
                _: 1
              }),
              createVNode(_component_UiCardContent, null, {
                default: withCtx(() => [
                  unref(loadingMessages) ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "flex-1 flex items-center justify-center text-gray-500"
                  }, " \u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0439... ")) : createCommentVNode("", true),
                  createVNode("div", {
                    ref: "messagesContainer",
                    class: "h-[calc(100vh-310px)] px-2 overflow-y-scroll"
                  }, [
                    createVNode("div", { class: "flex flex-col-reverse gap-4 mb-6" }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(unref(messages), (message) => {
                        var _a;
                        return openBlock(), createBlock("div", {
                          key: message.id,
                          class: [
                            message.from_id !== unref(selectedChat) ? "ml-auto bg-amber-400/70" : "bg-slate-400/80",
                            "p-3 rounded-lg max-w-xs bg-gray-200"
                          ]
                        }, [
                          createVNode("p", { class: "font-semibold text-gray-900" }, toDisplayString(message.from_id !== unref(selectedChat) ? message.payload.userName ? `\u0412\u044B(${message.payload.userName})` : "\u0412\u044B" : (_a = unref(conversations).find(
                            (c) => c.peer_id === unref(selectedChat)
                          )) == null ? void 0 : _a.full_name), 1),
                          createVNode("p", null, toDisplayString(message.text), 1),
                          createVNode("p", { class: "text-xs mt-1" }, toDisplayString(new Date(message.date * 1e3).toLocaleDateString(
                            "ru-RU"
                          )) + " " + toDisplayString(new Date(message.date * 1e3).toLocaleTimeString(
                            "ru-RU"
                          )), 1),
                          message.attachments.length ? (openBlock(), createBlock("div", { key: 0 }, [
                            (openBlock(true), createBlock(Fragment, null, renderList(message.attachments, (attachment) => {
                              return openBlock(), createBlock("div", {
                                key: attachment.id,
                                class: "mt-2"
                              }, [
                                createVNode("a", {
                                  href: attachment.photo.orig_photo.url,
                                  target: "_blank",
                                  rel: "noopener noreferrer"
                                }, [
                                  createVNode(_component_NuxtImg, {
                                    src: attachment.photo.orig_photo.url,
                                    alt: attachment.type,
                                    class: "w-32 h-32 object-cover rounded-lg"
                                  }, null, 8, ["src", "alt"])
                                ], 8, ["href"])
                              ]);
                            }), 128))
                          ])) : createCommentVNode("", true)
                        ], 2);
                      }), 128))
                    ])
                  ], 512)
                ]),
                _: 1
              }),
              createVNode(_component_UiCardFooter, { class: "h-full items-end" }, {
                default: withCtx(() => [
                  createVNode(_component_UiTextarea, {
                    modelValue: unref(messageText),
                    "onUpdate:modelValue": ($event) => isRef(messageText) ? messageText.value = $event : null,
                    placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435...",
                    class: "w-full mr-2 resize-none"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(_component_UiButton, { onClick: sendMessage }, {
                    default: withCtx(() => [
                      createTextVNode(" Send ")
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
      _push(`</div><div class="w-1/3 bg-white p-4"><h2>\u0418\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F \u043A\u043B\u0438\u0435\u043D\u0442\u0430</h2>`);
      _push(ssrRenderComponent(_component_MyOperationsCreateModal, null, null, _parent));
      _push(`</div></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/vk/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-c7pksJE7.mjs.map
