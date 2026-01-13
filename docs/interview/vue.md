# Vue

## 首屏优化

浏览器从响应用户输入网址地址，到首屏内容渲染完成的时间，此时整个网页不一定要全部渲染完成，但需要展示当前视窗需要的内容。

### 优化策略

1. **减少资源数量、压缩资源**：减少网络请求次数和文件大小，加快页面加载速度。例如压缩图片大小，使用 Gzip 压缩 HTML、JS、CSS，合并 CSS、JS 来减少资源数量。

2. **路由懒加载**：首屏仅加载必要组件，非核心路由延迟加载。

3. **按需引用 UI 框架**：只加载当前页面实际需要的组件和样式。


## SPA

指的是整个应用只有一个 HTML 页面，页面在首次加载后不会再整体刷新，而是通过 JavaScript 动态更新页面内容来完成交互。

**在 SPA 中：**

- 页面结构（HTML）、样式（CSS）、逻辑（JS）通常只加载一次
- 页面切换本质上是组件的切换或内容的更新
- URL 的变化不会触发浏览器重新加载页面

**MPA（多页面应用）**指的是每个页面都是一个独立的 HTML 页面，页面跳转时会重新向服务器请求新的 HTML、CSS、JS 资源。

### SPA vs MPA

| 对比项 | 单页面应用（SPA） | 多页面应用（MPA） |
| --- | --- | --- |
| 页面组成 | 一个主页面 + 多个页面片段 | 多个独立主页面 |
| 页面刷新 | 局部刷新 | 整页刷新 |
| URL 模式 | Hash / History | 普通 URL |
| 页面切换 | 快，体验好 | 慢，需要重新加载 |
| SEO | 不友好（可用 SSR 改善） | 天然友好 |
| 数据传递 | 状态管理方便 | 依赖 URL / Cookie / Storage |
| 维护成本 | 相对低 | 相对高 |

### SPA 的优缺点

**优点：**

- **用户体验好**：页面切换快，不需要整页刷新，接近桌面应用的使用体验

- **前后端分离清晰**：前端负责视图和交互，后端负责提供 API 数据

- **开发和维护效率高**：组件化开发，复用性强；状态统一管理，逻辑清晰

**缺点：**

- **不利于 SEO**：搜索引擎难以抓取 JS 动态渲染内容，通常需要 SSR（服务端渲染）或预渲染解决

- **首次加载较慢**：首屏需要加载较多 JS 资源，需要通过代码分割、懒加载等方式优化

## v-show & v-if

两者都能控制元素在页面是否显示，区别如下：

| 对比项 | v-show | v-if |
| --- | --- | --- |
| 控制手段 | 通过 CSS `display: none` 隐藏，DOM 元素始终存在 | 直接添加或删除 DOM 元素 |
| 编译过程 | 简单的 CSS 切换 | 局部编译/卸载，切换时销毁和重建事件监听及子组件 |
| 初始渲染 | 无论条件真假都会渲染 | 条件为假时不渲染，直到为真才渲染 |
| 切换开销 | 低（仅 CSS 变化） | 高（涉及 DOM 操作和组件生命周期） |

**使用场景**：

- **v-show**：适用于需要频繁切换显示状态的场景
- **v-if**：适用于条件不常变化、或初始条件为假可延迟渲染的场景

## Vue 实例创建

```js
function Vue (options) {
  if (process.env.NODE_ENV !== 'production' &&
    !(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword')
  }
  this._init(options)
}
```

`new Vue()` 时会调用 `_init` 方法，_init 初始化生命周期、事件、响应式数据（props / data / computed / watch），触发 beforeCreate、created

> [!IMPORTANT]
> 此时 DOM 尚未生成

### Vue2 响应式原理

遍历 data 中的属性，用 Object.defineProperty 将其转换为 getter/setter。getter 收集依赖，setter 派发更新。

每个组件实例都对应一个 watcher，
在组件渲染过程中会访问响应式数据，从而将 watcher 收集为依赖。
当数据发生变化时，setter 会通知对应的 watcher 重新计算，
最终触发组件重新渲染。

### Vue3 响应式原理

Vue 3 不再用 Object.defineProperty，而是使用 Proxy 代理对象，
通过拦截 get / set 操作来实现依赖收集和触发更新。

| Vue 2                 | Vue 3               |
| --------------------- | ------------------- |
| Object.defineProperty | Proxy               |
| Dep                   | WeakMap / Map / Set |
| watcher               | ReactiveEffect      |
| getter / setter       | track / trigger     |


## Vue 实例挂载

调用 `$mount(el)` 开始挂载，`$mount` 内部调用 `mountComponent(vm, el)`
通过 mountComponent 创建一个渲染 watcher，
watcher 首次执行时调用 render 生成虚拟 DOM，
再通过 _update 转换为真实 DOM 并插入页面，
触发 beforeMount / mounted 生命周期

## 生命周期

在Vue中实例从创建到销毁的过程就是生命周期，即指从创建、初始化数据、编译模板、挂载Dom→渲染、更新→渲染、卸载等一系列过程

### Vue2

| 生命周期          | 描述                              |
| ------------- | ------------------------------- |
| beforeCreate  | 执行时组件实例还未创建，通常用于插件开发中执行一些初始化任务  |
| created       | 组件初始化完毕，各种数据可以使用，常用于异步数据获取      |
| beforeMount   | 未执行渲染、更新，DOM 未创建                |
| mounted       | 初始化结束，DOM 已创建，可用于获取访问数据和 DOM 元素 |
| beforeUpdate  | 更新前，可用于获取更新前各种状态                |
| updated       | 更新后，所有状态已是最新                    |
| beforeDestroy | 销毁前，可用于一些定时器或订阅的取消              |
| destroyed     | 组件已销毁，作用同上                      |

