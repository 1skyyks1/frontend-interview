# 34. 在排序数组中查找元素的第一个和最后一个位置

> 题目链接：<https://leetcode.cn/problems/find-first-and-last-position-of-element-in-sorted-array/>

## 代码

<<< @/code/dsa/leetcode/34-find-first-and-last-position-of-element-in-sorted-array.ts

## 思路

### 二分查找

本题要求在有序数组中查找目标值的起始和结束位置，时间复杂度要求 $O(\log n)$，因此使用二分查找。

核心思路是利用 `lowerBound` 函数两次：

1. **查找起始位置**：使用 `lowerBound(nums, target)` 找到第一个 `>= target` 的位置
   - 如果该位置不存在或值不等于 target，说明数组中没有 target，返回 `[-1, -1]`

2. **查找结束位置**：使用 `lowerBound(nums, target + 1) - 1` 找到最后一个等于 target 的位置
   - `lowerBound(nums, target + 1)` 返回第一个 `> target` 的位置，减 1 即为最后一个等于 target 的位置

**lowerBound 函数**：返回最小的满足 `nums[i] >= target` 的下标 i

- 使用开区间 `(left, right)` 进行二分查找
- 循环不变量：`nums[left] < target` 且 `nums[right] >= target`
- 当 `left + 1 = right` 时循环结束，此时 `right` 即为答案

- 时间复杂度 $O(\log n)$
- 空间复杂度 $O(1)$
