import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"ES6","description":"","frontmatter":{},"headers":[],"relativePath":"interview/es6.md","filePath":"interview/es6.md","lastUpdated":1768144561000}');
const _sfc_main = { name: "interview/es6.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="es6" tabindex="-1">ES6 <a class="header-anchor" href="#es6" aria-label="Permalink to “ES6”">​</a></h1><h2 id="var、let、const" tabindex="-1">var、let、const <a class="header-anchor" href="#var、let、const" aria-label="Permalink to “var、let、const”">​</a></h2><h3 id="var" tabindex="-1">var <a class="header-anchor" href="#var" aria-label="Permalink to “var”">​</a></h3><ul><li><strong>作用域</strong>：函数作用域，函数中声明为局部变量，函数外声明为全局变量，在全局作用域下会成为 window 的属性</li><li><strong>变量提升</strong>：存在变量提升，变量可以在声明之前调用，值为 <code>undefined</code></li><li><strong>重复声明</strong>：允许在同一作用域中重复声明变量</li><li><strong>可修改性</strong>：可以修改变量的值</li></ul><h3 id="let" tabindex="-1">let <a class="header-anchor" href="#let" aria-label="Permalink to “let”">​</a></h3><ul><li><strong>作用域</strong>：块级作用域，只在 <code>let</code> 命令所在的代码块内有效</li><li><strong>变量提升</strong>：不存在变量提升，必须先声明后使用</li><li><strong>暂时性死区</strong>：只要块级作用域内存在 <code>let</code> 命令，该变量就绑定这个区域，不再受外部影响</li><li><strong>重复声明</strong>：不允许在相同作用域中重复声明</li><li><strong>可修改性</strong>：可以修改变量的值</li></ul><h3 id="const" tabindex="-1">const <a class="header-anchor" href="#const" aria-label="Permalink to “const”">​</a></h3><ul><li><strong>作用域</strong>：块级作用域，只在 <code>const</code> 命令所在的代码块内有效</li><li><strong>变量提升</strong>：不存在变量提升，必须先声明后使用</li><li><strong>暂时性死区</strong>：同 <code>let</code>，存在暂时性死区</li><li><strong>必须初始化</strong>：声明时必须立即初始化</li><li><strong>重复声明</strong>：不允许在相同作用域中重复声明</li><li><strong>可修改性</strong>： <ul><li>声明一个只读的常量，一旦声明，常量的值就不能改变</li><li><strong>注意</strong>：<code>const</code> 实际保证的是<strong>变量指向的内存地址不可改动</strong><ul><li>对于<strong>基本类型</strong>（Number、String 等）：值保存在变量指向的内存地址中，等同于常量</li><li>对于<strong>引用类型</strong>（Object、Array 等）：变量指向的内存地址保存的是指针，<code>const</code> 只能保证指针固定，不能保证数据结构不变</li></ul></li></ul></li></ul><h3 id="三者区别总结" tabindex="-1">三者区别总结 <a class="header-anchor" href="#三者区别总结" aria-label="Permalink to “三者区别总结”">​</a></h3><table tabindex="0"><thead><tr><th>特性</th><th>var</th><th>let</th><th>const</th></tr></thead><tbody><tr><td>作用域</td><td>函数作用域</td><td>块级作用域</td><td>块级作用域</td></tr><tr><td>变量提升</td><td>存在</td><td>不可在声明前访问</td><td>不可在声明前访问</td></tr><tr><td>暂时性死区</td><td>不存在</td><td>存在</td><td>存在</td></tr><tr><td>重复声明</td><td>允许</td><td>不允许</td><td>不允许</td></tr><tr><td>可修改性</td><td>可修改</td><td>可修改</td><td>不可修改（引用类型可修改内部属性）</td></tr><tr><td>初始化要求</td><td>可选</td><td>可选</td><td>必须初始化</td></tr></tbody></table></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("interview/es6.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const es6 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  es6 as default
};
