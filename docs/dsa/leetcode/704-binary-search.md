# 704. 二分查找

> 题目链接：<https://leetcode.cn/problems/binary-search/>

## 代码

<<< @/code/dsa/leetcode/704-binary-search.ts

## 思路

### 二分查找（开区间）

标准的二分查找问题，在有序数组中查找目标值。

使用开区间 `(left, right)` 进行二分查找：

- 初始化 `left = -1, right = nums.length`，表示开区间 `(-1, nums.length)`
- 循环条件：`left + 1 < right`，即区间不为空
- 循环不变量：`nums[left] < target` 且 `nums[right] >= target`
- 当 `nums[mid] < target` 时，目标在右半部分，更新 `left = mid`
- 否则目标在左半部分（包括 mid），更新 `right = mid`
- 循环结束时 `left + 1 = right`，此时 `right` 指向第一个 `>= target` 的位置
- 检查 `nums[right]` 是否等于 `target`，相等则返回 `right`，否则返回 `-1`

- 时间复杂度 $O(\log n)$
- 空间复杂度 $O(1)$
