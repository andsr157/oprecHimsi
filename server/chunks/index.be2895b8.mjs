import { defineComponent, ref, createElementBlock, useSSRContext, mergeProps, unref } from 'vue';
import { ssrRenderAttrs, ssrRenderClass, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
import 'ofetch';
import 'hookable';
import 'unctx';
import 'ufo';
import 'h3';
import '@unhead/vue';
import '@unhead/dom';
import 'vue-router';
import 'defu';
import './node-server.mjs';
import 'node-fetch-native/polyfill';
import 'http';
import 'https';
import 'destr';
import 'unenv/runtime/fetch/index';
import 'scule';
import 'ohash';
import 'unstorage';
import 'radix3';
import 'node:fs';
import 'node:url';
import 'pathe';

const __nuxt_component_0$1 = defineComponent({
  name: "ClientOnly",
  inheritAttrs: false,
  props: ["fallback", "placeholder", "placeholderTag", "fallbackTag"],
  setup(_, { slots, attrs }) {
    const mounted = ref(false);
    return (props) => {
      var _a;
      if (mounted.value) {
        return (_a = slots.default) == null ? void 0 : _a.call(slots);
      }
      const slot = slots.fallback || slots.placeholder;
      if (slot) {
        return slot();
      }
      const fallbackStr = props.fallback || props.placeholder || "";
      const fallbackTag = props.fallbackTag || props.placeholderTag || "span";
      return createElementBlock(fallbackTag, attrs, fallbackStr);
    };
  }
});
const _sfc_main$2 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  const _component_ClientOnly = __nuxt_component_0$1;
  _push(`<section${ssrRenderAttrs(_attrs)}><div class="fixed z-50 w-full p-7"><div class="flex justify-between font-[Satoshi-Medium] text-lg md:text-xl text-gray-100 cursor-default"><h1> HIMSI SURAKARTA <br> 2024/2025 </h1><h1>....</h1></div></div>`);
  _push(ssrRenderComponent(_component_ClientOnly, null, null, _parent));
  _push(`</section>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/Hero.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Content",
  __ssrInlineRender: true,
  setup(__props) {
    const reverse = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "px-7 h-[500px] md:h-80" }, _attrs))}><div class="flex gap-4 font-[Satoshi-Variable] font-medium text-sm"><a href="https://bit.ly/HIMSI2024" target="_blank"><button class="${ssrRenderClass([unref(reverse) ? "bg-transparent text-white border border-white" : "bg-white text-black", "rounded-md py-2 px-[10px] transition-colors duration-300"])}"> Link Pendaftaran </button></a><a href="https://bit.ly/DivisiHIMSI" target="_blank"><button class="${ssrRenderClass([unref(reverse) ? "bg-white  text-black" : "bg-transparent border border-white  text-white", "rounded-md py-2 px-[10px] transition-colors duration-300"])}"> Link Detail Divisi </button></a></div><div><h1 class="leading-snug text-white font-[Satoshi-Variable] font-medium mt-6 text-3xl md:text-[40px]"> Ignite possibilities in innovation and tech! Empower your journey with the Information Systems student association. Your contributions fuel our evolution. Inspire success in the world of information systems! </h1></div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/Content.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_SectionsHero = __nuxt_component_0;
  const _component_SectionsContent = _sfc_main$1;
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_SectionsHero, null, null, _parent));
  _push(ssrRenderComponent(_component_SectionsContent, null, null, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { index as default };
//# sourceMappingURL=index.be2895b8.mjs.map
