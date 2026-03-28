import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{"layout":"home","hero":{"name":"Frontend Interview","text":"算法 · 手撕 · 八股文","tagline":"Talk is cheap. Show me the code.","image":{"src":"/logo.svg","alt":"Frontend Interview Logo"},"actions":[{"theme":"brand","text":"Get Started","link":"/dsa/"},{"theme":"alt","text":"Github","link":"https://github.com/1skyyks1/FE-Algorithm-Interview"}]},"features":[{"title":"DSA算法","details":"LeetCode经典 + 前端面试高频题","icon":"🧠","link":"/dsa"},{"title":"手撕","details":"深入源码，手写实现各类方法","icon":"✍️","link":"/impls"},{"title":"八股文","details":"JavaScript基础、计网、框架应有尽有","icon":"📖","link":"/interview"}]},"headers":[],"relativePath":"index.md","filePath":"index.md","lastUpdated":1766046323000}');
const _sfc_main = { name: "index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};
