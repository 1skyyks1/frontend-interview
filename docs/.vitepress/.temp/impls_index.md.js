import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"手撕实现总览","description":"","frontmatter":{},"headers":[],"relativePath":"impls/index.md","filePath":"impls/index.md","lastUpdated":1765962959000}');
const _sfc_main = { name: "impls/index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="手撕实现总览" tabindex="-1">手撕实现总览 <a class="header-anchor" href="#手撕实现总览" aria-label="Permalink to “手撕实现总览”">​</a></h1><blockquote><p>手写常见 JavaScript 基础实现</p></blockquote><ul><li><a href="/frontend-interview/impls/promise-all">Promise.all 实现</a></li><li><a href="/frontend-interview/impls/throttle">throttle 节流</a></li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("impls/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};