### Vue3
| 生命周期            | 描述                                                        |
| --------------- | --------------------------------------------------------- |
| setup           | 最早执行，等价于 Vue 2 的 beforeCreate + created，用于初始化数据、逻辑处理、请求数据 |
| onBeforeMount   | 组件挂载前，DOM 未创建                                             |
| onMounted       | 组件挂载完成，DOM 已创建，可操作 DOM、请求依赖 DOM 的数据                       |
| onBeforeUpdate  | 组件更新前，可获取更新前状态                                            |
| onUpdated       | 组件更新完成，状态与 DOM 均为最新                                       |
| onBeforeUnmount | 组件卸载前，用于清除定时器、事件监听、订阅等                                    |
| onUnmounted     | 组件卸载完成，组件已被销毁                                             |

### Vue2 vs Vue3
| 阶段         | Vue 2         | Vue 3 | 变化点      |
| ---------- | ------------- | ---------------------- | -------- |
| 初始化        | beforeCreate  | ❌                      | 合并进 setup |
| 初始化        | created       | ❌                      | 合并进 setup |
| 挂载前        | beforeMount   | onBeforeMount          | 名字变      |
| 挂载完成       | mounted       | onMounted              | 用法变      |
| 更新前        | beforeUpdate  | onBeforeUpdate         | 名字变      |
| 更新完成       | updated       | onUpdated              | 用法变      |
| 销毁前        | beforeDestroy | onBeforeUnmount        | **改名**   |
| 销毁后        | destroyed     | onUnmounted            | **改名**   |
| keep-alive | activated     | onActivated            | 变成函数     |
| keep-alive | deactivated   | onDeactivated          | 变成函数     |

## 数据请求在 created 和 mounted 的区别

- **created**：DOM 尚未生成，适合发起不依赖 DOM 的请求
- **mounted**：DOM 已渲染完成，适合依赖 DOM 或第三方库初始化的请求

> [!TIP]
> DOM 已渲染但数据异步填充可能导致页面闪动，需注意用户体验。

## v-if & v-for

- **v-if**：条件性渲染，表达式为 `true` 时才渲染
- **v-for**：基于数组/对象渲染列表，语法为 `item in items`

> [!IMPORTANT]
> 使用 `v-for` 时建议设置唯一的 `key` 值，便于 diff 算法优化。

### 优先级问题

**Vue 2 中 `v-for` 优先级高于 `v-if`**，同时使用会导致性能浪费（每次渲染先循环再判断条件）。

**解决方案**：

1. **条件在循环外部**：用 `<template>` 包裹，在外层进行 `v-if` 判断

```vue
<template v-if="shouldShow">
  <div v-for="item in items" :key="item.id">{{ item.name }}</div>
</template>
```

2. **条件在循环内部**：使用 `computed` 提前过滤数据

```js
computed: {
  filteredItems() {
    return this.items.filter(item => item.isActive)
  }
}
```

## slot

slot 又名插槽，用于组件内容分发。

### 默认插槽
- 匿名插槽，父组件内容填充子组件默认位置
- 一个组件只能有一个匿名插槽

```vue
<!-- 子组件 -->
<template>
  <div>
    <slot></slot>
  </div>
</template>

<!-- 父组件 -->
<Card>
  <p>这是插槽内容</p>
</Card>

<!-- 输出 -->
<div class="card">
  <p>这是插槽内容</p>
</div>
```

### 具名插槽
- 子组件提供多个插槽，父组件用 name 指定
- 一个组件可以出现多个具名插槽

```vue
<!-- 子组件 -->
<template>
  <div>
    <slot name="header"></slot>
    <slot></slot>
    <slot name="footer"></slot>
  </div>
</template>

<!-- 父组件 -->
<Card>
  <template #header>
    <p>这是插槽内容</p>
  </template>
  <p>这是插槽内容</p>
  <template #footer>
    <p>这是插槽内容</p>
  </template>
</Card>
```

### 作用域插槽
- 父组件可以访问子组件内部的数据，由父组件决定渲染内容
- 可以是默认插槽或具名插槽

```vue
<!-- 子组件 -->
<template>
  <div>
    <slot :user="user"></slot>
  </div>
</template>

<!-- 父组件 -->
<Card>
  <template #default="slotProps">
    <p>{{ slotProps.user.name }}</p>
  </template>
</Card>
```

### 实现原理

1. **编译阶段**：`<slot>` 被编译为占位符节点存入虚拟 DOM
2. **父组件处理**：父组件传入的内容被编译为 VNodes
3. **渲染阶段**：渲染时用父组件的 VNodes 替换子组件的 `<slot>` 占位符
4. **作用域插槽**：子组件通过 props 向父组件暴露数据，父组件决定如何渲染

### Vue2 vs Vue3 语法对比

| 特性 | Vue 2 | Vue 3 |
| --- | --- | --- |
| 默认插槽 | `<slot></slot>` | `<slot></slot>` |
| 具名插槽（子） | `<slot name="header">` | `<slot name="header">` |
| 具名插槽（父） | `<template slot="header">` | `<template #header>` |
| 作用域插槽 | `<template slot-scope="props">` | `<template #default="{ props }">` |