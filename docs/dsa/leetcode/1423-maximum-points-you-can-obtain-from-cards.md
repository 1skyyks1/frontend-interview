# 1423. 可获得的最大点数

> 题目链接：<https://leetcode.cn/problems/maximum-points-you-can-obtain-from-cards/>

## 代码

<<< @/code/dsa/leetcode/1423-maximum-points-you-can-obtain-from-cards.ts

## 思路

- 总共要拿 `k` 张牌，只能从两端拿，相当于从中间保留一段长度为 `n - k` 的连续子数组，使得这一段的和最小。
- 先计算数组总和，然后用滑动窗口求长度为 `n - k` 的最小子数组和。
- 结果为：总和减去这段最小子数组和。
- 时间复杂度 $O(n)$，空间复杂度 $O(1)$。
