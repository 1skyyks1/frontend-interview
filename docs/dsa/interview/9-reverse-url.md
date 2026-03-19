# 9. URL 反转

> 来源：字节一面

## 题目

实现一个函数，将 URL 按照点号分隔后反转。

例如：`www.baidu.com` -> `com.baidu.www`

## 代码

<<< @/code/dsa/interview/9-reverse-url.js

## 思路

### 方法一：使用数组方法

最直接的方法是使用 JavaScript 的数组方法：

1. 使用 `split('.')` 将字符串按点号分割成数组
2. 使用 `reverse()` 反转数组
3. 使用 `join('.')` 将数组重新拼接成字符串

### 方法二：双指针原地反转

不使用 `reverse()` 方法，通过双指针实现原地反转：

1. 先将整个字符串反转：`www.baidu.com` -> `moc.udiab.www`
2. 再对每个点号之间的单词进行反转：`moc.udiab.www` -> `com.baidu.www`

### 关键点

- 方法一简洁易懂，适合实际开发
- 方法二展示了双指针和字符串处理的技巧，适合面试场景
- 时间复杂度都是 $O(n)$，空间复杂度 $O(n)$
