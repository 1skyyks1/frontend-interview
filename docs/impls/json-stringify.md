# 实现 JSON.stringify

> 功能：将 JavaScript 值转换为 JSON 字符串。

## 思路

- 根据值的类型进行不同的处理：
  - **基本类型**（`number`、`boolean`、`null`）：直接转换为字符串
  - **字符串**：添加双引号包裹
  - **数组**：递归处理每个元素，用方括号和逗号拼接
  - **对象**：遍历所有可枚举属性，递归处理值，用花括号和逗号拼接
- 特殊处理：
  - 使用 `hasOwnProperty` 检查属性是否为对象自身属性
  - 跳过值为 `undefined` 的属性（符合 JSON 规范）
- 递归调用 `jsonStringify` 处理嵌套结构

## 代码

<<< @/code/impls/json-stringify.js
