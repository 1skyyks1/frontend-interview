# 35. 搜索插入位置

> 题目链接：<https://leetcode.cn/problems/search-insert-position/>

## 代码

<<< @/code/dsa/leetcode/35-search-insert-position.ts

## 思路

### 二分查找（开区间）

本题要求在有序数组中找到目标值的插入位置，使用二分查找可以达到 $O(\log n)$ 的时间复杂度。

使用开区间 `(left, right)` 进行二分查找：

- 初始化 `left = -1, right = nums.length`，表示开区间 `(-1, nums.length)`
- 循环条件：`left + 1 < right`，即区间不为空
- 循环不变量：`nums[left] < target` 且 `nums[right] >= target`
- 当 `nums[mid] < target` 时，说明插入位置在右半部分，更新 `left = mid`
- 否则插入位置在左半部分（包括 mid），更新 `right = mid`
- 循环结束时 `left + 1 = right`，此时 `right` 即为插入位置

这个算法本质上是 `lowerBound`，返回第一个 `>= target` 的位置。

- 时间复杂度 $O(\log n)$
- 空间复杂度 $O(1)$
