import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"前端八股文","description":"","frontmatter":{},"headers":[],"relativePath":"interview/index.md","filePath":"interview/index.md","lastUpdated":1766046323000}');
const _sfc_main = { name: "interview/index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="前端八股文" tabindex="-1">前端八股文 <a class="header-anchor" href="#前端八股文" aria-label="Permalink to “前端八股文”">​</a></h1><blockquote><p>JS · ES6 · CSS · Vue · Network · Webpack</p></blockquote><h2 id="导航" tabindex="-1">导航 <a class="header-anchor" href="#导航" aria-label="Permalink to “导航”">​</a></h2><ul><li><a href="./js">JavaScript</a></li><li><a href="./es6">ES6</a></li><li><a href="./css">CSS</a></li><li><a href="./vue">Vue</a></li><li><a href="./network">计网 / 网络</a></li><li><a href="./webpack">Webpack</a></li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("interview/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};
