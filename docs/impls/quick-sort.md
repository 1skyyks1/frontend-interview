# 快速排序

> 选择一个基准元素，将数组分为小于和大于基准的两部分，递归排序。

## 思路

- 选择数组第一个元素作为基准 `num`
- 遍历剩余元素，分为两个数组：
  - `left`：小于等于基准的元素
  - `right`：大于基准的元素
- 递归排序 `left` 和 `right`
- 合并结果：`[...quickSort(left), num, ...quickSort(right)]`

## 代码

<<< @/code/impls/quick-sort.js

## 复杂度

- 时间复杂度：平均 $O(n \log n)$，最坏 $O(n^2)$
- 空间复杂度：$O(\log n)$ 递归栈空间
- 稳定性：不稳定
