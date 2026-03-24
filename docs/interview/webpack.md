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

## Loader 和 Plugin 的区别？编写它们的思路是什么？

它们的核心区别是：

- `Loader` 是**文件级别**的处理器，主要负责把某类文件转换成 Webpack 能识别的模块
- `Plugin` 是**流程级别**的扩展器，主要负责介入整个构建生命周期，完成更复杂的任务

### 区别

| 维度 | Loader（转换器） | Plugin（插件 / 扩展） |
| --- | --- | --- |
| 本质 | 一个导出为函数的 JavaScript 模块 | 一个带有 `apply` 方法的 Class 类或对象 |
| 职能 | 单一，专注于将非 JS / JSON 资源翻译成 Webpack 能识别的模块 | 更广，基于事件机制介入整个打包过程，执行各种自动化构建任务 |
| 运行时机 | 运行在模块解析和加载阶段，也就是打包具体文件时 | 贯穿 Webpack 的整个编译生命周期 |
| 操作对象 | 具体的文件内容，本质上是把一种内容转换成另一种内容 | 整个构建体系，通过 Webpack 提供的 Hook 改变构建过程或输出结果 |
| 配置位置 | `module.rules` | `plugins` |
| 解决问题 | 解决资源转换问题 | 解决构建流程扩展问题 |

### 编写 Loader 的思路

编写 Loader 的核心思路就是：**接收源文件内容，处理后再把结果返回出去。**

1. Loader 本质是一个函数，输入是源代码内容
2. 对内容进行转换，比如把 Less 转成 CSS，或者做字符串替换
3. 返回转换后的结果，交给下一个 Loader 或 Webpack 继续处理

### 编写 Plugin 的思路

编写 Plugin 的核心思路就是：**找到合适的生命周期钩子，在对应时机插入自己的逻辑。**

1. Plugin 一般是一个类
2. 需要实现 `apply` 方法
3. 在 `apply` 方法里拿到 `compiler`
4. 再通过 `compiler` 或 `compilation` 的钩子函数注册逻辑
5. 在合适的时机执行自己的功能，比如修改资源、输出日志、生成文件等

常见理解方式是：

- `compiler` 偏全局，贯穿整个构建过程
- `compilation` 偏单次构建结果，关注本次打包产物

## 热更新（HMR）是如何做到的？原理是什么？

### 核心原理

HMR（Hot Module Replacement）即**模块热替换**。

核心作用是：**在应用运行过程中，替换、添加或删除模块，而不需要刷新整个页面。**

最大的优势是可以保留当前页面状态，比如表单输入、页面滚动位置、组件局部状态等，所以开发体验会更好。

Webpack 的 HMR 可以概括为：

**服务端监听文件变化并重新编译，然后通过 WebSocket 通知客户端，客户端再去拉取补丁并替换模块。**

**一个长连接通知，两次补丁拉取，最后局部替换模块。**

### 具体流程

1. 启动开发服务

启动 `webpack-dev-server` 后，实际上会提供两类能力：

- HTTP 服务：负责返回打包后的静态资源
- WebSocket 服务：负责和浏览器建立长连接，用来通知更新

2. 监听文件变化

当我们修改源码并保存后，Webpack 会监听到文件变化，然后重新编译改动的模块。

3. 生成更新补丁

编译完成后，会生成本次热更新需要的补丁信息，主要包括：

- `manifest`：描述这次哪些模块或 chunk 发生了变化
- `update.js`：真正需要替换的增量模块代码

4. 服务端通知客户端

Webpack Dev Server 会通过 WebSocket 把最新的 `hash` 发送给浏览器。

5. 客户端拉取补丁

浏览器端的 HMR Runtime 收到通知后，会开始更新流程：

- 先根据最新 `hash` 请求 `manifest`
- 再根据 `manifest` 拉取对应的 `update.js`

6. 替换旧模块

HMR Runtime 拿到新的模块代码后，会把旧模块卸载，再把新模块替换进去。

如果这个模块支持热替换，就只更新当前模块及相关依赖，而不会刷新整个页面。

### 为什么 HMR 可以不刷新页面

因为它更新的不是整个网页，而是**发生变化的模块**。

也就是说，浏览器不会重新加载整个页面，而是只下载并执行改动后的那部分模块代码，所以页面状态通常可以保留下来。

### 总结

HMR 就是模块热替换。它的原理是 `webpack-dev-server` 会通过 WebSocket 和浏览器建立长连接，代码改动后服务端重新编译，并把新的 `hash` 通知给客户端。客户端再去请求 `manifest` 和 `update.js` 这些补丁文件，最后把变更的模块替换掉，而不是刷新整个页面，所以可以保留页面状态。
