# Webpack

## 对 webpack 的理解？解决了什么问题？

Webpack 是一个**静态模块打包工具**。

它会从入口文件出发，分析项目中的依赖关系，构建依赖图，然后把 JavaScript、CSS、图片、TypeScript、Vue 组件等资源都当作模块处理，最终打包成浏览器可运行的静态资源。

主要解决了：

- 统一管理模块和依赖关系
- 让浏览器不能直接识别的资源也能参与构建，比如 TS、Less、Vue SFC
- 提供开发服务器和 HMR，提升开发体验
- 支持压缩、Tree Shaking、代码分割等优化能力

总结：

**Webpack 本质上就是一个模块打包器，核心思想是“万物皆可模块”。**

## 构建流程

Webpack 的构建流程可以概括为：

**读取配置 -> 找到入口 -> 解析依赖 -> 调用 Loader 转换模块 -> 组装 Chunk -> 输出 Bundle**

1. 读取配置文件和命令行参数，得到最终配置
2. 创建 `Compiler` 对象，开始构建流程
3. 根据 `entry` 找到入口文件
4. 从入口出发，调用 Loader 处理不同类型的文件
5. 解析源码，收集 `import` / `require` 依赖
6. 递归处理依赖模块，形成完整依赖图
7. 根据依赖关系组装成 `Chunk`，再输出成最终的 `Bundle`

总结：

**Webpack 就是从入口出发，递归分析依赖，处理模块，最后打包输出。**

## Loader

Loader 本质上是一个**转换器**，用来把某种资源转换成 Webpack 能处理的模块。

因为 Webpack 默认只能直接处理 JavaScript 和 JSON，所以像 CSS、Less、TypeScript、Vue 文件这些资源，都需要借助 Loader。

常见 Loader 有：

- `babel-loader`：把 ES6+ 转成兼容性更好的 JavaScript
- `ts-loader`：把 TypeScript 转成 JavaScript
- `css-loader`：解析 CSS 中的 `@import` 和 `url()`
- `style-loader`：把 CSS 通过 `<style>` 标签插入页面
- `less-loader` / `sass-loader`：把 Less / Sass 转成 CSS
- `postcss-loader`：做 CSS 兼容性处理，比如自动补前缀
- `vue-loader`：处理 `.vue` 单文件组件

解决的问题是：

- 让非 JS 资源也能被 Webpack 识别和打包
- 让高级语法和工程化语法最终都能转成浏览器可运行的代码

**多个 Loader 的执行顺序是从右到左、从下到上。**

## Plugin

Plugin 是对 Webpack **整个构建生命周期**的扩展。

如果说 Loader 负责“翻译文件”，那 Plugin 负责“扩展流程”。

常见 Plugin 有：

- `html-webpack-plugin`：自动生成 HTML，并注入打包后的资源
- `clean-webpack-plugin`：打包前清理输出目录
- `mini-css-extract-plugin`：把 CSS 提取成独立文件
- `DefinePlugin`：注入全局常量或环境变量
- `terser-webpack-plugin`：压缩 JavaScript
- `css-minimizer-webpack-plugin`：压缩 CSS
- `compression-webpack-plugin`：生成 gzip 等压缩资源

解决的问题是：

- 自动化处理构建过程中的通用任务
- 提升打包结果质量，比如压缩、提取、注入、清理
- 让 Webpack 具备更强的扩展能力和工程化能力

总结：

**Loader 解决资源转换问题，Plugin 解决构建流程扩展问题。**
